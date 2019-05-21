#!/usr/bin/env node

/**
 * Copyright 2015 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

var fs = require("fs");
var path = require("path");
var program = require("commander");
var package_path, node_modules_path, rootPath, b, notifier;
var browserify = require("browserify");
var exorcist = require("exorcist");

// const envify = require("envify/custom");
const externalLibs = [
  "vue",
  "vue-material",
  "vue-chartjs",
  "q",
  "spinal-core-connectorjs",
  "axios",
  "v-tooltip",
  "spinal-env-viewer-graph-service"
];

program
  .version("1.0.0")
  .option("-w, --watcher", "Add watcher")
  .option("-n, --notify", "add notifer.")
  .option("-m, --module", "Set if the CWD is in the module.")
  .parse(process.argv);

if (program.notify) {
  notifier = require("node-notifier");
}
if (program.module) {
  package_path = path.resolve("./package.json");
  rootPath = path.resolve("../..");
  node_modules_path = path.resolve("..");
} else {
  node_modules_path = path.resolve("./node_modules");
  rootPath = path.resolve(".");
}

var browserName = "viewer";
var browserPath = path.resolve(rootPath + "/.browser_organs");

var libFolderPath = path.resolve(browserPath + "/lib");
var libPath = path.resolve(
  libFolderPath + "/spinal-lib-" + browserName + "-env.js"
);

var configFolderPath = path.resolve(rootPath + "/.config_env");
var configPath = path.resolve(configFolderPath + "/" + browserName + ".json");

function main() {
  create_folder_if_not_exit(browserPath);
  create_folder_if_not_exit(libFolderPath);
  create_folder_if_not_exit(configFolderPath);

  var config = getConfig();
  if (program.module) {
    var dependencies = getOwnPlugins();
    config = mergePlugins(config, dependencies);
    save_config(config);
  }
  compile_lib(config);
}

function create_folder_if_not_exit(params) {
  if (!fs.existsSync(params)) {
    fs.mkdirSync(params);
  }
}

function getConfig() {
  if (fs.existsSync(configPath) === false) {
    return {};
  }
  try {
    var _config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    return _config;
  } catch (error) {
    throw new Error(`Error in file ${configPath}`, error);
  }
}

function getOwnPlugins() {
  if (fs.existsSync(package_path) === true) {
    var reg = /spinal-env-[-_\w]*/;
    var res = {};
    var _package = JSON.parse(fs.readFileSync(package_path, "utf8"));
    var dependencies = _package.dependencies;
    for (var key in dependencies) {
      if (dependencies.hasOwnProperty(key) && reg.test(key)) {
        res[key] = dependencies[key];
      }
    }
    return res;
  }
  return {};
}

function mergePlugins(config, dependencies) {
  for (var key in dependencies) {
    if (dependencies.hasOwnProperty(key)) {
      var node_modules_folder_package = path.resolve(
        node_modules_path + "/" + key
      );
      var relatif_node_modules_folder_package = path.relative(
        rootPath,
        node_modules_folder_package
      );
      config[key] = relatif_node_modules_folder_package;
    }
  }
  return config;
}

function save_config(config) {
  var content = JSON.stringify(config, null, 2);
  fs.writeFile(
    configPath,
    content, {
      flag: "w"
    },
    function(err) {
      if (err) return err;
      console.log("config " + browserName + " done.");
    }
  );
}

function compile_lib(config) {
  let input = [];
  for (var key in config) {
    if (config.hasOwnProperty(key)) {
      const packagePath = path.resolve(config[key] + "/package.json");

      if (fs.existsSync(packagePath) === false) {
        let pack = require(path.resolve(
          node_modules_path + "/" + key + "/package.json"
        ));
        input.push(
          path.resolve(node_modules_path + "/" + key + "/" + pack.main)
        );
      } else {
        try {
          let pack = require(packagePath);
          input.push(path.resolve(config[key] + "/" + pack.main));
        } catch (e) {
          let pack = require(path.resolve(
            node_modules_path + "/" + key + "/package.json"
          ));
          input.push(
            path.resolve(node_modules_path + "/" + key + "/" + pack.main)
          );
        }
      }
    }
  }

  if (program.watcher) {
    console.log(input);
    const watchify = require("watchify");
    const hmr = require("browserify-hmr");
    b = browserify({
      cache: {},
      packageCache: {},
      debug: true,
      plugin: [watchify, hmr]
    });
    b = b.add(input).on("update", deferBundle);
  } else {
    b = browserify({
      entries: input,
      debug: true,
      plugin: []
    });
  }
  deferBundle();
}

var defer = null;

function deferBundle() {
  if (defer !== null) return defer;
  defer = bundle().then(() => {
    defer = null;
  });
  return defer;
}

function bundle() {
  return new Promise(resolve => {
    if (program.watcher) {
      console.log("start bundle");
    }
    let output = fs.createWriteStream(libPath);
    b.external(externalLibs)
      // .transform(
      //   {
      //     global: true
      //   },
      //   envify({
      //     NODE_ENV: "production"
      //   })
      // )
      .transform("babelify", {
        global: true,
        presets: ["es2015"]
      })
      .transform("uglifyify", {
        global: true,
        mangle: {
          keep_fnames: true
        }
      })
      .bundle()
      .on("error", function(e) {
        console.error(e);
      })
      .pipe(exorcist(libPath + ".map"))
      .pipe(output);

    if (program.watcher) {
      output.on("finish", function() {
        let msg = "compile DONE in " + libPath;
        resolve();
        console.log(msg);
        if (program.notify) {
          notifier.notify(msg);
        }
      });
    } else {
      resolve();
    }
  });
}

main();
