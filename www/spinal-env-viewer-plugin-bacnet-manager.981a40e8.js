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
})({"65cWI":[function(require,module,exports) {
var _buttons = require("./buttons");
var _panels = require("./vue/panels");
var _dialogs = require("./vue/dialogs");

},{"./buttons":"5bko2","./vue/panels":"gA4J1","./vue/dialogs":"7BlnD"}],"5bko2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "discoverNetworkBtn", ()=>(0, _discoverBtnDefault.default));
parcelHelpers.export(exports, "createNetworkContext", ()=>(0, _createNetworkContextDefault.default));
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

},{"./bacnet/discoverBtn":"2iu5s","./bacnet/locateBimObject":"azeLT","./viewer/createNetworkContext":"bok8O","./viewer/addOrgan":"h1fi4","./viewer/linkProfil":"eQe0O","./viewer/unLinkProfil":"2tUaO","./bacnet/createBacnetValue":"4qO1F","./bacnet/monitoring":"lKeHH","./bacnet/organBacnetMonitor":"bRcL8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iu5s":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","9094fddb5aafaaaf":"7Uw4d","spinal-model-bacnet":"fxyeC","spinal-model-bmsnetwork":"gzkbg","../../js/utilities":"3JXbK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{"8b71a79dcc12420e":"h7sS1","e47c36529e942a76":"cvBJ6","cfd4c6200ba55765":"9SKSV"}],"h7sS1":[function(require,module,exports) {
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

},{}],"cvBJ6":[function(require,module,exports) {
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

},{}],"9SKSV":[function(require,module,exports) {
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

},{}],"3JXbK":[function(require,module,exports) {
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

},{"spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-model-bacnet":"fxyeC","spinal-model-graph":"fkEXw","40db74c829e45c23":"38qYF","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azeLT":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","2f54b98bb861b8b7":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktewa":[function(require,module,exports) {
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
    }
};
module.exports = {
    SELECTrelationList,
    isShownParam,
    utilities
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf"}],"bok8O":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","c170226d89c4fd0b":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1fi4":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","ad74e104cb543e4":"7Uw4d","../../js/constants":"b57yW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b57yW":[function(require,module,exports) {
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

},{"e8b6adb8d4030a89":"38qYF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQe0O":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bacnet":"fxyeC","../../js/utilities":"3JXbK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tUaO":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-model-bacnet":"fxyeC","spinal-env-viewer-graph-service":"9n7zp","../../js/utilities":"3JXbK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4qO1F":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-model-bacnet":"fxyeC","../../js/utilities":"3JXbK","7d93c25f002e9a41":"7Uw4d","9b80ad328241b0ca":"40I8H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40I8H":[function(require,module,exports) {
module.exports = require("ac04b4bd32462ebc").getBundleURL("kdcfB") + "add.1f6a38a1.svg";

},{"ac04b4bd32462ebc":"lgJ39"}],"lKeHH":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-model-bmsnetwork":"gzkbg","43fd88ad311906b2":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bacnet":"fxyeC","../../js/utilities":"3JXbK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRcL8":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","cfd9eb86170d935a":"7Uw4d","spinal-model-bacnet":"fxyeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gA4J1":[function(require,module,exports) {
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
            minWidth: "600px",
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
            minWidth: "620px",
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
            minWidth: "620px",
            height: "670px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./discoverNetworkPanel.vue":"geUYr","./manageDevicesPanel.vue":"axFA3","./monitorConnectorPanel.vue":"2lrEs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{"bf7edd8450503e22":"7Uw4d","64bd1569b4ded066":"gsEky"}],"gsEky":[function(require,module,exports) {
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

},{}],"geUYr":[function(require,module,exports) {
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
    script.__scopeId = "data-v-a71540";
    script.__file = "discoverNetworkPanel.vue";
};
initialize();
exports.default = script;

},{"15ded77d7426b038":"eQQVt","e2263ce344eab292":"5TBz1","372f8adcd6d836c0":"jrd1j","f23cc47c9b65abad":"f3cLz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQQVt":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-bacnet":"fxyeC","spinal-env-viewer-graph-service":"9n7zp","../../js/constants":"b57yW","../components/discoverTable.vue":"2V6rm","../components/broadcastTemplate.vue":"jLtbi","../components/unicastTemplate.vue":"1Tkcm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2V6rm":[function(require,module,exports) {
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
    script.__scopeId = "data-v-200797";
    script.__file = "discoverTable.vue";
};
initialize();
exports.default = script;

},{"e23bc7d970f53e56":"eQC5L","a75c31bffdc133ff":"jPZCm","811dadbef7f09b1f":"cRfiB","3ee63649eb8d7e2a":"g1k74","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQC5L":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/stateEnum":"9mC59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mC59":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPZCm":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.show === _vm.STATES.discovered ? _c("div", {
        staticClass: "devices_table"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", [
                _vm._v(_vm._s(_vm.selected.length) + " selected / " + _vm._s(_vm.devices.length) + " found")
            ])
        ]),
        _vm._v(" "),
        _c("md-table", {
            staticClass: "tablecontent",
            on: {
                "md-selected": _vm.onSelect
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c("md-table-row", {
                            attrs: {
                                "md-selectable": "multiple",
                                "md-auto-select": ""
                            }
                        }, [
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Name",
                                    "md-sort-by": "name"
                                }
                            }, [
                                _vm._v(_vm._s(item.name))
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "deviceId"
                                }
                            }, [
                                _vm._v(_vm._s(item.deviceId))
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
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
    ], 1) : _c("div", {
        staticClass: "discover_container"
    }, [
        _c("div", {
            staticClass: "description"
        }, [
            _vm._v(_vm._s(_vm.label))
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "buttons"
        }, [
            _vm.show === _vm.STATES.reseted ? _c("md-button", {
                staticClass: "md-primary md-raised",
                attrs: {
                    "disabled": _vm.disabledBtn()
                },
                on: {
                    "click": _vm.discover
                }
            }, [
                _vm._v("Discover")
            ]) : _vm.show === _vm.STATES.timeout ? _c("md-button", {
                staticClass: "md-primary md-raised",
                on: {
                    "click": _vm.discover
                }
            }, [
                _vm._v("Retry")
            ]) : _vm.show === _vm.STATES.discovering ? _c("div", {
                staticClass: "loading"
            }, [
                _c("div", [
                    _c("md-progress-spinner", {
                        attrs: {
                            "md-mode": "indeterminate"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("div", [
                    _c("md-button", {
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

},{}],"cRfiB":[function() {},{}],"g1k74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLtbi":[function(require,module,exports) {
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
    script.__scopeId = "data-v-33e255";
    script.__file = "broadcastTemplate.vue";
};
initialize();
exports.default = script;

},{"b42583eb9c2cc44d":"9Fnwo","413bfea7c12fbf64":"aQyqm","db6a92b4d2fd51fe":"15B8f","72a7abf8a785774c":"eMa6T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Fnwo":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQyqm":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "broadcast_container"
    }, [
        _c("div", [
            _c("md-field", {
                staticClass: "contextInput"
            }, [
                _c("label", [
                    _vm._v("Network Name")
                ]),
                _vm._v(" "),
                _c("md-input", {
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
        _c("div", [
            _c("md-field", {
                staticClass: "contextInput"
            }, [
                _c("label", [
                    _vm._v("broadcast network IP address")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.network.address,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "address", $$v);
                        },
                        expression: "network.address"
                    }
                }),
                _vm._v(" "),
                _c("span", {
                    staticClass: "md-helper-text"
                }, [
                    _vm._v("\n            To use the default(255.255.255.255) leave this field empty\n         ")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", [
            _c("md-field", {
                staticClass: "contextInput"
            }, [
                _c("label", [
                    _vm._v("broadcast network port")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.network.port,
                        callback: function($$v) {
                            _vm.$set(_vm.network, "port", $$v);
                        },
                        expression: "network.port"
                    }
                }),
                _vm._v(" "),
                _c("span", {
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

},{}],"15B8f":[function() {},{}],"eMa6T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Tkcm":[function(require,module,exports) {
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
    script.__scopeId = "data-v-51f223";
    script.__file = "unicastTemplate.vue";
};
initialize();
exports.default = script;

},{"48423f12671bcf98":"j2Ird","48aaebf7f305c6cc":"916FR","d49f9fd48ec05e0a":"j1y6I","49f8ff11f7301386":"8qjVn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j2Ird":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./inputData.vue":"5EuVH","spinal-env-viewer-plugin-excel-manager-service":"d1IEa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EuVH":[function(require,module,exports) {
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
    script.__scopeId = "data-v-36c975";
    script.__file = "inputData.vue";
};
initialize();
exports.default = script;

},{"fc1861f2a461eadf":"4mHbU","38362424ce08389d":"g8lPB","735bf0f4d25649bc":"an5er","459d2290f0fd3879":"ihCFC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mHbU":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8lPB":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "input_container"
    }, [
        _c("div", {
            staticClass: "input"
        }, [
            _c("md-field", {
                staticClass: "contextInput"
            }, [
                _c("label", [
                    _vm._v("Address")
                ]),
                _vm._v(" "),
                _c("md-input", {
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
        _c("div", {
            staticClass: "input"
        }, [
            _c("md-field", {
                staticClass: "contextInput"
            }, [
                _c("label", [
                    _vm._v("Device ID")
                ]),
                _vm._v(" "),
                _c("md-input", {
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
        _c("div", {
            staticClass: "remove"
        }, [
            _vm.item.id ? _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "remove",
                        expression: "'remove'"
                    }
                ],
                staticClass: "md-icon-button md-accent",
                on: {
                    "click": _vm.removeItem
                }
            }, [
                _c("md-icon", [
                    _vm._v("remove_circle_outline")
                ])
            ], 1) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"an5er":[function() {},{}],"ihCFC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"916FR":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.isLoading ? _c("div", {
        staticClass: "unicast_container"
    }, [
        _c("md-field", {
            staticClass: "contextInput"
        }, [
            _c("label", [
                _vm._v("Network Name")
            ]),
            _vm._v(" "),
            _c("md-input", {
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
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "button_div addRow",
                on: {
                    "click": _vm.addRow
                }
            }, [
                _vm._v("add row")
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "button_div resetRow",
                on: {
                    "click": _vm.reset
                }
            }, [
                _vm._v("reset")
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "button_div upload_div",
                on: {
                    "click": _vm.uploadFile
                }
            }, [
                _vm._v("\n      click to upload file\n    ")
            ])
        ]),
        _vm._v(" "),
        _c("md-content", {
            staticClass: "content md-scrollbar"
        }, _vm._l(_vm.network.ips, function(item) {
            return _c("input-data-template", {
                key: item.id,
                attrs: {
                    "item": item
                },
                on: {
                    "remove": _vm.removeItem
                }
            });
        }), 1)
    ], 1) : _c("div", {
        staticClass: "loading"
    }, [
        _c("md-progress-spinner", {
            attrs: {
                "md-mode": "indeterminate"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"j1y6I":[function() {},{}],"8qjVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TBz1":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "discover_container"
    }, [
        _c("md-steppers", {
            attrs: {
                "md-vertical": ""
            }
        }, [
            _c("md-step", {
                attrs: {
                    "id": "first",
                    "md-label": "Network name",
                    "md-description": "Network name"
                }
            }, [
                _c("div", {
                    staticClass: "stepContainer"
                }, [
                    _c("div", {
                        staticClass: "header"
                    }, [
                        _c("div", {
                            staticClass: "radio",
                            class: {
                                isActive: _vm.network.useBroadcast
                            }
                        }, [
                            _c("md-radio", {
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
                        _c("div", {
                            staticClass: "radio",
                            class: {
                                isActive: !_vm.network.useBroadcast
                            }
                        }, [
                            _c("md-radio", {
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
                    _c("div", {
                        staticClass: "content"
                    }, [
                        _vm.network.useBroadcast ? _c("broadcast-template", {
                            attrs: {
                                "network": _vm.network
                            }
                        }) : _c("unicast-template", {
                            attrs: {
                                "network": _vm.network
                            }
                        })
                    ], 1)
                ])
            ]),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "second",
                    "md-label": "Discover network",
                    "md-description": "Discover"
                }
            }, [
                _c("div", {
                    staticClass: "stepContainer"
                }, [
                    _c("discover-table", {
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
            _c("md-step", {
                attrs: {
                    "id": "third",
                    "md-label": "Create network",
                    "md-description": "Create"
                }
            }, [
                _c("div", {
                    staticClass: "stepContainer"
                }, [
                    _c("div", {
                        staticClass: "loading"
                    }, [
                        _vm.state === _vm.STATES.creating ? _c("md-progress-spinner", {
                            attrs: {
                                "md-mode": "indeterminate"
                            }
                        }) : _vm.state === _vm.STATES.created ? _c("md-icon", {
                            staticClass: "md-size-5x"
                        }, [
                            _vm._v("check")
                        ]) : _c("md-button", {
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

},{}],"jrd1j":[function() {},{}],"f3cLz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axFA3":[function(require,module,exports) {
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
    script.__scopeId = "data-v-93b9f6";
    script.__file = "manageDevicesPanel.vue";
};
initialize();
exports.default = script;

},{"579059f80c632e45":"hAE3v","bcae731aec7df64":"3jpRj","955b23c6bb66b669":"h9n7o","d22ce6fd9ba531":"PN5Zj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAE3v":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/monitoring/devicemonitor.vue":"7AqZs","spinal-env-viewer-plugin-event-emitter":"8hvTd","../../js/utilities":"3JXbK","../../js/monitorState":"6e2BR","523bb7fb2f4660c3":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7AqZs":[function(require,module,exports) {
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
    script.__scopeId = "data-v-56a517";
    script.__file = "devicemonitor.vue";
};
initialize();
exports.default = script;

},{"d061ba1b1d6bc1da":"ayRgo","bbbc21ee7c85d8cb":"88bB8","6c32ba0c29ff1e91":"gsWiT","76225a832cfcf91a":"8WsSw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayRgo":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/utilities":"3JXbK","../../../js/monitorState":"6e2BR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6e2BR":[function(require,module,exports) {
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

},{"./utilities":"3JXbK","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bacnet":"fxyeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88bB8":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "device"
    }, [
        _c("div", {
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
        _c("div", {
            staticClass: "state",
            class: _vm.state
        }, [
            _vm._v("\n    " + _vm._s(_vm.state) + "\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "actions"
        }, [
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "start",
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
                _c("md-icon", [
                    _vm._v("play_arrow")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "restart",
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
                _c("md-icon", [
                    _vm._v("replay")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "stop",
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
                _c("md-icon", [
                    _vm._v("stop")
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "block"
            }, [
                _c("div", {
                    staticClass: "input"
                }, [
                    _c("md-checkbox", {
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

},{}],"gsWiT":[function() {},{}],"8WsSw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jpRj":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "manage_panel_container"
    }, [
        _vm.pageSelected === _vm.PAGES.selection ? _c("div", {
            staticClass: "manage_container"
        }, [
            _c("div", {
                staticClass: "header"
            }, [
                _c("div", [
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "start all devices",
                                expression: "'start all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.startAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("play_arrow")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "restart all devices",
                                expression: "'restart all devices'"
                            }
                        ],
                        staticClass: "md-icon-button",
                        on: {
                            "click": _vm.restartAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("replay")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "stop all devices",
                                expression: "'stop all devices'"
                            }
                        ],
                        staticClass: "md-icon-button md-accent",
                        on: {
                            "click": _vm.stopAllMonitoring
                        }
                    }, [
                        _c("md-icon", {
                            staticClass: "md-accent"
                        }, [
                            _vm._v("stop")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
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
                    _c("md-button", {
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
            _c("div", {
                staticClass: "devices_list"
            }, _vm._l(_vm.devices, function(device) {
                return _c("device-monitoring", {
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
        ]) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-progress-spinner", {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-icon", {
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

},{}],"h9n7o":[function() {},{}],"PN5Zj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lrEs":[function(require,module,exports) {
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
    script.__scopeId = "data-v-6ffe52";
    script.__file = "monitorConnectorPanel.vue";
};
initialize();
exports.default = script;

},{"1c6e290ccdd5c149":"bpIk2","90372c007399affc":"3O7AK","995961c387093d46":"lShp6","d3ce8c39d9b0a1af":"ju4Qt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpIk2":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3O7AK":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "connector_monitor_container"
    }, _vm._l(_vm.organs, function(organ) {
        return _c("div", {
            key: organ.id.get(),
            staticClass: "organ_section"
        }, [
            _c("div", {
                staticClass: "name"
            }, [
                _vm._v(_vm._s(organ.name.get()))
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "actions"
            }, [
                _c("md-button", {
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

},{}],"lShp6":[function() {},{}],"ju4Qt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BlnD":[function(require,module,exports) {
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
const { SpinalMountExtention } = require("76d5c96468647d9e");
const dialogs = [
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

},{"vue":"gt5MM","./createContext.vue":"j21a8","./modifyTimeInterval.vue":"14OZX","./addOrgan.vue":"6rvSj","./linkToProfilDialog.vue":"bSmyW","./unLinkToProfilDialog.vue":"ivlsP","./linkToBimAutomate.vue":"ewGJz","./getBacnetValue.vue":"efzs6","76d5c96468647d9e":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j21a8":[function(require,module,exports) {
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
    script.__scopeId = "data-v-285993";
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"4931fbd757808767":"65SKm","7d256a1c33e857ba":"8Ylvu","7c2776adf2f3798":"8A2WA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65SKm":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","../../js/constants":"b57yW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ylvu":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", [
            _vm._v("Create BMS network context")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Context Name")
                ]),
                _vm._v(" "),
                _c("md-input", {
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
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"8A2WA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14OZX":[function(require,module,exports) {
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
    script.__scopeId = "data-v-f326ad";
    script.__file = "modifyTimeInterval.vue";
};
initialize();
exports.default = script;

},{"a4445692fa22c932":"b449q","5a48dc79ff8855ce":"fKUlu","e7a9e02b7beb91e0":"c1kvP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b449q":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKUlu":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", [
            _vm._v("Time interval")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("time interval")
                ]),
                _vm._v(" "),
                _c("md-input", {
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
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"c1kvP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rvSj":[function(require,module,exports) {
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
    script.__scopeId = "data-v-34706f";
    script.__file = "addOrgan.vue";
};
initialize();
exports.default = script;

},{"e2e8430d92f73546":"gCHVy","3290696c40eba60a":"fh5i1","aaef6c94ebf77e79":"Vo9xZ","cc861b6fd94e552e":"95W78","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCHVy":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service":"12qa3","../components/addOrganBtn.vue":"j829i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12qa3":[function(require,module,exports) {
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

},{"spinal-core-connectorjs_type":"fRH70","spinal-env-viewer-graph-service":"9n7zp","spinal-model-bacnet":"fxyeC","spinal-model-bmsnetwork":"gzkbg","spinal-model-opcua":"i5yd2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5yd2":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("6b0ddbfb5043d49e"), exports);
__exportStar(require("798e03baefaecc65"), exports);
__exportStar(require("71c9a67d99ad2384"), exports);

},{"6b0ddbfb5043d49e":"55XNp","798e03baefaecc65":"2OSPe","71c9a67d99ad2384":"jWxed"}],"55XNp":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("a948589d4afc760"), exports);
__exportStar(require("3cc05db58cf62ebf"), exports);
__exportStar(require("b8ca582373d1e088"), exports);

},{"a948589d4afc760":"iVnSZ","3cc05db58cf62ebf":"f5xfb","b8ca582373d1e088":"5Nd2s"}],"iVnSZ":[function(require,module,exports) {
var Buffer = require("c151265764528e65").Buffer;
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalOPCUADiscoverModel = void 0;
const spinal_core_connectorjs_type_1 = require("b7cc143681c5f486");
const uuid_1 = require("f85166a450c341bf");
const constants_1 = require("5bcfcdc43c86ceef");
class SpinalOPCUADiscoverModel extends spinal_core_connectorjs_type_1.Model {
    // constructor(graph: SpinalGraph<any>, context: SpinalContext<any>, organ: SpinalOrganOPCUA, network: INetwork, servers: IServer[]) {
    constructor(graph, context, organ, network){
        super();
        const choicesSet = new Set(Object.keys(constants_1.OPCUA_ORGAN_STATES));
        this.add_attr({
            id: (0, uuid_1.v4)(),
            state: new spinal_core_connectorjs_type_1.Choice(0, Array.from(choicesSet)),
            network,
            organ: new spinal_core_connectorjs_type_1.Ptr(organ),
            context: new spinal_core_connectorjs_type_1.Ptr(context),
            graph: new spinal_core_connectorjs_type_1.Ptr(graph),
            treeDiscovered: "",
            treeToCreate: "",
            // servers: new Lst(servers),
            creation: Date.now()
        });
    }
    getGraph() {
        return new Promise((resolve, reject)=>{
            try {
                this.graph.load((data)=>resolve(data));
            } catch (error) {
                reject(error);
            }
        });
    }
    getOrgan() {
        return new Promise((resolve, reject)=>{
            try {
                this.organ.load((data)=>resolve(data));
            } catch (error) {
                reject(error);
            }
        });
    }
    getContext() {
        return new Promise((resolve, reject)=>{
            try {
                this.context.load((data)=>resolve(data));
            } catch (error) {
                reject(error);
            }
        });
    }
    setTreeDiscovered(json) {
        const base64 = this.convertToBase64(json);
        this.treeDiscovered.set(base64);
    }
    setTreeToCreate(json) {
        const base64 = this.convertToBase64(json);
        this.treeToCreate.set(base64);
    }
    // public getServers(): spinal.Lst {
    // 	return this.servers;
    // }
    addToGraph() {
        return new Promise((resolve, reject)=>{
            this.getOrgan().then((organ)=>{
                if (organ.discover) organ.discover.load((list)=>{
                    for(let i = 0; i < list.length; i++){
                        const element = list[i];
                        if (element.id.get() === this.id.get()) return resolve(element);
                    }
                    list.push(this);
                    resolve(this);
                });
                else {
                    organ.add_attr({
                        discover: new spinal_core_connectorjs_type_1.Ptr(new spinal_core_connectorjs_type_1.Lst([
                            this
                        ]))
                    });
                    resolve(this);
                }
            });
        });
    }
    removeFromGraph() {
        return new Promise((resolve, reject)=>{
            this.getOrgan().then((organ)=>{
                if (organ.discover) organ.discover.load((list)=>{
                    for(let i = 0; i < list.length; i++){
                        const element = list[i];
                        if (element.id.get() === this.id.get()) {
                            list.splice(i, 1);
                            return resolve(true);
                        }
                    }
                    resolve(false);
                });
                else resolve(false);
            });
        });
    }
    changeState(state) {
        const choicesSet = new Set(Object.keys(constants_1.OPCUA_ORGAN_STATES));
        this.state.set(Array.from(choicesSet).indexOf(state));
    }
    getTreeDiscovered() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.waitModelReady(this.treeDiscovered);
            const base64 = this.treeDiscovered.get();
            const tree = Buffer.from(base64, "base64").toString("utf-8");
            if (tree.length === 0) return {};
            return JSON.parse(tree);
        });
    }
    getTreeToCreate() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.waitModelReady(this.treeToCreate);
            const base64 = this.treeToCreate.get();
            const tree = Buffer.from(base64, "base64").toString("utf-8");
            if (tree.length === 0) return {};
            return JSON.parse(tree);
        });
    }
    convertToBase64(tree) {
        return Buffer.from(JSON.stringify(tree)).toString("base64");
    // return new Promise((resolve, reject) => {
    // 	const treeString = JSON.stringify(tree);
    // 	zlib.deflate(treeString, (err, buffer) => {
    // 		if (!err) {
    // 			const base64 = buffer.toString("base64");
    // 			return resolve(base64);
    // 		}
    // 		return reject();
    // 	});
    // });
    }
    waitModelReady(model) {
        return new Promise((resolve)=>{
            let time = 0;
            const wait = ()=>{
                setTimeout(()=>{
                    const text = model.get();
                    //@ts-ignore
                    if (text && text.length > 0 || time >= 2000) resolve(true);
                    else {
                        time += 300;
                        wait();
                    }
                }, 300);
            };
            wait();
        });
    }
}
exports.SpinalOPCUADiscoverModel = SpinalOPCUADiscoverModel;
//@ts-ignore
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOPCUADiscoverModel
]);
exports.default = SpinalOPCUADiscoverModel;

},{"c151265764528e65":"fCgem","b7cc143681c5f486":"fRH70","f85166a450c341bf":"4E8dk","5bcfcdc43c86ceef":"jWxed"}],"4E8dk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"1XP2w","./v3.js":"4FHIv","./v4.js":"e2Ddc","./v5.js":"82ies","./nil.js":"5i2ap","./version.js":"atNHi","./validate.js":"dD96N","./stringify.js":"7EsZR","./parse.js":"5Huud","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XP2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"ZzE7i","./stringify.js":"7EsZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZzE7i":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EsZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dD96N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD96N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"1z15p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1z15p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FHIv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)("v3", 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"kwbUE","./md5.js":"aQWKm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwbUE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") value = stringToBytes(value);
        if (typeof namespace === "string") namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"7EsZR","./parse.js":"5Huud","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Huud":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dD96N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQWKm":[function(require,module,exports) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = "0123456789abcdef";
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2Ddc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"gvRFv","./rng.js":"ZzE7i","./stringify.js":"7EsZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvRFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82ies":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)("v5", 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"kwbUE","./sha1.js":"Sb1z3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Sb1z3":[function(require,module,exports) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5i2ap":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "00000000-0000-0000-0000-000000000000";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atNHi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dD96N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWxed":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OPCUA_ORGAN_STATES = exports.OPCUA_ORGAN_TYPE = void 0;
exports.OPCUA_ORGAN_TYPE = "OPCUA_ORGAN_TYPE";
var OPCUA_ORGAN_STATES;
(function(OPCUA_ORGAN_STATES) {
    OPCUA_ORGAN_STATES["initial"] = "initial";
    OPCUA_ORGAN_STATES["readyToDiscover"] = "readyToDiscover";
    OPCUA_ORGAN_STATES["discovering"] = "discovering";
    OPCUA_ORGAN_STATES["discovered"] = "discovered";
    OPCUA_ORGAN_STATES["readyToCreate"] = "readyToCreate";
    OPCUA_ORGAN_STATES["creating"] = "creating";
    OPCUA_ORGAN_STATES["created"] = "created";
    OPCUA_ORGAN_STATES["error"] = "error";
    OPCUA_ORGAN_STATES["timeout"] = "timeout";
})(OPCUA_ORGAN_STATES || (exports.OPCUA_ORGAN_STATES = OPCUA_ORGAN_STATES = {}));

},{}],"f5xfb":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalOrganOPCUA = void 0;
const spinal_core_connectorjs_type_1 = require("97c9692978ec98c4");
const uuid_1 = require("3a5a6903f452322c");
const constants_1 = require("2bc69bf18ece218f");
class SpinalOrganOPCUA extends spinal_core_connectorjs_type_1.Model {
    constructor(name, type = constants_1.OPCUA_ORGAN_TYPE){
        super();
        this.add_attr({
            id: (0, uuid_1.v4)(),
            name,
            type,
            references: {},
            restart: false
        });
    }
    addReference(contextId, spinalNode) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e !== "undefined") return reject("The organ is already linked to this context");
                this.references.mod_attr(contextId, new spinal_core_connectorjs_type_1.Ptr(spinalNode));
                resolve(spinalNode);
            });
        });
        this.references.add_attr({
            [contextId]: new spinal_core_connectorjs_type_1.Ptr(spinalNode)
        });
        return Promise.resolve(spinalNode);
    }
    isReferencedInContext(contextId) {
        if (typeof this.references[contextId] === "undefined") return Promise.resolve(false);
        return new Promise((resolve, reject)=>{
            this.references[contextId].load((e)=>{
                if (typeof e === "undefined") return resolve(false);
                resolve(true);
            });
        });
    }
    removeReference(contextId) {
        if (this.references[contextId]) return new Promise((resolve, reject)=>{
            this.references[contextId].load((node)=>{
                this.references.rem_attr(contextId);
                resolve(node);
            });
        });
    }
}
exports.SpinalOrganOPCUA = SpinalOrganOPCUA;
SpinalOrganOPCUA.TYPE = constants_1.OPCUA_ORGAN_TYPE;
SpinalOrganOPCUA.CONTEXT_TO_ORGAN_RELATION = "hasBmsNetworkOrgan";
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOrganOPCUA
]);
exports.default = SpinalOrganOPCUA;

},{"97c9692978ec98c4":"fRH70","3a5a6903f452322c":"4E8dk","2bc69bf18ece218f":"jWxed"}],"5Nd2s":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinalOPCUAListener = void 0;
const spinal_core_connectorjs_type_1 = require("44579eeb830c6c6c");
const uuid_1 = require("6a8801cd627a322f");
class SpinalOPCUAListener extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, organ, network, bmsDevice, profile){
        super();
        this.add_attr({
            id: (0, uuid_1.v4)(),
            monitored: true,
            network: new spinal_core_connectorjs_type_1.Pbr(network),
            organ: new spinal_core_connectorjs_type_1.Pbr(organ),
            context: new spinal_core_connectorjs_type_1.Pbr(context),
            graph: new spinal_core_connectorjs_type_1.Pbr(graph),
            bmsDevice: new spinal_core_connectorjs_type_1.Pbr(bmsDevice),
            profile: new spinal_core_connectorjs_type_1.Pbr(profile)
        });
    }
    getAllData() {
        const promises = [
            this.getGraph(),
            this.getOrgan(),
            this.getContext(),
            this.getBmsDevice(),
            this.getNetwork(),
            this.getProfile()
        ];
        return Promise.all(promises).then(([graph, organ, context, device, network, profile])=>{
            return {
                graph,
                organ,
                context,
                device,
                network,
                profile
            };
        });
    }
    getGraph() {
        return this._loadData("graph");
    }
    getOrgan() {
        return this._loadData("organ");
    }
    getContext() {
        return this._loadData("context");
    }
    getBmsDevice() {
        return this._loadData("bmsDevice");
    }
    getNetwork() {
        return this._loadData("network");
    }
    getProfile() {
        return this._loadData("profile");
    }
    addToDevice() {
        return this.getBmsDevice().then((device)=>{
            if (device.info.listeners) device.info.rem_attr("listener");
            device.info.add_attr({
                listener: new spinal_core_connectorjs_type_1.Pbr(this)
            });
        });
    }
    _loadData(dataName) {
        return new Promise((resolve, reject)=>{
            try {
                if (this[dataName] === undefined) throw new Error(`${dataName} not found`);
                this[dataName].load((data)=>resolve(data));
            } catch (error) {
                reject(error);
            }
        });
    }
}
exports.SpinalOPCUAListener = SpinalOPCUAListener;
//@ts-ignore
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOPCUAListener
]);
exports.default = SpinalOPCUAListener;

},{"44579eeb830c6c6c":"fRH70","6a8801cd627a322f":"4E8dk"}],"2OSPe":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("602df7eaa4d272fa"), exports);
__exportStar(require("d09f2841310333ed"), exports);
__exportStar(require("aadc3f5744f092fe"), exports);

},{"602df7eaa4d272fa":"1Swaq","d09f2841310333ed":"ke4mL","aadc3f5744f092fe":"ewbmd"}],"1Swaq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"ke4mL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"ewbmd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"j829i":[function(require,module,exports) {
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
    script.__scopeId = "data-v-993186";
    script.__file = "addOrganBtn.vue";
};
initialize();
exports.default = script;

},{"d187bc6b81b0ccaa":"8dBoD","803429d367b8aa4e":"8Qskr","40daf4825fb4d2a0":"eyaL0","e11be307a172863e":"gi581","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dBoD":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service":"12qa3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qskr":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isFound && !_vm.isLinked ? _c("md-button", {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: "create and Link Node",
                expression: "'create and Link Node'"
            }
        ],
        staticClass: "md-icon-button md-primary",
        on: {
            "click": _vm.createAndLinkNode
        }
    }, [
        _c("md-icon", [
            _vm._v("drive_file_rename_outline")
        ])
    ], 1) : _vm.isFound && _vm.isLinked ? _c("md-button", {
        directives: [
            {
                name: "tooltip",
                rawName: "v-tooltip",
                value: "Remove and unlink Node",
                expression: "'Remove and unlink Node'"
            }
        ],
        staticClass: "md-icon-button md-accent",
        on: {
            "click": _vm.removeAndUnlinkNode
        }
    }, [
        _c("md-icon", [
            _vm._v("delete")
        ])
    ], 1) : _c("md-button", [
        _c("md-progress-spinner", {
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

},{}],"eyaL0":[function() {},{}],"gi581":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fh5i1":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "title"
        }, [
            _vm._v("Add BMS organ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-table", {
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
                            return _c("md-table-row", {}, [
                                _c("md-table-cell", {
                                    attrs: {
                                        "md-label": "Name"
                                    }
                                }, [
                                    _vm._v(_vm._s(item.name))
                                ]),
                                _vm._v(" "),
                                _c("md-table-cell", {
                                    attrs: {
                                        "md-label": "Type"
                                    }
                                }, [
                                    _vm._v(_vm._s(item.type))
                                ]),
                                _vm._v(" "),
                                _c("md-table-cell", {
                                    attrs: {
                                        "md-label": "Action"
                                    }
                                }, [
                                    _c("organ-button", {
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
                _c("md-table-toolbar", [
                    _c("h1", {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Organs")
                    ])
                ]),
                _vm._v(" "),
                _c("md-table-empty-state", {
                    attrs: {
                        "md-label": "No organ found"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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

},{}],"Vo9xZ":[function() {},{}],"95W78":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSmyW":[function(require,module,exports) {
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
    script.__scopeId = "data-v-1f48c5";
    script.__file = "linkToProfilDialog.vue";
};
initialize();
exports.default = script;

},{"229fb7ac5d11d84d":"iEuYy","54e520255fb227c":"jXayh","591634ea586ff87f":"1j1Uj","ab78e55ba16dab66":"eWVes","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEuYy":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf","../components/links/LinkComponent.vue":"hwp9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwp9s":[function(require,module,exports) {
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
    script.__scopeId = "data-v-4d965b";
    script.__file = "LinkComponent.vue";
};
initialize();
exports.default = script;

},{"ad8227e5bd51d771":"kNnyF","a8bf472a76c5d484":"8J4Lz","f7c2c507f74a08eb":"kkZQW","565dcd725b7286f8":"3g0f4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNnyF":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkToGroupTemplate.vue":"dCYL0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCYL0":[function(require,module,exports) {
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
    script.__scopeId = "data-v-3f2e9e";
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"47d88857e33b656c":"gtCot","9571f73afe1c7de4":"2ZVsQ","31a715c74a902764":"4sfQD","d28a797b5215928e":"lS8Hq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtCot":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZVsQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "subContent"
    }, [
        _c("div", {
            staticClass: "title"
        }, [
            _c("div", [
                _vm._v(_vm._s(_vm.title))
            ])
        ]),
        _vm._v(" "),
        _c("md-content", {
            staticClass: "container md-scrollbar"
        }, [
            _c("md-list", _vm._l(_vm.data, function(item, index) {
                return _c("md-list-item", {
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
                        "selected": item.id === _vm.itemSelected
                    },
                    on: {
                        "click": function($event) {
                            return _vm.selectItem(item.id);
                        }
                    }
                }, [
                    _c("span", {
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

},{}],"4sfQD":[function() {},{}],"lS8Hq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8J4Lz":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "selection_container"
    }, [
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
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
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
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
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
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

},{}],"kkZQW":[function() {},{}],"3g0f4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXayh":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Select Profil ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("link-component", {
                attrs: {
                    "context_title": "Profils",
                    "category_title": "Categories",
                    "group_title": "Devices",
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
            }) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "progress-bar"
            }, [
                _c("div", {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c("md-progress-bar", {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
            ], 1) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"1j1Uj":[function() {},{}],"eWVes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivlsP":[function(require,module,exports) {
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
    script.__scopeId = "data-v-06c728";
    script.__file = "unLinkToProfilDialog.vue";
};
initialize();
exports.default = script;

},{"c06199695197066a":"gItpp","d3d4493ae206228a":"1UpKG","a23d99b305902eba":"tUfil","3de9178dc2a3475d":"3fpsQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gItpp":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf","../components/links/LinkComponent.vue":"hwp9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1UpKG":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Unlink device to Profil\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("div", {
                staticClass: "loading"
            }, [
                _vm._v("\n      Do you want unlink devices to profil ?\n    ")
            ]) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
                staticClass: "loading"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "progress-bar"
            }, [
                _c("div", {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c("md-progress-bar", {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
            ], 1) : _vm._e()
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"tUfil":[function() {},{}],"3fpsQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewGJz":[function(require,module,exports) {
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
    script.__scopeId = "data-v-879002";
    script.__file = "linkToBimAutomate.vue";
};
initialize();
exports.default = script;

},{"4d78e1e94b43370c":"lTYPS","6b84499cac638edd":"8wN3S","a77c1ac2732ecf98":"38LCS","e2a7740d25284eb3":"csXYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTYPS":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wN3S":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Hello")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _c("h1", [
                _vm._v("Hello world")
            ])
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"38LCS":[function() {},{}],"csXYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"efzs6":[function(require,module,exports) {
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
    script.__scopeId = "data-v-f16541";
    script.__file = "getBacnetValue.vue";
};
initialize();
exports.default = script;

},{"22ca749b08afb3e6":"2EJsa","b8433ab0cef0c538":"8Ejs7","a0eba56f6f51b97":"9vQED","ed4ef9afd91df934":"3gugq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EJsa":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","../../js/constants":"b57yW","spinal-model-bacnet":"fxyeC","spinal-model-bmsnetwork":"gzkbg","../../js/utilities":"3JXbK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ejs7":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Get Bacnet Value")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("div", {
                staticClass: "itemList"
            }, _vm._l(_vm.sensor_types, function(item) {
                return _c("div", {
                    key: item.id,
                    staticClass: "itemList-item"
                }, [
                    _c("md-checkbox", {
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
                    _c("span", {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ])
                ], 1);
            }), 0) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "devicesProgress"
            }, _vm._l(_vm.nodes, function(device) {
                return _c("div", {
                    key: device.id,
                    staticClass: "device"
                }, [
                    _c("div", {
                        staticClass: "name"
                    }, [
                        _vm._v(_vm._s(device.info.name))
                    ]),
                    _vm._v(" "),
                    device.progress != -1 ? _c("div", {
                        staticClass: "progress-bar"
                    }, [
                        _c("div", {
                            staticClass: "progress-value"
                        }, [
                            _c("md-progress-bar", {
                                attrs: {
                                    "md-mode": "buffer",
                                    "md-value": device.progress
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "progress-number"
                        }, [
                            _vm._v(_vm._s(device.progress) + " %")
                        ])
                    ]) : _c("div", {
                        staticClass: "progress-bar"
                    }, [
                        _c("div", {
                            staticClass: "message",
                            class: device.message.id
                        }, [
                            _vm._v(_vm._s(device.message.text))
                        ])
                    ])
                ]);
            }), 0) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm._e()
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"9vQED":[function() {},{}],"3gugq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const bimService_1 = require("edfb101c687f070e");
exports.bimObjectManagerService = bimService_1.default;

},{"edfb101c687f070e":"cXqcc"}],"cXqcc":[function(require,module,exports) {
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

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-bacnet-manager.981a40e8.js.map
