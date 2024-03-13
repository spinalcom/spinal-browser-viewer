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
})({"hmxzM":[function(require,module,exports) {
/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */ var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
class SideBarOpenGraphViewer extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Node Inspector Viewer", "Node Inspector Viewer", {
            icon: "workspaces_outline",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        // if (option.testsFail === true) return Promise.resolve(-1);
        return Promise.resolve(true);
    }
    action(option) {
        console.log(option);
        console.log("action clicked");
        const server_id = spinal.spinalGraphService.getRealNode(option.selectedNode.id.get())._server_id;
        let myWindow = window.open("", "");
        let location = "/html/graph-inspector/?id=" + server_id;
        myWindow.document.location = location;
        myWindow.focus();
    }
}
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new SideBarOpenGraphViewer(), [
    7
]);
class CircularMenuOpenGraphViewer extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Node Inspector Viewer", "Node Inspector Viewer", {
            icon: "workspaces_outline",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.exist === false) return Promise.resolve(-1);
        return Promise.resolve(true);
    }
    action(option) {
        console.log("action clicked");
        const server_id = spinal.spinalGraphService.getRealNode(option.selectedNode.id.get())._server_id;
        let myWindow = window.open("", "");
        let location = "/html/graph-inspector/?id=" + server_id;
        myWindow.document.location = location;
        myWindow.focus();
    }
}
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("circularMenu", new CircularMenuOpenGraphViewer(), [
    7
]);

},{"spinal-env-viewer-context-menu-service":"kHlxv"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-graph_viewer.ce1d8f15.js.map
