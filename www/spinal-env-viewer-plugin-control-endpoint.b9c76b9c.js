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
})({"liftp":[function(require,module,exports,__globalThis) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vue/dialogs");
var _panels = require("./src/vue/panels");
var _legends = require("./src/vue/legends");

},{"./src/buttons":"13k1J","./src/vue/dialogs":"28UY3","./src/vue/panels":"ddAwe","./src/vue/legends":"5Vzxd"}],"13k1J":[function(require,module,exports,__globalThis) {
var _createContext = require("./createContext");
var _createControlPoint = require("./createControlPoint");
var _controlPointDetail = require("./controlPointDetail");
var _linkControlPoint = require("./linkControlPoint");
var _seeHeatmap = require("./seeHeatmap");
var _unLinkControlPoint = require("./unLinkControlPoint");

},{"./createContext":"c8xzL","./createControlPoint":"aFw0m","./controlPointDetail":"2JZdb","./linkControlPoint":"5ExPl","./seeHeatmap":"a0UFu","./unLinkControlPoint":"g9xcP"}],"c8xzL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const HEADERBAR = "GraphManagerTopBar";
class CreateControlEndpointContextButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create control point context", "create control point context", {
            icon: "games",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createControlEndpointContextDialog", {});
    }
}
const createControlEndpointContext = new CreateControlEndpointContextButton();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADERBAR, createControlEndpointContext, [
    3
]);
exports.default = createControlEndpointContext;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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
 */ var global = arguments[3];
