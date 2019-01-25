const fs = require("fs");
const browserify = require("browserify");
const watchify = require("watchify");
const hmr = require("browserify-hmr");
const externalLibs = require("../ExternalLibs.js");
const _ = require("lodash");
var path = require("path");
var fse = require("fs-extra");

var bLibs = browserify({
  cache: {},
  debug: true,
  packageCache: {}
});

bLibs
  .require(externalLibs)
  .transform("browserify-css", {
    minify: true,
    output: "dist/libs.css"
  })
  .bundle()
  .pipe(fs.createWriteStream("dist/libs.js"));

var b = browserify({
  entries: ["src/main.js"],
  cache: {},
  debug: true,
  packageCache: {},
  plugin: [watchify, hmr]
}).external(externalLibs);

b.on("update", bundle);
bundle();

function bundle() {
  console.log("bundle");
  let output = fs.createWriteStream("dist/build.js");
  b.transform("browserify-css", {
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
    .pipe(output);
  output.on("finish", function() {
    console.log("build done.");
  });
}
