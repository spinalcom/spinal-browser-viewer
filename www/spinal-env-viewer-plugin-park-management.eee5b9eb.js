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
})({"erVeq":[function(require,module,exports) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vue/dialogs");

},{"./src/buttons":"iwWTf","./src/vue/dialogs":"ghNFu"}],"iwWTf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkRoomsToEndpoint = require("./linkRoomsToEndpoint");
parcelHelpers.exportAll(_linkRoomsToEndpoint, exports);

},{"./linkRoomsToEndpoint":"ioxS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioxS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linkParkDevicesToRoom", ()=>linkParkDevicesToRoom);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { spinalPanelManagerService } = require("27850fc9d8ed9c42");
const SIDEBAR = "GraphManagerSideBar";
class LinkParkDevicesToRoom extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link rooms to park Devices", "This button allows to Link Devices to rooms", {
            icon: "cast_connected",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const constants = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants;
        const type = option.selectedNode.type.get();
        const types = [
            constants.CONTEXT_TYPE,
            constants.BUILDING_TYPE,
            constants.FLOOR_TYPE,
            constants.ROOM_TYPE
        ];
        return Promise.resolve(types.indexOf(type));
    }
    action(option) {
        // const nodeId = option.selectedNode.id.get();
        // const contextId = option.context.id.get();
        spinalPanelManagerService.openPanel("linkParkDeviceToRoomDialog", option);
    }
}
const linkParkDevicesToRoom = new LinkParkDevicesToRoom();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkParkDevicesToRoom, [
    3
]);
exports.default = linkParkDevicesToRoom;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-context-geographic-service":"5QjJf","27850fc9d8ed9c42":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"ghNFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkDeviceToRoomVue = require("./linkDeviceToRoom.vue");
var _linkDeviceToRoomVueDefault = parcelHelpers.interopDefault(_linkDeviceToRoomVue);
const { SpinalMountExtention } = require("30c49a445e748026");
const dialogs = [
    {
        name: "linkParkDeviceToRoomDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkDeviceToRoomVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","30c49a445e748026":"7Uw4d","./linkDeviceToRoom.vue":"akQMz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akQMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c958f9e1f73d5ec5");
    if (script.__esModule) script = script.default;
    script.render = require("a2004afc15fb700c").render;
    script.staticRenderFns = require("a2004afc15fb700c").staticRenderFns;
    script._scopeId = "data-v-da2fa4";
    script.__cssModules = require("f135431efc07284f").default;
    require("dadbbebedf3bae3e").default(script);
    script.__scopeId = "data-v-da2fa4";
    script.__file = "linkDeviceToRoom.vue";
};
initialize();
exports.default = script;

},{"c958f9e1f73d5ec5":"8vJvP","a2004afc15fb700c":"8M4ZN","f135431efc07284f":"eRblx","dadbbebedf3bae3e":"6cfdH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vJvP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
var _linkDeviceToRoomUtils = require("../../utils/linkDeviceToRoomUtils");
var _function = require("../../utils/function");
var _linkComponentVue = require("../components/linkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var _configComponentVue = require("../components/configComponent.vue");
var _configComponentVueDefault = parcelHelpers.interopDefault(_configComponentVue);
var scriptExports = {
    name: "linkParkDeviceToRoom",
    components: {
        "link-component": (0, _linkComponentVueDefault.default),
        "config-component": (0, _configComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.geographicStartId;
        this.geographicContextId;
        this.PAGES = {
            selection: 0,
            loading: 1,
            success: 2,
            error: 3,
            functions: 4
        };
        return {
            showDialog: true,
            state: this.PAGES.selection,
            contexts: [],
            networks: [],
            devices: [],
            contextSelected: undefined,
            networkSelected: undefined,
            deviceSelected: undefined,
            attributes: {
                rooms: {
                    attributeName: "name",
                    useFunction: false,
                    functions: {
                        code: (0, _function.attributeFunction)()
                    }
                },
                endpoints: {
                    attributeName: "name",
                    useFunction: false,
                    functions: {
                        code: (0, _function.endpointFunction)()
                    }
                }
            }
        };
    },
    mounted () {},
    methods: {
        async opened ({ selectedNode, context, graph }) {
            this.state = this.PAGES.loading;
            // this.selectedNodeId =  = selectedNode.id.get();
            this.geographicStartId = selectedNode.id.get();
            this.geographicContextId = context.id.get();
            _utils.getNetworkStructure().then((contexts)=>{
                this.contexts = contexts;
                this.state = this.PAGES.selection;
            }).catch((err)=>{
                console.error(err);
                this.state = this.PAGES.error;
            });
        },
        linkNodes () {
            this.state = this.PAGES.loading;
            const devices = this.getDevices();
            (0, _linkDeviceToRoomUtils.linkDevicesToRoom)(this.geographicContextId, this.geographicStartId, devices, this.attributes).then(()=>{
                this.state = this.PAGES.success;
            }).catch((err)=>{
                console.error(err);
                this.state = this.PAGES.error;
            });
        },
        getDevices () {
            if (!this.deviceSelected) return this.devices;
            return this.devices.filter((el)=>el.id === this.deviceSelected);
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                confirm: closeResult
            });
        },
        removed (option) {
            this.showDialog = false;
        },
        goToPrevious () {
            if (this.state === this.PAGES.functions) this.state = this.PAGES.selection;
        },
        goToNext () {
            if (this.state === this.PAGES.selection) this.state = this.PAGES.functions;
        },
        /**Selection */ selectContext (id) {
            this.contextSelected = this.contextSelected === id ? undefined : id;
        },
        selectNetwork (id) {
            this.networkSelected = this.networkSelected === id ? undefined : id;
        },
        selectDevices (id) {
            this.deviceSelected = this.deviceSelected === id ? undefined : id;
        },
        /* Update */ updateNetworks () {
            this.networks = [];
            this.devices = [];
            if (this.contextSelected) {
                let val = this.contexts.find((el)=>el.id === this.contextSelected);
                if (val) this.networks = val.networks;
            }
        },
        updateDevices () {
            this.devices = [];
            if (this.networkSelected) {
                let val = this.networks.find((el)=>el.id === this.networkSelected);
                if (val) this.devices = val.devices;
            }
        }
    },
    watch: {
        async contextSelected () {
            await this.updateNetworks();
            this.networkSelected = undefined;
        },
        async networkSelected () {
            this.updateDevices();
            this.deviceSelected = undefined;
        }
    },
    computed: {
        icon () {
            return this.state == this.PAGES.success ? "file_download_done" : "error";
        },
        disabledLinkButton () {
            return this.state != this.PAGES.functions || !this.networkSelected || this.attributes.rooms.attributeName.length === 0 || this.attributes.endpoints.attributeName.length === 0;
        },
        disabledNextButton () {
            return this.state != this.PAGES.selection || !this.networkSelected;
        },
        disabledPreviousButton () {
            return this.state != this.PAGES.functions;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../utils/utils":"dWgeP","../../utils/linkDeviceToRoomUtils":"fRBlZ","../../utils/function":"fegj3","../components/linkComponent.vue":"5UQGE","../components/configComponent.vue":"g3pVx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWgeP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOrgan", ()=>getOrgan);
parcelHelpers.export(exports, "startMonitoring", ()=>startMonitoring);
parcelHelpers.export(exports, "stopMonitoring", ()=>stopMonitoring);
parcelHelpers.export(exports, "getModel", ()=>getModel);
parcelHelpers.export(exports, "getNetwork", ()=>getNetwork);
parcelHelpers.export(exports, "getNetworkStructure", ()=>getNetworkStructure);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelPcvue = require("spinal-model-pcvue");
async function getOrgan(nodeId, contextId) {
    const network = await getNetwork(nodeId);
    if (!network) return;
    return network.getParents([
        (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName
    ]).then((parents)=>{
        const found = parents.find((el)=>{
            if (el && el.contextIds) return el.contextIds[contextId];
        });
        if (found) return found.getElement();
    });
}
async function startMonitoring(graph, contextId, networkId, model, monitorInfo) {
    try {
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        const network = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
        model = model || await this.getModel(network);
        if (model && model != -1) {
            if (monitorInfo.saveTimeSeries) model.saveTimeSeries.set(monitorInfo.saveTimeSeries);
            if (monitorInfo.interval) model.interval.set(monitorInfo.interval);
            model.listen.set(true);
        } else {
            if (!monitorInfo) monitorInfo = {
                listen: true,
                saveTimeSeries: true,
                interval: 300000
            };
            const organ = await getOrgan(network.getId().get(), contextId);
            const spinalListener = new (0, _spinalModelPcvue.PCVueListenerModel)(graph, context, network, organ, monitorInfo);
            network.info.add_attr({
                listener: new Ptr(spinalListener)
            });
            return spinalListener;
        }
    } catch (error) {
        console.error(error);
    }
}
async function stopMonitoring(networkId, model) {
    try {
        if (!model) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(networkId);
            model = await this.getModel(realNode);
        }
        if (model != -1) model.listen.set(false);
    } catch (error) {}
}
async function getModel(realNode) {
    if (realNode.info.listener) return new Promise((resolve, reject)=>{
        realNode.info.listener.load((data)=>resolve(data));
    });
    else return Promise.resolve(-1);
}
async function getNetwork(nodeId) {
    const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
    const type = realNode.getType().get();
    if (type === (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName) return realNode;
    if (type === (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName) {
        const [network] = await realNode.getParents([
            (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName
        ]);
        return network;
    }
}
async function getNetworkStructure() {
    const contexts = getContexts();
    const promises = contexts.map(async (context)=>{
        context.networks = await getNetworks(context.id);
        return context;
    });
    return Promise.all(promises);
}
function getContexts() {
    const contexts = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("Network");
    return contexts.map((el)=>el.info.get());
}
async function getNetworks(contextId) {
    const networks = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(contextId, contextId);
    const promises = networks.map(async (el)=>{
        const network = el.get();
        network.devices = await getDevices(contextId, network.id);
        return network;
    });
    return Promise.all(promises);
// return SpinalGraphService.findInContext(contextId, contextId, (node) => {
//   if (node.getType().get() === SpinalBmsNetwork.nodeTypeName) {
//     SpinalGraphService._addNode(node);
//     return true;
//   }
//   return false;
// })
//   .then((networks) => {
//     const promises = networks.map(async (networkRef) => {
//       const network = networkRef.get();
//       network.devices = await getDevices(contextId, network.id);
//       return network;
//     });
//     return Promise.all(promises);
//   })
//   .catch((err) => {
//     return [];
//   });
}
async function getDevices(contextId, networkId) {
    const devices = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(networkId, contextId);
    return devices.map((el)=>el.get());
}

},{"spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-graph-service":"9n7zp","spinal-model-pcvue":"UUkXE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UUkXE":[function(require,module,exports) {
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
const SpinalPCVueDiscoverModel_1 = require("91feb986695b7f74");
exports.SpinalPCVueDiscoverModel = SpinalPCVueDiscoverModel_1.SpinalPCVueDiscoverModel;
const pcvueOrganState_1 = require("21e12eb85a30a95e");
exports.pcvueOrganState = pcvueOrganState_1.pcvueOrganState;
const SpinalOrganConfigModel_1 = require("e873bd348094fe65");
exports.SpinalOrganConfigModel = SpinalOrganConfigModel_1.SpinalOrganConfigModel;
const PCVueListenerModel_1 = require("c9918a4b7666b813");
exports.PCVueListenerModel = PCVueListenerModel_1.PCVueListenerModel;
const constants_1 = require("5b4ba30b2591762e");
exports.PCVUE_ORGAN_TYPE = constants_1.PCVUE_ORGAN_TYPE;

},{"91feb986695b7f74":"7QMFq","21e12eb85a30a95e":"j3uWD","e873bd348094fe65":"7Dhc8","c9918a4b7666b813":"7mIHa","5b4ba30b2591762e":"3WBnk"}],"7QMFq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
 */ const spinal_core_connectorjs_type_1 = require("f39fe1ec9f8c4372");
const uuid_1 = require("bd77d87f2bbb8b3d");
class SpinalPCVueDiscoverModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, organ, network, file){
        super();
        this.add_attr({
            id: uuid_1.v4(),
            state: new spinal_core_connectorjs_type_1.Choice(0, [
                "initial",
                "uploading",
                "uploaded",
                "converting",
                "converted",
                "creating",
                "created",
                "error"
            ]),
            network,
            //@ts-ignore
            file: new spinal_core_connectorjs_type_1.Ptr(file),
            organ: new spinal_core_connectorjs_type_1.Ptr(organ),
            context: new spinal_core_connectorjs_type_1.Ptr(context),
            graph: new spinal_core_connectorjs_type_1.Ptr(graph)
        });
    }
    getGraph() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.graph.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getFile() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.file.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getOrgan() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.organ.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
    getContext() {
        return new Promise((resolve, reject)=>{
            //@ts-ignore
            this.context.load((data)=>resolve(data), (err)=>reject(err));
        });
    }
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
    removeToGraph() {
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
    setInitialState() {
        this.state.set("initial");
    }
    setUploadingState() {
        this.state.set("uploading");
    }
    setUploadedState() {
        this.state.set("uploaded");
    }
    setConvertingState() {
        this.state.set("converting");
    }
    setConvertedState() {
        this.state.set("converted");
    }
    setCreatingState() {
        this.state.set("creating");
    }
    setCreatedState() {
        this.state.set("created");
    }
    setErrorState() {
        this.state.set("error");
    }
}
exports.SpinalPCVueDiscoverModel = SpinalPCVueDiscoverModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalPCVueDiscoverModel
]);
exports.default = SpinalPCVueDiscoverModel;

},{"f39fe1ec9f8c4372":"fRH70","bd77d87f2bbb8b3d":"j4KJi"}],"j3uWD":[function(require,module,exports) {
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
var pcvueOrganState;
(function(pcvueOrganState) {
    pcvueOrganState["initial"] = "initial";
    pcvueOrganState["uploading"] = "uploading";
    pcvueOrganState["uploaded"] = "uploaded";
    pcvueOrganState["converting"] = "converting";
    pcvueOrganState["converted"] = "converted";
    pcvueOrganState["creating"] = "creating";
    pcvueOrganState["created"] = "created";
    pcvueOrganState["error"] = "error";
})(pcvueOrganState = exports.pcvueOrganState || (exports.pcvueOrganState = {}));

},{}],"7Dhc8":[function(require,module,exports) {
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
const spinal_core_connectorjs_type_1 = require("3413bd66c02b9e80");
const uuid_1 = require("c9c3ed00427bd148");
const constants_1 = require("c3fa681167054d4d");
class SpinalOrganConfigModel extends spinal_core_connectorjs_type_1.Model {
    constructor(name, type = constants_1.PCVUE_ORGAN_TYPE){
        super();
        this.add_attr({
            id: uuid_1.v4(),
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
exports.SpinalOrganConfigModel = SpinalOrganConfigModel;
SpinalOrganConfigModel.TYPE = constants_1.PCVUE_ORGAN_TYPE;
SpinalOrganConfigModel.CONTEXT_TO_ORGAN_RELATION = "hasBmsNetworkOrgan";
spinal_core_connectorjs_type_1.spinalCore.register_models([
    SpinalOrganConfigModel
]);
exports.default = SpinalOrganConfigModel;

},{"3413bd66c02b9e80":"fRH70","c9c3ed00427bd148":"j4KJi","c3fa681167054d4d":"3WBnk"}],"3WBnk":[function(require,module,exports) {
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
const PCVUE_ORGAN_TYPE = "PCVUE_ORGAN";
exports.PCVUE_ORGAN_TYPE = PCVUE_ORGAN_TYPE;

},{}],"7mIHa":[function(require,module,exports) {
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
const spinal_core_connectorjs_type_1 = require("484976bb53d41201");
const uuid_1 = require("81489ada89df082");
class PCVueListenerModel extends spinal_core_connectorjs_type_1.Model {
    constructor(graph, context, network, organ, monitor){
        super();
        this.add_attr({
            id: uuid_1.v4(),
            listen: true,
            saveTimeSeries: monitor === null || monitor === void 0 ? void 0 : monitor.saveTimeSeries,
            intervalTime: monitor === null || monitor === void 0 ? void 0 : monitor.interval,
            graph: new spinal_core_connectorjs_type_1.Ptr(graph),
            context: new spinal_core_connectorjs_type_1.Ptr(context),
            network: new spinal_core_connectorjs_type_1.Ptr(network),
            organ: new spinal_core_connectorjs_type_1.Ptr(organ)
        });
    }
}
exports.PCVueListenerModel = PCVueListenerModel;
spinal_core_connectorjs_type_1.spinalCore.register_models([
    PCVueListenerModel
]);
exports.default = PCVueListenerModel;

},{"484976bb53d41201":"fRH70","81489ada89df082":"j4KJi"}],"fRBlZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linkDevicesToRoom", ()=>linkDevicesToRoom);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _lodash = require("lodash");
async function linkDevicesToRoom(geographicContextId1, geographicStartId1, pcVueDevices1, attributes1) {
    const promises1 = [
        getRooms(geographicContextId1, geographicStartId1),
        getEndpoints(pcVueDevices1)
    ];
    return Promise.all(promises1).then(([rooms1, endpoints1])=>{
        const roomsMap1 = getMap(rooms1, attributes1.rooms);
        const endpointsMap1 = getMap(endpoints1, attributes1.endpoints);
        return linkMaps1(roomsMap1, endpointsMap1);
    });
    function linkMaps1(roomsMap1, endpointsMap1) {
        const promises1 = Object.keys(roomsMap1).map((key1)=>{
            if (endpointsMap1[key1]) {
                const roomData1 = roomsMap1[key1];
                const endpointData1 = endpointsMap1[key1];
                try {
                    return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChild(roomData1.id, endpointData1.id, (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                } catch (error1) {}
            }
        });
        return Promise.all(promises1);
    }
// // const devices =
// //   pcVueDevices && Array.isArray(pcVueDevices) && pcVueDevices.length > 0
// //     ? pcVueDevices
// //     : await getDevices(pcvueContextId, pcvueStartId);
// // const map = getMap(rooms, devices, func);
// // const promises = Array.from(map.keys()).map((key) => {
// //   const ids = map.get(key);
// //   return createNodeLinks(key, ids);
// // });
// // return Promise.all(promises);
}
// async function createNodeLinks(parentId, childrenIds) {
//   try {
//     const promises = childrenIds.map((childId) =>
//       SpinalGraphService.addChild(
//         parentId,
//         childId,
//         SpinalBmsDevice.relationName,
//         SPINAL_RELATION_PTR_LST_TYPE
//       )
//     );
//     return Promise.all(promises);
//   } catch (error) {
//     return false;
//   }
// }
function getRooms(geographicContextId1, geographicStartId1) {
    return findInContext(geographicContextId1, geographicStartId1, (0, _constants.ROOM_TYPE));
}
function getEndpoints(devices1) {
    if (!Array.isArray(devices1)) devices1 = [
        devices1
    ];
    const promises1 = devices1.map(({ id: id1 })=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(id1, [
            (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).relationName
        ]));
    return Promise.all(promises1).then((result1)=>{
        return _lodash.flattenDeep(result1).map((el1)=>el1.get());
    });
}
function findInContext(contextId1, startId1, type1) {
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startId1, contextId1, (node1)=>{
        if (node1.getType().get() === type1) {
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node1);
            return true;
        }
        return false;
    }).then((result1)=>{
        return result1.map((el1)=>el1.get());
    }).catch((err1)=>{
        return [];
    });
}
function getMap(listes, { attributeName, useFunction, functions: { code } }) {
    const obj = {};
    listes.forEach((element)=>{
        const value = element[attributeName];
        const attr = useFunction ? eval(`(${code})(value)`) : value;
        if (attr) obj[attr] = element;
    });
    return obj;
} // async function getRoomAttribute(roomInfo, attributeName, callback) {
 //   const attr = await getSpinalAttribute(roomInfo.id, attributeName, callback);
 //   if (attr) return attr;
 //   return getBimAttribute();
 // }
 // async function getSpinalAttribute(nodeId, attributeName, callback) {
 //   const splitted = attributeName.split("/");
 //   const attrCategory = splitted.length > 1 ? splitted[0] : "default";
 //   const attrLabel = splitted.length <= 1 ? splitted[0] : splitted[1];
 //   const node = SpinalGraphService.getRealNode(nodeId);
 //   try {
 //     const attr = await serviceDocumentation.findOneAttributeInCategory(
 //       node,
 //       attrCategory,
 //       attrLabel
 //     );
 //     const value = attr && attr.value ? attr.value.get() : undefined;
 //     return typeof callback !== "undefined"
 //       ? eval(`(${callback})(value)`)
 //       : value;
 //   } catch (error) {
 //     return undefined;
 //   }
 // }
 // async function getBimAttribute(roomInfo, attributeName) {
 //   const splitted = attributeName.split("/");
 //   const attrCategory = splitted.length > 1 ? splitted[0] : "default";
 //   const attrLabel = splitted.length <= 1 ? splitted[0] : splitted[1];
 // }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////
 // function getMap(floors, devices, func) {
 //   const floorsCopy = Object.assign([], floors);
 //   const devicesCopy = Object.assign([], devices);
 //   const map = new Map();
 //   while (floorsCopy.length > 0 && devicesCopy.length > 0) {
 //     const floor = floorsCopy.pop();
 //     const indexes = getIndexes(floor.name, devicesCopy, func);
 //     const res = [];
 //     for (let idx of indexes) {
 //       const item = devicesCopy[idx];
 //       res.push(item.id);
 //     }
 //     map.set(floor.id, res);
 //   }
 //   return map;
 // }
 // function getIndexes(floorName, devices, callback) {
 //   return devices
 //     .map((el, idx) =>
 //       eval(`(${callback})(floorName, el.name)`) ? idx : undefined
 //     )
 //     .filter((el) => typeof el !== "undefined");
 // }
 // function getDevices(pcvueContextId, pcvueStartId) {
 //   return findInContext(
 //     pcvueContextId,
 //     pcvueStartId,
 //     SpinalBmsEndpoint.nodeTypeName
 //   );
 // }
 // function getEndpointsMap(endpoints, attributes) {
 //   const {
 //     attributeName,
 //     useFunction,
 //     functions: { code },
 //   } = attributes;
 //   const callback = useFunction ? code : undefined;
 //   const obj = {};
 //   const promises = endpoints.map((element) => {
 //     const attr = await getSpinalAttribute(element.id, attributeName, callback);
 //     if (attr) obj[attr] = element;
 //     else obj[element.name] = element;
 //   });
 //   return Promise.all(promises).then((result) => {
 //     return obj;
 //   });
 // }
 // function getRoomsMap(rooms, attributes) {
 //   const {
 //     attributeName,
 //     useFunction,
 //     functions: { code },
 //   } = attributes;
 //   const callback = useFunction ? code : undefined;
 //   const obj = {};
 //   const promises = rooms.map((element) => {
 //     const attr = await getRoomAttribute(element, attributeName, callback);
 //     if (attr) obj[attr] = element;
 //     else obj[element.name] = element;
 //   });
 //   return Promise.all(promises).then((result) => {
 //     return obj;
 //   });
 // }

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","lodash":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fegj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attributeFunction", ()=>attributeFunction);
parcelHelpers.export(exports, "endpointFunction", ()=>endpointFunction);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
function attributeFunction() {
    return (0, _dedentDefault.default)`
  /**
   *   1 - Don't change the function name and parameters
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */
   function linkFloorToDevice(attributeValue) {
     const match = attributeValue.match(/\d\.\d+$/);
     if(match) {
       const str = match[0];
       return str.replace(/\D/g,'');
     }
   }
    `;
}
function endpointFunction() {
    return (0, _dedentDefault.default)`
  /**
   *   1 - Don't change the function name and parameters
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */
   function linkFloorToDevice(attributeValue) {
     return attributeValue;
   }
    `;
}

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UQGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2c7b953b4d395320");
    if (script.__esModule) script = script.default;
    script.render = require("8faba313b5472137").render;
    script.staticRenderFns = require("8faba313b5472137").staticRenderFns;
    script._scopeId = "data-v-71a0a0";
    script.__cssModules = require("ad8e2054642ccd11").default;
    require("eb482e4c3a0bf4c1").default(script);
    script.__scopeId = "data-v-71a0a0";
    script.__file = "linkComponent.vue";
};
initialize();
exports.default = script;

},{"2c7b953b4d395320":"hs0db","8faba313b5472137":"3b5TD","ad8e2054642ccd11":"bLWTh","eb482e4c3a0bf4c1":"54HDr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hs0db":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkTemplateVue = require("./linkTemplate.vue");
var _linkTemplateVueDefault = parcelHelpers.interopDefault(_linkTemplateVue);
var scriptExports = {
    name: "linkComponent",
    components: {
        "link-template": (0, _linkTemplateVueDefault.default)
    },
    props: {
        contexts: {
            type: Array,
            required: true
        },
        networks: {
            type: Array,
            required: true
        },
        devices: {
            type: Array,
            required: true
        },
        contextSelected: {
            type: String | undefined,
            required: true
        },
        networkSelected: {
            type: String | undefined,
            required: true
        },
        deviceSelected: {
            type: String | undefined,
            required: true
        }
    },
    methods: {
        selectContext (id) {
            this.$emit("selectContext", id);
        },
        selectNetwork (id) {
            this.$emit("selectNetwork", id);
        },
        selectDevices (id) {
            this.$emit("selectDevices", id);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkTemplate.vue":"fpKhv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpKhv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f66c5ea06aecf50");
    if (script.__esModule) script = script.default;
    script.render = require("4c95da1e7596ee78").render;
    script.staticRenderFns = require("4c95da1e7596ee78").staticRenderFns;
    script._scopeId = "data-v-313cfd";
    script.__cssModules = require("9e9f0b5257e320ea").default;
    require("feb5b48f24bd41fa").default(script);
    script.__scopeId = "data-v-313cfd";
    script.__file = "linkTemplate.vue";
};
initialize();
exports.default = script;

},{"f66c5ea06aecf50":"6KWA3","4c95da1e7596ee78":"8ZJLH","9e9f0b5257e320ea":"57H2C","feb5b48f24bd41fa":"e8x2r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KWA3":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZJLH":[function(require,module,exports) {
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

},{}],"57H2C":[function() {},{}],"e8x2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3b5TD":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "selections"
    }, [
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": "Contexts",
                    "data": _vm.contexts,
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
                    "title": "Networks",
                    "data": _vm.networks,
                    "itemSelected": _vm.networkSelected
                },
                on: {
                    "select": _vm.selectNetwork
                }
            })
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": "Devices",
                    "data": _vm.devices,
                    "itemSelected": _vm.deviceSelected
                },
                on: {
                    "select": _vm.selectDevices
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bLWTh":[function() {},{}],"54HDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3pVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4e2c90a88a8cdbf2");
    if (script.__esModule) script = script.default;
    script.render = require("e56284252c4d9e22").render;
    script.staticRenderFns = require("e56284252c4d9e22").staticRenderFns;
    script._scopeId = "data-v-40d805";
    script.__cssModules = require("6d7628ab921cf166").default;
    require("5e6ad79d4db6ba0f").default(script);
    script.__scopeId = "data-v-40d805";
    script.__file = "configComponent.vue";
};
initialize();
exports.default = script;

},{"4e2c90a88a8cdbf2":"hiq9q","e56284252c4d9e22":"4iuFQ","6d7628ab921cf166":"2aGeR","5e6ad79d4db6ba0f":"274Yx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiq9q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsComponentVue = require("./functionsComponent.vue");
var _functionsComponentVueDefault = parcelHelpers.interopDefault(_functionsComponentVue);
var scriptExports = {
    name: "configComponent",
    props: [
        "attributeConfig",
        "title"
    ],
    components: {
        "functions-component": (0, _functionsComponentVueDefault.default)
    },
    data () {
        this.attributes = [
            "name",
            "id"
        ];
        return {};
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./functionsComponent.vue":"i5ZxO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5ZxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("eaf158601983a900");
    if (script.__esModule) script = script.default;
    script.render = require("bd0c466c3bf4fb9d").render;
    script.staticRenderFns = require("bd0c466c3bf4fb9d").staticRenderFns;
    script._scopeId = "data-v-ce656f";
    script.__cssModules = require("7268118a0e1952a").default;
    require("d9f851a1a0ca8529").default(script);
    script.__scopeId = "data-v-ce656f";
    script.__file = "functionsComponent.vue";
};
initialize();
exports.default = script;

},{"eaf158601983a900":"a4ZhR","bd0c466c3bf4fb9d":"aNYMx","7268118a0e1952a":"3AZLM","d9f851a1a0ca8529":"85DQJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4ZhR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalCodeMirrorVue = require("./SpinalCodeMirror.vue");
var _spinalCodeMirrorVueDefault = parcelHelpers.interopDefault(_spinalCodeMirrorVue);
var scriptExports = {
    name: "functionsComponent",
    components: {
        "spinal-code-mirror": (0, _spinalCodeMirrorVueDefault.default)
    },
    props: {
        functions: {
            type: Object,
            require: true
        }
    },
    methods: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./SpinalCodeMirror.vue":"2elPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2elPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d45d6579e6e3267f");
    if (script.__esModule) script = script.default;
    script.render = require("5d3b33483332c419").render;
    script.staticRenderFns = require("5d3b33483332c419").staticRenderFns;
    script._scopeId = "data-v-2a006d";
    script.__cssModules = require("fba04388f6d9a86c").default;
    require("5ab27aa0be4048e").default(script);
    script.__scopeId = "data-v-2a006d";
    script.__file = "SpinalCodeMirror.vue";
};
initialize();
exports.default = script;

},{"d45d6579e6e3267f":"gvXku","5d3b33483332c419":"luOkG","fba04388f6d9a86c":"2Y0rd","5ab27aa0be4048e":"6iUHr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvXku":[function(require,module,exports) {
// import dedent from "dedent";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueCodemirror = require("vue-codemirror");
// language
var _javascript = require("codemirror/mode/javascript/javascript");
// theme css
// import "codemirror/theme/monokai.css";
// require active-line
var _activeLine = require("codemirror/addon/selection/active-line");
// styleSelectedText
var _markSelection = require("codemirror/addon/selection/mark-selection");
var _searchcursor = require("codemirror/addon/search/searchcursor");
// hint
var _showHint = require("codemirror/addon/hint/show-hint");
// import "codemirror/addon/hint/show-hint.css";
var _javascriptHint = require("codemirror/addon/hint/javascript-hint");
// highlightSelectionMatches
var _annotatescrollbar = require("codemirror/addon/scroll/annotatescrollbar");
var _matchesonscrollbar = require("codemirror/addon/search/matchesonscrollbar");
var _matchHighlighter = require("codemirror/addon/search/match-highlighter");
// keyMap
var _clike = require("codemirror/mode/clike/clike");
var _matchbrackets = require("codemirror/addon/edit/matchbrackets");
var _comment = require("codemirror/addon/comment/comment");
var _dialog = require("codemirror/addon/dialog/dialog");
var _search = require("codemirror/addon/search/search");
var _sublime = require("codemirror/keymap/sublime");
// foldGutter
// import "codemirror/addon/fold/foldgutter.css";
var _braceFold = require("codemirror/addon/fold/brace-fold");
var _commentFold = require("codemirror/addon/fold/comment-fold");
var _foldcode = require("codemirror/addon/fold/foldcode");
var _foldgutter = require("codemirror/addon/fold/foldgutter");
var _indentFold = require("codemirror/addon/fold/indent-fold");
var _markdownFold = require("codemirror/addon/fold/markdown-fold");
var _xmlFold = require("codemirror/addon/fold/xml-fold");
var scriptExports = {
    name: "SpinalCodeMirror",
    components: {
        codemirror: (0, _vueCodemirror.codemirror)
    },
    props: {
        codeObj: {}
    },
    data () {
        return {
            // code: this.codeObj.code,
            cmOption: {
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                // styleSelectedText: false,
                line: true,
                // foldGutter: true,
                lineWrapping: true,
                gutters: [
                    "CodeMirror-linenumbers",
                    "CodeMirror-foldgutter"
                ],
                // highlightSelectionMatches: {
                //    showToken: /\w/,
                //    annotateScrollbar: true,
                // },
                mode: "text/javascript",
                // hint.js options
                hintOptions: {
                    completeSingle: false
                },
                keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: "monokai",
                extraKeys: {
                    "Ctrl-Space": "autocomplete"
                }
            }
        };
    },
    mounted () {
    // setTimeout(() => {
    //    (this.styleSelectedText = true),
    //       (this.cmOption.styleActiveLine = true);
    // }, 1800);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-codemirror":"avd3d","codemirror/mode/javascript/javascript":"6YWC8","codemirror/addon/selection/active-line":"cUu2f","codemirror/addon/selection/mark-selection":"aTwo9","codemirror/addon/search/searchcursor":"5LZeT","codemirror/addon/hint/show-hint":"i59ce","codemirror/addon/hint/javascript-hint":"69sna","codemirror/addon/scroll/annotatescrollbar":"dqF5T","codemirror/addon/search/matchesonscrollbar":"6axA6","codemirror/addon/search/match-highlighter":"ep4wi","codemirror/mode/clike/clike":"2HhSs","codemirror/addon/edit/matchbrackets":"fNcgb","codemirror/addon/comment/comment":"6b2Hy","codemirror/addon/dialog/dialog":"k1Qcs","codemirror/addon/search/search":"a81NO","codemirror/keymap/sublime":"bjKP1","codemirror/addon/fold/brace-fold":"bBZ8N","codemirror/addon/fold/comment-fold":"4TN95","codemirror/addon/fold/foldcode":"X0E3X","codemirror/addon/fold/foldgutter":"2v6kd","codemirror/addon/fold/indent-fold":"cRLCr","codemirror/addon/fold/markdown-fold":"j14BT","codemirror/addon/fold/xml-fold":"gYEyJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luOkG":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("codemirror", {
        attrs: {
            "options": _vm.cmOption
        },
        model: {
            value: _vm.codeObj.code,
            callback: function($$v) {
                _vm.$set(_vm.codeObj, "code", $$v);
            },
            expression: "codeObj.code"
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2Y0rd":[function() {},{}],"6iUHr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNYMx":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_container"
    }, [
        _c("div", {
            staticClass: "subcontent"
        }, [
            _c("div", {
                staticClass: "content"
            }, [
                _c("div", {
                    staticClass: "div_code"
                }, [
                    _c("div", {
                        staticClass: "text_editor"
                    }, [
                        _c("spinal-code-mirror", {
                            staticClass: "editorContainer",
                            attrs: {
                                "codeObj": _vm.functions
                            }
                        })
                    ], 1)
                ])
            ])
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3AZLM":[function() {},{}],"85DQJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iuFQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "div_container"
    }, [
        _c("div", {
            staticClass: "title"
        }, [
            _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "md-layout-item"
        }, [
            _c("md-field", [
                _c("md-select", {
                    attrs: {
                        "name": "attributeConfig",
                        "id": "attributeConfig",
                        "placeholder": ""
                    },
                    model: {
                        value: _vm.attributeConfig.attributeName,
                        callback: function($$v) {
                            _vm.$set(_vm.attributeConfig, "attributeName", $$v);
                        },
                        expression: "attributeConfig.attributeName"
                    }
                }, _vm._l(_vm.attributes, function(attr) {
                    return _c("md-option", {
                        key: attr,
                        attrs: {
                            "value": attr
                        }
                    }, [
                        _vm._v(_vm._s(attr))
                    ]);
                }), 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "checkbox"
        }, [
            _c("md-checkbox", {
                staticClass: "md-primary",
                model: {
                    value: _vm.attributeConfig.useFunction,
                    callback: function($$v) {
                        _vm.$set(_vm.attributeConfig, "useFunction", $$v);
                    },
                    expression: "attributeConfig.useFunction"
                }
            }, [
                _vm._v("Use function")
            ])
        ], 1),
        _vm._v(" "),
        _vm.attributeConfig.useFunction ? _c("functions-component", {
            staticClass: "functions",
            attrs: {
                "functions": _vm.attributeConfig.functions
            }
        }) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2aGeR":[function() {},{}],"274Yx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8M4ZN":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "pcvue_link_dialog_content",
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Link floor(s) to devices\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "_dialogContent"
        }, [
            _vm.state === _vm.PAGES.selection ? _c("link-component", {
                attrs: {
                    "contexts": _vm.contexts,
                    "networks": _vm.networks,
                    "devices": _vm.devices,
                    "contextSelected": _vm.contextSelected,
                    "networkSelected": _vm.networkSelected,
                    "deviceSelected": _vm.deviceSelected
                },
                on: {
                    "selectContext": _vm.selectContext,
                    "selectNetwork": _vm.selectNetwork,
                    "selectDevices": _vm.selectDevices
                }
            }) : _vm.state === _vm.PAGES.functions ? _c("div", {
                staticClass: "configContainer"
            }, [
                _c("config-component", {
                    staticClass: "subContent",
                    attrs: {
                        "title": "Rooms",
                        "attributeConfig": _vm.attributes.rooms
                    }
                }),
                _vm._v(" "),
                _c("config-component", {
                    staticClass: "subContent",
                    attrs: {
                        "title": "Devices",
                        "attributeConfig": _vm.attributes.endpoints
                    }
                })
            ], 1) : _vm.state === _vm.PAGES.loading ? _c("div", {
                staticClass: "states"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _c("div", {
                staticClass: "states icon"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v(_vm._s(_vm.icon))
                ])
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
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledPreviousButton
                },
                on: {
                    "click": _vm.goToPrevious
                }
            }, [
                _vm._v("Previous")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledNextButton
                },
                on: {
                    "click": _vm.goToNext
                }
            }, [
                _vm._v("Next")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledLinkButton
                },
                on: {
                    "click": _vm.linkNodes
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

},{}],"eRblx":[function() {},{}],"6cfdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-park-management.eee5b9eb.js.map
