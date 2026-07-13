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
})({"jxQie":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttons = require("./buttons");
parcelHelpers.exportAll(_buttons, exports);
var _panels = require("./panels");
parcelHelpers.exportAll(_panels, exports);
var _dialogs = require("./dialogs");
parcelHelpers.exportAll(_dialogs, exports);
console.log("Index file loaded 2024-06");

},{"./buttons":"35L6I","./panels":"drqGo","./dialogs":"ekVuo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"35L6I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveDevicesJs = require("./moveDevices.js");
parcelHelpers.exportAll(_moveDevicesJs, exports);
var _createNetworkJs = require("./createNetwork.js");
parcelHelpers.exportAll(_createNetworkJs, exports);
var _createDeviceJs = require("./createDevice.js");
parcelHelpers.exportAll(_createDeviceJs, exports);
var _createEndpointJs = require("./createEndpoint.js");
parcelHelpers.exportAll(_createEndpointJs, exports);

},{"./moveDevices.js":"h4bM2","./createNetwork.js":"ewGBw","./createDevice.js":"d8umt","./createEndpoint.js":"jeoYu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h4bM2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelBacnet = require("spinal-model-bacnet");
var _spinalModelOpcua = require("spinal-model-opcua");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("c5d8dc2881a8aca7");
class MoveDevicesToAnotherOrgan extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Move devices to another bacnet organ", "This button allows to move a device to another organ", {
            icon: "low_priority",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const type = option.selectedNode.type.get();
        const typesAllowed = [
            (0, _spinalModelBacnet.BACNET_ORGAN_TYPE),
            (0, _spinalModelOpcua.OPCUA_ORGAN_TYPE),
            (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName
        ];
        if (typesAllowed.includes(type)) return 1;
        return -1;
    }
    async action(option) {
        spinalPanelManagerService.openPanel((0, _constants.MOVE_DEVICES_PANEL_NAME), option);
    }
}
const moveDevicesToAnotherOrgan = new MoveDevicesToAnotherOrgan();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), moveDevicesToAnotherOrgan, [
    3
]);
exports.default = moveDevicesToAnotherOrgan;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-model-bmsnetwork":"haihS","spinal-model-bacnet":"aS2yR","spinal-model-opcua":"l0Ztm","c5d8dc2881a8aca7":"egTXY","../js/constants":"ie2KI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"ie2KI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MOVE_DEVICES_PANEL_NAME", ()=>MOVE_DEVICES_PANEL_NAME);
parcelHelpers.export(exports, "NETWORK_DIALOG", ()=>NETWORK_DIALOG);
parcelHelpers.export(exports, "ENDPOINT_DIALOG", ()=>ENDPOINT_DIALOG);
parcelHelpers.export(exports, "SIDEBAR", ()=>SIDEBAR);
const MOVE_DEVICES_PANEL_NAME = 'MoveDevicesPanel';
const NETWORK_DIALOG = "createNetworkDialog";
const ENDPOINT_DIALOG = "createEndpointDialog";
const SIDEBAR = "GraphManagerSideBar";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ewGBw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("f43513834b885464");
const networkContextType = "Network";
class CreateNetworkBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create BMS network", "This button allows to create new network", {
            icon: "add_circle",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const result = typeSelected.toLowerCase() === networkContextType.toLowerCase() ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel((0, _constants.NETWORK_DIALOG), {
            selectedNode: option.selectedNode,
            context: option.context,
            title: "Create BMS Network",
            label: "network Name",
            callback: (networkName, parentId, contextId)=>{
                const network = new (0, _spinalModelBmsnetwork.SpinalBmsNetwork)(networkName, (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName);
                const networkId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: networkName,
                    type: (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName
                }, network);
                return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, networkId, contextId, (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
        });
    }
}
const createNetworkBtn = new CreateNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), createNetworkBtn, [
    3
]);
exports.default = createNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","f43513834b885464":"egTXY","spinal-model-bmsnetwork":"haihS","../js/constants":"ie2KI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d8umt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("9f88a22417df0809");
class CreateDeviceBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create BMS Device", "This button allows to create new Device", {
            icon: "add_circle",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const result = typeSelected === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel((0, _constants.NETWORK_DIALOG), {
            selectedNode: option.selectedNode,
            context: option.context,
            title: "Create BMS Device",
            label: "Device Name",
            callback: (deviceName, parentId, contextId)=>{
                const device = new (0, _spinalModelBmsnetwork.SpinalBmsDevice)(deviceName, (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName);
                const deviceId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: deviceName,
                    type: (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName
                }, device);
                const deviceNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(deviceId);
                if (deviceNode) deviceNode.info.add_attr({
                    idNetwork: deviceId
                });
                return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, deviceId, contextId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
        });
    }
}
const createDeviceBtn = new CreateDeviceBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), createDeviceBtn, [
    3
]);
exports.default = createDeviceBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","9f88a22417df0809":"egTXY","spinal-model-bmsnetwork":"haihS","../js/constants":"ie2KI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jeoYu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants = require("../js/constants");
const { spinalPanelManagerService } = require("9de741f0bace7e69");
class CreateEndpointBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Endpoint", "This button allows to create new Endpoint", {
            icon: "add_circle",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const typeSelected = option.selectedNode.type.get();
        const result = [
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName,
            (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup).nodeTypeName
        ].includes(typeSelected) ? true : -1;
        return Promise.resolve(result);
    }
    action(option) {
        spinalPanelManagerService.openPanel((0, _constants.ENDPOINT_DIALOG), option);
    }
}
const createEndpointBtn = new CreateEndpointBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp((0, _constants.SIDEBAR), createEndpointBtn, [
    3
]);
exports.default = createEndpointBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-model-bmsnetwork":"haihS","../js/constants":"ie2KI","9de741f0bace7e69":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"drqGo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _constants = require("../js/constants");
var _moveDevicesPanelVue = require("./moveDevicesPanel.vue");
var _moveDevicesPanelVueDefault = parcelHelpers.interopDefault(_moveDevicesPanelVue);
const { SpinalForgeExtention } = require("ced2cd500194164b");
const panels = [
    {
        name: (0, _constants.MOVE_DEVICES_PANEL_NAME),
        vueMountComponent: (0, _vueDefault.default).extend((0, _moveDevicesPanelVueDefault.default)),
        panel: {
            title: "Move Devices Panel",
            classname: "spinal_move_devices_panel",
            closeBehaviour: "hide"
        },
        style: {
            width: "600px",
            height: "500px",
            "min-width": "600px",
            left: "400px"
        }
    }
];
for (const data of panels){
    const extension = SpinalForgeExtention.createExtention(data);
    SpinalForgeExtention.registerExtention(data.name, extension);
}

},{"vue":"hO3OD","ced2cd500194164b":"fYcpE","../js/constants":"ie2KI","./moveDevicesPanel.vue":"4PB05","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"4PB05":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("119fdef46c74a2d8");
    if (script.__esModule) script = script.default;
    script.render = require("422f7e851f629d84").render;
    script.staticRenderFns = require("422f7e851f629d84").staticRenderFns;
    script._scopeId = "data-v-b4533a";
    script.__cssModules = require("306edb5981471168").default;
    require("e129aefdf69454a9").default(script);
    script.__scopeId = 'data-v-b4533a';
    script.__file = "moveDevicesPanel.vue";
};
initialize();
exports.default = script;

},{"119fdef46c74a2d8":"aSlb4","422f7e851f629d84":"g3qbs","306edb5981471168":"aJhuQ","e129aefdf69454a9":"b7z3a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aSlb4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
// import TreeView from "./components/treeList.vue";
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _ej2VueNavigations = require("@syncfusion/ej2-vue-navigations");
var _lodash = require("lodash");
var scriptExports = {
    name: "MoveDevicesPanel",
    components: {
        // TreeView,
        "ejs-treeview": (0, _ej2VueNavigations.TreeViewComponent)
    },
    data () {
        this.steps = {
            first: {
                id: "selectDevices",
                title: "Select Devices To Move",
                description: "Select the devices you want to move"
            },
            second: {
                id: "selectDestination",
                title: "Select Destination",
                description: "Select the destination organ"
            }
        };
        return {
            done: {
                first: false,
                second: false
            },
            active: this.steps.first.id,
            devicesToMove: [],
            destinationNode: null,
            loading: false,
            showDialog: true,
            selectedNode: null,
            context: null,
            sourceTree: [],
            destinationTree: [],
            nodesStored: {}
        };
    },
    methods: {
        async opened (option) {
            await this.initializeTreeViewData(option);
        },
        async initializeTreeViewData (option = {}) {
            // reset data
            this.sourceTree = [];
            this.destinationTree = [];
            this.devicesToMove = [];
            this.destinationNode = null;
            this.nodesStored = {};
            // end reset data
            this.loading = true;
            this.context = option.context || this.context;
            this.selectedNode = option.selectedNode || this.selectedNode;
            // get networks under the selected organ
            this.sourceTree = await this.getSourceTree(this.selectedNode);
            this.destinationTree = await this.getDestinationTree(this.context);
            this.loading = false;
        },
        async getSourceTree (selectedNode) {
            const networks = await this.getNetworks(selectedNode);
            const promises = networks.map((networkNodeRef)=>this.getNetworkTree(networkNodeRef));
            return Promise.all(promises);
        },
        async getDestinationTree (contextNode) {
            const organs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(contextNode.id.get(), [
                "hasBmsNetworkOrgan"
            ]);
            const promises = organs.map(async (organNodeRef)=>{
                const organ = organNodeRef.get();
                const networksRefs = await this.getNetworks(organNodeRef);
                organ.children = networksRefs.map((el)=>el.get());
                return organ;
            });
            return Promise.all(promises);
        },
        goToNext () {
            if (this.active === this.steps.first.id) this.active = this.steps.second.id;
            else this.active, this.steps.second.id;
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
        getNetworks (node) {
            if (node.type.get() === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return Promise.resolve([
                node
            ]);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(node.id.get(), [
                (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
            ]);
        },
        async getNetworkTree (networkNodeRef) {
            const network = networkNodeRef.get();
            this.nodesStored[network.id] = network; // store the network node
            const devices = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(network.id, [
                (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
            ]);
            network.children = devices.map((device)=>{
                const node = device.get();
                node.parentId = network.id;
                this.nodesStored[node.id] = node; // store the device node
                return node;
            });
            return network;
        },
        onNodeClicked (node) {
            if (node.type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) this.destinationNode = node;
        },
        async linkDevicesToNetwork () {
            this.loading = true;
            const contextId = this.context.id.get();
            const destinationId = this.destinationNode.id;
            for (const deviceNodeId of this.devicesToMove){
                const deviceNode = this.nodesStored[deviceNodeId];
                const sourceId = deviceNode.parentId;
                const nodeId = deviceNode.id;
                if (deviceNode.type !== (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) continue;
                await this.moveNode(nodeId, sourceId, destinationId, contextId);
            }
            await this.initializeTreeViewData();
        },
        moveNode (nodeId, sourceId, destinationId, contextId) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).moveChildInContext(sourceId, destinationId, nodeId, contextId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        }
    },
    computed: {
        disableNextButton () {
            if (this.active === this.steps.first.id && this.devicesToMove.length === 0) return true;
        },
        hideNextButton () {
            return this.active === this.steps.second.id;
        },
        disableLinkBtn () {
            return this.devicesToMove.length === 0 || this.destinationNode === null;
        }
    },
    watch: {
        devvicesToMove (newVal) {
            this.done.first = newVal.length > 0;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-bmsnetwork":"haihS","spinal-env-viewer-graph-service":"9LAk7","@syncfusion/ej2-vue-navigations":"llxIM","lodash":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g3qbs":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "dialogContainer"
    }, [
        _c('md-button', {
            staticClass: "md-fab md-primary md-fab-bottom-right",
            attrs: {
                "disabled": _vm.disableLinkBtn,
                "title": "move devices"
            },
            on: {
                "click": _vm.linkDevicesToNetwork
            }
        }, [
            _c('md-icon', [
                _vm._v("swipe")
            ])
        ], 1),
        _vm._v(" "),
        _c('div', {
            staticClass: "content"
        }, [
            _c('div', {
                staticClass: "title"
            }, [
                _vm._v("source")
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "list"
            }, [
                _c('v-treeview', {
                    attrs: {
                        "dark": "",
                        "selectable": "",
                        "open-on-click": "",
                        "hoverable": "",
                        "transition": "",
                        "item-text": "name",
                        "item-key": "id",
                        "selected-color": "primary",
                        "items": _vm.sourceTree
                    },
                    model: {
                        value: _vm.devicesToMove,
                        callback: function($$v) {
                            _vm.devicesToMove = $$v;
                        },
                        expression: "devicesToMove"
                    }
                })
            ], 1)
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "content"
        }, [
            _c('div', {
                staticClass: "title"
            }, [
                _vm._v("destination")
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "list"
            }, [
                _c('v-treeview', {
                    attrs: {
                        "dark": "",
                        "open-on-click": "",
                        "hoverable": "",
                        "transition": "",
                        "item-text": "name",
                        "item-key": "id",
                        "selected-color": "primary",
                        "items": _vm.destinationTree
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "label",
                            fn: function(ref) {
                                var item = ref.item;
                                return [
                                    _c('div', {
                                        class: {
                                            'selected': _vm.destinationNode && item.id === _vm.destinationNode.id
                                        },
                                        on: {
                                            "click": function($event) {
                                                $event.stopPropagation();
                                                return _vm.onNodeClicked(item);
                                            }
                                        }
                                    }, [
                                        _vm._v("\n                        " + _vm._s(item.name) + "\n                    ")
                                    ])
                                ];
                            }
                        }
                    ]),
                    model: {
                        value: _vm.destinationNodes,
                        callback: function($$v) {
                            _vm.destinationNodes = $$v;
                        },
                        expression: "destinationNodes"
                    }
                })
            ], 1)
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aJhuQ":[function() {},{}],"b7z3a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ekVuo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createNetworkDialogVue = require("./createNetworkDialog.vue");
var _createNetworkDialogVueDefault = parcelHelpers.interopDefault(_createNetworkDialogVue);
var _createEndpointDialogVue = require("./createEndpointDialog.vue");
var _createEndpointDialogVueDefault = parcelHelpers.interopDefault(_createEndpointDialogVue);
var _constants = require("../js/constants");
const { SpinalMountExtention } = require("853c52b470929c6e");
const dialogs = [
    {
        name: (0, _constants.NETWORK_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _createNetworkDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: (0, _constants.ENDPOINT_DIALOG),
        vueMountComponent: (0, _vueDefault.default).extend((0, _createEndpointDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","853c52b470929c6e":"egTXY","./createNetworkDialog.vue":"3FmfT","./createEndpointDialog.vue":"kL6rt","../js/constants":"ie2KI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3FmfT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("99f66e26ca25c5f9");
    if (script.__esModule) script = script.default;
    script.render = require("923b8ffbaab67c43").render;
    script.staticRenderFns = require("923b8ffbaab67c43").staticRenderFns;
    script._scopeId = "data-v-c41af9";
    script.__cssModules = require("ef9a8a0ee82f1698").default;
    require("529e4232a4780961").default(script);
    script.__scopeId = 'data-v-c41af9';
    script.__file = "createNetworkDialog.vue";
};
initialize();
exports.default = script;

},{"99f66e26ca25c5f9":"jQqwN","923b8ffbaab67c43":"at4Mm","ef9a8a0ee82f1698":"et1Ti","529e4232a4780961":"axqR0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jQqwN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "createNetworkDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: "",
            title: "",
            label: "",
            selectedNode: null,
            context: null,
            callback: null
        };
    },
    methods: {
        opened (option) {
            // console.log(option);
            this.title = option.title;
            this.label = option.label;
            this.selectedNode = option.selectedNode;
            this.context = option.context;
            this.callback = option.callback;
        },
        removed (option) {
            if (option.closeResult && option.inputValue.length > 0 && typeof this.callback === "function") {
                const name = option.inputValue.trim();
                const parentId = this.selectedNode.id.get();
                const contextId = this.context.id.get();
                this.callback(name, parentId, contextId);
            }
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"at4Mm":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        attrs: {
            "md-active": _vm.showDialog,
            "md-click-outside-to-close": false
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
            _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v(_vm._s(_vm.label))
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

},{}],"et1Ti":[function() {},{}],"axqR0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kL6rt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ed7e5f36bfb7cc49");
    if (script.__esModule) script = script.default;
    script.render = require("50e49baa5679ff38").render;
    script.staticRenderFns = require("50e49baa5679ff38").staticRenderFns;
    script._scopeId = "data-v-939d74";
    script.__cssModules = require("338ab47e2c050424").default;
    require("ccef9eebdfeed405").default(script);
    script.__scopeId = 'data-v-939d74';
    script.__file = "createEndpointDialog.vue";
};
initialize();
exports.default = script;

},{"ed7e5f36bfb7cc49":"212TJ","50e49baa5679ff38":"8Y6oK","338ab47e2c050424":"eY9w9","ccef9eebdfeed405":"jbswf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"212TJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var scriptExports = {
    name: "createEndpointDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.dataTypes = Object.keys((0, _spinalModelBmsnetwork.InputDataEndpointDataType)).filter((key)=>isNaN(Number(key))); // Get only string keys
        return {
            showDialog: true,
            selectedNode: null,
            context: null,
            endpoint: {
                name: "",
                path: "",
                dataType: this.dataTypes[0],
                currentValue: "",
                unit: "",
                addToEndpointGroup: false,
                endpointGroupName: ""
            }
        };
    },
    methods: {
        opened (option) {
            this.selectedNode = option.selectedNode;
            this.context = option.context;
        },
        async removed (option) {
            if (option.closeResult) {
                const parentNodeId = await this._getParentNode(this.endpoint);
                const { name, currentValue: value, dataType, path, unit } = this.endpoint;
                const valueFormatted = this._formatCurrentValue(value, dataType);
                const endpointModel = new (0, _spinalModelBmsnetwork.SpinalBmsEndpoint)(name, path, valueFormatted, unit, dataType, (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeType);
                const { currentValue, ...rest } = this.endpoint;
                const endpointNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    type: (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName,
                    ...rest
                }, endpointModel);
                await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentNodeId, endpointNodeId, this.context.id.get(), (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            this.showDialog = false;
        },
        _formatCurrentValue (currentValue, dataType) {
            switch(dataType){
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Boolean:
                    return this.convertToBoolean(currentValue);
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Integer:
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Integer16:
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Real:
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Double:
                case (0, _spinalModelBmsnetwork.InputDataEndpointDataType).Long:
                    return Number(currentValue);
                default:
                    return currentValue;
            }
        },
        convertToBoolean (value) {
            const val = value.toString().toLowerCase().trim();
            if (val === "true" || val === "yes") return true;
            if (val === "false" || val === "no") return false;
            if (!isNaN(value)) {
                const num = Number(value);
                return num >= 1 ? 1 : 0;
            }
            return Boolean(value);
        },
        _getParentNode (endpointData) {
            if (!endpointData.addToEndpointGroup) return this.selectedNode.id.get();
            return this._getOrCreateEndpointGroupNode(endpointData.endpointGroupName);
        },
        async _getOrCreateEndpointGroupNode (groupName) {
            const deviceId = this.selectedNode.id.get();
            const endpointGroups = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceId, [
                (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup).relationName
            ]);
            let groupNode = endpointGroups.find((group)=>group.name.get() === groupName);
            if (groupNode) return groupNode.id.get();
            // create new endpoint group
            return this._createNewEndpointGroup(deviceId, groupName);
        },
        _createNewEndpointGroup (deviceId, groupName) {
            const groupModel = new (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup)(groupName);
            const nodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: groupName,
                type: (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup).nodeType
            }, groupModel);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(deviceId, nodeId, this.context.id.get(), (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)).then(()=>nodeId);
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Y6oK":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        attrs: {
            "md-active": _vm.showDialog,
            "md-click-outside-to-close": false
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
            _vm._v("Create Endpoint")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContent"
        }, [
            _c('md-field', [
                _c('label', [
                    _vm._v("name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.endpoint.name,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "name", $$v);
                        },
                        expression: "endpoint.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', [
                _c('label', [
                    _vm._v("Path")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.endpoint.path,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "path", $$v);
                        },
                        expression: "endpoint.path"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', [
                _c('label', {
                    attrs: {
                        "for": "dataType"
                    }
                }, [
                    _vm._v("data type")
                ]),
                _vm._v(" "),
                _c('md-select', {
                    attrs: {
                        "name": "dataType",
                        "id": "dataType"
                    },
                    model: {
                        value: _vm.endpoint.dataType,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "dataType", $$v);
                        },
                        expression: "endpoint.dataType"
                    }
                }, _vm._l(_vm.dataTypes, function(type) {
                    return _c('md-option', {
                        key: type,
                        attrs: {
                            "value": type
                        }
                    }, [
                        _vm._v(_vm._s(type))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c('md-field', [
                _c('label', [
                    _vm._v("Current Value")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.endpoint.currentValue,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "currentValue", $$v);
                        },
                        expression: "endpoint.currentValue"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-field', [
                _c('label', [
                    _vm._v("Unit")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.endpoint.unit,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "unit", $$v);
                        },
                        expression: "endpoint.unit"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('md-checkbox', {
                staticClass: "md-primary",
                model: {
                    value: _vm.endpoint.addToEndpointGroup,
                    callback: function($$v) {
                        _vm.$set(_vm.endpoint, "addToEndpointGroup", $$v);
                    },
                    expression: "endpoint.addToEndpointGroup"
                }
            }, [
                _vm._v("Add to endpoint group")
            ]),
            _vm._v(" "),
            _vm.endpoint.addToEndpointGroup ? _c('md-field', [
                _c('label', [
                    _vm._v("endpoint group name")
                ]),
                _vm._v(" "),
                _c('md-input', {
                    model: {
                        value: _vm.endpoint.endpointGroupName,
                        callback: function($$v) {
                            _vm.$set(_vm.endpoint, "endpointGroupName", $$v);
                        },
                        expression: "endpoint.endpointGroupName"
                    }
                }),
                _vm._v(" "),
                _c('span', {
                    staticClass: "md-helper-text"
                }, [
                    _vm._v("To use an existing endpoint group, enter the same group name.")
                ])
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
                    "disabled": !(_vm.endpoint.name.trim().length > 0)
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

},{}],"eY9w9":[function() {},{}],"jbswf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

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

//# sourceMappingURL=spinal-env-viewer-plugin-device-organizer.0bb8f945.js.map
