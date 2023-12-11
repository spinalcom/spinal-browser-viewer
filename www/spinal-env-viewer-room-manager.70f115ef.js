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
})({"gsEHQ":[function(require,module,exports) {
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

},{"./vue/dialogs":"hDaa5","./vue/panel":"5MhZG","./js/event":"bnFtF","./buttons":"gaoUc"}],"hDaa5":[function(require,module,exports) {
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

},{"vue":"gt5MM","2aefec3a7efcfe09":"7Uw4d","./create/createContext.vue":"kxIDi","./create/createCategory.vue":"9cPRY","./create/createGroup.vue":"gxEDY","./color/colorDialog.vue":"1tcfQ","./linkToGroup/linkToGroup.vue":"2PgRe","./selectTypeDialog.vue":"3TBbI","./linkToGroup/linkBimObjectToGroup.vue":"3YAIO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"kxIDi":[function(require,module,exports) {
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
    script.__scopeId = "data-v-4c8161";
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"ed8bab4a4a83ac47":"esCJK","ec9e9d020d7f4bcb":"b6a3K","10daee165ae01077":"l6Uwc","af8ebc840a21556":"eKdlZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esCJK":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/event.js":"bnFtF","../../../js/types.js":"b1uFH","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnFtF":[function(require,module,exports) {
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

},{"vue":"gt5MM","./utilities":"cYKMv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYKMv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _service = require("../services/service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
const ROOMS_RELATIONS = [
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    // groupService.constants.GROUP_TO_ROOMS_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_ROOMS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}`,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
    (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
];
const EQUIPMENTS_RELATIONS = [
    // groupService.constants.CATEGORY_TO_GROUP_RELATION,
    // groupService.constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TO_GROUP_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CONTEXT_TO_CATEGORY_RELATION,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_RELATIONS_TYPES.GROUP_TO_EQUIPMENTS_RELATION,
    `groupHas${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}`
];
const ROOMS_TYPES = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES.ROOMS_GROUP_CONTEXT,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES.ROOMS_GROUP,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}GroupContext`,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE}Group`
];
// eslint-disable-next-line no-unused-vars
const EQUIPMENTS_TYPES = [
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_CONTEXTS_TYPES.EQUIPMENTS_GROUP_CONTEXT,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.CATEGORY_TYPE,
    (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).constants.OLD_GROUPS_TYPES.EQUIPMENTS_GROUP,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}GroupContext`,
    `${(0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE}Group`
];
let utilities = {
    getIcon (selectedNode) {
        return this._isColored(selectedNode).then((isColored)=>{
            return isColored;
        });
    },
    getBimObjects (nodeId) {
        let nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
        let type = nodeInfo.type.get();
        if (type === (0, _constants.BIM_OBJECT_TYPE)) return Promise.resolve([
            nodeInfo
        ]);
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
        ]);
        else {
            let relations = [
                (0, _service.groupService).constants.CONTEXT_TO_CATEGORY_RELATION,
                (0, _service.groupService).constants.GROUP_TO_ROOMS_RELATION,
                (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
                (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION,
                (0, _service.groupService).constants.CATEGORY_TO_GROUP_RELATION,
                (0, _service.groupService).constants.GROUP_TO_EQUIPMENTS_RELATION
            ];
            if (ROOMS_TYPES.indexOf(type) !== -1) relations = ROOMS_RELATIONS;
            else relations = EQUIPMENTS_RELATIONS;
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, relations, (node)=>{
                return node.getType().get() === (0, _constants.BIM_OBJECT_TYPE);
            }).then((res)=>{
                return res.map((el)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                    return el.info;
                });
            });
        }
    },
    getGroups (selectedNode) {
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type)) return Promise.resolve([
            selectedNode
        ]);
        let relations = [];
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, relations, (node)=>{
            let argType = node.getType().get();
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                return el.info;
            });
        });
    },
    colorItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id1 = el.id.get();
                let color = el.color ? el.color.get() : undefined;
                this.colorGroup(id1, color);
            });
        });
    },
    restoreItem (selectedNode) {
        this.getGroups(selectedNode).then((res)=>{
            res.forEach((el)=>{
                let id1 = el.id.get();
                this.restoreGroup(id1);
            });
        });
    },
    colorGroup (groupId, argColor) {
        this.getBimObjects(groupId).then((res)=>{
            let color = typeof argColor !== "undefined" ? this._convertHexColorToRGB(argColor) : this._convertHexColorToRGB("#000000");
            ItemColoredMap.set(groupId, groupId);
            res.forEach((child)=>{
                let BimColors = BimElementsColor.get(child.dbid.get()) ? BimElementsColor.get(child.dbid.get()) : [];
                BimColors.push({
                    id: groupId,
                    color: color
                });
                BimElementsColor.set(child.dbid.get(), BimColors);
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                console.log("model", model);
                model.setThemingColor(child.dbid.get(), new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7, true));
            });
        });
    },
    restoreGroup (groupId) {
        ItemColoredMap.delete(groupId);
        this.getBimObjects(groupId).then((res)=>{
            res.forEach((child)=>{
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId.get());
                model.setThemingColor(child.dbid.get(), // eslint-disable-next-line no-undef
                new THREE.Vector4(0, 0, 0, 0), true);
                let allColors = BimElementsColor.get(child.dbid.get());
                if (allColors) {
                    //   allColors = allColors.filter(el => el.id !== node.id.get());
                    allColors = allColors.filter((el)=>el.id !== groupId);
                    BimElementsColor.set(child.dbid.get(), allColors);
                    if (allColors.length > 0) {
                        let color = allColors[0].color;
                        model.setThemingColor(child.dbid.get(), // eslint-disable-next-line no-undef
                        new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7), true);
                    }
                }
            });
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
            // const resProm = await Promise.all(slice.map((e) => e()));
            // result.push(...resProm);
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
                const id1 = res[index].id.get();
                if (typeof ItemColoredMap.get(id1) === "undefined") return false;
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
    },
    ///////////////////////////////////////////////////////////////////////////////////////////
    //                                    Parcours ascendant                                 //
    ///////////////////////////////////////////////////////////////////////////////////////////
    async getGeographicTree (endNodeId) {
        let obj = {
            id: endNodeId,
            children: []
        };
        let parents = [];
        do {
            let tempParents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(id, (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS);
            parents = tempParents && tempParents.map((el)=>el.get());
        // parent && result.push(parent.get());
        // id = (parent && parent.id) && parent.id.get();
        }while (parents.length);
    // return result;
    },
    addObjToParent (obj, parentId) {
        return {
            id: parentId,
            children: obj
        };
    }
};
exports.default = utilities;

},{"../services/service":"19gQQ","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19gQQ":[function(require,module,exports) {
const { SPINAL_RELATION_PTR_LST_TYPE, SpinalGraphService } = require("bae9fe1938ea9bca");
const { Model } = require("e509c984e0dbbabc");
const constants = require("bd6e938e9e366621");
let groupService = {
    constants: constants,
    createGroupContext (name, type) {
        const context = SpinalGraphService.getContext(name);
        if (typeof context !== "undefined") return Promise.resolve(false);
        return SpinalGraphService.addContext(name, type, new Model({
            name: name
        }));
    },
    addElement (contextId, elementId, elementType, elementName, iconName, color) {
        let contextInfo = SpinalGraphService.getInfo(contextId);
        let contextType = contextInfo && contextInfo.type ? contextInfo.type.get() : undefined;
        let typeAndRelation = this.getTypeAndRelation(elementType, contextType);
        let type = typeAndRelation.type;
        let relationName = typeAndRelation.relation;
        if (typeof type !== "undefined" && typeof relationName !== "undefined") {
            let info = {
                name: elementName,
                type: type
            };
            if (iconName) info["icon"] = iconName;
            if (color) info["color"] = color;
            let childId = SpinalGraphService.createNode(info, new Model({
                name: elementName
            }));
            return SpinalGraphService.addChildInContext(elementId, childId, contextId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
        }
    // // let type =
    // //   contextType === ROOMS_GROUP_CONTEXT ? ROOMS_GROUP : EQUIPMENTS_GROUP;
    // // let relationName =
    // //   contextType === ROOMS_GROUP_CONTEXT ?
    // //   ROOMS_GROUP_RELATION :
    // //   EQUIPMENTS_GROUP_RELATION;
    },
    elementIsLinkedToGroup (groupId, elementId) {
        let realNode = SpinalGraphService.getRealNode(groupId);
        const type = realNode.getType().get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        try {
            let ids = realNode.children[SPINAL_RELATION_PTR_LST_TYPE][relationName].children.info.ids;
            return Promise.resolve(ids.has((el)=>{
                return el.get() === elementId;
            }));
        } catch (error) {
            // let type = SpinalGraphService.getInfo(groupId).type.get();
            // let relationName = type === ROOMS_GROUP ? ROOMS_TO_ELEMENT_RELATION :
            //   EQUIPMENTS_TO_ELEMENT_RELATION;
            return SpinalGraphService.getChildren(groupId, [
                relationName
            ]).then((children)=>{
                for(let i = 0; i < children.length; i++){
                    const element = children[i];
                    if (element.id.get() === elementId) return true;
                }
                return false;
            });
        }
    },
    linkElementToGroup (groupId, elementId, contextId) {
        let groupInfo = SpinalGraphService.getInfo(groupId);
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(groupInfo.type.get());
        return this.getCategorie(groupInfo).then((category)=>{
            return this.elementIsInCategorie(category[0].id.get(), elementId).then((group)=>{
                let result = {
                    old_group: undefined,
                    newGroup: groupId
                };
                if (typeof group !== "undefined") {
                    this.removeLink(group.id.get(), elementId);
                    result.old_group = group.id.get();
                }
                SpinalGraphService.addChildInContext(groupId, elementId, contextId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
                return result;
            });
        });
    },
    removeLink (groupId, elementId) {
        let type = SpinalGraphService.getInfo(groupId).type.get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        return SpinalGraphService.removeChild(groupId, elementId, relationName, SPINAL_RELATION_PTR_LST_TYPE);
    },
    getTypeAndRelation (elementType, contextType) {
        switch(elementType){
            case contextType:
                return {
                    type: constants.CATEGORY_TYPE,
                    relation: constants.CONTEXT_TO_CATEGORY_RELATION
                };
            // case ROOMS_GROUP:
            //   return {
            //     type: "undefined",
            //       relation:
            //   };
            case constants.CATEGORY_TYPE:
                // eslint-disable-next-line no-case-declarations
                let type = constants.CONTEXT_GROUP_ASSOCIATION.get(contextType);
                return {
                    type: type,
                    relation: constants.CATEGORY_TO_GROUP_RELATION
                };
            // case constants.ROOMS_GROUP:
            // case constants.EQUIPMENTS_GROUP:
            // case constants.ENDPOINT_GROUP:
            //   return {
            //     type: "",
            //       relation: constants.GROUP_RELATION_ASSOCIATION.get(elementType)
            //   }
            default:
                return {};
        }
    },
    getElementsLinked (groupId) {
        let type = SpinalGraphService.getInfo(groupId).type.get();
        let relationName = constants.GROUP_RELATION_ASSOCIATION.get(type);
        return SpinalGraphService.getChildren(groupId, [
            relationName
        ]);
    },
    getGroups (selectedNode) {
        // const ROOMS_TYPES = [
        //   ROOMS_GROUP_CONTEXT,
        //   ROOMS_CATEGORY,
        //   ROOMS_GROUP
        // ]
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if (typeof constants.GROUP_RELATION_ASSOCIATION.get(type) !== "undefined") return Promise.resolve([
            selectedNode
        ]);
        let relations = [
            constants.CONTEXT_TO_CATEGORY_RELATION,
            constants.CATEGORY_TO_GROUP_RELATION,
            constants.GROUP_TO_ROOMS_RELATION,
            constants.GROUP_TO_EQUIPMENTS_RELATION,
            constants.GROUP_TO_ENDPOINT_RELATION
        ];
        return SpinalGraphService.findNodes(nodeId, relations, (node)=>{
            let argType = node.getType().get();
            return typeof constants.GROUP_RELATION_ASSOCIATION.get(argType) !== "undefined";
        }).then((res)=>{
            return res.map((el)=>{
                SpinalGraphService._addNode(el);
                return el.info;
            });
        });
    },
    getCategorie (selectedNode) {
        let type = selectedNode.type.get();
        let nodeId = selectedNode.id.get();
        if (type === constants.CATEGORY_TYPE) return Promise.resolve(selectedNode);
        else if (constants.CONTEXTS_TYPES.indexOf(type) !== -1) return SpinalGraphService.getChildren(nodeId, [
            constants.CONTEXT_TO_CATEGORY_RELATION
        ]);
        else {
            let relationRefPromises = [];
            let node = SpinalGraphService.getRealNode(nodeId);
            let relationList = node.parents[constants.CATEGORY_TO_GROUP_RELATION];
            if (relationList) for(let i = 0; i < relationList.length; i++){
                const element = relationList[i];
                relationRefPromises.push(element.load());
            }
            return Promise.all(relationRefPromises).then((refs)=>{
                let promises = refs.map((node)=>{
                    return node.parent.load();
                });
                return Promise.all(promises).then((parents)=>{
                    // let p = [];
                    // parents.forEach(el => {
                    //   if (el && !(el instanceof SpinalContext)) {
                    //     p.push(new SpinalCalNode(el));
                    //   }
                    // })
                    // return p;
                    return parents.map((el)=>{
                        return el.info;
                    });
                });
            });
        }
    },
    elementIsInCategorie (categoryId, elementId) {
        // let nodeInfo = SpinalGraphService.getInfo(categoryId);
        // let type = nodeInfo.type.get();
        // let relationName =
        //   type === ROOMS_CATEGORY ?
        //   ROOMS_GROUP_RELATION :
        //   EQUIPMENTS_GROUP_RELATION;
        return SpinalGraphService.getChildren(categoryId, [
            constants.CATEGORY_TO_GROUP_RELATION
        ]).then((children)=>{
            return children.find((child)=>{
                return child.childrenIds.find((el)=>{
                    return el === elementId;
                });
            });
        });
    }
};
module.exports = {
    // ROOMS_GROUP_CONTEXT,
    // ROOMS_GROUP,
    // EQUIPMENTS_GROUP,
    // ROOMS_GROUP_RELATION,
    // EQUIPMENTS_GROUP_RELATION,
    // EQUIPMENTS_GROUP_CONTEXT,
    // ROOMS_TO_ELEMENT_RELATION,
    // EQUIPMENTS_TO_ELEMENT_RELATION,
    // ROOMS_CATEGORY,
    // ROOMS_CATEGORY_RELATION,
    // EQUIPMENTS_CATEGORY,
    // EQUIPMENTS_CATEGORY_RELATION,
    // typeLst,
    // TYPE_AND_RELATION,
    groupService
};

},{"bae9fe1938ea9bca":"9n7zp","e509c984e0dbbabc":"fRH70","bd6e938e9e366621":"gby48"}],"gby48":[function(require,module,exports) {
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

},{}],"f3Ny6":[function(require,module,exports) {
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
 */ exports.__esModule = true;
exports.REFERENCE_OBJECT_RELATION_TYPE = exports.BIM_OBJECT_RELATION_TYPE = exports.BIM_NODE_RELATION_TYPE = exports.BIM_OBJECT_VERSION_RELATION_TYPE = exports.REFERENCE_OBJECT_RELATION_NAME = exports.BIM_OBJECT_VERSION_RELATION_NAME = exports.BIM_OBJECT_RELATION_NAME = exports.BIM_NODE_RELATION_NAME = exports.BIM_CONTEXT_RELATION_TYPE = exports.BIM_CONTEXT_RELATION_NAME = exports.BIM_OBJECT_TYPE = exports.PART_RELATION_TYPE = exports.SCENE_RELATION_TYPE = exports.PART_RELATION_NAME = exports.SCENE_TYPE = exports.SCENE_RELATION_NAME = void 0;
var spinal_env_viewer_graph_service_1 = require("44f946b368e03b14");
var constants_js_1 = require("3c0117970d993dce");
exports.SCENE_RELATION_NAME = "hasScene";
exports.SCENE_TYPE = "scene";
exports.PART_RELATION_NAME = "hasParts";
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

},{"44f946b368e03b14":"9n7zp","3c0117970d993dce":"eV0id"}],"b1uFH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _constants1 = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerPluginControlEndpointService = require("spinal-env-viewer-plugin-control-endpoint-service");
var _spinalEnvViewerPluginAnalyticsService = require("spinal-env-viewer-plugin-analytics-service");
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
        type: (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).nodeType
    }
];

},{"spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","spinal-env-viewer-task-service":"4IrFb","spinal-env-viewer-plugin-control-endpoint-service":"5dUad","spinal-env-viewer-plugin-analytics-service":"74iWe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6a3K":[function(require,module,exports) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContainer"
        }, [
            _c("div", [
                _c("md-field", [
                    _c("label", [
                        _vm._v("Name")
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
                ], 1),
                _vm._v(" "),
                !_vm.pre.selected ? _c("div", [
                    _c("span", {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Choose :")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.GroupTypes, function(t, index) {
                        return _c("md-radio", {
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
                ], 2) : _c("div", [
                    _vm._v("type selected : " + _vm._s(_vm.pre.type))
                ])
            ], 1)
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

},{}],"l6Uwc":[function() {},{}],"eKdlZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cPRY":[function(require,module,exports) {
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
    script.__scopeId = "data-v-723a9b";
    script.__file = "createCategory.vue";
};
initialize();
exports.default = script;

},{"61bacb5dacde0e75":"jOOhi","c24a548c376729f2":"5IqJu","566b53e63bcecc4":"h6zUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOOhi":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./iconsComponents.vue":"kV8c6","../../../js/event.js":"bnFtF","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kV8c6":[function(require,module,exports) {
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
    script.__scopeId = "data-v-8bf9bc";
    script.__file = "iconsComponents.vue";
};
initialize();
exports.default = script;

},{"fcbb8d61af5c7c07":"eY7M5","2c5c5bcba6efac90":"cfo9v","22ba047d630f6c4c":"fyJFa","a39638afa74bb65a":"dCWoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eY7M5":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/icons.json":"2gm3r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gm3r":[function(require,module,exports) {
module.exports = JSON.parse('[{"icons":[{"id":"3d_rotation"},{"id":"accessibility"},{"id":"accessibility_new"},{"id":"accessible"},{"id":"accessible_forward"},{"id":"account_balance"},{"id":"account_balance_wallet"},{"id":"account_box"},{"id":"account_circle"},{"id":"add_shopping_cart"},{"id":"alarm"},{"id":"alarm_add"},{"id":"alarm_off"},{"id":"alarm_on"},{"id":"all_inbox"},{"id":"all_out"},{"id":"android"},{"id":"announcement"},{"id":"arrow_right_alt"},{"id":"aspect_ratio"},{"id":"assessment"},{"id":"assignment"},{"id":"assignment_ind"},{"id":"assignment_late"},{"id":"assignment_return"},{"id":"assignment_returned"},{"id":"assignment_turned_in"},{"id":"autorenew"},{"id":"backup"},{"id":"book"},{"id":"bookmark"},{"id":"bookmark_border"},{"id":"bookmarks"},{"id":"bug_report"},{"id":"build"},{"id":"cached"},{"id":"calendar_today"},{"id":"calendar_view_day"},{"id":"camera_enhance"},{"id":"card_giftcard"},{"id":"card_membership"},{"id":"card_travel"},{"id":"change_history"},{"id":"check_circle"},{"id":"check_circle_outline"},{"id":"chrome_reader_mode"},{"id":"class"},{"id":"code"},{"id":"commute"},{"id":"compare_arrows"},{"id":"contact_support"},{"id":"copyright"},{"id":"credit_card"},{"id":"dashboard"},{"id":"date_range"},{"id":"delete"},{"id":"delete_forever"},{"id":"delete_outline"},{"id":"description"},{"id":"dns"},{"id":"done"},{"id":"done_all"},{"id":"done_outline"},{"id":"donut_large"},{"id":"donut_small"},{"id":"drag_indicator"},{"id":"eject"},{"id":"euro_symbol"},{"id":"event"},{"id":"event_seat"},{"id":"exit_to_app"},{"id":"explore"},{"id":"explore_off"},{"id":"extension"},{"id":"face"},{"id":"favorite"},{"id":"favorite_border"},{"id":"feedback"},{"id":"find_in_page"},{"id":"find_replace"},{"id":"fingerprint"},{"id":"flight_land"},{"id":"flight_takeoff"},{"id":"flip_to_back"},{"id":"flip_to_front"},{"id":"g_translate"},{"id":"gavel"},{"id":"get_app"},{"id":"gif"},{"id":"grade"},{"id":"group_work"},{"id":"help"},{"id":"help_outline"},{"id":"highlight_off"},{"id":"history"},{"id":"home"},{"id":"horizontal_split"},{"id":"hourglass_empty"},{"id":"hourglass_full"},{"id":"http"},{"id":"https"},{"id":"important_devices"},{"id":"info"},{"id":"input"},{"id":"invert_colors"},{"id":"label"},{"id":"label_important"},{"id":"label_off"},{"id":"language"},{"id":"launch"},{"id":"line_style"},{"id":"line_weight"},{"id":"list"},{"id":"lock"},{"id":"lock_open"},{"id":"loyalty"},{"id":"markunread_mailbox"},{"id":"maximize"},{"id":"minimize"},{"id":"motorcycle"},{"id":"note_add"},{"id":"offline_bolt"},{"id":"offline_pin"},{"id":"opacity"},{"id":"open_in_browser"},{"id":"open_in_new"},{"id":"open_with"},{"id":"pageview"},{"id":"pan_tool"},{"id":"payment"},{"id":"perm_camera_mic"},{"id":"perm_contact_calendar"},{"id":"perm_data_setting"},{"id":"perm_device_information"},{"id":"perm_identity"},{"id":"perm_media"},{"id":"perm_phone_msg"},{"id":"perm_scan_wifi"},{"id":"pets"},{"id":"picture_in_picture"},{"id":"picture_in_picture_alt"},{"id":"play_for_work"},{"id":"polymer"},{"id":"power_settings_new"},{"id":"pregnant_woman"},{"id":"print"},{"id":"query_builder"},{"id":"question_answer"},{"id":"receipt"},{"id":"record_voice_over"},{"id":"redeem"},{"id":"remove_shopping_cart"},{"id":"reorder"},{"id":"report_problem"},{"id":"restore"},{"id":"restore_from_trash"},{"id":"restore_page"},{"id":"room"},{"id":"rounded_corner"},{"id":"rowing"},{"id":"schedule"},{"id":"search"},{"imageUrls":{"twotone":"twotone-settings-24px.svg","sharp":"sharp-settings-24px.svg","outline":"outline-settings-24px.svg","round":"round-settings-24px.svg","baseline":"baseline-settings-20px.svg"},"id":"settings"},{"id":"settings_applications"},{"id":"settings_backup_restore"},{"id":"settings_bluetooth"},{"id":"settings_brightness"},{"id":"settings_cell"},{"id":"settings_ethernet"},{"id":"settings_input_antenna"},{"id":"settings_input_component"},{"id":"settings_input_composite"},{"id":"settings_input_hdmi"},{"id":"settings_input_svideo"},{"id":"settings_overscan"},{"id":"settings_phone"},{"id":"settings_power"},{"id":"settings_remote"},{"id":"settings_voice"},{"id":"shop"},{"id":"shop_two"},{"id":"shopping_basket"},{"id":"shopping_cart"},{"id":"speaker_notes"},{"id":"speaker_notes_off"},{"id":"spellcheck"},{"imageUrls":{"twotone":"twotone-star_rate-18px.svg","sharp":"sharp-star_rate-18px.svg","outline":"outline-star_rate-18px.svg","round":"round-star_rate-18px.svg","baseline":"baseline-star_rate-18px.svg"},"id":"star_rate"},{"id":"stars"},{"id":"store"},{"id":"subject"},{"id":"supervised_user_circle"},{"id":"supervisor_account"},{"id":"swap_horiz"},{"id":"swap_horizontal_circle"},{"id":"swap_vert"},{"id":"swap_vertical_circle"},{"id":"tab"},{"id":"tab_unselected"},{"id":"text_rotate_up"},{"id":"text_rotate_vertical"},{"id":"text_rotation_down"},{"id":"text_rotation_none"},{"id":"theaters"},{"id":"thumb_down"},{"id":"thumb_up"},{"id":"thumbs_up_down"},{"id":"timeline"},{"id":"toc"},{"id":"today"},{"id":"toll"},{"id":"touch_app"},{"id":"track_changes"},{"id":"translate"},{"id":"trending_down"},{"id":"trending_flat"},{"id":"trending_up"},{"id":"turned_in"},{"id":"turned_in_not"},{"id":"update"},{"id":"verified_user"},{"id":"vertical_split"},{"id":"view_agenda"},{"id":"view_array"},{"id":"view_carousel"},{"id":"view_column"},{"id":"view_day"},{"id":"view_headline"},{"id":"view_list"},{"id":"view_module"},{"id":"view_quilt"},{"id":"view_stream"},{"id":"view_week"},{"id":"visibility"},{"id":"visibility_off"},{"id":"voice_over_off"},{"id":"watch_later"},{"id":"work"},{"id":"work_off"},{"id":"work_outline"},{"id":"youtube_searched_for"},{"id":"zoom_in"},{"id":"zoom_out"}],"name":"action"},{"icons":[{"id":"add_alert"},{"id":"error"},{"id":"error_outline"},{"id":"notification_important"},{"id":"warning"}],"name":"alert"},{"icons":[{"id":"4k"},{"id":"add_to_queue"},{"id":"airplay"},{"id":"album"},{"id":"art_track"},{"id":"av_timer"},{"id":"branding_watermark"},{"id":"call_to_action"},{"id":"closed_caption"},{"id":"control_camera"},{"id":"equalizer"},{"id":"explicit"},{"id":"fast_forward"},{"id":"fast_rewind"},{"id":"featured_play_list"},{"id":"featured_video"},{"id":"fiber_dvr"},{"id":"fiber_manual_record"},{"id":"fiber_new"},{"id":"fiber_pin"},{"id":"fiber_smart_record"},{"id":"forward_10"},{"id":"forward_30"},{"id":"forward_5"},{"id":"games"},{"id":"hd"},{"id":"hearing"},{"id":"high_quality"},{"id":"library_add"},{"id":"library_books"},{"id":"library_music"},{"id":"loop"},{"id":"mic"},{"id":"mic_none"},{"id":"mic_off"},{"id":"missed_video_call"},{"id":"movie"},{"id":"music_video"},{"id":"new_releases"},{"id":"not_interested"},{"id":"note"},{"id":"pause"},{"id":"pause_circle_filled"},{"id":"pause_circle_outline"},{"id":"play_arrow"},{"id":"play_circle_filled"},{"imageUrls":{"twotone":"twotone-play_circle_filled_white-24px.svg","sharp":"sharp-play_circle_filled_white-24px.svg","outline":"outline-play_circle_filled_white-24px.svg","round":"round-play_circle_filled_white-24px.svg","baseline":"baseline-play_circle_filled_white-48px.svg"},"id":"play_circle_filled_white"},{"id":"play_circle_outline"},{"id":"playlist_add"},{"id":"playlist_add_check"},{"id":"playlist_play"},{"id":"queue"},{"id":"queue_music"},{"id":"queue_play_next"},{"id":"radio"},{"id":"recent_actors"},{"id":"remove_from_queue"},{"id":"repeat"},{"id":"repeat_one"},{"id":"replay"},{"id":"replay_10"},{"id":"replay_30"},{"id":"replay_5"},{"id":"shuffle"},{"id":"skip_next"},{"id":"skip_previous"},{"id":"slow_motion_video"},{"id":"snooze"},{"id":"sort_by_alpha"},{"id":"stop"},{"id":"subscriptions"},{"id":"subtitles"},{"id":"surround_sound"},{"id":"video_call"},{"id":"video_label"},{"id":"video_library"},{"id":"videocam"},{"id":"videocam_off"},{"id":"volume_down"},{"id":"volume_mute"},{"id":"volume_off"},{"id":"volume_up"},{"id":"web"},{"id":"web_asset"}],"name":"av"},{"icons":[{"id":"alternate_email"},{"id":"business"},{"id":"call"},{"id":"call_end"},{"id":"call_made"},{"id":"call_merge"},{"id":"call_missed"},{"id":"call_missed_outgoing"},{"id":"call_received"},{"id":"call_split"},{"id":"cancel_presentation"},{"id":"cell_wifi"},{"id":"chat"},{"id":"chat_bubble"},{"id":"chat_bubble_outline"},{"id":"clear_all"},{"id":"comment"},{"id":"contact_mail"},{"id":"contact_phone"},{"id":"contacts"},{"id":"desktop_access_disabled"},{"id":"dialer_sip"},{"id":"dialpad"},{"id":"domain_disabled"},{"id":"duo"},{"id":"email"},{"id":"forum"},{"id":"import_contacts"},{"id":"import_export"},{"id":"invert_colors_off"},{"id":"list_alt"},{"id":"live_help"},{"id":"location_off"},{"id":"location_on"},{"id":"mail_outline"},{"id":"message"},{"id":"mobile_screen_share"},{"id":"no_sim"},{"id":"pause_presentation"},{"id":"person_add_disabled"},{"id":"phone"},{"id":"phonelink_erase"},{"id":"phonelink_lock"},{"id":"phonelink_ring"},{"id":"phonelink_setup"},{"id":"portable_wifi_off"},{"id":"present_to_all"},{"id":"print_disabled"},{"id":"ring_volume"},{"id":"rss_feed"},{"id":"screen_share"},{"id":"sentiment_satisfied_alt"},{"id":"speaker_phone"},{"id":"stay_current_landscape"},{"id":"stay_current_portrait"},{"id":"stay_primary_landscape"},{"id":"stay_primary_portrait"},{"id":"stop_screen_share"},{"id":"swap_calls"},{"id":"textsms"},{"id":"unsubscribe"},{"id":"voicemail"},{"id":"vpn_key"}],"name":"communication"},{"icons":[{"id":"add"},{"id":"add_box"},{"id":"add_circle"},{"id":"add_circle_outline"},{"id":"archive"},{"id":"backspace"},{"id":"ballot"},{"id":"block"},{"id":"clear"},{"id":"create"},{"id":"delete_sweep"},{"id":"drafts"},{"id":"file_copy"},{"id":"filter_list"},{"id":"flag"},{"id":"font_download"},{"id":"forward"},{"id":"gesture"},{"id":"how_to_reg"},{"id":"how_to_vote"},{"id":"inbox"},{"id":"link"},{"id":"link_off"},{"id":"low_priority"},{"id":"mail"},{"id":"markunread"},{"id":"move_to_inbox"},{"id":"next_week"},{"id":"outlined_flag"},{"id":"redo"},{"id":"remove"},{"id":"remove_circle"},{"id":"remove_circle_outline"},{"id":"reply"},{"id":"reply_all"},{"id":"report"},{"id":"report_off"},{"id":"save"},{"id":"save_alt"},{"id":"select_all"},{"id":"send"},{"id":"sort"},{"id":"text_format"},{"id":"unarchive"},{"id":"undo"},{"id":"waves"},{"imageUrls":{"twotone":"twotone-weekend-24px.svg","sharp":"sharp-weekend-24px.svg","outline":"outline-weekend-24px.svg","round":"round-weekend-24px.svg","baseline":"baseline-weekend-48px.svg"},"id":"weekend"},{"id":"where_to_vote"}],"name":"content"},{"icons":[{"id":"access_alarm"},{"id":"access_alarms"},{"id":"access_time"},{"id":"add_alarm"},{"id":"add_to_home_screen"},{"id":"airplanemode_active"},{"id":"airplanemode_inactive"},{"id":"battery_20"},{"id":"battery_30"},{"id":"battery_50"},{"id":"battery_60"},{"id":"battery_80"},{"id":"battery_90"},{"id":"battery_alert"},{"id":"battery_charging_20"},{"id":"battery_charging_30"},{"id":"battery_charging_50"},{"id":"battery_charging_60"},{"id":"battery_charging_80"},{"id":"battery_charging_90"},{"id":"battery_charging_full"},{"id":"battery_full"},{"id":"battery_std"},{"id":"battery_unknown"},{"id":"bluetooth"},{"id":"bluetooth_connected"},{"id":"bluetooth_disabled"},{"id":"bluetooth_searching"},{"id":"brightness_auto"},{"id":"brightness_high"},{"id":"brightness_low"},{"id":"brightness_medium"},{"id":"data_usage"},{"id":"developer_mode"},{"id":"devices"},{"id":"dvr"},{"id":"gps_fixed"},{"id":"gps_not_fixed"},{"id":"gps_off"},{"id":"graphic_eq"},{"id":"location_disabled"},{"id":"location_searching"},{"id":"mobile_friendly"},{"id":"mobile_off"},{"id":"network_cell"},{"id":"network_wifi"},{"id":"nfc"},{"id":"screen_lock_landscape"},{"id":"screen_lock_portrait"},{"id":"screen_lock_rotation"},{"id":"screen_rotation"},{"id":"sd_storage"},{"id":"settings_system_daydream"},{"id":"signal_cellular_0_bar"},{"id":"signal_cellular_1_bar"},{"id":"signal_cellular_2_bar"},{"id":"signal_cellular_3_bar"},{"id":"signal_cellular_4_bar"},{"id":"signal_cellular_alt"},{"id":"signal_cellular_connected_no_internet_0_bar"},{"id":"signal_cellular_connected_no_internet_1_bar"},{"id":"signal_cellular_connected_no_internet_2_bar"},{"id":"signal_cellular_connected_no_internet_3_bar"},{"id":"signal_cellular_connected_no_internet_4_bar"},{"id":"signal_cellular_no_sim"},{"id":"signal_cellular_null"},{"id":"signal_cellular_off"},{"id":"signal_wifi_0_bar"},{"id":"signal_wifi_1_bar"},{"id":"signal_wifi_1_bar_lock"},{"id":"signal_wifi_2_bar"},{"id":"signal_wifi_2_bar_lock"},{"id":"signal_wifi_3_bar"},{"id":"signal_wifi_3_bar_lock"},{"id":"signal_wifi_4_bar"},{"id":"signal_wifi_4_bar_lock"},{"id":"signal_wifi_off"},{"id":"storage"},{"id":"usb"},{"id":"wallpaper"},{"id":"widgets"},{"id":"wifi_lock"},{"id":"wifi_tethering"}],"name":"device"},{"icons":[{"id":"add_comment"},{"id":"attach_file"},{"id":"attach_money"},{"id":"bar_chart"},{"id":"border_all"},{"id":"border_bottom"},{"id":"border_clear"},{"id":"border_color"},{"id":"border_horizontal"},{"id":"border_inner"},{"id":"border_left"},{"id":"border_outer"},{"id":"border_right"},{"id":"border_style"},{"id":"border_top"},{"id":"border_vertical"},{"id":"bubble_chart"},{"id":"drag_handle"},{"id":"format_align_center"},{"id":"format_align_justify"},{"id":"format_align_left"},{"id":"format_align_right"},{"id":"format_bold"},{"id":"format_clear"},{"id":"format_color_fill"},{"id":"format_color_reset"},{"id":"format_color_text"},{"id":"format_indent_decrease"},{"id":"format_indent_increase"},{"id":"format_italic"},{"id":"format_line_spacing"},{"id":"format_list_bulleted"},{"id":"format_list_numbered"},{"id":"format_list_numbered_rtl"},{"id":"format_paint"},{"id":"format_quote"},{"id":"format_shapes"},{"id":"format_size"},{"id":"format_strikethrough"},{"id":"format_textdirection_l_to_r"},{"id":"format_textdirection_r_to_l"},{"id":"format_underlined"},{"id":"functions"},{"id":"highlight"},{"id":"insert_chart"},{"id":"insert_chart_outlined"},{"id":"insert_comment"},{"id":"insert_drive_file"},{"id":"insert_emoticon"},{"id":"insert_invitation"},{"id":"insert_link"},{"id":"insert_photo"},{"id":"linear_scale"},{"id":"merge_type"},{"id":"mode_comment"},{"id":"monetization_on"},{"id":"money_off"},{"id":"multiline_chart"},{"id":"notes"},{"id":"pie_chart"},{"id":"publish"},{"id":"scatter_plot"},{"id":"score"},{"id":"short_text"},{"id":"show_chart"},{"id":"space_bar"},{"id":"strikethrough_s"},{"id":"table_chart"},{"id":"text_fields"},{"id":"title"},{"id":"vertical_align_bottom"},{"id":"vertical_align_center"},{"id":"vertical_align_top"},{"id":"wrap_text"}],"name":"editor"},{"icons":[{"id":"attachment"},{"id":"cloud"},{"id":"cloud_circle"},{"id":"cloud_done"},{"id":"cloud_download"},{"id":"cloud_off"},{"id":"cloud_queue"},{"id":"cloud_upload"},{"id":"create_new_folder"},{"id":"folder"},{"id":"folder_open"},{"id":"folder_shared"}],"name":"file"},{"icons":[{"id":"cast"},{"id":"cast_connected"},{"imageUrls":{"twotone":"twotone-cast_for_education-24px.svg","sharp":"sharp-cast_for_education-24px.svg","outline":"outline-cast_for_education-24px.svg","round":"round-cast_for_education-24px.svg","baseline":"baseline-cast_for_education-48px.svg"},"id":"cast_for_education"},{"id":"computer"},{"id":"desktop_mac"},{"id":"desktop_windows"},{"id":"developer_board"},{"id":"device_hub"},{"id":"device_unknown"},{"id":"devices_other"},{"id":"dock"},{"id":"gamepad"},{"id":"headset"},{"id":"headset_mic"},{"id":"keyboard"},{"id":"keyboard_arrow_down"},{"id":"keyboard_arrow_left"},{"id":"keyboard_arrow_right"},{"id":"keyboard_arrow_up"},{"id":"keyboard_backspace"},{"id":"keyboard_capslock"},{"id":"keyboard_hide"},{"id":"keyboard_return"},{"id":"keyboard_tab"},{"id":"keyboard_voice"},{"id":"laptop"},{"id":"laptop_chromebook"},{"id":"laptop_mac"},{"id":"laptop_windows"},{"id":"memory"},{"id":"mouse"},{"id":"phone_android"},{"id":"phone_iphone"},{"id":"phonelink"},{"id":"phonelink_off"},{"id":"power_input"},{"id":"router"},{"id":"scanner"},{"id":"security"},{"id":"sim_card"},{"id":"smartphone"},{"id":"speaker"},{"id":"speaker_group"},{"id":"tablet"},{"id":"tablet_android"},{"id":"tablet_mac"},{"id":"toys"},{"id":"tv"},{"id":"videogame_asset"},{"id":"watch"}],"name":"hardware"},{"icons":[{"id":"add_a_photo"},{"id":"add_photo_alternate"},{"id":"add_to_photos"},{"id":"adjust"},{"id":"assistant"},{"id":"assistant_photo"},{"id":"audiotrack"},{"id":"blur_circular"},{"id":"blur_linear"},{"id":"blur_off"},{"id":"blur_on"},{"id":"brightness_1"},{"id":"brightness_2"},{"id":"brightness_3"},{"id":"brightness_4"},{"id":"brightness_5"},{"id":"brightness_6"},{"id":"brightness_7"},{"id":"broken_image"},{"id":"brush"},{"id":"burst_mode"},{"id":"camera"},{"id":"camera_alt"},{"id":"camera_front"},{"id":"camera_rear"},{"id":"camera_roll"},{"id":"center_focus_strong"},{"id":"center_focus_weak"},{"id":"collections"},{"id":"collections_bookmark"},{"id":"color_lens"},{"id":"colorize"},{"id":"compare"},{"id":"control_point"},{"id":"control_point_duplicate"},{"id":"crop"},{"id":"crop_16_9"},{"id":"crop_3_2"},{"id":"crop_5_4"},{"id":"crop_7_5"},{"id":"crop_din"},{"id":"crop_free"},{"id":"crop_landscape"},{"id":"crop_original"},{"id":"crop_portrait"},{"id":"crop_rotate"},{"id":"crop_square"},{"id":"dehaze"},{"id":"details"},{"id":"edit"},{"id":"exposure"},{"id":"exposure_neg_1"},{"id":"exposure_neg_2"},{"id":"exposure_plus_1"},{"id":"exposure_plus_2"},{"id":"exposure_zero"},{"id":"filter"},{"id":"filter_1"},{"id":"filter_2"},{"id":"filter_3"},{"id":"filter_4"},{"id":"filter_5"},{"id":"filter_6"},{"id":"filter_7"},{"id":"filter_8"},{"id":"filter_9"},{"id":"filter_9_plus"},{"id":"filter_b_and_w"},{"id":"filter_center_focus"},{"id":"filter_drama"},{"id":"filter_frames"},{"id":"filter_hdr"},{"id":"filter_none"},{"id":"filter_tilt_shift"},{"id":"filter_vintage"},{"id":"flare"},{"id":"flash_auto"},{"id":"flash_off"},{"id":"flash_on"},{"id":"flip"},{"id":"gradient"},{"id":"grain"},{"id":"grid_off"},{"id":"grid_on"},{"id":"hdr_off"},{"id":"hdr_on"},{"id":"hdr_strong"},{"id":"hdr_weak"},{"id":"healing"},{"id":"image"},{"id":"image_aspect_ratio"},{"id":"image_search"},{"id":"iso"},{"id":"landscape"},{"id":"leak_add"},{"id":"leak_remove"},{"id":"lens"},{"id":"linked_camera"},{"id":"looks"},{"id":"looks_3"},{"id":"looks_4"},{"id":"looks_5"},{"id":"looks_6"},{"id":"looks_one"},{"id":"looks_two"},{"id":"loupe"},{"id":"monochrome_photos"},{"id":"movie_creation"},{"id":"movie_filter"},{"id":"music_note"},{"id":"music_off"},{"id":"nature"},{"id":"nature_people"},{"id":"navigate_before"},{"id":"navigate_next"},{"id":"palette"},{"id":"panorama"},{"id":"panorama_fish_eye"},{"id":"panorama_horizontal"},{"id":"panorama_vertical"},{"id":"panorama_wide_angle"},{"id":"photo"},{"id":"photo_album"},{"id":"photo_camera"},{"id":"photo_filter"},{"id":"photo_library"},{"id":"photo_size_select_actual"},{"id":"photo_size_select_large"},{"id":"photo_size_select_small"},{"id":"picture_as_pdf"},{"id":"portrait"},{"id":"remove_red_eye"},{"id":"rotate_90_degrees_ccw"},{"id":"rotate_left"},{"id":"rotate_right"},{"id":"shutter_speed"},{"id":"slideshow"},{"id":"straighten"},{"id":"style"},{"id":"switch_camera"},{"id":"switch_video"},{"id":"tag_faces"},{"id":"texture"},{"id":"timelapse"},{"id":"timer"},{"id":"timer_10"},{"id":"timer_3"},{"id":"timer_off"},{"id":"tonality"},{"id":"transform"},{"id":"tune"},{"id":"view_comfy"},{"id":"view_compact"},{"id":"vignette"},{"id":"wb_auto"},{"id":"wb_cloudy"},{"id":"wb_incandescent"},{"id":"wb_iridescent"},{"id":"wb_sunny"}],"name":"image"},{"icons":[{"id":"360"},{"id":"add_location"},{"id":"atm"},{"id":"beenhere"},{"id":"category"},{"id":"compass_calibration"},{"id":"departure_board"},{"id":"directions"},{"id":"directions_bike"},{"id":"directions_boat"},{"id":"directions_bus"},{"id":"directions_car"},{"id":"directions_railway"},{"id":"directions_run"},{"id":"directions_subway"},{"id":"directions_transit"},{"id":"directions_walk"},{"id":"edit_attributes"},{"id":"edit_location"},{"id":"ev_station"},{"id":"fastfood"},{"id":"flight"},{"id":"hotel"},{"id":"layers"},{"id":"layers_clear"},{"id":"local_activity"},{"id":"local_airport"},{"id":"local_atm"},{"id":"local_bar"},{"id":"local_cafe"},{"id":"local_car_wash"},{"id":"local_convenience_store"},{"id":"local_dining"},{"id":"local_drink"},{"id":"local_florist"},{"id":"local_gas_station"},{"id":"local_grocery_store"},{"id":"local_hospital"},{"id":"local_hotel"},{"id":"local_laundry_service"},{"id":"local_library"},{"id":"local_mall"},{"id":"local_movies"},{"id":"local_offer"},{"id":"local_parking"},{"id":"local_pharmacy"},{"id":"local_phone"},{"id":"local_pizza"},{"id":"local_play"},{"id":"local_post_office"},{"id":"local_printshop"},{"id":"local_see"},{"id":"local_shipping"},{"id":"local_taxi"},{"id":"map"},{"id":"money"},{"id":"my_location"},{"id":"navigation"},{"id":"near_me"},{"id":"not_listed_location"},{"id":"person_pin"},{"id":"person_pin_circle"},{"id":"pin_drop"},{"id":"place"},{"id":"rate_review"},{"id":"restaurant"},{"id":"restaurant_menu"},{"id":"satellite"},{"id":"store_mall_directory"},{"id":"streetview"},{"id":"subway"},{"id":"terrain"},{"id":"traffic"},{"id":"train"},{"id":"tram"},{"id":"transfer_within_a_station"},{"id":"transit_enterexit"},{"id":"trip_origin"},{"id":"zoom_out_map"}],"name":"maps"},{"icons":[{"id":"apps"},{"id":"arrow_back"},{"id":"arrow_back_ios"},{"id":"arrow_downward"},{"id":"arrow_drop_down"},{"id":"arrow_drop_down_circle"},{"id":"arrow_drop_up"},{"id":"arrow_forward"},{"id":"arrow_forward_ios"},{"id":"arrow_left"},{"id":"arrow_right"},{"id":"arrow_upward"},{"id":"cancel"},{"id":"check"},{"id":"chevron_left"},{"id":"chevron_right"},{"id":"close"},{"id":"expand_less"},{"id":"expand_more"},{"id":"first_page"},{"id":"fullscreen"},{"id":"fullscreen_exit"},{"id":"last_page"},{"id":"menu"},{"id":"more_horiz"},{"id":"more_vert"},{"id":"refresh"},{"id":"subdirectory_arrow_left"},{"id":"subdirectory_arrow_right"},{"id":"unfold_less"},{"id":"unfold_more"}],"name":"navigation"},{"icons":[{"id":"adb"},{"id":"airline_seat_flat"},{"id":"airline_seat_flat_angled"},{"id":"airline_seat_individual_suite"},{"id":"airline_seat_legroom_extra"},{"id":"airline_seat_legroom_normal"},{"id":"airline_seat_legroom_reduced"},{"id":"airline_seat_recline_extra"},{"id":"airline_seat_recline_normal"},{"id":"bluetooth_audio"},{"id":"confirmation_number"},{"id":"disc_full"},{"id":"drive_eta"},{"id":"enhanced_encryption"},{"id":"event_available"},{"id":"event_busy"},{"id":"event_note"},{"id":"folder_special"},{"id":"live_tv"},{"id":"mms"},{"id":"more"},{"id":"network_check"},{"id":"network_locked"},{"id":"no_encryption"},{"id":"ondemand_video"},{"id":"personal_video"},{"id":"phone_bluetooth_speaker"},{"id":"phone_callback"},{"id":"phone_forwarded"},{"id":"phone_in_talk"},{"id":"phone_locked"},{"id":"phone_missed"},{"id":"phone_paused"},{"id":"power"},{"id":"power_off"},{"id":"priority_high"},{"id":"sd_card"},{"id":"sms"},{"id":"sms_failed"},{"id":"sync"},{"id":"sync_disabled"},{"id":"sync_problem"},{"id":"system_update"},{"id":"tap_and_play"},{"id":"time_to_leave"},{"id":"tv_off"},{"id":"vibration"},{"id":"voice_chat"},{"id":"vpn_lock"},{"id":"wc"},{"id":"wifi"},{"id":"wifi_off"}],"name":"notification"},{"icons":[{"id":"ac_unit"},{"id":"airport_shuttle"},{"id":"all_inclusive"},{"id":"beach_access"},{"id":"business_center"},{"id":"casino"},{"id":"child_care"},{"id":"child_friendly"},{"id":"fitness_center"},{"id":"free_breakfast"},{"id":"golf_course"},{"id":"hot_tub"},{"id":"kitchen"},{"id":"meeting_room"},{"id":"no_meeting_room"},{"id":"pool"},{"id":"room_service"},{"id":"rv_hookup"},{"id":"smoke_free"},{"id":"smoking_rooms"},{"id":"spa"}],"name":"places"},{"icons":[{"id":"cake"},{"imageUrls":{"twotone":"twotone-domain-24px.svg","sharp":"sharp-domain-24px.svg","outline":"outline-domain-24px.svg","round":"round-domain-24px.svg","baseline":"baseline-domain-48px.svg"},"id":"domain"},{"id":"group"},{"id":"group_add"},{"id":"location_city"},{"id":"mood"},{"id":"mood_bad"},{"id":"notifications"},{"id":"notifications_active"},{"id":"notifications_none"},{"id":"notifications_off"},{"id":"notifications_paused"},{"id":"pages"},{"id":"party_mode"},{"id":"people"},{"id":"people_outline"},{"id":"person"},{"id":"person_add"},{"id":"person_outline"},{"id":"plus_one"},{"id":"poll"},{"id":"public"},{"id":"school"},{"id":"sentiment_dissatisfied"},{"id":"sentiment_satisfied"},{"id":"sentiment_very_dissatisfied"},{"id":"sentiment_very_satisfied"},{"id":"share"},{"id":"thumb_down_alt"},{"id":"thumb_up_alt"},{"id":"whatshot"}],"name":"social"},{"icons":[{"id":"check_box"},{"id":"check_box_outline_blank"},{"id":"indeterminate_check_box"},{"id":"radio_button_checked"},{"id":"radio_button_unchecked"},{"id":"star"},{"id":"star_border"},{"id":"star_half"},{"id":"toggle_off"},{"id":"toggle_on"}],"name":"toggle"}]');

},{}],"cfo9v":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-autocomplete", {
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
                            _c("div", [
                                _c("md-icon", [
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
            _c("label", [
                _vm._v("Icon")
            ])
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fyJFa":[function() {},{}],"dCWoi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IqJu":[function(require,module,exports) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContainer"
        }, [
            _c("div", [
                _c("md-field", [
                    _c("label", [
                        _vm._v("Name")
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
                ], 1),
                _vm._v(" "),
                _c("icon-component", {
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

},{}],"h6zUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxEDY":[function(require,module,exports) {
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
    script.__scopeId = "data-v-dbad64";
    script.__file = "createGroup.vue";
};
initialize();
exports.default = script;

},{"3a16213858db1d4e":"5K5qP","565b25f65fb50be1":"fGEsn","dfec2539a3c6a60d":"iKn4u","4fcc7787d455ff8c":"dxPmj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5K5qP":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./iconsComponents.vue":"kV8c6","vue-color":"bOuNP","spinal-env-viewer-plugin-group-manager-service":"tSLpq","../../../js/event.js":"bnFtF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGEsn":[function(require,module,exports) {
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
            _vm._v(_vm._s(_vm._f("toUpperCase")(_vm.title)))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContainer"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Group name")
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
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "iconComponent"
            }, [
                _c("icon-component", {
                    attrs: {
                        "selected": _vm.iconSelected
                    },
                    on: {
                        "selectIcon": _vm.selectIcon
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "colorDiv"
            }, [
                _c("chrome-picker", {
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

},{}],"iKn4u":[function() {},{}],"dxPmj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tcfQ":[function(require,module,exports) {
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
    script.__scopeId = "data-v-b71f9f";
    script.__file = "colorDialog.vue";
};
initialize();
exports.default = script;

},{"d781d1405ae55cef":"2GbZG","edb82ec5d75c9aea":"z9OaT","18cf439fff259c3d":"27zNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GbZG":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"bOuNP","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"z9OaT":[function(require,module,exports) {
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
            _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Name")
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
            ], 1),
            _vm._v(" "),
            _c("chrome-picker", {
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

},{}],"27zNA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PgRe":[function(require,module,exports) {
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
    script.__scopeId = "data-v-1bc108";
    script.__file = "linkToGroup.vue";
};
initialize();
exports.default = script;

},{"db32e4ba827e3f30":"iOrbP","1ffc53427c81334f":"hnxQL","f5d381085ce37970":"70HZ4","bb38bc8fb4edb5f1":"cEpwL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOrbP":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-attribute-manager/src/services/index":"R5DpR","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","./linkToGroupTemplate.vue":"hGXFH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"R5DpR":[function(require,module,exports) {
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

},{"./classes/spinalAttributeService":"3zGxM","./classes/spinalConfigurationService":"e8hB8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zGxM":[function(require,module,exports) {
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
    getAllAttributes(nodeId, liste) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (realNode) // return serviceDocumentation.getAllAttributes(realNode).then(
        //   argAttributes => {
        //     return argAttributes.map(el => {
        //       let info = el.get();
        //       if (liste && liste.indexOf(info.label) === -1) liste.push(info
        //         .label);
        //       return info;
        //     })
        //   });
        return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(realNode).then((res)=>{
            return res.map((el)=>{
                let attrs = el.element.get();
                return attrs.map((attr)=>{
                    if (liste && liste.indexOf(attr.label) === -1) liste.push(attr.label);
                    attr["category"] = el.nameCat;
                    return attr;
                });
            }).flat();
        });
        else return Promise.resolve([]);
    }
    async getAllData(contextId, nodeId) {
        let context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextId);
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let res = {
            types: [],
            attributes: [],
            data: {}
        };
        if (context && realNode) await realNode.findInContext(context, async (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let type = node.getType().get();
            let info = node.info.get();
            if (res.types.indexOf(type) === -1) res.types.push(type);
            if (typeof res.data[type] === "undefined") res.data[type] = [];
            info["attributes"] = await this.getAllAttributes(info.id, res.attributes);
            res.data[type].push(info);
        });
        return res;
    }
    getBimObjectAttribute(bimObjectInfo, attributeName) {
        let value = attributeName.toLowerCase();
        let model = window.spinal.BimObjectService.getModelByBimfile(bimObjectInfo.bimFileId) || window.NOP_VIEWER.model;
        const dbId = bimObjectInfo.dbid || bimObjectInfo.dbId;
        if (model) return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectProperties({
            model: model,
            selection: [
                dbId
            ]
        }).then((res)=>{
            let properties = res[0].properties[0].properties;
            let found = properties.find((el)=>{
                let attrName = el.attributeName.toLowerCase();
                let displayName = el.displayName.toLowerCase();
                return attrName === value || displayName === value;
            });
            if (found) return found.displayValue;
            else return "-";
        }).catch((err)=>{
            console.error(err);
        });
        else return "-";
    }
    async createAttribute(nodeId, categoryName, attributeName) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        let category;
        category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(realNode, categoryName);
        if (typeof category === "undefined") category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(realNode, categoryName);
        let attr = {
            label: attributeName,
            value: "-"
        };
        if (realNode.getType().get() === (0, _constants.BIM_OBJECT_TYPE)) attr.value = await this.getBimObjectAttribute(realNode.info.get(), attributeName);
        await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(realNode, category, attr.label, attr.value);
    }
    async updateAttributeValue(nodeId, categoryName, attributeName, attributeValue) {
        let attr = await this.getOrCreateAttribute(nodeId, categoryName, attributeName);
        if (attr && attr.value) attr.value.set(attributeValue);
    }
    getBimObjects(nodeId) {
    // console.log(SpinalGraphService.getInfo(nodeId));
    // return SpinalGraphService.findNodes(nodeId,)
    }
    async getOrCreateAttribute(nodeId, categoryName, attributeName) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        if (realNode) {
            let category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(realNode, categoryName);
            if (typeof category === "undefined") category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(realNode, categoryName);
            let attributes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, categoryName);
            let attr = attributes.find((el)=>{
                return el.label.get() === attributeName;
            });
            if (attr) return attr;
            await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(realNode, category, attributeName, "-");
            attributes = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAttributesByCategory(realNode, categoryName);
            return attributes.find((el)=>{
                return el.label.get() === attributeName;
            });
        }
    }
    getAllGroupContext(type) {
        // return Promise.all([SpinalGraphService.getContextWithType(
        //     groupService.constants.ROOMS_GROUP_CONTEXT),
        //   SpinalGraphService.getContextWithType(
        //     groupService.constants.EQUIPMENTS_GROUP_CONTEXT),
        //   SpinalGraphService.getContextWithType(
        //     groupService.constants.ENDPOINTS_GROUP_CONTEXT)
        // ]).then(values => {
        //   let contexts = values.flat();
        //   let promises = contexts.map(async context => {
        //     let res = context.info.get();
        //     res["category"] = await this.getCategory(res.id, res
        //       .type);
        //     return res;
        //   })
        //   return Promise.all(promises);
        // })
        // console.log("service type", type);
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(type).then((contexts)=>{
            const promises = contexts.map(async (context)=>{
                context["category"] = await this.getCategory(context.id);
                return context;
            });
            return Promise.all(promises);
        });
    }
    async getCategory(contextId) {
        // let relationName = groupService.constants
        //   .CONTEXT_TO_CATEGORY_RELATION;
        // return SpinalGraphService.getChildren(contextId, [relationName]).then(
        //   children => {
        //     let promises = children.map(async child => {
        //       let info = child.get();
        //       info["groups"] = await this.getGroup(child.id, child
        //         .type);
        //       return info;
        //     })
        //     return Promise.all(promises);
        //   })
        const categories = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(contextId);
        const promises = categories.map(async (category)=>{
            let info = category.get();
            info["groups"] = await this.getGroup(category.id);
            return info;
        });
        return Promise.all(promises);
    }
    async getGroup(categoryId) {
        // let relationName = groupService.constants.CATEGORY_TO_GROUP_RELATION;
        // return SpinalGraphService.getChildren(categoryId, [relationName])
        //   .then(
        //     children => {
        //       return children.map(el => el.get());
        //     })
        const groups = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(categoryId);
        return groups.map((el)=>el.get());
    }
    linkItem(contextId, parentId, itemId) {
        // groupService.linkElementToGroup(parentId, itemId, contextId)
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, parentId, itemId);
    }
}
exports.default = SpinalAttributeService;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"e8hB8":[function(require,module,exports) {
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
        const context = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).createGroupContext(this.CONTEXT_NAME, this.CONFIGURATION_PROFIL_TYPE);
        return context;
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
        const configurationNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
            name: configurationName,
            type: this.CONFIGURATION_PROFIL_TYPE
        }, new Model({
            name: configurationName,
            categories: configurationCategories
        }));
        await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, groupId, configurationNodeId);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationNodeId);
    }
    setAsCurrentConfiguration(nodeId) {
        this.createOrGetContext().then((context)=>{
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            if (realNode) {
                if (context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
                context.info.add_attr({
                    currentConfiguration: new Ptr(realNode)
                });
            }
        });
    }
    async deleteCurrentConf() {
        const context = await this.createOrGetContext();
        if (context && context.info.currentConfiguration) context.info.rem_attr("currentConfiguration");
    }
    getCurrentConfiguration() {
        return this.createOrGetContext().then((context)=>{
            let confPtr = context.info.currentConfiguration;
            if (typeof confPtr !== "undefined") return new Promise((resolve)=>{
                confPtr.load((realNode)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
                    return realNode.getElement().then((el)=>{
                        let element = el.get();
                        element["id"] = realNode.info.id.get();
                        resolve(element);
                    });
                });
            });
            return {
                name: "",
                categories: []
            };
        });
    }
    editConfiguration(configurationId, configurationElement) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configurationId);
        if (realNode) realNode.getElement().then((element)=>{
            element.set(configurationElement);
        });
    }
    async getConfigurationById(configId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configId);
        if (realNode) {
            const elementModel = await realNode.getElement();
            if (elementModel) {
                let element = elementModel.get();
                element["id"] = configId;
                return element;
            }
        }
    }
    async getCategories() {
        const context = await this.createOrGetContext();
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(context.info.id.get());
    }
    getGroups(nodeId) {
        // const context = await this.createOrGetContext();
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
        const obj = {
            categoryId: undefined,
            groupId: undefined,
            configId: undefined
        };
        if (this.isCategory(info.type)) obj.categoryId = info.id;
        else if (this.isGroup(info.type)) {
            const category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(info.id);
            if (category) obj.categoryId = category.id.get();
            obj.groupId = info.id;
        } else if (info.type === this.CONFIGURATION_PROFIL_TYPE) {
            obj.configId = info.id;
            const group = await this.getElementGroup(info.id);
            if (group) {
                obj.groupId = group.id.get();
                const category = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupCategory(group.id.get());
                if (category) obj.categoryId = category.id.get();
            }
        }
        return obj;
    }
}
exports.default = SpinalConfigurationService;

},{"spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGXFH":[function(require,module,exports) {
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
    script.__scopeId = "data-v-41b24f";
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"1424ee12d47bff6e":"d1aBF","d3e3bb1a42a53864":"21bQN","bbad7ba8c9eb4c4e":"k8WAM","7f9fb0dbfa4624e0":"aQXld","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1aBF":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21bQN":[function(require,module,exports) {
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
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "md-layout-item md-size-10 mdIcon"
            }, [
                _c("md-button", {
                    staticClass: "md-icon-button",
                    attrs: {
                        "disabled": _vm.disableBtn
                    },
                    on: {
                        "click": _vm.createEvent
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("control_point")
                    ])
                ], 1)
            ], 1)
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

},{}],"k8WAM":[function() {},{}],"aQXld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnxQL":[function(require,module,exports) {
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
            _vm._v("Manage " + _vm._s(_vm.type) + " Group")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Contexts",
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
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Categories",
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
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Groups",
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

},{}],"70HZ4":[function() {},{}],"cEpwL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TBbI":[function(require,module,exports) {
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
    script.__scopeId = "data-v-7ab04c";
    script.__file = "selectTypeDialog.vue";
};
initialize();
exports.default = script;

},{"edde6a8a9ccfcf51":"3QXJx","dc271c33c0bf3514":"acLJ7","b7c5eb87c99319e2":"6MWdl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QXJx":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","../../js/types":"b1uFH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acLJ7":[function(require,module,exports) {
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
            _vm._v(_vm._s("Select type".toUpperCase()))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContainer"
        }, [
            _c("div", [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "movie"
                        }
                    }, [
                        _vm._v("Select Group")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
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
                        return _c("md-option", {
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

},{}],"6MWdl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YAIO":[function(require,module,exports) {
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
    script.__scopeId = "data-v-f6298b";
    script.__file = "linkBimObjectToGroup.vue";
};
initialize();
exports.default = script;

},{"f4369c959946c7a1":"iQiot","ef1a3b5139486e9f":"1kwDg","70cf4367fed8ec93":"5ycdF","614b327400410b36":"kMYlo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQiot":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-bim-manager-service":"9Nkbe","../../../js/utilities":"cYKMv","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kwDg":[function(require,module,exports) {
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
            _vm._v("Add bimObject(s) selected to\n    group")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _c("div", {
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
            _c("div", {
                directives: [
                    {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.state === _vm.states.loading,
                        expression: "state === states.loading"
                    }
                ]
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("div", {
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
                _c("div", [
                    _vm._v("linked with success: "),
                    _c("span", {
                        staticClass: "success"
                    }, [
                        _vm._v(" " + _vm._s(_vm.linked))
                    ])
                ]),
                _vm._v(" "),
                _c("div", [
                    _vm._v("link failed : "),
                    _c("span", {
                        staticClass: "error"
                    }, [
                        _vm._v(_vm._s(_vm.notLinked))
                    ])
                ])
            ])
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"5ycdF":[function() {},{}],"kMYlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MhZG":[function(require,module,exports) {
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

},{"vue":"gt5MM","db18746d8bc7d6f7":"1mGHd","./linkerDialog.vue":"hRu5o","./globalLinkerPanel.vue":"28YMQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"hRu5o":[function(require,module,exports) {
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
    script.__scopeId = "data-v-44b74a";
    script.__file = "linkerDialog.vue";
};
initialize();
exports.default = script;

},{"2cb1462bda72c769":"fKRfe","88141901a7166c42":"8uqWl","6bf14fe62dd069af":"emdco","804cc20effe081a0":"2rM0o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKRfe":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"gt5MM","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","68c869922bdba932":"7Uw4d","vue-virtual-scroller":"kl5Fe","../../js/event":"bnFtF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uqWl":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "mdContent"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "buscar-caja",
                class: {
                    isOpened: _vm.isOpened
                }
            }, [
                _c("input", {
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
                _c("a", {
                    staticClass: "md-icon-button buscar-btn",
                    on: {
                        "click": _vm.openSearchBar
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("search")
                    ])
                ], 1)
            ])
        ]),
        _vm._v(" "),
        _vm.tempList.length > 0 && _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "_container"
        }, [
            _c("md-content", {
                staticClass: "listItem md-scrollbar"
            }, [
                _c("RecycleScroller", {
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
                                    _c("div", {
                                        staticClass: "listContainer",
                                        on: {
                                            "mouseover": function($event) {
                                                return _vm.eventMethod("mouseover", item);
                                            },
                                            "mouseleave": function($event) {
                                                return _vm.eventMethod("mouseleave", item);
                                            }
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-list-item-text"
                                        }, [
                                            _vm._v(_vm._s(item.name))
                                        ]),
                                        _vm._v(" "),
                                        _vm.elementExistInCategory(item) ? _c("div", {
                                            staticClass: "groupColor",
                                            style: {
                                                backgroundColor: item.groupColor
                                            },
                                            attrs: {
                                                "title": "Linked to " + item.groupName
                                            }
                                        }) : _vm._e(),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button panel_link_button",
                                            on: {
                                                "click": function($event) {
                                                    return _vm.linkUnlink(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
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
        _vm.tempList.length === 0 && _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "_container empty"
        }, [
            _vm._v("\n			No Data found !\n		")
        ]) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.loading ? _c("div", {
            staticClass: "_container empty"
        }, [
            _c("md-progress-spinner", {
                staticClass: "spiner",
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.appState === _vm.STATES.error ? _c("div", {
            staticClass: "_container empty"
        }, [
            _vm._v("\n			Sorry, Something was wrong. Please retry !!\n		")
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"emdco":[function() {},{}],"2rM0o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28YMQ":[function(require,module,exports) {
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
    script.__scopeId = "data-v-1938f5";
    script.__file = "globalLinkerPanel.vue";
};
initialize();
exports.default = script;

},{"d824f09aae892243":"3ZGAI","a55057304c009daf":"jyy3j","2d5e0ae9625d8820":"zzEXT","47789b8c34c4f055":"g89OY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZGAI":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/service":"19gQQ","../others/tableComponent.vue":"52B2t","spinal-core-connectorjs_type":"fRH70","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-bimobjectservice":"ji3fq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52B2t":[function(require,module,exports) {
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
    script.__scopeId = "data-v-81dc41";
    script.__file = "tableComponent.vue";
};
initialize();
exports.default = script;

},{"8d8aaaf51d58079b":"ioM1m","2ddff52a76ece8f1":"6rUzI","211e7debea324207":"cD7NJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioM1m":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./checkBoxComponent.vue":"iMnEZ","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-graph-service":"9n7zp","spinal-core-connectorjs_type":"fRH70","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMnEZ":[function(require,module,exports) {
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
    script.__scopeId = "data-v-8f7d79";
    script.__file = "checkBoxComponent.vue";
};
initialize();
exports.default = script;

},{"660bec80777c999b":"7SZ3Y","2a29d62e4ae31698":"fzzaw","bcc156f3ffc00546":"jnMkC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SZ3Y":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../services/service":"19gQQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzzaw":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-checkbox", {
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

},{}],"jnMkC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rUzI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-table", {
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
                    return _c("md-table-row", {}, [
                        _c("md-table-cell", {
                            attrs: {
                                "md-label": "Name",
                                "md-sort-by": "name"
                            }
                        }, [
                            _vm._v(_vm._s(item.name))
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.groups, function(group) {
                            return _c("md-table-cell", {
                                key: group.id,
                                attrs: {
                                    "md-label": group.name
                                }
                            }, [
                                _c("checkbox-component", {
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
        _c("md-table-toolbar", {
            staticClass: "md-layout md-gutter"
        }, [
            _c("div", {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "floors"
                        }
                    }, [
                        _vm._v("Filter By Floor")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
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
                        return _c("md-option", {
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
            _c("div", {
                staticClass: "md-layout-item md-size-50"
            }, [
                _c("md-field", {
                    attrs: {
                        "md-clearable": ""
                    }
                }, [
                    _c("md-input", {
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
        _c("md-table-empty-state", {
            attrs: {
                "md-label": "No Items found"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cD7NJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji3fq":[function(require,module,exports) {
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

},{"8f95959f039a5af0":"fkEXw","bef1fdfaa932d2b5":"3Ibtq"}],"3Ibtq":[function(require,module,exports) {
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

},{"e30868c801f59ada":"2uyD7"}],"jyy3j":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("table-component", {
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

},{}],"zzEXT":[function() {},{}],"g89OY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaoUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBimObjectToGroup", ()=>(0, _addBimObjectToGroupDefault.default));
parcelHelpers.export(exports, "addBimRoomToGroup", ()=>(0, _addBimRoomToGroupDefault.default));
parcelHelpers.export(exports, "createContextGroup", ()=>(0, _createContextGroupDefault.default));
parcelHelpers.export(exports, "createElement", ()=>(0, _createElementDefault.default));
parcelHelpers.export(exports, "editBtn", ()=>(0, _editDefault.default));
parcelHelpers.export(exports, "findBimObject", ()=>(0, _findBimObjectDefault.default));
parcelHelpers.export(exports, "findBimRoom", ()=>(0, _findBimRoomDefault.default));
parcelHelpers.export(exports, "linkRooms", ()=>(0, _linkRoomsDefault.default));
parcelHelpers.export(exports, "viewBtn", ()=>(0, _viewBtnDefault.default));
var _addBimObjectToGroup = require("./addBimObjectToGroup");
var _addBimObjectToGroupDefault = parcelHelpers.interopDefault(_addBimObjectToGroup);
var _addBimRoomToGroup = require("./addBimRoomToGroup");
var _addBimRoomToGroupDefault = parcelHelpers.interopDefault(_addBimRoomToGroup);
var _createContextGroup = require("./createContextGroup");
var _createContextGroupDefault = parcelHelpers.interopDefault(_createContextGroup);
var _createElement = require("./createElement");
var _createElementDefault = parcelHelpers.interopDefault(_createElement);
var _edit = require("./edit");
var _editDefault = parcelHelpers.interopDefault(_edit);
var _findBimObject = require("./findBimObject");
var _findBimObjectDefault = parcelHelpers.interopDefault(_findBimObject);
var _findBimRoom = require("./findBimRoom");
var _findBimRoomDefault = parcelHelpers.interopDefault(_findBimRoom);
var _linkRooms = require("./linkRooms");
var _linkRoomsDefault = parcelHelpers.interopDefault(_linkRooms);
var _viewBtn = require("./viewBtn");
var _viewBtnDefault = parcelHelpers.interopDefault(_viewBtn);

},{"./addBimObjectToGroup":"8vYsV","./addBimRoomToGroup":"44AcE","./createContextGroup":"3sQgR","./createElement":"kjRUK","./edit":"5U89R","./findBimObject":"aWmpW","./findBimRoom":"fU0op","./linkRooms":"9dgTS","./viewBtn":"e2tvj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vYsV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("62eb59d75cca9bfa");
const CIRCULARMENU = "circularMenu";
class AddBimObjectToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add bim object to group", "add bim object to group", {
            icon: "add_location",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","62eb59d75cca9bfa":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"44AcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const { spinalPanelManagerService } = require("9052221f8f96ceb2");
const CIRCULARMENU = "circularMenu";
class AddRoomToGroup extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add room to group", "add room which linked to this object to group", {
            icon: "playlist_add",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","9052221f8f96ceb2":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sQgR":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjRUK":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-bim-manager-service":"9Nkbe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5U89R":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWmpW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _store = require("spinal-env-viewer-plugin-graph-manager/src/vue/store");
var _storeDefault = parcelHelpers.interopDefault(_store);
const CIRCULARMENU = "circularMenu";
class FindBimObject extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("find Object in graph manager", "find object in graph manager", {
            icon: "location_on",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-plugin-graph-manager/src/vue/store":"lNoWE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fU0op":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
var _store = require("spinal-env-viewer-plugin-graph-manager/src/vue/store");
var _storeDefault = parcelHelpers.interopDefault(_store);
const CIRCULARMENU = "circularMenu";
class FindBimRoom extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("find room", "find room which linked to this object", {
            icon: "store",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-env-viewer-plugin-graph-manager/src/vue/store":"lNoWE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dgTS":[function(require,module,exports) {
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
        super("link Rooms", "This button allows to link rooms to space", {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2tvj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
const SIDEBAR = "GraphManagerSideBar";
class ViewChildren extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("color children", "color all bimobjects inside ", {
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        const isRoomOrEquipmentGroupContext = (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isRoomGroupContext(contextType) || (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isEquipmentGroupContext(contextType);
        if (!isRoomOrEquipmentGroupContext || nodeType === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE) return Promise.resolve(-1);
        return (0, _utilitiesDefault.default).getIcon(option.selectedNode, option.context).then((isColored)=>{
            this.buttonCfg["isColored"] = isColored;
            this.buttonCfg.icon = isColored ? "visibility_off" : "visibility";
            return true;
        });
    }
    action(option) {
        if (this.isColored) {
            this.icon = "visibility";
            this.isColored = false;
            (0, _utilitiesDefault.default).restoreItem(option.selectedNode);
        } else {
            this.icon = "visibility_off";
            this.isColored = true;
            (0, _utilitiesDefault.default).colorItem(option.selectedNode);
        }
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
const viewChildren = new ViewChildren();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, viewChildren, [
    3
]);
exports.default = viewChildren;

},{"spinal-env-viewer-context-menu-service":"kHlxv","../js/utilities":"cYKMv","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-room-manager.70f115ef.js.map
