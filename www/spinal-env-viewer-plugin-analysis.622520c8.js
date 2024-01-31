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
})({"4FK6p":[function(require,module,exports) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vues/dialogs");
var _panels = require("./src/vues/panels");

},{"./src/buttons":"btyz6","./src/vues/dialogs":"kVtLQ","./src/vues/panels":"5z9f7"}],"btyz6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEntity", ()=>(0, _createEntityDefault.default));
parcelHelpers.export(exports, "createAnalytic", ()=>(0, _createAnalyticDefault.default));
parcelHelpers.export(exports, "modifyAnalytic", ()=>(0, _modifyAnalyticDefault.default));
var _createEntity = require("./createEntity");
var _createEntityDefault = parcelHelpers.interopDefault(_createEntity);
var _createAnalytic = require("./createAnalytic");
var _createAnalyticDefault = parcelHelpers.interopDefault(_createAnalytic);
var _modifyAnalytic = require("./modifyAnalytic");
var _modifyAnalyticDefault = parcelHelpers.interopDefault(_modifyAnalytic);
var _createContext = require("./createContext");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
/* Constants */ const HEADER_HOOK_NAME = "GraphManagerTopBar";
const SIDEBAR_HOOK_NAME = "GraphManagerSideBar";
const CIRCULAR_MENU_HOOK = "circularMenu";
/* Headerbar Buttons*/ (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADER_HOOK_NAME, new (0, _createContext.CreateContextButton)(), [
    3
]);

},{"./createEntity":"h0PRX","./createAnalytic":"b1pPQ","./modifyAnalytic":"7hfR6","./createContext":"gJ1lP","spinal-env-viewer-context-menu-service":"kHlxv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0PRX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelAnalysis = require("spinal-model-analysis");
const { spinalPanelManagerService } = require("97163b169113fcda");
const SIDEBAR = "GraphManagerSideBar";
class CreateEntity extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Entity", "Create Entity", {
            icon: "dashboard_customize",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const id = option.selectedNode.id.get();
        const isAnalyticContext = option.selectedNode.type.get() === (0, _spinalModelAnalysis.CONTEXT_TYPE);
        return Promise.resolve(isAnalyticContext ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("createEntityDialog", option);
    }
}
const createEntity = new CreateEntity();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createEntity, [
    3
]);
exports.default = createEntity;

},{"spinal-env-viewer-context-menu-service":"kHlxv","97163b169113fcda":"7Uw4d","spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"apm5J":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ANALYTIC_STATUS = exports.algos = exports.isGChatOrganCardResult = exports.isGChatMessageResult = exports.isResultSuccess = exports.getAvailableData = exports.getChoiceRelationsWithDepth = exports.getValueModelFromEntry = exports.ATTRIBUTE_VALUE_SEPARATOR = exports.ATTRIBUTE_ALARM_PRIORITY = exports.ATTRIBUTE_TICKET_PROCESS_ID = exports.ATTRIBUTE_TICKET_CONTEXT_ID = exports.ATTRIBUTE_TRIGGER_AT_START = exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = exports.ATTRIBUTE_ANALYTIC_STATUS = exports.ATTRIBUTE_RESULT_TYPE = exports.ATTRIBUTE_RESULT_NAME = exports.ATTRIBUTE_SEPARATOR = exports.ATTRIBUTE_SEARCH_RELATIONS = exports.ATTRIBUTE_STRICT_DEPTH = exports.ATTRIBUTE_SEARCH_DEPTH = exports.ATTRIBUTE_TIMESERIES = exports.ATTRIBUTE_FILTER_VALUE = exports.ATTRIBUTE_TRACKING_METHOD = exports.ATTRIBUTE_PHONE_MESSAGE = exports.ATTRIBUTE_PHONE_NUMBER = exports.ATTRIBUTE_GCHAT_SPACE = exports.ATTRIBUTE_GCHAT_MESSAGE = exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = exports.ENTITY_TYPE = exports.CONTEXT_TYPE = exports.TRIGGER_TYPE = exports.TRACK_METHOD = exports.ANALYTIC_TYPE = exports.ANALYTIC_RESULT_TYPE = exports.ENTITY_TYPES = exports.TrackingMethodModel = exports.AnalyticModel = exports.spinalAnalyticService = exports.AnalyticService = void 0;
const AnalyticModel_1 = require("bd4f04811876fe06");
Object.defineProperty(exports, "AnalyticModel", {
    enumerable: true,
    get: function() {
        return AnalyticModel_1.AnalyticModel;
    }
});
const TrackingMethodModel_1 = require("346b732d03dffb52");
Object.defineProperty(exports, "TrackingMethodModel", {
    enumerable: true,
    get: function() {
        return TrackingMethodModel_1.TrackingMethodModel;
    }
});
const IAnalyticResult_1 = require("75545a2a14e5f4c1");
Object.defineProperty(exports, "isResultSuccess", {
    enumerable: true,
    get: function() {
        return IAnalyticResult_1.isResultSuccess;
    }
});
Object.defineProperty(exports, "isGChatMessageResult", {
    enumerable: true,
    get: function() {
        return IAnalyticResult_1.isGChatMessageResult;
    }
});
Object.defineProperty(exports, "isGChatOrganCardResult", {
    enumerable: true,
    get: function() {
        return IAnalyticResult_1.isGChatOrganCardResult;
    }
});
const constants_1 = require("15091bfe302456c3");
Object.defineProperty(exports, "ANALYTIC_RESULT_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.ANALYTIC_RESULT_TYPE;
    }
});
Object.defineProperty(exports, "ANALYTIC_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.ANALYTIC_TYPE;
    }
});
Object.defineProperty(exports, "TRACK_METHOD", {
    enumerable: true,
    get: function() {
        return constants_1.TRACK_METHOD;
    }
});
Object.defineProperty(exports, "ENTITY_TYPES", {
    enumerable: true,
    get: function() {
        return constants_1.ENTITY_TYPES;
    }
});
Object.defineProperty(exports, "CONTEXT_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.CONTEXT_TYPE;
    }
});
Object.defineProperty(exports, "ENTITY_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.ENTITY_TYPE;
    }
});
Object.defineProperty(exports, "TRIGGER_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.TRIGGER_TYPE;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_RESULT_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_IO_DEPENDENCIES", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING;
    }
});
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_GCHAT_SPACE", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_GCHAT_SPACE;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_GCHAT_MESSAGE", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_GCHAT_MESSAGE;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_PHONE_NUMBER", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_PHONE_NUMBER;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_PHONE_MESSAGE", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_PHONE_MESSAGE;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TRACKING_METHOD", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TRACKING_METHOD;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_FILTER_VALUE", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_FILTER_VALUE;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TIMESERIES", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TIMESERIES;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_SEARCH_DEPTH", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_SEARCH_DEPTH;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_STRICT_DEPTH", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_STRICT_DEPTH;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_SEARCH_RELATIONS", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_SEARCH_RELATIONS;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_SEPARATOR", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_SEPARATOR;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_VALUE_SEPARATOR", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_VALUE_SEPARATOR;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_RESULT_NAME", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_RESULT_NAME;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_RESULT_TYPE", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_RESULT_TYPE;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_ANALYTIC_STATUS", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_ANALYTIC_STATUS;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_ANALYTIC_DESCRIPTION", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_ANALYTIC_DESCRIPTION;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TRIGGER_AT_START", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TRIGGER_AT_START;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TICKET_CONTEXT_ID", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TICKET_CONTEXT_ID;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TICKET_PROCESS_ID", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TICKET_PROCESS_ID;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_ALARM_PRIORITY", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_ALARM_PRIORITY;
    }
});
Object.defineProperty(exports, "ANALYTIC_STATUS", {
    enumerable: true,
    get: function() {
        return constants_1.ANALYTIC_STATUS;
    }
});
const algos = require("b5cbb7d75b37f0f9");
exports.algos = algos;
const AnalyticService_1 = require("30b69a6e6f2e536f");
Object.defineProperty(exports, "AnalyticService", {
    enumerable: true,
    get: function() {
        return AnalyticService_1.AnalyticService;
    }
});
const utils_1 = require("273499501dafc854");
Object.defineProperty(exports, "getValueModelFromEntry", {
    enumerable: true,
    get: function() {
        return utils_1.getValueModelFromEntry;
    }
});
Object.defineProperty(exports, "getChoiceRelationsWithDepth", {
    enumerable: true,
    get: function() {
        return utils_1.getChoiceRelationsWithDepth;
    }
});
Object.defineProperty(exports, "getAvailableData", {
    enumerable: true,
    get: function() {
        return utils_1.getAvailableData;
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalRoot = typeof window === "undefined" ? global : window;
const spinalAnalyticService = new AnalyticService_1.AnalyticService();
exports.spinalAnalyticService = spinalAnalyticService;
if (typeof globalRoot.spinal === "undefined") globalRoot.spinal = {};
if (typeof globalRoot.spinal.spinalAnalyticService === "undefined") globalRoot.spinal.spinalAnalyticService = spinalAnalyticService;
if (typeof globalRoot.spinal.spinalAnalyticService === "undefined") globalRoot.spinal.spinalAnalyticService = spinalAnalyticService;
exports.default = spinalAnalyticService;

},{"bd4f04811876fe06":"9ovXf","346b732d03dffb52":"4rJ3F","75545a2a14e5f4c1":"5On9c","15091bfe302456c3":"2CVgx","b5cbb7d75b37f0f9":"a1B4H","30b69a6e6f2e536f":"jVEQx","273499501dafc854":"3BNTc"}],"9ovXf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnalyticModel = void 0;
const spinal_core_connectorjs_type_1 = require("723f5403a3e4680c");
class AnalyticModel extends spinal_core_connectorjs_type_1.Model {
    constructor(analytic){
        super();
        this.add_attr(analytic);
    }
}
exports.AnalyticModel = AnalyticModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(AnalyticModel);
exports.default = AnalyticModel;

},{"723f5403a3e4680c":"fRH70"}],"4rJ3F":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TrackingMethodModel = void 0;
const spinal_core_connectorjs_type_1 = require("1b149d1bd23ef12c");
class TrackingMethodModel extends spinal_core_connectorjs_type_1.Model {
    constructor(trackingMethod){
        super();
        this.add_attr(trackingMethod);
    }
}
exports.TrackingMethodModel = TrackingMethodModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(TrackingMethodModel);
exports.default = TrackingMethodModel;

},{"1b149d1bd23ef12c":"fRH70"}],"5On9c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isGChatOrganCardResult = exports.isGChatMessageResult = exports.isResultSuccess = void 0;
const constants_1 = require("aa8c613daa1edeef");
function isResultSuccess(result) {
    return result.success = true;
}
exports.isResultSuccess = isResultSuccess;
function isGChatMessageResult(result) {
    return result.resultType === constants_1.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE;
}
exports.isGChatMessageResult = isGChatMessageResult;
function isGChatOrganCardResult(result) {
    return result.resultType === constants_1.ANALYTIC_RESULT_TYPE.GCHAT_ORGAN_CARD;
}
exports.isGChatOrganCardResult = isGChatOrganCardResult;

},{"aa8c613daa1edeef":"2CVgx"}],"2CVgx":[function(require,module,exports) {
"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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
exports.ANALYTIC_RESULT_TYPE = exports.ENDPOINT_NODE_TYPE = exports.CONTROL_ENDPOINT_RELATIONS = exports.ENDPOINT_RELATIONS = exports.ATTRIBUTE_TRIGGER_AT_START = exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = exports.ATTRIBUTE_ANALYTIC_STATUS = exports.ATTRIBUTE_ALARM_PRIORITY = exports.ATTRIBUTE_TICKET_PROCESS_ID = exports.ATTRIBUTE_TICKET_CONTEXT_ID = exports.ATTRIBUTE_GCHAT_MESSAGE = exports.ATTRIBUTE_GCHAT_SPACE = exports.ATTRIBUTE_PHONE_MESSAGE = exports.ATTRIBUTE_PHONE_NUMBER = exports.ATTRIBUTE_RESULT_NAME = exports.ATTRIBUTE_RESULT_TYPE = exports.ATTRIBUTE_SEARCH_RELATIONS = exports.ATTRIBUTE_STRICT_DEPTH = exports.ATTRIBUTE_SEARCH_DEPTH = exports.ATTRIBUTE_TIMESERIES = exports.ATTRIBUTE_FILTER_VALUE = exports.ATTRIBUTE_TRACKING_METHOD = exports.ATTRIBUTE_VALUE_SEPARATOR = exports.ATTRIBUTE_SEPARATOR = exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = exports.TARGET_NODE_TYPES = exports.GROUP_RELATION_PREFIX = exports.ANALYTIC_INPUTS_TO_TRACKING_METHOD_RELATION = exports.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION = exports.ANALYTIC_TO_CONFIG_RELATION = exports.ANALYTIC_TO_OUTPUTS_RELATION = exports.ANALYTIC_TO_INPUTS_RELATION = exports.ENTITY_TO_ANALYTIC_RELATION = exports.CONTEXT_TO_ENTITY_RELATION = exports.CONFIG_TYPE = exports.OUTPUTS_TYPE = exports.INPUTS_TYPE = exports.TRACKING_METHOD_TYPE = exports.ANALYTIC_TYPE = exports.ENTITY_TYPE = exports.CONTEXT_TYPE = void 0;
exports.ENTITY_TYPES = exports.ANALYTIC_STATUS = exports.TRIGGER_TYPE = exports.TRACK_METHOD = void 0;
exports.CONTEXT_TYPE = "analysisContext";
exports.ENTITY_TYPE = "entity";
exports.ANALYTIC_TYPE = "analytic";
exports.TRACKING_METHOD_TYPE = "trackingMethod";
exports.INPUTS_TYPE = "analyticInputs";
exports.OUTPUTS_TYPE = "analyticOutputs";
exports.CONFIG_TYPE = "analyticConfig";
exports.CONTEXT_TO_ENTITY_RELATION = "hasEntity";
exports.ENTITY_TO_ANALYTIC_RELATION = "hasAnalytics";
exports.ANALYTIC_TO_INPUTS_RELATION = "hasInputs";
exports.ANALYTIC_TO_OUTPUTS_RELATION = "hasOutputs";
exports.ANALYTIC_TO_CONFIG_RELATION = "hasConfig";
exports.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION = "hasEntity";
exports.ANALYTIC_INPUTS_TO_TRACKING_METHOD_RELATION = "hasTrackingMethod";
exports.GROUP_RELATION_PREFIX = "groupHas";
exports.TARGET_NODE_TYPES = Object.freeze({
    "Building": "geographicBuilding",
    "Floor": "geographicFloor",
    "Room": "geographicRoom",
    "Equipment": "BIMObject",
    "Floor Group": "geographicFloorGroup",
    "Room Group": "geographicRoomGroup",
    "Equipment Group": "BIMObjectGroup",
    "Other": undefined
});
// *** Categories ***
exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = "Algorithm parameters";
exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = "Ticket localization parameters";
exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = "Result parameters";
exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = "Tracking parameters";
exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = "Twilio parameters";
exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = "Google chat parameters";
exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = "Trigger parameters";
exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = "IO dependencies";
exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = "Analytic parameters";
exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = "Algorithm index mapping";
exports.ATTRIBUTE_SEPARATOR = "_";
exports.ATTRIBUTE_VALUE_SEPARATOR = ",";
exports.ATTRIBUTE_TRACKING_METHOD = "Tracking method";
exports.ATTRIBUTE_FILTER_VALUE = "Filter value";
exports.ATTRIBUTE_TIMESERIES = "Timeseries intervalTime";
exports.ATTRIBUTE_SEARCH_DEPTH = "Search depth";
exports.ATTRIBUTE_STRICT_DEPTH = "Strict depth";
exports.ATTRIBUTE_SEARCH_RELATIONS = "Search relations";
exports.ATTRIBUTE_RESULT_TYPE = "Result type";
exports.ATTRIBUTE_RESULT_NAME = "Result name";
exports.ATTRIBUTE_PHONE_NUMBER = "Phone number";
exports.ATTRIBUTE_PHONE_MESSAGE = "Phone message";
exports.ATTRIBUTE_GCHAT_SPACE = "Google chat space name/id";
exports.ATTRIBUTE_GCHAT_MESSAGE = "Google chat message";
exports.ATTRIBUTE_TICKET_CONTEXT_ID = "Ticket context id";
exports.ATTRIBUTE_TICKET_PROCESS_ID = "Ticket category id";
exports.ATTRIBUTE_ALARM_PRIORITY = "Alarm priority";
exports.ATTRIBUTE_ANALYTIC_STATUS = "Status";
exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = "Description";
exports.ATTRIBUTE_TRIGGER_AT_START = "Trigger at start";
exports.ENDPOINT_RELATIONS = [
    "hasBmsEndpoint",
    "hasBmsDevice",
    "hasBmsEndpointGroup",
    "hasEndPoint"
];
exports.CONTROL_ENDPOINT_RELATIONS = [
    "hasControlPoints",
    "hasBmsEndpoint"
];
exports.ENDPOINT_NODE_TYPE = "BmsEndpoint";
/**
 * The different types of results that an analytic can lead to.
 *
 * If you add a new type, you must also add it to the ANALYTIC_RESULT_TYPE enum in the spinal-model-analysis/src/constants.ts file
 *
 * A ticket result type will lead to a ticket being created (with the resultName as the title of the ticket or occurence  of already existing ticket incremented by 1)
 * This type of result works well with Change Of Value triggers since we usually want event based tickets
 *
 * A controlEndpoint result type will lead to a controlEndpoint being updated
 * (with the resultName as the name of the controlEndpoint and it has to be linked to the followed entity)
 *
 *
 */ var ANALYTIC_RESULT_TYPE;
(function(ANALYTIC_RESULT_TYPE) {
    ANALYTIC_RESULT_TYPE["TICKET"] = "ticket";
    ANALYTIC_RESULT_TYPE["CONTROL_ENDPOINT"] = "controlEndpoint";
    ANALYTIC_RESULT_TYPE["ENDPOINT"] = "endpoint";
    ANALYTIC_RESULT_TYPE["ALARM"] = "alarm";
    ANALYTIC_RESULT_TYPE["SMS"] = "sms";
    ANALYTIC_RESULT_TYPE["LOG"] = "log";
    ANALYTIC_RESULT_TYPE["GCHAT_MESSAGE"] = "gChatMessage";
    ANALYTIC_RESULT_TYPE["GCHAT_ORGAN_CARD"] = "gChatOrganCard";
    ANALYTIC_RESULT_TYPE["GCHAT_PLATFORM_CARD"] = "gChatPlatformCard";
})(ANALYTIC_RESULT_TYPE = exports.ANALYTIC_RESULT_TYPE || (exports.ANALYTIC_RESULT_TYPE = {}));
var TRACK_METHOD;
(function(TRACK_METHOD) {
    TRACK_METHOD["ENDPOINT_NAME_FILTER"] = "endpointFilter";
    TRACK_METHOD["CONTROL_ENDPOINT_NAME_FILTER"] = "controlEndpointFilter";
    TRACK_METHOD["ATTRIBUTE_NAME_FILTER"] = "attributeFilter";
})(TRACK_METHOD = exports.TRACK_METHOD || (exports.TRACK_METHOD = {}));
var TRIGGER_TYPE;
(function(TRIGGER_TYPE) {
    TRIGGER_TYPE["CHANGE_OF_VALUE"] = "changeOfValue";
    TRIGGER_TYPE["CHANGE_OF_VALUE_WITH_THRESHOLD"] = "changeOfValueWithThreshold";
    TRIGGER_TYPE["INTERVAL_TIME"] = "intervalTime";
    TRIGGER_TYPE["CRON"] = "cron";
})(TRIGGER_TYPE = exports.TRIGGER_TYPE || (exports.TRIGGER_TYPE = {}));
var ANALYTIC_STATUS;
(function(ANALYTIC_STATUS) {
    ANALYTIC_STATUS["ACTIVE"] = "Active";
    ANALYTIC_STATUS["INACTIVE"] = "Inactive";
})(ANALYTIC_STATUS = exports.ANALYTIC_STATUS || (exports.ANALYTIC_STATUS = {}));
var ENTITY_TYPES;
(function(ENTITY_TYPES) {
    ENTITY_TYPES["BUILDING"] = "geographicBuilding";
    ENTITY_TYPES["FLOOR"] = "geographicFloor";
    ENTITY_TYPES["ROOM"] = "geographicRoom";
    ENTITY_TYPES["EQUIPMENT"] = "BIMObject";
    ENTITY_TYPES["FLOOR_GROUP"] = "geographicFloorGroup";
    ENTITY_TYPES["ROOM_GROUP"] = "geographicRoomGroup";
    ENTITY_TYPES["EQUIPMENT_GROUP"] = "BIMObjectGroup";
    ENTITY_TYPES["ORGAN"] = "MonitoringServiceOrgan";
    ENTITY_TYPES["OTHER"] = "other";
})(ENTITY_TYPES = exports.ENTITY_TYPES || (exports.ENTITY_TYPES = {}));

},{}],"a1B4H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SUBTRACT_BY = exports.SUBTRACT = exports.CURRENT_EPOCH_TIME = exports.CONV_NUMBER_TO_BOOLEAN = exports.CONV_BOOLEAN_TO_NUMBER = exports.IS_EMPTY = exports.EQUAL_TO = exports.STANDARD_DEVIATION = exports.INTEGRAL_BOOLEAN = exports.DIFFERENCE_THRESHOLD = exports.NOT = exports.OR = exports.AND = exports.AVERAGE = exports.THRESHOLD_BETWEEN_OUT = exports.THRESHOLD_BETWEEN_IN = exports.THRESHOLD_BELOW = exports.THRESHOLD_ABOVE = exports.DIVIDE_BY = exports.DIVIDE = exports.COPY = exports.PUTVALUE = void 0;
class Algorithm {
    constructor(name, description, inputTypes, outputType, requiredParams, run){
        this.name = name;
        this.inputTypes = inputTypes;
        this.outputType = outputType;
        this.description = description;
        this.requiredParams = requiredParams;
        this.run = run;
    }
}
exports.PUTVALUE = new Algorithm("PUTVALUE", "This algorithm returns the value set by the user (p1) regardless of the input", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the value to inject"
    }
], (input, params)=>{
    return params["p1"];
});
exports.COPY = new Algorithm("COPY", "This algorithm returns the value of first input", [
    "number"
], "number", [], (input, params)=>{
    return input[0];
});
exports.DIVIDE = new Algorithm("DIVIDE", "This algorithm returns the result of the division of the first input by the second input", [
    "number"
], "number", [], (input, params)=>{
    return input[0] / input[1];
});
exports.DIVIDE_BY = new Algorithm("DIVIDE_BY", "This algorithm returns the result of the division of the first input by the value set by the user (p1)", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the value to divide by"
    }
], (input, params)=>{
    return input[0] / params["p1"];
});
exports.THRESHOLD_ABOVE = new Algorithm("THRESHOLD_ABOVE", "This algorithm returns true if the input is above the threshold set by the user", [
    "number"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the threshold value"
    }
], (input, params)=>{
    const treshold = params["p1"];
    for (const n of input){
        if (n > treshold) return true;
    }
    return false;
});
exports.THRESHOLD_BELOW = new Algorithm("THRESHOLD_BELOW", "This algorithm returns true if the input is below the threshold set by the user", [
    "number"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the threshold value"
    }
], (input, params)=>{
    const treshold = params["p1"];
    for (const n of input){
        if (n < treshold) return true;
    }
    return false;
});
exports.THRESHOLD_BETWEEN_IN = new Algorithm("THRESHOLD_BETWEEN_IN", "This algorithm returns true if the input is between the two thresholds set by the user", [
    "number"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the first threshold value"
    },
    {
        name: "p2",
        type: "number",
        description: "the second threshold value"
    }
], (input, params)=>{
    const p1 = params["p1"];
    const p2 = params["p2"];
    const min = Math.min(p1, p2);
    const max = Math.max(p1, p2);
    for (const n of input){
        if (n >= min && n <= max) return true;
    }
    return false;
});
exports.THRESHOLD_BETWEEN_OUT = new Algorithm("THRESHOLD_BETWEEN_OUT", "This algorithm returns true if the input is outside the two thresholds set by the user", [
    "number"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the first threshold value"
    },
    {
        name: "p2",
        type: "number",
        description: "the second threshold value"
    }
], (input, params)=>{
    const p1 = params["p1"];
    const p2 = params["p2"];
    const min = Math.min(p1, p2);
    const max = Math.max(p1, p2);
    for (const n of input){
        if (n <= min || n >= max) return true;
    }
    return false;
});
exports.AVERAGE = new Algorithm("AVERAGE", "This algorithm returns the average of the inputs", [
    "number"
], "number", [], (input, params)=>{
    const flattenedArray = input.reduce((acc, curr)=>acc.concat(...curr), []);
    return flattenedArray.reduce((acc, current)=>acc + current, 0) / input.length;
});
exports.AND = new Algorithm("AND", "This algorithm returns true if all the inputs are true", [
    "boolean"
], "boolean", [], (input, params)=>{
    return !input.includes(false);
});
exports.OR = new Algorithm("OR", "This algorithm returns true if at least one of the inputs is true", [
    "boolean"
], "boolean", [], (input, params)=>{
    return input.includes(true);
});
exports.NOT = new Algorithm("NOT", "This algorithm returns true if all the inputs are false", [
    "boolean"
], "boolean", [], (input, params)=>{
    return !input.includes(true);
});
exports.DIFFERENCE_THRESHOLD = new Algorithm("DIFFERENCE_THRESHOLD", "This algorithm returns true if the difference between the first and any other input is above the threshold set by the user", [
    "number"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the threshold value"
    }
], (input, params)=>{
    const treshold = params["p1"];
    const first = input[0];
    for (const n of input){
        if (Math.abs(n - first) > treshold) return true;
    }
    return false;
});
exports.INTEGRAL_BOOLEAN = new Algorithm("INTEGRAL_BOOLEAN", "This algorithm calculates the integral of timeseries.", [
    "object"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "intervalTime, please copy paste the timeseries interval time"
    },
    {
        name: "p2",
        type: "string",
        description: "Ratio || Percentage   (write one of the two, Ratio will be used by default)"
    }
], (input, params)=>{
    const percentageResult = params["p2"] === "Percentage";
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    const invertBool = (bool)=>bool ? 0 : 1;
    dataInput.unshift({
        date: dataInput[dataInput.length - 1].date - params["p1"],
        value: invertBool(dataInput[0].value)
    });
    // Ensure input is sorted by time
    dataInput.sort((a, b)=>a.date - b.date);
    let integral = 0;
    for(let i = 1; i < dataInput.length; i++){
        // Calculate the difference in time
        const deltaTime = dataInput[i].date - dataInput[i - 1].date;
        // Calculate the average value between two points
        const avgValue = (dataInput[i].value + dataInput[i - 1].value) / 2;
        // Add the area of the trapezoid to the total integral
        integral += avgValue * deltaTime;
    }
    if (!percentageResult) return integral / (dataInput[dataInput.length - 1].date - dataInput[0].date);
    else return integral / (dataInput[dataInput.length - 1].date - dataInput[0].date) * 100;
});
exports.STANDARD_DEVIATION = new Algorithm("STANDARD_DEVIATION", "This algorithm returns the standard deviation of the inputs", [
    "number"
], "number", [], (input, params)=>{
    const n = input.length;
    const mean = input.reduce((a, b)=>a + b) / n;
    return Math.sqrt(input.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
});
exports.EQUAL_TO = new Algorithm("EQUAL_TO", "This algorithm returns true if the first input is equal to the parameter", [
    "number",
    "string"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the value to compare to"
    }
], (input, params)=>{
    return input[0] === params["p1"];
});
exports.IS_EMPTY = new Algorithm("IS_EMPTY", "This algorithm returns true if the input is an empty list", [
    "number",
    "string"
], "boolean", [], (input, params)=>{
    const flattenedArray = input.reduce((acc, curr)=>acc.concat(...curr), []);
    return flattenedArray.length === 0;
});
exports.CONV_BOOLEAN_TO_NUMBER = new Algorithm("CONV_BOOLEAN_TO_NUMBER", "This algorithm converts a boolean to a number", [
    "boolean"
], "number", [], (input, params)=>{
    return input[0] ? 1 : 0;
});
exports.CONV_NUMBER_TO_BOOLEAN = new Algorithm("CONV_NUMBER_TO_BOOLEAN", "This algorithm converts a number to a boolean (0 is false, everything else is true)", [
    "number"
], "boolean", [], (input, params)=>{
    const flattenedArray = input.reduce((acc, curr)=>acc.concat(...curr), []);
    return flattenedArray[0] !== 0;
});
exports.CURRENT_EPOCH_TIME = new Algorithm("CURRENT_EPOCH_TIME", "This algorithm returns the current epoch time", [], "number", [], (input, params)=>{
    return Date.now();
});
exports.SUBTRACT = new Algorithm("SUBTRACT", "This algorithm returns the result of the subtraction of the first input by the second input", [
    "number"
], "number", [], (input, params)=>{
    return input[0] - input[1];
});
exports.SUBTRACT_BY = new Algorithm("SUBTRACT_BY", "This algorithm returns the result of the subtraction of the first input by the value set by the user (p1)", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the value to subtract by"
    }
], (input, params)=>{
    return input[0] - params["p1"];
});

},{}],"jVEQx":[function(require,module,exports) {
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
exports.AnalyticService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const spinal_env_viewer_graph_service_1 = require("84742e2837e24d3b");
const CONSTANTS = require("ab099baa5bc4dcd4");
const ConfigModel_1 = require("96694bfffb82fe38");
const AnalyticModel_1 = require("ba6004bd8f5b7210");
const EntityModel_1 = require("e0ff123ace339ff9");
const TrackingMethodModel_1 = require("9b0a772027d1e940");
const InputsModel_1 = require("89679a198a351a56");
const OutputsModel_1 = require("a7ef2ed4d2a4b5d2");
const spinal_env_viewer_plugin_documentation_service_1 = require("afce19c865fe8fd0");
const utils_1 = require("6eac5aca4b2a8fb8");
const SingletonTimeSeries_1 = require("57aed6b4a1f01a2b");
const algo = require("5ef2c727f601ca1b");
const axios_1 = require("36fa03571c49f998");
const qs_1 = require("60a970666a1a566a");
/**
 * This class handles most of the logic for analytics. It provides methods for creating and retrieving analytics, entities, and contexts.
 * It also provides methods for applying tracking methods to followed entities and applying algorithms to inputs.
 *
 * @export
 * @class AnalyticService
 */ class AnalyticService {
    //private googleChatService: GoogleChatService;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){
        /**
         * The singleton instance of the Timeseries service.
         *
         * @private
         * @type {SpinalServiceTimeseries}
         * @memberof AnalyticService
         */ this.spinalServiceTimeseries = SingletonTimeSeries_1.SingletonServiceTimeseries.getInstance();
    }
    /**
     * Initialize private attributes with necessary information to use the the messaging service.
     *
     * @param {string} accountSid
     * @param {string} authToken
     * @param {string} fromNumber
     * @return {*}  {void}
     * @memberof AnalyticService
     */ initTwilioCredentials(accountSid, authToken, fromNumber) {
        if (!accountSid || !authToken || !fromNumber) {
            console.error("Twilio credentials not set, Messaging services will not work");
            return;
        }
        console.log("Init connection to messaging services...");
        this.twilioFromNumber = fromNumber;
        this.twilioAccountSid = accountSid;
        this.twilioAuthToken = authToken;
        console.log("Done.");
    }
    /**
     * This method creates a new context and returns the info of the newly created context.
     * If the context already exists (same name), it just returns the info of that context instead of creating a new one.
     * @param {string} contextName
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof AnalyticService
     */ createContext(contextName) {
        return __awaiter(this, void 0, void 0, function*() {
            const alreadyExists = this.getContext(contextName);
            if (alreadyExists) {
                console.error(`Context ${contextName} already exists`);
                return alreadyExists;
            }
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(contextName, CONSTANTS.CONTEXT_TYPE, undefined).then((context)=>{
                const contextId = context.getId().get();
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(contextId);
            });
        });
    }
    /**
     * Retrieves and returns all contexts
     * handled by this service (type analysisContext)
     * @return {*}  {(SpinalNodeRef[] | undefined)}
     * @memberof AnalyticService
     */ getContexts() {
        const contexts = spinal_env_viewer_graph_service_1.SpinalGraphService.getContextWithType(CONSTANTS.CONTEXT_TYPE);
        const argContexts = contexts.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.info.id.get()));
        return argContexts;
    }
    /**
     * This method use the context name to find and return the info of that context. If the context does not exist, it returns undefined.
     * If multiple contexts have the same name, it returns the first one.
     * @param {string} contextName
     * @return {*}  {(SpinalNodeRef | undefined)}
     * @memberof AnalyticService
     */ getContext(contextName) {
        const contexts = this.getContexts();
        if (!contexts) return undefined;
        return contexts.find((context)=>context.name.get() === contextName);
    }
    getContextIdOfAnalytic(analyticId) {
        const contexts = this.getContexts();
        if (!contexts) return undefined;
        const analyticNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(analyticId);
        const contextId = analyticNode.getContextIds()[0];
        return contextId;
    }
    ////////////////////////////////////////////////////
    /////////////////// ENTITY /////////////////////////
    ////////////////////////////////////////////////////
    /**
     * This method creates a new entity and returns the info of the newly created entity.
     *
     * @param {IEntity} entityInfo
     * @param {string} contextId
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof AnalyticService
     */ addEntity(entityInfo, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            entityInfo.type = CONSTANTS.ENTITY_TYPE;
            const entityModel = new EntityModel_1.EntityModel(entityInfo);
            const entityNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(entityInfo, entityModel);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(contextId, entityNodeId, contextId, CONSTANTS.CONTEXT_TO_ENTITY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(entityNodeId);
        });
    }
    /**
     * Returns all the entities withing a context that have the specified type.
     *
     * @param {SpinalContext<any>} context
     * @param {string} targetType
     * @return {*}  {(Promise<SpinalNode<any> | undefined>)}
     * @memberof AnalyticService
     */ findEntityByTargetType(context, targetType) {
        return __awaiter(this, void 0, void 0, function*() {
            const entities = yield context.getChildren(CONSTANTS.CONTEXT_TO_ENTITY_RELATION);
            const result = entities.find((e)=>e.info.entityType.get() == targetType);
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(result);
            return result;
        });
    }
    /**
     * Retrieves a SpinalNodeRef for the specified entity within the specified context.
     * @async
     * @param {string} contextName - The name of the context to search within.
     * @param {string} entityName - The name of the entity to retrieve.
     * @returns {Promise<SpinalNodeRef|undefined>} A Promise that resolves to the SpinalNodeRef for the entity, or undefined if the context or entity cannot be found.
     * @memberof AnalyticService
     */ getEntity(contextName, entityName) {
        return __awaiter(this, void 0, void 0, function*() {
            const context = this.getContext(contextName);
            if (!context) return undefined;
            const contextNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(context.id.get());
            const entities = yield contextNode.getChildren(CONSTANTS.CONTEXT_TO_ENTITY_RELATION);
            const entitiesModels = entities.map((el)=>spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(el.info.id.get()));
            return entitiesModels.find((entity)=>entity.name.get() === entityName);
        });
    }
    /**
     * Retrieves the parent entity of the specified analytic.
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the parent entity.
     * @returns {Promise<SpinalNodeRef|undefined>} A Promise that resolves to the parent entity, or undefined if the parent entity cannot be found.
     * @memberof AnalyticService
     */ getEntityFromAnalytic(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(analyticId, [
                CONSTANTS.ENTITY_TO_ANALYTIC_RELATION
            ]);
            if (nodes.length != 0) return nodes[0];
            return undefined;
        });
    }
    ////////////////////////////////////////////////////
    //////////////// Analytic //////////////////////////
    ////////////////////////////////////////////////////
    /**
     * Adds a new analytic to the specified entity within the specified context.
     * @async
     * @param {IAnalytic} analyticInfo - The information for the new analytic to add.
     * @param {string} contextId - The ID of the context in which to add the analytic.
     * @param {string} entityId - The ID of the entity to which to add the analytic.
     * @returns {Promise<SpinalNodeRef>} A Promise that resolves to the newly created analytic info.
     * @memberof AnalyticService
     */ addAnalytic(analyticInfo, contextId, entityId) {
        return __awaiter(this, void 0, void 0, function*() {
            analyticInfo.type = CONSTANTS.ANALYTIC_TYPE;
            const analyticModel = new AnalyticModel_1.AnalyticModel(analyticInfo);
            const analyticNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(analyticInfo, analyticModel);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(entityId, analyticNodeId, contextId, CONSTANTS.ENTITY_TO_ANALYTIC_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield this.addInputsNode(analyticNodeId, contextId);
            yield this.addOutputsNode(analyticNodeId, contextId);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(analyticNodeId);
        });
    }
    /**
     * Retrieves all analytics within the specified context.
     * @async
     * @param {string} contextId - The ID of the context in which to retrieve analytics.
     * @returns {Promise<SpinalNodeRef[]>} A Promise that resolves to an array of SpinalNodeRefs for all analytics in the context.
     * @memberof AnalyticService
     */ getAllAnalytics(contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const analytics = yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(contextId, contextId, (node)=>{
                if (node.getType().get() === CONSTANTS.ANALYTIC_TYPE) {
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    return true;
                }
                return false;
            });
            return analytics;
        });
    }
    /**
     * Retrieves the SpinalNodeRef for the specified analytic within the specified context.
     * @async
     * @param {string} contextId - The ID of the context in which to search for the analytic.
     * @param {string} analyticName - The name of the analytic to retrieve.
     * @returns {Promise<SpinalNodeRef|undefined>} A Promise that resolves to the SpinalNodeRef for the analytic, or undefined if the analytic cannot be found.
     * @memberof AnalyticService
     */ getAnalytic(contextId, analyticName) {
        return __awaiter(this, void 0, void 0, function*() {
            const analytics = yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(contextId, contextId, (node)=>{
                if (node.getType().get() === CONSTANTS.ANALYTIC_TYPE) {
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    return true;
                }
                return false;
            });
            const analytic = analytics.find((el)=>el.info.name.get() == analyticName);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(analytic.id.get());
        });
    }
    /**
     * Adds an Inputs node to the specified analytic within the specified context.
     * @async
     * @param {string} analyticId - The ID of the analytic to which to add the Inputs node.
     * @param {string} contextId - The ID of the context in which to add the Inputs node.
     * @returns {Promise<SpinalNodeRef>} A Promise that resolves to the newly created Inputs node.
     * @memberof AnalyticService
     */ addInputsNode(analyticId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputsInfo = {
                name: "Inputs",
                description: "",
                type: CONSTANTS.INPUTS_TYPE
            };
            const inputsModel = new InputsModel_1.InputsModel(inputsInfo);
            const inputsId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(inputsInfo, inputsModel);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(analyticId, inputsId, contextId, CONSTANTS.ANALYTIC_TO_INPUTS_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(inputsId);
        });
    }
    /**
     * Adds an Outputs node to the specified analytic within the specified context.
     * @async
     * @param {string} analyticId - The ID of the analytic to which to add the Outputs node.
     * @param {string} contextId - The ID of the context in which to add the Outputs node.
     * @returns {Promise<SpinalNodeRef>} A Promise that resolves to the newly created Outputs node.
     * @memberof AnalyticService
     */ addOutputsNode(analyticId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const outputsInfo = {
                name: "Outputs",
                description: "",
                type: CONSTANTS.OUTPUTS_TYPE
            };
            const outputsModel = new OutputsModel_1.OutputsModel(outputsInfo);
            const outputsId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(outputsInfo, outputsModel);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(analyticId, outputsId, contextId, CONSTANTS.ANALYTIC_TO_OUTPUTS_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(outputsId);
        });
    }
    /**
     * Adds a new Config node to the specified analytic within the specified context, with the specified attributes.
     *
     * @param {INodeDocumentation} configAttributes - The attributes to add to the Config node.
     * @param {string} analyticId - The ID of the analytic to which to add the Config node.
     * @param {string} contextId - The ID of the context in which to add the Config node.
     * @return {*}  {Promise<SpinalNodeRef>}
     * @memberof AnalyticService
     */ addConfig(configAttributes, analyticId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const configNodeInfo = {
                name: "Config",
                type: CONSTANTS.CONFIG_TYPE
            };
            const configModel = new ConfigModel_1.ConfigModel(configNodeInfo);
            const configId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(configNodeInfo, configModel);
            const configNode = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(analyticId, configId, contextId, CONSTANTS.ANALYTIC_TO_CONFIG_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            this.addAttributesToNode(configNode, configAttributes);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(configId);
        });
    }
    /**
     * Retrieves the Config node for the specified analytic
     *
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the Config node.
     * @return {*}  {(Promise<SpinalNodeRef | undefined>)} A Promise that resolves to the Config node, or undefined if the Config node cannot be found.
     * @memberof AnalyticService
     */ getConfig(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(analyticId, [
                CONSTANTS.ANALYTIC_TO_CONFIG_RELATION
            ]);
            if (nodes.length === 0) return undefined;
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodes[0].id.get());
        });
    }
    /**
     * Retrieves the Inputs node for the specified analytic.
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the Inputs node.
     * @return {*}  {(Promise<SpinalNodeRef | undefined>)} - A Promise that resolves to the Inputs node, or undefined if the Inputs node cannot be found.
     * @memberof AnalyticService
     */ getInputsNode(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(analyticId, [
                CONSTANTS.ANALYTIC_TO_INPUTS_RELATION
            ]);
            if (nodes.length === 0) return undefined;
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodes[0].id.get());
        });
    }
    /**
     * Retrieves the Outputs node for the specified analytic.
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the Outputs node.
     * @returns {*} {(Promise<SpinalNodeRef | undefined>)} - A Promise that resolves to the Outputs node, or undefined if the Outputs node cannot be found.
     * @memberof AnalyticService
     */ getOutputsNode(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(analyticId, [
                CONSTANTS.ANALYTIC_TO_OUTPUTS_RELATION
            ]);
            if (nodes.length === 0) return undefined;
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(nodes[0].id.get());
        });
    }
    deleteInputsNode(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputsNode = yield this.getInputsNode(analyticId);
            if (inputsNode) yield (0, utils_1.safeDeleteNode)(inputsNode.id.get(), false);
        });
    }
    deleteOutputsNode(analyticId, shouldDeleteChildren = false) {
        return __awaiter(this, void 0, void 0, function*() {
            const outputsNode = yield this.getOutputsNode(analyticId);
            if (outputsNode) yield (0, utils_1.safeDeleteNode)(outputsNode.id.get(), shouldDeleteChildren);
        });
    }
    deleteAnalytic(analyticId, shouldDeleteChildren = false) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputsNode = yield this.getInputsNode(analyticId);
            const outputsNode = yield this.getOutputsNode(analyticId);
            if (inputsNode) yield (0, utils_1.safeDeleteNode)(inputsNode.id.get());
            if (outputsNode) yield (0, utils_1.safeDeleteNode)(outputsNode.id.get(), shouldDeleteChildren);
            yield (0, utils_1.safeDeleteNode)(analyticId);
        });
    }
    ////////////////////////////////////////////////////
    //////////////// TRACKED VARIABLE //////////////////
    ////////////////////////////////////////////////////
    /**
     * Adds a new Tracking Method node to the specified Input node within the specified context.
     * @async
     * @param {INodeDocumentation} trackingMethodAttributes
     * @param {string} contextId - The ID of the context in which to add the Tracking Method node.
     * @param {string} inputId - The ID of the Input node to which to add the Tracking Method node.
     * @return {*}  {Promise<SpinalNodeRef>} - A Promise that resolves to the newly created Tracking Method node.
     * @memberof AnalyticService
     */ addTrackingMethod(trackingMethodAttributes, contextId, inputId) {
        return __awaiter(this, void 0, void 0, function*() {
            const trackingMethodNodeInfo = {
                name: "TrackingMethod",
                type: CONSTANTS.TRACKING_METHOD_TYPE
            };
            const trackingMethodModel = new TrackingMethodModel_1.TrackingMethodModel(trackingMethodNodeInfo);
            const trackingMethodNodeId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(trackingMethodNodeInfo, trackingMethodModel);
            const createdNode = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(inputId, trackingMethodNodeId, contextId, CONSTANTS.ANALYTIC_INPUTS_TO_TRACKING_METHOD_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            this.addAttributesToNode(createdNode, trackingMethodAttributes);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(trackingMethodNodeId);
        });
    }
    /**
     * Adds a new Tracking Method node to the Inputs node of the specified analytic within the specified context.
     *
     * @async
     * @param {INodeDocumentation} trackingMethodAttributes - The attributes to add to the Tracking Method node.
     * @param {string} contextId - The ID of the context in which to add the Tracking Method node.
     * @param {string} analyticId - The ID of the analytic for which to add the Tracking Method node.
     * @return {*}  {Promise<SpinalNodeRef>} - A Promise that resolves to the newly created Tracking Method node.
     * @memberof AnalyticService
     */ addInputTrackingMethod(trackingMethodAttributes, contextId, analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = yield this.getInputsNode(analyticId);
            if (inputs === undefined) throw Error("Inputs node not found");
            return this.addTrackingMethod(trackingMethodAttributes, contextId, inputs.id.get());
        });
    }
    /**
     * Retrieves all Tracking Method nodes associated with the Inputs node of the specified analytic.
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the Tracking Method nodes.
     * @returns {Promise<SpinalNodeRef[]|undefined>} A Promise that resolves to an array of Tracking Method nodes, or undefined if the Inputs node or Tracking Method nodes cannot be found.
     * @memberof AnalyticService
     */ getTrackingMethods(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = yield this.getInputsNode(analyticId);
            if (inputs === undefined) return undefined;
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(inputs.id.get(), [
                CONSTANTS.ANALYTIC_INPUTS_TO_TRACKING_METHOD_RELATION
            ]);
            return nodes;
        });
    }
    /**
     * Retrieves the first Tracking Method node associated with the Inputs node of the specified analytic.
     * @async
     * @param {string} analyticId - The ID of the analytic for which to retrieve the Tracking Method node.
     * @returns {Promise<SpinalNodeRef|undefined>} A Promise that resolves to the first Tracking Method node, or undefined if the Inputs node or Tracking Method nodes cannot be found.
     * @memberof AnalyticService
     */ getTrackingMethod(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const trackingMethods = yield this.getTrackingMethods(analyticId);
            if (trackingMethods === undefined) return undefined;
            return trackingMethods[0];
        });
    }
    /**
     * Removes the specified Tracking Method node from the specified Inputs node and deletes it from the graph.
     * @async
     * @param {string} inputId - The ID of the Inputs node from which to remove the Tracking Method node.
     * @param {string} trackingMethodId - The ID of the Tracking Method node to remove and delete.
     * @returns {Promise<void>} A Promise that resolves when the Tracking Method node has been removed and deleted.
     * @memberof AnalyticService
     */ removeTrackingMethod(inputId, trackingMethodId) {
        return __awaiter(this, void 0, void 0, function*() {
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(inputId, trackingMethodId, CONSTANTS.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeFromGraph(trackingMethodId);
        });
    }
    /**
     * Removes the specified Tracking Method node from the Inputs node of the specified analytic and deletes it from the graph.
     * @async
     * @param {string} analyticId - The ID of the analytic from which to remove the Tracking Method node.
     * @param {string} trackingMethodId - The ID of the Tracking Method node to remove and delete.
     * @throws {Error} Throws an error if the Inputs node cannot be found.
     * @returns {Promise<void>} A Promise that resolves when the Tracking Method node has been removed and deleted.
     * @memberof AnalyticService
     */ removeInputTrackingMethod(analyticId, trackingMethodId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = yield this.getInputsNode(analyticId);
            if (inputs === undefined) throw Error("Inputs node not found");
            yield this.removeTrackingMethod(inputs.id.get(), trackingMethodId);
        });
    }
    /**
     *
     * @async
     * @param {string} trackMethod - The type of filter.
     * @param {string} filterValue - The filter value to use.
     * @param {SpinalNodeRef} followedEntity - The SpinalNodeRef object representing the Followed Entity to which the Tracking Method should be applied.
     * @returns {*} {Promise<SpinalNodeRef[] | SpinalNodeRef | undefined>} - A Promise that resolves with the results of the applied Tracking Method.
     * @memberof AnalyticService
     */ applyTrackingMethodWithParams(followedEntity, trackMethod, filterValue, depth, strictDepth, authorizedRelations) {
        return __awaiter(this, void 0, void 0, function*() {
            if (followedEntity) switch(trackMethod){
                case CONSTANTS.TRACK_METHOD.ENDPOINT_NAME_FILTER:
                    {
                        const endpoint = yield (0, utils_1.findEndpoint)(followedEntity.id.get(), filterValue, depth, strictDepth, authorizedRelations, CONSTANTS.ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
                        return endpoint;
                    }
                case CONSTANTS.TRACK_METHOD.CONTROL_ENDPOINT_NAME_FILTER:
                    {
                        const controlEndpoint = yield (0, utils_1.findEndpoint)(followedEntity.id.get(), filterValue, depth, strictDepth, authorizedRelations, CONSTANTS.CONTROL_ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
                        return controlEndpoint;
                    }
                case CONSTANTS.TRACK_METHOD.ATTRIBUTE_NAME_FILTER:
                    {
                        const [first, second] = filterValue.split(":");
                        const foundAttribute = yield (0, utils_1.findAttribute)(followedEntity.id.get(), first, second, depth, strictDepth, authorizedRelations);
                        if (foundAttribute == -1) return undefined;
                        return foundAttribute;
                    //}
                    }
                default:
                    console.log("Track method not recognized");
            }
        });
    }
    ////////////////////////////////////////////////////
    //////////////// FOLLOWED ENTITY ///////////////////
    ////////////////////////////////////////////////////
    /**
     * Adds a link between an input and a followed entity.
     * @param {string} contextId - The id of the context where the link will be created.
     * @param {string} inputId - The id of the input node.
     * @param {string} followedEntityId - The id of the followed entity node.
     * @returns {Promise<SpinalNodeRef>} The linked node.
     * @memberof AnalyticService
     */ addLinkToFollowedEntity(contextId, inputId, followedEntityId) {
        return __awaiter(this, void 0, void 0, function*() {
            const link = yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(inputId, followedEntityId, contextId, CONSTANTS.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
            const id = link.info.id.get();
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(id);
        });
    }
    /**
     * Adds a link between the input node of the specified analytic and a followed entity.
     * @param {string} contextId - The id of the context where the link will be created.
     * @param {string} analyticId - The id of the analytic node.
     * @param {string} followedEntityId - The id of the followed entity node.
     * @returns {Promise<SpinalNodeRef>} The linked node.
     * @memberof AnalyticService
     */ addInputLinkToFollowedEntity(contextId, analyticId, followedEntityId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = yield this.getInputsNode(analyticId);
            if (inputs === undefined) throw Error("Inputs node not found");
            return this.addLinkToFollowedEntity(contextId, inputs.id.get(), followedEntityId);
        });
    }
    /**
     * Removes the link between an input node and a followed entity node.
     *
     * @async
     * @param {string} analyticId - The ID of the analytic node.
     * @param {string} followedEntityId - The ID of the followed entity node.
     * @returns {Promise<void>}
     * @memberof AnalyticService
     */ removeLinkToFollowedEntity(analyticId, followedEntityId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputNodeRef = yield this.getInputsNode(analyticId);
            if (inputNodeRef === undefined) throw Error("Inputs node not found");
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(inputNodeRef.id.get(), followedEntityId, CONSTANTS.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        });
    }
    /**
     * Get the followed entity node of an analytic.
     * @async
     * @param {string} analyticId - The id of the analytic.
     * @returns {Promise<SpinalNodeRef|undefined>} The followed entity node or undefined if it does not exist.
     * @memberof AnalyticService
     */ getFollowedEntity(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputsNode = yield this.getInputsNode(analyticId);
            if (inputsNode === undefined) return undefined;
            const nodes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(inputsNode.id.get(), [
                CONSTANTS.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION
            ]);
            if (nodes === undefined) return undefined;
            return nodes[0];
        });
    }
    ///////////////////////////////////////////////////
    ///////////////////// GLOBAL //////////////////////
    ///////////////////////////////////////////////////
    /**
     * Adds the specified attributes to the node with the specified ID.
     * @async
     * @param {SpinalNode<any>} node - The node to which to add the attributes.
     * @param {INodeDocumentation} attributes - An array of objects representing the attributes to add to the node.
     * @returns {Promise<void>} A Promise that resolves when the attributes have been added.
     * @memberof AnalyticService
     */ addAttributesToNode(node, attributes) {
        return __awaiter(this, void 0, void 0, function*() {
            for (const categoryName of Object.keys(attributes))for (const attribute of attributes[categoryName])yield spinal_env_viewer_plugin_documentation_service_1.default.addAttributeByCategoryName(node, categoryName, attribute.name, attribute.value, attribute.type, "");
        });
    }
    /**
     * Gets the attributes from a node.
     *
     * @param {string} nodeId - The ID of the node from which to retrieve the attributes.
     * @param {string} category - The category of the attributes to retrieve.
     * @return {*}  {Promise<any>} An object containing the attributes.
     * @memberof AnalyticService
     */ getAttributesFromNode(nodeId, category) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            const res = {};
            const parameters = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
            for (const param of parameters){
                const obj = param.get();
                res[obj.label] = obj.value;
            }
            return res;
        });
    }
    /**
     * Gets the attribute from a node.
     *
     * @param {string} nodeId - The ID of the node from which to retrieve the attribute.
     * @param {string} category - The category of the attribute to retrieve.
     * @param {string} label - The label of the attribute to retrieve.
     * @return {*}  {Promise<any>}  An object containing the attribute { label: value}.
     * @memberof AnalyticService
     */ getAttributeFromNode(nodeId, category, label) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            const parameters = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
            for (const param of parameters){
                const obj = param.get();
                if (obj.label === label) return {
                    [obj.label]: obj.value
                };
            }
            return undefined;
        });
    }
    getAllCategoriesAndAttributesFromNode(nodeId) {
        return __awaiter(this, void 0, void 0, function*() {
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
            const res = {};
            const categories = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategory(node);
            for (const cat of categories){
                const categoryName = cat.nameCat;
                res[categoryName] = {};
                const attributes = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, categoryName);
                for (const attribute of attributes){
                    const obj = attribute.get();
                    res[categoryName][obj.label] = obj.value;
                }
            }
            return res;
        });
    }
    /**
     * Gets the targeted entities for an analytic.
     *
     * @param {string} analyticId The ID of the analytic.
     * @return {*}  {(Promise<SpinalNodeRef[]|undefined>)} An array of SpinalNodeRefs for the entities
     * @memberof AnalyticService
     */ getWorkingFollowedEntities(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const followedEntity = yield this.getFollowedEntity(analyticId);
            const trackingMethod = yield this.getTrackingMethod(analyticId);
            const config = yield this.getConfig(analyticId);
            const entityInfo = yield this.getEntityFromAnalytic(analyticId);
            if (!entityInfo) return;
            const entityType = entityInfo.entityType.get();
            if (followedEntity && trackingMethod && config) {
                if (entityType == followedEntity.type.get()) // we can continue as planned
                return [
                    followedEntity
                ];
                if (followedEntity.type.get().includes("group") || followedEntity.type.get().includes("Group")) {
                    console.log("Anchor entity is a group, trying to find the correct entities with the relation name: ", CONSTANTS.GROUP_RELATION_PREFIX + entityType);
                    return yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(followedEntity.id.get(), [
                        CONSTANTS.GROUP_RELATION_PREFIX + entityType
                    ]);
                }
                if (followedEntity.type.get().includes("context") || followedEntity.type.get().includes("Context")) {
                    console.log("Anchor entity is a context, trying to find the correct entities");
                    return yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContextByType(followedEntity.id.get(), followedEntity.id.get(), entityType);
                }
                console.log("Failed to deduct the correct entities from the anchor entity");
                return [];
            }
        });
    }
    getWorkingFollowedEntitiesWithParam(followedEntity, entityType) {
        return __awaiter(this, void 0, void 0, function*() {
            if (entityType == followedEntity.type.get()) // we can continue as planned
            return [
                followedEntity
            ];
            if (followedEntity.type.get().includes("group") || followedEntity.type.get().includes("Group")) {
                console.log("Anchor entity is a group, trying to find the correct entities with the relation name: ", CONSTANTS.GROUP_RELATION_PREFIX + entityType);
                return yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(followedEntity.id.get(), [
                    CONSTANTS.GROUP_RELATION_PREFIX + entityType
                ]);
            }
            if (followedEntity.type.get().includes("context") || followedEntity.type.get().includes("Context")) {
                console.log("Anchor entity is a context, trying to find the correct entities");
                return yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContextByType(followedEntity.id.get(), followedEntity.id.get(), entityType);
            }
            console.log("Failed to deduct the correct entities from the anchor entity");
            return [];
        });
    }
    getEntryDataModelByInputIndex(analyticId, followedEntity, inputIndex) {
        return __awaiter(this, void 0, void 0, function*() {
            const trackingMethod = yield this.getTrackingMethod(analyticId);
            if (!trackingMethod) return undefined;
            const inputParams = yield this.getAttributesFromNode(trackingMethod.id.get(), inputIndex);
            return yield this.applyTrackingMethodWithParams(followedEntity, inputParams[CONSTANTS.ATTRIBUTE_TRACKING_METHOD], inputParams[CONSTANTS.ATTRIBUTE_FILTER_VALUE], inputParams[CONSTANTS.ATTRIBUTE_SEARCH_DEPTH], inputParams[CONSTANTS.ATTRIBUTE_STRICT_DEPTH], inputParams[CONSTANTS.ATTRIBUTE_SEARCH_RELATIONS].split(CONSTANTS.ATTRIBUTE_VALUE_SEPARATOR));
        });
    }
    getFormattedInputDataByIndex(analyticId, followedEntity, inputIndex) {
        return __awaiter(this, void 0, void 0, function*() {
            const input = [];
            const entryDataModel = yield this.getEntryDataModelByInputIndex(analyticId, followedEntity, inputIndex);
            if (!entryDataModel) return input;
            const trackingMethod = yield this.getTrackingMethod(analyticId);
            if (!trackingMethod) return input;
            const trackingParams = yield this.getAttributesFromNode(trackingMethod.id.get(), inputIndex);
            if (!trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES] || trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES] == 0) {
                const currentValue = yield (0, utils_1.getValueModelFromEntry)(entryDataModel);
                input.push(currentValue.get());
            } else {
                const spinalTs = yield this.spinalServiceTimeseries.getOrCreateTimeSeries(entryDataModel.id.get());
                const end = Date.now();
                const start = end - trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES];
                const data = yield spinalTs.getFromIntervalTime(start, end);
                //add fictive data copying last value to currentTime.
                if (data.length != 0) data.push({
                    date: end,
                    value: data[data.length - 1].value
                });
                //const dataValues = data.map((el) => el.value);
                input.push(data);
            }
            return input;
        });
    }
    findExecutionOrder(dependencies) {
        const graph = {};
        const visited = {};
        const stack = [];
        // Create graph from dependency map
        for (const algo of Object.keys(dependencies)){
            graph[algo] = graph[algo] || [];
            const dependency = dependencies[algo];
            graph[dependency] = graph[dependency] || [];
            graph[dependency].push(algo);
        }
        const visit = (node)=>{
            if (!visited[node]) {
                visited[node] = true;
                if (graph[node]) for (const neighbor of graph[node])visit(neighbor);
                stack.push(node);
            }
        };
        for (const node of Object.keys(graph))if (!visited[node]) visit(node);
        // Check for circular dependencies (not handled in this simple implementation)
        for (const node of Object.keys(graph)){
            if (stack.indexOf(node) > stack.indexOf(dependencies[node])) return null; // Circular dependency detected
        }
        return stack.filter((x)=>x.startsWith("A"));
    }
    filterAlgorithmParametersAttributesByIndex(algoParams, indexName) {
        const result = {};
        for(const key in algoParams)if (key.startsWith(indexName)) {
            const newKey = key.replace(indexName + CONSTANTS.ATTRIBUTE_SEPARATOR, "");
            result[newKey] = algoParams[key];
        }
        return result;
    }
    recExecuteAlgorithm(analyticId, entity, algoIndexName, ioDependencies, algoIndexMapping, algoParams) {
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = [];
            const myDependencies = ioDependencies[algoIndexName].split(CONSTANTS.ATTRIBUTE_VALUE_SEPARATOR);
            for (const dependency of myDependencies)// if dependency is an algorithm then rec call with that algorithm
            if (dependency.startsWith("A")) {
                // save the result of the algorithm in the inputs array
                const res = yield this.recExecuteAlgorithm(analyticId, entity, dependency, ioDependencies, algoIndexMapping, algoParams);
                if (res == undefined) return undefined;
                inputs.push(res);
            } else {
                // if dependency is an input then get the value of the input
                const inputData = yield this.getFormattedInputDataByIndex(analyticId, entity, dependency);
                if (inputData.length == 0) return undefined;
                inputs.push(inputData);
            }
            // after the inputs are ready we can execute the algorithm
            const algorithm_name = algoIndexMapping[algoIndexName];
            const algorithmParameters = this.filterAlgorithmParametersAttributesByIndex(algoParams, algoIndexName);
            const result = algo[algorithm_name].run(inputs, algorithmParameters);
            //console.log('result :', result);
            return result;
        });
    }
    /**
     * Performs an analysis on an entity for an analytic.
     * @param {string} analyticId The ID of the analytic.
     * @param {SpinalNodeRef} entity The SpinalNodeRef for the entity to analyze.
     * @returns {*} {Promise<void>}
     * @memberof AnalyticService
     */ doAnalysisOnEntity(analyticId, entity) {
        return __awaiter(this, void 0, void 0, function*() {
            //Get the io dependencies of the analytic
            const configNode = yield this.getConfig(analyticId);
            if (!configNode) return {
                success: false,
                error: "No config node found"
            };
            const ioDependencies = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES);
            const algoIndexMapping = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING);
            const algoParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS);
            const R = ioDependencies["R"];
            const result = yield this.recExecuteAlgorithm(analyticId, entity, R, ioDependencies, algoIndexMapping, algoParams);
            return this.applyResult(result, analyticId, configNode, entity);
        });
    }
    /**
     * Performs an analysis on all entities for an analytic.
     * @param {string} analyticId The ID of the analytic.
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ doAnalysis(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const entities = yield this.getWorkingFollowedEntities(analyticId);
            if (!entities) return [
                {
                    success: false,
                    error: "No entities found"
                }
            ];
            const results = [];
            for (const entity of entities){
                const result = yield this.doAnalysisOnEntity(analyticId, entity);
                results.push(result);
            }
            return results;
        });
    }
    ///////////////////////////////////////////////////
    ///////////////// RESULT HANDLING /////////////////
    ///////////////////////////////////////////////////
    /**
     * Applies the result of an algorithm.
     *
     * @param {*} result The result of the algorithm used.
     * @param {string} analyticId The ID of the analytic.
     * @param {SpinalNodeRef} configNode The SpinalNodeRef of the configuration of the analytic.
     * @param {SpinalNodeRef} followedEntityNode The SpinalNodeRef of the entity.
     * @return {*}
     * @memberof AnalyticService
     */ applyResult(result, analyticId, configNode, followedEntityNode) {
        return __awaiter(this, void 0, void 0, function*() {
            if (result === undefined) return {
                success: false,
                error: "Result is undefined"
            };
            const params = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS);
            switch(params[CONSTANTS.ATTRIBUTE_RESULT_TYPE]){
                case CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET:
                    yield this.handleTicketResult(result, analyticId, configNode, followedEntityNode, params, "Ticket");
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.CONTROL_ENDPOINT:
                    yield this.handleControlEndpointResult(result, followedEntityNode, params);
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.CONTROL_ENDPOINT
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.ENDPOINT:
                    yield this.handleEndpointResult(result, followedEntityNode, params);
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.ENDPOINT
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.ALARM:
                    yield this.handleTicketResult(result, analyticId, configNode, followedEntityNode, params, "Alarm");
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.ALARM
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.SMS:
                    yield this.handleSMSResult(result, configNode, followedEntityNode);
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.SMS
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.LOG:
                    console.log(`LOG : ${params[CONSTANTS.ATTRIBUTE_RESULT_NAME]} \t|\t Result : ${result}`);
                    return {
                        success: true,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.LOG
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE:
                    if (!result) return {
                        success: false,
                        error: "False result"
                    };
                    return this.handleGChatMessageResult(configNode, followedEntityNode);
                case CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_ORGAN_CARD:
                    if (!result) return {
                        success: false,
                        error: "False result"
                    };
                    return this.handleGChatOrganCardResult(configNode, followedEntityNode);
                default:
                    return {
                        success: false,
                        error: "Result type not recognized"
                    };
            }
        });
    }
    /**
     * Handles the result of an algorithm that creates a ticket or an alarm.
     *
     * @private
     * @param {*} result
     * @param {string} analyticId
     * @param {SpinalNodeRef} configNode
     * @param {SpinalNodeRef} followedEntityNode
     * @param {*} params
     * @param {string} ticketType
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ handleTicketResult(result, analyticId, configNode, followedEntityNode, params, ticketType // Alarm or Ticket
    ) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!result) return;
            const outputNode = yield this.getOutputsNode(analyticId);
            if (!outputNode) return;
            const analyticContextId = this.getContextIdOfAnalytic(analyticId);
            if (!analyticContextId) return;
            const ticketInfo = {
                name: `${params[CONSTANTS.ATTRIBUTE_RESULT_NAME]} : ${followedEntityNode.name.get()}`
            };
            (0, utils_1.addTicketAlarm)(ticketInfo, configNode, analyticContextId, outputNode.id.get(), followedEntityNode.id.get(), ticketType);
        });
    }
    /**
     * Handles the result of an algorithm that modifies a control point.
     *
     * @private
     * @param {*} result
     * @param {SpinalNodeRef} followedEntityNode
     * @param {*} params
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ handleControlEndpointResult(result, followedEntityNode, params) {
        return __awaiter(this, void 0, void 0, function*() {
            const controlEndpointNode = yield (0, utils_1.findEndpoint)(followedEntityNode.id.get(), params[CONSTANTS.ATTRIBUTE_RESULT_NAME], 0, true, [], CONSTANTS.CONTROL_ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
            if (!controlEndpointNode) return;
            const controlEndpoint = yield controlEndpointNode.element.load();
            controlEndpoint.currentValue.set(result);
            this.spinalServiceTimeseries.pushFromEndpoint(controlEndpointNode.id.get(), result);
        });
    }
    /**
     * Handles the result of an algorithm that modifies an Endpoint.
     *
     * @private
     * @param {*} result
     * @param {SpinalNodeRef} followedEntityNode
     * @param {*} params
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ handleEndpointResult(result, followedEntityNode, params) {
        return __awaiter(this, void 0, void 0, function*() {
            const controlEndpointNode = yield (0, utils_1.findEndpoint)(followedEntityNode.id.get(), params[CONSTANTS.ATTRIBUTE_RESULT_NAME], 0, true, [], CONSTANTS.ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
            if (!controlEndpointNode) return;
            const controlEndpoint = yield controlEndpointNode.element.load();
            controlEndpoint.currentValue.set(result);
            this.spinalServiceTimeseries.pushFromEndpoint(controlEndpointNode.id.get(), result);
        });
    }
    /**
     * Handles the result of an algorithm that sends an SMS.
     *
     * @private
     * @param {*} result
     * @param {SpinalNodeRef} configNode
     * @param {SpinalNodeRef} followedEntityNode
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ handleSMSResult(result, configNode, followedEntityNode) {
        return __awaiter(this, void 0, void 0, function*() {
            console.log("SMS result");
            if (!this.twilioAccountSid || !this.twilioAuthToken || !this.twilioFromNumber || !result) return;
            const twilioParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS);
            const toNumber = twilioParams[CONSTANTS.ATTRIBUTE_PHONE_NUMBER];
            const message = twilioParams[CONSTANTS.ATTRIBUTE_PHONE_MESSAGE];
            const url = `https://api.twilio.com/2010-04-01/Accounts/${this.twilioAccountSid}/Messages.json`;
            const entityName = followedEntityNode.name.get().replace(/[0-9]/g, "*");
            const data = {
                Body: `Analytic on ${entityName} triggered with the following message : ${message}`,
                From: this.twilioFromNumber,
                To: toNumber
            };
            const config = {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                auth: {
                    username: this.twilioAccountSid,
                    password: this.twilioAuthToken
                },
                data: (0, qs_1.stringify)(data),
                url
            };
            const axiosResult = yield (0, axios_1.default)(config);
            console.log({
                status: axiosResult.status,
                data: axiosResult.data
            });
        });
    }
    handleGChatMessageResult(configNode, followedEntityNode) {
        return __awaiter(this, void 0, void 0, function*() {
            console.log("Handling Google chat message result");
            const analyticParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS);
            const gChatParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS);
            const spaceName = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_SPACE];
            const message = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_MESSAGE];
            const analyticDescription = analyticParams[CONSTANTS.ATTRIBUTE_ANALYTIC_DESCRIPTION];
            const resultInfo = {
                success: true,
                error: "",
                spaceName: spaceName,
                message: "The following message has been triggered by an analytic.\n \nAnalysis on item : " + followedEntityNode.name.get() + "\nDescription : " + analyticDescription + "\nMessage : " + message,
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE
            };
            return resultInfo;
        });
    }
    handleGChatOrganCardResult(configNode, followedEntityNode) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function*() {
            console.log("Handling Google chat organ card result");
            const analyticParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS);
            const resultParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS);
            const gChatParams = yield this.getAttributesFromNode(configNode.id.get(), CONSTANTS.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS);
            const title = resultParams[CONSTANTS.ATTRIBUTE_RESULT_NAME];
            const spaceName = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_SPACE];
            const message = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_MESSAGE];
            const analyticDescription = analyticParams[CONSTANTS.ATTRIBUTE_ANALYTIC_DESCRIPTION];
            const lastPing = yield (0, utils_1.findEndpoint)(followedEntityNode.id.get(), "last_ping", 0, true, [], CONSTANTS.ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
            if (!lastPing) return {
                success: false,
                error: "endpoint lastPing not found on organ node"
            };
            const lastPingValue = yield (0, utils_1.getValueModelFromEntry)(lastPing);
            const lastPingDate = new Date(lastPingValue.get()).toString();
            const parents = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getParents(followedEntityNode.id.get(), "HasOrgan");
            let platformName = "Couldn't find the platform name";
            let ipAddress = "Couldn't find the ip adress";
            for (const parent of parents)if (parent.id.get() == ((_a = followedEntityNode.platformId) === null || _a === void 0 ? void 0 : _a.get())) {
                platformName = (_b = parent.name) === null || _b === void 0 ? void 0 : _b.get();
                ipAddress = (_c = parent.ipAdress) === null || _c === void 0 ? void 0 : _c.get();
            }
            const card = {
                header: {
                    title: title,
                    subtitle: new Date().toLocaleDateString()
                },
                sections: [
                    {
                        header: "Analytic details",
                        widgets: [
                            {
                                keyValue: {
                                    topLabel: "Analytic description",
                                    content: analyticDescription
                                }
                            },
                            {
                                keyValue: {
                                    topLabel: "Message",
                                    content: message
                                }
                            }
                        ]
                    },
                    {
                        header: "Organ details",
                        widgets: [
                            {
                                keyValue: {
                                    topLabel: "Organ name",
                                    content: followedEntityNode.name.get()
                                }
                            },
                            {
                                keyValue: {
                                    topLabel: "Organ type",
                                    content: (_d = followedEntityNode.organType) === null || _d === void 0 ? void 0 : _d.get()
                                }
                            },
                            {
                                keyValue: {
                                    topLabel: "Last ping",
                                    content: lastPingDate
                                }
                            }
                        ]
                    },
                    {
                        header: "Platform details",
                        widgets: [
                            {
                                keyValue: {
                                    topLabel: "Platform name",
                                    content: platformName
                                }
                            },
                            {
                                keyValue: {
                                    topLabel: "Platform id",
                                    content: (_e = followedEntityNode.platformId) === null || _e === void 0 ? void 0 : _e.get()
                                }
                            },
                            {
                                keyValue: {
                                    topLabel: "Ip Address",
                                    content: ipAddress
                                }
                            }
                        ]
                    }
                ]
            };
            const resultInfo = {
                success: true,
                error: "",
                spaceName: spaceName,
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_ORGAN_CARD,
                card: card
            };
            return resultInfo;
        });
    }
}
exports.default = AnalyticService;
exports.AnalyticService = AnalyticService;

},{"84742e2837e24d3b":"9n7zp","ab099baa5bc4dcd4":"2CVgx","96694bfffb82fe38":"eVs5c","ba6004bd8f5b7210":"9ovXf","e0ff123ace339ff9":"fR5zB","9b0a772027d1e940":"4rJ3F","89679a198a351a56":"h4DC9","a7ef2ed4d2a4b5d2":"SIBaV","afce19c865fe8fd0":"5rYVR","6eac5aca4b2a8fb8":"3BNTc","57aed6b4a1f01a2b":"3VBF8","5ef2c727f601ca1b":"a1B4H","36fa03571c49f998":"jo6P5","60a970666a1a566a":"kW4GH"}],"eVs5c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfigModel = void 0;
const spinal_core_connectorjs_type_1 = require("87f392c163896816");
class ConfigModel extends spinal_core_connectorjs_type_1.Model {
    constructor(nodeInfo){
        super();
        this.add_attr(nodeInfo);
    }
}
exports.ConfigModel = ConfigModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(ConfigModel);
exports.default = ConfigModel;

},{"87f392c163896816":"fRH70"}],"fR5zB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EntityModel = void 0;
const spinal_core_connectorjs_type_1 = require("30b6806a9befdbc5");
class EntityModel extends spinal_core_connectorjs_type_1.Model {
    constructor(entity){
        super();
        this.add_attr(entity);
    }
}
exports.EntityModel = EntityModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(EntityModel);
exports.default = EntityModel;

},{"30b6806a9befdbc5":"fRH70"}],"h4DC9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputsModel = void 0;
const spinal_core_connectorjs_type_1 = require("edba9546fee3d09e");
class InputsModel extends spinal_core_connectorjs_type_1.Model {
    constructor(inputInfo){
        super();
        this.add_attr(inputInfo);
    }
}
exports.InputsModel = InputsModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(InputsModel);
exports.default = InputsModel;

},{"edba9546fee3d09e":"fRH70"}],"SIBaV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutputsModel = void 0;
const spinal_core_connectorjs_type_1 = require("62a6631c4392c52b");
class OutputsModel extends spinal_core_connectorjs_type_1.Model {
    constructor(outputInfo){
        super();
        this.add_attr(outputInfo);
    }
}
exports.OutputsModel = OutputsModel;
spinal_core_connectorjs_type_1.spinalCore.register_models(OutputsModel);
exports.default = OutputsModel;

},{"62a6631c4392c52b":"fRH70"}],"3BNTc":[function(require,module,exports) {
"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */ /*
 * Copyright 2022 SpinalCom - www.spinalcom.com
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
 */ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
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
exports.safeDeleteNode = exports.addTicketAlarm = exports.formatTrackingMethodsToList = exports.getValueModelFromEntry = exports.findAllCategoriesAndAttributes = exports.findAttributes = exports.findAttribute = exports.findEndpoints = exports.findEndpoint = exports.findNodes = exports.getAvailableData = exports.getChoiceRelationsWithDepth = exports.getRelationsWithDepth = exports.getTicketLocalizationParameters = exports.getAlgorithmParameters = void 0;
const spinal_env_viewer_graph_service_1 = require("9d30dc6765dfaf3f");
const spinal_env_viewer_plugin_documentation_service_1 = require("c7a64ffb1839efda");
const spinal_service_ticket_1 = require("1a169e5a3c86739a");
const spinal_model_bmsnetwork_1 = require("6f4627f209812112");
const InputDataEndpoint_1 = require("26efe0b30d34fce4");
const CONSTANTS = require("164af0ed33d3fe16");
const spinal_models_documentation_1 = require("d0f9dc2618ecd426");
const SingletonTimeSeries_1 = require("d25d62dee5469eb1");
const serviceTimeseries = SingletonTimeSeries_1.SingletonServiceTimeseries.getInstance();
/**
 * Uses the documentation service to get the attributes related to the algorithm parameters
 *
 * @export
 * @param {SpinalNodeRef} config
 * @return {*}
 */ function getAlgorithmParameters(config) {
    return __awaiter(this, void 0, void 0, function*() {
        const configNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(config.id.get());
        const res = {};
        const algorithmParameters = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(configNode, CONSTANTS.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS);
        for (const param of algorithmParameters){
            const obj = param.get();
            res[obj.label] = obj.value;
        }
        return res;
    });
}
exports.getAlgorithmParameters = getAlgorithmParameters;
/**
 * Uses the documentation service to get the attributes related to the ticket localization
 * (context and process) parameters
 *
 * @export
 * @param {SpinalNodeRef} config
 * @return {*}
 */ function getTicketLocalizationParameters(config) {
    return __awaiter(this, void 0, void 0, function*() {
        const configNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(config.id.get());
        const res = {};
        const localizationParameters = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(configNode, CONSTANTS.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS);
        for (const param of localizationParameters){
            const obj = param.get();
            res[obj.label] = obj.value;
        }
        return res;
    });
}
exports.getTicketLocalizationParameters = getTicketLocalizationParameters;
function getRelationsWithDepth(nodeId, depth) {
    return __awaiter(this, void 0, void 0, function*() {
        const relations = spinal_env_viewer_graph_service_1.SpinalGraphService.getRelationNames(nodeId);
        if (depth <= 0) return relations;
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId);
        for (const child of children){
            const childRelations = yield getRelationsWithDepth(child.id.get(), depth - 1);
            for (const childRelation of childRelations)if (!relations.includes(childRelation)) relations.push(childRelation);
        }
        return relations;
    });
}
exports.getRelationsWithDepth = getRelationsWithDepth;
function getChoiceRelationsWithDepth(nodeId, depth) {
    return __awaiter(this, void 0, void 0, function*() {
        const relations = yield getRelationsWithDepth(nodeId, depth);
        const usefullRelations = relations.filter((relation)=>{
            return !CONSTANTS.ENDPOINT_RELATIONS.includes(relation) && !CONSTANTS.CONTROL_ENDPOINT_RELATIONS.includes(relation);
        });
        return usefullRelations;
    });
}
exports.getChoiceRelationsWithDepth = getChoiceRelationsWithDepth;
function getAvailableData(trackMethod, nodeId, filterValue, depth, stricDepth, authorizedRelations) {
    return __awaiter(this, void 0, void 0, function*() {
        switch(trackMethod){
            case CONSTANTS.TRACK_METHOD.ENDPOINT_NAME_FILTER:
                {
                    const data = yield findEndpoints(nodeId, filterValue, depth, stricDepth, authorizedRelations, CONSTANTS.ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
                    return data.map((endpoint)=>endpoint.name.get());
                }
            case CONSTANTS.TRACK_METHOD.CONTROL_ENDPOINT_NAME_FILTER:
                {
                    const data = yield findEndpoints(nodeId, filterValue, depth, stricDepth, authorizedRelations, CONSTANTS.CONTROL_ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
                    return data.map((endpoint)=>endpoint.name.get());
                }
            case CONSTANTS.TRACK_METHOD.ATTRIBUTE_NAME_FILTER:
                {
                    const [category, attribute] = filterValue.split(":");
                    const data = yield findAttributes(nodeId, category, attribute, depth, stricDepth, authorizedRelations);
                    return data;
                }
            default:
                console.log("Get available data not implemented yet for this tracking method");
                return [];
        }
    });
}
exports.getAvailableData = getAvailableData;
function findNodes(nodeId, authorizedRelations, nodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        let res = [];
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, authorizedRelations);
        for (const child of children)if (child.type.get() === nodeType) res.push(child);
        else res = res.concat((yield findNodes(child.id.get(), authorizedRelations, nodeType)));
        return res;
    });
}
exports.findNodes = findNodes;
function findSpecificNode(nodeId, filterNameValue, trackedRelations, nodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        const endpoints = yield findNodes(nodeId, trackedRelations, nodeType);
        return endpoints.find((endpoint)=>endpoint.name.get() === filterNameValue);
    });
}
function findMatchingNodes(nodeId, filterNameValue, trackedRelations, nodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        const endpoints = yield findNodes(nodeId, trackedRelations, nodeType);
        return endpoints.filter((endpoint)=>endpoint.name.get().includes(filterNameValue));
    });
}
function findEndpoint(nodeId, filterNameValue, depth, strictDepth, authorizedRelations, trackedRelations, nodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        if (depth < 0) return undefined;
        // we dont look further
        if (depth == 0) return yield findSpecificNode(nodeId, filterNameValue, trackedRelations, nodeType);
        // depth > 0
        if (!strictDepth) {
            const foundEndpoint = yield findSpecificNode(nodeId, filterNameValue, trackedRelations, nodeType);
            if (foundEndpoint) return foundEndpoint;
        }
        const allRelations = spinal_env_viewer_graph_service_1.SpinalGraphService.getRelationNames(nodeId);
        const checkedRelations = allRelations.filter((relation)=>authorizedRelations.includes(relation));
        if (checkedRelations.length === 0) return undefined;
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, checkedRelations);
        for (const child of children){
            const endpoint = yield findEndpoint(child.id.get(), filterNameValue, depth - 1, strictDepth, authorizedRelations, trackedRelations, nodeType);
            if (endpoint) return endpoint;
        }
        return undefined;
    });
}
exports.findEndpoint = findEndpoint;
function findEndpoints(nodeId, filterNameValue, depth, strictDepth, authorizedRelations, trackedRelations, nodeType) {
    return __awaiter(this, void 0, void 0, function*() {
        if (depth == 0) return yield findMatchingNodes(nodeId, filterNameValue, trackedRelations, nodeType);
        let results = [];
        if (!strictDepth) results = results.concat((yield findMatchingNodes(nodeId, filterNameValue, trackedRelations, nodeType)));
        if (depth <= 0) return results;
        const allRelations = spinal_env_viewer_graph_service_1.SpinalGraphService.getRelationNames(nodeId);
        const checkedRelations = allRelations.filter((relation)=>authorizedRelations.includes(relation));
        if (checkedRelations.length === 0) return results;
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, checkedRelations);
        for (const child of children)results = results.concat((yield findEndpoints(child.id.get(), filterNameValue, depth - 1, strictDepth, authorizedRelations, trackedRelations, nodeType)));
        return results;
    });
}
exports.findEndpoints = findEndpoints;
function findAttribute(nodeId, categoryName, attributeName, depth, strictDepth, authorizedRelations) {
    return __awaiter(this, void 0, void 0, function*() {
        if (depth < 0) return -1;
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        // we dont look further
        if (depth == 0) return yield spinal_env_viewer_plugin_documentation_service_1.attributeService.findOneAttributeInCategory(node, categoryName, attributeName);
        // depth > 0
        if (!strictDepth) {
            const foundAttribute = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.findOneAttributeInCategory(node, categoryName, attributeName);
            if (foundAttribute != -1) return foundAttribute;
        }
        const allRelations = spinal_env_viewer_graph_service_1.SpinalGraphService.getRelationNames(nodeId);
        const checkedRelations = allRelations.filter((relation)=>authorizedRelations.includes(relation));
        if (checkedRelations.length === 0) return -1;
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, checkedRelations);
        for (const child of children){
            const attribute = yield findAttribute(child.id.get(), categoryName, attributeName, depth - 1, strictDepth, authorizedRelations);
            if (attribute != -1) return attribute;
        }
        return -1;
    });
}
exports.findAttribute = findAttribute;
function findAttributes(nodeId, categoryName, attributeName, depth, strictDepth, authorizedRelations) {
    return __awaiter(this, void 0, void 0, function*() {
        if (depth == 0) return yield findAllCategoriesAndAttributes(nodeId);
        let results = [];
        if (!strictDepth) results = results.concat((yield findAllCategoriesAndAttributes(nodeId)));
        if (depth <= 0) return results;
        const allRelations = spinal_env_viewer_graph_service_1.SpinalGraphService.getRelationNames(nodeId);
        const checkedRelations = allRelations.filter((relation)=>authorizedRelations.includes(relation));
        if (checkedRelations.length === 0) return results;
        const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, checkedRelations);
        for (const child of children)results = results.concat((yield findAttributes(child.id.get(), categoryName, attributeName, depth - 1, strictDepth, authorizedRelations)));
        return results;
    });
}
exports.findAttributes = findAttributes;
function findAllCategoriesAndAttributes(followedEntityId) {
    return __awaiter(this, void 0, void 0, function*() {
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(followedEntityId);
        const res = [];
        const categories = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategory(node);
        for (const category of categories){
            const attributes = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(node, category);
            for (const attribute of attributes){
                const obj = attribute.get();
                res.push(`${category.nameCat}:${obj.label}`);
            }
        }
        return res;
    });
}
exports.findAllCategoriesAndAttributes = findAllCategoriesAndAttributes;
function getValueModelFromEntry(entryDataModel) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!(entryDataModel instanceof spinal_models_documentation_1.SpinalAttribute)) {
            const element = yield entryDataModel.element.load();
            return element.currentValue;
        }
        return entryDataModel.value;
    });
}
exports.getValueModelFromEntry = getValueModelFromEntry;
function formatTrackingMethodsToList(obj) {
    const result = [];
    const keys = Object.keys(obj);
    const length = (keys.length - 1) / 4;
    for(let i = 0; i < length; i++){
        const item = {
            trackingMethod: obj[`trackingMethod${i}`],
            filterValue: obj[`filterValue${i}`],
            removeFromAnalysis: obj[`removeFromAnalysis${i}`],
            removeFromBinding: obj[`removeFromBinding${i}`]
        };
        result.push(item);
    }
    return result;
}
exports.formatTrackingMethodsToList = formatTrackingMethodsToList;
// ticket creation
/**
 * Gets the ticket context that has the corresponding contextId
 *
 * @param {string} contextId
 * @return {*}
 */ function getTicketContext(contextId) {
    const contexts = spinal_env_viewer_graph_service_1.SpinalGraphService.getContextWithType("SpinalSystemServiceTicket");
    const context = contexts.find((ctx)=>{
        return ctx.info.id.get() == contextId;
    });
    return context;
}
/**
 * Gets the ticket process that has the corresponding processId in the context that has the corresponding contextId
 *
 * @param {string} contextId
 * @param {string} processId
 * @return {*}
 */ function getTicketProcess(contextId, processId) {
    return __awaiter(this, void 0, void 0, function*() {
        const processes = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(contextId, contextId);
        const process = processes.find((process)=>{
            return process.id.get() == processId;
        });
        return process;
    });
}
/**
 * Checks if an alarm is already declared in the context and process.
 *
 * @param {string} nodeId
 * @param {string} contextId
 * @param {string} processId
 * @param {string} ticketName
 * @return {*}
 */ function alarmAlreadyDeclared(nodeId, contextId, processId, ticketName) {
    return __awaiter(this, void 0, void 0, function*() {
        //SpinalNode
        const tickets = yield spinal_service_ticket_1.spinalServiceTicket.getAlarmsFromNode(nodeId);
        const found = tickets.find((ticket)=>{
            return contextId == ticket.contextId && processId == ticket.processId && ticket.name == ticketName;
        });
        return found;
    });
}
/**
 * Adds a ticket alarm to the context and process and link it with the node
 *
 * @export
 * @param {*} ticketInfos
 * @param {SpinalNodeRef} configInfo
 * @param {string} nodeId
 */ function addTicketAlarm(ticketInfos, configInfo, analyticContextId, outputNodeId, entityNodeId, ticketType) {
    return __awaiter(this, void 0, void 0, function*() {
        const localizationInfo = yield getTicketLocalizationParameters(configInfo);
        const contextId = localizationInfo[CONSTANTS.ATTRIBUTE_TICKET_CONTEXT_ID];
        const processId = localizationInfo[CONSTANTS.ATTRIBUTE_TICKET_PROCESS_ID];
        const context = getTicketContext(contextId);
        const process = yield getTicketProcess(context.info.id.get(), processId);
        const alreadyDeclared = yield alarmAlreadyDeclared(entityNodeId, contextId, processId, ticketInfos.name);
        if (alreadyDeclared) {
            //just update the ticket
            const firstStep = yield spinal_service_ticket_1.serviceTicketPersonalized.getFirstStep(processId, contextId);
            console.log("update ticket " + ticketInfos.name);
            const declaredTicketNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(alreadyDeclared.id);
            if (declaredTicketNode.info.stepId.get() == firstStep) {
                const attr = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.findOneAttributeInCategory(declaredTicketNode, "default", "Occurrence number");
                if (attr != -1) {
                    // found the attribute
                    const value = attr.value.get();
                    const str = value.toString();
                    const newValueInt = parseInt(str) + 1;
                    yield spinal_env_viewer_plugin_documentation_service_1.attributeService.updateAttribute(declaredTicketNode, "default", "Occurrence number", {
                        value: newValueInt.toString()
                    });
                    yield updateEndpointOccurenceNumber(declaredTicketNode, newValueInt);
                }
            } else {
                // move the ticket to the first step and reset the occurrence number
                yield spinal_service_ticket_1.serviceTicketPersonalized.moveTicket(declaredTicketNode.info.id.get(), declaredTicketNode.info.stepId.get(), firstStep, contextId);
                yield spinal_env_viewer_plugin_documentation_service_1.attributeService.updateAttribute(declaredTicketNode, "default", "Occurrence number", {
                    value: "1"
                });
                yield updateEndpointOccurenceNumber(declaredTicketNode, 1);
                console.log(`${ticketInfos.name} has been re-triggered and moved back to the first step`);
            }
        } else {
            console.log("create ticket " + ticketInfos.name);
            if (process) try {
                const ticketId = yield spinal_service_ticket_1.spinalServiceTicket.addTicket(ticketInfos, process.id.get(), context.info.id.get(), entityNodeId, ticketType);
                if (ticketId instanceof Error) return;
                if (ticketType == "Alarm") spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(outputNodeId, ticketId, analyticContextId, spinal_service_ticket_1.ALARM_RELATION_NAME, spinal_service_ticket_1.TICKET_RELATION_TYPE);
                else spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(outputNodeId, ticketId, analyticContextId, spinal_service_ticket_1.TICKET_RELATION_NAME, spinal_service_ticket_1.TICKET_RELATION_TYPE);
                if (typeof ticketId === "string") {
                    const declaredTicketNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(ticketId);
                    yield spinal_env_viewer_plugin_documentation_service_1.attributeService.updateAttribute(declaredTicketNode, "default", "Occurrence number", {
                        value: "1"
                    });
                    const endpoint = new InputDataEndpoint_1.InputDataEndpoint("Occurence number", 1, "", spinal_model_bmsnetwork_1.InputDataEndpointDataType.Integer, spinal_model_bmsnetwork_1.InputDataEndpointType.Alarm);
                    const res = new spinal_model_bmsnetwork_1.SpinalBmsEndpoint(endpoint.name, endpoint.path, endpoint.currentValue, endpoint.unit, spinal_model_bmsnetwork_1.InputDataEndpointDataType[endpoint.dataType], spinal_model_bmsnetwork_1.InputDataEndpointType[endpoint.type], endpoint.id);
                    const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                        type: spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName,
                        name: endpoint.name
                    }, res);
                    spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(ticketId, childId, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
                    yield serviceTimeseries.getOrCreateTimeSeries(childId);
                    serviceTimeseries.pushFromEndpoint(childId, 1);
                }
            } catch (error) {
                console.log("Ticket creation failed");
            }
        }
    });
}
exports.addTicketAlarm = addTicketAlarm;
function updateEndpointOccurenceNumber(ticketNode, newValue) {
    return __awaiter(this, void 0, void 0, function*() {
        const endpoints = yield ticketNode.getChildren("hasBmsEndpoint");
        endpoints.map((endpoint)=>__awaiter(this, void 0, void 0, function*() {
                var _a;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(endpoint);
                if (endpoint.info.name.get() == "Occurence number") {
                    serviceTimeseries.pushFromEndpoint(endpoint.info.id.get(), newValue);
                    const element = yield (_a = endpoint.element) === null || _a === void 0 ? void 0 : _a.load();
                    element.currentValue.set(newValue);
                }
            }));
    });
}
function removeChild(parentNode, childNode, relation) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            yield parentNode.removeChild(childNode, relation, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        } catch (e) {
            try {
                yield parentNode.removeChild(childNode, relation, spinal_env_viewer_graph_service_1.SPINAL_RELATION_LST_PTR_TYPE);
            } catch (e) {
                console.log(e);
            }
        }
    });
}
function safeDeleteNode(nodeId, shouldDeleteChildren = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(nodeId);
        const relations = realNode.getRelationNames();
        for (const relation of relations){
            const children = yield realNode.getChildren(relation);
            for (const child of children){
                yield removeChild(realNode, child, relation);
                if (shouldDeleteChildren) yield child.removeFromGraph();
            }
        }
        yield realNode.removeFromGraph();
    });
}
exports.safeDeleteNode = safeDeleteNode;

},{"9d30dc6765dfaf3f":"9n7zp","c7a64ffb1839efda":"5rYVR","1a169e5a3c86739a":"gi7V0","6f4627f209812112":"gzkbg","26efe0b30d34fce4":"l7xEW","164af0ed33d3fe16":"2CVgx","d0f9dc2618ecd426":"dcbQz","d25d62dee5469eb1":"3VBF8"}],"l7xEW":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputDataEndpoint = void 0;
const spinal_model_bmsnetwork_1 = require("e04a7e576c664fcd");
const genUID_1 = require("8354bb2eeff008e1");
/**
 * @property {string} id
 * @property {string} name
 * @property {string} path
 * @property {number | string} currentValue
 * @property {string} unit
 * @property {InputDataEndpointDataType} dataType
 * @property {InputDataEndpointType} type
 * @property {string} nodeTypeName equal SpinalBmsEndpoint.nodeTypeName
 * @property {any[]} timeseries
 * @export
 * @class InputDataEndpoint
 * @implements {idEndpoint}
 */ class InputDataEndpoint {
    /**
     *Creates an instance of InputDataEndpoint.
     * @param {string} [name='default endpoint name']
     * @param {(number | string)} [currentValue=0]
     * @param {string} [unit='unit']
     * @param {InputDataEndpointDataType} [dataType=InputDataEndpointDataType.Integer]
     * @param {InputDataEndpointType} [type=InputDataEndpointType.Other]
     * @param {string} [id=genUID('InputDataEndpoint')]
     * @param {string} [path='default endpoint path']
     * @memberof InputDataEndpoint
     */ constructor(name = "default endpoint name", currentValue = 0, unit = "unit", dataType = spinal_model_bmsnetwork_1.InputDataEndpointDataType.Integer, type = spinal_model_bmsnetwork_1.InputDataEndpointType.Other, id = (0, genUID_1.genUID)("InputDataEndpoint"), path = "default endpoint path"){
        this.nodeTypeName = spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName;
        this.id = id;
        this.name = name;
        this.type = type;
        this.path = path;
        this.currentValue = currentValue;
        this.unit = unit;
        this.dataType = dataType;
        this.timeseries = [];
        this.idx = Math.floor(Math.random() * 100);
    }
}
exports.InputDataEndpoint = InputDataEndpoint;

},{"e04a7e576c664fcd":"gzkbg","8354bb2eeff008e1":"jWwjU"}],"jWwjU":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genUID = void 0;
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function genUID(constructor) {
    const res = `${constructor}-${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}-${Date.now().toString(16)}`;
    return res;
}
exports.genUID = genUID;

},{}],"3VBF8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SingletonServiceTimeseries = void 0;
const spinal_model_timeseries_1 = require("23feab8669d4c2ca");
class SingletonServiceTimeseries {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){}
    static getInstance() {
        if (!SingletonServiceTimeseries.instance) SingletonServiceTimeseries.instance = new spinal_model_timeseries_1.SpinalServiceTimeseries();
        return SingletonServiceTimeseries.instance;
    }
}
exports.SingletonServiceTimeseries = SingletonServiceTimeseries;
SingletonServiceTimeseries.instance = new spinal_model_timeseries_1.SpinalServiceTimeseries();

},{"23feab8669d4c2ca":"hIcty"}],"kW4GH":[function(require,module,exports) {
"use strict";
var stringify = require("a472ccaa2f2351e9");
var parse = require("7ffa4249597bf32b");
var formats = require("454df9476704f887");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"a472ccaa2f2351e9":"aJuQi","7ffa4249597bf32b":"fSZqi","454df9476704f887":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
"use strict";
var getSideChannel = require("6246bbb805756d41");
var utils = require("44263cc7b702ebf");
var formats = require("929f8531a94a537c");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
            if (pos === step) throw new RangeError("Cyclic object value");
            else findFlag = true; // Break while
        }
        if (typeof tmpSc.get(sentinel) === "undefined") step = 0;
    }
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, encoder);
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(",") || null : void 0
            }
        ];
    } else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += "utf8=%26%2310003%3B&";
        else // encodeURIComponent('✓')
        prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};

},{"6246bbb805756d41":"1zs9d","44263cc7b702ebf":"chmkc","929f8531a94a537c":"d7Ogf"}],"1zs9d":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("7911ec51a2dc9f3e");
var callBound = require("125062ab9035288f");
var inspect = require("9f4f5a92d8c6543");
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */ var listGetNode = function(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        curr.next = list.next;
        list.next = curr; // eslint-disable-line no-param-reassign
        return curr;
    }
};
var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = {
        key: key,
        next: objects.next,
        value: value
    };
};
var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
module.exports = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapGet($wm, key);
            } else if ($Map) {
                if ($m) return $mapGet($m, key);
            } else {
                if ($o) return listGet($o, key);
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapHas($wm, key);
            } else if ($Map) {
                if ($m) return $mapHas($m, key);
            } else {
                if ($o) return listHas($o, key);
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) $m = new $Map();
                $mapSet($m, key, value);
            } else {
                if (!$o) /*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */ $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

},{"7911ec51a2dc9f3e":"dZb05","125062ab9035288f":"5yYiF","9f4f5a92d8c6543":"kS3SE"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var hasProto = require("23730654306aa64c")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("b03d0058935d00bf");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","b03d0058935d00bf":"ksyoO"}],"3dK91":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"euYk7"}],"euYk7":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"6eZiF":[function(require,module,exports) {
"use strict";
var test = {
    foo: {}
};
var $Object = Object;
module.exports = function hasProto() {
    return ({
        __proto__: test
    }).foo === test.foo && !(({
        __proto__: null
    }) instanceof $Object);
};

},{}],"6J4ob":[function(require,module,exports) {
"use strict";
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = "";
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = "$" + i;
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"ksyoO":[function(require,module,exports) {
"use strict";
var hasOwnProperty = {}.hasOwnProperty;
var call = Function.prototype.call;
module.exports = call.bind ? call.bind(hasOwnProperty) : function(O, P) {
    return call.call(hasOwnProperty, O, P);
};

},{}],"5yYiF":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"bfo8D":[function(require,module,exports) {
"use strict";
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, "length", {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05"}],"kS3SE":[function(require,module,exports) {
var global = arguments[3];
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require("faefcb1694f2ad90");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") return "undefined";
    if (obj === null) return "null";
    if (typeof obj === "boolean") return obj ? "true" : "false";
    if (typeof obj === "string") return inspectString(obj, opts);
    if (typeof obj === "number") {
        if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") seen = [];
    else if (indexOf(seen, obj) >= 0) return "[Circular]";
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        s += ">";
        if (obj.childNodes && obj.childNodes.length) s += "...";
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return "[]";
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        if (parts.length === 0) return "[" + String(obj) + "]";
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
    if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
    if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
    if (obj === global) return "{ [object globalThis] }";
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) return tag + "{}";
        if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
}
function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
    if (typeof obj === "symbol") return true;
    if (!obj || typeof obj !== "object" || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== "object") return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== "object") return false;
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n];
    if (x) return "\\" + x;
    return "\\x" + (n < 0x10 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], "\n") >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") baseIndent = "	";
    else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return "";
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap["$" + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        else xs.push(key + ": " + inspect(obj[key], obj));
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"faefcb1694f2ad90":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"chmkc":[function(require,module,exports) {
"use strict";
var formats = require("7adf3674f81a2c87");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== "undefined") obj[i] = source[i];
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== "object") {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
         || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"7adf3674f81a2c87":"d7Ogf"}],"d7Ogf":[function(require,module,exports) {
"use strict";
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"fSZqi":[function(require,module,exports) {
"use strict";
var utils = require("e76649c95dd0e736");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) charset = "utf-8";
            else if (parts[i] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) return obj;
    return utils.compact(obj);
};

},{"e76649c95dd0e736":"chmkc"}],"b1pPQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelAnalysis = require("spinal-model-analysis");
const { spinalPanelManagerService } = require("5239440612714194");
const SIDEBAR = "GraphManagerSideBar";
class CreateAnalytic extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Analytic", "Create Analytic", {
            icon: "dashboard_customize",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const id = option.selectedNode.id.get();
        const isAnalyticEntity = option.selectedNode.type.get() === (0, _spinalModelAnalysis.ENTITY_TYPE);
        return Promise.resolve(isAnalyticEntity ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("createAnalyticDialog", option);
    }
}
const createAnalytic = new CreateAnalytic();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createAnalytic, [
    3
]);
exports.default = createAnalytic;

},{"spinal-env-viewer-context-menu-service":"kHlxv","5239440612714194":"7Uw4d","spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hfR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalModelAnalysis = require("spinal-model-analysis");
const { spinalPanelManagerService } = require("d7efd706ce54208c");
const SIDEBAR = "GraphManagerSideBar";
class ModifyAnalytic extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Modify Analytic", "Modify Analytic", {
            icon: "settings",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const id = option.selectedNode.id.get();
        const isAnalytic = option.selectedNode.type.get() === (0, _spinalModelAnalysis.ANALYTIC_TYPE);
        return Promise.resolve(isAnalytic ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("modifyAnalyticDialog", option);
    }
}
const modifyAnalytic = new ModifyAnalytic();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, modifyAnalytic, [
    3
]);
exports.default = modifyAnalytic;

},{"spinal-env-viewer-context-menu-service":"kHlxv","d7efd706ce54208c":"7Uw4d","spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gJ1lP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateContextButton", ()=>CreateContextButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
class CreateContextButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Analytic context", "This button allows you to create an analytic context", {
            icon: "category",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        return Promise.resolve(true);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createAnalyticContextDialog");
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVtLQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextDialogVue = require("./createContextDialog.vue");
var _createContextDialogVueDefault = parcelHelpers.interopDefault(_createContextDialogVue);
var _createEntityDialogVue = require("./createEntityDialog.vue");
var _createEntityDialogVueDefault = parcelHelpers.interopDefault(_createEntityDialogVue);
var _createAnalyticDialogVue = require("./createAnalyticDialog.vue");
var _createAnalyticDialogVueDefault = parcelHelpers.interopDefault(_createAnalyticDialogVue);
var _modifyAnalyticDialogVue = require("./modifyAnalyticDialog.vue");
var _modifyAnalyticDialogVueDefault = parcelHelpers.interopDefault(_modifyAnalyticDialogVue);
const { SpinalMountExtention } = require("4143e387a66dac86");
const dialogs = [
    {
        name: "createEntityDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createEntityDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createAnalyticContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createAnalyticDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createAnalyticDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "modifyAnalyticDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _modifyAnalyticDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","4143e387a66dac86":"7Uw4d","./createContextDialog.vue":"lV5qO","./createEntityDialog.vue":"13njj","./createAnalyticDialog.vue":"1nIgB","./modifyAnalyticDialog.vue":"lV3UG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV5qO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9b0925667027556");
    if (script.__esModule) script = script.default;
    script.render = require("79603633ea371214").render;
    script.staticRenderFns = require("79603633ea371214").staticRenderFns;
    script._scopeId = "data-v-1c0f97";
    script.__cssModules = require("c9d76c18c5788e98").default;
    require("4764d454bdec37fa").default(script);
    script.__scopeId = "data-v-1c0f97";
    script.__file = "createContextDialog.vue";
};
initialize();
exports.default = script;

},{"9b0925667027556":"aliId","79603633ea371214":"eBydd","c9d76c18c5788e98":"1Ln0H","4764d454bdec37fa":"8nBXb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aliId":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _sortableListVue = require("./components/sortable-list.vue");
var _sortableListVueDefault = parcelHelpers.interopDefault(_sortableListVue);
var scriptExports = {
    name: "createAnalyticContextDialog",
    props: [
        "onFinised"
    ],
    components: {
        "sortable-list": (0, _sortableListVueDefault.default)
    },
    data () {
        this.STEPPERS_DATA = {
            context: "first",
            entities: "second"
        };
        return {
            showDialog: true,
            inputValue: "",
            entities: [],
            stepper: {
                active: this.STEPPERS_DATA.context,
                first: false,
                second: false
            }
        };
    },
    methods: {
        opened (option) {
            this.autoFocusNameInput();
        },
        async removed (res) {
            if (res.closeResult) {
                const context = await (0, _spinalModelAnalysis.spinalAnalyticService).createContext(res.inputValue.trim());
                for (const entity of res.entities){
                    console.log("entity :", entity);
                    const newEntity = {
                        name: entity.name,
                        standard_name: entity.standard_name,
                        entityType: entity.entityType,
                        description: ""
                    };
                    const entityInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addEntity(newEntity, context.id.get());
                }
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") {
                const entities = this.getEntities();
                this.onFinised({
                    closeResult,
                    inputValue: this.inputValue,
                    entities
                });
            }
        },
        getEntities () {
            if (this.$refs.draggableComponent) {
                const entities = this.$refs.draggableComponent.itemsSorted;
                return entities.map((el, index)=>{
                    el.order = index;
                    return el;
                });
            }
        },
        disabledButton () {
            const contextCondition = this.inputValue.trim().length === 0;
            const stepsCondition = this.entities.length === 0;
            return contextCondition || stepsCondition;
        },
        autoFocusNameInput () {
            setTimeout(()=>{
                this.$refs["nameTextField"].$el.focus();
            }, 200);
        },
        changeStep (stepId) {
            if (stepId === this.STEPPERS_DATA.context) {
                this.stepper.active = stepId;
                this.stepper.first = false;
            }
        },
        PassToSecondStep () {
            this.stepper.first = true;
            this.stepper.active = this.STEPPERS_DATA.entities;
        },
        addEntity (res) {
            this.entities = [
                ...this.entities,
                res
            ];
        },
        deleteItem (order) {
            this.entities = this.entities.filter((el)=>el.order !== order);
        },
        addAllStandardEntities () {
            this.entities = [];
            this.entities = [
                {
                    name: "Building",
                    standard_name: "Building",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).BUILDING,
                    description: "",
                    order: 0
                },
                {
                    name: "Floor",
                    standard_name: "Floor",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).FLOOR,
                    description: "",
                    order: 1
                },
                {
                    name: "Room",
                    standard_name: "Room",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).ROOM,
                    description: "",
                    order: 2
                },
                {
                    name: "Equipment",
                    standard_name: "Equipment",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).EQUIPMENT,
                    description: "",
                    order: 3
                },
                {
                    name: "Floor Group",
                    standard_name: "Floor Group",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).FLOOR_GROUP,
                    description: "",
                    order: 4
                },
                {
                    name: "Room Group",
                    standard_name: "Room Group",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).ROOM_GROUP,
                    description: "",
                    order: 5
                },
                {
                    name: "Equipment Group",
                    standard_name: "Equipment Group",
                    entityType: (0, _spinalModelAnalysis.ENTITY_TYPES).EQUIPMENT_GROUP,
                    description: "",
                    order: 6
                }
            ];
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","./components/sortable-list.vue":"iNFXp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNFXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6a940d29eeade0f0");
    if (script.__esModule) script = script.default;
    script.render = require("148f7f85916fa99f").render;
    script.staticRenderFns = require("148f7f85916fa99f").staticRenderFns;
    script._scopeId = "data-v-602521";
    script.__cssModules = require("18d6b8a71ffa0673").default;
    require("765c69e92bfcf808").default(script);
    script.__scopeId = "data-v-602521";
    script.__file = "sortable-list.vue";
};
initialize();
exports.default = script;

},{"6a940d29eeade0f0":"9Agfy","148f7f85916fa99f":"lcjgt","18d6b8a71ffa0673":"hcFup","765c69e92bfcf808":"kVS6A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Agfy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vuedraggable = require("vuedraggable");
var _vuedraggableDefault = parcelHelpers.interopDefault(_vuedraggable);
var _addItemsPopoverVue = require("./addItemsPopover.vue");
var _addItemsPopoverVueDefault = parcelHelpers.interopDefault(_addItemsPopoverVue);
var scriptExports = {
    name: "Sortable-List",
    components: {
        addItemsPopover: (0, _addItemsPopoverVueDefault.default),
        draggable: (0, _vuedraggableDefault.default)
    },
    props: {
        items: {
            default: []
        }
    },
    data () {
        return {
            itemsSorted: []
        };
    },
    mounted () {
        this.itemsSorted = this.items;
    },
    methods: {
        addEntity (res) {
            res["order"] = this.items.length;
            this.$emit("addEntity", res);
        },
        deleteItem (order) {
            this.$emit("delete", order);
        },
        addAllStandardEntities () {
            this.$emit("addAllStandardEntities");
        }
    },
    watch: {
        items () {
            this.itemsSorted = this.items;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vuedraggable":"1J17x","./addItemsPopover.vue":"dcWpf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcWpf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("409847b3b6cd83d5");
    if (script.__esModule) script = script.default;
    script.render = require("43addf22ab5ff52b").render;
    script.staticRenderFns = require("43addf22ab5ff52b").staticRenderFns;
    script._scopeId = "data-v-688a23";
    script.__cssModules = require("b5151400238568ba").default;
    require("dc4f3bfb5f2f9a3e").default(script);
    script.__scopeId = "data-v-688a23";
    script.__file = "addItemsPopover.vue";
};
initialize();
exports.default = script;

},{"409847b3b6cd83d5":"e2jti","43addf22ab5ff52b":"eNnuT","b5151400238568ba":"itTGF","dc4f3bfb5f2f9a3e":"apHz4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2jti":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    name: "addItemsPopover",
    components: {},
    data () {
        return {
            ENTITY_TYPES: (0, _spinalModelAnalysis.ENTITY_TYPES),
            name: "",
            standard_name: "",
            entityType: "",
            show: false
        };
    },
    methods: {
        OpenAttribute () {
            this.show = !this.show;
        },
        addEntity () {
            this.$emit("addEntity", {
                name: this.name,
                standard_name: this.standard_name,
                entityType: (0, _spinalModelAnalysis.ENTITY_TYPES)[this.entityType]
            });
            this.name = "";
            this.standard_name = "";
            this.entityType = "";
        },
        disabled () {
            return this.name.trim().length === 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNnuT":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-popover", {
        attrs: {
            "offset": "16",
            "auto-hide": false,
            "open": _vm.show
        }
    }, [
        _c("md-button", {
            staticClass: "tooltip-target md-fab md-mini md-primary"
        }, [
            _c("md-icon", [
                _vm._v("add")
            ])
        ], 1),
        _vm._v(" "),
        _c("template", {
            slot: "popover"
        }, [
            _c("div", {
                staticClass: "popoverContainer"
            }, [
                _c("div", {
                    staticClass: "_popoverContent"
                }, [
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Entity name")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
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
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Entity standard name e.g : Room , Floor etc ...")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.standard_name,
                                callback: function($$v) {
                                    _vm.standard_name = $$v;
                                },
                                expression: "standard_name"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Entity type")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            model: {
                                value: _vm.entityType,
                                callback: function($$v) {
                                    _vm.entityType = $$v;
                                },
                                expression: "entityType"
                            }
                        }, _vm._l(Object.keys(_vm.ENTITY_TYPES), function(type) {
                            return _c("md-option", {
                                key: type,
                                attrs: {
                                    "value": type
                                }
                            }, [
                                _vm._v("\n              " + _vm._s(type) + "\n            ")
                            ]);
                        }), 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "_popoverBtn"
                }, [
                    _c("md-button", {
                        directives: [
                            {
                                name: "close-popover",
                                rawName: "v-close-popover"
                            }
                        ],
                        staticClass: "btn md-dense md-primary"
                    }, [
                        _vm._v("Close")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "close-popover",
                                rawName: "v-close-popover"
                            }
                        ],
                        staticClass: "btn md-dense md-primary",
                        attrs: {
                            "disabled": _vm.disabled()
                        },
                        on: {
                            "click": _vm.addEntity
                        }
                    }, [
                        _vm._v("ADD")
                    ])
                ], 1)
            ])
        ])
    ], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"itTGF":[function() {},{}],"apHz4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcjgt":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "myContainer md-scrollbar"
    }, [
        _c("md-button", {
            staticClass: "md-dense md-primary",
            on: {
                "click": function($event) {
                    return _vm.addAllStandardEntities();
                }
            }
        }, [
            _vm._v("\n              Add all standard entities\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "myFabs"
        }, [
            _c("addItemsPopover", {
                on: {
                    "addEntity": _vm.addEntity
                }
            })
        ], 1),
        _vm._v(" "),
        _vm.itemsSorted.length > 0 ? _c("draggable", {
            attrs: {
                "group": "entities"
            },
            on: {
                "start": function($event) {
                    _vm.drag = true;
                },
                "end": function($event) {
                    _vm.drag = false;
                }
            },
            model: {
                value: _vm.itemsSorted,
                callback: function($$v) {
                    _vm.itemsSorted = $$v;
                },
                expression: "itemsSorted"
            }
        }, _vm._l(_vm.itemsSorted, function(element) {
            return _c("div", {
                key: element.order,
                staticClass: "listeItemDraggable"
            }, [
                _c("div", {
                    staticClass: "left"
                }, [
                    _c("div", {
                        staticClass: "name"
                    }, [
                        _vm._v("\n          " + _vm._s(element.name) + "\n        ")
                    ])
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "right"
                }, [
                    _c("md-button", {
                        staticClass: "md-icon-button md-dense md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.deleteItem(element.order);
                            }
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("delete_forever")
                        ])
                    ], 1)
                ], 1)
            ]);
        }), 0) : _c("div", {
            staticClass: "empty"
        }, [
            _vm._v("\n    No entities created\n  ")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hcFup":[function() {},{}],"kVS6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBydd":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialog",
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
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Analytic context\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _c("md-steppers", {
                staticClass: "mySteppers",
                attrs: {
                    "md-active-step": _vm.stepper.active,
                    "md-linear": ""
                },
                on: {
                    "update:mdActiveStep": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "update:md-active-step": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "md-changed": _vm.changeStep
                }
            }, [
                _c("md-step", {
                    staticClass: "mdStep",
                    attrs: {
                        "id": _vm.STEPPERS_DATA.context,
                        "md-label": "Context",
                        "md-done": _vm.stepper.first
                    },
                    on: {
                        "update:mdDone": function($event) {
                            return _vm.$set(_vm.stepper, "first", $event);
                        },
                        "update:md-done": function($event) {
                            return _vm.$set(_vm.stepper, "first", $event);
                        }
                    }
                }, [
                    _c("md-content", {
                        staticClass: "contents"
                    }, [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("Context name")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                ref: "nameTextField",
                                model: {
                                    value: _vm.inputValue,
                                    callback: function($$v) {
                                        _vm.inputValue = $$v;
                                    },
                                    expression: "inputValue"
                                }
                            })
                        ], 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("md-step", {
                    staticClass: "mdStep",
                    attrs: {
                        "id": _vm.STEPPERS_DATA.entities,
                        "md-label": "Entities",
                        "md-done": _vm.stepper.second
                    },
                    on: {
                        "update:mdDone": function($event) {
                            return _vm.$set(_vm.stepper, "second", $event);
                        },
                        "update:md-done": function($event) {
                            return _vm.$set(_vm.stepper, "second", $event);
                        }
                    }
                }, [
                    _c("sortable-list", {
                        ref: "draggableComponent",
                        attrs: {
                            "items": _vm.entities
                        },
                        on: {
                            "addEntity": _vm.addEntity,
                            "delete": _vm.deleteItem,
                            "addAllStandardEntities": _vm.addAllStandardEntities
                        }
                    })
                ], 1)
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
            _vm.stepper.active === this.STEPPERS_DATA.context ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": !(_vm.inputValue.trim().length > 0)
                },
                on: {
                    "click": _vm.PassToSecondStep
                }
            }, [
                _vm._v("Next")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.stepper.active === this.STEPPERS_DATA.entities ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledButton()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Save")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1Ln0H":[function() {},{}],"8nBXb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13njj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("758e6f5f274777a8");
    if (script.__esModule) script = script.default;
    script.render = require("d65a7c438c4cbc2b").render;
    script.staticRenderFns = require("d65a7c438c4cbc2b").staticRenderFns;
    script._scopeId = "data-v-583b39";
    script.__cssModules = require("f4102860c351f73e").default;
    require("e6f886d3ba47a944").default(script);
    script.__scopeId = "data-v-583b39";
    script.__file = "createEntityDialog.vue";
};
initialize();
exports.default = script;

},{"758e6f5f274777a8":"jXEln","d65a7c438c4cbc2b":"6mvyQ","f4102860c351f73e":"7wgmM","e6f886d3ba47a944":"jTQPJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXEln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    name: "createEntityDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.types = (0, _spinalModelAnalysis.ENTITY_TYPES);
        this.contextId;
        this.groupId;
        return {
            showDialog: true,
            entity: {
                name: "",
                standard_name: "",
                entityType: "",
                description: ""
            }
        };
    },
    methods: {
        opened (option) {
            console.log(option);
            this.contextId = option.selectedNode.id.get();
            console.log(this.contextId);
        },
        async removed (option) {
            if (option) {
                const newEntity = {
                    name: this.entity.name,
                    standard_name: this.entity.standard_name,
                    entityType: this.types[this.entity.entityType],
                    description: ""
                };
                const entityInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addEntity(newEntity, this.contextId);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disabled () {
            return this.entity.name.length === 0 || this.entity.entityType === "";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mvyQ":[function(require,module,exports) {
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
            _vm._v("Create Entity ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.entity.name,
                        callback: function($$v) {
                            _vm.$set(_vm.entity, "name", $$v);
                        },
                        expression: "entity.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", [
                _c("label", [
                    _vm._v("Standard name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.entity.standard_name,
                        callback: function($$v) {
                            _vm.$set(_vm.entity, "standard_name", $$v);
                        },
                        expression: "entity.standard_name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "entityType"
                    }
                }, [
                    _vm._v("Entity type")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    attrs: {
                        "name": "entityType",
                        "id": "entityType"
                    },
                    model: {
                        value: _vm.entity.entityType,
                        callback: function($$v) {
                            _vm.$set(_vm.entity, "entityType", $$v);
                        },
                        expression: "entity.entityType"
                    }
                }, _vm._l(Object.keys(_vm.types), function(data) {
                    return _c("md-option", {
                        key: data,
                        attrs: {
                            "value": data
                        }
                    }, [
                        _vm._v(_vm._s(data))
                    ]);
                }), 1)
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

},{}],"7wgmM":[function() {},{}],"jTQPJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nIgB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("65160a6b476efb54");
    if (script.__esModule) script = script.default;
    script.render = require("627298b955099f43").render;
    script.staticRenderFns = require("627298b955099f43").staticRenderFns;
    script._scopeId = "data-v-b608a1";
    script.__cssModules = require("cc43dd29276c16a3").default;
    require("8a421bcfa6ff918c").default(script);
    script.__scopeId = "data-v-b608a1";
    script.__file = "createAnalyticDialog.vue";
};
initialize();
exports.default = script;

},{"65160a6b476efb54":"bCWrY","627298b955099f43":"k875b","cc43dd29276c16a3":"jpbbC","8a421bcfa6ff918c":"3zKUm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCWrY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _analyticNameVue = require("./components/analyticSteps/analyticName.vue");
var _analyticNameVueDefault = parcelHelpers.interopDefault(_analyticNameVue);
var _followedEntityVue = require("./components/analyticSteps/followedEntity.vue");
var _followedEntityVueDefault = parcelHelpers.interopDefault(_followedEntityVue);
var _inputConfigurationVue = require("./components/analyticSteps/inputConfiguration.vue");
var _inputConfigurationVueDefault = parcelHelpers.interopDefault(_inputConfigurationVue);
var _triggerConfigurationVue = require("./components/analyticSteps/triggerConfiguration.vue");
var _triggerConfigurationVueDefault = parcelHelpers.interopDefault(_triggerConfigurationVue);
var _algorithmConfigurationVue = require("./components/analyticSteps/algorithmConfiguration.vue");
var _algorithmConfigurationVueDefault = parcelHelpers.interopDefault(_algorithmConfigurationVue);
var _resultConfigurationVue = require("./components/analyticSteps/resultConfiguration.vue");
var _resultConfigurationVueDefault = parcelHelpers.interopDefault(_resultConfigurationVue);
var _iodependenciesVue = require("./components/analyticSteps/IODependencies.vue");
var _iodependenciesVueDefault = parcelHelpers.interopDefault(_iodependenciesVue);
var _configurationVue = require("./components/analyticSteps/configuration.vue");
var _configurationVueDefault = parcelHelpers.interopDefault(_configurationVue);
var _summaryVue = require("./components/analyticSteps/summary.vue");
var _summaryVueDefault = parcelHelpers.interopDefault(_summaryVue);
var scriptExports = {
    name: "createAnalyticDialog",
    props: [
        "onFinised"
    ],
    components: {
        "analytic-name": (0, _analyticNameVueDefault.default),
        "followed-entity": (0, _followedEntityVueDefault.default),
        "input-configuration": (0, _inputConfigurationVueDefault.default),
        "trigger-configuration": (0, _triggerConfigurationVueDefault.default),
        "algorithm-configuration": (0, _algorithmConfigurationVueDefault.default),
        "result-configuration": (0, _resultConfigurationVueDefault.default),
        "io-dependencies": (0, _iodependenciesVueDefault.default),
        "configuration": (0, _configurationVueDefault.default),
        "summary-analytic": (0, _summaryVueDefault.default)
    },
    data () {
        this.STEPPERS_DATA = {
            analytic: "first",
            followedEntity: "second",
            inputConfiguration: "third",
            triggerConfiguration: "fourth",
            algorithmConfiguration: "fifth",
            resultConfiguration: "sixth",
            IODependencies: "seventh",
            summary: "eighth"
        };
        return {
            showDialog: true,
            showPreviewDialog: false,
            // Analytic attributes data
            analyticName: "",
            analyticDescription: "",
            analyticShouldTriggerAtStart: false,
            analyticStatus: false,
            // Inputs -> Followed Entity -> attribute data
            followedEntity: undefined,
            // Inputs  -> Tracking Method -> attribute data
            inputs: {},
            // Config -> trigger attribute data
            triggers: {},
            // Config -> Algorithms attribute data
            algorithms: {},
            // Config -> I/O Dependencies attribute data
            ioDependencies: {
                R: ""
            },
            // Config -> Result attribute data
            resultType: "",
            resultName: "",
            ticketContextId: "",
            ticketProcessId: "",
            phoneNumber: "",
            phoneMessage: "",
            alarmPriority: null,
            gChatMessage: "",
            gChatSpaceName: "",
            selectedNode: undefined,
            entityType: undefined,
            stepper: {
                active: this.STEPPERS_DATA.analytic,
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
                seventh: false,
                eighth: false
            }
        };
    },
    created () {
        this.ANALYTIC_STATUS = (0, _spinalModelAnalysis.ANALYTIC_STATUS);
    },
    methods: {
        opened (option) {
            this.selectedNode = option.selectedNode;
            this.entityType = this.selectedNode.entityType.get();
        },
        async removed (res) {
            if (res.closeResult) {
                // there must be a better way to get the context id...
                const contextId = Object.keys(this.selectedNode.contextIds.get())[0];
                //create analytic Node
                const IAnalytic = {
                    name: this.analyticName,
                    description: ""
                };
                const analyticInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addAnalytic(IAnalytic, contextId, this.selectedNode.id.get());
                //create trackingMethod Node
                const trackingMethodAttributes = this.getTrackingMethodAttributes();
                console.log("trackingMethodAttributes :", trackingMethodAttributes);
                const trackingMethodInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addInputTrackingMethod(trackingMethodAttributes, contextId, analyticInfo.id.get());
                //create followedEntity Node
                const followedEntityInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addInputLinkToFollowedEntity(contextId, analyticInfo.id.get(), this.followedEntity);
                //create config Node
                const configAttributes = {};
                //Add all analytic parameters ( description, status, triggerAtStart)
                const analyticAttributes = this.getAnalyticAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS] = analyticAttributes;
                const triggerAttributes = this.getTriggerAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS] = triggerAttributes;
                const resultAttributes = this.getResultAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS] = resultAttributes;
                const algorithmParametersAttributes = this.getAlgorithmParametersAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS] = algorithmParametersAttributes;
                const algorithmMappingAttributes = this.getAlgorithmMappingAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING] = algorithmMappingAttributes;
                const ioAttributes = this.getIOAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES] = ioAttributes;
                if (this.ticketContextId && this.ticketProcessId) {
                    const ticketAttributes = this.getTicketAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS] = ticketAttributes;
                }
                if (this.resultType == (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).SMS) {
                    const smsAttributes = this.getSMSAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS] = smsAttributes;
                }
                if ([
                    (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_MESSAGE,
                    (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_ORGAN_CARD
                ].includes(this.resultType)) {
                    const gChatAttributes = this.getGChatAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS] = gChatAttributes;
                }
                console.log("configAttributes :", configAttributes);
                const configInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addConfig(configAttributes, analyticInfo.id.get(), contextId);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                analyticName: this.analyticName
            });
        },
        addInput () {
            let length = Object.keys(this.inputs).length;
            console.log("adding input");
            this.inputs = {
                ...this.inputs,
                [`I${length}`]: {
                    trackingMethod: "",
                    filterValue: "",
                    searchDepth: 0,
                    strictDepth: false,
                    searchRelations: "",
                    timeseriesIntervalTime: 0
                }
            };
        },
        removeInput (inputName) {
            delete this.inputs[inputName];
            let index = Number(inputName.match(/(\d+)/)[0]);
            // shift back all the inputs after the deleted one.
            let i = index;
            while(this.inputs[`I${i + 1}`] !== undefined){
                this.inputs[`I${i}`] = this.inputs[`I${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.inputs[`I${i}`];
            this.inputs = {
                ...this.inputs
            };
            console.log("deleted input : ", inputName);
        },
        addTrigger () {
            let length = Object.keys(this.triggers).length;
            console.log("adding input");
            this.triggers = {
                ...this.triggers,
                [`T${length}`]: {
                    triggerType: "",
                    triggerValue: "",
                    changeOfValueThreshold: 0
                }
            };
        },
        removeTrigger (triggerName) {
            delete this.triggers[triggerName];
            let index = Number(triggerName.match(/(\d+)/)[0]);
            // shift back all the elements after the deleted one.
            let i = index;
            while(this.triggers[`T${i + 1}`] !== undefined){
                this.triggers[`T${i}`] = this.triggers[`T${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.triggers[`T${i}`];
            this.triggers = {
                ...this.triggers
            };
            console.log("deleted trigger : ", triggerName);
        },
        addAlgorithm () {
            let length = Object.keys(this.algorithms).length;
            console.log("adding algorithm");
            this.algorithms = {
                ...this.algorithms,
                [`A${length}`]: {
                    name: "",
                    params: []
                }
            };
        },
        removeAlgorithm (algorithmIndexName) {
            delete this.algorithms[algorithmIndexName];
            let index = Number(algorithmIndexName.match(/(\d+)/)[0]);
            // shift back all the elements after the deleted one.
            let i = index;
            while(this.algorithms[`A${i + 1}`] !== undefined){
                this.algorithms[`A${i}`] = this.algorithms[`A${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.algorithms[`A${i}`];
            this.algorithms = {
                ...this.algorithms
            };
            console.log("deleted algorithm : ", algorithmIndexName);
        },
        changeStep (stepId) {
            this.stepper.active = stepId;
        },
        PassToNextStep () {
            switch(this.stepper.active){
                case this.STEPPERS_DATA.analytic:
                    this.stepper.first = true;
                    this.stepper.active = this.STEPPERS_DATA.followedEntity;
                    break;
                case this.STEPPERS_DATA.followedEntity:
                    this.stepper.second = true;
                    this.stepper.active = this.STEPPERS_DATA.inputConfiguration;
                    break;
                case this.STEPPERS_DATA.inputConfiguration:
                    this.stepper.third = true;
                    this.stepper.active = this.STEPPERS_DATA.triggerConfiguration;
                    break;
                case this.STEPPERS_DATA.triggerConfiguration:
                    this.stepper.fourth = true;
                    this.stepper.active = this.STEPPERS_DATA.algorithmConfiguration;
                    break;
                case this.STEPPERS_DATA.algorithmConfiguration:
                    this.stepper.fifth = true;
                    this.stepper.active = this.STEPPERS_DATA.resultConfiguration;
                    break;
                case this.STEPPERS_DATA.resultConfiguration:
                    this.stepper.sixth = true;
                    this.stepper.active = this.STEPPERS_DATA.IODependencies;
                    break;
                case this.STEPPERS_DATA.IODependencies:
                    this.stepper.seventh = true;
                    this.stepper.active = this.STEPPERS_DATA.summary;
                    break;
                case this.STEPPERS_DATA.summary:
                    this.stepper.eighth = true;
                    this.stepper.active = this.STEPPERS_DATA.summary;
                    break;
            }
        },
        isSaveButtonDisabled () {
            return this.analyticName === "" || this.algorithm === "" || this.resultType === "" || this.resultName === "" || this.intervalTime === null || !this.followedEntity;
        },
        getTrackingMethodAttributes () {
            const trackingMethodAttributes = {};
            for (const inputKey of Object.keys(this.inputs)){
                trackingMethodAttributes[inputKey] = [];
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TRACKING_METHOD)}`,
                    type: "string",
                    value: this.inputs[inputKey].trackingMethod
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_FILTER_VALUE)}`,
                    type: "string",
                    value: this.inputs[inputKey].filterValue
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_DEPTH)}`,
                    type: "number",
                    value: this.inputs[inputKey].searchDepth
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_STRICT_DEPTH)}`,
                    type: "boolean",
                    value: this.inputs[inputKey].strictDepth
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_RELATIONS)}`,
                    type: "string",
                    value: this.inputs[inputKey].searchRelations
                });
                if ([
                    (0, _spinalModelAnalysis.TRACK_METHOD).CONTROL_ENDPOINT_NAME_FILTER,
                    (0, _spinalModelAnalysis.TRACK_METHOD).ENDPOINT_NAME_FILTER
                ].includes(this.inputs[inputKey].trackingMethod)) trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES)}`,
                    type: "number",
                    value: this.inputs[inputKey].timeseriesIntervalTime
                });
            }
            return trackingMethodAttributes;
        },
        getAnalyticAttributes () {
            const analyticAttributes = [];
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_DESCRIPTION)}`,
                type: "string",
                value: this.analyticDescription
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_STATUS)}`,
                type: "string",
                value: this.analyticStatus ? (0, _spinalModelAnalysis.ANALYTIC_STATUS).ACTIVE : (0, _spinalModelAnalysis.ANALYTIC_STATUS).INACTIVE
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TRIGGER_AT_START)}`,
                type: "boolean",
                value: this.analyticShouldTriggerAtStart
            });
            return analyticAttributes;
        },
        getResultAttributes () {
            const resultAttributes = [];
            resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_RESULT_TYPE)}`,
                type: "string",
                value: this.resultType
            });
            resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_RESULT_NAME)}`,
                type: "string",
                value: this.resultName
            });
            return resultAttributes;
        },
        getAlgorithmParametersAttributes () {
            const algorithmParametersAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms)){
                let algoName = this.algorithms[algorithmIndexName].name;
                const doc = (0, _spinalModelAnalysis.algos)[algoName].requiredParams;
                for(let i = 0; i < this.algorithms[algorithmIndexName].params.length; i++)algorithmParametersAttributes.push({
                    name: `${algorithmIndexName}${(0, _spinalModelAnalysis.ATTRIBUTE_SEPARATOR)}${doc[i].name}`,
                    value: doc[i].type === "number" ? +this.algorithms[algorithmIndexName].params[i] : this.algorithms[algorithmIndexName].params[i],
                    type: doc[i].type
                });
            }
            return algorithmParametersAttributes;
        },
        getAlgorithmMappingAttributes () {
            const algorithmMappingAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms))algorithmMappingAttributes.push({
                name: `${algorithmIndexName}`,
                type: "string",
                value: this.algorithms[algorithmIndexName].name
            });
            return algorithmMappingAttributes;
        },
        getTicketAttributes () {
            const ticketAttributes = [];
            ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TICKET_CONTEXT_ID)}`,
                type: "string",
                value: this.ticketContextId
            });
            ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TICKET_PROCESS_ID)}`,
                type: "string",
                value: this.ticketProcessId
            });
            if (this.alarmPriority) ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ALARM_PRIORITY)}`,
                value: this.alarmPriority,
                type: "number"
            });
            return ticketAttributes;
        },
        getSMSAttributes () {
            const smsAttributes = [];
            smsAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_PHONE_NUMBER)}`,
                type: "string",
                value: this.phoneNumber
            });
            smsAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_PHONE_MESSAGE)}`,
                type: "string",
                value: this.phoneMessage
            });
            return smsAttributes;
        },
        getGChatAttributes () {
            const gChatAttributes = [];
            gChatAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_MESSAGE)}`,
                type: "string",
                value: this.gChatMessage
            });
            gChatAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_SPACE)}`,
                type: "string",
                value: this.gChatSpaceName
            });
            return gChatAttributes;
        },
        getIOAttributes () {
            const ioAttributes = [];
            for (const ioDependencyName of Object.keys(this.ioDependencies)){
                let str = "";
                for (const ioDependency of this.ioDependencies[ioDependencyName])str += `${ioDependency}${0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR}`;
                str = str.slice(0, -1);
                ioAttributes.push({
                    name: `${ioDependencyName}`,
                    type: "string",
                    value: str
                });
            }
            return ioAttributes;
        },
        getTriggerAttributes () {
            const triggerAttributes = [];
            for (const triggerIndex of Object.keys(this.triggers)){
                let str = `${this.triggers[triggerIndex].triggerType}${(0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR)}${this.triggers[triggerIndex].triggerValue}`;
                if (this.triggers[triggerIndex].changeOfValueThreshold !== null) str += `${0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR}${this.triggers[triggerIndex].changeOfValueThreshold}`;
                triggerAttributes.push({
                    name: `${triggerIndex}`,
                    type: "string",
                    value: str
                });
            }
            return triggerAttributes;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","./components/analyticSteps/analyticName.vue":"fV2jv","./components/analyticSteps/followedEntity.vue":"kT4TN","./components/analyticSteps/inputConfiguration.vue":"iVYnP","./components/analyticSteps/triggerConfiguration.vue":"iND1t","./components/analyticSteps/algorithmConfiguration.vue":"8wAUD","./components/analyticSteps/resultConfiguration.vue":"eI82n","./components/analyticSteps/IODependencies.vue":"1wJ5n","./components/analyticSteps/configuration.vue":"3SuJC","./components/analyticSteps/summary.vue":"5IrTN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fV2jv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f42749112db0e168");
    if (script.__esModule) script = script.default;
    script.render = require("a2886d4834b780f6").render;
    script.staticRenderFns = require("a2886d4834b780f6").staticRenderFns;
    script._scopeId = "data-v-b7bc8e";
    require("2e65fd3ada512a11").default(script);
    script.__scopeId = "data-v-b7bc8e";
    script.__file = "analyticName.vue";
};
initialize();
exports.default = script;

},{"f42749112db0e168":"lAQJ6","a2886d4834b780f6":"5MKAT","2e65fd3ada512a11":"1CTes","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lAQJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "analyticName",
        "analyticDescription",
        "analyticShouldTriggerAtStart",
        "analyticStatus",
        "editable"
    ],
    data () {
        return {
            localAnalyticName: this.analyticName,
            localAnalyticDescription: this.analyticDescription,
            localAnalyticShouldTriggerAtStart: this.analyticShouldTriggerAtStart,
            localAnalyticStatus: this.analyticStatus,
            statuSwitchValue: this.computedStatuSwitchValue
        };
    },
    created () {
        this.ANALYTIC_STATUS = (0, _spinalModelAnalysis.ANALYTIC_STATUS);
    },
    computed: {
        computedAnalyticStatus () {
            return this.statuSwitchValue ? (0, _spinalModelAnalysis.ANALYTIC_STATUS).ACTIVE : (0, _spinalModelAnalysis.ANALYTIC_STATUS).INACTIVE;
        },
        computedStatuSwitchValue () {
            return this.localAnalyticStatus === (0, _spinalModelAnalysis.ANALYTIC_STATUS).ACTIVE;
        }
    },
    methods: {
        update (key, value) {
            console.log("update ", key, value);
            this.$emit(`update:${key}`, value);
        }
    },
    watch: {
        analyticName () {
            this.localAnalyticName = this.analyticName;
        },
        analyticDescription () {
            this.localAnalyticDescription = this.analyticDescription;
        },
        analyticShouldTriggerAtStart () {
            this.localAnalyticShouldTriggerAtStart = this.analyticShouldTriggerAtStart;
        },
        analyticStatus () {
            this.localAnalyticStatus = this.analyticStatus;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MKAT":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.analytic,
            "md-label": "Analytic",
            "md-done": _vm.stepper.first
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "first", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "first", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents"
        }, [
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Analytic name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    attrs: {
                        "disabled": !_vm.editable
                    },
                    on: {
                        "change": function($event) {
                            return _vm.update("analyticName", _vm.localAnalyticName);
                        }
                    },
                    model: {
                        value: _vm.localAnalyticName,
                        callback: function($$v) {
                            _vm.localAnalyticName = $$v;
                        },
                        expression: "localAnalyticName"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Analytic Description")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "change": function($event) {
                            return _vm.update("analyticDescription", _vm.localAnalyticDescription);
                        }
                    },
                    model: {
                        value: _vm.localAnalyticDescription,
                        callback: function($$v) {
                            _vm.localAnalyticDescription = $$v;
                        },
                        expression: "localAnalyticDescription"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-switch", {
                on: {
                    "change": function($event) {
                        return _vm.update("analyticShouldTriggerAtStart", _vm.localAnalyticShouldTriggerAtStart);
                    }
                },
                model: {
                    value: _vm.localAnalyticShouldTriggerAtStart,
                    callback: function($$v) {
                        _vm.localAnalyticShouldTriggerAtStart = $$v;
                    },
                    expression: "localAnalyticShouldTriggerAtStart"
                }
            }, [
                _vm._v("Should force trigger at start : "),
                _c("b", [
                    _vm._v(_vm._s(_vm.localAnalyticShouldTriggerAtStart ? "Yes" : "No") + " ")
                ])
            ]),
            _vm._v(" "),
            _c("md-switch", {
                on: {
                    "change": function($event) {
                        return _vm.update("analyticStatus", _vm.localAnalyticStatus);
                    }
                },
                model: {
                    value: _vm.localAnalyticStatus,
                    callback: function($$v) {
                        _vm.localAnalyticStatus = $$v;
                    },
                    expression: "localAnalyticStatus"
                }
            }, [
                _vm._v("Analytic Status : "),
                _c("b", [
                    _vm._v(" " + _vm._s(_vm.localAnalyticStatus ? "Active" : "Inactive") + " ")
                ])
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1CTes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kT4TN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("72a29b3f76f1becb");
    if (script.__esModule) script = script.default;
    script.render = require("df91edfc020a44ec").render;
    script.staticRenderFns = require("df91edfc020a44ec").staticRenderFns;
    script._scopeId = "data-v-ac181b";
    require("a9d15aa6691f2297").default(script);
    script.__scopeId = "data-v-ac181b";
    script.__file = "followedEntity.vue";
};
initialize();
exports.default = script;

},{"72a29b3f76f1becb":"eMfgU","df91edfc020a44ec":"5M6DE","a9d15aa6691f2297":"eieWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMfgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkToEntityVue = require("../linkToEntity.vue");
var _linkToEntityVueDefault = parcelHelpers.interopDefault(_linkToEntityVue);
var _linkToSpatialEntityVue = require("../linkToSpatialEntity.vue");
var _linkToSpatialEntityVueDefault = parcelHelpers.interopDefault(_linkToSpatialEntityVue);
var _linkToContextVue = require("../linkToContext.vue");
var _linkToContextVueDefault = parcelHelpers.interopDefault(_linkToContextVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "entityType",
        "followedEntity"
    ],
    components: {
        "link-to-entity": (0, _linkToEntityVueDefault.default),
        "link-to-spatial-entity": (0, _linkToSpatialEntityVueDefault.default),
        "link-to-context": (0, _linkToContextVueDefault.default)
    },
    data () {
        return {
            localFollowedEntity: this.followedEntity,
            showSelectSpatialEntityDialog: false,
            showSelectGroupEntityDialog: false,
            showSelectContextEntityDialog: false
        };
    },
    methods: {
        closeSelectSpatialEntityDialog (selectedEntity) {
            console.log("selected Entity :", selectedEntity);
            this.$emit("update:followedEntity", selectedEntity);
            this.showSelectSpatialEntityDialog = false;
        },
        closeSelectGroupEntityDialog (selectedGroup) {
            console.log("selected Entity :", selectedGroup);
            this.$emit("update:followedEntity", selectedGroup);
            this.showSelectGroupEntityDialog = false;
        },
        closeSelectContextEntityDialog (selectedEntity) {
            console.log("selected Entity :", selectedEntity);
            this.$emit("update:followedEntity", selectedEntity);
            this.showSelectContextEntityDialog = false;
        }
    },
    computed: {
        showSpatialSelector () {
            if (!this.entityType) return false;
            return !this.entityType.includes("Group") && this.entityType !== "BIMObject";
        },
        followedEntityName () {
            if (!this.followedEntity) return "";
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.followedEntity);
            console.log(info);
            return `${info.name.get()} | Type : ${info.type.get()} | Node id : ${info.id.get()}`;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../linkToEntity.vue":"gAJxJ","../linkToSpatialEntity.vue":"1cxu7","../linkToContext.vue":"1CoaN","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAJxJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("495626d92ed0f67d");
    if (script.__esModule) script = script.default;
    script.render = require("fc571b523ea36ce0").render;
    script.staticRenderFns = require("fc571b523ea36ce0").staticRenderFns;
    script._scopeId = "data-v-5a6195";
    script.__cssModules = require("aec4895752613f80").default;
    require("ebf5fd019ba261a1").default(script);
    script.__scopeId = "data-v-5a6195";
    script.__file = "linkToEntity.vue";
};
initialize();
exports.default = script;

},{"495626d92ed0f67d":"gszHD","fc571b523ea36ce0":"7jcFJ","aec4895752613f80":"8utnu","ebf5fd019ba261a1":"itJoY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gszHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../../../services/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkerTemplateVue = require("./linkerTemplate.vue");
var _linkerTemplateVueDefault = parcelHelpers.interopDefault(_linkerTemplateVue);
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-template": (0, _linkerTemplateVueDefault.default)
    },
    props: [
        "visible",
        "entityType"
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
        this.type = this.entityType + "Context";
        this.getAllData();
    },
    methods: {
        closeDialog (closeResult) {
            if (!closeResult) this.$emit("closeSelection", undefined);
            else this.$emit("closeSelection", this.groupSelected);
        },
        getAllData () {
            (0, _indexDefault.default).getAllGroupContext(this.type).then((res)=>{
                this.data = res;
                this.updateCategory();
                this.updateGroups();
            });
        },
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
        ////////////////////////////////////////////////////////////////      // Modify
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
            this.contextSelected = id;
        },
        selectCategory (id) {
            this.categorySelected = id;
        },
        selectGroup (id) {
            this.groupSelected = id;
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

},{"../../../services/index":"bhC5I","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","./linkerTemplate.vue":"5st7N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhC5I":[function(require,module,exports) {
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

},{"./classes/spinalAttributeService":"l6W5C","./classes/spinalConfigurationService":"48ZTh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6W5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
class SpinalAttributeService {
    constructor(){}
    async testGetAllAttributes(nodeId) {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getAllAttributes(nodeId);
    }
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
        let model = window.spinal.BimObjectService.getModelByBimfile(bimObjectInfo.bimFileId);
        let value = attributeName.toLowerCase();
        if (model) return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getBimObjectProperties({
            model: model,
            selection: [
                bimObjectInfo.dbid
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
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(type).then((contexts)=>{
            const promises = contexts.map(async (context)=>{
                context["category"] = await this.getCategory(context.id);
                return context;
            });
            return Promise.all(promises);
        });
    }
    async getAllContexts() {
        const contexts = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph().getChildren("hasContext");
        return contexts.map((el)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(el.info.id.get()));
    }
    async getCategory(contextId) {
        const categories = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getCategories(contextId);
        const promises = categories.map(async (category)=>{
            let info = category.get();
            info["groups"] = await this.getGroup(category.id);
            return info;
        });
        return Promise.all(promises);
    }
    async getGroup(categoryId) {
        const groups = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(categoryId);
        return groups.map((el)=>el.get());
    }
    async getAllSpatialBuildings() {
        const spatialContext = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext("spatial");
        const buildings = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContextByType(spatialContext.info.id.get(), spatialContext.info.id.get(), "geographicBuilding");
        //return buildings.map(el => SpinalGraphService.getInfo(el.info.id.get()));
        return buildings;
    }
    linkItem(contextId, parentId, itemId) {
        // groupService.linkElementToGroup(parentId, itemId, contextId)
        return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).linkElementToGroup(contextId, parentId, itemId);
    }
}
exports.default = SpinalAttributeService;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-plugin-group-manager-service":"tSLpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Ny6":[function(require,module,exports) {
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

},{"44f946b368e03b14":"9n7zp","3c0117970d993dce":"eV0id"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"48ZTh":[function(require,module,exports) {
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

},{"spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5st7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("29151dbcf655ab0f");
    if (script.__esModule) script = script.default;
    script.render = require("5966b8a4206d51fe").render;
    script.staticRenderFns = require("5966b8a4206d51fe").staticRenderFns;
    script._scopeId = "data-v-905055";
    script.__cssModules = require("935875a4c72e9f38").default;
    require("30fc33d99f7ca241").default(script);
    script.__scopeId = "data-v-905055";
    script.__file = "linkerTemplate.vue";
};
initialize();
exports.default = script;

},{"29151dbcf655ab0f":"9b48p","5966b8a4206d51fe":"lWgln","935875a4c72e9f38":"3s5pk","30fc33d99f7ca241":"9wucV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9b48p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "linkToGroupTemplate",
    props: [
        "data",
        "title",
        "itemSelected",
        "showBtn",
        "subTitle"
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWgln":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "subContent"
    }, [
        _c("md-list", {
            staticClass: "title"
        }, [
            _c("md-list-item", [
                _c("span", {
                    staticClass: "md-list-item-text"
                }, [
                    _vm._v(_vm._s(_vm.title))
                ]),
                _vm._v(" "),
                _vm.showBtn ? _c("md-button", {
                    staticClass: "md-icon-button",
                    on: {
                        "click": _vm.createEvent
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("control_point")
                    ])
                ], 1) : _vm._e()
            ], 1)
        ], 1),
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

},{}],"3s5pk":[function() {},{}],"9wucV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jcFJ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.visible
        },
        on: {
            "update:mdActive": function($event) {
                _vm.visible = $event;
            },
            "update:md-active": function($event) {
                _vm.visible = $event;
            }
        }
    }, [
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Link to Group")
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

},{}],"8utnu":[function() {},{}],"itJoY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cxu7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2d583198d2e8fd96");
    if (script.__esModule) script = script.default;
    script.render = require("c11d4a91a08d9ceb").render;
    script.staticRenderFns = require("c11d4a91a08d9ceb").staticRenderFns;
    script._scopeId = "data-v-efd16d";
    script.__cssModules = require("2c27762d2d96d6b4").default;
    require("79d30b5f3442688a").default(script);
    script.__scopeId = "data-v-efd16d";
    script.__file = "linkToSpatialEntity.vue";
};
initialize();
exports.default = script;

},{"2d583198d2e8fd96":"9xwQj","c11d4a91a08d9ceb":"eLcpk","2c27762d2d96d6b4":"yTPFJ","79d30b5f3442688a":"2FUbY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xwQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../../../services/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _linkerTemplateVue = require("./linkerTemplate.vue");
var _linkerTemplateVueDefault = parcelHelpers.interopDefault(_linkerTemplateVue);
var scriptExports = {
    name: "spatialSelectComponent",
    components: {
        "link-template": (0, _linkerTemplateVueDefault.default)
    },
    props: [
        "visible",
        "entityType"
    ],
    data () {
        return {
            showDialog: true,
            data: [],
            rooms: [],
            floors: [],
            buildingSelected: undefined,
            floorSelected: undefined,
            roomSelected: undefined,
            items: [],
            spatialContextId: undefined
        };
    },
    mounted () {
        this.getAllData();
        this.spatialContextId = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext("spatial").info.id.get();
    },
    methods: {
        closeDialog (closeResult) {
            if (!closeResult) this.$emit("closeSelection", undefined);
            else {
                if (this.roomSelected) {
                    this.$emit("closeSelection", this.roomSelected);
                    return;
                }
                if (this.floorSelected) {
                    this.$emit("closeSelection", this.floorSelected);
                    return;
                }
                if (this.buildingSelected) {
                    this.$emit("closeSelection", this.buildingSelected);
                    return;
                }
            }
        },
        getAllData () {
            (0, _indexDefault.default).getAllSpatialBuildings().then((res)=>{
                this.data = res;
            //this.updateCategory();
            //this.updateGroups();
            });
        },
        updateCategory () {
            // this.floorSelected = undefined;
            this.floors = [];
            if (this.buildingSelected) (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContextByType(this.buildingSelected, this.spatialContextId, "geographicFloor").then((res)=>{
                this.floors = res;
            });
        },
        updateGroups () {
            // this.roomSelected = undefined;
            this.rooms = [];
            if (this.floorSelected) (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContextByType(this.floorSelected, this.spatialContextId, "geographicRoom").then((res)=>{
                this.rooms = res;
            });
        },
        selectBuilding (id) {
            console.log("select building ", id);
            this.buildingSelected = id;
            this.floorSelected = undefined;
            this.roomSelected = undefined;
        },
        selectFloor (id) {
            console.log("select floor ", id);
            this.floorSelected = id;
            this.roomSelected = undefined;
        },
        selectRoom (id) {
            console.log("select room ", id);
            this.roomSelected = id;
        }
    },
    watch: {
        buildingSelected () {
            this.floorSelected = undefined;
            this.roomSelected = undefined;
            this.updateCategory();
            this.updateGroups();
        },
        floorSelected () {
            this.roomSelected = undefined;
            this.updateGroups();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../services/index":"bhC5I","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","./linkerTemplate.vue":"5st7N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLcpk":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.visible
        },
        on: {
            "update:mdActive": function($event) {
                _vm.visible = $event;
            },
            "update:md-active": function($event) {
                _vm.visible = $event;
            }
        }
    }, [
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Link to " + _vm._s(this.entityType))
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
                        "title": "Buildings",
                        "data": _vm.data,
                        "itemSelected": _vm.buildingSelected
                    },
                    on: {
                        "select": _vm.selectBuilding
                    }
                })
            ], 1),
            _vm._v(" "),
            this.entityType != "geographicBuilding" ? _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Floors",
                        "data": _vm.floors,
                        "itemSelected": _vm.floorSelected,
                        "disableBtn": !_vm.buildingSelected
                    },
                    on: {
                        "select": _vm.selectFloor
                    }
                })
            ], 1) : _vm._e(),
            _vm._v(" "),
            this.entityType == "geographicRoom" ? _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Rooms",
                        "data": _vm.rooms,
                        "itemSelected": _vm.roomSelected,
                        "disableBtn": !_vm.floorSelected
                    },
                    on: {
                        "select": _vm.selectRoom
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
                    "disabled": !_vm.buildingSelected
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

},{}],"yTPFJ":[function() {},{}],"2FUbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CoaN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fc4bc2f79935eaee");
    if (script.__esModule) script = script.default;
    script.render = require("ebd8d57fe5144b69").render;
    script.staticRenderFns = require("ebd8d57fe5144b69").staticRenderFns;
    script._scopeId = "data-v-68b29d";
    script.__cssModules = require("6adae82734d05a29").default;
    require("328ff90a8667f2ff").default(script);
    script.__scopeId = "data-v-68b29d";
    script.__file = "linkToContext.vue";
};
initialize();
exports.default = script;

},{"fc4bc2f79935eaee":"25Y1A","ebd8d57fe5144b69":"cQMar","6adae82734d05a29":"70QAU","328ff90a8667f2ff":"f6cox","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25Y1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../../../services/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _linkerTemplateVue = require("./linkerTemplate.vue");
var _linkerTemplateVueDefault = parcelHelpers.interopDefault(_linkerTemplateVue);
var scriptExports = {
    name: "spatialSelectComponent",
    components: {
        "link-template": (0, _linkerTemplateVueDefault.default)
    },
    props: [
        "visible",
        "entityType"
    ],
    data () {
        return {
            showDialog: true,
            data: [],
            contextSelected: undefined,
            items: []
        };
    },
    mounted () {
        this.getAllData();
    },
    methods: {
        closeDialog (closeResult) {
            if (!closeResult) this.$emit("closeSelection", undefined);
            else this.$emit("closeSelection", this.contextSelected);
        },
        getAllData () {
            (0, _indexDefault.default).getAllContexts().then((res)=>{
                this.data = res;
            });
        },
        ////////////////////////////////////////////////////////////////    // Modify
        ////////////////////////////////////////////////////////////////
        selectContext (id) {
            console.log("select context ", id);
            this.contextSelected = id;
        }
    },
    watch: {
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../services/index":"bhC5I","./linkerTemplate.vue":"5st7N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQMar":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.visible
        },
        on: {
            "update:mdActive": function($event) {
                _vm.visible = $event;
            },
            "update:md-active": function($event) {
                _vm.visible = $event;
            }
        }
    }, [
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Link to context")
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
                        "select": _vm.selectContext
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
                    "disabled": !_vm.contextSelected
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

},{}],"70QAU":[function() {},{}],"f6cox":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5M6DE":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.followedEntity,
            "md-label": "Anchor",
            "md-done": _vm.stepper.second
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "second", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "second", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("div", [
                _c("p", [
                    _vm._v(" The followed entity (Anchor) is the source that is providing the inputs.")
                ]),
                _vm._v(" "),
                _c("p", [
                    _vm._v("\n        For exemple, if the target entity type is Room and the followed entity\n        is a room, the analytic will be applied to that specific room.")
                ]),
                _vm._v(" "),
                _c("p", [
                    _vm._v("\n        If the target entity type is Room and the followed entity is a group\n        of rooms, the analytic will be applied to all the rooms of the\n        group.")
                ]),
                _vm._v(" "),
                _c("p", [
                    _c("strong", [
                        _vm._v(" Currently selected node ")
                    ]),
                    _vm._v(":\n        " + _vm._s(!_vm.followedEntity ? "None" : _vm.followedEntityName) + "\n      ")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    on: {
                        "click": function($event) {
                            _vm.showSelectGroupEntityDialog = true;
                        }
                    }
                }, [
                    _vm._v("\n        Follow group entity\n      ")
                ]),
                _vm._v(" "),
                _vm.showSpatialSelector ? _c("md-button", {
                    on: {
                        "click": function($event) {
                            _vm.showSelectSpatialEntityDialog = true;
                        }
                    }
                }, [
                    _vm._v("\n        Follow spatial entity\n      ")
                ]) : _vm._e(),
                _vm._v(" "),
                _c("md-button", {
                    on: {
                        "click": function($event) {
                            _vm.showSelectContextEntityDialog = true;
                        }
                    }
                }, [
                    _vm._v(" Follow Context ")
                ])
            ], 1),
            _vm._v(" "),
            _vm.entityType ? _c("link-to-context", {
                attrs: {
                    "visible": _vm.showSelectContextEntityDialog,
                    "entityType": _vm.entityType
                },
                on: {
                    "closeSelection": _vm.closeSelectContextEntityDialog
                }
            }) : _vm._e(),
            _vm._v(" "),
            _vm.entityType && _vm.entityType != "MonitoringServiceOrgan" ? _c("link-to-entity", {
                attrs: {
                    "visible": _vm.showSelectGroupEntityDialog,
                    "entityType": _vm.entityType.includes("Group") ? _vm.entityType : _vm.entityType + "Group"
                },
                on: {
                    "closeSelection": _vm.closeSelectGroupEntityDialog
                }
            }) : _vm._e(),
            _vm._v(" "),
            _vm.entityType && _vm.entityType != "MonitoringServiceOrgan" ? _c("link-to-spatial-entity", {
                attrs: {
                    "visible": _vm.showSelectSpatialEntityDialog,
                    "entityType": _vm.entityType
                },
                on: {
                    "closeSelection": _vm.closeSelectSpatialEntityDialog
                }
            }) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eieWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVYnP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a957d350dd1f4537");
    if (script.__esModule) script = script.default;
    script.render = require("fb86fb1561a4eb5b").render;
    script.staticRenderFns = require("fb86fb1561a4eb5b").staticRenderFns;
    script._scopeId = "data-v-80c813";
    script.__cssModules = require("f37bf822f7eef2d8").default;
    require("d131062c24ad9ae5").default(script);
    script.__scopeId = "data-v-80c813";
    script.__file = "inputConfiguration.vue";
};
initialize();
exports.default = script;

},{"a957d350dd1f4537":"fyhXn","fb86fb1561a4eb5b":"8ZE2u","f37bf822f7eef2d8":"cIt5N","d131062c24ad9ae5":"8gEax","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fyhXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _previewDialogVue = require("../previewDialog.vue");
var _previewDialogVueDefault = parcelHelpers.interopDefault(_previewDialogVue);
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "entityType",
        "followedEntity",
        "inputs"
    ],
    components: {
        "preview-dialog": (0, _previewDialogVueDefault.default)
    },
    data () {
        return {
            localInputs: this.inputs,
            showPreviewDialog: false,
            previewData: "",
            scannedRelations: ""
        };
    },
    created () {
        this.TRACK_METHOD = (0, _spinalModelAnalysis.TRACK_METHOD);
    },
    methods: {
        addInput () {
            console.log("clicked on button add input");
            this.$emit("addInput");
        },
        removeInput (index) {
            this.$emit("removeInput", index);
        },
        async getCapturedInputs (tracking, entity) {
            console.log("Calling getCapturedInputs tracking:", tracking);
            const capturedInput = await (0, _spinalModelAnalysis.spinalAnalyticService).applyTrackingMethodWithParams(entity, tracking.trackingMethod, tracking.filterValue, tracking.searchDepth, tracking.strictDepth, tracking.searchRelations.split((0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR)));
            if (!capturedInput) return "!! Not found !!";
            console.log("capturedInput :", capturedInput);
            if (tracking.trackingMethod === this.TRACK_METHOD.ATTRIBUTE_NAME_FILTER) {
                if (Array.isArray(capturedInput)) return capturedInput;
                return capturedInput.label.get();
            }
            if (Array.isArray(capturedInput)) return capturedInput.map((el)=>el.name.get());
            return capturedInput.name.get();
        },
        async scanRelations (tracking) {
            this.showPreviewDialog = true;
            this.previewData = "";
            console.log("Calling scanRelations");
            const followedEntityInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.followedEntity);
            const previewData = {};
            const entities = await (0, _spinalModelAnalysis.spinalAnalyticService).getWorkingFollowedEntitiesWithParam(followedEntityInfo, this.entityType);
            for (const subEntity of entities){
                let subEntityName = subEntity.name.get();
                subEntityName = subEntityName.replace(/(\r\n|\n|\r)/gm, "");
                const relations = await (0, _spinalModelAnalysis.getChoiceRelationsWithDepth)(subEntity.id.get(), tracking.searchDepth);
                previewData[subEntityName] = relations;
            }
            this.previewData = previewData;
        },
        async getPreviewAvailableData (tracking) {
            this.showPreviewDialog = true;
            this.previewData = "";
            console.log("Calling getPreviewAvailableData");
            const followedEntityInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.followedEntity);
            const entities = await (0, _spinalModelAnalysis.spinalAnalyticService).getWorkingFollowedEntitiesWithParam(followedEntityInfo, this.entityType);
            const previewData = {};
            for (const subEntity of entities){
                let subEntityName = subEntity.name.get();
                subEntityName = subEntityName.replace(/(\r\n|\n|\r)/gm, "");
                const availableData = await (0, _spinalModelAnalysis.getAvailableData)(tracking.trackingMethod, subEntity.id.get(), tracking.filterValue, tracking.searchDepth, tracking.strictDepth, tracking.searchRelations.split((0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR)));
                previewData[subEntityName] = availableData;
            }
            this.previewData = previewData;
        },
        async getPreviewData (tracking) {
            this.showPreviewDialog = true;
            this.previewData = "";
            console.log("Calling getPreviewData");
            const followedEntityInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.followedEntity);
            const entities = await (0, _spinalModelAnalysis.spinalAnalyticService).getWorkingFollowedEntitiesWithParam(followedEntityInfo, this.entityType);
            const previewData = {};
            for (const subEntity of entities){
                let subEntityName = subEntity.name.get();
                subEntityName = subEntityName.replace(/(\r\n|\n|\r)/gm, "");
                const capturedInputs = await this.getCapturedInputs(tracking, subEntity);
                previewData[subEntityName] = capturedInputs;
            }
            //this.previewData = JSON.stringify(previewData, null, 2);
            this.previewData = previewData;
        },
        /*async getPreviewData2(tracking) {
      this.showPreviewDialog = true;
      this.previewData = '';
      console.log('Calling getPreviewData');

      const followedEntityInfo = SpinalGraphService.getInfo(
        this.followedEntity
      );

      let followedEntityName = followedEntityInfo.name.get();
      followedEntityName = followedEntityName.replace(/(\r\n|\n|\r)/gm, "");

      const previewData = { [followedEntityName]: {} };

      if (this.entityType === followedEntityInfo.type.get()) {
        const capturedInputs = await this.getCapturedInputs(tracking,followedEntityInfo);
        previewData[followedEntityName] = capturedInputs;
      } else {
        const isGroup = followedEntityInfo.type.get().includes('Group');
        let subEntities;
        if (isGroup) {
          const relationNameToSubEntities = 'groupHas' + this.entityType;
          subEntities = await SpinalGraphService.getChildren(
            followedEntityInfo.id.get(),
            [relationNameToSubEntities]
          );
        } else {
          console.log('Getting sub entities through spatial context');
          const spatialContextId = SpinalGraphService.getContext('spatial').info.id.get();
          subEntities = await SpinalGraphService.findInContextByType(
          this.followedEntity,
          spatialContextId,
          this.entityType
          );
        }

        await this.updatePreviewData(tracking,subEntities, followedEntityName, previewData);
      }

      console.log('previewData :', previewData);
      //this.previewData = JSON.stringify(previewData, null, 2);
      this.previewData = previewData;
    },*/ closePreviewDialog () {
            this.showPreviewDialog = false;
        },
        isPreviewDisabled (tracking) {
            return !this.followedEntity || tracking.trackingMethod === "" || tracking.filterValue === "";
        },
        isShowAvailableDataDisabled (tracking) {
            return !this.followedEntity || tracking.trackingMethod === "";
        },
        showTimeSeriesField (tracking) {
            return tracking.trackingMethod === this.TRACK_METHOD.ENDPOINT_NAME_FILTER || tracking.trackingMethod === this.TRACK_METHOD.CONTROL_ENDPOINT_NAME_FILTER;
        }
    },
    computed: {
        isGlobalPreviewDisabled () {
            return true;
        },
        followedEntityName () {
            if (!this.followedEntity) return "";
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.followedEntity);
            console.log(info);
            return `${info.name.get()} | Type : ${info.type.get()} | Node id : ${info.id.get()}`;
        },
        prettyData () {
            return JSON.stringify(this.previewData, null, 2);
        }
    },
    watch: {
        inputs () {
            console.log("parent inputs changed");
            this.localInputs = this.inputs;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","spinal-env-viewer-graph-service":"9n7zp","../previewDialog.vue":"aDYQj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDYQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1d984236ef469248");
    if (script.__esModule) script = script.default;
    script.render = require("174e7b05869e11a9").render;
    script.staticRenderFns = require("174e7b05869e11a9").staticRenderFns;
    script._scopeId = "data-v-ba8e88";
    script.__cssModules = require("1288094a95e27ca4").default;
    require("7368bf4ac5988e14").default(script);
    script.__scopeId = "data-v-ba8e88";
    script.__file = "previewDialog.vue";
};
initialize();
exports.default = script;

},{"1d984236ef469248":"5B233","174e7b05869e11a9":"8ghF3","1288094a95e27ca4":"fF0T6","7368bf4ac5988e14":"ev11C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5B233":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "previewDialog",
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: String,
            required: true
        }
    },
    data: ()=>({}),
    methods: {
        close () {
            this.$emit("closeDialog");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ghF3":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
            staticClass: "mdDialog",
            attrs: {
                "md-click-outside-to-close": false,
                "md-close-on-esc": false,
                "md-active": _vm.visible
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.visible = $event;
                },
                "update:md-active": function($event) {
                    _vm.visible = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Preview captured data")
            ]),
            _vm._v(" "),
            _c("md-content", {
                staticClass: "content md-scrollbar"
            }, [
                _c("div", {
                    staticClass: "json-preview"
                }, [
                    _c("pre", [
                        _vm._v(_vm._s(_vm.data))
                    ])
                ])
            ]),
            _vm._v(" "),
            _c("md-dialog-actions", [
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.close
                    }
                }, [
                    _vm._v("Close")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fF0T6":[function() {},{}],"ev11C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZE2u":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.inputConfiguration,
            "md-label": "Inputs",
            "md-done": _vm.stepper.third
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "third", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "third", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("p", [
                _vm._v("Each tracking method is an input for an algorithm")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("\n      The "),
                _c("b", [
                    _vm._v("search depth")
                ]),
                _vm._v(" is how deep the program should search for the tracked item. If 0, only the infered followed entities of\n      the anchor will be considered.\n    ")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("\n      If the "),
                _c("b", [
                    _vm._v("strict depth")
                ]),
                _vm._v(" is true, the program will only consider the items found at exactly the given depth.\n    ")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("\n      The "),
                _c("b", [
                    _vm._v("search relations")
                ]),
                _vm._v(" are the relations that the program is allowed to use to find the tracked item.\n    ")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("\n      Timeseries interval time is how far in the past should the analytic gather data. Must be positive or null. If\n      null (equal 0), only the currentValue will be picked, otherwise, the\n      data will be picked from the current time at which the analytic will be\n      run to (currentTime - intervalTime). Beware, if the interval time > 0,\n      make sure the control-endpoint/ endpoint has timeseries.\n    ")
            ]),
            _vm._v(" "),
            _vm._l(Object.entries(_vm.localInputs), function(ref) {
                var inputName = ref[0];
                var value = ref[1];
                return _c("div", {
                    key: inputName,
                    staticClass: "trackingMethodBlock"
                }, [
                    _c("b", [
                        _vm._v("Input " + _vm._s(inputName))
                    ]),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Tracking Method")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            model: {
                                value: value.trackingMethod,
                                callback: function($$v) {
                                    _vm.$set(value, "trackingMethod", $$v);
                                },
                                expression: "value.trackingMethod"
                            }
                        }, _vm._l(_vm.TRACK_METHOD, function(data) {
                            return _c("md-option", {
                                key: data,
                                attrs: {
                                    "value": data
                                }
                            }, [
                                _vm._v(_vm._s(data))
                            ]);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    value.trackingMethod != "" ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" Search Depth ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number",
                                "min": "0"
                            },
                            model: {
                                value: value.searchDepth,
                                callback: function($$v) {
                                    _vm.$set(value, "searchDepth", $$v);
                                },
                                expression: "value.searchDepth"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary",
                        attrs: {
                            "disabled": _vm.isShowAvailableDataDisabled(value)
                        },
                        on: {
                            "click": function($event) {
                                return _vm.scanRelations(value);
                            }
                        }
                    }, [
                        _vm._v("\n        Scan relations\n      ")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary",
                        attrs: {
                            "disabled": _vm.isShowAvailableDataDisabled(value)
                        },
                        on: {
                            "click": function($event) {
                                return _vm.getPreviewAvailableData(value);
                            }
                        }
                    }, [
                        _vm._v("\n        Show available data\n      ")
                    ]),
                    _vm._v(" "),
                    value.trackingMethod != "" && value.searchDepth > 0 ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" \n          Search Relations separated by comma (example: hasBimObject,relation2,... )\n        ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: value.searchRelations,
                                callback: function($$v) {
                                    _vm.$set(value, "searchRelations", $$v);
                                },
                                expression: "value.searchRelations"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    value.trackingMethod != "" ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" Filter Value ( Case sensitive )")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: value.filterValue,
                                callback: function($$v) {
                                    _vm.$set(value, "filterValue", $$v);
                                },
                                expression: "value.filterValue"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    value.trackingMethod != "" && value.searchDepth > 0 ? _c("md-switch", {
                        model: {
                            value: value.strictDepth,
                            callback: function($$v) {
                                _vm.$set(value, "strictDepth", $$v);
                            },
                            expression: "value.strictDepth"
                        }
                    }, [
                        _vm._v("Data must be found at exactly depth " + _vm._s(value.searchDepth) + " : "),
                        _c("b", [
                            _vm._v(" " + _vm._s(value.strictDepth ? "Yes" : "No") + " ")
                        ])
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.showTimeSeriesField(value) ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" Timeseries interval time ( 0 to only take current value )")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number",
                                "min": "0"
                            },
                            model: {
                                value: value.timeseriesIntervalTime,
                                callback: function($$v) {
                                    _vm.$set(value, "timeseriesIntervalTime", $$v);
                                },
                                expression: "value.timeseriesIntervalTime"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-primary",
                        attrs: {
                            "disabled": _vm.isPreviewDisabled(value)
                        },
                        on: {
                            "click": function($event) {
                                return _vm.getPreviewData(value);
                            }
                        }
                    }, [
                        _vm._v("\n        Preview input\n      ")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.removeInput(inputName);
                            }
                        }
                    }, [
                        _vm._v("\n        Remove\n      ")
                    ])
                ], 1);
            }),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.addInput
                }
            }, [
                _vm._v("\n      Add Input\n    ")
            ])
        ], 2),
        _vm._v(" "),
        _c("preview-dialog", {
            attrs: {
                "visible": _vm.showPreviewDialog,
                "data": _vm.prettyData
            },
            on: {
                "closeDialog": _vm.closePreviewDialog
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cIt5N":[function() {},{}],"8gEax":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iND1t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e091034604a40aee");
    if (script.__esModule) script = script.default;
    script.render = require("49da852768d78444").render;
    script.staticRenderFns = require("49da852768d78444").staticRenderFns;
    script._scopeId = "data-v-981cf0";
    script.__cssModules = require("b39680976e629309").default;
    require("c3be97543a3ed817").default(script);
    script.__scopeId = "data-v-981cf0";
    script.__file = "triggerConfiguration.vue";
};
initialize();
exports.default = script;

},{"e091034604a40aee":"ayora","49da852768d78444":"6iUlG","b39680976e629309":"9w4Gs","c3be97543a3ed817":"kL2LO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayora":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _cronHelpDialogVue = require("../cronHelpDialog.vue");
var _cronHelpDialogVueDefault = parcelHelpers.interopDefault(_cronHelpDialogVue);
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "inputs",
        "triggers"
    ],
    components: {
        "cron-help-dialog": (0, _cronHelpDialogVueDefault.default)
    },
    data () {
        return {
            localTriggers: this.triggers,
            showPreviewDialog: false,
            showCronHelpModal: false,
            previewData: ""
        };
    },
    created () {
        this.TRIGGER_TYPE = (0, _spinalModelAnalysis.TRIGGER_TYPE);
    },
    methods: {
        addTrigger () {
            console.log("clicked on button add Trigger");
            this.$emit("addTrigger");
        },
        removeTrigger (triggerName) {
            this.$emit("removeTrigger", triggerName);
        },
        showInputSelection (triggerType) {
            return [
                (0, _spinalModelAnalysis.TRIGGER_TYPE).CHANGE_OF_VALUE_WITH_THRESHOLD,
                (0, _spinalModelAnalysis.TRIGGER_TYPE).CHANGE_OF_VALUE
            ].includes(triggerType);
        },
        showCronHelper () {
            this.showCronHelpModal = true;
            console.log("showCronHelper : ", this.showCronHelpModal);
        },
        resetInfo (triggerInfo) {
            console.log("reset info");
            triggerInfo.changeOfValueThreshold = null;
            triggerInfo.triggerValue = "";
        }
    },
    computed: {},
    watch: {
        triggers () {
            console.log("parent triggers changed");
            this.localTriggers = this.triggers;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","../cronHelpDialog.vue":"Amw1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Amw1x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3b92f30040eca814");
    if (script.__esModule) script = script.default;
    script.render = require("c4b4fddc6076f5c").render;
    script.staticRenderFns = require("c4b4fddc6076f5c").staticRenderFns;
    script._scopeId = "data-v-8bd822";
    script.__cssModules = require("1bb6326be9835e1").default;
    require("634f54cafa2b3756").default(script);
    script.__scopeId = "data-v-8bd822";
    script.__file = "cronHelpDialog.vue";
};
initialize();
exports.default = script;

},{"3b92f30040eca814":"gP19K","c4b4fddc6076f5c":"eLaQa","1bb6326be9835e1":"cB8lo","634f54cafa2b3756":"hMJFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gP19K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    props: [
        "showCronHelpModal"
    ],
    data () {
        return {};
    },
    methods: {
        closeDialog () {
            this.$emit("closeCronHelpDialog");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLaQa":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialog",
        attrs: {
            "md-click-outside-to-close": false,
            "md-close-on-esc": false,
            "md-active": _vm.showCronHelpModal
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showCronHelpModal = $event;
            },
            "update:md-active": function($event) {
                _vm.showCronHelpModal = $event;
            }
        }
    }, [
        _c("md-dialog-title", [
            _vm._v("Cron Pattern Guide")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("p", [
                _vm._v("This guide will help you understand how to create cron patterns for\n      scheduling tasks. A cron pattern is composed of five fields separated by a blank space: (minute) (hour) (day of the month) (month) (day of the week)")
            ]),
            _vm._v(" "),
            _c("ul", [
                _c("li", [
                    _c("strong", [
                        _vm._v("Minute")
                    ]),
                    _vm._v(" (0 - 59)")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("strong", [
                        _vm._v("Hour")
                    ]),
                    _vm._v(" (0 - 23)")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("strong", [
                        _vm._v("Day of the Month")
                    ]),
                    _vm._v(" (1 - 31)")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("strong", [
                        _vm._v("Month")
                    ]),
                    _vm._v(" (1 - 12 or JAN - DEC)")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("strong", [
                        _vm._v("Day of the Week")
                    ]),
                    _vm._v(" (0 - 7, where 0 or 7 is Sunday, or\n        SUN - SAT)")
                ])
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("A field may be an asterisk (*), which always stands for first-last")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("Ranges of numbers are allowed. Ranges are two numbers separated with a\n      hyphen. The specified range is inclusive. For example, 8-11 for an\n      ''hour'' entry specifies execution at hours 8, 9, 10 and 11.")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("Lists are allowed.  A list is a set of numbers (or ranges)\n           separated by commas.  Examples: ``1,2,5,9'', ``0-4,8-12''.")
            ]),
            _vm._v(" "),
            _c("p", [
                _vm._v("Here are some common examples:")
            ]),
            _vm._v(" "),
            _c("ul", [
                _c("li", [
                    _c("code", [
                        _vm._v("0 * * * *")
                    ]),
                    _vm._v(" - Every hour at the start of the hour.")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("code", [
                        _vm._v("30 9 * * 1")
                    ]),
                    _vm._v(" - Every Monday at 9:30 AM.")
                ]),
                _vm._v(" "),
                _c("li", [
                    _c("code", [
                        _vm._v("0 0 1 * *")
                    ]),
                    _vm._v(" - The first day of every month at\n        midnight.")
                ])
            ])
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog();
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

},{}],"cB8lo":[function() {},{}],"hMJFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iUlG":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.triggerConfiguration,
            "md-label": "Triggers",
            "md-done": _vm.stepper.fourth
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "fourth", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "fourth", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("p", [
                _vm._v("\n      A trigger is a condition that must be met for the analytic to be\n      executed. For exemple you can bind on one of the inputs to execute the\n      analytic when the value of the input is changed. Or you can add a time\n      based trigger that will make the analytic execute every 20000 ms ( 20s\n      ).\n    ")
            ]),
            _vm._v(" "),
            _vm._l(Object.entries(_vm.localTriggers), function(ref) {
                var triggerName = ref[0];
                var value = ref[1];
                return _c("div", {
                    key: triggerName,
                    staticClass: "block"
                }, [
                    _c("b", [
                        _vm._v("Trigger " + _vm._s(triggerName))
                    ]),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Trigger type")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            on: {
                                "md-selected": function($event) {
                                    return _vm.resetInfo(value);
                                }
                            },
                            model: {
                                value: value.triggerType,
                                callback: function($$v) {
                                    _vm.$set(value, "triggerType", $$v);
                                },
                                expression: "value.triggerType"
                            }
                        }, _vm._l(_vm.TRIGGER_TYPE, function(data) {
                            return _c("md-option", {
                                key: data,
                                attrs: {
                                    "value": data
                                }
                            }, [
                                _vm._v(_vm._s(data))
                            ]);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    value.triggerType == _vm.TRIGGER_TYPE.INTERVAL_TIME ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" Interval time value (ms) ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number",
                                "min": "0"
                            },
                            model: {
                                value: value.triggerValue,
                                callback: function($$v) {
                                    _vm.$set(value, "triggerValue", $$v);
                                },
                                expression: "value.triggerValue"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _vm.showInputSelection(value.triggerType) ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Input selection (which input do you want to use for change of value\n          tracking)")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            model: {
                                value: value.triggerValue,
                                callback: function($$v) {
                                    _vm.$set(value, "triggerValue", $$v);
                                },
                                expression: "value.triggerValue"
                            }
                        }, _vm._l(Object.keys(_vm.inputs), function(data) {
                            return _c("md-option", {
                                key: data,
                                attrs: {
                                    "value": data
                                }
                            }, [
                                _vm._v(_vm._s(data))
                            ]);
                        }), 1)
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    value.triggerType == _vm.TRIGGER_TYPE.CHANGE_OF_VALUE_WITH_THRESHOLD ? _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("\n          Threshold value (any change greater than treshold value will trigger\n          analytic)\n        ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number",
                                "min": "0"
                            },
                            model: {
                                value: value.changeOfValueThreshold,
                                callback: function($$v) {
                                    _vm.$set(value, "changeOfValueThreshold", $$v);
                                },
                                expression: "value.changeOfValueThreshold"
                            }
                        })
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    value.triggerType == _vm.TRIGGER_TYPE.CRON ? _c("div", [
                        _c("md-button", {
                            staticClass: "md-primary",
                            on: {
                                "click": _vm.showCronHelper
                            }
                        }, [
                            _vm._v(" Need help ?\n          "),
                            _c("md-icon", {
                                staticClass: "help-icon",
                                on: {
                                    "click": _vm.showCronHelper
                                }
                            }, [
                                _vm._v("help")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("md-field", {
                            staticClass: "fixed-size-field"
                        }, [
                            _c("label", [
                                _vm._v(" Cron pattern ")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                attrs: {
                                    "placeholder": "* * * * *"
                                },
                                model: {
                                    value: value.triggerValue,
                                    callback: function($$v) {
                                        _vm.$set(value, "triggerValue", $$v);
                                    },
                                    expression: "value.triggerValue"
                                }
                            })
                        ], 1)
                    ], 1) : _vm._e(),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.removeTrigger(triggerName);
                            }
                        }
                    }, [
                        _vm._v("\n        Remove\n      ")
                    ])
                ], 1);
            }),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.addTrigger
                }
            }, [
                _vm._v("\n      Add Trigger\n    ")
            ]),
            _vm._v(" "),
            _c("cron-help-dialog", {
                attrs: {
                    "showCronHelpModal": _vm.showCronHelpModal
                },
                on: {
                    "closeCronHelpDialog": function($event) {
                        _vm.showCronHelpModal = false;
                    }
                }
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9w4Gs":[function() {},{}],"kL2LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wAUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f21078e45b332751");
    if (script.__esModule) script = script.default;
    script.render = require("ac88efc713ea1b8e").render;
    script.staticRenderFns = require("ac88efc713ea1b8e").staticRenderFns;
    script._scopeId = "data-v-b2d24f";
    script.__cssModules = require("ee766329a47d2e89").default;
    require("615b599c90b8c4dd").default(script);
    script.__scopeId = "data-v-b2d24f";
    script.__file = "algorithmConfiguration.vue";
};
initialize();
exports.default = script;

},{"f21078e45b332751":"l2b12","ac88efc713ea1b8e":"5FKOA","ee766329a47d2e89":"4FDPi","615b599c90b8c4dd":"6RbWQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2b12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "entityType",
        "followedEntity",
        "inputs",
        "algorithms",
        "algorithms_parameters"
    ],
    components: {},
    data () {
        return {
            localAlgorithms: this.algorithms
        };
    },
    created () {
        this.algos = (0, _spinalModelAnalysis.algos);
    },
    methods: {
        addAlgorithm () {
            console.log("clicked on button add Algorithm");
            this.$emit("addAlgorithm");
        },
        removeAlgorithm (algoIndexName) {
            this.$emit("removeAlgorithm", algoIndexName);
        },
        resetParams (algoIndexName) {
            this.algorithms[algoIndexName].params = [];
        }
    },
    computed: {
        algo_names () {
            return Object.values((0, _spinalModelAnalysis.algos));
        }
    },
    watch: {
        algorithms () {
            console.log("parent algorithms changed");
            this.localAlgorithms = this.algorithms;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FKOA":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.algorithmConfiguration,
            "md-label": "Algorithms",
            "md-done": _vm.stepper.fifth
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "fifth", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "fifth", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("p", [
                _vm._v("\n      An algorithm is a function that the analytic uses to get the work done.\n      ")
            ]),
            _vm._v(" "),
            _vm._l(Object.keys(_vm.localAlgorithms), function(algorithmIndexName, index) {
                return _c("div", {
                    key: index,
                    staticClass: "block"
                }, [
                    _c("b", [
                        _vm._v("Algorithm " + _vm._s(algorithmIndexName))
                    ]),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Algorithm")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            on: {
                                "md-selected": function($event) {
                                    return _vm.resetParams(algorithmIndexName);
                                }
                            },
                            model: {
                                value: _vm.algorithms[algorithmIndexName].name,
                                callback: function($$v) {
                                    _vm.$set(_vm.algorithms[algorithmIndexName], "name", $$v);
                                },
                                expression: "algorithms[algorithmIndexName].name"
                            }
                        }, _vm._l(_vm.algo_names, function(data) {
                            return _c("md-option", {
                                key: data.name,
                                attrs: {
                                    "value": data.name
                                }
                            }, [
                                _vm._v(_vm._s(data.name))
                            ]);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    _vm.algorithms[algorithmIndexName].name != "" ? _c("div", [
                        _c("p", [
                            _c("strong", [
                                _vm._v(" Description : ")
                            ]),
                            _vm._v("\n        " + _vm._s(_vm.algos[_vm.algorithms[algorithmIndexName].name].description))
                        ])
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.algorithms[algorithmIndexName].name != "" ? _c("div", _vm._l(_vm.algos[_vm.algorithms[algorithmIndexName].name].requiredParams, function(item, index) {
                        return _c("md-field", {
                            key: index,
                            staticClass: "fixed-size-field"
                        }, [
                            _c("label", [
                                _vm._v(_vm._s(item.name) + ", " + _vm._s(item.description))
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                attrs: {
                                    "type": item.type
                                },
                                model: {
                                    value: _vm.algorithms[algorithmIndexName].params[index],
                                    callback: function($$v) {
                                        _vm.$set(_vm.algorithms[algorithmIndexName].params, index, $$v);
                                    },
                                    expression: "algorithms[algorithmIndexName].params[index]"
                                }
                            })
                        ], 1);
                    }), 1) : _vm._e(),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.removeAlgorithm(algorithmIndexName);
                            }
                        }
                    }, [
                        _vm._v("\n        Remove\n      ")
                    ])
                ], 1);
            }),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.addAlgorithm
                }
            }, [
                _vm._v("\n      Add Algorithm\n    ")
            ])
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4FDPi":[function() {},{}],"6RbWQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eI82n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("730f134da395dcd");
    if (script.__esModule) script = script.default;
    script.render = require("dd38818ea3b69c13").render;
    script.staticRenderFns = require("dd38818ea3b69c13").staticRenderFns;
    script._scopeId = "data-v-b5d979";
    require("a00646bce0539e1e").default(script);
    script.__scopeId = "data-v-b5d979";
    script.__file = "resultConfiguration.vue";
};
initialize();
exports.default = script;

},{"730f134da395dcd":"FcHzg","dd38818ea3b69c13":"3UaWm","a00646bce0539e1e":"g3zai","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FcHzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _spinalServiceTicket = require("spinal-service-ticket");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "resultName",
        "resultType",
        "ticketContextId",
        "ticketProcessId",
        "alarmPriority",
        "phoneNumber",
        "phoneMessage",
        "gChatMessage",
        "gChatSpaceName"
    ],
    components: {},
    data () {
        return {
            localResultName: this.resultName,
            localResultType: this.resultType,
            localIntervalTime: this.intervalTime,
            localTicketContextId: this.ticketContextId,
            localTicketProcessId: this.ticketProcessId,
            localAlarmPriority: this.alarmPriority,
            localPhoneNumber: this.phoneNumber,
            localPhoneMessage: this.phoneMessage,
            localGChatMessage: this.gChatMessage,
            localGChatSpaceName: this.gChatSpaceName,
            ticketProcesses: []
        };
    },
    created () {
        this.CONST_ANALYTIC_RESULT_TYPE = (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE);
        this.alarmContexts = (0, _spinalServiceTicket.spinalServiceTicket).getContexts();
    },
    methods: {
        update (key, value) {
            console.log("update ", key, value);
            this.$emit(`update:${key}`, value);
        },
        async refreshContextProcesses () {
            const processes = await (0, _spinalServiceTicket.spinalServiceTicket).getAllProcess(this.localTicketContextId);
            for (const process of processes)this.ticketProcesses.push({
                name: process.name.get(),
                id: process.id.get()
            });
        }
    },
    computed: {
        requireTicketLocalization () {
            return [
                this.CONST_ANALYTIC_RESULT_TYPE.TICKET,
                this.CONST_ANALYTIC_RESULT_TYPE.ALARM
            ].includes(this.localResultType);
        },
        requireAlarmPriority () {
            return this.localResultType == this.CONST_ANALYTIC_RESULT_TYPE.ALARM;
        },
        requirePhoneInformation () {
            return this.localResultType == this.CONST_ANALYTIC_RESULT_TYPE.SMS;
        },
        requireGChatInformation () {
            return [
                this.CONST_ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE,
                this.CONST_ANALYTIC_RESULT_TYPE.GCHAT_ORGAN_CARD
            ].includes(this.localResultType);
        }
    },
    watch: {
        resultName () {
            this.localResultName = this.resultName;
        },
        resultType () {
            this.localResultType = this.resultType;
        },
        ticketContextId () {
            this.localTicketContextId = this.ticketContextId;
            this.refreshContextProcesses();
        },
        ticketProcessId () {
            this.localTicketProcessId = this.ticketProcessId;
        },
        gChatMessage () {
            this.localGChatMessage = this.gChatMessage;
        },
        gChatSpaceName () {
            this.localGChatSpaceName = this.gChatSpaceName;
        },
        phoneNumber () {
            this.localPhoneNumber = this.phoneNumber;
        },
        phoneMessage () {
            this.localPhoneMessage = this.phoneMessage;
        },
        alarmPriority () {
            this.localAlarmPriority = this.alarmPriority;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","spinal-service-ticket":"gi7V0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UaWm":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.resultConfiguration,
            "md-label": "Result",
            "md-done": _vm.stepper.sixth
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "sixth", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "sixth", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("p", [
                _vm._v("\n      The result is the output of the analytic. It can be something that will be  created,\n       like a ticket, an alarm, or something\n       that must be modified, like a control endpoint.\n    ")
            ]),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Result name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "change": function($event) {
                            return _vm.update("resultName", _vm.localResultName);
                        }
                    },
                    model: {
                        value: _vm.localResultName,
                        callback: function($$v) {
                            _vm.localResultName = $$v;
                        },
                        expression: "localResultName"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Result type")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    on: {
                        "md-selected": function($event) {
                            return _vm.update("resultType", _vm.localResultType);
                        }
                    },
                    model: {
                        value: _vm.localResultType,
                        callback: function($$v) {
                            _vm.localResultType = $$v;
                        },
                        expression: "localResultType"
                    }
                }, _vm._l(_vm.CONST_ANALYTIC_RESULT_TYPE, function(data) {
                    return _c("md-option", {
                        key: data,
                        attrs: {
                            "value": data
                        }
                    }, [
                        _vm._v(_vm._s(data))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c("p", [
                _vm._v("\n      For ticket/alarm, result name will be used as part of the ticket/alarm name.\n      For control endpoints, result name will be used to find the control endpoint to update.\n      In some cases result name is not used at all.\n    ")
            ]),
            _vm._v(" "),
            _vm.requireTicketLocalization ? _c("div", [
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v(" Ticket/Alarm context ")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        on: {
                            "md-selected": function($event) {
                                return _vm.update("ticketContextId", _vm.localTicketContextId);
                            }
                        },
                        model: {
                            value: _vm.localTicketContextId,
                            callback: function($$v) {
                                _vm.localTicketContextId = $$v;
                            },
                            expression: "localTicketContextId"
                        }
                    }, _vm._l(_vm.alarmContexts, function(data) {
                        return _c("md-option", {
                            key: data.id,
                            attrs: {
                                "value": data.id
                            }
                        }, [
                            _vm._v(_vm._s(data.name))
                        ]);
                    }), 1)
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Ticket/Alarm process id ")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        on: {
                            "md-selected": function($event) {
                                return _vm.update("ticketProcessId", _vm.localTicketProcessId);
                            }
                        },
                        model: {
                            value: _vm.localTicketProcessId,
                            callback: function($$v) {
                                _vm.localTicketProcessId = $$v;
                            },
                            expression: "localTicketProcessId"
                        }
                    }, _vm._l(_vm.ticketProcesses, function(data) {
                        return _c("md-option", {
                            key: data.id,
                            attrs: {
                                "value": data.id
                            }
                        }, [
                            _vm._v(_vm._s(data.name))
                        ]);
                    }), 1)
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v(" Alarm priority ")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        attrs: {
                            "type": "number"
                        },
                        on: {
                            "change": function($event) {
                                return _vm.update("alarmPriority", _vm.localAlarmPriority);
                            }
                        },
                        model: {
                            value: _vm.localAlarmPriority,
                            callback: function($$v) {
                                _vm.localAlarmPriority = $$v;
                            },
                            expression: "localAlarmPriority"
                        }
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.requirePhoneInformation ? _c("div", [
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Phone number")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        on: {
                            "change": function($event) {
                                return _vm.update("phoneNumber", _vm.localPhoneNumber);
                            }
                        },
                        model: {
                            value: _vm.localPhoneNumber,
                            callback: function($$v) {
                                _vm.localPhoneNumber = $$v;
                            },
                            expression: "localPhoneNumber"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Message")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        attrs: {
                            "type": "text"
                        },
                        on: {
                            "change": function($event) {
                                return _vm.update("phoneMessage", _vm.localPhoneMessage);
                            }
                        },
                        model: {
                            value: _vm.localPhoneMessage,
                            callback: function($$v) {
                                _vm.localPhoneMessage = $$v;
                            },
                            expression: "localPhoneMessage"
                        }
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.requireGChatInformation ? _c("div", [
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Google chat space name")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        on: {
                            "change": function($event) {
                                return _vm.update("gChatSpaceName", _vm.localGChatSpaceName);
                            }
                        },
                        model: {
                            value: _vm.localGChatSpaceName,
                            callback: function($$v) {
                                _vm.localGChatSpaceName = $$v;
                            },
                            expression: "localGChatSpaceName"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Google chat message")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        attrs: {
                            "type": "text"
                        },
                        on: {
                            "change": function($event) {
                                return _vm.update("gChatMessage", _vm.localGChatMessage);
                            }
                        },
                        model: {
                            value: _vm.localGChatMessage,
                            callback: function($$v) {
                                _vm.localGChatMessage = $$v;
                            },
                            expression: "localGChatMessage"
                        }
                    })
                ], 1)
            ], 1) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"g3zai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wJ5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c7e8766049755e6");
    if (script.__esModule) script = script.default;
    script.render = require("7c58b3461bf9c840").render;
    script.staticRenderFns = require("7c58b3461bf9c840").staticRenderFns;
    script._scopeId = "data-v-764bfa";
    script.__cssModules = require("a117151e03e8bca0").default;
    require("52ee573fb9bbe7f9").default(script);
    script.__scopeId = "data-v-764bfa";
    script.__file = "IODependencies.vue";
};
initialize();
exports.default = script;

},{"c7e8766049755e6":"8nGA5","7c58b3461bf9c840":"amNig","a117151e03e8bca0":"8UBeU","52ee573fb9bbe7f9":"kEocn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nGA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inputSelectionTableVue = require("./inputSelectionTable.vue");
var _inputSelectionTableVueDefault = parcelHelpers.interopDefault(_inputSelectionTableVue);
var _vuedraggable = require("vuedraggable");
var _vuedraggableDefault = parcelHelpers.interopDefault(_vuedraggable);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "algorithms",
        "inputs",
        "ioDependencies"
    ],
    components: {
        draggable: (0, _vuedraggableDefault.default),
        "input-selection-table": (0, _inputSelectionTableVueDefault.default)
    },
    data () {
        return {
            showSelectionDialog: false,
            selectedAlgorithm: ""
        };
    },
    created () {},
    methods: {
        updateDependenciesOrder (algorithmIndexName) {
            console.log("Updated order for:", algorithmIndexName);
            console.log(this.ioDependencies[algorithmIndexName]);
        },
        showSelection (indexName) {
            this.selectedAlgorithm = indexName;
            this.showSelectionDialog = true;
        },
        closeSelectionDialog () {
            this.showSelectionDialog = false;
        },
        findExecutionOrder (dependencies) {
            const graph = {};
            const visited = {};
            const stack = [];
            const tempStack = []; // for cycle detection
            // Create graph from dependency map
            for (let algo of Object.keys(dependencies)){
                graph[algo] = graph[algo] || [];
                for (let dep of dependencies[algo]){
                    graph[dep] = graph[dep] || [];
                    graph[dep].push(algo);
                }
            }
            const visit = (node)=>{
                if (tempStack.includes(node)) return false; // cycle detected
                if (!visited[node]) {
                    visited[node] = true;
                    tempStack.push(node);
                    if (graph[node]) for (let neighbor of graph[node]){
                        if (!visit(neighbor)) return false; // propagate cycle detection
                    }
                    tempStack.pop();
                    stack.push(node);
                }
                return true;
            };
            for (let node of Object.keys(graph))if (!visited[node]) {
                if (!visit(node)) return null; // cycle detected
            }
            return stack.filter((x)=>x.startsWith("A"));
        },
        saveSelectedDependencies (selectedItems) {
            console.log("saving selected dependencies : ", selectedItems);
            console.log(" to ", this.selectedAlgorithm);
            let indexNames = selectedItems.map((item)=>item.indexName);
            this.ioDependencies[this.selectedAlgorithm] = indexNames;
            console.log("ioDependencies : ", this.ioDependencies);
            const executionOrder = this.findExecutionOrder(this.ioDependencies);
            console.log("executionOrder : ", executionOrder);
        }
    },
    computed: {},
    watch: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./inputSelectionTable.vue":"bzqdG","vuedraggable":"1J17x","spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzqdG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cd457242a4aebf43");
    if (script.__esModule) script = script.default;
    script.render = require("3f4905037d909310").render;
    script.staticRenderFns = require("3f4905037d909310").staticRenderFns;
    script._scopeId = "data-v-7aa437";
    script.__cssModules = require("cc903ab60d3a7548").default;
    require("c950a0cfb7a97d39").default(script);
    script.__scopeId = "data-v-7aa437";
    script.__file = "inputSelectionTable.vue";
};
initialize();
exports.default = script;

},{"cd457242a4aebf43":"3KWVw","3f4905037d909310":"dbEjt","cc903ab60d3a7548":"9a5zF","c950a0cfb7a97d39":"kY21n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KWVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    props: [
        "selectedAlgorithm",
        "algorithms",
        "inputs",
        "showSelectionDialog"
    ],
    components: {},
    data () {
        return {
            selectedInputs: [],
            selectedAlgorithms: []
        };
    },
    created () {},
    methods: {
        deleteAllInputSelection () {
            console.log("deleteAllInputSelection");
            this.selectedInputs = [];
        },
        deleteAllAlgoSelection () {
            this.selectedAlgorithms = [];
        },
        closeDialog () {
            this.selectedAlgorithms = [];
            this.selectedInputs = [];
            this.$emit("closeSelectionDialog");
        },
        sendSelected () {
            this.$emit("sendSelectedInputs", this.selectedInputs.concat(this.selectedAlgorithms));
            this.$emit("closeSelectionDialog");
            this.selectedAlgorithms = [];
            this.selectedInputs = [];
            console.log("sendSelectedEvent :", this.selectedAlgorithms);
        },
        onSelectInput (items) {
            console.log("onSelectInputEvent :", items);
            this.selectedInputs = items;
        },
        onSelectAlgorithm (items) {
            console.log("onSelectAlgorithmEvent :", items);
            this.selectedAlgorithms = items;
        },
        getAlternateLabel (count) {
            let plural = "";
            if (count > 1) plural = "s";
            return `${count} Item${plural} selected`;
        },
        flattenObject (obj) {
            const flattened = [];
            for(let key in obj)if (obj.hasOwnProperty(key)) {
                const flatItem = {
                    indexName: key,
                    ...obj[key]
                };
                flattened.push(flatItem);
            }
            return flattened;
        },
        disableSameAlgorithmSelection (indexName) {
            return indexName == this.selectedAlgorithm;
        }
    },
    computed: {
        inputListComputed: {
            get () {
                return this.flattenObject(this.inputs);
            },
            set (newValue) {}
        },
        algorithmListComputed: {
            get () {
                return this.flattenObject(this.algorithms);
            },
            set (newValue) {}
        },
        isResultSelection () {
            return this.selectedAlgorithm == "R";
        }
    },
    watch: {}
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbEjt":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialog",
        attrs: {
            "md-click-outside-to-close": false,
            "md-close-on-esc": false,
            "md-active": _vm.showSelectionDialog
        },
        on: {
            "update:mdActive": function($event) {
                _vm.showSelectionDialog = $event;
            },
            "update:md-active": function($event) {
                _vm.showSelectionDialog = $event;
            }
        }
    }, [
        _c("md-table", {
            staticClass: "table",
            attrs: {
                "md-card": "",
                "md-selected-value": _vm.selectedInputs
            },
            on: {
                "md-selected": _vm.onSelectInput,
                "update:mdSelectedValue": function($event) {
                    _vm.selectedInputs = $event;
                },
                "update:md-selected-value": function($event) {
                    _vm.selectedInputs = $event;
                }
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-alternate-header",
                    fn: function(ref) {
                        var count = ref.count;
                        return _c("md-table-toolbar", {}, [
                            _c("div", {
                                staticClass: "md-toolbar-section-start"
                            }, [
                                _vm._v(_vm._s(_vm.getAlternateLabel(count)))
                            ]),
                            _vm._v(" "),
                            _c("div", {
                                staticClass: "md-toolbar-section-end"
                            }, [
                                _c("md-button", {
                                    staticClass: "md-icon-button delete-button",
                                    on: {
                                        "click": _vm.deleteAllInputSelection
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("delete")
                                    ])
                                ], 1)
                            ], 1)
                        ]);
                    }
                },
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c("md-table-row", {
                            class: {
                                "disabled-row": _vm.isResultSelection
                            },
                            attrs: {
                                "md-selectable": "multiple",
                                "md-auto-select": "",
                                "md-disabled": _vm.isResultSelection
                            }
                        }, [
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Index Name"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.indexName) + " ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Tracking Method"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.trackingMethod) + " ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Filter value"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.filterValue) + " ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-numeric": "",
                                    "md-label": "Timeseries"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.timeseriesIntervalTime) + " ")
                            ])
                        ], 1);
                    }
                }
            ]),
            model: {
                value: _vm.inputListComputed,
                callback: function($$v) {
                    _vm.inputListComputed = $$v;
                },
                expression: "inputListComputed"
            }
        }, [
            _c("md-table-toolbar", [
                _c("h1", {
                    staticClass: "md-title table-title"
                }, [
                    _vm._v("Inputs")
                ])
            ])
        ], 1),
        _vm._v(" "),
        _c("md-table", {
            staticClass: "table",
            attrs: {
                "md-card": "",
                "md-selected-value": _vm.selectedAlgorithms
            },
            on: {
                "md-selected": _vm.onSelectAlgorithm,
                "update:mdSelectedValue": function($event) {
                    _vm.selectedAlgorithms = $event;
                },
                "update:md-selected-value": function($event) {
                    _vm.selectedAlgorithms = $event;
                }
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-alternate-header",
                    fn: function(ref) {
                        var count = ref.count;
                        return _c("md-table-toolbar", {}, [
                            _c("div", {
                                staticClass: "md-toolbar-section-start"
                            }, [
                                _vm._v(_vm._s(_vm.getAlternateLabel(count)))
                            ]),
                            _vm._v(" "),
                            _c("div", {
                                staticClass: "md-toolbar-section-end"
                            }, [
                                _c("md-button", {
                                    staticClass: "md-icon-button",
                                    on: {
                                        "click": _vm.deleteAllAlgoSelection
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("delete")
                                    ])
                                ], 1)
                            ], 1)
                        ]);
                    }
                },
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c("md-table-row", {
                            class: {
                                "disabled-row": _vm.disableSameAlgorithmSelection(item.indexName)
                            },
                            attrs: {
                                "md-selectable": _vm.isResultSelection ? "single" : "multiple",
                                "md-auto-select": "",
                                "md-disabled": _vm.disableSameAlgorithmSelection(item.indexName)
                            }
                        }, [
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Index Name"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.indexName) + " ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Algorithm name"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.name) + " ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Parameters"
                                }
                            }, [
                                _vm._v(" " + _vm._s(item.params) + " ")
                            ])
                        ], 1);
                    }
                }
            ]),
            model: {
                value: _vm.algorithmListComputed,
                callback: function($$v) {
                    _vm.algorithmListComputed = $$v;
                },
                expression: "algorithmListComputed"
            }
        }, [
            _c("md-table-toolbar", [
                _c("h1", {
                    staticClass: "md-title table-title"
                }, [
                    _vm._v("Algorithms")
                ])
            ])
        ], 1),
        _vm._v(" "),
        _c("md-dialog-actions", {
            staticClass: "dialog-actions"
        }, [
            _c("md-button", {
                staticClass: "md-accent action-button",
                on: {
                    "click": _vm.closeDialog
                }
            }, [
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary action-button",
                on: {
                    "click": _vm.sendSelected
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

},{}],"9a5zF":[function() {},{}],"kY21n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amNig":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.IODependencies,
            "md-label": "IO",
            "md-done": _vm.stepper.seventh
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "seventh", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "seventh", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            Object.keys(_vm.algorithms).length == 0 ? _c("div", [
                _c("p", [
                    _c("b", [
                        _vm._v("Warning")
                    ]),
                    _vm._v("\n        An analytic must have a minimum of 1 algorithm. Please add an\n        algorithm first\n      ")
                ])
            ]) : _c("div", [
                _c("p", [
                    _vm._v("\n        Dependencies :\n      ")
                ]),
                _vm._v(" "),
                _c("md-list", [
                    _c("md-list-item", {
                        staticClass: "pretty-list-item"
                    }, [
                        _vm._v("\n          R (Result) : \n            "),
                        _c("div", {
                            staticClass: "draggable-item"
                        }, [
                            _vm._v("\n              Final Result : " + _vm._s(_vm.ioDependencies["R"][0]) + "\n            ")
                        ]),
                        _vm._v(" "),
                        _c("md-button", {
                            on: {
                                "click": function($event) {
                                    return _vm.showSelection("R");
                                }
                            }
                        }, [
                            _vm._v("Select dependencies")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _vm._l(Object.keys(_vm.algorithms), function(algorithmIndexName, index) {
                        return _c("md-list-item", {
                            key: index,
                            staticClass: "pretty-list-item"
                        }, [
                            _vm._v("\n          " + _vm._s(algorithmIndexName) + " : \n        \n      "),
                            _c("draggable", {
                                on: {
                                    "end": function($event) {
                                        return _vm.updateDependenciesOrder(algorithmIndexName);
                                    }
                                },
                                model: {
                                    value: _vm.ioDependencies[algorithmIndexName],
                                    callback: function($$v) {
                                        _vm.$set(_vm.ioDependencies, algorithmIndexName, $$v);
                                    },
                                    expression: "ioDependencies[algorithmIndexName]"
                                }
                            }, _vm._l(_vm.ioDependencies[algorithmIndexName], function(dep, indexDep) {
                                return _c("div", {
                                    key: dep,
                                    staticClass: "draggable-item"
                                }, [
                                    _vm._v("\n          Input " + _vm._s(indexDep + 1) + " : " + _vm._s(dep) + "\n        ")
                                ]);
                            }), 0),
                            _vm._v(" "),
                            _c("md-button", {
                                on: {
                                    "click": function($event) {
                                        return _vm.showSelection(algorithmIndexName);
                                    }
                                }
                            }, [
                                _vm._v("Select dependencies")
                            ])
                        ], 1);
                    })
                ], 2)
            ], 1),
            _vm._v(" "),
            _c("input-selection-table", {
                attrs: {
                    "algorithms": _vm.algorithms,
                    "inputs": _vm.inputs,
                    "ioDependencies": _vm.ioDependencies,
                    "showSelectionDialog": _vm.showSelectionDialog,
                    "selectedAlgorithm": _vm.selectedAlgorithm
                },
                on: {
                    "closeSelectionDialog": _vm.closeSelectionDialog,
                    "sendSelectedInputs": _vm.saveSelectedDependencies
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8UBeU":[function() {},{}],"kEocn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SuJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a7d48d01c2900944");
    if (script.__esModule) script = script.default;
    script.render = require("c82c8a04709c5c39").render;
    script.staticRenderFns = require("c82c8a04709c5c39").staticRenderFns;
    script._scopeId = "data-v-a83cb9";
    require("7bdb5b575d989e53").default(script);
    script.__scopeId = "data-v-a83cb9";
    script.__file = "configuration.vue";
};
initialize();
exports.default = script;

},{"a7d48d01c2900944":"1oVcP","c82c8a04709c5c39":"44yBB","7bdb5b575d989e53":"1nnW1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oVcP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "inputs",
        "algorithm",
        "algorithmParameters",
        "resultName",
        "resultType",
        "intervalTime",
        "ticketContextId",
        "ticketProcessId",
        "alarmPriority",
        "triggerAtStart",
        "phoneNumber",
        "phoneMessage"
    ],
    components: {},
    data () {
        return {
            localAlgorithm: this.algorithm,
            localAlgorithmParameters: this.algorithmParameters,
            localResultName: this.resultName,
            localResultType: this.resultType,
            localIntervalTime: this.intervalTime,
            localTicketContextId: this.ticketContextId,
            localTicketProcessId: this.ticketProcessId,
            localAlarmPriority: this.alarmPriority,
            localPhoneNumber: this.phoneNumber,
            localPhoneMessage: this.phoneMessage,
            localTriggerAtStart: this.triggerAtStart
        };
    },
    created () {
        this.CONST_ANALYTIC_RESULT_TYPE = (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE);
    },
    methods: {
        update (key, value) {
            console.log("update ", key, value);
            if (key == "algorithm" && this.algorithm != value) this.update("algorithmParameters", []);
            this.$emit(`update:${key}`, value);
        }
    },
    computed: {
        algo_names () {
            return Object.values((0, _spinalModelAnalysis.algos));
        },
        algos () {
            return 0, _spinalModelAnalysis.algos;
        },
        requireTicketLocalization () {
            return [
                this.CONST_ANALYTIC_RESULT_TYPE.TICKET,
                this.CONST_ANALYTIC_RESULT_TYPE.ALARM
            ].includes(this.localResultType);
        },
        requireAlarmPriority () {
            return this.localResultType == this.CONST_ANALYTIC_RESULT_TYPE.ALARM;
        },
        requirePhoneInformation () {
            return this.localResultType == this.CONST_ANALYTIC_RESULT_TYPE.SMS;
        }
    },
    watch: {
        algorithm () {
            this.localAlgorithm = this.algorithm;
        },
        algorithmParameters () {
            this.localAlgorithmParameters = this.algorithmParameters;
        },
        resultName () {
            this.localResultName = this.resultName;
        },
        resultType () {
            this.localResultType = this.resultType;
        },
        intervalTime () {
            this.localIntervalTime = this.intervalTime;
        },
        ticketContextId () {
            this.localTicketContextId = this.ticketContextId;
        },
        ticketProcessId () {
            this.localTicketProcessId = this.ticketProcessId;
        },
        alarmPriority () {
            this.localAlarmPriority = this.alarmPriority;
        },
        triggerAtStart () {
            this.localTriggerAtStart = this.triggerAtStart;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44yBB":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.config,
            "md-label": "Configuration",
            "md-done": _vm.stepper.fourth
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "fourth", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "fourth", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Algorithm")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    on: {
                        "md-selected": function($event) {
                            return _vm.update("algorithm", _vm.localAlgorithm);
                        }
                    },
                    model: {
                        value: _vm.localAlgorithm,
                        callback: function($$v) {
                            _vm.localAlgorithm = $$v;
                        },
                        expression: "localAlgorithm"
                    }
                }, _vm._l(_vm.algo_names, function(data) {
                    return _c("md-option", {
                        key: data.name,
                        attrs: {
                            "value": data.name
                        }
                    }, [
                        _vm._v(_vm._s(data.name))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _vm.algorithm != "" ? _c("div", [
                _c("p", [
                    _c("strong", [
                        _vm._v(" Description : ")
                    ]),
                    _vm._v("\n        " + _vm._s(_vm.algos[_vm.algorithm].description))
                ])
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.algorithm != "" ? _c("div", [
                _vm.algos[_vm.algorithm].requiredParams == "boolean" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
                    return _c("div", {
                        key: index,
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" " + _vm._s(index) + " ")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            attrs: {
                                "value": "false"
                            }
                        }, [
                            _vm._v("\n          False\n        ")
                        ]),
                        _vm._v(" "),
                        _c("md-radio", {
                            attrs: {
                                "value": "true"
                            }
                        }, [
                            _vm._v("\n          True\n        ")
                        ])
                    ], 1);
                }), 0) : _vm.algos[_vm.algorithm].requiredParams == "number" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
                    return _c("md-field", {
                        key: index,
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" " + _vm._s(index) + " ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number"
                            },
                            on: {
                                "change": function($event) {
                                    return _vm.update("algorithmParameters", _vm.localAlgorithmParameters);
                                }
                            },
                            model: {
                                value: _vm.localAlgorithmParameters[index],
                                callback: function($$v) {
                                    _vm.$set(_vm.localAlgorithmParameters, index, $$v);
                                },
                                expression: "localAlgorithmParameters[index]"
                            }
                        })
                    ], 1);
                }), 1) : _vm.algos[_vm.algorithm].requiredParams == "string" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
                    return _c("md-field", {
                        key: index,
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(" " + _vm._s(index) + " ")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            on: {
                                "change": function($event) {
                                    return _vm.update("algorithmParameters", _vm.localAlgorithmParameters);
                                }
                            },
                            model: {
                                value: _vm.localAlgorithmParameters[index],
                                callback: function($$v) {
                                    _vm.$set(_vm.localAlgorithmParameters, index, $$v);
                                },
                                expression: "localAlgorithmParameters[index]"
                            }
                        })
                    ], 1);
                }), 1) : _c("div", _vm._l(_vm.algos[_vm.algorithm].requiredParams, function(item, index) {
                    return _c("md-field", {
                        key: index,
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v(_vm._s(item.name) + ", " + _vm._s(item.description))
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": item.type
                            },
                            on: {
                                "change": function($event) {
                                    return _vm.update("algorithmParameters", _vm.localAlgorithmParameters);
                                }
                            },
                            model: {
                                value: _vm.localAlgorithmParameters[index],
                                callback: function($$v) {
                                    _vm.$set(_vm.localAlgorithmParameters, index, $$v);
                                },
                                expression: "localAlgorithmParameters[index]"
                            }
                        })
                    ], 1);
                }), 1)
            ]) : _vm._e(),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Result name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "change": function($event) {
                            return _vm.update("resultName", _vm.localResultName);
                        }
                    },
                    model: {
                        value: _vm.localResultName,
                        callback: function($$v) {
                            _vm.localResultName = $$v;
                        },
                        expression: "localResultName"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Result type")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    on: {
                        "md-selected": function($event) {
                            return _vm.update("resultType", _vm.localResultType);
                        }
                    },
                    model: {
                        value: _vm.localResultType,
                        callback: function($$v) {
                            _vm.localResultType = $$v;
                        },
                        expression: "localResultType"
                    }
                }, _vm._l(_vm.CONST_ANALYTIC_RESULT_TYPE, function(data) {
                    return _c("md-option", {
                        key: data,
                        attrs: {
                            "value": data
                        }
                    }, [
                        _vm._v(_vm._s(data))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _vm.requireTicketLocalization ? _c("div", [
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Ticket/Alarm context id")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        on: {
                            "change": function($event) {
                                return _vm.update("ticketContextId", _vm.localTicketContextId);
                            }
                        },
                        model: {
                            value: _vm.localTicketContextId,
                            callback: function($$v) {
                                _vm.localTicketContextId = $$v;
                            },
                            expression: "localTicketContextId"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Ticket/Alarm process id ")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        on: {
                            "change": function($event) {
                                return _vm.update("ticketProcessId", _vm.localTicketProcessId);
                            }
                        },
                        model: {
                            value: _vm.localTicketProcessId,
                            callback: function($$v) {
                                _vm.localTicketProcessId = $$v;
                            },
                            expression: "localTicketProcessId"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v(" Alarm priority ")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        attrs: {
                            "type": "number"
                        },
                        on: {
                            "change": function($event) {
                                return _vm.update("alarmPriority", _vm.localAlarmPriority);
                            }
                        },
                        model: {
                            value: _vm.localAlarmPriority,
                            callback: function($$v) {
                                _vm.localAlarmPriority = $$v;
                            },
                            expression: "localAlarmPriority"
                        }
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.requirePhoneInformation ? _c("div", [
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Phone number")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        on: {
                            "change": function($event) {
                                return _vm.update("phoneNumber", _vm.localPhoneNumber);
                            }
                        },
                        model: {
                            value: _vm.localPhoneNumber,
                            callback: function($$v) {
                                _vm.localPhoneNumber = $$v;
                            },
                            expression: "localPhoneNumber"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    staticClass: "fixed-size-field"
                }, [
                    _c("label", [
                        _vm._v("Message")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        attrs: {
                            "type": "text"
                        },
                        on: {
                            "change": function($event) {
                                return _vm.update("phoneMessage", _vm.localPhoneMessage);
                            }
                        },
                        model: {
                            value: _vm.localPhoneMessage,
                            callback: function($$v) {
                                _vm.localPhoneMessage = $$v;
                            },
                            expression: "localPhoneMessage"
                        }
                    })
                ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _c("md-field", {
                staticClass: "fixed-size-field"
            }, [
                _c("label", [
                    _vm._v("Interval time (ms), 0 will make the analytic behave in COV\n        mode")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    attrs: {
                        "type": "number"
                    },
                    on: {
                        "change": function($event) {
                            return _vm.update("intervalTime", _vm.localIntervalTime);
                        }
                    },
                    model: {
                        value: _vm.localIntervalTime,
                        callback: function($$v) {
                            _vm.localIntervalTime = $$v;
                        },
                        expression: "localIntervalTime"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-switch", {
                on: {
                    "change": function($event) {
                        return _vm.update("triggerAtStart", _vm.localTriggerAtStart);
                    }
                },
                model: {
                    value: _vm.localTriggerAtStart,
                    callback: function($$v) {
                        _vm.localTriggerAtStart = $$v;
                    },
                    expression: "localTriggerAtStart"
                }
            }, [
                _vm._v(" Trigger instantly when organs starts ")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1nnW1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IrTN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5aba7bdd1790b848");
    if (script.__esModule) script = script.default;
    script.render = require("b92ecc6f89af854c").render;
    script.staticRenderFns = require("b92ecc6f89af854c").staticRenderFns;
    script._scopeId = "data-v-95f69c";
    script.__cssModules = require("f78316d3492726cb").default;
    require("c88d640afaf2a223").default(script);
    script.__scopeId = "data-v-95f69c";
    script.__file = "summary.vue";
};
initialize();
exports.default = script;

},{"5aba7bdd1790b848":"6MkYI","b92ecc6f89af854c":"aTIBH","f78316d3492726cb":"aCRXR","c88d640afaf2a223":"6slOB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MkYI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    props: [
        "STEPPERS_DATA",
        "stepper",
        "analyticName",
        "trackingMethods",
        "followedEntity",
        "algorithm",
        "algorithmParameters",
        "resultName",
        "resultType",
        "intervalTime"
    ],
    data () {
        return {};
    },
    methods: {},
    computed: {
        summaryList () {
            return [
                {
                    label: "Analytic Name",
                    value: this.analyticName
                },
                {
                    label: "Tracking Methods",
                    value: JSON.stringify(this.trackingMethods)
                },
                {
                    label: "Followed Entity",
                    value: this.followedEntity
                },
                {
                    label: "Algorithm",
                    value: this.algorithm
                },
                {
                    label: "Algorithm Parameters",
                    value: JSON.stringify(this.algorithmParameters)
                },
                {
                    label: "Result Name",
                    value: this.resultName
                },
                {
                    label: "Result Type",
                    value: this.resultType
                },
                {
                    label: "Interval Time (ms)",
                    value: this.intervalTime
                }
            ];
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTIBH":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-step", {
        staticClass: "mdStep",
        attrs: {
            "id": _vm.STEPPERS_DATA.summary,
            "md-label": "Summary",
            "md-done": _vm.stepper.eighth
        },
        on: {
            "update:mdDone": function($event) {
                return _vm.$set(_vm.stepper, "eighth", $event);
            },
            "update:md-done": function($event) {
                return _vm.$set(_vm.stepper, "eighth", $event);
            }
        }
    }, [
        _c("md-content", {
            staticClass: "contents md-scrollbar"
        }, [
            _c("p", [
                _vm._v("\n      Please check that all the information are correct before saving the\n      analytic.\n    ")
            ]),
            _vm._v(" "),
            _vm._l(_vm.summaryList, function(field, index) {
                return _c("div", {
                    key: index,
                    staticClass: "summary-item"
                }, [
                    _c("strong", [
                        _vm._v(_vm._s(field.label) + ":")
                    ]),
                    _vm._v("\n      " + _vm._s(field.value === "" ? "Missing !" : field.value) + "\n    ")
                ]);
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aCRXR":[function() {},{}],"6slOB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k875b":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialog",
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
        _c("md-dialog-title", {
            staticClass: "mdDialogTitle"
        }, [
            _vm._v(" Create Analytic ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _c("md-steppers", {
                attrs: {
                    "md-active-step": _vm.stepper.active,
                    "md-linear": ""
                },
                on: {
                    "update:mdActiveStep": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "update:md-active-step": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "md-changed": _vm.changeStep
                }
            }, [
                _c("analytic-name", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "analyticName": _vm.analyticName,
                        "analyticDescription": _vm.analyticDescription,
                        "analyticShouldTriggerAtStart": _vm.analyticShouldTriggerAtStart,
                        "analyticStatus": _vm.analyticStatus,
                        "editable": true
                    },
                    on: {
                        "update:analyticName": function($event) {
                            _vm.analyticName = $event;
                        },
                        "update:analytic-name": function($event) {
                            _vm.analyticName = $event;
                        },
                        "update:analyticDescription": function($event) {
                            _vm.analyticDescription = $event;
                        },
                        "update:analytic-description": function($event) {
                            _vm.analyticDescription = $event;
                        },
                        "update:analyticShouldTriggerAtStart": function($event) {
                            _vm.analyticShouldTriggerAtStart = $event;
                        },
                        "update:analytic-should-trigger-at-start": function($event) {
                            _vm.analyticShouldTriggerAtStart = $event;
                        },
                        "update:analyticStatus": function($event) {
                            _vm.analyticStatus = $event;
                        },
                        "update:analytic-status": function($event) {
                            _vm.analyticStatus = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("followed-entity", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "entityType": _vm.entityType,
                        "followedEntity": _vm.followedEntity
                    },
                    on: {
                        "update:followedEntity": function($event) {
                            _vm.followedEntity = $event;
                        },
                        "update:followed-entity": function($event) {
                            _vm.followedEntity = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("input-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "entityType": _vm.entityType,
                        "followedEntity": _vm.followedEntity,
                        "inputs": _vm.inputs
                    },
                    on: {
                        "addInput": _vm.addInput,
                        "removeInput": _vm.removeInput,
                        "update:inputs": function($event) {
                            _vm.inputs = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("trigger-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "triggers": _vm.triggers
                    },
                    on: {
                        "addTrigger": _vm.addTrigger,
                        "removeTrigger": _vm.removeTrigger,
                        "update:triggers": function($event) {
                            _vm.triggers = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("algorithm-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "algorithms": _vm.algorithms
                    },
                    on: {
                        "addAlgorithm": _vm.addAlgorithm,
                        "removeAlgorithm": _vm.removeAlgorithm,
                        "update:algorithms": function($event) {
                            _vm.algorithms = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("result-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "resultName": _vm.resultName,
                        "resultType": _vm.resultType,
                        "intervalTime": _vm.intervalTime,
                        "ticketContextId": _vm.ticketContextId,
                        "ticketProcessId": _vm.ticketProcessId,
                        "phoneNumber": _vm.phoneNumber,
                        "phoneMessage": _vm.phoneMessage,
                        "gChatMessage": _vm.gChatMessage,
                        "gChatSpaceName": _vm.gChatSpaceName,
                        "alarmPriority": _vm.alarmPriority
                    },
                    on: {
                        "update:resultName": function($event) {
                            _vm.resultName = $event;
                        },
                        "update:result-name": function($event) {
                            _vm.resultName = $event;
                        },
                        "update:resultType": function($event) {
                            _vm.resultType = $event;
                        },
                        "update:result-type": function($event) {
                            _vm.resultType = $event;
                        },
                        "update:intervalTime": function($event) {
                            _vm.intervalTime = $event;
                        },
                        "update:interval-time": function($event) {
                            _vm.intervalTime = $event;
                        },
                        "update:ticketContextId": function($event) {
                            _vm.ticketContextId = $event;
                        },
                        "update:ticket-context-id": function($event) {
                            _vm.ticketContextId = $event;
                        },
                        "update:ticketProcessId": function($event) {
                            _vm.ticketProcessId = $event;
                        },
                        "update:ticket-process-id": function($event) {
                            _vm.ticketProcessId = $event;
                        },
                        "update:phoneNumber": function($event) {
                            _vm.phoneNumber = $event;
                        },
                        "update:phone-number": function($event) {
                            _vm.phoneNumber = $event;
                        },
                        "update:phoneMessage": function($event) {
                            _vm.phoneMessage = $event;
                        },
                        "update:phone-message": function($event) {
                            _vm.phoneMessage = $event;
                        },
                        "update:gChatMessage": function($event) {
                            _vm.gChatMessage = $event;
                        },
                        "update:g-chat-message": function($event) {
                            _vm.gChatMessage = $event;
                        },
                        "update:gChatSpaceName": function($event) {
                            _vm.gChatSpaceName = $event;
                        },
                        "update:g-chat-space-name": function($event) {
                            _vm.gChatSpaceName = $event;
                        },
                        "update:alarmPriority": function($event) {
                            _vm.alarmPriority = $event;
                        },
                        "update:alarm-priority": function($event) {
                            _vm.alarmPriority = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("io-dependencies", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "algorithms": _vm.algorithms,
                        "ioDependencies": _vm.ioDependencies
                    },
                    on: {
                        "update:ioDependencies": function($event) {
                            _vm.ioDependencies = $event;
                        },
                        "update:io-dependencies": function($event) {
                            _vm.ioDependencies = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("summary-analytic", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "analyticName": _vm.analyticName,
                        "trackingMethods": _vm.trackingMethods,
                        "followedEntity": _vm.followedEntity,
                        "algorithm": _vm.algorithm,
                        "algorithmParameters": _vm.algorithmParameters,
                        "resultName": _vm.resultName,
                        "resultType": _vm.resultType,
                        "intervalTime": _vm.intervalTime
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
            _vm.stepper.active !== this.STEPPERS_DATA.summary ? _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.PassToNextStep
                }
            }, [
                _vm._v("Next\n    ")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.stepper.active === this.STEPPERS_DATA.summary ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.isSaveButtonDisabled()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Save")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jpbbC":[function() {},{}],"3zKUm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV3UG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7ba0fb5e5f113da6");
    if (script.__esModule) script = script.default;
    script.render = require("3fdf391e9c73cd5").render;
    script.staticRenderFns = require("3fdf391e9c73cd5").staticRenderFns;
    script._scopeId = "data-v-2337b1";
    script.__cssModules = require("f93af72822295694").default;
    require("217d35c413f75cf6").default(script);
    script.__scopeId = "data-v-2337b1";
    script.__file = "modifyAnalyticDialog.vue";
};
initialize();
exports.default = script;

},{"7ba0fb5e5f113da6":"5IIbY","3fdf391e9c73cd5":"3SplZ","f93af72822295694":"7JQQW","217d35c413f75cf6":"2LSbk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IIbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelAnalysis = require("spinal-model-analysis");
var _analyticNameVue = require("./components/analyticSteps/analyticName.vue");
var _analyticNameVueDefault = parcelHelpers.interopDefault(_analyticNameVue);
var _followedEntityVue = require("./components/analyticSteps/followedEntity.vue");
var _followedEntityVueDefault = parcelHelpers.interopDefault(_followedEntityVue);
var _inputConfigurationVue = require("./components/analyticSteps/inputConfiguration.vue");
var _inputConfigurationVueDefault = parcelHelpers.interopDefault(_inputConfigurationVue);
var _triggerConfigurationVue = require("./components/analyticSteps/triggerConfiguration.vue");
var _triggerConfigurationVueDefault = parcelHelpers.interopDefault(_triggerConfigurationVue);
var _algorithmConfigurationVue = require("./components/analyticSteps/algorithmConfiguration.vue");
var _algorithmConfigurationVueDefault = parcelHelpers.interopDefault(_algorithmConfigurationVue);
var _resultConfigurationVue = require("./components/analyticSteps/resultConfiguration.vue");
var _resultConfigurationVueDefault = parcelHelpers.interopDefault(_resultConfigurationVue);
var _iodependenciesVue = require("./components/analyticSteps/IODependencies.vue");
var _iodependenciesVueDefault = parcelHelpers.interopDefault(_iodependenciesVue);
var _configurationVue = require("./components/analyticSteps/configuration.vue");
var _configurationVueDefault = parcelHelpers.interopDefault(_configurationVue);
var _summaryVue = require("./components/analyticSteps/summary.vue");
var _summaryVueDefault = parcelHelpers.interopDefault(_summaryVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginDocumentationServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginDocumentationService);
var scriptExports = {
    name: "modifyAnalyticDialog",
    props: [
        "onFinised"
    ],
    components: {
        "analytic-name": (0, _analyticNameVueDefault.default),
        "followed-entity": (0, _followedEntityVueDefault.default),
        "input-configuration": (0, _inputConfigurationVueDefault.default),
        "trigger-configuration": (0, _triggerConfigurationVueDefault.default),
        "algorithm-configuration": (0, _algorithmConfigurationVueDefault.default),
        "result-configuration": (0, _resultConfigurationVueDefault.default),
        "io-dependencies": (0, _iodependenciesVueDefault.default),
        "configuration": (0, _configurationVueDefault.default),
        "summary-analytic": (0, _summaryVueDefault.default)
    },
    data () {
        this.STEPPERS_DATA = {
            analytic: "first",
            followedEntity: "second",
            inputConfiguration: "third",
            triggerConfiguration: "fourth",
            algorithmConfiguration: "fifth",
            resultConfiguration: "sixth",
            IODependencies: "seventh",
            summary: "eighth"
        };
        return {
            showDialog: true,
            showPreviewDialog: false,
            // Analytic attributes data
            analyticName: "",
            analyticDescription: "",
            analyticShouldTriggerAtStart: undefined,
            analyticStatus: undefined,
            // Inputs -> Followed Entity -> attribute data
            followedEntity: undefined,
            // Inputs  -> Tracking Method -> attribute data
            inputs: {},
            // Config -> trigger attribute data
            triggers: {},
            // Config -> Algorithms attribute data
            algorithms: {},
            // Config -> I/O Dependencies attribute data
            ioDependencies: {
                R: ""
            },
            // Config -> Result attribute data
            resultType: "",
            resultName: "",
            ticketContextId: "",
            ticketProcessId: "",
            phoneNumber: "",
            phoneMessage: "",
            alarmPriority: null,
            gChatMessage: "",
            gChatSpaceName: "",
            selectedNode: undefined,
            entityType: undefined,
            stepper: {
                active: this.STEPPERS_DATA.analytic,
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
                seventh: false,
                eighth: false
            }
        };
    },
    methods: {
        async opened (option) {
            this.selectedNode = option.selectedNode;
            // selectedNode is the analytic node
            const selectedNodeId = this.selectedNode.id.get();
            const entity = await (0, _spinalModelAnalysis.spinalAnalyticService).getEntityFromAnalytic(selectedNodeId);
            this.entityType = entity.entityType.get();
            this.analyticName = this.selectedNode.name.get();
            const followedEntityNode = await (0, _spinalModelAnalysis.spinalAnalyticService).getFollowedEntity(selectedNodeId);
            this.followedEntity = followedEntityNode ? followedEntityNode.id.get() : undefined;
            // need to get all the category names first
            const trackingMethodNodeRef = await (0, _spinalModelAnalysis.spinalAnalyticService).getTrackingMethod(selectedNodeId);
            const parseInputs = await (0, _spinalModelAnalysis.spinalAnalyticService).getAllCategoriesAndAttributesFromNode(trackingMethodNodeRef.id.get());
            for (const inputKey of Object.keys(parseInputs))this.inputs[inputKey] = {
                trackingMethod: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_TRACKING_METHOD],
                filterValue: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_FILTER_VALUE],
                searchDepth: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_DEPTH],
                strictDepth: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_STRICT_DEPTH],
                searchRelations: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_RELATIONS],
                timeseriesIntervalTime: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES]
            };
            this.inputs = {
                ...this.inputs
            };
            //this.input = Object.assign({}, this.inputs);
            console.log(this.inputs);
            const configNode = await (0, _spinalModelAnalysis.spinalAnalyticService).getConfig(selectedNodeId);
            const analyticAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS));
            this.analyticDescription = analyticAttributes[0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_DESCRIPTION];
            this.analyticStatus = analyticAttributes[0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_STATUS] === (0, _spinalModelAnalysis.ANALYTIC_STATUS).ACTIVE;
            this.analyticShouldTriggerAtStart = analyticAttributes[0, _spinalModelAnalysis.ATTRIBUTE_TRIGGER_AT_START];
            const triggerAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS));
            for (const triggerKey of Object.keys(triggerAttributes)){
                let triggerValue = triggerAttributes[triggerKey].split((0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR));
                this.triggers[triggerKey] = {
                    triggerType: triggerValue[0],
                    triggerValue: triggerValue[1],
                    changeOfValueThreshold: triggerValue[2] ? triggerValue[2] : null
                };
            }
            this.triggers = {
                ...this.triggers
            };
            const algorithmMappingAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING));
            for (const algorithmIndexName of Object.keys(algorithmMappingAttributes))this.algorithms[algorithmIndexName] = {
                name: algorithmMappingAttributes[algorithmIndexName],
                params: []
            };
            const algorithmParametersAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS));
            for (const algorithmIndexName of Object.keys(this.algorithms)){
                let algoName = this.algorithms[algorithmIndexName].name;
                const doc = (0, _spinalModelAnalysis.algos)[algoName].requiredParams;
                for(let i = 0; i < doc.length; i++)this.algorithms[algorithmIndexName].params.push(algorithmParametersAttributes[`${algorithmIndexName}${0, _spinalModelAnalysis.ATTRIBUTE_SEPARATOR}${doc[i].name}`]);
            }
            this.algorithms = {
                ...this.algorithms
            };
            const resultAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS));
            this.resultType = resultAttributes[0, _spinalModelAnalysis.ATTRIBUTE_RESULT_TYPE];
            this.resultName = resultAttributes[0, _spinalModelAnalysis.ATTRIBUTE_RESULT_NAME];
            if ([
                (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).TICKET,
                (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ALARM
            ].includes(this.resultType)) {
                const ticketAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS));
                this.ticketContextId = ticketAttributes[0, _spinalModelAnalysis.ATTRIBUTE_TICKET_CONTEXT_ID];
                this.ticketProcessId = ticketAttributes[0, _spinalModelAnalysis.ATTRIBUTE_TICKET_PROCESS_ID];
                if (this.resultType === (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ALARM) this.alarmPriority = ticketAttributes[0, _spinalModelAnalysis.ATTRIBUTE_ALARM_PRIORITY];
            }
            if ([
                (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).SMS
            ].includes(this.resultType)) {
                const smsAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS));
                this.phoneNumber = smsAttributes[0, _spinalModelAnalysis.ATTRIBUTE_PHONE_NUMBER];
                this.phoneMessage = smsAttributes[0, _spinalModelAnalysis.ATTRIBUTE_PHONE_MESSAGE];
            }
            if ([
                (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_MESSAGE,
                (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_ORGAN_CARD
            ].includes(this.resultType)) {
                const gChatAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS));
                this.gChatMessage = gChatAttributes[0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_MESSAGE];
                this.gChatSpaceName = gChatAttributes[0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_SPACE];
            }
            const ioAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES));
            for (const ioDependencyName of Object.keys(ioAttributes)){
                let ioDependencyValue = ioAttributes[ioDependencyName].split((0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR));
                this.ioDependencies[ioDependencyName] = ioDependencyValue;
            }
            this.ioDependencies = {
                ...this.ioDependencies
            };
        },
        async removed (res) {
            if (res.closeResult) {
                // there must be a better way to get the context id...
                const contextId = Object.keys(this.selectedNode.contextIds.get())[0];
                const followedEntityNodeRef = await (0, _spinalModelAnalysis.spinalAnalyticService).getFollowedEntity(this.selectedNode.id.get());
                if (followedEntityNodeRef && followedEntityNodeRef.id.get() !== this.followedEntity) {
                    console.log("change followed entity");
                    await (0, _spinalModelAnalysis.spinalAnalyticService).removeLinkToFollowedEntity(this.selectedNode.id.get(), followedEntityNodeRef.id.get());
                    await (0, _spinalModelAnalysis.spinalAnalyticService).addInputLinkToFollowedEntity(contextId, this.selectedNode.id.get(), this.followedEntity);
                }
                if (!followedEntityNodeRef) await (0, _spinalModelAnalysis.spinalAnalyticService).addInputLinkToFollowedEntity(contextId, this.selectedNode.id.get(), this.followedEntity);
                const trackingMethodAttributes = this.getTrackingMethodAttributes();
                console.log("trackingMethodAttributes :", trackingMethodAttributes);
                const trackingMethodNodeRef = await (0, _spinalModelAnalysis.spinalAnalyticService).getTrackingMethod(this.selectedNode.id.get());
                const trackingMethodNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(trackingMethodNodeRef.id.get());
                await (0, _spinalModelAnalysis.spinalAnalyticService).addAttributesToNode(trackingMethodNode, trackingMethodAttributes);
                const configAttributes = {};
                const analyticAttributes = this.getAnalyticAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS] = analyticAttributes;
                const resultAttributes = this.getResultAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS] = resultAttributes;
                const algorithmParametersAttributes = this.getAlgorithmParametersAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS] = algorithmParametersAttributes;
                const algorithmMappingAttributes = this.getAlgorithmMappingAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING] = algorithmMappingAttributes;
                if (this.ticketContextId && this.ticketProcessId) {
                    const ticketAttributes = this.getTicketAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS] = ticketAttributes;
                }
                if (this.resultType == (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).SMS) {
                    const smsAttributes = this.getSMSAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS] = smsAttributes;
                }
                if ([
                    (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_MESSAGE,
                    (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).GCHAT_ORGAN_CARD
                ].includes(this.resultType)) {
                    const gChatAttributes = this.getGChatAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS] = gChatAttributes;
                }
                const ioAttributes = this.getIOAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES] = ioAttributes;
                const triggerAttributes = this.getTriggerAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS] = triggerAttributes;
                const configNodeRef = await (0, _spinalModelAnalysis.spinalAnalyticService).getConfig(this.selectedNode.id.get());
                const configNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(configNodeRef.id.get());
                await (0, _spinalModelAnalysis.spinalAnalyticService).addAttributesToNode(configNode, configAttributes);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                analyticName: this.analyticName
            });
        },
        addInput () {
            let length = Object.keys(this.inputs).length;
            console.log("adding input");
            this.inputs = {
                ...this.inputs,
                [`I${length}`]: {
                    trackingMethod: "",
                    filterValue: "",
                    searchDepth: 0,
                    strictDepth: false,
                    searchRelations: "",
                    timeseriesIntervalTime: 0
                }
            };
        },
        removeInput (inputName) {
            delete this.inputs[inputName];
            let index = Number(inputName.match(/(\d+)/)[0]);
            // shift back all the inputs after the deleted one.
            let i = index;
            while(this.inputs[`I${i + 1}`] !== undefined){
                this.inputs[`I${i}`] = this.inputs[`I${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.inputs[`I${i}`];
            this.inputs = {
                ...this.inputs
            };
            console.log("deleted input : ", inputName);
        },
        addTrigger () {
            let length = Object.keys(this.triggers).length;
            console.log("adding input");
            this.triggers = {
                ...this.triggers,
                [`T${length}`]: {
                    triggerType: "",
                    triggerValue: "",
                    changeOfValueThreshold: 0
                }
            };
        },
        removeTrigger (triggerName) {
            delete this.triggers[triggerName];
            let index = Number(triggerName.match(/(\d+)/)[0]);
            // shift back all the elements after the deleted one.
            let i = index;
            while(this.triggers[`T${i + 1}`] !== undefined){
                this.triggers[`T${i}`] = this.triggers[`T${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.triggers[`T${i}`];
            this.triggers = {
                ...this.triggers
            };
            console.log("deleted trigger : ", triggerName);
        },
        addAlgorithm () {
            let length = Object.keys(this.algorithms).length;
            console.log("adding algorithm");
            this.algorithms = {
                ...this.algorithms,
                [`A${length}`]: {
                    name: "",
                    params: []
                }
            };
        },
        removeAlgorithm (algorithmIndexName) {
            delete this.algorithms[algorithmIndexName];
            let index = Number(algorithmIndexName.match(/(\d+)/)[0]);
            // shift back all the elements after the deleted one.
            let i = index;
            while(this.algorithms[`A${i + 1}`] !== undefined){
                this.algorithms[`A${i}`] = this.algorithms[`A${i + 1}`];
                i++;
            }
            // Remove the last item.
            delete this.algorithms[`A${i}`];
            this.algorithms = {
                ...this.algorithms
            };
            console.log("deleted algorithm : ", algorithmIndexName);
        },
        changeStep (stepId) {
            this.stepper.active = stepId;
        },
        PassToNextStep () {
            switch(this.stepper.active){
                case this.STEPPERS_DATA.analytic:
                    this.stepper.first = true;
                    this.stepper.active = this.STEPPERS_DATA.followedEntity;
                    break;
                case this.STEPPERS_DATA.followedEntity:
                    this.stepper.second = true;
                    this.stepper.active = this.STEPPERS_DATA.inputConfiguration;
                    break;
                case this.STEPPERS_DATA.inputConfiguration:
                    this.stepper.third = true;
                    this.stepper.active = this.STEPPERS_DATA.triggerConfiguration;
                    break;
                case this.STEPPERS_DATA.triggerConfiguration:
                    this.stepper.fourth = true;
                    this.stepper.active = this.STEPPERS_DATA.algorithmConfiguration;
                    break;
                case this.STEPPERS_DATA.algorithmConfiguration:
                    this.stepper.fifth = true;
                    this.stepper.active = this.STEPPERS_DATA.resultConfiguration;
                    break;
                case this.STEPPERS_DATA.resultConfiguration:
                    this.stepper.sixth = true;
                    this.stepper.active = this.STEPPERS_DATA.IODependencies;
                    break;
                case this.STEPPERS_DATA.IODependencies:
                    this.stepper.seventh = true;
                    this.stepper.active = this.STEPPERS_DATA.summary;
                    break;
                case this.STEPPERS_DATA.summary:
                    this.stepper.eighth = true;
                    this.stepper.active = this.STEPPERS_DATA.summary;
                    break;
            }
        },
        isSaveButtonDisabled () {
            return this.analyticName === "" || this.algorithm === "" || this.resultType === "" || this.resultName === "" || this.intervalTime === null || !this.followedEntity;
        },
        getTrackingMethodAttributes () {
            const trackingMethodAttributes = {};
            for (const inputKey of Object.keys(this.inputs)){
                trackingMethodAttributes[inputKey] = [];
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TRACKING_METHOD)}`,
                    type: "string",
                    value: this.inputs[inputKey].trackingMethod
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_FILTER_VALUE)}`,
                    type: "string",
                    value: this.inputs[inputKey].filterValue
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_DEPTH)}`,
                    type: "number",
                    value: this.inputs[inputKey].searchDepth
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_STRICT_DEPTH)}`,
                    type: "boolean",
                    value: this.inputs[inputKey].strictDepth
                });
                trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_SEARCH_RELATIONS)}`,
                    type: "string",
                    value: this.inputs[inputKey].searchRelations
                });
                if ([
                    (0, _spinalModelAnalysis.TRACK_METHOD).CONTROL_ENDPOINT_NAME_FILTER,
                    (0, _spinalModelAnalysis.TRACK_METHOD).ENDPOINT_NAME_FILTER
                ].includes(this.inputs[inputKey].trackingMethod)) trackingMethodAttributes[inputKey].push({
                    name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES)}`,
                    type: "number",
                    value: this.inputs[inputKey].timeseriesIntervalTime
                });
            }
            return trackingMethodAttributes;
        },
        getAnalyticAttributes () {
            const analyticAttributes = [];
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_DESCRIPTION)}`,
                type: "string",
                value: this.analyticDescription
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_STATUS)}`,
                type: "string",
                value: this.analyticStatus ? (0, _spinalModelAnalysis.ANALYTIC_STATUS).ACTIVE : (0, _spinalModelAnalysis.ANALYTIC_STATUS).INACTIVE
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TRIGGER_AT_START)}`,
                type: "boolean",
                value: this.analyticShouldTriggerAtStart
            });
            return analyticAttributes;
        },
        getResultAttributes () {
            const resultAttributes = [];
            resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_RESULT_TYPE)}`,
                type: "string",
                value: this.resultType
            });
            resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_RESULT_NAME)}`,
                type: "string",
                value: this.resultName
            });
            return resultAttributes;
        },
        getAlgorithmParametersAttributes () {
            const algorithmParametersAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms)){
                let algoName = this.algorithms[algorithmIndexName].name;
                const doc = (0, _spinalModelAnalysis.algos)[algoName].requiredParams;
                for(let i = 0; i < this.algorithms[algorithmIndexName].params.length; i++)algorithmParametersAttributes.push({
                    name: `${algorithmIndexName}${(0, _spinalModelAnalysis.ATTRIBUTE_SEPARATOR)}${doc[i].name}`,
                    value: doc[i].type === "number" ? +this.algorithms[algorithmIndexName].params[i] : this.algorithms[algorithmIndexName].params[i],
                    type: doc[i].type
                });
            }
            return algorithmParametersAttributes;
        },
        getAlgorithmMappingAttributes () {
            const algorithmMappingAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms))algorithmMappingAttributes.push({
                name: `${algorithmIndexName}`,
                type: "string",
                value: this.algorithms[algorithmIndexName].name
            });
            return algorithmMappingAttributes;
        },
        getTicketAttributes () {
            const ticketAttributes = [];
            ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TICKET_CONTEXT_ID)}`,
                type: "string",
                value: this.ticketContextId
            });
            ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TICKET_PROCESS_ID)}`,
                type: "string",
                value: this.ticketProcessId
            });
            if (this.alarmPriority) ticketAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ALARM_PRIORITY)}`,
                value: this.alarmPriority,
                type: "number"
            });
            return ticketAttributes;
        },
        getSMSAttributes () {
            const smsAttributes = [];
            smsAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_PHONE_NUMBER)}`,
                type: "string",
                value: this.phoneNumber
            });
            smsAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_PHONE_MESSAGE)}`,
                type: "string",
                value: this.phoneMessage
            });
            return smsAttributes;
        },
        getGChatAttributes () {
            const gChatAttributes = [];
            gChatAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_MESSAGE)}`,
                type: "string",
                value: this.gChatMessage
            });
            gChatAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_GCHAT_SPACE)}`,
                type: "string",
                value: this.gChatSpaceName
            });
            return gChatAttributes;
        },
        getIOAttributes () {
            const ioAttributes = [];
            for (const ioDependencyName of Object.keys(this.ioDependencies)){
                let str = "";
                for (const ioDependency of this.ioDependencies[ioDependencyName])str += `${ioDependency}${0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR}`;
                str = str.slice(0, -1);
                ioAttributes.push({
                    name: `${ioDependencyName}`,
                    type: "string",
                    value: str
                });
            }
            return ioAttributes;
        },
        getTriggerAttributes () {
            const triggerAttributes = [];
            for (const triggerIndex of Object.keys(this.triggers)){
                let str = `${this.triggers[triggerIndex].triggerType}${(0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR)}${this.triggers[triggerIndex].triggerValue}`;
                if (this.triggers[triggerIndex].changeOfValueThreshold !== null) str += `${0, _spinalModelAnalysis.ATTRIBUTE_VALUE_SEPARATOR}${this.triggers[triggerIndex].changeOfValueThreshold}`;
                triggerAttributes.push({
                    name: `${triggerIndex}`,
                    type: "string",
                    value: str
                });
            }
            return triggerAttributes;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-analysis":"apm5J","./components/analyticSteps/analyticName.vue":"fV2jv","./components/analyticSteps/followedEntity.vue":"kT4TN","./components/analyticSteps/inputConfiguration.vue":"iVYnP","./components/analyticSteps/triggerConfiguration.vue":"iND1t","./components/analyticSteps/algorithmConfiguration.vue":"8wAUD","./components/analyticSteps/resultConfiguration.vue":"eI82n","./components/analyticSteps/IODependencies.vue":"1wJ5n","./components/analyticSteps/configuration.vue":"3SuJC","./components/analyticSteps/summary.vue":"5IrTN","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SplZ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialog",
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
        _c("md-dialog-title", {
            staticClass: "mdDialogTitle"
        }, [
            _vm._v(" Modify Analytic ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContainer"
        }, [
            _c("md-steppers", {
                attrs: {
                    "md-active-step": _vm.stepper.active,
                    "md-linear": ""
                },
                on: {
                    "update:mdActiveStep": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "update:md-active-step": function($event) {
                        return _vm.$set(_vm.stepper, "active", $event);
                    },
                    "md-changed": _vm.changeStep
                }
            }, [
                _c("analytic-name", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "analyticName": _vm.analyticName,
                        "analyticDescription": _vm.analyticDescription,
                        "analyticShouldTriggerAtStart": _vm.analyticShouldTriggerAtStart,
                        "analyticStatus": _vm.analyticStatus,
                        "editable": false
                    },
                    on: {
                        "update:analyticName": function($event) {
                            _vm.analyticName = $event;
                        },
                        "update:analytic-name": function($event) {
                            _vm.analyticName = $event;
                        },
                        "update:analyticDescription": function($event) {
                            _vm.analyticDescription = $event;
                        },
                        "update:analytic-description": function($event) {
                            _vm.analyticDescription = $event;
                        },
                        "update:analyticShouldTriggerAtStart": function($event) {
                            _vm.analyticShouldTriggerAtStart = $event;
                        },
                        "update:analytic-should-trigger-at-start": function($event) {
                            _vm.analyticShouldTriggerAtStart = $event;
                        },
                        "update:analyticStatus": function($event) {
                            _vm.analyticStatus = $event;
                        },
                        "update:analytic-status": function($event) {
                            _vm.analyticStatus = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("followed-entity", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "entityType": _vm.entityType,
                        "followedEntity": _vm.followedEntity
                    },
                    on: {
                        "update:followedEntity": function($event) {
                            _vm.followedEntity = $event;
                        },
                        "update:followed-entity": function($event) {
                            _vm.followedEntity = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("input-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "entityType": _vm.entityType,
                        "followedEntity": _vm.followedEntity,
                        "inputs": _vm.inputs
                    },
                    on: {
                        "addInput": _vm.addInput,
                        "removeInput": _vm.removeInput,
                        "update:inputs": function($event) {
                            _vm.inputs = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("trigger-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "triggers": _vm.triggers
                    },
                    on: {
                        "addTrigger": _vm.addTrigger,
                        "removeTrigger": _vm.removeTrigger,
                        "update:triggers": function($event) {
                            _vm.triggers = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("algorithm-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "algorithms": _vm.algorithms
                    },
                    on: {
                        "addAlgorithm": _vm.addAlgorithm,
                        "removeAlgorithm": _vm.removeAlgorithm,
                        "update:algorithms": function($event) {
                            _vm.algorithms = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("result-configuration", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "resultName": _vm.resultName,
                        "resultType": _vm.resultType,
                        "intervalTime": _vm.intervalTime,
                        "ticketContextId": _vm.ticketContextId,
                        "ticketProcessId": _vm.ticketProcessId,
                        "phoneNumber": _vm.phoneNumber,
                        "phoneMessage": _vm.phoneMessage,
                        "gChatMessage": _vm.gChatMessage,
                        "gChatSpaceName": _vm.gChatSpaceName,
                        "alarmPriority": _vm.alarmPriority
                    },
                    on: {
                        "update:resultName": function($event) {
                            _vm.resultName = $event;
                        },
                        "update:result-name": function($event) {
                            _vm.resultName = $event;
                        },
                        "update:resultType": function($event) {
                            _vm.resultType = $event;
                        },
                        "update:result-type": function($event) {
                            _vm.resultType = $event;
                        },
                        "update:intervalTime": function($event) {
                            _vm.intervalTime = $event;
                        },
                        "update:interval-time": function($event) {
                            _vm.intervalTime = $event;
                        },
                        "update:ticketContextId": function($event) {
                            _vm.ticketContextId = $event;
                        },
                        "update:ticket-context-id": function($event) {
                            _vm.ticketContextId = $event;
                        },
                        "update:ticketProcessId": function($event) {
                            _vm.ticketProcessId = $event;
                        },
                        "update:ticket-process-id": function($event) {
                            _vm.ticketProcessId = $event;
                        },
                        "update:phoneNumber": function($event) {
                            _vm.phoneNumber = $event;
                        },
                        "update:phone-number": function($event) {
                            _vm.phoneNumber = $event;
                        },
                        "update:phoneMessage": function($event) {
                            _vm.phoneMessage = $event;
                        },
                        "update:phone-message": function($event) {
                            _vm.phoneMessage = $event;
                        },
                        "update:gChatMessage": function($event) {
                            _vm.gChatMessage = $event;
                        },
                        "update:g-chat-message": function($event) {
                            _vm.gChatMessage = $event;
                        },
                        "update:gChatSpaceName": function($event) {
                            _vm.gChatSpaceName = $event;
                        },
                        "update:g-chat-space-name": function($event) {
                            _vm.gChatSpaceName = $event;
                        },
                        "update:alarmPriority": function($event) {
                            _vm.alarmPriority = $event;
                        },
                        "update:alarm-priority": function($event) {
                            _vm.alarmPriority = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("io-dependencies", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "inputs": _vm.inputs,
                        "algorithms": _vm.algorithms,
                        "ioDependencies": _vm.ioDependencies
                    },
                    on: {
                        "update:ioDependencies": function($event) {
                            _vm.ioDependencies = $event;
                        },
                        "update:io-dependencies": function($event) {
                            _vm.ioDependencies = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("summary-analytic", {
                    attrs: {
                        "STEPPERS_DATA": _vm.STEPPERS_DATA,
                        "stepper": _vm.stepper,
                        "analyticName": _vm.analyticName,
                        "trackingMethods": _vm.trackingMethods,
                        "followedEntity": _vm.followedEntity,
                        "algorithm": _vm.algorithm,
                        "algorithmParameters": _vm.algorithmParameters,
                        "resultName": _vm.resultName,
                        "resultType": _vm.resultType,
                        "intervalTime": _vm.intervalTime
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
            _vm.stepper.active !== this.STEPPERS_DATA.summary ? _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.PassToNextStep
                }
            }, [
                _vm._v("Next\n    ")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.stepper.active === this.STEPPERS_DATA.summary ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.isSaveButtonDisabled()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Save")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7JQQW":[function() {},{}],"2LSbk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5z9f7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkGroupToAnalyticsVue = require("./linkGroupToAnalytics.vue");
var _linkGroupToAnalyticsVueDefault = parcelHelpers.interopDefault(_linkGroupToAnalyticsVue);
const { SpinalForgeExtention } = require("df2b481f45530d1e");
let panels = [
    {
        name: "linkGroupToAnalyticsPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkGroupToAnalyticsVueDefault.default)),
        panel: {
            title: "Link Group to Analytic Panel",
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

},{"vue":"gt5MM","df2b481f45530d1e":"1mGHd","./linkGroupToAnalytics.vue":"f18fM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"f18fM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c804a383260d0472");
    if (script.__esModule) script = script.default;
    script.render = require("46d7583a1da3698a").render;
    script.staticRenderFns = require("46d7583a1da3698a").staticRenderFns;
    script._scopeId = "data-v-52813c";
    script.__cssModules = require("bba408841fa11549").default;
    require("cc7493a291e7dd7").default(script);
    script.__scopeId = "data-v-52813c";
    script.__file = "linkGroupToAnalytics.vue";
};
initialize();
exports.default = script;

},{"c804a383260d0472":"6JrAy","46d7583a1da3698a":"9iSlv","bba408841fa11549":"3dJNM","cc7493a291e7dd7":"kF1kr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JrAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _spinalEnvViewerPluginAnalyticsService = require("spinal-env-viewer-plugin-analytics-service");
var _vueVirtualScroller = require("vue-virtual-scroller");
(0, _vueDefault.default).component("RecycleScroller", (0, _vueVirtualScroller.RecycleScroller));
var scriptExports = {
    name: "linkGroupToAnalyticPanel",
    components: {
    },
    data () {
        this.STATES = {
            normal: 1,
            loading: 2,
            error: 3
        };
        this.contextId;
        this.analyticId;
        this.childrenType;
        this.data = [];
        this.countPerPage = 10;
        return {
            search: "",
            isOpened: false,
            tempList: [],
            dataLinked: [],
            currentPage: 1,
            appState: this.STATES.normal
        };
    },
    methods: {
        async opened (option) {
            this.appState = this.STATES.loading;
            this.contextId = option.contextId;
            this.analyticId = option.analyticId;
            this.childrenType = option.childrenType;
            Promise.all([
                this.getGroupsLinked(this.analyticId),
                this.getAllGroups(this.childrenType)
            ]).then(([linked, groups])=>{
                this.data = groups;
                this.tempList = groups;
                this.dataLinked = linked;
                this.appState = this.STATES.normal;
            }).catch((err)=>{
                this.appState = this.STATES.error;
            });
        },
        isLinked (item) {
            return this.dataLinked.find((el)=>{
                return item.id === el.id;
            });
        },
        getIcon (item) {
            return typeof this.isLinked(item) === "undefined" ? "link" : "link_off";
        },
        // eventMethod(eventName, item) {
        // 	EventBus.$emit(eventName, item);
        // },
        openSearchBar () {
            this.isOpened = !this.isOpened;
        },
        async linkUnlink (item) {
            if (!this.isLinked(item)) {
                await (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).linkGroupToAnalytic(this.contextId, this.analyticId, item.id);
                this.dataLinked.push(item);
            } else {
                const removed = await (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).unLinkGroupToAnalytic(this.analyticId, item.id);
                if (removed) this.dataLinked = this.dataLinked.filter((el)=>el.id !== item.id);
            }
        },
        async getGroupsLinked (analyticId) {
            const groups = await (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).getGroupsLinked(analyticId);
            return groups.map((group)=>group.get());
        },
        async getAllGroups (type) {
            const contexts = await (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroupContexts(type);
            const promises = contexts.map((el)=>{
                return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(el.id);
            });
            return Promise.all(promises).then((result)=>{
                const _result = result.flat();
                return _result.map((el)=>el.get());
            });
        }
    },
    watch: {
        search: function(newValue) {
            newValue = newValue.trim();
            // console.log("newValue", newValue);
            if (newValue.length === 0) this.tempList = [
                ...this.data
            ];
            else this.tempList = this.data.filter((el)=>{
                return el.name.toLowerCase().includes(newValue.toLowerCase());
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"gt5MM","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-plugin-analytics-service":"74iWe","vue-virtual-scroller":"kl5Fe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iSlv":[function(require,module,exports) {
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
                                        staticClass: "listContainer"
                                    }, [
                                        _c("span", {
                                            staticClass: "md-list-item-text"
                                        }, [
                                            _vm._v(_vm._s(item.name))
                                        ]),
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
                    ], null, false, 2818732962)
                })
            ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.tempList.length === 0 && _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "_container empty"
        }, [
            _vm._v("\n		No Data found !\n	")
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
            _vm._v("\n		Sorry, Something was wrong. Please retry !!\n	")
        ]) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3dJNM":[function() {},{}],"kF1kr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0rBD":[function(require,module,exports) {
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
exports.ARCHIVE_TICKET_RELATIONS = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = exports.ARCHIVE_TICKET_RELATION_TYPE = exports.ARCHIVE_TICKET_PART_TICKET_RELATION = exports.ARCHIVE_TICKET_PART_TYPE = exports.ARCHIVE_TICKET_PART_RELATION = exports.SPATIAL_ARCHIVE_TICKET_TYPE = exports.SPATIAL_ARCHIVE_TICKET_RELATION = exports.PROCESS_ARCHIVE_TICKET_TYPE = exports.PROCESS_ARCHIVE_TICKET_RELATION = exports._TICKET_PRIORITIES = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports._DEFAULT_INCIDENTS_NAME = exports.INCIDENT_TYPE = exports.INCIDENT_RELATION_NAME = exports.INCIDENT_RELATION_TYPE = exports.INCIDENT_SECTION_RELATION_NAME = exports.INCIDENT_SECTION_TYPE = exports.INCIDENT_SECTION_RELATION_TYPE = exports._DEFAULT_STEPS = exports._ARCHIVED_STEP = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.STEP_TYPE = exports.STEP_RELATION_NAME = exports.STEP_RELATION_TYPE = exports._PROCESS_TYPE = exports.PROCESS_RELATION_NAME = exports.PROCESS_RELATION_TYPE = exports.ALARM_RELATION_NAME = exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = exports.TIKET_TYPE = exports.TICKET_RELATION_NAME = exports.TICKET_RELATION_TYPE = exports.TICKET_CONTEXT_SUBTYPE_LIST = exports.TICKET_CONTEXT_TYPE = exports.GEO_TYPES = void 0;
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
 */ const OLD_CONSTANTS = require("5f2287b5524fd3a7");
__exportStar(require("5f2287b5524fd3a7"), exports);
const spinal_model_graph_1 = require("2f0e2599fe3a3648");
var spinal_env_viewer_context_geographic_service_1 = require("c6294f08f8af564d");
Object.defineProperty(exports, "GEO_TYPES", {
    enumerable: true,
    get: function() {
        return spinal_env_viewer_context_geographic_service_1.GEOGRAPHIC_TYPES_ORDER;
    }
});
exports.TICKET_CONTEXT_TYPE = OLD_CONSTANTS.SERVICE_TYPE;
exports.TICKET_CONTEXT_SUBTYPE_LIST = [
    "Ticket",
    "Alarm"
];
/////////////////////////////////////////
/////////////// TICKET ///////////////////
exports.TICKET_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE; // STEP_TO_TICKET_RELATION_TYPE
exports.TICKET_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME; // STEP_TO_TICKET_RELATION_NAME
exports.TIKET_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_TYPE;
exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = "Occurrence number";
exports.ALARM_RELATION_NAME = "hasAlarm";
/////////////////////////////////////////
/////////////// PROCESS /////////////////
exports.PROCESS_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE; // CONTEXT_TO_PROCESS_RELATION_TYPE
exports.PROCESS_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME; //CONTEXT_TO_PROCESS_RELATION_NAME
exports._PROCESS_TYPE = OLD_CONSTANTS.PROCESS_TYPE;
//////////////////////////////////////
/////////////// STEP /////////////////
exports.STEP_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE; // PROCESS_TO_STEP_RELATION_TYPE
exports.STEP_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME; // PROCESS_TO_STEP_RELATION_NAME
exports.STEP_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_STEP_TYPE;
exports.ARCHIVED_STEP = OLD_CONSTANTS.ARCHIVED_STEP;
exports.DEFAULT_STEPS = OLD_CONSTANTS.DEFAULT_STEPS;
exports._ARCHIVED_STEP = OLD_CONSTANTS.ARCHIVED_STEP;
exports._DEFAULT_STEPS = OLD_CONSTANTS.DEFAULT_STEPS;
/////////////////////////////////////////
/////////////// CATEGORY ////////////////
exports.INCIDENT_SECTION_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE;
exports.INCIDENT_SECTION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE;
exports.INCIDENT_SECTION_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME;
exports.INCIDENT_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE;
exports.INCIDENT_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME;
exports.INCIDENT_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_INCIDENT_TYPE;
exports._DEFAULT_INCIDENTS_NAME = OLD_CONSTANTS.DEFAULT_INCIDENTS_NAME;
exports.LOG_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE;
exports.LOG_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME;
exports.LOG_TYPE = OLD_CONSTANTS.SERVICE_LOG_TYPE;
exports.LOGS_EVENTS_STEPS = OLD_CONSTANTS.LOGS_EVENTS;
exports._TICKET_PRIORITIES = OLD_CONSTANTS.TICKET_PRIORITIES;
/////////////////////////////////////////
/////////////// ARCHIVE ////////////////
exports.PROCESS_ARCHIVE_TICKET_RELATION = "ProcessHasArchiveTicket";
exports.PROCESS_ARCHIVE_TICKET_TYPE = "ProcessArchiveTicket";
exports.SPATIAL_ARCHIVE_TICKET_RELATION = "SpatialHasArchiveTicket";
exports.SPATIAL_ARCHIVE_TICKET_TYPE = "SpatialArchiveTicket";
exports.ARCHIVE_TICKET_PART_RELATION = "ArchiveTicketHasPart";
exports.ARCHIVE_TICKET_PART_TYPE = "ArchiveTicketPart";
exports.ARCHIVE_TICKET_PART_TICKET_RELATION = "ArchiveTicketPartHasTicket";
exports.ARCHIVE_TICKET_RELATION_TYPE = spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = "ProcessArchiveTimestamp";
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = "SpatialArchiveTimestamp";
exports.ARCHIVE_TICKET_RELATIONS = [
    exports.SPATIAL_ARCHIVE_TICKET_RELATION,
    exports.ARCHIVE_TICKET_PART_RELATION
];

},{"5f2287b5524fd3a7":"79Wiu","2f0e2599fe3a3648":"fkEXw","c6294f08f8af564d":"5QjJf"}],"79Wiu":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TICKET_PRIORITIES = exports.LOGS_EVENTS_STRING = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports.EVENTS_TO_LOG = exports.LOGS_EVENTS = exports.SERVICE_LOG_TYPE = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE = exports.DEFAULT_INCIDENTS_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_STEP_TYPE = exports.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE = exports.PROCESS_TYPE = exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_TICKET_TYPE = exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE = exports.SERVICE_TYPE = exports.SERVICE_NAME = void 0;
const spinal_env_viewer_graph_service_1 = require("5f14db0a1cfd319d");
exports.SERVICE_NAME = "Ticket Service";
exports.SERVICE_TYPE = "SpinalSystemServiceTicket";
/////////////////////////////////////////
/////////////// TICKET ///////////////////
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME = "SpinalSystemServiceTicketHasTicket";
exports.SPINAL_TICKET_SERVICE_TICKET_TYPE = "SpinalSystemServiceTicketTypeTicket";
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION: string = 'SpinalSystemServiceHasTicket';
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_NAME: string = 'Tickets';
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_NAME: string = 'SpinalSystemServiceHasTicket';
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasTicket';
// export const SECTION_RELATION_TYPE = SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_TYPE;
/**
 * New values
 */ // export const TICKET_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE; // STEP_TO_TICKET_RELATION_TYPE
// export const TICKET_RELATION_NAME: string = SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME; // STEP_TO_TICKET_RELATION_NAME
// export const TIKET_TYPE: string = SPINAL_TICKET_SERVICE_TICKET_TYPE;
/////////////////////////////////////////
/////////////// PROCESS /////////////////
exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME = "SpinalSystemServiceTicketHasProcess";
exports.PROCESS_TYPE = "SpinalServiceTicketProcess";
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Process';
// export const SPINAL_TICKET_SERVICE_PROCESS_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasProcess';
// export const SPINAL_TICKET_SERVICE_PROCESS_TYPE: string = 'SpinalSystemServiceTicketTypeProcess';
// export const PROCESS_HAS_TICKET_RELATION_NAME: string = 'SpinalSystemService_ProcessHasTicket';
// export const PROCESS_HAS_TICKET_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
/**
 * New values
 */ // export const PROCESS_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE; // CONTEXT_TO_PROCESS_RELATION_TYPE
// export const PROCESS_RELATION_NAME: string = SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME; //CONTEXT_TO_PROCESS_RELATION_NAME
// export const PROCESS_TYPE: string = 'SpinalServiceTicketProcess';
//////////////////////////////////////
/////////////// STEP /////////////////
exports.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_STEP_TYPE = "SpinalSystemServiceTicketTypeStep";
exports.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME = "SpinalSystemServiceTicketHasStep";
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_ARCHIVE_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceArchiveHasStep';
// export const SPINAL_TICKET_SERVICE_STEP_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Step';
/**
 * New values
 */ // export const STEP_RELATION_TYPE: string = SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE; // PROCESS_TO_STEP_RELATION_TYPE
// export const STEP_RELATION_NAME: string = SPINAL_TICKET_SERVICE_STEP_RELATION_NAME; // PROCESS_TO_STEP_RELATION_NAME
// export const STEP_TYPE: string = SPINAL_TICKET_SERVICE_STEP_TYPE;
exports.ARCHIVED_STEP = {
    name: "Archived",
    order: -1,
    color: "#FF0000"
};
exports.DEFAULT_STEPS = [
    {
        name: "D\xe9clar\xe9",
        color: "#ff0019",
        order: 0
    },
    {
        name: "Ouvert",
        color: "#fff112",
        order: 1
    },
    {
        name: "R\xe9solu",
        color: "#10ff1d",
        order: 2
    },
    exports.ARCHIVED_STEP
];
/////////////////////////////////////////
/////////////// CATEGORY ////////////////
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE = "DEFAULT_INCIDENT_TYPE";
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME = "Spinal_Service_Ticket_Process_has_category";
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME = "Spinal_Service_Ticket_Process_has_categories_section";
exports.SPINAL_TICKET_SERVICE_INCIDENT_TYPE = "INCIDENT_TYPE";
exports.DEFAULT_INCIDENTS_NAME = "Incidents commun";
// export const SPINAL_TICKET_SERVICE_INCIDENT_SUB_SECTION_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_INCIDENT_SUB_SECTION_RELATION_NAME: string = 'Spinal_Service_Ticket_Process_has_sub_category';
// export const DEFAULT_INCIDENT_TYPE: string = SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE;
// export const DEFAULT_INCIDENT_RELATION_NAME: string = SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME;
// export const fdg: string = SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME;
/////////////////////////////////////////
/////////////// ARCHIVE /////////////////
// export const SPINAL_TICKET_SERVICE_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive';
// export const SPINAL_TICKET_SERVICE_TICKET_ARCHIVE_NAME: string = 'Spinal_Service_Ticket_Archive_Archive_Ticket';
// export const SPINAL_TICKET_SERVICE_ARCHIVE_RELATION_NAME: string = 'SpinalSystemServiceTicketHasArchive';
// export const SERVICE_ARCHIVE_TYPE: string = 'SpinalSystemServiceTicketArchive';
/////////////////////////////////////////
/////////////// LOG /////////////////
exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME = "SpinalSystemServiceTicketHasLog";
exports.SERVICE_LOG_TYPE = "SpinalSystemServiceTicketLog";
var LOGS_EVENTS;
(function(LOGS_EVENTS) {
    LOGS_EVENTS[LOGS_EVENTS["creation"] = 1] = "creation";
    LOGS_EVENTS[LOGS_EVENTS["moveToNext"] = 2] = "moveToNext";
    LOGS_EVENTS[LOGS_EVENTS["moveToPrevious"] = 3] = "moveToPrevious";
    LOGS_EVENTS[LOGS_EVENTS["archived"] = 4] = "archived";
    LOGS_EVENTS[LOGS_EVENTS["unarchive"] = 5] = "unarchive";
    LOGS_EVENTS[LOGS_EVENTS["move"] = 6] = "move";
})(LOGS_EVENTS = exports.LOGS_EVENTS || (exports.LOGS_EVENTS = {}));
exports.EVENTS_TO_LOG = Object.freeze({
    1: "creation",
    2: "moveToNext",
    3: "moveToPrevious",
    4: "archived",
    5: "unarchive",
    6: "move"
});
exports.LOG_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE;
exports.LOG_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME;
exports.LOG_TYPE = exports.SERVICE_LOG_TYPE;
exports.LOGS_EVENTS_STEPS = LOGS_EVENTS;
exports.LOGS_EVENTS_STRING = [
    "none",
    "creation",
    "moveToNext",
    "moveToPrevious",
    "archived",
    "unarchive",
    "move"
];
/////////////////////////////////////////
/////////////// Target /////////////////
// export const SPINAL_TICKET_SERVICE_TARGET_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
// export const SPINAL_TICKET_SERVICE_TARGET_RELATION_NAME: string = 'SpinalSystemServiceTicketHasLocation';
/////////////////////////////////////////
/////////////// USER ////////////////////
// export const USER_RELATION_NAME: string = 'userHasDeclaredTicket';
// export const USER_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
/////////////////////////////////////////
/////////////// ticket ////////////////////
// tickethasReferentiel
exports.TICKET_PRIORITIES = {
    occasionally: 0,
    normal: 1,
    urgent: 2
};

},{"5f14db0a1cfd319d":"9n7zp"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-analysis.622520c8.js.map
