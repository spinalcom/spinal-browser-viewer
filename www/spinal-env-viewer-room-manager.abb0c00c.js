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
})({"7JUgr":[function(require,module,exports,__globalThis) {
var _dialogs = require("./vue/dialogs");
var _panel = require("./vue/panel");
var _event = require("./js/event");
var _buttons = require("./buttons"); // import ContextGroupBtn from "./buttons/createContextGroup";
 // import CreateElement from "./buttons/createElement";
 // // import DisplayBimObjects from "./buttons/displayBimObject";
 // import Edit from './buttons/edit';
 // import LinkRooms from "./buttons/linkRooms";
 // // import AddToReference from "./buttons/addToReferenceContext";
 // import ViewChildren from "./buttons/viewBtn";
 // import FindRoom from "./buttons/findBimRoom";
 // import FindBimObject from "./buttons/findBimObject";
 // import {
 //   spinalContextMenuService
 // } from "spinal-env-viewer-context-menu-service";
 // const SIDEBAR = "GraphManagerSideBar";
 // const HEADERBAR = "GraphManagerTopBar";
 // const CIRCULARMENU = 'circularMenu';
 // spinalContextMenuService.registerApp(SIDEBAR, new AddToReference());
 /////////////////////////////////////////////////////////////////////////////////////////////////
 //                                     TESTS                                                   //
 /////////////////////////////////////////////////////////////////////////////////////////////////
 // import {
 //   bimObjectManagerService
 // } from "../spinal-env-viewer-bim-manager-service";
 // import AddBtnFunction from "../spinal-env-viewer-plugin-filter";
 // window.tests = {
 //   bimObjectManagerService: bimObjectManagerService,
 // }
 // document.onreadystatechange = () => {
 //   console.log("state", document.readyState)
 //   if (document.readyState === 'complete') {
 //     AddBtnFunction();
 //   }
 // }

},{"./vue/dialogs":"7qxED","./vue/panel":"5Mb2H","./js/event":"9nkln","./buttons":"htaae"}],"7qxED":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextVue = require("./create/createContext.vue");
var _createContextVueDefault = parcelHelpers.interopDefault(_createContextVue);
var _createCategoryVue = require("./create/createCategory.vue");
var _createCategoryVueDefault = parcelHelpers.interopDefault(_createCategoryVue);
var _createGroupVue = require("./create/createGroup.vue");
var _createGroupVueDefault = parcelHelpers.interopDefault(_createGroupVue);
var _colorDialogVue = require("./color/colorDialog.vue");
var _colorDialogVueDefault = parcelHelpers.interopDefault(_colorDialogVue);
var _linkToGroupVue = require("./linkToGroup/linkToGroup.vue");
var _linkToGroupVueDefault = parcelHelpers.interopDefault(_linkToGroupVue);
var _selectTypeDialogVue = require("./selectTypeDialog.vue");
var _selectTypeDialogVueDefault = parcelHelpers.interopDefault(_selectTypeDialogVue);
var _linkBimObjectToGroupVue = require("./linkToGroup/linkBimObjectToGroup.vue");
var _linkBimObjectToGroupVueDefault = parcelHelpers.interopDefault(_linkBimObjectToGroupVue);
const { SpinalMountExtention } = require("2aefec3a7efcfe09");
const dialogs = [
    {
        name: "linkToGroupDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkToGroupVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "addBimObjectToGroupDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkBimObjectToGroupVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createGroupContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createCategoryDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createCategoryVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createGroupDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createGroupVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "colorConfigDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _colorDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "selectGroupTypeDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _selectTypeDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","2aefec3a7efcfe09":"egTXY","./create/createContext.vue":"7Q1g7","./create/createCategory.vue":"irWZI","./create/createGroup.vue":"k5xxv","./color/colorDialog.vue":"dGVuU","./linkToGroup/linkToGroup.vue":"cxB8c","./selectTypeDialog.vue":"2JX7D","./linkToGroup/linkBimObjectToGroup.vue":"hTY9G","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"7Q1g7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ed8bab4a4a83ac47");
    if (script.__esModule) script = script.default;
    script.render = require("ec9e9d020d7f4bcb").render;
    script.staticRenderFns = require("ec9e9d020d7f4bcb").staticRenderFns;
    script._scopeId = "data-v-4c8161";
    script.__cssModules = require("10daee165ae01077").default;
    require("af8ebc840a21556").default(script);
    script.__scopeId = 'data-v-4c8161';
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"ed8bab4a4a83ac47":"gI9Zp","ec9e9d020d7f4bcb":"eonAk","10daee165ae01077":"5yfhK","af8ebc840a21556":"lcves","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gI9Zp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventJs = require("../../../js/event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _typesJs = require("../../../js/types.js");
var _typesJsDefault = parcelHelpers.interopDefault(_typesJs);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var scriptExports = {
    name: "createGroupContextDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.GroupTypes = (0, _typesJsDefault.default);
        return {
            showDialog: true,
            title: "",
            inputValue: "",
            typeSelected: (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE,
            pre: {
                selected: false,
                type: undefined
            },
            callback: ()=>{}
        };
    },
    methods: {
        opened (option) {
            this.title = option.title;
            if (option.typePreselected) {
                this.pre.selected = true;
                this.pre.type = option.typePreselected;
            } else {
                this.pre.selected = false;
                this.pre.type = undefined;
            }
            if (option.callback) this.callback = option.callback;
        },
        removed (closed) {
            if (closed) {
                let value = this.inputValue.trim();
                if (this.pre.selected) this.typeSelected = this.pre.type;
                (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).createGroupContext(value, this.typeSelected).then((_res)=>{
                    this.sentEvent(_res.info.id.get());
                });
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        sentEvent (id) {
            if (this.callback && typeof this.callback === "function") this.callback(id);
            (0, _eventJsDefault.default).$emit("itemCreated", id);
        },
        isDisabled () {
            return this.inputValue.trim().length === 0;
        }
    },
    filters: {
        toUpperCase: function(data) {
            return data.toUpperCase();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/event.js":"9nkln","../../../js/types.js":"9su3e","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9nkln":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9su3e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants1 = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
// import { spinalAnalyticService } from "spinal-env-viewer-plugin-analytics-service";
exports.default = [
    {
        name: "Geographic Context Group",
        type: (0, _constants.CONTEXT_TYPE)
    },
    {
        name: "Site Group",
        type: (0, _constants.SITE_TYPE)
    },
    {
        name: "Building Group",
        type: (0, _constants.BUILDING_TYPE)
    },
    {
        name: "Floor Group",
        type: (0, _constants.FLOOR_TYPE)
    },
    {
        name: "Zone Group",
        type: (0, _constants.ZONE_TYPE)
    },
    {
        name: "Rooms Group",
        type: (0, _constants.ROOM_TYPE)
    },
    {
        name: "Equipments Group",
        type: (0, _constants.EQUIPMENT_TYPE)
    },
    {
        name: "Endpoint Group",
        type: (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName
    },
    {
        name: "Device Group",
        type: (0, _spinalModelBmsnetwork.SpinalBmsDevice).nodeTypeName
    },
    {
        name: "Network Group",
        type: (0, _spinalModelBmsnetwork.SpinalBmsNetwork).nodeTypeName
    },
    {
        name: "EndpointGroup Group",
        type: (0, _spinalModelBmsnetwork.SpinalBmsEndpointGroup).nodeTypeName
    },
    {
        name: "Note Group",
        type: (0, _constants1.NOTE_TYPE)
    },
    {
        name: "Agenda Group",
        type: (0, _spinalEnvViewerTaskService.EVENT_TYPE)
    },
    {
        name: "Control Points group",
        type: (0, _spinalEnvViewerPluginControlEndpointService.spinalControlPointService).CONTROL_POINT_TYPE
    },
    {
        name: "Analytics group",
        type: "Analytic" // spinalAnalyticService.nodeType
    }
];

},{"spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"eODeB","spinal-env-viewer-task-service":"hSwN9","spinal-env-viewer-plugin-control-endpoint-service":"lck20","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eonAk":[function(require,module,exports,__globalThis) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContainer"
        }, [
            _c('div', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Name")
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
                ], 1),
                _vm._v(" "),
                !_vm.pre.selected ? _c('div', [
                    _c('span', {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Choose :")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.GroupTypes, function(t, index) {
                        return _c('md-radio', {
                            key: index,
                            staticClass: "md-primary",
                            attrs: {
                                "value": t.type
                            },
                            model: {
                                value: _vm.typeSelected,
                                callback: function($$v) {
                                    _vm.typeSelected = $$v;
                                },
                                expression: "typeSelected"
                            }
                        }, [
                            _vm._v(_vm._s(t.name))
                        ]);
                    })
                ], 2) : _c('div', [
                    _vm._v("type selected : " + _vm._s(_vm.pre.type))
                ])
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
                    "disabled": _vm.isDisabled()
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

},{}],"5yfhK":[function() {},{}],"lcves":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"irWZI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("61bacb5dacde0e75");
    if (script.__esModule) script = script.default;
    script.render = require("c24a548c376729f2").render;
    script.staticRenderFns = require("c24a548c376729f2").staticRenderFns;
    script._scopeId = "data-v-723a9b";
    require("566b53e63bcecc4").default(script);
    script.__scopeId = 'data-v-723a9b';
    script.__file = "createCategory.vue";
};
initialize();
exports.default = script;

},{"61bacb5dacde0e75":"5BroR","c24a548c376729f2":"IaAnG","566b53e63bcecc4":"iQ8kZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5BroR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsComponentsVue = require("./iconsComponents.vue");
var _iconsComponentsVueDefault = parcelHelpers.interopDefault(_iconsComponentsVue);
var _eventJs = require("../../../js/event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var scriptExports = {
    name: "createCategoryDialog",
    props: [
        "onFinised"
    ],
    components: {
        "icon-component": (0, _iconsComponentsVueDefault.default)
    },
    data () {
        this.edit;
        return {
            showDialog: true,
            iconSelected: undefined,
            title: "",
            inputValue: "",
            selectedNode: undefined,
            contextId: null,
            callback: ()=>{}
        };
    },
    methods: {
        opened (option) {
            this.edit = option.edit;
            this.title = option.title;
            this.contextId = option.contextId;
            this.selectedNode = option.selectedNode.id.get();
            this.iconSelected = "3d_rotation";
            if (this.edit) {
                this.inputValue = option.selectedNode.name.get();
                this.iconSelected = option.iconSelected;
            }
            if (option.callback) this.callback = option.callback;
        },
        removed (closed) {
            if (closed) this.createElement().then((result)=>{
                this.sentEvent(result.info.id.get());
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        sentEvent (id) {
            if (this.callback && typeof this.callback === "function") this.callback(id);
            (0, _eventJsDefault.default).$emit("itemCreated", id);
        },
        selectIcon (icon) {
            this.iconSelected = icon;
        },
        createElement () {
            if (!this.edit) return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addCategory(this.contextId, this.inputValue.trim(), this.iconSelected);
            else return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).updateCategory(this.selectedNode, {
                name: this.inputValue.trim(),
                icon: this.iconSelected
            });
        },
        isDisabled () {
            return this.inputValue.trim().length === 0 || typeof this.iconSelected === "undefined";
        }
    },
    filters: {
        toUpperCase: function(data) {
            return data.toUpperCase();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./iconsComponents.vue":"4pRui","../../../js/event.js":"9nkln","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4pRui":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fcbb8d61af5c7c07");
    if (script.__esModule) script = script.default;
    script.render = require("2c5c5bcba6efac90").render;
    script.staticRenderFns = require("2c5c5bcba6efac90").staticRenderFns;
    script._scopeId = "data-v-8bf9bc";
    script.__cssModules = require("22ba047d630f6c4c").default;
    require("a39638afa74bb65a").default(script);
    script.__scopeId = 'data-v-8bf9bc';
    script.__file = "iconsComponents.vue";
};
initialize();
exports.default = script;

},{"fcbb8d61af5c7c07":"4ymGy","2c5c5bcba6efac90":"lqjfk","22ba047d630f6c4c":"4j5J0","a39638afa74bb65a":"hLBS3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4ymGy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsJson = require("../../../js/icons.json");
var _iconsJsonDefault = parcelHelpers.interopDefault(_iconsJson);
var scriptExports = {
    name: "iconComponent",
    props: {
        selected: {
            type: String
        }
    },
    data () {
        this.allIcons = Object.values((0, _iconsJsonDefault.default));
        this.categories = this.getAllCategories();
        return {
            iconsDisplayed: Object.values((0, _iconsJsonDefault.default)),
            iconSelected: null,
            categorySelected: "none",
            icons: []
        };
    },
    mounted () {
        if (typeof this.selected !== "undefined") this.iconSelected = this.selected;
    },
    methods: {
        filterIcons () {
            let category = this.categorySelected !== "none" ? this.categorySelected : undefined;
            this.iconsDisplayed = this.getIconsByCategory(category);
        },
        getAllCategories () {
            return this.allIcons.map((el)=>el.name);
        },
        getIconsByCategory (categoryName) {
            if (typeof categoryName !== "undefined") {
                let category = this.allIcons.find((el)=>el.name === categoryName);
                if (typeof category !== "undefined") return [
                    category
                ];
            } else return this.allIcons;
            return [];
        },
        selectIcon (icon) {
            this.iconSelected = icon;
            this.$emit("selectIcon", icon);
        },
        isSelected (icon) {
            return this.iconSelected === icon;
        },
        getIcons (searchTerm) {
            this.icons = new Promise((resolve)=>{
                setTimeout(()=>{
                    let icons = this.iconsNames();
                    if (!searchTerm) resolve(icons);
                    else {
                        const term = searchTerm.toLowerCase();
                        resolve(icons.filter((el)=>el.toLowerCase().includes(term)));
                    }
                }, 500);
            });
        },
        iconsNames () {
            if (!this.allIcons) return [];
            return this.allIcons.reduce((arr, item)=>{
                arr.push(...item.icons.map((el)=>el.id));
                return arr;
            }, []);
        }
    },
    watch: {
        categorySelected: function() {
            this.filterIcons();
        },
        selected () {
            this.iconSelected = this.selected;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/icons.json":"6ZHha","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6ZHha":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("[{\"icons\":[{\"id\":\"3d_rotation\"},{\"id\":\"accessibility\"},{\"id\":\"accessibility_new\"},{\"id\":\"accessible\"},{\"id\":\"accessible_forward\"},{\"id\":\"account_balance\"},{\"id\":\"account_balance_wallet\"},{\"id\":\"account_box\"},{\"id\":\"account_circle\"},{\"id\":\"add_shopping_cart\"},{\"id\":\"alarm\"},{\"id\":\"alarm_add\"},{\"id\":\"alarm_off\"},{\"id\":\"alarm_on\"},{\"id\":\"all_inbox\"},{\"id\":\"all_out\"},{\"id\":\"android\"},{\"id\":\"announcement\"},{\"id\":\"arrow_right_alt\"},{\"id\":\"aspect_ratio\"},{\"id\":\"assessment\"},{\"id\":\"assignment\"},{\"id\":\"assignment_ind\"},{\"id\":\"assignment_late\"},{\"id\":\"assignment_return\"},{\"id\":\"assignment_returned\"},{\"id\":\"assignment_turned_in\"},{\"id\":\"autorenew\"},{\"id\":\"backup\"},{\"id\":\"book\"},{\"id\":\"bookmark\"},{\"id\":\"bookmark_border\"},{\"id\":\"bookmarks\"},{\"id\":\"bug_report\"},{\"id\":\"build\"},{\"id\":\"cached\"},{\"id\":\"calendar_today\"},{\"id\":\"calendar_view_day\"},{\"id\":\"camera_enhance\"},{\"id\":\"card_giftcard\"},{\"id\":\"card_membership\"},{\"id\":\"card_travel\"},{\"id\":\"change_history\"},{\"id\":\"check_circle\"},{\"id\":\"check_circle_outline\"},{\"id\":\"chrome_reader_mode\"},{\"id\":\"class\"},{\"id\":\"code\"},{\"id\":\"commute\"},{\"id\":\"compare_arrows\"},{\"id\":\"contact_support\"},{\"id\":\"copyright\"},{\"id\":\"credit_card\"},{\"id\":\"dashboard\"},{\"id\":\"date_range\"},{\"id\":\"delete\"},{\"id\":\"delete_forever\"},{\"id\":\"delete_outline\"},{\"id\":\"description\"},{\"id\":\"dns\"},{\"id\":\"done\"},{\"id\":\"done_all\"},{\"id\":\"done_outline\"},{\"id\":\"donut_large\"},{\"id\":\"donut_small\"},{\"id\":\"drag_indicator\"},{\"id\":\"eject\"},{\"id\":\"euro_symbol\"},{\"id\":\"event\"},{\"id\":\"event_seat\"},{\"id\":\"exit_to_app\"},{\"id\":\"explore\"},{\"id\":\"explore_off\"},{\"id\":\"extension\"},{\"id\":\"face\"},{\"id\":\"favorite\"},{\"id\":\"favorite_border\"},{\"id\":\"feedback\"},{\"id\":\"find_in_page\"},{\"id\":\"find_replace\"},{\"id\":\"fingerprint\"},{\"id\":\"flight_land\"},{\"id\":\"flight_takeoff\"},{\"id\":\"flip_to_back\"},{\"id\":\"flip_to_front\"},{\"id\":\"g_translate\"},{\"id\":\"gavel\"},{\"id\":\"get_app\"},{\"id\":\"gif\"},{\"id\":\"grade\"},{\"id\":\"group_work\"},{\"id\":\"help\"},{\"id\":\"help_outline\"},{\"id\":\"highlight_off\"},{\"id\":\"history\"},{\"id\":\"home\"},{\"id\":\"horizontal_split\"},{\"id\":\"hourglass_empty\"},{\"id\":\"hourglass_full\"},{\"id\":\"http\"},{\"id\":\"https\"},{\"id\":\"important_devices\"},{\"id\":\"info\"},{\"id\":\"input\"},{\"id\":\"invert_colors\"},{\"id\":\"label\"},{\"id\":\"label_important\"},{\"id\":\"label_off\"},{\"id\":\"language\"},{\"id\":\"launch\"},{\"id\":\"line_style\"},{\"id\":\"line_weight\"},{\"id\":\"list\"},{\"id\":\"lock\"},{\"id\":\"lock_open\"},{\"id\":\"loyalty\"},{\"id\":\"markunread_mailbox\"},{\"id\":\"maximize\"},{\"id\":\"minimize\"},{\"id\":\"motorcycle\"},{\"id\":\"note_add\"},{\"id\":\"offline_bolt\"},{\"id\":\"offline_pin\"},{\"id\":\"opacity\"},{\"id\":\"open_in_browser\"},{\"id\":\"open_in_new\"},{\"id\":\"open_with\"},{\"id\":\"pageview\"},{\"id\":\"pan_tool\"},{\"id\":\"payment\"},{\"id\":\"perm_camera_mic\"},{\"id\":\"perm_contact_calendar\"},{\"id\":\"perm_data_setting\"},{\"id\":\"perm_device_information\"},{\"id\":\"perm_identity\"},{\"id\":\"perm_media\"},{\"id\":\"perm_phone_msg\"},{\"id\":\"perm_scan_wifi\"},{\"id\":\"pets\"},{\"id\":\"picture_in_picture\"},{\"id\":\"picture_in_picture_alt\"},{\"id\":\"play_for_work\"},{\"id\":\"polymer\"},{\"id\":\"power_settings_new\"},{\"id\":\"pregnant_woman\"},{\"id\":\"print\"},{\"id\":\"query_builder\"},{\"id\":\"question_answer\"},{\"id\":\"receipt\"},{\"id\":\"record_voice_over\"},{\"id\":\"redeem\"},{\"id\":\"remove_shopping_cart\"},{\"id\":\"reorder\"},{\"id\":\"report_problem\"},{\"id\":\"restore\"},{\"id\":\"restore_from_trash\"},{\"id\":\"restore_page\"},{\"id\":\"room\"},{\"id\":\"rounded_corner\"},{\"id\":\"rowing\"},{\"id\":\"schedule\"},{\"id\":\"search\"},{\"imageUrls\":{\"twotone\":\"twotone-settings-24px.svg\",\"sharp\":\"sharp-settings-24px.svg\",\"outline\":\"outline-settings-24px.svg\",\"round\":\"round-settings-24px.svg\",\"baseline\":\"baseline-settings-20px.svg\"},\"id\":\"settings\"},{\"id\":\"settings_applications\"},{\"id\":\"settings_backup_restore\"},{\"id\":\"settings_bluetooth\"},{\"id\":\"settings_brightness\"},{\"id\":\"settings_cell\"},{\"id\":\"settings_ethernet\"},{\"id\":\"settings_input_antenna\"},{\"id\":\"settings_input_component\"},{\"id\":\"settings_input_composite\"},{\"id\":\"settings_input_hdmi\"},{\"id\":\"settings_input_svideo\"},{\"id\":\"settings_overscan\"},{\"id\":\"settings_phone\"},{\"id\":\"settings_power\"},{\"id\":\"settings_remote\"},{\"id\":\"settings_voice\"},{\"id\":\"shop\"},{\"id\":\"shop_two\"},{\"id\":\"shopping_basket\"},{\"id\":\"shopping_cart\"},{\"id\":\"speaker_notes\"},{\"id\":\"speaker_notes_off\"},{\"id\":\"spellcheck\"},{\"imageUrls\":{\"twotone\":\"twotone-star_rate-18px.svg\",\"sharp\":\"sharp-star_rate-18px.svg\",\"outline\":\"outline-star_rate-18px.svg\",\"round\":\"round-star_rate-18px.svg\",\"baseline\":\"baseline-star_rate-18px.svg\"},\"id\":\"star_rate\"},{\"id\":\"stars\"},{\"id\":\"store\"},{\"id\":\"subject\"},{\"id\":\"supervised_user_circle\"},{\"id\":\"supervisor_account\"},{\"id\":\"swap_horiz\"},{\"id\":\"swap_horizontal_circle\"},{\"id\":\"swap_vert\"},{\"id\":\"swap_vertical_circle\"},{\"id\":\"tab\"},{\"id\":\"tab_unselected\"},{\"id\":\"text_rotate_up\"},{\"id\":\"text_rotate_vertical\"},{\"id\":\"text_rotation_down\"},{\"id\":\"text_rotation_none\"},{\"id\":\"theaters\"},{\"id\":\"thumb_down\"},{\"id\":\"thumb_up\"},{\"id\":\"thumbs_up_down\"},{\"id\":\"timeline\"},{\"id\":\"toc\"},{\"id\":\"today\"},{\"id\":\"toll\"},{\"id\":\"touch_app\"},{\"id\":\"track_changes\"},{\"id\":\"translate\"},{\"id\":\"trending_down\"},{\"id\":\"trending_flat\"},{\"id\":\"trending_up\"},{\"id\":\"turned_in\"},{\"id\":\"turned_in_not\"},{\"id\":\"update\"},{\"id\":\"verified_user\"},{\"id\":\"vertical_split\"},{\"id\":\"view_agenda\"},{\"id\":\"view_array\"},{\"id\":\"view_carousel\"},{\"id\":\"view_column\"},{\"id\":\"view_day\"},{\"id\":\"view_headline\"},{\"id\":\"view_list\"},{\"id\":\"view_module\"},{\"id\":\"view_quilt\"},{\"id\":\"view_stream\"},{\"id\":\"view_week\"},{\"id\":\"visibility\"},{\"id\":\"visibility_off\"},{\"id\":\"voice_over_off\"},{\"id\":\"watch_later\"},{\"id\":\"work\"},{\"id\":\"work_off\"},{\"id\":\"work_outline\"},{\"id\":\"youtube_searched_for\"},{\"id\":\"zoom_in\"},{\"id\":\"zoom_out\"}],\"name\":\"action\"},{\"icons\":[{\"id\":\"add_alert\"},{\"id\":\"error\"},{\"id\":\"error_outline\"},{\"id\":\"notification_important\"},{\"id\":\"warning\"}],\"name\":\"alert\"},{\"icons\":[{\"id\":\"4k\"},{\"id\":\"add_to_queue\"},{\"id\":\"airplay\"},{\"id\":\"album\"},{\"id\":\"art_track\"},{\"id\":\"av_timer\"},{\"id\":\"branding_watermark\"},{\"id\":\"call_to_action\"},{\"id\":\"closed_caption\"},{\"id\":\"control_camera\"},{\"id\":\"equalizer\"},{\"id\":\"explicit\"},{\"id\":\"fast_forward\"},{\"id\":\"fast_rewind\"},{\"id\":\"featured_play_list\"},{\"id\":\"featured_video\"},{\"id\":\"fiber_dvr\"},{\"id\":\"fiber_manual_record\"},{\"id\":\"fiber_new\"},{\"id\":\"fiber_pin\"},{\"id\":\"fiber_smart_record\"},{\"id\":\"forward_10\"},{\"id\":\"forward_30\"},{\"id\":\"forward_5\"},{\"id\":\"games\"},{\"id\":\"hd\"},{\"id\":\"hearing\"},{\"id\":\"high_quality\"},{\"id\":\"library_add\"},{\"id\":\"library_books\"},{\"id\":\"library_music\"},{\"id\":\"loop\"},{\"id\":\"mic\"},{\"id\":\"mic_none\"},{\"id\":\"mic_off\"},{\"id\":\"missed_video_call\"},{\"id\":\"movie\"},{\"id\":\"music_video\"},{\"id\":\"new_releases\"},{\"id\":\"not_interested\"},{\"id\":\"note\"},{\"id\":\"pause\"},{\"id\":\"pause_circle_filled\"},{\"id\":\"pause_circle_outline\"},{\"id\":\"play_arrow\"},{\"id\":\"play_circle_filled\"},{\"imageUrls\":{\"twotone\":\"twotone-play_circle_filled_white-24px.svg\",\"sharp\":\"sharp-play_circle_filled_white-24px.svg\",\"outline\":\"outline-play_circle_filled_white-24px.svg\",\"round\":\"round-play_circle_filled_white-24px.svg\",\"baseline\":\"baseline-play_circle_filled_white-48px.svg\"},\"id\":\"play_circle_filled_white\"},{\"id\":\"play_circle_outline\"},{\"id\":\"playlist_add\"},{\"id\":\"playlist_add_check\"},{\"id\":\"playlist_play\"},{\"id\":\"queue\"},{\"id\":\"queue_music\"},{\"id\":\"queue_play_next\"},{\"id\":\"radio\"},{\"id\":\"recent_actors\"},{\"id\":\"remove_from_queue\"},{\"id\":\"repeat\"},{\"id\":\"repeat_one\"},{\"id\":\"replay\"},{\"id\":\"replay_10\"},{\"id\":\"replay_30\"},{\"id\":\"replay_5\"},{\"id\":\"shuffle\"},{\"id\":\"skip_next\"},{\"id\":\"skip_previous\"},{\"id\":\"slow_motion_video\"},{\"id\":\"snooze\"},{\"id\":\"sort_by_alpha\"},{\"id\":\"stop\"},{\"id\":\"subscriptions\"},{\"id\":\"subtitles\"},{\"id\":\"surround_sound\"},{\"id\":\"video_call\"},{\"id\":\"video_label\"},{\"id\":\"video_library\"},{\"id\":\"videocam\"},{\"id\":\"videocam_off\"},{\"id\":\"volume_down\"},{\"id\":\"volume_mute\"},{\"id\":\"volume_off\"},{\"id\":\"volume_up\"},{\"id\":\"web\"},{\"id\":\"web_asset\"}],\"name\":\"av\"},{\"icons\":[{\"id\":\"alternate_email\"},{\"id\":\"business\"},{\"id\":\"call\"},{\"id\":\"call_end\"},{\"id\":\"call_made\"},{\"id\":\"call_merge\"},{\"id\":\"call_missed\"},{\"id\":\"call_missed_outgoing\"},{\"id\":\"call_received\"},{\"id\":\"call_split\"},{\"id\":\"cancel_presentation\"},{\"id\":\"cell_wifi\"},{\"id\":\"chat\"},{\"id\":\"chat_bubble\"},{\"id\":\"chat_bubble_outline\"},{\"id\":\"clear_all\"},{\"id\":\"comment\"},{\"id\":\"contact_mail\"},{\"id\":\"contact_phone\"},{\"id\":\"contacts\"},{\"id\":\"desktop_access_disabled\"},{\"id\":\"dialer_sip\"},{\"id\":\"dialpad\"},{\"id\":\"domain_disabled\"},{\"id\":\"duo\"},{\"id\":\"email\"},{\"id\":\"forum\"},{\"id\":\"import_contacts\"},{\"id\":\"import_export\"},{\"id\":\"invert_colors_off\"},{\"id\":\"list_alt\"},{\"id\":\"live_help\"},{\"id\":\"location_off\"},{\"id\":\"location_on\"},{\"id\":\"mail_outline\"},{\"id\":\"message\"},{\"id\":\"mobile_screen_share\"},{\"id\":\"no_sim\"},{\"id\":\"pause_presentation\"},{\"id\":\"person_add_disabled\"},{\"id\":\"phone\"},{\"id\":\"phonelink_erase\"},{\"id\":\"phonelink_lock\"},{\"id\":\"phonelink_ring\"},{\"id\":\"phonelink_setup\"},{\"id\":\"portable_wifi_off\"},{\"id\":\"present_to_all\"},{\"id\":\"print_disabled\"},{\"id\":\"ring_volume\"},{\"id\":\"rss_feed\"},{\"id\":\"screen_share\"},{\"id\":\"sentiment_satisfied_alt\"},{\"id\":\"speaker_phone\"},{\"id\":\"stay_current_landscape\"},{\"id\":\"stay_current_portrait\"},{\"id\":\"stay_primary_landscape\"},{\"id\":\"stay_primary_portrait\"},{\"id\":\"stop_screen_share\"},{\"id\":\"swap_calls\"},{\"id\":\"textsms\"},{\"id\":\"unsubscribe\"},{\"id\":\"voicemail\"},{\"id\":\"vpn_key\"}],\"name\":\"communication\"},{\"icons\":[{\"id\":\"add\"},{\"id\":\"add_box\"},{\"id\":\"add_circle\"},{\"id\":\"add_circle_outline\"},{\"id\":\"archive\"},{\"id\":\"backspace\"},{\"id\":\"ballot\"},{\"id\":\"block\"},{\"id\":\"clear\"},{\"id\":\"create\"},{\"id\":\"delete_sweep\"},{\"id\":\"drafts\"},{\"id\":\"file_copy\"},{\"id\":\"filter_list\"},{\"id\":\"flag\"},{\"id\":\"font_download\"},{\"id\":\"forward\"},{\"id\":\"gesture\"},{\"id\":\"how_to_reg\"},{\"id\":\"how_to_vote\"},{\"id\":\"inbox\"},{\"id\":\"link\"},{\"id\":\"link_off\"},{\"id\":\"low_priority\"},{\"id\":\"mail\"},{\"id\":\"markunread\"},{\"id\":\"move_to_inbox\"},{\"id\":\"next_week\"},{\"id\":\"outlined_flag\"},{\"id\":\"redo\"},{\"id\":\"remove\"},{\"id\":\"remove_circle\"},{\"id\":\"remove_circle_outline\"},{\"id\":\"reply\"},{\"id\":\"reply_all\"},{\"id\":\"report\"},{\"id\":\"report_off\"},{\"id\":\"save\"},{\"id\":\"save_alt\"},{\"id\":\"select_all\"},{\"id\":\"send\"},{\"id\":\"sort\"},{\"id\":\"text_format\"},{\"id\":\"unarchive\"},{\"id\":\"undo\"},{\"id\":\"waves\"},{\"imageUrls\":{\"twotone\":\"twotone-weekend-24px.svg\",\"sharp\":\"sharp-weekend-24px.svg\",\"outline\":\"outline-weekend-24px.svg\",\"round\":\"round-weekend-24px.svg\",\"baseline\":\"baseline-weekend-48px.svg\"},\"id\":\"weekend\"},{\"id\":\"where_to_vote\"}],\"name\":\"content\"},{\"icons\":[{\"id\":\"access_alarm\"},{\"id\":\"access_alarms\"},{\"id\":\"access_time\"},{\"id\":\"add_alarm\"},{\"id\":\"add_to_home_screen\"},{\"id\":\"airplanemode_active\"},{\"id\":\"airplanemode_inactive\"},{\"id\":\"battery_20\"},{\"id\":\"battery_30\"},{\"id\":\"battery_50\"},{\"id\":\"battery_60\"},{\"id\":\"battery_80\"},{\"id\":\"battery_90\"},{\"id\":\"battery_alert\"},{\"id\":\"battery_charging_20\"},{\"id\":\"battery_charging_30\"},{\"id\":\"battery_charging_50\"},{\"id\":\"battery_charging_60\"},{\"id\":\"battery_charging_80\"},{\"id\":\"battery_charging_90\"},{\"id\":\"battery_charging_full\"},{\"id\":\"battery_full\"},{\"id\":\"battery_std\"},{\"id\":\"battery_unknown\"},{\"id\":\"bluetooth\"},{\"id\":\"bluetooth_connected\"},{\"id\":\"bluetooth_disabled\"},{\"id\":\"bluetooth_searching\"},{\"id\":\"brightness_auto\"},{\"id\":\"brightness_high\"},{\"id\":\"brightness_low\"},{\"id\":\"brightness_medium\"},{\"id\":\"data_usage\"},{\"id\":\"developer_mode\"},{\"id\":\"devices\"},{\"id\":\"dvr\"},{\"id\":\"gps_fixed\"},{\"id\":\"gps_not_fixed\"},{\"id\":\"gps_off\"},{\"id\":\"graphic_eq\"},{\"id\":\"location_disabled\"},{\"id\":\"location_searching\"},{\"id\":\"mobile_friendly\"},{\"id\":\"mobile_off\"},{\"id\":\"network_cell\"},{\"id\":\"network_wifi\"},{\"id\":\"nfc\"},{\"id\":\"screen_lock_landscape\"},{\"id\":\"screen_lock_portrait\"},{\"id\":\"screen_lock_rotation\"},{\"id\":\"screen_rotation\"},{\"id\":\"sd_storage\"},{\"id\":\"settings_system_daydream\"},{\"id\":\"signal_cellular_0_bar\"},{\"id\":\"signal_cellular_1_bar\"},{\"id\":\"signal_cellular_2_bar\"},{\"id\":\"signal_cellular_3_bar\"},{\"id\":\"signal_cellular_4_bar\"},{\"id\":\"signal_cellular_alt\"},{\"id\":\"signal_cellular_connected_no_internet_0_bar\"},{\"id\":\"signal_cellular_connected_no_internet_1_bar\"},{\"id\":\"signal_cellular_connected_no_internet_2_bar\"},{\"id\":\"signal_cellular_connected_no_internet_3_bar\"},{\"id\":\"signal_cellular_connected_no_internet_4_bar\"},{\"id\":\"signal_cellular_no_sim\"},{\"id\":\"signal_cellular_null\"},{\"id\":\"signal_cellular_off\"},{\"id\":\"signal_wifi_0_bar\"},{\"id\":\"signal_wifi_1_bar\"},{\"id\":\"signal_wifi_1_bar_lock\"},{\"id\":\"signal_wifi_2_bar\"},{\"id\":\"signal_wifi_2_bar_lock\"},{\"id\":\"signal_wifi_3_bar\"},{\"id\":\"signal_wifi_3_bar_lock\"},{\"id\":\"signal_wifi_4_bar\"},{\"id\":\"signal_wifi_4_bar_lock\"},{\"id\":\"signal_wifi_off\"},{\"id\":\"storage\"},{\"id\":\"usb\"},{\"id\":\"wallpaper\"},{\"id\":\"widgets\"},{\"id\":\"wifi_lock\"},{\"id\":\"wifi_tethering\"}],\"name\":\"device\"},{\"icons\":[{\"id\":\"add_comment\"},{\"id\":\"attach_file\"},{\"id\":\"attach_money\"},{\"id\":\"bar_chart\"},{\"id\":\"border_all\"},{\"id\":\"border_bottom\"},{\"id\":\"border_clear\"},{\"id\":\"border_color\"},{\"id\":\"border_horizontal\"},{\"id\":\"border_inner\"},{\"id\":\"border_left\"},{\"id\":\"border_outer\"},{\"id\":\"border_right\"},{\"id\":\"border_style\"},{\"id\":\"border_top\"},{\"id\":\"border_vertical\"},{\"id\":\"bubble_chart\"},{\"id\":\"drag_handle\"},{\"id\":\"format_align_center\"},{\"id\":\"format_align_justify\"},{\"id\":\"format_align_left\"},{\"id\":\"format_align_right\"},{\"id\":\"format_bold\"},{\"id\":\"format_clear\"},{\"id\":\"format_color_fill\"},{\"id\":\"format_color_reset\"},{\"id\":\"format_color_text\"},{\"id\":\"format_indent_decrease\"},{\"id\":\"format_indent_increase\"},{\"id\":\"format_italic\"},{\"id\":\"format_line_spacing\"},{\"id\":\"format_list_bulleted\"},{\"id\":\"format_list_numbered\"},{\"id\":\"format_list_numbered_rtl\"},{\"id\":\"format_paint\"},{\"id\":\"format_quote\"},{\"id\":\"format_shapes\"},{\"id\":\"format_size\"},{\"id\":\"format_strikethrough\"},{\"id\":\"format_textdirection_l_to_r\"},{\"id\":\"format_textdirection_r_to_l\"},{\"id\":\"format_underlined\"},{\"id\":\"functions\"},{\"id\":\"highlight\"},{\"id\":\"insert_chart\"},{\"id\":\"insert_chart_outlined\"},{\"id\":\"insert_comment\"},{\"id\":\"insert_drive_file\"},{\"id\":\"insert_emoticon\"},{\"id\":\"insert_invitation\"},{\"id\":\"insert_link\"},{\"id\":\"insert_photo\"},{\"id\":\"linear_scale\"},{\"id\":\"merge_type\"},{\"id\":\"mode_comment\"},{\"id\":\"monetization_on\"},{\"id\":\"money_off\"},{\"id\":\"multiline_chart\"},{\"id\":\"notes\"},{\"id\":\"pie_chart\"},{\"id\":\"publish\"},{\"id\":\"scatter_plot\"},{\"id\":\"score\"},{\"id\":\"short_text\"},{\"id\":\"show_chart\"},{\"id\":\"space_bar\"},{\"id\":\"strikethrough_s\"},{\"id\":\"table_chart\"},{\"id\":\"text_fields\"},{\"id\":\"title\"},{\"id\":\"vertical_align_bottom\"},{\"id\":\"vertical_align_center\"},{\"id\":\"vertical_align_top\"},{\"id\":\"wrap_text\"}],\"name\":\"editor\"},{\"icons\":[{\"id\":\"attachment\"},{\"id\":\"cloud\"},{\"id\":\"cloud_circle\"},{\"id\":\"cloud_done\"},{\"id\":\"cloud_download\"},{\"id\":\"cloud_off\"},{\"id\":\"cloud_queue\"},{\"id\":\"cloud_upload\"},{\"id\":\"create_new_folder\"},{\"id\":\"folder\"},{\"id\":\"folder_open\"},{\"id\":\"folder_shared\"}],\"name\":\"file\"},{\"icons\":[{\"id\":\"cast\"},{\"id\":\"cast_connected\"},{\"imageUrls\":{\"twotone\":\"twotone-cast_for_education-24px.svg\",\"sharp\":\"sharp-cast_for_education-24px.svg\",\"outline\":\"outline-cast_for_education-24px.svg\",\"round\":\"round-cast_for_education-24px.svg\",\"baseline\":\"baseline-cast_for_education-48px.svg\"},\"id\":\"cast_for_education\"},{\"id\":\"computer\"},{\"id\":\"desktop_mac\"},{\"id\":\"desktop_windows\"},{\"id\":\"developer_board\"},{\"id\":\"device_hub\"},{\"id\":\"device_unknown\"},{\"id\":\"devices_other\"},{\"id\":\"dock\"},{\"id\":\"gamepad\"},{\"id\":\"headset\"},{\"id\":\"headset_mic\"},{\"id\":\"keyboard\"},{\"id\":\"keyboard_arrow_down\"},{\"id\":\"keyboard_arrow_left\"},{\"id\":\"keyboard_arrow_right\"},{\"id\":\"keyboard_arrow_up\"},{\"id\":\"keyboard_backspace\"},{\"id\":\"keyboard_capslock\"},{\"id\":\"keyboard_hide\"},{\"id\":\"keyboard_return\"},{\"id\":\"keyboard_tab\"},{\"id\":\"keyboard_voice\"},{\"id\":\"laptop\"},{\"id\":\"laptop_chromebook\"},{\"id\":\"laptop_mac\"},{\"id\":\"laptop_windows\"},{\"id\":\"memory\"},{\"id\":\"mouse\"},{\"id\":\"phone_android\"},{\"id\":\"phone_iphone\"},{\"id\":\"phonelink\"},{\"id\":\"phonelink_off\"},{\"id\":\"power_input\"},{\"id\":\"router\"},{\"id\":\"scanner\"},{\"id\":\"security\"},{\"id\":\"sim_card\"},{\"id\":\"smartphone\"},{\"id\":\"speaker\"},{\"id\":\"speaker_group\"},{\"id\":\"tablet\"},{\"id\":\"tablet_android\"},{\"id\":\"tablet_mac\"},{\"id\":\"toys\"},{\"id\":\"tv\"},{\"id\":\"videogame_asset\"},{\"id\":\"watch\"}],\"name\":\"hardware\"},{\"icons\":[{\"id\":\"add_a_photo\"},{\"id\":\"add_photo_alternate\"},{\"id\":\"add_to_photos\"},{\"id\":\"adjust\"},{\"id\":\"assistant\"},{\"id\":\"assistant_photo\"},{\"id\":\"audiotrack\"},{\"id\":\"blur_circular\"},{\"id\":\"blur_linear\"},{\"id\":\"blur_off\"},{\"id\":\"blur_on\"},{\"id\":\"brightness_1\"},{\"id\":\"brightness_2\"},{\"id\":\"brightness_3\"},{\"id\":\"brightness_4\"},{\"id\":\"brightness_5\"},{\"id\":\"brightness_6\"},{\"id\":\"brightness_7\"},{\"id\":\"broken_image\"},{\"id\":\"brush\"},{\"id\":\"burst_mode\"},{\"id\":\"camera\"},{\"id\":\"camera_alt\"},{\"id\":\"camera_front\"},{\"id\":\"camera_rear\"},{\"id\":\"camera_roll\"},{\"id\":\"center_focus_strong\"},{\"id\":\"center_focus_weak\"},{\"id\":\"collections\"},{\"id\":\"collections_bookmark\"},{\"id\":\"color_lens\"},{\"id\":\"colorize\"},{\"id\":\"compare\"},{\"id\":\"control_point\"},{\"id\":\"control_point_duplicate\"},{\"id\":\"crop\"},{\"id\":\"crop_16_9\"},{\"id\":\"crop_3_2\"},{\"id\":\"crop_5_4\"},{\"id\":\"crop_7_5\"},{\"id\":\"crop_din\"},{\"id\":\"crop_free\"},{\"id\":\"crop_landscape\"},{\"id\":\"crop_original\"},{\"id\":\"crop_portrait\"},{\"id\":\"crop_rotate\"},{\"id\":\"crop_square\"},{\"id\":\"dehaze\"},{\"id\":\"details\"},{\"id\":\"edit\"},{\"id\":\"exposure\"},{\"id\":\"exposure_neg_1\"},{\"id\":\"exposure_neg_2\"},{\"id\":\"exposure_plus_1\"},{\"id\":\"exposure_plus_2\"},{\"id\":\"exposure_zero\"},{\"id\":\"filter\"},{\"id\":\"filter_1\"},{\"id\":\"filter_2\"},{\"id\":\"filter_3\"},{\"id\":\"filter_4\"},{\"id\":\"filter_5\"},{\"id\":\"filter_6\"},{\"id\":\"filter_7\"},{\"id\":\"filter_8\"},{\"id\":\"filter_9\"},{\"id\":\"filter_9_plus\"},{\"id\":\"filter_b_and_w\"},{\"id\":\"filter_center_focus\"},{\"id\":\"filter_drama\"},{\"id\":\"filter_frames\"},{\"id\":\"filter_hdr\"},{\"id\":\"filter_none\"},{\"id\":\"filter_tilt_shift\"},{\"id\":\"filter_vintage\"},{\"id\":\"flare\"},{\"id\":\"flash_auto\"},{\"id\":\"flash_off\"},{\"id\":\"flash_on\"},{\"id\":\"flip\"},{\"id\":\"gradient\"},{\"id\":\"grain\"},{\"id\":\"grid_off\"},{\"id\":\"grid_on\"},{\"id\":\"hdr_off\"},{\"id\":\"hdr_on\"},{\"id\":\"hdr_strong\"},{\"id\":\"hdr_weak\"},{\"id\":\"healing\"},{\"id\":\"image\"},{\"id\":\"image_aspect_ratio\"},{\"id\":\"image_search\"},{\"id\":\"iso\"},{\"id\":\"landscape\"},{\"id\":\"leak_add\"},{\"id\":\"leak_remove\"},{\"id\":\"lens\"},{\"id\":\"linked_camera\"},{\"id\":\"looks\"},{\"id\":\"looks_3\"},{\"id\":\"looks_4\"},{\"id\":\"looks_5\"},{\"id\":\"looks_6\"},{\"id\":\"looks_one\"},{\"id\":\"looks_two\"},{\"id\":\"loupe\"},{\"id\":\"monochrome_photos\"},{\"id\":\"movie_creation\"},{\"id\":\"movie_filter\"},{\"id\":\"music_note\"},{\"id\":\"music_off\"},{\"id\":\"nature\"},{\"id\":\"nature_people\"},{\"id\":\"navigate_before\"},{\"id\":\"navigate_next\"},{\"id\":\"palette\"},{\"id\":\"panorama\"},{\"id\":\"panorama_fish_eye\"},{\"id\":\"panorama_horizontal\"},{\"id\":\"panorama_vertical\"},{\"id\":\"panorama_wide_angle\"},{\"id\":\"photo\"},{\"id\":\"photo_album\"},{\"id\":\"photo_camera\"},{\"id\":\"photo_filter\"},{\"id\":\"photo_library\"},{\"id\":\"photo_size_select_actual\"},{\"id\":\"photo_size_select_large\"},{\"id\":\"photo_size_select_small\"},{\"id\":\"picture_as_pdf\"},{\"id\":\"portrait\"},{\"id\":\"remove_red_eye\"},{\"id\":\"rotate_90_degrees_ccw\"},{\"id\":\"rotate_left\"},{\"id\":\"rotate_right\"},{\"id\":\"shutter_speed\"},{\"id\":\"slideshow\"},{\"id\":\"straighten\"},{\"id\":\"style\"},{\"id\":\"switch_camera\"},{\"id\":\"switch_video\"},{\"id\":\"tag_faces\"},{\"id\":\"texture\"},{\"id\":\"timelapse\"},{\"id\":\"timer\"},{\"id\":\"timer_10\"},{\"id\":\"timer_3\"},{\"id\":\"timer_off\"},{\"id\":\"tonality\"},{\"id\":\"transform\"},{\"id\":\"tune\"},{\"id\":\"view_comfy\"},{\"id\":\"view_compact\"},{\"id\":\"vignette\"},{\"id\":\"wb_auto\"},{\"id\":\"wb_cloudy\"},{\"id\":\"wb_incandescent\"},{\"id\":\"wb_iridescent\"},{\"id\":\"wb_sunny\"}],\"name\":\"image\"},{\"icons\":[{\"id\":\"360\"},{\"id\":\"add_location\"},{\"id\":\"atm\"},{\"id\":\"beenhere\"},{\"id\":\"category\"},{\"id\":\"compass_calibration\"},{\"id\":\"departure_board\"},{\"id\":\"directions\"},{\"id\":\"directions_bike\"},{\"id\":\"directions_boat\"},{\"id\":\"directions_bus\"},{\"id\":\"directions_car\"},{\"id\":\"directions_railway\"},{\"id\":\"directions_run\"},{\"id\":\"directions_subway\"},{\"id\":\"directions_transit\"},{\"id\":\"directions_walk\"},{\"id\":\"edit_attributes\"},{\"id\":\"edit_location\"},{\"id\":\"ev_station\"},{\"id\":\"fastfood\"},{\"id\":\"flight\"},{\"id\":\"hotel\"},{\"id\":\"layers\"},{\"id\":\"layers_clear\"},{\"id\":\"local_activity\"},{\"id\":\"local_airport\"},{\"id\":\"local_atm\"},{\"id\":\"local_bar\"},{\"id\":\"local_cafe\"},{\"id\":\"local_car_wash\"},{\"id\":\"local_convenience_store\"},{\"id\":\"local_dining\"},{\"id\":\"local_drink\"},{\"id\":\"local_florist\"},{\"id\":\"local_gas_station\"},{\"id\":\"local_grocery_store\"},{\"id\":\"local_hospital\"},{\"id\":\"local_hotel\"},{\"id\":\"local_laundry_service\"},{\"id\":\"local_library\"},{\"id\":\"local_mall\"},{\"id\":\"local_movies\"},{\"id\":\"local_offer\"},{\"id\":\"local_parking\"},{\"id\":\"local_pharmacy\"},{\"id\":\"local_phone\"},{\"id\":\"local_pizza\"},{\"id\":\"local_play\"},{\"id\":\"local_post_office\"},{\"id\":\"local_printshop\"},{\"id\":\"local_see\"},{\"id\":\"local_shipping\"},{\"id\":\"local_taxi\"},{\"id\":\"map\"},{\"id\":\"money\"},{\"id\":\"my_location\"},{\"id\":\"navigation\"},{\"id\":\"near_me\"},{\"id\":\"not_listed_location\"},{\"id\":\"person_pin\"},{\"id\":\"person_pin_circle\"},{\"id\":\"pin_drop\"},{\"id\":\"place\"},{\"id\":\"rate_review\"},{\"id\":\"restaurant\"},{\"id\":\"restaurant_menu\"},{\"id\":\"satellite\"},{\"id\":\"store_mall_directory\"},{\"id\":\"streetview\"},{\"id\":\"subway\"},{\"id\":\"terrain\"},{\"id\":\"traffic\"},{\"id\":\"train\"},{\"id\":\"tram\"},{\"id\":\"transfer_within_a_station\"},{\"id\":\"transit_enterexit\"},{\"id\":\"trip_origin\"},{\"id\":\"zoom_out_map\"}],\"name\":\"maps\"},{\"icons\":[{\"id\":\"apps\"},{\"id\":\"arrow_back\"},{\"id\":\"arrow_back_ios\"},{\"id\":\"arrow_downward\"},{\"id\":\"arrow_drop_down\"},{\"id\":\"arrow_drop_down_circle\"},{\"id\":\"arrow_drop_up\"},{\"id\":\"arrow_forward\"},{\"id\":\"arrow_forward_ios\"},{\"id\":\"arrow_left\"},{\"id\":\"arrow_right\"},{\"id\":\"arrow_upward\"},{\"id\":\"cancel\"},{\"id\":\"check\"},{\"id\":\"chevron_left\"},{\"id\":\"chevron_right\"},{\"id\":\"close\"},{\"id\":\"expand_less\"},{\"id\":\"expand_more\"},{\"id\":\"first_page\"},{\"id\":\"fullscreen\"},{\"id\":\"fullscreen_exit\"},{\"id\":\"last_page\"},{\"id\":\"menu\"},{\"id\":\"more_horiz\"},{\"id\":\"more_vert\"},{\"id\":\"refresh\"},{\"id\":\"subdirectory_arrow_left\"},{\"id\":\"subdirectory_arrow_right\"},{\"id\":\"unfold_less\"},{\"id\":\"unfold_more\"}],\"name\":\"navigation\"},{\"icons\":[{\"id\":\"adb\"},{\"id\":\"airline_seat_flat\"},{\"id\":\"airline_seat_flat_angled\"},{\"id\":\"airline_seat_individual_suite\"},{\"id\":\"airline_seat_legroom_extra\"},{\"id\":\"airline_seat_legroom_normal\"},{\"id\":\"airline_seat_legroom_reduced\"},{\"id\":\"airline_seat_recline_extra\"},{\"id\":\"airline_seat_recline_normal\"},{\"id\":\"bluetooth_audio\"},{\"id\":\"confirmation_number\"},{\"id\":\"disc_full\"},{\"id\":\"drive_eta\"},{\"id\":\"enhanced_encryption\"},{\"id\":\"event_available\"},{\"id\":\"event_busy\"},{\"id\":\"event_note\"},{\"id\":\"folder_special\"},{\"id\":\"live_tv\"},{\"id\":\"mms\"},{\"id\":\"more\"},{\"id\":\"network_check\"},{\"id\":\"network_locked\"},{\"id\":\"no_encryption\"},{\"id\":\"ondemand_video\"},{\"id\":\"personal_video\"},{\"id\":\"phone_bluetooth_speaker\"},{\"id\":\"phone_callback\"},{\"id\":\"phone_forwarded\"},{\"id\":\"phone_in_talk\"},{\"id\":\"phone_locked\"},{\"id\":\"phone_missed\"},{\"id\":\"phone_paused\"},{\"id\":\"power\"},{\"id\":\"power_off\"},{\"id\":\"priority_high\"},{\"id\":\"sd_card\"},{\"id\":\"sms\"},{\"id\":\"sms_failed\"},{\"id\":\"sync\"},{\"id\":\"sync_disabled\"},{\"id\":\"sync_problem\"},{\"id\":\"system_update\"},{\"id\":\"tap_and_play\"},{\"id\":\"time_to_leave\"},{\"id\":\"tv_off\"},{\"id\":\"vibration\"},{\"id\":\"voice_chat\"},{\"id\":\"vpn_lock\"},{\"id\":\"wc\"},{\"id\":\"wifi\"},{\"id\":\"wifi_off\"}],\"name\":\"notification\"},{\"icons\":[{\"id\":\"ac_unit\"},{\"id\":\"airport_shuttle\"},{\"id\":\"all_inclusive\"},{\"id\":\"beach_access\"},{\"id\":\"business_center\"},{\"id\":\"casino\"},{\"id\":\"child_care\"},{\"id\":\"child_friendly\"},{\"id\":\"fitness_center\"},{\"id\":\"free_breakfast\"},{\"id\":\"golf_course\"},{\"id\":\"hot_tub\"},{\"id\":\"kitchen\"},{\"id\":\"meeting_room\"},{\"id\":\"no_meeting_room\"},{\"id\":\"pool\"},{\"id\":\"room_service\"},{\"id\":\"rv_hookup\"},{\"id\":\"smoke_free\"},{\"id\":\"smoking_rooms\"},{\"id\":\"spa\"}],\"name\":\"places\"},{\"icons\":[{\"id\":\"cake\"},{\"imageUrls\":{\"twotone\":\"twotone-domain-24px.svg\",\"sharp\":\"sharp-domain-24px.svg\",\"outline\":\"outline-domain-24px.svg\",\"round\":\"round-domain-24px.svg\",\"baseline\":\"baseline-domain-48px.svg\"},\"id\":\"domain\"},{\"id\":\"group\"},{\"id\":\"group_add\"},{\"id\":\"location_city\"},{\"id\":\"mood\"},{\"id\":\"mood_bad\"},{\"id\":\"notifications\"},{\"id\":\"notifications_active\"},{\"id\":\"notifications_none\"},{\"id\":\"notifications_off\"},{\"id\":\"notifications_paused\"},{\"id\":\"pages\"},{\"id\":\"party_mode\"},{\"id\":\"people\"},{\"id\":\"people_outline\"},{\"id\":\"person\"},{\"id\":\"person_add\"},{\"id\":\"person_outline\"},{\"id\":\"plus_one\"},{\"id\":\"poll\"},{\"id\":\"public\"},{\"id\":\"school\"},{\"id\":\"sentiment_dissatisfied\"},{\"id\":\"sentiment_satisfied\"},{\"id\":\"sentiment_very_dissatisfied\"},{\"id\":\"sentiment_very_satisfied\"},{\"id\":\"share\"},{\"id\":\"thumb_down_alt\"},{\"id\":\"thumb_up_alt\"},{\"id\":\"whatshot\"}],\"name\":\"social\"},{\"icons\":[{\"id\":\"check_box\"},{\"id\":\"check_box_outline_blank\"},{\"id\":\"indeterminate_check_box\"},{\"id\":\"radio_button_checked\"},{\"id\":\"radio_button_unchecked\"},{\"id\":\"star\"},{\"id\":\"star_border\"},{\"id\":\"star_half\"},{\"id\":\"toggle_off\"},{\"id\":\"toggle_on\"}],\"name\":\"toggle\"}]");

},{}],"lqjfk":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [
        _c('md-autocomplete', {
            attrs: {
                "md-options": _vm.icons
            },
            on: {
                "md-changed": _vm.getIcons,
                "md-opened": _vm.getIcons
            },
            scopedSlots: _vm._u([
                {
                    key: "md-autocomplete-item",
                    fn: function(ref) {
                        var item = ref.item;
                        return [
                            _c('div', [
                                _c('md-icon', [
                                    _vm._v(_vm._s(item))
                                ]),
                                _vm._v("\n        \xa0 \xa0\n        " + _vm._s(item) + "\n      ")
                            ], 1)
                        ];
                    }
                }
            ]),
            model: {
                value: _vm.iconSelected,
                callback: function($$v) {
                    _vm.iconSelected = $$v;
                },
                expression: "iconSelected"
            }
        }, [
            _c('label', [
                _vm._v("Icon")
            ])
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4j5J0":[function() {},{}],"hLBS3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"IaAnG":[function(require,module,exports,__globalThis) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContainer"
        }, [
            _c('div', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Name")
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
                ], 1),
                _vm._v(" "),
                _c('icon-component', {
                    attrs: {
                        "selected": _vm.iconSelected
                    },
                    on: {
                        "selectIcon": _vm.selectIcon
                    }
                })
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
                    "disabled": _vm.isDisabled()
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

},{}],"iQ8kZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k5xxv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3a16213858db1d4e");
    if (script.__esModule) script = script.default;
    script.render = require("565b25f65fb50be1").render;
    script.staticRenderFns = require("565b25f65fb50be1").staticRenderFns;
    script._scopeId = "data-v-dbad64";
    script.__cssModules = require("dfec2539a3c6a60d").default;
    require("4fcc7787d455ff8c").default(script);
    script.__scopeId = 'data-v-dbad64';
    script.__file = "createGroup.vue";
};
initialize();
exports.default = script;

},{"3a16213858db1d4e":"fpfnP","565b25f65fb50be1":"28Iaf","dfec2539a3c6a60d":"6Mwtm","4fcc7787d455ff8c":"fmmwI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fpfnP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsComponentsVue = require("./iconsComponents.vue");
var _iconsComponentsVueDefault = parcelHelpers.interopDefault(_iconsComponentsVue);
var _vueColor = require("vue-color");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _eventJs = require("../../../js/event.js");
var _eventJsDefault = parcelHelpers.interopDefault(_eventJs);
var scriptExports = {
    name: "createGroupDialog",
    props: [
        "onFinised"
    ],
    components: {
        "chrome-picker": (0, _vueColor.Chrome),
        "icon-component": (0, _iconsComponentsVueDefault.default),
        "photoshop-picker": (0, _vueColor.Photoshop)
    },
    data () {
        this.edit;
        return {
            showDialog: true,
            title: "",
            contextId: null,
            color: "#000000",
            inputValue: "",
            selectedNode: undefined,
            iconSelected: undefined,
            callback: ()=>{}
        };
    },
    methods: {
        opened (option) {
            this.edit = option.edit;
            this.title = option.title;
            this.contextId = option.contextId;
            this.selectedNode = option.selectedNode.id.get();
            this.iconSelected = "3d_rotation";
            console.log("option", option);
            if (this.edit) {
                this.inputValue = option.selectedNode.name.get();
                this.color = option.color;
                this.iconSelected = option.selectedNode.icon && option.selectedNode.icon.get() || "3d_rotation";
            }
            if (option.callback) this.callback = option.callback;
        },
        removed (closed) {
            if (closed) this.createElement().then((result)=>{
                const id = result.info ? result.info.id.get() : result.id.get();
                this.sentEvent(id);
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        sentEvent (id) {
            if (this.callback && typeof this.callback === "function") this.callback(id);
            (0, _eventJsDefault.default).$emit("itemCreated", id);
        },
        isDisabled () {
            return this.inputValue.trim().length === 0;
        },
        selectIcon (icon) {
            this.iconSelected = icon;
        },
        createElement () {
            const color = typeof this.color === "string" ? this.color : this.color.hex;
            if (!this.edit) return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).addGroup(this.contextId, this.selectedNode, this.inputValue.trim(), color, this.iconSelected);
            else return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).updateGroup(this.selectedNode, {
                name: this.inputValue.trim(),
                color: color,
                icon: this.iconSelected
            });
        }
    },
    filters: {
        toUpperCase: function(data) {
            return data.toUpperCase();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./iconsComponents.vue":"4pRui","vue-color":"5tBvH","spinal-env-viewer-plugin-group-manager-service":"gmxoN","../../../js/event.js":"9nkln","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"28Iaf":[function(require,module,exports,__globalThis) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContainer"
        }, [
            _c('md-field', [
                _c('label', [
                    _vm._v("Group name")
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
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "iconComponent"
            }, [
                _c('icon-component', {
                    attrs: {
                        "selected": _vm.iconSelected
                    },
                    on: {
                        "selectIcon": _vm.selectIcon
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "colorDiv"
            }, [
                _c('chrome-picker', {
                    model: {
                        value: _vm.color,
                        callback: function($$v) {
                            _vm.color = $$v;
                        },
                        expression: "color"
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
                    "disabled": _vm.isDisabled()
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

},{}],"6Mwtm":[function() {},{}],"fmmwI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dGVuU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d781d1405ae55cef");
    if (script.__esModule) script = script.default;
    script.render = require("edb82ec5d75c9aea").render;
    script.staticRenderFns = require("edb82ec5d75c9aea").staticRenderFns;
    script._scopeId = "data-v-b71f9f";
    require("18cf439fff259c3d").default(script);
    script.__scopeId = 'data-v-b71f9f';
    script.__file = "colorDialog.vue";
};
initialize();
exports.default = script;

},{"d781d1405ae55cef":"6yCgW","edb82ec5d75c9aea":"3xNeJ","18cf439fff259c3d":"eAoRp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6yCgW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueColor = require("vue-color");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "colorConfigDialog",
    props: [
        "onFinised"
    ],
    components: {
        "chrome-picker": (0, _vueColor.Chrome)
    },
    data () {
        return {
            showDialog: true,
            title: "",
            color: "#000000",
            node: null,
            inputValue: ""
        };
    },
    methods: {
        opened (option) {
            this.title = `Edit ${option.title}`;
            this.inputValue = option.title;
            this.color = option.color;
            this.node = option.selectedNode;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        removed (closed) {
            if (closed) {
                let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.node.id.get());
                realNode.info.name.set(this.inputValue.trim());
                if (!realNode.info.color) realNode.info.add_attr("color", this.color.hex);
                else realNode.info.color.set(this.color.hex);
            }
            this.showDialog = false;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"5tBvH","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3xNeJ":[function(require,module,exports,__globalThis) {
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
            _vm._v(_vm._s(_vm.title))
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
                        value: _vm.inputValue,
                        callback: function($$v) {
                            _vm.inputValue = $$v;
                        },
                        expression: "inputValue"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('chrome-picker', {
                model: {
                    value: _vm.color,
                    callback: function($$v) {
                        _vm.color = $$v;
                    },
                    expression: "color"
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
                    "disabled": _vm.inputValue.trim().length === 0
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

},{}],"eAoRp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cxB8c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("db32e4ba827e3f30");
    if (script.__esModule) script = script.default;
    script.render = require("1ffc53427c81334f").render;
    script.staticRenderFns = require("1ffc53427c81334f").staticRenderFns;
    script._scopeId = "data-v-1bc108";
    script.__cssModules = require("f5d381085ce37970").default;
    require("bb38bc8fb4edb5f1").default(script);
    script.__scopeId = 'data-v-1bc108';
    script.__file = "linkToGroup.vue";
};
initialize();
exports.default = script;

},{"db32e4ba827e3f30":"jyzak","1ffc53427c81334f":"kVWvI","f5d381085ce37970":"nr0G5","bb38bc8fb4edb5f1":"3i4Jy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jyzak":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("spinal-env-viewer-plugin-attribute-manager/src/services/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkToGroupTemplateVue = require("./linkToGroupTemplate.vue");
var _linkToGroupTemplateVueDefault = parcelHelpers.interopDefault(_linkToGroupTemplateVue);
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-template": (0, _linkToGroupTemplateVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            data: [],
            groups: [],
            categories: [],
            contextSelected: undefined,
            categorySelected: undefined,
            groupSelected: undefined,
            items: [],
            type: undefined,
            callback: undefined
        };
    },
    mounted () {
    // EventBus.$on("itemCreated", (id) => {
    //    console.log("hello world", id);
    //    this.getAllData();
    // });
    },
    methods: {
        opened (option) {
            this.items = option.itemSelected;
            this.type = option.type;
            this.callback = option.callback;
            this.getAllData();
        },
        removed (option) {
            if (option) {
                this.items.forEach((el)=>{
                    (0, _indexDefault.default).linkItem(this.contextSelected, this.groupSelected, el.id);
                });
                if (typeof this.callback !== "undefined") {
                    const context = this.data.find((el)=>el.id === this.contextSelected);
                    const category = this.categories.find((el)=>el.id === this.categorySelected);
                    const group = this.groups.find((el)=>el.id === this.groupSelected);
                    this.callback(context, category, group);
                }
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getAllData () {
            (0, _indexDefault.default).getAllGroupContext(this.type).then((res)=>{
                this.data = res;
                this.updateCategory();
                this.updateGroups();
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
        disabled () {
            return !(this.contextSelected && this.categorySelected && this.groupSelected);
        },
        createContext () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupContextDialog", {
                title: "Create a Grouping Context",
                typePreselected: this.type,
                callback: (id)=>{
                    const infoModel = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
                    if (infoModel) {
                        const info = infoModel.get();
                        info.category = [];
                        this.data = [
                            ...this.data,
                            info
                        ];
                        this.contextSelected = id;
                    }
                }
            });
        },
        createCategory () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCategoryDialog", {
                title: "add Category",
                contextId: this.contextSelected,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.contextSelected),
                callback: (id)=>{
                    const infoModel = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
                    if (infoModel) {
                        const info = infoModel.get();
                        info.groups = [];
                        this._addToCategory(info);
                        // this.categories = [...this.categories, info];
                        this.categorySelected = id;
                    }
                }
            });
        },
        createGroup () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupDialog", {
                title: "add Group",
                contextId: this.contextSelected,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.categorySelected),
                callback: (id)=>{
                    const infoModel = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
                    if (infoModel) {
                        const info = infoModel.get();
                        this._addToGroups(info);
                        // this.groups = [...this.groups, info];
                        this.groupSelected = id;
                    }
                }
            });
        },
        ////////////////////////////////////////////////////////////////			// Modify
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
        _addToCategory (obj) {
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) val.category.push(obj);
            }
        },
        _addToGroups (obj) {
            if (this.contextSelected && this.categorySelected) {
                let context = this.data.find((el)=>el.id === this.contextSelected);
                if (context) {
                    let category = context.category.find((el)=>el.id == this.categorySelected);
                    if (category) category.groups.push(obj);
                }
            }
        }
    },
    watch: {
        contextSelected () {
            this.categorySelected = undefined;
            this.groupSelected = undefined;
            this.updateCategory();
            this.updateGroups();
        },
        categorySelected () {
            this.groupSelected = undefined;
            this.updateGroups();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-attribute-manager/src/services/index":"7zwYj","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","./linkToGroupTemplate.vue":"ik2oR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7zwYj":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","spinal-env-viewer-bim-manager-service":"2m0Kp","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2MD19":[function(require,module,exports,__globalThis) {
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

},{"44f946b368e03b14":"9LAk7","3c0117970d993dce":"cZr3d"}],"2m0Kp":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ik2oR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1424ee12d47bff6e");
    if (script.__esModule) script = script.default;
    script.render = require("d3e3bb1a42a53864").render;
    script.staticRenderFns = require("d3e3bb1a42a53864").staticRenderFns;
    script._scopeId = "data-v-41b24f";
    script.__cssModules = require("bbad7ba8c9eb4c4e").default;
    require("7f9fb0dbfa4624e0").default(script);
    script.__scopeId = 'data-v-41b24f';
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"1424ee12d47bff6e":"8BMxa","d3e3bb1a42a53864":"1px8f","bbad7ba8c9eb4c4e":"2BQ5q","7f9fb0dbfa4624e0":"iTJq1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8BMxa":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1px8f":[function(require,module,exports,__globalThis) {
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
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-10 mdIcon"
            }, [
                _c('md-button', {
                    staticClass: "md-icon-button",
                    attrs: {
                        "disabled": _vm.disableBtn
                    },
                    on: {
                        "click": _vm.createEvent
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("control_point")
                    ])
                ], 1)
            ], 1)
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

},{}],"2BQ5q":[function() {},{}],"iTJq1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kVWvI":[function(require,module,exports,__globalThis) {
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
            _vm._v("Manage " + _vm._s(_vm.type) + " Group")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _c('div', {
                staticClass: "section"
            }, [
                _c('link-template', {
                    attrs: {
                        "title": 'Contexts',
                        "data": _vm.data,
                        "itemSelected": _vm.contextSelected
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
                    "disabled": _vm.disabled()
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

},{}],"nr0G5":[function() {},{}],"3i4Jy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2JX7D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("edde6a8a9ccfcf51");
    if (script.__esModule) script = script.default;
    script.render = require("dc271c33c0bf3514").render;
    script.staticRenderFns = require("dc271c33c0bf3514").staticRenderFns;
    script._scopeId = "data-v-7ab04c";
    require("b7c5eb87c99319e2").default(script);
    script.__scopeId = 'data-v-7ab04c';
    script.__file = "selectTypeDialog.vue";
};
initialize();
exports.default = script;

},{"edde6a8a9ccfcf51":"55hSK","dc271c33c0bf3514":"7bDXm","b7c5eb87c99319e2":"4lZ7L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"55hSK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _types = require("../../js/types");
var _typesDefault = parcelHelpers.interopDefault(_types);
var scriptExports = {
    name: "selectTypeDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.types = (0, _typesDefault.default);
        return {
            showDialog: true,
            typeSelected: undefined
        };
    },
    methods: {
        opened (option) {},
        removed (closed) {
            if (closed) (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkToGroupDialog", {
                type: this.typeSelected,
                itemSelected: []
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        isDisabled () {
            return this.typeSelected ? false : true;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"egTXY","../../js/types":"9su3e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7bDXm":[function(require,module,exports,__globalThis) {
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
            _vm._v(_vm._s("Select type".toUpperCase()))
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "dialogContainer"
        }, [
            _c('div', [
                _c('md-field', [
                    _c('label', {
                        attrs: {
                            "for": "movie"
                        }
                    }, [
                        _vm._v("Select Group")
                    ]),
                    _vm._v(" "),
                    _c('md-select', {
                        attrs: {
                            "name": "groupType",
                            "id": "groupType"
                        },
                        model: {
                            value: _vm.typeSelected,
                            callback: function($$v) {
                                _vm.typeSelected = $$v;
                            },
                            expression: "typeSelected"
                        }
                    }, _vm._l(_vm.types, function(type, index) {
                        return _c('md-option', {
                            key: index,
                            attrs: {
                                "value": type.type
                            }
                        }, [
                            _vm._v(_vm._s(type.name))
                        ]);
                    }), 1)
                ], 1)
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
                    "disabled": _vm.isDisabled()
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

},{}],"4lZ7L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hTY9G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f4369c959946c7a1");
    if (script.__esModule) script = script.default;
    script.render = require("ef1a3b5139486e9f").render;
    script.staticRenderFns = require("ef1a3b5139486e9f").staticRenderFns;
    script._scopeId = "data-v-f6298b";
    script.__cssModules = require("70cf4367fed8ec93").default;
    require("614b327400410b36").default(script);
    script.__scopeId = 'data-v-f6298b';
    script.__file = "linkBimObjectToGroup.vue";
};
initialize();
exports.default = script;

},{"f4369c959946c7a1":"f8l0A","ef1a3b5139486e9f":"7oHhU","70cf4367fed8ec93":"hSqWA","614b327400410b36":"jr99B","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f8l0A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _utilities = require("../../../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var scriptExports = {
    name: "addBimObjectToGroupDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.states = {
            normal: 0,
            loading: 1,
            result: 2
        };
        return {
            showDialog: false,
            selections: [],
            state: this.states.loading,
            contextId: null,
            nodeId: null,
            linked: 0,
            notLinked: 0
        };
    },
    mounted () {
    // EventBus.$on("itemCreated", (id) => {
    //    console.log("hello world", id);
    //    this.getAllData();
    // });
    },
    filters: {
        length (items) {
            return items.reduce((count, { selection })=>{
                count += selection.length;
                return count;
            }, 0);
        }
    },
    methods: {
        async opened ({ contextId, nodeId }) {
            this.contextId = contextId;
            this.nodeId = nodeId;
            const selections = this.getObjectSelected();
            if (!selections) return alert("No BimObject selected");
            this.state = this.states.loading;
            this.showDialog = true;
            this.selections = await this.getLeaftSelections(selections);
            this.state = this.states.normal;
        },
        async removed (option) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        cancelDisabled () {
            return this.state === this.states.loading;
        },
        yesDisabled () {
            return this.state !== this.states.normal;
        },
        getObjectSelected () {
            let selections = window.spinal.ForgeViewer.viewer.getAggregateSelection();
            if (selections.length === 0) return;
            return selections;
        },
        getLeaftSelections (selections) {
            const promises = selections.map((el)=>{
                return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(el.model, el.selection);
            });
            return Promise.all(promises);
        },
        async addBimObject () {
            try {
                this.state = this.states.loading;
                const arr = this.convertSelectionsToFuncList(this.contextId, this.nodeId, this.selections);
                const { successed, failed } = await (0, _utilitiesDefault.default).consumeBatch(arr);
                this.linked = successed.length;
                this.notLinked = failed.length;
                this.state = this.states.result;
            } catch (error) {
                console.error(error);
                throw error;
            }
        //   Promise.all(selections).then((selected) => {
        //     for (let idx = 0; idx < selected.length; idx++) {
        //       const { model, selection } = selected[idx];
        //       model.getBulkProperties(
        //         selection,
        //         {
        //           propFilter: ["name"],
        //         },
        //         (el) => {
        //           el.forEach((element) => {
        //             window.spinal.BimObjectService.createBIMObject(
        //               element.dbId,
        //               element.name,
        //               model
        //             ).then(() => {
        //               window.spinal.BimObjectService.getBIMObject(
        //                 element.dbId,
        //                 model
        //               ).then((bimObject) => {
        //                 if (bimObject) {
        //                   const bimId = bimObject.id
        //                     ? bimObject.id.get()
        //                     : bimObject.info.id.get();
        //                   groupManagerService.linkElementToGroup(
        //                     contextId,
        //                     groupId,
        //                     bimId
        //                   );
        //                 }
        //               });
        //             });
        //           });
        //         }
        //       );
        //     }
        //   });
        },
        async getBimObjectNode (model, dbId) {
            try {
                const name = await this.getObjectName(model, dbId);
                return spinal.BimObjectService.createBIMObject(dbId, name, model);
            } catch (error) {
                console.error("error", model.id, dbId);
                throw error;
            }
        },
        async addNodeToGroup (contextId, groupId, model, dbId) {
            const node = await this.getBimObjectNode(model, dbId);
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, groupId, node.id.get());
        },
        getObjectName (model, dbId) {
            return new Promise((resolve, reject)=>{
                model.getBulkProperties([
                    dbId
                ], {
                    propFilter: [
                        "name"
                    ]
                }, (el)=>{
                    resolve(el[0].name);
                });
            });
        },
        convertSelectionsToFuncList (contextId, groupId, liste) {
            return liste.reduce((arr, { model, selection })=>{
                for (const id of selection)arr.push(()=>this.addNodeToGroup(contextId, groupId, model, id));
                return arr;
            }, []);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-bim-manager-service":"2m0Kp","../../../js/utilities":"lzCVv","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7oHhU":[function(require,module,exports,__globalThis) {
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
            _vm._v("Add bimObject(s) selected to\n    group")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _c('div', {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.state === _vm.states.normal,
                        expression: "state === states.normal"
                    }
                ]
            }, [
                _vm._v("\n      Do you really want to link " + _vm._s(_vm._f("length")(_vm.selections)) + " bimObject(s) to the\n      group ?\n    ")
            ]),
            _vm._v(" "),
            _c('div', {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.state === _vm.states.loading,
                        expression: "state === states.loading"
                    }
                ]
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('div', {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.state === _vm.states.result,
                        expression: "state === states.result"
                    }
                ],
                staticClass: "result"
            }, [
                _c('div', [
                    _vm._v("linked with success: "),
                    _c('span', {
                        staticClass: "success"
                    }, [
                        _vm._v(" " + _vm._s(_vm.linked))
                    ])
                ]),
                _vm._v(" "),
                _c('div', [
                    _vm._v("link failed : "),
                    _c('span', {
                        staticClass: "error"
                    }, [
                        _vm._v(_vm._s(_vm.notLinked))
                    ])
                ])
            ])
        ]),
        _vm._v(" "),
        _c('md-dialog-actions', [
            _c('md-button', {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.cancelDisabled()
                },
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
                    "disabled": _vm.yesDisabled()
                },
                on: {
                    "click": _vm.addBimObject
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

},{}],"hSqWA":[function() {},{}],"jr99B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Mb2H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkerDialogVue = require("./linkerDialog.vue");
var _linkerDialogVueDefault = parcelHelpers.interopDefault(_linkerDialogVue);
var _globalLinkerPanelVue = require("./globalLinkerPanel.vue");
var _globalLinkerPanelVueDefault = parcelHelpers.interopDefault(_globalLinkerPanelVue);
const { SpinalForgeExtention } = require("db18746d8bc7d6f7");
let panels = [
    {
        name: "linkRoomPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkerDialogVueDefault.default)),
        panel: {
            title: "Link Rooms Panel",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "globalLinkRoomPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _globalLinkerPanelVueDefault.default)),
        panel: {
            title: "Link",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    }
];
for(let index = 0; index < panels.length; index++){
    const element = panels[index];
    const panelExtension = SpinalForgeExtention.createExtention(element);
    SpinalForgeExtention.registerExtention(element.name, panelExtension);
}

},{"vue":"hO3OD","db18746d8bc7d6f7":"fYcpE","./linkerDialog.vue":"aFoKy","./globalLinkerPanel.vue":"b54DD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"aFoKy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2cb1462bda72c769");
    if (script.__esModule) script = script.default;
    script.render = require("88141901a7166c42").render;
    script.staticRenderFns = require("88141901a7166c42").staticRenderFns;
    script._scopeId = "data-v-44b74a";
    script.__cssModules = require("6bf14fe62dd069af").default;
    require("804cc20effe081a0").default(script);
    script.__scopeId = 'data-v-44b74a';
    script.__file = "linkerDialog.vue";
};
initialize();
exports.default = script;

},{"2cb1462bda72c769":"g10hG","88141901a7166c42":"bfwHq","6bf14fe62dd069af":"8wJqJ","804cc20effe081a0":"hv6ST","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g10hG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _vueVirtualScroller = require("vue-virtual-scroller");
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
const { spinalPanelManagerService } = require("68c869922bdba932");
(0, _vueDefault.default).component("RecycleScroller", (0, _vueVirtualScroller.RecycleScroller));
var scriptExports = {
    name: "linkPanelContent",
    components: {
    },
    data () {
        this.STATES = {
            normal: 1,
            loading: 2,
            error: 3
        };
        this.data = [];
        this.contextId;
        this.groupId;
        this.countPerPage = 10;
        return {
            search: "",
            isOpened: false,
            title: "Link Rooms",
            tempList: [],
            dataLinked: [],
            currentPage: 1,
            appState: this.STATES.normal,
            categorySumary: []
        };
    },
    methods: {
        opened (option) {
            this.appState = this.STATES.loading;
            this.contextId = option.contextId;
            this.groupId = option.nodeId;
            // this.title =
            //   "Link " +
            //   (option.type === groupService.constants.ROOMS_GROUP
            //     ? "Rooms"
            //     : "BimObject");
            this.setTitle(this.title);
            let refContext = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(option.reference.context);
            if (typeof refContext === "undefined") {
                this.tempList = [];
                this.data = [];
                this.dataLinked = [];
                this.appState = this.STATES.normal;
                return;
            }
            let refContextId = refContext.info.id.get();
            Promise.all([
                this.getData(refContextId, option.reference.relation),
                this.getDataLinked(option.nodeId),
                this.getOtherGroupData(option.nodeId)
            ]).then((res)=>{
                console.log("res", res);
                this.data = res[0];
                this.tempList = res[0];
                this.dataLinked = res[1];
                this.categorySumary = res[2];
                this.appState = this.STATES.normal;
            }).catch((err)=>{
                this.appState = this.STATES.error;
                console.error(err);
            });
        },
        getData (parentId, relationName) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, relationName).then((res)=>{
                return res.map((el)=>el.get());
            });
        },
        getDataLinked (id) {
            // return groupService.getElementsLinked(id).then(res => {
            //   return res.map(el => el.get());
            // });
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getElementsLinkedToGroup(id).then((result)=>{
                return result.map((el)=>el.get());
            });
        },
        async getOtherGroupData (nodeId) {
            let category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(nodeId);
            if (category) {
                let groups = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(category.id.get());
                let groupFiltered = groups.filter((child)=>{
                    return child.id.get() !== nodeId;
                });
                return groupFiltered.map((el)=>{
                    return {
                        id: el.id.get(),
                        name: el.name.get(),
                        color: el.color ? el.color.get() : "#000000",
                        children: (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenIds(el.id.get())
                    };
                });
            }
            return [];
        },
        setTitle (title) {
            spinalPanelManagerService.panels.linkRoomPanel.panel.setTitle(title);
        },
        isLinked (item) {
            return this.dataLinked.find((el)=>{
                return item.id === el.id;
            });
        },
        getIcon (item) {
            return typeof this.isLinked(item) === "undefined" ? "link" : "link_off";
        },
        deleteItem (item) {
            for(let i = 0; i < this.dataLinked.length; i++){
                const element = this.dataLinked[i];
                if (element.id === item.id) {
                    this.dataLinked.splice(i, 1);
                    return;
                }
            }
        },
        async linkUnlink (item) {
            if (this.isLinked(item)) {
                await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).unLinkElementToGroup(this.groupId, item.id);
                this.deleteItem(item);
            } else {
                const res = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(this.contextId, this.groupId, item.id);
                if (typeof res.old_group !== "undefined") {
                    let group = this.categorySumary.find((el)=>{
                        return el.id === res.old_group;
                    });
                    if (typeof group !== "undefined") group.children = group.children.filter((el)=>{
                        return el !== item.id;
                    });
                }
                this.dataLinked.push(item);
            }
        },
        eventMethod (eventName, item) {
            (0, _eventDefault.default).$emit(eventName, item);
        },
        openSearchBar () {
            this.isOpened = !this.isOpened;
        },
        elementExistInCategory (item) {
            let id = item.id;
            let parent = this.categorySumary.find((el)=>{
                return el.children.indexOf(id) !== -1;
            });
            if (typeof parent !== "undefined") {
                item["groupName"] = parent.name;
                item["groupColor"] = parent.color;
                return true;
            }
            return false;
        }
    },
    watch: {
        search: function(newValue) {
            newValue = newValue.trim();
            // console.log("newValue", newValue);
            if (newValue.length === 0) this.tempList = this.data;
            else this.tempList = this.data.filter((el)=>{
                return el.name.toLowerCase().includes(newValue.toLowerCase());
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"hO3OD","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-group-manager-service":"gmxoN","68c869922bdba932":"egTXY","vue-virtual-scroller":"dRz3Y","../../js/event":"9nkln","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dRz3Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DynamicScroller", ()=>__vue_component__$1);
parcelHelpers.export(exports, "DynamicScrollerItem", ()=>__vue_component__);
parcelHelpers.export(exports, "IdState", ()=>IdState);
parcelHelpers.export(exports, "RecycleScroller", ()=>__vue_component__$2);
parcelHelpers.export(exports, "default", ()=>plugin);
var _vueResize = require("vue-resize");
var _vueObserveVisibility = require("vue-observe-visibility");
var _scrollparent = require("scrollparent");
var _scrollparentDefault = parcelHelpers.interopDefault(_scrollparent);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var global = arguments[3];
var config = {
    itemsLimit: 1000
};
const props = {
    items: {
        type: Array,
        required: true
    },
    keyField: {
        type: String,
        default: 'id'
    },
    direction: {
        type: String,
        default: 'vertical',
        validator: (value)=>[
                'vertical',
                'horizontal'
            ].includes(value)
    },
    listTag: {
        type: String,
        default: 'div'
    },
    itemTag: {
        type: String,
        default: 'div'
    }
};
function simpleArray() {
    return this.items.length && typeof this.items[0] !== 'object';
}
let supportsPassive = false;
if (typeof window !== 'undefined') {
    supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get () {
                supportsPassive = true;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {}
}
//
let uid = 0;
var script$2 = {
    name: 'RecycleScroller',
    components: {
        ResizeObserver: (0, _vueResize.ResizeObserver)
    },
    directives: {
        ObserveVisibility: (0, _vueObserveVisibility.ObserveVisibility)
    },
    props: {
        ...props,
        itemSize: {
            type: Number,
            default: null
        },
        gridItems: {
            type: Number,
            default: undefined
        },
        itemSecondarySize: {
            type: Number,
            default: undefined
        },
        minItemSize: {
            type: [
                Number,
                String
            ],
            default: null
        },
        sizeField: {
            type: String,
            default: 'size'
        },
        typeField: {
            type: String,
            default: 'type'
        },
        buffer: {
            type: Number,
            default: 200
        },
        pageMode: {
            type: Boolean,
            default: false
        },
        prerender: {
            type: Number,
            default: 0
        },
        emitUpdate: {
            type: Boolean,
            default: false
        },
        skipHover: {
            type: Boolean,
            default: false
        },
        listTag: {
            type: String,
            default: 'div'
        },
        itemTag: {
            type: String,
            default: 'div'
        },
        listClass: {
            type: [
                String,
                Object,
                Array
            ],
            default: ''
        },
        itemClass: {
            type: [
                String,
                Object,
                Array
            ],
            default: ''
        }
    },
    data () {
        return {
            pool: [],
            totalSize: 0,
            ready: false,
            hoverKey: null
        };
    },
    computed: {
        sizes () {
            if (this.itemSize === null) {
                const sizes = {
                    '-1': {
                        accumulator: 0
                    }
                };
                const items = this.items;
                const field = this.sizeField;
                const minItemSize = this.minItemSize;
                let computedMinSize = 10000;
                let accumulator = 0;
                let current;
                for(let i = 0, l = items.length; i < l; i++){
                    current = items[i][field] || minItemSize;
                    if (current < computedMinSize) computedMinSize = current;
                    accumulator += current;
                    sizes[i] = {
                        accumulator,
                        size: current
                    };
                }
                // eslint-disable-next-line
                this.$_computedMinItemSize = computedMinSize;
                return sizes;
            }
            return [];
        },
        simpleArray
    },
    watch: {
        items () {
            this.updateVisibleItems(true);
        },
        pageMode () {
            this.applyPageMode();
            this.updateVisibleItems(false);
        },
        sizes: {
            handler () {
                this.updateVisibleItems(false);
            },
            deep: true
        },
        gridItems () {
            this.updateVisibleItems(true);
        },
        itemSecondarySize () {
            this.updateVisibleItems(true);
        }
    },
    created () {
        this.$_startIndex = 0;
        this.$_endIndex = 0;
        this.$_views = new Map();
        this.$_unusedViews = new Map();
        this.$_scrollDirty = false;
        this.$_lastUpdateScrollPosition = 0;
        // In SSR mode, we also prerender the same number of item for the first render
        // to avoir mismatch between server and client templates
        if (this.prerender) {
            this.$_prerender = true;
            this.updateVisibleItems(false);
        }
        if (this.gridItems && !this.itemSize) console.error('[vue-recycle-scroller] You must provide an itemSize when using gridItems');
    },
    mounted () {
        this.applyPageMode();
        this.$nextTick(()=>{
            // In SSR mode, render the real number of visible items
            this.$_prerender = false;
            this.updateVisibleItems(true);
            this.ready = true;
        });
    },
    activated () {
        const lastPosition = this.$_lastUpdateScrollPosition;
        if (typeof lastPosition === 'number') this.$nextTick(()=>{
            this.scrollToPosition(lastPosition);
        });
    },
    beforeDestroy () {
        this.removeListeners();
    },
    methods: {
        addView (pool, index, item, key, type) {
            const view = {
                item,
                position: 0
            };
            const nonReactive = {
                id: uid++,
                index,
                used: true,
                key,
                type
            };
            Object.defineProperty(view, 'nr', {
                configurable: false,
                value: nonReactive
            });
            pool.push(view);
            return view;
        },
        unuseView (view, fake = false) {
            const unusedViews = this.$_unusedViews;
            const type = view.nr.type;
            let unusedPool = unusedViews.get(type);
            if (!unusedPool) {
                unusedPool = [];
                unusedViews.set(type, unusedPool);
            }
            unusedPool.push(view);
            if (!fake) {
                view.nr.used = false;
                view.position = -9999;
                this.$_views.delete(view.nr.key);
            }
        },
        handleResize () {
            this.$emit('resize');
            if (this.ready) this.updateVisibleItems(false);
        },
        handleScroll (event) {
            if (!this.$_scrollDirty) {
                this.$_scrollDirty = true;
                requestAnimationFrame(()=>{
                    this.$_scrollDirty = false;
                    const { continuous } = this.updateVisibleItems(false, true);
                    // It seems sometimes chrome doesn't fire scroll event :/
                    // When non continous scrolling is ending, we force a refresh
                    if (!continuous) {
                        clearTimeout(this.$_refreshTimout);
                        this.$_refreshTimout = setTimeout(this.handleScroll, 100);
                    }
                });
            }
        },
        handleVisibilityChange (isVisible, entry) {
            if (this.ready) {
                if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
                    this.$emit('visible');
                    requestAnimationFrame(()=>{
                        this.updateVisibleItems(false);
                    });
                } else this.$emit('hidden');
            }
        },
        updateVisibleItems (checkItem, checkPositionDiff = false) {
            const itemSize = this.itemSize;
            const gridItems = this.gridItems || 1;
            const itemSecondarySize = this.itemSecondarySize || itemSize;
            const minItemSize = this.$_computedMinItemSize;
            const typeField = this.typeField;
            const keyField = this.simpleArray ? null : this.keyField;
            const items = this.items;
            const count = items.length;
            const sizes = this.sizes;
            const views = this.$_views;
            const unusedViews = this.$_unusedViews;
            const pool = this.pool;
            let startIndex, endIndex;
            let totalSize;
            let visibleStartIndex, visibleEndIndex;
            if (!count) startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0;
            else if (this.$_prerender) {
                startIndex = visibleStartIndex = 0;
                endIndex = visibleEndIndex = Math.min(this.prerender, items.length);
                totalSize = null;
            } else {
                const scroll = this.getScroll();
                // Skip update if use hasn't scrolled enough
                if (checkPositionDiff) {
                    let positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
                    if (positionDiff < 0) positionDiff = -positionDiff;
                    if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) return {
                        continuous: true
                    };
                }
                this.$_lastUpdateScrollPosition = scroll.start;
                const buffer = this.buffer;
                scroll.start -= buffer;
                scroll.end += buffer;
                // account for leading slot
                let beforeSize = 0;
                if (this.$refs.before) {
                    beforeSize = this.$refs.before.scrollHeight;
                    scroll.start -= beforeSize;
                }
                // account for trailing slot
                if (this.$refs.after) {
                    const afterSize = this.$refs.after.scrollHeight;
                    scroll.end += afterSize;
                }
                // Variable size mode
                if (itemSize === null) {
                    let h;
                    let a = 0;
                    let b = count - 1;
                    let i = ~~(count / 2);
                    let oldI;
                    // Searching for startIndex
                    do {
                        oldI = i;
                        h = sizes[i].accumulator;
                        if (h < scroll.start) a = i;
                        else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) b = i;
                        i = ~~((a + b) / 2);
                    }while (i !== oldI);
                    i < 0 && (i = 0);
                    startIndex = i;
                    // For container style
                    totalSize = sizes[count - 1].accumulator;
                    // Searching for endIndex
                    for(endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++);
                    if (endIndex === -1) endIndex = items.length - 1;
                    else {
                        endIndex++;
                        // Bounds
                        endIndex > count && (endIndex = count);
                    }
                    // search visible startIndex
                    for(visibleStartIndex = startIndex; visibleStartIndex < count && beforeSize + sizes[visibleStartIndex].accumulator < scroll.start; visibleStartIndex++);
                    // search visible endIndex
                    for(visibleEndIndex = visibleStartIndex; visibleEndIndex < count && beforeSize + sizes[visibleEndIndex].accumulator < scroll.end; visibleEndIndex++);
                } else {
                    // Fixed size mode
                    startIndex = ~~(scroll.start / itemSize * gridItems);
                    const remainer = startIndex % gridItems;
                    startIndex -= remainer;
                    endIndex = Math.ceil(scroll.end / itemSize * gridItems);
                    visibleStartIndex = Math.max(0, Math.floor((scroll.start - beforeSize) / itemSize * gridItems));
                    visibleEndIndex = Math.floor((scroll.end - beforeSize) / itemSize * gridItems);
                    // Bounds
                    startIndex < 0 && (startIndex = 0);
                    endIndex > count && (endIndex = count);
                    visibleStartIndex < 0 && (visibleStartIndex = 0);
                    visibleEndIndex > count && (visibleEndIndex = count);
                    totalSize = Math.ceil(count / gridItems) * itemSize;
                }
            }
            if (endIndex - startIndex > config.itemsLimit) this.itemsLimitError();
            this.totalSize = totalSize;
            let view;
            const continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;
            if (this.$_continuous !== continuous) {
                if (continuous) {
                    views.clear();
                    unusedViews.clear();
                    for(let i = 0, l = pool.length; i < l; i++){
                        view = pool[i];
                        this.unuseView(view);
                    }
                }
                this.$_continuous = continuous;
            } else if (continuous) for(let i = 0, l = pool.length; i < l; i++){
                view = pool[i];
                if (view.nr.used) {
                    // Update view item index
                    if (checkItem) view.nr.index = items.indexOf(view.item);
                    // Check if index is still in visible range
                    if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) this.unuseView(view);
                }
            }
            const unusedIndex = continuous ? null : new Map();
            let item, type, unusedPool;
            let v;
            for(let i = startIndex; i < endIndex; i++){
                item = items[i];
                const key = keyField ? item[keyField] : item;
                if (key == null) throw new Error(`Key is ${key} on item (keyField is '${keyField}')`);
                view = views.get(key);
                if (!itemSize && !sizes[i].size) {
                    if (view) this.unuseView(view);
                    continue;
                }
                // No view assigned to item
                if (!view) {
                    if (i === items.length - 1) this.$emit('scroll-end');
                    if (i === 0) this.$emit('scroll-start');
                    type = item[typeField];
                    unusedPool = unusedViews.get(type);
                    if (continuous) {
                        // Reuse existing view
                        if (unusedPool && unusedPool.length) {
                            view = unusedPool.pop();
                            view.item = item;
                            view.nr.used = true;
                            view.nr.index = i;
                            view.nr.key = key;
                            view.nr.type = type;
                        } else view = this.addView(pool, i, item, key, type);
                    } else {
                        // Use existing view
                        // We don't care if they are already used
                        // because we are not in continous scrolling
                        v = unusedIndex.get(type) || 0;
                        if (!unusedPool || v >= unusedPool.length) {
                            view = this.addView(pool, i, item, key, type);
                            this.unuseView(view, true);
                            unusedPool = unusedViews.get(type);
                        }
                        view = unusedPool[v];
                        view.item = item;
                        view.nr.used = true;
                        view.nr.index = i;
                        view.nr.key = key;
                        view.nr.type = type;
                        unusedIndex.set(type, v + 1);
                        v++;
                    }
                    views.set(key, view);
                } else {
                    view.nr.used = true;
                    view.item = item;
                }
                // Update position
                if (itemSize === null) {
                    view.position = sizes[i - 1].accumulator;
                    view.offset = 0;
                } else {
                    view.position = Math.floor(i / gridItems) * itemSize;
                    view.offset = i % gridItems * itemSecondarySize;
                }
            }
            this.$_startIndex = startIndex;
            this.$_endIndex = endIndex;
            if (this.emitUpdate) this.$emit('update', startIndex, endIndex, visibleStartIndex, visibleEndIndex);
            // After the user has finished scrolling
            // Sort views so text selection is correct
            clearTimeout(this.$_sortTimer);
            this.$_sortTimer = setTimeout(this.sortViews, 300);
            return {
                continuous
            };
        },
        getListenerTarget () {
            let target = (0, _scrollparentDefault.default)(this.$el);
            // Fix global scroll target for Chrome and Safari
            if (window.document && (target === window.document.documentElement || target === window.document.body)) target = window;
            return target;
        },
        getScroll () {
            const { $el: el, direction } = this;
            const isVertical = direction === 'vertical';
            let scrollState;
            if (this.pageMode) {
                const bounds = el.getBoundingClientRect();
                const boundsSize = isVertical ? bounds.height : bounds.width;
                let start = -(isVertical ? bounds.top : bounds.left);
                let size = isVertical ? window.innerHeight : window.innerWidth;
                if (start < 0) {
                    size += start;
                    start = 0;
                }
                if (start + size > boundsSize) size = boundsSize - start;
                scrollState = {
                    start,
                    end: start + size
                };
            } else if (isVertical) scrollState = {
                start: el.scrollTop,
                end: el.scrollTop + el.clientHeight
            };
            else scrollState = {
                start: el.scrollLeft,
                end: el.scrollLeft + el.clientWidth
            };
            return scrollState;
        },
        applyPageMode () {
            if (this.pageMode) this.addListeners();
            else this.removeListeners();
        },
        addListeners () {
            this.listenerTarget = this.getListenerTarget();
            this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
                passive: true
            } : false);
            this.listenerTarget.addEventListener('resize', this.handleResize);
        },
        removeListeners () {
            if (!this.listenerTarget) return;
            this.listenerTarget.removeEventListener('scroll', this.handleScroll);
            this.listenerTarget.removeEventListener('resize', this.handleResize);
            this.listenerTarget = null;
        },
        scrollToItem (index) {
            let scroll;
            if (this.itemSize === null) scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
            else scroll = Math.floor(index / this.gridItems) * this.itemSize;
            this.scrollToPosition(scroll);
        },
        scrollToPosition (position) {
            const direction = this.direction === 'vertical' ? {
                scroll: 'scrollTop',
                start: 'top'
            } : {
                scroll: 'scrollLeft',
                start: 'left'
            };
            let viewport;
            let scrollDirection;
            let scrollDistance;
            if (this.pageMode) {
                const viewportEl = (0, _scrollparentDefault.default)(this.$el);
                // HTML doesn't overflow like other elements
                const scrollTop = viewportEl.tagName === 'HTML' ? 0 : viewportEl[direction.scroll];
                const bounds = viewportEl.getBoundingClientRect();
                const scroller = this.$el.getBoundingClientRect();
                const scrollerPosition = scroller[direction.start] - bounds[direction.start];
                viewport = viewportEl;
                scrollDirection = direction.scroll;
                scrollDistance = position + scrollTop + scrollerPosition;
            } else {
                viewport = this.$el;
                scrollDirection = direction.scroll;
                scrollDistance = position;
            }
            viewport[scrollDirection] = scrollDistance;
        },
        itemsLimitError () {
            setTimeout(()=>{
                console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', this.$el);
                console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
            });
            throw new Error('Rendered items limit reached');
        },
        sortViews () {
            this.pool.sort((viewA, viewB)=>viewA.nr.index - viewB.nr.index);
        }
    }
};
function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */ , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) options.functional = true;
    }
    // scopedId
    if (scopeId) options._scopeId = scopeId;
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function(context) {
            // 2.3 injection
            context = context || // cached call
            this.$vnode && this.$vnode.ssrContext || // stateful
            this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') context = __VUE_SSR_CONTEXT__;
            // inject component styles
            if (style) style.call(this, createInjectorSSR(context));
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) context._registeredComponents.add(moduleIdentifier);
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    } else if (style) hook = shadowMode ? function(context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function(context) {
        style.call(this, createInjector(context));
    };
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        } else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [
                hook
            ];
        }
    }
    return script;
}
/* script */ const __vue_script__$2 = script$2;
/* template */ var __vue_render__$1 = function() {
    var _obj, _obj$1;
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        directives: [
            {
                name: "observe-visibility",
                rawName: "v-observe-visibility",
                value: _vm.handleVisibilityChange,
                expression: "handleVisibilityChange"
            }
        ],
        staticClass: "vue-recycle-scroller",
        class: (_obj = {
            ready: _vm.ready,
            "page-mode": _vm.pageMode
        }, _obj["direction-" + _vm.direction] = true, _obj),
        on: {
            "&scroll": function($event) {
                return _vm.handleScroll.apply(null, arguments);
            }
        }
    }, [
        _vm.$slots.before ? _c("div", {
            ref: "before",
            staticClass: "vue-recycle-scroller__slot"
        }, [
            _vm._t("before")
        ], 2) : _vm._e(),
        _vm._v(" "),
        _c(_vm.listTag, {
            ref: "wrapper",
            tag: "component",
            staticClass: "vue-recycle-scroller__item-wrapper",
            class: _vm.listClass,
            style: (_obj$1 = {}, _obj$1[_vm.direction === "vertical" ? "minHeight" : "minWidth"] = _vm.totalSize + "px", _obj$1)
        }, [
            _vm._l(_vm.pool, function(view) {
                return _c(_vm.itemTag, _vm._g({
                    key: view.nr.id,
                    tag: "component",
                    staticClass: "vue-recycle-scroller__item-view",
                    class: [
                        _vm.itemClass,
                        {
                            hover: !_vm.skipHover && _vm.hoverKey === view.nr.key
                        }
                    ],
                    style: _vm.ready ? {
                        transform: "translate" + (_vm.direction === "vertical" ? "Y" : "X") + "(" + view.position + "px) translate" + (_vm.direction === "vertical" ? "X" : "Y") + "(" + view.offset + "px)",
                        width: _vm.gridItems ? (_vm.direction === "vertical" ? _vm.itemSecondarySize || _vm.itemSize : _vm.itemSize) + "px" : undefined,
                        height: _vm.gridItems ? (_vm.direction === "horizontal" ? _vm.itemSecondarySize || _vm.itemSize : _vm.itemSize) + "px" : undefined
                    } : null
                }, _vm.skipHover ? {} : {
                    mouseenter: function() {
                        _vm.hoverKey = view.nr.key;
                    },
                    mouseleave: function() {
                        _vm.hoverKey = null;
                    }
                }), [
                    _vm._t("default", null, {
                        item: view.item,
                        index: view.nr.index,
                        active: view.nr.used
                    })
                ], 2);
            }),
            _vm._v(" "),
            _vm._t("empty")
        ], 2),
        _vm._v(" "),
        _vm.$slots.after ? _c("div", {
            ref: "after",
            staticClass: "vue-recycle-scroller__slot"
        }, [
            _vm._t("after")
        ], 2) : _vm._e(),
        _vm._v(" "),
        _c("ResizeObserver", {
            on: {
                notify: _vm.handleResize
            }
        })
    ], 1);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */ const __vue_inject_styles__$2 = undefined;
/* scoped */ const __vue_scope_id__$2 = undefined;
/* module identifier */ const __vue_module_identifier__$2 = undefined;
/* functional template */ const __vue_is_functional_template__$2 = false;
/* style inject */ /* style inject SSR */ /* style inject shadow dom */ const __vue_component__$2 = /*#__PURE__*/ normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);
//
var script$1 = {
    name: 'DynamicScroller',
    components: {
        RecycleScroller: __vue_component__$2
    },
    provide () {
        if (typeof ResizeObserver !== 'undefined') this.$_resizeObserver = new ResizeObserver((entries)=>{
            requestAnimationFrame(()=>{
                if (!Array.isArray(entries)) return;
                for (const entry of entries)if (entry.target) {
                    const event = new CustomEvent('resize', {
                        detail: {
                            contentRect: entry.contentRect
                        }
                    });
                    entry.target.dispatchEvent(event);
                }
            });
        });
        return {
            vscrollData: this.vscrollData,
            vscrollParent: this,
            vscrollResizeObserver: this.$_resizeObserver
        };
    },
    inheritAttrs: false,
    props: {
        ...props,
        minItemSize: {
            type: [
                Number,
                String
            ],
            required: true
        }
    },
    data () {
        return {
            vscrollData: {
                active: true,
                sizes: {},
                validSizes: {},
                keyField: this.keyField,
                simpleArray: false
            }
        };
    },
    computed: {
        simpleArray,
        itemsWithSize () {
            const result = [];
            const { items, keyField, simpleArray } = this;
            const sizes = this.vscrollData.sizes;
            const l = items.length;
            for(let i = 0; i < l; i++){
                const item = items[i];
                const id = simpleArray ? i : item[keyField];
                let size = sizes[id];
                if (typeof size === 'undefined' && !this.$_undefinedMap[id]) size = 0;
                result.push({
                    item,
                    id,
                    size
                });
            }
            return result;
        },
        listeners () {
            const listeners = {};
            for(const key in this.$listeners)if (key !== 'resize' && key !== 'visible') listeners[key] = this.$listeners[key];
            return listeners;
        }
    },
    watch: {
        items () {
            this.forceUpdate(false);
        },
        simpleArray: {
            handler (value) {
                this.vscrollData.simpleArray = value;
            },
            immediate: true
        },
        direction (value) {
            this.forceUpdate(true);
        },
        itemsWithSize (next, prev) {
            const scrollTop = this.$el.scrollTop;
            // Calculate total diff between prev and next sizes
            // over current scroll top. Then add it to scrollTop to
            // avoid jumping the contents that the user is seeing.
            let prevActiveTop = 0;
            let activeTop = 0;
            const length = Math.min(next.length, prev.length);
            for(let i = 0; i < length; i++){
                if (prevActiveTop >= scrollTop) break;
                prevActiveTop += prev[i].size || this.minItemSize;
                activeTop += next[i].size || this.minItemSize;
            }
            const offset = activeTop - prevActiveTop;
            if (offset === 0) return;
            this.$el.scrollTop += offset;
        }
    },
    beforeCreate () {
        this.$_updates = [];
        this.$_undefinedSizes = 0;
        this.$_undefinedMap = {};
    },
    activated () {
        this.vscrollData.active = true;
    },
    deactivated () {
        this.vscrollData.active = false;
    },
    methods: {
        onScrollerResize () {
            const scroller = this.$refs.scroller;
            if (scroller) this.forceUpdate();
            this.$emit('resize');
        },
        onScrollerVisible () {
            this.$emit('vscroll:update', {
                force: false
            });
            this.$emit('visible');
        },
        forceUpdate (clear = true) {
            if (clear || this.simpleArray) this.vscrollData.validSizes = {};
            this.$emit('vscroll:update', {
                force: true
            });
        },
        scrollToItem (index) {
            const scroller = this.$refs.scroller;
            if (scroller) scroller.scrollToItem(index);
        },
        getItemSize (item, index) {
            const id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
            return this.vscrollData.sizes[id] || 0;
        },
        scrollToBottom () {
            if (this.$_scrollingToBottom) return;
            this.$_scrollingToBottom = true;
            const el = this.$el;
            // Item is inserted to the DOM
            this.$nextTick(()=>{
                el.scrollTop = el.scrollHeight + 5000;
                // Item sizes are computed
                const cb = ()=>{
                    el.scrollTop = el.scrollHeight + 5000;
                    requestAnimationFrame(()=>{
                        el.scrollTop = el.scrollHeight + 5000;
                        if (this.$_undefinedSizes === 0) this.$_scrollingToBottom = false;
                        else requestAnimationFrame(cb);
                    });
                };
                requestAnimationFrame(cb);
            });
        }
    }
};
/* script */ const __vue_script__$1 = script$1;
/* template */ var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("RecycleScroller", _vm._g(_vm._b({
        ref: "scroller",
        attrs: {
            items: _vm.itemsWithSize,
            "min-item-size": _vm.minItemSize,
            direction: _vm.direction,
            "key-field": "id",
            "list-tag": _vm.listTag,
            "item-tag": _vm.itemTag
        },
        on: {
            resize: _vm.onScrollerResize,
            visible: _vm.onScrollerVisible
        },
        scopedSlots: _vm._u([
            {
                key: "default",
                fn: function(ref) {
                    var itemWithSize = ref.item;
                    var index = ref.index;
                    var active = ref.active;
                    return [
                        _vm._t("default", null, null, {
                            item: itemWithSize.item,
                            index: index,
                            active: active,
                            itemWithSize: itemWithSize
                        })
                    ];
                }
            }
        ], null, true)
    }, "RecycleScroller", _vm.$attrs, false), _vm.listeners), [
        _vm._v(" "),
        _c("template", {
            slot: "before"
        }, [
            _vm._t("before")
        ], 2),
        _vm._v(" "),
        _c("template", {
            slot: "after"
        }, [
            _vm._t("after")
        ], 2),
        _vm._v(" "),
        _c("template", {
            slot: "empty"
        }, [
            _vm._t("empty")
        ], 2)
    ], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */ const __vue_inject_styles__$1 = undefined;
/* scoped */ const __vue_scope_id__$1 = undefined;
/* module identifier */ const __vue_module_identifier__$1 = undefined;
/* functional template */ const __vue_is_functional_template__$1 = false;
/* style inject */ /* style inject SSR */ /* style inject shadow dom */ const __vue_component__$1 = /*#__PURE__*/ normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);
var script = {
    name: 'DynamicScrollerItem',
    inject: [
        'vscrollData',
        'vscrollParent',
        'vscrollResizeObserver'
    ],
    props: {
        // eslint-disable-next-line vue/require-prop-types
        item: {
            required: true
        },
        watchData: {
            type: Boolean,
            default: false
        },
        /**
     * Indicates if the view is actively used to display an item.
     */ active: {
            type: Boolean,
            required: true
        },
        index: {
            type: Number,
            default: undefined
        },
        sizeDependencies: {
            type: [
                Array,
                Object
            ],
            default: null
        },
        emitResize: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    computed: {
        id () {
            if (this.vscrollData.simpleArray) return this.index;
            // eslint-disable-next-line no-prototype-builtins
            if (this.item.hasOwnProperty(this.vscrollData.keyField)) return this.item[this.vscrollData.keyField];
            throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        },
        size () {
            return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
        },
        finalActive () {
            return this.active && this.vscrollData.active;
        }
    },
    watch: {
        watchData: 'updateWatchData',
        id () {
            if (!this.size) this.onDataUpdate();
        },
        finalActive (value) {
            if (!this.size) {
                if (value) {
                    if (!this.vscrollParent.$_undefinedMap[this.id]) {
                        this.vscrollParent.$_undefinedSizes++;
                        this.vscrollParent.$_undefinedMap[this.id] = true;
                    }
                } else if (this.vscrollParent.$_undefinedMap[this.id]) {
                    this.vscrollParent.$_undefinedSizes--;
                    this.vscrollParent.$_undefinedMap[this.id] = false;
                }
            }
            if (this.vscrollResizeObserver) {
                if (value) this.observeSize();
                else this.unobserveSize();
            } else if (value && this.$_pendingVScrollUpdate === this.id) this.updateSize();
        }
    },
    created () {
        if (this.$isServer) return;
        this.$_forceNextVScrollUpdate = null;
        this.updateWatchData();
        if (!this.vscrollResizeObserver) {
            for(const k in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[k], this.onDataUpdate);
            this.vscrollParent.$on('vscroll:update', this.onVscrollUpdate);
            this.vscrollParent.$on('vscroll:update-size', this.onVscrollUpdateSize);
        }
    },
    mounted () {
        if (this.vscrollData.active) {
            this.updateSize();
            this.observeSize();
        }
    },
    beforeDestroy () {
        this.vscrollParent.$off('vscroll:update', this.onVscrollUpdate);
        this.vscrollParent.$off('vscroll:update-size', this.onVscrollUpdateSize);
        this.unobserveSize();
    },
    methods: {
        updateSize () {
            if (this.finalActive) {
                if (this.$_pendingSizeUpdate !== this.id) {
                    this.$_pendingSizeUpdate = this.id;
                    this.$_forceNextVScrollUpdate = null;
                    this.$_pendingVScrollUpdate = null;
                    this.computeSize(this.id);
                }
            } else this.$_forceNextVScrollUpdate = this.id;
        },
        updateWatchData () {
            if (this.watchData && !this.vscrollResizeObserver) this.$_watchData = this.$watch('item', ()=>{
                this.onDataUpdate();
            }, {
                deep: true
            });
            else if (this.$_watchData) {
                this.$_watchData();
                this.$_watchData = null;
            }
        },
        onVscrollUpdate ({ force }) {
            // If not active, sechedule a size update when it becomes active
            if (!this.finalActive && force) this.$_pendingVScrollUpdate = this.id;
            if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) this.updateSize();
        },
        onDataUpdate () {
            this.updateSize();
        },
        computeSize (id) {
            this.$nextTick(()=>{
                if (this.id === id) {
                    const width = this.$el.offsetWidth;
                    const height = this.$el.offsetHeight;
                    this.applySize(width, height);
                }
                this.$_pendingSizeUpdate = null;
            });
        },
        applySize (width, height) {
            const size = ~~(this.vscrollParent.direction === 'vertical' ? height : width);
            if (size && this.size !== size) {
                if (this.vscrollParent.$_undefinedMap[this.id]) {
                    this.vscrollParent.$_undefinedSizes--;
                    this.vscrollParent.$_undefinedMap[this.id] = undefined;
                }
                this.$set(this.vscrollData.sizes, this.id, size);
                this.$set(this.vscrollData.validSizes, this.id, true);
                if (this.emitResize) this.$emit('resize', this.id);
            }
        },
        observeSize () {
            if (!this.vscrollResizeObserver || !this.$el.parentNode) return;
            this.vscrollResizeObserver.observe(this.$el.parentNode);
            this.$el.parentNode.addEventListener('resize', this.onResize);
        },
        unobserveSize () {
            if (!this.vscrollResizeObserver) return;
            this.vscrollResizeObserver.unobserve(this.$el.parentNode);
            this.$el.parentNode.removeEventListener('resize', this.onResize);
        },
        onResize (event) {
            const { width, height } = event.detail.contentRect;
            this.applySize(width, height);
        }
    },
    render (h) {
        return h(this.tag, this.$slots.default);
    }
};
/* script */ const __vue_script__ = script;
/* template */ /* style */ const __vue_inject_styles__ = undefined;
/* scoped */ const __vue_scope_id__ = undefined;
/* module identifier */ const __vue_module_identifier__ = undefined;
/* functional template */ const __vue_is_functional_template__ = undefined;
/* style inject */ /* style inject SSR */ /* style inject shadow dom */ const __vue_component__ = /*#__PURE__*/ normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);
function IdState({ idProp = (vm)=>vm.item.id } = {}) {
    const store = {};
    const vm = new (0, _vueDefault.default)({
        data () {
            return {
                store
            };
        }
    });
    // @vue/component
    return {
        data () {
            return {
                idState: null
            };
        },
        created () {
            this.$_id = null;
            if (typeof idProp === 'function') this.$_getId = ()=>idProp.call(this, this);
            else this.$_getId = ()=>this[idProp];
            this.$watch(this.$_getId, {
                handler (value) {
                    this.$nextTick(()=>{
                        this.$_id = value;
                    });
                },
                immediate: true
            });
            this.$_updateIdState();
        },
        beforeUpdate () {
            this.$_updateIdState();
        },
        methods: {
            /**
       * Initialize an idState
       * @param {number|string} id Unique id for the data
       */ $_idStateInit (id) {
                const factory = this.$options.idState;
                if (typeof factory === 'function') {
                    const data = factory.call(this, this);
                    vm.$set(store, id, data);
                    this.$_id = id;
                    return data;
                } else throw new Error('[mixin IdState] Missing `idState` function on component definition.');
            },
            /**
       * Ensure idState is created and up-to-date
       */ $_updateIdState () {
                const id = this.$_getId();
                if (id == null) console.warn(`No id found for IdState with idProp: '${idProp}'.`);
                if (id !== this.$_id) {
                    if (!store[id]) this.$_idStateInit(id);
                    this.idState = store[id];
                }
            }
        }
    };
}
function registerComponents(Vue, prefix) {
    Vue.component(`${prefix}recycle-scroller`, __vue_component__$2);
    Vue.component(`${prefix}RecycleScroller`, __vue_component__$2);
    Vue.component(`${prefix}dynamic-scroller`, __vue_component__$1);
    Vue.component(`${prefix}DynamicScroller`, __vue_component__$1);
    Vue.component(`${prefix}dynamic-scroller-item`, __vue_component__);
    Vue.component(`${prefix}DynamicScrollerItem`, __vue_component__);
}
const plugin = {
    // eslint-disable-next-line no-undef
    version: "1.1.2",
    install (Vue, options) {
        const finalOptions = Object.assign({}, {
            installComponents: true,
            componentsPrefix: ''
        }, options);
        for(const key in finalOptions)if (typeof finalOptions[key] !== 'undefined') config[key] = finalOptions[key];
        if (finalOptions.installComponents) registerComponents(Vue, finalOptions.componentsPrefix);
    }
};
// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;
else if (typeof global !== 'undefined') GlobalVue = global.Vue;
if (GlobalVue) GlobalVue.use(plugin);

},{"vue-resize":"TdRKM","vue-observe-visibility":"gJp90","scrollparent":"aDc8O","vue":"hO3OD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"TdRKM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "install", ()=>install);
parcelHelpers.export(exports, "ResizeObserver", ()=>ResizeObserver);
var global = arguments[3];
function getInternetExplorerVersion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    // other browser
    return -1;
}
var isIE = void 0;
function initCompat() {
    if (!initCompat.init) {
        initCompat.init = true;
        isIE = getInternetExplorerVersion() !== -1;
    }
}
var ResizeObserver = {
    render: function render() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('div', {
            staticClass: "resize-observer",
            attrs: {
                "tabindex": "-1"
            }
        });
    },
    staticRenderFns: [],
    _scopeId: 'data-v-b329ee4c',
    name: 'resize-observer',
    methods: {
        compareAndNotify: function compareAndNotify() {
            if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
                this._w = this.$el.offsetWidth;
                this._h = this.$el.offsetHeight;
                this.$emit('notify');
            }
        },
        addResizeHandlers: function addResizeHandlers() {
            this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
            this.compareAndNotify();
        },
        removeResizeHandlers: function removeResizeHandlers() {
            if (this._resizeObject && this._resizeObject.onload) {
                if (!isIE && this._resizeObject.contentDocument) this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
                delete this._resizeObject.onload;
            }
        }
    },
    mounted: function mounted() {
        var _this = this;
        initCompat();
        this.$nextTick(function() {
            _this._w = _this.$el.offsetWidth;
            _this._h = _this.$el.offsetHeight;
        });
        var object = document.createElement('object');
        this._resizeObject = object;
        object.setAttribute('aria-hidden', 'true');
        object.setAttribute('tabindex', -1);
        object.onload = this.addResizeHandlers;
        object.type = 'text/html';
        if (isIE) this.$el.appendChild(object);
        object.data = 'about:blank';
        if (!isIE) this.$el.appendChild(object);
    },
    beforeDestroy: function beforeDestroy() {
        this.removeResizeHandlers();
    }
};
// Install the components
function install(Vue) {
    Vue.component('resize-observer', ResizeObserver);
    Vue.component('ResizeObserver', ResizeObserver);
}
// Plugin
var plugin = {
    // eslint-disable-next-line no-undef
    version: "0.4.5",
    install: install
};
// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;
else if (typeof global !== 'undefined') GlobalVue = global.Vue;
if (GlobalVue) GlobalVue.use(plugin);
exports.default = plugin;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gJp90":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObserveVisibility", ()=>ObserveVisibility);
parcelHelpers.export(exports, "install", ()=>install);
var global = arguments[3];
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function processOptions(value) {
    var options;
    if (typeof value === 'function') // Simple options (callback-only)
    options = {
        callback: value
    };
    else // Options object
    options = value;
    return options;
}
function throttle(callback, delay) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var timeout;
    var lastState;
    var currentArgs;
    var throttled = function throttled(state) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        currentArgs = args;
        if (timeout && state === lastState) return;
        var leading = options.leading;
        if (typeof leading === 'function') leading = leading(state, lastState);
        if ((!timeout || state !== lastState) && leading) callback.apply(void 0, [
            state
        ].concat(_toConsumableArray(currentArgs)));
        lastState = state;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            callback.apply(void 0, [
                state
            ].concat(_toConsumableArray(currentArgs)));
            timeout = 0;
        }, delay);
    };
    throttled._clear = function() {
        clearTimeout(timeout);
        timeout = null;
    };
    return throttled;
}
function deepEqual(val1, val2) {
    if (val1 === val2) return true;
    if (_typeof(val1) === 'object') {
        for(var key in val1){
            if (!deepEqual(val1[key], val2[key])) return false;
        }
        return true;
    }
    return false;
}
var VisibilityState = /*#__PURE__*/ function() {
    function VisibilityState(el, options, vnode) {
        _classCallCheck(this, VisibilityState);
        this.el = el;
        this.observer = null;
        this.frozen = false;
        this.createObserver(options, vnode);
    }
    _createClass(VisibilityState, [
        {
            key: "createObserver",
            value: function createObserver(options, vnode) {
                var _this = this;
                if (this.observer) this.destroyObserver();
                if (this.frozen) return;
                this.options = processOptions(options);
                this.callback = function(result, entry) {
                    _this.options.callback(result, entry);
                    if (result && _this.options.once) {
                        _this.frozen = true;
                        _this.destroyObserver();
                    }
                }; // Throttle
                if (this.callback && this.options.throttle) {
                    var _ref = this.options.throttleOptions || {}, _leading = _ref.leading;
                    this.callback = throttle(this.callback, this.options.throttle, {
                        leading: function leading(state) {
                            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
                        }
                    });
                }
                this.oldResult = undefined;
                this.observer = new IntersectionObserver(function(entries) {
                    var entry = entries[0];
                    if (entries.length > 1) {
                        var intersectingEntry = entries.find(function(e) {
                            return e.isIntersecting;
                        });
                        if (intersectingEntry) entry = intersectingEntry;
                    }
                    if (_this.callback) {
                        // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
                        var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
                        if (result === _this.oldResult) return;
                        _this.oldResult = result;
                        _this.callback(result, entry);
                    }
                }, this.options.intersection); // Wait for the element to be in document
                vnode.context.$nextTick(function() {
                    if (_this.observer) _this.observer.observe(_this.el);
                });
            }
        },
        {
            key: "destroyObserver",
            value: function destroyObserver() {
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer = null;
                } // Cancel throttled call
                if (this.callback && this.callback._clear) {
                    this.callback._clear();
                    this.callback = null;
                }
            }
        },
        {
            key: "threshold",
            get: function get() {
                return this.options.intersection && this.options.intersection.threshold || 0;
            }
        }
    ]);
    return VisibilityState;
}();
function bind(el, _ref2, vnode) {
    var value = _ref2.value;
    if (!value) return;
    if (typeof IntersectionObserver === 'undefined') console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
    else {
        var state = new VisibilityState(el, value, vnode);
        el._vue_visibilityState = state;
    }
}
function update(el, _ref3, vnode) {
    var value = _ref3.value, oldValue = _ref3.oldValue;
    if (deepEqual(value, oldValue)) return;
    var state = el._vue_visibilityState;
    if (!value) {
        unbind(el);
        return;
    }
    if (state) state.createObserver(value, vnode);
    else bind(el, {
        value: value
    }, vnode);
}
function unbind(el) {
    var state = el._vue_visibilityState;
    if (state) {
        state.destroyObserver();
        delete el._vue_visibilityState;
    }
}
var ObserveVisibility = {
    bind: bind,
    update: update,
    unbind: unbind
};
function install(Vue) {
    Vue.directive('observe-visibility', ObserveVisibility);
/* -- Add more components here -- */ }
/* -- Plugin definition & Auto-install -- */ /* You shouldn't have to modify the code below */ // Plugin
var plugin = {
    // eslint-disable-next-line no-undef
    version: "0.4.6",
    install: install
};
var GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;
else if (typeof global !== 'undefined') GlobalVue = global.Vue;
if (GlobalVue) GlobalVue.use(plugin);
exports.default = plugin;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aDc8O":[function(require,module,exports,__globalThis) {
(function(root, factory) {
    if (typeof define === "function" && define.amd) define([], factory);
    else if (module.exports) module.exports = factory();
    else root.Scrollparent = factory();
})(this, function() {
    function isScrolling(node) {
        var overflow = getComputedStyle(node, null).getPropertyValue("overflow");
        return overflow.indexOf("scroll") > -1 || overflow.indexOf("auto") > -1;
    }
    function scrollParent(node) {
        if (!(node instanceof HTMLElement || node instanceof SVGElement)) return undefined;
        var current = node.parentNode;
        while(current.parentNode){
            if (isScrolling(current)) return current;
            current = current.parentNode;
        }
        return document.scrollingElement || document.documentElement;
    }
    return scrollParent;
});

},{}],"bfwHq":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "mdContent"
    }, [
        _c('div', {
            staticClass: "header"
        }, [
            _c('div', {
                staticClass: "buscar-caja",
                class: {
                    isOpened: _vm.isOpened
                }
            }, [
                _c('input', {
                    directives: [
                        {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search,
                            expression: "search"
                        }
                    ],
                    staticClass: "buscar-txt",
                    class: {
                        isOpened: _vm.isOpened
                    },
                    attrs: {
                        "type": "text",
                        "name": "",
                        "placeholder": "Search..."
                    },
                    domProps: {
                        "value": _vm.search
                    },
                    on: {
                        "input": function($event) {
                            if ($event.target.composing) return;
                            _vm.search = $event.target.value;
                        }
                    }
                }),
                _vm._v(" "),
                _c('a', {
                    staticClass: "md-icon-button buscar-btn",
                    on: {
                        "click": _vm.openSearchBar
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("search")
                    ])
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _vm.tempList.length > 0 && _vm.appState === _vm.STATES.normal ? _c('div', {
            staticClass: "_container"
        }, [
            _c('md-content', {
                staticClass: "listItem md-scrollbar"
            }, [
                _c('RecycleScroller', {
                    attrs: {
                        "items": _vm.tempList,
                        "item-size": 60,
                        "key-field": "id"
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "default",
                            fn: function(ref) {
                                var item = ref.item;
                                return [
                                    _c('div', {
                                        staticClass: "listContainer",
                                        on: {
                                            "mouseover": function($event) {
                                                return _vm.eventMethod('mouseover', item);
                                            },
                                            "mouseleave": function($event) {
                                                return _vm.eventMethod('mouseleave', item);
                                            }
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-list-item-text"
                                        }, [
                                            _vm._v(_vm._s(item.name))
                                        ]),
                                        _vm._v(" "),
                                        _vm.elementExistInCategory(item) ? _c('div', {
                                            staticClass: "groupColor",
                                            style: {
                                                backgroundColor: item.groupColor
                                            },
                                            attrs: {
                                                "title": 'Linked to ' + item.groupName
                                            }
                                        }) : _vm._e(),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button panel_link_button",
                                            on: {
                                                "click": function($event) {
                                                    return _vm.linkUnlink(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v(_vm._s(_vm.getIcon(item)))
                                            ])
                                        ], 1)
                                    ], 1)
                                ];
                            }
                        }
                    ], null, false, 2627940874)
                })
            ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.tempList.length === 0 && _vm.appState === _vm.STATES.normal ? _c('div', {
            staticClass: "_container empty"
        }, [
            _vm._v("\n\t\t\tNo Data found !\n\t\t")
        ]) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.loading ? _c('div', {
            staticClass: "_container empty"
        }, [
            _c('md-progress-spinner', {
                staticClass: "spiner",
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.error ? _c('div', {
            staticClass: "_container empty"
        }, [
            _vm._v("\n\t\t\tSorry, Something was wrong. Please retry !!\n\t\t")
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8wJqJ":[function() {},{}],"hv6ST":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b54DD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d824f09aae892243");
    if (script.__esModule) script = script.default;
    script.render = require("a55057304c009daf").render;
    script.staticRenderFns = require("a55057304c009daf").staticRenderFns;
    script._scopeId = "data-v-1938f5";
    script.__cssModules = require("2d5e0ae9625d8820").default;
    require("47789b8c34c4f055").default(script);
    script.__scopeId = 'data-v-1938f5';
    script.__file = "globalLinkerPanel.vue";
};
initialize();
exports.default = script;

},{"d824f09aae892243":"1g5UV","a55057304c009daf":"leBRT","2d5e0ae9625d8820":"9gPOD","47789b8c34c4f055":"aMBMy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1g5UV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../../services/service");
var _tableComponentVue = require("../others/tableComponent.vue");
var _tableComponentVueDefault = parcelHelpers.interopDefault(_tableComponentVue);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var scriptExports = {
    name: "GlobalLinkerPanel",
    props: [
        "onFinised"
    ],
    components: {
        "table-component": (0, _tableComponentVueDefault.default)
    },
    data () {
        this.contextId = null;
        return {
            showDialog: true,
            inputValue: "",
            // search: null,
            searched: [],
            groups: [],
            elements: [],
            allData: []
        };
    },
    methods: {
        opened (option) {
            this.getData(option.nodeId, option.contextId).then((res)=>{
                if (res) {
                    // console.log("res", res);
                    this.groups = res.groups;
                    this.elements = res.elements.slice(0, 10);
                    this.searched = res.elements.slice(0, 10);
                    // this.elements = res.elements;
                    // this.searched = res.elements;
                    this.contextId = res.contextId;
                // console.log("start");
                // this.allData = await this.getList(this.groups, this.elements);
                // console.log("end", this.allData);
                }
            });
        },
        // removed() {
        //   this.showDialog = false;
        // },
        // closeDialog(closeResult) {
        //   if (typeof this.onFinised === "function") {
        //     this.onFinised(closeResult);
        //   }
        // },
        searchOnTable (params) {
            this.filterByFloor(params.floorsSelected).then((res)=>{
                if (params.search && params.search.trim().length > 0) this.searched = res.filter((el)=>{
                    return el.name.toLowerCase().includes(params.search.toLowerCase());
                });
                else this.searched = res;
            });
        },
        filterByFloor (floorsIds) {
            if (floorsIds.length === 0) return Promise.resolve(this.elements);
            else {
                let promises = [];
                let contextType = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.contextId).type.get();
                let type = contextType === (0, _service.groupService).constants.ROOMS_GROUP_CONTEXT ? (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE : (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE;
                for(let index = 0; index < floorsIds.length; index++){
                    const id = floorsIds[index];
                    promises.push((0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(id, (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS, (node)=>{
                        return node.info.type.get() === type;
                    }));
                }
                return Promise.all(promises).then((el)=>{
                    let res = [];
                    for (let found of el){
                        let foundInfo = found.map((x)=>x.info);
                        res.push(...foundInfo);
                    }
                    return new (0, _spinalCoreConnectorjsType.Lst)(res).get();
                });
            }
        },
        // getList(groups, elements) {
        //   let res = elements.map(element => {
        //     let obj = [Promise.resolve(element.name)];
        //     const l = groups.map(group => {
        //       return groupService.elementIsLinkedToGroup(group.id, element.id);
        //     });
        //     return Promise.all(obj.concat(l));
        //   });
        //   return Promise.all(res);
        // },
        getData (nodeId, contextId) {
            const contextType = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(contextId).type.get();
            let selectedContextRelation = [
                (0, _service.groupService).constants.CATEGORY_TO_GROUP_RELATION,
                (0, _service.groupService).constants
            ];
            let refContextName = contextType === (0, _service.groupService).constants.ROOMS_GROUP_CONTEXT ? (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_REFERENCE_CONTEXT : (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).constants.BIM_OBJECT_CONTEXT_TYPE;
            let refContextRelation = contextType === (0, _service.groupService).constants.ROOMS_GROUP_CONTEXT ? (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_RELATION : (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).constants.BIM_OBJECT_RELATION_NAME;
            let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(refContextName);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, selectedContextRelation, (node)=>{
                let type = node.getType().get();
                return type === (0, _service.groupService).constants.ROOMS_GROUP || type === (0, _service.groupService).constants.EQUIPMENTS_GROUP;
            }).then(async (res)=>{
                return {
                    contextId: contextId,
                    groups: res.map((el)=>el.info.get()),
                    elements: context ? await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(context.info.id.get(), [
                        refContextRelation
                    ]).then((el)=>{
                        return el.map((x)=>x.get());
                    }) : []
                };
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/service":"84KG2","../others/tableComponent.vue":"dqeLj","spinal-core-connectorjs_type":"1A32E","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-bimobjectservice":"19m0a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"84KG2":[function(require,module,exports,__globalThis) {
const { SPINAL_RELATION_PTR_LST_TYPE, SpinalGraphService } = require("bae9fe1938ea9bca");
const { Model } = require("e509c984e0dbbabc");
const constants = require("bd6e938e9e366621");
const { default: groupManagerService } = require("8ccff7ee81184cc0");
const { default: utilities } = require("9d5fcd89d492a04c");
let groupService = {
    constants: constants,
    createGroupContext (name, type) {
        return groupManagerService.createGroupContext(name, type);
    },
    addElement (contextId, elementId, elementType, elementName, iconName, color) {
        let contextInfo = SpinalGraphService.getInfo(contextId);
        let contextType = contextInfo && contextInfo.type ? contextInfo.type.get() : undefined;
        let typeAndRelation = this.getTypeAndRelation(elementType, contextType);
        let type = typeAndRelation.type;
        let relationName = typeAndRelation.relation;
        if (type && relationName) {
            let info = {
                name: elementName,
                type: type,
                icon: iconName,
                color: color
            };
            let childId = SpinalGraphService.createNode(info, new Model({
                name: elementName
            }));
            return SpinalGraphService.addChildInContext(elementId, childId, contextId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
        }
    },
    elementIsLinkedToGroup (groupId, elementId) {
        return groupManagerService.elementIsLinkedToGroup(groupId, elementId);
    },
    linkElementToGroup (groupId, elementId, contextId) {
        return groupManagerService.linkElementToGroup(contextId, groupId, elementId);
    },
    removeLink (groupId, elementId) {
        return groupManagerService.removeLink(groupId, elementId);
    },
    getTypeAndRelation (elementType, contextType) {
        switch(elementType){
            case contextType:
                return {
                    type: constants.CATEGORY_TYPE,
                    relation: constants.CONTEXT_TO_CATEGORY_RELATION
                };
            case constants.CATEGORY_TYPE:
                let type = constants.CONTEXT_GROUP_ASSOCIATION.get(contextType);
                return {
                    type: type,
                    relation: constants.CATEGORY_TO_GROUP_RELATION
                };
            default:
                return {};
        }
    },
    getElementsLinked (groupId) {
        return groupManagerService.getElementsLinked(groupId);
    },
    getGroups (selectedNode) {
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if (constants.GROUP_RELATION_ASSOCIATION.get(type)) return Promise.resolve([
            selectedNode
        ]);
        return utilities.getGroups(nodeId);
    },
    getCategorie (selectedNode) {
        return groupManagerService.getCategories(selectedNode.id.get());
    },
    elementIsInCategorie (categoryId, elementId) {
        return groupManagerService.elementIsInCategorie(categoryId, elementId);
    }
};
module.exports = {
    groupService
};

},{"bae9fe1938ea9bca":"9LAk7","e509c984e0dbbabc":"1A32E","bd6e938e9e366621":"htQY9","8ccff7ee81184cc0":"gmxoN","9d5fcd89d492a04c":"lzCVv"}],"htQY9":[function(require,module,exports,__globalThis) {
// ////////////////////////////////////////////////////
// // ROOMS
// ////////////////////////////////////////////////////
// const ROOMS_GROUP_CONTEXT = "RoomsGroupContext";
// const ROOMS_GROUP = "RoomsGroup";
// const ROOMS_GROUP_RELATION = "hasRoomsGroup";
// const ROOMS_TO_ELEMENT_RELATION = "groupHasRooms";
// const ROOMS_CATEGORY = "Rooms_category";
// const ROOMS_CATEGORY_RELATION = "hasRoomsCategory";
// ///////////////////////////////////////////////////////
// // BimObject
// ///////////////////////////////////////////////////////
// const EQUIPMENTS_GROUP_CONTEXT = "EquipmentGroupContext";
// const EQUIPMENTS_GROUP = "EquipmentGroup";
// const EQUIPMENTS_GROUP_RELATION = "hasEquipmentsGroup";
// const EQUIPMENTS_TO_ELEMENT_RELATION = "groupHasEquipments";
// const EQUIPMENTS_CATEGORY = "Equipment_category";
// const EQUIPMENTS_CATEGORY_RELATION = "hasEquipmentsCategory";
// const typeLst = [
//   ROOMS_GROUP_CONTEXT,
//   ROOMS_GROUP,
//   ROOMS_CATEGORY,
//   EQUIPMENTS_GROUP_CONTEXT,
//   EQUIPMENTS_GROUP,
//   EQUIPMENTS_CATEGORY
// ]
// const TYPE_AND_RELATION = new Map();
// TYPE_AND_RELATION.set(ROOMS_GROUP_CONTEXT, ROOMS_CATEGORY_RELATION)
// TYPE_AND_RELATION.set(ROOMS_GROUP, ROOMS_TO_ELEMENT_RELATION)
// TYPE_AND_RELATION.set(ROOMS_CATEGORY, ROOMS_GROUP_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_GROUP_CONTEXT, EQUIPMENTS_CATEGORY_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_GROUP, EQUIPMENTS_TO_ELEMENT_RELATION)
// TYPE_AND_RELATION.set(EQUIPMENTS_CATEGORY, EQUIPMENTS_GROUP_RELATION)
// const CONTEXT_TYPE = "groupingContext";
// const CATEGORY_TYPE = "groupingCategory";
// ///////////////////////////////////////////
// //            Groups Types               //
// ///////////////////////////////////////////
// const ROOMS_GROUP = "roomsGroup";
// const EQUIPMENTS_GROUP = "equipmentGroup";
// const ENDPOINT_GROUP = "endpointGroup"
// ///////////////////////////////////////////
// //            Relations                  //
// ///////////////////////////////////////////
// const CONTEXT_TO_CATEGORY_RELATION = "hasCategory";
// const CATEGORY_TO_GROUP_RELATION = "hasGroup";
// const GROUP_TO_ROOMS_RELATION = "groupHasRooms";
// const GROUP_TO_EQUIPMENTS_RELATION = "groupHasEquipments";
// const GROUP_TO_ENDPOINT_RELATION = "groupHasEndpoints";
class GroupServiceConstants {
    constructor(){
        ///////////////////////////////////////
        // CONTEXT
        ///////////////////////////////////////
        this.ROOMS_GROUP_CONTEXT = "RoomsGroupContext";
        this.EQUIPMENTS_GROUP_CONTEXT = "EquipmentGroupContext";
        this.ENDPOINTS_GROUP_CONTEXT = "EndpointGroupContext";
        this.CONTEXTS_TYPES = [
            this.ROOMS_GROUP_CONTEXT,
            this.EQUIPMENTS_GROUP_CONTEXT,
            this.ENDPOINTS_GROUP_CONTEXT
        ];
        //Category
        this.CATEGORY_TYPE = "groupingCategory";
        ///////////////////////////////////////////
        //            Groups Types               //
        ///////////////////////////////////////////
        this.ROOMS_GROUP = "roomsGroup";
        this.EQUIPMENTS_GROUP = "equipmentGroup";
        this.ENDPOINT_GROUP = "endpointGroup";
        this.GROUPS_TYPES = [
            this.ROOMS_GROUP,
            this.EQUIPMENTS_GROUP,
            this.ENDPOINT_GROUP
        ];
        ///////////////////////////////////////////
        //            Relations                  //
        ///////////////////////////////////////////
        this.CONTEXT_TO_CATEGORY_RELATION = "hasCategory";
        this.CATEGORY_TO_GROUP_RELATION = "hasGroup";
        this.GROUP_TO_ROOMS_RELATION = "groupHasRooms";
        this.GROUP_TO_EQUIPMENTS_RELATION = "groupHasEquipments";
        this.GROUP_TO_ENDPOINT_RELATION = "groupHasEndpoints";
        ////////////////////////////////////////////
        // Maps
        ////////////////////////////////////////////
        this.CONTEXT_GROUP_ASSOCIATION = new Map([
            [
                this.ROOMS_GROUP_CONTEXT,
                this.ROOMS_GROUP
            ],
            [
                this.EQUIPMENTS_GROUP_CONTEXT,
                this.EQUIPMENTS_GROUP
            ],
            [
                this.ENDPOINTS_GROUP_CONTEXT,
                this.ENDPOINT_GROUP
            ]
        ]);
        this.GROUP_RELATION_ASSOCIATION = new Map([
            [
                this.ROOMS_GROUP,
                this.GROUP_TO_ROOMS_RELATION
            ],
            [
                this.EQUIPMENTS_GROUP,
                this.GROUP_TO_EQUIPMENTS_RELATION
            ],
            [
                this.ENDPOINT_GROUP,
                this.GROUP_TO_ENDPOINT_RELATION
            ]
        ]);
    }
}
module.exports = new GroupServiceConstants();

},{}],"dqeLj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8d8aaaf51d58079b");
    if (script.__esModule) script = script.default;
    script.render = require("2ddff52a76ece8f1").render;
    script.staticRenderFns = require("2ddff52a76ece8f1").staticRenderFns;
    script._scopeId = "data-v-81dc41";
    require("211e7debea324207").default(script);
    script.__scopeId = 'data-v-81dc41';
    script.__file = "tableComponent.vue";
};
initialize();
exports.default = script;

},{"8d8aaaf51d58079b":"2PtC6","2ddff52a76ece8f1":"02t5M","211e7debea324207":"lUkD5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2PtC6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkBoxComponentVue = require("./checkBoxComponent.vue");
var _checkBoxComponentVueDefault = parcelHelpers.interopDefault(_checkBoxComponentVue);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var scriptExports = {
    name: "tableComponent",
    components: {
        "checkbox-component": (0, _checkBoxComponentVueDefault.default)
    },
    props: [
        "searched",
        "groups",
        "contextId"
    ],
    data () {
        this.allFloors = [];
        return {
            filterParams: {
                search: null,
                floorsSelected: []
            }
        };
    },
    mounted () {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext((0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.FLOOR_REFERENCE_CONTEXT);
        if (context) (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(context.info.id.get(), [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.FLOOR_RELATION
        ]).then((res)=>{
            this.allFloors = new (0, _spinalCoreConnectorjsType.Lst)(res).get();
        });
    },
    methods: {
        searchOnTable () {
            this.$emit("filter", this.filterParams);
        }
    },
    watch: {
        filterParams (newValue) {
            this.$emit("filter", newValue);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./checkBoxComponent.vue":"dp1xq","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-graph-service":"9LAk7","spinal-core-connectorjs_type":"1A32E","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dp1xq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("660bec80777c999b");
    if (script.__esModule) script = script.default;
    script.render = require("2a29d62e4ae31698").render;
    script.staticRenderFns = require("2a29d62e4ae31698").staticRenderFns;
    script._scopeId = "data-v-8f7d79";
    require("bcc156f3ffc00546").default(script);
    script.__scopeId = 'data-v-8f7d79';
    script.__file = "checkBoxComponent.vue";
};
initialize();
exports.default = script;

},{"660bec80777c999b":"1iTMG","2a29d62e4ae31698":"kfe3O","bcc156f3ffc00546":"99Wa5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1iTMG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../../services/service");
var scriptExports = {
    name: "checkboxComponent",
    props: [
        "groupId",
        "elementId",
        "contextId"
    ],
    data () {
        return {
            value: false
        };
    },
    mounted () {
        (0, _service.groupService).elementIsLinkedToGroup(this.groupId, this.elementId).then((el)=>{
            // console.log("isLinked", el);
            this.value = el;
        });
    },
    methods: {
        linkElement () {
            (0, _service.groupService).elementIsLinkedToGroup(this.groupId, this.elementId).then((el)=>{
                if (!el) (0, _service.groupService).linkElementToGroup(this.groupId, this.elementId, this.contextId);
                else (0, _service.groupService).removeLink(this.groupId, this.elementId);
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/service":"84KG2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kfe3O":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-checkbox', {
        staticClass: "md-primary",
        on: {
            "change": _vm.linkElement
        },
        model: {
            value: _vm.value,
            callback: function($$v) {
                _vm.value = $$v;
            },
            expression: "value"
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"99Wa5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"02t5M":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-table', {
        staticClass: "table",
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
                                "md-label": "Name",
                                "md-sort-by": "name"
                            }
                        }, [
                            _vm._v(_vm._s(item.name))
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.groups, function(group) {
                            return _c('md-table-cell', {
                                key: group.id,
                                attrs: {
                                    "md-label": group.name
                                }
                            }, [
                                _c('checkbox-component', {
                                    attrs: {
                                        "groupId": group.id,
                                        "elementId": item.id,
                                        "contextId": _vm.contextId
                                    }
                                })
                            ], 1);
                        })
                    ], 2);
                }
            }
        ]),
        model: {
            value: _vm.searched,
            callback: function($$v) {
                _vm.searched = $$v;
            },
            expression: "searched"
        }
    }, [
        _c('md-table-toolbar', {
            staticClass: "md-layout md-gutter"
        }, [
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('md-field', [
                    _c('label', {
                        attrs: {
                            "for": "floors"
                        }
                    }, [
                        _vm._v("Filter By Floor")
                    ]),
                    _vm._v(" "),
                    _c('md-select', {
                        attrs: {
                            "name": "floors",
                            "id": "floors",
                            "multiple": ""
                        },
                        on: {
                            "md-closed": _vm.searchOnTable
                        },
                        model: {
                            value: _vm.filterParams.floorsSelected,
                            callback: function($$v) {
                                _vm.$set(_vm.filterParams, "floorsSelected", $$v);
                            },
                            expression: "filterParams.floorsSelected"
                        }
                    }, _vm._l(_vm.allFloors, function(floor) {
                        return _c('md-option', {
                            key: floor.id,
                            attrs: {
                                "value": floor.id
                            }
                        }, [
                            _vm._v(_vm._s(floor.name))
                        ]);
                    }), 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c('md-field', {
                    attrs: {
                        "md-clearable": ""
                    }
                }, [
                    _c('md-input', {
                        attrs: {
                            "placeholder": "Search by name..."
                        },
                        on: {
                            "input": _vm.searchOnTable
                        },
                        model: {
                            value: _vm.filterParams.search,
                            callback: function($$v) {
                                _vm.$set(_vm.filterParams, "search", $$v);
                            },
                            expression: "filterParams.search"
                        }
                    })
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c('md-table-empty-state', {
            attrs: {
                "md-label": "No Items found"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lUkD5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"19m0a":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let createGraph = (()=>{
    var _ref = _asyncToGenerator(function*() {
        const forgeFile = yield window.spinal.spinalSystem.getModel();
        if (!forgeFile.hasOwnProperty("graph")) forgeFile.add_attr({
            graph: new _spinalModelGraph.SpinalGraph()
        });
        return forgeFile.graph;
    });
    return function createGraph() {
        return _ref.apply(this, arguments);
    };
})();
let createContext = (()=>{
    var _ref2 = _asyncToGenerator(function*() {
        const graph = yield this.getGraph();
        let context = yield graph.getContext(BIM_OBJECT_CONTEXT_TYPE);
        if (context === undefined) {
            context = new _spinalModelGraph.SpinalContext(BIM_OBJECT_CONTEXT_TYPE);
            yield graph.addContext(context);
        }
        return context;
    });
    return function createContext() {
        return _ref2.apply(this, arguments);
    };
})();
var _spinalModelGraph = require("8f95959f039a5af0");
var _spinalModelsBimobject = require("bef1fdfaa932d2b5");
var _spinalModelsBimobject2 = _interopRequireDefault(_spinalModelsBimobject);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) resolve(value);
                else return Promise.resolve(value).then(function(value) {
                    step("next", value);
                }, function(err) {
                    step("throw", err);
                });
            }
            return step("next");
        });
    };
}
const BIM_OBJECT_CONTEXT_TYPE = "BIMObjectContext";
const BIM_OBJECT_NODE_TYPE = "BIMObject";
const BIM_OBJECT_RELATION_NAME = "hasBIMObject";
const REFERENCE_OBJECT_RELATION_NAME = "hasReferenceObject";
const BIM_OBJECT_RELATION_TYPE = _spinalModelGraph.SPINAL_RELATION_PTR_LST_TYPE;
const bimObjectService = {
    graph: null,
    context: null,
    getGraph () {
        if (this.graph === null) this.graph = createGraph();
        return this.graph;
    },
    getContext () {
        if (this.context === null) this.context = createContext.call(this);
        return this.context;
    },
    createBIMObject (dbid, name) {
        var _this = this;
        return _asyncToGenerator(function*() {
            let BIMObjNode = yield _this.getBIMObject(dbid);
            if (BIMObjNode === undefined) {
                const BIMObject = new _spinalModelsBimobject2.default(dbid, name);
                BIMObjNode = new _spinalModelGraph.SpinalNode(name, BIM_OBJECT_NODE_TYPE, BIMObject);
                BIMObjNode.info.add_attr({
                    dbid: dbid
                });
                const BIMObjectContext = yield _this.getContext();
                yield BIMObjectContext.addChildInContext(BIMObjNode, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, BIMObjectContext);
            }
            return BIMObjNode;
        })();
    },
    getBIMObject (dbid) {
        var _this2 = this;
        return _asyncToGenerator(function*() {
            const BIMObjectContext = yield _this2.getContext(BIM_OBJECT_CONTEXT_TYPE);
            const BIMObjectArray = yield BIMObjectContext.getChildren([
                BIM_OBJECT_RELATION_NAME
            ]);
            for (let BIMObject of BIMObjectArray){
                if (BIMObject.info.dbid.get() === dbid) return BIMObject;
            }
        })();
    },
    addBIMObject (context, parent, dbId, name) {
        var _this3 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this3.getBIMObject(dbId);
                if (node === undefined) node = yield _this3.createBIMObject(dbId, name);
            }
            yield parent.addChildInContext(node, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE, context);
            return node;
        })();
    },
    removeBIMObject (parent, child) {
        return parent.removeChild(child, BIM_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    },
    deleteBIMObject (dbId) {
        var _this4 = this;
        return _asyncToGenerator(function*() {
            const context = yield _this4.getContext();
            const children = yield context.getChildrenInContext();
            const child = children.find(function(node) {
                return node.info.dbId === dbId;
            });
            if (child === undefined) throw Error("The dbId has no BIM object");
            return child.removeFromGraph();
        })();
    },
    addReferenceObject (parent, dbId, name) {
        var _this5 = this;
        return _asyncToGenerator(function*() {
            let node;
            if (dbId instanceof _spinalModelGraph.SpinalNode) node = dbId;
            else {
                node = yield _this5.getBIMObject(dbId);
                if (node === undefined) node = yield _this5.createBIMObject(dbId, name);
            }
            yield parent.addChild(node, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
            return node;
        })();
    },
    removeReferenceObject (parent, child) {
        return parent.removeChild(child, REFERENCE_OBJECT_RELATION_NAME, BIM_OBJECT_RELATION_TYPE);
    }
};
bimObjectService.constants = {
    BIM_OBJECT_CONTEXT_TYPE,
    BIM_OBJECT_NODE_TYPE,
    BIM_OBJECT_RELATION_NAME,
    REFERENCE_OBJECT_RELATION_NAME,
    BIM_OBJECT_RELATION_TYPE
};
exports.default = bimObjectService;

},{"8f95959f039a5af0":"b87gp","bef1fdfaa932d2b5":"fDqnh"}],"fDqnh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const spinalCore = require("e30868c801f59ada");
const globalType = typeof window === "undefined" ? global : window;
class SpinalBIMObject extends globalType.Model {
    constructor(_id, _name){
        super();
        if (FileSystem._sig_server) this.add_attr({
            id: _id,
            name: _name
        });
    }
}
exports.default = SpinalBIMObject;
spinalCore.register_models([
    SpinalBIMObject
]);

},{"e30868c801f59ada":"cQPh9"}],"leBRT":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('table-component', {
        attrs: {
            "searched": _vm.searched,
            "groups": _vm.groups,
            "contextId": _vm.contextId
        },
        on: {
            "filter": _vm.searchOnTable
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9gPOD":[function() {},{}],"aMBMy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"htaae":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addBimObjectToGroup = require("./addBimObjectToGroup");
parcelHelpers.exportAll(_addBimObjectToGroup, exports);
var _addBimRoomToGroup = require("./addBimRoomToGroup");
parcelHelpers.exportAll(_addBimRoomToGroup, exports);
var _createContextGroup = require("./createContextGroup");
parcelHelpers.exportAll(_createContextGroup, exports);
var _createElement = require("./createElement");
parcelHelpers.exportAll(_createElement, exports);
var _edit = require("./edit");
parcelHelpers.exportAll(_edit, exports);
var _findBimObject = require("./findBimObject");
parcelHelpers.exportAll(_findBimObject, exports);
var _findBimRoom = require("./findBimRoom");
parcelHelpers.exportAll(_findBimRoom, exports);
var _linkRooms = require("./linkRooms");
parcelHelpers.exportAll(_linkRooms, exports);
var _restoreGroupItemColor = require("./restoreGroupItemColor");
parcelHelpers.exportAll(_restoreGroupItemColor, exports);
var _colorGroupItems = require("./colorGroupItems"); // export *  "./viewBtn";
parcelHelpers.exportAll(_colorGroupItems, exports);

},{"./addBimObjectToGroup":"dqYCA","./addBimRoomToGroup":"1768n","./createContextGroup":"f5FIe","./createElement":"8J7Z9","./edit":"dQnIx","./findBimObject":"geDhn","./findBimRoom":"2LF61","./linkRooms":"8KD1D","./restoreGroupItemColor":"9OHHG","./colorGroupItems":"bUvyf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dqYCA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("62eb59d75cca9bfa");
const CIRCULARMENU = 'circularMenu';
class AddBimObjectToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add bim object to group", "add bim object to group", {
            icon: 'add_location',
            icon_type: 'in',
            backgroundColor: '#356BAB',
            fontColor: '#FFFFFF'
        });
    }
    isShown(option) {
        return Promise.resolve(option.selectedNode !== "undefined" ? true : -1);
    }
    action(option) {
        if (option.selectedNode) spinalPanelManagerService.openPanel("linkToGroupDialog", {
            type: option.selectedNode.type.get(),
            itemSelected: [
                option.selectedNode.get()
            ]
        });
        else alert("not found");
    }
}
const addBimObjectToGroup = new AddBimObjectToGroup();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULARMENU, addBimObjectToGroup, [
    3
]);
exports.default = addBimObjectToGroup;

},{"spinal-env-viewer-context-menu-service":"3h19D","62eb59d75cca9bfa":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1768n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const { spinalPanelManagerService } = require("9052221f8f96ceb2");
const CIRCULARMENU = 'circularMenu';
class AddRoomToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add room to group", "add room which linked to this object to group", {
            icon: 'playlist_add',
            icon_type: 'in',
            backgroundColor: '#356BAB',
            fontColor: '#FFFFFF'
        });
    }
    async isShown(option) {
        // return Promise.resolve(true);
        const room = await getRoom(option);
        return typeof room !== "undefined" ? true : -1;
    }
    async action(option) {
        const room = await getRoom(option);
        if (room) spinalPanelManagerService.openPanel("linkToGroupDialog", {
            type: (0, _constants.ROOM_TYPE),
            itemSelected: [
                room.get()
            ]
        });
        else alert("no room found");
    }
}
const getRoom = async (option)=>{
    if (option.selectedNode) {
        const id = option.selectedNode.id.get();
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
        let parents = await realNode.getParents([
            (0, _constants.EQUIPMENT_RELATION),
            (0, _constants.REFERENCE_RELATION)
        ]);
        if (!parents || parents && parents.length === 0) return;
        const found = parents.find((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return el.getType().get() === (0, _constants.ROOM_TYPE);
        });
        if (found) return found.info;
    // if (found) {
    //   graphManagerStore.commit("SET_ACTIVE_NODE", found.id.get())
    // }
    }
};
const addRoomToGroup = new AddRoomToGroup();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULARMENU, addRoomToGroup, [
    3
]);
exports.default = addRoomToGroup;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","9052221f8f96ceb2":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5FIe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const HEADERBAR = "GraphManagerTopBar";
class ContextGroupBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create Group Context", "This Button creates a group context", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("selectGroupTypeDialog");
    }
}
const contextGroupBtn = new ContextGroupBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADERBAR, contextGroupBtn, [
    3
]);
exports.default = contextGroupBtn;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8J7Z9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
const SIDEBAR = "GraphManagerSideBar";
class CreateElement extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create Context/Category/Group", "This Button creates a context, category or group", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const isContext = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isContext(type);
        if (isContext) {
            this.label = "Create Category";
            return Promise.resolve(true);
        }
        const isCategory = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type);
        if (isCategory) {
            this.label = "Create Group";
            return Promise.resolve(true);
        }
        const isGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type);
        const isEquipmentGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isEquipementGroup(type);
        if (isGroup && isEquipmentGroup) {
            this.label = "Add equipments selected";
            return Promise.resolve(true);
        }
        return Promise.resolve(-1);
    }
    action(option) {
        const nodeId = option.selectedNode.id.get();
        const type = option.selectedNode.type.get();
        const contextId = option.context.id.get();
        const parameters = {
            title: "",
            contextId: option.context.id.get(),
            selectedNode: option.selectedNode
        };
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isContext(type)) {
            parameters.title = "add Category";
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCategoryDialog", parameters);
        } else if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type)) {
            parameters.title = "add Group";
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupDialog", parameters);
        } else // addBimObject(contextId, nodeId);
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("addBimObjectToGroupDialog", {
            contextId,
            nodeId
        });
    }
}
const addBimObject = (contextId, groupId)=>{
    let selections = window.spinal.ForgeViewer.viewer.getAggregateSelection();
    if (selections.length === 0) {
        alert("select an item");
        return;
    }
    selections = selections.map((el)=>{
        return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(el.model, el.selection);
    });
    Promise.all(selections).then((selected)=>{
        for(let idx = 0; idx < selected.length; idx++){
            const { model, selection } = selected[idx];
            model.getBulkProperties(selection, {
                propFilter: [
                    "name"
                ]
            }, (el)=>{
                el.forEach((element)=>{
                    window.spinal.BimObjectService.createBIMObject(element.dbId, element.name, model).then(()=>{
                        window.spinal.BimObjectService.getBIMObject(element.dbId, model).then((bimObject)=>{
                            if (bimObject) {
                                const bimId = bimObject.id ? bimObject.id.get() : bimObject.info.id.get();
                                (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, groupId, bimId);
                            }
                        });
                    });
                });
            });
        }
    });
};
const createElement = new CreateElement();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createElement, [
    3
]);
exports.default = createElement;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-bim-manager-service":"2m0Kp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dQnIx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const SIDEBAR = "GraphManagerSideBar";
class Edit extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Edit", "This button allows  to edit group", {
            icon: "edit",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let contextType = option.context.type.get();
        let selectedNodeType = option.selectedNode.type.get();
        const isContext = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isContext(contextType);
        const isCategory = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(selectedNodeType);
        const isGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(selectedNodeType);
        if (isContext && (isGroup || isCategory)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        let type = option.selectedNode.type.get();
        let params = {
            edit: true,
            title: `Edit ${option.selectedNode.name.get()}`,
            contextId: option.context.id.get(),
            selectedNode: option.selectedNode
        };
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type)) {
            params["color"] = option.selectedNode.color ? option.selectedNode.color.get() : "#000000";
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupDialog", params);
        } else if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isCategory(type)) {
            params["iconSelected"] = option.selectedNode.icon ? option.selectedNode.icon.get() : undefined;
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCategoryDialog", params);
        }
    }
}
const edit = new Edit();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, edit, [
    3
]);
exports.default = edit;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"geDhn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _store = require("spinal-env-viewer-plugin-graph-manager/src/vue/store");
var _storeDefault = parcelHelpers.interopDefault(_store);
const CIRCULARMENU = 'circularMenu';
class FindBimObject extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("find Object in graph manager", "find object in graph manager", {
            icon: 'location_on',
            icon_type: 'in',
            backgroundColor: '#356BAB',
            fontColor: '#FFFFFF'
        });
    }
    isShown(option) {
        return Promise.resolve(option.selectedNode ? true : -1);
    }
    action(option) {
        if (option.selectedNode && option.selectedNode.id) (0, _storeDefault.default).commit("SET_ACTIVE_NODE", option.selectedNode.id.get());
        else alert("not found");
    }
}
const findBimObject = new FindBimObject();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULARMENU, findBimObject, [
    3
]);
exports.default = findBimObject;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-plugin-graph-manager/src/vue/store":"hRNxf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2LF61":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _store = require("spinal-env-viewer-plugin-graph-manager/src/vue/store");
var _storeDefault = parcelHelpers.interopDefault(_store);
const CIRCULARMENU = 'circularMenu';
class FindBimRoom extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("find room", "find room which linked to this object", {
            icon: 'store',
            icon_type: 'in',
            backgroundColor: '#356BAB',
            fontColor: '#FFFFFF'
        });
    }
    async isShown(option) {
        // return Promise.resolve(true);
        const room = await getRoom(option);
        return typeof room !== "undefined" ? true : -1;
    }
    async action(option) {
        const room = await getRoom(option);
        if (room) (0, _storeDefault.default).commit("SET_ACTIVE_NODE", room.id.get());
        else alert("no room found");
    }
}
const getRoom = async (option)=>{
    if (option.selectedNode) {
        const id = option.selectedNode.id.get();
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
        let parents = await realNode.getParents([
            (0, _constants.EQUIPMENT_RELATION),
            (0, _constants.REFERENCE_RELATION)
        ]);
        if (!parents || parents && parents.length === 0) return;
        const found = parents.find((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return el.getType().get() === (0, _constants.ROOM_TYPE);
        });
        if (found) return found.info;
    // if (found) {
    //   graphManagerStore.commit("SET_ACTIVE_NODE", found.id.get())
    // }
    }
};
const findBimRoom = new FindBimRoom();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULARMENU, findBimRoom, [
    3
]);
exports.default = findBimRoom;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-env-viewer-plugin-graph-manager/src/vue/store":"hRNxf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8KD1D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const SIDEBAR = "GraphManagerSideBar";
class LinkRooms extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("link Rooms", "This button allows to link rooms to Group", {
            icon: "settings_input_component",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let nodeType = option.selectedNode.type.get();
        let isRoomsGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isRoomsGroup(nodeType);
        return Promise.resolve(isRoomsGroup ? true : -1);
    }
    action(option) {
        let nodeType = option.selectedNode.type.get();
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkRoomPanel", {
            contextId: contextId,
            nodeId: nodeId,
            type: nodeType,
            reference: {
                context: (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_REFERENCE_CONTEXT,
                relation: (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_RELATION
            }
        });
    }
}
const linkRooms = new LinkRooms();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkRooms, [
    3
]);
exports.default = linkRooms;

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service":"RdCQo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9OHHG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
const SIDEBAR = "GraphManagerSideBar";
class RestoreGroupItems extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("restore children color", "color all bimobjects inside ", {
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF",
            icon: "visibility_off"
        });
    }
    isShown(option) {
        const nodeType = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isRoomGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isRoomGroupContext(contextType);
        const isEquipmentGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isEquipmentGroupContext(contextType);
        if (!(isRoomGroup || isEquipmentGroup)) return Promise.resolve(-1);
        const isEquipement = nodeType === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE;
        if (isEquipement) return Promise.resolve(-1);
        const isRoom = nodeType === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE;
        if (isRoom) return Promise.resolve(-1);
        return Promise.resolve(true);
    // if (!isRoomOrEquipmentGroupContext || nodeType === geographicService
    //   .constants.EQUIPMENT_TYPE) {
    //   return Promise.resolve(-1);
    // }
    // return utilities.getIcon(option.selectedNode, option.context).then(
    //   (isColored) => {
    //     this.buttonCfg["isColored"] = isColored;
    //     this.buttonCfg.icon = isColored ? "visibility_off" : "visibility";
    //     return true;
    //   })
    }
    async action(option) {
        await (0, _utilitiesDefault.default).restoreItem(option.selectedNode);
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
const restoreGroupItems = new RestoreGroupItems();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, restoreGroupItems, [
    3
]);
exports.default = restoreGroupItems;

},{"spinal-env-viewer-context-menu-service":"3h19D","../js/utilities":"lzCVv","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bUvyf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
const SIDEBAR = "GraphManagerSideBar";
class ColorGroupItems extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("color children", "color all bimobjects inside ", {
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF",
            icon: "visibility"
        });
    }
    isShown(option) {
        const nodeType = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isRoomGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isRoomGroupContext(contextType);
        const isEquipmentGroup = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isEquipmentGroupContext(contextType);
        if (!(isRoomGroup || isEquipmentGroup)) return Promise.resolve(-1);
        const isEquipement = nodeType === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE;
        if (isEquipement) return Promise.resolve(-1);
        const isRoom = nodeType === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE;
        if (isRoom) return Promise.resolve(-1);
        return Promise.resolve(true);
    // if (!isRoomOrEquipmentGroupContext || nodeType === geographicService
    //   .constants.EQUIPMENT_TYPE) {
    //   return Promise.resolve(-1);
    // }
    // return utilities.getIcon(option.selectedNode, option.context).then(
    //   (isColored) => {
    //     this.buttonCfg["isColored"] = isColored;
    //     this.buttonCfg.icon = isColored ? "visibility_off" : "visibility";
    //     return true;
    //   })
    }
    async action(option) {
        await (0, _utilitiesDefault.default).colorItem(option.selectedNode);
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
const colorGroupItems = new ColorGroupItems();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, colorGroupItems, [
    3
]);
exports.default = colorGroupItems;

},{"spinal-env-viewer-context-menu-service":"3h19D","../js/utilities":"lzCVv","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},[], null, "parcelRequire02e5", {})

//# sourceMappingURL=spinal-env-viewer-room-manager.abb0c00c.js.map
