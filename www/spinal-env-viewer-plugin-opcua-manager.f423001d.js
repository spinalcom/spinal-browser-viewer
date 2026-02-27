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
})({"f4luG":[function(require,module,exports,__globalThis) {
var _buttons = require("./buttons");
var _components = require("./vue/components");
var _dialogs = require("./vue/dialogs");
var _panels = require("./vue/panels");

},{"./buttons":"gWpGN","./vue/components":"6mQPB","./vue/dialogs":"aJxrL","./vue/panels":"61sbe"}],"gWpGN":[function(require,module,exports,__globalThis) {
// import discoverOPCUABtn from "./discoverBtn";
// import { configProfilBtn } from "./configProfilBtn";
// export { discoverOPCUABtn, configProfilBtn }
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _discoverBtn = require("./discoverBtn");
parcelHelpers.exportAll(_discoverBtn, exports);
var _configProfilBtn = require("./configProfilBtn");
parcelHelpers.exportAll(_configProfilBtn, exports);
var _generateProfileBtn = require("./generateProfileBtn");
parcelHelpers.exportAll(_generateProfileBtn, exports);
var _linkProfileToDeviceBtn = require("./linkProfileToDeviceBtn");
parcelHelpers.exportAll(_linkProfileToDeviceBtn, exports);
var _monitoringBtn = require("./monitoringBtn");
parcelHelpers.exportAll(_monitoringBtn, exports);
var _createSubnetwork = require("./createSubnetwork");
parcelHelpers.exportAll(_createSubnetwork, exports);

},{"./discoverBtn":"3aC5n","./configProfilBtn":"aZ5dW","./generateProfileBtn":"d9Dfm","./linkProfileToDeviceBtn":"ceKhV","./monitoringBtn":"1zmXx","./createSubnetwork":"1CR6E","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3aC5n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("81869c147d2c9f94");
class DiscoverOPCUABtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Discover OPCUA Server", "This button allows to discover opcua network and create", {
            icon: "network_check",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        if (typeSelected === (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE)) return true;
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
            const organ = organNode && await organNode.getElement(true);
            return organ && organ.type.get() == (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    async action(option) {
        const typeSelected = option.selectedNode.type.get();
        let serverInfo;
        let organ = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            const id = option.selectedNode.id.get();
            const contextId = option.context.id.get();
            serverInfo = {
                name: option.selectedNode.name.get()
            };
            organ = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
        }
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get()),
            organ,
            serverInfo
        };
        spinalPanelManagerService.openPanel((0, _constants.DISCOVER_OPCUA_PANEL), param);
    }
}
const discoverOPCUABtn = new DiscoverOPCUABtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), discoverOPCUABtn, [
    3
]);
exports.default = discoverOPCUABtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","81869c147d2c9f94":"egTXY","spinal-model-opcua":"l0Ztm","spinal-model-bmsnetwork":"haihS","../js/constants":"eWGjB","../js/utilities":"cx2oC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"eWGjB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DISCOVER_OPCUA_PANEL", ()=>DISCOVER_OPCUA_PANEL);
parcelHelpers.export(exports, "CONFIG_MONITORING_PROFILE_DIALOG", ()=>CONFIG_MONITORING_PROFILE_DIALOG);
parcelHelpers.export(exports, "GENERATE_PROFILE_DIALOG", ()=>GENERATE_PROFILE_DIALOG);
parcelHelpers.export(exports, "LINK_PROFILE_TO_DEVICE_DIALOG", ()=>LINK_PROFILE_TO_DEVICE_DIALOG);
parcelHelpers.export(exports, "MONITORING_PANEL_NAME", ()=>MONITORING_PANEL_NAME);
parcelHelpers.export(exports, "CREATE_SUBNETWORK_DIALOG_IN_OPCUA", ()=>CREATE_SUBNETWORK_DIALOG_IN_OPCUA);
parcelHelpers.export(exports, "SIDEBAR", ()=>SIDEBAR);
const DISCOVER_OPCUA_PANEL = "discoverOPCUANetworkPanel";
const CONFIG_MONITORING_PROFILE_DIALOG = "ConfigureMonitoringProfileDialog";
const GENERATE_PROFILE_DIALOG = "GenerateProfileDialog";
const LINK_PROFILE_TO_DEVICE_DIALOG = "LinkProfileToDeviceDialog";
const MONITORING_PANEL_NAME = "MonitoringPanel";
const CREATE_SUBNETWORK_DIALOG_IN_OPCUA = "createSubNetworkDialogInOpcua";
const SIDEBAR = "GraphManagerSideBar";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cx2oC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-model-opcua/dist/constants");
class Utils {
    static async getBmsDevices(contextId, id) {
        const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
        if (info.type.get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) return [
            info
        ];
        if (info.type.get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(id, [
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(id, contextId, (node)=>{
            if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return true;
            }
            return false;
        });
    }
    static async getNetwork(id, contextId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
        if (!realNode) return;
        if (realNode.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return realNode;
        return realNode.getParents([
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
        ]).then((parents)=>{
            const found = parents.find((el)=>{
                if (el && el.contextIds) return el.contextIds[contextId];
            });
            if (found) (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(found);
            return found;
        });
    }
    static async getOrgan(networkId, contextId) {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        if (node.getType().get() === (0, _constants.OPCUA_ORGAN_TYPE)) return node;
        if (!node.belongsToContext(context)) return;
        let organs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(contextId, contextId);
        organs = organs.filter((el)=>{
            return el.type.get() === (0, _constants.OPCUA_ORGAN_TYPE);
        });
        for (const organ of organs){
            const exist = await this.existInTree(contextId, organ.id.get(), networkId);
            if (exist) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(organ.id.get());
        }
    // const realNode = SpinalGraphService.getRealNode(networkId);
    // return realNode
    //     .getParents([SpinalBmsNetwork.relationName])
    //     .then((parents) => {
    //         const found = parents.find((el) => {
    //             if (el && el.contextIds) {
    //                 return el.contextIds[contextId];
    //             }
    //         });
    //         if (found) {
    //             return found.getElement();
    //         }
    //     });
    }
    static async findNetwork(organId, contextId, nodeId) {
        const organ = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(organId);
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (!node.belongsToContext(context) || !organ.belongsToContext(context)) return;
        const networks = await organ.getChildrenInContext(context);
        for (const network of networks){
            const exist = await this.existInTree(contextId, network.getId().get(), nodeId);
            if (exist) return network;
        }
    }
    static waitModelReady(model) {
        return new Promise((resolve, reject)=>{
            const timeId = setInterval(()=>{
                if (FileSystem._objects[model._server_id] === model) {
                    console.log("model ready", FileSystem._objects[model._server_id]);
                    clearInterval(timeId);
                    resolve(model);
                }
            }, 300);
        });
    }
    static async consumeBatch(promises, batchSize = 10) {
        let index = 0;
        const result = [];
        while(index < promises.length){
            let endIndex = index + batchSize;
            if (promises.length <= endIndex) endIndex = promises.length;
            const slice = promises.slice(index, endIndex);
            const resProm = await Promise.all(slice.map((e)=>e()));
            result.push(...resProm);
            index = endIndex;
        }
        return result;
    }
    static async existInTree(contextId, startId, nodeToFindId) {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeToFindId);
        const relations = [
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName,
            (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).relationName,
            (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
        ];
        return node.findOneParent(relations, (parent)=>{
            return parent.getId().get() === startId;
        });
    }
    static browseEndpoints(node, context, callback) {
        let endpoints = [];
        try {
            return node.findInContext(context, (n)=>{
                if (n.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName) {
                    if (typeof callback === "function") callback(n);
                    endpoints.push(n);
                    return true;
                }
                return false;
            });
        } catch (error) {
            return endpoints;
        }
    }
}
exports.default = Utils;

},{"spinal-model-bmsnetwork":"haihS","spinal-env-viewer-graph-service":"9LAk7","spinal-model-opcua/dist/constants":"f26x5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aZ5dW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _profileService = require("../js/profile_service");
const { spinalPanelManagerService } = require("99bc18b5eceb1c22");
class ConfigProfilBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Configure OPCUA monitoring Profile", "This button allows to configure opcua network monitoring profile", {
            icon: "timer",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        // const id = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        return typeSelected === (0, _profileService.PROFILE_TYPE) ? true : -1;
    // if (contextId === id || typeSelected === OPCUA_ORGAN_TYPE) return -1;
    // const organNode = await utilities.getOrgan(id, contextId);
    // const organ = organNode && await organNode.getElement(true);;
    // return organ && organ.type.get() == OPCUA_ORGAN_TYPE ? true : -1;
    // return -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        // const organ = await utilities.getOrgan(id, contextId);
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get()),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get())
        };
        spinalPanelManagerService.openPanel((0, _constants.CONFIG_MONITORING_PROFILE_DIALOG), param);
    }
}
const configProfilBtn = new ConfigProfilBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), configProfilBtn, [
    3
]);
exports.default = configProfilBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","99bc18b5eceb1c22":"egTXY","spinal-model-opcua":"l0Ztm","../js/constants":"eWGjB","../js/utilities":"cx2oC","../js/profile_service":"hXTad","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hXTad":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTEXT_NAME", ()=>CONTEXT_NAME);
parcelHelpers.export(exports, "ITEMS_GROUP_NAME", ()=>ITEMS_GROUP_NAME);
parcelHelpers.export(exports, "SUPERVISION_NAME", ()=>SUPERVISION_NAME);
parcelHelpers.export(exports, "CONTEXT_TYPE", ()=>CONTEXT_TYPE);
parcelHelpers.export(exports, "PROFILE_TYPE", ()=>PROFILE_TYPE);
parcelHelpers.export(exports, "ITEM_LIST_TYPE", ()=>ITEM_LIST_TYPE);
parcelHelpers.export(exports, "ITEM_TYPE", ()=>ITEM_TYPE);
parcelHelpers.export(exports, "SUPERVISION_TYPE", ()=>SUPERVISION_TYPE);
parcelHelpers.export(exports, "INTERVAL_TYPE", ()=>INTERVAL_TYPE);
parcelHelpers.export(exports, "CONTEXT_TO_PROFILE_RELATION", ()=>CONTEXT_TO_PROFILE_RELATION);
parcelHelpers.export(exports, "PROFILE_TO_ITEMS_GROUP", ()=>PROFILE_TO_ITEMS_GROUP);
parcelHelpers.export(exports, "PROFILE_TO_SUPERVISION", ()=>PROFILE_TO_SUPERVISION);
parcelHelpers.export(exports, "SUPERVISION_TO_INTERVAL", ()=>SUPERVISION_TO_INTERVAL);
parcelHelpers.export(exports, "ITEM_LIST_TO_ITEM", ()=>ITEM_LIST_TO_ITEM);
parcelHelpers.export(exports, "INTERVAL_TO_ITEM", ()=>INTERVAL_TO_ITEM);
parcelHelpers.export(exports, "opcuaProfileService", ()=>opcuaProfileService);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
const CONTEXT_NAME = "OPCdeviceProfileContext";
const ITEMS_GROUP_NAME = "Item_list";
const SUPERVISION_NAME = "Supervision";
const CONTEXT_TYPE = "OPCUA Profile";
const PROFILE_TYPE = "OPCUADeviceProfile";
const ITEM_LIST_TYPE = "itemList";
const ITEM_TYPE = "item";
const SUPERVISION_TYPE = "Supervision";
const INTERVAL_TYPE = "Interval";
const CONTEXT_TO_PROFILE_RELATION = "hasProfile";
const PROFILE_TO_ITEMS_GROUP = "hasItems";
const PROFILE_TO_SUPERVISION = "hasSupervision";
const SUPERVISION_TO_INTERVAL = "hasIntervalTime";
const ITEM_LIST_TO_ITEM = "hasItem";
const INTERVAL_TO_ITEM = "hasItem";
class OPCUAProfileService {
    constructor(){
        this.context = null;
    }
    async init() {
        this.context = await this.getContext(true);
        return this.context;
    }
    async getContext(createIfNotExist = false) {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(CONTEXT_NAME);
        if (!context && createIfNotExist) context = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(CONTEXT_NAME, CONTEXT_TYPE);
        return context;
    }
    // profile
    async linkProfileToDevice(devices, profile) {
        if (!this.context) await this.init();
        if (profile.getType().get() !== PROFILE_TYPE) throw new Error("profile must be " + PROFILE_TYPE + " Type");
        if (!Array.isArray(devices)) devices = [
            devices
        ];
        const promises = devices.map(async (device)=>{
            if (device.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                await this._removeOldProfile(device);
                return device.addChildInContext(profile, CONTEXT_TO_PROFILE_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context);
            }
            return;
        });
    }
    async unlinkProfileToDevice(devices) {
        devices = Array.isArray(devices) ? devices : [
            devices
        ];
        if (!this.context) await this.init();
        const promises = devices.map((device)=>this._removeOldProfile(device));
        return Promise.all(promises);
    }
    async getProfiles() {
        if (!this.context) await this.init();
        return this.context.getChildren(CONTEXT_TO_PROFILE_RELATION);
    }
    async createProfile(profileName, items = []) {
        const { profile, itemList } = await this._GenProfileNode(profileName);
        const itemsNodes = this._createItemsNode(items);
        const promises = itemsNodes.map((el)=>itemList.addChildInContext(el, ITEM_LIST_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context));
        return Promise.all(promises).then((result)=>{
            return this.context.addChildInContext(profile, CONTEXT_TO_PROFILE_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context);
        });
    }
    async generateProfile(deviceNode, context, name) {
        if (!name) name = deviceNode.getName().get();
        const endpoints = [];
        await (0, _utilitiesDefault.default).browseEndpoints(deviceNode, context, (n)=>endpoints.push(n.info.get()));
        console.log("endpoints", endpoints);
        return this.createProfile(name, endpoints);
    }
    async getProfileLinked(deviceNode) {
        const children = await deviceNode.getChildren(CONTEXT_TO_PROFILE_RELATION);
        return children[0];
    }
    // end profile
    // Items
    async getItems(profile) {
        const itemListNode = await this.getItemListNode(profile);
        if (itemListNode) return itemListNode.getChildren(ITEM_LIST_TO_ITEM);
        return [];
    }
    async removeItemsFromList(profile, itemsToRemove) {
        if (!this.context) await this.init();
        const itemListNode = await this.getItemListNode(profile);
        if (itemListNode) {
            const promises = itemsToRemove.map((node)=>itemListNode.removeChild(node, ITEM_LIST_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)));
            return Promise.all(promises).then((result)=>{
                profile.info.indirectModificationDate.set(Date.now());
                return result;
            });
        }
    }
    async addItemToList(profileNode, itemsNodes) {
        if (!this.context) await this.init();
        const itemListNode = await this.getItemListNode(profileNode);
        if (itemListNode) {
            const promises = itemsNodes.map((node)=>itemListNode.addChildInContext(node, ITEM_LIST_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context));
            return Promise.all(promises).then((result)=>{
                profileNode.info.indirectModificationDate.set(Date.now());
                return result;
            });
        }
    }
    async getItemListNode(profile) {
        if (!this.context) await this.init();
        const children = await profile.getChildrenInContext(this.context);
        return children.find((el)=>el.getName().get() === ITEMS_GROUP_NAME);
    }
    // end Items
    // intervals
    async getIntervals(profile) {
        const supervisionNode = await this.getSupervisionNode(profile);
        if (supervisionNode) {
            const intervals = await supervisionNode.getChildren(SUPERVISION_TO_INTERVAL);
            const promises = intervals.map(async (node)=>{
                return {
                    node,
                    children: await node.getChildren(INTERVAL_TO_ITEM)
                };
            });
            return Promise.all(promises);
        }
        return [];
    }
    async addIntervalToProfile(profile, intervalInfo, itemsNodes = []) {
        if (!this.context) await this.init();
        const supervisionNode = await this.getSupervisionNode(profile);
        const intervalNode = new (0, _spinalEnvViewerGraphService.SpinalNode)(intervalInfo.name, INTERVAL_TYPE);
        intervalNode.info.add_attr({
            value: intervalInfo.value
        });
        await supervisionNode.addChildInContext(intervalNode, SUPERVISION_TO_INTERVAL, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context);
        return this.addItemsToInterval(intervalNode, itemsNodes);
    }
    async addItemsToInterval(intervalNode, itemsNodes) {
        if (!this.context) await this.init();
        if (!Array.isArray(itemsNodes)) itemsNodes = [
            itemsNodes
        ];
        const promises = itemsNodes.map((node)=>intervalNode.addChildInContext(node, INTERVAL_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context));
        return Promise.all(promises);
    }
    async removeItemsFromInterval(intervalNode, itemsNodes) {
        if (!this.context) await this.init();
        if (!Array.isArray(itemsNodes)) itemsNodes = [
            itemsNodes
        ];
        const promises = itemsNodes.map((node)=>intervalNode.removeChild(node, INTERVAL_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)));
        return Promise.all(promises);
    }
    async getSupervisionNode(profile) {
        if (!this.context) await this.init();
        const children = await profile.getChildrenInContext(this.context);
        return children.find((el)=>el.getName().get() === SUPERVISION_NAME);
    }
    // end intervals
    // private functions
    async _GenProfileNode(profileName) {
        if (!this.context) await this.init();
        const profile = new (0, _spinalEnvViewerGraphService.SpinalNode)(profileName.trim(), PROFILE_TYPE);
        const itemList = new (0, _spinalEnvViewerGraphService.SpinalNode)(ITEMS_GROUP_NAME, ITEM_LIST_TYPE);
        const supervision = new (0, _spinalEnvViewerGraphService.SpinalNode)(SUPERVISION_NAME, SUPERVISION_TYPE);
        return Promise.all([
            profile.addChildInContext(itemList, PROFILE_TO_ITEMS_GROUP, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context),
            profile.addChildInContext(supervision, PROFILE_TO_SUPERVISION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context)
        ]).then(()=>{
            return {
                profile,
                supervision,
                itemList
            };
        });
    }
    _createItemsNode(items) {
        if (!Array.isArray(items)) items = [
            items
        ];
        return items.map((item)=>{
            const node = new (0, _spinalEnvViewerGraphService.SpinalNode)(item.name, ITEM_TYPE);
            node.info.add_attr({
                idNetwork: item.idNetwork,
                path: item.path || ""
            });
            return node;
        });
    }
    async _removeOldProfile(device) {
        const hasProfile = device.hasRelation(CONTEXT_TO_PROFILE_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        if (hasProfile) return device.removeRelation(CONTEXT_TO_PROFILE_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
    }
}
const opcuaProfileService = new OPCUAProfileService();
exports.default = opcuaProfileService;

},{"spinal-env-viewer-graph-service":"9LAk7","./utilities":"cx2oC","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d9Dfm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
const { spinalPanelManagerService } = require("b00bbecdbbc7c20b");
class GenerateProfile extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate OPCUA Profile", "This button allows to Generate opcua monitoring Profile", {
            icon: "transform",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        if (typeSelected !== (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) return -1;
        const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
        const organ = organNode && await organNode.getElement(true);
        return organ && organ.type.get() == (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE) ? true : -1;
    // return -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get()),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get())
        };
        spinalPanelManagerService.openPanel((0, _constants.GENERATE_PROFILE_DIALOG), param);
    }
}
const generateProfile = new GenerateProfile();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), generateProfile, [
    3
]);
exports.default = generateProfile;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","b00bbecdbbc7c20b":"egTXY","spinal-model-opcua":"l0Ztm","../js/constants":"eWGjB","../js/utilities":"cx2oC","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ceKhV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
const { spinalPanelManagerService } = require("4666b0b0dee701be");
class LinkProfileToDevice extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link Profile to device", "This button allows to link opcua  Profile to Device", {
            icon: "add_link",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        if (typeSelected !== (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) return -1;
        const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
        const organ = organNode && await organNode.getElement(true);
        return organ && organ.type.get() == (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE) ? true : -1;
    // return -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get()),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get())
        };
        spinalPanelManagerService.openPanel((0, _constants.LINK_PROFILE_TO_DEVICE_DIALOG), param);
    }
}
const linkProfileToDevice = new LinkProfileToDevice();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), linkProfileToDevice, [
    3
]);
exports.default = linkProfileToDevice;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","4666b0b0dee701be":"egTXY","spinal-model-opcua":"l0Ztm","../js/constants":"eWGjB","../js/utilities":"cx2oC","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1zmXx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("bf296762bfbaa8ab");
class MonitoringOPCUABtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Monitor OPCUA Server", "This button allows to manage opcua network monitoring", {
            icon: "personal_video",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        // if (typeSelected === OPCUA_ORGAN_TYPE) return true;
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName || typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
            const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
            const organ = organNode && await organNode.getElement(true);
            return organ && organ.type.get() == (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    async action(option) {
        const typeSelected = option.selectedNode.type.get();
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const organ = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
        let network = typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id) : await (0, _utilitiesDefault.default).findNetwork(organ.getId().get(), contextId, id);
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.context.id.get()),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get()),
            organ,
            network
        };
        spinalPanelManagerService.openPanel((0, _constants.MONITORING_PANEL_NAME), param);
    }
}
const monitoringOPCUABtn = new MonitoringOPCUABtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), monitoringOPCUABtn, [
    3
]);
exports.default = monitoringOPCUABtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","bf296762bfbaa8ab":"egTXY","spinal-model-opcua":"l0Ztm","spinal-model-bmsnetwork":"haihS","../js/constants":"eWGjB","../js/utilities":"cx2oC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1CR6E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelOpcua = require("spinal-model-opcua");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("5e3ea1e0fb5b1978");
const SIDEBAR = "GraphManagerSideBar";
class CreateSubNetworkBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create BMS subnetwork", "This button allows to create new sub network", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const result = typeSelected === (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE) ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel((0, _constants.CREATE_SUBNETWORK_DIALOG_IN_OPCUA), option);
    }
}
const createSubNetworkBtn = new CreateSubNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createSubNetworkBtn, [
    3
]);
exports.default = createSubNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","5e3ea1e0fb5b1978":"egTXY","spinal-model-opcua":"l0Ztm","../js/constants":"eWGjB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6mQPB":[function(require,module,exports,__globalThis) {

},{}],"aJxrL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _constants = require("../../js/constants");
var _configProfileDialogVue = require("./configProfileDialog.vue");
var _configProfileDialogVueDefault = parcelHelpers.interopDefault(_configProfileDialogVue);
var _generateProfileDialogVue = require("./generateProfileDialog.vue");
var _generateProfileDialogVueDefault = parcelHelpers.interopDefault(_generateProfileDialogVue);
var _linkProfileToDeviceVue = require("./linkProfileToDevice.vue");
var _linkProfileToDeviceVueDefault = parcelHelpers.interopDefault(_linkProfileToDeviceVue);
var _createSubNetworkVue = require("./createSubNetwork.vue");
var _createSubNetworkVueDefault = parcelHelpers.interopDefault(_createSubNetworkVue);
const { SpinalMountExtention } = require("1a5acd1a68d2c653");
const dialogs = [
    {
        name: (0, _constants.CREATE_SUBNETWORK_DIALOG_IN_OPCUA),
        vueMountComponent: (0, _vueDefault.default).extend((0, _createSubNetworkVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.CONFIG_MONITORING_PROFILE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _configProfileDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.GENERATE_PROFILE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _generateProfileDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.LINK_PROFILE_TO_DEVICE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkProfileToDeviceVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","1a5acd1a68d2c653":"egTXY","../../js/constants":"eWGjB","./configProfileDialog.vue":"kVMtx","./generateProfileDialog.vue":"8lSzF","./linkProfileToDevice.vue":"8Rvdu","./createSubNetwork.vue":"gts2R","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kVMtx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d48e44211cc3f601");
    if (script.__esModule) script = script.default;
    script.render = require("3c6e9617d0856cb7").render;
    script.staticRenderFns = require("3c6e9617d0856cb7").staticRenderFns;
    script._scopeId = "data-v-67ef0c";
    script.__cssModules = require("4675aad10368dd21").default;
    require("3eae7c394cbdc25f").default(script);
    script.__scopeId = 'data-v-67ef0c';
    script.__file = "configProfileDialog.vue";
};
initialize();
exports.default = script;

},{"d48e44211cc3f601":"1D06S","3c6e9617d0856cb7":"dPbA4","4675aad10368dd21":"4oEbY","3eae7c394cbdc25f":"2Ztm5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1D06S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _addIntervalDialogVue = require("./addIntervalDialog.vue");
var _addIntervalDialogVueDefault = parcelHelpers.interopDefault(_addIntervalDialogVue);
var _profileService = require("../../js/profile_service");
var _profileServiceDefault = parcelHelpers.interopDefault(_profileService);
var _lodash = require("lodash");
const defaultIntervals = [
    {
        name: "cov",
        value: 0,
        items: []
    },
    {
        name: "30s",
        value: 30000,
        items: []
    },
    {
        name: "1min",
        value: 60000,
        items: []
    },
    {
        name: "5min",
        value: 300000,
        items: []
    }
];
var scriptExports = {
    name: (0, _constants.CONFIG_MONITORING_PROFILE_DIALOG),
    props: [
        "onFinised"
    ],
    components: {
        "add-interval-dialog": (0, _addIntervalDialogVueDefault.default)
    },
    data () {
        this.STATES = {
            loading: 1,
            loaded: 2,
            success: 3,
            error: 4
        };
        this.spinalNodesObjects = {};
        this.old_endpoints = {};
        this.old_intervals = {};
        this.filterBounced = _lodash.debounce(this.filterEndpoint.bind(this), 200);
        return {
            showDialog: true,
            state: this.STATES.loading,
            searchText: "",
            context: null,
            selectedNode: null,
            endpoints: [],
            endpointSelectedList: [],
            endpointsFiltered: [],
            intervalsList: defaultIntervals,
            intervalSelected: null,
            showIntervalDialog: false,
            closeMenu: true,
            intervalToAdd: ""
        };
    },
    mounted () {
        this.filterBounced();
    },
    methods: {
        async opened ({ graph, context, selectedNode, organ }) {
            this.context = context;
            this.selectedNode = selectedNode;
            // this.organ = organ;
            this.state = this.STATES.loading;
            const [endpoints, intervals] = await this.initializate(selectedNode);
            this.endpoints = endpoints;
            this.intervalsList = intervals;
            this.state = this.STATES.loaded;
        },
        removed (option) {
            option.closeResult;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        },
        async initializate (selectedNode) {
            await (0, _profileServiceDefault.default).init();
            const promises = [
                this.getAllEndpoints(selectedNode),
                this.getIntervals(selectedNode)
            ];
            return Promise.all(promises);
        },
        async getAllEndpoints (node) {
            const items = await (0, _profileServiceDefault.default).getItems(node);
            return items.map((n)=>{
                this.spinalNodesObjects[n.getId().get()] = n;
                const info = n.info.get();
                this.old_endpoints[info.id] = n;
                return info;
            });
        },
        async getIntervals (selectedNode) {
            const intervals = await (0, _profileServiceDefault.default).getIntervals(selectedNode);
            if (intervals.length === 0) return defaultIntervals;
            return intervals.reduce((list, interval)=>{
                const node = interval.node;
                const info = node.info.get();
                const nodeId = info.id;
                this.old_intervals[nodeId] = {
                    node,
                    children: {}
                };
                this.spinalNodesObjects[nodeId] = node;
                info.items = interval.children.map((child)=>{
                    const childInfo = child.info.get();
                    this.spinalNodesObjects[childInfo.id] = child;
                    this.old_intervals[nodeId].children[childInfo.id] = child;
                    return childInfo;
                });
                list.push(info);
                return list;
            }, []);
        },
        selectEndpoint (endpoint) {
            const id = endpoint.id;
            if (this.isSelected(endpoint)) this.endpointSelectedList = this.endpointSelectedList.filter((el)=>el !== id);
            else this.endpointSelectedList = [
                ...this.endpointSelectedList,
                id
            ];
        },
        isSelected (e) {
            return this.endpointSelectedList.includes(e.id);
        },
        addInterval (data) {
            const interval = Number(data.value);
            if (!isNaN(interval)) {
                const found = this.intervalsList.find((el)=>el.name == interval);
                if (!found) this.intervalsList = [
                    ...this.intervalsList,
                    data
                ];
            }
            if (this.showIntervalDialog) this.showIntervalDialog = false;
        },
        selectInterval (interval) {
            this.intervalSelected = interval;
        },
        interValIsSelected (intervalId) {
            return this.intervalSelected && this.intervalSelected.value == intervalId;
        },
        addToInterList (intervalSelected) {
            if (!intervalSelected) intervalSelected = this.intervalSelected;
            const endpoints = JSON.parse(JSON.stringify(this.endpoints));
            const selectedIds = JSON.parse(JSON.stringify(this.endpointSelectedList));
            const { list, selected } = this._extractSelectedItem(endpoints, selectedIds);
            this.endpoints = list;
            this.endpointSelectedList = [];
            intervalSelected.items = [
                ...intervalSelected.items,
                ...selected
            ];
            this.intervalSelected = intervalSelected;
        },
        deleteInterval (interval, item) {
            if (!item) {
                this.endpoints = [
                    ...this.endpoints,
                    ...interval.items
                ];
                this.intervalsList = this.intervalsList.filter((el)=>el.value !== interval.value);
            } else {
                this.endpoints = [
                    ...this.endpoints,
                    item
                ];
                interval.items = interval.items.filter((el)=>el.id !== item.id);
            }
        },
        _extractSelectedItem (endpoints, selectedIds) {
            return endpoints.reduce((obj, item)=>{
                const index = selectedIds.indexOf(item.id);
                if (index !== -1) {
                    obj.selected.push(item);
                    selectedIds.splice(index, 1);
                } else obj.list.push(item);
                return obj;
            }, {
                list: [],
                selected: []
            });
        },
        dragItems (id) {
            if (!this.endpointSelectedList.includes(id)) this.endpointSelectedList = [
                ...this.endpointSelectedList,
                id
            ];
        },
        dropItems (interval) {
            this.addToInterList(interval);
        },
        Save () {
            this.state = this.STATES.loading;
            const { toAdd, toRemove } = this.getEndpointsModifications();
            const intervalsModifications = this.getIntervalModifications();
            const promises1 = intervalsModifications.map((el)=>{
                const intervalNode = this.spinalNodesObjects[el.id];
                if (!intervalNode) return (0, _profileServiceDefault.default).addIntervalToProfile(this.selectedNode, el, el.toAdd);
                return Promise.all([
                    (0, _profileServiceDefault.default).addItemsToInterval(intervalNode, el.toAdd),
                    (0, _profileServiceDefault.default).removeItemsFromInterval(intervalNode, el.toRemove)
                ]);
            });
            const promises2 = [
                (0, _profileServiceDefault.default).addItemToList(this.selectedNode, toAdd),
                (0, _profileServiceDefault.default).removeItemsFromList(this.selectedNode, toRemove)
            ];
            return Promise.all([
                ...promises1,
                ...promises2
            ]).then(()=>{
                this.state = this.STATES.success;
            }).catch((err)=>{
                console.error(err);
                this.state = this.STATES.error;
            });
        },
        getEndpointsModifications () {
            const toAdd = [];
            const old_endpointsCopy = Object.assign({}, this.old_endpoints);
            for (const endpoint of this.endpoints){
                const node = old_endpointsCopy[endpoint.id];
                if (node) delete old_endpointsCopy[endpoint.id];
                else toAdd.push(this.spinalNodesObjects[endpoint.id]);
            }
            const toRemove = Array.from(Object.values(old_endpointsCopy));
            return {
                toAdd,
                toRemove
            };
        },
        getIntervalModifications () {
            const checkIfIsMod = (items, childrenObj)=>{
                const childrenCopy = Object.assign({}, childrenObj);
                const toAdd = [];
                for (const item of items){
                    const node = childrenCopy[item.id];
                    if (node) delete childrenCopy[item.id];
                    else toAdd.push(this.spinalNodesObjects[item.id]);
                }
                const toRemove = Array.from(Object.values(childrenCopy));
                return {
                    toAdd,
                    toRemove
                };
            };
            const intervals = [];
            for (const interval of this.intervalsList)if (!interval.id || !this.old_intervals[interval.id]) intervals.push({
                name: interval.name,
                value: interval.value,
                toAdd: interval.items.map((el)=>this.spinalNodesObjects[el.id]),
                toRemove: []
            });
            else {
                const oldInterval = this.old_intervals[interval.id];
                const childrenObj = oldInterval && oldInterval.children || {};
                const { toAdd, toRemove } = checkIfIsMod(interval.items, childrenObj);
                if (toAdd.length > 0 || toRemove.length > 0) intervals.push({
                    id: interval.id,
                    name: interval.name,
                    value: interval.value,
                    toAdd,
                    toRemove
                });
            }
            return intervals;
        },
        filterEndpoint () {
            if (this.searchText.trim().length > 0) this.endpointsFiltered = this.endpoints.filter((el)=>el.name.toLowerCase().includes(this.searchText.trim().toLowerCase()));
            else this.endpointsFiltered = Object.assign([], this.endpoints);
        },
        selectAll () {
            const ids = this.endpointsFiltered.map((el)=>el.id);
            this.endpointSelectedList = [
                ...this.endpointSelectedList,
                ...ids
            ];
        },
        deselectAll () {
            this.endpointSelectedList = [];
        }
    },
    watch: {
        searchText () {
            this.filterBounced();
        },
        endpoints () {
            this.filterBounced();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"eWGjB","spinal-model-bmsnetwork":"haihS","./addIntervalDialog.vue":"gzkfM","../../js/profile_service":"hXTad","lodash":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gzkfM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("55f032e233ba69");
    if (script.__esModule) script = script.default;
    script.render = require("af42d418a90756a4").render;
    script.staticRenderFns = require("af42d418a90756a4").staticRenderFns;
    script._scopeId = "data-v-1cb26b";
    script.__cssModules = require("6f43f164eb143127").default;
    require("8a20888b732a3c0f").default(script);
    script.__scopeId = 'data-v-1cb26b';
    script.__file = "addIntervalDialog.vue";
};
initialize();
exports.default = script;

},{"55f032e233ba69":"aebA1","af42d418a90756a4":"7I2LX","6f43f164eb143127":"8IjlE","8a20888b732a3c0f":"8LZWg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aebA1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    props: {
        showIntervalDialog: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            data: {
                name: "",
                value: 0,
                items: []
            }
        };
    },
    methods: {
        cancel () {
            this.$emit("cancel");
        },
        confirm () {
            this.$emit("save", this.data);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7I2LX":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        attrs: {
            "md-active": _vm.showIntervalDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showIntervalDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showIntervalDialog = $event;
            }
        }
    }, [
        _c('md-dialog-title', [
            _vm._v("Add Interval")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.data.name,
                        callback: function($$v) {
                            _vm.$set(_vm.data, "name", $$v);
                        },
                        expression: "data.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', [
                _c('label', [
                    _vm._v("interval in ms")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    attrs: {
                        "type": "number"
                    },
                    model: {
                        value: _vm.data.value,
                        callback: function($$v) {
                            _vm.$set(_vm.data, "value", $$v);
                        },
                        expression: "data.value"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-accent",
                on: {
                    "click": _vm.cancel
                }
            }, [
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": _vm.confirm
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

},{}],"8IjlE":[function() {},{}],"8LZWg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dPbA4":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "configContainer",
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
            staticClass: "title"
        }, [
            _vm._v("\n    Configure Monitoring profile\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContent"
        }, [
            _vm.state === _vm.STATES.loaded ? _c('div', {
                staticClass: "loadedContent"
            }, [
                _c('div', {
                    staticClass: "list_div"
                }, [
                    _c('div', {
                        staticClass: "div_title endpoint_div_title"
                    }, [
                        _c('div', {
                            staticClass: "name"
                        }, [
                            _vm._v("\n            Endpoints list\n          ")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "action"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("Search...")
                                ]),
                                _vm._v(" "),
                                _c('md-input', {
                                    model: {
                                        value: _vm.searchText,
                                        callback: function($$v) {
                                            _vm.searchText = $$v;
                                        },
                                        expression: "searchText"
                                    }
                                }),
                                _vm._v(" "),
                                _c('md-icon', [
                                    _vm._v("search")
                                ])
                            ], 1),
                            _vm._v(" "),
                            _c('md-button', {
                                staticClass: "md-icon-button",
                                attrs: {
                                    "title": "select all"
                                },
                                on: {
                                    "click": _vm.selectAll
                                }
                            }, [
                                _c('md-icon', [
                                    _vm._v("select_all")
                                ])
                            ], 1),
                            _vm._v(" "),
                            _c('md-button', {
                                staticClass: "md-icon-button",
                                attrs: {
                                    "title": "deselect all"
                                },
                                on: {
                                    "click": _vm.deselectAll
                                }
                            }, [
                                _c('md-icon', [
                                    _vm._v("deselect")
                                ])
                            ], 1)
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _vm.endpointsFiltered.length > 0 ? _c('md-list', {
                        staticClass: "md-double-line item_list"
                    }, _vm._l(_vm.endpointsFiltered, function(e) {
                        return _c('md-list-item', {
                            key: e.id,
                            staticClass: "listItem",
                            class: {
                                selected: _vm.isSelected(e)
                            },
                            attrs: {
                                "draggable": "true"
                            },
                            on: {
                                "click": function($event) {
                                    $event.stopPropagation();
                                    return (function() {
                                        return _vm.selectEndpoint(e);
                                    }).apply(null, arguments);
                                },
                                "dragstart": function() {
                                    return _vm.dragItems(e.id);
                                }
                            }
                        }, [
                            _c('div', {
                                staticClass: "md-list-item-text"
                            }, [
                                _c('span', [
                                    _vm._v(_vm._s(e.name))
                                ]),
                                _vm._v(" "),
                                _c('span', {
                                    staticClass: "pathDiv"
                                }, [
                                    _vm._v(_vm._s(e.path || ""))
                                ])
                            ])
                        ]);
                    }), 1) : _c('div', {
                        staticClass: "loading"
                    }, [
                        _c('h3', [
                            _vm._v("No Item Found")
                        ])
                    ])
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "list_div"
                }, [
                    _c('div', {
                        staticClass: "div_title"
                    }, [
                        _vm._v("Intervals list")
                    ]),
                    _vm._v(" "),
                    _c('md-list', {
                        staticClass: "item_list",
                        attrs: {
                            "md-expand-single": _vm.expandSingle
                        }
                    }, _vm._l(_vm.intervalsList, function(interval) {
                        return _c('md-list-item', {
                            key: interval.value,
                            class: {
                                selected: _vm.interValIsSelected(interval.value)
                            },
                            attrs: {
                                "md-expand": ""
                            },
                            on: {
                                "click": function() {
                                    return _vm.selectInterval(interval);
                                },
                                "dragover": function(e) {
                                    return e.preventDefault();
                                },
                                "drop": function(e) {
                                    return _vm.dropItems(interval, e);
                                }
                            }
                        }, [
                            _c('md-icon', [
                                _vm._v("schedule")
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v(_vm._s(interval.name))
                            ]),
                            _vm._v(" "),
                            _c('md-button', {
                                staticClass: "md-icon-button md-list-action md-accent",
                                on: {
                                    "click": function() {
                                        return _vm.deleteInterval(interval);
                                    }
                                }
                            }, [
                                _c('md-icon', [
                                    _vm._v("remove")
                                ])
                            ], 1),
                            _vm._v(" "),
                            _c('md-list', {
                                attrs: {
                                    "slot": "md-expand"
                                },
                                slot: "md-expand"
                            }, _vm._l(interval.items, function(item) {
                                return _c('md-list-item', {
                                    key: item.id,
                                    staticClass: "md-inset"
                                }, [
                                    _c('div', {
                                        staticClass: "md-list-item-text"
                                    }, [
                                        _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-button', {
                                        staticClass: "md-icon-button md-list-action md-accent",
                                        on: {
                                            "click": function() {
                                                return _vm.deleteInterval(interval, item);
                                            }
                                        }
                                    }, [
                                        _c('md-icon', [
                                            _vm._v("remove")
                                        ])
                                    ], 1)
                                ], 1);
                            }), 1)
                        ], 1);
                    }), 1),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-fab md-primary md-mini md-fab-bottom-right",
                        attrs: {
                            "title": "add inverval"
                        },
                        on: {
                            "click": function($event) {
                                _vm.showIntervalDialog = true;
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("add")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('add-interval-dialog', {
                        attrs: {
                            "showIntervalDialog": _vm.showIntervalDialog
                        },
                        on: {
                            "cancel": function($event) {
                                _vm.showIntervalDialog = false;
                            },
                            "save": _vm.addInterval
                        }
                    })
                ], 1)
            ]) : _c('div', {
                staticClass: "loading"
            }, [
                _vm.state === _vm.STATES.loading ? _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                }) : _vm._e(),
                _vm._v(" "),
                _vm.state === _vm.STATES.success ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("check")
                ]) : _vm._e(),
                _vm._v(" "),
                _vm.state === _vm.STATES.error ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("close")
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
                    "disabled": _vm.state !== _vm.STATES.loaded
                },
                on: {
                    "click": _vm.Save
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

},{}],"4oEbY":[function() {},{}],"2Ztm5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8lSzF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("98827d9041561204");
    if (script.__esModule) script = script.default;
    script.render = require("9e3f0bb323f514f8").render;
    script.staticRenderFns = require("9e3f0bb323f514f8").staticRenderFns;
    script._scopeId = "data-v-a92da2";
    script.__cssModules = require("44aad752a85bb641").default;
    require("d004ecba6dc36cf3").default(script);
    script.__scopeId = 'data-v-a92da2';
    script.__file = "generateProfileDialog.vue";
};
initialize();
exports.default = script;

},{"98827d9041561204":"5Wosf","9e3f0bb323f514f8":"kAiwO","44aad752a85bb641":"dkjce","d004ecba6dc36cf3":"alm6P","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Wosf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _addIntervalDialogVue = require("./addIntervalDialog.vue");
var _addIntervalDialogVueDefault = parcelHelpers.interopDefault(_addIntervalDialogVue);
var _profileService = require("../../js/profile_service");
var scriptExports = {
    name: (0, _constants.CONFIG_MONITORING_PROFILE_DIALOG),
    props: [
        "onFinised"
    ],
    components: {
        "add-interval-dialog": (0, _addIntervalDialogVueDefault.default)
    },
    data () {
        this.STATES = {
            loading: 1,
            loaded: 2,
            generated: 3,
            failed: 4
        };
        return {
            context: null,
            selectedNode: null,
            showDialog: true,
            profileName: "",
            state: this.STATES.loading
        };
    },
    methods: {
        async opened ({ context, selectedNode }) {
            this.state = this.STATES.loading;
            this.context = context;
            this.selectedNode = selectedNode;
            this.profileName = selectedNode.getName().get();
            this.state = this.STATES.loaded;
        },
        async generateProfile () {
            try {
                this.state = this.STATES.loading;
                await (0, _profileService.opcuaProfileService).generateProfile(this.selectedNode, this.context, this.profileName);
                this.state = this.STATES.generated;
            } catch (error) {
                console.error(error);
                this.state = this.STATES.failed;
            }
        },
        async removed (option) {
            option.closeResult;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        }
    },
    computed: {
        disableOKBtn () {
            return this.state !== this.STATES.loaded;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"eWGjB","./addIntervalDialog.vue":"gzkfM","../../js/profile_service":"hXTad","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kAiwO":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "generateContainer",
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
            staticClass: "title"
        }, [
            _vm._v("\n    Generate OPCUA profile\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialog_content"
        }, [
            _vm.state === _vm.STATES.loaded ? _c('md-field', [
                _c('label', [
                    _vm._v("name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.profileName,
                        callback: function($$v) {
                            _vm.profileName = $$v;
                        },
                        expression: "profileName"
                    }
                })
            ], 1) : _vm.state === _vm.STATES.loading ? _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            }) : _vm.state === _vm.STATES.generated ? _c('md-icon', {
                staticClass: "md-size-5x"
            }, [
                _vm._v("done")
            ]) : _vm.state === _vm.STATES.failed ? _c('md-icon', {
                staticClass: "md-size-5x"
            }, [
                _vm._v("close")
            ]) : _vm._e()
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableOKBtn
                },
                on: {
                    "click": _vm.generateProfile
                }
            }, [
                _vm._v("Generate")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dkjce":[function() {},{}],"alm6P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Rvdu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bde666dc5f6ae084");
    if (script.__esModule) script = script.default;
    script.render = require("5f81d60bbef82506").render;
    script.staticRenderFns = require("5f81d60bbef82506").staticRenderFns;
    script._scopeId = "data-v-a027f8";
    script.__cssModules = require("d3b708c6f284ba38").default;
    require("3fae280dbf8ce6b5").default(script);
    script.__scopeId = 'data-v-a027f8';
    script.__file = "linkProfileToDevice.vue";
};
initialize();
exports.default = script;

},{"bde666dc5f6ae084":"9f78p","5f81d60bbef82506":"h7NHn","d3b708c6f284ba38":"f5Iay","3fae280dbf8ce6b5":"dOFFg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9f78p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _profileService = require("../../js/profile_service");
var _profileServiceDefault = parcelHelpers.interopDefault(_profileService);
var scriptExports = {
    name: (0, _constants.LINK_PROFILE_TO_DEVICE_DIALOG),
    props: [
        "onFinised"
    ],
    components: {},
    data () {
        this.STATES = {
            loading: 1,
            loaded: 2,
            success: 3,
            error: 4
        };
        return {
            state: this.STATES.loading,
            showDialog: true,
            context: null,
            selectedNode: null,
            profileSelected: null,
            nodes: {},
            profiles: []
        };
    },
    methods: {
        async opened ({ graph, context, selectedNode, organ }) {
            this.state = this.STATES.loading;
            this.context = context;
            this.selectedNode = selectedNode;
            this.profiles = await this.getAllProfiles();
            this.state = this.STATES.loaded;
        },
        removed (option) {
            option.closeResult;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        },
        async getAllProfiles () {
            const profiles = await (0, _profileServiceDefault.default).getProfiles();
            const res = [];
            for (const profile of profiles){
                this.nodes[profile.getId().get()] = profile;
                res.push(profile.info.get());
            }
            return res;
        },
        selectProfile (id) {
            this.profileSelected = id;
        },
        async Link () {
            try {
                const profileNode = this.nodes[this.profileSelected];
                if (!profileNode) return;
                this.state = this.STATES.loading;
                await (0, _profileServiceDefault.default).linkProfileToDevice(this.selectedNode, profileNode);
                this.state = this.STATES.success;
            } catch (error) {
                this.state = this.STATES.error;
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"eWGjB","../../js/profile_service":"hXTad","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h7NHn":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "linkContainer",
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
            staticClass: "title"
        }, [
            _vm._v("\n    Select Profile\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _vm.state === _vm.STATES.loaded ? _c('div', {
                staticClass: "loadedContent"
            }, [
                _vm.profiles.length > 0 ? _c('md-list', _vm._l(_vm.profiles, function(profile) {
                    return _c('md-list-item', {
                        key: profile.id,
                        class: {
                            selected: profile.id === _vm.profileSelected
                        },
                        on: {
                            "click": function() {
                                return _vm.selectProfile(profile.id);
                            }
                        }
                    }, [
                        _vm._v("\n          " + _vm._s(profile.name) + "\n        ")
                    ]);
                }), 1) : _c('div', {
                    staticClass: "loading"
                }, [
                    _c('h3', [
                        _vm._v("No Profile Found")
                    ])
                ])
            ], 1) : _c('div', {
                staticClass: "loading"
            }, [
                _vm.state === _vm.STATES.loading ? _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                }) : _vm._e(),
                _vm._v(" "),
                _vm.state === _vm.STATES.success ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("check")
                ]) : _vm._e(),
                _vm._v(" "),
                _vm.state === _vm.STATES.error ? _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("close")
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
                    "disabled": !_vm.profileSelected || _vm.state !== _vm.STATES.loaded
                },
                on: {
                    "click": _vm.Link
                }
            }, [
                _vm._v("Link")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"f5Iay":[function() {},{}],"dOFFg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gts2R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1a18ad5df6bb143d");
    if (script.__esModule) script = script.default;
    script.render = require("de17f37516cede6").render;
    script.staticRenderFns = require("de17f37516cede6").staticRenderFns;
    script._scopeId = "data-v-c5c880";
    script.__cssModules = require("b15d9b7931bf2f8d").default;
    require("9ec5493c05c46d68").default(script);
    script.__scopeId = 'data-v-c5c880';
    script.__file = "createSubNetwork.vue";
};
initialize();
exports.default = script;

},{"1a18ad5df6bb143d":"aokw8","de17f37516cede6":"cdOMJ","b15d9b7931bf2f8d":"hTqUN","9ec5493c05c46d68":"jXbN0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aokw8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var scriptExports = {
    name: "createSubNetworkDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: "",
            selectedNode: null,
            context: null,
            loading: false
        };
    },
    methods: {
        opened ({ selectedNode, context }) {
            this.selectedNode = selectedNode;
            this.context = context;
        },
        async removed (option) {
            if (option.closeResult && option.inputValue.trim().length > 0) {
                const parentId = this.selectedNode.id.get();
                const contextId = this.context.id.get();
                const info = {
                    name: option.inputValue.trim(),
                    type: (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName
                };
                const subnetwork = new (0, _spinalModelBmsnetwork.SpinalBmsNetwork)(info.name, info.type);
                const nodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode(info, subnetwork);
                this.loading = true;
                await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, nodeId, contextId, (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cdOMJ":[function(require,module,exports,__globalThis) {
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
        _c('md-dialog-title', [
            _vm._v("Create BMS subnetwork")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            !_vm.loading ? _c('md-field', [
                _c('label', [
                    _vm._v("Subnetwork Name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.inputValue,
                        callback: function($$v) {
                            _vm.inputValue = $$v;
                        },
                        expression: "inputValue"
                    }
                })
            ], 1) : _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": !(_vm.inputValue.trim().length > 0)
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
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

},{}],"hTqUN":[function() {},{}],"jXbN0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"61sbe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _constants = require("../../js/constants");
// Vue
var _discoverOPCUAPanelVue = require("./discoverOPCUAPanel.vue");
var _discoverOPCUAPanelVueDefault = parcelHelpers.interopDefault(_discoverOPCUAPanelVue);
var _monitoringPanelVue = require("./monitoringPanel.vue");
var _monitoringPanelVueDefault = parcelHelpers.interopDefault(_monitoringPanelVue);
const panels = [
    {
        name: (0, _constants.DISCOVER_OPCUA_PANEL),
        vueMountComponent: (0, _vueDefault.default).extend((0, _discoverOPCUAPanelVueDefault.default)),
        panel: {
            title: "Discover OPCUA network",
            closeBehaviour: "destroy"
        },
        style: {
            minWidth: '600px',
            height: "670px",
            left: "400px"
        }
    },
    {
        name: (0, _constants.MONITORING_PANEL_NAME),
        vueMountComponent: (0, _vueDefault.default).extend((0, _monitoringPanelVueDefault.default)),
        panel: {
            title: "Monitor network",
            closeBehaviour: "destroy"
        },
        style: {
            minWidth: '600px',
            height: "670px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","../../js/constants":"eWGjB","./discoverOPCUAPanel.vue":"jGugt","./monitoringPanel.vue":"5GR13","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"jGugt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f25aefe12ebca1c0");
    if (script.__esModule) script = script.default;
    script.render = require("e29db6379f4cac99").render;
    script.staticRenderFns = require("e29db6379f4cac99").staticRenderFns;
    script._scopeId = "data-v-f64c6f";
    script.__cssModules = require("794d49231631dfd9").default;
    require("5b15e73ec4c202d0").default(script);
    script.__scopeId = 'data-v-f64c6f';
    script.__file = "discoverOPCUAPanel.vue";
};
initialize();
exports.default = script;

},{"f25aefe12ebca1c0":"gcnAE","e29db6379f4cac99":"jen6x","794d49231631dfd9":"5Kcnd","5b15e73ec4c202d0":"3VVqk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gcnAE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _serverInfoVue = require("./step_content/server_info.vue");
var _serverInfoVueDefault = parcelHelpers.interopDefault(_serverInfoVue);
var _selectEntryPointVue = require("./step_content/selectEntryPoint.vue");
var _selectEntryPointVueDefault = parcelHelpers.interopDefault(_selectEntryPointVue);
var _discoverDeviceVue = require("./step_content/discoverDevice.vue");
var _discoverDeviceVueDefault = parcelHelpers.interopDefault(_discoverDeviceVue);
var _createNodesVue = require("./step_content/createNodes.vue");
var _createNodesVueDefault = parcelHelpers.interopDefault(_createNodesVue);
var _selectToCreateVue = require("./step_content/selectToCreate.vue");
var _selectToCreateVueDefault = parcelHelpers.interopDefault(_selectToCreateVue);
var _spinalModelOpcua = require("spinal-model-opcua");
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
const tJSON = require("92d183f8808c894e");
const STEPS = Object.freeze({
    serverInfo: "1",
    // selectEntryPoint: "2",
    discovering: "2",
    discovered: "3",
    creation: "4"
});
var scriptExports = {
    name: (0, _constants.DISCOVER_OPCUA_PANEL),
    components: {
        "server-info-step": (0, _serverInfoVueDefault.default),
        "entry-point-step": (0, _selectEntryPointVueDefault.default),
        "discover-step": (0, _discoverDeviceVueDefault.default),
        "create-node-step": (0, _createNodesVueDefault.default),
        "select-to-create": (0, _selectToCreateVueDefault.default)
    },
    data () {
        this.STATES = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES);
        this.spinalDiscover;
        this.spinalEntryPoint;
        this.context;
        this.graph;
        this.organ;
        this.devicesBindProcess;
        this.STEPS = STEPS;
        this.processBind = null;
        this.progressBindProcess = null;
        return {
            step: this.STEPS.serverInfo,
            state: this.STATES.initial,
            treeFields: [],
            entryPointTreeFields: [],
            checkedNodes: [],
            ask: false,
            isLoading: false,
            serverInfo: {
                name: "WBOX",
                gateways: [
                    {
                        id: 0,
                        address: "172.29.32.46",
                        port: "26543",
                        endpoint: ""
                    }
                ]
            },
            discoverProgress: {
                total: 0,
                finished: 0,
                failed: 0
            }
        };
    },
    methods: {
        async opened ({ graph, context, organ, serverInfo }) {
            this.graph = graph;
            this.context = context;
            this.organ = await organ.getElement(true);
            if (serverInfo && serverInfo.name) this.serverInfo.name = serverInfo.name;
            this.initialized();
        },
        initialized () {
            this.spinalDiscover = undefined;
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).initial;
            this.step = this.STEPS.serverInfo;
            this.spinalEntryPoint = undefined;
        },
        closed () {
            if (this.spinalDiscover) this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).cancelled);
        },
        getId (id) {
            return id.toString();
        },
        getOrganModel (nodeId) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            return realNode.getElement();
        },
        goToCreationStep ({ checkedNodes, stepName }) {
            this.checkedNodes = checkedNodes;
            this.nextStep(stepName);
        },
        // step
        nextStep (step) {
            switch(step){
                case this.STEPS.serverInfo:
                case this.STEPS.selectEntryPoint:
                case this.STEPS.discovering:
                case this.STEPS.discovered:
                    this.step = (Number(step) + 1).toString();
                    break;
            }
        },
        goBack (step) {
            switch(step){
                case this.STEPS.discovering:
                case this.STEPS.discovered:
                case this.STEPS.selectEntryPoint:
                case this.STEPS.creation:
                    this.step = (Number(step) - 1).toString();
                    break;
            }
            if (this.spinalDiscover && step !== this.STEPS.creation) {
                this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).cancelled);
                this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).initial;
            }
        },
        //step end
        // server info
        addGateway () {
            const id = this.serverInfo.gateways[0].id + 1;
            this.serverInfo.gateways = [
                {
                    id,
                    address: "",
                    port: "",
                    endpoint: ""
                },
                ...this.serverInfo.gateways
            ];
        },
        removeGateway (item) {
            const id = item.id;
            this.serverInfo.gateways = this.serverInfo.gateways.filter((el)=>el.id !== id);
        },
        uploadGateways () {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
            input.click();
            input.addEventListener("change", async (event)=>{
                this.isLoading = true;
                try {
                    const file = event.target.files[0];
                    const ips = await this.convertFileDataToJson(file);
                    this.serverInfo.gateways = ips.map((el, index)=>{
                        el.id = index;
                        return el;
                    });
                    this.isLoading = false;
                } catch (error) {
                    console.log(error);
                    this.isLoading = false;
                }
            }, false);
        },
        async convertFileDataToJson (file) {
            const dataJson = await (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).convertExcelToJson(file);
            const ips = [];
            let index = 0;
            for(const key in dataJson)if (Object.hasOwnProperty.call(dataJson, key)) {
                const values = dataJson[key];
                for (const item of values){
                    item.id = index;
                    ips.push(item);
                    index++;
                }
            }
            return ips;
        },
        // discover
        async createNewSpinalDiscover () {
            this.serverInfo.gateways = this.serverInfo.gateways.filter((el)=>el.address.trim().length > 0 && el.address.toString().trim().length > 0);
            this.spinalDiscover = new (0, _spinalModelOpcua.SpinalOPCUADiscoverModel)(this.graph, this.context, this.organ, this.serverInfo);
            this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).readyToDiscover);
            await this.spinalDiscover.addToGraph();
            return this.spinalDiscover;
        },
        async goToDiscovering () {
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovering;
            await this.createNewSpinalDiscover();
            this.bindDiscoverProgress();
            this.bindDiscoverState();
        },
        async goToDiscovered () {
            const tree = await this.spinalDiscover.getTreeDiscovered();
            this.treeFields = [
                tree
            ];
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovered;
        },
        async cancelDiscovering () {
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).initial;
            this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).cancelled);
        },
        retry () {
            this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovering);
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovering;
        },
        bindDiscoverProgress () {
            // bind is executed on init and on progress change
            this.progressBindProcess = this.spinalDiscover.progress.bind(async ()=>{
                const progress = this.spinalDiscover.progress.get();
                this.discoverProgress = progress;
            }, true);
        },
        bindDiscoverState () {
            this.processBind = this.spinalDiscover.state.bind(async ()=>{
                const state = this.spinalDiscover.state.get();
                switch(state){
                    case (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovered:
                        this.goToDiscovered();
                        break;
                    case (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).error:
                        this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).error;
                        break;
                    case (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).cancelled:
                        await this.resetSpinalDiscover();
                        break;
                    case (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).created:
                        this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).created;
                        await this.resetSpinalDiscover();
                        break;
                    case (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).pending:
                        this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).pending;
                        this.ask = this.spinalDiscover.ask?.get() || false;
                        break;
                }
            });
        },
        async resetSpinalDiscover () {
            if (this.spinalDiscover) {
                if (this.processBind) this.spinalDiscover.state.unbind(this.processBind);
                if (this.progressBindProcess) this.spinalDiscover.state.unbind(this.progressBindProcess);
                await this.spinalDiscover.removeFromGraph();
                this.spinalDiscover = null;
                this.processBind = null;
                this.progressBindProcess = null;
            }
        },
        ConfirmChoice (choice) {
            this.spinalDiscover.changeChoice(choice);
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovering;
        },
        // discover end
        // creation
        async createNodes () {
            this.state = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).creating;
            const treeSelected = await this.getTreeSelected();
            console.log("treeSelected", treeSelected);
            await this.spinalDiscover.setTreeToCreate(treeSelected);
            this.spinalDiscover.changeState((0, _spinalModelOpcua.OPCUA_ORGAN_STATES).readyToCreate);
        // const processBind = this.spinalDiscover.state.bind(async () => {
        //   const state = this.spinalDiscover.state.get();
        //   if (state === OPCUA_ORGAN_STATES.created) {
        //     await this.spinalDiscover.removeFromGraph();
        //     this.state = OPCUA_ORGAN_STATES.created;
        //     this.spinalDiscover.state.unbind(processBind);
        //   }
        // });
        },
        getTreeSelected () {
            const treeCopy = JSON.parse(JSON.stringify(this.treeFields[0]));
            const obj = this.convertTreeSelectedToObj();
            return this.filterTree(treeCopy, obj);
        // const promises = treeCopy.children.map(el => this.filterTree(el, obj));
        // return Promise.all(promises).then((result) => {
        //   const children = result.filter(Boolean);
        //   treeCopy.children = children;
        //   return treeCopy;
        // })
        },
        convertTreeSelectedToObj () {
            return this.checkedNodes.reduce((o, id)=>{
                o[id] = id;
                return o;
            }, {});
        },
        async filterTree (tree, nodeSelected) {
            if (nodeSelected[tree.nodeId]) return tree;
            const promises = tree.children.map((child)=>this.filterTree(child, nodeSelected));
            const childrenFiltered = await Promise.all(promises).then((result)=>result.filter(Boolean));
            if (childrenFiltered.length > 0) {
                const copy = Object.assign({}, tree);
                copy.children = childrenFiltered;
                return copy;
            } else return null;
        },
        // creation end
        formatTree (tree, parentId) {
            return tree.reduce((list, item)=>{
                const hasChild = item.children && item.children.length > 0 ? true : false;
                const copy = {
                    displayName: item.displayName,
                    nodeId: item.nodeId,
                    parentId
                };
                if (hasChild) list.push(...this.formatTree(item.children, item.nodeId).flat());
                list.push(copy);
                return list;
            }, []);
        },
        convertToObj (tree, parentId, obj) {
            return tree.reduce((list, item)=>{
                const hasChild = item.children && item.children.length > 0 ? true : false;
                const copy = {
                    name: item.displayName,
                    displayName: item.displayName,
                    nodeId: item.nodeId,
                    parentId
                };
                if (hasChild) list.push(...this.convertToObj(item.children, item.nodeId, obj).flat());
                obj[copy.nodeId] = copy;
                list.push(copy);
                return list;
            }, []);
        }
    },
    async beforeDestroy () {
        await this.spinalDiscover.remove(this.graph);
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"eWGjB","spinal-env-viewer-graph-service":"9LAk7","./step_content/server_info.vue":"lvASD","./step_content/selectEntryPoint.vue":"4Ft35","./step_content/discoverDevice.vue":"8sWXT","./step_content/createNodes.vue":"cGiBd","./step_content/selectToCreate.vue":"fhSV6","spinal-model-opcua":"l0Ztm","spinal-env-viewer-plugin-excel-manager-service":"5y3Gh","92d183f8808c894e":"gBTOD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lvASD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a5fd2ca12511ee26");
    if (script.__esModule) script = script.default;
    script.render = require("b10ea1762a54179d").render;
    script.staticRenderFns = require("b10ea1762a54179d").staticRenderFns;
    script._scopeId = "data-v-f8c499";
    script.__cssModules = require("131f3c4c639d40e8").default;
    require("196d509c90a31d91").default(script);
    script.__scopeId = 'data-v-f8c499';
    script.__file = "server_info.vue";
};
initialize();
exports.default = script;

},{"a5fd2ca12511ee26":"2YIJV","b10ea1762a54179d":"jXtuQ","131f3c4c639d40e8":"bz6o0","196d509c90a31d91":"6rmcS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2YIJV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "ServerInfoStep",
    props: {
        serverInfo: {
            required: true
        },
        stepName: {
            required: true
        },
        loading: {
            required: true
        }
    },
    methods: {
        nextStep () {
            this.$emit("nextStep", this.stepName);
        },
        addGateway () {
            this.$emit("addGateway");
        },
        removeGateway (item) {
            this.$emit("removeGateway", item);
        },
        upload () {
            this.$emit("upload");
        }
    },
    computed: {
        disabled () {
            // if (this.serverInfo.name.trim().length == 0 || this.serverInfo.address.trim().length == 0 || this.serverInfo.port.toString().length == 0)
            if (this.serverInfo.name.trim().length == 0) return true;
            const validIps = this.serverInfo.gateways.filter((el)=>el.address.trim().length > 0 && el.port.toString().length > 0);
            if (validIps.length === 0) return true;
            return false;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jXtuQ":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "step_content"
    }, [
        _c('div', {
            staticClass: "form"
        }, [
            _c('md-field', {
                staticClass: "nameField"
            }, [
                _c('label', [
                    _vm._v("Network Name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.serverInfo.name,
                        callback: function($$v) {
                            _vm.$set(_vm.serverInfo, "name", $$v);
                        },
                        expression: "serverInfo.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            !_vm.loading ? _c('div', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "header"
                }, [
                    _c('md-button', {
                        staticClass: "md-dense md-primary",
                        on: {
                            "click": _vm.addGateway
                        }
                    }, [
                        _vm._v("\n                    add gateway\n                ")
                    ]),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-dense md-primary",
                        on: {
                            "click": _vm.upload
                        }
                    }, [
                        _vm._v("\n                    upload gateways excel file\n                ")
                    ])
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "ips_container"
                }, _vm._l(_vm.serverInfo.gateways, function(item) {
                    return _c('div', {
                        key: item.id,
                        staticClass: "ips_cols"
                    }, [
                        _c('div', {
                            staticClass: "ips_col"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("ip address")
                                ]),
                                _vm._v(" "),
                                _c('md-input', {
                                    model: {
                                        value: item.address,
                                        callback: function($$v) {
                                            _vm.$set(item, "address", $$v);
                                        },
                                        expression: "item.address"
                                    }
                                })
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "ips_col"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("port")
                                ]),
                                _vm._v(" "),
                                _c('md-input', {
                                    attrs: {
                                        "type": "number"
                                    },
                                    model: {
                                        value: item.port,
                                        callback: function($$v) {
                                            _vm.$set(item, "port", $$v);
                                        },
                                        expression: "item.port"
                                    }
                                })
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "ips_col"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("endpoint")
                                ]),
                                _vm._v(" "),
                                _c('md-input', {
                                    model: {
                                        value: item.endpoint,
                                        callback: function($$v) {
                                            _vm.$set(item, "endpoint", $$v);
                                        },
                                        expression: "item.endpoint"
                                    }
                                })
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        item.id > 0 ? _c('div', {
                            staticClass: "action"
                        }, [
                            _c('md-button', {
                                staticClass: "md-icon-button md-accent",
                                on: {
                                    "click": function($event) {
                                        return _vm.removeGateway(item);
                                    }
                                }
                            }, [
                                _c('md-icon', [
                                    _vm._v("remove")
                                ])
                            ], 1)
                        ], 1) : _vm._e()
                    ]);
                }), 0)
            ]) : _vm.loading ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm._e()
        ], 1),
        _vm._v(" "),
        !_vm.loading ? _c('md-button', {
            staticClass: "md-raised md-primary",
            attrs: {
                "disabled": _vm.disabled
            },
            on: {
                "click": _vm.nextStep
            }
        }, [
            _vm._v("\n        Next\n    ")
        ]) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bz6o0":[function() {},{}],"6rmcS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4Ft35":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b2a38fca9bdcff87");
    if (script.__esModule) script = script.default;
    script.render = require("fa02a0d97f6e46e3").render;
    script.staticRenderFns = require("fa02a0d97f6e46e3").staticRenderFns;
    script._scopeId = "data-v-e17501";
    script.__cssModules = require("1cbc197419e91a07").default;
    require("6db0bc8fd1cbb77a").default(script);
    script.__scopeId = 'data-v-e17501';
    script.__file = "selectEntryPoint.vue";
};
initialize();
exports.default = script;

},{"b2a38fca9bdcff87":"2X7Ml","fa02a0d97f6e46e3":"edBhe","1cbc197419e91a07":"gz5O4","6db0bc8fd1cbb77a":"j8DM4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2X7Ml":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "EntryPointStep",
    props: {
        treeFields: {
            required: true
        },
        stepName: {
            required: true
        }
    },
    data () {
        return {
            selectEntry: false
        };
    },
    methods: {
        nextStep () {
            this.$emit("nextStep", this.stepName);
        },
        goBack () {
            this.$emit("goBack", this.stepName);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"edBhe":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "step_content"
    }, [
        _c('div', {
            staticClass: "tabs"
        }, [
            _c('div', {
                staticClass: "radios"
            }, [
                _c('md-radio', {
                    attrs: {
                        "value": true
                    },
                    model: {
                        value: _vm.selectEntry,
                        callback: function($$v) {
                            _vm.selectEntry = $$v;
                        },
                        expression: "selectEntry"
                    }
                }, [
                    _vm._v("Select EntryPoint")
                ]),
                _vm._v(" "),
                _c('md-radio', {
                    attrs: {
                        "value": false
                    },
                    model: {
                        value: _vm.selectEntry,
                        callback: function($$v) {
                            _vm.selectEntry = $$v;
                        },
                        expression: "selectEntry"
                    }
                }, [
                    _vm._v("Discover All")
                ])
            ], 1),
            _vm._v(" "),
            _vm.selectEntry ? _c('div', {
                staticClass: "tree"
            }, [
                _vm._v("\n            Tree\n        ")
            ]) : _vm._e()
        ]),
        _vm._v(" "),
        _c('div', [
            _c('md-button', {
                staticClass: "md-raised md-primary",
                attrs: {
                    "disabled": _vm.selectEntry
                },
                on: {
                    "click": _vm.nextStep
                }
            }, [
                _vm._v(" \n            Next\n        ")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-raised md-accent",
                on: {
                    "click": _vm.goBack
                }
            }, [
                _vm._v(" \n            Back\n        ")
            ])
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"gz5O4":[function() {},{}],"j8DM4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8sWXT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5146516cdb64cf0b");
    if (script.__esModule) script = script.default;
    script.render = require("ad6fca520a5f9e9f").render;
    script.staticRenderFns = require("ad6fca520a5f9e9f").staticRenderFns;
    script._scopeId = "data-v-6a89d7";
    script.__cssModules = require("e0fd744effd812f5").default;
    require("6f84041052ac13fb").default(script);
    script.__scopeId = 'data-v-6a89d7';
    script.__file = "discoverDevice.vue";
};
initialize();
exports.default = script;

},{"5146516cdb64cf0b":"lAs5m","ad6fca520a5f9e9f":"h7RIx","e0fd744effd812f5":"3zcA3","6f84041052ac13fb":"bvpoS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lAs5m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelOpcua = require("spinal-model-opcua");
var _ej2VueNavigations = require("@syncfusion/ej2-vue-navigations");
var scriptExports = {
    name: "DiscoverStep",
    components: {
        "ejs-treeview": (0, _ej2VueNavigations.TreeViewComponent)
    },
    props: {
        stepName: {
            required: true
        },
        state: {
            required: true
        },
        asking: {
            required: false,
            default: false
        },
        progress: {
            required: false,
            default: ()=>({
                    total: 0,
                    finished: 0,
                    failed: 0
                })
        }
    },
    data () {
        this.STATES = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES);
        this.CHOICES = (0, _spinalModelOpcua.OPCUA_ORGAN_USER_CHOICE);
        return {
            checkedNodes: []
        };
    },
    methods: {
        goToDiscovering () {
            this.$emit("discover");
        },
        nextStep () {
            this.$emit("nextStep", this.stepName);
        },
        goBack () {
            this.$emit("goBack", this.stepName);
        },
        cancelDiscovering () {
            this.$emit("cancel");
        },
        retry () {
            this.$emit("retry");
        },
        askResult (useResult) {
            this.$emit("askResult", useResult);
        }
    },
    watch: {
        state (newVal) {
            if (newVal === (0, _spinalModelOpcua.OPCUA_ORGAN_STATES).discovered) this.nextStep();
        }
    },
    computed: {
        percent () {
            return this.progress.total === 0 ? 0 : (this.progress.finished + this.progress.failed) / this.progress.total * 100;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-opcua":"l0Ztm","@syncfusion/ej2-vue-navigations":"llxIM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h7RIx":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "step_content"
    }, [
        _vm.state === _vm.STATES.initial ? _c('div', {
            staticClass: "initial_state"
        }, [
            _c('md-button', {
                staticClass: "md-raised md-primary",
                on: {
                    "click": _vm.goToDiscovering
                }
            }, [
                _vm._v(" Discover ")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-raised md-accent",
                on: {
                    "click": _vm.goBack
                }
            }, [
                _vm._v(" Back ")
            ])
        ], 1) : _vm.state === _vm.STATES.discovering ? _c('div', {
            staticClass: "discovering_state"
        }, [
            _c('md-progress-bar', {
                staticStyle: {
                    "width": "100%"
                },
                attrs: {
                    "md-mode": "determinate",
                    "md-value": _vm.percent
                }
            }),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout md-gutter progress_info"
            }, [
                _c('div', {
                    staticClass: "md-layout-item md-alignment-center"
                }, [
                    _vm._v("Gateway discovered : " + _vm._s(_vm.progress.finished))
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "md-layout-item md-alignment-center"
                }, [
                    _vm._v("Gateway failed : " + _vm._s(_vm.progress.failed))
                ])
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-raised md-accent",
                on: {
                    "click": _vm.cancelDiscovering
                }
            }, [
                _vm._v(" Cancel ")
            ])
        ], 1) : _vm.state === _vm.STATES.error ? _c('div', [
            _c('div', {
                staticClass: "error_content"
            }, [
                _c('div', [
                    _vm._v("Something went wrong, please")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-primary",
                    attrs: {
                        "flat": ""
                    },
                    on: {
                        "click": _vm.retry
                    }
                }, [
                    _vm._v("try again")
                ]),
                _vm._v(" "),
                _c('div', [
                    _vm._v("or")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-accent",
                    attrs: {
                        "flat": ""
                    },
                    on: {
                        "click": _vm.goBack
                    }
                }, [
                    _vm._v("go back")
                ])
            ], 1)
        ]) : _vm.state === _vm.STATES.pending && _vm.asking ? _c('div', [
            _c('div', [
                _vm._v("A previous result for this discovery exists. Would you like to use it?")
            ]),
            _vm._v(" "),
            _c('div', [
                _c('md-button', {
                    staticClass: "md-raised md-primary",
                    on: {
                        "click": function($event) {
                            return _vm.askResult(_vm.CHOICES.yes);
                        }
                    }
                }, [
                    _vm._v("Yes")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-raised md-accent",
                    on: {
                        "click": function($event) {
                            return _vm.askResult(_vm.CHOICES.no);
                        }
                    }
                }, [
                    _vm._v("No")
                ])
            ], 1)
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3zcA3":[function() {},{}],"bvpoS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cGiBd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7f30c69ddc79d673");
    if (script.__esModule) script = script.default;
    script.render = require("c4174478216bd64c").render;
    script.staticRenderFns = require("c4174478216bd64c").staticRenderFns;
    script._scopeId = "data-v-3eb1c3";
    script.__cssModules = require("9da22d738407dfe5").default;
    require("3eaae343ee6e429d").default(script);
    script.__scopeId = 'data-v-3eb1c3';
    script.__file = "createNodes.vue";
};
initialize();
exports.default = script;

},{"7f30c69ddc79d673":"e9GBN","c4174478216bd64c":"9Au3l","9da22d738407dfe5":"aRrlK","3eaae343ee6e429d":"5GvKM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e9GBN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelOpcua = require("spinal-model-opcua");
var scriptExports = {
    name: "CreateNodeStep",
    props: {
        stepName: {
            required: true
        },
        state: {
            required: true
        }
    },
    data () {
        this.STATES = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES);
        return {};
    },
    methods: {
        createNodes () {
            this.$emit("create");
        },
        goBack () {
            this.$emit("goBack", this.stepName);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-opcua":"l0Ztm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Au3l":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.state === _vm.STATES.creating ? _c('div', {
        staticClass: "step_content"
    }, [
        _c('md-progress-spinner', {
            attrs: {
                "md-mode": "indeterminate"
            }
        })
    ], 1) : _vm.state === _vm.STATES.created ? _c('div', {
        staticClass: "step_content"
    }, [
        _vm._v("\n    Created !\n")
    ]) : _c('div', {
        staticClass: "step_content"
    }, [
        _c('md-button', {
            staticClass: "md-raised md-primary",
            on: {
                "click": _vm.createNodes
            }
        }, [
            _vm._v("Create nodes")
        ]),
        _vm._v(" "),
        _c('md-button', {
            staticClass: "md-raised md-accent",
            on: {
                "click": _vm.goBack
            }
        }, [
            _vm._v("Back")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aRrlK":[function() {},{}],"5GvKM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fhSV6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c4b7c337a3546cc5");
    if (script.__esModule) script = script.default;
    script.render = require("9a02d259752e7ddd").render;
    script.staticRenderFns = require("9a02d259752e7ddd").staticRenderFns;
    script._scopeId = "data-v-723d87";
    script.__cssModules = require("31a6de5edfd5cc04").default;
    require("aa9ecf94681e50b0").default(script);
    script.__scopeId = 'data-v-723d87';
    script.__file = "selectToCreate.vue";
};
initialize();
exports.default = script;

},{"c4b7c337a3546cc5":"fTv5Q","9a02d259752e7ddd":"eFYvR","31a6de5edfd5cc04":"7Ibge","aa9ecf94681e50b0":"25wSj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fTv5Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelOpcua = require("spinal-model-opcua");
var _ej2VueNavigations = require("@syncfusion/ej2-vue-navigations");
var scriptExports = {
    name: "DiscoverStep",
    components: {
        "ejs-treeview": (0, _ej2VueNavigations.TreeViewComponent)
    },
    props: {
        stepName: {
            required: true
        },
        state: {
            required: true
        },
        treeFields: {
            required: true
        }
    },
    data () {
        this.STATES = (0, _spinalModelOpcua.OPCUA_ORGAN_STATES);
        this.CHOICES = (0, _spinalModelOpcua.OPCUA_ORGAN_USER_CHOICE);
        return {
            checkedNodes: []
        };
    },
    methods: {
        goToDiscovering () {
            this.$emit("discover");
        },
        nextStep () {
            this.$emit("nextStep", {
                stepName: this.stepName,
                checkedNodes: this.checkedNodes
            });
        },
        goBack () {
            this.$emit("goBack", this.stepName);
        },
        cancelDiscovering () {
            this.$emit("cancel");
        },
        retry () {
            this.$emit("retry");
        },
        askResult (useResult) {
            this.$emit("askResult", useResult);
        }
    },
    computed: {
        percent () {
            return this.progress.total === 0 ? 0 : (this.progress.finished + this.progress.failed) / this.progress.total * 100;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-opcua":"l0Ztm","@syncfusion/ej2-vue-navigations":"llxIM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eFYvR":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "step_content"
    }, [
        _vm.state === _vm.STATES.discovered ? _c('div', {
            staticClass: "discovered_state"
        }, [
            _c('div', {
                staticClass: "control_wrapper"
            }, [
                _c('v-treeview', {
                    attrs: {
                        "dark": "",
                        "selectable": "",
                        "open-on-click": "",
                        "hoverable": "",
                        "transition": "",
                        "item-text": "displayName",
                        "item-key": "nodeId",
                        "selected-color": "primary",
                        "items": _vm.treeFields
                    },
                    model: {
                        value: _vm.checkedNodes,
                        callback: function($$v) {
                            _vm.checkedNodes = $$v;
                        },
                        expression: "checkedNodes"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('div', [
                _c('md-button', {
                    staticClass: "md-raised md-primary",
                    attrs: {
                        "disabled": _vm.checkedNodes.length === 0
                    },
                    on: {
                        "click": _vm.nextStep
                    }
                }, [
                    _vm._v("Next")
                ]),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-raised md-accent",
                    on: {
                        "click": _vm.goBack
                    }
                }, [
                    _vm._v(" Cancel and Back")
                ])
            ], 1)
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7Ibge":[function() {},{}],"25wSj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gBTOD":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"displayName\":\"RootFolder\",\"nodeId\":\"ns=0;i=84\",\"children\":[{\"displayName\":\"Objects\",\"nodeId\":\"ns=0;i=85\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Locations\",\"nodeId\":\"ns=0;i=31915\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Aliases\",\"nodeId\":\"ns=0;i=23470\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TagVariables\",\"nodeId\":\"ns=0;i=23479\",\"nodeClass\":1,\"children\":[{\"displayName\":\"FindAlias\",\"nodeId\":\"ns=0;i=23485\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23486\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23487\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Topics\",\"nodeId\":\"ns=0;i=23488\",\"nodeClass\":1,\"children\":[{\"displayName\":\"FindAlias\",\"nodeId\":\"ns=0;i=23494\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23495\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23496\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"FindAlias\",\"nodeId\":\"ns=0;i=23476\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23477\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23478\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DeviceSet\",\"nodeId\":\"ns=2;i=5001\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DeviceFeatures\",\"nodeId\":\"ns=2;i=15034\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"NetworkSet\",\"nodeId\":\"ns=2;i=6078\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"DeviceTopology\",\"nodeId\":\"ns=2;i=6094\",\"nodeClass\":1,\"children\":[{\"displayName\":\"OnlineAccess\",\"nodeId\":\"ns=2;i=6095\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Alarme_CC\",\"nodeId\":\"ns=1;g=7316908C-90F0-4730-8D88-C0EB832AC059\",\"nodeClass\":2,\"children\":[{\"displayName\":\"#001\",\"nodeId\":\"ns=1;g=DF049CAC-AE73-45AD-A3AA-A57CC73AB5A4\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"#002\",\"nodeId\":\"ns=1;g=D72E95A7-A778-4161-815E-8408A67B8CE0\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"description\",\"nodeId\":\"ns=1;g=94F0FC10-0B91-481F-A5C0-BEDE50A796A9\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"unit\",\"nodeId\":\"ns=1;s=unit\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1000\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1001\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1002\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1004\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1005\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1006\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1007\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1008\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1009\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1010\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1011\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Alarme_alim_Dali\",\"nodeId\":\"ns=1;g=7AA0456E-A9A5-44C5-A7DB-4A4920A20FE9\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1012\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1013\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1014\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1017\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1018\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1019\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1020\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1021\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1022\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1023\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Alarme_presence_ECG\",\"nodeId\":\"ns=1;g=ACE31FF2-7405-4A45-AFC6-4A3414D9E3B4\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1024\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1025\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1029\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1030\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1031\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1032\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1033\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1034\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1035\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CPT_Heures_ECG01\",\"nodeId\":\"ns=1;g=530B30E3-56F7-4353-AA8D-DA990A8809E8\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1036\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1037\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1038\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1041\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1044\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1047\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CPT_Heures_ECG02\",\"nodeId\":\"ns=1;g=FD680CAE-A1B0-4D18-8EB5-711A5CEC9874\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1048\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1049\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1050\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1051\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1053\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1057\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1058\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1059\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CPT_Heures_ECG03\",\"nodeId\":\"ns=1;g=86811E2E-E107-4A9C-875A-039CC79F252B\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1060\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1061\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1063\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1064\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1065\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1067\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1068\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1069\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1070\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1071\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CPT_Heures_ECG04\",\"nodeId\":\"ns=1;g=55668A38-EF57-41B0-8F6F-C44E1F350A72\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1072\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1073\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1075\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1076\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1077\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1078\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1079\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1080\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1081\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1082\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1083\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CPT_Heures_ECG05\",\"nodeId\":\"ns=1;g=1CFF034F-6494-4F9E-98EB-8EDB52C567E7\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1084\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1085\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1086\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1087\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1088\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1089\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1090\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1091\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1093\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1095\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Montee_Descente\",\"nodeId\":\"ns=1;g=95030F55-7535-4FB8-A5C8-9E0B79767A1B\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1096\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1097\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1099\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1101\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1103\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1104\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1105\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1106\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1107\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Pas_Angle_eta\",\"nodeId\":\"ns=1;g=9FF4564F-875E-4E99-9F5F-0EC1A7500BDC\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1108\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1109\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1110\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1111\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1113\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1114\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1115\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1116\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1117\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1118\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1119\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Pas_Angle_sig\",\"nodeId\":\"ns=1;g=FB1C2B9B-8180-4BEE-9D25-4FB8338DABCF\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1120\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1121\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1122\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1123\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1125\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1128\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1130\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1131\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Pas_Hauteur_eta\",\"nodeId\":\"ns=1;g=F45B9DB0-B460-43DF-872C-ED0F3132FAF3\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1132\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1133\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1134\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1135\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1136\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1137\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1138\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1140\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1141\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1142\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1143\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Pas_Hauteur_sig\",\"nodeId\":\"ns=1;g=AB291B60-CF35-4AE5-8664-3C06838DF463\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1144\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1145\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1146\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1147\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1148\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1149\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1150\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1152\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1153\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1154\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1155\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Canal1_Pas_Stop\",\"nodeId\":\"ns=1;g=8AB1833A-8C41-4FF4-B578-679097E6EAC9\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1156\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1157\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1158\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1159\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1160\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1161\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1162\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1163\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1167\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Detection_Auto_ECG\",\"nodeId\":\"ns=1;g=8DEB102E-484E-4922-B638-237F3BDB2451\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1168\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1169\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1171\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1172\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1173\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1177\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1178\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1179\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Detection_Colisions\",\"nodeId\":\"ns=1;g=6052DFFF-66A1-487F-836A-D8568694904B\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1180\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1181\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1182\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1183\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1185\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1187\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1188\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1191\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Diagnostique_ECG\",\"nodeId\":\"ns=1;g=3C44763D-CE52-41B6-A3C4-411D9E07F800\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1192\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1193\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1194\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1195\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1196\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1197\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1198\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1199\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1201\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1202\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1203\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ET1_DALI006_LP32\",\"nodeId\":\"ns=1;g=6A94CD76-8B4B-4976-9AED-D4F5E6FC05ED\",\"nodeClass\":2,\"children\":[{\"displayName\":\"CPT_Hrs\",\"nodeId\":\"ns=1;g=8DE93344-24C5-4EED-94B6-B2B2D9D33157\",\"nodeClass\":2,\"children\":[{\"displayName\":\"description\",\"nodeId\":\"ns=1;g=E2566749-80FF-4BFA-A8D6-FF9ED12B467E\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"unit\",\"nodeId\":\"ns=1;g=56972C6A-DB8D-4517-B2BA-A6398C7F43B4\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Err_balast\",\"nodeId\":\"ns=1;g=6E174DFE-34A2-42B7-9158-ECF64883B36A\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Err_lp\",\"nodeId\":\"ns=1;g=4DFFB189-8E3A-4467-8DED-E6C89D50E844\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"description\",\"nodeId\":\"ns=1;g=4B04A0DD-814A-4A3F-B939-4F08AE3F8200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"unit\",\"nodeId\":\"ns=1;g=7404B835-7A55-420E-846E-012809A94655\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Groupe1_Activation_Jour_Nuit\",\"nodeId\":\"ns=1;g=FD4393A3-AFD2-421D-A04D-BC337853977F\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1204\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1205\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1206\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1207\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1209\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1210\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1211\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1212\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1213\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1214\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1215\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_Alarme\",\"nodeId\":\"ns=1;g=D442CD4F-D8E2-40ED-9F82-641D4C05D721\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1216\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1217\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1218\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1219\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1220\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1221\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1222\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1224\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1225\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1226\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1227\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_Jour_Nuit\",\"nodeId\":\"ns=1;g=F6732663-CD6E-4B82-BBA5-B2372CCF6D61\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1228\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1229\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1230\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1231\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1232\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1233\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1234\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1235\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1236\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1237\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1238\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1239\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_OnOff_cde\",\"nodeId\":\"ns=1;g=40F445DA-D6D4-4F21-98A1-B513FFB300CD\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1240\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1241\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1242\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1243\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1244\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1245\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1246\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1247\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1248\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1249\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1250\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1251\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_OnOff_eta\",\"nodeId\":\"ns=1;g=5C0B7B34-AF03-4D08-98A8-E21404538D67\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1252\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1253\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1254\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1255\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1256\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1257\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1258\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1259\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1260\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1261\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1262\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1263\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_dim\",\"nodeId\":\"ns=1;g=2C7ABC83-DC84-4702-BF7B-9D3EED8572C4\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1264\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1265\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1266\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1267\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1268\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1269\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1270\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1271\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1272\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1273\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1274\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1275\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_variation_eta\",\"nodeId\":\"ns=1;g=72E2D748-5E1B-47F2-9FB7-8D0052ADF11F\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1276\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1277\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1278\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1279\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1280\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1281\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1282\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1283\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1284\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1285\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1286\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1287\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Groupe1_variation_sig\",\"nodeId\":\"ns=1;g=63436D53-5A40-40E8-8652-E6996F6F98D3\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1288\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1289\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1290\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1291\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1292\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1293\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1294\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1295\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1296\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1298\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1299\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Heartbeat\",\"nodeId\":\"ns=1;g=36D6B939-DD58-4781-96E2-540731CFF3AA\",\"nodeClass\":2,\"children\":[{\"displayName\":\"HA Configuration\",\"nodeId\":\"ns=1;i=1300\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=1;i=1301\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=1;i=1302\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=1;i=1303\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=1;i=1304\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=1;i=1305\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=1;i=1306\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=1;i=1307\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=1;i=1308\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=1;i=1309\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=1;i=1310\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=1;i=1311\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"Types\",\"nodeId\":\"ns=0;i=86\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ObjectTypes\",\"nodeId\":\"ns=0;i=88\",\"nodeClass\":1,\"children\":[{\"displayName\":\"BaseObjectType\",\"nodeId\":\"ns=0;i=58\",\"nodeClass\":8,\"children\":[{\"displayName\":\"FolderType\",\"nodeId\":\"ns=0;i=61\",\"nodeClass\":8,\"children\":[{\"displayName\":\"OperationLimitsType\",\"nodeId\":\"ns=0;i=11564\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MaxNodesPerRead\",\"nodeId\":\"ns=0;i=11565\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerHistoryReadData\",\"nodeId\":\"ns=0;i=12161\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerHistoryReadEvents\",\"nodeId\":\"ns=0;i=12162\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerWrite\",\"nodeId\":\"ns=0;i=11567\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerHistoryUpdateData\",\"nodeId\":\"ns=0;i=12163\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerHistoryUpdateEvents\",\"nodeId\":\"ns=0;i=12164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerMethodCall\",\"nodeId\":\"ns=0;i=11569\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerBrowse\",\"nodeId\":\"ns=0;i=11570\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerRegisterNodes\",\"nodeId\":\"ns=0;i=11571\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerTranslateBrowsePathsToNodeIds\",\"nodeId\":\"ns=0;i=11572\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNodesPerNodeManagement\",\"nodeId\":\"ns=0;i=11573\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxMonitoredItemsPerCall\",\"nodeId\":\"ns=0;i=11574\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FileDirectoryType\",\"nodeId\":\"ns=0;i=13353\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<FileDirectoryName>\",\"nodeId\":\"ns=0;i=13354\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CreateDirectory\",\"nodeId\":\"ns=0;i=13355\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13356\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13357\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CreateFile\",\"nodeId\":\"ns=0;i=13358\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13359\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13360\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Delete\",\"nodeId\":\"ns=0;i=17718\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17719\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MoveOrCopy\",\"nodeId\":\"ns=0;i=13363\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13364\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13365\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"<FileName>\",\"nodeId\":\"ns=0;i=13366\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13367\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13368\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13369\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13370\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13372\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13373\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13374\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13375\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13376\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13377\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13378\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13379\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13380\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13381\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13382\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13383\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13384\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13385\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13386\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CreateDirectory\",\"nodeId\":\"ns=0;i=13387\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13388\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13389\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CreateFile\",\"nodeId\":\"ns=0;i=13390\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13391\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13392\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Delete\",\"nodeId\":\"ns=0;i=13393\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13394\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MoveOrCopy\",\"nodeId\":\"ns=0;i=13395\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13396\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13397\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DictionaryFolderType\",\"nodeId\":\"ns=0;i=17591\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<DictionaryFolderName>\",\"nodeId\":\"ns=0;i=17592\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<DictionaryEntryName>\",\"nodeId\":\"ns=0;i=17593\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"AlarmGroupType\",\"nodeId\":\"ns=0;i=16405\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<AlarmConditionInstance>\",\"nodeId\":\"ns=0;i=16406\",\"nodeClass\":1,\"children\":[{\"displayName\":\"EventId\",\"nodeId\":\"ns=0;i=16407\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventType\",\"nodeId\":\"ns=0;i=16408\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceNode\",\"nodeId\":\"ns=0;i=16409\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceName\",\"nodeId\":\"ns=0;i=16410\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Time\",\"nodeId\":\"ns=0;i=16411\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveTime\",\"nodeId\":\"ns=0;i=16412\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Message\",\"nodeId\":\"ns=0;i=16414\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Severity\",\"nodeId\":\"ns=0;i=16415\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=16416\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=16417\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionName\",\"nodeId\":\"ns=0;i=16420\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BranchId\",\"nodeId\":\"ns=0;i=16421\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Retain\",\"nodeId\":\"ns=0;i=16422\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=16423\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16424\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Quality\",\"nodeId\":\"ns=0;i=16432\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=16433\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastSeverity\",\"nodeId\":\"ns=0;i=16434\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=16435\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=16436\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=16437\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=16438\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=16439\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=16440\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"AddComment\",\"nodeId\":\"ns=0;i=16441\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16442\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AckedState\",\"nodeId\":\"ns=0;i=16443\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16444\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Acknowledge\",\"nodeId\":\"ns=0;i=16461\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16462\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=16465\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16466\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=16472\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=16473\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InputNode\",\"nodeId\":\"ns=0;i=16474\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SuppressedOrShelved\",\"nodeId\":\"ns=0;i=16519\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AlarmSuppressionGroupType\",\"nodeId\":\"ns=0;i=32064\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<DigitalVariable>\",\"nodeId\":\"ns=0;i=32226\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateGroupFolderType\",\"nodeId\":\"ns=0;i=13813\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<AdditionalGroup>\",\"nodeId\":\"ns=0;i=13916\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13917\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13918\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13919\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13920\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13921\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13923\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13924\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13925\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13926\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13927\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13928\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13929\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13930\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13931\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13932\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13933\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13934\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13935\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13936\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13937\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13938\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13939\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13940\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13941\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13942\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13943\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13944\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13945\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13946\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13947\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13948\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13949\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DefaultApplicationGroup\",\"nodeId\":\"ns=0;i=13814\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13815\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13816\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13817\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13818\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13819\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13821\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13822\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13823\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13824\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13825\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13826\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13827\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13828\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13829\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13830\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13831\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13832\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13833\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13834\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13835\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13836\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13837\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13838\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13839\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13840\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13841\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13842\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13843\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13844\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13845\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13846\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13847\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DefaultHttpsGroup\",\"nodeId\":\"ns=0;i=13848\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13849\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13850\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13851\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13852\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13853\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13855\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13856\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13857\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13858\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13859\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13860\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13861\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13862\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13863\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13864\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13865\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13866\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13867\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13868\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13869\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13870\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13871\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13872\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13873\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13874\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13875\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13876\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13877\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13878\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13879\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13880\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13881\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DefaultUserTokenGroup\",\"nodeId\":\"ns=0;i=13882\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13883\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13884\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13885\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13886\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13887\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13889\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13890\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13891\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13892\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13893\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13894\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13895\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13896\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13897\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13898\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13899\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13901\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13902\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13903\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13904\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13905\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13906\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13907\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13908\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13909\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13910\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13911\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13912\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13913\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13914\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13915\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"KeyCredentialConfigurationFolderType\",\"nodeId\":\"ns=0;i=17496\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<ServiceName>\",\"nodeId\":\"ns=0;i=17511\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=17512\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProfileUri\",\"nodeId\":\"ns=0;i=17513\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CreateCredential\",\"nodeId\":\"ns=0;i=17522\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17523\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17524\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuthorizationServicesConfigurationFolderType\",\"nodeId\":\"ns=0;i=23556\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<ServiceName>\",\"nodeId\":\"ns=0;i=23557\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ServiceUri\",\"nodeId\":\"ns=0;i=23558\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServiceCertificate\",\"nodeId\":\"ns=0;i=23559\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IssuerEndpointUrl\",\"nodeId\":\"ns=0;i=23560\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SecurityGroupFolderType\",\"nodeId\":\"ns=0;i=15452\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<SecurityGroupFolderName>\",\"nodeId\":\"ns=0;i=15453\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddSecurityGroup\",\"nodeId\":\"ns=0;i=15454\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15455\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15456\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSecurityGroup\",\"nodeId\":\"ns=0;i=15457\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15458\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddSecurityGroupFolder\",\"nodeId\":\"ns=0;i=25293\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25294\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25295\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSecurityGroupFolder\",\"nodeId\":\"ns=0;i=25296\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25297\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SupportedSecurityPolicyUris\",\"nodeId\":\"ns=0;i=25298\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<SecurityGroupName>\",\"nodeId\":\"ns=0;i=15459\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SecurityGroupId\",\"nodeId\":\"ns=0;i=15460\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyLifetime\",\"nodeId\":\"ns=0;i=15010\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=15011\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFutureKeyCount\",\"nodeId\":\"ns=0;i=15012\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxPastKeyCount\",\"nodeId\":\"ns=0;i=15043\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddSecurityGroup\",\"nodeId\":\"ns=0;i=15461\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15462\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15463\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSecurityGroup\",\"nodeId\":\"ns=0;i=15464\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15465\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddSecurityGroupFolder\",\"nodeId\":\"ns=0;i=25312\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25313\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25314\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSecurityGroupFolder\",\"nodeId\":\"ns=0;i=25315\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25316\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SupportedSecurityPolicyUris\",\"nodeId\":\"ns=0;i=25317\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubKeyPushTargetFolderType\",\"nodeId\":\"ns=0;i=25346\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<PushTargetFolderName>\",\"nodeId\":\"ns=0;i=25347\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddPushTarget\",\"nodeId\":\"ns=0;i=25348\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25349\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25350\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePushTarget\",\"nodeId\":\"ns=0;i=25351\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25352\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPushTargetFolder\",\"nodeId\":\"ns=0;i=25353\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25354\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25355\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePushTargetFolder\",\"nodeId\":\"ns=0;i=25356\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25357\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"<PushTargetName>\",\"nodeId\":\"ns=0;i=25358\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ApplicationUri\",\"nodeId\":\"ns=0;i=25648\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=25649\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=25361\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserTokenType\",\"nodeId\":\"ns=0;i=25650\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedKeyCount\",\"nodeId\":\"ns=0;i=25651\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RetryInterval\",\"nodeId\":\"ns=0;i=25652\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastPushExecutionTime\",\"nodeId\":\"ns=0;i=25653\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastPushErrorTime\",\"nodeId\":\"ns=0;i=25654\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConnectSecurityGroups\",\"nodeId\":\"ns=0;i=25655\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25656\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25657\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DisconnectSecurityGroups\",\"nodeId\":\"ns=0;i=25658\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25659\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25660\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TriggerKeyUpdate\",\"nodeId\":\"ns=0;i=25661\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"AddPushTarget\",\"nodeId\":\"ns=0;i=25366\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25367\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25368\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePushTarget\",\"nodeId\":\"ns=0;i=25369\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25370\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPushTargetFolder\",\"nodeId\":\"ns=0;i=25371\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25372\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25373\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePushTargetFolder\",\"nodeId\":\"ns=0;i=25374\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25375\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataSetFolderType\",\"nodeId\":\"ns=0;i=14477\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<DataSetFolderName>\",\"nodeId\":\"ns=0;i=14478\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddPublishedDataItems\",\"nodeId\":\"ns=0;i=14479\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14480\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14481\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedEvents\",\"nodeId\":\"ns=0;i=14482\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14483\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14484\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedDataItemsTemplate\",\"nodeId\":\"ns=0;i=16842\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16843\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16853\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedEventsTemplate\",\"nodeId\":\"ns=0;i=16881\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16883\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePublishedDataSet\",\"nodeId\":\"ns=0;i=14485\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14486\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddDataSetFolder\",\"nodeId\":\"ns=0;i=16884\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16894\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16922\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetFolder\",\"nodeId\":\"ns=0;i=16923\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16924\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"<PublishedDataSetName>\",\"nodeId\":\"ns=0;i=14487\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfigurationVersion\",\"nodeId\":\"ns=0;i=14489\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=15221\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedDataItems\",\"nodeId\":\"ns=0;i=14493\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14494\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14495\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedEvents\",\"nodeId\":\"ns=0;i=14496\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14497\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14498\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedDataItemsTemplate\",\"nodeId\":\"ns=0;i=16935\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16958\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16959\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddPublishedEventsTemplate\",\"nodeId\":\"ns=0;i=16960\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16961\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16971\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePublishedDataSet\",\"nodeId\":\"ns=0;i=14499\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14500\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddDataSetFolder\",\"nodeId\":\"ns=0;i=16994\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16995\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16996\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetFolder\",\"nodeId\":\"ns=0;i=16997\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17007\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SubscribedDataSetFolderType\",\"nodeId\":\"ns=0;i=23795\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<SubscribedDataSetFolderName>\",\"nodeId\":\"ns=0;i=23796\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddSubscribedDataSet\",\"nodeId\":\"ns=0;i=23797\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23798\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23799\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSubscribedDataSet\",\"nodeId\":\"ns=0;i=23800\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23801\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddDataSetFolder\",\"nodeId\":\"ns=0;i=23802\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23803\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23804\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetFolder\",\"nodeId\":\"ns=0;i=23805\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23806\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"<StandaloneSubscribedDataSetName>\",\"nodeId\":\"ns=0;i=23807\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SubscribedDataSet\",\"nodeId\":\"ns=0;i=23808\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=23809\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IsConnected\",\"nodeId\":\"ns=0;i=23810\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddSubscribedDataSet\",\"nodeId\":\"ns=0;i=23811\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23812\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23813\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSubscribedDataSet\",\"nodeId\":\"ns=0;i=23814\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23815\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddDataSetFolder\",\"nodeId\":\"ns=0;i=23816\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23817\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23818\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetFolder\",\"nodeId\":\"ns=0;i=23819\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23820\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AliasNameCategoryType\",\"nodeId\":\"ns=0;i=23456\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<Alias>\",\"nodeId\":\"ns=0;i=23457\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<SubAliasNameCategories>\",\"nodeId\":\"ns=0;i=23458\",\"nodeClass\":1,\"children\":[{\"displayName\":\"FindAlias\",\"nodeId\":\"ns=0;i=23459\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23460\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23461\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"FindAlias\",\"nodeId\":\"ns=0;i=23462\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23463\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23464\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"FunctionalGroupType\",\"nodeId\":\"ns=2;i=1005\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<GroupIdentifier>\",\"nodeId\":\"ns=2;i=6027\",\"nodeClass\":1,\"children\":[{\"displayName\":\"UIElement\",\"nodeId\":\"ns=2;i=6242\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UIElement\",\"nodeId\":\"ns=2;i=6243\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataTypeSystemType\",\"nodeId\":\"ns=0;i=75\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"DataTypeEncodingType\",\"nodeId\":\"ns=0;i=76\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ModellingRuleType\",\"nodeId\":\"ns=0;i=77\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ServerType\",\"nodeId\":\"ns=0;i=2004\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerArray\",\"nodeId\":\"ns=0;i=2005\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespaceArray\",\"nodeId\":\"ns=0;i=2006\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UrisVersion\",\"nodeId\":\"ns=0;i=15003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerStatus\",\"nodeId\":\"ns=0;i=2007\",\"nodeClass\":2,\"children\":[{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=3074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentTime\",\"nodeId\":\"ns=0;i=3075\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=3076\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildInfo\",\"nodeId\":\"ns=0;i=3077\",\"nodeClass\":2,\"children\":[{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=3078\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerName\",\"nodeId\":\"ns=0;i=3079\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductName\",\"nodeId\":\"ns=0;i=3080\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareVersion\",\"nodeId\":\"ns=0;i=3081\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildNumber\",\"nodeId\":\"ns=0;i=3082\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildDate\",\"nodeId\":\"ns=0;i=3083\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecondsTillShutdown\",\"nodeId\":\"ns=0;i=3084\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ShutdownReason\",\"nodeId\":\"ns=0;i=3085\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServiceLevel\",\"nodeId\":\"ns=0;i=2008\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Auditing\",\"nodeId\":\"ns=0;i=2742\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EstimatedReturnTime\",\"nodeId\":\"ns=0;i=12882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocalTime\",\"nodeId\":\"ns=0;i=17612\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerCapabilities\",\"nodeId\":\"ns=0;i=2009\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ServerProfileArray\",\"nodeId\":\"ns=0;i=3086\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIdArray\",\"nodeId\":\"ns=0;i=3087\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinSupportedSampleRate\",\"nodeId\":\"ns=0;i=3088\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxBrowseContinuationPoints\",\"nodeId\":\"ns=0;i=3089\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxQueryContinuationPoints\",\"nodeId\":\"ns=0;i=3090\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxHistoryContinuationPoints\",\"nodeId\":\"ns=0;i=3091\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareCertificates\",\"nodeId\":\"ns=0;i=3092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModellingRules\",\"nodeId\":\"ns=0;i=3093\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"AggregateFunctions\",\"nodeId\":\"ns=0;i=3094\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"ServerDiagnostics\",\"nodeId\":\"ns=0;i=2010\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ServerDiagnosticsSummary\",\"nodeId\":\"ns=0;i=3095\",\"nodeClass\":2,\"children\":[{\"displayName\":\"ServerViewCount\",\"nodeId\":\"ns=0;i=3096\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSessionCount\",\"nodeId\":\"ns=0;i=3097\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSessionCount\",\"nodeId\":\"ns=0;i=3098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedSessionCount\",\"nodeId\":\"ns=0;i=3099\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedSessionCount\",\"nodeId\":\"ns=0;i=3100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionTimeoutCount\",\"nodeId\":\"ns=0;i=3101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionAbortCount\",\"nodeId\":\"ns=0;i=3102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingIntervalCount\",\"nodeId\":\"ns=0;i=3104\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionCount\",\"nodeId\":\"ns=0;i=3105\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSubscriptionCount\",\"nodeId\":\"ns=0;i=3106\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedRequestsCount\",\"nodeId\":\"ns=0;i=3107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedRequestsCount\",\"nodeId\":\"ns=0;i=3108\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SubscriptionDiagnosticsArray\",\"nodeId\":\"ns=0;i=3110\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionsDiagnosticsSummary\",\"nodeId\":\"ns=0;i=3111\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SessionDiagnosticsArray\",\"nodeId\":\"ns=0;i=3112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsArray\",\"nodeId\":\"ns=0;i=3113\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EnabledFlag\",\"nodeId\":\"ns=0;i=3114\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"VendorServerInfo\",\"nodeId\":\"ns=0;i=2011\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"ServerRedundancy\",\"nodeId\":\"ns=0;i=2012\",\"nodeClass\":1,\"children\":[{\"displayName\":\"RedundancySupport\",\"nodeId\":\"ns=0;i=3115\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Namespaces\",\"nodeId\":\"ns=0;i=11527\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"GetMonitoredItems\",\"nodeId\":\"ns=0;i=11489\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11490\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11491\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ResendData\",\"nodeId\":\"ns=0;i=12871\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12872\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetSubscriptionDurable\",\"nodeId\":\"ns=0;i=12746\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12747\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12748\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RequestServerStateChange\",\"nodeId\":\"ns=0;i=12883\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12884\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ServerCapabilitiesType\",\"nodeId\":\"ns=0;i=2013\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerProfileArray\",\"nodeId\":\"ns=0;i=2014\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIdArray\",\"nodeId\":\"ns=0;i=2016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinSupportedSampleRate\",\"nodeId\":\"ns=0;i=2017\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxBrowseContinuationPoints\",\"nodeId\":\"ns=0;i=2732\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxQueryContinuationPoints\",\"nodeId\":\"ns=0;i=2733\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxHistoryContinuationPoints\",\"nodeId\":\"ns=0;i=2734\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareCertificates\",\"nodeId\":\"ns=0;i=3049\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxArrayLength\",\"nodeId\":\"ns=0;i=11549\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxStringLength\",\"nodeId\":\"ns=0;i=11550\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxByteStringLength\",\"nodeId\":\"ns=0;i=12910\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperationLimits\",\"nodeId\":\"ns=0;i=11551\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"ModellingRules\",\"nodeId\":\"ns=0;i=2019\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"AggregateFunctions\",\"nodeId\":\"ns=0;i=2754\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<VendorCapability>\",\"nodeId\":\"ns=0;i=11562\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RoleSet\",\"nodeId\":\"ns=0;i=16295\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddRole\",\"nodeId\":\"ns=0;i=16296\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16298\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveRole\",\"nodeId\":\"ns=0;i=16299\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16300\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"MaxSessions\",\"nodeId\":\"ns=0;i=24088\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxSubscriptions\",\"nodeId\":\"ns=0;i=24089\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxMonitoredItems\",\"nodeId\":\"ns=0;i=24090\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxSubscriptionsPerSession\",\"nodeId\":\"ns=0;i=24091\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxMonitoredItemsPerSubscription\",\"nodeId\":\"ns=0;i=24103\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxSelectClauseParameters\",\"nodeId\":\"ns=0;i=24092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxWhereClauseParameters\",\"nodeId\":\"ns=0;i=24093\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxMonitoredItemsQueueSize\",\"nodeId\":\"ns=0;i=31770\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConformanceUnits\",\"nodeId\":\"ns=0;i=24094\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServerDiagnosticsType\",\"nodeId\":\"ns=0;i=2020\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerDiagnosticsSummary\",\"nodeId\":\"ns=0;i=2021\",\"nodeClass\":2,\"children\":[{\"displayName\":\"ServerViewCount\",\"nodeId\":\"ns=0;i=3116\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSessionCount\",\"nodeId\":\"ns=0;i=3117\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSessionCount\",\"nodeId\":\"ns=0;i=3118\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedSessionCount\",\"nodeId\":\"ns=0;i=3119\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedSessionCount\",\"nodeId\":\"ns=0;i=3120\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionTimeoutCount\",\"nodeId\":\"ns=0;i=3121\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionAbortCount\",\"nodeId\":\"ns=0;i=3122\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingIntervalCount\",\"nodeId\":\"ns=0;i=3124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionCount\",\"nodeId\":\"ns=0;i=3125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSubscriptionCount\",\"nodeId\":\"ns=0;i=3126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedRequestsCount\",\"nodeId\":\"ns=0;i=3127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedRequestsCount\",\"nodeId\":\"ns=0;i=3128\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SamplingIntervalDiagnosticsArray\",\"nodeId\":\"ns=0;i=2022\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscriptionDiagnosticsArray\",\"nodeId\":\"ns=0;i=2023\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionsDiagnosticsSummary\",\"nodeId\":\"ns=0;i=2744\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SessionDiagnosticsArray\",\"nodeId\":\"ns=0;i=3129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsArray\",\"nodeId\":\"ns=0;i=3130\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EnabledFlag\",\"nodeId\":\"ns=0;i=2025\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SessionsDiagnosticsSummaryType\",\"nodeId\":\"ns=0;i=2026\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SessionDiagnosticsArray\",\"nodeId\":\"ns=0;i=2027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsArray\",\"nodeId\":\"ns=0;i=2028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"<ClientName>\",\"nodeId\":\"ns=0;i=12097\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SessionDiagnostics\",\"nodeId\":\"ns=0;i=12098\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=12099\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionName\",\"nodeId\":\"ns=0;i=12100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientDescription\",\"nodeId\":\"ns=0;i=12101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=12102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=12103\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=12104\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActualSessionTimeout\",\"nodeId\":\"ns=0;i=12105\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxResponseMessageSize\",\"nodeId\":\"ns=0;i=12106\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientConnectionTime\",\"nodeId\":\"ns=0;i=12107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientLastContactTime\",\"nodeId\":\"ns=0;i=12108\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionsCount\",\"nodeId\":\"ns=0;i=12109\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12110\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentPublishRequestsInQueue\",\"nodeId\":\"ns=0;i=12111\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalRequestCount\",\"nodeId\":\"ns=0;i=12112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnauthorizedRequestCount\",\"nodeId\":\"ns=0;i=12113\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReadCount\",\"nodeId\":\"ns=0;i=12114\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryReadCount\",\"nodeId\":\"ns=0;i=12115\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteCount\",\"nodeId\":\"ns=0;i=12116\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryUpdateCount\",\"nodeId\":\"ns=0;i=12117\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CallCount\",\"nodeId\":\"ns=0;i=12118\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12119\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12120\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetMonitoringModeCount\",\"nodeId\":\"ns=0;i=12121\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetTriggeringCount\",\"nodeId\":\"ns=0;i=12122\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12123\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateSubscriptionCount\",\"nodeId\":\"ns=0;i=12124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifySubscriptionCount\",\"nodeId\":\"ns=0;i=12125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetPublishingModeCount\",\"nodeId\":\"ns=0;i=12126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishCount\",\"nodeId\":\"ns=0;i=12127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishCount\",\"nodeId\":\"ns=0;i=12128\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferSubscriptionsCount\",\"nodeId\":\"ns=0;i=12129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteSubscriptionsCount\",\"nodeId\":\"ns=0;i=12130\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesCount\",\"nodeId\":\"ns=0;i=12131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesCount\",\"nodeId\":\"ns=0;i=12132\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesCount\",\"nodeId\":\"ns=0;i=12133\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesCount\",\"nodeId\":\"ns=0;i=12134\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseCount\",\"nodeId\":\"ns=0;i=12135\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseNextCount\",\"nodeId\":\"ns=0;i=12136\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TranslateBrowsePathsToNodeIdsCount\",\"nodeId\":\"ns=0;i=12137\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryFirstCount\",\"nodeId\":\"ns=0;i=12138\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryNextCount\",\"nodeId\":\"ns=0;i=12139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisterNodesCount\",\"nodeId\":\"ns=0;i=12140\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnregisterNodesCount\",\"nodeId\":\"ns=0;i=12141\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SessionSecurityDiagnostics\",\"nodeId\":\"ns=0;i=12142\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=12143\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdOfSession\",\"nodeId\":\"ns=0;i=12144\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdHistory\",\"nodeId\":\"ns=0;i=12145\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationMechanism\",\"nodeId\":\"ns=0;i=12146\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Encoding\",\"nodeId\":\"ns=0;i=12147\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProtocol\",\"nodeId\":\"ns=0;i=12148\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=12149\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=12150\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=12151\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SubscriptionDiagnosticsArray\",\"nodeId\":\"ns=0;i=12152\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SessionDiagnosticsObjectType\",\"nodeId\":\"ns=0;i=2029\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SessionDiagnostics\",\"nodeId\":\"ns=0;i=2030\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=3131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionName\",\"nodeId\":\"ns=0;i=3132\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientDescription\",\"nodeId\":\"ns=0;i=3133\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=3134\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=3135\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=3136\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActualSessionTimeout\",\"nodeId\":\"ns=0;i=3137\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxResponseMessageSize\",\"nodeId\":\"ns=0;i=3138\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientConnectionTime\",\"nodeId\":\"ns=0;i=3139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientLastContactTime\",\"nodeId\":\"ns=0;i=3140\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionsCount\",\"nodeId\":\"ns=0;i=3141\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentMonitoredItemsCount\",\"nodeId\":\"ns=0;i=3142\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentPublishRequestsInQueue\",\"nodeId\":\"ns=0;i=3143\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalRequestCount\",\"nodeId\":\"ns=0;i=8898\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnauthorizedRequestCount\",\"nodeId\":\"ns=0;i=11891\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReadCount\",\"nodeId\":\"ns=0;i=3151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryReadCount\",\"nodeId\":\"ns=0;i=3152\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteCount\",\"nodeId\":\"ns=0;i=3153\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryUpdateCount\",\"nodeId\":\"ns=0;i=3154\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CallCount\",\"nodeId\":\"ns=0;i=3155\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateMonitoredItemsCount\",\"nodeId\":\"ns=0;i=3156\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyMonitoredItemsCount\",\"nodeId\":\"ns=0;i=3157\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetMonitoringModeCount\",\"nodeId\":\"ns=0;i=3158\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetTriggeringCount\",\"nodeId\":\"ns=0;i=3159\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteMonitoredItemsCount\",\"nodeId\":\"ns=0;i=3160\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateSubscriptionCount\",\"nodeId\":\"ns=0;i=3161\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifySubscriptionCount\",\"nodeId\":\"ns=0;i=3162\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetPublishingModeCount\",\"nodeId\":\"ns=0;i=3163\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishCount\",\"nodeId\":\"ns=0;i=3164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishCount\",\"nodeId\":\"ns=0;i=3165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferSubscriptionsCount\",\"nodeId\":\"ns=0;i=3166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteSubscriptionsCount\",\"nodeId\":\"ns=0;i=3167\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesCount\",\"nodeId\":\"ns=0;i=3168\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesCount\",\"nodeId\":\"ns=0;i=3169\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesCount\",\"nodeId\":\"ns=0;i=3170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesCount\",\"nodeId\":\"ns=0;i=3171\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseCount\",\"nodeId\":\"ns=0;i=3172\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseNextCount\",\"nodeId\":\"ns=0;i=3173\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TranslateBrowsePathsToNodeIdsCount\",\"nodeId\":\"ns=0;i=3174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryFirstCount\",\"nodeId\":\"ns=0;i=3175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryNextCount\",\"nodeId\":\"ns=0;i=3176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisterNodesCount\",\"nodeId\":\"ns=0;i=3177\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnregisterNodesCount\",\"nodeId\":\"ns=0;i=3178\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SessionSecurityDiagnostics\",\"nodeId\":\"ns=0;i=2031\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=3179\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdOfSession\",\"nodeId\":\"ns=0;i=3180\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdHistory\",\"nodeId\":\"ns=0;i=3181\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationMechanism\",\"nodeId\":\"ns=0;i=3182\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Encoding\",\"nodeId\":\"ns=0;i=3183\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProtocol\",\"nodeId\":\"ns=0;i=3184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=3185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=3186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=3187\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SubscriptionDiagnosticsArray\",\"nodeId\":\"ns=0;i=2032\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"VendorServerInfoType\",\"nodeId\":\"ns=0;i=2033\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ServerRedundancyType\",\"nodeId\":\"ns=0;i=2034\",\"nodeClass\":8,\"children\":[{\"displayName\":\"RedundancySupport\",\"nodeId\":\"ns=0;i=2035\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransparentRedundancyType\",\"nodeId\":\"ns=0;i=2036\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CurrentServerId\",\"nodeId\":\"ns=0;i=2037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RedundantServerArray\",\"nodeId\":\"ns=0;i=2038\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NonTransparentRedundancyType\",\"nodeId\":\"ns=0;i=2039\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerUriArray\",\"nodeId\":\"ns=0;i=2040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NonTransparentNetworkRedundancyType\",\"nodeId\":\"ns=0;i=11945\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerNetworkGroups\",\"nodeId\":\"ns=0;i=11948\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"FileType\",\"nodeId\":\"ns=0;i=11575\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=11576\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=12686\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=12687\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=11579\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MimeType\",\"nodeId\":\"ns=0;i=13341\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxByteStringLength\",\"nodeId\":\"ns=0;i=24244\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastModifiedTime\",\"nodeId\":\"ns=0;i=25200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=11580\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11581\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11582\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=11583\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11584\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=11585\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11586\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11587\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=11588\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11589\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=11590\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11591\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11592\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=11593\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11594\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddressSpaceFileType\",\"nodeId\":\"ns=0;i=11595\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ExportNamespace\",\"nodeId\":\"ns=0;i=11615\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"TrustListType\",\"nodeId\":\"ns=0;i=12522\",\"nodeClass\":8,\"children\":[{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=12542\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateFrequency\",\"nodeId\":\"ns=0;i=19296\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActivityTimeout\",\"nodeId\":\"ns=0;i=32254\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultValidationOptions\",\"nodeId\":\"ns=0;i=23563\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=12543\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12544\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12545\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=12546\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12705\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12547\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=12548\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12549\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=12550\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12551\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PubSubConfigurationType\",\"nodeId\":\"ns=0;i=25482\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReserveIds\",\"nodeId\":\"ns=0;i=25505\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25506\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25507\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=25508\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25509\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25510\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"NamespaceMetadataType\",\"nodeId\":\"ns=0;i=11616\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=0;i=11617\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespaceVersion\",\"nodeId\":\"ns=0;i=11618\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespacePublicationDate\",\"nodeId\":\"ns=0;i=11619\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IsNamespaceSubset\",\"nodeId\":\"ns=0;i=11620\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticNodeIdTypes\",\"nodeId\":\"ns=0;i=11621\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticNumericNodeIdRange\",\"nodeId\":\"ns=0;i=11622\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticStringNodeIdPattern\",\"nodeId\":\"ns=0;i=11623\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespaceFile\",\"nodeId\":\"ns=0;i=11624\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=11625\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=12690\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=12691\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=11628\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=11629\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11630\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11631\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=11632\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11633\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=11634\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11635\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11636\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=11637\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11638\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=11639\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11640\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=11641\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=11642\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=11643\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DefaultRolePermissions\",\"nodeId\":\"ns=0;i=16137\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultUserRolePermissions\",\"nodeId\":\"ns=0;i=16138\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultAccessRestrictions\",\"nodeId\":\"ns=0;i=16139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfigurationVersion\",\"nodeId\":\"ns=0;i=25267\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NamespacesType\",\"nodeId\":\"ns=0;i=11645\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<NamespaceIdentifier>\",\"nodeId\":\"ns=0;i=11646\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=0;i=11647\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespaceVersion\",\"nodeId\":\"ns=0;i=11648\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespacePublicationDate\",\"nodeId\":\"ns=0;i=11649\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IsNamespaceSubset\",\"nodeId\":\"ns=0;i=11650\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticNodeIdTypes\",\"nodeId\":\"ns=0;i=11651\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticNumericNodeIdRange\",\"nodeId\":\"ns=0;i=11652\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StaticStringNodeIdPattern\",\"nodeId\":\"ns=0;i=11653\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"BaseEventType\",\"nodeId\":\"ns=0;i=2041\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EventId\",\"nodeId\":\"ns=0;i=2042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventType\",\"nodeId\":\"ns=0;i=2043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceNode\",\"nodeId\":\"ns=0;i=2044\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceName\",\"nodeId\":\"ns=0;i=2045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Time\",\"nodeId\":\"ns=0;i=2046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveTime\",\"nodeId\":\"ns=0;i=2047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocalTime\",\"nodeId\":\"ns=0;i=3190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Message\",\"nodeId\":\"ns=0;i=2050\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Severity\",\"nodeId\":\"ns=0;i=2051\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=31771\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=31772\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionSubClassId\",\"nodeId\":\"ns=0;i=31773\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionSubClassName\",\"nodeId\":\"ns=0;i=31774\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditEventType\",\"nodeId\":\"ns=0;i=2052\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActionTimeStamp\",\"nodeId\":\"ns=0;i=2053\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=2054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerId\",\"nodeId\":\"ns=0;i=2055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientAuditEntryId\",\"nodeId\":\"ns=0;i=2056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=2057\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditSecurityEventType\",\"nodeId\":\"ns=0;i=2058\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StatusCodeId\",\"nodeId\":\"ns=0;i=17615\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditChannelEventType\",\"nodeId\":\"ns=0;i=2059\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=2745\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditOpenSecureChannelEventType\",\"nodeId\":\"ns=0;i=2060\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=2061\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificateThumbprint\",\"nodeId\":\"ns=0;i=2746\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestType\",\"nodeId\":\"ns=0;i=2062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=2063\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=2065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedLifetime\",\"nodeId\":\"ns=0;i=2066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateErrorEventId\",\"nodeId\":\"ns=0;i=24135\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditSessionEventType\",\"nodeId\":\"ns=0;i=2069\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=2070\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditCreateSessionEventType\",\"nodeId\":\"ns=0;i=2071\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=2072\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=2073\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificateThumbprint\",\"nodeId\":\"ns=0;i=2747\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisedSessionTimeout\",\"nodeId\":\"ns=0;i=2074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditUrlMismatchEventType\",\"nodeId\":\"ns=0;i=2748\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=2749\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditActivateSessionEventType\",\"nodeId\":\"ns=0;i=2075\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ClientSoftwareCertificates\",\"nodeId\":\"ns=0;i=2076\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserIdentityToken\",\"nodeId\":\"ns=0;i=2077\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=11485\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditCancelEventType\",\"nodeId\":\"ns=0;i=2078\",\"nodeClass\":8,\"children\":[{\"displayName\":\"RequestHandle\",\"nodeId\":\"ns=0;i=2079\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditCertificateEventType\",\"nodeId\":\"ns=0;i=2080\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Certificate\",\"nodeId\":\"ns=0;i=2081\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditCertificateDataMismatchEventType\",\"nodeId\":\"ns=0;i=2082\",\"nodeClass\":8,\"children\":[{\"displayName\":\"InvalidHostname\",\"nodeId\":\"ns=0;i=2083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvalidUri\",\"nodeId\":\"ns=0;i=2084\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditCertificateExpiredEventType\",\"nodeId\":\"ns=0;i=2085\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateInvalidEventType\",\"nodeId\":\"ns=0;i=2086\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateUntrustedEventType\",\"nodeId\":\"ns=0;i=2087\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateRevokedEventType\",\"nodeId\":\"ns=0;i=2088\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateMismatchEventType\",\"nodeId\":\"ns=0;i=2089\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"AuditNodeManagementEventType\",\"nodeId\":\"ns=0;i=2090\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditAddNodesEventType\",\"nodeId\":\"ns=0;i=2091\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NodesToAdd\",\"nodeId\":\"ns=0;i=2092\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditDeleteNodesEventType\",\"nodeId\":\"ns=0;i=2093\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NodesToDelete\",\"nodeId\":\"ns=0;i=2094\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditAddReferencesEventType\",\"nodeId\":\"ns=0;i=2095\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReferencesToAdd\",\"nodeId\":\"ns=0;i=2096\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditDeleteReferencesEventType\",\"nodeId\":\"ns=0;i=2097\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReferencesToDelete\",\"nodeId\":\"ns=0;i=2098\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditUpdateEventType\",\"nodeId\":\"ns=0;i=2099\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditWriteUpdateEventType\",\"nodeId\":\"ns=0;i=2100\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AttributeId\",\"nodeId\":\"ns=0;i=2750\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IndexRange\",\"nodeId\":\"ns=0;i=2101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValue\",\"nodeId\":\"ns=0;i=2102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValue\",\"nodeId\":\"ns=0;i=2103\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryUpdateEventType\",\"nodeId\":\"ns=0;i=2104\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ParameterDataTypeId\",\"nodeId\":\"ns=0;i=2751\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditHistoryEventUpdateEventType\",\"nodeId\":\"ns=0;i=2999\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3025\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=3028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Filter\",\"nodeId\":\"ns=0;i=3003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=3029\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3030\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryValueUpdateEventType\",\"nodeId\":\"ns=0;i=3006\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=3031\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=3032\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3033\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryAnnotationUpdateEventType\",\"nodeId\":\"ns=0;i=19095\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=19293\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=19294\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=19295\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryDeleteEventType\",\"nodeId\":\"ns=0;i=3012\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditHistoryRawModifyDeleteEventType\",\"nodeId\":\"ns=0;i=3014\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IsDeleteModified\",\"nodeId\":\"ns=0;i=3015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=3016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndTime\",\"nodeId\":\"ns=0;i=3017\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3034\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryAtTimeDeleteEventType\",\"nodeId\":\"ns=0;i=3019\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReqTimes\",\"nodeId\":\"ns=0;i=3020\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3021\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryEventDeleteEventType\",\"nodeId\":\"ns=0;i=3022\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EventIds\",\"nodeId\":\"ns=0;i=3023\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3024\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"AuditUpdateMethodEventType\",\"nodeId\":\"ns=0;i=2127\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MethodId\",\"nodeId\":\"ns=0;i=2128\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=2129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditUpdateStateEventType\",\"nodeId\":\"ns=0;i=2315\",\"nodeClass\":8,\"children\":[{\"displayName\":\"OldStateId\",\"nodeId\":\"ns=0;i=2777\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewStateId\",\"nodeId\":\"ns=0;i=2778\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditProgramTransitionEventType\",\"nodeId\":\"ns=0;i=11856\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11875\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramTransitionAuditEventType\",\"nodeId\":\"ns=0;i=3806\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Transition\",\"nodeId\":\"ns=0;i=3825\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3826\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"RoleMappingRuleChangedAuditEventType\",\"nodeId\":\"ns=0;i=17641\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionEventType\",\"nodeId\":\"ns=0;i=2790\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditConditionEnableEventType\",\"nodeId\":\"ns=0;i=2803\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionCommentEventType\",\"nodeId\":\"ns=0;i=2829\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17222\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11851\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionRespondEventType\",\"nodeId\":\"ns=0;i=8927\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SelectedResponse\",\"nodeId\":\"ns=0;i=11852\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionAcknowledgeEventType\",\"nodeId\":\"ns=0;i=8944\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11853\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionConfirmEventType\",\"nodeId\":\"ns=0;i=8961\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17224\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11854\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionShelvingEventType\",\"nodeId\":\"ns=0;i=11093\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ShelvingTime\",\"nodeId\":\"ns=0;i=11855\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionSuppressionEventType\",\"nodeId\":\"ns=0;i=17225\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionSilenceEventType\",\"nodeId\":\"ns=0;i=17242\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionResetEventType\",\"nodeId\":\"ns=0;i=15013\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionOutOfServiceEventType\",\"nodeId\":\"ns=0;i=17259\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"TrustListUpdateRequestedAuditEventType\",\"nodeId\":\"ns=0;i=32260\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"CertificateUpdateRequestedAuditEventType\",\"nodeId\":\"ns=0;i=32306\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"KeyCredentialAuditEventType\",\"nodeId\":\"ns=0;i=18011\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=18028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyCredentialUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=18029\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"KeyCredentialDeletedAuditEventType\",\"nodeId\":\"ns=0;i=18047\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=18064\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"AuditClientEventType\",\"nodeId\":\"ns=0;i=23606\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=23908\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditClientUpdateMethodResultEventType\",\"nodeId\":\"ns=0;i=23926\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ObjectId\",\"nodeId\":\"ns=0;i=23994\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MethodId\",\"nodeId\":\"ns=0;i=23995\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StatusCodeId\",\"nodeId\":\"ns=0;i=23998\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23999\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25684\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TrustListUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=12561\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TrustListId\",\"nodeId\":\"ns=0;i=32281\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CertificateUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=12620\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CertificateGroup\",\"nodeId\":\"ns=0;i=13735\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=13736\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SystemEventType\",\"nodeId\":\"ns=0;i=2130\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceFailureEventType\",\"nodeId\":\"ns=0;i=2131\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"SystemStatusChangeEventType\",\"nodeId\":\"ns=0;i=11446\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SystemState\",\"nodeId\":\"ns=0;i=11696\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RefreshStartEventType\",\"nodeId\":\"ns=0;i=2787\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"RefreshEndEventType\",\"nodeId\":\"ns=0;i=2788\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"RefreshRequiredEventType\",\"nodeId\":\"ns=0;i=2789\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"PubSubStatusEventType\",\"nodeId\":\"ns=0;i=15535\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConnectionId\",\"nodeId\":\"ns=0;i=15545\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GroupId\",\"nodeId\":\"ns=0;i=15546\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15547\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubTransportLimitsExceedEventType\",\"nodeId\":\"ns=0;i=15548\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Actual\",\"nodeId\":\"ns=0;i=15561\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Maximum\",\"nodeId\":\"ns=0;i=15562\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubCommunicationFailureEventType\",\"nodeId\":\"ns=0;i=15563\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Error\",\"nodeId\":\"ns=0;i=15576\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"BaseModelChangeEventType\",\"nodeId\":\"ns=0;i=2132\",\"nodeClass\":8,\"children\":[{\"displayName\":\"GeneralModelChangeEventType\",\"nodeId\":\"ns=0;i=2133\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Changes\",\"nodeId\":\"ns=0;i=2134\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SemanticChangeEventType\",\"nodeId\":\"ns=0;i=2738\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Changes\",\"nodeId\":\"ns=0;i=2739\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EventQueueOverflowEventType\",\"nodeId\":\"ns=0;i=3035\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ProgressEventType\",\"nodeId\":\"ns=0;i=11436\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Context\",\"nodeId\":\"ns=0;i=12502\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Progress\",\"nodeId\":\"ns=0;i=12503\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TransitionEventType\",\"nodeId\":\"ns=0;i=2311\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Transition\",\"nodeId\":\"ns=0;i=2774\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3754\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FromState\",\"nodeId\":\"ns=0;i=2775\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3746\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ToState\",\"nodeId\":\"ns=0;i=2776\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3750\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramTransitionEventType\",\"nodeId\":\"ns=0;i=2378\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IntermediateResult\",\"nodeId\":\"ns=0;i=2379\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ConditionType\",\"nodeId\":\"ns=0;i=2782\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=11112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=11113\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionName\",\"nodeId\":\"ns=0;i=9009\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BranchId\",\"nodeId\":\"ns=0;i=9010\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Retain\",\"nodeId\":\"ns=0;i=3874\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportsFilteredRetain\",\"nodeId\":\"ns=0;i=32060\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9011\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9012\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveDisplayName\",\"nodeId\":\"ns=0;i=9015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=9017\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9018\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9019\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Quality\",\"nodeId\":\"ns=0;i=9020\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9021\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastSeverity\",\"nodeId\":\"ns=0;i=9022\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9023\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=9024\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9025\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=9026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=9028\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=9027\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"AddComment\",\"nodeId\":\"ns=0;i=9029\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9030\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConditionRefresh\",\"nodeId\":\"ns=0;i=3875\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=3876\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConditionRefresh2\",\"nodeId\":\"ns=0;i=12912\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12913\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DialogConditionType\",\"nodeId\":\"ns=0;i=2830\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9035\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9036\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DialogState\",\"nodeId\":\"ns=0;i=9055\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9060\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9063\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Prompt\",\"nodeId\":\"ns=0;i=2831\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ResponseOptionSet\",\"nodeId\":\"ns=0;i=9064\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultResponse\",\"nodeId\":\"ns=0;i=9065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OkResponse\",\"nodeId\":\"ns=0;i=9066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CancelResponse\",\"nodeId\":\"ns=0;i=9067\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastResponse\",\"nodeId\":\"ns=0;i=9068\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Respond\",\"nodeId\":\"ns=0;i=9069\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9070\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Respond2\",\"nodeId\":\"ns=0;i=24312\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24313\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AcknowledgeableConditionType\",\"nodeId\":\"ns=0;i=2881\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9073\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9074\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AckedState\",\"nodeId\":\"ns=0;i=9093\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9101\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConfirmedState\",\"nodeId\":\"ns=0;i=9102\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9103\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9109\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9110\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Acknowledge\",\"nodeId\":\"ns=0;i=9111\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9112\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Confirm\",\"nodeId\":\"ns=0;i=9113\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9114\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AlarmConditionType\",\"nodeId\":\"ns=0;i=2915\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9118\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9119\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9160\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9161\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveDisplayName\",\"nodeId\":\"ns=0;i=9164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=9166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9167\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9168\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InputNode\",\"nodeId\":\"ns=0;i=11120\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SuppressedState\",\"nodeId\":\"ns=0;i=9169\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9177\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OutOfServiceState\",\"nodeId\":\"ns=0;i=16371\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16372\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=16376\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=16378\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=16379\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ShelvingState\",\"nodeId\":\"ns=0;i=9178\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=9179\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9180\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=9184\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9188\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UnshelveTime\",\"nodeId\":\"ns=0;i=9189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TimedShelve\",\"nodeId\":\"ns=0;i=9213\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9214\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Unshelve\",\"nodeId\":\"ns=0;i=9211\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"OneShotShelve\",\"nodeId\":\"ns=0;i=9212\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"SuppressedOrShelved\",\"nodeId\":\"ns=0;i=9215\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeShelved\",\"nodeId\":\"ns=0;i=9216\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AudibleEnabled\",\"nodeId\":\"ns=0;i=16389\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AudibleSound\",\"nodeId\":\"ns=0;i=16390\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SilenceState\",\"nodeId\":\"ns=0;i=16380\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16381\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=16385\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=16387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=16388\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OnDelay\",\"nodeId\":\"ns=0;i=16395\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OffDelay\",\"nodeId\":\"ns=0;i=16396\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FirstInGroupFlag\",\"nodeId\":\"ns=0;i=16397\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FirstInGroup\",\"nodeId\":\"ns=0;i=16398\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"LatchedState\",\"nodeId\":\"ns=0;i=18190\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=18191\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=18195\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=18197\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=18198\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<AlarmGroup>\",\"nodeId\":\"ns=0;i=16399\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"ReAlarmTime\",\"nodeId\":\"ns=0;i=16400\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReAlarmRepeatCount\",\"nodeId\":\"ns=0;i=16401\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Silence\",\"nodeId\":\"ns=0;i=16402\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Suppress\",\"nodeId\":\"ns=0;i=16403\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Suppress2\",\"nodeId\":\"ns=0;i=24316\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24317\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Unsuppress\",\"nodeId\":\"ns=0;i=17868\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Unsuppress2\",\"nodeId\":\"ns=0;i=24318\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24319\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveFromService\",\"nodeId\":\"ns=0;i=17869\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"RemoveFromService2\",\"nodeId\":\"ns=0;i=24320\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24321\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PlaceInService\",\"nodeId\":\"ns=0;i=17870\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"PlaceInService2\",\"nodeId\":\"ns=0;i=24322\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24323\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=18199\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Reset2\",\"nodeId\":\"ns=0;i=24324\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24325\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetGroupMemberships\",\"nodeId\":\"ns=0;i=24744\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25154\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LimitAlarmType\",\"nodeId\":\"ns=0;i=2955\",\"nodeClass\":8,\"children\":[{\"displayName\":\"HighHighLimit\",\"nodeId\":\"ns=0;i=11124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighLimit\",\"nodeId\":\"ns=0;i=11125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLimit\",\"nodeId\":\"ns=0;i=11126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLowLimit\",\"nodeId\":\"ns=0;i=11127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseHighHighLimit\",\"nodeId\":\"ns=0;i=16572\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseHighLimit\",\"nodeId\":\"ns=0;i=16573\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseLowLimit\",\"nodeId\":\"ns=0;i=16574\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseLowLowLimit\",\"nodeId\":\"ns=0;i=16575\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityHighHigh\",\"nodeId\":\"ns=0;i=24770\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityHigh\",\"nodeId\":\"ns=0;i=24771\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityLow\",\"nodeId\":\"ns=0;i=24772\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityLowLow\",\"nodeId\":\"ns=0;i=24773\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighHighDeadband\",\"nodeId\":\"ns=0;i=24774\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighDeadband\",\"nodeId\":\"ns=0;i=24775\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowDeadband\",\"nodeId\":\"ns=0;i=24776\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLowDeadband\",\"nodeId\":\"ns=0;i=24777\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExclusiveLimitAlarmType\",\"nodeId\":\"ns=0;i=9341\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9398\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9399\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LimitState\",\"nodeId\":\"ns=0;i=9455\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=9456\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9457\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=9461\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9462\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9465\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ExclusiveLevelAlarmType\",\"nodeId\":\"ns=0;i=9482\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ExclusiveDeviationAlarmType\",\"nodeId\":\"ns=0;i=9764\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SetpointNode\",\"nodeId\":\"ns=0;i=9905\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseSetpointNode\",\"nodeId\":\"ns=0;i=16817\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExclusiveRateOfChangeAlarmType\",\"nodeId\":\"ns=0;i=9623\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=16899\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"NonExclusiveLimitAlarmType\",\"nodeId\":\"ns=0;i=9906\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9963\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9964\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighHighState\",\"nodeId\":\"ns=0;i=10020\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10021\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10025\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10028\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighState\",\"nodeId\":\"ns=0;i=10029\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10030\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10034\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10036\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10037\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowState\",\"nodeId\":\"ns=0;i=10038\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10046\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowLowState\",\"nodeId\":\"ns=0;i=10047\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10048\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10055\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NonExclusiveLevelAlarmType\",\"nodeId\":\"ns=0;i=10060\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"NonExclusiveDeviationAlarmType\",\"nodeId\":\"ns=0;i=10368\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SetpointNode\",\"nodeId\":\"ns=0;i=10522\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseSetpointNode\",\"nodeId\":\"ns=0;i=16776\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NonExclusiveRateOfChangeAlarmType\",\"nodeId\":\"ns=0;i=10214\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=16858\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"DiscreteAlarmType\",\"nodeId\":\"ns=0;i=10523\",\"nodeClass\":8,\"children\":[{\"displayName\":\"OffNormalAlarmType\",\"nodeId\":\"ns=0;i=10637\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NormalState\",\"nodeId\":\"ns=0;i=11158\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SystemOffNormalAlarmType\",\"nodeId\":\"ns=0;i=11753\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CertificateExpirationAlarmType\",\"nodeId\":\"ns=0;i=13225\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ExpirationDate\",\"nodeId\":\"ns=0;i=13325\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExpirationLimit\",\"nodeId\":\"ns=0;i=14900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=13326\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Certificate\",\"nodeId\":\"ns=0;i=13327\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TrustListOutOfDateAlarmType\",\"nodeId\":\"ns=0;i=19297\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TrustListId\",\"nodeId\":\"ns=0;i=19446\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=19447\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateFrequency\",\"nodeId\":\"ns=0;i=19448\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TripAlarmType\",\"nodeId\":\"ns=0;i=10751\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"InstrumentDiagnosticAlarmType\",\"nodeId\":\"ns=0;i=18347\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceHealthDiagnosticAlarmType\",\"nodeId\":\"ns=2;i=15143\",\"nodeClass\":8,\"children\":[{\"displayName\":\"FailureAlarmType\",\"nodeId\":\"ns=2;i=15292\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"CheckFunctionAlarmType\",\"nodeId\":\"ns=2;i=15441\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"OffSpecAlarmType\",\"nodeId\":\"ns=2;i=15590\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"MaintenanceRequiredAlarmType\",\"nodeId\":\"ns=2;i=15739\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"SystemDiagnosticAlarmType\",\"nodeId\":\"ns=0;i=18496\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"DiscrepancyAlarmType\",\"nodeId\":\"ns=0;i=17080\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TargetValueNode\",\"nodeId\":\"ns=0;i=17215\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExpectedTime\",\"nodeId\":\"ns=0;i=17216\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Tolerance\",\"nodeId\":\"ns=0;i=17217\",\"nodeClass\":2,\"children\":[]}]}]}]}]}]},{\"displayName\":\"AggregateFunctionType\",\"nodeId\":\"ns=0;i=2340\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"StateMachineType\",\"nodeId\":\"ns=0;i=2299\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=2769\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3720\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=2770\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3724\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FiniteStateMachineType\",\"nodeId\":\"ns=0;i=2771\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=2772\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3728\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=2773\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3732\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AvailableStates\",\"nodeId\":\"ns=0;i=17635\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AvailableTransitions\",\"nodeId\":\"ns=0;i=17636\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FileTransferStateMachineType\",\"nodeId\":\"ns=0;i=15803\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Idle\",\"nodeId\":\"ns=0;i=15815\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=15816\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadPrepare\",\"nodeId\":\"ns=0;i=15817\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=15818\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadTransfer\",\"nodeId\":\"ns=0;i=15819\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=15820\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplyWrite\",\"nodeId\":\"ns=0;i=15821\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=15822\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Error\",\"nodeId\":\"ns=0;i=15823\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=15824\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdleToReadPrepare\",\"nodeId\":\"ns=0;i=15825\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15826\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadPrepareToReadTransfer\",\"nodeId\":\"ns=0;i=15827\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15828\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadTransferToIdle\",\"nodeId\":\"ns=0;i=15829\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15830\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdleToApplyWrite\",\"nodeId\":\"ns=0;i=15831\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15832\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplyWriteToIdle\",\"nodeId\":\"ns=0;i=15833\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15834\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadPrepareToError\",\"nodeId\":\"ns=0;i=15835\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15836\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadTransferToError\",\"nodeId\":\"ns=0;i=15837\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15838\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplyWriteToError\",\"nodeId\":\"ns=0;i=15839\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15840\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ErrorToIdle\",\"nodeId\":\"ns=0;i=15841\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=15842\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=15843\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"ShelvedStateMachineType\",\"nodeId\":\"ns=0;i=2929\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UnshelveTime\",\"nodeId\":\"ns=0;i=9115\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Unshelved\",\"nodeId\":\"ns=0;i=2930\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=6098\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimedShelved\",\"nodeId\":\"ns=0;i=2932\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=6100\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OneShotShelved\",\"nodeId\":\"ns=0;i=2933\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=6101\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UnshelvedToTimedShelved\",\"nodeId\":\"ns=0;i=2935\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11322\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UnshelvedToOneShotShelved\",\"nodeId\":\"ns=0;i=2936\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11323\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimedShelvedToUnshelved\",\"nodeId\":\"ns=0;i=2940\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11324\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimedShelvedToOneShotShelved\",\"nodeId\":\"ns=0;i=2942\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11325\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OneShotShelvedToUnshelved\",\"nodeId\":\"ns=0;i=2943\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11326\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OneShotShelvedToTimedShelved\",\"nodeId\":\"ns=0;i=2945\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11327\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimedShelve\",\"nodeId\":\"ns=0;i=2949\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=2991\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimedShelve2\",\"nodeId\":\"ns=0;i=24756\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24757\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Unshelve\",\"nodeId\":\"ns=0;i=2947\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Unshelve2\",\"nodeId\":\"ns=0;i=24758\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24759\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OneShotShelve\",\"nodeId\":\"ns=0;i=2948\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"OneShotShelve2\",\"nodeId\":\"ns=0;i=24760\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24761\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ExclusiveLimitStateMachineType\",\"nodeId\":\"ns=0;i=9318\",\"nodeClass\":8,\"children\":[{\"displayName\":\"HighHigh\",\"nodeId\":\"ns=0;i=9329\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=9330\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"High\",\"nodeId\":\"ns=0;i=9331\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=9332\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Low\",\"nodeId\":\"ns=0;i=9333\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=9334\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowLow\",\"nodeId\":\"ns=0;i=9335\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=9336\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowLowToLow\",\"nodeId\":\"ns=0;i=9337\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11340\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowToLowLow\",\"nodeId\":\"ns=0;i=9338\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11341\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighHighToHigh\",\"nodeId\":\"ns=0;i=9339\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11342\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighToHighHigh\",\"nodeId\":\"ns=0;i=9340\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11343\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ProgramStateMachineType\",\"nodeId\":\"ns=0;i=2391\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=3830\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3831\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Number\",\"nodeId\":\"ns=0;i=3833\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=3835\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3836\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Number\",\"nodeId\":\"ns=0;i=3838\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=3839\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Creatable\",\"nodeId\":\"ns=0;i=2392\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deletable\",\"nodeId\":\"ns=0;i=2393\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AutoDelete\",\"nodeId\":\"ns=0;i=2394\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RecycleCount\",\"nodeId\":\"ns=0;i=2395\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InstanceCount\",\"nodeId\":\"ns=0;i=2396\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxInstanceCount\",\"nodeId\":\"ns=0;i=2397\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxRecycleCount\",\"nodeId\":\"ns=0;i=2398\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProgramDiagnostic\",\"nodeId\":\"ns=0;i=2399\",\"nodeClass\":2,\"children\":[{\"displayName\":\"CreateSessionId\",\"nodeId\":\"ns=0;i=3840\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateClientName\",\"nodeId\":\"ns=0;i=3841\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvocationCreationTime\",\"nodeId\":\"ns=0;i=3842\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastTransitionTime\",\"nodeId\":\"ns=0;i=3843\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCall\",\"nodeId\":\"ns=0;i=3844\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodSessionId\",\"nodeId\":\"ns=0;i=3845\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodInputArguments\",\"nodeId\":\"ns=0;i=3846\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodOutputArguments\",\"nodeId\":\"ns=0;i=3847\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodInputValues\",\"nodeId\":\"ns=0;i=15038\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodOutputValues\",\"nodeId\":\"ns=0;i=15040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCallTime\",\"nodeId\":\"ns=0;i=3848\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodReturnStatus\",\"nodeId\":\"ns=0;i=3849\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FinalResultData\",\"nodeId\":\"ns=0;i=3850\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Halted\",\"nodeId\":\"ns=0;i=2406\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=2407\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Ready\",\"nodeId\":\"ns=0;i=2400\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=2401\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Running\",\"nodeId\":\"ns=0;i=2402\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=2403\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Suspended\",\"nodeId\":\"ns=0;i=2404\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=2405\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HaltedToReady\",\"nodeId\":\"ns=0;i=2408\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2409\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadyToRunning\",\"nodeId\":\"ns=0;i=2410\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2411\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RunningToHalted\",\"nodeId\":\"ns=0;i=2412\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2413\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RunningToReady\",\"nodeId\":\"ns=0;i=2414\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2415\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RunningToSuspended\",\"nodeId\":\"ns=0;i=2416\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2417\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SuspendedToRunning\",\"nodeId\":\"ns=0;i=2418\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2419\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SuspendedToHalted\",\"nodeId\":\"ns=0;i=2420\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2421\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SuspendedToReady\",\"nodeId\":\"ns=0;i=2422\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2423\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReadyToHalted\",\"nodeId\":\"ns=0;i=2424\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2425\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Start\",\"nodeId\":\"ns=0;i=2426\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Suspend\",\"nodeId\":\"ns=0;i=2427\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Resume\",\"nodeId\":\"ns=0;i=2428\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Halt\",\"nodeId\":\"ns=0;i=2429\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=2430\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"PrepareForUpdateStateMachineType\",\"nodeId\":\"ns=2;i=213\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PercentComplete\",\"nodeId\":\"ns=2;i=227\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Prepare\",\"nodeId\":\"ns=2;i=228\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Abort\",\"nodeId\":\"ns=2;i=229\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Resume\",\"nodeId\":\"ns=2;i=230\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Idle\",\"nodeId\":\"ns=2;i=231\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=232\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Preparing\",\"nodeId\":\"ns=2;i=233\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=234\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PreparedForUpdate\",\"nodeId\":\"ns=2;i=235\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=236\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Resuming\",\"nodeId\":\"ns=2;i=237\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=238\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdleToPreparing\",\"nodeId\":\"ns=2;i=239\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=240\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PreparingToIdle\",\"nodeId\":\"ns=2;i=241\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=242\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PreparingToPreparedForUpdate\",\"nodeId\":\"ns=2;i=243\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=244\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PreparedForUpdateToResuming\",\"nodeId\":\"ns=2;i=245\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=246\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ResumingToIdle\",\"nodeId\":\"ns=2;i=247\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=248\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"InstallationStateMachineType\",\"nodeId\":\"ns=2;i=249\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PercentComplete\",\"nodeId\":\"ns=2;i=263\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InstallationDelay\",\"nodeId\":\"ns=2;i=264\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InstallSoftwarePackage\",\"nodeId\":\"ns=2;i=265\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=266\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InstallFiles\",\"nodeId\":\"ns=2;i=268\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=269\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Resume\",\"nodeId\":\"ns=2;i=270\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Idle\",\"nodeId\":\"ns=2;i=271\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=272\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Installing\",\"nodeId\":\"ns=2;i=273\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=274\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Error\",\"nodeId\":\"ns=2;i=275\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=276\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdleToInstalling\",\"nodeId\":\"ns=2;i=277\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=387\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InstallingToIdle\",\"nodeId\":\"ns=2;i=279\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=280\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InstallingToError\",\"nodeId\":\"ns=2;i=281\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=282\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ErrorToIdle\",\"nodeId\":\"ns=2;i=283\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=284\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PowerCycleStateMachineType\",\"nodeId\":\"ns=2;i=285\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NotWaitingForPowerCycle\",\"nodeId\":\"ns=2;i=299\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=300\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WaitingForPowerCycle\",\"nodeId\":\"ns=2;i=301\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=302\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NotWaitingForPowerCycleToWaitingForPowerCycle\",\"nodeId\":\"ns=2;i=303\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=304\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WaitingForPowerCycleToNotWaitingForPowerCycle\",\"nodeId\":\"ns=2;i=305\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=306\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ConfirmationStateMachineType\",\"nodeId\":\"ns=2;i=307\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Confirm\",\"nodeId\":\"ns=2;i=321\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"ConfirmationTimeout\",\"nodeId\":\"ns=2;i=322\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NotWaitingForConfirm\",\"nodeId\":\"ns=2;i=323\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=324\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WaitingForConfirm\",\"nodeId\":\"ns=2;i=325\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=2;i=326\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NotWaitingForConfirmToWaitingForConfirm\",\"nodeId\":\"ns=2;i=327\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=328\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WaitingForConfirmToNotWaitingForConfirm\",\"nodeId\":\"ns=2;i=329\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=2;i=330\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"StateType\",\"nodeId\":\"ns=0;i=2307\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StateNumber\",\"nodeId\":\"ns=0;i=2308\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InitialStateType\",\"nodeId\":\"ns=0;i=2309\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ChoiceStateType\",\"nodeId\":\"ns=0;i=15109\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"TransitionType\",\"nodeId\":\"ns=0;i=2310\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=2312\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TemporaryFileTransferType\",\"nodeId\":\"ns=0;i=15744\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ClientProcessingTimeout\",\"nodeId\":\"ns=0;i=15745\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GenerateFileForRead\",\"nodeId\":\"ns=0;i=15746\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15747\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15748\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GenerateFileForWrite\",\"nodeId\":\"ns=0;i=15749\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16359\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15750\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndCommit\",\"nodeId\":\"ns=0;i=15751\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15752\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15753\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<TransferState>\",\"nodeId\":\"ns=0;i=15754\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=15755\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=15756\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=15794\",\"nodeClass\":4,\"children\":[]}]}]},{\"displayName\":\"RoleSetType\",\"nodeId\":\"ns=0;i=15607\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<RoleName>\",\"nodeId\":\"ns=0;i=15608\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Identities\",\"nodeId\":\"ns=0;i=16162\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddRole\",\"nodeId\":\"ns=0;i=15997\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15998\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15999\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveRole\",\"nodeId\":\"ns=0;i=16000\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16001\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"RoleType\",\"nodeId\":\"ns=0;i=15620\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Identities\",\"nodeId\":\"ns=0;i=16173\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationsExclude\",\"nodeId\":\"ns=0;i=15410\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Applications\",\"nodeId\":\"ns=0;i=16174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointsExclude\",\"nodeId\":\"ns=0;i=15411\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Endpoints\",\"nodeId\":\"ns=0;i=16175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CustomConfiguration\",\"nodeId\":\"ns=0;i=24139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddIdentity\",\"nodeId\":\"ns=0;i=15624\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15625\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveIdentity\",\"nodeId\":\"ns=0;i=15626\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15627\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddApplication\",\"nodeId\":\"ns=0;i=16176\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16177\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveApplication\",\"nodeId\":\"ns=0;i=16178\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16179\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddEndpoint\",\"nodeId\":\"ns=0;i=16180\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16181\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveEndpoint\",\"nodeId\":\"ns=0;i=16182\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16183\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DictionaryEntryType\",\"nodeId\":\"ns=0;i=17589\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<DictionaryEntryName>\",\"nodeId\":\"ns=0;i=17590\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"IrdiDictionaryEntryType\",\"nodeId\":\"ns=0;i=17598\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"UriDictionaryEntryType\",\"nodeId\":\"ns=0;i=17600\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"BaseInterfaceType\",\"nodeId\":\"ns=0;i=17602\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IOrderedObjectType\",\"nodeId\":\"ns=0;i=23513\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NumberInList\",\"nodeId\":\"ns=0;i=23517\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIetfBaseNetworkInterfaceType\",\"nodeId\":\"ns=0;i=24148\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AdminStatus\",\"nodeId\":\"ns=0;i=24149\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperStatus\",\"nodeId\":\"ns=0;i=24150\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PhysAddress\",\"nodeId\":\"ns=0;i=24151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Speed\",\"nodeId\":\"ns=0;i=24152\",\"nodeClass\":2,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=24157\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IIeeeBaseEthernetPortType\",\"nodeId\":\"ns=0;i=24158\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Speed\",\"nodeId\":\"ns=0;i=24159\",\"nodeClass\":2,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=24164\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Duplex\",\"nodeId\":\"ns=0;i=24165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFrameLength\",\"nodeId\":\"ns=0;i=24166\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeAutoNegotiationStatusType\",\"nodeId\":\"ns=0;i=24233\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NegotiationStatus\",\"nodeId\":\"ns=0;i=24234\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IBaseEthernetCapabilitiesType\",\"nodeId\":\"ns=0;i=24167\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanTagCapable\",\"nodeId\":\"ns=0;i=24168\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IVlanIdType\",\"nodeId\":\"ns=0;i=25218\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanId\",\"nodeId\":\"ns=0;i=25219\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ISrClassType\",\"nodeId\":\"ns=0;i=24169\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=24170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=24171\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Vid\",\"nodeId\":\"ns=0;i=24172\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnStreamType\",\"nodeId\":\"ns=0;i=24173\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StreamId\",\"nodeId\":\"ns=0;i=24174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StreamName\",\"nodeId\":\"ns=0;i=24175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=24176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AccumulatedLatency\",\"nodeId\":\"ns=0;i=24177\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SrClassId\",\"nodeId\":\"ns=0;i=24178\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnTrafficSpecificationType\",\"nodeId\":\"ns=0;i=24179\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MaxIntervalFrames\",\"nodeId\":\"ns=0;i=24180\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFrameSize\",\"nodeId\":\"ns=0;i=24181\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Interval\",\"nodeId\":\"ns=0;i=24182\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnStatusStreamType\",\"nodeId\":\"ns=0;i=24183\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TalkerStatus\",\"nodeId\":\"ns=0;i=24184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ListenerStatus\",\"nodeId\":\"ns=0;i=24185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FailureCode\",\"nodeId\":\"ns=0;i=24186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FailureSystemIdentifier\",\"nodeId\":\"ns=0;i=24187\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationType\",\"nodeId\":\"ns=0;i=24188\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MacAddress\",\"nodeId\":\"ns=0;i=24189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InterfaceName\",\"nodeId\":\"ns=0;i=24190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationTalkerType\",\"nodeId\":\"ns=0;i=24191\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TimeAwareOffset\",\"nodeId\":\"ns=0;i=24194\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationListenerType\",\"nodeId\":\"ns=0;i=24195\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReceiveOffset\",\"nodeId\":\"ns=0;i=24198\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IIeeeTsnMacAddressType\",\"nodeId\":\"ns=0;i=24199\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DestinationAddress\",\"nodeId\":\"ns=0;i=24200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceAddress\",\"nodeId\":\"ns=0;i=24201\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnVlanTagType\",\"nodeId\":\"ns=0;i=24202\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanId\",\"nodeId\":\"ns=0;i=24203\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityCodePoint\",\"nodeId\":\"ns=0;i=24204\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IPriorityMappingEntryType\",\"nodeId\":\"ns=0;i=24205\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MappingUri\",\"nodeId\":\"ns=0;i=24206\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityLabel\",\"nodeId\":\"ns=0;i=24207\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityValue_PCP\",\"nodeId\":\"ns=0;i=24208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityValue_DSCP\",\"nodeId\":\"ns=0;i=24209\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IVendorNameplateType\",\"nodeId\":\"ns=2;i=15035\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=15036\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=15037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Model\",\"nodeId\":\"ns=2;i=15038\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HardwareRevision\",\"nodeId\":\"ns=2;i=15039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=15040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceRevision\",\"nodeId\":\"ns=2;i=15041\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductCode\",\"nodeId\":\"ns=2;i=15042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceManual\",\"nodeId\":\"ns=2;i=15043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceClass\",\"nodeId\":\"ns=2;i=15044\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SerialNumber\",\"nodeId\":\"ns=2;i=15045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductInstanceUri\",\"nodeId\":\"ns=2;i=15046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisionCounter\",\"nodeId\":\"ns=2;i=15047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareReleaseDate\",\"nodeId\":\"ns=2;i=23\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PatchIdentifiers\",\"nodeId\":\"ns=2;i=24\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ITagNameplateType\",\"nodeId\":\"ns=2;i=15048\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AssetId\",\"nodeId\":\"ns=2;i=15049\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ComponentName\",\"nodeId\":\"ns=2;i=15050\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IDeviceHealthType\",\"nodeId\":\"ns=2;i=15051\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceHealth\",\"nodeId\":\"ns=2;i=15052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceHealthAlarms\",\"nodeId\":\"ns=2;i=15053\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"ISupportInfoType\",\"nodeId\":\"ns=2;i=15054\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceTypeImage\",\"nodeId\":\"ns=2;i=15055\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=15056\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Documentation\",\"nodeId\":\"ns=2;i=15057\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DocumentIdentifier>\",\"nodeId\":\"ns=2;i=15058\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DocumentationFiles\",\"nodeId\":\"ns=2;i=27\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DocumentFileId>\",\"nodeId\":\"ns=2;i=28\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=2;i=29\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=2;i=30\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=2;i=31\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=2;i=32\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=2;i=36\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=37\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=38\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=2;i=39\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=62\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=2;i=63\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=64\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=65\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=2;i=66\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=67\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=2;i=68\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=69\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=70\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=2;i=71\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=72\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"ProtocolSupport\",\"nodeId\":\"ns=2;i=15059\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ProtocolSupportIdentifier>\",\"nodeId\":\"ns=2;i=15060\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ImageSet\",\"nodeId\":\"ns=2;i=15061\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=15062\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IOperationCounterType\",\"nodeId\":\"ns=2;i=480\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PowerOnDuration\",\"nodeId\":\"ns=2;i=481\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperationDuration\",\"nodeId\":\"ns=2;i=482\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperationCycleCounter\",\"nodeId\":\"ns=2;i=483\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"OrderedListType\",\"nodeId\":\"ns=0;i=23518\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<OrderedObject>\",\"nodeId\":\"ns=0;i=23519\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NumberInList\",\"nodeId\":\"ns=0;i=23521\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NodeVersion\",\"nodeId\":\"ns=0;i=23525\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BaseConditionClassType\",\"nodeId\":\"ns=0;i=11163\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ProcessConditionClassType\",\"nodeId\":\"ns=0;i=11164\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"MaintenanceConditionClassType\",\"nodeId\":\"ns=0;i=11165\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"SystemConditionClassType\",\"nodeId\":\"ns=0;i=11166\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"SafetyConditionClassType\",\"nodeId\":\"ns=0;i=17218\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"HighlyManagedAlarmConditionClassType\",\"nodeId\":\"ns=0;i=17219\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"TrainingConditionClassType\",\"nodeId\":\"ns=0;i=17220\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"StatisticalConditionClassType\",\"nodeId\":\"ns=0;i=18665\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"TestingConditionClassType\",\"nodeId\":\"ns=0;i=17221\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"AlarmMetricsType\",\"nodeId\":\"ns=0;i=17279\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AlarmCount\",\"nodeId\":\"ns=0;i=17280\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=17991\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaximumActiveState\",\"nodeId\":\"ns=0;i=17281\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaximumUnAck\",\"nodeId\":\"ns=0;i=17282\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentAlarmRate\",\"nodeId\":\"ns=0;i=17284\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Rate\",\"nodeId\":\"ns=0;i=17285\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MaximumAlarmRate\",\"nodeId\":\"ns=0;i=17286\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Rate\",\"nodeId\":\"ns=0;i=17287\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MaximumReAlarmCount\",\"nodeId\":\"ns=0;i=17283\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AverageAlarmRate\",\"nodeId\":\"ns=0;i=17288\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Rate\",\"nodeId\":\"ns=0;i=17289\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=18666\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"HistoricalDataConfigurationType\",\"nodeId\":\"ns=0;i=2318\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=0;i=3059\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=0;i=11168\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=0;i=11169\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=0;i=11170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=0;i=11171\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AggregateFunctions\",\"nodeId\":\"ns=0;i=11876\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Stepped\",\"nodeId\":\"ns=0;i=2323\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Definition\",\"nodeId\":\"ns=0;i=2324\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeInterval\",\"nodeId\":\"ns=0;i=2325\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MinTimeInterval\",\"nodeId\":\"ns=0;i=2326\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExceptionDeviation\",\"nodeId\":\"ns=0;i=2327\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExceptionDeviationFormat\",\"nodeId\":\"ns=0;i=2328\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfArchive\",\"nodeId\":\"ns=0;i=11499\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartOfOnlineArchive\",\"nodeId\":\"ns=0;i=11500\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerTimestampSupported\",\"nodeId\":\"ns=0;i=19092\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HistoryServerCapabilitiesType\",\"nodeId\":\"ns=0;i=2330\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AccessHistoryDataCapability\",\"nodeId\":\"ns=0;i=2331\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AccessHistoryEventsCapability\",\"nodeId\":\"ns=0;i=2332\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxReturnDataValues\",\"nodeId\":\"ns=0;i=11268\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxReturnEventValues\",\"nodeId\":\"ns=0;i=11269\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InsertDataCapability\",\"nodeId\":\"ns=0;i=2334\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReplaceDataCapability\",\"nodeId\":\"ns=0;i=2335\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateDataCapability\",\"nodeId\":\"ns=0;i=2336\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteRawCapability\",\"nodeId\":\"ns=0;i=2337\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteAtTimeCapability\",\"nodeId\":\"ns=0;i=2338\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InsertEventCapability\",\"nodeId\":\"ns=0;i=11278\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReplaceEventCapability\",\"nodeId\":\"ns=0;i=11279\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateEventCapability\",\"nodeId\":\"ns=0;i=11280\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteEventCapability\",\"nodeId\":\"ns=0;i=11501\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InsertAnnotationCapability\",\"nodeId\":\"ns=0;i=11270\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AggregateFunctions\",\"nodeId\":\"ns=0;i=11172\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"ServerTimestampSupported\",\"nodeId\":\"ns=0;i=19094\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CertificateGroupType\",\"nodeId\":\"ns=0;i=12555\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13599\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13600\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13601\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13602\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13603\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13605\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13606\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13607\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13608\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13609\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13610\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13611\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13612\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13613\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13614\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13615\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13616\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13617\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13618\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13619\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13620\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13621\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13622\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13623\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13624\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13625\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13626\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13627\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13628\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13629\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13630\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13631\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GetRejectedList\",\"nodeId\":\"ns=0;i=23526\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=23527\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CertificateExpired\",\"nodeId\":\"ns=0;i=19450\",\"nodeClass\":1,\"children\":[{\"displayName\":\"EventId\",\"nodeId\":\"ns=0;i=19451\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventType\",\"nodeId\":\"ns=0;i=19452\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceNode\",\"nodeId\":\"ns=0;i=19453\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceName\",\"nodeId\":\"ns=0;i=19454\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Time\",\"nodeId\":\"ns=0;i=19455\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveTime\",\"nodeId\":\"ns=0;i=19456\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Message\",\"nodeId\":\"ns=0;i=19458\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Severity\",\"nodeId\":\"ns=0;i=19459\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=19460\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=19461\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionName\",\"nodeId\":\"ns=0;i=19464\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BranchId\",\"nodeId\":\"ns=0;i=19465\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Retain\",\"nodeId\":\"ns=0;i=19466\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=19467\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=19468\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Quality\",\"nodeId\":\"ns=0;i=19476\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=19477\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastSeverity\",\"nodeId\":\"ns=0;i=19478\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=19479\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=19480\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=19481\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=19482\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=19483\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=19484\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"AddComment\",\"nodeId\":\"ns=0;i=19485\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=19486\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AckedState\",\"nodeId\":\"ns=0;i=19487\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=19488\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Acknowledge\",\"nodeId\":\"ns=0;i=19505\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=19506\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=19509\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=19510\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InputNode\",\"nodeId\":\"ns=0;i=19518\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SuppressedOrShelved\",\"nodeId\":\"ns=0;i=20101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NormalState\",\"nodeId\":\"ns=0;i=20138\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExpirationDate\",\"nodeId\":\"ns=0;i=20139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=20141\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Certificate\",\"nodeId\":\"ns=0;i=20142\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TrustListOutOfDate\",\"nodeId\":\"ns=0;i=20143\",\"nodeClass\":1,\"children\":[{\"displayName\":\"EventId\",\"nodeId\":\"ns=0;i=20144\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventType\",\"nodeId\":\"ns=0;i=20145\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceNode\",\"nodeId\":\"ns=0;i=20146\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceName\",\"nodeId\":\"ns=0;i=20147\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Time\",\"nodeId\":\"ns=0;i=20148\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveTime\",\"nodeId\":\"ns=0;i=20149\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Message\",\"nodeId\":\"ns=0;i=20151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Severity\",\"nodeId\":\"ns=0;i=20152\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=20153\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=20154\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionName\",\"nodeId\":\"ns=0;i=20157\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BranchId\",\"nodeId\":\"ns=0;i=20158\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Retain\",\"nodeId\":\"ns=0;i=20159\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=20160\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=20161\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Quality\",\"nodeId\":\"ns=0;i=20169\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=20170\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastSeverity\",\"nodeId\":\"ns=0;i=20171\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=20172\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=20173\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=20174\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=20175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=20176\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=20177\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"AddComment\",\"nodeId\":\"ns=0;i=20178\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=20179\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AckedState\",\"nodeId\":\"ns=0;i=20180\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=20181\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Acknowledge\",\"nodeId\":\"ns=0;i=20198\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=20199\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=20202\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=20203\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InputNode\",\"nodeId\":\"ns=0;i=20211\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SuppressedOrShelved\",\"nodeId\":\"ns=0;i=20249\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NormalState\",\"nodeId\":\"ns=0;i=20286\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrustListId\",\"nodeId\":\"ns=0;i=20287\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=20288\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateFrequency\",\"nodeId\":\"ns=0;i=20289\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=12556\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ApplicationCertificateType\",\"nodeId\":\"ns=0;i=12557\",\"nodeClass\":8,\"children\":[{\"displayName\":\"RsaMinApplicationCertificateType\",\"nodeId\":\"ns=0;i=12559\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"RsaSha256ApplicationCertificateType\",\"nodeId\":\"ns=0;i=12560\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccApplicationCertificateType\",\"nodeId\":\"ns=0;i=23537\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EccNistP256ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23538\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccNistP384ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23539\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccBrainpoolP256r1ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23540\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccBrainpoolP384r1ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23541\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccCurve25519ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23542\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"EccCurve448ApplicationCertificateType\",\"nodeId\":\"ns=0;i=23543\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"HttpsCertificateType\",\"nodeId\":\"ns=0;i=12558\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"UserCredentialCertificateType\",\"nodeId\":\"ns=0;i=15181\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"TransactionDiagnosticsType\",\"nodeId\":\"ns=0;i=32286\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=32287\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndTime\",\"nodeId\":\"ns=0;i=32288\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Result\",\"nodeId\":\"ns=0;i=32289\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AffectedTrustLists\",\"nodeId\":\"ns=0;i=32290\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AffectedCertificateGroups\",\"nodeId\":\"ns=0;i=32291\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Errors\",\"nodeId\":\"ns=0;i=32292\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServerConfigurationType\",\"nodeId\":\"ns=0;i=12581\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CertificateGroups\",\"nodeId\":\"ns=0;i=13950\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DefaultApplicationGroup\",\"nodeId\":\"ns=0;i=13951\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=13952\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=13953\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=13954\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=13955\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=13956\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=13958\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13959\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13960\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=13961\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13962\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=13963\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13964\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13965\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=13966\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13967\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=13968\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13969\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13970\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=13971\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13972\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=13973\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=13974\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13975\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13976\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=13977\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13978\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=13979\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=13980\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13981\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=13982\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=13983\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=13984\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ApplicationUri\",\"nodeId\":\"ns=0;i=25696\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=25724\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationType\",\"nodeId\":\"ns=0;i=25697\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerCapabilities\",\"nodeId\":\"ns=0;i=12708\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportedPrivateKeyFormats\",\"nodeId\":\"ns=0;i=12583\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTrustListSize\",\"nodeId\":\"ns=0;i=12584\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MulticastDnsEnabled\",\"nodeId\":\"ns=0;i=12585\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HasSecureElement\",\"nodeId\":\"ns=0;i=23593\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateCertificate\",\"nodeId\":\"ns=0;i=12616\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12617\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12618\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetCertificates\",\"nodeId\":\"ns=0;i=32296\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=32297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=32298\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplyChanges\",\"nodeId\":\"ns=0;i=12734\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"CancelChanges\",\"nodeId\":\"ns=0;i=25698\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"CreateSigningRequest\",\"nodeId\":\"ns=0;i=12731\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12732\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12733\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetRejectedList\",\"nodeId\":\"ns=0;i=12775\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=12776\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ResetToServerDefaults\",\"nodeId\":\"ns=0;i=25699\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"TransactionDiagnostics\",\"nodeId\":\"ns=0;i=32299\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=32300\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndTime\",\"nodeId\":\"ns=0;i=32301\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Result\",\"nodeId\":\"ns=0;i=32302\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AffectedTrustLists\",\"nodeId\":\"ns=0;i=32303\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AffectedCertificateGroups\",\"nodeId\":\"ns=0;i=32304\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Errors\",\"nodeId\":\"ns=0;i=32305\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplicationConfigurationType\",\"nodeId\":\"ns=0;i=25731\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ApplicationUri\",\"nodeId\":\"ns=0;i=26850\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=26851\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationType\",\"nodeId\":\"ns=0;i=26852\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Enabled\",\"nodeId\":\"ns=0;i=26849\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"KeyCredentialConfigurationType\",\"nodeId\":\"ns=0;i=18001\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=18069\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProfileUri\",\"nodeId\":\"ns=0;i=18165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrls\",\"nodeId\":\"ns=0;i=18004\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServiceStatus\",\"nodeId\":\"ns=0;i=18005\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GetEncryptingKey\",\"nodeId\":\"ns=0;i=17534\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17535\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17536\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UpdateCredential\",\"nodeId\":\"ns=0;i=18006\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=18007\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DeleteCredential\",\"nodeId\":\"ns=0;i=18008\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"AuthorizationServiceConfigurationType\",\"nodeId\":\"ns=0;i=17852\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServiceUri\",\"nodeId\":\"ns=0;i=18072\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServiceCertificate\",\"nodeId\":\"ns=0;i=17860\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IssuerEndpointUrl\",\"nodeId\":\"ns=0;i=18073\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AggregateConfigurationType\",\"nodeId\":\"ns=0;i=11187\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TreatUncertainAsBad\",\"nodeId\":\"ns=0;i=11188\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataBad\",\"nodeId\":\"ns=0;i=11189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PercentDataGood\",\"nodeId\":\"ns=0;i=11190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UseSlopedExtrapolation\",\"nodeId\":\"ns=0;i=11191\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubKeyServiceType\",\"nodeId\":\"ns=0;i=15906\",\"nodeClass\":8,\"children\":[{\"displayName\":\"GetSecurityKeys\",\"nodeId\":\"ns=0;i=15907\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15908\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15909\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetSecurityGroup\",\"nodeId\":\"ns=0;i=15910\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15911\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15912\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecurityGroups\",\"nodeId\":\"ns=0;i=15913\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddSecurityGroup\",\"nodeId\":\"ns=0;i=15914\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15915\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15916\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveSecurityGroup\",\"nodeId\":\"ns=0;i=15917\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15918\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"KeyPushTargets\",\"nodeId\":\"ns=0;i=25277\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddPushTarget\",\"nodeId\":\"ns=0;i=25278\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25279\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25280\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemovePushTarget\",\"nodeId\":\"ns=0;i=25281\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25282\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PublishSubscribeType\",\"nodeId\":\"ns=0;i=14416\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<ConnectionName>\",\"nodeId\":\"ns=0;i=14417\",\"nodeClass\":1,\"children\":[{\"displayName\":\"PublisherId\",\"nodeId\":\"ns=0;i=14418\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProfileUri\",\"nodeId\":\"ns=0;i=17292\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17706\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConnectionProperties\",\"nodeId\":\"ns=0;i=17478\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Address\",\"nodeId\":\"ns=0;i=14423\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=15533\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17503\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=14419\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=14420\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SetSecurityKeys\",\"nodeId\":\"ns=0;i=17296\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17297\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddConnection\",\"nodeId\":\"ns=0;i=16598\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=16599\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=16600\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveConnection\",\"nodeId\":\"ns=0;i=14432\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14433\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PublishedDataSets\",\"nodeId\":\"ns=0;i=14434\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"SubscribedDataSets\",\"nodeId\":\"ns=0;i=23622\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"PubSubConfiguration\",\"nodeId\":\"ns=0;i=25403\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=25404\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=25405\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=25406\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=25407\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=25411\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25412\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25413\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=25414\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25415\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=25416\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25417\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25418\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=25419\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25420\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=25421\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25422\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25423\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=25424\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25425\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReserveIds\",\"nodeId\":\"ns=0;i=25426\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25427\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25428\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=25429\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25430\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25431\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=15844\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15845\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=18715\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18716\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=18717\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18718\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18719\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18720\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=18722\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18723\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18724\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18725\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=18727\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=18728\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=18729\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=18730\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18731\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18732\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18733\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=18735\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18736\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18737\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18738\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=18740\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18741\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18742\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18743\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=18745\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18746\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18747\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18748\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=18750\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18751\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18752\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18753\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=18755\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=18756\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=18757\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18758\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=18760\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetWriters\",\"nodeId\":\"ns=0;i=18761\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18762\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConfiguredDataSetReaders\",\"nodeId\":\"ns=0;i=18763\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18764\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetWriters\",\"nodeId\":\"ns=0;i=18765\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18766\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetReaders\",\"nodeId\":\"ns=0;i=18767\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=18768\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubCapablities\",\"nodeId\":\"ns=0;i=23642\",\"nodeClass\":1,\"children\":[{\"displayName\":\"MaxPubSubConnections\",\"nodeId\":\"ns=0;i=23643\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxWriterGroups\",\"nodeId\":\"ns=0;i=23644\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxReaderGroups\",\"nodeId\":\"ns=0;i=23645\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxDataSetWriters\",\"nodeId\":\"ns=0;i=23646\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxDataSetReaders\",\"nodeId\":\"ns=0;i=23647\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFieldsPerDataSet\",\"nodeId\":\"ns=0;i=23648\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DataSetClasses\",\"nodeId\":\"ns=0;i=23649\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DataSetName>\",\"nodeId\":\"ns=0;i=24009\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SupportedTransportProfiles\",\"nodeId\":\"ns=0;i=17479\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultDatagramPublisherId\",\"nodeId\":\"ns=0;i=25432\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfigurationVersion\",\"nodeId\":\"ns=0;i=25433\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultSecurityKeyServices\",\"nodeId\":\"ns=0;i=32396\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfigurationProperties\",\"nodeId\":\"ns=0;i=32397\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SecurityGroupType\",\"nodeId\":\"ns=0;i=15471\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecurityGroupId\",\"nodeId\":\"ns=0;i=15472\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyLifetime\",\"nodeId\":\"ns=0;i=15046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=15047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFutureKeyCount\",\"nodeId\":\"ns=0;i=15048\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxPastKeyCount\",\"nodeId\":\"ns=0;i=15056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvalidateKeys\",\"nodeId\":\"ns=0;i=25624\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"ForceKeyRotation\",\"nodeId\":\"ns=0;i=25625\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"PubSubKeyPushTargetType\",\"nodeId\":\"ns=0;i=25337\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ApplicationUri\",\"nodeId\":\"ns=0;i=25634\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=25635\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=25340\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserTokenType\",\"nodeId\":\"ns=0;i=25636\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedKeyCount\",\"nodeId\":\"ns=0;i=25637\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RetryInterval\",\"nodeId\":\"ns=0;i=25638\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastPushExecutionTime\",\"nodeId\":\"ns=0;i=25639\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastPushErrorTime\",\"nodeId\":\"ns=0;i=25640\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConnectSecurityGroups\",\"nodeId\":\"ns=0;i=25641\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25642\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25643\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DisconnectSecurityGroups\",\"nodeId\":\"ns=0;i=25644\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25645\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25646\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TriggerKeyUpdate\",\"nodeId\":\"ns=0;i=25647\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"PublishedDataSetType\",\"nodeId\":\"ns=0;i=14509\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConfigurationVersion\",\"nodeId\":\"ns=0;i=14519\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=15229\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetClassId\",\"nodeId\":\"ns=0;i=16759\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CyclicDataSet\",\"nodeId\":\"ns=0;i=25521\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExtensionFields\",\"nodeId\":\"ns=0;i=15481\",\"nodeClass\":1,\"children\":[{\"displayName\":\"AddExtensionField\",\"nodeId\":\"ns=0;i=15482\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15483\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15484\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveExtensionField\",\"nodeId\":\"ns=0;i=15485\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15486\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PublishedDataItemsType\",\"nodeId\":\"ns=0;i=14534\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PublishedData\",\"nodeId\":\"ns=0;i=14548\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddVariables\",\"nodeId\":\"ns=0;i=14555\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14556\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14557\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveVariables\",\"nodeId\":\"ns=0;i=14558\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14559\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=14560\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PublishedEventsType\",\"nodeId\":\"ns=0;i=14572\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EventNotifier\",\"nodeId\":\"ns=0;i=14586\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SelectedFields\",\"nodeId\":\"ns=0;i=14587\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Filter\",\"nodeId\":\"ns=0;i=14588\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyFieldSelection\",\"nodeId\":\"ns=0;i=15052\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15053\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15517\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"ExtensionFieldsType\",\"nodeId\":\"ns=0;i=15489\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<ExtensionFieldName>\",\"nodeId\":\"ns=0;i=15490\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddExtensionField\",\"nodeId\":\"ns=0;i=15491\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15492\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15493\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveExtensionField\",\"nodeId\":\"ns=0;i=15494\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15495\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PubSubConnectionType\",\"nodeId\":\"ns=0;i=14209\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PublisherId\",\"nodeId\":\"ns=0;i=14595\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProfileUri\",\"nodeId\":\"ns=0;i=17306\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17710\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConnectionProperties\",\"nodeId\":\"ns=0;i=17485\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Address\",\"nodeId\":\"ns=0;i=14221\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=17202\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17576\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TransportSettings\",\"nodeId\":\"ns=0;i=17203\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<WriterGroupName>\",\"nodeId\":\"ns=0;i=17310\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=17311\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNetworkMessageSize\",\"nodeId\":\"ns=0;i=17204\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GroupProperties\",\"nodeId\":\"ns=0;i=17486\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=17314\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=17315\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WriterGroupId\",\"nodeId\":\"ns=0;i=17214\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingInterval\",\"nodeId\":\"ns=0;i=17318\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeepAliveTime\",\"nodeId\":\"ns=0;i=17319\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=17321\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=17322\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HeaderLayoutUri\",\"nodeId\":\"ns=0;i=17558\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<ReaderGroupName>\",\"nodeId\":\"ns=0;i=17325\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=17326\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNetworkMessageSize\",\"nodeId\":\"ns=0;i=17302\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GroupProperties\",\"nodeId\":\"ns=0;i=17487\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=17329\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=17330\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=14600\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=14601\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=19241\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19242\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=19243\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19244\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19245\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19246\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=19248\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19249\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19250\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19251\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=19253\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=19254\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19255\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=19256\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19257\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19258\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19259\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=19261\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19262\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19263\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19264\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=19266\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19267\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19268\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19269\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=19271\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19272\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19273\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19274\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=19276\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19277\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19278\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19279\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=19281\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19282\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19283\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19284\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19286\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ResolvedAddress\",\"nodeId\":\"ns=0;i=19287\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19288\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"AddWriterGroup\",\"nodeId\":\"ns=0;i=17427\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17428\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17456\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddReaderGroup\",\"nodeId\":\"ns=0;i=17465\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17507\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17508\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveGroup\",\"nodeId\":\"ns=0;i=14225\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=14226\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ConnectionTransportType\",\"nodeId\":\"ns=0;i=17721\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DatagramConnectionTransportType\",\"nodeId\":\"ns=0;i=15064\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DiscoveryAddress\",\"nodeId\":\"ns=0;i=15072\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=15154\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17579\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DiscoveryAnnounceRate\",\"nodeId\":\"ns=0;i=23839\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscoveryMaxMessageSize\",\"nodeId\":\"ns=0;i=23840\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QosCategory\",\"nodeId\":\"ns=0;i=25525\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramQos\",\"nodeId\":\"ns=0;i=25526\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BrokerConnectionTransportType\",\"nodeId\":\"ns=0;i=15155\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=15156\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationProfileUri\",\"nodeId\":\"ns=0;i=15178\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PubSubGroupType\",\"nodeId\":\"ns=0;i=14232\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=15926\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityGroupId\",\"nodeId\":\"ns=0;i=15927\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityKeyServices\",\"nodeId\":\"ns=0;i=15928\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNetworkMessageSize\",\"nodeId\":\"ns=0;i=17724\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GroupProperties\",\"nodeId\":\"ns=0;i=17488\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=15265\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15266\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"WriterGroupType\",\"nodeId\":\"ns=0;i=17725\",\"nodeClass\":8,\"children\":[{\"displayName\":\"WriterGroupId\",\"nodeId\":\"ns=0;i=17736\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingInterval\",\"nodeId\":\"ns=0;i=17737\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeepAliveTime\",\"nodeId\":\"ns=0;i=17738\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=17739\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=17740\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HeaderLayoutUri\",\"nodeId\":\"ns=0;i=17559\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportSettings\",\"nodeId\":\"ns=0;i=17741\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"MessageSettings\",\"nodeId\":\"ns=0;i=17742\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<DataSetWriterName>\",\"nodeId\":\"ns=0;i=17743\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DataSetWriterId\",\"nodeId\":\"ns=0;i=17744\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetFieldContentMask\",\"nodeId\":\"ns=0;i=17745\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterProperties\",\"nodeId\":\"ns=0;i=17490\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=17749\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=17750\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=17812\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17813\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=17814\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17815\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17816\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17817\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=17819\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17820\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17821\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17822\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=17824\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=17825\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=17826\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=17827\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17828\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17829\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17830\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=17832\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17833\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17834\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17835\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=17837\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17838\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17839\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17840\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=17842\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17843\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17844\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17845\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=17847\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17848\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17849\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17850\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=17853\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17854\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17855\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17856\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SentNetworkMessages\",\"nodeId\":\"ns=0;i=17859\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17864\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17871\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17872\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FailedTransmissions\",\"nodeId\":\"ns=0;i=17874\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17878\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17885\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17892\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EncryptionErrors\",\"nodeId\":\"ns=0;i=17900\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=17901\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=17902\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17903\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=17858\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetWriters\",\"nodeId\":\"ns=0;i=17913\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17920\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetWriters\",\"nodeId\":\"ns=0;i=17927\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=17934\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"AddDataSetWriter\",\"nodeId\":\"ns=0;i=17969\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17976\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17987\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetWriter\",\"nodeId\":\"ns=0;i=17992\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17993\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ReaderGroupType\",\"nodeId\":\"ns=0;i=17999\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<DataSetReaderName>\",\"nodeId\":\"ns=0;i=18076\",\"nodeClass\":1,\"children\":[{\"displayName\":\"PublisherId\",\"nodeId\":\"ns=0;i=18077\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupId\",\"nodeId\":\"ns=0;i=18078\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterId\",\"nodeId\":\"ns=0;i=18079\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=18080\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetFieldContentMask\",\"nodeId\":\"ns=0;i=18081\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MessageReceiveTimeout\",\"nodeId\":\"ns=0;i=18082\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyFrameCount\",\"nodeId\":\"ns=0;i=17560\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HeaderLayoutUri\",\"nodeId\":\"ns=0;i=17562\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderProperties\",\"nodeId\":\"ns=0;i=17492\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=18088\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=18089\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SubscribedDataSet\",\"nodeId\":\"ns=0;i=21006\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=21015\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=21017\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21018\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21019\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21020\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=21022\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21023\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21024\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21025\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=21027\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=21028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=21029\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=21030\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21031\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21032\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21033\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=21035\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21036\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21038\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=21040\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21041\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21043\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=21045\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21048\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=21050\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21051\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21053\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=21055\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21057\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21058\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReceivedNetworkMessages\",\"nodeId\":\"ns=0;i=21061\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=21062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=21063\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21064\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=21060\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetReaders\",\"nodeId\":\"ns=0;i=21076\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21077\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetReaders\",\"nodeId\":\"ns=0;i=21078\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=21079\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"TransportSettings\",\"nodeId\":\"ns=0;i=21080\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"MessageSettings\",\"nodeId\":\"ns=0;i=21081\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"AddDataSetReader\",\"nodeId\":\"ns=0;i=21082\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=21083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=21084\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveDataSetReader\",\"nodeId\":\"ns=0;i=21085\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=21086\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"WriterGroupTransportType\",\"nodeId\":\"ns=0;i=17997\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DatagramWriterGroupTransportType\",\"nodeId\":\"ns=0;i=21133\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MessageRepeatCount\",\"nodeId\":\"ns=0;i=21134\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MessageRepeatDelay\",\"nodeId\":\"ns=0;i=21135\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Address\",\"nodeId\":\"ns=0;i=23842\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=23843\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=23844\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"QosCategory\",\"nodeId\":\"ns=0;i=25527\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramQos\",\"nodeId\":\"ns=0;i=23847\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscoveryAnnounceRate\",\"nodeId\":\"ns=0;i=23848\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Topic\",\"nodeId\":\"ns=0;i=23849\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BrokerWriterGroupTransportType\",\"nodeId\":\"ns=0;i=21136\",\"nodeClass\":8,\"children\":[{\"displayName\":\"QueueName\",\"nodeId\":\"ns=0;i=21137\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=15246\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationProfileUri\",\"nodeId\":\"ns=0;i=15247\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedDeliveryGuarantee\",\"nodeId\":\"ns=0;i=15249\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"WriterGroupMessageType\",\"nodeId\":\"ns=0;i=17998\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UadpWriterGroupMessageType\",\"nodeId\":\"ns=0;i=21105\",\"nodeClass\":8,\"children\":[{\"displayName\":\"GroupVersion\",\"nodeId\":\"ns=0;i=21106\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetOrdering\",\"nodeId\":\"ns=0;i=21107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkMessageContentMask\",\"nodeId\":\"ns=0;i=21108\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SamplingOffset\",\"nodeId\":\"ns=0;i=21109\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingOffset\",\"nodeId\":\"ns=0;i=21110\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"JsonWriterGroupMessageType\",\"nodeId\":\"ns=0;i=21126\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NetworkMessageContentMask\",\"nodeId\":\"ns=0;i=21127\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ReaderGroupTransportType\",\"nodeId\":\"ns=0;i=21090\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ReaderGroupMessageType\",\"nodeId\":\"ns=0;i=21091\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"DataSetWriterType\",\"nodeId\":\"ns=0;i=15298\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DataSetWriterId\",\"nodeId\":\"ns=0;i=21092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetFieldContentMask\",\"nodeId\":\"ns=0;i=21093\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyFrameCount\",\"nodeId\":\"ns=0;i=21094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterProperties\",\"nodeId\":\"ns=0;i=17493\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportSettings\",\"nodeId\":\"ns=0;i=15303\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"MessageSettings\",\"nodeId\":\"ns=0;i=21095\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=15299\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15300\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=19550\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19551\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=19552\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19553\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19554\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19555\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=19557\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19558\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19559\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19560\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=19562\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=19563\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19564\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=19565\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19566\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19567\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19568\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=19570\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19571\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19572\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19573\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=19575\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19576\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19577\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19578\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=19580\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19581\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19582\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19583\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=19585\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19586\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19587\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19588\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=19590\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19591\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19592\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19593\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FailedDataSetMessages\",\"nodeId\":\"ns=0;i=19596\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19597\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19598\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19599\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19595\",\"nodeClass\":1,\"children\":[]}]}]},{\"displayName\":\"DataSetWriterTransportType\",\"nodeId\":\"ns=0;i=15305\",\"nodeClass\":8,\"children\":[{\"displayName\":\"BrokerDataSetWriterTransportType\",\"nodeId\":\"ns=0;i=21138\",\"nodeClass\":8,\"children\":[{\"displayName\":\"QueueName\",\"nodeId\":\"ns=0;i=21139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MetaDataQueueName\",\"nodeId\":\"ns=0;i=21140\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=15250\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationProfileUri\",\"nodeId\":\"ns=0;i=15251\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedDeliveryGuarantee\",\"nodeId\":\"ns=0;i=15330\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MetaDataUpdateTime\",\"nodeId\":\"ns=0;i=21141\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataSetWriterMessageType\",\"nodeId\":\"ns=0;i=21096\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UadpDataSetWriterMessageType\",\"nodeId\":\"ns=0;i=21111\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DataSetMessageContentMask\",\"nodeId\":\"ns=0;i=21112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfiguredSize\",\"nodeId\":\"ns=0;i=21113\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkMessageNumber\",\"nodeId\":\"ns=0;i=21114\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetOffset\",\"nodeId\":\"ns=0;i=21115\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"JsonDataSetWriterMessageType\",\"nodeId\":\"ns=0;i=21128\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DataSetMessageContentMask\",\"nodeId\":\"ns=0;i=21129\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataSetReaderType\",\"nodeId\":\"ns=0;i=15306\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PublisherId\",\"nodeId\":\"ns=0;i=21097\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupId\",\"nodeId\":\"ns=0;i=21098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterId\",\"nodeId\":\"ns=0;i=21099\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=21100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetFieldContentMask\",\"nodeId\":\"ns=0;i=21101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MessageReceiveTimeout\",\"nodeId\":\"ns=0;i=21102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyFrameCount\",\"nodeId\":\"ns=0;i=17563\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HeaderLayoutUri\",\"nodeId\":\"ns=0;i=17564\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=15932\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityGroupId\",\"nodeId\":\"ns=0;i=15933\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityKeyServices\",\"nodeId\":\"ns=0;i=15934\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderProperties\",\"nodeId\":\"ns=0;i=17494\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportSettings\",\"nodeId\":\"ns=0;i=15311\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"MessageSettings\",\"nodeId\":\"ns=0;i=21103\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=15307\",\"nodeClass\":1,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15308\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Diagnostics\",\"nodeId\":\"ns=0;i=19609\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19610\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=19611\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19612\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19613\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19614\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=19616\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19617\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19618\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19619\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=19621\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=19622\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19623\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=19624\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19625\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19626\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19627\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=19629\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19630\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19631\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19632\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=19634\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19635\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19636\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19637\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=19639\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19640\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19641\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19642\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=19644\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19645\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19646\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19647\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=19649\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19650\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19651\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19652\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FailedDataSetMessages\",\"nodeId\":\"ns=0;i=19655\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19656\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19657\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19658\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19654\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"SubscribedDataSet\",\"nodeId\":\"ns=0;i=15316\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"CreateTargetVariables\",\"nodeId\":\"ns=0;i=17386\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17388\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CreateDataSetMirror\",\"nodeId\":\"ns=0;i=17389\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=17390\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=17391\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataSetReaderTransportType\",\"nodeId\":\"ns=0;i=15319\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DatagramDataSetReaderTransportType\",\"nodeId\":\"ns=0;i=24016\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Address\",\"nodeId\":\"ns=0;i=24017\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=24018\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=24019\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"QosCategory\",\"nodeId\":\"ns=0;i=25528\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramQos\",\"nodeId\":\"ns=0;i=24022\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Topic\",\"nodeId\":\"ns=0;i=24023\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BrokerDataSetReaderTransportType\",\"nodeId\":\"ns=0;i=21142\",\"nodeClass\":8,\"children\":[{\"displayName\":\"QueueName\",\"nodeId\":\"ns=0;i=21143\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=15334\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationProfileUri\",\"nodeId\":\"ns=0;i=15419\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedDeliveryGuarantee\",\"nodeId\":\"ns=0;i=15420\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MetaDataQueueName\",\"nodeId\":\"ns=0;i=21144\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"DataSetReaderMessageType\",\"nodeId\":\"ns=0;i=21104\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UadpDataSetReaderMessageType\",\"nodeId\":\"ns=0;i=21116\",\"nodeClass\":8,\"children\":[{\"displayName\":\"GroupVersion\",\"nodeId\":\"ns=0;i=21117\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkMessageNumber\",\"nodeId\":\"ns=0;i=21119\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetOffset\",\"nodeId\":\"ns=0;i=17477\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetClassId\",\"nodeId\":\"ns=0;i=21120\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkMessageContentMask\",\"nodeId\":\"ns=0;i=21121\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMessageContentMask\",\"nodeId\":\"ns=0;i=21122\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingInterval\",\"nodeId\":\"ns=0;i=21123\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProcessingOffset\",\"nodeId\":\"ns=0;i=21124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveOffset\",\"nodeId\":\"ns=0;i=21125\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"JsonDataSetReaderMessageType\",\"nodeId\":\"ns=0;i=21130\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NetworkMessageContentMask\",\"nodeId\":\"ns=0;i=21131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMessageContentMask\",\"nodeId\":\"ns=0;i=21132\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SubscribedDataSetType\",\"nodeId\":\"ns=0;i=15108\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TargetVariablesType\",\"nodeId\":\"ns=0;i=15111\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TargetVariables\",\"nodeId\":\"ns=0;i=15114\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddTargetVariables\",\"nodeId\":\"ns=0;i=15115\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15116\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15117\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveTargetVariables\",\"nodeId\":\"ns=0;i=15118\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=15119\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=15120\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SubscribedDataSetMirrorType\",\"nodeId\":\"ns=0;i=15127\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"StandaloneSubscribedDataSetType\",\"nodeId\":\"ns=0;i=23828\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SubscribedDataSet\",\"nodeId\":\"ns=0;i=23829\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"DataSetMetaData\",\"nodeId\":\"ns=0;i=23830\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IsConnected\",\"nodeId\":\"ns=0;i=23831\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubStatusType\",\"nodeId\":\"ns=0;i=14643\",\"nodeClass\":8,\"children\":[{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=14644\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=14645\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=14646\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"PubSubDiagnosticsType\",\"nodeId\":\"ns=0;i=19677\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19678\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalInformation\",\"nodeId\":\"ns=0;i=19679\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19680\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19681\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19682\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TotalError\",\"nodeId\":\"ns=0;i=19684\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19685\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19686\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19687\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=19689\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"SubError\",\"nodeId\":\"ns=0;i=19690\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19691\",\"nodeClass\":1,\"children\":[{\"displayName\":\"StateError\",\"nodeId\":\"ns=0;i=19692\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19693\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19694\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19695\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByMethod\",\"nodeId\":\"ns=0;i=19697\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19698\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19699\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19700\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalByParent\",\"nodeId\":\"ns=0;i=19702\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19703\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19704\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19705\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateOperationalFromError\",\"nodeId\":\"ns=0;i=19707\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19708\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19709\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19710\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatePausedByParent\",\"nodeId\":\"ns=0;i=19712\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19713\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19714\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19715\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateDisabledByMethod\",\"nodeId\":\"ns=0;i=19717\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19718\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19719\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19720\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19722\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"PubSubDiagnosticsRootType\",\"nodeId\":\"ns=0;i=19732\",\"nodeClass\":8,\"children\":[{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19777\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetWriters\",\"nodeId\":\"ns=0;i=19778\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19779\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConfiguredDataSetReaders\",\"nodeId\":\"ns=0;i=19780\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19781\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetWriters\",\"nodeId\":\"ns=0;i=19782\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19783\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetReaders\",\"nodeId\":\"ns=0;i=19784\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19785\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubDiagnosticsConnectionType\",\"nodeId\":\"ns=0;i=19786\",\"nodeClass\":8,\"children\":[{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19831\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ResolvedAddress\",\"nodeId\":\"ns=0;i=19832\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19833\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubDiagnosticsWriterGroupType\",\"nodeId\":\"ns=0;i=19834\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19848\",\"nodeClass\":1,\"children\":[{\"displayName\":\"SentNetworkMessages\",\"nodeId\":\"ns=0;i=19880\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19881\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19883\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FailedTransmissions\",\"nodeId\":\"ns=0;i=19885\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19886\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19887\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19888\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EncryptionErrors\",\"nodeId\":\"ns=0;i=19890\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19891\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19892\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19893\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19879\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetWriters\",\"nodeId\":\"ns=0;i=19895\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19896\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetWriters\",\"nodeId\":\"ns=0;i=19897\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19898\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecurityTokenID\",\"nodeId\":\"ns=0;i=19899\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19900\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimeToNextTokenID\",\"nodeId\":\"ns=0;i=19901\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19902\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubDiagnosticsReaderGroupType\",\"nodeId\":\"ns=0;i=19903\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19917\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ReceivedNetworkMessages\",\"nodeId\":\"ns=0;i=19949\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19950\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19951\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19952\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReceivedInvalidNetworkMessages\",\"nodeId\":\"ns=0;i=19954\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19955\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19956\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19957\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DecryptionErrors\",\"nodeId\":\"ns=0;i=19959\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19960\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19961\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19962\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=19948\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ConfiguredDataSetReaders\",\"nodeId\":\"ns=0;i=19964\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19965\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OperationalDataSetReaders\",\"nodeId\":\"ns=0;i=19966\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19967\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubDiagnosticsDataSetWriterType\",\"nodeId\":\"ns=0;i=19968\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=19982\",\"nodeClass\":1,\"children\":[{\"displayName\":\"FailedDataSetMessages\",\"nodeId\":\"ns=0;i=20014\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=20015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=20016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20017\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=20013\",\"nodeClass\":1,\"children\":[{\"displayName\":\"MessageSequenceNumber\",\"nodeId\":\"ns=0;i=20019\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20020\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatusCode\",\"nodeId\":\"ns=0;i=20021\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20022\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MajorVersion\",\"nodeId\":\"ns=0;i=20023\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20024\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MinorVersion\",\"nodeId\":\"ns=0;i=20025\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20026\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"PubSubDiagnosticsDataSetReaderType\",\"nodeId\":\"ns=0;i=20027\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Counters\",\"nodeId\":\"ns=0;i=20041\",\"nodeClass\":1,\"children\":[{\"displayName\":\"FailedDataSetMessages\",\"nodeId\":\"ns=0;i=20073\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=20074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=20075\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20076\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DecryptionErrors\",\"nodeId\":\"ns=0;i=20078\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=20079\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=20080\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20081\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LiveValues\",\"nodeId\":\"ns=0;i=20072\",\"nodeClass\":1,\"children\":[{\"displayName\":\"MessageSequenceNumber\",\"nodeId\":\"ns=0;i=20083\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20084\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StatusCode\",\"nodeId\":\"ns=0;i=20085\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20086\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MajorVersion\",\"nodeId\":\"ns=0;i=20087\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20088\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MinorVersion\",\"nodeId\":\"ns=0;i=20089\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20090\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecurityTokenID\",\"nodeId\":\"ns=0;i=20091\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20092\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TimeToNextTokenID\",\"nodeId\":\"ns=0;i=20093\",\"nodeClass\":2,\"children\":[{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=20094\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"PubSubCapabilitiesType\",\"nodeId\":\"ns=0;i=23832\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MaxPubSubConnections\",\"nodeId\":\"ns=0;i=23833\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxWriterGroups\",\"nodeId\":\"ns=0;i=23834\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxReaderGroups\",\"nodeId\":\"ns=0;i=23835\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxDataSetWriters\",\"nodeId\":\"ns=0;i=23836\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxDataSetReaders\",\"nodeId\":\"ns=0;i=23837\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFieldsPerDataSet\",\"nodeId\":\"ns=0;i=23838\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxDataSetWritersPerGroup\",\"nodeId\":\"ns=0;i=32651\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNetworkMessageSizeDatagram\",\"nodeId\":\"ns=0;i=32652\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNetworkMessageSizeBroker\",\"nodeId\":\"ns=0;i=32653\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportSecurityKeyPull\",\"nodeId\":\"ns=0;i=32654\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportSecurityKeyPush\",\"nodeId\":\"ns=0;i=32655\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NetworkAddressType\",\"nodeId\":\"ns=0;i=21145\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NetworkInterface\",\"nodeId\":\"ns=0;i=21146\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17582\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NetworkAddressUrlType\",\"nodeId\":\"ns=0;i=21147\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Url\",\"nodeId\":\"ns=0;i=21149\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AliasNameType\",\"nodeId\":\"ns=0;i=23455\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"UserManagementType\",\"nodeId\":\"ns=0;i=24264\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Users\",\"nodeId\":\"ns=0;i=24265\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PasswordLength\",\"nodeId\":\"ns=0;i=24266\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PasswordOptions\",\"nodeId\":\"ns=0;i=24267\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PasswordRestrictions\",\"nodeId\":\"ns=0;i=24268\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddUser\",\"nodeId\":\"ns=0;i=24269\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24270\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ModifyUser\",\"nodeId\":\"ns=0;i=24271\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24272\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveUser\",\"nodeId\":\"ns=0;i=24273\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24274\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ChangePassword\",\"nodeId\":\"ns=0;i=24275\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24276\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ProvisionableDeviceType\",\"nodeId\":\"ns=0;i=26871\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IsSingleton\",\"nodeId\":\"ns=0;i=26872\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestTickets\",\"nodeId\":\"ns=0;i=26873\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26874\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetRegistrarEndpoints\",\"nodeId\":\"ns=0;i=26875\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26876\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<ApplicationName>\",\"nodeId\":\"ns=0;i=26878\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CertificateGroups\",\"nodeId\":\"ns=0;i=26879\",\"nodeClass\":1,\"children\":[{\"displayName\":\"DefaultApplicationGroup\",\"nodeId\":\"ns=0;i=26880\",\"nodeClass\":1,\"children\":[{\"displayName\":\"TrustList\",\"nodeId\":\"ns=0;i=26881\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=0;i=26882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=0;i=26883\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=0;i=26884\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=0;i=26885\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=0;i=26889\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26890\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26891\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=0;i=26892\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26893\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=0;i=26894\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26895\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26896\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=0;i=26897\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26898\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=0;i=26899\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26901\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=0;i=26902\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26903\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=26904\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenWithMasks\",\"nodeId\":\"ns=0;i=26907\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26908\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26909\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndUpdate\",\"nodeId\":\"ns=0;i=26910\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26911\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=26912\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AddCertificate\",\"nodeId\":\"ns=0;i=26913\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26914\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveCertificate\",\"nodeId\":\"ns=0;i=26915\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=26916\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CertificateTypes\",\"nodeId\":\"ns=0;i=26917\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ApplicationUri\",\"nodeId\":\"ns=0;i=27997\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=27998\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationType\",\"nodeId\":\"ns=0;i=27999\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerCapabilities\",\"nodeId\":\"ns=0;i=28000\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportedPrivateKeyFormats\",\"nodeId\":\"ns=0;i=28001\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTrustListSize\",\"nodeId\":\"ns=0;i=28002\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MulticastDnsEnabled\",\"nodeId\":\"ns=0;i=28003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateCertificate\",\"nodeId\":\"ns=0;i=28005\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=28006\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=28007\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplyChanges\",\"nodeId\":\"ns=0;i=28008\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"CreateSigningRequest\",\"nodeId\":\"ns=0;i=28010\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=28011\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=28012\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetRejectedList\",\"nodeId\":\"ns=0;i=28013\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=28014\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Enabled\",\"nodeId\":\"ns=0;i=27996\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IetfBaseNetworkInterfaceType\",\"nodeId\":\"ns=0;i=25221\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AdminStatus\",\"nodeId\":\"ns=0;i=25222\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperStatus\",\"nodeId\":\"ns=0;i=25223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PhysAddress\",\"nodeId\":\"ns=0;i=25224\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Speed\",\"nodeId\":\"ns=0;i=25225\",\"nodeClass\":2,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=25252\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"PriorityMappingTableType\",\"nodeId\":\"ns=0;i=25227\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PriorityMapppingEntries\",\"nodeId\":\"ns=0;i=25228\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddPriorityMappingEntry\",\"nodeId\":\"ns=0;i=25229\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25230\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DeletePriorityMappingEntry\",\"nodeId\":\"ns=0;i=25231\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=25232\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TopologyElementType\",\"nodeId\":\"ns=2;i=1001\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ParameterSet\",\"nodeId\":\"ns=2;i=5002\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ParameterIdentifier>\",\"nodeId\":\"ns=2;i=6017\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MethodSet\",\"nodeId\":\"ns=2;i=5003\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<GroupIdentifier>\",\"nodeId\":\"ns=2;i=6567\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Identification\",\"nodeId\":\"ns=2;i=6014\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Lock\",\"nodeId\":\"ns=2;i=6161\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Locked\",\"nodeId\":\"ns=2;i=6468\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingClient\",\"nodeId\":\"ns=2;i=6163\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingUser\",\"nodeId\":\"ns=2;i=6164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RemainingLockTime\",\"nodeId\":\"ns=2;i=6165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InitLock\",\"nodeId\":\"ns=2;i=6166\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=6167\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6168\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RenewLock\",\"nodeId\":\"ns=2;i=6169\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6170\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExitLock\",\"nodeId\":\"ns=2;i=6171\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6172\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BreakLock\",\"nodeId\":\"ns=2;i=6173\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6174\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ComponentType\",\"nodeId\":\"ns=2;i=15063\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=15086\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=15087\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Model\",\"nodeId\":\"ns=2;i=15088\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HardwareRevision\",\"nodeId\":\"ns=2;i=15089\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=15090\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceRevision\",\"nodeId\":\"ns=2;i=15091\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductCode\",\"nodeId\":\"ns=2;i=15092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceManual\",\"nodeId\":\"ns=2;i=15093\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceClass\",\"nodeId\":\"ns=2;i=15094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SerialNumber\",\"nodeId\":\"ns=2;i=15095\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductInstanceUri\",\"nodeId\":\"ns=2;i=15096\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisionCounter\",\"nodeId\":\"ns=2;i=15097\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AssetId\",\"nodeId\":\"ns=2;i=15098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ComponentName\",\"nodeId\":\"ns=2;i=15099\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceType\",\"nodeId\":\"ns=2;i=1002\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=6003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=15100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Model\",\"nodeId\":\"ns=2;i=6004\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HardwareRevision\",\"nodeId\":\"ns=2;i=6008\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=6007\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceRevision\",\"nodeId\":\"ns=2;i=6006\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductCode\",\"nodeId\":\"ns=2;i=15101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceManual\",\"nodeId\":\"ns=2;i=6005\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceClass\",\"nodeId\":\"ns=2;i=6470\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SerialNumber\",\"nodeId\":\"ns=2;i=6001\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductInstanceUri\",\"nodeId\":\"ns=2;i=15102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisionCounter\",\"nodeId\":\"ns=2;i=6002\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"<CPIdentifier>\",\"nodeId\":\"ns=2;i=6571\",\"nodeClass\":1,\"children\":[{\"displayName\":\"NetworkAddress\",\"nodeId\":\"ns=2;i=6592\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"DeviceHealth\",\"nodeId\":\"ns=2;i=6208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceHealthAlarms\",\"nodeId\":\"ns=2;i=15105\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"DeviceTypeImage\",\"nodeId\":\"ns=2;i=6209\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=6210\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Documentation\",\"nodeId\":\"ns=2;i=6211\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DocumentIdentifier>\",\"nodeId\":\"ns=2;i=6212\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProtocolSupport\",\"nodeId\":\"ns=2;i=6213\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ProtocolSupportIdentifier>\",\"nodeId\":\"ns=2;i=6214\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ImageSet\",\"nodeId\":\"ns=2;i=6215\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=6216\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SoftwareType\",\"nodeId\":\"ns=2;i=15106\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=15129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Model\",\"nodeId\":\"ns=2;i=15131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=15133\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"BlockType\",\"nodeId\":\"ns=2;i=1003\",\"nodeClass\":8,\"children\":[{\"displayName\":\"RevisionCounter\",\"nodeId\":\"ns=2;i=6009\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActualMode\",\"nodeId\":\"ns=2;i=6010\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PermittedMode\",\"nodeId\":\"ns=2;i=6011\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NormalMode\",\"nodeId\":\"ns=2;i=6012\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TargetMode\",\"nodeId\":\"ns=2;i=6013\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConnectionPointType\",\"nodeId\":\"ns=2;i=6308\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NetworkAddress\",\"nodeId\":\"ns=2;i=6354\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<ProfileIdentifier>\",\"nodeId\":\"ns=2;i=6499\",\"nodeClass\":1,\"children\":[]}]}]},{\"displayName\":\"ConfigurableObjectType\",\"nodeId\":\"ns=2;i=1004\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SupportedTypes\",\"nodeId\":\"ns=2;i=5004\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"<ObjectIdentifier>\",\"nodeId\":\"ns=2;i=6026\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"BaseLifetimeIndicationType\",\"nodeId\":\"ns=2;i=473\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TimeIndicationType\",\"nodeId\":\"ns=2;i=474\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"NumberOfPartsIndicationType\",\"nodeId\":\"ns=2;i=475\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"NumberOfUsagesIndicationType\",\"nodeId\":\"ns=2;i=476\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"LengthIndicationType\",\"nodeId\":\"ns=2;i=477\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"DiameterIndicationType\",\"nodeId\":\"ns=2;i=478\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"SubstanceVolumeIndicationType\",\"nodeId\":\"ns=2;i=479\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"ProtocolType\",\"nodeId\":\"ns=2;i=1006\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"NetworkType\",\"nodeId\":\"ns=2;i=6247\",\"nodeClass\":8,\"children\":[{\"displayName\":\"<ProfileIdentifier>\",\"nodeId\":\"ns=2;i=6596\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"Lock\",\"nodeId\":\"ns=2;i=6294\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Locked\",\"nodeId\":\"ns=2;i=6497\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingClient\",\"nodeId\":\"ns=2;i=6296\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingUser\",\"nodeId\":\"ns=2;i=6297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RemainingLockTime\",\"nodeId\":\"ns=2;i=6298\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InitLock\",\"nodeId\":\"ns=2;i=6299\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=6300\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6301\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RenewLock\",\"nodeId\":\"ns=2;i=6302\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6303\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExitLock\",\"nodeId\":\"ns=2;i=6304\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6305\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BreakLock\",\"nodeId\":\"ns=2;i=6306\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6307\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"TransferServicesType\",\"nodeId\":\"ns=2;i=6526\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TransferToDevice\",\"nodeId\":\"ns=2;i=6527\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6528\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TransferFromDevice\",\"nodeId\":\"ns=2;i=6529\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6530\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FetchTransferResultData\",\"nodeId\":\"ns=2;i=6531\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=6532\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6533\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"LockingServicesType\",\"nodeId\":\"ns=2;i=6388\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DefaultInstanceBrowseName\",\"nodeId\":\"ns=2;i=15890\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Locked\",\"nodeId\":\"ns=2;i=6534\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingClient\",\"nodeId\":\"ns=2;i=6390\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LockingUser\",\"nodeId\":\"ns=2;i=6391\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RemainingLockTime\",\"nodeId\":\"ns=2;i=6392\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InitLock\",\"nodeId\":\"ns=2;i=6393\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=6394\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6395\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RenewLock\",\"nodeId\":\"ns=2;i=6396\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6397\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExitLock\",\"nodeId\":\"ns=2;i=6398\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6399\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BreakLock\",\"nodeId\":\"ns=2;i=6400\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=6401\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SoftwareUpdateType\",\"nodeId\":\"ns=2;i=1\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Loading\",\"nodeId\":\"ns=2;i=2\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"PrepareForUpdate\",\"nodeId\":\"ns=2;i=4\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=2;i=5\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=2;i=6\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Prepare\",\"nodeId\":\"ns=2;i=19\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Abort\",\"nodeId\":\"ns=2;i=20\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"Installation\",\"nodeId\":\"ns=2;i=40\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=2;i=41\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=2;i=42\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Resume\",\"nodeId\":\"ns=2;i=61\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"PowerCycle\",\"nodeId\":\"ns=2;i=76\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=2;i=77\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=2;i=78\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Confirmation\",\"nodeId\":\"ns=2;i=98\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=2;i=99\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=2;i=100\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Confirm\",\"nodeId\":\"ns=2;i=112\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"ConfirmationTimeout\",\"nodeId\":\"ns=2;i=113\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Parameters\",\"nodeId\":\"ns=2;i=122\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ClientProcessingTimeout\",\"nodeId\":\"ns=2;i=123\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GenerateFileForRead\",\"nodeId\":\"ns=2;i=124\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=126\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GenerateFileForWrite\",\"nodeId\":\"ns=2;i=127\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=128\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=129\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndCommit\",\"nodeId\":\"ns=2;i=130\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=132\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"UpdateStatus\",\"nodeId\":\"ns=2;i=133\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"VendorErrorCode\",\"nodeId\":\"ns=2;i=402\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultInstanceBrowseName\",\"nodeId\":\"ns=2;i=134\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SoftwareLoadingType\",\"nodeId\":\"ns=2;i=135\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdateKey\",\"nodeId\":\"ns=2;i=136\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PackageLoadingType\",\"nodeId\":\"ns=2;i=137\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CurrentVersion\",\"nodeId\":\"ns=2;i=139\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=345\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=346\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=347\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FileTransfer\",\"nodeId\":\"ns=2;i=140\",\"nodeClass\":1,\"children\":[{\"displayName\":\"ClientProcessingTimeout\",\"nodeId\":\"ns=2;i=141\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GenerateFileForRead\",\"nodeId\":\"ns=2;i=142\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=143\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=144\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GenerateFileForWrite\",\"nodeId\":\"ns=2;i=145\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=146\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=147\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CloseAndCommit\",\"nodeId\":\"ns=2;i=148\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=149\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=150\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ErrorMessage\",\"nodeId\":\"ns=2;i=151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteBlockSize\",\"nodeId\":\"ns=2;i=152\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DirectLoadingType\",\"nodeId\":\"ns=2;i=153\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdateBehavior\",\"nodeId\":\"ns=2;i=169\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteTimeout\",\"nodeId\":\"ns=2;i=170\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CachedLoadingType\",\"nodeId\":\"ns=2;i=171\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PendingVersion\",\"nodeId\":\"ns=2;i=187\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=366\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=367\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=368\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FallbackVersion\",\"nodeId\":\"ns=2;i=188\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=373\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=374\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=375\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetUpdateBehavior\",\"nodeId\":\"ns=2;i=189\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=191\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"FileSystemLoadingType\",\"nodeId\":\"ns=2;i=192\",\"nodeClass\":8,\"children\":[{\"displayName\":\"FileSystem\",\"nodeId\":\"ns=2;i=194\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CreateDirectory\",\"nodeId\":\"ns=2;i=195\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=196\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=197\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CreateFile\",\"nodeId\":\"ns=2;i=198\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=199\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=200\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Delete\",\"nodeId\":\"ns=2;i=201\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=202\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MoveOrCopy\",\"nodeId\":\"ns=2;i=203\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=204\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=205\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"GetUpdateBehavior\",\"nodeId\":\"ns=2;i=206\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=207\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=208\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ValidateFiles\",\"nodeId\":\"ns=2;i=209\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=210\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=211\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"SoftwareVersionType\",\"nodeId\":\"ns=2;i=212\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=380\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=381\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=382\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PatchIdentifiers\",\"nodeId\":\"ns=2;i=383\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReleaseDate\",\"nodeId\":\"ns=2;i=384\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ChangeLogReference\",\"nodeId\":\"ns=2;i=385\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Hash\",\"nodeId\":\"ns=2;i=386\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"VariableTypes\",\"nodeId\":\"ns=0;i=89\",\"nodeClass\":1,\"children\":[{\"displayName\":\"BaseVariableType\",\"nodeId\":\"ns=0;i=62\",\"nodeClass\":16,\"children\":[{\"displayName\":\"BaseDataVariableType\",\"nodeId\":\"ns=0;i=63\",\"nodeClass\":16,\"children\":[{\"displayName\":\"DataTypeDescriptionType\",\"nodeId\":\"ns=0;i=69\",\"nodeClass\":16,\"children\":[{\"displayName\":\"DataTypeVersion\",\"nodeId\":\"ns=0;i=104\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DictionaryFragment\",\"nodeId\":\"ns=0;i=105\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DataTypeDictionaryType\",\"nodeId\":\"ns=0;i=72\",\"nodeClass\":16,\"children\":[{\"displayName\":\"DataTypeVersion\",\"nodeId\":\"ns=0;i=106\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=0;i=107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deprecated\",\"nodeId\":\"ns=0;i=15001\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServerVendorCapabilityType\",\"nodeId\":\"ns=0;i=2137\",\"nodeClass\":16,\"children\":[]},{\"displayName\":\"ServerStatusType\",\"nodeId\":\"ns=0;i=2138\",\"nodeClass\":16,\"children\":[{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=2139\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentTime\",\"nodeId\":\"ns=0;i=2140\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=2141\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildInfo\",\"nodeId\":\"ns=0;i=2142\",\"nodeClass\":2,\"children\":[{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=3698\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerName\",\"nodeId\":\"ns=0;i=3699\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductName\",\"nodeId\":\"ns=0;i=3700\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareVersion\",\"nodeId\":\"ns=0;i=3701\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildNumber\",\"nodeId\":\"ns=0;i=3702\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildDate\",\"nodeId\":\"ns=0;i=3703\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecondsTillShutdown\",\"nodeId\":\"ns=0;i=2752\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ShutdownReason\",\"nodeId\":\"ns=0;i=2753\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BuildInfoType\",\"nodeId\":\"ns=0;i=3051\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ProductUri\",\"nodeId\":\"ns=0;i=3052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerName\",\"nodeId\":\"ns=0;i=3053\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductName\",\"nodeId\":\"ns=0;i=3054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareVersion\",\"nodeId\":\"ns=0;i=3055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildNumber\",\"nodeId\":\"ns=0;i=3056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildDate\",\"nodeId\":\"ns=0;i=3057\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServerDiagnosticsSummaryType\",\"nodeId\":\"ns=0;i=2150\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ServerViewCount\",\"nodeId\":\"ns=0;i=2151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSessionCount\",\"nodeId\":\"ns=0;i=2152\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSessionCount\",\"nodeId\":\"ns=0;i=2153\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedSessionCount\",\"nodeId\":\"ns=0;i=2154\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedSessionCount\",\"nodeId\":\"ns=0;i=2155\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionTimeoutCount\",\"nodeId\":\"ns=0;i=2156\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionAbortCount\",\"nodeId\":\"ns=0;i=2157\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingIntervalCount\",\"nodeId\":\"ns=0;i=2159\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionCount\",\"nodeId\":\"ns=0;i=2160\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CumulatedSubscriptionCount\",\"nodeId\":\"ns=0;i=2161\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityRejectedRequestsCount\",\"nodeId\":\"ns=0;i=2162\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RejectedRequestsCount\",\"nodeId\":\"ns=0;i=2163\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SamplingIntervalDiagnosticsArrayType\",\"nodeId\":\"ns=0;i=2164\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SamplingIntervalDiagnostics\",\"nodeId\":\"ns=0;i=12779\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SamplingInterval\",\"nodeId\":\"ns=0;i=12780\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SampledMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12781\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxSampledMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12782\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisabledMonitoredItemsSamplingCount\",\"nodeId\":\"ns=0;i=12783\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SamplingIntervalDiagnosticsType\",\"nodeId\":\"ns=0;i=2165\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SamplingInterval\",\"nodeId\":\"ns=0;i=2166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SampledMonitoredItemsCount\",\"nodeId\":\"ns=0;i=11697\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxSampledMonitoredItemsCount\",\"nodeId\":\"ns=0;i=11698\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisabledMonitoredItemsSamplingCount\",\"nodeId\":\"ns=0;i=11699\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SubscriptionDiagnosticsArrayType\",\"nodeId\":\"ns=0;i=2171\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SubscriptionDiagnostics\",\"nodeId\":\"ns=0;i=12784\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=12785\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscriptionId\",\"nodeId\":\"ns=0;i=12786\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=12787\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingInterval\",\"nodeId\":\"ns=0;i=12788\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxKeepAliveCount\",\"nodeId\":\"ns=0;i=12789\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxLifetimeCount\",\"nodeId\":\"ns=0;i=12790\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNotificationsPerPublish\",\"nodeId\":\"ns=0;i=12791\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingEnabled\",\"nodeId\":\"ns=0;i=12792\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyCount\",\"nodeId\":\"ns=0;i=12793\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnableCount\",\"nodeId\":\"ns=0;i=12794\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisableCount\",\"nodeId\":\"ns=0;i=12795\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishRequestCount\",\"nodeId\":\"ns=0;i=12796\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishMessageRequestCount\",\"nodeId\":\"ns=0;i=12797\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishMessageCount\",\"nodeId\":\"ns=0;i=12798\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferRequestCount\",\"nodeId\":\"ns=0;i=12799\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferredToAltClientCount\",\"nodeId\":\"ns=0;i=12800\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferredToSameClientCount\",\"nodeId\":\"ns=0;i=12801\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishRequestCount\",\"nodeId\":\"ns=0;i=12802\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataChangeNotificationsCount\",\"nodeId\":\"ns=0;i=12803\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventNotificationsCount\",\"nodeId\":\"ns=0;i=12804\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NotificationsCount\",\"nodeId\":\"ns=0;i=12805\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LatePublishRequestCount\",\"nodeId\":\"ns=0;i=12806\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentKeepAliveCount\",\"nodeId\":\"ns=0;i=12807\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentLifetimeCount\",\"nodeId\":\"ns=0;i=12808\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnacknowledgedMessageCount\",\"nodeId\":\"ns=0;i=12809\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscardedMessageCount\",\"nodeId\":\"ns=0;i=12810\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoredItemCount\",\"nodeId\":\"ns=0;i=12811\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisabledMonitoredItemCount\",\"nodeId\":\"ns=0;i=12812\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoringQueueOverflowCount\",\"nodeId\":\"ns=0;i=12813\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NextSequenceNumber\",\"nodeId\":\"ns=0;i=12814\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventQueueOverflowCount\",\"nodeId\":\"ns=0;i=12815\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SubscriptionDiagnosticsType\",\"nodeId\":\"ns=0;i=2172\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=2173\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscriptionId\",\"nodeId\":\"ns=0;i=2174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=2175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingInterval\",\"nodeId\":\"ns=0;i=2176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxKeepAliveCount\",\"nodeId\":\"ns=0;i=2177\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxLifetimeCount\",\"nodeId\":\"ns=0;i=8888\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxNotificationsPerPublish\",\"nodeId\":\"ns=0;i=2179\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishingEnabled\",\"nodeId\":\"ns=0;i=2180\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyCount\",\"nodeId\":\"ns=0;i=2181\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnableCount\",\"nodeId\":\"ns=0;i=2182\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisableCount\",\"nodeId\":\"ns=0;i=2183\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishRequestCount\",\"nodeId\":\"ns=0;i=2184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishMessageRequestCount\",\"nodeId\":\"ns=0;i=2185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishMessageCount\",\"nodeId\":\"ns=0;i=2186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferRequestCount\",\"nodeId\":\"ns=0;i=2187\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferredToAltClientCount\",\"nodeId\":\"ns=0;i=2188\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferredToSameClientCount\",\"nodeId\":\"ns=0;i=2189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishRequestCount\",\"nodeId\":\"ns=0;i=2190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataChangeNotificationsCount\",\"nodeId\":\"ns=0;i=2191\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventNotificationsCount\",\"nodeId\":\"ns=0;i=2998\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NotificationsCount\",\"nodeId\":\"ns=0;i=2193\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LatePublishRequestCount\",\"nodeId\":\"ns=0;i=8889\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentKeepAliveCount\",\"nodeId\":\"ns=0;i=8890\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentLifetimeCount\",\"nodeId\":\"ns=0;i=8891\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnacknowledgedMessageCount\",\"nodeId\":\"ns=0;i=8892\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscardedMessageCount\",\"nodeId\":\"ns=0;i=8893\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoredItemCount\",\"nodeId\":\"ns=0;i=8894\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DisabledMonitoredItemCount\",\"nodeId\":\"ns=0;i=8895\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoringQueueOverflowCount\",\"nodeId\":\"ns=0;i=8896\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NextSequenceNumber\",\"nodeId\":\"ns=0;i=8897\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventQueueOverflowCount\",\"nodeId\":\"ns=0;i=8902\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SessionDiagnosticsArrayType\",\"nodeId\":\"ns=0;i=2196\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SessionDiagnostics\",\"nodeId\":\"ns=0;i=12816\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=12817\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionName\",\"nodeId\":\"ns=0;i=12818\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientDescription\",\"nodeId\":\"ns=0;i=12819\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=12820\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=12821\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=12822\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActualSessionTimeout\",\"nodeId\":\"ns=0;i=12823\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxResponseMessageSize\",\"nodeId\":\"ns=0;i=12824\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientConnectionTime\",\"nodeId\":\"ns=0;i=12825\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientLastContactTime\",\"nodeId\":\"ns=0;i=12826\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionsCount\",\"nodeId\":\"ns=0;i=12827\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12828\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentPublishRequestsInQueue\",\"nodeId\":\"ns=0;i=12829\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalRequestCount\",\"nodeId\":\"ns=0;i=12830\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnauthorizedRequestCount\",\"nodeId\":\"ns=0;i=12831\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReadCount\",\"nodeId\":\"ns=0;i=12832\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryReadCount\",\"nodeId\":\"ns=0;i=12833\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteCount\",\"nodeId\":\"ns=0;i=12834\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryUpdateCount\",\"nodeId\":\"ns=0;i=12835\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CallCount\",\"nodeId\":\"ns=0;i=12836\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12837\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12838\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetMonitoringModeCount\",\"nodeId\":\"ns=0;i=12839\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetTriggeringCount\",\"nodeId\":\"ns=0;i=12840\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteMonitoredItemsCount\",\"nodeId\":\"ns=0;i=12841\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateSubscriptionCount\",\"nodeId\":\"ns=0;i=12842\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifySubscriptionCount\",\"nodeId\":\"ns=0;i=12843\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetPublishingModeCount\",\"nodeId\":\"ns=0;i=12844\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishCount\",\"nodeId\":\"ns=0;i=12845\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishCount\",\"nodeId\":\"ns=0;i=12846\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferSubscriptionsCount\",\"nodeId\":\"ns=0;i=12847\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteSubscriptionsCount\",\"nodeId\":\"ns=0;i=12848\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesCount\",\"nodeId\":\"ns=0;i=12849\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesCount\",\"nodeId\":\"ns=0;i=12850\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesCount\",\"nodeId\":\"ns=0;i=12851\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesCount\",\"nodeId\":\"ns=0;i=12852\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseCount\",\"nodeId\":\"ns=0;i=12853\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseNextCount\",\"nodeId\":\"ns=0;i=12854\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TranslateBrowsePathsToNodeIdsCount\",\"nodeId\":\"ns=0;i=12855\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryFirstCount\",\"nodeId\":\"ns=0;i=12856\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryNextCount\",\"nodeId\":\"ns=0;i=12857\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisterNodesCount\",\"nodeId\":\"ns=0;i=12858\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnregisterNodesCount\",\"nodeId\":\"ns=0;i=12859\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SessionDiagnosticsVariableType\",\"nodeId\":\"ns=0;i=2197\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=2198\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionName\",\"nodeId\":\"ns=0;i=2199\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientDescription\",\"nodeId\":\"ns=0;i=2200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=2201\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=2202\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocaleIds\",\"nodeId\":\"ns=0;i=2203\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActualSessionTimeout\",\"nodeId\":\"ns=0;i=2204\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxResponseMessageSize\",\"nodeId\":\"ns=0;i=3050\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientConnectionTime\",\"nodeId\":\"ns=0;i=2205\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientLastContactTime\",\"nodeId\":\"ns=0;i=2206\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentSubscriptionsCount\",\"nodeId\":\"ns=0;i=2207\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentMonitoredItemsCount\",\"nodeId\":\"ns=0;i=2208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrentPublishRequestsInQueue\",\"nodeId\":\"ns=0;i=2209\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TotalRequestCount\",\"nodeId\":\"ns=0;i=8900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnauthorizedRequestCount\",\"nodeId\":\"ns=0;i=11892\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReadCount\",\"nodeId\":\"ns=0;i=2217\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryReadCount\",\"nodeId\":\"ns=0;i=2218\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriteCount\",\"nodeId\":\"ns=0;i=2219\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryUpdateCount\",\"nodeId\":\"ns=0;i=2220\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CallCount\",\"nodeId\":\"ns=0;i=2221\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateMonitoredItemsCount\",\"nodeId\":\"ns=0;i=2222\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifyMonitoredItemsCount\",\"nodeId\":\"ns=0;i=2223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetMonitoringModeCount\",\"nodeId\":\"ns=0;i=2224\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetTriggeringCount\",\"nodeId\":\"ns=0;i=2225\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteMonitoredItemsCount\",\"nodeId\":\"ns=0;i=2226\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateSubscriptionCount\",\"nodeId\":\"ns=0;i=2227\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModifySubscriptionCount\",\"nodeId\":\"ns=0;i=2228\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SetPublishingModeCount\",\"nodeId\":\"ns=0;i=2229\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishCount\",\"nodeId\":\"ns=0;i=2230\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RepublishCount\",\"nodeId\":\"ns=0;i=2231\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferSubscriptionsCount\",\"nodeId\":\"ns=0;i=2232\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteSubscriptionsCount\",\"nodeId\":\"ns=0;i=2233\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesCount\",\"nodeId\":\"ns=0;i=2234\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesCount\",\"nodeId\":\"ns=0;i=2235\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesCount\",\"nodeId\":\"ns=0;i=2236\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesCount\",\"nodeId\":\"ns=0;i=2237\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseCount\",\"nodeId\":\"ns=0;i=2238\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrowseNextCount\",\"nodeId\":\"ns=0;i=2239\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TranslateBrowsePathsToNodeIdsCount\",\"nodeId\":\"ns=0;i=2240\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryFirstCount\",\"nodeId\":\"ns=0;i=2241\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QueryNextCount\",\"nodeId\":\"ns=0;i=2242\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisterNodesCount\",\"nodeId\":\"ns=0;i=2730\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnregisterNodesCount\",\"nodeId\":\"ns=0;i=2731\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SessionSecurityDiagnosticsArrayType\",\"nodeId\":\"ns=0;i=2243\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SessionSecurityDiagnostics\",\"nodeId\":\"ns=0;i=12860\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=12861\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdOfSession\",\"nodeId\":\"ns=0;i=12862\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdHistory\",\"nodeId\":\"ns=0;i=12863\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationMechanism\",\"nodeId\":\"ns=0;i=12864\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Encoding\",\"nodeId\":\"ns=0;i=12865\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProtocol\",\"nodeId\":\"ns=0;i=12866\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=12867\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=12868\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=12869\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SessionSecurityDiagnosticsType\",\"nodeId\":\"ns=0;i=2244\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=2245\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdOfSession\",\"nodeId\":\"ns=0;i=2246\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserIdHistory\",\"nodeId\":\"ns=0;i=2247\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuthenticationMechanism\",\"nodeId\":\"ns=0;i=2248\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Encoding\",\"nodeId\":\"ns=0;i=2249\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransportProtocol\",\"nodeId\":\"ns=0;i=2250\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=2251\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=2252\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=3058\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OptionSetType\",\"nodeId\":\"ns=0;i=11487\",\"nodeClass\":16,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=11488\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BitMask\",\"nodeId\":\"ns=0;i=11701\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SelectionListType\",\"nodeId\":\"ns=0;i=16309\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Selections\",\"nodeId\":\"ns=0;i=17632\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SelectionDescriptions\",\"nodeId\":\"ns=0;i=17633\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RestrictToList\",\"nodeId\":\"ns=0;i=16312\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AudioVariableType\",\"nodeId\":\"ns=0;i=17986\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ListId\",\"nodeId\":\"ns=0;i=17988\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AgencyId\",\"nodeId\":\"ns=0;i=17989\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"VersionId\",\"nodeId\":\"ns=0;i=17990\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StateVariableType\",\"nodeId\":\"ns=0;i=2755\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=2756\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Name\",\"nodeId\":\"ns=0;i=2757\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Number\",\"nodeId\":\"ns=0;i=2758\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveDisplayName\",\"nodeId\":\"ns=0;i=2759\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FiniteStateVariableType\",\"nodeId\":\"ns=0;i=2760\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=2761\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TwoStateVariableType\",\"nodeId\":\"ns=0;i=8995\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=8996\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9000\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=9001\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=11110\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=11111\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TransitionVariableType\",\"nodeId\":\"ns=0;i=2762\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=2763\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Name\",\"nodeId\":\"ns=0;i=2764\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Number\",\"nodeId\":\"ns=0;i=2765\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=2766\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=11456\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FiniteTransitionVariableType\",\"nodeId\":\"ns=0;i=2767\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=2768\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"GuardVariableType\",\"nodeId\":\"ns=0;i=15113\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ExpressionGuardVariableType\",\"nodeId\":\"ns=0;i=15128\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Expression\",\"nodeId\":\"ns=0;i=15129\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ElseGuardVariableType\",\"nodeId\":\"ns=0;i=15317\",\"nodeClass\":16,\"children\":[]}]},{\"displayName\":\"RationalNumberType\",\"nodeId\":\"ns=0;i=17709\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Numerator\",\"nodeId\":\"ns=0;i=17712\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Denominator\",\"nodeId\":\"ns=0;i=17713\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"VectorType\",\"nodeId\":\"ns=0;i=17714\",\"nodeClass\":16,\"children\":[{\"displayName\":\"VectorUnit\",\"nodeId\":\"ns=0;i=17715\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DVectorType\",\"nodeId\":\"ns=0;i=17716\",\"nodeClass\":16,\"children\":[{\"displayName\":\"X\",\"nodeId\":\"ns=0;i=18769\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Y\",\"nodeId\":\"ns=0;i=18770\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Z\",\"nodeId\":\"ns=0;i=18771\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"CartesianCoordinatesType\",\"nodeId\":\"ns=0;i=18772\",\"nodeClass\":16,\"children\":[{\"displayName\":\"LengthUnit\",\"nodeId\":\"ns=0;i=18773\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DCartesianCoordinatesType\",\"nodeId\":\"ns=0;i=18774\",\"nodeClass\":16,\"children\":[{\"displayName\":\"X\",\"nodeId\":\"ns=0;i=18776\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Y\",\"nodeId\":\"ns=0;i=18777\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Z\",\"nodeId\":\"ns=0;i=18778\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"OrientationType\",\"nodeId\":\"ns=0;i=18779\",\"nodeClass\":16,\"children\":[{\"displayName\":\"AngleUnit\",\"nodeId\":\"ns=0;i=18780\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DOrientationType\",\"nodeId\":\"ns=0;i=18781\",\"nodeClass\":16,\"children\":[{\"displayName\":\"A\",\"nodeId\":\"ns=0;i=18783\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"B\",\"nodeId\":\"ns=0;i=18784\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"C\",\"nodeId\":\"ns=0;i=18785\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"FrameType\",\"nodeId\":\"ns=0;i=18786\",\"nodeClass\":16,\"children\":[{\"displayName\":\"CartesianCoordinates\",\"nodeId\":\"ns=0;i=18801\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Orientation\",\"nodeId\":\"ns=0;i=18787\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Constant\",\"nodeId\":\"ns=0;i=18788\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseFrame\",\"nodeId\":\"ns=0;i=18789\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FixedBase\",\"nodeId\":\"ns=0;i=18790\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DFrameType\",\"nodeId\":\"ns=0;i=18791\",\"nodeClass\":16,\"children\":[{\"displayName\":\"CartesianCoordinates\",\"nodeId\":\"ns=0;i=18796\",\"nodeClass\":2,\"children\":[{\"displayName\":\"X\",\"nodeId\":\"ns=0;i=18798\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Y\",\"nodeId\":\"ns=0;i=18799\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Z\",\"nodeId\":\"ns=0;i=18800\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Orientation\",\"nodeId\":\"ns=0;i=18792\",\"nodeClass\":2,\"children\":[{\"displayName\":\"A\",\"nodeId\":\"ns=0;i=19074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"B\",\"nodeId\":\"ns=0;i=19075\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"C\",\"nodeId\":\"ns=0;i=19076\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"DataItemType\",\"nodeId\":\"ns=0;i=2365\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Definition\",\"nodeId\":\"ns=0;i=2366\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ValuePrecision\",\"nodeId\":\"ns=0;i=2367\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseAnalogType\",\"nodeId\":\"ns=0;i=15318\",\"nodeClass\":16,\"children\":[{\"displayName\":\"InstrumentRange\",\"nodeId\":\"ns=0;i=17567\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EURange\",\"nodeId\":\"ns=0;i=17568\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=17569\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AnalogItemType\",\"nodeId\":\"ns=0;i=2368\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EURange\",\"nodeId\":\"ns=0;i=2369\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AnalogUnitRangeType\",\"nodeId\":\"ns=0;i=17570\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=17575\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AnalogUnitType\",\"nodeId\":\"ns=0;i=17497\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=17502\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LifetimeVariableType\",\"nodeId\":\"ns=2;i=468\",\"nodeClass\":16,\"children\":[{\"displayName\":\"StartValue\",\"nodeId\":\"ns=2;i=469\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LimitValue\",\"nodeId\":\"ns=2;i=470\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Indication\",\"nodeId\":\"ns=2;i=471\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WarningValues\",\"nodeId\":\"ns=2;i=472\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"DiscreteItemType\",\"nodeId\":\"ns=0;i=2372\",\"nodeClass\":16,\"children\":[{\"displayName\":\"TwoStateDiscreteType\",\"nodeId\":\"ns=0;i=2373\",\"nodeClass\":16,\"children\":[{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=2374\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=2375\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MultiStateDiscreteType\",\"nodeId\":\"ns=0;i=2376\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=2377\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MultiStateValueDiscreteType\",\"nodeId\":\"ns=0;i=11238\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11241\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ValueAsText\",\"nodeId\":\"ns=0;i=11461\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MultiStateDictionaryEntryDiscreteBaseType\",\"nodeId\":\"ns=0;i=19077\",\"nodeClass\":16,\"children\":[{\"displayName\":\"EnumDictionaryEntries\",\"nodeId\":\"ns=0;i=19082\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ValueAsDictionaryEntries\",\"nodeId\":\"ns=0;i=19083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MultiStateDictionaryEntryDiscreteType\",\"nodeId\":\"ns=0;i=19084\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ValueAsDictionaryEntries\",\"nodeId\":\"ns=0;i=19090\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"ArrayItemType\",\"nodeId\":\"ns=0;i=12021\",\"nodeClass\":16,\"children\":[{\"displayName\":\"InstrumentRange\",\"nodeId\":\"ns=0;i=12024\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EURange\",\"nodeId\":\"ns=0;i=12025\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=12026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Title\",\"nodeId\":\"ns=0;i=12027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AxisScaleType\",\"nodeId\":\"ns=0;i=12028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"YArrayItemType\",\"nodeId\":\"ns=0;i=12029\",\"nodeClass\":16,\"children\":[{\"displayName\":\"XAxisDefinition\",\"nodeId\":\"ns=0;i=12037\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"XYArrayItemType\",\"nodeId\":\"ns=0;i=12038\",\"nodeClass\":16,\"children\":[{\"displayName\":\"XAxisDefinition\",\"nodeId\":\"ns=0;i=12046\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ImageItemType\",\"nodeId\":\"ns=0;i=12047\",\"nodeClass\":16,\"children\":[{\"displayName\":\"XAxisDefinition\",\"nodeId\":\"ns=0;i=12055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"YAxisDefinition\",\"nodeId\":\"ns=0;i=12056\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CubeItemType\",\"nodeId\":\"ns=0;i=12057\",\"nodeClass\":16,\"children\":[{\"displayName\":\"XAxisDefinition\",\"nodeId\":\"ns=0;i=12065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"YAxisDefinition\",\"nodeId\":\"ns=0;i=12066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ZAxisDefinition\",\"nodeId\":\"ns=0;i=12067\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NDimensionArrayItemType\",\"nodeId\":\"ns=0;i=12068\",\"nodeClass\":16,\"children\":[{\"displayName\":\"AxisDefinition\",\"nodeId\":\"ns=0;i=12076\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"ConditionVariableType\",\"nodeId\":\"ns=0;i=9002\",\"nodeClass\":16,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9003\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AlarmRateVariableType\",\"nodeId\":\"ns=0;i=17277\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Rate\",\"nodeId\":\"ns=0;i=17278\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AlarmStateVariableType\",\"nodeId\":\"ns=0;i=32244\",\"nodeClass\":16,\"children\":[{\"displayName\":\"HighestActiveSeverity\",\"nodeId\":\"ns=0;i=32245\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighestUnackSeverity\",\"nodeId\":\"ns=0;i=32246\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ActiveCount\",\"nodeId\":\"ns=0;i=32247\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnacknowledgedCount\",\"nodeId\":\"ns=0;i=32248\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnconfirmedCount\",\"nodeId\":\"ns=0;i=32249\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Filter\",\"nodeId\":\"ns=0;i=32250\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramDiagnosticType\",\"nodeId\":\"ns=0;i=2380\",\"nodeClass\":16,\"children\":[{\"displayName\":\"CreateSessionId\",\"nodeId\":\"ns=0;i=2381\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateClientName\",\"nodeId\":\"ns=0;i=2382\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvocationCreationTime\",\"nodeId\":\"ns=0;i=2383\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastTransitionTime\",\"nodeId\":\"ns=0;i=2384\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCall\",\"nodeId\":\"ns=0;i=2385\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodSessionId\",\"nodeId\":\"ns=0;i=2386\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodInputArguments\",\"nodeId\":\"ns=0;i=2387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodOutputArguments\",\"nodeId\":\"ns=0;i=2388\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCallTime\",\"nodeId\":\"ns=0;i=2389\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodReturnStatus\",\"nodeId\":\"ns=0;i=2390\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramDiagnostic2Type\",\"nodeId\":\"ns=0;i=15383\",\"nodeClass\":16,\"children\":[{\"displayName\":\"CreateSessionId\",\"nodeId\":\"ns=0;i=15384\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CreateClientName\",\"nodeId\":\"ns=0;i=15385\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvocationCreationTime\",\"nodeId\":\"ns=0;i=15386\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastTransitionTime\",\"nodeId\":\"ns=0;i=15387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCall\",\"nodeId\":\"ns=0;i=15388\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodSessionId\",\"nodeId\":\"ns=0;i=15389\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodInputArguments\",\"nodeId\":\"ns=0;i=15390\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodOutputArguments\",\"nodeId\":\"ns=0;i=15391\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodInputValues\",\"nodeId\":\"ns=0;i=15392\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodOutputValues\",\"nodeId\":\"ns=0;i=15393\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodCallTime\",\"nodeId\":\"ns=0;i=15394\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastMethodReturnStatus\",\"nodeId\":\"ns=0;i=15395\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubDiagnosticsCounterType\",\"nodeId\":\"ns=0;i=19725\",\"nodeClass\":16,\"children\":[{\"displayName\":\"Active\",\"nodeId\":\"ns=0;i=19726\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Classification\",\"nodeId\":\"ns=0;i=19727\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19728\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TimeFirstChange\",\"nodeId\":\"ns=0;i=19729\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ReferenceDescriptionVariableType\",\"nodeId\":\"ns=0;i=32657\",\"nodeClass\":16,\"children\":[{\"displayName\":\"ReferenceRefinement\",\"nodeId\":\"ns=0;i=32658\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UIElementType\",\"nodeId\":\"ns=2;i=6246\",\"nodeClass\":16,\"children\":[]}]},{\"displayName\":\"PropertyType\",\"nodeId\":\"ns=0;i=68\",\"nodeClass\":16,\"children\":[]}]}]},{\"displayName\":\"DataTypes\",\"nodeId\":\"ns=0;i=90\",\"nodeClass\":1,\"children\":[{\"displayName\":\"BaseDataType\",\"nodeId\":\"ns=0;i=24\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Number\",\"nodeId\":\"ns=0;i=26\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Integer\",\"nodeId\":\"ns=0;i=27\",\"nodeClass\":64,\"children\":[{\"displayName\":\"SByte\",\"nodeId\":\"ns=0;i=2\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Int16\",\"nodeId\":\"ns=0;i=4\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Int32\",\"nodeId\":\"ns=0;i=6\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Int64\",\"nodeId\":\"ns=0;i=8\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"UInteger\",\"nodeId\":\"ns=0;i=28\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Byte\",\"nodeId\":\"ns=0;i=3\",\"nodeClass\":64,\"children\":[{\"displayName\":\"AccessLevelType\",\"nodeId\":\"ns=0;i=15031\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15032\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EventNotifierType\",\"nodeId\":\"ns=0;i=15033\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15034\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"UInt16\",\"nodeId\":\"ns=0;i=5\",\"nodeClass\":64,\"children\":[{\"displayName\":\"AlarmMask\",\"nodeId\":\"ns=0;i=32251\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=32252\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DataSetFieldFlags\",\"nodeId\":\"ns=0;i=15904\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15577\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AccessRestrictionType\",\"nodeId\":\"ns=0;i=95\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15035\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"UInt32\",\"nodeId\":\"ns=0;i=7\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Handle\",\"nodeId\":\"ns=0;i=31917\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TrustListValidationOptions\",\"nodeId\":\"ns=0;i=23564\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=23565\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DataSetFieldContentMask\",\"nodeId\":\"ns=0;i=15583\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15584\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UadpNetworkMessageContentMask\",\"nodeId\":\"ns=0;i=15642\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15643\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UadpDataSetMessageContentMask\",\"nodeId\":\"ns=0;i=15646\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15647\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"JsonNetworkMessageContentMask\",\"nodeId\":\"ns=0;i=15654\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15655\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"JsonDataSetMessageContentMask\",\"nodeId\":\"ns=0;i=15658\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15659\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubConfigurationRefMask\",\"nodeId\":\"ns=0;i=25517\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=25518\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PasswordOptionsMask\",\"nodeId\":\"ns=0;i=24277\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=24278\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UserConfigurationMask\",\"nodeId\":\"ns=0;i=24279\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=24280\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PermissionType\",\"nodeId\":\"ns=0;i=94\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15030\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AccessLevelExType\",\"nodeId\":\"ns=0;i=15406\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15407\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Index\",\"nodeId\":\"ns=0;i=17588\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"IntegerId\",\"nodeId\":\"ns=0;i=288\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"VersionTime\",\"nodeId\":\"ns=0;i=20998\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AttributeWriteMask\",\"nodeId\":\"ns=0;i=347\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=0;i=15036\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Counter\",\"nodeId\":\"ns=0;i=289\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UpdateBehavior\",\"nodeId\":\"ns=2;i=333\",\"nodeClass\":64,\"children\":[{\"displayName\":\"OptionSetValues\",\"nodeId\":\"ns=2;i=388\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"UInt64\",\"nodeId\":\"ns=0;i=9\",\"nodeClass\":64,\"children\":[{\"displayName\":\"BitFieldMaskDataType\",\"nodeId\":\"ns=0;i=11737\",\"nodeClass\":64,\"children\":[]}]}]},{\"displayName\":\"Float\",\"nodeId\":\"ns=0;i=10\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Double\",\"nodeId\":\"ns=0;i=11\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Duration\",\"nodeId\":\"ns=0;i=290\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"Decimal\",\"nodeId\":\"ns=0;i=50\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"Enumeration\",\"nodeId\":\"ns=0;i=29\",\"nodeClass\":64,\"children\":[{\"displayName\":\"NamingRuleType\",\"nodeId\":\"ns=0;i=120\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=12169\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OpenFileMode\",\"nodeId\":\"ns=0;i=11939\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11940\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdentityCriteriaType\",\"nodeId\":\"ns=0;i=15632\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=15633\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TrustListMasks\",\"nodeId\":\"ns=0;i=12552\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=12553\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubState\",\"nodeId\":\"ns=0;i=14647\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=14648\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OverrideValueHandling\",\"nodeId\":\"ns=0;i=15874\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=15875\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DataSetOrderingType\",\"nodeId\":\"ns=0;i=20408\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=15641\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"BrokerTransportQualityOfService\",\"nodeId\":\"ns=0;i=15008\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=15009\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DiagnosticsLevel\",\"nodeId\":\"ns=0;i=19723\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=19724\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubDiagnosticsCounterClassification\",\"nodeId\":\"ns=0;i=19730\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=19731\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Duplex\",\"nodeId\":\"ns=0;i=24210\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24235\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InterfaceAdminStatus\",\"nodeId\":\"ns=0;i=24212\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24236\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InterfaceOperStatus\",\"nodeId\":\"ns=0;i=24214\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24237\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NegotiationStatus\",\"nodeId\":\"ns=0;i=24216\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24238\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TsnFailureCode\",\"nodeId\":\"ns=0;i=24218\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24239\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TsnStreamState\",\"nodeId\":\"ns=0;i=24220\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24240\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TsnTalkerStatus\",\"nodeId\":\"ns=0;i=24222\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24241\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TsnListenerStatus\",\"nodeId\":\"ns=0;i=24224\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=24242\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IdType\",\"nodeId\":\"ns=0;i=256\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7591\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NodeClass\",\"nodeId\":\"ns=0;i=257\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11878\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"StructureType\",\"nodeId\":\"ns=0;i=98\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=14528\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ApplicationType\",\"nodeId\":\"ns=0;i=307\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7597\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"MessageSecurityMode\",\"nodeId\":\"ns=0;i=302\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7595\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UserTokenType\",\"nodeId\":\"ns=0;i=303\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7596\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SecurityTokenRequestType\",\"nodeId\":\"ns=0;i=315\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7598\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NodeAttributesMask\",\"nodeId\":\"ns=0;i=348\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11881\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FilterOperator\",\"nodeId\":\"ns=0;i=576\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7605\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HistoryUpdateType\",\"nodeId\":\"ns=0;i=11234\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11884\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PerformUpdateType\",\"nodeId\":\"ns=0;i=11293\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumValues\",\"nodeId\":\"ns=0;i=11885\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RedundancySupport\",\"nodeId\":\"ns=0;i=851\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7611\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ServerState\",\"nodeId\":\"ns=0;i=852\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7612\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AxisScaleEnumeration\",\"nodeId\":\"ns=0;i=12077\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=12078\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExceptionDeviationFormat\",\"nodeId\":\"ns=0;i=890\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=0;i=7614\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DeviceHealthEnumeration\",\"nodeId\":\"ns=2;i=6244\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=2;i=6450\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SoftwareVersionFileType\",\"nodeId\":\"ns=2;i=331\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumStrings\",\"nodeId\":\"ns=2;i=332\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"Boolean\",\"nodeId\":\"ns=0;i=1\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"String\",\"nodeId\":\"ns=0;i=12\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UriString\",\"nodeId\":\"ns=0;i=23751\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SemanticVersionString\",\"nodeId\":\"ns=0;i=24263\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TrimmedString\",\"nodeId\":\"ns=0;i=31918\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EncodedTicket\",\"nodeId\":\"ns=0;i=25726\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"NormalizedString\",\"nodeId\":\"ns=0;i=12877\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DecimalString\",\"nodeId\":\"ns=0;i=12878\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DurationString\",\"nodeId\":\"ns=0;i=12879\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TimeString\",\"nodeId\":\"ns=0;i=12880\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DateString\",\"nodeId\":\"ns=0;i=12881\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"LocaleId\",\"nodeId\":\"ns=0;i=295\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"NumericRange\",\"nodeId\":\"ns=0;i=291\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"DateTime\",\"nodeId\":\"ns=0;i=13\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UtcTime\",\"nodeId\":\"ns=0;i=294\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"Guid\",\"nodeId\":\"ns=0;i=14\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ByteString\",\"nodeId\":\"ns=0;i=15\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Image\",\"nodeId\":\"ns=0;i=30\",\"nodeClass\":64,\"children\":[{\"displayName\":\"ImageBMP\",\"nodeId\":\"ns=0;i=2000\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ImageGIF\",\"nodeId\":\"ns=0;i=2001\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ImageJPG\",\"nodeId\":\"ns=0;i=2002\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ImagePNG\",\"nodeId\":\"ns=0;i=2003\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"AudioDataType\",\"nodeId\":\"ns=0;i=16307\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ApplicationInstanceCertificate\",\"nodeId\":\"ns=0;i=311\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ContinuationPoint\",\"nodeId\":\"ns=0;i=521\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"XmlElement\",\"nodeId\":\"ns=0;i=16\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"NodeId\",\"nodeId\":\"ns=0;i=17\",\"nodeClass\":64,\"children\":[{\"displayName\":\"SessionAuthenticationToken\",\"nodeId\":\"ns=0;i=388\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"ExpandedNodeId\",\"nodeId\":\"ns=0;i=18\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"StatusCode\",\"nodeId\":\"ns=0;i=19\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"QualifiedName\",\"nodeId\":\"ns=0;i=20\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"LocalizedText\",\"nodeId\":\"ns=0;i=21\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Structure\",\"nodeId\":\"ns=0;i=22\",\"nodeClass\":64,\"children\":[{\"displayName\":\"Union\",\"nodeId\":\"ns=0;i=12756\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"KeyValuePair\",\"nodeId\":\"ns=0;i=14533\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AdditionalParametersType\",\"nodeId\":\"ns=0;i=16313\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EphemeralKeyType\",\"nodeId\":\"ns=0;i=17548\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EndpointType\",\"nodeId\":\"ns=0;i=15528\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RationalNumber\",\"nodeId\":\"ns=0;i=18806\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Vector\",\"nodeId\":\"ns=0;i=18807\",\"nodeClass\":64,\"children\":[{\"displayName\":\"3DVector\",\"nodeId\":\"ns=0;i=18808\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"CartesianCoordinates\",\"nodeId\":\"ns=0;i=18809\",\"nodeClass\":64,\"children\":[{\"displayName\":\"3DCartesianCoordinates\",\"nodeId\":\"ns=0;i=18810\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"Orientation\",\"nodeId\":\"ns=0;i=18811\",\"nodeClass\":64,\"children\":[{\"displayName\":\"3DOrientation\",\"nodeId\":\"ns=0;i=18812\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"Frame\",\"nodeId\":\"ns=0;i=18813\",\"nodeClass\":64,\"children\":[{\"displayName\":\"3DFrame\",\"nodeId\":\"ns=0;i=18814\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"IdentityMappingRuleType\",\"nodeId\":\"ns=0;i=15634\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"CurrencyUnitType\",\"nodeId\":\"ns=0;i=23498\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TrustListDataType\",\"nodeId\":\"ns=0;i=12554\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TransactionErrorType\",\"nodeId\":\"ns=0;i=32285\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataTypeSchemaHeader\",\"nodeId\":\"ns=0;i=15534\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UABinaryFileDataType\",\"nodeId\":\"ns=0;i=15006\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataSetMetaDataType\",\"nodeId\":\"ns=0;i=14523\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"DataTypeDescription\",\"nodeId\":\"ns=0;i=14525\",\"nodeClass\":64,\"children\":[{\"displayName\":\"StructureDescription\",\"nodeId\":\"ns=0;i=15487\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EnumDescription\",\"nodeId\":\"ns=0;i=15488\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SimpleTypeDescription\",\"nodeId\":\"ns=0;i=15005\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"PortableQualifiedName\",\"nodeId\":\"ns=0;i=24105\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PortableNodeId\",\"nodeId\":\"ns=0;i=24106\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UnsignedRationalNumber\",\"nodeId\":\"ns=0;i=24107\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"FieldMetaData\",\"nodeId\":\"ns=0;i=14524\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ConfigurationVersionDataType\",\"nodeId\":\"ns=0;i=14593\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PublishedDataSetDataType\",\"nodeId\":\"ns=0;i=15578\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PublishedDataSetSourceDataType\",\"nodeId\":\"ns=0;i=15580\",\"nodeClass\":64,\"children\":[{\"displayName\":\"PublishedDataItemsDataType\",\"nodeId\":\"ns=0;i=15581\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PublishedEventsDataType\",\"nodeId\":\"ns=0;i=15582\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PublishedDataSetCustomSourceDataType\",\"nodeId\":\"ns=0;i=25269\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"PublishedVariableDataType\",\"nodeId\":\"ns=0;i=14273\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataSetWriterDataType\",\"nodeId\":\"ns=0;i=15597\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=15598\",\"nodeClass\":64,\"children\":[{\"displayName\":\"BrokerDataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=15669\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"DataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15605\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UadpDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15652\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"JsonDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15664\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"PubSubGroupDataType\",\"nodeId\":\"ns=0;i=15609\",\"nodeClass\":64,\"children\":[{\"displayName\":\"WriterGroupDataType\",\"nodeId\":\"ns=0;i=15480\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ReaderGroupDataType\",\"nodeId\":\"ns=0;i=15520\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"WriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=15611\",\"nodeClass\":64,\"children\":[{\"displayName\":\"DatagramWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=15532\",\"nodeClass\":64,\"children\":[{\"displayName\":\"DatagramWriterGroupTransport2DataType\",\"nodeId\":\"ns=0;i=23613\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"BrokerWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=15667\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"WriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15616\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UadpWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15645\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"JsonWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15657\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"PubSubConnectionDataType\",\"nodeId\":\"ns=0;i=15617\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ConnectionTransportDataType\",\"nodeId\":\"ns=0;i=15618\",\"nodeClass\":64,\"children\":[{\"displayName\":\"DatagramConnectionTransportDataType\",\"nodeId\":\"ns=0;i=17467\",\"nodeClass\":64,\"children\":[{\"displayName\":\"DatagramConnectionTransport2DataType\",\"nodeId\":\"ns=0;i=23612\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"BrokerConnectionTransportDataType\",\"nodeId\":\"ns=0;i=15007\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"NetworkAddressDataType\",\"nodeId\":\"ns=0;i=15502\",\"nodeClass\":64,\"children\":[{\"displayName\":\"NetworkAddressUrlDataType\",\"nodeId\":\"ns=0;i=15510\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"ReaderGroupTransportDataType\",\"nodeId\":\"ns=0;i=15621\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ReaderGroupMessageDataType\",\"nodeId\":\"ns=0;i=15622\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataSetReaderDataType\",\"nodeId\":\"ns=0;i=15623\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=15628\",\"nodeClass\":64,\"children\":[{\"displayName\":\"DatagramDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=23614\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"BrokerDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=15670\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"DataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15629\",\"nodeClass\":64,\"children\":[{\"displayName\":\"UadpDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15653\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"JsonDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15665\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"SubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=15630\",\"nodeClass\":64,\"children\":[{\"displayName\":\"TargetVariablesDataType\",\"nodeId\":\"ns=0;i=15631\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SubscribedDataSetMirrorDataType\",\"nodeId\":\"ns=0;i=15635\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetRefDataType\",\"nodeId\":\"ns=0;i=23599\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=23600\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"FieldTargetDataType\",\"nodeId\":\"ns=0;i=14744\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PubSubConfigurationDataType\",\"nodeId\":\"ns=0;i=15530\",\"nodeClass\":64,\"children\":[{\"displayName\":\"PubSubConfiguration2DataType\",\"nodeId\":\"ns=0;i=23602\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"SecurityGroupDataType\",\"nodeId\":\"ns=0;i=23601\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PubSubKeyPushTargetDataType\",\"nodeId\":\"ns=0;i=25270\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"QosDataType\",\"nodeId\":\"ns=0;i=23603\",\"nodeClass\":64,\"children\":[{\"displayName\":\"TransmitQosDataType\",\"nodeId\":\"ns=0;i=23604\",\"nodeClass\":64,\"children\":[{\"displayName\":\"TransmitQosPriorityDataType\",\"nodeId\":\"ns=0;i=23605\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"ReceiveQosDataType\",\"nodeId\":\"ns=0;i=23608\",\"nodeClass\":64,\"children\":[{\"displayName\":\"ReceiveQosPriorityDataType\",\"nodeId\":\"ns=0;i=23609\",\"nodeClass\":64,\"children\":[]}]}]},{\"displayName\":\"PubSubConfigurationRefDataType\",\"nodeId\":\"ns=0;i=25519\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PubSubConfigurationValueDataType\",\"nodeId\":\"ns=0;i=25520\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AliasNameDataType\",\"nodeId\":\"ns=0;i=23468\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UserManagementDataType\",\"nodeId\":\"ns=0;i=24281\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"PriorityMappingEntryType\",\"nodeId\":\"ns=0;i=25220\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ReferenceDescriptionDataType\",\"nodeId\":\"ns=0;i=32659\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ReferenceListEntryDataType\",\"nodeId\":\"ns=0;i=32660\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RolePermissionType\",\"nodeId\":\"ns=0;i=96\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DataTypeDefinition\",\"nodeId\":\"ns=0;i=97\",\"nodeClass\":64,\"children\":[{\"displayName\":\"StructureDefinition\",\"nodeId\":\"ns=0;i=99\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EnumDefinition\",\"nodeId\":\"ns=0;i=100\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"StructureField\",\"nodeId\":\"ns=0;i=101\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Argument\",\"nodeId\":\"ns=0;i=296\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EnumValueType\",\"nodeId\":\"ns=0;i=7594\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EnumField\",\"nodeId\":\"ns=0;i=102\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"OptionSet\",\"nodeId\":\"ns=0;i=12755\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TimeZoneDataType\",\"nodeId\":\"ns=0;i=8912\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ApplicationDescription\",\"nodeId\":\"ns=0;i=308\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ServerOnNetwork\",\"nodeId\":\"ns=0;i=12189\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UserTokenPolicy\",\"nodeId\":\"ns=0;i=304\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EndpointDescription\",\"nodeId\":\"ns=0;i=312\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RegisteredServer\",\"nodeId\":\"ns=0;i=432\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12890\",\"nodeClass\":64,\"children\":[{\"displayName\":\"MdnsDiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12891\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"SignedSoftwareCertificate\",\"nodeId\":\"ns=0;i=344\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UserIdentityToken\",\"nodeId\":\"ns=0;i=316\",\"nodeClass\":64,\"children\":[{\"displayName\":\"AnonymousIdentityToken\",\"nodeId\":\"ns=0;i=319\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"UserNameIdentityToken\",\"nodeId\":\"ns=0;i=322\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"X509IdentityToken\",\"nodeId\":\"ns=0;i=325\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"IssuedIdentityToken\",\"nodeId\":\"ns=0;i=938\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"AddNodesItem\",\"nodeId\":\"ns=0;i=376\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AddReferencesItem\",\"nodeId\":\"ns=0;i=379\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DeleteNodesItem\",\"nodeId\":\"ns=0;i=382\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DeleteReferencesItem\",\"nodeId\":\"ns=0;i=385\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RelativePathElement\",\"nodeId\":\"ns=0;i=537\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RelativePath\",\"nodeId\":\"ns=0;i=540\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EndpointConfiguration\",\"nodeId\":\"ns=0;i=331\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ContentFilterElement\",\"nodeId\":\"ns=0;i=583\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ContentFilter\",\"nodeId\":\"ns=0;i=586\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"FilterOperand\",\"nodeId\":\"ns=0;i=589\",\"nodeClass\":64,\"children\":[{\"displayName\":\"ElementOperand\",\"nodeId\":\"ns=0;i=592\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"LiteralOperand\",\"nodeId\":\"ns=0;i=595\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AttributeOperand\",\"nodeId\":\"ns=0;i=598\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SimpleAttributeOperand\",\"nodeId\":\"ns=0;i=601\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"HistoryEvent\",\"nodeId\":\"ns=0;i=659\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"MonitoringFilter\",\"nodeId\":\"ns=0;i=719\",\"nodeClass\":64,\"children\":[{\"displayName\":\"EventFilter\",\"nodeId\":\"ns=0;i=725\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=0;i=948\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"HistoryEventFieldList\",\"nodeId\":\"ns=0;i=920\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"BuildInfo\",\"nodeId\":\"ns=0;i=338\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"RedundantServerDataType\",\"nodeId\":\"ns=0;i=853\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EndpointUrlListDataType\",\"nodeId\":\"ns=0;i=11943\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"NetworkGroupDataType\",\"nodeId\":\"ns=0;i=11944\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SamplingIntervalDiagnosticsDataType\",\"nodeId\":\"ns=0;i=856\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ServerDiagnosticsSummaryDataType\",\"nodeId\":\"ns=0;i=859\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ServerStatusDataType\",\"nodeId\":\"ns=0;i=862\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SessionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=865\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsDataType\",\"nodeId\":\"ns=0;i=868\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ServiceCounterDataType\",\"nodeId\":\"ns=0;i=871\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"StatusResult\",\"nodeId\":\"ns=0;i=299\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SubscriptionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=874\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ModelChangeStructureDataType\",\"nodeId\":\"ns=0;i=877\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"SemanticChangeStructureDataType\",\"nodeId\":\"ns=0;i=897\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Range\",\"nodeId\":\"ns=0;i=884\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"EUInformation\",\"nodeId\":\"ns=0;i=887\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ComplexNumberType\",\"nodeId\":\"ns=0;i=12171\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DoubleComplexNumberType\",\"nodeId\":\"ns=0;i=12172\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"AxisInformation\",\"nodeId\":\"ns=0;i=12079\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"XVType\",\"nodeId\":\"ns=0;i=12080\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ProgramDiagnosticDataType\",\"nodeId\":\"ns=0;i=894\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"ProgramDiagnostic2DataType\",\"nodeId\":\"ns=0;i=24033\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"Annotation\",\"nodeId\":\"ns=0;i=891\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"FetchResultDataType\",\"nodeId\":\"ns=2;i=6522\",\"nodeClass\":64,\"children\":[{\"displayName\":\"TransferResultErrorDataType\",\"nodeId\":\"ns=2;i=15888\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"TransferResultDataDataType\",\"nodeId\":\"ns=2;i=15889\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"ParameterResultDataType\",\"nodeId\":\"ns=2;i=6525\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"DataValue\",\"nodeId\":\"ns=0;i=23\",\"nodeClass\":64,\"children\":[]},{\"displayName\":\"DiagnosticInfo\",\"nodeId\":\"ns=0;i=25\",\"nodeClass\":64,\"children\":[]}]},{\"displayName\":\"XML Schema\",\"nodeId\":\"ns=0;i=92\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Opc.Ua\",\"nodeId\":\"ns=0;i=8252\",\"nodeClass\":2,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=0;i=8254\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deprecated\",\"nodeId\":\"ns=0;i=15039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Union\",\"nodeId\":\"ns=0;i=12762\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyValuePair\",\"nodeId\":\"ns=0;i=14829\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AdditionalParametersType\",\"nodeId\":\"ns=0;i=17542\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EphemeralKeyType\",\"nodeId\":\"ns=0;i=17554\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointType\",\"nodeId\":\"ns=0;i=16024\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RationalNumber\",\"nodeId\":\"ns=0;i=18860\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Vector\",\"nodeId\":\"ns=0;i=18863\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DVector\",\"nodeId\":\"ns=0;i=18866\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CartesianCoordinates\",\"nodeId\":\"ns=0;i=18869\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DCartesianCoordinates\",\"nodeId\":\"ns=0;i=19049\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Orientation\",\"nodeId\":\"ns=0;i=19052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DOrientation\",\"nodeId\":\"ns=0;i=19055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Frame\",\"nodeId\":\"ns=0;i=19058\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DFrame\",\"nodeId\":\"ns=0;i=19061\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IdentityMappingRuleType\",\"nodeId\":\"ns=0;i=15730\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrencyUnitType\",\"nodeId\":\"ns=0;i=23522\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrustListDataType\",\"nodeId\":\"ns=0;i=12677\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransactionErrorType\",\"nodeId\":\"ns=0;i=32387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeSchemaHeader\",\"nodeId\":\"ns=0;i=16027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeDescription\",\"nodeId\":\"ns=0;i=14811\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureDescription\",\"nodeId\":\"ns=0;i=15591\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumDescription\",\"nodeId\":\"ns=0;i=15594\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SimpleTypeDescription\",\"nodeId\":\"ns=0;i=15585\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UABinaryFileDataType\",\"nodeId\":\"ns=0;i=15588\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PortableQualifiedName\",\"nodeId\":\"ns=0;i=24123\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PortableNodeId\",\"nodeId\":\"ns=0;i=24126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnsignedRationalNumber\",\"nodeId\":\"ns=0;i=24129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaDataType\",\"nodeId\":\"ns=0;i=14805\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FieldMetaData\",\"nodeId\":\"ns=0;i=14808\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfigurationVersionDataType\",\"nodeId\":\"ns=0;i=14832\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetDataType\",\"nodeId\":\"ns=0;i=16030\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetSourceDataType\",\"nodeId\":\"ns=0;i=16033\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedVariableDataType\",\"nodeId\":\"ns=0;i=14320\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataItemsDataType\",\"nodeId\":\"ns=0;i=16037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedEventsDataType\",\"nodeId\":\"ns=0;i=16040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetCustomSourceDataType\",\"nodeId\":\"ns=0;i=25549\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterDataType\",\"nodeId\":\"ns=0;i=16047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=16050\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=16053\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubGroupDataType\",\"nodeId\":\"ns=0;i=16056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupDataType\",\"nodeId\":\"ns=0;i=21180\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=16062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=16065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConnectionDataType\",\"nodeId\":\"ns=0;i=16068\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConnectionTransportDataType\",\"nodeId\":\"ns=0;i=16071\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkAddressDataType\",\"nodeId\":\"ns=0;i=21183\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkAddressUrlDataType\",\"nodeId\":\"ns=0;i=21186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupDataType\",\"nodeId\":\"ns=0;i=21189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupTransportDataType\",\"nodeId\":\"ns=0;i=16077\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupMessageDataType\",\"nodeId\":\"ns=0;i=16080\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderDataType\",\"nodeId\":\"ns=0;i=16083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=16086\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=16089\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=16092\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TargetVariablesDataType\",\"nodeId\":\"ns=0;i=16095\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FieldTargetDataType\",\"nodeId\":\"ns=0;i=14835\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscribedDataSetMirrorDataType\",\"nodeId\":\"ns=0;i=16098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationDataType\",\"nodeId\":\"ns=0;i=21192\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetRefDataType\",\"nodeId\":\"ns=0;i=23938\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=23941\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityGroupDataType\",\"nodeId\":\"ns=0;i=23944\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubKeyPushTargetDataType\",\"nodeId\":\"ns=0;i=25552\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfiguration2DataType\",\"nodeId\":\"ns=0;i=23947\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=16104\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=16107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=16110\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=16113\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=16116\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=16119\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QosDataType\",\"nodeId\":\"ns=0;i=23950\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransmitQosDataType\",\"nodeId\":\"ns=0;i=23953\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransmitQosPriorityDataType\",\"nodeId\":\"ns=0;i=23956\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveQosDataType\",\"nodeId\":\"ns=0;i=23965\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveQosPriorityDataType\",\"nodeId\":\"ns=0;i=23968\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramConnectionTransportDataType\",\"nodeId\":\"ns=0;i=17473\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramConnectionTransport2DataType\",\"nodeId\":\"ns=0;i=23977\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=21195\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramWriterGroupTransport2DataType\",\"nodeId\":\"ns=0;i=23980\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=23983\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerConnectionTransportDataType\",\"nodeId\":\"ns=0;i=15640\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=16125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerDataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=16144\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=16147\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationRefDataType\",\"nodeId\":\"ns=0;i=25555\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationValueDataType\",\"nodeId\":\"ns=0;i=25558\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AliasNameDataType\",\"nodeId\":\"ns=0;i=23508\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserManagementDataType\",\"nodeId\":\"ns=0;i=24297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityMappingEntryType\",\"nodeId\":\"ns=0;i=25244\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReferenceDescriptionDataType\",\"nodeId\":\"ns=0;i=32671\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReferenceListEntryDataType\",\"nodeId\":\"ns=0;i=32674\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RolePermissionType\",\"nodeId\":\"ns=0;i=16127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeDefinition\",\"nodeId\":\"ns=0;i=18166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureField\",\"nodeId\":\"ns=0;i=18169\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureDefinition\",\"nodeId\":\"ns=0;i=18172\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumDefinition\",\"nodeId\":\"ns=0;i=18175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Argument\",\"nodeId\":\"ns=0;i=8285\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumValueType\",\"nodeId\":\"ns=0;i=8291\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumField\",\"nodeId\":\"ns=0;i=14826\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OptionSet\",\"nodeId\":\"ns=0;i=12759\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TimeZoneDataType\",\"nodeId\":\"ns=0;i=8918\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationDescription\",\"nodeId\":\"ns=0;i=8300\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerOnNetwork\",\"nodeId\":\"ns=0;i=12201\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserTokenPolicy\",\"nodeId\":\"ns=0;i=8297\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointDescription\",\"nodeId\":\"ns=0;i=8303\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisteredServer\",\"nodeId\":\"ns=0;i=8417\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12894\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MdnsDiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12897\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SignedSoftwareCertificate\",\"nodeId\":\"ns=0;i=8333\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserIdentityToken\",\"nodeId\":\"ns=0;i=8306\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AnonymousIdentityToken\",\"nodeId\":\"ns=0;i=8309\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserNameIdentityToken\",\"nodeId\":\"ns=0;i=8312\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"X509IdentityToken\",\"nodeId\":\"ns=0;i=8315\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IssuedIdentityToken\",\"nodeId\":\"ns=0;i=8318\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesItem\",\"nodeId\":\"ns=0;i=8363\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesItem\",\"nodeId\":\"ns=0;i=8366\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesItem\",\"nodeId\":\"ns=0;i=8369\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesItem\",\"nodeId\":\"ns=0;i=8372\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RelativePathElement\",\"nodeId\":\"ns=0;i=12712\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RelativePath\",\"nodeId\":\"ns=0;i=12715\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointConfiguration\",\"nodeId\":\"ns=0;i=8321\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ContentFilterElement\",\"nodeId\":\"ns=0;i=8564\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ContentFilter\",\"nodeId\":\"ns=0;i=8567\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FilterOperand\",\"nodeId\":\"ns=0;i=8570\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ElementOperand\",\"nodeId\":\"ns=0;i=8573\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LiteralOperand\",\"nodeId\":\"ns=0;i=8576\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AttributeOperand\",\"nodeId\":\"ns=0;i=8579\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SimpleAttributeOperand\",\"nodeId\":\"ns=0;i=8582\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryEvent\",\"nodeId\":\"ns=0;i=8639\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoringFilter\",\"nodeId\":\"ns=0;i=8702\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventFilter\",\"nodeId\":\"ns=0;i=8708\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=0;i=8711\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryEventFieldList\",\"nodeId\":\"ns=0;i=8807\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildInfo\",\"nodeId\":\"ns=0;i=8327\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RedundantServerDataType\",\"nodeId\":\"ns=0;i=8843\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrlListDataType\",\"nodeId\":\"ns=0;i=11951\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkGroupDataType\",\"nodeId\":\"ns=0;i=11954\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SamplingIntervalDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8846\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerDiagnosticsSummaryDataType\",\"nodeId\":\"ns=0;i=8849\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerStatusDataType\",\"nodeId\":\"ns=0;i=8852\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8855\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8858\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServiceCounterDataType\",\"nodeId\":\"ns=0;i=8861\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StatusResult\",\"nodeId\":\"ns=0;i=8294\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscriptionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8864\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModelChangeStructureDataType\",\"nodeId\":\"ns=0;i=8867\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SemanticChangeStructureDataType\",\"nodeId\":\"ns=0;i=8870\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Range\",\"nodeId\":\"ns=0;i=8873\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EUInformation\",\"nodeId\":\"ns=0;i=8876\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ComplexNumberType\",\"nodeId\":\"ns=0;i=12175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DoubleComplexNumberType\",\"nodeId\":\"ns=0;i=12178\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AxisInformation\",\"nodeId\":\"ns=0;i=12083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"XVType\",\"nodeId\":\"ns=0;i=12086\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProgramDiagnosticDataType\",\"nodeId\":\"ns=0;i=8882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProgramDiagnostic2DataType\",\"nodeId\":\"ns=0;i=24039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Annotation\",\"nodeId\":\"ns=0;i=8879\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Opc.Ua.Di\",\"nodeId\":\"ns=2;i=6423\",\"nodeClass\":2,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=2;i=6425\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deprecated\",\"nodeId\":\"ns=2;i=15902\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FetchResultDataType\",\"nodeId\":\"ns=2;i=6539\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferResultErrorDataType\",\"nodeId\":\"ns=2;i=15903\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferResultDataDataType\",\"nodeId\":\"ns=2;i=15906\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ParameterResultDataType\",\"nodeId\":\"ns=2;i=6548\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"OPC Binary\",\"nodeId\":\"ns=0;i=93\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Opc.Ua\",\"nodeId\":\"ns=0;i=7617\",\"nodeClass\":2,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=0;i=7619\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deprecated\",\"nodeId\":\"ns=0;i=15037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Union\",\"nodeId\":\"ns=0;i=12770\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyValuePair\",\"nodeId\":\"ns=0;i=14873\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AdditionalParametersType\",\"nodeId\":\"ns=0;i=17538\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EphemeralKeyType\",\"nodeId\":\"ns=0;i=17550\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointType\",\"nodeId\":\"ns=0;i=15734\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RationalNumber\",\"nodeId\":\"ns=0;i=18824\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Vector\",\"nodeId\":\"ns=0;i=18827\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DVector\",\"nodeId\":\"ns=0;i=18830\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CartesianCoordinates\",\"nodeId\":\"ns=0;i=18833\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DCartesianCoordinates\",\"nodeId\":\"ns=0;i=18836\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Orientation\",\"nodeId\":\"ns=0;i=18839\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DOrientation\",\"nodeId\":\"ns=0;i=18842\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Frame\",\"nodeId\":\"ns=0;i=18845\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"3DFrame\",\"nodeId\":\"ns=0;i=18848\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IdentityMappingRuleType\",\"nodeId\":\"ns=0;i=15738\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CurrencyUnitType\",\"nodeId\":\"ns=0;i=23514\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrustListDataType\",\"nodeId\":\"ns=0;i=12681\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransactionErrorType\",\"nodeId\":\"ns=0;i=32383\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeSchemaHeader\",\"nodeId\":\"ns=0;i=15741\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeDescription\",\"nodeId\":\"ns=0;i=14855\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureDescription\",\"nodeId\":\"ns=0;i=15599\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumDescription\",\"nodeId\":\"ns=0;i=15602\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SimpleTypeDescription\",\"nodeId\":\"ns=0;i=15501\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UABinaryFileDataType\",\"nodeId\":\"ns=0;i=15521\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PortableQualifiedName\",\"nodeId\":\"ns=0;i=24111\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PortableNodeId\",\"nodeId\":\"ns=0;i=24114\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UnsignedRationalNumber\",\"nodeId\":\"ns=0;i=24117\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetMetaDataType\",\"nodeId\":\"ns=0;i=14849\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FieldMetaData\",\"nodeId\":\"ns=0;i=14852\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConfigurationVersionDataType\",\"nodeId\":\"ns=0;i=14876\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetDataType\",\"nodeId\":\"ns=0;i=15766\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetSourceDataType\",\"nodeId\":\"ns=0;i=15769\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedVariableDataType\",\"nodeId\":\"ns=0;i=14324\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataItemsDataType\",\"nodeId\":\"ns=0;i=15772\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedEventsDataType\",\"nodeId\":\"ns=0;i=15775\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PublishedDataSetCustomSourceDataType\",\"nodeId\":\"ns=0;i=25533\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterDataType\",\"nodeId\":\"ns=0;i=15778\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=15781\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15784\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubGroupDataType\",\"nodeId\":\"ns=0;i=15787\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupDataType\",\"nodeId\":\"ns=0;i=21156\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=15793\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"WriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15854\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConnectionDataType\",\"nodeId\":\"ns=0;i=15857\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConnectionTransportDataType\",\"nodeId\":\"ns=0;i=15860\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkAddressDataType\",\"nodeId\":\"ns=0;i=21159\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkAddressUrlDataType\",\"nodeId\":\"ns=0;i=21162\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupDataType\",\"nodeId\":\"ns=0;i=21165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupTransportDataType\",\"nodeId\":\"ns=0;i=15866\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReaderGroupMessageDataType\",\"nodeId\":\"ns=0;i=15869\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderDataType\",\"nodeId\":\"ns=0;i=15872\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=15877\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15880\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=15883\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TargetVariablesDataType\",\"nodeId\":\"ns=0;i=15886\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FieldTargetDataType\",\"nodeId\":\"ns=0;i=21002\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscribedDataSetMirrorDataType\",\"nodeId\":\"ns=0;i=15889\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationDataType\",\"nodeId\":\"ns=0;i=21168\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetRefDataType\",\"nodeId\":\"ns=0;i=23870\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StandaloneSubscribedDataSetDataType\",\"nodeId\":\"ns=0;i=23873\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityGroupDataType\",\"nodeId\":\"ns=0;i=23876\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubKeyPushTargetDataType\",\"nodeId\":\"ns=0;i=25536\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfiguration2DataType\",\"nodeId\":\"ns=0;i=23879\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15895\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15898\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UadpDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15919\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonWriterGroupMessageDataType\",\"nodeId\":\"ns=0;i=15922\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonDataSetWriterMessageDataType\",\"nodeId\":\"ns=0;i=15925\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"JsonDataSetReaderMessageDataType\",\"nodeId\":\"ns=0;i=15931\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"QosDataType\",\"nodeId\":\"ns=0;i=23882\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransmitQosDataType\",\"nodeId\":\"ns=0;i=23885\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransmitQosPriorityDataType\",\"nodeId\":\"ns=0;i=23888\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveQosDataType\",\"nodeId\":\"ns=0;i=23897\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveQosPriorityDataType\",\"nodeId\":\"ns=0;i=23900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramConnectionTransportDataType\",\"nodeId\":\"ns=0;i=17469\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramConnectionTransport2DataType\",\"nodeId\":\"ns=0;i=23909\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=21171\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramWriterGroupTransport2DataType\",\"nodeId\":\"ns=0;i=23912\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DatagramDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=23915\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerConnectionTransportDataType\",\"nodeId\":\"ns=0;i=15524\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerWriterGroupTransportDataType\",\"nodeId\":\"ns=0;i=15940\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerDataSetWriterTransportDataType\",\"nodeId\":\"ns=0;i=15943\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BrokerDataSetReaderTransportDataType\",\"nodeId\":\"ns=0;i=15946\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationRefDataType\",\"nodeId\":\"ns=0;i=25539\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubConfigurationValueDataType\",\"nodeId\":\"ns=0;i=25542\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AliasNameDataType\",\"nodeId\":\"ns=0;i=23502\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserManagementDataType\",\"nodeId\":\"ns=0;i=24293\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityMappingEntryType\",\"nodeId\":\"ns=0;i=25240\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReferenceDescriptionDataType\",\"nodeId\":\"ns=0;i=32663\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReferenceListEntryDataType\",\"nodeId\":\"ns=0;i=32666\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RolePermissionType\",\"nodeId\":\"ns=0;i=16131\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DataTypeDefinition\",\"nodeId\":\"ns=0;i=18178\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureField\",\"nodeId\":\"ns=0;i=18181\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StructureDefinition\",\"nodeId\":\"ns=0;i=18184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumDefinition\",\"nodeId\":\"ns=0;i=18187\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Argument\",\"nodeId\":\"ns=0;i=7650\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumValueType\",\"nodeId\":\"ns=0;i=7656\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnumField\",\"nodeId\":\"ns=0;i=14870\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OptionSet\",\"nodeId\":\"ns=0;i=12767\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TimeZoneDataType\",\"nodeId\":\"ns=0;i=8914\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ApplicationDescription\",\"nodeId\":\"ns=0;i=7665\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerOnNetwork\",\"nodeId\":\"ns=0;i=12213\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserTokenPolicy\",\"nodeId\":\"ns=0;i=7662\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointDescription\",\"nodeId\":\"ns=0;i=7668\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RegisteredServer\",\"nodeId\":\"ns=0;i=7782\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12902\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MdnsDiscoveryConfiguration\",\"nodeId\":\"ns=0;i=12905\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SignedSoftwareCertificate\",\"nodeId\":\"ns=0;i=7698\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserIdentityToken\",\"nodeId\":\"ns=0;i=7671\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AnonymousIdentityToken\",\"nodeId\":\"ns=0;i=7674\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserNameIdentityToken\",\"nodeId\":\"ns=0;i=7677\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"X509IdentityToken\",\"nodeId\":\"ns=0;i=7680\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IssuedIdentityToken\",\"nodeId\":\"ns=0;i=7683\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddNodesItem\",\"nodeId\":\"ns=0;i=7728\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AddReferencesItem\",\"nodeId\":\"ns=0;i=7731\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteNodesItem\",\"nodeId\":\"ns=0;i=7734\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeleteReferencesItem\",\"nodeId\":\"ns=0;i=7737\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RelativePathElement\",\"nodeId\":\"ns=0;i=12718\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RelativePath\",\"nodeId\":\"ns=0;i=12721\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointConfiguration\",\"nodeId\":\"ns=0;i=7686\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ContentFilterElement\",\"nodeId\":\"ns=0;i=7929\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ContentFilter\",\"nodeId\":\"ns=0;i=7932\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FilterOperand\",\"nodeId\":\"ns=0;i=7935\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ElementOperand\",\"nodeId\":\"ns=0;i=7938\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LiteralOperand\",\"nodeId\":\"ns=0;i=7941\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AttributeOperand\",\"nodeId\":\"ns=0;i=7944\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SimpleAttributeOperand\",\"nodeId\":\"ns=0;i=7947\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryEvent\",\"nodeId\":\"ns=0;i=8004\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MonitoringFilter\",\"nodeId\":\"ns=0;i=8067\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventFilter\",\"nodeId\":\"ns=0;i=8073\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AggregateConfiguration\",\"nodeId\":\"ns=0;i=8076\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HistoryEventFieldList\",\"nodeId\":\"ns=0;i=8172\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BuildInfo\",\"nodeId\":\"ns=0;i=7692\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RedundantServerDataType\",\"nodeId\":\"ns=0;i=8208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndpointUrlListDataType\",\"nodeId\":\"ns=0;i=11959\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NetworkGroupDataType\",\"nodeId\":\"ns=0;i=11962\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SamplingIntervalDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8211\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerDiagnosticsSummaryDataType\",\"nodeId\":\"ns=0;i=8214\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerStatusDataType\",\"nodeId\":\"ns=0;i=8217\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8220\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SessionSecurityDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServiceCounterDataType\",\"nodeId\":\"ns=0;i=8226\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StatusResult\",\"nodeId\":\"ns=0;i=7659\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SubscriptionDiagnosticsDataType\",\"nodeId\":\"ns=0;i=8229\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ModelChangeStructureDataType\",\"nodeId\":\"ns=0;i=8232\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SemanticChangeStructureDataType\",\"nodeId\":\"ns=0;i=8235\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Range\",\"nodeId\":\"ns=0;i=8238\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EUInformation\",\"nodeId\":\"ns=0;i=8241\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ComplexNumberType\",\"nodeId\":\"ns=0;i=12183\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DoubleComplexNumberType\",\"nodeId\":\"ns=0;i=12186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AxisInformation\",\"nodeId\":\"ns=0;i=12091\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"XVType\",\"nodeId\":\"ns=0;i=12094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProgramDiagnosticDataType\",\"nodeId\":\"ns=0;i=8247\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProgramDiagnostic2DataType\",\"nodeId\":\"ns=0;i=24035\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Annotation\",\"nodeId\":\"ns=0;i=8244\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Opc.Ua.Di\",\"nodeId\":\"ns=2;i=6435\",\"nodeClass\":2,\"children\":[{\"displayName\":\"NamespaceUri\",\"nodeId\":\"ns=2;i=6437\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Deprecated\",\"nodeId\":\"ns=2;i=15893\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FetchResultDataType\",\"nodeId\":\"ns=2;i=6555\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferResultErrorDataType\",\"nodeId\":\"ns=2;i=15894\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransferResultDataDataType\",\"nodeId\":\"ns=2;i=15897\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ParameterResultDataType\",\"nodeId\":\"ns=2;i=6564\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"ReferenceTypes\",\"nodeId\":\"ns=0;i=91\",\"nodeClass\":1,\"children\":[{\"displayName\":\"References\",\"nodeId\":\"ns=0;i=31\",\"nodeClass\":32,\"children\":[{\"displayName\":\"NonHierarchicalReferences\",\"nodeId\":\"ns=0;i=32\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasModellingRule\",\"nodeId\":\"ns=0;i=37\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasEncoding\",\"nodeId\":\"ns=0;i=38\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasDescription\",\"nodeId\":\"ns=0;i=39\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasTypeDefinition\",\"nodeId\":\"ns=0;i=40\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"GeneratesEvent\",\"nodeId\":\"ns=0;i=41\",\"nodeClass\":32,\"children\":[{\"displayName\":\"AlwaysGeneratesEvent\",\"nodeId\":\"ns=0;i=3065\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"FromState\",\"nodeId\":\"ns=0;i=51\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"ToState\",\"nodeId\":\"ns=0;i=52\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasCause\",\"nodeId\":\"ns=0;i=53\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasEffect\",\"nodeId\":\"ns=0;i=54\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasEffectDisable\",\"nodeId\":\"ns=0;i=17276\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasEffectEnable\",\"nodeId\":\"ns=0;i=17983\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasEffectSuppressed\",\"nodeId\":\"ns=0;i=17984\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasEffectUnsuppressed\",\"nodeId\":\"ns=0;i=17985\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"HasSubStateMachine\",\"nodeId\":\"ns=0;i=117\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"AssociatedWith\",\"nodeId\":\"ns=0;i=24137\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"IsDeprecated\",\"nodeId\":\"ns=0;i=23562\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasDictionaryEntry\",\"nodeId\":\"ns=0;i=17597\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasInterface\",\"nodeId\":\"ns=0;i=17603\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasTrueSubState\",\"nodeId\":\"ns=0;i=9004\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasFalseSubState\",\"nodeId\":\"ns=0;i=9005\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasCondition\",\"nodeId\":\"ns=0;i=9006\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"AliasFor\",\"nodeId\":\"ns=0;i=23469\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"UsesPriorityMappingTable\",\"nodeId\":\"ns=0;i=25237\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"IsExecutableOn\",\"nodeId\":\"ns=0;i=25253\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"Utilizes\",\"nodeId\":\"ns=0;i=25255\",\"nodeClass\":32,\"children\":[{\"displayName\":\"IsExecutingOn\",\"nodeId\":\"ns=0;i=25265\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"IsHostedBy\",\"nodeId\":\"ns=0;i=25261\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"IsPhysicallyConnectedTo\",\"nodeId\":\"ns=0;i=25257\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"RepresentsSameEntityAs\",\"nodeId\":\"ns=0;i=25258\",\"nodeClass\":32,\"children\":[{\"displayName\":\"RepresentsSameHardwareAs\",\"nodeId\":\"ns=0;i=25259\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"RepresentsSameFunctionalityAs\",\"nodeId\":\"ns=0;i=25260\",\"nodeClass\":32,\"children\":[]}]}]},{\"displayName\":\"HierarchicalReferences\",\"nodeId\":\"ns=0;i=33\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasChild\",\"nodeId\":\"ns=0;i=34\",\"nodeClass\":32,\"children\":[{\"displayName\":\"Aggregates\",\"nodeId\":\"ns=0;i=44\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasProperty\",\"nodeId\":\"ns=0;i=46\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasComponent\",\"nodeId\":\"ns=0;i=47\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasOrderedComponent\",\"nodeId\":\"ns=0;i=49\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasStructuredComponent\",\"nodeId\":\"ns=0;i=24136\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasArgumentDescription\",\"nodeId\":\"ns=0;i=129\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasOptionalInputArgumentDescription\",\"nodeId\":\"ns=0;i=131\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"HasGuard\",\"nodeId\":\"ns=0;i=15112\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasAddIn\",\"nodeId\":\"ns=0;i=17604\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasAlarmSuppressionGroup\",\"nodeId\":\"ns=0;i=16361\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasPubSubConnection\",\"nodeId\":\"ns=0;i=14476\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasDataSetWriter\",\"nodeId\":\"ns=0;i=15296\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasWriterGroup\",\"nodeId\":\"ns=0;i=18804\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasDataSetReader\",\"nodeId\":\"ns=0;i=15297\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasReaderGroup\",\"nodeId\":\"ns=0;i=18805\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasPhysicalComponent\",\"nodeId\":\"ns=0;i=25262\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasContainedComponent\",\"nodeId\":\"ns=0;i=25263\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasAttachedComponent\",\"nodeId\":\"ns=0;i=25264\",\"nodeClass\":32,\"children\":[]}]}]},{\"displayName\":\"HasHistoricalConfiguration\",\"nodeId\":\"ns=0;i=56\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"IsOnline\",\"nodeId\":\"ns=2;i=6031\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"HasSubtype\",\"nodeId\":\"ns=0;i=45\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasReferenceDescription\",\"nodeId\":\"ns=0;i=32679\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"Organizes\",\"nodeId\":\"ns=0;i=35\",\"nodeClass\":32,\"children\":[{\"displayName\":\"AlarmGroupMember\",\"nodeId\":\"ns=0;i=16362\",\"nodeClass\":32,\"children\":[{\"displayName\":\"AlarmSuppressionGroupMember\",\"nodeId\":\"ns=0;i=32059\",\"nodeClass\":32,\"children\":[]}]}]},{\"displayName\":\"HasEventSource\",\"nodeId\":\"ns=0;i=36\",\"nodeClass\":32,\"children\":[{\"displayName\":\"HasNotifier\",\"nodeId\":\"ns=0;i=48\",\"nodeClass\":32,\"children\":[]}]},{\"displayName\":\"HasPushedSecurityGroup\",\"nodeId\":\"ns=0;i=25345\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"DataSetToWriter\",\"nodeId\":\"ns=0;i=14936\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"HasLowerLayerInterface\",\"nodeId\":\"ns=0;i=25238\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"Controls\",\"nodeId\":\"ns=0;i=25254\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"Requires\",\"nodeId\":\"ns=0;i=25256\",\"nodeClass\":32,\"children\":[]},{\"displayName\":\"ConnectsTo\",\"nodeId\":\"ns=2;i=6030\",\"nodeClass\":32,\"children\":[{\"displayName\":\"ConnectsToParent\",\"nodeId\":\"ns=2;i=6467\",\"nodeClass\":32,\"children\":[]}]}]}]}]},{\"displayName\":\"EventTypes\",\"nodeId\":\"ns=0;i=3048\",\"nodeClass\":1,\"children\":[{\"displayName\":\"BaseEventType\",\"nodeId\":\"ns=0;i=2041\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EventId\",\"nodeId\":\"ns=0;i=2042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EventType\",\"nodeId\":\"ns=0;i=2043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceNode\",\"nodeId\":\"ns=0;i=2044\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceName\",\"nodeId\":\"ns=0;i=2045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Time\",\"nodeId\":\"ns=0;i=2046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReceiveTime\",\"nodeId\":\"ns=0;i=2047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LocalTime\",\"nodeId\":\"ns=0;i=3190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Message\",\"nodeId\":\"ns=0;i=2050\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Severity\",\"nodeId\":\"ns=0;i=2051\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=31771\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=31772\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionSubClassId\",\"nodeId\":\"ns=0;i=31773\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionSubClassName\",\"nodeId\":\"ns=0;i=31774\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditEventType\",\"nodeId\":\"ns=0;i=2052\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActionTimeStamp\",\"nodeId\":\"ns=0;i=2053\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Status\",\"nodeId\":\"ns=0;i=2054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ServerId\",\"nodeId\":\"ns=0;i=2055\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientAuditEntryId\",\"nodeId\":\"ns=0;i=2056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=2057\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditSecurityEventType\",\"nodeId\":\"ns=0;i=2058\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StatusCodeId\",\"nodeId\":\"ns=0;i=17615\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditChannelEventType\",\"nodeId\":\"ns=0;i=2059\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=2745\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditOpenSecureChannelEventType\",\"nodeId\":\"ns=0;i=2060\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=2061\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificateThumbprint\",\"nodeId\":\"ns=0;i=2746\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestType\",\"nodeId\":\"ns=0;i=2062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityPolicyUri\",\"nodeId\":\"ns=0;i=2063\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecurityMode\",\"nodeId\":\"ns=0;i=2065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RequestedLifetime\",\"nodeId\":\"ns=0;i=2066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateErrorEventId\",\"nodeId\":\"ns=0;i=24135\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditSessionEventType\",\"nodeId\":\"ns=0;i=2069\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SessionId\",\"nodeId\":\"ns=0;i=2070\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditCreateSessionEventType\",\"nodeId\":\"ns=0;i=2071\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=2072\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificate\",\"nodeId\":\"ns=0;i=2073\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ClientCertificateThumbprint\",\"nodeId\":\"ns=0;i=2747\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisedSessionTimeout\",\"nodeId\":\"ns=0;i=2074\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditUrlMismatchEventType\",\"nodeId\":\"ns=0;i=2748\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EndpointUrl\",\"nodeId\":\"ns=0;i=2749\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditActivateSessionEventType\",\"nodeId\":\"ns=0;i=2075\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ClientSoftwareCertificates\",\"nodeId\":\"ns=0;i=2076\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserIdentityToken\",\"nodeId\":\"ns=0;i=2077\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SecureChannelId\",\"nodeId\":\"ns=0;i=11485\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditCancelEventType\",\"nodeId\":\"ns=0;i=2078\",\"nodeClass\":8,\"children\":[{\"displayName\":\"RequestHandle\",\"nodeId\":\"ns=0;i=2079\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditCertificateEventType\",\"nodeId\":\"ns=0;i=2080\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Certificate\",\"nodeId\":\"ns=0;i=2081\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditCertificateDataMismatchEventType\",\"nodeId\":\"ns=0;i=2082\",\"nodeClass\":8,\"children\":[{\"displayName\":\"InvalidHostname\",\"nodeId\":\"ns=0;i=2083\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InvalidUri\",\"nodeId\":\"ns=0;i=2084\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditCertificateExpiredEventType\",\"nodeId\":\"ns=0;i=2085\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateInvalidEventType\",\"nodeId\":\"ns=0;i=2086\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateUntrustedEventType\",\"nodeId\":\"ns=0;i=2087\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateRevokedEventType\",\"nodeId\":\"ns=0;i=2088\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditCertificateMismatchEventType\",\"nodeId\":\"ns=0;i=2089\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"AuditNodeManagementEventType\",\"nodeId\":\"ns=0;i=2090\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditAddNodesEventType\",\"nodeId\":\"ns=0;i=2091\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NodesToAdd\",\"nodeId\":\"ns=0;i=2092\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditDeleteNodesEventType\",\"nodeId\":\"ns=0;i=2093\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NodesToDelete\",\"nodeId\":\"ns=0;i=2094\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditAddReferencesEventType\",\"nodeId\":\"ns=0;i=2095\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReferencesToAdd\",\"nodeId\":\"ns=0;i=2096\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditDeleteReferencesEventType\",\"nodeId\":\"ns=0;i=2097\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReferencesToDelete\",\"nodeId\":\"ns=0;i=2098\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AuditUpdateEventType\",\"nodeId\":\"ns=0;i=2099\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditWriteUpdateEventType\",\"nodeId\":\"ns=0;i=2100\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AttributeId\",\"nodeId\":\"ns=0;i=2750\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IndexRange\",\"nodeId\":\"ns=0;i=2101\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValue\",\"nodeId\":\"ns=0;i=2102\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValue\",\"nodeId\":\"ns=0;i=2103\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryUpdateEventType\",\"nodeId\":\"ns=0;i=2104\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ParameterDataTypeId\",\"nodeId\":\"ns=0;i=2751\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditHistoryEventUpdateEventType\",\"nodeId\":\"ns=0;i=2999\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3025\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=3028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Filter\",\"nodeId\":\"ns=0;i=3003\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=3029\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3030\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryValueUpdateEventType\",\"nodeId\":\"ns=0;i=3006\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=3031\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=3032\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3033\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryAnnotationUpdateEventType\",\"nodeId\":\"ns=0;i=19095\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PerformInsertReplace\",\"nodeId\":\"ns=0;i=19293\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewValues\",\"nodeId\":\"ns=0;i=19294\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=19295\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryDeleteEventType\",\"nodeId\":\"ns=0;i=3012\",\"nodeClass\":8,\"children\":[{\"displayName\":\"UpdatedNode\",\"nodeId\":\"ns=0;i=3027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditHistoryRawModifyDeleteEventType\",\"nodeId\":\"ns=0;i=3014\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IsDeleteModified\",\"nodeId\":\"ns=0;i=3015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StartTime\",\"nodeId\":\"ns=0;i=3016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EndTime\",\"nodeId\":\"ns=0;i=3017\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3034\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryAtTimeDeleteEventType\",\"nodeId\":\"ns=0;i=3019\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReqTimes\",\"nodeId\":\"ns=0;i=3020\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3021\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditHistoryEventDeleteEventType\",\"nodeId\":\"ns=0;i=3022\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EventIds\",\"nodeId\":\"ns=0;i=3023\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OldValues\",\"nodeId\":\"ns=0;i=3024\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"AuditUpdateMethodEventType\",\"nodeId\":\"ns=0;i=2127\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MethodId\",\"nodeId\":\"ns=0;i=2128\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=2129\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditUpdateStateEventType\",\"nodeId\":\"ns=0;i=2315\",\"nodeClass\":8,\"children\":[{\"displayName\":\"OldStateId\",\"nodeId\":\"ns=0;i=2777\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"NewStateId\",\"nodeId\":\"ns=0;i=2778\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditProgramTransitionEventType\",\"nodeId\":\"ns=0;i=11856\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TransitionNumber\",\"nodeId\":\"ns=0;i=11875\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramTransitionAuditEventType\",\"nodeId\":\"ns=0;i=3806\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Transition\",\"nodeId\":\"ns=0;i=3825\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3826\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"RoleMappingRuleChangedAuditEventType\",\"nodeId\":\"ns=0;i=17641\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionEventType\",\"nodeId\":\"ns=0;i=2790\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AuditConditionEnableEventType\",\"nodeId\":\"ns=0;i=2803\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionCommentEventType\",\"nodeId\":\"ns=0;i=2829\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17222\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11851\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionRespondEventType\",\"nodeId\":\"ns=0;i=8927\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SelectedResponse\",\"nodeId\":\"ns=0;i=11852\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionAcknowledgeEventType\",\"nodeId\":\"ns=0;i=8944\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17223\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11853\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionConfirmEventType\",\"nodeId\":\"ns=0;i=8961\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionEventId\",\"nodeId\":\"ns=0;i=17224\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=11854\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionShelvingEventType\",\"nodeId\":\"ns=0;i=11093\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ShelvingTime\",\"nodeId\":\"ns=0;i=11855\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AuditConditionSuppressionEventType\",\"nodeId\":\"ns=0;i=17225\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionSilenceEventType\",\"nodeId\":\"ns=0;i=17242\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionResetEventType\",\"nodeId\":\"ns=0;i=15013\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"AuditConditionOutOfServiceEventType\",\"nodeId\":\"ns=0;i=17259\",\"nodeClass\":8,\"children\":[]}]},{\"displayName\":\"TrustListUpdateRequestedAuditEventType\",\"nodeId\":\"ns=0;i=32260\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"CertificateUpdateRequestedAuditEventType\",\"nodeId\":\"ns=0;i=32306\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"KeyCredentialAuditEventType\",\"nodeId\":\"ns=0;i=18011\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=18028\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"KeyCredentialUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=18029\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"KeyCredentialDeletedAuditEventType\",\"nodeId\":\"ns=0;i=18047\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ResourceUri\",\"nodeId\":\"ns=0;i=18064\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"AuditClientEventType\",\"nodeId\":\"ns=0;i=23606\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ServerUri\",\"nodeId\":\"ns=0;i=23908\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AuditClientUpdateMethodResultEventType\",\"nodeId\":\"ns=0;i=23926\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ObjectId\",\"nodeId\":\"ns=0;i=23994\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MethodId\",\"nodeId\":\"ns=0;i=23995\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StatusCodeId\",\"nodeId\":\"ns=0;i=23998\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=23999\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25684\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TrustListUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=12561\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TrustListId\",\"nodeId\":\"ns=0;i=32281\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"CertificateUpdatedAuditEventType\",\"nodeId\":\"ns=0;i=12620\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CertificateGroup\",\"nodeId\":\"ns=0;i=13735\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=13736\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SystemEventType\",\"nodeId\":\"ns=0;i=2130\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceFailureEventType\",\"nodeId\":\"ns=0;i=2131\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"SystemStatusChangeEventType\",\"nodeId\":\"ns=0;i=11446\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SystemState\",\"nodeId\":\"ns=0;i=11696\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RefreshStartEventType\",\"nodeId\":\"ns=0;i=2787\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"RefreshEndEventType\",\"nodeId\":\"ns=0;i=2788\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"RefreshRequiredEventType\",\"nodeId\":\"ns=0;i=2789\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"PubSubStatusEventType\",\"nodeId\":\"ns=0;i=15535\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConnectionId\",\"nodeId\":\"ns=0;i=15545\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"GroupId\",\"nodeId\":\"ns=0;i=15546\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=15547\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PubSubTransportLimitsExceedEventType\",\"nodeId\":\"ns=0;i=15548\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Actual\",\"nodeId\":\"ns=0;i=15561\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Maximum\",\"nodeId\":\"ns=0;i=15562\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PubSubCommunicationFailureEventType\",\"nodeId\":\"ns=0;i=15563\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Error\",\"nodeId\":\"ns=0;i=15576\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"BaseModelChangeEventType\",\"nodeId\":\"ns=0;i=2132\",\"nodeClass\":8,\"children\":[{\"displayName\":\"GeneralModelChangeEventType\",\"nodeId\":\"ns=0;i=2133\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Changes\",\"nodeId\":\"ns=0;i=2134\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"SemanticChangeEventType\",\"nodeId\":\"ns=0;i=2738\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Changes\",\"nodeId\":\"ns=0;i=2739\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"EventQueueOverflowEventType\",\"nodeId\":\"ns=0;i=3035\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ProgressEventType\",\"nodeId\":\"ns=0;i=11436\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Context\",\"nodeId\":\"ns=0;i=12502\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Progress\",\"nodeId\":\"ns=0;i=12503\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TransitionEventType\",\"nodeId\":\"ns=0;i=2311\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Transition\",\"nodeId\":\"ns=0;i=2774\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3754\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"FromState\",\"nodeId\":\"ns=0;i=2775\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3746\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ToState\",\"nodeId\":\"ns=0;i=2776\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=3750\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ProgramTransitionEventType\",\"nodeId\":\"ns=0;i=2378\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IntermediateResult\",\"nodeId\":\"ns=0;i=2379\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ConditionType\",\"nodeId\":\"ns=0;i=2782\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ConditionClassId\",\"nodeId\":\"ns=0;i=11112\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionClassName\",\"nodeId\":\"ns=0;i=11113\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ConditionName\",\"nodeId\":\"ns=0;i=9009\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BranchId\",\"nodeId\":\"ns=0;i=9010\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Retain\",\"nodeId\":\"ns=0;i=3874\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SupportsFilteredRetain\",\"nodeId\":\"ns=0;i=32060\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9011\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9012\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveDisplayName\",\"nodeId\":\"ns=0;i=9015\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9016\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=9017\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9018\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9019\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Quality\",\"nodeId\":\"ns=0;i=9020\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9021\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastSeverity\",\"nodeId\":\"ns=0;i=9022\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9023\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Comment\",\"nodeId\":\"ns=0;i=9024\",\"nodeClass\":2,\"children\":[{\"displayName\":\"SourceTimestamp\",\"nodeId\":\"ns=0;i=9025\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ClientUserId\",\"nodeId\":\"ns=0;i=9026\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Disable\",\"nodeId\":\"ns=0;i=9028\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Enable\",\"nodeId\":\"ns=0;i=9027\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"AddComment\",\"nodeId\":\"ns=0;i=9029\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9030\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConditionRefresh\",\"nodeId\":\"ns=0;i=3875\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=3876\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConditionRefresh2\",\"nodeId\":\"ns=0;i=12912\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=12913\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DialogConditionType\",\"nodeId\":\"ns=0;i=2830\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9035\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9036\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DialogState\",\"nodeId\":\"ns=0;i=9055\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9056\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9060\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9062\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9063\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Prompt\",\"nodeId\":\"ns=0;i=2831\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ResponseOptionSet\",\"nodeId\":\"ns=0;i=9064\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DefaultResponse\",\"nodeId\":\"ns=0;i=9065\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OkResponse\",\"nodeId\":\"ns=0;i=9066\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CancelResponse\",\"nodeId\":\"ns=0;i=9067\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastResponse\",\"nodeId\":\"ns=0;i=9068\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Respond\",\"nodeId\":\"ns=0;i=9069\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9070\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Respond2\",\"nodeId\":\"ns=0;i=24312\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24313\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"AcknowledgeableConditionType\",\"nodeId\":\"ns=0;i=2881\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9073\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9074\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AckedState\",\"nodeId\":\"ns=0;i=9093\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9094\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9098\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9100\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9101\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ConfirmedState\",\"nodeId\":\"ns=0;i=9102\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9103\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9107\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9109\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9110\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Acknowledge\",\"nodeId\":\"ns=0;i=9111\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9112\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Confirm\",\"nodeId\":\"ns=0;i=9113\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9114\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"AlarmConditionType\",\"nodeId\":\"ns=0;i=2915\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EnabledState\",\"nodeId\":\"ns=0;i=9118\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9119\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9160\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9161\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveDisplayName\",\"nodeId\":\"ns=0;i=9164\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"EffectiveTransitionTime\",\"nodeId\":\"ns=0;i=9166\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9167\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9168\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"InputNode\",\"nodeId\":\"ns=0;i=11120\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SuppressedState\",\"nodeId\":\"ns=0;i=9169\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=9176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=9177\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OutOfServiceState\",\"nodeId\":\"ns=0;i=16371\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16372\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=16376\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=16378\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=16379\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ShelvingState\",\"nodeId\":\"ns=0;i=9178\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=9179\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9180\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=9184\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9188\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"UnshelveTime\",\"nodeId\":\"ns=0;i=9189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TimedShelve\",\"nodeId\":\"ns=0;i=9213\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=9214\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Unshelve\",\"nodeId\":\"ns=0;i=9211\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"OneShotShelve\",\"nodeId\":\"ns=0;i=9212\",\"nodeClass\":4,\"children\":[]}]},{\"displayName\":\"SuppressedOrShelved\",\"nodeId\":\"ns=0;i=9215\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxTimeShelved\",\"nodeId\":\"ns=0;i=9216\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AudibleEnabled\",\"nodeId\":\"ns=0;i=16389\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AudibleSound\",\"nodeId\":\"ns=0;i=16390\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SilenceState\",\"nodeId\":\"ns=0;i=16380\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=16381\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=16385\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=16387\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=16388\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"OnDelay\",\"nodeId\":\"ns=0;i=16395\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OffDelay\",\"nodeId\":\"ns=0;i=16396\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FirstInGroupFlag\",\"nodeId\":\"ns=0;i=16397\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FirstInGroup\",\"nodeId\":\"ns=0;i=16398\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"LatchedState\",\"nodeId\":\"ns=0;i=18190\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=18191\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=18195\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=18197\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=18198\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"<AlarmGroup>\",\"nodeId\":\"ns=0;i=16399\",\"nodeClass\":1,\"children\":[]},{\"displayName\":\"ReAlarmTime\",\"nodeId\":\"ns=0;i=16400\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ReAlarmRepeatCount\",\"nodeId\":\"ns=0;i=16401\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Silence\",\"nodeId\":\"ns=0;i=16402\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Suppress\",\"nodeId\":\"ns=0;i=16403\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Suppress2\",\"nodeId\":\"ns=0;i=24316\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24317\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Unsuppress\",\"nodeId\":\"ns=0;i=17868\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Unsuppress2\",\"nodeId\":\"ns=0;i=24318\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24319\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"RemoveFromService\",\"nodeId\":\"ns=0;i=17869\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"RemoveFromService2\",\"nodeId\":\"ns=0;i=24320\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24321\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"PlaceInService\",\"nodeId\":\"ns=0;i=17870\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"PlaceInService2\",\"nodeId\":\"ns=0;i=24322\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24323\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Reset\",\"nodeId\":\"ns=0;i=18199\",\"nodeClass\":4,\"children\":[]},{\"displayName\":\"Reset2\",\"nodeId\":\"ns=0;i=24324\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=0;i=24325\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetGroupMemberships\",\"nodeId\":\"ns=0;i=24744\",\"nodeClass\":4,\"children\":[{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=0;i=25154\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LimitAlarmType\",\"nodeId\":\"ns=0;i=2955\",\"nodeClass\":8,\"children\":[{\"displayName\":\"HighHighLimit\",\"nodeId\":\"ns=0;i=11124\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighLimit\",\"nodeId\":\"ns=0;i=11125\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLimit\",\"nodeId\":\"ns=0;i=11126\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLowLimit\",\"nodeId\":\"ns=0;i=11127\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseHighHighLimit\",\"nodeId\":\"ns=0;i=16572\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseHighLimit\",\"nodeId\":\"ns=0;i=16573\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseLowLimit\",\"nodeId\":\"ns=0;i=16574\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseLowLowLimit\",\"nodeId\":\"ns=0;i=16575\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityHighHigh\",\"nodeId\":\"ns=0;i=24770\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityHigh\",\"nodeId\":\"ns=0;i=24771\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityLow\",\"nodeId\":\"ns=0;i=24772\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SeverityLowLow\",\"nodeId\":\"ns=0;i=24773\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighHighDeadband\",\"nodeId\":\"ns=0;i=24774\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HighDeadband\",\"nodeId\":\"ns=0;i=24775\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowDeadband\",\"nodeId\":\"ns=0;i=24776\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LowLowDeadband\",\"nodeId\":\"ns=0;i=24777\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExclusiveLimitAlarmType\",\"nodeId\":\"ns=0;i=9341\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9398\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9399\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LimitState\",\"nodeId\":\"ns=0;i=9455\",\"nodeClass\":1,\"children\":[{\"displayName\":\"CurrentState\",\"nodeId\":\"ns=0;i=9456\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9457\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LastTransition\",\"nodeId\":\"ns=0;i=9461\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9462\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=9465\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"ExclusiveLevelAlarmType\",\"nodeId\":\"ns=0;i=9482\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"ExclusiveDeviationAlarmType\",\"nodeId\":\"ns=0;i=9764\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SetpointNode\",\"nodeId\":\"ns=0;i=9905\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseSetpointNode\",\"nodeId\":\"ns=0;i=16817\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ExclusiveRateOfChangeAlarmType\",\"nodeId\":\"ns=0;i=9623\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=16899\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"NonExclusiveLimitAlarmType\",\"nodeId\":\"ns=0;i=9906\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ActiveState\",\"nodeId\":\"ns=0;i=9963\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=9964\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighHighState\",\"nodeId\":\"ns=0;i=10020\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10021\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10025\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10027\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10028\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"HighState\",\"nodeId\":\"ns=0;i=10029\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10030\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10034\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10036\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10037\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowState\",\"nodeId\":\"ns=0;i=10038\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10046\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"LowLowState\",\"nodeId\":\"ns=0;i=10047\",\"nodeClass\":2,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=10048\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TransitionTime\",\"nodeId\":\"ns=0;i=10052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"TrueState\",\"nodeId\":\"ns=0;i=10054\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FalseState\",\"nodeId\":\"ns=0;i=10055\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NonExclusiveLevelAlarmType\",\"nodeId\":\"ns=0;i=10060\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"NonExclusiveDeviationAlarmType\",\"nodeId\":\"ns=0;i=10368\",\"nodeClass\":8,\"children\":[{\"displayName\":\"SetpointNode\",\"nodeId\":\"ns=0;i=10522\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"BaseSetpointNode\",\"nodeId\":\"ns=0;i=16776\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"NonExclusiveRateOfChangeAlarmType\",\"nodeId\":\"ns=0;i=10214\",\"nodeClass\":8,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=16858\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"DiscreteAlarmType\",\"nodeId\":\"ns=0;i=10523\",\"nodeClass\":8,\"children\":[{\"displayName\":\"OffNormalAlarmType\",\"nodeId\":\"ns=0;i=10637\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NormalState\",\"nodeId\":\"ns=0;i=11158\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SystemOffNormalAlarmType\",\"nodeId\":\"ns=0;i=11753\",\"nodeClass\":8,\"children\":[{\"displayName\":\"CertificateExpirationAlarmType\",\"nodeId\":\"ns=0;i=13225\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ExpirationDate\",\"nodeId\":\"ns=0;i=13325\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExpirationLimit\",\"nodeId\":\"ns=0;i=14900\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"CertificateType\",\"nodeId\":\"ns=0;i=13326\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Certificate\",\"nodeId\":\"ns=0;i=13327\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"TrustListOutOfDateAlarmType\",\"nodeId\":\"ns=0;i=19297\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TrustListId\",\"nodeId\":\"ns=0;i=19446\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"LastUpdateTime\",\"nodeId\":\"ns=0;i=19447\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UpdateFrequency\",\"nodeId\":\"ns=0;i=19448\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"TripAlarmType\",\"nodeId\":\"ns=0;i=10751\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"InstrumentDiagnosticAlarmType\",\"nodeId\":\"ns=0;i=18347\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceHealthDiagnosticAlarmType\",\"nodeId\":\"ns=2;i=15143\",\"nodeClass\":8,\"children\":[{\"displayName\":\"FailureAlarmType\",\"nodeId\":\"ns=2;i=15292\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"CheckFunctionAlarmType\",\"nodeId\":\"ns=2;i=15441\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"OffSpecAlarmType\",\"nodeId\":\"ns=2;i=15590\",\"nodeClass\":8,\"children\":[]},{\"displayName\":\"MaintenanceRequiredAlarmType\",\"nodeId\":\"ns=2;i=15739\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"SystemDiagnosticAlarmType\",\"nodeId\":\"ns=0;i=18496\",\"nodeClass\":8,\"children\":[]}]}]},{\"displayName\":\"DiscrepancyAlarmType\",\"nodeId\":\"ns=0;i=17080\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TargetValueNode\",\"nodeId\":\"ns=0;i=17215\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ExpectedTime\",\"nodeId\":\"ns=0;i=17216\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Tolerance\",\"nodeId\":\"ns=0;i=17217\",\"nodeClass\":2,\"children\":[]}]}]}]}]}]}]},{\"displayName\":\"InterfaceTypes\",\"nodeId\":\"ns=0;i=17708\",\"nodeClass\":1,\"children\":[{\"displayName\":\"BaseInterfaceType\",\"nodeId\":\"ns=0;i=17602\",\"nodeClass\":8,\"children\":[{\"displayName\":\"IOrderedObjectType\",\"nodeId\":\"ns=0;i=23513\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NumberInList\",\"nodeId\":\"ns=0;i=23517\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIetfBaseNetworkInterfaceType\",\"nodeId\":\"ns=0;i=24148\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AdminStatus\",\"nodeId\":\"ns=0;i=24149\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperStatus\",\"nodeId\":\"ns=0;i=24150\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PhysAddress\",\"nodeId\":\"ns=0;i=24151\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Speed\",\"nodeId\":\"ns=0;i=24152\",\"nodeClass\":2,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=24157\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IIeeeBaseEthernetPortType\",\"nodeId\":\"ns=0;i=24158\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Speed\",\"nodeId\":\"ns=0;i=24159\",\"nodeClass\":2,\"children\":[{\"displayName\":\"EngineeringUnits\",\"nodeId\":\"ns=0;i=24164\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Duplex\",\"nodeId\":\"ns=0;i=24165\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFrameLength\",\"nodeId\":\"ns=0;i=24166\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeAutoNegotiationStatusType\",\"nodeId\":\"ns=0;i=24233\",\"nodeClass\":8,\"children\":[{\"displayName\":\"NegotiationStatus\",\"nodeId\":\"ns=0;i=24234\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IBaseEthernetCapabilitiesType\",\"nodeId\":\"ns=0;i=24167\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanTagCapable\",\"nodeId\":\"ns=0;i=24168\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IVlanIdType\",\"nodeId\":\"ns=0;i=25218\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanId\",\"nodeId\":\"ns=0;i=25219\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ISrClassType\",\"nodeId\":\"ns=0;i=24169\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Id\",\"nodeId\":\"ns=0;i=24170\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Priority\",\"nodeId\":\"ns=0;i=24171\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Vid\",\"nodeId\":\"ns=0;i=24172\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnStreamType\",\"nodeId\":\"ns=0;i=24173\",\"nodeClass\":8,\"children\":[{\"displayName\":\"StreamId\",\"nodeId\":\"ns=0;i=24174\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"StreamName\",\"nodeId\":\"ns=0;i=24175\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"State\",\"nodeId\":\"ns=0;i=24176\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"AccumulatedLatency\",\"nodeId\":\"ns=0;i=24177\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SrClassId\",\"nodeId\":\"ns=0;i=24178\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnTrafficSpecificationType\",\"nodeId\":\"ns=0;i=24179\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MaxIntervalFrames\",\"nodeId\":\"ns=0;i=24180\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"MaxFrameSize\",\"nodeId\":\"ns=0;i=24181\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Interval\",\"nodeId\":\"ns=0;i=24182\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeBaseTsnStatusStreamType\",\"nodeId\":\"ns=0;i=24183\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TalkerStatus\",\"nodeId\":\"ns=0;i=24184\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ListenerStatus\",\"nodeId\":\"ns=0;i=24185\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FailureCode\",\"nodeId\":\"ns=0;i=24186\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"FailureSystemIdentifier\",\"nodeId\":\"ns=0;i=24187\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationType\",\"nodeId\":\"ns=0;i=24188\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MacAddress\",\"nodeId\":\"ns=0;i=24189\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"InterfaceName\",\"nodeId\":\"ns=0;i=24190\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationTalkerType\",\"nodeId\":\"ns=0;i=24191\",\"nodeClass\":8,\"children\":[{\"displayName\":\"TimeAwareOffset\",\"nodeId\":\"ns=0;i=24194\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnInterfaceConfigurationListenerType\",\"nodeId\":\"ns=0;i=24195\",\"nodeClass\":8,\"children\":[{\"displayName\":\"ReceiveOffset\",\"nodeId\":\"ns=0;i=24198\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IIeeeTsnMacAddressType\",\"nodeId\":\"ns=0;i=24199\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DestinationAddress\",\"nodeId\":\"ns=0;i=24200\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SourceAddress\",\"nodeId\":\"ns=0;i=24201\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IIeeeTsnVlanTagType\",\"nodeId\":\"ns=0;i=24202\",\"nodeClass\":8,\"children\":[{\"displayName\":\"VlanId\",\"nodeId\":\"ns=0;i=24203\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityCodePoint\",\"nodeId\":\"ns=0;i=24204\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IPriorityMappingEntryType\",\"nodeId\":\"ns=0;i=24205\",\"nodeClass\":8,\"children\":[{\"displayName\":\"MappingUri\",\"nodeId\":\"ns=0;i=24206\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityLabel\",\"nodeId\":\"ns=0;i=24207\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityValue_PCP\",\"nodeId\":\"ns=0;i=24208\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PriorityValue_DSCP\",\"nodeId\":\"ns=0;i=24209\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IVendorNameplateType\",\"nodeId\":\"ns=2;i=15035\",\"nodeClass\":8,\"children\":[{\"displayName\":\"Manufacturer\",\"nodeId\":\"ns=2;i=15036\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ManufacturerUri\",\"nodeId\":\"ns=2;i=15037\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Model\",\"nodeId\":\"ns=2;i=15038\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"HardwareRevision\",\"nodeId\":\"ns=2;i=15039\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareRevision\",\"nodeId\":\"ns=2;i=15040\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceRevision\",\"nodeId\":\"ns=2;i=15041\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductCode\",\"nodeId\":\"ns=2;i=15042\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceManual\",\"nodeId\":\"ns=2;i=15043\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceClass\",\"nodeId\":\"ns=2;i=15044\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SerialNumber\",\"nodeId\":\"ns=2;i=15045\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ProductInstanceUri\",\"nodeId\":\"ns=2;i=15046\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"RevisionCounter\",\"nodeId\":\"ns=2;i=15047\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"SoftwareReleaseDate\",\"nodeId\":\"ns=2;i=23\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"PatchIdentifiers\",\"nodeId\":\"ns=2;i=24\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ITagNameplateType\",\"nodeId\":\"ns=2;i=15048\",\"nodeClass\":8,\"children\":[{\"displayName\":\"AssetId\",\"nodeId\":\"ns=2;i=15049\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"ComponentName\",\"nodeId\":\"ns=2;i=15050\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"IDeviceHealthType\",\"nodeId\":\"ns=2;i=15051\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceHealth\",\"nodeId\":\"ns=2;i=15052\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"DeviceHealthAlarms\",\"nodeId\":\"ns=2;i=15053\",\"nodeClass\":1,\"children\":[]}]},{\"displayName\":\"ISupportInfoType\",\"nodeId\":\"ns=2;i=15054\",\"nodeClass\":8,\"children\":[{\"displayName\":\"DeviceTypeImage\",\"nodeId\":\"ns=2;i=15055\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=15056\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Documentation\",\"nodeId\":\"ns=2;i=15057\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DocumentIdentifier>\",\"nodeId\":\"ns=2;i=15058\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"DocumentationFiles\",\"nodeId\":\"ns=2;i=27\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<DocumentFileId>\",\"nodeId\":\"ns=2;i=28\",\"nodeClass\":1,\"children\":[{\"displayName\":\"Size\",\"nodeId\":\"ns=2;i=29\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Writable\",\"nodeId\":\"ns=2;i=30\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"UserWritable\",\"nodeId\":\"ns=2;i=31\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OpenCount\",\"nodeId\":\"ns=2;i=32\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"Open\",\"nodeId\":\"ns=2;i=36\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=37\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=38\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Close\",\"nodeId\":\"ns=2;i=39\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=62\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Read\",\"nodeId\":\"ns=2;i=63\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=64\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=65\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"Write\",\"nodeId\":\"ns=2;i=66\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=67\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"GetPosition\",\"nodeId\":\"ns=2;i=68\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=69\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OutputArguments\",\"nodeId\":\"ns=2;i=70\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"SetPosition\",\"nodeId\":\"ns=2;i=71\",\"nodeClass\":4,\"children\":[{\"displayName\":\"InputArguments\",\"nodeId\":\"ns=2;i=72\",\"nodeClass\":2,\"children\":[]}]}]}]},{\"displayName\":\"ProtocolSupport\",\"nodeId\":\"ns=2;i=15059\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ProtocolSupportIdentifier>\",\"nodeId\":\"ns=2;i=15060\",\"nodeClass\":2,\"children\":[]}]},{\"displayName\":\"ImageSet\",\"nodeId\":\"ns=2;i=15061\",\"nodeClass\":1,\"children\":[{\"displayName\":\"<ImageIdentifier>\",\"nodeId\":\"ns=2;i=15062\",\"nodeClass\":2,\"children\":[]}]}]},{\"displayName\":\"IOperationCounterType\",\"nodeId\":\"ns=2;i=480\",\"nodeClass\":8,\"children\":[{\"displayName\":\"PowerOnDuration\",\"nodeId\":\"ns=2;i=481\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperationDuration\",\"nodeId\":\"ns=2;i=482\",\"nodeClass\":2,\"children\":[]},{\"displayName\":\"OperationCycleCounter\",\"nodeId\":\"ns=2;i=483\",\"nodeClass\":2,\"children\":[]}]}]}]}]},{\"displayName\":\"Views\",\"nodeId\":\"ns=0;i=87\",\"nodeClass\":1,\"children\":[]}]}");

},{}],"jen6x":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_panel_container"
    }, [
        _c('md-steppers', {
            staticClass: "stepper_container",
            attrs: {
                "md-active-step": _vm.step,
                "md-vertical": "",
                "md-linear": ""
            },
            on: {
                "update:mdActiveStep": function($event) {
                    _vm.step = $event;
                },
                "update:md-active-step": function($event) {
                    _vm.step = $event;
                }
            }
        }, [
            _c('md-step', {
                attrs: {
                    "id": _vm.getId(_vm.STEPS.serverInfo),
                    "md-label": "Server Info",
                    "md-description": "Enter OPC Server information",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.serverInfo
                }
            }, [
                _c('server-info-step', {
                    attrs: {
                        "serverInfo": _vm.serverInfo,
                        "stepName": _vm.STEPS.serverInfo,
                        "loading": _vm.isLoading
                    },
                    on: {
                        "nextStep": _vm.nextStep,
                        "addGateway": _vm.addGateway,
                        "removeGateway": _vm.removeGateway,
                        "upload": _vm.uploadGateways
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": _vm.getId(_vm.STEPS.discovering),
                    "md-label": "Discovering",
                    "md-description": "Launch the discovery",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.discovering
                }
            }, [
                _c('discover-step', {
                    attrs: {
                        "stepName": _vm.STEPS.discovering,
                        "state": _vm.state,
                        "asking": _vm.ask,
                        "progress": _vm.discoverProgress
                    },
                    on: {
                        "discover": _vm.goToDiscovering,
                        "nextStep": _vm.nextStep,
                        "goBack": _vm.goBack,
                        "cancel": _vm.cancelDiscovering,
                        "retry": _vm.retry,
                        "askResult": _vm.ConfirmChoice
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": _vm.getId(_vm.STEPS.discovered),
                    "md-label": "Discovered",
                    "md-description": "select the nodes to create",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.discovered
                }
            }, [
                _c('select-to-create', {
                    attrs: {
                        "stepName": _vm.STEPS.discovered,
                        "state": _vm.state,
                        "treeFields": _vm.treeFields
                    },
                    on: {
                        "nextStep": _vm.goToCreationStep,
                        "goBack": _vm.goBack
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": _vm.getId(_vm.STEPS.creation),
                    "md-label": "Create Nodes",
                    "md-description": "Node creation",
                    "md-editable": false
                }
            }, [
                _c('create-node-step', {
                    attrs: {
                        "stepName": _vm.STEPS.creation,
                        "state": _vm.state
                    },
                    on: {
                        "create": _vm.createNodes,
                        "goBack": _vm.goBack
                    }
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5Kcnd":[function() {},{}],"3VVqk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5GR13":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("81ff535e237f2534");
    if (script.__esModule) script = script.default;
    script.render = require("d740321d07f6b462").render;
    script.staticRenderFns = require("d740321d07f6b462").staticRenderFns;
    script._scopeId = "data-v-ce277b";
    script.__cssModules = require("45cbe7f765d1f8f1").default;
    require("a3b02a9acba722d").default(script);
    script.__scopeId = 'data-v-ce277b';
    script.__file = "monitoringPanel.vue";
};
initialize();
exports.default = script;

},{"81ff535e237f2534":"j9eji","d740321d07f6b462":"cw9F8","45cbe7f765d1f8f1":"bQ119","a3b02a9acba722d":"d5F2d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j9eji":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _spinalModelOpcua = require("spinal-model-opcua");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelGraph = require("spinal-model-graph");
var _profileService = require("../../js/profile_service");
var _profileServiceDefault = parcelHelpers.interopDefault(_profileService);
var _lodash = require("lodash");
var scriptExports = {
    name: (0, _constants.MONITORING_PANEL_NAME),
    data () {
        this.context;
        this.graph;
        this.organ;
        this.network;
        this.STATES = {
            loading: 1,
            loaded: 2,
            error: 3
        };
        this.Button_names = {
            start: 1,
            stop: 2,
            restart: 3,
            checkbox: 4
        };
        this.STEPS = Object.freeze({
            serverInfo: "1",
            discovering: "2",
            creation: "3"
        });
        this.nodes = {};
        this.listeners = {};
        this.updateInterface = _lodash.debounce(()=>this.$forceUpdate(), 100);
        return {
            state: this.STATES.loading,
            step: this.STEPS.serverInfo,
            devices: []
        };
    },
    methods: {
        async opened (params) {
            this.graph = params.graph;
            this.context = params.context;
            this.organ = params.organ;
            this.network = params.network;
            this.devices = await this.getDevices(params.selectedNode);
        },
        closed () {},
        async start (deviceId, globalUpdate) {
            const listener = this.listeners[deviceId];
            if (listener) {
                listener.monitored.set(true);
                if (!globalUpdate) this.updateInterface();
                return;
            }
            const node = this.nodes[deviceId];
            const profile = await (0, _profileServiceDefault.default).getProfileLinked(node);
            if (!profile) return;
            let model = new (0, _spinalModelOpcua.SpinalOPCUAListener)(this.graph, this.context, this.organ, this.network, node, profile, true);
            await model.addToDevice();
            this.listeners[deviceId] = model;
            if (!globalUpdate) this.updateInterface();
        },
        stop (deviceId, globalUpdate) {
            const listener = this.listeners[deviceId];
            if (listener) {
                if (!globalUpdate) this.updateInterface();
                listener.monitored.set(false);
            }
        },
        restart (deviceId, globalUpdate) {
            return new Promise(async (resolve)=>{
                await this.stop(deviceId, globalUpdate);
                setTimeout(async ()=>{
                    await this.start(deviceId, globalUpdate);
                    resolve(true);
                }, 1000);
            });
        },
        async getDevices (selectedNode) {
            const type = selectedNode.getType().get();
            let devices = [];
            if (type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) devices = await selectedNode.getChildren((0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName);
            else if (type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) devices = [
                selectedNode
            ];
            const promises = devices.map(async (device)=>{
                const id = device.getId().get();
                this.nodes[id] = device;
                const listener = await this.getListnerModel(device);
                if (listener) this.listeners[id] = listener;
                return device.info.get();
            });
            return Promise.all(promises);
        },
        disableBtn (button, nodeId) {
            const node = this.nodes[nodeId];
            if (!node || !node.hasRelation((0, _profileService.CONTEXT_TO_PROFILE_RELATION), (0, _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE))) return true;
            const listener = this.listeners[nodeId];
            switch(button){
                case this.Button_names.checkbox:
                    return !listener ? true : false;
                case this.Button_names.start:
                    if (listener && listener.monitored && listener.monitored.get()) return true;
                    return false;
                case this.Button_names.stop:
                    if (!listener || !listener.monitored || !listener.monitored.get()) return true;
                    return false;
                case this.Button_names.restart:
                    if (listener && listener.monitored && listener.monitored.get()) return false;
                    return true;
            }
        },
        getListnerModel (device) {
            if (device.info.listener) return new Promise((resolve, reject)=>{
                try {
                    device.info.listener.load((data)=>resolve(data));
                } catch (error) {
                    reject(error);
                }
            });
        },
        getState (nodeId) {
            const node = this.nodes[nodeId];
            if (!node || !node.hasRelation((0, _profileService.CONTEXT_TO_PROFILE_RELATION), (0, _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE))) return "No_profile Linked";
            const listener = this.listeners[nodeId];
            return listener && listener.monitored && listener.monitored.get() ? "Monitored" : "Stopped";
        },
        async startAll () {
            const globalUpdate = true;
            for (const device of this.devices){
                await this.start(device.id, globalUpdate);
                this.updateInterface();
            }
        },
        stopAll () {
            const globalUpdate = true;
            for (const device of this.devices)this.stop(device.id, globalUpdate);
            this.updateInterface();
        },
        async restartAll () {
            const globalUpdate = true;
            for (const device of this.devices){
                await this.restart(device.id, globalUpdate);
                this.updateInterface();
            }
        },
        changeAllTimeSeries (value) {
            for (const device of this.devices){
                const listener = this.listeners[device.id];
                if (listener && listener.saveTimeSeries) listener.saveTimeSeries.set(value);
            }
            this.updateInterface();
        },
        getTimeSeriesValue (deviceId) {
            console.log("getting value");
            const listener = this.listeners[deviceId];
            if (!listener) return false;
            return listener.saveTimeSeries && listener.saveTimeSeries.get() || false;
        },
        setTimeSeriesValue (deviceId) {
            const listener = this.listeners[deviceId];
            if (listener && listener.saveTimeSeries) {
                const value = !listener.saveTimeSeries.get();
                listener.saveTimeSeries.set(value);
            }
            this.updateInterface();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"eWGjB","spinal-model-opcua":"l0Ztm","spinal-model-bmsnetwork":"haihS","spinal-model-graph":"b87gp","../../js/profile_service":"hXTad","lodash":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cw9F8":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "_panel_container"
    }, [
        _c('div', {
            staticClass: "header"
        }, [
            _c('md-button', {
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "title": "start all"
                },
                on: {
                    "click": _vm.startAll
                }
            }, [
                _c('md-icon', [
                    _vm._v("play_arrow")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-icon-button md-accent",
                attrs: {
                    "title": "stop all"
                },
                on: {
                    "click": _vm.stopAll
                }
            }, [
                _c('md-icon', [
                    _vm._v("stop")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "title": "restart all"
                },
                on: {
                    "click": _vm.restartAll
                }
            }, [
                _c('md-icon', [
                    _vm._v("refresh")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function() {
                        return _vm.changeAllTimeSeries(true);
                    }
                }
            }, [
                _vm._v("Save all time series ")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-accent",
                on: {
                    "click": function() {
                        return _vm.changeAllTimeSeries(false);
                    }
                }
            }, [
                _vm._v("Stop saving all time series")
            ])
        ], 1),
        _vm._v(" "),
        _c('md-list', {
            staticClass: "listDiv md-double-line"
        }, _vm._l(_vm.devices, function(device) {
            return _c('md-list-item', {
                key: device.id
            }, [
                _c('div', {
                    staticClass: "md-list-item-text"
                }, [
                    _c('span', [
                        _vm._v(_vm._s(device.name))
                    ]),
                    _vm._v(" "),
                    _c('span', {
                        class: _vm.getState(device.id) + " subtypes"
                    }, [
                        _vm._v(_vm._s(_vm.getState(device.id)))
                    ])
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "md-list-action"
                }, [
                    _c('md-button', {
                        staticClass: "md-icon-button md-primary",
                        attrs: {
                            "disabled": _vm.disableBtn(_vm.Button_names.start, device.id),
                            "title": "start"
                        },
                        on: {
                            "click": function() {
                                return _vm.start(device.id);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("play_arrow")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-icon-button md-accent",
                        attrs: {
                            "disabled": _vm.disableBtn(_vm.Button_names.stop, device.id),
                            "title": "stop"
                        },
                        on: {
                            "click": function() {
                                return _vm.stop(device.id);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("stop")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-icon-button md-primary",
                        attrs: {
                            "disabled": _vm.disableBtn(_vm.Button_names.restart, device.id),
                            "title": "restart"
                        },
                        on: {
                            "click": function() {
                                return _vm.restart(device.id);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("refresh")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "block"
                    }, [
                        _c('div', {
                            staticClass: "input"
                        }, [
                            _c('md-checkbox', {
                                staticClass: "primary",
                                attrs: {
                                    "disabled": _vm.disableBtn(_vm.Button_names.checkbox, device.id),
                                    "value": !_vm.getTimeSeriesValue(device.id)
                                },
                                on: {
                                    "change": function() {
                                        return _vm.setTimeSeriesValue(device.id);
                                    }
                                }
                            }, [
                                _vm._v("Save\n              timeseries")
                            ])
                        ], 1)
                    ])
                ], 1)
            ]);
        }), 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bQ119":[function() {},{}],"d5F2d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hebpI":[function(require,module,exports,__globalThis) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
/*<replacement>*/ var Buffer = require("2a29807c689a070a").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true)switch(enc){
        case 'utf8':
        case 'utf-8':
            return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return 'utf16le';
        case 'latin1':
        case 'binary':
            return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
            return enc;
        default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}

},{"2a29807c689a070a":"hcAvu"}],"hcAvu":[function(require,module,exports,__globalThis) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require("7e0d6ecd698c3ca6");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return buffer.SlowBuffer(size);
};

},{"7e0d6ecd698c3ca6":"bCaf4"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-plugin-opcua-manager.f423001d.js.map
