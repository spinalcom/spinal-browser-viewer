const fs = require("fs");
const browserify = require("browserify");
const _ = require("lodash");
const externalLibs = require("../ExternalLibs");
var path = require("path");
var fse = require("fs-extra");

var b = browserify({
  debug: true,
  cache: {},
  packageCache: {}
});
externalLibs.forEach(element => {
  if (typeof element === "string") {
    b.external(element);
  } else b.external(element.name);
});
b.add("./src/main.js")
  .transform("browserify-css", {
    output: "dist/build.css",
    global: true,
    processRelativeUrl: function(relativeUrl) {
      var vendorPath, source, target;
      var stripQueryStringAndHashFromPath = function(url) {
        return url.split("?")[0].split("#")[0];
      };
      var rootDir = path.resolve(process.cwd());
      var relativePath = stripQueryStringAndHashFromPath(relativeUrl);
      var queryStringAndHash = relativeUrl.substring(relativePath.length);
      var prefix = "../node_modules/";
      if (_.startsWith(relativePath, prefix)) {
        vendorPath = "vendor/" + relativePath.substring(prefix.length);
        source = path.join(rootDir, relativePath);
        target = path.join(rootDir, vendorPath);

        fse.copySync(source, target);
        return vendorPath + queryStringAndHash;
      }
      prefix = "node_modules/";
      if (_.startsWith(relativePath, prefix)) {
        vendorPath = "dist/vendor/" + relativePath.substring(prefix.length);
        source = path.join(rootDir, relativePath);
        target = path.join(rootDir, vendorPath);
        fse.copySync(source, target);
        vendorPath = "vendor/" + relativePath.substring(prefix.length);
        const vendor = vendorPath + queryStringAndHash;
        return vendor;
      }

      return relativeUrl;
    }
  })
  .bundle()
  .pipe(fs.createWriteStream("dist/build.js"));
// }

var bLibs = browserify({
  debug: true,
  cache: {},
  packageCache: {}
});
externalLibs.forEach(element => {
  if (typeof element === "string") {
    bLibs.require(element);
  } else
    bLibs.require(element.name, {
      expose: element.expose
    });
});

bLibs
  .transform("browserify-css", {
    global: true,
    output: "dist/libs.css"
  })
  // .transform(
  //   {
  //     global: true
  //   },
  //   envify({
  //     NODE_ENV: "production"
  //   })
  // )
  .bundle()
  .pipe(fs.createWriteStream("./dist/libs.js"));
// }