const G_root = typeof window == "undefined" ? global : window;
const SpinalPanelManagerService = require("8b71a79dcc12420e");
const SpinalPanelApp = require("e47c36529e942a76");
if (typeof G_root.spinal === "undefined") G_root.spinal = {};
if (typeof G_root.spinal.spinalPanelManagerService === "undefined") G_root.spinal.spinalPanelManagerService = new SpinalPanelManagerService();
const SpinalMountExtention = require("cfd4c6200ba55765")(G_root.spinal.spinalPanelManagerService, SpinalPanelApp);
module.exports = {
    spinalPanelManagerService: G_root.spinal.spinalPanelManagerService,
    SpinalPanelApp,
    SpinalMountExtention,
    install (Vue) {
        Vue.prototype.$spinalPanelManagerService = G_root.spinal.spinalPanelManagerService;
    }
};

},{"8b71a79dcc12420e":"iFBrU","e47c36529e942a76":"637DX","cfd4c6200ba55765":"3DhXk"}],"iFBrU":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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
 */ /**
 *  Containter like service to register and get applications relative to a hookname
 *
 * @property {object} panels key = panelName, value = an instance of SpinalPanelApp
 * @class SpinalPanelManagerService
 */ class SpinalPanelManagerService {
    /**
   *Creates an instance of SpinalPanelManagerService.
   * @memberof SpinalPanelManagerService
   */ constructor(){
        this.panels = {};
    }
    /**
   * method to register an Panel Application
   *
   * @param {string} panelName the name of the panel
   * @param {SpinalPanelApp} spinalPanelApp the application
   * @memberof SpinalPanelManagerService
   */ registerPanel(panelName, spinalPanelApp) {
        this.panels[panelName] = spinalPanelApp;
    }
    /**
   *
   *
   * @param {*} panelName
   * @param {*} option
   * @returns {bool}
   * @memberof SpinalPanelManagerService
   */ openPanel(panelName, option) {
        if (typeof this.panels[panelName] !== "undefined") return this.panels[panelName].openPanel(option);
        return false;
    }
    /**
   *
   *
   * @param {*} panelName
   * @param {*} option
   * @returns {bool}
   * @memberof SpinalPanelManagerService
   */ closePanel(panelName, option) {
        if (typeof this.panels[panelName] !== "undefined") return this.panels[panelName].closePanel(option);
        return false;
    }
    /**
   *
   *
   * @param {*} panelName
   * @param {*} option
   * @returns {bool}
   * @memberof SpinalPanelManagerService
   */ tooglePanel(panelName, option) {
        if (typeof this.panels[panelName] !== "undefined") return this.panels[panelName].tooglePanel(option);
        return false;
    }
}
module.exports = SpinalPanelManagerService;

},{}],"637DX":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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
 */ /**
 * Base interface like class of a panel
 *
 * @class SpinalPanelApp
 */ class SpinalPanelApp {
    constructor(){}
    openPanel(option) {}
    closePanel(option) {}
    tooglePanel(option) {}
}
module.exports = SpinalPanelApp;

},{}],"3DhXk":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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
 */ function configInit(option) {
    const cfg = {};
    if (!option.vueMountComponent) throw new Error("mount : missing option vueMountComponent");
    cfg.name = option.name || "SpinalMount";
    cfg.vueMountComponent = option.vueMountComponent;
    cfg.parentContainer = option.parentContainer || document.body;
    return cfg;
}
function getDialog() {
    if (!this.dialog) {
        this.dialog = document.createElement("div");
        const _compo = document.createElement("div");
        this.dialog.className = "spinal-modal-container";
        this.cfg.parentContainer.appendChild(this.dialog);
        this.dialog.appendChild(_compo);
        this.compoment = new this.cfg.vueMountComponent({
            propsData: {
                onFinised: this.onFinised.bind(this)
            }
        }).$mount(_compo);
    }
    return this.dialog;
}
/**
 *
 * @param {*} spinalPanelManagerService
 * @param {*} SpinalPanelApp
 * @returns {object} { mount }
 */ module.exports = function(spinalPanelManagerService, SpinalPanelApp) {
    return {
        /**
```js
{
  name: "myCustomDialogName",
  vueMountComponent: Vue.extend(aVueCompomentDialog),
  parentContainer: document.body
}```
     *
     * @param {*} option
     */ mount (option) {
            let cfg = configInit(option);
            const SpinalMount = class extends SpinalPanelApp {
                constructor(){
                    super();
                    this.cfg = cfg;
                    this.dialog = null;
                    this.compoment = null;
                }
                openPanel(opt) {
                    getDialog.call(this);
                    this.compoment.opened(opt);
                }
                closePanel(opt) {
                    if (this.dialog !== null) {
                        this.compoment.removed(opt);
                        this.dialog.remove();
                        this.dialog = null;
                        this.compoment = null;
                    }
                }
                tooglePanel(opt) {
                    if (this.dialog !== null) this.closePanel(opt);
                    else this.openPanel(opt);
                }
                /**
         * called when dialog closed by the dialog itself
         */ onFinised(closeResult) {
                    this.closePanel(closeResult);
                }
            };
            let SpinalMountInstance = new SpinalMount();
            spinalPanelManagerService.registerPanel(cfg.name, SpinalMountInstance);
        }
    };
};

},{}],"aFw0m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
const SIDEBAR = "GraphManagerSideBar";
class CreateControlPointButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create control point", "create control point", {
            icon: "games",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const isControlPointContext = (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).isControlPointContext(option.context.id.get());
        if (!isControlPointContext) return Promise.resolve(-1);
        const isControlPointGroup = (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).isControlPointGroup(option.selectedNode.id.get());
        return Promise.resolve(isControlPointGroup ? true : -1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createControlPointDialog", {
            selectedNode: option.selectedNode.get(),
            context: option.context.get()
        });
    }
}
const createControlPointContext = new CreateControlPointButton();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createControlPointContext, [
    3
]);
exports.default = createControlPointContext;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-control-endpoint-service":"lck20","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2JZdb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
const SIDEBAR = "GraphManagerSideBar";
class SeeControlPointDetail extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("see control point detail", "see control point detail", {
            icon: "games",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const isControlPointContext = (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).isControlPointContext(option.context.id.get());
        if (!isControlPointContext) return Promise.resolve(-1);
        const isControlPoint = option.selectedNode.type.get() === (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).CONTROL_POINT_TYPE;
        return Promise.resolve(isControlPoint ? true : -1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("editControlPointPanel", {
            selectedNode: option.selectedNode.get(),
            context: option.context.get()
        });
    }
}
const seeControlPointDetail = new SeeControlPointDetail();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, seeControlPointDetail, [
    3
]);
exports.default = seeControlPointDetail;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-control-endpoint-service":"lck20","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5ExPl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
// import {
//   spinalControlPointService
// } from "spinal-env-viewer-plugin-control-endpoint-service";
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _utitlities = require("../utilities/utitlities");
var _utitlitiesDefault = parcelHelpers.interopDefault(_utitlities);
const SIDEBAR = "GraphManagerSideBar";
class LinkControlPointToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link control point", "Link control point", {
            icon: "games",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        // const isRoomGroupContext = groupManagerService.isRoomGroupContext(contextType);
        // const isContextGeo = contextType === CONTEXT_TYPE;
        // if(isContextGeo) return Promise.resolve(true);
        const isGroupContext = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isContext(contextType);
        if (!isGroupContext) return Promise.resolve(-1);
        const type = option.selectedNode.type.get();
        const isCategory = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type);
        const isGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
        const isContext = type === contextType;
        if (isCategory || isGroup || isContext) {
            const type = (0, _utitlitiesDefault.default).getGroupType(contextType);
            return Promise.resolve((0, _constants.GEOGRAPHIC_TYPES_ORDER).indexOf(type));
        }
        return Promise.resolve(-1);
    }
    action(option) {
        // let nodeType = option.context.type.get();
        const contextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        const contextType = option.context.type.get();
        const isGeographicContext = contextType === (0, _constants.CONTEXT_TYPE);
        if (!isGeographicContext) {
            const type = (0, _utitlitiesDefault.default).getGroupType(contextType);
            return openDialog(contextId, nodeId, type);
        } else (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("cp_selectGeographicType", {
            type: option.selectedNode.type.get(),
            callback: (argType)=>{
                openDialog(contextId, nodeId, argType);
            }
        });
    }
}
const openDialog = (contextId, nodeId, type)=>{
    (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkControlToRoomDialog", {
        contextId,
        nodeId,
        type
    });
};
const linkControlPointToGroup = new LinkControlPointToGroup();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkControlPointToGroup, [
    3
]);
exports.default = linkControlPointToGroup;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","../utilities/utitlities":"4rZ7s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4rZ7s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
exports.default = {
    convertHexColorToRGB (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },
    convertColorToTHREE_Vector (color) {
        let rgbColor = this.convertHexColorToRGB(`#${color}`);
        return rgbColor ? new THREE.Vector4(rgbColor.r / 255, rgbColor.g / 255, rgbColor.b / 255, 0.7) : new THREE.Vector4(1, 0, 0, 0);
    },
    async getReferenceObject (roomId) {
        const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(roomId);
        let references = [];
        if (info && info.type.get() === (0, _constants.BIM_OBJECT_TYPE)) references = [
            info
        ];
        else references = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(roomId, [
            (0, _constants.REFERENCE_OBJECT_RELATION_NAME)
        ]);
        const bims = references.map((el)=>el.get());
        const bimMap = new Map();
        for (const bimObject of bims){
            const bimFileId = bimObject.bimFileId;
            const dbid = bimObject.dbid;
            if (typeof bimMap.get(bimFileId) === "undefined") bimMap.set(bimFileId, new Set());
            bimMap.get(bimFileId).add(dbid);
        }
        const res = [];
        for (const [key, value] of bimMap.entries())res.push({
            model: window.spinal.BimObjectService.getModelByBimfile(key),
            ids: Array.from(value)
        });
        return res;
    },
    getGroupType (contextType) {
        return contextType.replace(/GroupContext$/, "");
    }
};

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2MD19":[function(require,module,exports,__globalThis) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REFERENCE_OBJECT_RELATION_TYPE = exports.BIM_OBJECT_RELATION_TYPE = exports.BIM_NODE_RELATION_TYPE = exports.BIM_OBJECT_VERSION_RELATION_TYPE = exports.REFERENCE_OBJECT_RELATION_NAME = exports.BIM_OBJECT_VERSION_RELATION_NAME = exports.BIM_OBJECT_RELATION_NAME = exports.BIM_NODE_RELATION_NAME = exports.BIM_CONTEXT_RELATION_TYPE = exports.BIM_CONTEXT_RELATION_NAME = exports.BIM_OBJECT_TYPE = exports.PART_RELATION_TYPE = exports.SCENE_RELATION_TYPE = exports.PART_RELATION_NAME = exports.SCENE_TYPE = exports.SCENE_RELATION_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("44f946b368e03b14");
const constants_js_1 = require("3c0117970d993dce");
exports.SCENE_RELATION_NAME = 'hasScene';
exports.SCENE_TYPE = "scene";
exports.PART_RELATION_NAME = 'hasParts';
exports.SCENE_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.PART_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_OBJECT_TYPE = constants_js_1.EQUIPMENT_TYPE;
exports.BIM_CONTEXT_RELATION_NAME = "hasBimContext";
exports.BIM_CONTEXT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_NODE_RELATION_NAME = "hasBimNode";
exports.BIM_OBJECT_RELATION_NAME = constants_js_1.EQUIPMENT_RELATION;
exports.BIM_OBJECT_VERSION_RELATION_NAME = "hasBimVersion";
exports.REFERENCE_OBJECT_RELATION_NAME = constants_js_1.REFERENCE_RELATION;
exports.BIM_OBJECT_VERSION_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_NODE_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.BIM_OBJECT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.REFERENCE_OBJECT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;

},{"44f946b368e03b14":"9LAk7","3c0117970d993dce":"cZr3d"}],"a0UFu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _itemsColored = require("../utilities/itemsColored");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _utitlities = require("../utilities/utitlities");
var _utitlitiesDefault = parcelHelpers.interopDefault(_utitlities);
var _event = require("../utilities/event");
const SIDEBAR = "GraphManagerSideBar";
class SeeHeatMapButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("See heatpmap", "See heatpmap", {
            icon: "gradient",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // const contextType = option.context.type.get();
        // const isRoomGroupContext = groupManagerService.isRoomGroupContext(contextType);
        // const isEquipementGroup = groupManagerService.isEquipmentGroupContext(contextType);
        // if(!isRoomGroupContext && !isEquipementGroup) return Promise.resolve(-1);
        // const type = option.selectedNode.type.get()
        // const isGroup = groupManagerService.isGroup(type)
        // if(!isGroup) return Promise.resolve(-1);
        // const id = option.selectedNode.id.get()
        // this.buttonCfg.fontColor = isColored(id) ? "#FF0000" : "#FFFFFF";
        // return Promise.resolve(true);
        const type = option.selectedNode.type.get();
        const isGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
        if (isGroup) {
            const contextType = option.context.type.get();
            const groupType = (0, _utitlitiesDefault.default).getGroupType(contextType);
            return Promise.resolve((0, _constants.GEOGRAPHIC_TYPES_ORDER).indexOf(groupType));
        }
        return Promise.resolve(-1);
    }
    action(option) {
        const id = option.selectedNode.id.get();
        if ((0, _itemsColored.isColored)(id)) {
            (0, _itemsColored.itemColoredMap).delete(id);
            this.fontColor = "#FFFFFF";
        } else {
            (0, _itemsColored.itemColoredMap).set(id, id);
            this.fontColor = "#FF0000";
        }
        (0, _event.EventBus).$emit("heatmapPanel", {
            selectedNode: option.selectedNode.get(),
            context: option.context.get(),
            button: this
        });
    // spinalPanelManagerService.openPanel("heatmapPanel",{
    //   selectedNode : option.selectedNode.get(),
    //   context : option.context.get()
    // })
    }
}
const seeHeatMapButton = new SeeHeatMapButton();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, seeHeatMapButton, [
    3
]);
exports.default = seeHeatMapButton;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-control-endpoint-service":"lck20","spinal-env-viewer-plugin-group-manager-service":"gmxoN","../utilities/itemsColored":"6IZOf","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","../utilities/utitlities":"4rZ7s","../utilities/event":"eOxBA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6IZOf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "itemColoredMap", ()=>itemColoredMap);
parcelHelpers.export(exports, "isColored", ()=>isColored);
const itemColoredMap = new Map();
const isColored = (id)=>{
    return typeof itemColoredMap.get(id) !== "undefined";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eOxBA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventBus", ()=>EventBus);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const EventBus = new (0, _vueDefault.default)();

},{"vue":"hO3OD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g9xcP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
// import {
//   spinalControlPointService
// } from "spinal-env-viewer-plugin-control-endpoint-service";
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _utitlities = require("../utilities/utitlities");
var _utitlitiesDefault = parcelHelpers.interopDefault(_utitlities);
const SIDEBAR = "GraphManagerSideBar";
class UnLinkControlPointToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("unlink control point", "unlink control point", {
            icon: "link_off",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const isGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
        if (isGroup) {
            const contextType = option.context.type.get();
            const groupType = (0, _utitlitiesDefault.default).getGroupType(contextType);
            return Promise.resolve((0, _constants.GEOGRAPHIC_TYPES_ORDER).indexOf(groupType));
        }
        return Promise.resolve(-1);
    }
    action(option) {
        // const nodeId = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("UnLinkControlpointPanel", option.selectedNode.get());
    }
}
const unLinkControlPointToGroup = new UnLinkControlPointToGroup();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, unLinkControlPointToGroup, [
    3
]);
exports.default = unLinkControlPointToGroup;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-env-viewer-panel-manager-service":"egTXY","../utilities/utitlities":"4rZ7s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"28UY3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextVue = require("./createContext.vue");
var _createContextVueDefault = parcelHelpers.interopDefault(_createContextVue);
var _createControlPointVue = require("./createControlPoint.vue");
var _createControlPointVueDefault = parcelHelpers.interopDefault(_createControlPointVue);
var _configurationVue = require("./configuration.vue");
var _configurationVueDefault = parcelHelpers.interopDefault(_configurationVue);
var _linkControlPointDialogVue = require("./linkControlPointDialog.vue");
var _linkControlPointDialogVueDefault = parcelHelpers.interopDefault(_linkControlPointDialogVue);
var _selectGeoTypeVue = require("./selectGeoType.vue");
var _selectGeoTypeVueDefault = parcelHelpers.interopDefault(_selectGeoTypeVue);
// import UnLinkControlPointDialog from "./unLinkControlPointDialog.vue";
const dialogs = [
    {
        name: "createControlEndpointContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createControlPointDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createControlPointVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "configurationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _configurationVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkControlToRoomDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkControlPointDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "cp_selectGeographicType",
        vueMountComponent: (0, _vueDefault.default).extend((0, _selectGeoTypeVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount(dialogs[index]);

},{"spinal-env-viewer-panel-manager-service":"egTXY","vue":"hO3OD","./createContext.vue":"73WFU","./createControlPoint.vue":"hv233","./configuration.vue":"hCGtO","./linkControlPointDialog.vue":"d1bOn","./selectGeoType.vue":"k9xnm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"73WFU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c8d4650fc870dfb7");
    if (script.__esModule) script = script.default;
    script.render = require("ea2a51db771c1536").render;
    script.staticRenderFns = require("ea2a51db771c1536").staticRenderFns;
    script._scopeId = "data-v-bc7684";
    script.__cssModules = require("911a671472c98f0f").default;
    require("2594acb2a852a3ae").default(script);
    script.__scopeId = 'data-v-bc7684';
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"c8d4650fc870dfb7":"j6kia","ea2a51db771c1536":"cvRsb","911a671472c98f0f":"kUiW7","2594acb2a852a3ae":"ic2Eh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j6kia":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var scriptExports = {
    name: "createControlEndpointContextDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            name: "",
            showDialog: true,
            callback: undefined
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            if (option.callback) this.callback = option.callback;
        },
        async removed (option) {
            if (option) (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).createContext(this.name.trim()).then((el)=>{
                if (this.callback && typeof this.callback === "function") this.callback(el.get());
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disabled () {
            return !(this.name && this.name.trim().length > 0);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cvRsb":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        attrs: {
            "md-active": _vm.showDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c('md-dialog-title', {
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Create Control Point Context\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("Context name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.name,
                        callback: function($$v) {
                            _vm.name = $$v;
                        },
                        expression: "name"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(false);
                    }
                }
            }, [
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("OK")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kUiW7":[function() {},{}],"ic2Eh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hv233":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("348f508b466950eb");
    if (script.__esModule) script = script.default;
    script.render = require("1c7ec9cef2a50075").render;
    script.staticRenderFns = require("1c7ec9cef2a50075").staticRenderFns;
    script._scopeId = "data-v-257e43";
    script.__cssModules = require("226bf9777e5ee3b2").default;
    require("a4d516f8f256f942").default(script);
    script.__scopeId = 'data-v-257e43';
    script.__file = "createControlPoint.vue";
};
initialize();
exports.default = script;

},{"348f508b466950eb":"cIbMH","1c7ec9cef2a50075":"ff5he","226bf9777e5ee3b2":"aP0s5","a4d516f8f256f942":"gXDB1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cIbMH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _controlPointsVue = require("../components/controlPoints.vue");
var _controlPointsVueDefault = parcelHelpers.interopDefault(_controlPointsVue);
var scriptExports = {
    name: "createControlPoint",
    props: [
        "onFinised"
    ],
    components: {
        "control-point-component": (0, _controlPointsVueDefault.default)
    },
    data () {
        this.contextId = "";
        this.groupId = "";
        return {
            name: "",
            endpoints: [],
            showDialog: true
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            this.contextId = option.context.id;
            this.groupId = option.selectedNode.id;
        },
        async removed (option) {
            if (option.confirm) (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).createControlPointProfil(this.contextId, this.groupId, {
                name: this.name,
                endpoints: option.data
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                confirm: closeResult
            });
        },
        disabled () {
            return !(this.name && this.name.trim().length > 0 && this.endpoints.length > 0);
        },
        createData (data) {
            if (this.name.trim().length === 0) return alert("name is required");
            if (typeof this.onFinised === "function") this.onFinised({
                confirm: true,
                data
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","../components/controlPoints.vue":"jmPIY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jmPIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9e286e324684196e");
    if (script.__esModule) script = script.default;
    script.render = require("d06a8440e9003e1c").render;
    script.staticRenderFns = require("d06a8440e9003e1c").staticRenderFns;
    script._scopeId = "data-v-f7a036";
    script.__cssModules = require("1ea528785544b8df").default;
    require("525186675f1bb932").default(script);
    script.__scopeId = 'data-v-f7a036';
    script.__file = "controlPoints.vue";
};
initialize();
exports.default = script;

},{"9e286e324684196e":"31Sq9","d06a8440e9003e1c":"h7ZsR","1ea528785544b8df":"1HLkm","525186675f1bb932":"3JECW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"31Sq9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var scriptExports = {
    name: "controlPointComponent",
    props: {
        data: {
            default: []
        },
        editMode: {
            type: Boolean,
            default: false
        }
    },
    data () {
        this.controlPointDataType = (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType);
        this.endpointTypes = (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointType);
        // this.endpointDataType = ControlEndpointType;
        this.boolValues = {
            1: "Yes",
            0: "No"
        };
        return {
            searched: []
        };
    },
    mounted () {
        this.searched = JSON.parse(JSON.stringify(this.data));
    // this.endpointTypes = Object.keys(InputDataEndpointType).filter(
    //   (el) => !isNaN(el)
    // );
    // this.dataTypesValues = Object.keys(ControlEndpointDataType);
    },
    methods: {
        createControlPoint () {
            this.$emit("create");
        },
        addControlPoint () {
            const controlPoint = Object.assign({}, (0, _spinalEnvViewerPluginControlEndpointService.ControlPointObj));
            controlPoint.id = Date.now();
            this.searched = [
                ...this.searched,
                controlPoint
            ];
        },
        removeItem (id) {
            this.searched = this.searched.filter((el)=>el.id !== id);
        },
        configureColor (item) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("configurationDialog", {
                item: JSON.parse(JSON.stringify(item)),
                callback: (config)=>{
                    item.config = config;
                }
            });
        },
        cancel () {
            this.searched = JSON.parse(JSON.stringify(this.data));
            this.$emit("cancel");
        },
        valid () {
            const validItems = this.getValidRow();
            if (validItems.length === 0) return alert("no control point valid");
            if (validItems.length === this.searched.length) this.$emit("confirm", validItems);
            else if (validItems.length < this.searched.length) {
                const diff = this.searched.length - validItems.length;
                const valid = window.confirm(`${diff} control points is/are not valid and will be deleted, will you continue ?`);
                if (valid) this.$emit("confirm", validItems);
            }
        },
        selectDataType (item) {
            const config = (0, _spinalEnvViewerPluginControlEndpointService.getConfig)(item.dataType);
            if (config) item.config = config;
        },
        getValidRow () {
            return this.searched.filter((item)=>this.controlPointIsValid(item));
        // const filtered = this.searched.filter((item) =>
        //   this.controlPointIsValid(item)
        // );
        // return filtered.map((el) => {
        //   if (!isNaN(el.type)) {
        //     el.type = InputDataEndpointType[el.type];
        //   }
        //   return el;
        // });
        },
        isNotValid () {
            const found = this.searched.find((el)=>this.controlPointIsValid(el));
        },
        controlPointIsValid (controlPoint) {
            return controlPoint.name.trim().length > 0 && controlPoint.alias.trim().length > 0 && controlPoint.dataType.trim().length;
        },
        disableConfig (item) {
            return [
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Float,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Integer,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Integer16,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Real,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Double,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Long,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Boolean,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Enum
            ].indexOf(item.dataType) === -1;
        }
    },
    watch: {
        data () {
            this.searched = JSON.parse(JSON.stringify(this.data));
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h7ZsR":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "control-point-table"
    }, [
        _c('md-table', {
            staticClass: "table",
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return !_vm.editMode ? _c('md-table-row', {}, [
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Name"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Alias"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(item.alias) + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "DataType"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.controlPointDataType[item.dataType]) + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Endpoint Type"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(item.type) + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Unit"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(item.unit || "-") + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Command"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.boolValues[item.command] || "No") + "\n\t\t\t\t")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Save TimeSeries"
                                }
                            }, [
                                _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.boolValues[item.saveTimeSeries] || "No") + "\n\t\t\t\t")
                            ])
                        ], 1) : _c('md-table-row', {}, [
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Name"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', [
                                        _vm._v("Name")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-input', {
                                        model: {
                                            value: item.name,
                                            callback: function($$v) {
                                                _vm.$set(item, "name", $$v);
                                            },
                                            expression: "item.name"
                                        }
                                    })
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Alias"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', [
                                        _vm._v("Alias")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-input', {
                                        model: {
                                            value: item.alias,
                                            callback: function($$v) {
                                                _vm.$set(item, "alias", $$v);
                                            },
                                            expression: "item.alias"
                                        }
                                    })
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "DataType"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', {
                                        attrs: {
                                            "for": "command"
                                        }
                                    }, [
                                        _vm._v("dataType")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-select', {
                                        attrs: {
                                            "name": "dataType",
                                            "id": "dataType"
                                        },
                                        on: {
                                            "md-selected": function($event) {
                                                return _vm.selectDataType(item);
                                            }
                                        },
                                        model: {
                                            value: item.dataType,
                                            callback: function($$v) {
                                                _vm.$set(item, "dataType", $$v);
                                            },
                                            expression: "item.dataType"
                                        }
                                    }, _vm._l(Object.keys(_vm.controlPointDataType), function(type, index) {
                                        return _c('md-option', {
                                            key: index,
                                            attrs: {
                                                "value": type
                                            }
                                        }, [
                                            _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.controlPointDataType[type]) + "\n\t\t\t\t\t\t\t")
                                        ]);
                                    }), 1)
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Endpoint Type"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', {
                                        attrs: {
                                            "for": "command"
                                        }
                                    }, [
                                        _vm._v("type")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-select', {
                                        attrs: {
                                            "name": "type",
                                            "id": "type"
                                        },
                                        model: {
                                            value: item.type,
                                            callback: function($$v) {
                                                _vm.$set(item, "type", $$v);
                                            },
                                            expression: "item.type"
                                        }
                                    }, _vm._l(Object.keys(_vm.endpointTypes), function(type, index) {
                                        return _c('md-option', {
                                            key: index,
                                            attrs: {
                                                "value": type
                                            }
                                        }, [
                                            _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.endpointTypes[type]) + "\n\t\t\t\t\t\t\t")
                                        ]);
                                    }), 1)
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Unit"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', [
                                        _vm._v("Unit")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-input', {
                                        model: {
                                            value: item.unit,
                                            callback: function($$v) {
                                                _vm.$set(item, "unit", $$v);
                                            },
                                            expression: "item.unit"
                                        }
                                    })
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Command"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', {
                                        attrs: {
                                            "for": "command"
                                        }
                                    }, [
                                        _vm._v("Command")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-select', {
                                        attrs: {
                                            "name": "command",
                                            "id": "command"
                                        },
                                        model: {
                                            value: item.command,
                                            callback: function($$v) {
                                                _vm.$set(item, "command", $$v);
                                            },
                                            expression: "item.command"
                                        }
                                    }, [
                                        _c('md-option', {
                                            attrs: {
                                                "value": 1
                                            }
                                        }, [
                                            _vm._v("Yes")
                                        ]),
                                        _vm._v(" "),
                                        _c('md-option', {
                                            attrs: {
                                                "value": 0
                                            }
                                        }, [
                                            _vm._v("No")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell",
                                attrs: {
                                    "md-label": "Save TimeSeries"
                                }
                            }, [
                                _c('md-field', {
                                    attrs: {
                                        "md-inline": ""
                                    }
                                }, [
                                    _c('label', {
                                        attrs: {
                                            "for": "saveTimeSeries"
                                        }
                                    }, [
                                        _vm._v("TimeSeries")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-select', {
                                        attrs: {
                                            "name": "saveTimeSeries",
                                            "id": "saveTimeSeries"
                                        },
                                        model: {
                                            value: item.saveTimeSeries,
                                            callback: function($$v) {
                                                _vm.$set(item, "saveTimeSeries", $$v);
                                            },
                                            expression: "item.saveTimeSeries"
                                        }
                                    }, [
                                        _c('md-option', {
                                            attrs: {
                                                "value": 1
                                            }
                                        }, [
                                            _vm._v("Yes")
                                        ]),
                                        _vm._v(" "),
                                        _c('md-option', {
                                            attrs: {
                                                "value": 0
                                            }
                                        }, [
                                            _vm._v("No")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell"
                            }, [
                                _c('md-button', {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "disabled": _vm.disableConfig(item)
                                    },
                                    on: {
                                        "click": function($event) {
                                            return _vm.configureColor(item);
                                        }
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("settings")
                                    ])
                                ], 1)
                            ], 1),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "tableCell"
                            }, [
                                _c('md-button', {
                                    staticClass: "md-icon-button md-accent",
                                    on: {
                                        "click": function($event) {
                                            return _vm.removeItem(item.id);
                                        }
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("delete")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1);
                    }
                }
            ], null, true),
            model: {
                value: _vm.searched,
                callback: function($$v) {
                    _vm.searched = $$v;
                },
                expression: "searched"
            }
        }, [
            _c('md-table-empty-state', {
                attrs: {
                    "md-label": "No control point found",
                    "md-description": "No control point found."
                }
            })
        ], 1),
        _vm._v(" "),
        _vm.editMode ? _c('div', {
            staticClass: "fabs"
        }, [
            _c('md-button', {
                staticClass: "md-fab md-mini md-primary",
                attrs: {
                    "title": "add controlPoint"
                },
                on: {
                    "click": _vm.addControlPoint
                }
            }, [
                _c('md-icon', [
                    _vm._v("add")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-fab md-mini md-accent",
                attrs: {
                    "title": "cancel"
                },
                on: {
                    "click": _vm.cancel
                }
            }, [
                _c('md-icon', [
                    _vm._v("close")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-fab md-mini md-primary",
                attrs: {
                    "title": "confirm"
                },
                on: {
                    "click": _vm.valid
                }
            }, [
                _c('md-icon', [
                    _vm._v("check")
                ])
            ], 1)
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1HLkm":[function() {},{}],"3JECW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ff5he":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "_controlPointdialog",
        attrs: {
            "md-active": _vm.showDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c('md-dialog-title', {
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Create Control Point")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "controlPointDialogContent"
        }, [
            _c('md-field', {
                staticClass: "nameInput"
            }, [
                _c('label', [
                    _vm._v("Control point name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.name,
                        callback: function($$v) {
                            _vm.name = $$v;
                        },
                        expression: "name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "table-container"
            }, [
                _c('control-point-component', {
                    staticClass: "table-component-content",
                    attrs: {
                        "data": _vm.endpoints,
                        "editMode": true
                    },
                    on: {
                        "cancel": function($event) {
                            return _vm.closeDialog(false);
                        },
                        "confirm": _vm.createData
                    }
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aP0s5":[function() {},{}],"gXDB1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hCGtO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8bf0c5fd55a4cbc9");
    if (script.__esModule) script = script.default;
    script.render = require("c1c4f27b8c89466").render;
    script.staticRenderFns = require("c1c4f27b8c89466").staticRenderFns;
    script._scopeId = "data-v-cc76de";
    script.__cssModules = require("de470a4b8effae67").default;
    require("9fd67831415c6600").default(script);
    script.__scopeId = 'data-v-cc76de';
    script.__file = "configuration.vue";
};
initialize();
exports.default = script;

},{"8bf0c5fd55a4cbc9":"f5Hby","c1c4f27b8c89466":"0AT4L","de470a4b8effae67":"8QDLf","9fd67831415c6600":"2unja","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5Hby":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _numberConfigVue = require("../components/config-components/numberConfig.vue");
var _numberConfigVueDefault = parcelHelpers.interopDefault(_numberConfigVue);
var _booleanConfigVue = require("../components/config-components/booleanConfig.vue");
var _booleanConfigVueDefault = parcelHelpers.interopDefault(_booleanConfigVue);
var _enumConfigVue = require("../components/config-components/enumConfig.vue");
var _enumConfigVueDefault = parcelHelpers.interopDefault(_enumConfigVue);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var scriptExports = {
    name: "configurationDialog",
    components: {
        "number-config-template": (0, _numberConfigVueDefault.default),
        "boolean-config-template": (0, _booleanConfigVueDefault.default),
        "enum-config-template": (0, _enumConfigVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        return {
            config: {},
            item: {},
            showDialog: true,
            callback: undefined
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            this.item = option.item;
            this.config = JSON.parse(JSON.stringify(this.item.config));
            if (option.callback) this.callback = option.callback;
        },
        async removed (option) {
            if (option.confirm && typeof this.callback === "function") {
                if (this.isEnumConfig()) this.config.enumeration = this.getConfigEnum();
                this.callback(JSON.parse(JSON.stringify(this.config)));
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                confirm: closeResult
            });
        },
        isNumberConfig () {
            return [
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Float,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Integer,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Integer16,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Real,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Double,
                (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Long
            ].indexOf(this.item.dataType) !== -1;
        },
        isBoolConfig () {
            return this.item.dataType === (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Boolean;
        },
        isEnumConfig () {
            return this.item.dataType === (0, _spinalEnvViewerPluginControlEndpointService.ControlEndpointDataType).Enum;
        },
        confirmConfig (config) {
            this.config = Object.assign(config);
        },
        numberConfigIsValid (config) {
            return ("" + config.min.value).trim().length > 0 && ("" + config.min.color).trim().length > 0 && ("" + config.average.value).trim().length > 0 && ("" + config.average.color).trim().length > 0 && ("" + config.max.value).trim().length > 0 && ("" + config.max.color).trim().length > 0;
        },
        booleanConfigIsValid (config) {
            return ("" + config.min.value).trim().length > 0 && ("" + config.min.color).trim().length > 0 && ("" + config.max.value).trim().length > 0 && ("" + config.max.color).trim().length > 0;
        },
        enumConfigIsValid (config) {
            const found = config.find((el)=>el.name.trim().length === 0 || el.color.trim().length === 0);
            return typeof found === "undefined";
        },
        disableOkBtn () {
            if (this.isNumberConfig()) return !this.numberConfigIsValid(this.config);
            else if (this.isBoolConfig()) return !this.booleanConfigIsValid(this.config);
            else if (this.isEnumConfig()) return !this.enumConfigIsValid(this.config.enumeration);
        },
        getConfigEnum () {
            const enumRef = this.$refs["enum-config"];
            if (enumRef) return enumRef.enumeration.filter((el)=>el.name.trim().length > 0 && el.color.trim().length > 0);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/config-components/numberConfig.vue":"35eIL","../components/config-components/booleanConfig.vue":"4vZ7e","../components/config-components/enumConfig.vue":"aUGAr","spinal-env-viewer-plugin-control-endpoint-service":"lck20","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"35eIL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f3d95b05c15ce8fe");
    if (script.__esModule) script = script.default;
    script.render = require("5a08f1dae5a69e76").render;
    script.staticRenderFns = require("5a08f1dae5a69e76").staticRenderFns;
    script._scopeId = "data-v-688e21";
    script.__cssModules = require("aa1bf42d398ff04e").default;
    require("a76c147145aa930d").default(script);
    script.__scopeId = 'data-v-688e21';
    script.__file = "numberConfig.vue";
};
initialize();
exports.default = script;

},{"f3d95b05c15ce8fe":"696cC","5a08f1dae5a69e76":"7xFY5","aa1bf42d398ff04e":"ds4eu","a76c147145aa930d":"lHrwL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"696cC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueColor = require("vue-color");
var _color = require("../../../utilities/color");
var scriptExports = {
    name: 'NumberConfigTemplate',
    components: {
        'chrome-picker': (0, _vueColor.Chrome)
    },
    props: {
        config: {}
    },
    data () {
        return {
            display: {
                min: false,
                average: false,
                max: false
            },
            gradient: []
        };
    },
    mounted () {
        this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
    },
    methods: {
        updateMinColor (val) {
            this.config.min.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        updateMaxColor (val) {
            this.config.max.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        updateAverageColor (val) {
            this.config.average.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        calculateAverage () {
            let max = parseInt(this.config.max.value);
            let min = parseInt(this.config.min.value);
            //   if (!isNaN(max) && !isNaN(min) && this.average)
            this.config.average.value = (max + min) / 2;
        },
        togglePicker (val) {
            this.display[val] = !this.display[val];
        },
        getColorValue (index) {
            let max = parseInt(this.config.max.value);
            let min = parseInt(this.config.min.value);
            if (!isNaN(max) && !isNaN(min)) {
                let begin = (max - min) * index / 10;
                let end = (max - min) * (index + 1) / 10;
                return `${begin + min} - ${end + min}`;
            }
            return '-';
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"5tBvH","../../../utilities/color":"aVXdV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aVXdV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
let tinygradient = require("44ab11c785d2b081");
let color = {
    getGradientColor (min, average, max) {
        let colorLength = average ? 10 : 2;
        let colors = average ? [
            min.color,
            average.color,
            max.color
        ] : [
            min.color,
            max.color
        ];
        let gradient = tinygradient(colors);
        return gradient.rgb(colorLength);
    },
    getColor (value, minValue, maxValue, gradientColor) {
        if (typeof minValue === "boolean" && typeof maxValue === "boolean") return value ? gradientColor[1].toHex() : gradientColor[0].toHex();
        if (!isNaN(value)) {
            let index = Math.floor((value - minValue) * 10 / (maxValue - minValue));
            if (index < 0) index = 0;
            else if (index >= gradientColor.length) index = gradientColor.length - 1;
            return gradientColor[index].toHex();
        }
        return undefined;
    },
    getEnumGradientColor (liste) {
        return liste.map((el)=>({
                value: el.name,
                color: el.color
            }));
    },
    getEnumColor (value, liste) {
        const found = liste.find((el)=>el.name === value);
        if (found) return found.color;
    }
};

},{"44ab11c785d2b081":"eqSDV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eqSDV":[function(require,module,exports,__globalThis) {
/*!
 * tinygradient (v1.1.5)
 * @copyright 2014-2021 Damien "Mistic" Sorel <contact@git.strangeplanet.fr>
 * @licence MIT
 */ (function(global, factory) {
    module.exports = factory(require("65c17899bf3bc7f9"));
})(this, function(tinycolor2) {
    'use strict';
    function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
            'default': e
        };
    }
    var tinycolor2__default = /*#__PURE__*/ _interopDefaultLegacy(tinycolor2);
    /**
     * @typedef {Object} TinyGradient.StopInput
     * @property {ColorInput} color
     * @property {number} pos
     */ /**
     * @typedef {Object} TinyGradient.StepValue
     * @type {number} [r]
     * @type {number} [g]
     * @type {number} [b]
     * @type {number} [h]
     * @type {number} [s]
     * @type {number} [v]
     * @type {number} [a]
     */ /**
     * @type {StepValue}
     */ var RGBA_MAX = {
        r: 256,
        g: 256,
        b: 256,
        a: 1
    };
    /**
     * @type {StepValue}
     */ var HSVA_MAX = {
        h: 360,
        s: 1,
        v: 1,
        a: 1
    };
    /**
     * Linearly compute the step size between start and end (not normalized)
     * @param {StepValue} start
     * @param {StepValue} end
     * @param {number} steps - number of desired steps
     * @return {StepValue}
     */ function stepize(start, end, steps) {
        var step = {};
        for(var k in start)if (start.hasOwnProperty(k)) step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
        return step;
    }
    /**
     * Compute the final step color
     * @param {StepValue} step - from `stepize`
     * @param {StepValue} start
     * @param {number} i - color index
     * @param {StepValue} max - rgba or hsva of maximum values for each channel
     * @return {StepValue}
     */ function interpolate(step, start, i, max) {
        var color = {};
        for(var k in start)if (start.hasOwnProperty(k)) {
            color[k] = step[k] * i + start[k];
            color[k] = color[k] < 0 ? color[k] + max[k] : max[k] !== 1 ? color[k] % max[k] : color[k];
        }
        return color;
    }
    /**
     * Generate gradient with RGBa interpolation
     * @param {StopInput} stop1
     * @param {StopInput} stop2
     * @param {number} steps
     * @return {tinycolor[]} color1 included, color2 excluded
     */ function interpolateRgb(stop1, stop2, steps) {
        var start = stop1.color.toRgb();
        var end = stop2.color.toRgb();
        var step = stepize(start, end, steps);
        var gradient = [
            stop1.color
        ];
        for(var i = 1; i < steps; i++){
            var color = interpolate(step, start, i, RGBA_MAX);
            gradient.push(tinycolor2__default['default'](color));
        }
        return gradient;
    }
    /**
     * Generate gradient with HSVa interpolation
     * @param {StopInput} stop1
     * @param {StopInput} stop2
     * @param {number} steps
     * @param {boolean|'long'|'short'} mode
     * @return {tinycolor[]} color1 included, color2 excluded
     */ function interpolateHsv(stop1, stop2, steps, mode) {
        var start = stop1.color.toHsv();
        var end = stop2.color.toHsv(); // rgb interpolation if one of the steps in grayscale
        if (start.s === 0 || end.s === 0) return interpolateRgb(stop1, stop2, steps);
        var trigonometric;
        if (typeof mode === 'boolean') trigonometric = mode;
        else {
            var trigShortest = start.h < end.h && end.h - start.h < 180 || start.h > end.h && start.h - end.h > 180;
            trigonometric = mode === 'long' && trigShortest || mode === 'short' && !trigShortest;
        }
        var step = stepize(start, end, steps);
        var gradient = [
            stop1.color
        ]; // recompute hue
        var diff;
        if (start.h <= end.h && !trigonometric || start.h >= end.h && trigonometric) diff = end.h - start.h;
        else if (trigonometric) diff = 360 - end.h + start.h;
        else diff = 360 - start.h + end.h;
        step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;
        for(var i = 1; i < steps; i++){
            var color = interpolate(step, start, i, HSVA_MAX);
            gradient.push(tinycolor2__default['default'](color));
        }
        return gradient;
    }
    /**
     * Compute substeps between each stops
     * @param {StopInput[]} stops
     * @param {number} steps
     * @return {number[]}
     */ function computeSubsteps(stops, steps) {
        var l = stops.length; // validation
        steps = parseInt(steps, 10);
        if (isNaN(steps) || steps < 2) throw new Error('Invalid number of steps (< 2)');
        if (steps < l) throw new Error('Number of steps cannot be inferior to number of stops');
         // compute substeps from stop positions
        var substeps = [];
        for(var i = 1; i < l; i++){
            var step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
            substeps.push(Math.max(1, Math.round(step)));
        } // adjust number of steps
        var totalSubsteps = 1;
        for(var n = l - 1; n--;)totalSubsteps += substeps[n];
        while(totalSubsteps !== steps)if (totalSubsteps < steps) {
            var min = Math.min.apply(null, substeps);
            substeps[substeps.indexOf(min)]++;
            totalSubsteps++;
        } else {
            var max = Math.max.apply(null, substeps);
            substeps[substeps.indexOf(max)]--;
            totalSubsteps--;
        }
        return substeps;
    }
    /**
     * Compute the color at a specific position
     * @param {StopInput[]} stops
     * @param {number} pos
     * @param {string} method
     * @param {StepValue} max
     * @returns {tinycolor}
     */ function computeAt(stops, pos, method, max) {
        if (pos < 0 || pos > 1) throw new Error('Position must be between 0 and 1');
        var start, end;
        for(var i = 0, l = stops.length; i < l - 1; i++)if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
            start = stops[i];
            end = stops[i + 1];
            break;
        }
        if (!start) start = end = stops[stops.length - 1];
        var step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
        var color = interpolate(step, start.color[method](), (pos - start.pos) * 100, max);
        return tinycolor2__default['default'](color);
    }
    var TinyGradient = /*#__PURE__*/ function() {
        /**
       * @param {StopInput[]|ColorInput[]} stops
       * @returns {TinyGradient}
       */ function TinyGradient(stops) {
            // validation
            if (stops.length < 2) throw new Error('Invalid number of stops (< 2)');
            var havingPositions = stops[0].pos !== undefined;
            var l = stops.length;
            var p = -1;
            var lastColorLess = false; // create tinycolor objects and clean positions
            this.stops = stops.map(function(stop, i) {
                var hasPosition = stop.pos !== undefined;
                if (havingPositions ^ hasPosition) throw new Error('Cannot mix positionned and not posionned color stops');
                if (hasPosition) {
                    var hasColor = stop.color !== undefined;
                    if (!hasColor && (lastColorLess || i === 0 || i === l - 1)) throw new Error('Cannot define two consecutive position-only stops');
                    lastColorLess = !hasColor;
                    stop = {
                        color: hasColor ? tinycolor2__default['default'](stop.color) : null,
                        colorLess: !hasColor,
                        pos: stop.pos
                    };
                    if (stop.pos < 0 || stop.pos > 1) throw new Error('Color stops positions must be between 0 and 1');
                    else if (stop.pos < p) throw new Error('Color stops positions are not ordered');
                    p = stop.pos;
                } else stop = {
                    color: tinycolor2__default['default'](stop.color !== undefined ? stop.color : stop),
                    pos: i / (l - 1)
                };
                return stop;
            });
            if (this.stops[0].pos !== 0) {
                this.stops.unshift({
                    color: this.stops[0].color,
                    pos: 0
                });
                l++;
            }
            if (this.stops[l - 1].pos !== 1) this.stops.push({
                color: this.stops[l - 1].color,
                pos: 1
            });
        }
        /**
       * Return new instance with reversed stops
       * @return {TinyGradient}
       */ var _proto = TinyGradient.prototype;
        _proto.reverse = function reverse() {
            var stops = [];
            this.stops.forEach(function(stop) {
                stops.push({
                    color: stop.color,
                    pos: 1 - stop.pos
                });
            });
            return new TinyGradient(stops.reverse());
        };
        _proto.loop = function loop() {
            var stops1 = [];
            var stops2 = [];
            this.stops.forEach(function(stop) {
                stops1.push({
                    color: stop.color,
                    pos: stop.pos / 2
                });
            });
            this.stops.slice(0, -1).forEach(function(stop) {
                stops2.push({
                    color: stop.color,
                    pos: 1 - stop.pos / 2
                });
            });
            return new TinyGradient(stops1.concat(stops2.reverse()));
        };
        _proto.rgb = function rgb(steps) {
            var _this = this;
            var substeps = computeSubsteps(this.stops, steps);
            var gradient = [];
            this.stops.forEach(function(stop, i) {
                if (stop.colorLess) stop.color = interpolateRgb(_this.stops[i - 1], _this.stops[i + 1], 2)[1];
            });
            for(var i = 0, l = this.stops.length; i < l - 1; i++){
                var rgb = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
                gradient.splice.apply(gradient, [
                    gradient.length,
                    0
                ].concat(rgb));
            }
            gradient.push(this.stops[this.stops.length - 1].color);
            return gradient;
        };
        _proto.hsv = function hsv(steps, mode) {
            var _this2 = this;
            var substeps = computeSubsteps(this.stops, steps);
            var gradient = [];
            this.stops.forEach(function(stop, i) {
                if (stop.colorLess) stop.color = interpolateHsv(_this2.stops[i - 1], _this2.stops[i + 1], 2, mode)[1];
            });
            for(var i = 0, l = this.stops.length; i < l - 1; i++){
                var hsv = interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], mode);
                gradient.splice.apply(gradient, [
                    gradient.length,
                    0
                ].concat(hsv));
            }
            gradient.push(this.stops[this.stops.length - 1].color);
            return gradient;
        };
        _proto.css = function css(mode, direction) {
            mode = mode || 'linear';
            direction = direction || (mode === 'linear' ? 'to right' : 'ellipse at center');
            var css = mode + '-gradient(' + direction;
            this.stops.forEach(function(stop) {
                css += ', ' + (stop.colorLess ? '' : stop.color.toRgbString() + ' ') + stop.pos * 100 + '%';
            });
            css += ')';
            return css;
        };
        _proto.rgbAt = function rgbAt(pos) {
            return computeAt(this.stops, pos, 'toRgb', RGBA_MAX);
        };
        _proto.hsvAt = function hsvAt(pos) {
            return computeAt(this.stops, pos, 'toHsv', HSVA_MAX);
        };
        return TinyGradient;
    }();
    /**
     * @param {StopInput[]|ColorInput[]|StopInput...|ColorInput...} stops
     * @returns {TinyGradient}
     */ var tinygradient = function tinygradient(stops) {
        // varargs
        if (arguments.length === 1) {
            if (!Array.isArray(arguments[0])) throw new Error('"stops" is not an array');
            stops = arguments[0];
        } else stops = Array.prototype.slice.call(arguments);
        return new TinyGradient(stops);
    };
    return tinygradient;
});

},{"65c17899bf3bc7f9":"5JcHJ"}],"5JcHJ":[function(require,module,exports,__globalThis) {
// This file is autogenerated. It's used to publish CJS to npm.
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    // https://github.com/bgrins/TinyColor
    // Brian Grinstead, MIT License
    var trimLeft = /^\s+/;
    var trimRight = /\s+$/;
    function tinycolor(color, opts) {
        color = color ? color : "";
        opts = opts || {};
        // If input is already a tinycolor, return itself
        if (color instanceof tinycolor) return color;
        // If we are called as a function, call using new instead
        if (!(this instanceof tinycolor)) return new tinycolor(color, opts);
        var rgb = inputToRGB(color);
        this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this._r < 1) this._r = Math.round(this._r);
        if (this._g < 1) this._g = Math.round(this._g);
        if (this._b < 1) this._b = Math.round(this._b);
        this._ok = rgb.ok;
    }
    tinycolor.prototype = {
        isDark: function isDark() {
            return this.getBrightness() < 128;
        },
        isLight: function isLight() {
            return !this.isDark();
        },
        isValid: function isValid() {
            return this._ok;
        },
        getOriginalInput: function getOriginalInput() {
            return this._originalInput;
        },
        getFormat: function getFormat() {
            return this._format;
        },
        getAlpha: function getAlpha() {
            return this._a;
        },
        getBrightness: function getBrightness() {
            //http://www.w3.org/TR/AERT#color-contrast
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        getLuminance: function getLuminance() {
            //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) R = RsRGB / 12.92;
            else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            if (GsRGB <= 0.03928) G = GsRGB / 12.92;
            else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            if (BsRGB <= 0.03928) B = BsRGB / 12.92;
            else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        },
        setAlpha: function setAlpha(value) {
            this._a = boundAlpha(value);
            this._roundA = Math.round(100 * this._a) / 100;
            return this;
        },
        toHsv: function toHsv() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return {
                h: hsv.h * 360,
                s: hsv.s,
                v: hsv.v,
                a: this._a
            };
        },
        toHsvString: function toHsvString() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
        },
        toHsl: function toHsl() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return {
                h: hsl.h * 360,
                s: hsl.s,
                l: hsl.l,
                a: this._a
            };
        },
        toHslString: function toHslString() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
            return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
        },
        toHex: function toHex(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function toHexString(allow3Char) {
            return "#" + this.toHex(allow3Char);
        },
        toHex8: function toHex8(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
        },
        toHex8String: function toHex8String(allow4Char) {
            return "#" + this.toHex8(allow4Char);
        },
        toRgb: function toRgb() {
            return {
                r: Math.round(this._r),
                g: Math.round(this._g),
                b: Math.round(this._b),
                a: this._a
            };
        },
        toRgbString: function toRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function toPercentageRgb() {
            return {
                r: Math.round(bound01(this._r, 255) * 100) + "%",
                g: Math.round(bound01(this._g, 255) * 100) + "%",
                b: Math.round(bound01(this._b, 255) * 100) + "%",
                a: this._a
            };
        },
        toPercentageRgbString: function toPercentageRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function toName() {
            if (this._a === 0) return "transparent";
            if (this._a < 1) return false;
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function toFilter(secondColor) {
            var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
        },
        toString: function toString(format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
                // Special case for "transparent", all other non-alpha formats
                // will return rgba when there is transparency.
                if (format === "name" && this._a === 0) return this.toName();
                return this.toRgbString();
            }
            if (format === "rgb") formattedString = this.toRgbString();
            if (format === "prgb") formattedString = this.toPercentageRgbString();
            if (format === "hex" || format === "hex6") formattedString = this.toHexString();
            if (format === "hex3") formattedString = this.toHexString(true);
            if (format === "hex4") formattedString = this.toHex8String(true);
            if (format === "hex8") formattedString = this.toHex8String();
            if (format === "name") formattedString = this.toName();
            if (format === "hsl") formattedString = this.toHslString();
            if (format === "hsv") formattedString = this.toHsvString();
            return formattedString || this.toHexString();
        },
        clone: function clone() {
            return tinycolor(this.toString());
        },
        _applyModification: function _applyModification(fn, args) {
            var color = fn.apply(null, [
                this
            ].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
        },
        lighten: function lighten() {
            return this._applyModification(_lighten, arguments);
        },
        brighten: function brighten() {
            return this._applyModification(_brighten, arguments);
        },
        darken: function darken() {
            return this._applyModification(_darken, arguments);
        },
        desaturate: function desaturate() {
            return this._applyModification(_desaturate, arguments);
        },
        saturate: function saturate() {
            return this._applyModification(_saturate, arguments);
        },
        greyscale: function greyscale() {
            return this._applyModification(_greyscale, arguments);
        },
        spin: function spin() {
            return this._applyModification(_spin, arguments);
        },
        _applyCombination: function _applyCombination(fn, args) {
            return fn.apply(null, [
                this
            ].concat([].slice.call(args)));
        },
        analogous: function analogous() {
            return this._applyCombination(_analogous, arguments);
        },
        complement: function complement() {
            return this._applyCombination(_complement, arguments);
        },
        monochromatic: function monochromatic() {
            return this._applyCombination(_monochromatic, arguments);
        },
        splitcomplement: function splitcomplement() {
            return this._applyCombination(_splitcomplement, arguments);
        },
        // Disabled until https://github.com/bgrins/TinyColor/issues/254
        // polyad: function (number) {
        //   return this._applyCombination(polyad, [number]);
        // },
        triad: function triad() {
            return this._applyCombination(polyad, [
                3
            ]);
        },
        tetrad: function tetrad() {
            return this._applyCombination(polyad, [
                4
            ]);
        }
    };
    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function(color, opts) {
        if (_typeof(color) == "object") {
            var newColor = {};
            for(var i in color)if (color.hasOwnProperty(i)) {
                if (i === "a") newColor[i] = color[i];
                else newColor[i] = convertToPercentage(color[i]);
            }
            color = newColor;
        }
        return tinycolor(color, opts);
    };
    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {
        var rgb = {
            r: 0,
            g: 0,
            b: 0
        };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format = false;
        if (typeof color == "string") color = stringInputToObject(color);
        if (_typeof(color) == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
                s = convertToPercentage(color.s);
                v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, s, v);
                ok = true;
                format = "hsv";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
                s = convertToPercentage(color.s);
                l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, s, l);
                ok = true;
                format = "hsl";
            }
            if (color.hasOwnProperty("a")) a = color.a;
        }
        a = boundAlpha(a);
        return {
            ok: ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a: a
        };
    }
    // Conversion Functions
    // --------------------
    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b) {
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }
    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) h = s = 0; // achromatic
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return {
            h: h,
            s: s,
            l: l
        };
    }
    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
        var r, g, b;
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 0.5) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        if (s === 0) r = g = b = l; // achromatic
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return {
            r: r * 255,
            g: g * 255,
            b: b * 255
        };
    }
    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) h = 0; // achromatic
        else {
            switch(max){
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return {
            h: h,
            s: s,
            v: v
        };
    }
    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hsvToRgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [
            v,
            q,
            p,
            p,
            t,
            v
        ][mod], g = [
            t,
            v,
            v,
            q,
            p,
            p
        ][mod], b = [
            p,
            p,
            t,
            v,
            v,
            q
        ][mod];
        return {
            r: r * 255,
            g: g * 255,
            b: b * 255
        };
    }
    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {
        var hex = [
            pad2(Math.round(r).toString(16)),
            pad2(Math.round(g).toString(16)),
            pad2(Math.round(b).toString(16))
        ];
        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        return hex.join("");
    }
    // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b are contained in the set [0, 255] and
    // a in [0, 1]. Returns a 4 or 8 character rgba hex
    function rgbaToHex(r, g, b, a, allow4Char) {
        var hex = [
            pad2(Math.round(r).toString(16)),
            pad2(Math.round(g).toString(16)),
            pad2(Math.round(b).toString(16)),
            pad2(convertDecimalToHex(a))
        ];
        // Return a 4 character hex if possible
        if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        return hex.join("");
    }
    // `rgbaToArgbHex`
    // Converts an RGBA color to an ARGB Hex8 string
    // Rarely used, but required for "toFilter()"
    function rgbaToArgbHex(r, g, b, a) {
        var hex = [
            pad2(convertDecimalToHex(a)),
            pad2(Math.round(r).toString(16)),
            pad2(Math.round(g).toString(16)),
            pad2(Math.round(b).toString(16))
        ];
        return hex.join("");
    }
    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function(color1, color2) {
        if (!color1 || !color2) return false;
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
        return tinycolor.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        });
    };
    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>
    function _desaturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }
    function _saturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }
    function _greyscale(color) {
        return tinycolor(color).desaturate(100);
    }
    function _lighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }
    function _brighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var rgb = tinycolor(color).toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return tinycolor(rgb);
    }
    function _darken(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }
    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.
    function _spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
    }
    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>
    function _complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    }
    function polyad(color, number) {
        if (isNaN(number) || number <= 0) throw new Error("Argument to polyad must be a positive number");
        var hsl = tinycolor(color).toHsl();
        var result = [
            tinycolor(color)
        ];
        var step = 360 / number;
        for(var i = 1; i < number; i++)result.push(tinycolor({
            h: (hsl.h + i * step) % 360,
            s: hsl.s,
            l: hsl.l
        }));
        return result;
    }
    function _splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({
                h: (h + 72) % 360,
                s: hsl.s,
                l: hsl.l
            }),
            tinycolor({
                h: (h + 216) % 360,
                s: hsl.s,
                l: hsl.l
            })
        ];
    }
    function _analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;
        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [
            tinycolor(color)
        ];
        for(hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;){
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    }
    function _monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;
        while(results--){
            ret.push(tinycolor({
                h: h,
                s: s,
                v: v
            }));
            v = (v + modification) % 1;
        }
        return ret;
    }
    // Utility Functions
    // ---------------------
    tinycolor.mix = function(color1, color2, amount) {
        amount = amount === 0 ? 0 : amount || 50;
        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return tinycolor(rgba);
    };
    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
    // `contrast`
    // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
    tinycolor.readability = function(color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    // `isReadable`
    // Ensure that foreground and background color combinations meet WCAG2 guidelines.
    // The third argument is an optional Object.
    //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
    //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
    // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false
    //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
    tinycolor.isReadable = function(color1, color2, wcag2) {
        var readability = tinycolor.readability(color1, color2);
        var wcag2Parms, out;
        out = false;
        wcag2Parms = validateWCAG2Parms(wcag2);
        switch(wcag2Parms.level + wcag2Parms.size){
            case "AAsmall":
            case "AAAlarge":
                out = readability >= 4.5;
                break;
            case "AAlarge":
                out = readability >= 3;
                break;
            case "AAAsmall":
                out = readability >= 7;
                break;
        }
        return out;
    };
    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // Optionally returns Black or White if the most readable color is unreadable.
    // *Example*
    //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
    //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
    //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
    //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
    tinycolor.mostReadable = function(baseColor, colorList, args) {
        var bestColor = null;
        var bestScore = 0;
        var readability;
        var includeFallbackColors, level, size;
        args = args || {};
        includeFallbackColors = args.includeFallbackColors;
        level = args.level;
        size = args.size;
        for(var i = 0; i < colorList.length; i++){
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
                bestScore = readability;
                bestColor = tinycolor(colorList[i]);
            }
        }
        if (tinycolor.isReadable(baseColor, bestColor, {
            level: level,
            size: size
        }) || !includeFallbackColors) return bestColor;
        else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, [
                "#fff",
                "#000"
            ], args);
        }
    };
    // Big List of Colors
    // ------------------
    // <https://www.w3.org/TR/css-color-4/#named-colors>
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };
    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);
    // Utilities
    // ---------
    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
        var flipped = {};
        for(var i in o)if (o.hasOwnProperty(i)) flipped[o[i]] = i;
        return flipped;
    }
    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) a = 1;
        return a;
    }
    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
        if (isOnePointZero(n)) n = "100%";
        var processPercent = isPercentage(n);
        n = Math.min(max, Math.max(0, parseFloat(n)));
        // Automatically convert percentage into number
        if (processPercent) n = parseInt(n * max, 10) / 100;
        // Handle floating point rounding errors
        if (Math.abs(n - max) < 0.000001) return 1;
        // Convert into [0, 1] range if it isn't already
        return n % max / parseFloat(max);
    }
    // Force a number between 0 and 1
    function clamp01(val) {
        return Math.min(1, Math.max(0, val));
    }
    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }
    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
    }
    // Check to see if string passed in is a percentage
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf("%") != -1;
    }
    // Force a hex value to have 2 characters
    function pad2(c) {
        return c.length == 1 ? "0" + c : "" + c;
    }
    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) n = n * 100 + "%";
        return n;
    }
    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
        return parseIntFromHex(h) / 255;
    }
    var matchers = function() {
        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = "[-\\+]?\\d+%?";
        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    }();
    // `isValidCSSUnit`
    // Take in a single string / number and check to see if it looks like a CSS unit
    // (see `matchers` above for definition).
    function isValidCSSUnit(color) {
        return !!matchers.CSS_UNIT.exec(color);
    }
    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {
        color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        } else if (color == "transparent") return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        // Try to match string input using regular expressions.
        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
        // Just return an object and let the conversion functions handle that.
        // This way the result will be the same whether the tinycolor is initialized with string or object.
        var match;
        if (match = matchers.rgb.exec(color)) return {
            r: match[1],
            g: match[2],
            b: match[3]
        };
        if (match = matchers.rgba.exec(color)) return {
            r: match[1],
            g: match[2],
            b: match[3],
            a: match[4]
        };
        if (match = matchers.hsl.exec(color)) return {
            h: match[1],
            s: match[2],
            l: match[3]
        };
        if (match = matchers.hsla.exec(color)) return {
            h: match[1],
            s: match[2],
            l: match[3],
            a: match[4]
        };
        if (match = matchers.hsv.exec(color)) return {
            h: match[1],
            s: match[2],
            v: match[3]
        };
        if (match = matchers.hsva.exec(color)) return {
            h: match[1],
            s: match[2],
            v: match[3],
            a: match[4]
        };
        if (match = matchers.hex8.exec(color)) return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
        if (match = matchers.hex6.exec(color)) return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
        if (match = matchers.hex4.exec(color)) return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            a: convertHexToDecimal(match[4] + "" + match[4]),
            format: named ? "name" : "hex8"
        };
        if (match = matchers.hex3.exec(color)) return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            format: named ? "name" : "hex"
        };
        return false;
    }
    function validateWCAG2Parms(parms) {
        // return valid WCAG2 parms for isReadable.
        // If input parms are invalid, return {"level":"AA", "size":"small"}
        var level, size;
        parms = parms || {
            level: "AA",
            size: "small"
        };
        level = (parms.level || "AA").toUpperCase();
        size = (parms.size || "small").toLowerCase();
        if (level !== "AA" && level !== "AAA") level = "AA";
        if (size !== "small" && size !== "large") size = "small";
        return {
            level: level,
            size: size
        };
    }
    return tinycolor;
});

},{}],"7xFY5":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "number-config-config_container"
    }, [
        _c('div', {
            staticClass: "values md-layout md-gutter"
        }, [
            _c('div', {
                staticClass: "md-layout-item md-size-33"
            }, [
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Min")
                ]),
                _vm._v(" "),
                _c('md-field', {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c('md-input', {
                        attrs: {
                            "type": "number"
                        },
                        on: {
                            "change": _vm.calculateAverage
                        },
                        model: {
                            value: _vm.config.min.value,
                            callback: function($$v) {
                                _vm.$set(_vm.config.min, "value", $$v);
                            },
                            expression: "config.min.value"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Color")
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "colorContainer"
                }, [
                    _c('div', {
                        staticClass: "current-color",
                        style: 'background-color: ' + _vm.config.min.color,
                        on: {
                            "click": function($event) {
                                return _vm.togglePicker('min');
                            }
                        }
                    }),
                    _vm._v(" "),
                    _vm.display.min ? _c('chrome-picker', {
                        staticClass: "colorSelect",
                        on: {
                            "input": _vm.updateMinColor
                        },
                        model: {
                            value: _vm.config.min.color,
                            callback: function($$v) {
                                _vm.$set(_vm.config.min, "color", $$v);
                            },
                            expression: "config.min.color"
                        }
                    }) : _vm._e()
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-33"
            }, [
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Average")
                ]),
                _vm._v(" "),
                _c('md-field', {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c('md-input', {
                        attrs: {
                            "type": "number",
                            "disabled": ""
                        },
                        model: {
                            value: _vm.config.average.value,
                            callback: function($$v) {
                                _vm.$set(_vm.config.average, "value", $$v);
                            },
                            expression: "config.average.value"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Color")
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "colorContainer"
                }, [
                    _c('div', {
                        staticClass: "current-color",
                        style: 'background-color: ' + _vm.config.average.color,
                        on: {
                            "click": function($event) {
                                return _vm.togglePicker('average');
                            }
                        }
                    }),
                    _vm._v(" "),
                    _vm.display.average ? _c('chrome-picker', {
                        staticClass: "colorSelect",
                        on: {
                            "input": _vm.updateAverageColor
                        },
                        model: {
                            value: _vm.config.average.color,
                            callback: function($$v) {
                                _vm.$set(_vm.config.average, "color", $$v);
                            },
                            expression: "config.average.color"
                        }
                    }) : _vm._e()
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-33"
            }, [
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Max")
                ]),
                _vm._v(" "),
                _c('md-field', {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c('md-input', {
                        attrs: {
                            "type": "number"
                        },
                        on: {
                            "change": _vm.calculateAverage
                        },
                        model: {
                            value: _vm.config.max.value,
                            callback: function($$v) {
                                _vm.$set(_vm.config.max, "value", $$v);
                            },
                            expression: "config.max.value"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("Color")
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "colorContainer"
                }, [
                    _c('div', {
                        staticClass: "current-color",
                        style: 'background-color: ' + _vm.config.max.color,
                        on: {
                            "click": function($event) {
                                return _vm.togglePicker('max');
                            }
                        }
                    }),
                    _vm._v(" "),
                    _vm.display.max ? _c('chrome-picker', {
                        staticClass: "colorSelect",
                        on: {
                            "input": _vm.updateMaxColor
                        },
                        model: {
                            value: _vm.config.max.color,
                            callback: function($$v) {
                                _vm.$set(_vm.config.max, "color", $$v);
                            },
                            expression: "config.max.color"
                        }
                    }) : _vm._e()
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "colorGradient"
        }, _vm._l(_vm.gradient, function(g, index) {
            return _c('div', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.getColorValue(index),
                        expression: "getColorValue(index)"
                    }
                ],
                key: index,
                style: 'background-color: #' + g.toHex()
            });
        }), 0)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ds4eu":[function() {},{}],"lHrwL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4vZ7e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c6c3a2df3353ebf8");
    if (script.__esModule) script = script.default;
    script.render = require("b5193516d7717b97").render;
    script.staticRenderFns = require("b5193516d7717b97").staticRenderFns;
    script._scopeId = "data-v-8fb459";
    script.__cssModules = require("123575a0a5ee048c").default;
    require("dfb0df8d42ff73c4").default(script);
    script.__scopeId = 'data-v-8fb459';
    script.__file = "booleanConfig.vue";
};
initialize();
exports.default = script;

},{"c6c3a2df3353ebf8":"dehu3","b5193516d7717b97":"4D6td","123575a0a5ee048c":"6Yf05","dfb0df8d42ff73c4":"1P4BA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dehu3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueColor = require("vue-color");
var _color = require("../../../utilities/color");
var scriptExports = {
    name: 'NumberConfigTemplate',
    components: {
        'chrome-picker': (0, _vueColor.Chrome)
    },
    props: {
        config: {}
    },
    data () {
        return {
            display: {
                min: false,
                average: false,
                max: false
            },
            gradient: []
        };
    },
    mounted () {
        this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
    },
    methods: {
        updateMinColor (val) {
            this.config.min.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        updateMaxColor (val) {
            this.config.max.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        updateAverageColor (val) {
            this.config.average.color = val.hex;
            this.gradient = (0, _color.color).getGradientColor(this.config.min, this.config.average, this.config.max);
        },
        calculateAverage () {
            let max = parseInt(this.config.max.value);
            let min = parseInt(this.config.min.value);
            //   if (!isNaN(max) && !isNaN(min) && this.average)
            this.config.average.value = (max + min) / 2;
        },
        togglePicker (val) {
            this.display[val] = !this.display[val];
        },
        getColorValue (index) {
            let max = parseInt(this.config.max.value);
            let min = parseInt(this.config.min.value);
            if (!isNaN(max) && !isNaN(min)) {
                let begin = (max - min) * index / 10;
                let end = (max - min) * (index + 1) / 10;
                return `${begin + min} - ${end + min}`;
            }
            return '-';
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"5tBvH","../../../utilities/color":"aVXdV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4D6td":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "boolean-config-config_container"
    }, [
        _c('div', {
            staticClass: "values md-layout md-gutter"
        }, [
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("False")
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "colorContainer"
                }, [
                    _c('div', {
                        staticClass: "current-color",
                        style: 'background-color: ' + _vm.config.min.color,
                        on: {
                            "click": function($event) {
                                return _vm.togglePicker('min');
                            }
                        }
                    }),
                    _vm._v(" "),
                    _vm.display.min ? _c('chrome-picker', {
                        staticClass: "colorSelect",
                        on: {
                            "input": _vm.updateMinColor
                        },
                        model: {
                            value: _vm.config.min.color,
                            callback: function($$v) {
                                _vm.$set(_vm.config.min, "color", $$v);
                            },
                            expression: "config.min.color"
                        }
                    }) : _vm._e()
                ], 1)
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('span', {
                    staticClass: "md-caption"
                }, [
                    _vm._v("True")
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "colorContainer"
                }, [
                    _c('div', {
                        staticClass: "current-color",
                        style: 'background-color: ' + _vm.config.max.color,
                        on: {
                            "click": function($event) {
                                return _vm.togglePicker('max');
                            }
                        }
                    }),
                    _vm._v(" "),
                    _vm.display.max ? _c('chrome-picker', {
                        staticClass: "colorSelect",
                        on: {
                            "input": _vm.updateMaxColor
                        },
                        model: {
                            value: _vm.config.max.color,
                            callback: function($$v) {
                                _vm.$set(_vm.config.max, "color", $$v);
                            },
                            expression: "config.max.color"
                        }
                    }) : _vm._e()
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "colorGradient"
        }, _vm._l(_vm.gradient, function(g, index) {
            return _c('div', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.getColorValue(index),
                        expression: "getColorValue(index)"
                    }
                ],
                key: index,
                style: 'background-color: #' + g.toHex()
            });
        }), 0)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6Yf05":[function() {},{}],"1P4BA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aUGAr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("24d00eb5275e3f68");
    if (script.__esModule) script = script.default;
    script.render = require("4ddf3f4fd87a64c4").render;
    script.staticRenderFns = require("4ddf3f4fd87a64c4").staticRenderFns;
    script._scopeId = "data-v-e5bae3";
    script.__cssModules = require("39b712e85a80d537").default;
    require("79b2a0a006b26751").default(script);
    script.__scopeId = 'data-v-e5bae3';
    script.__file = "enumConfig.vue";
};
initialize();
exports.default = script;

},{"24d00eb5275e3f68":"86sNr","4ddf3f4fd87a64c4":"98Dzi","39b712e85a80d537":"byfGc","79b2a0a006b26751":"hjXjT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"86sNr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueColor = require("vue-color");
var scriptExports = {
    name: 'enumConfigTemplate',
    components: {
        'chrome-picker': (0, _vueColor.Chrome)
    },
    props: {
        config: {}
    },
    data () {
        return {
            enumeration: [],
            display: {}
        };
    },
    mounted () {
        this.enumeration = JSON.parse(JSON.stringify(this.config.enumeration));
    },
    methods: {
        updateColor (item, val) {
            item.color = val.hex;
        },
        addColor () {
            this.enumeration = [
                ...this.enumeration,
                {
                    name: '',
                    color: '#000000',
                    id: Date.now()
                }
            ];
        },
        togglePicker (val) {
            this.display = Object.assign({}, this.display, {
                [val]: !this.display[val]
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"5tBvH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"98Dzi":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "enum-config-config_container"
    }, [
        _c('md-content', {
            staticClass: "colors md-scrollbar"
        }, _vm._l(_vm.enumeration, function(item) {
            return _c('div', {
                key: item.id,
                staticClass: "md-layout md-gutter item"
            }, [
                _c('div', {
                    staticClass: "md-layout-item md-size-45"
                }, [
                    _c('md-field', {
                        attrs: {
                            "md-inline": ""
                        }
                    }, [
                        _c('md-input', {
                            attrs: {
                                "placeholder": "name"
                            },
                            model: {
                                value: item.name,
                                callback: function($$v) {
                                    _vm.$set(item, "name", $$v);
                                },
                                expression: "item.name"
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "md-layout-item md-size-45"
                }, [
                    _c('div', {
                        staticClass: "colorContainer"
                    }, [
                        _c('div', {
                            staticClass: "current-color",
                            style: 'background-color: ' + item.color,
                            on: {
                                "click": function($event) {
                                    return _vm.togglePicker(item.id);
                                }
                            }
                        }),
                        _vm._v(" "),
                        _vm.display[item.id] ? _c('chrome-picker', {
                            staticClass: "colorSelect",
                            on: {
                                "input": function(val) {
                                    return _vm.updateColor(item, val);
                                }
                            },
                            model: {
                                value: item.color,
                                callback: function($$v) {
                                    _vm.$set(item, "color", $$v);
                                },
                                expression: "item.color"
                            }
                        }) : _vm._e()
                    ], 1)
                ])
            ]);
        }), 0),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-fab md-mini md-primary md-fab-bottom-right",
            on: {
                "click": _vm.addColor
            }
        }, [
            _c('md-icon', [
                _vm._v("add")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"byfGc":[function() {},{}],"hjXjT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"0AT4L":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "config_dialog_content",
        attrs: {
            "md-active": _vm.showDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c('md-dialog-title', {
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Configuration")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _vm.isNumberConfig() ? _c('number-config-template', {
                attrs: {
                    "config": _vm.config
                },
                on: {
                    "valid": _vm.confirmConfig
                }
            }) : _vm.isBoolConfig() ? _c('boolean-config-template', {
                attrs: {
                    "config": _vm.config
                },
                on: {
                    "valid": _vm.confirmConfig
                }
            }) : _vm.isEnumConfig() ? _c('enum-config-template', {
                ref: "enum-config",
                attrs: {
                    "config": _vm.config
                }
            }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(false);
                    }
                }
            }, [
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableOkBtn()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("OK")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8QDLf":[function() {},{}],"2unja":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d1bOn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1b5703774244a7a");
    if (script.__esModule) script = script.default;
    script.render = require("1f920fb470f42ae3").render;
    script.staticRenderFns = require("1f920fb470f42ae3").staticRenderFns;
    script._scopeId = "data-v-ece6bc";
    script.__cssModules = require("56ed21fc20d5c4e7").default;
    require("f71b04c8f68161c6").default(script);
    script.__scopeId = 'data-v-ece6bc';
    script.__file = "linkControlPointDialog.vue";
};
initialize();
exports.default = script;

},{"1b5703774244a7a":"7HOVj","1f920fb470f42ae3":"337mg","56ed21fc20d5c4e7":"lpI4t","f71b04c8f68161c6":"fNOOK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7HOVj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("spinal-env-viewer-plugin-attribute-manager/src/services/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkTogroupTemplateVue = require("../components/linkTogroupTemplate.vue");
var _linkTogroupTemplateVueDefault = parcelHelpers.interopDefault(_linkTogroupTemplateVue);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _event = require("spinal-env-viewer-room-manager/js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-template": (0, _linkTogroupTemplateVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.contextId;
        this.nodeId;
        this.STATES = {
            normal: "normal",
            loading: "loading",
            success: "success",
            error: "error"
        };
        return {
            showDialog: true,
            data: [],
            groups: [],
            categories: [],
            controlPoints: [],
            contextSelected: undefined,
            categorySelected: undefined,
            groupSelected: undefined,
            controlPointSelected: undefined,
            items: [],
            type: undefined,
            callback: undefined,
            state: this.STATES.normal
        };
    },
    mounted () {
        (0, _eventDefault.default).$on("itemCreated", (id)=>{
            this.getAllData();
        });
    },
    methods: {
        async opened ({ contextId, nodeId, type, callback }) {
            // this.items = option.itemSelected;
            this.contextId = contextId;
            this.nodeId = nodeId;
            this.type = type;
            this.callback = callback;
            this.state = this.STATES.loading;
            try {
                await this.getAllData();
                this.state = this.STATES.normal;
            } catch (error) {
                this.state = this.STATES.error;
            }
        // console.log(this.data);
        },
        async link () {
            this.state = this.STATES.loading;
            try {
                await (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).linkControlPointToGroup(this.nodeId, this.contextSelected, this.controlPointSelected);
                if (typeof this.callback !== "undefined") {
                    const context = this.data.find((el)=>el.id === this.contextSelected);
                    const category = this.categories.find((el)=>el.id === this.categorySelected);
                    const group = this.groups.find((el)=>el.id === this.groupSelected);
                    this.callback(context, category, group);
                }
                this.state = this.STATES.success;
            } catch (error) {
                this.state = this.STATES.error;
            }
        },
        async removed (option) {
            // if (option) {
            // 	// this.items.forEach((el) => {
            // 	//   attributeService.linkItem(
            // 	//     this.contextSelected,
            // 	//     this.groupSelected,
            // 	//     el.id
            // 	//   );
            // 	// });
            // }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getAllData () {
            return (0, _indexDefault.default).getAllGroupContext((0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).CONTROL_POINT_TYPE).then((res)=>{
                this.data = res;
                this.updateCategory();
                this.updateGroups();
                this.updateControlPoints();
            });
        },
        // getCategories() {
        //   this.categorySelected = undefined;
        //   if (this.contextSelected) {
        //     let val = this.data.find(el => el.id === this.contextSelected);
        //     if (val) return val.category;
        //   }
        //   return [];
        // },
        getGroups () {
            this.groupSelected = undefined;
            if (this.contextSelected && this.categorySelected) {
                let context = this.data.find((el)=>el.id === this.contextSelected);
                if (context) {
                    let category = context.category.find((el)=>el.id == this.categorySelected);
                    if (category) return category.groups;
                }
            }
            return [];
        },
        // disabled() {
        // 	return !(
        // 		this.contextSelected &&
        // 		this.categorySelected &&
        // 		this.groupSelected &&
        // 		this.controlPointSelected &&
        // 		this.state === this.STATES.normal
        // 	);
        // },
        createContext () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupContextDialog", {
                title: "Create a Grouping Context",
                typePreselected: (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).CONTROL_POINT_TYPE,
                callback: (id)=>this.contextSelected = id
            });
        },
        createCategory () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCategoryDialog", {
                title: "add Category",
                contextId: this.contextSelected,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.contextSelected),
                callback: (id)=>this.categorySelected = id
            });
        },
        createGroup () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupDialog", {
                title: "add Group",
                contextId: this.contextSelected,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.categorySelected),
                callback: (id)=>this.groupSelected = id
            });
        },
        ////////////////////////////////////////////////////////////////			// Updates
        ////////////////////////////////////////////////////////////////
        updateCategory () {
            // this.categorySelected = undefined;
            this.categories = [];
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) this.categories = val.category;
            }
        },
        updateGroups () {
            // this.groupSelected = undefined;
            this.groups = [];
            if (this.contextSelected && this.categorySelected) {
                let context = this.data.find((el)=>el.id === this.contextSelected);
                if (context) {
                    let category = context.category.find((el)=>el.id == this.categorySelected);
                    if (category) this.groups = category.groups;
                }
            }
        },
        async updateControlPoints () {
            this.controlPoints = [];
            if (this.contextSelected && this.categorySelected && this.groupSelected) {
                const res = await (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).getControlPoint(this.groupSelected);
                this.controlPoints = res.map((el)=>el.get());
            }
        },
        ////////////////////////////////////////////////////////////////			// Select
        ////////////////////////////////////////////////////////////////
        selectContext (id) {
            if (this.contextSelected === id) {
                this.contextSelected = undefined;
                return;
            }
            this.contextSelected = id;
        },
        selectCategory (id) {
            if (this.categorySelected === id) {
                this.categorySelected = undefined;
                return;
            }
            this.categorySelected = id;
        },
        selectGroup (id) {
            if (this.groupSelected === id) {
                this.groupSelected = undefined;
                return;
            }
            this.groupSelected = id;
        },
        selectControlPoint (id) {
            if (this.controlPointSelected === id) {
                this.controlPointSelected = undefined;
                return;
            }
            this.controlPointSelected = id;
        }
    },
    computed: {
        disabled () {
            return !(this.contextSelected && this.categorySelected && this.groupSelected && this.controlPointSelected && this.state === this.STATES.normal);
        },
        success () {
            return this.state === this.STATES.success;
        },
        error () {
            return this.state === this.STATES.error;
        }
    },
    watch: {
        contextSelected () {
            this.categorySelected = undefined;
            this.groupSelected = undefined;
            this.updateCategory();
            this.updateGroups();
            this.updateControlPoints();
        },
        categorySelected () {
            this.groupSelected = undefined;
            this.updateGroups();
            this.updateControlPoints();
        },
        groupSelected () {
            this.controlPointSelected = undefined;
            this.updateControlPoints();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-attribute-manager/src/services/index":"7zwYj","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","../components/linkTogroupTemplate.vue":"4W9o8","spinal-env-viewer-plugin-control-endpoint-service":"lck20","spinal-env-viewer-room-manager/js/event":"9nkln","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7zwYj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinalAttributeService", ()=>spinalAttributeService);
parcelHelpers.export(exports, "spinalConfigurationService", ()=>spinalConfigurationService);
var _spinalAttributeService = require("./classes/spinalAttributeService");
var _spinalAttributeServiceDefault = parcelHelpers.interopDefault(_spinalAttributeService);
var _spinalConfigurationService = require("./classes/spinalConfigurationService");
var _spinalConfigurationServiceDefault = parcelHelpers.interopDefault(_spinalConfigurationService);
const spinalAttributeService = new (0, _spinalAttributeServiceDefault.default)();
const spinalConfigurationService = new (0, _spinalConfigurationServiceDefault.default)();
exports.default = spinalAttributeService;

},{"./classes/spinalAttributeService":"dJGDB","./classes/spinalConfigurationService":"9Oc37","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dJGDB":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 SpinalCom - www.spinalcom.com
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
class SpinalAttributeService {
    constructor(){}
    async getAllAttributes(nodeId, liste) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (!realNode) return Promise.resolve([]);
        const categories = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(realNode);
        return categories.reduce((l, el)=>{
            let attrs = el.element.get();
            for (const attr of attrs){
                if (liste && !liste.includes(attr.label)) liste.push(attr.label);
                attr.category = el.nameCat;
                l.push(attr);
            }
            return l;
        }, []);
    }
    // get All Nodes and their attributes
    async getAllData(contextId, nodeId) {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let res = {
            types: [],
            attributes: [],
            data: {}
        };
        if (!context || !realNode) return res;
        await realNode.findInContext(context, async (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            await this._formatNodeAndItToList(node, res);
        });
        return res;
    }
    async _formatNodeAndItToList(node, res) {
        const info = node.info.get();
        const type = info.type;
        if (!res.types.includes(type)) res.types.push(type);
        if (!res.data[type]) res.data[type] = [];
        info.dynamicId = node._server_id;
        info.attributes = await this.getAllAttributes(info.id, res.attributes);
        res.data[type].push(info);
        return info;
    }
    async getBimObjectAttribute(bimObjectInfo, attributeName) {
        try {
            let value = attributeName.toLowerCase();
            const modelByBimFile = window.spinal.BimObjectService.getModelByBimfile(bimObjectInfo.bimFileId);
            let model = modelByBimFile || window.NOP_VIEWER.model;
            if (!model) return '-';
            const dbId = bimObjectInfo.dbid || bimObjectInfo.dbId;
            let properties = await this.getBimObjectProperties(model, [
                dbId
            ]);
            let found = properties.find(({ attributeName, displayName })=>[
                    attributeName.toLowerCase(),
                    displayName.toLowerCase()
                ].includes(value.toLowerCase()));
            if (found) return found.displayValue;
            return '-';
        } catch (error) {
            console.error(error);
            return "-";
        }
    }
    async createAttribute(nodeId, categoryName, attributeName, attributeValue) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let category = await this.getOrCreateCategory(realNode, categoryName);
        const value = (attributeValue && attributeValue.toString()).length > 0 ? attributeValue : "-";
        let attr = {
            label: attributeName,
            value
        };
        if (realNode.getType().get() === (0, _constants.BIM_OBJECT_TYPE) && value === "-") attr.value = await this.getBimObjectAttribute(realNode.info.get(), attributeName);
        await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(realNode, category, attr.label, attr.value);
    }
    async updateSeveralAttributes(nodeId, categoryName, attributes) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (!realNode) return;
        const category = await this.getOrCreateCategory(realNode, categoryName);
        const attributesList = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, category);
        const obj = this._convertLstToObj(attributesList);
        for (const attr of attributes)if (obj[attr.label]) obj[attr.label].mod_attr("value", attr.value);
        else await this.updateAttributeValue(nodeId, category, attr.label, attr.value);
    }
    async updateAttributeValue(nodeId, categoryName, attributeName, attributeValue) {
        let attr = await this.getOrCreateAttribute(nodeId, categoryName, attributeName, attributeValue);
        if (attr && typeof attr.value != "undefined") attr.mod_attr("value", attributeValue);
    }
    getBimObjects(nodeId) {
    // console.log(SpinalGraphService.getInfo(nodeId));
    // return SpinalGraphService.findNodes(nodeId,)
    }
    async getOrCreateAttribute(nodeId, categoryName, attributeName, attributeValue) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (!realNode) return;
        let category = await this.getOrCreateCategory(realNode, categoryName);
        let attr = await this.findAttributeInCategory(realNode, category, attributeName);
        if (attr) return attr;
        return this.createAttribute(nodeId, category, attributeName, attributeValue);
    }
    async findAttributeInCategory(realNode, category, attributeName) {
        const attributes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, category);
        for(let i = 0; i < attributes.length; i++){
            const el = attributes[i];
            if (el.label.get() === attributeName) return el;
        }
    }
    async getAllGroupContext(type) {
        const contexts = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(type);
        const promises = contexts.map(async (context)=>{
            context.category = await this.getCategory(context.id);
            return context;
        });
        return Promise.all(promises);
    }
    async getCategory(contextId) {
        const categories = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(contextId);
        const promises = categories.map(async (category)=>{
            let info = category.get();
            info.groups = await this.getGroup(category.id);
            return info;
        });
        return Promise.all(promises);
    }
    async getGroup(categoryId) {
        const groups = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(categoryId);
        return groups.map((el)=>el.get());
    }
    linkItem(contextId, parentId, itemId) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, parentId, itemId);
    }
    async getOrCreateCategory(realNode, categoryName) {
        if (typeof categoryName === "object") return categoryName;
        realNode = realNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode) ? realNode : (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(realNode);
        let category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(realNode, categoryName);
        if (!category) category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(realNode, categoryName);
        return category;
    }
    async getBimObjectProperties(model, dbIds) {
        const res = await (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectProperties({
            model: model,
            selection: dbIds
        });
        return res[0].properties[0].properties;
    }
    _convertLstToObj(lst) {
        const obj = {};
        for(let i = 0; i < lst.length; i++){
            let el = lst[i];
            obj[el.label.get()] = el;
        }
        return obj;
    }
}
exports.default = SpinalAttributeService;

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","spinal-env-viewer-bim-manager-service":"2m0Kp","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2m0Kp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const bimService_1 = require("edfb101c687f070e");
exports.bimObjectManagerService = bimService_1.default;

},{"edfb101c687f070e":"bDCOv"}],"bDCOv":[function(require,module,exports,__globalThis) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function(resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
class BimObjectManagerService {
    constructor(){}
    getAllBimObjectsProperties(model) {
        return this.getBimObjectProperties([
            {
                model: model,
                selection: this.getLeafDbIds(model).selection
            }
        ]);
    }
    getBimObjectProperties(argBimObjects) {
        // let properties = [];
        let bimOjects = Array.isArray(argBimObjects) ? argBimObjects : [
            argBimObjects
        ];
        let promises = bimOjects.map((el)=>{
            return this._getProperties(el.model, el.selection);
        });
        return Promise.all(promises).then((res)=>{
            return res;
        });
    }
    getLeafDbIds(model, rootId) {
        const tree = model.getInstanceTree();
        const dbIds = [];
        if (typeof rootId === "undefined") rootId = [
            tree.nodeAccess.rootId
        ];
        else rootId = Array.isArray(rootId) ? rootId : [
            rootId
        ];
        rootId.forEach((el)=>{
            const queue = [
                el
            ];
            let hasChildren;
            while(queue.length){
                let id = queue.pop();
                hasChildren = false;
                tree.enumNodeChildren(id, (childId)=>{
                    hasChildren = true;
                    queue.push(childId);
                });
                if (!hasChildren) dbIds.push(id);
            }
        });
        return {
            model: model,
            selection: dbIds
        };
    }
    getBimObjectsByPropertiesName(model, properties) {
        return this.getAllBimObjectsProperties(model).then((res)=>{
            let result = [];
            for(let i = 0; i < res.length; i++){
                const element = res[i];
                for(let j = 0; j < element.properties.length; j++){
                    const property = element.properties[j];
                    if (typeof this._getLabel(property, properties) !== "undefined") result.push(property);
                // }
                }
                return result;
            }
        });
    }
    getBimObjectsValidated(referential, regEx) {
        return this.getBimObjectProperties(referential).then((res)=>{
            return res.map((element)=>{
                return {
                    model: element.model,
                    properties: element.properties.filter((el)=>{
                        return this._isValid(el, regEx);
                    })
                };
            });
        });
    }
    getBimObjectsByName(model, bimObjectName, labelName) {
        return new Promise((resolve)=>{
            model.search(bimObjectName.trim(), (res)=>__awaiter(this, void 0, void 0, function*() {
                    let properties = yield this.getBimObjectProperties([
                        {
                            model: model,
                            selection: res
                        }
                    ]);
                    resolve(properties);
                }), ()=>{
                resolve([]);
            }, labelName);
        });
    }
    ////////////////////////////////////////////////////////////////////////
    //                             PRIVATES                               //
    ////////////////////////////////////////////////////////////////////////
    _getProperties(model, selection) {
        return __awaiter(this, void 0, void 0, function*() {
            let properties = selection.map((el)=>{
                return new Promise((resolve)=>{
                    model.getProperties(el, (res)=>{
                        // properties.push(res);
                        resolve(res);
                    }, (err)=>{
                        resolve(undefined);
                    });
                });
            });
            return {
                model: model,
                properties: yield Promise.all(properties)
            };
        });
    }
    _getAllDbIds(model) {
        var instanceTree = model.getData().instanceTree;
        var allDbIdsStr = Object.keys(instanceTree.nodeAccess.dbIdToIndex);
        return allDbIdsStr.map(function(id) {
            return parseInt(id);
        });
    }
    _getLabel(bim, properties) {
        for(let i = 0; i < properties.length; i++){
            const propertieValue = properties[i].value;
            const propertyName = properties[i].name;
            const found = bim.properties.find((el)=>{
                return typeof propertieValue === "undefined" || propertieValue.length === 0 ? el.displayName.toLowerCase() === propertyName.trim().toLocaleLowerCase() : el.displayName.toLowerCase() === propertyName.trim().toLocaleLowerCase() && propertieValue == el.displayValue;
            });
            if (typeof found === "undefined") return undefined;
        }
        return true;
    }
    _isValid(el, regEx) {
        for(let i = 0; i < regEx.length; i++){
            let nameRegex = regEx[i].nameRegex;
            let valueRegex = regEx[i].valueRegex;
            let found = el.properties.find((res)=>{
                if (typeof valueRegex === "undefined") return nameRegex.test(res.displayName);
                return nameRegex.test(res.displayName) && valueRegex.test(res.displayValue);
            });
            if (typeof found === "undefined") return false;
        }
        return true;
    }
}
exports.default = new BimObjectManagerService();

},{}],"9Oc37":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class SpinalConfigurationService {
    constructor(){
        this.CONTEXT_NAME = "NomenclatureConfiguration";
        this.CONFIGURATION_PROFIL_TYPE = "AttributeConfiguration";
        this.ATTRIBUTE_TYPE = "configurationAttribute";
    }
    async createOrGetContext() {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).createGroupContext(this.CONTEXT_NAME, this.CONFIGURATION_PROFIL_TYPE);
    }
    async createCategory(categoryName, iconName) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addCategory(contextId, categoryName, iconName);
    }
    async createGroup(categoryId, groupName, groupColor) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addGroup(contextId, categoryId, groupName, groupColor);
    }
    async createConfiguration(groupId, configurationName, configurationCategories = []) {
        const context = await this.createOrGetContext();
        const contextId = context ? context.info.id.get() : undefined;
        const element = new Model({
            name: configurationName,
            categories: configurationCategories
        });
        const configurationNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
            name: configurationName,
            type: this.CONFIGURATION_PROFIL_TYPE
        }, element);
        await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, groupId, configurationNodeId);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationNodeId);
    }
    async setAsCurrentConfiguration(nodeId) {
        const context = await this.createOrGetContext();
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (!realNode) return;
        if (context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
        context.info.add_attr({
            currentConfiguration: new Ptr(realNode)
        });
    }
    async deleteCurrentConf() {
        const context = await this.createOrGetContext();
        if (context && context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
    }
    async getCurrentConfiguration() {
        const context = await this.createOrGetContext();
        let confPtr = context.info.currentConfiguration;
        if (!confPtr) return {
            name: "",
            categories: []
        };
        return new Promise((resolve)=>{
            confPtr.load(async (realNode)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
                const el = await realNode.getElement();
                let element = el.get();
                element.id = realNode.getId().get();
                resolve(element);
            });
        });
    }
    async editConfiguration(configurationId, configurationElement) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationId);
        if (!realNode) return;
        const element = await realNode.getElement();
        element.set(configurationElement);
    }
    async getConfigurationById(configId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configId);
        if (!realNode) return;
        const elementModel = await realNode.getElement();
        if (elementModel) {
            let element = elementModel.get();
            element.id = configId;
            return element;
        }
    }
    async getCategories() {
        const context = await this.createOrGetContext();
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(context.info.id.get());
    }
    getGroups(nodeId) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(nodeId);
    }
    getConfigurations(groupId) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getElementsLinkedToGroup(groupId);
    }
    isGroup(type) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
    }
    isCategory(type) {
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type);
    }
    async getElementGroup(id) {
        const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(id, []);
        return parents[0];
    }
    async getTree(info) {
        if (this.isCategory(info.type)) return this.getTreeUntilCategory(info.id);
        if (this.isGroup(info.type)) return this.getTreeUntilGroup(info.id);
        if (info.type === this.CONFIGURATION_PROFIL_TYPE) return this.getTreeUntilProfile(info.id);
        return {};
    }
    getTreeUntilCategory(id) {
        return {
            categoryId: id
        };
    }
    async getTreeUntilGroup(id) {
        const category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(id);
        return {
            categoryId: category.id.get(),
            groupId: id
        };
    }
    async getTreeUntilProfile(id) {
        const group = await this.getElementGroup(id);
        if (!group) return {};
        const obj = await this.getTreeUntilGroup(group.id.get());
        obj.configId = id;
        return obj;
    }
}
exports.default = SpinalConfigurationService;

},{"spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4W9o8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c1c479aa6fc0768");
    if (script.__esModule) script = script.default;
    script.render = require("b7caf7c3326f8962").render;
    script.staticRenderFns = require("b7caf7c3326f8962").staticRenderFns;
    script._scopeId = "data-v-336e8f";
    script.__cssModules = require("422a24a2d1b43611").default;
    require("450f1b2ed133c683").default(script);
    script.__scopeId = 'data-v-336e8f';
    script.__file = "linkTogroupTemplate.vue";
};
initialize();
exports.default = script;

},{"c1c479aa6fc0768":"c6ktS","b7caf7c3326f8962":"f0Zht","422a24a2d1b43611":"gfpDI","450f1b2ed133c683":"eBkAC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c6ktS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "linkToGroupTemplate",
    props: [
        "data",
        "title",
        "itemSelected",
        "disableBtn"
    ],
    methods: {
        createEvent () {
            this.$emit("create");
        },
        selectItem (id) {
            this.$emit("select", id);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f0Zht":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "subContent"
    }, [
        _c('div', {
            staticClass: "title"
        }, [
            _c('div', [
                _vm._v(_vm._s(_vm.title))
            ])
        ]),
        _vm._v(" "),
        _c('md-content', {
            staticClass: "container md-scrollbar"
        }, [
            _c('md-list', _vm._l(_vm.data, function(item, index) {
                return _c('md-list-item', {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: item.name,
                            expression: "item.name"
                        }
                    ],
                    key: index,
                    staticClass: "list-item",
                    class: {
                        'selected': item.id === _vm.itemSelected
                    },
                    on: {
                        "click": function($event) {
                            return _vm.selectItem(item.id);
                        }
                    }
                }, [
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ])
                ]);
            }), 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gfpDI":[function() {},{}],"eBkAC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9nkln":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _utilities = require("./utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const EventBus = new (0, _vueDefault.default)();
EventBus.$on("mouseover", (item)=>{
    (0, _utilitiesDefault.default).getBimObjects(item.id).then((res)=>{
        let selections = [];
        res.forEach((el)=>{
            let info = el.get();
            let model = window.spinal.BimObjectService.getModelByBimfile(info.bimFileId);
            let selected = selections.find((el2)=>{
                return el2.model.id === model.id;
            });
            if (selected) selected.ids.push(el.dbid);
            else selections.push({
                model: model,
                ids: [
                    info.dbid
                ]
            });
        });
        window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(selections);
    });
});
EventBus.$on("mouseleave", ()=>{
    window.spinal.ForgeViewer.viewer.select();
});
exports.default = EventBus;

},{"vue":"hO3OD","./utilities":"lzCVv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lzCVv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
const ROOMS_RELATIONS = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_ROOMS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}`,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
];
const EQUIPMENTS_RELATIONS = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_EQUIPMENTS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}`,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION}.ROOM`
];
// const ROOMS_TYPES = [
//   groupManagerService.constants.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT,
//   groupManagerService.constants.CATEGORY_TYPE,
//   groupManagerService.constants.OLD_GROUPS_TYPES.ROOMS_GROUP,
//   `${geographicService.constants.ROOM_TYPE}GroupContext`,
//   `${geographicService.constants.ROOM_TYPE}Group`,
// ];
// // eslint-disable-next-line no-unused-vars
// const EQUIPMENTS_TYPES = [
//   groupManagerService.constants.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT,
//   groupManagerService.constants.CATEGORY_TYPE,
//   groupManagerService.constants.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP,
//   `${geographicService.constants.EQUIPMENT_TYPE}GroupContext`,
//   `${geographicService.constants.EQUIPMENT_TYPE}Group`,
// ];
let utilities = {
    getIcon (selectedNode) {
        return this._isColored(selectedNode).then((isColored)=>{
            return isColored;
        });
    },
    async getGroupBimObjects (groupId) {
        const groupInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(groupId);
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isRoomsGroup(groupInfo.type.get())) {
            const rooms = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(groupId, ROOMS_RELATIONS);
            const promises = rooms.map((el)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(el.id.get(), EQUIPMENTS_RELATIONS));
            return Promise.all(promises).then((res)=>{
                console.log("res equip", res);
                return res.flat();
            });
        }
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isEquipmentsGroup(groupInfo.type.get())) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(groupId, EQUIPMENTS_RELATIONS);
        return [];
    // let nodeInfo = SpinalGraphService.getInfo(nodeId);
    // let type = nodeInfo.type.get();
    // if (type === BIM_OBJECT_TYPE) return Promise.resolve([nodeInfo]);
    // if (type === geographicService.constants.ROOM_TYPE) {
    //   const { REFERENCE_RELATION, EQUIPMENT_RELATION } = geographicService.constants;
    //   const relations = [REFERENCE_RELATION, EQUIPMENT_RELATION];
    //   return SpinalGraphService.getChildren(nodeId, relations);
    // }
    // let relations = ROOMS_TYPES.includes(type) ? ROOMS_RELATIONS : EQUIPMENTS_RELATIONS;
    // const predicate = (node) => node.getType().get() === BIM_OBJECT_TYPE;
    // const node = SpinalGraphService.getRealNode(nodeId);
    // const found = [];
    // return SpinalGraphService.findNodes(nodeId, relations, (node) => {
    //   return node.getType().get() === BIM_OBJECT_TYPE;
    // }).then((res) => {
    //   return res.map((el) => {
    //     SpinalGraphService._addNode(el);
    //     return el.info;
    //   });
    // });
    },
    getGroups (selectedNode) {
        try {
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(selectedNode.id.get());
        } catch (error) {
            console.error("getGroups error");
            console.error(error);
        }
    // let type = selectedNode.type.get();
    // let nodeId = selectedNode.id.get();
    // if (groupManagerService.isGroup(type)) {
    //   return Promise.resolve([selectedNode]);
    // }
    // if (groupManagerService.isCategory(type)) groupManagerService.getGroups(nodeId);
    // let relations = [];
    // return SpinalGraphService.findNodes(nodeId, relations, (node) => {
    //   let argType = node.getType().get();
    //   return groupManagerService.isGroup(argType);
    // }).then((res) => {
    //   return res.map((el) => {
    //     SpinalGraphService._addNode(el);
    //     return el.info;
    //   });
    // });
    },
    colorItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id = el.id.get();
                let color = el.color ? el.color.get() : undefined;
                this.colorGroup(id, color);
            });
        });
    },
    restoreItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id = el.id.get();
                this.restoreGroup(id);
            });
        });
    },
    colorGroup (groupId, argColor) {
        this.getGroupBimObjects(groupId).then((res)=>{
            console.log("res", res);
            let color = argColor ? this._convertHexColorToRGB(argColor) : this._convertHexColorToRGB("#000000");
            ItemColoredMap.set(groupId, groupId);
            for (const child of res){
                const dbId = child.dbid.get();
                let BimColors = BimElementsColor.get(dbId) || [];
                BimColors.push({
                    id: groupId,
                    color: color
                });
                BimElementsColor.set(dbId, BimColors);
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                console.log(model);
                if (model) model.setThemingColor(dbId, new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7, true));
            }
        });
    },
    restoreGroup (groupId) {
        this.getGroupBimObjects(groupId).then((res)=>{
            ItemColoredMap.delete(groupId);
            for (const child of res){
                const dbId = child.dbid.get();
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                model.setThemingColor(dbId, new THREE.Vector4(0, 0, 0, 0), true);
                let allColors = BimElementsColor.get(dbId);
                if (!allColors) continue;
                allColors = allColors.filter((el)=>el.id !== groupId);
                BimElementsColor.set(dbId, allColors);
                if (allColors.length > 0) {
                    let color = allColors[0].color;
                    model.setThemingColor(dbId, new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7), true);
                }
            }
        });
    },
    async consumeBatch (promises, batchSize = 2) {
        let index = 0;
        const result = {
            successed: [],
            failed: []
        };
        while(index < promises.length){
            let endIndex = index + batchSize;
            if (promises.length <= endIndex) endIndex = promises.length;
            const slice = promises.slice(index, endIndex);
            const { successed, failed } = await this.getPromiseResult(slice.map((e)=>e()));
            result.successed.push(...successed);
            result.failed.push(...failed);
            index = endIndex;
        }
        return result;
    },
    getPromiseResult (liste) {
        return Promise.allSettled(liste).then((result)=>{
            const obj = {
                successed: [],
                failed: []
            };
            for (const { status, value } of result)if (status === "fulfilled") obj.successed.push(value);
            else obj.failed.push(value);
            return obj;
        });
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                    Private                                   //
    //////////////////////////////////////////////////////////////////////////////////////////////////
    _isColored (selectedNode) {
        return this.getGroups(selectedNode).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id = res[index].id.get();
                if (typeof ItemColoredMap.get(id) === "undefined") return false;
            }
            return true;
        });
    },
    _convertHexColorToRGB (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
};
exports.default = utilities;

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"337mg":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.showDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c('md-dialog-title', {
            staticClass: "dialogTitle"
        }, [
            _vm._v("\n\t\tSelect Controlpoint\n\t")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _vm.state === _vm.STATES.normal ? _c('div', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Contexts',
                            "data": _vm.data,
                            "itemSelected": _vm.contextSelected,
                            "disableBtn": false
                        },
                        on: {
                            "create": _vm.createContext,
                            "select": _vm.selectContext
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Categories',
                            "data": _vm.categories,
                            "itemSelected": _vm.categorySelected,
                            "disableBtn": !_vm.contextSelected
                        },
                        on: {
                            "create": _vm.createCategory,
                            "select": _vm.selectCategory
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Groups',
                            "data": _vm.groups,
                            "itemSelected": _vm.groupSelected,
                            "disableBtn": !_vm.categorySelected
                        },
                        on: {
                            "create": _vm.createGroup,
                            "select": _vm.selectGroup
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "section"
                }, [
                    _c('link-template', {
                        attrs: {
                            "title": 'Control Points',
                            "data": _vm.controlPoints,
                            "itemSelected": _vm.controlPointSelected,
                            "disableBtn": !_vm.categorySelected
                        },
                        on: {
                            "create": _vm.createGroup,
                            "select": _vm.selectControlPoint
                        }
                    })
                ], 1)
            ]) : _c('div', {
                staticClass: "states"
            }, [
                _vm.state === _vm.STATES.loading ? _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                }) : _vm.state === _vm.STATES.error ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("close")
                ]) : _vm.state === _vm.STATES.success ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("check")
                ]) : _vm._e()
            ], 1)
        ]),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(false);
                    }
                }
            }, [
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabled
                },
                on: {
                    "click": _vm.link
                }
            }, [
                _vm._v("Save")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lpI4t":[function() {},{}],"fNOOK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k9xnm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7ddd34c5a32fcc6d");
    if (script.__esModule) script = script.default;
    script.render = require("24ca93a65d97632a").render;
    script.staticRenderFns = require("24ca93a65d97632a").staticRenderFns;
    script._scopeId = "data-v-0af996";
    script.__cssModules = require("b4adb5bb0d56c210").default;
    require("2c4eeea0810deed8").default(script);
    script.__scopeId = 'data-v-0af996';
    script.__file = "selectGeoType.vue";
};
initialize();
exports.default = script;

},{"7ddd34c5a32fcc6d":"llNk2","24ca93a65d97632a":"eKuCE","b4adb5bb0d56c210":"3DVxE","2c4eeea0810deed8":"arNGE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"llNk2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        this.contextId;
        this.nodeId;
        return {
            showDialog: true,
            types: [],
            type: "",
            callback: undefined
        };
    },
    mounted () {},
    methods: {
        async opened ({ type, callback }) {
            // this.contextId = contextId;
            // this.nodeId = nodeId;
            this.callback = callback;
            this.type = type;
            this.types = this.getTypes(type);
        },
        async removed (option) {
            if (option && typeof this.callback !== "undefined") this.callback(this.type);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getTypes (type) {
            // const types = [];
            // await SpinalGraphService.findInContext(
            // 	contextId,
            // 	nodeId,
            // 	(node) => {
            // 		const type = node.getType.get();
            // 		if (types.indexOf(type) !== -1) types.push(type);
            // 		return true;
            // 	}
            // );
            // return types;
            const index = (0, _constants.GEOGRAPHIC_TYPES_ORDER).indexOf(type);
            if (index === -1) return 0, _constants.GEOGRAPHIC_TYPES_ORDER;
            return (0, _constants.GEOGRAPHIC_TYPES_ORDER).slice(index);
        },
        disabled () {
            return this.type.length === 0;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eKuCE":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.showDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showDialog = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c('md-dialog-title', {
            staticClass: "dialogTitle"
        }, [
            _vm._v("\n\t\tLink Controlpoint To\n\t")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _c('md-field', [
                _c('label', {
                    attrs: {
                        "for": "type"
                    }
                }, [
                    _vm._v("Link controlpoint to all")
                ]),
                _vm._v(" "),
                _c('md-select', {
                    attrs: {
                        "name": "type",
                        "id": "type"
                    },
                    model: {
                        value: _vm.type,
                        callback: function($$v) {
                            _vm.type = $$v;
                        },
                        expression: "type"
                    }
                }, _vm._l(_vm.types, function(t) {
                    return _c('md-option', {
                        key: t,
                        attrs: {
                            "value": t
                        }
                    }, [
                        _vm._v("\n\t\t\t\t\t" + _vm._s(t) + "\n\t\t\t\t")
                    ]);
                }), 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(false);
                    }
                }
            }, [
                _vm._v("\n\t\t\tCancel\n\t\t")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("\n\t\t\tSave\n\t\t")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3DVxE":[function() {},{}],"arNGE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ddAwe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _controlPointEditVue = require("./controlPointEdit.vue");
var _controlPointEditVueDefault = parcelHelpers.interopDefault(_controlPointEditVue);
var _unLinkControlPointPanelVue = require("./unLinkControlPointPanel.vue");
var _unLinkControlPointPanelVueDefault = parcelHelpers.interopDefault(_unLinkControlPointPanelVue);
// import HeatmapPanel from "./heatmap-panel.vue";
const panels = [
    {
        name: "editControlPointPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _controlPointEditVueDefault.default)),
        panel: {
            title: "Control Points",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "660px",
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "UnLinkControlpointPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _unLinkControlPointPanelVueDefault.default)),
        panel: {
            title: "Unlink Control Point to group",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "660px",
            height: "475px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","./controlPointEdit.vue":"giepw","./unLinkControlPointPanel.vue":"aiUlH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2018 SpinalCom - www.spinalcom.com
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
 */ const { spinalPanelManagerService, SpinalPanelApp } = require("bf7edd8450503e22");
const SpinalForgeExtention = require("64bd1569b4ded066")(spinalPanelManagerService, SpinalPanelApp);
module.exports = {
    SpinalForgeExtention
};

},{"bf7edd8450503e22":"egTXY","64bd1569b4ded066":"8qsfD"}],"8qsfD":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2023 SpinalCom - www.spinalcom.com
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
 */ function configInit(option) {
    const cfg = {};
    if (typeof option.toolbar !== "undefined") {
        cfg.toolbar = {
            icon: option.toolbar.icon || "done",
            label: option.toolbar.label || "label",
            subToolbarName: option.toolbar.subToolbarName || "spinalcom",
            styleBtn: {},
            styleIcon: {}
        };
        Object.assign(cfg.toolbar.styleBtn, option.toolbar.styleBtn);
        Object.assign(cfg.toolbar.styleIcon, option.toolbar.styleIcon);
    }
    if (typeof option.panel !== "undefined") {
        cfg.panel = {
            title: option.panel.title || "Spinalcom Panel",
            classname: option.panel.classname || "spinal-pannel",
            closeBehaviour: option.panel.closeBehaviour || "hide"
        };
        if (typeof option.style !== "undefined") {
            cfg.style = {};
            Object.assign(cfg.style, option.style);
        }
    }
    cfg.name = option.name || "spinalExtention";
    cfg.vueMountComponent = option.vueMountComponent;
    cfg.onLoad = option.onLoad;
    cfg.onUnLoad = option.onUnLoad;
    return cfg;
}
function onToolbarCreated() {
    this.viewer.removeEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded);
    this.onToolbarCreatedBinded = null;
    createToolbar.call(this);
}
function createToolbar() {
    this.toolbarButton = new window.Autodesk.Viewing.UI.Button(this.cfg.toolbar.label);
    this.toolbarButton.onClick = ()=>{
        this.tooglePanel(this.cfg);
    };
    var icon = this.toolbarButton.container.firstChild;
    icon.className = "adsk-button-icon md-icon md-icon-font md-theme-default";
    icon.innerHTML = this.cfg.toolbar.icon;
    for(var key in this.cfg.toolbar.styleIcon)if (this.cfg.toolbar.styleIcon.hasOwnProperty(key)) icon.style[key] = this.cfg.toolbar.styleIcon[key];
    for(var key in this.cfg.toolbar.styleBtn)if (this.cfg.toolbar.styleBtn.hasOwnProperty(key)) this.toolbarButton.container.style[key] = this.cfg.toolbar.styleBtn[key];
    this.toolbarButton.setToolTip(this.cfg.toolbar.label);
    this.subToolbar = this.viewer.toolbar.getControl(this.cfg.toolbar.subToolbarName);
    if (!this.subToolbar) {
        this.subToolbar = new window.Autodesk.Viewing.UI.ControlGroup(this.cfg.toolbar.subToolbarName);
        this.viewer.toolbar.addControl(this.subToolbar);
    }
    this.subToolbar.addControl(this.toolbarButton);
}
function closeComponent() {
    if (this.cfg.panel.closeBehaviour !== "hide") {
        try {
            this.component.removed.call(this.component);
        } catch (e) {
            console.error(e);
        }
        this.panel.container.remove();
        this.panel = null;
    } else try {
        this.component.closed.call(this.component);
    } catch (e) {
        console.error(e);
    }
}
function getPanel() {
    if (this.panel === null) {
        this.panel = new window.PanelClass(this.viewer, this.cfg.panel.title);
        var _container = document.createElement("div");
        var _scrollContainer = this.panel.createScrollContainer();
        _container.className += this.panel.container.id + "-panelcontainer " + this.cfg.panel.classname;
        for(var key in this.cfg.style)if (this.cfg.style.hasOwnProperty(key)) this.panel.container.style[key] = this.cfg.style[key];
        if (this.panel.container.style.left) this.panel.container.style.left = "0";
        this.panel.container.appendChild(_scrollContainer);
        _scrollContainer.style.height = "calc(100% - 52px)";
        _scrollContainer.appendChild(_container);
        var _footer = this.panel.createFooter();
        this.panel.container.appendChild(_footer);
        if (this.cfg.vueMountComponent) this.component = new this.cfg.vueMountComponent().$mount(_container);
        const _this = this;
        this.panel.addVisibilityListener((open)=>{
            if (!open) closeComponent.call(_this);
        });
    }
    return this.panel;
}
/**
 *
 *
 * @param {*} spinalPanelManagerService
 * @param {*} SpinalPanelApp
 * @returns {object} { createExtention, registerExtention }
 */ module.exports = function(spinalPanelManagerService, SpinalPanelApp) {
    return {
        /**
     * factory function to create a dynamic class that extends the `SpinalPanelApp` class
     *```js
{
  name: "extention_name",
  vueMountComponent: Vue.extend(aVueCompoment),
  onLoad: () => {console.log("onLoad");},
  onUnLoad: () => {console.log("onUnLoad");},
  toolbar: {
    icon: "done",
    label: "testLabel",
    subToolbarName: "spinalcom"
  },
  panel: {
    title: "Spinalcom Panel",
    classname: "spinal-pannel",
    closeBehaviour: "hide"
  },
  style: {}
}
```
     * @param {object} option see description
     * @returns SpinalForgeExtention
     */ createExtention (option) {
            const cfg = configInit(option);
            /**
       * class returned by createExtention
       * this extention is also registered in autodesk viweer
       * @extends SpinalPanelApp
       * @property {AutodeskViewer} viewer the autodesk view
       * @property {AutodeskPanel} panel the panel
       * @property {Vue.component} component the component mounted
       * @property {Object} cfg the option given on creation
       */ const SpinalForgeExtention = class extends SpinalPanelApp {
                constructor(viewer, options){
                    super();
                    window.Autodesk.Viewing.Extension.call(this, viewer, options);
                    this.viewer = viewer;
                    this.panel = null;
                    this.cfg = cfg;
                    spinalPanelManagerService.registerPanel(cfg.name, this);
                }
                /**
         * method called on load of the extention (managed by the autodesk viewer)
         * the method create a button in the toolbar if put in the option of `createExtention`.
         */ load() {
                    if (typeof cfg.toolbar !== "undefined") {
                        // add toolbar
                        if (this.viewer.toolbar) createToolbar.call(this);
                        else {
                            this.onToolbarCreatedBinded = onToolbarCreated.bind(this);
                            this.viewer.addEventListener(window.Autodesk.Viewing.TOOLBAR_CREATED_EVENT, this.onToolbarCreatedBinded);
                        }
                    }
                    if (typeof cfg.onLoad !== "undefined") cfg.onLoad.call(this);
                    return true;
                }
                /**
         * method called when the viewer unload of the extention
         * (managed by the autodesk viewer)
         */ unload() {
                    if (typeof cfg.toolbar !== "undefined") this.viewer.subToolbar.removeControl(this.toolbarButton);
                    if (typeof cfg.onUnLoad !== "undefined") cfg.onUnLoad.call(this);
                    return true;
                }
                activate() {
                    return this.load();
                }
                deactivate() {
                    return this.unload();
                }
                /**
         *
         * @param {*} option
         */ openPanel(option) {
                    const panel = getPanel.call(this);
                    panel.setVisible(true);
                    try {
                        this.component.opened.call(this.component, option, this.viewer);
                    } catch (e) {
                        console.error(e);
                    }
                }
                /**
         *
         *
         * @param {*} option
         */ closePanel(option) {
                    const panel = getPanel.call(this);
                    panel.setVisible(false);
                }
                /**
         *
         *
         * @param {*} option
         */ tooglePanel(option) {
                    if (this.panel === null || this.panel.isVisible() === false) this.openPanel.call(this, option);
                    else this.closePanel.call(this, option);
                }
            };
            return SpinalForgeExtention;
        },
        /**
     * Method to register an extention to the viewer and the forge viewer
     * @param {string} name name of the extention
     * @param {*} classExtention an extention created by `createExtention`
     */ registerExtention (name, classExtention) {
            // register to forge
            window.Autodesk.Viewing.theExtensionManager.registerExtension(name, classExtention);
            // register to viewer
            window.spinal.ForgeExtentionManager.addExtention(name);
        }
    };
};

},{}],"giepw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3e8de36af07d260e");
    if (script.__esModule) script = script.default;
    script.render = require("983154c142585fd0").render;
    script.staticRenderFns = require("983154c142585fd0").staticRenderFns;
    script._scopeId = "data-v-314686";
    script.__cssModules = require("77b7e1cc4f786525").default;
    require("42a58fb9b5b38fc0").default(script);
    script.__scopeId = 'data-v-314686';
    script.__file = "controlPointEdit.vue";
};
initialize();
exports.default = script;

},{"3e8de36af07d260e":"2qdkC","983154c142585fd0":"bHqAD","77b7e1cc4f786525":"5uMNP","42a58fb9b5b38fc0":"izLSl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2qdkC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _controlPointsVue = require("../components/controlPoints.vue");
var _controlPointsVueDefault = parcelHelpers.interopDefault(_controlPointsVue);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _event = require("../../utilities/event");
var scriptExports = {
    name: "editControlPointPanel",
    components: {
        "control-point-vue": (0, _controlPointsVueDefault.default)
    },
    data () {
        this.contextId;
        this.nodeId;
        return {
            editMode: false,
            data: []
        };
    },
    methods: {
        async opened (option) {
            this.contextId = option.context.id;
            this.nodeId = option.selectedNode.id;
            const res = await (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).getControlPointProfil(this.contextId, this.nodeId);
            this.editMode = false;
            this.setData(res);
        },
        closed () {},
        async confirm (validItems) {
            return (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).editControlPointProfil(this.contextId, this.nodeId, validItems).then((res)=>{
                this.setData(res);
                this.disabledEditMode();
                (0, _event.EventBus).$emit("update-controlPoint", {
                    contextId: this.contextId,
                    controlPointId: this.nodeId,
                    items: res.endpoints.get()
                });
            });
        },
        cancel () {},
        setData (res) {
            if (res.endpoints) this.data = res.endpoints.get();
        },
        activeEditMode () {
            this.editMode = true;
        },
        disabledEditMode () {
            this.editMode = false;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/controlPoints.vue":"jmPIY","spinal-env-viewer-plugin-control-endpoint-service":"lck20","../../utilities/event":"eOxBA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bHqAD":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "control_points_container"
    }, [
        !_vm.editMode ? _c('md-button', {
            staticClass: "md-fab md-mini md-plain md-primary md-fab-bottom-right",
            on: {
                "click": _vm.activeEditMode
            }
        }, [
            _c('md-icon', [
                _vm._v("edit")
            ])
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c('control-point-vue', {
            attrs: {
                "editMode": _vm.editMode,
                "data": _vm.data
            },
            on: {
                "cancel": _vm.disabledEditMode,
                "confirm": _vm.confirm
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5uMNP":[function() {},{}],"izLSl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aiUlH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("dc040ed744f796dc");
    if (script.__esModule) script = script.default;
    script.render = require("e0c4eaffd114d8e5").render;
    script.staticRenderFns = require("e0c4eaffd114d8e5").staticRenderFns;
    script._scopeId = "data-v-214602";
    script.__cssModules = require("393caf86bba76c60").default;
    require("51784d02c9404db8").default(script);
    script.__scopeId = 'data-v-214602';
    script.__file = "unLinkControlPointPanel.vue";
};
initialize();
exports.default = script;

},{"dc040ed744f796dc":"3AfMV","e0c4eaffd114d8e5":"byP0j","393caf86bba76c60":"4ddFC","51784d02c9404db8":"8Bw3v","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3AfMV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
const { spinalPanelManagerService } = require("85a6910f04d9a211");
var scriptExports = {
    name: "unLinkControlPointPanel",
    props: [
        "onFinised"
    ],
    data () {
        this.PAGES = {
            loaded: 0,
            loading: 1,
            error: 2
        };
        this.groupId;
        return {
            showDialog: true,
            state: this.PAGES.loading,
            controlEndpoints: []
        };
    },
    mounted () {},
    methods: {
        opened ({ id, name }) {
            this.state = this.PAGES.loading;
            this.groupId = id;
            this.getControlPointLinked(id).then((result)=>{
                this.setTitle(name);
                this.controlEndpoints = result.map((el)=>el.get());
                this.state = this.PAGES.loaded;
            }).catch((err)=>{
                console.error(err);
                this.state = this.PAGES.error;
            });
        },
        closed () {},
        // closeDialog(closeResult) {
        //   if (typeof this.onFinised === "function") {
        //     this.onFinised(closeResult);
        //   }
        // },
        getControlPointLinked (groupId) {
            return (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).getElementLinked(groupId);
        },
        unLinkControlPoint (controlPointId) {
            this.state = this.PAGES.loading;
            return (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).unLinkControlPointToGroup(this.groupId, controlPointId).then(()=>{
                this.controlEndpoints = this.controlEndpoints.filter((el)=>el.id !== controlPointId);
                this.state = this.PAGES.loaded;
            });
        },
        setTitle (title) {
            spinalPanelManagerService.panels.UnLinkControlpointPanel.panel.setTitle(`Unlink Control Point to group : ${title}`);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","85a6910f04d9a211":"egTXY","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"byP0j":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_unLinkDialogContent"
    }, [
        _vm.state === _vm.PAGES.loaded ? _c('div', {
            staticClass: "content"
        }, [
            _vm.controlEndpoints.length === 0 ? _c('div', {
                staticClass: "state"
            }, [
                _vm._v("\n      No controlPoints linked\n    ")
            ]) : _c('md-list', {
                staticClass: "list_content md-scrollbar"
            }, _vm._l(_vm.controlEndpoints, function(item) {
                return _c('md-list-item', {
                    key: item.id
                }, [
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-icon-button md-list-action",
                        on: {
                            "click": function($event) {
                                return _vm.unLinkControlPoint(item.id);
                            }
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "md-accent"
                        }, [
                            _vm._v("link_off")
                        ])
                    ], 1)
                ], 1);
            }), 1)
        ], 1) : _c('div', {
            staticClass: "state"
        }, [
            _vm.state === _vm.PAGES.loading ? _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            }) : _c('md-icon', {
                staticClass: "md-size-5x"
            }, [
                _vm._v("error")
            ])
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4ddFC":[function() {},{}],"8Bw3v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Vzxd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _heatmapContainerVue = require("./heatmap-container.vue");
var _heatmapContainerVueDefault = parcelHelpers.interopDefault(_heatmapContainerVue);
let legendsHeatmapComponent = (0, _vueDefault.default).extend((0, _heatmapContainerVueDefault.default));
let app = new legendsHeatmapComponent();
app.$mount();
document.getElementsByTagName("body")[0].appendChild(app.$el);

},{"vue":"hO3OD","./heatmap-container.vue":"2sdZX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2sdZX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("78075c93296ff468");
    if (script.__esModule) script = script.default;
    script.render = require("2197d627c4e45235").render;
    script.staticRenderFns = require("2197d627c4e45235").staticRenderFns;
    script._scopeId = "data-v-818754";
    script.__cssModules = require("1bf7e10a49c8dc29").default;
    require("4a9ad9773e5c61c9").default(script);
    script.__scopeId = 'data-v-818754';
    script.__file = "heatmap-container.vue";
};
initialize();
exports.default = script;

},{"78075c93296ff468":"3PHTO","2197d627c4e45235":"lRAxk","1bf7e10a49c8dc29":"awbfm","4a9ad9773e5c61c9":"iH1Hs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3PHTO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _heatmapVue = require("../components/heatmap.vue");
var _heatmapVueDefault = parcelHelpers.interopDefault(_heatmapVue);
var _event = require("../../utilities/event");
var _itemsColored = require("../../utilities/itemsColored");
var scriptExports = {
    name: "heatmapPanel",
    components: {
        "heatmap-legend": (0, _heatmapVueDefault.default)
    },
    data () {
        this.button;
        return {
            legendLength: 0,
            data: {}
        };
    },
    mounted () {
        this.openEvent();
        this.getUpdateEvent();
    },
    methods: {
        // async opened(option) {
        //   const groupId = option.selectedNode.id;
        //   if (this.data[groupId]) {
        //     this.destroyLegend(groupId);
        //     const res = Object.assign({}, this.data);
        //     delete res[groupId];
        //     this.data = Object.assign({}, res);
        //     return;
        //   }
        //   const data = await this.getAllData(groupId);
        //   this.data = Object.assign({}, this.data, { [groupId]: data });
        // },
        async getAllData (groupId) {
            const data = await (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).getDataFormated(groupId);
            return data;
        },
        closeLegend (groupId) {
            if (this.data[groupId]) {
                this.destroyLegend(groupId);
                const res = Object.assign({}, this.data);
                delete res[groupId];
                this.data = Object.assign({}, res);
                this.legendLength = Object.keys(this.data).length;
                (0, _itemsColored.itemColoredMap).delete(groupId);
                if (this.button) this.button.fontColor = "#FFFFFF";
                return;
            }
        },
        destroyLegend (id) {
            if (typeof this.$refs[id] !== "undefined") this.$refs[id][0].$destroy();
        },
        closed () {},
        openEvent () {
            (0, _event.EventBus).$on("heatmapPanel", async (option)=>{
                const groupId = option.selectedNode.id;
                this.button = option.button;
                if (this.data[groupId]) {
                    this.destroyLegend(groupId);
                    const res = Object.assign({}, this.data);
                    delete res[groupId];
                    this.data = Object.assign({}, res);
                    this.legendLength = Object.keys(this.data).length;
                    return;
                }
                const data = await this.getAllData(groupId);
                if (data.length === 0) {
                    alert("No controlpoint Linked");
                    if (this.button) this.button.fontColor = "#FFFFFF";
                    return;
                }
                this.data = Object.assign({}, this.data, {
                    [groupId]: data
                });
                this.legendLength = Object.keys(this.data).length;
            });
        },
        getUpdateEvent () {
            (0, _event.EventBus).$on("update-controlPoint", (option)=>{
                Object.keys(this.data).map(async (groupId)=>{
                    const data = await this.getAllData(groupId);
                    this.data[groupId] = data;
                });
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-control-endpoint-service":"lck20","../components/heatmap.vue":"16JRn","../../utilities/event":"eOxBA","../../utilities/itemsColored":"6IZOf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"16JRn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("aa3ca27a466732ed");
    if (script.__esModule) script = script.default;
    script.render = require("b7ab112426355ef9").render;
    script.staticRenderFns = require("b7ab112426355ef9").staticRenderFns;
    script._scopeId = "data-v-681006";
    script.__cssModules = require("720f20569cfe356e").default;
    require("21206b33b4eafe81").default(script);
    script.__scopeId = 'data-v-681006';
    script.__file = "heatmap.vue";
};
initialize();
exports.default = script;

},{"aa3ca27a466732ed":"j3337","b7ab112426355ef9":"epWr9","720f20569cfe356e":"1YSyE","21206b33b4eafe81":"0J27u","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j3337":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _color = require("../../utilities/color");
var _utitlities = require("../../utilities/utitlities");
var _utitlitiesDefault = parcelHelpers.interopDefault(_utitlities);
var scriptExports = {
    name: "heatmap-legend",
    props: {
        controlPoints: {},
        id: {}
    },
    mounted () {
        const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.id);
        if (info) this.title = info.name.get();
        this.updateData();
    // if (this.controlPoints && this.controlPoints.length > 0) {
    //   this.endpointProfils = this.formatProfil(this.controlPoints);
    //   this.selectEndpointType(this.endpointProfils[0]);
    //   // this.controlPointSelected = this.controlPoints[0].id;
    //   // this.selectControlPoint(this.controlPointSelected, true);
    // }
    },
    data () {
        this.bindProcessMap = new Map();
        this.bimObjectsColored = [];
        return {
            title: "",
            controlPointSelected: undefined,
            endpointTypeSelected: undefined,
            endpointProfils: [],
            gradient: []
        };
    },
    methods: {
        // selectControlPoint(id, continues = false) {
        //   const found = this.controlPoints.find((el) => el.id === id);
        //   this.endpointProfils = found.endpointProfils;
        //   this.endpointTypeSelected = JSON.stringify(this.endpointProfils[0]);
        //   if (continues) {
        //     this.selectEndpointType(this.endpointTypeSelected);
        //   }
        // },
        selectEndpointType (profil) {
            // const profil = JSON.parse(argProfil);
            if (profil) {
                // console.log("profil", profil);
                this.endpointTypeSelected = profil.id;
                this.controlPointSelected = profil.contextId;
                this.gradient = this.getColorsGradient(profil.config);
                this.colorHeatmap(profil);
            } else this.gradient = [];
        },
        getColorsGradient (config) {
            if (config.enumeration) return (0, _color.color).getEnumGradientColor(config.enumeration);
            let _colors = (0, _color.color).getGradientColor(config.min, config.average, config.max);
            return _colors.map((el, index)=>{
                return {
                    color: `#${el.toHex()}`,
                    value: this.getValue(index, config.max.value, config.min.value)
                };
            });
        },
        getValue (index, max, min) {
            if (isNaN(parseInt(min)) && isNaN(parseInt(max))) return index ? "True" : "False";
            return Number(min) + (Number(max) - Number(min)) * Number(index) / 10;
        },
        getColor (endpointValue, config) {
            if (config.enumeration) return (0, _color.color).getEnumColor(endpointValue, config.enumeration);
            let gradient = (0, _color.color).getGradientColor(config.min, config.average, config.max);
            return (0, _color.color).getColor(endpointValue, config.min.value, config.max.value, gradient);
        // return color.getColor(
        //   endpointValue,
        //   config.min.value,
        //   config.max.value,
        //   this.gradient
        // );
        // let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
        // return result
        //   ? {
        //       r: parseInt(result[1], 16),
        //       g: parseInt(result[2], 16),
        //       b: parseInt(result[3], 16),
        //     }
        //   : null;
        },
        async colorHeatmap (profil) {
            this.unBindAll();
            const res = await this.getEndpointToBind(profil.id);
            if (typeof res === "undefined") return;
            this.bimObjectsColored.push(...res.map((el)=>el.ids).flat());
            res.forEach((element)=>{
                let bindProcess = element.endpoint.currentValue.bind(()=>{
                    const value = element.endpoint.currentValue.get();
                    // const config = element.endpoint.config.get();
                    let color = this.getColor(value, profil.config);
                    let vector = (0, _utitlitiesDefault.default).convertColorToTHREE_Vector(color);
                    element.ids.forEach(({ model, ids })=>{
                        ids.forEach((id)=>{
                            model.setThemingColor(id, vector, true);
                        });
                    // model.setThemingColor(ids, vector, true);
                    });
                    window.spinal.ForgeViewer.viewer.impl.invalidate(true);
                // let model = window.spinal.BimObjectService.getModelByBimfile(
                //   element.room.bimFileId
                // );
                // model.setThemingColor(element.room.dbid, vector, true);
                });
                this.bindProcessMap.set(element.endpoint, bindProcess);
            });
        },
        restoreColor () {
            const vector = new THREE.Vector4(0, 0, 0, 0);
            this.bimObjectsColored.forEach(({ model, ids })=>{
                ids.forEach((dbid)=>model.setThemingColor(dbid, vector, true));
            });
            window.spinal.ForgeViewer.viewer.impl.invalidate(true);
        },
        getEndpointToBind (endpointId) {
            const controlPoint = this.controlPoints.find((el)=>el.id === this.controlPointSelected);
            if (controlPoint) {
                const promises = controlPoint.rooms.map(async (el)=>{
                    const endpoint = el.endpoints.find(// (e) => e.type.get() === endpointType
                    (e)=>e.id.get() == endpointId);
                    return {
                        endpoint,
                        ids: await (0, _utitlitiesDefault.default).getReferenceObject(el.id)
                    };
                });
                return Promise.all(promises);
            }
        },
        unBindAll () {
            this.bindProcessMap.forEach((value, key)=>{
                key.currentValue.unbind(value);
                this.bindProcessMap.delete(key);
            });
        },
        disabledEndpointsSelected () {
            return typeof this.controlPointSelected === "undefined";
        },
        formatProfil (liste) {
            const profils = [];
            for (const context of liste){
                const items = context.endpointProfils.map((element)=>{
                    const el = JSON.parse(JSON.stringify(element));
                    el.title = `${context.name} / ${el.name}`;
                    el.contextId = context.id;
                    return el;
                });
                profils.push(...items);
            }
            return profils;
        },
        updateData (elementSelected) {
            if (this.controlPoints && this.controlPoints.length > 0) {
                this.endpointProfils = this.formatProfil(this.controlPoints);
                if (typeof elementSelected === "undefined") elementSelected = this.endpointProfils[0];
                this.selectEndpointType(elementSelected);
            }
        },
        closeLegend () {
            this.$emit("close", this.id);
        }
    },
    beforeDestroy () {
        this.unBindAll();
        this.restoreColor();
    },
    watch: {
        controlPoints () {
            const context = this.controlPoints.find((el)=>el.id === this.controlPointSelected);
            let found;
            if (context) found = context.endpointProfils.find((el)=>el.id === this.endpointTypeSelected);
            this.updateData(found);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../../utilities/color":"aVXdV","../../utilities/utitlities":"4rZ7s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"epWr9":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_legends"
    }, [
        _c('div', {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: 'close ' + _vm.title,
                    expression: "'close ' + title"
                }
            ],
            staticClass: "closeBtn",
            on: {
                "click": _vm.closeLegend
            }
        }, [
            _vm._v("X")
        ]),
        _vm._v(" "),
        _c('div', {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.title,
                    expression: "title"
                }
            ],
            staticClass: "md-subheading legend_title"
        }, [
            _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c('md-menu', {
            staticClass: "selects",
            attrs: {
                "md-size": "small",
                "mdCloseOnClick": true
            }
        }, [
            _c('md-button', {
                staticClass: "btn-trigger",
                attrs: {
                    "md-menu-trigger": ""
                }
            }, [
                _c('md-icon', {
                    staticClass: "menu_icon legendIcon"
                }, [
                    _vm._v("\n        menu\n      ")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-menu-content', _vm._l(_vm.endpointProfils, function(profil) {
                return _c('md-menu-item', {
                    key: profil.id,
                    on: {
                        "click": function($event) {
                            return _vm.selectEndpointType(profil);
                        }
                    }
                }, [
                    _vm._v("\n        " + _vm._s(profil.title) + "\n      ")
                ]);
            }), 1)
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "colors"
        }, _vm._l(this.gradient, function(g, index) {
            return _c('div', {
                key: index,
                staticClass: "boxContainer"
            }, [
                _c('div', {
                    staticClass: "boxColor",
                    style: {
                        'background-color': g.color
                    }
                }),
                _vm._v(" "),
                _c('div', {
                    directives: [
                        {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: g.value + '',
                            expression: "g.value + ''"
                        }
                    ],
                    staticClass: "boxValue"
                }, [
                    _vm._v(_vm._s(g.value))
                ])
            ]);
        }), 0)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1YSyE":[function() {},{}],"0J27u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lRAxk":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_container"
    }, [
        _vm.legendLength > 0 ? _c('md-content', {
            staticClass: "md-scrollbar heatmap_legends_container"
        }, _vm._l(Object.keys(_vm.data), function(key) {
            return _c('div', {
                key: key,
                staticClass: "legend"
            }, [
                _c('heatmap-legend', {
                    ref: key,
                    refInFor: true,
                    attrs: {
                        "id": key,
                        "controlPoints": _vm.data[key]
                    },
                    on: {
                        "close": _vm.closeLegend
                    }
                })
            ], 1);
        }), 0) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"awbfm":[function() {},{}],"iH1Hs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-control-endpoint.b9c76b9c.js.map
