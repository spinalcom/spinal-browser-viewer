// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kp2Uz":[function(require,module,exports) {
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allDay", ()=>M);
parcelHelpers.export(exports, "createEvent", ()=>l);
parcelHelpers.export(exports, "dateFormat", ()=>m);
parcelHelpers.export(exports, "day", ()=>o);
parcelHelpers.export(exports, "default", ()=>D);
parcelHelpers.export(exports, "deleteEvent", ()=>Y);
parcelHelpers.export(exports, "month", ()=>d);
parcelHelpers.export(exports, "months", ()=>e);
parcelHelpers.export(exports, "noEvent", ()=>r);
parcelHelpers.export(exports, "today", ()=>y);
parcelHelpers.export(exports, "week", ()=>n);
parcelHelpers.export(exports, "weekDays", ()=>a);
parcelHelpers.export(exports, "year", ()=>s);
parcelHelpers.export(exports, "years", ()=>t);
const a = [
    "\u09B8\u09CB\u09AE",
    "\u09AE\u0999\u09CD\u0997\u09B2",
    "\u09AC\u09C1\u09A7",
    "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF",
    "\u09B6\u09C1\u0995\u09CD\u09B0",
    "\u09B6\u09A8\u09BF",
    "\u09B0\u09AC\u09BF"
], e = [
    "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF",
    "\u09AB\u09C7\u09AC\u09CD\u09C1\u09DF\u09BE\u09B0\u09C0",
    "\u09AE\u09BE\u09B0\u09CD\u099A",
    "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
    "\u09AE\u09C7",
    "\u099C\u09C1\u09A8",
    "\u099C\u09C1\u09B2\u09BE\u0987",
    "\u0985\u0997\u09BE\u09B8\u09CD\u099F",
    "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0",
    "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0",
    "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0",
    "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"
], t = "\u09AC\u099B\u09B0", s = "\u09AC\u099B\u09B0", d = "\u09AE\u09BE\u09B8", n = "\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9", o = "\u09A6\u09BF\u09A8", y = "\u0986\u099C", r = "\u0995\u09BE\u09B0\u09CD\u09AF\u09B8\u09C2\u099A\u09C0", M = "\u09B8\u09BE\u09B0\u09BE\u09A6\u09BF\u09A8", Y = "\u09AE\u09C1\u099B\u09C1\u09A8", l = "\u0995\u09BE\u09B0\u09CD\u09AF\u09B8\u09C2\u099A\u09C0 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8", m = "dddd D MMMM YYYY", D = {
    weekDays: a,
    months: e,
    years: "\u09AC\u099B\u09B0",
    year: "\u09AC\u099B\u09B0",
    month: "\u09AE\u09BE\u09B8",
    week: "\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
    day: "\u09A6\u09BF\u09A8",
    today: "\u0986\u099C",
    noEvent: "\u0995\u09BE\u09B0\u09CD\u09AF\u09B8\u09C2\u099A\u09C0",
    allDay: "\u09B8\u09BE\u09B0\u09BE\u09A6\u09BF\u09A8",
    deleteEvent: "\u09AE\u09C1\u099B\u09C1\u09A8",
    createEvent: "\u0995\u09BE\u09B0\u09CD\u09AF\u09B8\u09C2\u099A\u09C0 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
    dateFormat: "dddd D MMMM YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=bn.es.8114e657.js.map
