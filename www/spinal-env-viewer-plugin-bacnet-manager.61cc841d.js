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
})({"82Vlz":[function(require,module,exports,__globalThis) {
var _buttons = require("./buttons");
var _panels = require("./vue/panels");
var _dialogs = require("./vue/dialogs");

},{"./buttons":"7erVV","./vue/panels":"Uvsmz","./vue/dialogs":"aC6cU"}],"7erVV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "discoverNetworkBtn", ()=>(0, _discoverBtnDefault.default));
parcelHelpers.export(exports, "createNetworkContext", ()=>(0, _createNetworkContextDefault.default));
parcelHelpers.export(exports, "createSubNetworkBtn", ()=>(0, _createSubNetworkDefault.default));
parcelHelpers.export(exports, "addOrganBtn", ()=>// startBtn,
    // stopBtn,
    // editTimeIntervalBtn,
    (0, _addOrganDefault.default));
parcelHelpers.export(exports, "linkProfilToBmsDevice", ()=>(0, _linkProfilDefault.default));
parcelHelpers.export(exports, "unLinkProfilToBmsDevice", ()=>(0, _unLinkProfilDefault.default));
parcelHelpers.export(exports, "locateBimObject", ()=>// linkDeviceToBim,
    (0, _locateBimObjectDefault.default));
parcelHelpers.export(exports, "createBacnetValue", ()=>(0, _createBacnetValueDefault.default));
parcelHelpers.export(exports, "manageMonitoring", ()=>(0, _monitoringDefault.default));
parcelHelpers.export(exports, "organBacnetMonitor", ()=>(0, _organBacnetMonitorDefault.default));
var _discoverBtn = require("./bacnet/discoverBtn");
var _discoverBtnDefault = parcelHelpers.interopDefault(_discoverBtn);
// import startBtn from "./bacnet/resume";
// import stopBtn from "./bacnet/stop";
// import editTimeIntervalBtn from "./bacnet/editTimeInterval";
// import linkDeviceToBim from "./viewer/linkDeviceToBim";
var _locateBimObject = require("./bacnet/locateBimObject");
var _locateBimObjectDefault = parcelHelpers.interopDefault(_locateBimObject);
var _createNetworkContext = require("./viewer/createNetworkContext");
var _createNetworkContextDefault = parcelHelpers.interopDefault(_createNetworkContext);
var _addOrgan = require("./viewer/addOrgan");
var _addOrganDefault = parcelHelpers.interopDefault(_addOrgan);
var _linkProfil = require("./viewer/linkProfil");
var _linkProfilDefault = parcelHelpers.interopDefault(_linkProfil);
var _unLinkProfil = require("./viewer/unLinkProfil");
var _unLinkProfilDefault = parcelHelpers.interopDefault(_unLinkProfil);
var _createBacnetValue = require("./bacnet/createBacnetValue");
var _createBacnetValueDefault = parcelHelpers.interopDefault(_createBacnetValue);
var _monitoring = require("./bacnet/monitoring");
var _monitoringDefault = parcelHelpers.interopDefault(_monitoring);
var _organBacnetMonitor = require("./bacnet/organBacnetMonitor");
var _organBacnetMonitorDefault = parcelHelpers.interopDefault(_organBacnetMonitor);
var _createSubNetwork = require("./bacnet/createSubNetwork");
var _createSubNetworkDefault = parcelHelpers.interopDefault(_createSubNetwork);

},{"./bacnet/discoverBtn":"ebWJT","./bacnet/locateBimObject":"6W1hs","./viewer/createNetworkContext":"2wNNn","./viewer/addOrgan":"hC72P","./viewer/linkProfil":"7KKuG","./viewer/unLinkProfil":"iT6G7","./bacnet/createBacnetValue":"kIucr","./bacnet/monitoring":"jwfGD","./bacnet/organBacnetMonitor":"jxEdq","./bacnet/createSubNetwork":"bHGa3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ebWJT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("9094fddb5aafaaaf");
const SIDEBAR = "GraphManagerSideBar";
class DiscoverNetworkBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Discover and Create BMS subnetwork", "This button allows to discover network and create", {
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
        if (typeSelected === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE)) return true;
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            const organ = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
            return organ && organ.type.get() == (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    action(option) {
        spinalPanelManagerService.openPanel("discoverNetworkPanel", option);
    }
}
const discoverNetworkBtn = new DiscoverNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, discoverNetworkBtn, [
    3
]);
exports.default = discoverNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","9094fddb5aafaaaf":"egTXY","spinal-model-bacnet":"aS2yR","spinal-model-bmsnetwork":"haihS","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"3CjaB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const bacnet = require("40db74c829e45c23");
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
    static getOrgan(networkId, contextId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
        return realNode.getParents([
            (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
        ]).then((parents)=>{
            const found = parents.find((el)=>{
                if (el && el.contextIds) return el.contextIds[contextId];
            });
            if (found) return found.getElement();
        });
    }
    static getModel(deviceId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(deviceId);
        if (!realNode) return Promise.resolve(-1);
        return new Promise((resolve)=>{
            if (realNode.info.listener) return realNode.info.listener.load((data)=>resolve(data));
            resolve(-1);
        });
    }
    // static async startMonitoring(
    //   graph,
    //   contextId,
    //   deviceId,
    //   networkId,
    //   argModel,
    //   argMonitor,
    //   organModel
    // ) {
    //   try {
    //     if (!this.hasProfilLinked(deviceId)) return -1;
    //     // const context = SpinalGraphService.getRealNode(contextId);
    //     // const realNode = SpinalGraphService.getRealNode(deviceId);
    //     const model =
    //       argModel && argModel !== -1 ? argModel : await this.getModel(deviceId);
    //     const monitor =
    //       argMonitor || (await this.getMonitoringInfo(deviceId, contextId));
    //     // console.log(model, monitor);
    //     // return this.createOrGetListenerModel(
    //     //   graph,
    //     //   contextId,
    //     //   deviceId,
    //     //   networkId,
    //     //   model,
    //     //   monitor,
    //     //   organModel
    //     // );
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    static async stopMonitoring(deviceId, argModel) {
        try {
            if (!this.hasProfilLinked(deviceId)) return -1;
            // const realNode = SpinalGraphService.getRealNode(deviceId);
            const model = argModel && argModel !== -1 ? argModel : await this.getModel(deviceId);
            if (model != -1) model.listen.set(false);
        } catch (error) {}
    }
    static async getProfilIntervals(profilId) {
        const intervalsNodes = await (0, _spinalEnvViewerPluginNetworkTreeService.DeviceProfileUtilities).getIntervalNodes(profilId);
        const promises = intervalsNodes.map(async (el)=>{
            return {
                monitoring: await this.getSharedAttribute(el),
                children: await this.getEndpointsObjectIds(el)
            };
        });
        return Promise.all(promises).then((result)=>{
            return result;
        }).catch((err)=>{
            console.error(err);
            return [];
        });
    }
    // static async getMonitoringInfo(deviceId, contextId) {
    // const profil = await this.getProfilLinkedToDevice(deviceId);
    // const intervalsNodes = await DeviceProfileUtilities.getIntervalNodes(
    //   profil.id
    // );
    // const promises = intervalsNodes.map(async (el) => {
    //   return {
    //     monitoring: await this.getSharedAttribute(el),
    //     children: await this.getEndpointsObjectIds(
    //       el,
    //       profilContext.getId().get()
    //     ),
    //   };
    // });
    // return Promise.all(promises).then((result) => {
    //   const data = result.map(({ monitoring, children }) => {
    //     return {
    //       monitoring: monitoring.Monitoring,
    //       interval: monitoring.IntervalTime,
    //       children,
    //     };
    //   });
    //   const profilNode = SpinalGraphService.getRealNode(profil.id);
    //   return new SpinalMonitorInfoModel(profilNode, data);
    // });
    // }
    static async getSharedAttribute(intervalNode) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(intervalNode.id.get());
        const attrs = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, "Supervision");
        // const cat = await serviceDocumentation.getCategoryByName(
        //   realNode,
        //   "Supervision"
        // );
        const obj = {};
        for(let i = 0; i < attrs.length; i++){
            const element = attrs[i];
            obj[element.label.get()] = element.value.get();
        }
        return obj;
    }
    static async getEndpointsObjectIds(intervalNode) {
        const nodeId = intervalNode.id.get();
        const profilItems = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, "hasIntervalTime");
        const promises = profilItems.map(async (profilItem)=>{
            return {
                instance: await this.getIDX(profilItem.id.get()),
                type: this._getBacnetObjectType(profilItem.type.get())
            };
        });
        return Promise.all(promises).then((result)=>{
            return result.flat();
        });
    }
    static _getBacnetObjectType(type) {
        const objectName = ("object_" + type.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`)).toUpperCase();
        return bacnet.enum.ObjectTypes[objectName];
    }
    static async getIDX(nodeId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const attrs = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, "default");
        const found = attrs.find((attr)=>attr.label.get() === "IDX");
        if (found) return parseInt(found.value.get()) + 1;
    // const cat = await serviceDocumentation.getCategoryByName(
    // realNode,
    // "default"
    // );
    // if (cat.element != undefined) {
    //   for (let i = 0; i < cat.element.length; i++) {
    //     const element = cat.element[i];
    //     if (element.label.get() === "IDX")
    //       return parseInt(element.value.get()) + 1;
    //   }
    // }
    }
    static hasProfilLinked(nodeId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (realNode.hasRelation("hasBacnetProfile", (0, _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE))) return true;
        if (realNode.hasRelation("hasBacnetProfile", (0, _spinalModelGraph.SPINAL_RELATION_LST_PTR_TYPE))) return true;
        return false;
    }
    static getProfilLinkedToDevice(deviceId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceId, [
            "hasBacnetProfile"
        ]).then((result)=>{
            const [profil] = result;
            if (profil) return profil.get();
        // return result.map((el) => el.get());
        });
    }
    static async createOrModifyListenerModel(graph, context, network, listenerModel, monitoringInfo, organModel, deviceNode) {
        if (listenerModel && listenerModel != -1) return this._modListenerModel(listenerModel, monitoringInfo);
        return this._createListenerModel(graph, context, network, organModel, deviceNode, monitoringInfo);
    }
    static _modListenerModel(listenerModel, monitoringInfo) {
        if (!monitoringInfo) {
            listenerModel.listen.set(false);
            return -1;
        }
        if (listenerModel.monitor) listenerModel.mod_attr("monitor", monitoringInfo);
        else listenerModel.add_attr({
            monitor: monitoringInfo
        });
        listenerModel.listen.set(true);
        return listenerModel;
    }
    static _createListenerModel(graph, context, network, organ, deviceNode, monitoringInfo) {
        const spinalListener = new (0, _spinalModelBacnet.SpinalListenerModel)(graph, context, network, deviceNode, organ, monitoringInfo);
        deviceNode.info.add_attr({
            listener: new Ptr(spinalListener)
        });
        return spinalListener;
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
}
exports.default = Utils;

},{"spinal-model-bmsnetwork":"haihS","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-model-bacnet":"aS2yR","spinal-model-graph":"b87gp","40db74c829e45c23":"dQoCE","spinal-env-viewer-plugin-network-tree-service":"aaFv2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6W1hs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
const { spinalPanelManagerService } = require("2f54b98bb861b8b7");
const SIDEBAR = "GraphManagerSideBar";
class LocateBimObjectBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Locate object linked in 3D model", "Locate object linked in 3D model", {
            icon: "pageview",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const type = option.selectedNode.type.get();
        if (type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName || type === (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName) return true;
        return -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(id, [
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName,
            (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).relationName
        ]);
        const founds = parents.filter((el)=>el.type.get() === (0, _constants.BIM_OBJECT_TYPE)).map((el)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id.get()));
        if (founds.length === 0) {
            window.alert("No bim object linked");
            return;
        }
        const viewer = window.spinal.ForgeViewer.viewer;
        (0, _utilities.utilities).sortBIMObjectByModel(founds).then((lstByModel)=>{
            let arrayToFit = [];
            for(let i = 0; i < lstByModel.length; i++){
                const element = lstByModel[i];
                for(let j = 0; j < element.model.modelScene.length; j++){
                    const scene = element.model.modelScene[j];
                    scene.model.selector.setSelection(element.dbid, scene.model, "selectOnly");
                    arrayToFit.push({
                        model: scene.model,
                        selection: element.dbid
                    });
                }
            }
            viewer.fitToView(arrayToFit);
        }).catch((err)=>{
            console.error(err);
        });
    }
}
const locateBimObjectBtn = new LocateBimObjectBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, locateBimObjectBtn, [
    3
]);
exports.default = locateBimObjectBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","spinal-env-viewer-plugin-standard_button/js/utilities":"7fsh6","2f54b98bb861b8b7":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7fsh6":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2021 SpinalCom - www.spinalcom.com
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
 */ var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import {
//   // ROOMS_CATEGORY_RELATION,
//   // ROOMS_TO_ELEMENT_RELATION,
//   // ROOMS_GROUP_RELATION,
//   // EQUIPMENTS_CATEGORY_RELATION,
//   // EQUIPMENTS_TO_ELEMENT_RELATION,
//   // EQUIPMENTS_GROUP_RELATION,
//   // ROOMS_GROUP_CONTEXT,
//   // ROOMS_GROUP,
//   // ROOMS_CATEGORY,
//   // EQUIPMENTS_GROUP_CONTEXT,
//   // EQUIPMENTS_CATEGORY,
//   // EQUIPMENTS_GROUP
//   groupService
// } from 'spinal-env-viewer-room-manager/services/service';
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SELECTrelationList = [
    (0, _constants.SITE_RELATION),
    (0, _constants.BUILDING_RELATION),
    (0, _constants.FLOOR_RELATION),
    (0, _constants.ZONE_RELATION),
    (0, _constants.ROOM_RELATION),
    (0, _constants.EQUIPMENT_RELATION),
    (0, _constants.REFERENCE_RELATION),
    `${(0, _constants.REFERENCE_RELATION)}.ROOM`,
    "hasBIMObject",
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.GROUP_TO_ROOMS_RELATION,
    // groupService.constants.GROUP_TO_EQUIPMENTS_RELATION,
    // groupService.constants.GROUP_TO_ENDPOINT_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES),
    `groupHas${(0, _constants.ROOM_TYPE)}`,
    `groupHas${(0, _constants.EQUIPMENT_TYPE)}`,
    `groupHas${(0, _constants.SITE_TYPE)}`,
    `groupHas${(0, _constants.BUILDING_TYPE)}`,
    `groupHas${(0, _constants.FLOOR_TYPE)}`,
    `groupHas${(0, _constants.ZONE_TYPE)}`,
    `groupHas${(0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName}`
];
const isShownParam = [
    (0, _constants.SITE_TYPE),
    (0, _constants.BUILDING_TYPE),
    (0, _constants.FLOOR_TYPE),
    (0, _constants.ZONE_TYPE),
    (0, _constants.ROOM_TYPE),
    (0, _constants.EQUIPMENT_TYPE),
    // ...groupService.constants.CONTEXTS_TYPES,
    // ...groupService.constants.GROUPS_TYPES,
    // groupService.constants.CATEGORY_TYPE
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES),
    ...Object.values((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES),
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    `${(0, _constants.ROOM_TYPE)}Group`,
    `${(0, _constants.EQUIPMENT_TYPE)}Group`,
    `${(0, _constants.SITE_TYPE)}Group`,
    `${(0, _constants.BUILDING_TYPE)}Group`,
    `${(0, _constants.FLOOR_TYPE)}Group`,
    `${(0, _constants.ZONE_TYPE)}Group`,
    `${(0, _constants.ROOM_TYPE)}GroupContext`,
    `${(0, _constants.EQUIPMENT_TYPE)}GroupContext`,
    `${(0, _constants.SITE_TYPE)}GroupContext`,
    `${(0, _constants.BUILDING_TYPE)}GroupContext`,
    `${(0, _constants.FLOOR_TYPE)}GroupContext`,
    `${(0, _constants.ZONE_TYPE)}GroupContext`
];
const utilities = {
    async sortBIMObjectByModel (arrayOfBIMObject) {
        let arrayModel = [];
        for(const key in spinal.BimObjectService.mappingBimFileIdModelId)if (spinal.BimObjectService.mappingBimFileIdModelId.hasOwnProperty(key)) {
            const element = spinal.BimObjectService.mappingBimFileIdModelId[key];
            let obj = {
                dbid: [],
                model: element
            };
            arrayModel.push(obj);
        }
        for(let i = 0; i < arrayOfBIMObject.length; i++){
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(arrayOfBIMObject[i]);
            let bim = (0, _spinalEnvViewerGraphService.SpinalGraphService).getNode(arrayOfBIMObject[i].info.id.get());
            try {
                let spinalModel = window.spinal.BimObjectService.mappingBimFileIdModelId[bim.bimFileId.get()];
                if (spinalModel) for(let j = 0; j < arrayModel.length; j++){
                    const element = arrayModel[j];
                    if (element.model.modelId === spinalModel.modelId) element.dbid.push(bim.dbid.get());
                }
            } catch (error) {
                console.error("skip node because bimFileId is not defined", error);
            }
        }
        return arrayModel;
    },
    organizeBimObjectForAggregateViewer (bimObjects, name_of_key) {
        const aggregate = bimObjects.reduce((res, el)=>{
            if (el.dbid && el.dbid.length > 0) for (const { model } of el.model.modelScene){
                let found = false;
                for (const item of res)if (item.model === model) {
                    item[name_of_key].push(...el.dbid);
                    found = true;
                }
                if (!found) res.push({
                    model,
                    [name_of_key]: Array.from(el.dbid)
                });
            }
            return res;
        }, []);
        return aggregate;
    }
};
module.exports = {
    SELECTrelationList,
    isShownParam,
    utilities
};

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-network-tree-service":"aaFv2"}],"2wNNn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("c170226d89c4fd0b");
const HEADERBAR = "GraphManagerTopBar";
class CreateNetworkContextBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create BMS network context", "This button allows to create network context", {
            icon: "network_check",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        return Promise.resolve(true);
    }
    action(option) {
        spinalPanelManagerService.openPanel("createGTBNetworkContextDialog", option);
    }
}
const createNetworkContextBtn = new CreateNetworkContextBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADERBAR, createNetworkContextBtn, [
    3
]);
exports.default = createNetworkContextBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","c170226d89c4fd0b":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hC72P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("../../js/constants");
const { spinalPanelManagerService } = require("ad74e104cb543e4");
const SIDEBAR = "GraphManagerSideBar";
class AddOrganButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Add Organ", "Add Organ", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const selectedType = option.selectedNode.type.get();
        return Promise.resolve(selectedType === (0, _constants.CONTEXT_TYPE) ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("addOrganDialogDialog", option);
    }
}
const addOrganButton = new AddOrganButton();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, addOrganButton, [
    3
]);
exports.default = addOrganButton;

},{"spinal-env-viewer-context-menu-service":"3h19D","ad74e104cb543e4":"egTXY","../../js/constants":"4PgYf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4PgYf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NETWORK_TYPE", ()=>NETWORK_TYPE);
parcelHelpers.export(exports, "CONTEXT_TYPE", ()=>CONTEXT_TYPE);
parcelHelpers.export(exports, "MESSAGES", ()=>MESSAGES);
parcelHelpers.export(exports, "SENSOR_TYPES", ()=>SENSOR_TYPES);
const bacnet = require("e8b6adb8d4030a89");
const ObjectTypes = bacnet.enum.ObjectTypes;
const NETWORK_TYPE = "GTBNetwork";
const CONTEXT_TYPE = "Network";
const MESSAGES = {
    wait: {
        text: "waiting...",
        id: "waiting"
    },
    recover: {
        text: "recovering...",
        id: "recover"
    },
    success: {
        text: "success",
        id: "success"
    },
    error: {
        text: "fail",
        id: "error"
    }
};
const SENSOR_TYPES = [
    {
        name: "ANALOG INPUT",
        checked: true,
        value: ObjectTypes.OBJECT_ANALOG_INPUT,
        id: ObjectTypes.OBJECT_ANALOG_INPUT
    },
    {
        name: "ANALOG OUTPUT",
        checked: true,
        value: ObjectTypes.OBJECT_ANALOG_OUTPUT,
        id: ObjectTypes.OBJECT_ANALOG_OUTPUT
    },
    {
        name: "ANALOG VALUE",
        checked: true,
        value: ObjectTypes.OBJECT_ANALOG_VALUE,
        id: ObjectTypes.OBJECT_ANALOG_VALUE
    },
    {
        name: "BINARY INPUT",
        checked: true,
        value: ObjectTypes.OBJECT_BINARY_INPUT,
        id: ObjectTypes.OBJECT_BINARY_INPUT
    },
    {
        name: "BINARY OUTPUT",
        checked: true,
        value: ObjectTypes.OBJECT_BINARY_OUTPUT,
        id: ObjectTypes.OBJECT_BINARY_OUTPUT
    },
    {
        name: "BINARY VALUE",
        checked: true,
        value: ObjectTypes.OBJECT_BINARY_VALUE,
        id: ObjectTypes.OBJECT_BINARY_VALUE
    },
    {
        name: "BINARY LIGHTING OUTPUT",
        checked: true,
        value: ObjectTypes.OBJECT_BINARY_LIGHTING_OUTPUT,
        id: ObjectTypes.OBJECT_BINARY_LIGHTING_OUTPUT
    },
    {
        name: "MULTI STATE INPUT",
        checked: true,
        value: ObjectTypes.OBJECT_MULTI_STATE_INPUT,
        id: ObjectTypes.OBJECT_MULTI_STATE_INPUT
    },
    {
        name: "MULTI STATE OUTPUT",
        checked: true,
        value: ObjectTypes.OBJECT_MULTI_STATE_OUTPUT,
        id: ObjectTypes.OBJECT_MULTI_STATE_OUTPUT
    },
    {
        name: "MULTI STATE VALUE",
        checked: true,
        value: ObjectTypes.OBJECT_MULTI_STATE_VALUE,
        id: ObjectTypes.OBJECT_MULTI_STATE_VALUE
    }
];

},{"e8b6adb8d4030a89":"dQoCE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7KKuG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const SIDEBAR = "GraphManagerSideBar";
class LinkProfilToBmsDevice extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link Bms device to Profil", "Link Bms device to Profil", {
            icon: "add_link",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const id = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        if (type === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE)) return true;
        let network = type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id) : type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName && await (0, _utilitiesDefault.default).getNetwork(id, contextId);
        if (network) {
            const networkId = network.getId().get();
            const organ = await (0, _utilitiesDefault.default).getOrgan(networkId, contextId);
            return organ && organ.type.get() === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    async action(option) {
        const bmsContextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        // const bmsDevices = await getAllDevices(bmsContextId, nodeId);
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkProfilToBmsDeviceDialog", {
            bmsContextId,
            nodeId
        });
    }
}
const linkProfilToBmsDevice = new LinkProfilToBmsDevice();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkProfilToBmsDevice, [
    3
]);
exports.default = linkProfilToBmsDevice;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bacnet":"aS2yR","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iT6G7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const SIDEBAR = "GraphManagerSideBar";
class UnLinkProfilToBmsDevice extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("unlink Bms device to Profil", "unlink Bms device to Profil", {
            icon: "link_off",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const id = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        if (type === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE)) return true;
        let network = type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id) : type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName && await (0, _utilitiesDefault.default).getNetwork(id, contextId);
        if (network) {
            const networkId = network.getId().get();
            const organ = await (0, _utilitiesDefault.default).getOrgan(networkId, contextId);
            return organ && organ.type.get() === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    }
    async action(option) {
        const bmsContextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        // const bmsDevices = await getAllDevices(bmsContextId, nodeId);
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("unLinkProfilToBmsDeviceDialog", {
            bmsContextId,
            nodeId
        });
    }
}
const unLinkProfilToBmsDevice = new UnLinkProfilToBmsDevice();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, unLinkProfilToBmsDevice, [
    3
]);
exports.default = unLinkProfilToBmsDevice;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-panel-manager-service":"egTXY","spinal-model-bacnet":"aS2yR","spinal-env-viewer-graph-service":"9LAk7","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kIucr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("7d93c25f002e9a41");
const SIDEBAR = "GraphManagerSideBar";
const icon = require("9b80ad328241b0ca");
class CreateBacnetValue extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Get all bacnet values", "This button allows to get all bacnet values", {
            icon: icon,
            icon_type: "src",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const id = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        let network = type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id) : type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName && await (0, _utilitiesDefault.default).getNetwork(id, contextId);
        if (network) {
            const networkId = network.getId().get();
            const organ = await (0, _utilitiesDefault.default).getOrgan(networkId, contextId);
            return organ && organ.type.get() === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    // if(type === SpinalBmsNetwork.nodeTypeName) {
    //    network = option.selectedNode;
    // } else if(type === SpinalBmsDevice.nodeTypeName) {
    //    network = await utilities.getOrgan(id, contextId);
    // }
    // if(type === SpinalBmsNetwork.nodeTypeName || type === SpinalBmsDevice.nodeTypeName) {
    //    const network = await getNetwork(id,type,contextId);
    //    if(network) {
    //       const parents = await SpinalGraphService.getParents(id,[SpinalBmsNetwork.relationName]);
    //       const found = parents.find(el => el.id.get() === BACNET_ORGAN_TYPE);
    //       return found || -1;
    //    }
    // }
    // return  -1;
    }
    async action(option) {
        spinalPanelManagerService.openPanel("getBacnetValueDialog", {
            selectedNode: option.selectedNode.get(),
            context: option.context.get(),
            graph: option.graph
        });
    }
}
// const  getNetwork = async (id, contextId) => {
//    const realNode = SpinalGraphService.getRealNode(id);
//    return realNode.getParents([SpinalBmsDevice.relationName]).then((parents) => {
//       const found = parents.find(el => {
//          if (el && el.contextIds) {
//             return el.contextIds[contextId];
//          }
//       });
//       SpinalGraphService._addNode(found)
//       return found;
//    })
// }
// const getOrgan = async (networkId, contextId) => {
//    const realNode = SpinalGraphService.getRealNode(networkId);
//    console.log("realNode",realNode);
//    const parents = await realNode.getParents([SpinalBmsNetwork.relationName]);
//    console.log("parents",parents, BACNET_ORGAN_TYPE)
//    const found = parents.find(el => {
//       console.log(el, el.getType.get());
//       return el.getType.get() == ""
//    });
//    if(found) console.log("found",found)
//    else console.log("not found");
// }
const createBacnetValue = new CreateBacnetValue();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createBacnetValue, [
    3
]);
exports.default = createBacnetValue;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","spinal-model-bacnet":"aS2yR","../../js/utilities":"3CjaB","7d93c25f002e9a41":"egTXY","9b80ad328241b0ca":"5WUc7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5WUc7":[function() {},{}],"jwfGD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("43fd88ad311906b2");
const SIDEBAR = "GraphManagerSideBar";
class ManageMonitoring extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Manage devices monitoring", "Manage devices monitoring", {
            icon: "personal_video",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const id = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        let network = type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id) : type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName && await (0, _utilitiesDefault.default).getNetwork(id, contextId);
        if (network) {
            const networkId = network.getId().get();
            const organ = await (0, _utilitiesDefault.default).getOrgan(networkId, contextId);
            return organ && organ.type.get() == (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        }
        return -1;
    // const type = option.selectedNode.type.get();
    // if (type === SpinalBmsNetwork.nodeTypeName) {
    //    return true;
    // } else if (type === SpinalBmsDevice.nodeTypeName) {
    //    const realNode = SpinalGraphService.getRealNode(option.selectedNode.id.get())
    //    const model = await utilities.getModel(realNode);
    //    if (model && model !== -1 && model.listen && model.listen.get()) return -1;
    //    return true;
    // }
    // return -1;
    }
    async action(option) {
        spinalPanelManagerService.openPanel("manageDevicesPanel", {
            selectedNode: option.selectedNode.get(),
            context: option.context.get(),
            graph: option.graph
        });
    }
}
const manageMonitoring = new ManageMonitoring();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, manageMonitoring, [
    3
]);
exports.default = manageMonitoring;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-model-bmsnetwork":"haihS","43fd88ad311906b2":"egTXY","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bacnet":"aS2yR","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jxEdq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
const { spinalPanelManagerService } = require("cfd9eb86170d935a");
const SIDEBAR = "GraphManagerSideBar";
class MonitorConnectorBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Monitor connector", "This button allows to monitor a connector", {
            icon: "reset_tv",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let typeSelected = option.selectedNode.type.get();
        return Promise.resolve(typeSelected === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("monitorConnectorPanel", {
            contextId: option.context.id.get(),
            nodeId: option.selectedNode.id.get()
        });
    }
}
const monitorConnectorBtn = new MonitorConnectorBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, monitorConnectorBtn, [
    3
]);
exports.default = monitorConnectorBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","cfd9eb86170d935a":"egTXY","spinal-model-bacnet":"aS2yR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bHGa3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("92fb1aee902993f8");
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
        const result = typeSelected === (0, _spinalModelBacnet.BACNET_ORGAN_TYPE) ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel("createSubNetworkDialog", option);
    }
}
const createSubNetworkBtn = new CreateSubNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createSubNetworkBtn, [
    3
]);
exports.default = createSubNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","92fb1aee902993f8":"egTXY","spinal-model-bacnet":"aS2yR","spinal-model-bmsnetwork":"haihS","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Uvsmz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _discoverNetworkPanelVue = require("./discoverNetworkPanel.vue");
var _discoverNetworkPanelVueDefault = parcelHelpers.interopDefault(_discoverNetworkPanelVue);
var _manageDevicesPanelVue = require("./manageDevicesPanel.vue");
var _manageDevicesPanelVueDefault = parcelHelpers.interopDefault(_manageDevicesPanelVue);
var _monitorConnectorPanelVue = require("./monitorConnectorPanel.vue");
var _monitorConnectorPanelVueDefault = parcelHelpers.interopDefault(_monitorConnectorPanelVue);
const panels = [
    {
        name: "discoverNetworkPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _discoverNetworkPanelVueDefault.default)),
        panel: {
            title: "Discover network",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: '600px',
            height: "670px",
            left: "400px"
        }
    },
    {
        name: "manageDevicesPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _manageDevicesPanelVueDefault.default)),
        panel: {
            title: "Manage devices monitoring",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: '620px',
            height: "670px",
            left: "400px"
        }
    },
    {
        name: "monitorConnectorPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _monitorConnectorPanelVueDefault.default)),
        panel: {
            title: "Manage connector",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: '620px',
            height: "670px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","./discoverNetworkPanel.vue":"jCmVu","./manageDevicesPanel.vue":"7ciIr","./monitorConnectorPanel.vue":"6WPxw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"jCmVu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("15ded77d7426b038");
    if (script.__esModule) script = script.default;
    script.render = require("e2263ce344eab292").render;
    script.staticRenderFns = require("e2263ce344eab292").staticRenderFns;
    script._scopeId = "data-v-a71540";
    script.__cssModules = require("372f8adcd6d836c0").default;
    require("f23cc47c9b65abad").default(script);
    script.__scopeId = 'data-v-a71540';
    script.__file = "discoverNetworkPanel.vue";
};
initialize();
exports.default = script;

},{"15ded77d7426b038":"d13SW","e2263ce344eab292":"aNbQz","372f8adcd6d836c0":"iLHG6","f23cc47c9b65abad":"59LCN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d13SW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../../js/constants");
var _discoverTableVue = require("../components/discoverTable.vue");
var _discoverTableVueDefault = parcelHelpers.interopDefault(_discoverTableVue);
// import { STATES } from "../../js/stateEnum";
// import { SpinalDisoverModel } from "../../model/SpinalDiscoverModel";
var _broadcastTemplateVue = require("../components/broadcastTemplate.vue");
var _broadcastTemplateVueDefault = parcelHelpers.interopDefault(_broadcastTemplateVue);
var _unicastTemplateVue = require("../components/unicastTemplate.vue");
var _unicastTemplateVueDefault = parcelHelpers.interopDefault(_unicastTemplateVue);
var scriptExports = {
    name: "discoverNetworkPanel",
    components: {
        "discover-table": (0, _discoverTableVueDefault.default),
        "broadcast-template": (0, _broadcastTemplateVueDefault.default),
        "unicast-template": (0, _unicastTemplateVueDefault.default)
    },
    data () {
        this.STATES = (0, _spinalModelBacnet.STATES);
        this.spinalDiscover;
        this.context;
        this.graph;
        this.organ;
        this.devicesBindProcess;
        return {
            state: (0, _spinalModelBacnet.STATES).reseted,
            devices: [],
            selected: [],
            network: {
                useBroadcast: true,
                address: "255.255.255.255",
                port: 47808,
                name: "",
                type: (0, _constants.NETWORK_TYPE),
                ips: [
                    {
                        id: 0,
                        address: "",
                        deviceId: ""
                    }
                ]
            }
        };
    },
    methods: {
        async opened (params) {
            this.graph = params.graph;
            this.context = params.context.get();
            this.organ = await this.getOrganModel(params.selectedNode.id.get());
            if (typeof this.spinalDiscover !== "undefined") {
                this.spinalDiscover = undefined;
                this.state = (0, _spinalModelBacnet.STATES).reseted;
            }
        },
        closed () {},
        async discover () {
            if (typeof this.spinalDiscover === "undefined") {
                this.spinalDiscover = new (0, _spinalModelBacnet.SpinalDisoverModel)(this.graph, this.context, this.network, this.organ);
                // console.log(this.spinalDiscover);
                await this.spinalDiscover.addToGraph();
            }
            this.spinalDiscover.setDiscoveringMode();
            this.getDevicesFound();
        },
        createNodes () {
            console.log("creating...");
            this.spinalDiscover.devices.set(this.selected);
            // this.spinalDiscover.state.set(STATES.creating);
            this.spinalDiscover.setCreatingMode();
        },
        getDevicesFound () {
            this.devicesBindProcess = this.spinalDiscover.state.bind(()=>{
                console.log(this.spinalDiscover.state.get());
                this.state = this.spinalDiscover.state.get();
                if (this.state === (0, _spinalModelBacnet.STATES).discovered) this.devices = this.spinalDiscover.devices.get();
                else if (this.state === (0, _spinalModelBacnet.STATES).created) this.spinalDiscover = undefined;
            // switch (this.spinalDiscover.state.get()) {
            //    case STATES.discovered:
            //       this.state = STATES.discovered;
            //       this.devices = this.spinalDiscover.devices.get();
            //       break;
            //    case STATES.timeout:
            //       this.state = STATES.timeout;
            //       break;
            //    case STATES.discovering:
            //       this.state = STATES.discovering;
            //       break;
            //    case STATES.creating:
            //       this.state = STATES.creating;
            //       break;
            //    case STATES.created:
            //       this.state = STATES.created;
            //       break;
            //    case STATES.error:
            //       this.state = STATES.error;
            //    case STATES.reseted:
            //       this.state = STATES.reseted;
            //       break;
            //    default:
            //       break;
            // }
            // // this.devices = this.graph.info.discover.devices.get();
            });
        },
        getOrganModel (nodeId) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            return realNode.getElement();
        },
        ModContextAttr (context) {
            if (context.name) context.name.set(this.context.name);
            else context.add_attr({
                name: this.context.name
            });
            if (context.type) context.type.set(this.context.type);
            else context.add_attr({
                type: this.context.type
            });
        },
        ModNetworkAttr (network) {
            if (network.name) network.name.set(this.network.name);
            else network.add_attr({
                name: this.network.name
            });
            if (network.type) network.type.set(this.network.type);
            else network.add_attr({
                type: this.network.type
            });
        },
        selectDevice (devices) {
            this.selected = devices;
        },
        stopDiscovering () {
            if (this.spinalDiscover) {
                this.spinalDiscover.setResetedMode();
                this.spinalDiscover.remove().then(()=>{
                    this.spinalDiscover = undefined;
                    this.state = (0, _spinalModelBacnet.STATES).reseted;
                });
            } else this.state = (0, _spinalModelBacnet.STATES).reseted;
        }
    },
    watch: {
        "network.useBroadcast": function() {
            this.stopDiscovering();
        },
        "network.address": function() {
            this.stopDiscovering();
        },
        "network.port": function() {
            this.stopDiscovering();
        },
        "network.ips": function() {
            this.stopDiscovering();
        }
    },
    beforeDestroy () {
        this.spinalDiscover.remove(this.graph);
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-bacnet":"aS2yR","spinal-env-viewer-graph-service":"9LAk7","../../js/constants":"4PgYf","../components/discoverTable.vue":"aEbTU","../components/broadcastTemplate.vue":"5xSe7","../components/unicastTemplate.vue":"cVwQ2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aEbTU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e23bc7d970f53e56");
    if (script.__esModule) script = script.default;
    script.render = require("a75c31bffdc133ff").render;
    script.staticRenderFns = require("a75c31bffdc133ff").staticRenderFns;
    script._scopeId = "data-v-200797";
    script.__cssModules = require("811dadbef7f09b1f").default;
    require("3ee63649eb8d7e2a").default(script);
    script.__scopeId = 'data-v-200797';
    script.__file = "discoverTable.vue";
};
initialize();
exports.default = script;

},{"e23bc7d970f53e56":"eLR6m","a75c31bffdc133ff":"3fDCA","811dadbef7f09b1f":"2ChYL","3ee63649eb8d7e2a":"3w8HV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eLR6m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stateEnum = require("../../js/stateEnum");
var scriptExports = {
    name: "discoverTable",
    props: {
        devices: {},
        state: {},
        selected: {},
        network: {}
    },
    data () {
        this.STATES = (0, _stateEnum.STATES);
        return {
            label: "Discover network to find devices",
            show: (0, _stateEnum.STATES).reseted
        };
    },
    methods: {
        disabledBtn () {
            if (this.network.name.trim().length === 0) return true;
            if (this.network.useBroadcast) {
                if (this.network.address.length === 0) return true;
                if (this.network.port.length === 0) return true;
            } else {
                if (this.network.ips.length === 0) return true;
            }
            return false;
        },
        onSelect (items) {
            this.$emit("select", items);
        },
        discover () {
            this.$emit("discover");
        },
        stop () {
            this.$emit("stop");
        }
    },
    watch: {
        state () {
            this.show = this.state;
            switch(this.state){
                case (0, _stateEnum.STATES).reseted:
                    this.label = "Discover network to find devices";
                    break;
                case (0, _stateEnum.STATES).discovering:
                    this.label = "Discovering";
                    break;
                case (0, _stateEnum.STATES).timeout:
                    this.label = "Timeout, no device found !";
                    break;
                case (0, _stateEnum.STATES).error:
                    this.label = "oups !";
                    break;
                default:
                    break;
            }
        // this.$forceUpdate();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/stateEnum":"2xpj8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2xpj8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STATES", ()=>STATES);
const STATES = Object.freeze({
    reseted: 0,
    discovering: 1,
    discovered: 2,
    timeout: 3,
    creating: 4,
    created: 5
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3fDCA":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.show === _vm.STATES.discovered ? _c('div', {
        staticClass: "devices_table"
    }, [
        _c('div', {
            staticClass: "header"
        }, [
            _c('div', [
                _vm._v(_vm._s(_vm.selected.length) + " selected / " + _vm._s(_vm.devices.length) + " found")
            ])
        ]),
        _vm._v(" "),
        _c('md-table', {
            staticClass: "tablecontent",
            on: {
                "md-selected": _vm.onSelect
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c('md-table-row', {
                            attrs: {
                                "md-selectable": "multiple",
                                "md-auto-select": ""
                            }
                        }, [
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Name",
                                    "md-sort-by": "name"
                                }
                            }, [
                                _vm._v(_vm._s(item.name))
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "deviceId"
                                }
                            }, [
                                _vm._v(_vm._s(item.deviceId))
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "address"
                                }
                            }, [
                                _vm._v(_vm._s(item.address))
                            ])
                        ], 1);
                    }
                }
            ], null, false, 3074942187),
            model: {
                value: _vm.devices,
                callback: function($$v) {
                    _vm.devices = $$v;
                },
                expression: "devices"
            }
        })
    ], 1) : _c('div', {
        staticClass: "discover_container"
    }, [
        _c('div', {
            staticClass: "description"
        }, [
            _vm._v(_vm._s(_vm.label))
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "buttons"
        }, [
            _vm.show === _vm.STATES.reseted ? _c('md-button', {
                staticClass: "md-primary md-raised",
                attrs: {
                    "disabled": _vm.disabledBtn()
                },
                on: {
                    "click": _vm.discover
                }
            }, [
                _vm._v("Discover")
            ]) : _vm.show === _vm.STATES.timeout ? _c('md-button', {
                staticClass: "md-primary md-raised",
                on: {
                    "click": _vm.discover
                }
            }, [
                _vm._v("Retry")
            ]) : _vm.show === _vm.STATES.discovering ? _c('div', {
                staticClass: "loading"
            }, [
                _c('div', [
                    _c('md-progress-spinner', {
                        attrs: {
                            "md-mode": "indeterminate"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', [
                    _c('md-button', {
                        staticClass: "md-accent md-raised",
                        on: {
                            "click": _vm.stop
                        }
                    }, [
                        _vm._v("Stop")
                    ])
                ], 1)
            ]) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2ChYL":[function() {},{}],"3w8HV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5xSe7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b42583eb9c2cc44d");
    if (script.__esModule) script = script.default;
    script.render = require("413bfea7c12fbf64").render;
    script.staticRenderFns = require("413bfea7c12fbf64").staticRenderFns;
    script._scopeId = "data-v-33e255";
    script.__cssModules = require("db6a92b4d2fd51fe").default;
    require("72a7abf8a785774c").default(script);
    script.__scopeId = 'data-v-33e255';
    script.__file = "broadcastTemplate.vue";
};
initialize();
exports.default = script;

},{"b42583eb9c2cc44d":"hy8Qd","413bfea7c12fbf64":"bPBp0","db6a92b4d2fd51fe":"8eADm","72a7abf8a785774c":"eTwmw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hy8Qd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "broadcastTemplate",
    props: {
        network: {}
    },
    data () {
        return {};
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bPBp0":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "broadcast_container"
    }, [
        _c('div', [
            _c('md-field', {
                staticClass: "contextInput"
            }, [
                _c('label', [
                    _vm._v("Network Name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.network.name,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "name", $$v);
                        },
                        expression: "network.name"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('div', [
            _c('md-field', {
                staticClass: "contextInput"
            }, [
                _c('label', [
                    _vm._v("broadcast network IP address")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.network.address,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "address", $$v);
                        },
                        expression: "network.address"
                    }
                }),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-helper-text"
                }, [
                    _vm._v("\n            To use the default(255.255.255.255) leave this field empty\n         ")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('div', [
            _c('md-field', {
                staticClass: "contextInput"
            }, [
                _c('label', [
                    _vm._v("broadcast network port")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.network.port,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "port", $$v);
                        },
                        expression: "network.port"
                    }
                }),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-helper-text"
                }, [
                    _vm._v("\n            To use the default port (47808) leave this field empty\n         ")
                ])
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8eADm":[function() {},{}],"eTwmw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cVwQ2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("48423f12671bcf98");
    if (script.__esModule) script = script.default;
    script.render = require("48aaebf7f305c6cc").render;
    script.staticRenderFns = require("48aaebf7f305c6cc").staticRenderFns;
    script._scopeId = "data-v-51f223";
    script.__cssModules = require("d49f9fd48ec05e0a").default;
    require("49f8ff11f7301386").default(script);
    script.__scopeId = 'data-v-51f223';
    script.__file = "unicastTemplate.vue";
};
initialize();
exports.default = script;

},{"48423f12671bcf98":"lfiV5","48aaebf7f305c6cc":"5uCx9","d49f9fd48ec05e0a":"2PNQQ","49f8ff11f7301386":"BbDSk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lfiV5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inputDataVue = require("./inputData.vue");
var _inputDataVueDefault = parcelHelpers.interopDefault(_inputDataVue);
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
var scriptExports = {
    name: "UnicastTemplate",
    props: {
        network: {}
    },
    components: {
        "input-data-template": (0, _inputDataVueDefault.default)
    },
    data () {
        return {
            isLoading: false
        };
    },
    methods: {
        addRow () {
            const id = this.network.ips.length;
            this.network.ips = [
                ...this.network.ips,
                {
                    id: id,
                    address: "",
                    deviceId: ""
                }
            ];
        },
        reset () {
            this.network.ips = [
                {
                    id: 0,
                    address: "",
                    deviceId: ""
                }
            ];
        },
        removeItem (id) {
            this.network.ips = this.network.ips.filter((el)=>el.id !== id);
        },
        uploadFile () {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
            input.click();
            input.addEventListener("change", async (event)=>{
                this.isLoading = true;
                try {
                    const file = event.target.files[0];
                    const dataJson = await (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).convertExcelToJson(file);
                    const ips = [];
                    for(const key in dataJson)if (Object.hasOwnProperty.call(dataJson, key)) {
                        const data = dataJson[key].map((element)=>{
                            return {
                                address: this.getElementAddress(element),
                                deviceId: this.getElementDeviceId(element)
                            };
                        });
                        ips.push(...data);
                    }
                    this.network.ips = ips.map((el, index)=>{
                        el.id = index;
                        return el;
                    });
                    this.isLoading = false;
                } catch (error) {
                    this.isLoading = false;
                }
            }, false);
        },
        getElementAddress (element) {
            const address = "address";
            const key = Object.keys(element).find((el)=>{
                return el.toLowerCase() === address;
            });
            if (key) return element[key];
        // for (const key of list) {
        //    if (element[key]) return element[key];
        // }
        },
        getElementDeviceId (element) {
            const deviceId = "deviceid";
            const key = Object.keys(element).find((el)=>{
                return el.replace(" ", "").toLowerCase() === deviceId;
            });
            if (key) return element[key];
        // const list = [
        //    "Device ID",
        //    "DeviceID",
        //    "deviceID",
        //    "device ID",
        //    "deviceId",
        //    "device Id",
        // ];
        // for (const key of list) {
        //    if (element[key]) return element[key];
        // }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./inputData.vue":"7E2VJ","spinal-env-viewer-plugin-excel-manager-service":"5y3Gh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7E2VJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fc1861f2a461eadf");
    if (script.__esModule) script = script.default;
    script.render = require("38362424ce08389d").render;
    script.staticRenderFns = require("38362424ce08389d").staticRenderFns;
    script._scopeId = "data-v-36c975";
    script.__cssModules = require("735bf0f4d25649bc").default;
    require("459d2290f0fd3879").default(script);
    script.__scopeId = 'data-v-36c975';
    script.__file = "inputData.vue";
};
initialize();
exports.default = script;

},{"fc1861f2a461eadf":"kFCp3","38362424ce08389d":"iI2wG","735bf0f4d25649bc":"eAZQA","459d2290f0fd3879":"cAZxc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kFCp3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "inputDataTemplate",
    props: {
        item: {}
    },
    data () {
        return {};
    },
    methods: {
        removeItem () {
            this.$emit("remove", this.item.id);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iI2wG":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "input_container"
    }, [
        _c('div', {
            staticClass: "input"
        }, [
            _c('md-field', {
                staticClass: "contextInput"
            }, [
                _c('label', [
                    _vm._v("Address")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.item.address,
                        callback: function($$v) {
                            _vm.$set(_vm.item, "address", $$v);
                        },
                        expression: "item.address"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "input"
        }, [
            _c('md-field', {
                staticClass: "contextInput"
            }, [
                _c('label', [
                    _vm._v("Device ID")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.item.deviceId,
                        callback: function($$v) {
                            _vm.$set(_vm.item, "deviceId", $$v);
                        },
                        expression: "item.deviceId"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "remove"
        }, [
            _vm.item.id ? _c('md-button', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: 'remove',
                        expression: "'remove'"
                    }
                ],
                staticClass: "md-icon-button md-accent",
                on: {
                    "click": _vm.removeItem
                }
            }, [
                _c('md-icon', [
                    _vm._v("remove_circle_outline")
                ])
            ], 1) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eAZQA":[function() {},{}],"cAZxc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5uCx9":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.isLoading ? _c('div', {
        staticClass: "unicast_container"
    }, [
        _c('md-field', {
            staticClass: "contextInput"
        }, [
            _c('label', [
                _vm._v("Network Name")
            ]),
            _vm._v(" "),
            _c('md-input', {
                model: {
                    value: _vm.network.name,
                    callback: function($$v) {
                        _vm.$set(_vm.network, "name", $$v);
                    },
                    expression: "network.name"
                }
            })
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "header"
        }, [
            _c('div', {
                staticClass: "button_div addRow",
                on: {
                    "click": _vm.addRow
                }
            }, [
                _vm._v("add row")
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "button_div resetRow",
                on: {
                    "click": _vm.reset
                }
            }, [
                _vm._v("reset")
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "button_div upload_div",
                on: {
                    "click": _vm.uploadFile
                }
            }, [
                _vm._v("\n      click to upload file\n    ")
            ])
        ]),
        _vm._v(" "),
        _c('md-content', {
            staticClass: "content md-scrollbar"
        }, _vm._l(_vm.network.ips, function(item) {
            return _c('input-data-template', {
                key: item.id,
                attrs: {
                    "item": item
                },
                on: {
                    "remove": _vm.removeItem
                }
            });
        }), 1)
    ], 1) : _c('div', {
        staticClass: "loading"
    }, [
        _c('md-progress-spinner', {
            attrs: {
                "md-mode": "indeterminate"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2PNQQ":[function() {},{}],"BbDSk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aNbQz":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "discover_container"
    }, [
        _c('md-steppers', {
            attrs: {
                "md-vertical": ""
            }
        }, [
            _c('md-step', {
                attrs: {
                    "id": "first",
                    "md-label": "Network name",
                    "md-description": "Network name"
                }
            }, [
                _c('div', {
                    staticClass: "stepContainer"
                }, [
                    _c('div', {
                        staticClass: "header"
                    }, [
                        _c('div', {
                            staticClass: "radio",
                            class: {
                                isActive: _vm.network.useBroadcast
                            }
                        }, [
                            _c('md-radio', {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": true
                                },
                                model: {
                                    value: _vm.network.useBroadcast,
                                    callback: function($$v) {
                                        _vm.$set(_vm.network, "useBroadcast", $$v);
                                    },
                                    expression: "network.useBroadcast"
                                }
                            }, [
                                _vm._v("Broadcast")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "radio",
                            class: {
                                isActive: !_vm.network.useBroadcast
                            }
                        }, [
                            _c('md-radio', {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": false
                                },
                                model: {
                                    value: _vm.network.useBroadcast,
                                    callback: function($$v) {
                                        _vm.$set(_vm.network, "useBroadcast", $$v);
                                    },
                                    expression: "network.useBroadcast"
                                }
                            }, [
                                _vm._v("Unicast")
                            ])
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "content"
                    }, [
                        _vm.network.useBroadcast ? _c('broadcast-template', {
                            attrs: {
                                "network": _vm.network
                            }
                        }) : _c('unicast-template', {
                            attrs: {
                                "network": _vm.network
                            }
                        })
                    ], 1)
                ])
            ]),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": "second",
                    "md-label": "Discover network",
                    "md-description": "Discover"
                }
            }, [
                _c('div', {
                    staticClass: "stepContainer"
                }, [
                    _c('discover-table', {
                        attrs: {
                            "devices": _vm.devices,
                            "state": _vm.state,
                            "selected": _vm.selected,
                            "network": _vm.network
                        },
                        on: {
                            "discover": _vm.discover,
                            "select": _vm.selectDevice,
                            "stop": _vm.stopDiscovering
                        }
                    })
                ], 1)
            ]),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": "third",
                    "md-label": "Create network",
                    "md-description": "Create"
                }
            }, [
                _c('div', {
                    staticClass: "stepContainer"
                }, [
                    _c('div', {
                        staticClass: "loading"
                    }, [
                        _vm.state === _vm.STATES.creating ? _c('md-progress-spinner', {
                            attrs: {
                                "md-mode": "indeterminate"
                            }
                        }) : _vm.state === _vm.STATES.created ? _c('md-icon', {
                            staticClass: "md-size-5x"
                        }, [
                            _vm._v("check")
                        ]) : _c('md-button', {
                            attrs: {
                                "disabled": _vm.selected.length === 0
                            },
                            on: {
                                "click": _vm.createNodes
                            }
                        }, [
                            _vm._v("Create Network")
                        ])
                    ], 1)
                ])
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iLHG6":[function() {},{}],"59LCN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7ciIr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("579059f80c632e45");
    if (script.__esModule) script = script.default;
    script.render = require("bcae731aec7df64").render;
    script.staticRenderFns = require("bcae731aec7df64").staticRenderFns;
    script._scopeId = "data-v-93b9f6";
    script.__cssModules = require("955b23c6bb66b669").default;
    require("d22ce6fd9ba531").default(script);
    script.__scopeId = 'data-v-93b9f6';
    script.__file = "manageDevicesPanel.vue";
};
initialize();
exports.default = script;

},{"579059f80c632e45":"h1QT4","bcae731aec7df64":"XefZc","955b23c6bb66b669":"9j5kX","d22ce6fd9ba531":"kl55J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h1QT4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _devicemonitorVue = require("../components/monitoring/devicemonitor.vue");
var _devicemonitorVueDefault = parcelHelpers.interopDefault(_devicemonitorVue);
var _spinalEnvViewerPluginEventEmitter = require("spinal-env-viewer-plugin-event-emitter");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _monitorState = require("../../js/monitorState");
const { spinalPanelManagerService } = require("523bb7fb2f4660c3");
var scriptExports = {
    name: "manageDevicesPanel",
    components: {
        "device-monitoring": (0, _devicemonitorVueDefault.default)
    },
    data () {
        this.PAGES = {
            selection: 0,
            loading: 1,
            creation: 2,
            success: 3,
            error: 4
        };
        this.context;
        this.graph;
        this.selectedNode;
        this.network;
        this.organ;
        return {
            devices: [],
            pageSelected: this.PAGES.creation
        };
    },
    created () {
        (0, _spinalEnvViewerPluginEventEmitter.spinalEventEmitter).on("deviceProfileContext-ChangeSupervision", ()=>{});
    },
    methods: {
        async opened ({ context, graph, selectedNode }) {
            this.pageSelected = this.PAGES.loading;
            this.setPanelTitle(selectedNode.name);
            (0, _monitorState.monitorState).clear();
            try {
                const [nodeId, contextId] = [
                    selectedNode.id,
                    context.id
                ];
                this.context = context;
                this.graph = graph;
                this.selectedNode = selectedNode;
                await (0, _monitorState.monitorState).init(graph, contextId, nodeId);
                const { devices, profilIds } = await this.getBmsDevices(contextId, nodeId);
                this.devices = devices;
                await this.saveProfilIds(profilIds);
                console.log((0, _monitorState.monitorState));
                this.pageSelected = this.PAGES.selection;
            } catch (error) {
                console.error(error);
                this.pageSelected = this.PAGES.error;
            }
        },
        closed () {},
        async getBmsDevices (contextId, id) {
            return (0, _utilitiesDefault.default).getBmsDevices(contextId, id).then((devices)=>{
                const profilIds = new Set([]);
                const promises = devices.map(async (el)=>{
                    const res = el.get();
                    const profile = await (0, _utilitiesDefault.default).getProfilLinkedToDevice(res.id);
                    if (profile) {
                        const { id } = profile;
                        res.profilId = id;
                        profilIds.add(id);
                    }
                    return res;
                });
                return Promise.all(promises).then((devices)=>{
                    return {
                        devices,
                        profilIds: Array.from(profilIds)
                    };
                }).catch((err)=>{});
            });
        },
        saveProfilIds (profilIds) {
            const promises = profilIds.map((id)=>(0, _monitorState.monitorState).addProfile(id));
            return Promise.resolve(promises);
        },
        //////////////////////////////////////////    ////              CLIKS                       //////////////////////////////////////////
        async startAllMonitoring () {
            // const length = this.devices.length;
            // this.devices.forEach((device) => {
            //   const deviceId = device.id;
            //   const [ref] = this.$refs[deviceId];
            //   if (ref) {
            //     ref.startMonitoring();
            //   }
            // });
            const references = this.devices.map((el)=>this.$refs[el.id] ? this.$refs[el.id][0] : undefined).filter((el)=>!!el).map((ref)=>{
                return async ()=>{
                    const model = await ref.startMonitoring();
                    await (0, _utilitiesDefault.default).waitModelReady(model);
                };
            });
            await (0, _utilitiesDefault.default).consumeBatch(references, 30);
        // while (references.length > 0) {
        //   const model = await ref.startMonitoring();
        //   await utilities.waitModelReady(model);
        //   // await this.execFunction(refs, (ref) => ref.startMonitoring());
        //   // delay(2000);
        // }
        },
        async restartAllMonitoring () {
            const references = this.devices.map((el)=>this.$refs[el.id] ? this.$refs[el.id][0] : undefined).filter((el)=>!!el).map((ref)=>{
                return async ()=>{
                    const model = await ref.restartMonitoring();
                    await (0, _utilitiesDefault.default).waitModelReady(model);
                };
            });
            await (0, _utilitiesDefault.default).consumeBatch(references, 30);
        // const length = this.devices.length;
        // this.devices.forEach((device) => {
        //   const deviceId = device.id;
        //   const [ref] = this.$refs[deviceId];
        //   if (ref) {
        //     ref.restartMonitoring();
        //   }
        // });
        // const references = this.devices
        //   .map((el) => (this.$refs[el.id] ? this.$refs[el.id][0] : undefined))
        //   .filter((el) => !!el);
        // while (references.length > 0) {
        //   const refs = references.splice(0, 10);
        //   await this.execFunction(refs, (ref) => ref.restartMonitoring());
        //   // delay(2000);
        // }
        // for (const device of this.devices) {
        //   const deviceId = device.id;
        //   const [ref] = this.$refs[deviceId];
        //   if (ref) {
        //     await ref.restartMonitoring();
        //   }
        // }
        },
        async stopAllMonitoring () {
            // this.devices.forEach((device) => {
            //   const deviceId = device.id;
            //   const [ref] = this.$refs[deviceId];
            //   if (ref) {
            //     ref.stopMonitoring();
            //   }
            // });
            const references = this.devices.map((el)=>this.$refs[el.id] ? this.$refs[el.id][0] : undefined).filter((el)=>!!el);
            while(references.length > 0){
                const refs = references.splice(0, 10);
                await this.execFunction(refs, (ref)=>ref.stopMonitoring());
            }
        // for (const device of this.devices) {
        //   const deviceId = device.id;
        //   const [ref] = this.$refs[deviceId];
        //   if (ref) {
        //     await ref.stopMonitoring();
        //   }
        // }
        },
        changeTimeSeries (value) {
            this.devices.forEach((device)=>{
                const deviceId = device.id;
                const [ref] = this.$refs[deviceId];
                if (ref) ref.updateTimeSeries(value);
            });
        // const length = this.devices.length;
        // let index = 0;
        // while (index <= length - 1) {
        //    const deviceId = this.devices[index].id;
        //    const [ref] = this.$refs[deviceId];
        //    if (ref) {
        //       ref.updateTimeSeries(value);
        //    }
        //    index++;
        // }
        },
        setPanelTitle (title) {
            spinalPanelManagerService.panels.manageDevicesPanel.panel.setTitle(`Manage devices monitoring : ${title}`);
        },
        execFunction (array, callback) {
            const promises = array.map((el)=>callback(el));
            return Promise.all(promises);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/monitoring/devicemonitor.vue":"2J7fT","spinal-env-viewer-plugin-event-emitter":"8ZmYI","../../js/utilities":"3CjaB","../../js/monitorState":"4Rn4Z","523bb7fb2f4660c3":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2J7fT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d061ba1b1d6bc1da");
    if (script.__esModule) script = script.default;
    script.render = require("bbbc21ee7c85d8cb").render;
    script.staticRenderFns = require("bbbc21ee7c85d8cb").staticRenderFns;
    script._scopeId = "data-v-56a517";
    script.__cssModules = require("6c32ba0c29ff1e91").default;
    require("76225a832cfcf91a").default(script);
    script.__scopeId = 'data-v-56a517';
    script.__file = "devicemonitor.vue";
};
initialize();
exports.default = script;

},{"d061ba1b1d6bc1da":"1KEbm","bbbc21ee7c85d8cb":"gsyOv","6c32ba0c29ff1e91":"5PupX","76225a832cfcf91a":"2Xw9Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1KEbm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilities = require("../../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _monitorState = require("../../../js/monitorState");
var scriptExports = {
    name: "deviceMonitoring",
    props: {
        device: {
            required: true
        },
        // context: { required: true },
        // graph: { required: true },
        profilId: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            saveTimeSeries: false,
            model: undefined
        };
    },
    async created () {
        this.model = await (0, _utilitiesDefault.default).getModel(this.device.id);
        if (this.model && this.model.saveTimeSeries) this.saveTimeSeries = this.model.saveTimeSeries.get();
    },
    methods: {
        async startMonitoring () {
            this.model = await (0, _monitorState.monitorState).startMonitoring(this.device.id, this.profilId, this.model);
            return this.model;
        // const deviceId = this.device.id;
        // const contextId = this.context.id;
        // await utilities.startMonitoring(this.graph, contextId, deviceId);
        // if (!this.model || this.model === -1) {
        //   const realNode = SpinalGraphService.getRealNode(this.device.id);
        //   this.model = await utilities.getModel(realNode);
        // }
        },
        stopMonitoring () {
            return (0, _monitorState.monitorState).stopMonitoring(this.device.id, this.profilId, this.model);
        // if (this.model != -1 && this.model.listen) {
        //    this.model.listen.set(false);
        // }
        // return utilities.stopMonitoring(this.device.id);
        },
        async restartMonitoring () {
            await this.stopMonitoring();
            return new Promise((resolve)=>{
                setTimeout(async ()=>{
                    this.model = await this.startMonitoring();
                    resolve(this.model);
                }, 1500);
            });
        // if (!utilities.hasProfilLinked(this.device.id)) return -1;
        // await utilities.stopMonitoring(this.device.id);
        // return new Promise((resolve, reject) => {
        //   setTimeout(async () => {
        //     await this.startMonitoring();
        //     resolve(true);
        //   }, 1500);
        // });
        },
        updateTimeSeries (value) {
            this.saveTimeSeries = value;
        },
        //////////////////////////////////////////    ////              DISABLED                    //////////////////////////////////////////
        disabledRestart () {
            const model = this.model;
            return !this.profilId || !(model && model !== -1 && model.listen && model.listen.get());
        },
        disabledStart () {
            if (!this.hasProfil) return true;
            const model = this.model;
            return model && model !== -1 && model.listen && model.listen.get();
        },
        disabledStop () {
            const model = this.model;
            return !this.hasProfil || !(model && model !== -1 && model.listen && model.listen.get());
        }
    },
    computed: {
        state () {
            return this.model && this.model.listen && this.model.listen.get() ? "Running" : "Stopped";
        },
        hasProfil () {
            return this.profilId;
        }
    },
    watch: {
        saveTimeSeries () {
            if (this.model && this.model !== -1) {
                if (this.model.saveTimeSeries) this.model.saveTimeSeries.set(this.saveTimeSeries);
                else this.model.add_attr({
                    saveTimeSeries: this.saveTimeSeries
                });
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/utilities":"3CjaB","../../../js/monitorState":"4Rn4Z","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4Rn4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "monitorState", ()=>monitorState);
var _utilities = require("./utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
class MonitorSate {
    constructor(){
        this.profils = new Map();
        this.network;
        this.organ;
        this.graph;
        this.context;
    }
    async init(graph, contextId, nodeId) {
        this.graph = graph;
        this.context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        this.network = await (0, _utilitiesDefault.default).getNetwork(nodeId, contextId);
        const networkId = this.network.getId().get();
        this.organ = await (0, _utilitiesDefault.default).getOrgan(networkId, contextId);
    }
    async startMonitoring(deviceId, profilId, argModel) {
        if (!profilId) return -1;
        const infoMonit = this.profils.get(profilId);
        if (!infoMonit) return -1;
        const model = await this.getModel(deviceId, argModel);
        const deviceNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(deviceId);
        return (0, _utilitiesDefault.default).createOrModifyListenerModel(this.graph, this.context, this.network, model, infoMonit, this.organ, deviceNode);
    }
    async stopMonitoring(deviceId, profilId, argModel) {
        try {
            if (!profilId) return -1;
            const model = await this.getModel(deviceId, argModel);
            if (model != -1 && model.listen) model.listen.set(false);
        } catch (error) {}
    }
    async addProfile(profilId) {
        if (this.profils.get(profilId)) return;
        const intervals = await this.getIntervalsModel(profilId);
        this.profils.set(profilId, intervals);
    }
    getProfilIntervals(profilId) {
        return this.profils.get(profilId);
    }
    async updateProfile(profilId) {
        const intervals = await this.getIntervalsModel(profilId);
        this.profils.set(profilId, intervals);
    }
    async getIntervalsModel(profilId) {
        return (0, _utilitiesDefault.default).getProfilIntervals(profilId).then((result)=>{
            const data = result.map(({ monitoring, children })=>{
                return {
                    monitoring: monitoring.Monitoring,
                    interval: monitoring.IntervalTime,
                    children
                };
            });
            const profilNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(profilId);
            return new (0, _spinalModelBacnet.SpinalMonitorInfoModel)(profilNode, data);
        }).catch((err)=>{
            console.error(err);
            return;
        });
    }
    async getModel(deviceId, argModel) {
        return argModel && argModel !== -1 ? argModel : await (0, _utilitiesDefault.default).getModel(deviceId);
    }
    clear() {
        this.network = null;
        this.organ = null;
        this.profils.clear();
    }
}
const monitorState = new MonitorSate();

},{"./utilities":"3CjaB","spinal-env-viewer-plugin-network-tree-service":"aaFv2","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bacnet":"aS2yR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gsyOv":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "device"
    }, [
        _c('div', {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.device.name,
                    expression: "device.name"
                }
            ],
            staticClass: "name"
        }, [
            _vm._v("\n    " + _vm._s(_vm.device.name) + "\n  ")
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "state",
            class: _vm.state
        }, [
            _vm._v("\n    " + _vm._s(_vm.state) + "\n  ")
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "actions"
        }, [
            _c('md-button', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: 'start',
                        expression: "'start'"
                    }
                ],
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "disabled": _vm.disabledStart()
                },
                on: {
                    "click": _vm.startMonitoring
                }
            }, [
                _c('md-icon', [
                    _vm._v("play_arrow")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: 'restart',
                        expression: "'restart'"
                    }
                ],
                staticClass: "md-icon-button md-primary",
                attrs: {
                    "disabled": _vm.disabledRestart()
                },
                on: {
                    "click": _vm.restartMonitoring
                }
            }, [
                _c('md-icon', [
                    _vm._v("replay")
                ])
            ], 1),
            _vm._v(" "),
            _c('md-button', {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: 'stop',
                        expression: "'stop'"
                    }
                ],
                staticClass: "md-icon-button md-accent",
                attrs: {
                    "disabled": _vm.disabledStop()
                },
                on: {
                    "click": _vm.stopMonitoring
                }
            }, [
                _c('md-icon', [
                    _vm._v("stop")
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
                        staticClass: "md-primary",
                        model: {
                            value: _vm.saveTimeSeries,
                            callback: function($$v) {
                                _vm.saveTimeSeries = $$v;
                            },
                            expression: "saveTimeSeries"
                        }
                    }, [
                        _vm._v("Save TimeSeries")
                    ])
                ], 1)
            ])
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5PupX":[function() {},{}],"2Xw9Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"XefZc":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "manage_panel_container"
    }, [
        _vm.pageSelected === _vm.PAGES.selection ? _c('div', {
            staticClass: "manage_container"
        }, [
            _c('div', {
                staticClass: "header"
            }, [
                _c('div', [
                    _c('md-button', {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: 'start all devices',
                                expression: "'start all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.startAllMonitoring
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("play_arrow")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: 'restart all devices',
                                expression: "'restart all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.restartAllMonitoring
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("replay")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: 'stop all devices',
                                expression: "'stop all devices'"
                            }
                        ],
                        staticClass: "md-icon-button md-accent",
                        on: {
                            "click": _vm.stopAllMonitoring
                        }
                    }, [
                        _c('md-icon', {
                            staticClass: "md-accent"
                        }, [
                            _vm._v("stop")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-primary",
                        on: {
                            "click": function($event) {
                                return _vm.changeTimeSeries(true);
                            }
                        }
                    }, [
                        _vm._v("Save all time series\n        ")
                    ]),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.changeTimeSeries(false);
                            }
                        }
                    }, [
                        _vm._v("Stop saving all time\n          series")
                    ])
                ], 1)
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "devices_list"
            }, _vm._l(_vm.devices, function(device) {
                return _c('device-monitoring', {
                    key: device.id,
                    ref: device.id,
                    refInFor: true,
                    attrs: {
                        "device": device,
                        "profilId": device.profilId,
                        "context": _vm.context,
                        "graph": _vm.graph
                    }
                });
            }), 1)
        ]) : _vm.pageSelected === _vm.PAGES.loading ? _c('div', {
            staticClass: "state"
        }, [
            _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c('div', {
            staticClass: "state"
        }, [
            _c('md-icon', {
                staticClass: "md-size-5x"
            }, [
                _vm._v("close")
            ])
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9j5kX":[function() {},{}],"kl55J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6WPxw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1c6e290ccdd5c149");
    if (script.__esModule) script = script.default;
    script.render = require("90372c007399affc").render;
    script.staticRenderFns = require("90372c007399affc").staticRenderFns;
    script._scopeId = "data-v-6ffe52";
    script.__cssModules = require("995961c387093d46").default;
    require("d3ce8c39d9b0a1af").default(script);
    script.__scopeId = 'data-v-6ffe52';
    script.__file = "monitorConnectorPanel.vue";
};
initialize();
exports.default = script;

},{"1c6e290ccdd5c149":"9PdYs","90372c007399affc":"XQNZ6","995961c387093d46":"hIX8C","d3ce8c39d9b0a1af":"7OkDO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9PdYs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "monitorConnectorPanel",
    components: {},
    data () {
        this.contextId;
        return {
            nodeId: null,
            organs: undefined
        };
    },
    methods: {
        async opened ({ contextId, nodeId }) {
            this.contextId = contextId;
            this.nodeId = nodeId;
            this.organs = await this.getOrganModel(nodeId);
        // console.log("organModel", this.organModel);
        },
        closed () {},
        getOrganModel (nodeIds) {
            if (!Array.isArray(nodeIds)) nodeIds = [
                nodeIds
            ];
            const promises = nodeIds.map((nodeId)=>{
                const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
                return realNode.getElement();
            });
            return Promise.all(promises);
        },
        restartOrgan (organ) {
            organ.restart.set(true);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"XQNZ6":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "connector_monitor_container"
    }, _vm._l(_vm.organs, function(organ) {
        return _c('div', {
            key: organ.id.get(),
            staticClass: "organ_section"
        }, [
            _c('div', {
                staticClass: "name"
            }, [
                _vm._v(_vm._s(organ.name.get()))
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "actions"
            }, [
                _c('md-button', {
                    staticClass: "md-dense md-primary",
                    on: {
                        "click": function($event) {
                            return _vm.restartOrgan(organ);
                        }
                    }
                }, [
                    _vm._v("Restart")
                ])
            ], 1)
        ]);
    }), 0);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hIX8C":[function() {},{}],"7OkDO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aC6cU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextVue = require("./createContext.vue");
var _createContextVueDefault = parcelHelpers.interopDefault(_createContextVue);
var _modifyTimeIntervalVue = require("./modifyTimeInterval.vue");
var _modifyTimeIntervalVueDefault = parcelHelpers.interopDefault(_modifyTimeIntervalVue);
var _addOrganVue = require("./addOrgan.vue");
var _addOrganVueDefault = parcelHelpers.interopDefault(_addOrganVue);
var _linkToProfilDialogVue = require("./linkToProfilDialog.vue");
var _linkToProfilDialogVueDefault = parcelHelpers.interopDefault(_linkToProfilDialogVue);
var _unLinkToProfilDialogVue = require("./unLinkToProfilDialog.vue");
var _unLinkToProfilDialogVueDefault = parcelHelpers.interopDefault(_unLinkToProfilDialogVue);
var _linkToBimAutomateVue = require("./linkToBimAutomate.vue");
var _linkToBimAutomateVueDefault = parcelHelpers.interopDefault(_linkToBimAutomateVue);
var _getBacnetValueVue = require("./getBacnetValue.vue");
var _getBacnetValueVueDefault = parcelHelpers.interopDefault(_getBacnetValueVue);
var _createSubNetworkVue = require("./createSubNetwork.vue");
var _createSubNetworkVueDefault = parcelHelpers.interopDefault(_createSubNetworkVue);
const { SpinalMountExtention } = require("76d5c96468647d9e");
const dialogs = [
    {
        name: "createSubNetworkDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createSubNetworkVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createGTBNetworkContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "modifyTimeIntervalDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _modifyTimeIntervalVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "addOrganDialogDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _addOrganVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkProfilToBmsDeviceDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkToProfilDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkToBimAutomateDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkToBimAutomateVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "unLinkProfilToBmsDeviceDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _unLinkToProfilDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "getBacnetValueDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _getBacnetValueVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","./createContext.vue":"8lkK9","./modifyTimeInterval.vue":"cuDXV","./addOrgan.vue":"ag1qf","./linkToProfilDialog.vue":"59M9x","./unLinkToProfilDialog.vue":"7Xp2X","./linkToBimAutomate.vue":"hZhA9","./getBacnetValue.vue":"fh2ep","./createSubNetwork.vue":"5dc0j","76d5c96468647d9e":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8lkK9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4931fbd757808767");
    if (script.__esModule) script = script.default;
    script.render = require("7d256a1c33e857ba").render;
    script.staticRenderFns = require("7d256a1c33e857ba").staticRenderFns;
    script._scopeId = "data-v-285993";
    require("7c2776adf2f3798").default(script);
    script.__scopeId = 'data-v-285993';
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"4931fbd757808767":"leVV9","7d256a1c33e857ba":"4AUMj","7c2776adf2f3798":"gcQTd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"leVV9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../../js/constants");
var scriptExports = {
    name: "createNetworkContextDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: "",
            title: "",
            label: "",
            createContext: "",
            selectedNode: null,
            context: null
        };
    },
    methods: {
        opened (option) {
        // console.log(option);
        },
        removed (option) {
            if (option.closeResult && option.inputValue.length > 0) (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(option.inputValue.trim(), (0, _constants.CONTEXT_TYPE));
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue.trim()
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../../js/constants":"4PgYf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4AUMj":[function(require,module,exports,__globalThis) {
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
            _vm._v("Create BMS network context")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("Context Name")
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

},{}],"gcQTd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cuDXV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a4445692fa22c932");
    if (script.__esModule) script = script.default;
    script.render = require("5a48dc79ff8855ce").render;
    script.staticRenderFns = require("5a48dc79ff8855ce").staticRenderFns;
    script._scopeId = "data-v-f326ad";
    require("e7a9e02b7beb91e0").default(script);
    script.__scopeId = 'data-v-f326ad';
    script.__file = "modifyTimeInterval.vue";
};
initialize();
exports.default = script;

},{"a4445692fa22c932":"eoX0x","5a48dc79ff8855ce":"2RuCv","e7a9e02b7beb91e0":"fG9eG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eoX0x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "modifyTimeInterval",
    props: [
        "onFinised"
    ],
    data () {
        return {
            callback: undefined,
            showDialog: true,
            inputValue: 5000
        };
    },
    methods: {
        opened (option) {
            if (option.editMode && option.currentTime) this.inputValue = option.currentTime;
            this.callback = option.callback;
        },
        removed (option) {
            if (option.closeResult && option.inputValue >= 1000 && typeof this.callback === "function") this.callback(option.inputValue);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        disabledBtn () {
            return this.inputValue < 1000;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2RuCv":[function(require,module,exports,__globalThis) {
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
            _vm._v("Time interval")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("time interval")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    attrs: {
                        "type": "number"
                    },
                    model: {
                        value: _vm.inputValue,
                        callback: function($$v) {
                            _vm.inputValue = $$v;
                        },
                        expression: "inputValue"
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledBtn()
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

},{}],"fG9eG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ag1qf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e2e8430d92f73546");
    if (script.__esModule) script = script.default;
    script.render = require("3290696c40eba60a").render;
    script.staticRenderFns = require("3290696c40eba60a").staticRenderFns;
    script._scopeId = "data-v-34706f";
    script.__cssModules = require("aaef6c94ebf77e79").default;
    require("cc861b6fd94e552e").default(script);
    script.__scopeId = 'data-v-34706f';
    script.__file = "addOrgan.vue";
};
initialize();
exports.default = script;

},{"e2e8430d92f73546":"8DZ6D","3290696c40eba60a":"eqLnT","aaef6c94ebf77e79":"FBYT5","cc861b6fd94e552e":"7qB3u","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8DZ6D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../../../service");
var _addOrganBtnVue = require("../components/addOrganBtn.vue");
var _addOrganBtnVueDefault = parcelHelpers.interopDefault(_addOrganBtnVue);
var scriptExports = {
    name: "addOrganDialog",
    props: [
        "onFinised"
    ],
    components: {
        "organ-button": (0, _addOrganBtnVueDefault.default)
    },
    data () {
        // this.organs = new Lst();
        return {
            contextId: undefined,
            organsDisplayed: [],
            showDialog: true
        };
    },
    methods: {
        opened (option) {
            // this.organs.bind(() => {
            //    this.organsDisplayed = this.organs.get();
            // });
            this.contextId = option.context.id.get();
            this.getOrgans();
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
        async getOrgans () {
            // const organs = [];
            const connection = spinal.spinalSystem.conn;
            this.organsDisplayed = await (0, _service.SpinalBacnetPluginService).getOrgans(connection);
        // // spinalCore.load(connection,);
        // spinalCore.load_type(connection, "SpinalOrganConfigModel", (file) => {
        //    // const obj = {
        //    //    name: file.name.get(),
        //    //    type: file.type.get(),
        //    //    server_id: file._server_id,
        //    // };
        //    this.organsDisplayed.push(file);
        // });
        },
        createAndLinkNode (server_id) {
            (0, _service.SpinalBacnetPluginService).addToReference(server_id, this.contextId).then((result)=>{
                this.$refs[server_id].isLinked = true;
            }).catch(()=>{
                this.$refs[server_id].isLinked = false;
            });
        },
        removeAndUnlinkNode (server_id) {
            (0, _service.SpinalBacnetPluginService).removeToReference(server_id, this.contextId).then(()=>{
                this.$refs[server_id].isLinked = false;
            }).catch((err)=>{
                this.$refs[server_id].isLinked = false;
            });
        },
        existeInReference (server_id) {
            return (0, _service.SpinalBacnetPluginService).isReferencedInContext(server_id, this.contextId);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service":"kH9yt","../components/addOrganBtn.vue":"lKtiq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kH9yt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinalBacnetPluginService", ()=>SpinalBacnetPluginService);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelOpcua = require("spinal-model-opcua");
class SpinalBacnetPluginService {
    constructor(){}
    static getOrgans(connection) {
        const path = "/__users__/admin/organs";
        return new Promise((resolve, reject)=>{
            connection.load_or_make_dir(`${path}`, (directory)=>{
                const promises = [];
                for(let index = 0; index < directory.length; index++){
                    const element = directory[index];
                    promises.push(this.getFileModel(element));
                }
                return Promise.all(promises).then((result)=>{
                    resolve(result.map((organ)=>{
                        const id = organ._server_id;
                        const obj = organ.get();
                        obj._server_id = id;
                        return obj;
                    }));
                });
            });
        });
    }
    static addToReference(organServerId, contextId) {
        const organModel = (0, _spinalCoreConnectorjsType.FileSystem)._objects[organServerId];
        if (organModel) {
            const nodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: organModel.name.get(),
                networkName: organModel.name.get(),
                type: organModel.type.get()
            }, organModel);
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            organModel.addReference(contextId, realNode);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(contextId, nodeId, contextId, (0, _spinalModelBacnet.SpinalOrganConfigModel).CONTEXT_TO_ORGAN_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        }
        return Promise.reject("No model found for this server_id");
    }
    static removeToReference(organServerId, contextId) {
        const organModel = (0, _spinalCoreConnectorjsType.FileSystem)._objects[organServerId];
        if (organModel) return organModel.removeReference(contextId).then((node)=>{
            const childId = node.getId().get();
            (0, _spinalEnvViewerGraphService.SpinalGraphService).removeChild(contextId, childId, (0, _spinalModelBacnet.SpinalOrganConfigModel).CONTEXT_TO_ORGAN_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        });
        throw new Error("No model found for this server_id");
    }
    static isReferencedInContext(organServerId, contextId) {
        const organModel = (0, _spinalCoreConnectorjsType.FileSystem)._objects[organServerId];
        if (organModel) return organModel.isReferencedInContext(contextId);
        throw new Error("No model found for this server_id");
    }
    static getFileModel(file) {
        return new Promise((resolve, reject)=>{
            file.load(async (x)=>{
                if (x instanceof (0, _spinalModelBacnet.SpinalOrganConfigModel) || x instanceof (0, _spinalModelOpcua.SpinalOrganOPCUA)) return resolve(x);
                if (x.type && (x.type.get() === (0, _spinalModelBacnet.SpinalOrganConfigModel).TYPE || x.type.get() === (0, _spinalModelOpcua.SpinalOrganOPCUA).TYPE)) return resolve(x);
                x.element.ptr.load((el)=>resolve(el));
            //   const element = await x.getElement();
            //   resolve(element);
            });
        });
    }
    /**
   * Listen Model
   */ /**
   * Link Profil to BMS Device
   */ static linkProfilToDevice(bmsContextId, bmsDeviceId, profilId) {
        return Promise.all([
            this.getEndpointsMap(bmsContextId, bmsDeviceId),
            this.getProfilItemsMap(profilId)
        ]).then((result)=>{});
    }
    static getEndpointsMap(bmsContextId, bmsDeviceId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(bmsDeviceId, bmsContextId, (node)=>{
            if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName) {
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return true;
            }
            return false;
        }).then((nodes)=>{
            const bmsDeviceMap = new Map();
            const promises = nodes.map(async (el)=>{
                // const realNode = SpinalGraphService.getRealNode(el.id.get());
                // const element = await realNode.getElement();
                // const networkId = element.get()
                // _temp.nodeId = el.id.get();
                // bmsDeviceMap.set(_temp.id, _temp);
                // return _temp;
                bmsDeviceMap.set(el.idNetwork.get(), el);
            });
            return Promise.all(promises).then(()=>{
                return bmsDeviceMap;
            });
        });
    }
    static getProfilItemsMap(profilId) {
        return this.getItemsList(profilId).then((items)=>{});
    }
    static getItemsList(virtualDeviceId) {
        const ITEM_LIST_RELATION = "hasItemList";
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(virtualDeviceId, [
            ITEM_LIST_RELATION
        ]).then((itemList)=>{
            const promises = itemList.map((el)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(el.id.get(), [
                    this.ITEM_LIST_TO_ITEMS_RELATION
                ]));
            return Promise.all(promises).then((items)=>{
                return items.flat().map((el)=>el.get());
            });
        }).catch((err)=>{
            return [];
        });
    }
}

},{"spinal-core-connectorjs_type":"1A32E","spinal-env-viewer-graph-service":"9LAk7","spinal-model-bacnet":"aS2yR","spinal-model-bmsnetwork":"haihS","spinal-model-opcua":"l0Ztm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lKtiq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d187bc6b81b0ccaa");
    if (script.__esModule) script = script.default;
    script.render = require("803429d367b8aa4e").render;
    script.staticRenderFns = require("803429d367b8aa4e").staticRenderFns;
    script._scopeId = "data-v-993186";
    script.__cssModules = require("40daf4825fb4d2a0").default;
    require("e11be307a172863e").default(script);
    script.__scopeId = 'data-v-993186';
    script.__file = "addOrganBtn.vue";
};
initialize();
exports.default = script;

},{"d187bc6b81b0ccaa":"5JWNm","803429d367b8aa4e":"gu5xc","40daf4825fb4d2a0":"iqXOI","e11be307a172863e":"5LTIY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5JWNm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../../../service");
var scriptExports = {
    name: "addOrganBtn",
    props: {
        server_id: {},
        contextId: {}
    },
    data () {
        return {
            isFound: false,
            isLinked: false
        };
    },
    mounted () {
        (0, _service.SpinalBacnetPluginService).isReferencedInContext(this.server_id, this.contextId).then((isLinked)=>{
            this.isFound = true;
            this.isLinked = isLinked;
        });
    },
    methods: {
        createAndLinkNode () {
            this.$emit("add", this.server_id);
        },
        removeAndUnlinkNode () {
            this.$emit("remove", this.server_id);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service":"kH9yt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gu5xc":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isFound && !_vm.isLinked ? _c('md-button', {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: 'create and Link Node',
                expression: "'create and Link Node'"
            }
        ],
        staticClass: "md-icon-button md-primary",
        on: {
            "click": _vm.createAndLinkNode
        }
    }, [
        _c('md-icon', [
            _vm._v("drive_file_rename_outline")
        ])
    ], 1) : _vm.isFound && _vm.isLinked ? _c('md-button', {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: 'Remove and unlink Node',
                expression: "'Remove and unlink Node'"
            }
        ],
        staticClass: "md-icon-button md-accent",
        on: {
            "click": _vm.removeAndUnlinkNode
        }
    }, [
        _c('md-icon', [
            _vm._v("delete")
        ])
    ], 1) : _c('md-button', [
        _c('md-progress-spinner', {
            attrs: {
                "md-diameter": 30,
                "md-stroke": 3,
                "md-mode": "indeterminate"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iqXOI":[function() {},{}],"5LTIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eqLnT":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "selectOrganDialog",
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
            _vm._v("Add BMS organ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-table', {
                attrs: {
                    "md-sort": "name",
                    "md-sort-order": "asc",
                    "md-fixed-header": ""
                },
                scopedSlots: _vm._u([
                    {
                        key: "md-table-row",
                        fn: function(ref) {
                            var item = ref.item;
                            return _c('md-table-row', {}, [
                                _c('md-table-cell', {
                                    attrs: {
                                        "md-label": "Name"
                                    }
                                }, [
                                    _vm._v(_vm._s(item.name))
                                ]),
                                _vm._v(" "),
                                _c('md-table-cell', {
                                    attrs: {
                                        "md-label": "Type"
                                    }
                                }, [
                                    _vm._v(_vm._s(item.type))
                                ]),
                                _vm._v(" "),
                                _c('md-table-cell', {
                                    attrs: {
                                        "md-label": "Action"
                                    }
                                }, [
                                    _c('organ-button', {
                                        ref: item._server_id,
                                        attrs: {
                                            "server_id": item._server_id,
                                            "contextId": _vm.contextId
                                        },
                                        on: {
                                            "add": _vm.createAndLinkNode,
                                            "remove": _vm.removeAndUnlinkNode
                                        }
                                    })
                                ], 1)
                            ], 1);
                        }
                    }
                ]),
                model: {
                    value: _vm.organsDisplayed,
                    callback: function($$v) {
                        _vm.organsDisplayed = $$v;
                    },
                    expression: "organsDisplayed"
                }
            }, [
                _c('md-table-toolbar', [
                    _c('h1', {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Organs")
                    ])
                ]),
                _vm._v(" "),
                _c('md-table-empty-state', {
                    attrs: {
                        "md-label": "No organ found"
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
                _vm._v("Close")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"FBYT5":[function() {},{}],"7qB3u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"59M9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("229fb7ac5d11d84d");
    if (script.__esModule) script = script.default;
    script.render = require("54e520255fb227c").render;
    script.staticRenderFns = require("54e520255fb227c").staticRenderFns;
    script._scopeId = "data-v-1f48c5";
    script.__cssModules = require("591634ea586ff87f").default;
    require("ab78e55ba16dab66").default(script);
    script.__scopeId = 'data-v-1f48c5';
    script.__file = "linkToProfilDialog.vue";
};
initialize();
exports.default = script;

},{"229fb7ac5d11d84d":"l9qCh","54e520255fb227c":"cnOD2","591634ea586ff87f":"eiHzi","ab78e55ba16dab66":"eDvAX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l9qCh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
// import { SpinalBacnetPluginService } from "../../../service";
// import deviceProfilService from "../../js/devices_profil_services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _linkComponentVue = require("../components/links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-component": (0, _linkComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.bmsDevices;
        this.bmsContextId;
        this.PAGES = {
            selection: 0,
            result: 1,
            loading: 2,
            success: 3,
            error: 4,
            creation: 5
        };
        // this.validMaps = new Map();
        // this.invalidMaps = new Map();
        return {
            resultMaps: new Map(),
            showDialog: true,
            pageSelected: this.PAGES.selection,
            percent: 0,
            data: [],
            profils: [],
            devices: [],
            contextSelected: undefined,
            profilSelected: undefined,
            deviceSelected: undefined
        };
    },
    mounted () {
    // EventBus.$on("itemCreated", (id) => {
    //    this.pageSelected = this.PAGES.loading;
    //    this.getAllData().then(() => {
    //       this.pageSelected = this.PAGES.selection;
    //    });
    // });
    },
    methods: {
        async opened (option) {
            this.pageSelected = this.PAGES.loading;
            this.bmsContextId = option.bmsContextId;
            this.bmsDevices = await this.getAllDevices(this.bmsContextId, option.nodeId);
            this.getAllData().then(()=>{
                this.pageSelected = this.PAGES.selection;
            });
        },
        removed (option) {
            this.showDialog = false;
        },
        async createLinks () {
            this.pageSelected = this.PAGES.creation;
            // const promises = this.bmsDevices.map(({ id }) => {
            //    // return SpinalBacnetPluginService.linkProfilToDevice(
            //    //    this.bmsContextId,
            //    //    id,
            //    //    this.deviceSelected
            //    // );
            // });
            const ids = this.bmsDevices.map((el)=>el.id);
            const listeLength = ids.length;
            let isError = false;
            while(!isError && ids.length > 0){
                const id = ids.shift();
                try {
                    await (0, _spinalEnvViewerPluginNetworkTreeService.LinkBmsDeviceService).linkProfilToBmsDevice(this.bmsContextId, id, this.deviceSelected);
                    this.percent = Math.floor(100 * (listeLength - ids.length) / listeLength);
                } catch (error) {
                    console.error(error);
                    isError = true;
                }
            }
            if (isError) {
                this.pageSelected = this.PAGES.error;
                return;
            }
            this.pageSelected = this.PAGES.success;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getAllData () {
            // return deviceProfilService
            return (0, _spinalEnvViewerPluginNetworkTreeService.DeviceProfileUtilities).getDeviceContextTreeStructure().then((result)=>{
                this.data = result;
                this.updateProfils();
                return;
            });
        },
        disabled () {
            return !this.deviceSelected || this.pageSelected === this.PAGES.success;
        },
        getItemsList (deviceId) {
            const found = this.devices.find((el)=>el.id === deviceId);
            if (found) return found.itemList;
        },
        /* Selection */ selectContext (id) {
            this.contextSelected = id;
        },
        selectProfil (id) {
            this.profilSelected = id;
        },
        selectDevice (id) {
            this.deviceSelected = id;
        },
        /* Update */ updateProfils () {
            this.categories = [];
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) this.profils = val.profils;
            }
        },
        updateDevices () {
            this.devices = [];
            if (this.profilSelected) {
                let val = this.profils.find((el)=>el.id === this.profilSelected);
                if (val) this.devices = val.devices;
            }
        },
        getAllDevices (contextId, nodeId) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    return true;
                }
                return false;
            }).then((result)=>{
                return result.map((el)=>el.get());
            });
        }
    },
    watch: {
        async contextSelected () {
            await this.updateProfils();
            this.profilSelected = undefined;
        },
        async profilSelected () {
            this.updateDevices();
            this.deviceSelected = undefined;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-network-tree-service":"aaFv2","../components/links/LinkComponent.vue":"hS35O","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hS35O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ad8227e5bd51d771");
    if (script.__esModule) script = script.default;
    script.render = require("a8bf472a76c5d484").render;
    script.staticRenderFns = require("a8bf472a76c5d484").staticRenderFns;
    script._scopeId = "data-v-4d965b";
    script.__cssModules = require("f7c2c507f74a08eb").default;
    require("565dcd725b7286f8").default(script);
    script.__scopeId = 'data-v-4d965b';
    script.__file = "LinkComponent.vue";
};
initialize();
exports.default = script;

},{"ad8227e5bd51d771":"bCoZP","a8bf472a76c5d484":"iyotM","f7c2c507f74a08eb":"arGTl","565dcd725b7286f8":"9m7Sz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bCoZP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkToGroupTemplateVue = require("./linkToGroupTemplate.vue");
var _linkToGroupTemplateVueDefault = parcelHelpers.interopDefault(_linkToGroupTemplateVue);
var scriptExports = {
    name: "selectionComponent",
    props: {
        context_title: {},
        category_title: {},
        group_title: {},
        data: {},
        profils: {},
        devices: {},
        contextSelected: {},
        profilSelected: {},
        deviceSelected: {}
    },
    components: {
        "link-template": (0, _linkToGroupTemplateVueDefault.default)
    },
    methods: {
        selectContext (res) {
            this.$emit("selectContext", res);
        },
        selectProfil (res) {
            this.$emit("selectProfil", res);
        },
        selectDevice (res) {
            this.$emit("selectDevice", res);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkToGroupTemplate.vue":"7FZZB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7FZZB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("47d88857e33b656c");
    if (script.__esModule) script = script.default;
    script.render = require("9571f73afe1c7de4").render;
    script.staticRenderFns = require("9571f73afe1c7de4").staticRenderFns;
    script._scopeId = "data-v-3f2e9e";
    script.__cssModules = require("31a715c74a902764").default;
    require("d28a797b5215928e").default(script);
    script.__scopeId = 'data-v-3f2e9e';
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"47d88857e33b656c":"63zMe","9571f73afe1c7de4":"6yCqr","31a715c74a902764":"fwevC","d28a797b5215928e":"hbQ40","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"63zMe":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6yCqr":[function(require,module,exports,__globalThis) {
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

},{}],"fwevC":[function() {},{}],"hbQ40":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iyotM":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "selection_container"
    }, [
        _c('div', {
            staticClass: "section"
        }, [
            _c('link-template', {
                attrs: {
                    "title": _vm.context_title,
                    "data": _vm.data,
                    "itemSelected": _vm.contextSelected
                },
                on: {
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
                    "title": _vm.category_title,
                    "data": _vm.profils,
                    "itemSelected": _vm.profilSelected
                },
                on: {
                    "select": _vm.selectProfil
                }
            })
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "section"
        }, [
            _c('link-template', {
                attrs: {
                    "title": _vm.group_title,
                    "data": _vm.devices,
                    "itemSelected": _vm.deviceSelected
                },
                on: {
                    "select": _vm.selectDevice
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"arGTl":[function() {},{}],"9m7Sz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cnOD2":[function(require,module,exports,__globalThis) {
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
            _vm._v("Select Profil ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c('link-component', {
                attrs: {
                    "context_title": 'Profils',
                    "category_title": 'Categories',
                    "group_title": 'Devices',
                    "data": _vm.data,
                    "profils": _vm.profils,
                    "devices": _vm.devices,
                    "contextSelected": _vm.contextSelected,
                    "profilSelected": _vm.profilSelected,
                    "deviceSelected": _vm.deviceSelected
                },
                on: {
                    "selectContext": _vm.selectContext,
                    "selectProfil": _vm.selectProfil,
                    "selectDevice": _vm.selectDevice
                }
            }) : _vm.pageSelected === _vm.PAGES.loading ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c('div', {
                staticClass: "progress-bar"
            }, [
                _c('div', {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c('md-progress-bar', {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
            ], 1) : _vm._e()
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
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": _vm.createLinks
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

},{}],"eiHzi":[function() {},{}],"eDvAX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7Xp2X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c06199695197066a");
    if (script.__esModule) script = script.default;
    script.render = require("d3d4493ae206228a").render;
    script.staticRenderFns = require("d3d4493ae206228a").staticRenderFns;
    script._scopeId = "data-v-06c728";
    script.__cssModules = require("a23d99b305902eba").default;
    require("3de9178dc2a3475d").default(script);
    script.__scopeId = 'data-v-06c728';
    script.__file = "unLinkToProfilDialog.vue";
};
initialize();
exports.default = script;

},{"c06199695197066a":"lsy9e","d3d4493ae206228a":"jpAx4","a23d99b305902eba":"ebVEc","3de9178dc2a3475d":"3QMBK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lsy9e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
// import { SpinalBacnetPluginService } from "../../../service";
// import deviceProfilService from "../../js/devices_profil_services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _linkComponentVue = require("../components/links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-component": (0, _linkComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.bmsDevices;
        this.bmsContextId;
        this.PAGES = {
            selection: 0,
            result: 1,
            loading: 2,
            success: 3,
            error: 4,
            creation: 5
        };
        // this.validMaps = new Map();
        // this.invalidMaps = new Map();
        return {
            resultMaps: new Map(),
            showDialog: true,
            pageSelected: this.PAGES.selection,
            percent: 0
        };
    },
    mounted () {
    // EventBus.$on("itemCreated", (id) => {
    //    this.pageSelected = this.PAGES.loading;
    //    this.getAllData().then(() => {
    //       this.pageSelected = this.PAGES.selection;
    //    });
    // });
    },
    methods: {
        async opened (option) {
            this.pageSelected = this.PAGES.loading;
            this.bmsContextId = option.bmsContextId;
            this.bmsDevices = await this.getAllDevices(this.bmsContextId, option.nodeId);
            this.pageSelected = this.PAGES.selection;
        },
        removed (option) {
            this.showDialog = false;
        },
        async unLink () {
            this.pageSelected = this.PAGES.creation;
            const ids = this.bmsDevices.map((el)=>el.id);
            const listeLength = ids.length;
            let isError = false;
            while(!isError && ids.length > 0){
                const id = ids.shift();
                try {
                    await (0, _spinalEnvViewerPluginNetworkTreeService.LinkBmsDeviceService).unLinkProfilToBmsDevice(this.bmsContextId, id);
                    this.percent = Math.floor(100 * (listeLength - ids.length) / listeLength);
                } catch (error) {
                    console.error(error);
                    isError = true;
                }
            }
            if (isError) {
                this.pageSelected = this.PAGES.error;
                return;
            }
            this.pageSelected = this.PAGES.success;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disabled () {
            return !this.deviceSelected;
        },
        getItemsList (deviceId) {
            const found = this.devices.find((el)=>el.id === deviceId);
            if (found) return found.itemList;
        },
        /* Selection */ selectContext (id) {
            this.contextSelected = id;
        },
        selectProfil (id) {
            this.profilSelected = id;
        },
        selectDevice (id) {
            this.deviceSelected = id;
        },
        /* Update */ updateProfils () {
            this.categories = [];
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) this.profils = val.profils;
            }
        },
        updateDevices () {
            this.devices = [];
            if (this.profilSelected) {
                let val = this.profils.find((el)=>el.id === this.profilSelected);
                if (val) this.devices = val.devices;
            }
        },
        getAllDevices (contextId, nodeId) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    return true;
                }
                return false;
            }).then((result)=>{
                return result.map((el)=>el.get());
            });
        }
    },
    watch: {
        async contextSelected () {
            await this.updateProfils();
            this.profilSelected = undefined;
        },
        async profilSelected () {
            this.updateDevices();
            this.deviceSelected = undefined;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-network-tree-service":"aaFv2","../components/links/LinkComponent.vue":"hS35O","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jpAx4":[function(require,module,exports,__globalThis) {
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
            _vm._v("Unlink device to Profil\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c('div', {
                staticClass: "loading"
            }, [
                _vm._v("\n      Do you want unlink devices to profil ?\n    ")
            ]) : _vm.pageSelected === _vm.PAGES.loading ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c('div', {
                staticClass: "loading"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c('div', {
                staticClass: "progress-bar"
            }, [
                _c('div', {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c('md-progress-bar', {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
            ], 1) : _vm._e()
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
                    "disabled": _vm.pageSelected !== _vm.PAGES.selection
                },
                on: {
                    "click": _vm.unLink
                }
            }, [
                _vm._v("Yes")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"ebVEc":[function() {},{}],"3QMBK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hZhA9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4d78e1e94b43370c");
    if (script.__esModule) script = script.default;
    script.render = require("6b84499cac638edd").render;
    script.staticRenderFns = require("6b84499cac638edd").staticRenderFns;
    script._scopeId = "data-v-879002";
    script.__cssModules = require("a77c1ac2732ecf98").default;
    require("e2a7740d25284eb3").default(script);
    script.__scopeId = 'data-v-879002';
    script.__file = "linkToBimAutomate.vue";
};
initialize();
exports.default = script;

},{"4d78e1e94b43370c":"jTo1y","6b84499cac638edd":"54zxq","a77c1ac2732ecf98":"3AZPe","e2a7740d25284eb3":"1k6Fx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jTo1y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "linkToBimAutomateDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.PAGES = {
            selection: 0,
            configuration: 1,
            result: 2,
            loading: 3,
            success: 4,
            error: 5
        };
        return {
            showDialog: true
        };
    },
    methods: {
        opened (option) {},
        removed (save) {
            save;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        createLink () {}
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"54zxq":[function(require,module,exports,__globalThis) {
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
            _vm._v("Hello")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _c('h1', [
                _vm._v("Hello world")
            ])
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
                on: {
                    "click": _vm.createLink
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

},{}],"3AZPe":[function() {},{}],"1k6Fx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fh2ep":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("22ca749b08afb3e6");
    if (script.__esModule) script = script.default;
    script.render = require("b8433ab0cef0c538").render;
    script.staticRenderFns = require("b8433ab0cef0c538").staticRenderFns;
    script._scopeId = "data-v-f16541";
    script.__cssModules = require("a0eba56f6f51b97").default;
    require("ed4ef9afd91df934").default(script);
    script.__scopeId = 'data-v-f16541';
    script.__file = "getBacnetValue.vue";
};
initialize();
exports.default = script;

},{"22ca749b08afb3e6":"bJLDI","b8433ab0cef0c538":"34tiA","a0eba56f6f51b97":"8Pe8I","ed4ef9afd91df934":"54ci1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bJLDI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../../js/constants");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _utilities = require("../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var scriptExports = {
    name: "GetBacnetValueDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.PAGES = {
            selection: 0,
            loading: 1,
            creation: 2,
            success: 3,
            error: 4
        };
        this.MESSAGES = (0, _constants.MESSAGES);
        return {
            sensor_types: Object.assign([], (0, _constants.SENSOR_TYPES)),
            pageSelected: this.PAGES.creation,
            showDialog: true,
            nodes: undefined,
            context: undefined,
            graph: undefined,
            network: undefined
        };
    },
    methods: {
        async opened (option) {
            this.pageSelected = this.PAGES.loading;
            const { selectedNode, context, graph } = option;
            this.context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(context.id);
            this.graph = graph;
            let devices = await this.getBmsDevices(context.id, selectedNode.id);
            this.nodes = devices.map((el)=>({
                    info: el.get(),
                    progress: -1,
                    message: this.MESSAGES.wait
                }));
            this.network = await this._getNetwork(context.id, selectedNode.id);
            // if (option.networkId) {
            //    this.network = SpinalGraphService.getRealNode(option.networkId);
            // } else {
            //    this.network = await this._getNetwork(
            //       option.contextId,
            //       option.nodeId
            //    );
            // }
            this.pageSelected = this.PAGES.selection;
        },
        removed (save) {
            save;
            this.showDialog = false;
        },
        disabled () {
            if (this.pageSelected !== this.PAGES.selection) return true;
            const found = this.sensor_types.find((el)=>el.checked);
            if (found) return false;
            return true;
        },
        async getBacnetValue () {
            this.pageSelected = this.PAGES.creation;
            const sensors = this.sensor_types.filter((el)=>el.checked).map((el)=>el.value);
            const iterator = [
                ...this.nodes
            ];
            const organ = await this._getOrgan(this.network);
            this.createValue(iterator, sensors, organ);
        },
        createValue (iterator, sensors, organ) {
            console.log("inside createValue...");
            const value = iterator.shift();
            if (value && this.showDialog) {
                // const value = next.value;
                const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(value.info.id);
                const model = new (0, _spinalModelBacnet.SpinalBacnetValueModel)(this.graph, this.context, organ, this.network, realNode, sensors);
                console.log("model", model);
                model.addToNode();
                let progressProcess;
                const modelProcess = model.state.bind(()=>{
                    switch(model.state.get()){
                        case "recover":
                            console.log("recovering...");
                            value.message = this.MESSAGES.recover;
                            value.progress = -1;
                            break;
                        case "progress":
                            console.log("progress...");
                            progressProcess = model.progress.bind(()=>{
                                value.progress = model.progress.get();
                            });
                            break;
                        case "success":
                        case "error":
                            console.log("success or error");
                            model.state.unbind(modelProcess);
                            model.progress.unbind(progressProcess);
                            value.message = this.MESSAGES[model.state.get()];
                            value.progress = -1;
                            this.createValue(iterator, sensors, organ);
                            break;
                        default:
                            break;
                    }
                // if (model.state.get() === "success") {
                //    model.state.unbind(modelProcess);
                //    value.message = this.MESSAGES.success;
                //    value.progress = -1;
                //    this.createValue(iterator, iterator.next(), sensors);
                // } else if (model.state.get() === "error") {
                //    model.state.unbind(modelProcess);
                //    value.message = this.MESSAGES.error;
                //    value.progress = -1;
                //    this.createValue(iterator, iterator.next(), sensors);
                // }
                });
            }
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        async _getNetwork (contextId, nodeId) {
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
            if (info.type.get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
                const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(nodeId, [
                    (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
                ]);
                const organ = parents.find((el)=>el.type.get() === (0, _spinalModelBacnet.SpinalOrganConfigModel).TYPE);
                // console.log("organ", organ);
                if (organ) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(organ.id.get());
            } else {
                const networks = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(contextId, contextId);
                const parentId = await this._getParent(nodeId);
                for (const network of networks){
                    const id = network.id.get();
                    const childId = (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenIds(id);
                    if (childId.indexOf(parentId) !== -1) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
                }
            }
        },
        _getOrgan (network) {
            if (network) return network.getElement();
        },
        async getBmsDevices (contextId, id) {
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
            if (info.type.get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) return [
                info
            ];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(id, contextId, (node)=>{
                if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    return true;
                }
                return false;
            });
        },
        async _getParent (nodeId) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            const parents = await realNode.getParents([
                (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
            ]);
            const found = parents.find((el)=>el.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName);
            if (found) {
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(found);
                return found.getId().get();
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../../js/constants":"4PgYf","spinal-model-bacnet":"aS2yR","spinal-model-bmsnetwork":"haihS","../../js/utilities":"3CjaB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"34tiA":[function(require,module,exports,__globalThis) {
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
            _vm._v("Get Bacnet Value")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c('div', {
                staticClass: "itemList"
            }, _vm._l(_vm.sensor_types, function(item) {
                return _c('div', {
                    key: item.id,
                    staticClass: "itemList-item"
                }, [
                    _c('md-checkbox', {
                        staticClass: "md-primary",
                        model: {
                            value: item.checked,
                            callback: function($$v) {
                                _vm.$set(item, "checked", $$v);
                            },
                            expression: "item.checked"
                        }
                    }),
                    _vm._v(" "),
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ])
                ], 1);
            }), 0) : _vm.pageSelected === _vm.PAGES.creation ? _c('div', {
                staticClass: "devicesProgress"
            }, _vm._l(_vm.nodes, function(device) {
                return _c('div', {
                    key: device.id,
                    staticClass: "device"
                }, [
                    _c('div', {
                        staticClass: "name"
                    }, [
                        _vm._v(_vm._s(device.info.name))
                    ]),
                    _vm._v(" "),
                    device.progress != -1 ? _c('div', {
                        staticClass: "progress-bar"
                    }, [
                        _c('div', {
                            staticClass: "progress-value"
                        }, [
                            _c('md-progress-bar', {
                                attrs: {
                                    "md-mode": "buffer",
                                    "md-value": device.progress
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "progress-number"
                        }, [
                            _vm._v(_vm._s(device.progress) + " %")
                        ])
                    ]) : _c('div', {
                        staticClass: "progress-bar"
                    }, [
                        _c('div', {
                            staticClass: "message",
                            class: device.message.id
                        }, [
                            _vm._v(_vm._s(device.message.text))
                        ])
                    ])
                ]);
            }), 0) : _vm.pageSelected === _vm.PAGES.loading ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm._e()
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
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": _vm.getBacnetValue
                }
            }, [
                _vm._v("GET Bacnet")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8Pe8I":[function() {},{}],"54ci1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5dc0j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b157274393aacb4c");
    if (script.__esModule) script = script.default;
    script.render = require("f2f2cda092b0cf31").render;
    script.staticRenderFns = require("f2f2cda092b0cf31").staticRenderFns;
    script._scopeId = "data-v-cc9b9a";
    script.__cssModules = require("a66b6d722a0fcece").default;
    require("585bbb68201dd434").default(script);
    script.__scopeId = 'data-v-cc9b9a';
    script.__file = "createSubNetwork.vue";
};
initialize();
exports.default = script;

},{"b157274393aacb4c":"3Kpuh","f2f2cda092b0cf31":"8uReE","a66b6d722a0fcece":"3bMbt","585bbb68201dd434":"jrYmH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Kpuh":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8uReE":[function(require,module,exports,__globalThis) {
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

},{}],"3bMbt":[function() {},{}],"jrYmH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2m0Kp":[function(require,module,exports,__globalThis) {
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

},{}],"hebpI":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-bacnet-manager.61cc841d.js.map
