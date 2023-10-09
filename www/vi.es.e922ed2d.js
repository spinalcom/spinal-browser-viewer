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
})({"5QGzG":[function(require,module,exports) {
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allDay", ()=>o);
parcelHelpers.export(exports, "createEvent", ()=>r);
parcelHelpers.export(exports, "dateFormat", ()=>v);
parcelHelpers.export(exports, "day", ()=>y);
parcelHelpers.export(exports, "default", ()=>N);
parcelHelpers.export(exports, "deleteEvent", ()=>m);
parcelHelpers.export(exports, "month", ()=>T);
parcelHelpers.export(exports, "months", ()=>e);
parcelHelpers.export(exports, "noEvent", ()=>d);
parcelHelpers.export(exports, "today", ()=>g);
parcelHelpers.export(exports, "week", ()=>s);
parcelHelpers.export(exports, "weekDays", ()=>a);
parcelHelpers.export(exports, "weekDaysShort", ()=>n);
parcelHelpers.export(exports, "year", ()=>t);
parcelHelpers.export(exports, "years", ()=>h);
const a = [
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ s\xe1u",
    "Thứ bảy",
    "Chủ nhật"
], n = [
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "CN"
], e = [
    "Th\xe1ng 1",
    "Th\xe1ng 2",
    "Th\xe1ng 3",
    "Th\xe1ng 4",
    "Th\xe1ng 5",
    "Th\xe1ng 6",
    "Th\xe1ng 7",
    "Th\xe1ng 8",
    "Th\xe1ng 9",
    "Th\xe1ng 10",
    "Th\xe1ng 11",
    "Th\xe1ng 12"
], h = "Năm", t = "Năm nay", T = "Th\xe1ng", s = "Tuần", y = "Ng\xe0y", g = "H\xf4m nay", d = "NKh\xf4ng c\xf3 Event", o = "Cả ng\xe0y", m = "X\xf3a", r = "Tạo event", v = "dddd MMMM D YYYY", N = {
    weekDays: a,
    weekDaysShort: n,
    months: e,
    years: "Năm",
    year: "Năm nay",
    month: "Th\xe1ng",
    week: "Tuần",
    day: "Ng\xe0y",
    today: "H\xf4m nay",
    noEvent: "NKh\xf4ng c\xf3 Event",
    allDay: "Cả ng\xe0y",
    deleteEvent: "X\xf3a",
    createEvent: "Tạo event",
    dateFormat: "dddd MMMM D YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=vi.es.e922ed2d.js.map
