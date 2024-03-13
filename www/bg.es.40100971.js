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
})({"gTAv8":[function(require,module,exports) {
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
    "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
    "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
    "\u0421\u0440\u044F\u0434\u0430",
    "\u0427\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A",
    "\u041F\u0435\u0442\u044A\u043A",
    "\u0421\u044A\u0431\u043E\u0442\u0430",
    "\u041D\u0435\u0434\u0435\u043B\u044F"
], e = [
    "\u042F\u043D\u0443\u0430\u0440\u0438",
    "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
    "\u041C\u0430\u0440\u0442",
    "\u0410\u043F\u0440\u0438\u043B",
    "\u041C\u0430\u0439",
    "\u042E\u043D\u0438",
    "\u042E\u043B\u0438",
    "\u0410\u0432\u0433\u0443\u0441\u0442",
    "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
    "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
    "\u041D\u043E\u0435\u043C\u0432\u0440\u0438",
    "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"
], t = "\u0413\u043E\u0434\u0438\u043D\u0438", s = "\u0413\u043E\u0434\u0438\u043D\u0430", d = "\u041C\u0435\u0441\u0435\u0446", n = "\u0421\u0435\u0434\u043C\u0438\u0446\u0430", o = "\u0414\u0435\u043D", y = "\u0414\u043D\u0435\u0441", r = "\u041D\u044F\u043C\u0430 \u0441\u044A\u0431\u0438\u0442\u0438\u044F", M = "\u0426\u044F\u043B \u0434\u0435\u043D", Y = "\u0418\u0437\u0442\u0440\u0438\u0439", l = "\u0421\u044A\u0437\u0434\u0430\u0439 \u0441\u044A\u0431\u0438\u0442\u0438\u0435", m = "dddd D MMMM YYYY", D = {
    weekDays: a,
    months: e,
    years: "\u0413\u043E\u0434\u0438\u043D\u0438",
    year: "\u0413\u043E\u0434\u0438\u043D\u0430",
    month: "\u041C\u0435\u0441\u0435\u0446",
    week: "\u0421\u0435\u0434\u043C\u0438\u0446\u0430",
    day: "\u0414\u0435\u043D",
    today: "\u0414\u043D\u0435\u0441",
    noEvent: "\u041D\u044F\u043C\u0430 \u0441\u044A\u0431\u0438\u0442\u0438\u044F",
    allDay: "\u0426\u044F\u043B \u0434\u0435\u043D",
    deleteEvent: "\u0418\u0437\u0442\u0440\u0438\u0439",
    createEvent: "\u0421\u044A\u0437\u0434\u0430\u0439 \u0441\u044A\u0431\u0438\u0442\u0438\u0435",
    dateFormat: "dddd D MMMM YYYY"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=bg.es.40100971.js.map
