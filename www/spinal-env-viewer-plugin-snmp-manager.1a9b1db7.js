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
})({"6rjbb":[function(require,module,exports,__globalThis) {
var _buttons = require("./buttons");
var _panels = require("./vue/panels");
var _dialogs = require("./vue/dialogs");

},{"./buttons":"25yBW","./vue/panels":"eHInI","./vue/dialogs":"dQgc1"}],"25yBW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _discoverBtn = require("./discoverBtn");
parcelHelpers.exportAll(_discoverBtn, exports);
var _createSubnetwork = require("./createSubnetwork");
parcelHelpers.exportAll(_createSubnetwork, exports);
var _generateProfileBtn = require("./generateProfileBtn");
parcelHelpers.exportAll(_generateProfileBtn, exports);
var _linkProfileToDevice = require("./linkProfileToDevice");
parcelHelpers.exportAll(_linkProfileToDevice, exports);
var _configProfilBtn = require("./configProfilBtn");
parcelHelpers.exportAll(_configProfilBtn, exports);
var _monitoring = require("./monitoring");
parcelHelpers.exportAll(_monitoring, exports);

},{"./discoverBtn":"dLJ7u","./createSubnetwork":"hZlOu","./generateProfileBtn":"9ySgL","./linkProfileToDevice":"5Twxy","./configProfilBtn":"1Hpvz","./monitoring":"jkX5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dLJ7u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("c33d3eebbbece00d");
class DiscoverSNMPBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Discover SNMP Server", "This button allows to discover SNMP network and create", {
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
        if (typeSelected === (0, _spinalModelSnmp.SNMP_ORGAN_TYPE)) return true;
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) {
            const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
            const organ = organNode && await organNode.getElement(true);
            return organ && organ.type.get() == (0, _spinalModelSnmp.SNMP_ORGAN_TYPE) ? true : -1;
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
        spinalPanelManagerService.openPanel((0, _constants.DISCOVER_SNMP_PANEL), param);
    }
}
const discoverSNMPBtn = new DiscoverSNMPBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), discoverSNMPBtn, [
    3
]);
exports.default = discoverSNMPBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","c33d3eebbbece00d":"egTXY","spinal-model-snmp":"coTUC","spinal-model-bmsnetwork":"haihS","../js/constants":"9F8l6","../js/utilities":"bG4yk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"9F8l6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SIDEBAR", ()=>SIDEBAR);
parcelHelpers.export(exports, "DISCOVER_SNMP_PANEL", ()=>DISCOVER_SNMP_PANEL);
parcelHelpers.export(exports, "MONITORING_PANEL_NAME", ()=>MONITORING_PANEL_NAME);
parcelHelpers.export(exports, "CREATE_SUBNETWORK_DIALOG_IN_SNMP", ()=>CREATE_SUBNETWORK_DIALOG_IN_SNMP);
parcelHelpers.export(exports, "LINK_PROFILE_TO_DEVICE_DIALOG", ()=>LINK_PROFILE_TO_DEVICE_DIALOG);
parcelHelpers.export(exports, "GENERATE_PROFILE_DIALOG", ()=>GENERATE_PROFILE_DIALOG);
parcelHelpers.export(exports, "CONFIG_PROFILE_DIALOG", ()=>CONFIG_PROFILE_DIALOG);
parcelHelpers.export(exports, "NETWORK_PANEL_STEPS", ()=>NETWORK_PANEL_STEPS);
const SIDEBAR = "GraphManagerSideBar";
const DISCOVER_SNMP_PANEL = "discoverSNMPNetworkPanel";
const MONITORING_PANEL_NAME = "opcuaMonitoringPanel";
const CREATE_SUBNETWORK_DIALOG_IN_SNMP = "createSubNetworkDialogInSnmp";
const LINK_PROFILE_TO_DEVICE_DIALOG = "LinkProfileToSNMPDeviceDialog";
const GENERATE_PROFILE_DIALOG = "generateSNMPProfileDialog";
const CONFIG_PROFILE_DIALOG = "configSNMPProfileDialog";
const NETWORK_PANEL_STEPS = Object.freeze({
    serverInfo: "1",
    // selectEntryPoint: "2",
    discovering: "2",
    discovered: "3",
    creation: "4"
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bG4yk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
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
        if (node.getType().get() === (0, _spinalModelSnmp.SNMP_ORGAN_TYPE)) return node;
        if (!node.belongsToContext(context)) return;
        let organs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(contextId, contextId);
        organs = organs.filter((el)=>{
            return el.type.get() === (0, _spinalModelSnmp.SNMP_ORGAN_TYPE);
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

},{"spinal-model-bmsnetwork":"haihS","spinal-env-viewer-graph-service":"9LAk7","spinal-model-snmp":"coTUC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hZlOu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("cc15f00db95b585f");
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
        const result = typeSelected === (0, _spinalModelSnmp.SNMP_ORGAN_TYPE) ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel((0, _constants.CREATE_SUBNETWORK_DIALOG_IN_SNMP), option);
    }
}
const createSubNetworkBtn = new CreateSubNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createSubNetworkBtn, [
    3
]);
exports.default = createSubNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","cc15f00db95b585f":"egTXY","spinal-model-snmp":"coTUC","../js/constants":"9F8l6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9ySgL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
const { spinalPanelManagerService } = require("6ab3dbe0e9e1fdc3");
class GenerateProfile extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate SNMP Profile", "This button allows to Generate snmp monitoring Profile", {
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
        return organ && organ.type.get() == (0, _spinalModelSnmp.SNMP_ORGAN_TYPE) ? true : -1;
    // return -1;
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId)
        };
        spinalPanelManagerService.openPanel((0, _constants.GENERATE_PROFILE_DIALOG), param);
    }
}
const generateProfile = new GenerateProfile();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), generateProfile, [
    3
]);
exports.default = generateProfile;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","6ab3dbe0e9e1fdc3":"egTXY","spinal-model-snmp":"coTUC","../js/constants":"9F8l6","../js/utilities":"bG4yk","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Twxy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
const { spinalPanelManagerService } = require("6938bbc5cd46e023");
class LinkProfileToDevice extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link Profile to device", "This button allows to link snmp  Profile to Device", {
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
        return organ && organ.type.get() == (0, _spinalModelSnmp.SNMP_ORGAN_TYPE) ? true : -1;
    // return -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id)
        };
        spinalPanelManagerService.openPanel((0, _constants.LINK_PROFILE_TO_DEVICE_DIALOG), param);
    }
}
const linkProfileToDevice = new LinkProfileToDevice();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), linkProfileToDevice, [
    3
]);
exports.default = linkProfileToDevice;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","6938bbc5cd46e023":"egTXY","spinal-model-snmp":"coTUC","../js/constants":"9F8l6","../js/utilities":"bG4yk","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Hpvz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../js/constants");
var _snmpProfileService = require("../js/snmpProfileService");
const { spinalPanelManagerService } = require("ba847b3466a6c4bd");
class ConfigProfilBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Configure SNMP monitoring Profile", "This button allows to configure snmp network monitoring profile", {
            icon: "timer",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        return typeSelected === (0, _snmpProfileService.PROFILE_TYPE) ? true : -1;
    }
    async action(option) {
        const id = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const param = {
            graph: option.graph,
            context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId),
            selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id)
        };
        spinalPanelManagerService.openPanel((0, _constants.CONFIG_PROFILE_DIALOG), param);
    }
}
const configProfilBtn = new ConfigProfilBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), configProfilBtn, [
    3
]);
exports.default = configProfilBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","ba847b3466a6c4bd":"egTXY","../js/constants":"9F8l6","../js/snmpProfileService":"eZHUZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eZHUZ":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "SnmpProfileService", ()=>SnmpProfileService);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _utilities = require("./utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const CONTEXT_NAME = "SNMPdeviceProfileContext";
const ITEMS_GROUP_NAME = "Item_list";
const SUPERVISION_NAME = "Supervision";
const CONTEXT_TYPE = "SNMP Profile";
const PROFILE_TYPE = "SNMPDeviceProfile";
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
class SnmpProfileService {
    static instance;
    context;
    constructor(){}
    static getInstance() {
        if (!this.instance) this.instance = new SnmpProfileService();
        return this.instance;
    }
    async init() {
        const createContextIfNotExist = true;
        this.context = await this.getContext(createContextIfNotExist);
        return this.context;
    }
    async getContext(createIfNotExist = false) {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(CONTEXT_NAME);
        if (!context && createIfNotExist) context = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(CONTEXT_NAME, CONTEXT_TYPE);
        return context;
    }
    ////////////////////////// Profile //////////////////////////
    async linkProfileToDevice(devices, profile) {
        if (!this.context) await this.init();
        if (profile.getType().get() !== PROFILE_TYPE) throw new Error("profile must be " + PROFILE_TYPE + " Type");
        if (!Array.isArray(devices)) devices = [
            devices
        ];
        const promises = devices.map(async (device)=>{
            if (device.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
                await this._removeOldProfile(device);
                return device.addChild(profile, CONTEXT_TO_PROFILE_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            return;
        });
        return Promise.all(promises);
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
    ////////////////////////// Items //////////////////////////
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
    ////////////////////////// Intervals //////////////////////////
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
        const existingIntervals = await supervisionNode.getChildren(SUPERVISION_TO_INTERVAL);
        // Check if an interval with the same value already exists
        let intervalNode = existingIntervals.find((el)=>el.info.value.get() == intervalInfo.value);
        // If it doesn't exist, create a new one
        if (!intervalNode) {
            intervalNode = new (0, _spinalEnvViewerGraphService.SpinalNode)(intervalInfo.name, INTERVAL_TYPE);
            intervalNode.info.add_attr({
                value: intervalInfo.value
            });
            await supervisionNode.addChildInContext(intervalNode, SUPERVISION_TO_INTERVAL, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE), this.context);
        }
        return this.addItemsToInterval(intervalNode, itemsNodes);
    }
    async addItemsToInterval(intervalNode, itemsNodes) {
        if (!this.context) await this.init();
        if (!Array.isArray(itemsNodes)) itemsNodes = [
            itemsNodes
        ];
        await this.removeActualIntervalForItems(itemsNodes);
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
    async removeActualIntervalForItems(itemsNodes) {
        if (!this.context) return;
        if (!Array.isArray(itemsNodes)) itemsNodes = [
            itemsNodes
        ];
        const promises = itemsNodes.map(async (node)=>{
            const old = await this.getActualIntervalForItem(node);
            if (old) return old.removeChild(node, INTERVAL_TO_ITEM, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            return node;
        });
        return Promise.all(promises);
    }
    async getSupervisionNode(profile) {
        if (!this.context) await this.init();
        const children = await profile.getChildrenInContext(this.context);
        return children.find((el)=>el.getName().get() === SUPERVISION_NAME);
    }
    async getActualIntervalForItem(itemNode) {
        if (!this.context) return;
        const parents = await itemNode.getParentsInContext(this.context, [
            INTERVAL_TO_ITEM
        ]);
        const intervalNode = parents.find((parent)=>parent.getType().get() === INTERVAL_TYPE);
        return intervalNode;
    }
    ////////////////////////// Utils //////////////////////////
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
exports.default = SnmpProfileService;

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","./utilities":"bG4yk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jkX5d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
const { spinalPanelManagerService } = require("94be611f2651b70d");
class MonitoringSNMPBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Monitor SNMP Server", "This button allows to manage SNMP network monitoring", {
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
        if (typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName || typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
            const organNode = await (0, _utilitiesDefault.default).getOrgan(id, contextId);
            const organ = organNode && await organNode.getElement(true);
            return organ && organ.type.get() == (0, _spinalModelSnmp.SNMP_ORGAN_TYPE) ? true : -1;
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
const monitoringSNMPBtn = new MonitoringSNMPBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), monitoringSNMPBtn, [
    3
]);
exports.default = monitoringSNMPBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","94be611f2651b70d":"egTXY","spinal-model-snmp":"coTUC","spinal-model-bmsnetwork":"haihS","../js/constants":"9F8l6","../js/utilities":"bG4yk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eHInI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _constants = require("../../js/constants");
// Vue
var _discoverSnmpPanelVue = require("./discoverSnmpPanel.vue");
var _discoverSnmpPanelVueDefault = parcelHelpers.interopDefault(_discoverSnmpPanelVue);
var _monitoringPanelVue = require("./monitoringPanel.vue");
var _monitoringPanelVueDefault = parcelHelpers.interopDefault(_monitoringPanelVue);
const panels = [
    {
        name: (0, _constants.DISCOVER_SNMP_PANEL),
        vueMountComponent: (0, _vueDefault.default).extend((0, _discoverSnmpPanelVueDefault.default)),
        panel: {
            title: "Discover SNMP network",
            closeBehaviour: "destroy"
        },
        style: {
            minWidth: '720px',
            height: "770px",
            left: "400px"
        }
    },
    {
        name: (0, _constants.MONITORING_PANEL_NAME),
        vueMountComponent: (0, _vueDefault.default).extend((0, _monitoringPanelVueDefault.default)),
        panel: {
            title: "Monitor SNMP network",
            closeBehaviour: "destroy"
        },
        style: {
            minWidth: '720px',
            height: "770px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","../../js/constants":"9F8l6","./discoverSnmpPanel.vue":"edo5z","./monitoringPanel.vue":"825ee","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"edo5z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("66c1a13b62b1d3d4");
    if (script.__esModule) script = script.default;
    script.render = require("d6981d01229f5613").render;
    script.staticRenderFns = require("d6981d01229f5613").staticRenderFns;
    script._scopeId = "data-v-b93165";
    script.__cssModules = require("507361fe6a8d4698").default;
    require("76312fedf50a80b3").default(script);
    script.__scopeId = 'data-v-b93165';
    script.__file = "discoverSnmpPanel.vue";
};
initialize();
exports.default = script;

},{"66c1a13b62b1d3d4":"aqWHg","d6981d01229f5613":"cqMhn","507361fe6a8d4698":"l9UkT","76312fedf50a80b3":"fCIh6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aqWHg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelSnmp = require("spinal-model-snmp");
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
var _constants = require("../../js/constants");
var _networkInfoVue = require("./step_content/networkInfo.vue");
var _networkInfoVueDefault = parcelHelpers.interopDefault(_networkInfoVue);
var _discoverInfoVue = require("./step_content/discoverInfo.vue");
var _discoverInfoVueDefault = parcelHelpers.interopDefault(_discoverInfoVue);
var _selectToCreateVue = require("./step_content/selectToCreate.vue");
var _selectToCreateVueDefault = parcelHelpers.interopDefault(_selectToCreateVue);
var _creationStepVue = require("./step_content/creationStep.vue");
var _creationStepVueDefault = parcelHelpers.interopDefault(_creationStepVue);
var scriptExports = {
    name: (0, _constants.DISCOVER_SNMP_PANEL),
    components: {
        "network-info-step": (0, _networkInfoVueDefault.default),
        "discover-info-step": (0, _discoverInfoVueDefault.default),
        "select-to-create-step": (0, _selectToCreateVueDefault.default),
        "creation-info-step": (0, _creationStepVueDefault.default)
    },
    data () {
        this.STATES = (0, _spinalModelSnmp.STATES);
        this.spinalDiscover;
        this.context;
        this.graph;
        this.organ;
        this.devicesBindProcess;
        this.STEPS = (0, _constants.NETWORK_PANEL_STEPS);
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
            networks: [
                {
                    id: 0,
                    name: "network 1",
                    address: "127.0.0.1:1160",
                    mibFile: undefined
                }
            ],
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
            this.organ = await organ;
            if (serverInfo && serverInfo.name) this.serverInfo.name = serverInfo.name;
            this.initialized();
        },
        initialized () {
            this.spinalDiscover = undefined;
            this.state = (0, _spinalModelSnmp.STATES).initial;
            this.step = this.STEPS.serverInfo;
        },
        closed () {
            if (this.spinalDiscover) this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).cancelled);
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
                    console.log("next step", this.step);
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
                this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).cancelled);
                this.state = (0, _spinalModelSnmp.STATES).initial;
            }
        },
        //step end
        // server info
        addNetwork () {
            const id = this.networks[0].id + 1;
            this.networks = [
                {
                    id,
                    address: "",
                    mib: undefined
                },
                ...this.networks
            ];
            console.log(this.networks);
        },
        removeNetwork (item) {
            const id = item.id;
            this.networks = this.networks.filter((el)=>el.id !== id);
        },
        // uploadGateways() {
        //   let input = document.createElement("input");
        //   input.type = "file";
        //   input.accept = ".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
        //   input.click();
        //   input.addEventListener("change", async (event) => {
        //     this.isLoading = true;
        //     try {
        //       const file = event.target.files[0];
        //       const ips = await this.convertFileDataToJson(file);
        //       this.serverInfo.gateways = ips.map((el, index) => {
        //         el.id = index;
        //         return el;
        //       });
        //       this.isLoading = false;
        //     } catch (error) {
        //       console.log(error);
        //       this.isLoading = false;
        //     }
        //   }, false);
        // },
        // async convertFileDataToJson(file) {
        //   const dataJson = await spinalExcelManager.convertExcelToJson(file);
        //   const ips = [];
        //   let index = 0;
        //   for (const key in dataJson) {
        //     if (Object.hasOwnProperty.call(dataJson, key)) {
        //       const values = dataJson[key];
        //       for (const item of values) {
        //         item.id = index;
        //         ips.push(item);
        //         index++;
        //       }
        //     }
        //   }
        //   return ips;
        // },
        // discover
        async createNewSpinalDiscover () {
            this.networks = this.networks.filter((el)=>el.address.trim().length > 0 && el.address.toString().trim().length > 0);
            console.log("networks", this.networks);
            this.spinalDiscover = new (0, _spinalModelSnmp.SpinalSNMPDiscover)(this.graph, this.context, this.organ, this.networks);
            this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).readyToDiscover);
            await this.spinalDiscover.addToGraph();
            return this.spinalDiscover;
        },
        async goToDiscovering () {
            this.state = (0, _spinalModelSnmp.STATES).discovering;
            await this.createNewSpinalDiscover();
            this.bindDiscoverProgress();
            this.bindDiscoverState();
            console.log("start discovering", this.spinalDiscover);
        },
        async goToDiscovered () {
            const tree = await this.spinalDiscover.getTreeDiscovered();
            console.log("discovered tree", tree);
            this.treeFields = [
                tree
            ];
            this.state = (0, _spinalModelSnmp.STATES).discovered;
        },
        async cancelDiscovering () {
            this.state = (0, _spinalModelSnmp.STATES).initial;
            this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).cancelled);
        },
        retry () {
            this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).discovering);
            this.state = (0, _spinalModelSnmp.STATES).discovering;
        },
        bindDiscoverProgress () {
            ////// bind is executed on init and on progress change
            this.progressBindProcess = this.spinalDiscover.progress.bind(async ()=>{
                const progress = this.spinalDiscover.progress.get();
                this.discoverProgress = progress;
            }, true);
        },
        bindDiscoverState () {
            this.processBind = this.spinalDiscover.state.bind(async ()=>{
                const state = this.spinalDiscover.state.get();
                switch(state){
                    case (0, _spinalModelSnmp.STATES).discovered:
                        this.goToDiscovered();
                        break;
                    case (0, _spinalModelSnmp.STATES).error:
                        this.state = (0, _spinalModelSnmp.STATES).error;
                        break;
                    case (0, _spinalModelSnmp.STATES).cancelled:
                        await this.resetSpinalDiscover();
                        break;
                    case (0, _spinalModelSnmp.STATES).created:
                        this.state = (0, _spinalModelSnmp.STATES).created;
                        await this.resetSpinalDiscover();
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
            this.state = (0, _spinalModelSnmp.STATES).discovering;
        },
        // discover end
        // creation
        async createNodes () {
            this.state = (0, _spinalModelSnmp.STATES).creating;
            const treeSelected = await this.getTreeSelected();
            console.log("treeSelected", treeSelected);
            await this.spinalDiscover.setTreeToCreate(treeSelected);
            this.spinalDiscover.changeState((0, _spinalModelSnmp.STATES).readyToCreate);
        },
        getTreeSelected () {
            const treeCopy = JSON.parse(JSON.stringify(this.treeFields[0]));
            const itemSelected = this.convertTreeSelectedToObj();
            return this.filterTree(treeCopy, itemSelected);
        },
        convertTreeSelectedToObj () {
            return this.checkedNodes.reduce((o, id)=>{
                o[id] = id;
                return o;
            }, {});
        },
        async filterTree (tree, nodeSelected) {
            if (nodeSelected[tree.oid]) return tree;
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
                    name: item.name,
                    oid: item.oid,
                    parentId
                };
                if (hasChild) list.push(...this.formatTree(item.children, item.oid).flat());
                list.push(copy);
                return list;
            }, []);
        },
        convertToObj (tree, parentId, obj) {
            return tree.reduce((list, item)=>{
                const hasChild = item.children && item.children.length > 0 ? true : false;
                const copy = {
                    name: item.name,
                    oid: item.oid,
                    parentId
                };
                if (hasChild) list.push(...this.convertToObj(item.children, item.oid, obj).flat());
                obj[copy.oid] = copy;
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-snmp":"coTUC","spinal-env-viewer-plugin-excel-manager-service":"5y3Gh","../../js/constants":"9F8l6","./step_content/networkInfo.vue":"k0eHL","./step_content/discoverInfo.vue":"2FnxJ","./step_content/selectToCreate.vue":"hgdMT","./step_content/creationStep.vue":"kkCAQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k0eHL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("84c559ef9d840e66");
    if (script.__esModule) script = script.default;
    script.render = require("d41de01a112df6b8").render;
    script.staticRenderFns = require("d41de01a112df6b8").staticRenderFns;
    script._scopeId = "data-v-b23bde";
    script.__cssModules = require("1a83a07a5d832a45").default;
    require("1be910617b863c35").default(script);
    script.__scopeId = 'data-v-b23bde';
    script.__file = "networkInfo.vue";
};
initialize();
exports.default = script;

},{"84c559ef9d840e66":"hs5VA","d41de01a112df6b8":"lF8J9","1a83a07a5d832a45":"f9SqN","1be910617b863c35":"eyx4j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hs5VA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../../js/constants");
var scriptExports = {
    name: "NetworkInfo",
    props: {
        networks: Array,
        loading: Boolean
    },
    data () {
        return {
            stepName: (0, _constants.NETWORK_PANEL_STEPS).serverInfo
        };
    },
    methods: {
        nextStep () {
            this.$emit("nextStep", this.stepName);
        },
        // upload() {
        //     this.$emit("upload");
        // },
        addNetwork () {
            this.$emit("addNetwork");
        },
        removeNetwork (item) {
            this.$emit("removeNetwork", item);
        },
        uploadMib (event, item) {
            console.log(event, item);
            const file = event.target.files[0];
            if (file) item.mibFile = file;
        }
    },
    computed: {
        disabled () {
            return this.networks.length === 0;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/constants":"9F8l6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lF8J9":[function(require,module,exports,__globalThis) {
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
            !_vm.loading ? _c('div', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "header"
                }, [
                    _c('md-button', {
                        staticClass: "md-dense md-primary",
                        on: {
                            "click": _vm.addNetwork
                        }
                    }, [
                        _vm._v("\n                    add Network\n                ")
                    ])
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "networks_container"
                }, _vm._l(_vm.networks, function(item, index) {
                    return _c('div', {
                        key: index,
                        staticClass: "network_list"
                    }, [
                        _c('div', {
                            staticClass: "name"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("name")
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
                        _c('div', {
                            staticClass: "address"
                        }, [
                            _c('md-field', {
                                attrs: {
                                    "md-inline": ""
                                }
                            }, [
                                _c('label', [
                                    _vm._v("address (ip:port)")
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
                            staticClass: "uploadMib"
                        }, [
                            _c('md-field', [
                                _c('label', [
                                    _vm._v("Upload MIB file")
                                ]),
                                _vm._v(" "),
                                _c('md-file', {
                                    on: {
                                        "change": function($event) {
                                            return _vm.uploadMib($event, item);
                                        }
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
                                        return _vm.removeNetwork(item);
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
        ]),
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

},{}],"f9SqN":[function() {},{}],"eyx4j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2FnxJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d8ad1cc1e5879c10");
    if (script.__esModule) script = script.default;
    script.render = require("a67443a4d16644e1").render;
    script.staticRenderFns = require("a67443a4d16644e1").staticRenderFns;
    script._scopeId = "data-v-478e6f";
    script.__cssModules = require("7f763bd19a940f80").default;
    require("5f4ed6d967636615").default(script);
    script.__scopeId = 'data-v-478e6f';
    script.__file = "discoverInfo.vue";
};
initialize();
exports.default = script;

},{"d8ad1cc1e5879c10":"4mz32","a67443a4d16644e1":"6SHQr","7f763bd19a940f80":"7HsNh","5f4ed6d967636615":"9jOLA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4mz32":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelSnmp = require("spinal-model-snmp");
var _constants = require("../../../js/constants");
// import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
var scriptExports = {
    name: "DiscoverInfo",
    // components: {
    //     "ejs-treeview": TreeViewComponent,
    // },
    props: {
        state: {
            type: String,
            required: true
        },
        progress: {
            type: Object,
            required: false,
            default: ()=>({
                    total: 0,
                    finished: 0,
                    failed: 0
                })
        }
    },
    data () {
        this.STATES = (0, _spinalModelSnmp.STATES);
        return {
            stepName: (0, _constants.NETWORK_PANEL_STEPS).discovering,
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
        }
    },
    watch: {
        state (newVal) {
            if (newVal === (0, _spinalModelSnmp.STATES).discovered) this.nextStep();
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

},{"spinal-model-snmp":"coTUC","../../../js/constants":"9F8l6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6SHQr":[function(require,module,exports,__globalThis) {
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
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7HsNh":[function() {},{}],"9jOLA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hgdMT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4500262330f17331");
    if (script.__esModule) script = script.default;
    script.render = require("4f2725a4959b1dc3").render;
    script.staticRenderFns = require("4f2725a4959b1dc3").staticRenderFns;
    script._scopeId = "data-v-cd78d1";
    script.__cssModules = require("84cfe23f690ff1b4").default;
    require("d8b02f57721b5126").default(script);
    script.__scopeId = 'data-v-cd78d1';
    script.__file = "selectToCreate.vue";
};
initialize();
exports.default = script;

},{"4500262330f17331":"flhZw","4f2725a4959b1dc3":"b9plX","84cfe23f690ff1b4":"j04J2","d8b02f57721b5126":"eoA9y","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"flhZw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelSnmp = require("spinal-model-snmp");
var _ej2VueNavigations = require("@syncfusion/ej2-vue-navigations");
var _constants = require("../../../js/constants");
var scriptExports = {
    name: "DiscoverStep",
    components: {
        "ejs-treeview": (0, _ej2VueNavigations.TreeViewComponent)
    },
    props: {
        state: {
            required: true
        },
        treeFields: {
            required: true
        }
    },
    data () {
        this.STATES = (0, _spinalModelSnmp.STATES);
        // this.CHOICES = OPCUA_ORGAN_USER_CHOICE;
        this.stepName = (0, _constants.NETWORK_PANEL_STEPS).discovered;
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
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-snmp":"coTUC","@syncfusion/ej2-vue-navigations":"llxIM","../../../js/constants":"9F8l6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b9plX":[function(require,module,exports,__globalThis) {
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
                        "item-text": "name",
                        "item-key": "oid",
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

},{}],"j04J2":[function() {},{}],"eoA9y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kkCAQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc7c1214786e0bae");
    if (script.__esModule) script = script.default;
    script.render = require("fb7e5a57eeb43071").render;
    script.staticRenderFns = require("fb7e5a57eeb43071").staticRenderFns;
    script._scopeId = "data-v-a9643e";
    script.__cssModules = require("831af8855d156991").default;
    require("1d7dad0db34be156").default(script);
    script.__scopeId = 'data-v-a9643e';
    script.__file = "creationStep.vue";
};
initialize();
exports.default = script;

},{"cc7c1214786e0bae":"feZqD","fb7e5a57eeb43071":"fsoIr","831af8855d156991":"95Chr","1d7dad0db34be156":"kTkxQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"feZqD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelSnmp = require("spinal-model-snmp");
var _constants = require("../../../js/constants");
var scriptExports = {
    name: "CreateStep",
    props: {
        state: {
            required: true
        }
    },
    data () {
        this.STATES = (0, _spinalModelSnmp.STATES);
        this.stepName = (0, _constants.NETWORK_PANEL_STEPS).discovered;
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

},{"spinal-model-snmp":"coTUC","../../../js/constants":"9F8l6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fsoIr":[function(require,module,exports,__globalThis) {
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

},{}],"95Chr":[function() {},{}],"kTkxQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cqMhn":[function(require,module,exports,__globalThis) {
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
                    "id": _vm.STEPS.serverInfo,
                    "md-label": "Network Info",
                    "md-description": "Enter the network information",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.serverInfo
                }
            }, [
                _c('network-info-step', {
                    attrs: {
                        "networks": _vm.networks,
                        "loading": _vm.isLoading
                    },
                    on: {
                        "nextStep": _vm.nextStep,
                        "addNetwork": _vm.addNetwork,
                        "removeNetwork": _vm.removeNetwork
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": _vm.STEPS.discovering,
                    "md-label": "Discovering",
                    "md-description": "Launch the discovery",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.discovering
                }
            }, [
                _c('discover-info-step', {
                    attrs: {
                        "state": _vm.state,
                        "progress": _vm.discoverProgress
                    },
                    on: {
                        "discover": _vm.goToDiscovering,
                        "nextStep": _vm.nextStep,
                        "goBack": _vm.goBack,
                        "cancel": _vm.cancelDiscovering,
                        "retry": _vm.retry
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-step', {
                attrs: {
                    "id": _vm.STEPS.discovered,
                    "md-label": "Discovered",
                    "md-description": "select the nodes to create",
                    "md-editable": false,
                    "md-done": _vm.step > _vm.STEPS.discovered
                }
            }, [
                _c('select-to-create-step', {
                    attrs: {
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
                    "id": _vm.STEPS.creation,
                    "md-label": "Create Nodes",
                    "md-description": "Node creation",
                    "md-editable": false
                }
            }, [
                _c('creation-info-step', {
                    attrs: {
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

},{}],"l9UkT":[function() {},{}],"fCIh6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"825ee":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("454d10a1f7982628");
    if (script.__esModule) script = script.default;
    script.render = require("cfe83cbac43197f2").render;
    script.staticRenderFns = require("cfe83cbac43197f2").staticRenderFns;
    script._scopeId = "data-v-22db5a";
    script.__cssModules = require("c733a44dbd5073ff").default;
    require("2616b8ec757c096c").default(script);
    script.__scopeId = 'data-v-22db5a';
    script.__file = "monitoringPanel.vue";
};
initialize();
exports.default = script;

},{"454d10a1f7982628":"e0Csd","cfe83cbac43197f2":"c4hWT","c733a44dbd5073ff":"2eSjZ","2616b8ec757c096c":"gjtMC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e0Csd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _spinalModelSnmp = require("spinal-model-snmp");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelGraph = require("spinal-model-graph");
var _snmpProfileService = require("../../js/snmpProfileService");
var _lodash = require("lodash");
const snmpProfileService = new (0, _snmpProfileService.SnmpProfileService)();
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
            const profile = await snmpProfileService.getProfileLinked(node);
            if (!profile) return;
            let model = new (0, _spinalModelSnmp.SpinalSNMPListener)(this.graph, this.context, this.organ, this.network, node, profile, true);
            await model.addToGraph();
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
            if (!node || !node.hasRelation((0, _snmpProfileService.CONTEXT_TO_PROFILE_RELATION), (0, _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE))) return true;
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
            if (!node || !node.hasRelation((0, _snmpProfileService.CONTEXT_TO_PROFILE_RELATION), (0, _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE))) return "No_profile Linked";
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

},{"../../js/constants":"9F8l6","spinal-model-snmp":"coTUC","spinal-model-bmsnetwork":"haihS","spinal-model-graph":"b87gp","../../js/snmpProfileService":"eZHUZ","lodash":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c4hWT":[function(require,module,exports,__globalThis) {
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
            ], 1)
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
                    ], 1)
                ], 1)
            ]);
        }), 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2eSjZ":[function() {},{}],"gjtMC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dQgc1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _constants = require("../../js/constants");
////// components
var _createSubNetworkVue = require("./createSubNetwork.vue");
var _createSubNetworkVueDefault = parcelHelpers.interopDefault(_createSubNetworkVue);
var _generateProfileVue = require("./generateProfile.vue");
var _generateProfileVueDefault = parcelHelpers.interopDefault(_generateProfileVue);
var _linkProfileToDeviceVue = require("./linkProfileToDevice.vue");
var _linkProfileToDeviceVueDefault = parcelHelpers.interopDefault(_linkProfileToDeviceVue);
var _configProfileDialogVue = require("./configProfileDialog.vue");
var _configProfileDialogVueDefault = parcelHelpers.interopDefault(_configProfileDialogVue);
const { SpinalMountExtention } = require("52fb84c5822fa60d");
const dialogs = [
    {
        name: (0, _constants.CREATE_SUBNETWORK_DIALOG_IN_SNMP),
        vueMountComponent: (0, _vueDefault.default).extend((0, _createSubNetworkVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.GENERATE_PROFILE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _generateProfileVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.LINK_PROFILE_TO_DEVICE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkProfileToDeviceVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.CONFIG_PROFILE_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _configProfileDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","52fb84c5822fa60d":"egTXY","../../js/constants":"9F8l6","./createSubNetwork.vue":"zDudC","./generateProfile.vue":"jJvk0","./linkProfileToDevice.vue":"1IMce","./configProfileDialog.vue":"lo9h0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"zDudC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1ec73ff4e2868bed");
    if (script.__esModule) script = script.default;
    script.render = require("1082ef2a5fb2a782").render;
    script.staticRenderFns = require("1082ef2a5fb2a782").staticRenderFns;
    script._scopeId = "data-v-d5da1d";
    script.__cssModules = require("6fc7e210b977cd44").default;
    require("7fc0a3ebe3bce38").default(script);
    script.__scopeId = 'data-v-d5da1d';
    script.__file = "createSubNetwork.vue";
};
initialize();
exports.default = script;

},{"1ec73ff4e2868bed":"30xHj","1082ef2a5fb2a782":"9tHOL","6fc7e210b977cd44":"1YfNo","7fc0a3ebe3bce38":"LWepE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"30xHj":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tHOL":[function(require,module,exports,__globalThis) {
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

},{}],"1YfNo":[function() {},{}],"LWepE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jJvk0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("12ce6d71f306be09");
    if (script.__esModule) script = script.default;
    script.render = require("e55365e127570de9").render;
    script.staticRenderFns = require("e55365e127570de9").staticRenderFns;
    script._scopeId = "data-v-6f974a";
    script.__cssModules = require("cd09ed4c6c30333e").default;
    require("142b0fa791ec1fd1").default(script);
    script.__scopeId = 'data-v-6f974a';
    script.__file = "generateProfile.vue";
};
initialize();
exports.default = script;

},{"12ce6d71f306be09":"expO9","e55365e127570de9":"3HnZX","cd09ed4c6c30333e":"3mUSd","142b0fa791ec1fd1":"6eaoC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"expO9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _snmpProfileService = require("../../js/snmpProfileService");
var scriptExports = {
    name: (0, _constants.GENERATE_PROFILE_DIALOG),
    props: [
        "onFinised"
    ],
    components: {},
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
                await (0, _snmpProfileService.SnmpProfileService).getInstance().generateProfile(this.selectedNode, this.context, this.profileName);
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

},{"../../js/constants":"9F8l6","../../js/snmpProfileService":"eZHUZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3HnZX":[function(require,module,exports,__globalThis) {
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
            _vm._v("\n        Generate SNMP profile\n    ")
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

},{}],"3mUSd":[function() {},{}],"6eaoC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1IMce":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9b51abd63c2f4123");
    if (script.__esModule) script = script.default;
    script.render = require("1c3f5525d27b988c").render;
    script.staticRenderFns = require("1c3f5525d27b988c").staticRenderFns;
    script._scopeId = "data-v-231b14";
    script.__cssModules = require("2c5d650a13e42c3d").default;
    require("5f16359b1ddedbde").default(script);
    script.__scopeId = 'data-v-231b14';
    script.__file = "linkProfileToDevice.vue";
};
initialize();
exports.default = script;

},{"9b51abd63c2f4123":"1a8ZC","1c3f5525d27b988c":"cPe6G","2c5d650a13e42c3d":"eOtJA","5f16359b1ddedbde":"1GX1Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1a8ZC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _snmpProfileService = require("../../js/snmpProfileService");
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
            const profiles = await (0, _snmpProfileService.SnmpProfileService).getInstance().getProfiles();
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
                await (0, _snmpProfileService.SnmpProfileService).getInstance().linkProfileToDevice(this.selectedNode, profileNode);
                this.state = this.STATES.success;
            } catch (error) {
                this.state = this.STATES.error;
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"9F8l6","../../js/snmpProfileService":"eZHUZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cPe6G":[function(require,module,exports,__globalThis) {
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
            _vm._v("\n        Select Profile\n    ")
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
                        _vm._v("\n                    " + _vm._s(profile.name) + "\n                ")
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

},{}],"eOtJA":[function() {},{}],"1GX1Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lo9h0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("34dc0d67ad5782cf");
    if (script.__esModule) script = script.default;
    script.render = require("cd85ab6c4d16a702").render;
    script.staticRenderFns = require("cd85ab6c4d16a702").staticRenderFns;
    script._scopeId = "data-v-4c4f61";
    script.__cssModules = require("43282b94cf58ab08").default;
    require("9990a9caa98eaf7c").default(script);
    script.__scopeId = 'data-v-4c4f61';
    script.__file = "configProfileDialog.vue";
};
initialize();
exports.default = script;

},{"34dc0d67ad5782cf":"knrNr","cd85ab6c4d16a702":"eIRDd","43282b94cf58ab08":"227T9","9990a9caa98eaf7c":"5ug7N","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"knrNr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../../js/constants");
var _snmpProfileService = require("../../js/snmpProfileService");
var _snmpProfileServiceDefault = parcelHelpers.interopDefault(_snmpProfileService);
var _tableVue = require("./components/table.vue");
var _tableVueDefault = parcelHelpers.interopDefault(_tableVue);
var _lodash = require("lodash");
var _lodashDefault = parcelHelpers.interopDefault(_lodash);
var scriptExports = {
    name: (0, _constants.CONFIG_PROFILE_DIALOG),
    props: [
        "onFinised"
    ],
    components: {
        "table-component": (0, _tableVueDefault.default)
    },
    data () {
        this.STATES = {
            loading: 1,
            loaded: 2,
            success: 3,
            error: 4
        };
        this.endpointsObjects = {};
        return {
            showDialog: true,
            state: this.STATES.loading,
            context: null,
            selectedNode: null,
            endpoints: [],
            endpointsFormatted: [],
            intervalsList: []
        };
    },
    methods: {
        async opened ({ graph, context, selectedNode, organ }) {
            try {
                this.context = context;
                this.selectedNode = selectedNode;
                // this.organ = organ;
                this.state = this.STATES.loading;
                const [endpoints, intervals] = await this.initializate(selectedNode);
                this.endpoints = endpoints;
                this.intervalsList = intervals;
                this.endpointsFormatted = await this._formatEndpoints(endpoints);
                this.state = this.STATES.loaded;
            } catch (error) {
                console.error("Error initializing SNMP profile configuration dialog:", error);
                this.state = this.STATES.error;
            }
        },
        initializate (node) {
            const instance = (0, _snmpProfileServiceDefault.default).getInstance();
            const promises = [
                instance.getItems(node),
                instance.getIntervals(node)
            ];
            return Promise.all(promises).then(([endpoints, intervals])=>{
                if (intervals.length === 0) intervals = this._getDefaultIntervals();
                else intervals = this._formatIntervals(intervals);
                return [
                    endpoints,
                    intervals
                ];
            });
        },
        _formatIntervals (intervals) {
            let hasNoMonitored = false;
            let hasCov = false;
            const intervalsFound = intervals.map(({ node })=>{
                if (node.info.value.get() === -1) hasNoMonitored = true;
                if (node.info.value.get() === 0) hasCov = true;
                return {
                    id: node.getId().get(),
                    name: node.getName().get(),
                    value: node.info.value.get()
                };
            });
            // If there is no "Not Monitored" option, add it to the beginning of the list
            if (!hasNoMonitored) intervalsFound.unshift({
                id: -1,
                name: "Not Monitored",
                value: -1
            });
            if (!hasCov) intervalsFound.unshift({
                id: 0,
                name: "COV",
                value: 0
            });
            return intervalsFound;
        },
        _getDefaultIntervals () {
            return [
                {
                    id: -1,
                    name: "Not Monitored",
                    value: -1
                },
                {
                    id: 0,
                    name: "COV",
                    value: 0
                },
                {
                    id: 5000,
                    name: "5 seconds",
                    value: 5000
                },
                {
                    id: 30000,
                    name: "30 seconds",
                    value: 30000
                },
                {
                    id: 60000,
                    name: "1 minute",
                    value: 60000
                },
                {
                    id: 300000,
                    name: "5 minutes",
                    value: 300000
                },
                {
                    id: 1800000,
                    name: "30 minutes",
                    value: 1800000
                },
                {
                    id: 3600000,
                    name: "1 hour",
                    value: 3600000
                }
            ];
        },
        _formatEndpoints (endpoints) {
            const promises = endpoints.map(async (endpoint)=>{
                const key = endpoint.info.idNetwork.get();
                this.endpointsObjects[key] = endpoint; // Store the original endpoint object for later reference
                const { interval, saveTimeSeries } = await this._getIntervalAndSaveTimeSeriesForEndpoint(endpoint);
                return {
                    id: endpoint.info.id.get(),
                    name: endpoint.info.name.get(),
                    oid: endpoint.info.idNetwork.get(),
                    saveTimeSeries,
                    interval
                };
            });
            return Promise.all(promises);
        },
        async _getIntervalAndSaveTimeSeriesForEndpoint (originalEndpoint) {
            const saveTimeSeries = originalEndpoint.info.saveTimeSeries && originalEndpoint.info.saveTimeSeries.get() || false;
            const intervalNode = await (0, _snmpProfileServiceDefault.default).getInstance().getActualIntervalForItem(originalEndpoint);
            const interval = intervalNode ? intervalNode.info.value.get() : -1;
            return {
                saveTimeSeries,
                interval: interval ?? -1
            };
        },
        Save () {
            this.state = this.STATES.loading;
            const instance = (0, _snmpProfileServiceDefault.default).getInstance();
            const classifiedByInterval = (0, _lodashDefault.default).groupBy(this.endpointsFormatted, "interval");
            const intervals = Object.keys(classifiedByInterval);
            // For each interval, get the corresponding endpoints and add them to the profile
            const promises = intervals.map((interval)=>{
                const intervalInfo = this.intervalsList.find((i)=>i.value == parseInt(interval));
                const endpoints = classifiedByInterval[interval];
                const endpointsNodes = this._getEndpointsNodesNodes(endpoints);
                return instance.addIntervalToProfile(this.selectedNode, intervalInfo, endpointsNodes);
            });
            // Wait for all intervals to be added before showing success or error state
            return Promise.all(promises).then(()=>{
                this.state = this.STATES.success;
            // setTimeout(() => {
            //     this.closeDialog(true);
            // }, 1000);
            }).catch((err)=>{
                console.error("Error saving SNMP profile configuration:", err);
                this.state = this.STATES.error;
            });
        },
        // This function retrieves the original endpoint nodes based on the displayed endpoints and updates their saveTimeSeries properties
        _getEndpointsNodesNodes (endpoints) {
            const endpointsNodes = [];
            for (const endpoint of endpoints){
                const endpointNode = this.endpointsObjects[endpoint.oid];
                if (endpointNode) {
                    // Update saveTimeSeries and interval properties on the original endpoint node
                    this._setSaveTimeSeries(endpointNode, endpoint.saveTimeSeries);
                    endpointsNodes.push(endpointNode);
                }
            }
            return endpointsNodes;
        },
        _setSaveTimeSeries (endpoint, save) {
            console.log("_setSaveTimeSeries", endpoint, save);
            if (endpoint.info.saveTimeSeries) {
                endpoint.info.saveTimeSeries.set(save);
                return;
            }
            endpoint.info.add_attr({
                saveTimeSeries: save
            });
        },
        removed (option) {
            option.closeResult;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../js/constants":"9F8l6","../../js/snmpProfileService":"eZHUZ","./components/table.vue":"jFmTQ","lodash":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jFmTQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("81899e2cdbbdc698");
    if (script.__esModule) script = script.default;
    script.render = require("7ef1e4515727da71").render;
    script.staticRenderFns = require("7ef1e4515727da71").staticRenderFns;
    script._scopeId = "data-v-4ad07d";
    script.__cssModules = require("ee526f3413ea7f1f").default;
    require("363bd070181501dc").default(script);
    script.__scopeId = 'data-v-4ad07d';
    script.__file = "table.vue";
};
initialize();
exports.default = script;

},{"81899e2cdbbdc698":"h8GpI","7ef1e4515727da71":"iIcoh","ee526f3413ea7f1f":"iXvsX","363bd070181501dc":"i1ZQm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h8GpI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _intervalSelectVue = require("./intervalSelect.vue");
var _intervalSelectVueDefault = parcelHelpers.interopDefault(_intervalSelectVue);
var scriptExports = {
    name: "Table",
    props: [
        'data',
        "intervals"
    ],
    components: {
        "interval-select": (0, _intervalSelectVueDefault.default)
    },
    data () {
        return {
            dataFiltered: [],
            search: ""
        };
    },
    mounted () {
        this.dataFiltered = this.data;
    },
    methods: {
        searchOnTable () {
            const temp_list = [];
            // use a for loop to keep reference of the original data;
            for (const item of this.data)if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
                temp_list.push(item);
                const copy = Object.assign({}, item);
                copy.oid = "Copy of " + copy.oid;
                temp_list.push(copy);
            }
            this.dataFiltered = temp_list;
        // Commented to use a for loop to keep reference of the original data;
        // this.dataFiltered = this.data.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
        },
        saveTimeSeriesForItems (save) {
            console.log("saveTimeSeriesForItems", save, this.dataFiltered);
            for (const item of this.dataFiltered)item.saveTimeSeries = save;
        },
        changeIntervalForItems (value) {
            for (const item of this.dataFiltered)item.interval = value;
        }
    },
    watch: {
        data: {
            handler () {
                this.dataFiltered = this.data;
            },
            immediate: true
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./intervalSelect.vue":"aY03P","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aY03P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("95411495d127649f");
    if (script.__esModule) script = script.default;
    script.render = require("a185c8ba80a2b5dd").render;
    script.staticRenderFns = require("a185c8ba80a2b5dd").staticRenderFns;
    script._scopeId = "data-v-8424f0";
    script.__cssModules = require("2cbd4be527a862e9").default;
    require("83964d005761fafd").default(script);
    script.__scopeId = 'data-v-8424f0';
    script.__file = "intervalSelect.vue";
};
initialize();
exports.default = script;

},{"95411495d127649f":"8f155","a185c8ba80a2b5dd":"YPePH","2cbd4be527a862e9":"1CeI3","83964d005761fafd":"eu5bU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8f155":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "IntervalSelect",
    props: [
        'label',
        'intervals',
        'value',
        'type'
    ],
    data () {
        return {
            selected: this.value
        };
    },
    mounted () {
        this.selected = this.value;
    },
    watch: {
        value (newVal) {
            console.log("newVal", newVal); // Debugging line
            this.selected = newVal;
        }
    },
    methods: {
        selectItem (value) {
            this.$emit("select", value);
        }
    },
    computed: {
        isMenu () {
            return this.type === "menu";
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"YPePH":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.isMenu ? _c('md-field', [
        _c('label', {
            attrs: {
                "for": "interval"
            }
        }, [
            _vm._v(_vm._s(_vm.label))
        ]),
        _vm._v(" "),
        _c('md-select', {
            attrs: {
                "name": "interval",
                "id": "interval"
            },
            on: {
                "input": _vm.selectItem
            },
            model: {
                value: _vm.selected,
                callback: function($$v) {
                    _vm.selected = $$v;
                },
                expression: "selected"
            }
        }, _vm._l(_vm.intervals, function(i) {
            return _c('md-option', {
                key: i.id,
                attrs: {
                    "value": i.value
                }
            }, [
                _vm._v(_vm._s(i.name))
            ]);
        }), 1)
    ], 1) : _c('md-menu', {
        attrs: {
            "md-size": "big"
        }
    }, [
        _c('md-button', {
            staticClass: "md-primary md-dense",
            attrs: {
                "md-menu-trigger": ""
            }
        }, [
            _vm._v("\n        " + _vm._s(_vm.label) + "\n        "),
            _c('md-icon', [
                _vm._v("expand_more")
            ])
        ], 1),
        _vm._v(" "),
        _c('md-menu-content', _vm._l(_vm.intervals, function(i) {
            return _c('md-menu-item', {
                key: i.id,
                on: {
                    "click": function() {
                        return _vm.selectItem(i.value);
                    }
                }
            }, [
                _vm._v("\n            " + _vm._s(i.name) + "\n        ")
            ]);
        }), 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1CeI3":[function() {},{}],"eu5bU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iIcoh":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-table', {
            staticClass: "myTable"
        }, [
            _c('md-table-toolbar', {
                staticClass: "tableToolbar"
            }, [
                _c('div', {
                    staticClass: "secondBar"
                }, [
                    _c('md-field', {
                        staticClass: "toolbarMdfield",
                        attrs: {
                            "md-clearable": ""
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("search")
                        ]),
                        _vm._v(" "),
                        _c('md-input', {
                            staticClass: "search",
                            attrs: {
                                "placeholder": "Search by name..."
                            },
                            on: {
                                "input": _vm.searchOnTable
                            },
                            model: {
                                value: _vm.search,
                                callback: function($$v) {
                                    _vm.search = $$v;
                                },
                                expression: "search"
                            }
                        })
                    ], 1)
                ], 1)
            ]),
            _vm._v(" "),
            _c('md-table-row', [
                _c('md-table-head', {
                    attrs: {
                        "md-label": "OID",
                        "md-sort-by": "oid"
                    }
                }, [
                    _vm._v("OID")
                ]),
                _vm._v(" "),
                _c('md-table-head', {
                    attrs: {
                        "md-label": "Name",
                        "md-sort-by": "name"
                    }
                }, [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c('md-table-head', [
                    _c('interval-select', {
                        attrs: {
                            "intervals": _vm.intervals,
                            "type": "menu",
                            "label": "Set items displayed Intervals"
                        },
                        on: {
                            "select": _vm.changeIntervalForItems
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('md-table-head', [
                    _c('md-button', {
                        staticClass: "md-icon-button md-dense md-primary",
                        attrs: {
                            "title": "SaveTimeSeries for items displayed"
                        },
                        on: {
                            "click": function() {
                                return _vm.saveTimeSeriesForItems(true);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("check_box")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-button', {
                        staticClass: "md-icon-button md-dense md-accent",
                        attrs: {
                            "title": "unsaveTimeSeries for items displayed"
                        },
                        on: {
                            "click": function() {
                                return _vm.saveTimeSeriesForItems(false);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("check_box_outline_blank")
                        ])
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _vm._l(_vm.dataFiltered, function(item) {
                return _c('md-table-row', {
                    key: item.oid
                }, [
                    _c('md-table-cell', {
                        attrs: {
                            "md-label": "OID",
                            "md-sort-by": "oid"
                        }
                    }, [
                        _vm._v(_vm._s(item.oid))
                    ]),
                    _vm._v(" "),
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
                            "md-label": "Interval"
                        }
                    }, [
                        _c('interval-select', {
                            attrs: {
                                "intervals": _vm.intervals,
                                "value": item.interval
                            },
                            on: {
                                "select": function(value) {
                                    return item.interval = value;
                                }
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c('md-table-cell', {
                        attrs: {
                            "md-label": "Save TimeSeries"
                        }
                    }, [
                        _c('md-checkbox', {
                            staticClass: "md-primary",
                            model: {
                                value: item.saveTimeSeries,
                                callback: function($$v) {
                                    _vm.$set(item, "saveTimeSeries", $$v);
                                },
                                expression: "item.saveTimeSeries"
                            }
                        })
                    ], 1)
                ], 1);
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iXvsX":[function() {},{}],"i1ZQm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eIRDd":[function(require,module,exports,__globalThis) {
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
            _vm._v("\n        Configure SNMP profile\n    ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContent"
        }, [
            _vm.state === _vm.STATES.loaded ? _c('div', {
                staticClass: "loadedContent"
            }, [
                _c('table-component', {
                    attrs: {
                        "data": _vm.endpointsFormatted,
                        "intervals": _vm.intervalsList
                    }
                })
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
                staticClass: "md-accent",
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

},{}],"227T9":[function() {},{}],"5ug7N":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-snmp-manager.1a9b1db7.js.map
