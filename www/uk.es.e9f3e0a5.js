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
})({"5GWm6":[function(require,module,exports) {
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allDay", ()=>M);
parcelHelpers.export(exports, "createEvent", ()=>l);
parcelHelpers.export(exports, "dateFormat", ()=>h);
parcelHelpers.export(exports, "day", ()=>n);
parcelHelpers.export(exports, "default", ()=>k);
parcelHelpers.export(exports, "deleteEvent", ()=>Y);
parcelHelpers.export(exports, "month", ()=>o);
parcelHelpers.export(exports, "months", ()=>e);
parcelHelpers.export(exports, "noEvent", ()=>D);
parcelHelpers.export(exports, "today", ()=>r);
parcelHelpers.export(exports, "week", ()=>y);
parcelHelpers.export(exports, "weekDays", ()=>a);
parcelHelpers.export(exports, "weekDaysShort", ()=>t);
parcelHelpers.export(exports, "year", ()=>d);
parcelHelpers.export(exports, "years", ()=>s);
const a = [
    "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    "\u0421\u0435\u0440\u0435\u0434\u0430",
    "\u0427\u0435\u0442\u0432\u0435\u0440",
    "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F",
    "\u0421\u0443\u0431\u043E\u0442\u0430",
    "\u041D\u0435\u0434\u0456\u043B\u044F"
], e = [
    "\u0421\u0456\u0447\u0435\u043D\u044C",
    "\u041B\u044E\u0442\u0438\u0439",
    "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
    "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
    "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
    "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
    "\u041B\u0438\u043F\u0435\u043D\u044C",
    "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
    "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
    "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
    "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
    "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
], t = [
    "\u041F\u043D",
    "\u0412\u0442",
    "\u0421\u0440",
    "\u0427\u0442",
    "\u041F\u0442",
    "\u0421\u0431",
    "\u041D\u0434"
], s = "\u0420\u043E\u043A\u0438", d = "\u0420\u0456\u043A", o = "\u041C\u0456\u0441\u044F\u0446\u044C", y = "\u0422\u0438\u0436\u0434\u0435\u043D\u044C", n = "\u0414\u0435\u043D\u044C", r = "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456", D = "\u041D\u0435\u043C\u0430\u0454 \u043F\u043E\u0434\u0456\u0439", M = "\u0412\u0435\u0441\u044C \u0434\u0435\u043D\u044C", Y = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438", l = "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u043E\u0434\u0456\u044E", h = "dddd D MMMM YYYY", k = {
    weekDays: a,
    months: e,
    weekDaysShort: t,
    years: "\u0420\u043E\u043A\u0438",
    year: "\u0420\u0456\u043A",
    month: "\u041C\u0456\u0441\u044F\u0446\u044C",
    week: "\u0422\u0438\u0436\u0434\u0435\u043D\u044C",
    day: "\u0414\u0435\u043D\u044C",
    today: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
    noEvent: "\u041D\u0435\u043C\u0430\u0454 \u043F\u043E\u0434\u0456\u0439",
    allDay: "\u0412\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
    deleteEvent: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    createEvent: "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u043E\u0434\u0456\u044E",
    dateFormat: "dddd D MMMM YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=uk.es.e9f3e0a5.js.map
