// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fq0jd":[function(require,module,exports,__globalThis) {
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allDay", ()=>o);
parcelHelpers.export(exports, "createEvent", ()=>v);
parcelHelpers.export(exports, "dateFormat", ()=>M);
parcelHelpers.export(exports, "day", ()=>d);
parcelHelpers.export(exports, "default", ()=>u);
parcelHelpers.export(exports, "deleteEvent", ()=>y);
parcelHelpers.export(exports, "month", ()=>t);
parcelHelpers.export(exports, "months", ()=>e);
parcelHelpers.export(exports, "noEvent", ()=>k);
parcelHelpers.export(exports, "today", ()=>r);
parcelHelpers.export(exports, "week", ()=>n);
parcelHelpers.export(exports, "weekDays", ()=>a);
parcelHelpers.export(exports, "year", ()=>s);
parcelHelpers.export(exports, "years", ()=>i);
const a = [
    "Pirmadienis",
    "Antradienis",
    "Tre\u010Diadienis",
    "Ketvirtadienis",
    "Penktadienis",
    "\u0160e\u0161tadienis",
    "Sekmadienis"
], e = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegu\u017E\u0117",
    "Bir\u017Eelis",
    "Liepa",
    "Rugpj\u016Btis",
    "Rugs\u0117jis",
    "Spalis",
    "Lapkritis",
    "Gruodis"
], i = "Met\u0173 pasirinkimas", s = "Metai", t = "M\u0117nesis", n = "Savait\u0117", d = "Diena", r = "\u0160iandien", k = "Joki\u0173 \u012Fvyki\u0173", o = "Visa diena", y = "I\u0161trinti", v = "Sukurti \u012Fvyk\u012F", M = "dddd, D MMMM YYYY", u = {
    weekDays: a,
    months: e,
    years: i,
    year: "Metai",
    month: "M\u0117nesis",
    week: "Savait\u0117",
    day: "Diena",
    today: "\u0160iandien",
    noEvent: "Joki\u0173 \u012Fvyki\u0173",
    allDay: "Visa diena",
    deleteEvent: "I\u0161trinti",
    createEvent: "Sukurti \u012Fvyk\u012F",
    dateFormat: "dddd, D MMMM YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=lt.es.36595143.js.map
