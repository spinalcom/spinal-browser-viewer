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
})({"ehZFI":[function(require,module,exports) {
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allDay", ()=>m);
parcelHelpers.export(exports, "createEvent", ()=>p);
parcelHelpers.export(exports, "dateFormat", ()=>M);
parcelHelpers.export(exports, "day", ()=>d);
parcelHelpers.export(exports, "default", ()=>E);
parcelHelpers.export(exports, "deleteEvent", ()=>l);
parcelHelpers.export(exports, "month", ()=>n);
parcelHelpers.export(exports, "months", ()=>a);
parcelHelpers.export(exports, "noEvent", ()=>o);
parcelHelpers.export(exports, "today", ()=>y);
parcelHelpers.export(exports, "week", ()=>r);
parcelHelpers.export(exports, "weekDays", ()=>e);
parcelHelpers.export(exports, "year", ()=>t);
parcelHelpers.export(exports, "years", ()=>s);
const e = [
    "H\xe9tfo",
    "Kedd",
    "Szerda",
    "Cs\xfct\xf6rt\xf6k",
    "P\xe9ntek",
    "Szombat",
    "Vas\xe1rnap"
], a = [
    "Janu\xe1r",
    "Febru\xe1r",
    "M\xe1rcius",
    "\xc1prilis",
    "M\xe1jus",
    "J\xfanius",
    "J\xfalius",
    "Augusztus",
    "Szeptember",
    "Okt\xf3ber",
    "November",
    "December"
], s = "\xc9vek", t = "\xc9v", n = "H\xf3nap", r = "H\xe9t", d = "Nap", y = "Mai nap", o = "Nincs esem\xe9ny", m = "Eg\xe9sz nap", l = "Esem\xe9ny t\xf6rlese", p = "Esem\xe9ny l\xe9trehoz\xe1sa", M = "dddd D MMMM YYYY", E = {
    weekDays: e,
    months: a,
    years: "\xc9vek",
    year: "\xc9v",
    month: "H\xf3nap",
    week: "H\xe9t",
    day: "Nap",
    today: "Mai nap",
    noEvent: "Nincs esem\xe9ny",
    allDay: "Eg\xe9sz nap",
    deleteEvent: "Esem\xe9ny t\xf6rlese",
    createEvent: "Esem\xe9ny l\xe9trehoz\xe1sa",
    dateFormat: "dddd D MMMM YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=hu.es.e931829b.js.map
