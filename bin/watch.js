const fs = require("fs");
const browserify = require("browserify");
const watchify = require("watchify");
const hmr = require("browserify-hmr");
const externalLibs = require("../ExternalLibs.js");

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
  b
    .transform("browserify-css", {
      minify: true,
      output: "dist/build.css"
    })
    .bundle()
    .pipe(output);
  output.on("finish", function() {
    console.log("build done.");
  });
}
