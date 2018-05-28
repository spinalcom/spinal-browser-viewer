const fs = require("fs");
const browserify = require("browserify");
// const envify = require("envify/custom");
const externalLibs = require("../ExternalLibs");

var b = browserify({
  debug: true,
  entries: ["./src/main.js"],
  cache: {},
  packageCache: {}
  // basedir: "./src"
});
externalLibs.forEach(element => {
  if (typeof element === "string") {
    b.external(element);
  } else b.external(element.name);
});

b
  .transform("browserify-css", {
    minify: true,
    output: "dist/build.css"
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
    minify: true,
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
