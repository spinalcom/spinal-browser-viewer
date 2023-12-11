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
})({"iQHFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TOP_BAR_HOOK_NAME", ()=>TOP_BAR_HOOK_NAME);
parcelHelpers.export(exports, "SIDE_BAR_HOOK_NAME", ()=>SIDE_BAR_HOOK_NAME);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vuetify = require("vuetify");
var _vuetifyDefault = parcelHelpers.interopDefault(_vuetify);
var _dialogCreateSceneVue = require("./src/vue/DialogCreateScene.vue");
var _dialogCreateSceneVueDefault = parcelHelpers.interopDefault(_dialogCreateSceneVue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _spinalEnvViewerPluginForge = require("spinal-env-viewer-plugin-forge");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _buttonCreateScene = require("./src/buttons/ButtonCreateScene");
var _buttonOpenSceneManager = require("./src/buttons/ButtonOpenSceneManager");
var _buttonLoadScene = require("./src/buttons/ButtonLoadScene");
var _panelSceneManagerVue = require("./src/vue/PanelSceneManager.vue");
var _panelSceneManagerVueDefault = parcelHelpers.interopDefault(_panelSceneManagerVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _buttonLoadModel = require("./src/buttons/ButtonLoadModel");
const TOP_BAR_HOOK_NAME = "GraphManagerTopBar";
const SIDE_BAR_HOOK_NAME = "GraphManagerSideBar";
(0, _vueDefault.default).use((0, _vuetifyDefault.default));
if (!window.spinal.SpinalForgeViewer.isInitialize()) window.spinal.SpinalForgeViewer.initialize(window.spinal.ForgeViewer.viewerManager);
async function waitForGraph() {
    await (0, _spinalEnvViewerGraphService.SpinalGraphService).waitForInitialization();
    const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext("Scenes");
    let running = false;
    const interval = setInterval(()=>{
        if (!running && typeof context !== "undefined" && window.spinal.SpinalForgeViewer.isInitialize()) {
            running = true;
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(context.info.id.get(), context.info.id.get()).then((children)=>{
                for(let i = 0; i < children.length; i++)if (children[i].autoLoad.get()) window.spinal.SpinalForgeViewer.loadModelFromNode(children[i].id.get());
                clearInterval(interval);
            }).catch((e)=>{
                console.error(e);
                clearInterval(interval);
            });
        }
    }, 200);
}
waitForGraph();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(TOP_BAR_HOOK_NAME, new (0, _buttonCreateScene.ButtonCreateScene)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _buttonOpenSceneManager.ButtonOpenSceneManager)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _buttonLoadModel.ButtonLoadModel)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDE_BAR_HOOK_NAME, new (0, _buttonLoadScene.ButtonLoadScene)(), [
    7
]);
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogCreateScene",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _dialogCreateSceneVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
const compareVersion = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "PanelSceneManager",
    vueMountComponent: (0, _vueDefault.default).extend((0, _panelSceneManagerVueDefault.default)),
    panel: {
        title: "Scene Manager",
        classname: "spinal-pannel",
        closeBehaviour: "delete"
    },
    style: {
        left: "805px",
        width: "430px",
        height: "80vh",
        display: "flex",
        overflow: "hidden"
    }
});
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("PanelSceneManager", compareVersion);

},{"vue":"gt5MM","vuetify":"WtHLj","./src/vue/DialogCreateScene.vue":"6VoTS","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","spinal-env-viewer-plugin-forge":"8YZk7","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-context-menu-service":"kHlxv","./src/buttons/ButtonCreateScene":"bsWwm","./src/buttons/ButtonOpenSceneManager":"6uXQV","./src/buttons/ButtonLoadScene":"6Nd1J","./src/vue/PanelSceneManager.vue":"7IC8s","spinal-env-viewer-graph-service":"9n7zp","./src/buttons/ButtonLoadModel":"kXTrd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6VoTS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("52ecc0123c7dbf1d");
    if (script.__esModule) script = script.default;
    script.render = require("1d791b43dc372be2").render;
    script.staticRenderFns = require("1d791b43dc372be2").staticRenderFns;
    script._scopeId = "data-v-c9fe0f";
    script.__cssModules = require("a878668086e63d14").default;
    require("30c85cd96a2d9d00").default(script);
    script.__scopeId = "data-v-c9fe0f";
    script.__file = "DialogCreateScene.vue";
};
initialize();
exports.default = script;

},{"52ecc0123c7dbf1d":"gC0fU","1d791b43dc372be2":"211Lw","a878668086e63d14":"h422K","30c85cd96a2d9d00":"fkIUM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gC0fU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sceneHelper = require("../build/SceneHelper");
var scriptExports = {
    name: "DialogCreateScene",
    data: function() {
        return {
            name: "",
            description: "",
            dialog: false,
            bimFile: []
        };
    },
    methods: {
        initialize: function(option) {},
        onNameChange: function(value) {
            this.name = value;
        },
        onDescriptionChange: function(value) {
            this.description = value;
        },
        createScene: function() {
            return new Promise((resolve)=>{
                (0, _sceneHelper.SceneHelper).createScene(this.name, this.description, false).then(resolve);
            });
        },
        onSave: function() {
            this.createScene().then(()=>{
                this.dialog = false;
            });
        },
        onCancel: function() {
            this.dialog = false;
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog (closeResult) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../build/SceneHelper":"jyQLf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyQLf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SceneHelper", ()=>SceneHelper);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class SceneHelper {
    static initialize() {
        if (SceneHelper.initialized !== null) return SceneHelper.initialized;
        SceneHelper.initialized = new Promise((resolve, reject)=>{
            SceneHelper.context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(SceneHelper.contextName);
            if (typeof SceneHelper.context === "undefined") (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(SceneHelper.contextName, SceneHelper.type).then((context)=>{
                SceneHelper.context = context;
                SceneHelper.contextId = context.info.id.get();
                console.log(SceneHelper);
                console.log(SceneHelper.contextId);
                resolve(true);
            }).catch(reject);
            else {
                SceneHelper.contextId = SceneHelper.context.info.id.get();
                console.log(SceneHelper.contextId);
                resolve(true);
            }
        });
        return SceneHelper.initialized;
    }
    static createScene(name, description, autoLoad) {
        return SceneHelper.initialize().then(()=>{
            const sceneId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name,
                description,
                autoLoad,
                type: (0, _constants.SCENE_TYPE)
            }, undefined);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(SceneHelper.contextId, sceneId, SceneHelper.contextId, (0, _constants.SCENE_RELATION_NAME), (0, _constants.SCENE_RELATION_TYPE));
        });
    }
    static addModelToScene(sceneId, bimFileId) {
        return SceneHelper.initialize().then(()=>{
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(sceneId, bimFileId, SceneHelper.contextId, (0, _constants.PART_RELATION_NAME), (0, _constants.PART_RELATION_TYPE));
        });
    }
    static getBimFilesFromScene(sceneId) {
        return SceneHelper.initialize().then(()=>{
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(sceneId, [
                (0, _constants.PART_RELATION_NAME)
            ]);
        });
    }
    static getSceneFromNode(nodeId) {
        return SceneHelper.initialize().then(()=>{
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
                (0, _constants.SCENE_RELATION_NAME)
            ]);
        });
    }
    static addSceneToNode(nodeId, sceneId) {
        return SceneHelper.initialize().then(()=>{
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(nodeId, sceneId, SceneHelper.contextId, (0, _constants.SCENE_RELATION_NAME), (0, _constants.SCENE_RELATION_TYPE));
        });
    }
}
_defineProperty(SceneHelper, "initialized", null);
_defineProperty(SceneHelper, "context", void 0);
_defineProperty(SceneHelper, "contextName", void 0);
_defineProperty(SceneHelper, "type", void 0);
_defineProperty(SceneHelper, "contextId", void 0);
SceneHelper.initialized = null;
SceneHelper.contextName = "Scenes";
SceneHelper.type = "SpinalService";

},{"spinal-env-viewer-graph-service":"9n7zp","../constants":"5vlWV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vlWV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCENE_RELATION_NAME", ()=>SCENE_RELATION_NAME);
parcelHelpers.export(exports, "SCENE_RELATION_TYPE", ()=>SCENE_RELATION_TYPE);
parcelHelpers.export(exports, "SCENE_TYPE", ()=>SCENE_TYPE);
parcelHelpers.export(exports, "PART_RELATION_NAME", ()=>PART_RELATION_NAME);
parcelHelpers.export(exports, "PART_RELATION_TYPE", ()=>PART_RELATION_TYPE);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const SCENE_RELATION_NAME = "hasScene";
const SCENE_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
const SCENE_TYPE = "scene";
const PART_RELATION_NAME = "hasParts";
const PART_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"211Lw":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("v-card-title", {
                        staticClass: "headline"
                    }, [
                        _vm._v("Create a new scene\n                ")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                        _c("v-text-field", {
                            attrs: {
                                "placeholder": "Name"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                            attrs: {
                                "placeholder": "Description"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler\n                    ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider\n                    ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"h422K":[function() {},{}],"fkIUM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{"bf7edd8450503e22":"7Uw4d","64bd1569b4ded066":"gsEky"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"gsEky":[function(require,module,exports) {
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

},{}],"kHlxv":[function(require,module,exports) {
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
const SpinalContextMenuService = require("68897565c96c24c9");
const SpinalContextApp = require("b2a1734f0374b803");
const Constant = require("dd9afb352261d691");
if (typeof G_root.spinal === "undefined") G_root.spinal = {};
if (typeof G_root.spinal.spinalContextMenuService === "undefined") G_root.spinal.spinalContextMenuService = new SpinalContextMenuService();
module.exports = {
    constants: Constant,
    spinalContextMenuService: G_root.spinal.spinalContextMenuService,
    SpinalContextApp,
    install (Vue) {
        Vue.prototype.$spinalContextMenuService = G_root.spinal.spinalContextMenuService;
    }
};

},{"68897565c96c24c9":"iqJit","b2a1734f0374b803":"kAFNM","dd9afb352261d691":"gmus8"}],"iqJit":[function(require,module,exports) {
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
 */ var _q = require("q");
var debounce = require("381613c6219f7bf2");
/**
 *  Containter like service to register and get applications relative to a hookname
 *
 * @property {object} apps key = hookname, value array of apps
 * @class SpinalContextMenuService
 */ class SpinalContextMenuService {
    /**
   *Creates an instance of SpinalContextMenuService.
   * @memberof SpinalContextMenuService
   */ constructor(){
        this.apps = {};
        this.promiseByAppProfileId = {};
        this.appRdy = _q.defer();
        this.debouncedRdy = debounce(()=>{
            this.appRdy.resolve();
            this.debouncedRdy = ()=>{};
        }, 1000, {
            leading: false,
            trailing: true
        });
    }
    // waitRdy() {
    //   this.appRdy.promise;
    // }
    /**
   * Return true if user has access to this appProfile
   * @param appProfileId
   * @return {PromiseLike<boolean > | Promise<boolean>}
   */ async hasUserRight(appProfileId) {
        this.debouncedRdy();
        await window.spinal.spinalSystem.init();
        const path = "/etc/UserProfileDir/" + window.spinal.spinalSystem.getUser().username;
        const userProfile = await window.spinal.spinalSystem.load(path);
        let res = false;
        if (userProfile) for(let i = 0; i < userProfile.appProfiles.length && !res; i++)res = (1 << userProfile.appProfiles[i] & appProfileId) !== 0;
        return res;
    }
    /**
   * method to register the Application to a hook
   *
   * @param {string} hookname the place where is application button is located
   * @param {SpinalContextApp} spinalContextApp the application
   * @param {number} appProfileId id of the group that can use the application
   * button
   * @memberof SpinalContextMenuService
   */ registerApp(hookname, spinalContextApp, appProfileId) {
        this.debouncedRdy();
        if (typeof appProfileId === "undefined") {
            console.warn("Deprecated: The usage of this function without the third parameter appProfileId is deprecated your button is lock for admin only until you set the third parameter");
            appProfileId = 1;
        }
        // get the array of apps of the hook
        let appsInHooks = this.apps[hookname];
        // create the array if not exist
        if (!(appsInHooks instanceof Array)) appsInHooks = this.apps[hookname] = [];
        if (!this.promiseByAppProfileId.hasOwnProperty(appProfileId)) this.promiseByAppProfileId[appProfileId] = this.hasUserRight(appProfileId);
        this.promiseByAppProfileId[appProfileId].then((hasAccess)=>{
            // push the app if not exist ans user has access to the button
            if (hasAccess && appsInHooks.indexOf(spinalContextApp) === -1) appsInHooks.push(spinalContextApp);
        });
    }
    /**
   * method to get the applications registered to a hookname
   *
   * @param {String} hookname
   * @param {object} option
   * @memberof SpinalContextMenuService
   * @returns {Promise} resolve : [spinalContextApp, ...]; reject: Error
   */ async getApps(hookname, option) {
        await this.appRdy.promise;
        // get the array of apps of the hook
        let appsInHooks = this.apps[hookname];
        // create the array if not exist
        if (!(appsInHooks instanceof Array)) return Promise.resolve([]);
        let promises = appsInHooks.map(async function(e, idx) {
            try {
                const res = await e.isShown(option);
                return res === -1 ? -1 : e;
            } catch (error) {
                console.error(error);
                return -1;
            }
        });
        try {
            const appRes = await Promise.all(promises);
            return appRes.filter((itm)=>itm !== -1);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
module.exports = SpinalContextMenuService;

},{"q":"6YRAJ","381613c6219f7bf2":"3JP5n"}],"kAFNM":[function(require,module,exports) {
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
 *  Interface like class to define a Contextual Application button
 * @see https://material.io/tools/icons/?style=baseline for material icons
 *
 * @class SpinalContextApp
 * @property {string} label=notset short name to be shown in the application
 * @property {string} description description of what the Application button do
 * @property {object} buttonCfg Object configuration of the Application button
 * @property {string} buttonCfg.icon=tab can be a font-awsome or material icon string
 * @property {string} buttonCfg.icon_type=in Where to place the icon in the `md-icon`. Should be one of theses `class`, `in`, `src`
 * @property {string} buttonCfg.backgroundColor=#0000FF backgroud color of the button
 * @property {string} buttonCfg.fontColor=#FFFFFF font color of the button
 * @property {objet} [badgeCfg] Object configuration of the Application button badge
 * @property {string} badgeCfg.label string shown in a badge; if empty it's not shown
 * @property {string} badgeCfg.backgroundColor=#FF0000 backgroud color of the badge
 * @property {string} badgeCfg.fontColor=#FFFFFF font color of the badge
 */ class SpinalContextApp {
    /**
   * Creates an instance of SpinalContextApp.
   * @param {string} label=notset short name to be shown in the application
   * @param {string} description description of what the Application button do
   * @param {object} buttonCfg Object configuration of the Application button
   * @param {string} buttonCfg.icon=tab can be a font-awsome or material icon string
   * @param {string} buttonCfg.icon_type=in Where to place the icon in the `md-icon`. Should be one of theses `class`, `in`, `src`
   * @param {string} buttonCfg.backgroundColor=#0000FF backgroud color of the button
   * @param {string} buttonCfg.fontColor=#FFFFFF font color of the button
   * @param {objet} [badgeCfg] Object configuration of the Application button badge
   * @param {string} badgeCfg.label string shown in a badge; if empty it's not shown
   * @param {string} badgeCfg.backgroundColor=#FF0000 backgroud color of the badge
   * @param {string} badgeCfg.fontColor=#FFFFFF font color of the badge
   * @memberof SpinalContextApp
   */ constructor(label, description, buttonCfg, badgeCfg = {}){
        this.label = label || "notset";
        this.description = description || "";
        this.buttonCfg = {
            icon: buttonCfg.icon || "tab",
            icon_type: buttonCfg.icon_type || "in",
            backgroundColor: colorHash(buttonCfg.backgroundColor || "#0000FF"),
            fontColor: colorHash(buttonCfg.fontColor || "#FFFFFF")
        };
        this.badgeCfg = {
            label: badgeCfg.label || "",
            backgroundColor: colorHash(badgeCfg.backgroundColor || "#FF0000"),
            fontColor: colorHash(badgeCfg.fontColor || "#FFFFFF")
        };
    }
    /**
   * Method called by `SpinalContextMenuService.getApps`
   * to filter the Application button to show in the context hook
   *
   * @param {object} option
   * @memberof SpinalContextApp
   * @returns {Promise} Resolve: not shown if === -1;
   */ isShown(option) {}
    /**
   * Method to call on click of the application button
   *
   * @param {object} option {}
   * @memberof SpinalContextApp
   */ action(option) {}
}
module.exports = SpinalContextApp;
function colorHash(color) {
    if (color[0] === "#") return color;
    return "#" + color;
}

},{}],"gmus8":[function(require,module,exports) {
module.exports = {
    ADMINISTRATEUR: "ADMINISTRATEUR",
    MAINTENEUR: "MAINTENEUR",
    INTEGRATEUR: "INTEGRATEUR",
    ASSET_MANAGEUR: "ASSET MANAGER"
};

},{}],"bsWwm":[function(require,module,exports) {
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonCreateScene", ()=>ButtonCreateScene);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const { spinalPanelManagerService } = require("6ade646c7dffb593");
class ButtonCreateScene extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create a new scene", "Create a new scene", {
            icon: "business",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown() {
        return Promise.resolve(true);
    }
    openPanel() {
        spinalPanelManagerService.openPanel("DialogCreateScene");
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","6ade646c7dffb593":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uXQV":[function(require,module,exports) {
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonOpenSceneManager", ()=>ButtonOpenSceneManager);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
const { spinalPanelManagerService } = require("7cc1dd8682fbdd07");
class ButtonOpenSceneManager extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Open Model Manager", "Open Model Manager", {
            icon: "web",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _constants.SCENE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext("BimFileContext");
        if (typeof context === "undefined") {
            alert("aucun bimFile dans le Digital tween");
            return;
        }
        (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(context.info.id.get(), context.info.id.get()).then((children)=>{
            spinalPanelManagerService.openPanel("PanelSceneManager", {
                scene: option.selectedNode,
                bimFiles: children
            });
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../constants":"5vlWV","7cc1dd8682fbdd07":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Nd1J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonLoadScene", ()=>ButtonLoadScene);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("../constants");
const { spinalPanelManagerService } = require("80e23c725c27a170");
class ButtonLoadScene extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Load Scene", "Load all model of the scene", {
            icon: "get_app",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _constants.SCENE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        window.spinal.SpinalForgeViewer.loadModelFromNode(option.selectedNode.id.get());
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","../constants":"5vlWV","80e23c725c27a170":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7IC8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("439f359bdfdddc29");
    if (script.__esModule) script = script.default;
    script.render = require("aa7608327bcda7c7").render;
    script.staticRenderFns = require("aa7608327bcda7c7").staticRenderFns;
    script._scopeId = "data-v-ea31ad";
    script.__cssModules = require("9973f16ae373ae26").default;
    require("6b9ac8b671f3571a").default(script);
    script.__scopeId = "data-v-ea31ad";
    script.__file = "PanelSceneManager.vue";
};
initialize();
exports.default = script;

},{"439f359bdfdddc29":"8xNhw","aa7608327bcda7c7":"hc6eV","9973f16ae373ae26":"j4V9o","6b9ac8b671f3571a":"4qyVc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xNhw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sceneHelper = require("../build/SceneHelper");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _forgeWorkerFunctions = require("./ForgeWorkerFunctions");
var _selectAttributeVue = require("./SelectAttribute.vue");
var _selectAttributeVueDefault = parcelHelpers.interopDefault(_selectAttributeVue);
var _constants = require("../constants");
var scriptExports = {
    name: "PanelSceneManager",
    components: {
        SelectAttribute: (0, _selectAttributeVueDefault.default)
    },
    data: function() {
        return {
            step1Container: null,
            step2Container: null,
            step3Container: null,
            // autoPosition: false,
            loadOptionSelected: 0,
            loadOptions: [
                {
                    name: "Center To Center",
                    value: 0
                },
                {
                    name: "Origin To Origin",
                    value: 1
                },
                {
                    name: "Share Coordinates",
                    value: 2
                }
            ],
            displayNeedToLoadModel: false,
            modelLoaded: false,
            selection: {
                nb: 0
            },
            models: {},
            useAllModels: true,
            mModels: [],
            modelPosition: {},
            autoLoad: false,
            selectedModels: [],
            bimFilesComputed: [],
            step: 1,
            scene: null,
            bimFiles: [],
            sceneName: "",
            sceneDescr: "",
            associatedModel: [],
            attributesName: [],
            isBimFileSelectorOpen: false,
            modifyModelItem: false,
            modelNeedToBeLoad: false,
            currentModel: null,
            attributeName: "",
            attributeVal: "",
            container: null,
            numberProps: 0,
            modelProps: {}
        };
    },
    watch: {
        selectedModel: function(value) {
            for(let i = 0; i < value.length; i++){
                if (typeof this.modelLoaded[value[i]] !== "undefined" && this.modelLoaded[value[i]]) continue;
                for(let j = 0; j < this.bimFiles.length; j++)if (this.bimFiles[j].name.get() === value[i]) {
                    this.currentBimFile = this.bimFiles[j];
                    this.loadModel().then(()=>{
                        this.modelLoaded[value[i]] = true;
                    });
                }
            }
        }
    },
    computed: {
        name: function() {
            if (this.scene !== null) return this.scene.name.get();
            return "";
        },
        description: function() {
            if (this.scene !== null) return this.scene.description.get();
            return "";
        },
        nbModel: function() {
            return this.selectedModels.length;
        },
        selectedModelInfo: function() {
            //if here to be trigger when selection change
            if (this.selection.nb !== 0) return this.selectedModels.map((m)=>this.getModelInfo(m));
            else return this.selectedModels.map((m)=>this.getModelInfo(m));
        },
        objectSelectedSentence: function() {
            if (this.selection.nb <= 1) return `${this.selection.nb} object selected`;
            return `${this.selection.nb} objects selected`;
        }
    },
    methods: {
        initialize: function(option) {
            this.container = this.$el;
            this.selection.nb = 0;
            this.step1Container = document.getElementById("step1");
            this.step2Container = document.getElementById("step2");
            this.step3Container = document.getElementById("step3");
            this.bimFiles = option.bimFiles;
            this.scene = option.scene;
            this.bimFilesComputed = this.bimFiles.map((bimfile)=>{
                return bimfile.name.get();
            });
            this.useAllModels = typeof this.scene.useAllModels !== "undefined" ? this.scene.useAllModels.get() : false;
            this.loadOptionSelected = typeof this.scene.sceneAlignMethod !== "undefined" ? this.scene.sceneAlignMethod.get() : 0;
            this.autoLoad = this.scene.autoLoad.get();
            if (typeof this.scene.option !== "undefined") for(let i = 0; i < this.scene.options; i++)this.selection.nb += this.scene.options[i].dbIds.get().length;
            (0, _sceneHelper.SceneHelper).getBimFilesFromScene(this.scene.id.get()).then((bimFiles)=>{
                this.selectedModels = bimFiles.map((bimFile)=>bimFile.name.get());
            });
        },
        getDbIdLength: function(model) {
            if (typeof model !== "undefined" && typeof model.dbIds !== "undefined") return model.dbIds.length;
            return 0;
        },
        openBimFileSelector: function() {},
        opened: function(option) {
            this.initialize(option);
        },
        removed: function() {},
        closeDialog: function(closeResult) {},
        addModelToScene: function(bimFile) {
            (0, _sceneHelper.SceneHelper).addModelToScene(this.scene.id.get(), bimFile.id.get()).then(()=>{
                this.associatedModel.push(bimFile);
            });
        },
        getModelInfo (m) {
            const info = {
                name: "",
                dbIds: []
            };
            info["name"] = m;
            const model = window.spinal.BimObjectService.getModelByName(m);
            if (typeof model === "undefined") return info;
            info["model"] = model;
            info["dbIds"] = this.selection[model.id];
            return info;
        },
        loadModel: function() {
            return window.spinal.SpinalForgeViewer.loadBimFile(this.currentBimFile).then((m)=>{
                this.currentModel = m.model;
                this.modelNeedToBeLoad = false;
                return true;
            });
        },
        loadAllModel () {
            const proms = [];
            for(let i = 0; i < this.bimFiles.length; i++)proms.push(window.spinal.SpinalForgeViewer.loadBimFile(this.bimFiles[i]));
            return Promise.all(proms).then((res)=>{
                this.mModels = res;
                console.log(res);
                this.displayNeedToLoadModel = false;
                this.modelLoaded = true;
            });
        },
        selectOBJ: function() {
            if (Object.keys(this.selection).length === 1 && !this.modelLoaded) this.displayNeedToLoadModel = true;
            spinal.ForgeViewer.viewer.clearSelection();
            for(let key in this.selection)if (this.selection.hasOwnProperty(key) && key !== "nb") {
                console.log(key);
                console.log(this.models[key]);
                this.models[key].selector.setSelection(this.selection[key], Autodesk.Viewing.SelectionMode);
            // window.spinal.ForgeViewer.viewerManager.select(
            // this.selection[key], this.models[key] )
            }
        },
        getSelection: function() {
            const selection = window.spinal.ForgeViewer.viewer.getAggregateSelection();
            for(let i = 0; i < selection.length; i++)if (selection[i].hasOwnProperty("model")) {
                let dbids = this.selection[selection[i].model.id];
                if (typeof dbids === "undefined") dbids = [];
                const newIds = selection[i].selection.filter((dbid)=>{
                    return dbids.indexOf(dbid) === -1;
                });
                dbids.push(...newIds);
                this.selection[selection[i].model.id] = dbids;
                this.models[selection[i].model.id] = selection[i].model;
            }
            let res = 0;
            for(let key in this.selection)if (this.selection.hasOwnProperty(key) && key !== "nb") res += this.selection[key].length;
            this.selection["nb"] = res;
        },
        clearSelection: function() {
            this.selection = {
                nb: 0
            };
        },
        save: function() {
            const info = {};
            info["autoLoad"] = this.autoLoad;
            if (this.sceneDescr !== "") info["description"] = this.sceneDescr;
            if (this.sceneName !== "") info["name"] = this.sceneName;
            info["useAllDT"] = this.useAllModels;
            info["sceneAlignMethod"] = this.loadOptionSelected;
            info["options"] = []; // [{urn: "", dbIds: []}]
            for(let i = 0; i < this.selectedModels.length; i++){
                const modelName = this.selectedModels[i];
                let model = window.spinal.BimObjectService.getModelByName(modelName);
                if (typeof model !== "undefined") info["options"].push({
                    urn: model.myData.urn,
                    dbIds: this.selection[model.id],
                    loadOption: this.modelPosition[model.id]
                });
            }
            (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.scene.id.get(), [
                (0, _constants.PART_RELATION_NAME)
            ]).then((children)=>{
                const nodeToRemove = [];
                const nodeToAdd = [];
                if (typeof children !== "undefined") {
                    for(let i = 0; i < children.length; i++)if (this.selectedModels.indexOf(children[i].name.get()) === -1) nodeToRemove.push((0, _spinalEnvViewerGraphService.SpinalGraphService).removeChild(this.scene.id.get(), children[i].id.get(), (0, _constants.PART_RELATION_NAME), (0, _constants.PART_RELATION_TYPE)));
                    for(let i = 0; i < this.selectedModels.length; i++){
                        const node = children.find((child)=>{
                            return child.name.get() === this.selectedModels[i];
                        });
                        const bimFile = this.bimFiles.find((file)=>{
                            return file.name.get() === this.selectedModels[i];
                        });
                        if (typeof node === "undefined" && typeof bimFile !== "undefined") nodeToAdd.push((0, _sceneHelper.SceneHelper).addModelToScene(this.scene.id.get(), bimFile.id.get()));
                    }
                } else for(let i = 0; i < this.selectedModels.length; i++){
                    const bimFile = this.bimFiles.filter((file)=>{
                        return file.name.get() === this.selectedModels[i];
                    });
                    nodeToAdd.push((0, _sceneHelper.SceneHelper).addModelToScene(this.scene.id.get(), bimFile.id.get()));
                }
                Promise.all(nodeToRemove).then(()=>{
                    Promise.all(nodeToAdd).then(()=>{
                        (0, _spinalEnvViewerGraphService.SpinalGraphService).modifyNode(this.scene.id.get(), info);
                    });
                });
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../build/SceneHelper":"jyQLf","spinal-env-viewer-graph-service":"9n7zp","./ForgeWorkerFunctions":"auTD7","./SelectAttribute.vue":"aCeX9","../constants":"5vlWV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"auTD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterDbid", ()=>filterDbid);
parcelHelpers.export(exports, "getAttributeName", ()=>getAttributeName);
function filterDbid(m, attributeName, attributeVal) {
    const fun = `function userFunction(pdb){
  const res = [];
  let attrNameId = -1;
  
  pdb.enumAttributes( (i, attrDef, attrRaw) => {
    let name = attrDef.name;
    
    if (name.toLowerCase() === \"${attributeName.toLowerCase()}\") {
      attrNameId = i;
      return true;
    }
  });
  
  pdb.enumObjects( (dbId) => {
    pdb.enumObjectProperties(dbId, (attrId, valId) => {
      if (attrId === attrNameId)
      {
        let value = pdb.getAttrValue(attrId, valId);
        
        if (value === \"${attributeVal}\") {
          res.push(dbId)
        }
        
        return true;
      }
    })
  });
  
  return {dbIds: res, attrId: attrNameId };
}
`;
    return m.getPropertyDb().executeUserFunction(fun);
}
function getAttributeName(m) {
    const fun = `function userFunction(pdb){
  const res = [];
  let attrNameId = -1;
  
  pdb.enumAttributes( (i, attrDef, attrRaw) => {
    let name = attrDef.name;
    console.log(attrDef.name)
    res.push(name)
  });
  
  return res;
}
`;
    return m.getPropertyDb().executeUserFunction(fun);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCeX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c0c114626cb409bd");
    if (script.__esModule) script = script.default;
    script.render = require("12ba5e32f6abdf62").render;
    script.staticRenderFns = require("12ba5e32f6abdf62").staticRenderFns;
    script._scopeId = "data-v-8eac61";
    script.__cssModules = require("3298930f8c4b5656").default;
    require("ba6e40f72ed5f5be").default(script);
    script.__scopeId = "data-v-8eac61";
    script.__file = "SelectAttribute.vue";
};
initialize();
exports.default = script;

},{"c0c114626cb409bd":"h9Sx6","12ba5e32f6abdf62":"erbF1","3298930f8c4b5656":"mIKzQ","ba6e40f72ed5f5be":"3Ft43","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9Sx6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "SelectAttribute",
    props: {
        attributesName: {
            type: Array,
            required: true
        },
        container: {
            type: Element,
            required: true
        }
    },
    data: function() {
        return {
            attributeName: "",
            model: null
        };
    },
    methods: {
        onValueChange (e) {
            this.$emit("value-change", {
                value: e,
                attribute: this.model
            });
        }
    },
    watch: {
        model: function(value) {
            this.$emit("attribute-selected", value);
            console.log(value);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erbF1":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-container", {
        attrs: {
            "grid-list-md": "",
            "text-xs-center": ""
        }
    }, [
        _c("v-layout", {
            attrs: {
                "align-center": "",
                "justify-space-around": "",
                "row": ""
            }
        }, [
            _c("v-flex", [
                _c("v-autocomplete", {
                    attrs: {
                        "reverse": true,
                        "dark": true,
                        "id": "autocomplete",
                        "attach": _vm.container,
                        "items": _vm.attributesName,
                        "label": "Attribute name",
                        "persistent-hint": "",
                        "prepend-icon": "mdi-city"
                    },
                    model: {
                        value: _vm.model,
                        callback: function($$v) {
                            _vm.model = $$v;
                        },
                        expression: "model"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-flex", [
                _c("v-text-field", {
                    attrs: {
                        "dark": "",
                        "input": "attributeName",
                        "label": "Value"
                    },
                    on: {
                        "change": _vm.onValueChange
                    }
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"mIKzQ":[function() {},{}],"3Ft43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hc6eV":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", {
        staticClass: "scene-manager",
        attrs: {
            "dark": ""
        }
    }, [
        _c("v-stepper", {
            attrs: {
                "vertical": "",
                "dark": ""
            },
            model: {
                value: _vm.step,
                callback: function($$v) {
                    _vm.step = $$v;
                },
                expression: "step"
            }
        }, [
            _c("v-stepper-step", {
                attrs: {
                    "editable": "",
                    "complete": _vm.step > 1,
                    "step": "1"
                }
            }, [
                _vm._v("\n      Select models\n    ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "1",
                    "id": "step1"
                }
            }, [
                _c("v-select", {
                    attrs: {
                        "items": _vm.bimFilesComputed,
                        "label": "Models",
                        "multiple": "",
                        "hint": "Choose the model to add to the scene",
                        "persistent-hint": "",
                        "attach": _vm.container
                    },
                    model: {
                        value: _vm.selectedModels,
                        callback: function($$v) {
                            _vm.selectedModels = $$v;
                        },
                        expression: "selectedModels"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "editable": "",
                    "complete": _vm.step > 2,
                    "step": "2"
                }
            }, [
                _vm._v("\n      Choose referential\n    ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "2",
                    "id": "step2"
                }
            }, [
                _c("v-select", {
                    attrs: {
                        "items": _vm.loadOptions,
                        "item-text": "name",
                        "item-value": "value",
                        "label": "Load scene option",
                        "hint": "select the Load type for this scene",
                        "persistent-hint": "",
                        "attach": _vm.container
                    },
                    model: {
                        value: _vm.loadOptionSelected,
                        callback: function($$v) {
                            _vm.loadOptionSelected = $$v;
                        },
                        expression: "loadOptionSelected"
                    }
                }),
                _vm._v(" "),
                _c("v-checkbox", {
                    attrs: {
                        "label": "Use whole digital twin"
                    },
                    model: {
                        value: _vm.useAllModels,
                        callback: function($$v) {
                            _vm.useAllModels = $$v;
                        },
                        expression: "useAllModels"
                    }
                }),
                _vm._v(" "),
                !_vm.useAllModels ? _c("div", [
                    _c("v-layout", {
                        attrs: {
                            "align-center": "",
                            "justify-space-around": "",
                            "row": ""
                        }
                    }, [
                        _c("v-flex", [
                            _c("v-btn", {
                                attrs: {
                                    "flat": "",
                                    "icon": ""
                                },
                                on: {
                                    "click": _vm.getSelection
                                }
                            }, [
                                _c("v-icon", [
                                    _vm._v("add")
                                ])
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("v-flex", [
                            _c("v-btn", {
                                attrs: {
                                    "flat": "",
                                    "icon": ""
                                },
                                on: {
                                    "click": _vm.clearSelection
                                }
                            }, [
                                _c("v-icon", [
                                    _vm._v("close")
                                ])
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("v-flex", [
                            _c("v-btn", {
                                attrs: {
                                    "flat": "",
                                    "icon": ""
                                },
                                on: {
                                    "click": _vm.selectOBJ
                                }
                            }, [
                                _c("v-icon", [
                                    _vm._v("visibility")
                                ])
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _vm.displayNeedToLoadModel ? _c("div", [
                        _vm._v("\n          Models need to be loaded to see the selection\n          "),
                        _c("v-btn", {
                            attrs: {
                                "flat": "",
                                "icon": ""
                            },
                            on: {
                                "click": _vm.loadAllModel
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("get_app")
                            ])
                        ], 1)
                    ], 1) : _vm._e(),
                    _vm._v("\n        " + _vm._s(_vm.objectSelectedSentence) + "\n      ")
                ], 1) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "editable": "",
                    "complete": _vm.step > 2,
                    "step": "3"
                }
            }, [
                _vm._v("\n      Edit scene\n    ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "3",
                    "id": "step3"
                }
            }, [
                _c("v-checkbox", {
                    attrs: {
                        "label": "load the scene automatically"
                    },
                    model: {
                        value: _vm.autoLoad,
                        callback: function($$v) {
                            _vm.autoLoad = $$v;
                        },
                        expression: "autoLoad"
                    }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                    attrs: {
                        "label": "Name",
                        "placeholder": _vm.name
                    },
                    model: {
                        value: _vm.sceneName,
                        callback: function($$v) {
                            _vm.sceneName = $$v;
                        },
                        expression: "sceneName"
                    }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                    attrs: {
                        "label": "Description",
                        "placeholder": _vm.description
                    },
                    model: {
                        value: _vm.sceneDescr,
                        callback: function($$v) {
                            _vm.sceneDescr = $$v;
                        },
                        expression: "sceneDescr"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("v-stepper-step", {
                attrs: {
                    "editable": "",
                    "step": "4"
                }
            }, [
                _vm._v(" Summary ")
            ]),
            _vm._v(" "),
            _c("v-stepper-content", {
                attrs: {
                    "step": "4",
                    "id": "step4"
                }
            }, [
                _vm._v("\n      " + _vm._s(_vm.nbModel) + " model include in this scene\n      "),
                _vm._l(_vm.selectedModelInfo, function(model) {
                    return _c("div", [
                        _vm._v("\n        " + _vm._s(model.name) + " with " + _vm._s(_vm.getDbIdLength()) + " object selected\n        "),
                        typeof model.dbIds !== "undefined" && _vm.getDbIdLength() > 0 ? _c("v-btn", {
                            attrs: {
                                "flat": "",
                                "icon": ""
                            },
                            on: {
                                "click": _vm.selectOBJ
                            }
                        }, [
                            _c("v-icon", [
                                _vm._v("visibility")
                            ])
                        ], 1) : _vm._e()
                    ], 1);
                }),
                _vm._v(" "),
                _c("v-btn", {
                    attrs: {
                        "flat": ""
                    },
                    on: {
                        "click": _vm.save
                    }
                }, [
                    _vm._v(" Save ")
                ])
            ], 2)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"j4V9o":[function() {},{}],"4qyVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXTrd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonLoadModel", ()=>ButtonLoadModel);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("../constants");
const { spinalPanelManagerService } = require("5a18e5582328534d");
class ButtonLoadModel extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Load model", "Load model", {
            icon: "get_app",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        //Todo create specific service
        if (option.selectedNode.type.get() === "BimFile") return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    openPanel(option) {
        window.spinal.SpinalForgeViewer.loadModelFromBimFile(option.selectedNode);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","../constants":"5vlWV","5a18e5582328534d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-scene.df9e561d.js.map
