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
exports.getCronMissingExecutionTimes = exports.getValueModelFromEntry = exports.ATTRIBUTE_TIMESERIES_VALUE_AT_START = exports.ATTRIBUTE_LAST_EXECUTION_TIME = exports.ATTRIBUTE_VALUE_SEPARATOR = exports.ATTRIBUTE_ALARM_PRIORITY = exports.ATTRIBUTE_CREATE_ENDPOINT_UNIT = exports.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS = exports.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST = exports.ATTRIBUTE_TICKET_PROCESS_ID = exports.ATTRIBUTE_TICKET_CONTEXT_ID = exports.ATTRIBUTE_TRIGGER_AT_START = exports.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS = exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = exports.ATTRIBUTE_ANALYTIC_STATUS = exports.ATTRIBUTE_RESULT_TYPE = exports.ATTRIBUTE_RESULT_NAME = exports.ATTRIBUTE_SEPARATOR = exports.ATTRIBUTE_SEARCH_RELATIONS = exports.ATTRIBUTE_STRICT_DEPTH = exports.ATTRIBUTE_SEARCH_DEPTH = exports.ATTRIBUTE_TIMESERIES = exports.ATTRIBUTE_FILTER_VALUE = exports.ATTRIBUTE_TRACKING_METHOD = exports.ATTRIBUTE_PHONE_MESSAGE = exports.ATTRIBUTE_PHONE_NUMBER = exports.ATTRIBUTE_GCHAT_SPACE = exports.ATTRIBUTE_GCHAT_MESSAGE = exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = exports.ENTITY_TYPE = exports.CONTEXT_TYPE = exports.TRIGGER_TYPE = exports.TRACK_METHOD = exports.ANALYTIC_TYPE = exports.ANALYTIC_RESULT_TYPE = exports.ENTITY_TYPES = exports.TrackingMethodModel = exports.AnalyticModel = exports.spinalAnalyticService = exports.AnalyticService = void 0;
exports.ANALYTIC_STATUS = exports.ALGORITHMS = exports.algos = exports.isGChatOrganCardResult = exports.isGChatMessageResult = exports.isResultSuccess = exports.getAvailableData = exports.getChoiceRelationsWithDepth = exports.getIntervalTimeMissingExecutionTimes = void 0;
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
Object.defineProperty(exports, "CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS", {
    enumerable: true,
    get: function() {
        return constants_1.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS;
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
Object.defineProperty(exports, "ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_CREATE_ENDPOINT_UNIT", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_CREATE_ENDPOINT_UNIT;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_ALARM_PRIORITY", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_ALARM_PRIORITY;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_TIMESERIES_VALUE_AT_START", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_TIMESERIES_VALUE_AT_START;
    }
});
Object.defineProperty(exports, "ATTRIBUTE_LAST_EXECUTION_TIME", {
    enumerable: true,
    get: function() {
        return constants_1.ATTRIBUTE_LAST_EXECUTION_TIME;
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
const algorithms_1 = require("b5cbb7d75b37f0f9");
Object.defineProperty(exports, "ALGORITHMS", {
    enumerable: true,
    get: function() {
        return algorithms_1.ALGORITHMS;
    }
});
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
Object.defineProperty(exports, "getCronMissingExecutionTimes", {
    enumerable: true,
    get: function() {
        return utils_1.getCronMissingExecutionTimes;
    }
});
Object.defineProperty(exports, "getIntervalTimeMissingExecutionTimes", {
    enumerable: true,
    get: function() {
        return utils_1.getIntervalTimeMissingExecutionTimes;
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
exports.ATTRIBUTE_ANALYTIC_STATUS = exports.ATTRIBUTE_CREATE_ENDPOINT_UNIT = exports.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS = exports.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST = exports.ATTRIBUTE_ALARM_PRIORITY = exports.ATTRIBUTE_TICKET_PROCESS_ID = exports.ATTRIBUTE_TICKET_CONTEXT_ID = exports.ATTRIBUTE_GCHAT_MESSAGE = exports.ATTRIBUTE_GCHAT_SPACE = exports.ATTRIBUTE_PHONE_MESSAGE = exports.ATTRIBUTE_PHONE_NUMBER = exports.ATTRIBUTE_RESULT_NAME = exports.ATTRIBUTE_RESULT_TYPE = exports.ATTRIBUTE_TIMESERIES_VALUE_AT_START = exports.ATTRIBUTE_SEARCH_RELATIONS = exports.ATTRIBUTE_STRICT_DEPTH = exports.ATTRIBUTE_SEARCH_DEPTH = exports.ATTRIBUTE_TIMESERIES = exports.ATTRIBUTE_FILTER_VALUE = exports.ATTRIBUTE_TRACKING_METHOD = exports.ATTRIBUTE_LAST_EXECUTION_TIME = exports.ATTRIBUTE_VALUE_SEPARATOR = exports.ATTRIBUTE_SEPARATOR = exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = exports.TARGET_NODE_TYPES = exports.GROUP_RELATION_PREFIX = exports.ANALYTIC_INPUTS_TO_TRACKING_METHOD_RELATION = exports.ANALYTIC_INPUTS_TO_FOLLOWED_ENTITY_RELATION = exports.ANALYTIC_TO_CONFIG_RELATION = exports.ANALYTIC_TO_OUTPUTS_RELATION = exports.ANALYTIC_TO_INPUTS_RELATION = exports.ENTITY_TO_ANALYTIC_RELATION = exports.CONTEXT_TO_ENTITY_RELATION = exports.CONFIG_TYPE = exports.OUTPUTS_TYPE = exports.INPUTS_TYPE = exports.TRACKING_METHOD_TYPE = exports.ANALYTIC_TYPE = exports.ENTITY_TYPE = exports.CONTEXT_TYPE = void 0;
exports.ENTITY_TYPES = exports.ANALYTIC_STATUS = exports.TRIGGER_TYPE = exports.TRACK_METHOD = exports.ANALYTIC_RESULT_TYPE = exports.ENDPOINT_NODE_TYPE = exports.CONTROL_ENDPOINT_RELATIONS = exports.ENDPOINT_RELATIONS = exports.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS = exports.ATTRIBUTE_TRIGGER_AT_START = exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = void 0;
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
    Building: "geographicBuilding",
    Floor: "geographicFloor",
    Room: "geographicRoom",
    Equipment: "BIMObject",
    "Floor Group": "geographicFloorGroup",
    "Room Group": "geographicRoomGroup",
    "Equipment Group": "BIMObjectGroup",
    Other: undefined
});
// *** Categories ***
exports.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS = "Algorithm parameters";
exports.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS = "Ticket localization parameters";
exports.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS = "Result parameters";
exports.CATEGORY_ATTRIBUTE_TRACKING_METHOD_PARAMETERS = "Tracking parameters";
exports.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS = "Twilio parameters";
exports.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS = "Google chat parameters";
exports.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS = "Endpoint creation parameters";
exports.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS = "Trigger parameters";
exports.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES = "IO dependencies";
exports.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS = "Analytic parameters";
exports.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING = "Algorithm index mapping";
exports.ATTRIBUTE_SEPARATOR = "_";
exports.ATTRIBUTE_VALUE_SEPARATOR = ",";
exports.ATTRIBUTE_LAST_EXECUTION_TIME = "lastExecutionTime";
exports.ATTRIBUTE_TRACKING_METHOD = "Tracking method";
exports.ATTRIBUTE_FILTER_VALUE = "Filter value";
exports.ATTRIBUTE_TIMESERIES = "Timeseries intervalTime";
exports.ATTRIBUTE_SEARCH_DEPTH = "Search depth";
exports.ATTRIBUTE_STRICT_DEPTH = "Strict depth";
exports.ATTRIBUTE_SEARCH_RELATIONS = "Search relations";
exports.ATTRIBUTE_TIMESERIES_VALUE_AT_START = "Get timeseries value at start";
exports.ATTRIBUTE_RESULT_TYPE = "Result type";
exports.ATTRIBUTE_RESULT_NAME = "Result name";
exports.ATTRIBUTE_PHONE_NUMBER = "Phone number";
exports.ATTRIBUTE_PHONE_MESSAGE = "Phone message";
exports.ATTRIBUTE_GCHAT_SPACE = "Google chat space name/id";
exports.ATTRIBUTE_GCHAT_MESSAGE = "Google chat message";
exports.ATTRIBUTE_TICKET_CONTEXT_ID = "Ticket context id";
exports.ATTRIBUTE_TICKET_PROCESS_ID = "Ticket category id";
exports.ATTRIBUTE_ALARM_PRIORITY = "Alarm priority";
exports.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST = "Create endpoint if not exist";
exports.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS = "Number of days the timeseries are stored";
exports.ATTRIBUTE_CREATE_ENDPOINT_UNIT = "Unit of the endpoint";
exports.ATTRIBUTE_ANALYTIC_STATUS = "Status";
exports.ATTRIBUTE_ANALYTIC_DESCRIPTION = "Description";
exports.ATTRIBUTE_TRIGGER_AT_START = "Trigger at start";
exports.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS = "Catch up past executions";
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
exports.ALGORITHMS = exports.EXIT = exports.RANDOM_BOOLEAN = exports.RANDOM_BOOLEAN_NUMBER = exports.RANDOM_INTEGER = exports.RANDOM_NUMBER = exports.SUBTRACT_BY = exports.SUM = exports.SUBTRACT = exports.CURRENT_EPOCH_TIME = exports.CONV_NUMBER_TO_BOOLEAN = exports.CONV_BOOLEAN_TO_NUMBER = exports.IS_EMPTY = exports.EQUAL_TO = exports.STANDARD_DEVIATION = exports.DIFFERENCE_THRESHOLD = exports.NOT = exports.OR = exports.AND = exports.TIMESERIES_EDGE_SUBSTRACT = exports.TIMESERIES_SUM = exports.TIMESERIES_IS_EMPTY = exports.TIMESERIES_BOOLEAN_RATE = exports.TIMESERIES_TIME_WEIGHTED_AVERAGE = exports.TIMESERIES_AVERAGE = exports.AVERAGE = exports.THRESHOLD_ZSCORE = exports.THRESHOLD_BETWEEN_OUT = exports.THRESHOLD_BETWEEN_IN = exports.THRESHOLD_BELOW = exports.THRESHOLD_ABOVE = exports.MULTIPLY = exports.MULTIPLY_BY = exports.DIVIDE_BY = exports.DIVIDE = exports.COPY = exports.PUTVALUE = void 0;
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
exports.PUTVALUE = new Algorithm("PUTVALUE", "This algorithm returns the value set by the user (p1) regardless of input.", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the value to inject"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (params["p1"] === undefined) throw new Error("No value provided");
    return params["p1"];
});
exports.COPY = new Algorithm("COPY", "This algorithm returns the value of first input", [
    "number"
], "number", [], (input)=>{
    return input[0];
});
exports.DIVIDE = new Algorithm("DIVIDE", "This algorithm returns the result of the division of the first input by the second input", [
    "number"
], "number", [], (input)=>{
    if (input.length < 2) throw new Error("Not enough inputs");
    if (input[1] === 0) throw new Error("Division by zero");
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
    if (!params) throw new Error("No parameters provided");
    if (params["p1"] === 0) throw new Error("Division by zero");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]}`);
    return input[0] / params["p1"];
});
exports.MULTIPLY_BY = new Algorithm("MULTIPLY_BY", "This algorithm returns the result of the multiplication of the first input by the value set by the user (p1)", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the value to multiply by"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]}`);
    return input[0] * params["p1"];
});
exports.MULTIPLY = new Algorithm("MULTIPLY", "This algorithm returns the result of the multiplication of the first input by the second input", [
    "number"
], "number", [], (input)=>{
    if (input.length < 2) throw new Error("Not enough inputs");
    return input[0] * input[1];
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]}`);
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]}`);
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid p1 parameter type. Expected number, got ${typeof params["p1"]}`);
    if (typeof params["p2"] !== "number") throw new Error(`Invalid p2 parameter type. Expected number, got ${typeof params["p2"]}`);
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid p1 parameter type. Expected number, got ${typeof params["p1"]}`);
    if (typeof params["p2"] !== "number") throw new Error(`Invalid p2 parameter type. Expected number, got ${typeof params["p2"]}`);
    const p1 = params["p1"];
    const p2 = params["p2"];
    const min = Math.min(p1, p2);
    const max = Math.max(p1, p2);
    for (const n of input){
        if (n <= min || n >= max) return true;
    }
    return false;
});
exports.THRESHOLD_ZSCORE = new Algorithm("THRESHOLD_ZSCORE", `This algorithm is used to detect anomalies in a timeseries. 
   The Z-score is a measure of how many standard deviations an element is from the mean.
   It's calculated as Z = (X - mean) / stdDev 
   where X is the value, mean is the average of the timeserie and stdDev is the standard deviation of the timeserie.
   The threshold is a number set by the user. If the Z-score of the last value of the timeserie is above the threshold,
   the algorithm returns true, otherwise it returns false.`, [
    "Timeseries"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the threshold value"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid p1 parameter type. Expected number, got ${typeof params["p1"]}`);
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length === 0) throw new Error("Timeseries is empty");
    const threshold = params["p1"];
    const mean = dataInput.reduce((acc, current)=>acc + current.value, 0) / dataInput.length;
    const variance = dataInput.reduce((acc, current)=>acc + Math.pow(current.value - mean, 2), 0) / dataInput.length;
    const stdDev = Math.sqrt(variance);
    const zScore = (dataInput[dataInput.length - 1].value - mean) / stdDev;
    return zScore > threshold;
});
exports.AVERAGE = new Algorithm("AVERAGE", "This algorithm returns the average of the inputs", [
    "number"
], "number", [], (input)=>{
    return input.reduce((acc, current)=>acc + current, 0) / input.length;
});
exports.TIMESERIES_AVERAGE = new Algorithm("TIMESERIES_AVERAGE", "This algorithm returns the average of the timeseries", [
    "Timeseries"
], "number", [], (input)=>{
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length === 0) throw new Error("Timeseries is empty");
    return dataInput.reduce((acc, current)=>acc + current.value, 0) / dataInput.length;
});
exports.TIMESERIES_TIME_WEIGHTED_AVERAGE = new Algorithm("TIMESERIES_TIME_WEIGHTED_AVERAGE", "This algorithm calculates the time-weighted average value of a timeseries. It takes into account the time intervals between successive data points to compute the average.", [
    "Timeseries"
], "number", [
    {
        name: "p1",
        type: "string",
        description: " 'normal' (default) => No interpolation , 'linear' => linear interpolation for two successive points"
    }
], (input, params)=>{
    const linearInterpolation = params && params["p1"] === "linear";
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length < 2) throw new Error("Insufficient data. At least two timeseries data points are required.");
    dataInput.sort((a, b)=>a.date - b.date);
    let sum = 0;
    for(let i = 0; i < dataInput.length - 1; i++){
        const timeInterval = dataInput[i + 1].date - dataInput[i].date;
        if (linearInterpolation) {
            // For linear interpolation, take the average value of the current and next point
            const avgValue = (dataInput[i].value + dataInput[i + 1].value) / 2;
            sum += avgValue * timeInterval;
        } else // Without interpolation, use the current value
        sum += dataInput[i].value * timeInterval;
    }
    const totalTimeInterval = dataInput[dataInput.length - 1].date - dataInput[0].date;
    if (totalTimeInterval <= 0) throw new Error("Invalid date range. Ensure data is correctly ordered and spans a positive time interval.");
    const average = sum / totalTimeInterval;
    return average;
});
exports.TIMESERIES_BOOLEAN_RATE = new Algorithm("TIMESERIES_BOOLEAN_RATE", "This algorithm calculates a rate on boolean timeseries (0 | 1).", [
    "Timeseries"
], "number", [
    {
        name: "p1",
        type: "string",
        description: "Ratio || Percentage   (write one of the two, Ratio will be used by default)"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "string") throw new Error(`Invalid p1 parameter type. Expected string, got ${typeof params["p1"]}`);
    const percentageResult = params["p1"] === "Percentage";
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length === 0) throw new Error("Timeseries is empty");
    // Ensure input is sorted by time
    dataInput.sort((a, b)=>a.date - b.date);
    let sum = 0;
    for(let i = 0; i < dataInput.length - 1; i++){
        // Calculate the difference in time
        const deltaTime = dataInput[i + 1].date - dataInput[i].date;
        // Calculate the average value between two points
        //const avgValue = (dataInput[i+1].value + dataInput[i].value) / 2;
        sum += dataInput[i].value * deltaTime;
    }
    if (!percentageResult) return sum / (dataInput[dataInput.length - 1].date - dataInput[0].date);
    else return sum / (dataInput[dataInput.length - 1].date - dataInput[0].date) * 100;
});
exports.TIMESERIES_IS_EMPTY = new Algorithm("TIMESERIES_IS_EMPTY", "This algorithm returns true if the input is an empty timeseries", [
    "Timeseries"
], "boolean", [], (input)=>{
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    return dataInput.length === 0;
});
exports.TIMESERIES_SUM = new Algorithm("TIMESERIES_SUM", "This algorithm returns the sum of the timeseries", [
    "Timeseries"
], "number", [], (input)=>{
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length === 0) throw new Error("Timeseries is empty");
    return dataInput.reduce((acc, current)=>acc + current.value, 0);
});
exports.TIMESERIES_EDGE_SUBSTRACT = new Algorithm("TIMESERIES_EDGE_SUBSTRACT", "This algorithm returns the difference between the last and first value of the timeseries", [
    "Timeseries"
], "number", [], (input)=>{
    const dataInput = input.reduce((acc, curr)=>acc.concat(...curr), []);
    if (dataInput.length < 2) throw new Error("Timeseries should contain at least two values");
    return dataInput[dataInput.length - 1].value - dataInput[0].value;
});
exports.AND = new Algorithm("AND", "This algorithm returns true if all the inputs are true", [
    "boolean"
], "boolean", [], (input)=>{
    return !input.includes(false);
});
exports.OR = new Algorithm("OR", "This algorithm returns true if at least one of the inputs is true", [
    "boolean"
], "boolean", [], (input)=>{
    return input.includes(true);
});
exports.NOT = new Algorithm("NOT", "This algorithm returns true if all the inputs are false", [
    "boolean"
], "boolean", [], (input)=>{
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid p1 parameter type. Expected number, got ${typeof params["p1"]}`);
    const treshold = params["p1"];
    const first = input[0];
    for (const n of input){
        if (Math.abs(n - first) > treshold) return true;
    }
    return false;
});
exports.STANDARD_DEVIATION = new Algorithm("STANDARD_DEVIATION", "This algorithm returns the standard deviation of the inputs", [
    "number"
], "number", [], (input)=>{
    const n = input.length;
    const mean = input.reduce((a, b)=>a + b) / n;
    return Math.sqrt(input.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
});
exports.EQUAL_TO = new Algorithm("EQUAL_TO", "This algorithm returns true if all inputs are equal to the parameter", [
    "number",
    "string",
    "boolean"
], "boolean", [
    {
        name: "p1",
        type: "number",
        description: "the value to compare to"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    for (const i of input){
        if (i !== params["p1"]) return false;
    }
    return true;
});
exports.IS_EMPTY = new Algorithm("IS_EMPTY", "This algorithm returns true if the input is an empty list", [
    "number",
    "string",
    "boolean"
], "boolean", [], (input)=>{
    return input.length === 0;
});
exports.CONV_BOOLEAN_TO_NUMBER = new Algorithm("CONV_BOOLEAN_TO_NUMBER", "This algorithm converts a boolean to a number. True becomes 1, false becomes 0", [
    "boolean"
], "number", [], (input)=>{
    return input[0] ? 1 : 0;
});
exports.CONV_NUMBER_TO_BOOLEAN = new Algorithm("CONV_NUMBER_TO_BOOLEAN", "This algorithm converts a number to a boolean (0 is false, everything else is true)", [
    "number"
], "boolean", [], (input)=>{
    return input[0] !== 0;
});
exports.CURRENT_EPOCH_TIME = new Algorithm("CURRENT_EPOCH_TIME", "This algorithm returns the current epoch time", [], "number", [], // eslint-disable-next-line @typescript-eslint/no-unused-vars
(input)=>{
    return Date.now();
});
exports.SUBTRACT = new Algorithm("SUBTRACT", "This algorithm returns the result of the subtraction of the first input by the second input", [
    "number"
], "number", [], (input)=>{
    return input[0] - input[1];
});
exports.SUM = new Algorithm("SUM", "This algorithm returns the result of the sum of the inputs", [
    "number"
], "number", [], (input)=>{
    return input.reduce((acc, current)=>acc + current, 0);
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
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number") throw new Error(`Invalid p1 parameter type. Expected number, got ${typeof params["p1"]}`);
    return input[0] - params["p1"];
});
exports.RANDOM_NUMBER = new Algorithm("RANDOM_NUMBER", "This algorithm returns a random number between the two values set by the user", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the minimum value"
    },
    {
        name: "p2",
        type: "number",
        description: "the maximum value"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number" || typeof params["p2"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]} or ${typeof params["p2"]}`);
    return Math.random() * (params["p2"] - params["p1"]) + params["p1"];
});
exports.RANDOM_INTEGER = new Algorithm("RANDOM_INTEGER", "This algorithm returns a random integer between the two values set by the user", [
    "number"
], "number", [
    {
        name: "p1",
        type: "number",
        description: "the minimum value"
    },
    {
        name: "p2",
        type: "number",
        description: "the maximum value"
    }
], (input, params)=>{
    if (!params) throw new Error("No parameters provided");
    if (typeof params["p1"] !== "number" || typeof params["p2"] !== "number") throw new Error(`Invalid parameter type. Expected number, got ${typeof params["p1"]} or ${typeof params["p2"]}`);
    return Math.floor(Math.random() * (params["p2"] - params["p1"] + 1) + params["p1"]);
});
exports.RANDOM_BOOLEAN_NUMBER = new Algorithm("RANDOM_BOOLEAN_NUMBER", "This algorithm returns a random boolean value 0 | 1", [], "number", [], ()=>{
    return Math.round(Math.random());
});
exports.RANDOM_BOOLEAN = new Algorithm("RANDOM_BOOLEAN", "This algorithm returns a random boolean value true | false", [], "boolean", [], ()=>{
    return Math.random() < 0.5;
});
exports.EXIT = new Algorithm("EXIT", "This algorithm is used to stop the execution of the workflow if the first input is true", [
    "boolean"
], "void", [], (input)=>{
    return input[0];
});
exports.ALGORITHMS = {
    PUTVALUE: exports.PUTVALUE,
    COPY: exports.COPY,
    DIVIDE: exports.DIVIDE,
    DIVIDE_BY: exports.DIVIDE_BY,
    MULTIPLY: exports.MULTIPLY,
    MULTIPLY_BY: exports.MULTIPLY_BY,
    THRESHOLD_ABOVE: exports.THRESHOLD_ABOVE,
    THRESHOLD_BELOW: exports.THRESHOLD_BELOW,
    THRESHOLD_BETWEEN_IN: exports.THRESHOLD_BETWEEN_IN,
    THRESHOLD_BETWEEN_OUT: exports.THRESHOLD_BETWEEN_OUT,
    THRESHOLD_ZSCORE: exports.THRESHOLD_ZSCORE,
    AVERAGE: exports.AVERAGE,
    TIMESERIES_IS_EMPTY: exports.TIMESERIES_IS_EMPTY,
    TIMESERIES_AVERAGE: exports.TIMESERIES_AVERAGE,
    TIMESERIES_TIME_WEIGHTED_AVERAGE: exports.TIMESERIES_TIME_WEIGHTED_AVERAGE,
    TIMESERIES_SUM: exports.TIMESERIES_SUM,
    TIMESERIES_BOOLEAN_RATE: exports.TIMESERIES_BOOLEAN_RATE,
    TIMESERIES_EDGE_SUBSTRACT: exports.TIMESERIES_EDGE_SUBSTRACT,
    AND: exports.AND,
    OR: exports.OR,
    NOT: exports.NOT,
    DIFFERENCE_THRESHOLD: exports.DIFFERENCE_THRESHOLD,
    STANDARD_DEVIATION: exports.STANDARD_DEVIATION,
    EQUAL_TO: exports.EQUAL_TO,
    IS_EMPTY: exports.IS_EMPTY,
    CONV_BOOLEAN_TO_NUMBER: exports.CONV_BOOLEAN_TO_NUMBER,
    CONV_NUMBER_TO_BOOLEAN: exports.CONV_NUMBER_TO_BOOLEAN,
    CURRENT_EPOCH_TIME: exports.CURRENT_EPOCH_TIME,
    SUBTRACT: exports.SUBTRACT,
    SUBTRACT_BY: exports.SUBTRACT_BY,
    SUM: exports.SUM,
    RANDOM_NUMBER: exports.RANDOM_NUMBER,
    RANDOM_BOOLEAN_NUMBER: exports.RANDOM_BOOLEAN_NUMBER,
    RANDOM_BOOLEAN: exports.RANDOM_BOOLEAN,
    RANDOM_INTEGER: exports.RANDOM_INTEGER,
    EXIT: exports.EXIT
};

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
const algorithms_1 = require("5ef2c727f601ca1b");
const axios_1 = require("36fa03571c49f998");
const qs_1 = require("60a970666a1a566a");
const Errors_1 = require("86de144a8fb8ffa");
const cronParser = require("14d3963a1cf01691");
// Logging function
function logMessage(message) {}
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
    updateLastExecutionTime(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const configNode = yield this.getConfig(analyticId);
            if (!configNode) throw Error("Config node not found");
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(configNode.id.get());
            yield spinal_env_viewer_plugin_documentation_service_1.attributeService.addAttributeByCategoryName(realNode, CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS, CONSTANTS.ATTRIBUTE_LAST_EXECUTION_TIME, Date.now().toString(), "number");
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
    deleteConfigNode(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const configNode = yield this.getConfig(analyticId);
            if (configNode) yield (0, utils_1.safeDeleteNode)(configNode.id.get());
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
    getFormattedInputDataByIndex(analyticId, followedEntity, inputIndex, referenceEpochTime = Date.now()) {
        return __awaiter(this, void 0, void 0, function*() {
            const entryDataModel = yield this.getEntryDataModelByInputIndex(analyticId, followedEntity, inputIndex);
            if (!entryDataModel) return undefined;
            const trackingMethod = yield this.getTrackingMethod(analyticId);
            if (!trackingMethod) return undefined;
            const trackingParams = yield this.getAttributesFromNode(trackingMethod.id.get(), inputIndex);
            if (!trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES] || trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES] == 0) {
                const currentValue = yield (0, utils_1.getValueModelFromEntry)(entryDataModel);
                const assertedValue = currentValue.get();
                return assertedValue;
            } else {
                const spinalTs = yield this.spinalServiceTimeseries.getOrCreateTimeSeries(entryDataModel.id.get());
                const end = referenceEpochTime;
                const start = end - trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES];
                const injectLastValueBeforeStart = trackingParams[CONSTANTS.ATTRIBUTE_TIMESERIES_VALUE_AT_START];
                let data = injectLastValueBeforeStart ? yield spinalTs.getFromIntervalTime(start, end, true) : yield spinalTs.getFromIntervalTime(start, end);
                if (injectLastValueBeforeStart) data = (0, utils_1.timeseriesPreProcessing)(start, end, data); // tidy up the data mainly at start and end
                return data;
            }
        });
    }
    getAnalyticDetails(analyticId) {
        return __awaiter(this, void 0, void 0, function*() {
            const config = yield this.getConfig(analyticId);
            const trackingMethod = yield this.getTrackingMethod(analyticId);
            const followedEntity = yield this.getFollowedEntity(analyticId);
            const entity = yield this.getEntityFromAnalytic(analyticId);
            const analyticNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(analyticId);
            if (!analyticNode) throw new Error("No analytic node found");
            if (!config) throw new Error("No config node found");
            if (!trackingMethod) throw new Error("No tracking method node found");
            if (!followedEntity) throw new Error("No followed entity node found");
            if (!entity) throw new Error("No entity node found");
            const configNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(config.id.get());
            const trackingMethodNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(trackingMethod.id.get());
            const configCategoryAttributes = (yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategory(configNode)).map((el)=>{
                return el.nameCat;
            });
            const trackingMethodCategoryAttributes = (yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getCategory(trackingMethodNode)).map((el)=>{
                return el.nameCat;
            });
            const configInfo = {};
            const trackingMethodInfo = {};
            for (const cat of configCategoryAttributes){
                const attributes = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(configNode, cat);
                configInfo[cat] = attributes;
            }
            for (const cat of trackingMethodCategoryAttributes){
                const attributes = yield spinal_env_viewer_plugin_documentation_service_1.attributeService.getAttributesByCategory(trackingMethodNode, cat);
                trackingMethodInfo[cat] = attributes;
            }
            const analyticDetails = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(analyticId);
            const followedEntityId = followedEntity.id.get();
            const res = {
                entityNodeInfo: entity,
                analyticName: analyticDetails.name.get(),
                config: configInfo,
                trackingMethod: trackingMethodInfo,
                followedEntityId
            };
            return res;
        });
    }
    /*public async createAnalytic(contextId : string, entityId :string , analyticDetails : IAnalyticDetails){
      const analyticCreationInfo : IAnalytic = {name : analyticDetails.analyticName, description : ''};
      const analyticNode = await this.addAnalytic(analyticCreationInfo,contextId,entityId)
      const InputNode = await this.addInputsNode(analyticNode.id.get(),contextId);
      const OutputNode = await this.addOutputsNode(analyticNode.id.get(),contextId);
      //const configNode = await this.addConfig(analyticDetails.config,analyticNode.id.get(),contextId);
    }*/ findExecutionOrder(dependencies) {
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
    recExecuteAlgorithm(analyticId, entity, algoIndexName, ioDependencies, algoIndexMapping, algoParams, referenceEpochTime = Date.now()) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const inputs = [];
            const myDependencies = (_b = (_a = ioDependencies[algoIndexName]) === null || _a === void 0 ? void 0 : _a.split(CONSTANTS.ATTRIBUTE_VALUE_SEPARATOR)) !== null && _b !== void 0 ? _b : [];
            for (const dependency of myDependencies){
                if (!dependency) continue; // if the dependency is empty
                // if dependency is an algorithm then rec call with that algorithm
                if (dependency.startsWith("A")) {
                    // save the result of the algorithm in the inputs array
                    const res = yield this.recExecuteAlgorithm(analyticId, entity, dependency, ioDependencies, algoIndexMapping, algoParams);
                    inputs.push(res);
                } else {
                    // if dependency is an input then get the value of the input
                    const inputData = yield this.getFormattedInputDataByIndex(analyticId, entity, dependency, referenceEpochTime);
                    if (inputData == undefined) throw new Error(`Input data ${dependency} could not be retrieved`);
                    inputs.push(inputData);
                }
            }
            // after the inputs are ready we can execute the algorithm
            const algorithm_name = algoIndexMapping[algoIndexName];
            const algorithmParameters = this.filterAlgorithmParametersAttributesByIndex(algoParams, algoIndexName);
            const result = algorithms_1.ALGORITHMS[algorithm_name].run(inputs, algorithmParameters);
            if (result == undefined) throw new Error(`Algorithm ${algorithm_name} returned undefined`);
            if (algorithm_name === "EXIT" && result === true) throw new Errors_1.ExitAnalyticError("EXIT algorithm triggered");
            return result;
        });
    }
    /**
     * Performs an analysis on an entity for an analytic.
     * @param {string} analyticId The ID of the analytic.
     * @param {SpinalNodeRef} entity The SpinalNodeRef for the entity to analyze.
     * @returns {*} {Promise<void>}
     * @memberof AnalyticService
     */ doAnalysisOnEntity(analyticId, entity, configAttributes, executionTime = Date.now()) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                // Get the io dependencies of the analytic
                if (!configAttributes) {
                    const configNode = yield this.getConfig(analyticId);
                    if (!configNode) return {
                        success: false,
                        error: "No config node found"
                    };
                    configAttributes = yield this.getAllCategoriesAndAttributesFromNode(configNode.id.get());
                }
                // const ioDependencies = await this.getAttributesFromNode(
                //   configNode.id.get(),
                //   CONSTANTS.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES
                // );
                // const algoIndexMapping = await this.getAttributesFromNode(
                //   configNode.id.get(),
                //   CONSTANTS.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING
                // );
                // const algoParams = await this.getAttributesFromNode(
                //   configNode.id.get(),
                //   CONSTANTS.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS
                // );
                const ioDependencies = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES];
                const algoIndexMapping = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ALGORITHM_INDEX_MAPPING];
                const algoParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ALGORTHM_PARAMETERS];
                const R = ioDependencies["R"];
                const result = yield this.recExecuteAlgorithm(analyticId, entity, R, ioDependencies, algoIndexMapping, algoParams, executionTime);
                return yield this.applyResult(result, analyticId, configAttributes, entity, executionTime);
            } catch (error) {
                const analyticInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(analyticId);
                const positionString = " on " + entity.name.get() + " in analytic : " + analyticInfo.name.get() + " at " + Date.now();
                if (error instanceof Error || error instanceof Errors_1.ExitAnalyticError) return {
                    success: false,
                    error: error.message + positionString
                };
                else return {
                    success: false,
                    error: "An unknown error occurred" + positionString
                };
            }
        });
    }
    /**
     * Performs an analysis on all entities for an analytic.
     * @param {string} analyticId The ID of the analytic.
     * @return {*}  {Promise<void>}
     * @memberof AnalyticService
     */ doAnalysis(analyticId, triggerObject) {
        return __awaiter(this, void 0, void 0, function*() {
            const entities = yield this.getWorkingFollowedEntities(analyticId);
            if (!entities) return [
                {
                    success: false,
                    error: "No entities found"
                }
            ];
            const configNode = yield this.getConfig(analyticId);
            if (!configNode) return [
                {
                    success: false,
                    error: "No config node found"
                }
            ];
            const configAttributes = yield this.getAllCategoriesAndAttributesFromNode(configNode.id.get());
            const lastExecutionTime = parseInt(configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS][CONSTANTS.ATTRIBUTE_LAST_EXECUTION_TIME]);
            const shouldCatchUpMissedExecutions = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS][CONSTANTS.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS];
            let executionsTimes = [];
            if (shouldCatchUpMissedExecutions) {
                if (triggerObject.triggerType === CONSTANTS.TRIGGER_TYPE.CRON) executionsTimes = (0, utils_1.getCronMissingExecutionTimes)(triggerObject.triggerValue, lastExecutionTime);
                if (triggerObject.triggerType === CONSTANTS.TRIGGER_TYPE.INTERVAL_TIME) executionsTimes = (0, utils_1.getIntervalTimeMissingExecutionTimes)(parseInt(triggerObject.triggerValue), lastExecutionTime);
            }
            executionsTimes.push(Date.now());
            // Adjust the last execution time for cron triggers to match the exact time
            if (triggerObject.triggerType === CONSTANTS.TRIGGER_TYPE.CRON) {
                const interval = cronParser.parseExpression(triggerObject.triggerValue);
                const nextExecutionTime = interval.prev().getTime();
                executionsTimes[executionsTimes.length - 1] = nextExecutionTime;
            }
            logMessage(`executionsTimes : ${executionsTimes}`);
            const analysisPromises = entities.map((entity)=>executionsTimes.map((executionTime)=>this.doAnalysisOnEntity(analyticId, entity, configAttributes, executionTime)));
            const results = yield Promise.all(analysisPromises.flat());
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
     */ applyResult(result, analyticId, configAttributes, followedEntityNode, referenceEpochTime = Date.now()) {
        return __awaiter(this, void 0, void 0, function*() {
            if (result === undefined) return {
                success: false,
                error: "Result is undefined"
            };
            //const params = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS];
            switch(configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_TYPE]){
                case CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET:
                    yield this.handleTicketResult(result, analyticId, configAttributes, followedEntityNode, "Ticket");
                    return {
                        success: true,
                        resultValue: result,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.CONTROL_ENDPOINT:
                    yield this.handleControlEndpointResult(result, followedEntityNode, configAttributes, referenceEpochTime);
                    return {
                        success: true,
                        resultValue: result,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.CONTROL_ENDPOINT
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.ENDPOINT:
                    yield this.handleEndpointResult(result, followedEntityNode, configAttributes, referenceEpochTime);
                    return {
                        success: true,
                        resultValue: result,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.ENDPOINT
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.ALARM:
                    return yield this.handleTicketResult(result, analyticId, configAttributes, followedEntityNode, "Alarm");
                case CONSTANTS.ANALYTIC_RESULT_TYPE.SMS:
                    return yield this.handleSMSResult(result, analyticId, configAttributes, followedEntityNode);
                case CONSTANTS.ANALYTIC_RESULT_TYPE.LOG:
                    console.log(`LOG : ${configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_NAME]} \t|\t Result : ${result}`);
                    return {
                        success: true,
                        resultValue: result,
                        error: "",
                        resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.LOG
                    };
                case CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE:
                    return this.handleGChatMessageResult(result, analyticId, configAttributes, followedEntityNode);
                case CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_ORGAN_CARD:
                    return this.handleGChatOrganCardResult(result, analyticId, configAttributes, followedEntityNode);
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
     */ handleTicketResult(result, analyticId, configAttributes, followedEntityNode, ticketType // Alarm or Ticket
    ) {
        return __awaiter(this, void 0, void 0, function*() {
            if (result == false) return {
                success: true,
                error: "",
                resultValue: result,
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET
            };
            const outputNode = yield this.getOutputsNode(analyticId);
            if (!outputNode) return {
                success: false,
                error: " Output Node not found"
            };
            const analyticContextId = this.getContextIdOfAnalytic(analyticId);
            if (!analyticContextId) return {
                success: false,
                error: " Analytic context id not found"
            };
            const ticketInfo = {
                name: `${configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_NAME]} : ${followedEntityNode.name.get()}`
            };
            (0, utils_1.addTicketAlarm)(ticketInfo, configAttributes, analyticContextId, outputNode.id.get(), followedEntityNode.id.get(), ticketType);
            return {
                success: true,
                error: "",
                resultValue: result,
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.TICKET
            };
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
     */ handleControlEndpointResult(result, followedEntityNode, configAttributes, referenceEpochTime) {
        return __awaiter(this, void 0, void 0, function*() {
            const controlEndpointNode = yield (0, utils_1.findEndpoint)(followedEntityNode.id.get(), configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_NAME], 0, true, [], CONSTANTS.CONTROL_ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
            if (!controlEndpointNode) return {
                success: false,
                error: " Control endpoint node not found"
            };
            const controlEndpoint = yield controlEndpointNode.element.load();
            controlEndpoint.currentValue.set(result);
            const bool = yield this.spinalServiceTimeseries.insertFromEndpoint(controlEndpointNode.id.get(), result, referenceEpochTime);
            if (!bool) throw new Error("Failed to insert data in timeseries");
            logMessage(`CP ${controlEndpointNode.name.get()} updated with value : ${result} on ${followedEntityNode.name.get()} at ${referenceEpochTime}`);
            //console.log(`CP ${controlEndpointNode.name.get()} updated with value : , ${result},  on , ${followedEntityNode.name.get()}`)
            return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.CONTROL_ENDPOINT
            };
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
     */ handleEndpointResult(result, followedEntityNode, configAttributes, referenceEpochTime) {
        return __awaiter(this, void 0, void 0, function*() {
            let endpointNode = yield (0, utils_1.findEndpoint)(followedEntityNode.id.get(), configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_NAME], 0, true, [], CONSTANTS.ENDPOINT_RELATIONS, CONSTANTS.ENDPOINT_NODE_TYPE);
            if (!endpointNode && !configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST]) return {
                success: false,
                error: "Endpoint node not found"
            };
            if (!endpointNode) {
                endpointNode = yield (0, utils_1.createEndpoint)(referenceEpochTime, followedEntityNode.id.get(), configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS][CONSTANTS.ATTRIBUTE_RESULT_NAME], result, configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS][CONSTANTS.ATTRIBUTE_CREATE_ENDPOINT_UNIT], configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS][CONSTANTS.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS]);
                if (!endpointNode) return {
                    success: false,
                    error: "Failed endpoint creation"
                };
            }
            const endpoint = yield endpointNode.element.load();
            endpoint.currentValue.set(result);
            const bool = yield this.spinalServiceTimeseries.insertFromEndpoint(endpointNode.id.get(), result, referenceEpochTime);
            if (!bool) return {
                success: false,
                error: "Failed to insert data in timeseries"
            };
            logMessage(`EP ${endpointNode.name.get()} updated with value : ${result} on ${followedEntityNode.name.get()} at ${referenceEpochTime}`);
            return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.ENDPOINT
            };
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
     */ handleSMSResult(result, analyticId, configAttributes, followedEntityNode) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.twilioAccountSid || !this.twilioAuthToken || !this.twilioFromNumber) return {
                success: false,
                error: "Twilio parameters not found"
            };
            if (result == false) return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.SMS
            };
            console.log("SMS result");
            const twilioParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_TWILIO_PARAMETERS];
            const toNumber = twilioParams[CONSTANTS.ATTRIBUTE_PHONE_NUMBER];
            let message = twilioParams[CONSTANTS.ATTRIBUTE_PHONE_MESSAGE];
            const variables = message.match(/[^{}]+(?=\})/g);
            if (variables) for (const variable of variables){
                const value = yield this.getFormattedInputDataByIndex(analyticId, followedEntityNode, variable);
                message = message.replace(`{${variable}}`, "" + value);
            }
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
            return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.SMS
            };
        });
    }
    handleGChatMessageResult(result, analyticId, configAttributes, followedEntityNode) {
        return __awaiter(this, void 0, void 0, function*() {
            console.log("Handling Google chat message result");
            if (result == false) return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE
            };
            const analyticParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS];
            const gChatParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS];
            const spaceName = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_SPACE];
            let message = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_MESSAGE];
            const analyticDescription = analyticParams[CONSTANTS.ATTRIBUTE_ANALYTIC_DESCRIPTION];
            const variables = message.match(/[^{}]+(?=\})/g);
            if (variables) for (const variable of variables){
                const value = yield this.getFormattedInputDataByIndex(analyticId, followedEntityNode, variable);
                message = message.replace(`{${variable}}`, "" + value);
            }
            const resultInfo = {
                success: true,
                resultValue: result,
                error: "",
                spaceName: spaceName,
                message: "The following message has been triggered by an analytic.\n \nAnalysis on item : " + followedEntityNode.name.get() + "\nDescription : " + analyticDescription + "\nMessage : " + message,
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE
            };
            return resultInfo;
        });
    }
    handleGChatOrganCardResult(result, analyticId, configAttributes, followedEntityNode) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function*() {
            console.log("Handling Google chat organ card result");
            if (result == false) return {
                success: true,
                resultValue: result,
                error: "",
                resultType: CONSTANTS.ANALYTIC_RESULT_TYPE.GCHAT_MESSAGE
            };
            const analyticParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_ANALYTIC_PARAMETERS];
            const resultParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS];
            const gChatParams = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_GCHAT_PARAMETERS];
            const title = resultParams[CONSTANTS.ATTRIBUTE_RESULT_NAME];
            const spaceName = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_SPACE];
            let message = gChatParams[CONSTANTS.ATTRIBUTE_GCHAT_MESSAGE];
            const variables = message.match(/[^{}]+(?=\})/g);
            if (variables) for (const variable of variables){
                const value = yield this.getFormattedInputDataByIndex(analyticId, followedEntityNode, variable);
                message = message.replace(`{${variable}}`, "" + value);
            }
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
                resultValue: result,
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

},{"84742e2837e24d3b":"9n7zp","ab099baa5bc4dcd4":"2CVgx","96694bfffb82fe38":"eVs5c","ba6004bd8f5b7210":"9ovXf","e0ff123ace339ff9":"fR5zB","9b0a772027d1e940":"4rJ3F","89679a198a351a56":"h4DC9","a7ef2ed4d2a4b5d2":"SIBaV","afce19c865fe8fd0":"5rYVR","6eac5aca4b2a8fb8":"3BNTc","57aed6b4a1f01a2b":"3VBF8","5ef2c727f601ca1b":"a1B4H","36fa03571c49f998":"jo6P5","60a970666a1a566a":"kW4GH","86de144a8fb8ffa":"8QYUj","14d3963a1cf01691":"d00sa"}],"eVs5c":[function(require,module,exports) {
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
exports.createEndpoint = exports.timeseriesPreProcessing = exports.getIntervalTimeMissingExecutionTimes = exports.getCronMissingExecutionTimes = exports.safeDeleteNode = exports.addTicketAlarm = exports.formatTrackingMethodsToList = exports.getValueModelFromEntry = exports.findAllCategoriesAndAttributes = exports.findAttributes = exports.findAttribute = exports.findEndpoints = exports.findEndpoint = exports.findNodes = exports.getAvailableData = exports.getChoiceRelationsWithDepth = exports.getRelationsWithDepth = exports.getTicketLocalizationParameters = exports.getAlgorithmParameters = void 0;
const spinal_env_viewer_graph_service_1 = require("9d30dc6765dfaf3f");
const spinal_env_viewer_plugin_documentation_service_1 = require("c7a64ffb1839efda");
const spinal_service_ticket_1 = require("1a169e5a3c86739a");
const spinal_model_bmsnetwork_1 = require("6f4627f209812112");
const InputDataEndpoint_1 = require("26efe0b30d34fce4");
const CONSTANTS = require("164af0ed33d3fe16");
const spinal_models_documentation_1 = require("d0f9dc2618ecd426");
const SingletonTimeSeries_1 = require("d25d62dee5469eb1");
const cronParser = require("e6a19589fa0a1287");
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
 */ function addTicketAlarm(ticketInfos, configAttributes, analyticContextId, outputNodeId, entityNodeId, ticketType) {
    return __awaiter(this, void 0, void 0, function*() {
        const localizationInfo = configAttributes[CONSTANTS.CATEGORY_ATTRIBUTE_TICKET_LOCALIZATION_PARAMETERS];
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
function getCronMissingExecutionTimes(cronSyntax, lastExecutedTime) {
    const now = new Date();
    const lastExecutedDate = new Date(lastExecutedTime);
    const executionTimes = [];
    try {
        // Initialize options for cron-parser
        const options = {
            currentDate: lastExecutedDate,
            endDate: now
        };
        // Parse the cron syntax with the provided options
        const interval = cronParser.parseExpression(cronSyntax, options);
        // Using a while loop to fetch the next valid date within the range
        let nextDate = interval.next();
        while(nextDate && nextDate.toDate() <= now){
            executionTimes.push(nextDate.getTime());
            try {
                nextDate = interval.next();
            } catch (e) {
                break;
            }
        }
    } catch (err) {
        console.error("Failed to parse cron syntax:", err);
    }
    executionTimes.pop(); // Remove the last date (current time ) as it is
    return executionTimes;
}
exports.getCronMissingExecutionTimes = getCronMissingExecutionTimes;
function getIntervalTimeMissingExecutionTimes(intervalTime, lastExecutedTime) {
    const now = new Date();
    const lastExecutedDate = new Date(lastExecutedTime);
    const executionTimes = [];
    try {
        let nextDate = new Date(lastExecutedDate.getTime() + intervalTime);
        while(nextDate <= now){
            executionTimes.push(nextDate.getTime());
            nextDate = new Date(nextDate.getTime() + intervalTime);
        }
    } catch (err) {
        console.error("Failed to parse interval time:", err);
    }
    return executionTimes;
}
exports.getIntervalTimeMissingExecutionTimes = getIntervalTimeMissingExecutionTimes;
function timeseriesPreProcessing(start, end, timeseries) {
    if (timeseries.length === 0) return [];
    //shifting the first timeseries to start if it is before start
    if (timeseries[0].date < start) timeseries[0].date = start;
    //copy last value to the end of the timeseries
    timeseries.push({
        date: end,
        value: timeseries[timeseries.length - 1].value
    });
    return timeseries;
}
exports.timeseriesPreProcessing = timeseriesPreProcessing;
function createEndpoint(referenceEpochTime, parentId, endpointName, initialValue, unit, maxDays) {
    return __awaiter(this, void 0, void 0, function*() {
        const endpoint = new InputDataEndpoint_1.InputDataEndpoint(endpointName, initialValue, unit !== null && unit !== void 0 ? unit : "", spinal_model_bmsnetwork_1.InputDataEndpointDataType.Integer, spinal_model_bmsnetwork_1.InputDataEndpointType.Other);
        const res = new spinal_model_bmsnetwork_1.SpinalBmsEndpoint(endpoint.name, endpoint.path, endpoint.currentValue, endpoint.unit, spinal_model_bmsnetwork_1.InputDataEndpointDataType[endpoint.dataType], spinal_model_bmsnetwork_1.InputDataEndpointType[endpoint.type], endpoint.id);
        const childId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            type: spinal_model_bmsnetwork_1.SpinalBmsEndpoint.nodeTypeName,
            name: endpoint.name
        }, res);
        spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(parentId, childId, spinal_model_bmsnetwork_1.SpinalBmsEndpoint.relationName, spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE);
        yield serviceTimeseries.getOrCreateTimeSeries(childId);
        serviceTimeseries.insertFromEndpoint(childId, initialValue, referenceEpochTime);
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(childId);
        yield spinal_env_viewer_plugin_documentation_service_1.attributeService.updateAttribute(realNode, "default", "timeSeries maxDay", {
            value: maxDays
        });
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(childId);
    });
}
exports.createEndpoint = createEndpoint;

},{"9d30dc6765dfaf3f":"9n7zp","c7a64ffb1839efda":"5rYVR","1a169e5a3c86739a":"gi7V0","6f4627f209812112":"gzkbg","26efe0b30d34fce4":"l7xEW","164af0ed33d3fe16":"2CVgx","d0f9dc2618ecd426":"dcbQz","d25d62dee5469eb1":"3VBF8","e6a19589fa0a1287":"d00sa"}],"l7xEW":[function(require,module,exports) {
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

},{"23feab8669d4c2ca":"hIcty"}],"d00sa":[function(require,module,exports) {
"use strict";
var CronExpression = require("c58e2f27069c4f50");
function CronParser() {}
/**
 * Parse crontab entry
 *
 * @private
 * @param {String} entry Crontab file entry/line
 */ CronParser._parseEntry = function _parseEntry(entry) {
    var atoms = entry.split(" ");
    if (atoms.length === 6) return {
        interval: CronExpression.parse(entry)
    };
    else if (atoms.length > 6) return {
        interval: CronExpression.parse(atoms.slice(0, 6).join(" ")),
        command: atoms.slice(6, atoms.length)
    };
    else throw new Error("Invalid entry: " + entry);
};
/**
 * Wrapper for CronExpression.parser method
 *
 * @public
 * @param {String} expression Input expression
 * @param {Object} [options] Parsing options
 * @return {Object}
 */ CronParser.parseExpression = function parseExpression(expression, options) {
    return CronExpression.parse(expression, options);
};
/**
 * Wrapper for CronExpression.fieldsToExpression method
 *
 * @public
 * @param {Object} fields Input fields
 * @param {Object} [options] Parsing options
 * @return {Object}
 */ CronParser.fieldsToExpression = function fieldsToExpression(fields, options) {
    return CronExpression.fieldsToExpression(fields, options);
};
/**
 * Parse content string
 *
 * @public
 * @param {String} data Crontab content
 * @return {Object}
 */ CronParser.parseString = function parseString(data) {
    var blocks = data.split("\n");
    var response = {
        variables: {},
        expressions: [],
        errors: {}
    };
    for(var i = 0, c = blocks.length; i < c; i++){
        var block = blocks[i];
        var matches = null;
        var entry = block.trim(); // Remove surrounding spaces
        if (entry.length > 0) {
            if (entry.match(/^#/)) continue;
            else if (matches = entry.match(/^(.*)=(.*)$/)) response.variables[matches[1]] = matches[2];
            else {
                var result = null;
                try {
                    result = CronParser._parseEntry("0 " + entry);
                    response.expressions.push(result.interval);
                } catch (err) {
                    response.errors[entry] = err;
                }
            }
        }
    }
    return response;
};
/**
 * Parse crontab file
 *
 * @public
 * @param {String} filePath Path to file
 * @param {Function} callback
 */ CronParser.parseFile = function parseFile(filePath, callback) {
    require("fd3dd7d6ee4db7a3").readFile(filePath, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        return callback(null, CronParser.parseString(data.toString()));
    });
};
module.exports = CronParser;

},{"c58e2f27069c4f50":"aYF1I","fd3dd7d6ee4db7a3":"jhUEF"}],"aYF1I":[function(require,module,exports) {
"use strict";
// Load Date class extensions
var CronDate = require("49bdfafd99798f48");
var stringifyField = require("bea502670d38e0b9");
/**
 * Cron iteration loop safety limit
 */ var LOOP_LIMIT = 10000;
/**
 * Construct a new expression parser
 *
 * Options:
 *   currentDate: iterator start date
 *   endDate: iterator end date
 *
 * @constructor
 * @private
 * @param {Object} fields  Expression fields parsed values
 * @param {Object} options Parser options
 */ function CronExpression(fields, options) {
    this._options = options;
    this._utc = options.utc || false;
    this._tz = this._utc ? "UTC" : options.tz;
    this._currentDate = new CronDate(options.currentDate, this._tz);
    this._startDate = options.startDate ? new CronDate(options.startDate, this._tz) : null;
    this._endDate = options.endDate ? new CronDate(options.endDate, this._tz) : null;
    this._isIterator = options.iterator || false;
    this._hasIterated = false;
    this._nthDayOfWeek = options.nthDayOfWeek || 0;
    this.fields = CronExpression._freezeFields(fields);
}
/**
 * Field mappings
 * @type {Array}
 */ CronExpression.map = [
    "second",
    "minute",
    "hour",
    "dayOfMonth",
    "month",
    "dayOfWeek"
];
/**
 * Prefined intervals
 * @type {Object}
 */ CronExpression.predefined = {
    "@yearly": "0 0 1 1 *",
    "@monthly": "0 0 1 * *",
    "@weekly": "0 0 * * 0",
    "@daily": "0 0 * * *",
    "@hourly": "0 * * * *"
};
/**
 * Fields constraints
 * @type {Array}
 */ CronExpression.constraints = [
    {
        min: 0,
        max: 59,
        chars: []
    },
    {
        min: 0,
        max: 59,
        chars: []
    },
    {
        min: 0,
        max: 23,
        chars: []
    },
    {
        min: 1,
        max: 31,
        chars: [
            "L"
        ]
    },
    {
        min: 1,
        max: 12,
        chars: []
    },
    {
        min: 0,
        max: 7,
        chars: [
            "L"
        ]
    }
];
/**
 * Days in month
 * @type {number[]}
 */ CronExpression.daysInMonth = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
/**
 * Field aliases
 * @type {Object}
 */ CronExpression.aliases = {
    month: {
        jan: 1,
        feb: 2,
        mar: 3,
        apr: 4,
        may: 5,
        jun: 6,
        jul: 7,
        aug: 8,
        sep: 9,
        oct: 10,
        nov: 11,
        dec: 12
    },
    dayOfWeek: {
        sun: 0,
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6
    }
};
/**
 * Field defaults
 * @type {Array}
 */ CronExpression.parseDefaults = [
    "0",
    "*",
    "*",
    "*",
    "*",
    "*"
];
CronExpression.standardValidCharacters = /^[,*\d/-]+$/;
CronExpression.dayOfWeekValidCharacters = /^[?,*\dL#/-]+$/;
CronExpression.dayOfMonthValidCharacters = /^[?,*\dL/-]+$/;
CronExpression.validCharacters = {
    second: CronExpression.standardValidCharacters,
    minute: CronExpression.standardValidCharacters,
    hour: CronExpression.standardValidCharacters,
    dayOfMonth: CronExpression.dayOfMonthValidCharacters,
    month: CronExpression.standardValidCharacters,
    dayOfWeek: CronExpression.dayOfWeekValidCharacters
};
CronExpression._isValidConstraintChar = function _isValidConstraintChar(constraints, value) {
    if (typeof value !== "string") return false;
    return constraints.chars.some(function(char) {
        return value.indexOf(char) > -1;
    });
};
/**
 * Parse input interval
 *
 * @param {String} field Field symbolic name
 * @param {String} value Field value
 * @param {Array} constraints Range upper and lower constraints
 * @return {Array} Sequence of sorted values
 * @private
 */ CronExpression._parseField = function _parseField(field, value, constraints) {
    // Replace aliases
    switch(field){
        case "month":
        case "dayOfWeek":
            var aliases = CronExpression.aliases[field];
            value = value.replace(/[a-z]{3}/gi, function(match) {
                match = match.toLowerCase();
                if (typeof aliases[match] !== "undefined") return aliases[match];
                else throw new Error('Validation error, cannot resolve alias "' + match + '"');
            });
            break;
    }
    // Check for valid characters.
    if (!CronExpression.validCharacters[field].test(value)) throw new Error("Invalid characters, got value: " + value);
    // Replace '*' and '?'
    if (value.indexOf("*") !== -1) value = value.replace(/\*/g, constraints.min + "-" + constraints.max);
    else if (value.indexOf("?") !== -1) value = value.replace(/\?/g, constraints.min + "-" + constraints.max);
    //
    // Inline parsing functions
    //
    // Parser path:
    //  - parseSequence
    //    - parseRepeat
    //      - parseRange
    /**
   * Parse sequence
   *
   * @param {String} val
   * @return {Array}
   * @private
   */ function parseSequence(val) {
        var stack = [];
        function handleResult(result) {
            if (result instanceof Array) for(var i = 0, c = result.length; i < c; i++){
                var value = result[i];
                if (CronExpression._isValidConstraintChar(constraints, value)) {
                    stack.push(value);
                    continue;
                }
                // Check constraints
                if (typeof value !== "number" || Number.isNaN(value) || value < constraints.min || value > constraints.max) throw new Error("Constraint error, got value " + value + " expected range " + constraints.min + "-" + constraints.max);
                stack.push(value);
            }
            else {
                if (CronExpression._isValidConstraintChar(constraints, result)) {
                    stack.push(result);
                    return;
                }
                var numResult = +result;
                // Check constraints
                if (Number.isNaN(numResult) || numResult < constraints.min || numResult > constraints.max) throw new Error("Constraint error, got value " + result + " expected range " + constraints.min + "-" + constraints.max);
                if (field === "dayOfWeek") numResult = numResult % 7;
                stack.push(numResult);
            }
        }
        var atoms = val.split(",");
        if (!atoms.every(function(atom) {
            return atom.length > 0;
        })) throw new Error("Invalid list value format");
        if (atoms.length > 1) for(var i = 0, c = atoms.length; i < c; i++)handleResult(parseRepeat(atoms[i]));
        else handleResult(parseRepeat(val));
        stack.sort(CronExpression._sortCompareFn);
        return stack;
    }
    /**
   * Parse repetition interval
   *
   * @param {String} val
   * @return {Array}
   */ function parseRepeat(val) {
        var repeatInterval = 1;
        var atoms = val.split("/");
        if (atoms.length > 2) throw new Error("Invalid repeat: " + val);
        if (atoms.length > 1) {
            if (atoms[0] == +atoms[0]) atoms = [
                atoms[0] + "-" + constraints.max,
                atoms[1]
            ];
            return parseRange(atoms[0], atoms[atoms.length - 1]);
        }
        return parseRange(val, repeatInterval);
    }
    /**
   * Parse range
   *
   * @param {String} val
   * @param {Number} repeatInterval Repetition interval
   * @return {Array}
   * @private
   */ function parseRange(val, repeatInterval) {
        var stack = [];
        var atoms = val.split("-");
        if (atoms.length > 1) {
            // Invalid range, return value
            if (atoms.length < 2) return +val;
            if (!atoms[0].length) {
                if (!atoms[1].length) throw new Error("Invalid range: " + val);
                return +val;
            }
            // Validate range
            var min = +atoms[0];
            var max = +atoms[1];
            if (Number.isNaN(min) || Number.isNaN(max) || min < constraints.min || max > constraints.max) throw new Error("Constraint error, got range " + min + "-" + max + " expected range " + constraints.min + "-" + constraints.max);
            else if (min > max) throw new Error("Invalid range: " + val);
            // Create range
            var repeatIndex = +repeatInterval;
            if (Number.isNaN(repeatIndex) || repeatIndex <= 0) throw new Error("Constraint error, cannot repeat at every " + repeatIndex + " time.");
            // JS DOW is in range of 0-6 (SUN-SAT) but we also support 7 in the expression
            // Handle case when range contains 7 instead of 0 and translate this value to 0
            if (field === "dayOfWeek" && max % 7 === 0) stack.push(0);
            for(var index = min, count = max; index <= count; index++){
                var exists = stack.indexOf(index) !== -1;
                if (!exists && repeatIndex > 0 && repeatIndex % repeatInterval === 0) {
                    repeatIndex = 1;
                    stack.push(index);
                } else repeatIndex++;
            }
            return stack;
        }
        return Number.isNaN(+val) ? val : +val;
    }
    return parseSequence(value);
};
CronExpression._sortCompareFn = function(a, b) {
    var aIsNumber = typeof a === "number";
    var bIsNumber = typeof b === "number";
    if (aIsNumber && bIsNumber) return a - b;
    if (!aIsNumber && bIsNumber) return 1;
    if (aIsNumber && !bIsNumber) return -1;
    return a.localeCompare(b);
};
CronExpression._handleMaxDaysInMonth = function(mappedFields) {
    // Filter out any day of month value that is larger than given month expects
    if (mappedFields.month.length === 1) {
        var daysInMonth = CronExpression.daysInMonth[mappedFields.month[0] - 1];
        if (mappedFields.dayOfMonth[0] > daysInMonth) throw new Error("Invalid explicit day of month definition");
        return mappedFields.dayOfMonth.filter(function(dayOfMonth) {
            return dayOfMonth === "L" ? true : dayOfMonth <= daysInMonth;
        }).sort(CronExpression._sortCompareFn);
    }
};
CronExpression._freezeFields = function(fields) {
    for(var i = 0, c = CronExpression.map.length; i < c; ++i){
        var field = CronExpression.map[i]; // Field name
        var value = fields[field];
        fields[field] = Object.freeze(value);
    }
    return Object.freeze(fields);
};
CronExpression.prototype._applyTimezoneShift = function(currentDate, dateMathVerb, method) {
    if (method === "Month" || method === "Day") {
        var prevTime = currentDate.getTime();
        currentDate[dateMathVerb + method]();
        var currTime = currentDate.getTime();
        if (prevTime === currTime) {
            // Jumped into a not existent date due to a DST transition
            if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) currentDate.addHour();
            else if (currentDate.getMinutes() === 59 && currentDate.getSeconds() === 59) currentDate.subtractHour();
        }
    } else {
        var previousHour = currentDate.getHours();
        currentDate[dateMathVerb + method]();
        var currentHour = currentDate.getHours();
        var diff = currentHour - previousHour;
        if (diff === 2) // Starting DST
        {
            if (this.fields.hour.length !== 24) // Hour is specified
            this._dstStart = currentHour;
        } else if (diff === 0 && currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) // Ending DST
        {
            if (this.fields.hour.length !== 24) // Hour is specified
            this._dstEnd = currentHour;
        }
    }
};
/**
 * Find next or previous matching schedule date
 *
 * @return {CronDate}
 * @private
 */ CronExpression.prototype._findSchedule = function _findSchedule(reverse) {
    /**
   * Match field value
   *
   * @param {String} value
   * @param {Array} sequence
   * @return {Boolean}
   * @private
   */ function matchSchedule(value, sequence) {
        for(var i = 0, c = sequence.length; i < c; i++){
            if (sequence[i] >= value) return sequence[i] === value;
        }
        return sequence[0] === value;
    }
    /**
   * Helps determine if the provided date is the correct nth occurence of the
   * desired day of week.
   *
   * @param {CronDate} date
   * @param {Number} nthDayOfWeek
   * @return {Boolean}
   * @private
   */ function isNthDayMatch(date, nthDayOfWeek) {
        if (nthDayOfWeek < 6) {
            if (date.getDate() < 8 && nthDayOfWeek === 1 // First occurence has to happen in first 7 days of the month
            ) return true;
            var offset = date.getDate() % 7 ? 1 : 0; // Math is off by 1 when dayOfWeek isn't divisible by 7
            var adjustedDate = date.getDate() - date.getDate() % 7; // find the first occurance
            var occurrence = Math.floor(adjustedDate / 7) + offset;
            return occurrence === nthDayOfWeek;
        }
        return false;
    }
    /**
   * Helper function that checks if 'L' is in the array
   *
   * @param {Array} expressions
   */ function isLInExpressions(expressions) {
        return expressions.length > 0 && expressions.some(function(expression) {
            return typeof expression === "string" && expression.indexOf("L") >= 0;
        });
    }
    // Whether to use backwards directionality when searching
    reverse = reverse || false;
    var dateMathVerb = reverse ? "subtract" : "add";
    var currentDate = new CronDate(this._currentDate, this._tz);
    var startDate = this._startDate;
    var endDate = this._endDate;
    // Find matching schedule
    var startTimestamp = currentDate.getTime();
    var stepCount = 0;
    function isLastWeekdayOfMonthMatch(expressions) {
        return expressions.some(function(expression) {
            // There might be multiple expressions and not all of them will contain
            // the "L".
            if (!isLInExpressions([
                expression
            ])) return false;
            // The first character represents the weekday
            var weekday = Number.parseInt(expression[0]) % 7;
            if (Number.isNaN(weekday)) throw new Error("Invalid last weekday of the month expression: " + expression);
            return currentDate.getDay() === weekday && currentDate.isLastWeekdayOfMonth();
        });
    }
    while(stepCount < LOOP_LIMIT){
        stepCount++;
        // Validate timespan
        if (reverse) {
            if (startDate && currentDate.getTime() - startDate.getTime() < 0) throw new Error("Out of the timespan range");
        } else {
            if (endDate && endDate.getTime() - currentDate.getTime() < 0) throw new Error("Out of the timespan range");
        }
        // Day of month and week matching:
        //
        // "The day of a command's execution can be specified by two fields --
        // day of month, and day of week.  If  both	 fields	 are  restricted  (ie,
        // aren't  *),  the command will be run when either field matches the cur-
        // rent time.  For example, "30 4 1,15 * 5" would cause a command to be
        // run at 4:30 am on the  1st and 15th of each month, plus every Friday."
        //
        // http://unixhelp.ed.ac.uk/CGI/man-cgi?crontab+5
        //
        var dayOfMonthMatch = matchSchedule(currentDate.getDate(), this.fields.dayOfMonth);
        if (isLInExpressions(this.fields.dayOfMonth)) dayOfMonthMatch = dayOfMonthMatch || currentDate.isLastDayOfMonth();
        var dayOfWeekMatch = matchSchedule(currentDate.getDay(), this.fields.dayOfWeek);
        if (isLInExpressions(this.fields.dayOfWeek)) dayOfWeekMatch = dayOfWeekMatch || isLastWeekdayOfMonthMatch(this.fields.dayOfWeek);
        var isDayOfMonthWildcardMatch = this.fields.dayOfMonth.length >= CronExpression.daysInMonth[currentDate.getMonth()];
        var isDayOfWeekWildcardMatch = this.fields.dayOfWeek.length === CronExpression.constraints[5].max - CronExpression.constraints[5].min + 1;
        var currentHour = currentDate.getHours();
        // Add or subtract day if select day not match with month (according to calendar)
        if (!dayOfMonthMatch && (!dayOfWeekMatch || isDayOfWeekWildcardMatch)) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Day");
            continue;
        }
        // Add or subtract day if not day of month is set (and no match) and day of week is wildcard
        if (!isDayOfMonthWildcardMatch && isDayOfWeekWildcardMatch && !dayOfMonthMatch) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Day");
            continue;
        }
        // Add or subtract day if not day of week is set (and no match) and day of month is wildcard
        if (isDayOfMonthWildcardMatch && !isDayOfWeekWildcardMatch && !dayOfWeekMatch) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Day");
            continue;
        }
        // Add or subtract day if day of week & nthDayOfWeek are set (and no match)
        if (this._nthDayOfWeek > 0 && !isNthDayMatch(currentDate, this._nthDayOfWeek)) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Day");
            continue;
        }
        // Match month
        if (!matchSchedule(currentDate.getMonth() + 1, this.fields.month)) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Month");
            continue;
        }
        // Match hour
        if (!matchSchedule(currentHour, this.fields.hour)) {
            if (this._dstStart !== currentHour) {
                this._dstStart = null;
                this._applyTimezoneShift(currentDate, dateMathVerb, "Hour");
                continue;
            } else if (!matchSchedule(currentHour - 1, this.fields.hour)) {
                currentDate[dateMathVerb + "Hour"]();
                continue;
            }
        } else if (this._dstEnd === currentHour) {
            if (!reverse) {
                this._dstEnd = null;
                this._applyTimezoneShift(currentDate, "add", "Hour");
                continue;
            }
        }
        // Match minute
        if (!matchSchedule(currentDate.getMinutes(), this.fields.minute)) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Minute");
            continue;
        }
        // Match second
        if (!matchSchedule(currentDate.getSeconds(), this.fields.second)) {
            this._applyTimezoneShift(currentDate, dateMathVerb, "Second");
            continue;
        }
        // Increase a second in case in the first iteration the currentDate was not
        // modified
        if (startTimestamp === currentDate.getTime()) {
            if (dateMathVerb === "add" || currentDate.getMilliseconds() === 0) this._applyTimezoneShift(currentDate, dateMathVerb, "Second");
            else currentDate.setMilliseconds(0);
            continue;
        }
        break;
    }
    if (stepCount >= LOOP_LIMIT) throw new Error("Invalid expression, loop limit exceeded");
    this._currentDate = new CronDate(currentDate, this._tz);
    this._hasIterated = true;
    return currentDate;
};
/**
 * Find next suitable date
 *
 * @public
 * @return {CronDate|Object}
 */ CronExpression.prototype.next = function next() {
    var schedule = this._findSchedule();
    // Try to return ES6 compatible iterator
    if (this._isIterator) return {
        value: schedule,
        done: !this.hasNext()
    };
    return schedule;
};
/**
 * Find previous suitable date
 *
 * @public
 * @return {CronDate|Object}
 */ CronExpression.prototype.prev = function prev() {
    var schedule = this._findSchedule(true);
    // Try to return ES6 compatible iterator
    if (this._isIterator) return {
        value: schedule,
        done: !this.hasPrev()
    };
    return schedule;
};
/**
 * Check if next suitable date exists
 *
 * @public
 * @return {Boolean}
 */ CronExpression.prototype.hasNext = function() {
    var current = this._currentDate;
    var hasIterated = this._hasIterated;
    try {
        this._findSchedule();
        return true;
    } catch (err) {
        return false;
    } finally{
        this._currentDate = current;
        this._hasIterated = hasIterated;
    }
};
/**
 * Check if previous suitable date exists
 *
 * @public
 * @return {Boolean}
 */ CronExpression.prototype.hasPrev = function() {
    var current = this._currentDate;
    var hasIterated = this._hasIterated;
    try {
        this._findSchedule(true);
        return true;
    } catch (err) {
        return false;
    } finally{
        this._currentDate = current;
        this._hasIterated = hasIterated;
    }
};
/**
 * Iterate over expression iterator
 *
 * @public
 * @param {Number} steps Numbers of steps to iterate
 * @param {Function} callback Optional callback
 * @return {Array} Array of the iterated results
 */ CronExpression.prototype.iterate = function iterate(steps, callback) {
    var dates = [];
    if (steps >= 0) {
        for(var i = 0, c = steps; i < c; i++)try {
            var item = this.next();
            dates.push(item);
            // Fire the callback
            if (callback) callback(item, i);
        } catch (err) {
            break;
        }
    } else {
        for(var i = 0, c = steps; i > c; i--)try {
            var item = this.prev();
            dates.push(item);
            // Fire the callback
            if (callback) callback(item, i);
        } catch (err) {
            break;
        }
    }
    return dates;
};
/**
 * Reset expression iterator state
 *
 * @public
 */ CronExpression.prototype.reset = function reset(newDate) {
    this._currentDate = new CronDate(newDate || this._options.currentDate);
};
/**
 * Stringify the expression
 *
 * @public
 * @param {Boolean} [includeSeconds] Should stringify seconds
 * @return {String}
 */ CronExpression.prototype.stringify = function stringify(includeSeconds) {
    var resultArr = [];
    for(var i = includeSeconds ? 0 : 1, c = CronExpression.map.length; i < c; ++i){
        var field = CronExpression.map[i];
        var value = this.fields[field];
        var constraint = CronExpression.constraints[i];
        if (field === "dayOfMonth" && this.fields.month.length === 1) constraint = {
            min: 1,
            max: CronExpression.daysInMonth[this.fields.month[0] - 1]
        };
        else if (field === "dayOfWeek") {
            // Prefer 0-6 range when serializing day of week field
            constraint = {
                min: 0,
                max: 6
            };
            value = value[value.length - 1] === 7 ? value.slice(0, -1) : value;
        }
        resultArr.push(stringifyField(value, constraint.min, constraint.max));
    }
    return resultArr.join(" ");
};
/**
 * Parse input expression (async)
 *
 * @public
 * @param {String} expression Input expression
 * @param {Object} [options] Parsing options
 */ CronExpression.parse = function parse(expression, options) {
    var self = this;
    if (typeof options === "function") options = {};
    function parse(expression, options) {
        if (!options) options = {};
        if (typeof options.currentDate === "undefined") options.currentDate = new CronDate(undefined, self._tz);
        // Is input expression predefined?
        if (CronExpression.predefined[expression]) expression = CronExpression.predefined[expression];
        // Split fields
        var fields = [];
        var atoms = (expression + "").trim().split(/\s+/);
        if (atoms.length > 6) throw new Error("Invalid cron expression");
        // Resolve fields
        var start = CronExpression.map.length - atoms.length;
        for(var i = 0, c = CronExpression.map.length; i < c; ++i){
            var field = CronExpression.map[i]; // Field name
            var value = atoms[atoms.length > c ? i : i - start]; // Field value
            if (i < start || !value) fields.push(CronExpression._parseField(field, CronExpression.parseDefaults[i], CronExpression.constraints[i]));
            else {
                var val = field === "dayOfWeek" ? parseNthDay(value) : value;
                fields.push(CronExpression._parseField(field, val, CronExpression.constraints[i]));
            }
        }
        var mappedFields = {};
        for(var i = 0, c = CronExpression.map.length; i < c; i++){
            var key = CronExpression.map[i];
            mappedFields[key] = fields[i];
        }
        var dayOfMonth = CronExpression._handleMaxDaysInMonth(mappedFields);
        mappedFields.dayOfMonth = dayOfMonth || mappedFields.dayOfMonth;
        return new CronExpression(mappedFields, options);
        /**
     * Parses out the # special character for the dayOfWeek field & adds it to options.
     *
     * @param {String} val
     * @return {String}
     * @private
     */ function parseNthDay(val) {
            var atoms = val.split("#");
            if (atoms.length > 1) {
                var nthValue = +atoms[atoms.length - 1];
                if (/,/.test(val)) throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");
                if (/\//.test(val)) throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");
                if (/-/.test(val)) throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");
                if (atoms.length > 2 || Number.isNaN(nthValue) || nthValue < 1 || nthValue > 5) throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");
                options.nthDayOfWeek = nthValue;
                return atoms[0];
            }
            return val;
        }
    }
    return parse(expression, options);
};
/**
 * Convert cron fields back to Cron Expression
 *
 * @public
 * @param {Object} fields Input fields
 * @param {Object} [options] Parsing options
 * @return {Object}
 */ CronExpression.fieldsToExpression = function fieldsToExpression(fields, options) {
    function validateConstraints(field, values, constraints) {
        if (!values) throw new Error("Validation error, Field " + field + " is missing");
        if (values.length === 0) throw new Error("Validation error, Field " + field + " contains no values");
        for(var i = 0, c = values.length; i < c; i++){
            var value = values[i];
            if (CronExpression._isValidConstraintChar(constraints, value)) continue;
            // Check constraints
            if (typeof value !== "number" || Number.isNaN(value) || value < constraints.min || value > constraints.max) throw new Error("Constraint error, got value " + value + " expected range " + constraints.min + "-" + constraints.max);
        }
    }
    var mappedFields = {};
    for(var i = 0, c = CronExpression.map.length; i < c; ++i){
        var field = CronExpression.map[i]; // Field name
        var values = fields[field];
        validateConstraints(field, values, CronExpression.constraints[i]);
        var copy = [];
        var j = -1;
        while(++j < values.length)copy[j] = values[j];
        values = copy.sort(CronExpression._sortCompareFn).filter(function(item, pos, ary) {
            return !pos || item !== ary[pos - 1];
        });
        if (values.length !== copy.length) throw new Error("Validation error, Field " + field + " contains duplicate values");
        mappedFields[field] = values;
    }
    var dayOfMonth = CronExpression._handleMaxDaysInMonth(mappedFields);
    mappedFields.dayOfMonth = dayOfMonth || mappedFields.dayOfMonth;
    return new CronExpression(mappedFields, options || {});
};
module.exports = CronExpression;

},{"49bdfafd99798f48":"QKfjf","bea502670d38e0b9":"kDgau"}],"QKfjf":[function(require,module,exports) {
"use strict";
var luxon = require("836e26da8123fddc");
CronDate.prototype.addYear = function() {
    this._date = this._date.plus({
        years: 1
    });
};
CronDate.prototype.addMonth = function() {
    this._date = this._date.plus({
        months: 1
    }).startOf("month");
};
CronDate.prototype.addDay = function() {
    this._date = this._date.plus({
        days: 1
    }).startOf("day");
};
CronDate.prototype.addHour = function() {
    var prev = this._date;
    this._date = this._date.plus({
        hours: 1
    }).startOf("hour");
    if (this._date <= prev) this._date = this._date.plus({
        hours: 1
    });
};
CronDate.prototype.addMinute = function() {
    var prev = this._date;
    this._date = this._date.plus({
        minutes: 1
    }).startOf("minute");
    if (this._date < prev) this._date = this._date.plus({
        hours: 1
    });
};
CronDate.prototype.addSecond = function() {
    var prev = this._date;
    this._date = this._date.plus({
        seconds: 1
    }).startOf("second");
    if (this._date < prev) this._date = this._date.plus({
        hours: 1
    });
};
CronDate.prototype.subtractYear = function() {
    this._date = this._date.minus({
        years: 1
    });
};
CronDate.prototype.subtractMonth = function() {
    this._date = this._date.minus({
        months: 1
    }).endOf("month").startOf("second");
};
CronDate.prototype.subtractDay = function() {
    this._date = this._date.minus({
        days: 1
    }).endOf("day").startOf("second");
};
CronDate.prototype.subtractHour = function() {
    var prev = this._date;
    this._date = this._date.minus({
        hours: 1
    }).endOf("hour").startOf("second");
    if (this._date >= prev) this._date = this._date.minus({
        hours: 1
    });
};
CronDate.prototype.subtractMinute = function() {
    var prev = this._date;
    this._date = this._date.minus({
        minutes: 1
    }).endOf("minute").startOf("second");
    if (this._date > prev) this._date = this._date.minus({
        hours: 1
    });
};
CronDate.prototype.subtractSecond = function() {
    var prev = this._date;
    this._date = this._date.minus({
        seconds: 1
    }).startOf("second");
    if (this._date > prev) this._date = this._date.minus({
        hours: 1
    });
};
CronDate.prototype.getDate = function() {
    return this._date.day;
};
CronDate.prototype.getFullYear = function() {
    return this._date.year;
};
CronDate.prototype.getDay = function() {
    var weekday = this._date.weekday;
    return weekday == 7 ? 0 : weekday;
};
CronDate.prototype.getMonth = function() {
    return this._date.month - 1;
};
CronDate.prototype.getHours = function() {
    return this._date.hour;
};
CronDate.prototype.getMinutes = function() {
    return this._date.minute;
};
CronDate.prototype.getSeconds = function() {
    return this._date.second;
};
CronDate.prototype.getMilliseconds = function() {
    return this._date.millisecond;
};
CronDate.prototype.getTime = function() {
    return this._date.valueOf();
};
CronDate.prototype.getUTCDate = function() {
    return this._getUTC().day;
};
CronDate.prototype.getUTCFullYear = function() {
    return this._getUTC().year;
};
CronDate.prototype.getUTCDay = function() {
    var weekday = this._getUTC().weekday;
    return weekday == 7 ? 0 : weekday;
};
CronDate.prototype.getUTCMonth = function() {
    return this._getUTC().month - 1;
};
CronDate.prototype.getUTCHours = function() {
    return this._getUTC().hour;
};
CronDate.prototype.getUTCMinutes = function() {
    return this._getUTC().minute;
};
CronDate.prototype.getUTCSeconds = function() {
    return this._getUTC().second;
};
CronDate.prototype.toISOString = function() {
    return this._date.toUTC().toISO();
};
CronDate.prototype.toJSON = function() {
    return this._date.toJSON();
};
CronDate.prototype.setDate = function(d) {
    this._date = this._date.set({
        day: d
    });
};
CronDate.prototype.setFullYear = function(y) {
    this._date = this._date.set({
        year: y
    });
};
CronDate.prototype.setDay = function(d) {
    this._date = this._date.set({
        weekday: d
    });
};
CronDate.prototype.setMonth = function(m) {
    this._date = this._date.set({
        month: m + 1
    });
};
CronDate.prototype.setHours = function(h) {
    this._date = this._date.set({
        hour: h
    });
};
CronDate.prototype.setMinutes = function(m) {
    this._date = this._date.set({
        minute: m
    });
};
CronDate.prototype.setSeconds = function(s) {
    this._date = this._date.set({
        second: s
    });
};
CronDate.prototype.setMilliseconds = function(s) {
    this._date = this._date.set({
        millisecond: s
    });
};
CronDate.prototype._getUTC = function() {
    return this._date.toUTC();
};
CronDate.prototype.toString = function() {
    return this.toDate().toString();
};
CronDate.prototype.toDate = function() {
    return this._date.toJSDate();
};
CronDate.prototype.isLastDayOfMonth = function() {
    //next day
    var newDate = this._date.plus({
        days: 1
    }).startOf("day");
    return this._date.month !== newDate.month;
};
/**
 * Returns true when the current weekday is the last occurrence of this weekday
 * for the present month.
 */ CronDate.prototype.isLastWeekdayOfMonth = function() {
    // Check this by adding 7 days to the current date and seeing if it's
    // a different month
    var newDate = this._date.plus({
        days: 7
    }).startOf("day");
    return this._date.month !== newDate.month;
};
function CronDate(timestamp, tz) {
    var dateOpts = {
        zone: tz
    };
    if (!timestamp) this._date = luxon.DateTime.local();
    else if (timestamp instanceof CronDate) this._date = timestamp._date;
    else if (timestamp instanceof Date) this._date = luxon.DateTime.fromJSDate(timestamp, dateOpts);
    else if (typeof timestamp === "number") this._date = luxon.DateTime.fromMillis(timestamp, dateOpts);
    else if (typeof timestamp === "string") {
        this._date = luxon.DateTime.fromISO(timestamp, dateOpts);
        this._date.isValid || (this._date = luxon.DateTime.fromRFC2822(timestamp, dateOpts));
        this._date.isValid || (this._date = luxon.DateTime.fromSQL(timestamp, dateOpts));
        // RFC2822-like format without the required timezone offset (used in tests)
        this._date.isValid || (this._date = luxon.DateTime.fromFormat(timestamp, "EEE, d MMM yyyy HH:mm:ss", dateOpts));
    }
    if (!this._date || !this._date.isValid) throw new Error("CronDate: unhandled timestamp: " + JSON.stringify(timestamp));
    if (tz && tz !== this._date.zoneName) this._date = this._date.setZone(tz);
}
module.exports = CronDate;

},{"836e26da8123fddc":"cLnnU"}],"cLnnU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ var LuxonError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(LuxonError, _Error);
    function LuxonError() {
        return _Error.apply(this, arguments) || this;
    }
    return LuxonError;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * @private
 */ var InvalidDateTimeError = /*#__PURE__*/ function(_LuxonError) {
    _inheritsLoose(InvalidDateTimeError, _LuxonError);
    function InvalidDateTimeError(reason) {
        return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }
    return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */ var InvalidIntervalError = /*#__PURE__*/ function(_LuxonError2) {
    _inheritsLoose(InvalidIntervalError, _LuxonError2);
    function InvalidIntervalError(reason) {
        return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }
    return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */ var InvalidDurationError = /*#__PURE__*/ function(_LuxonError3) {
    _inheritsLoose(InvalidDurationError, _LuxonError3);
    function InvalidDurationError(reason) {
        return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }
    return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */ var ConflictingSpecificationError = /*#__PURE__*/ function(_LuxonError4) {
    _inheritsLoose(ConflictingSpecificationError, _LuxonError4);
    function ConflictingSpecificationError() {
        return _LuxonError4.apply(this, arguments) || this;
    }
    return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */ var InvalidUnitError = /*#__PURE__*/ function(_LuxonError5) {
    _inheritsLoose(InvalidUnitError, _LuxonError5);
    function InvalidUnitError(unit) {
        return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }
    return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */ var InvalidArgumentError = /*#__PURE__*/ function(_LuxonError6) {
    _inheritsLoose(InvalidArgumentError, _LuxonError6);
    function InvalidArgumentError() {
        return _LuxonError6.apply(this, arguments) || this;
    }
    return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */ var ZoneIsAbstractError = /*#__PURE__*/ function(_LuxonError7) {
    _inheritsLoose(ZoneIsAbstractError, _LuxonError7);
    function ZoneIsAbstractError() {
        return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }
    return ZoneIsAbstractError;
}(LuxonError);
/**
 * @private
 */ var n = "numeric", s = "short", l = "long";
var DATE_SHORT = {
    year: n,
    month: n,
    day: n
};
var DATE_MED = {
    year: n,
    month: s,
    day: n
};
var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
};
var DATE_FULL = {
    year: n,
    month: l,
    day: n
};
var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
};
var TIME_SIMPLE = {
    hour: n,
    minute: n
};
var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
};
var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
};
var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
};
var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
};
var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
/**
 * @interface
 */ var Zone = /*#__PURE__*/ function() {
    function Zone() {}
    var _proto = Zone.prototype;
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ _proto.offsetName = function offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
    } /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ ;
    _proto.formatOffset = function formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
    } /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ ;
    _proto.offset = function offset(ts) {
        throw new ZoneIsAbstractError();
    } /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ ;
    _proto.equals = function equals(otherZone) {
        throw new ZoneIsAbstractError();
    } /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */ ;
    _createClass(Zone, [
        {
            key: "type",
            get: /**
     * The type of zone
     * @abstract
     * @type {string}
     */ function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "name",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "ianaName",
            get: function get() {
                return this.name;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "isValid",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        }
    ]);
    return Zone;
}();
var singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ var SystemZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(SystemZone, _Zone);
    function SystemZone() {
        return _Zone.apply(this, arguments) || this;
    }
    var _proto = SystemZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale);
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    } /** @override **/ ;
    _proto.offset = function offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "system";
    } /** @override **/ ;
    _createClass(SystemZone, [
        {
            key: "type",
            get: /** @override **/ function get() {
                return "system";
            }
        },
        {
            key: "name",
            get: function get() {
                return new Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "instance",
            get: /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */ function get() {
                if (singleton$1 === null) singleton$1 = new SystemZone();
                return singleton$1;
            }
        }
    ]);
    return SystemZone;
}(Zone);
var dtfCache = {};
function makeDTF(zone) {
    if (!dtfCache[zone]) dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
    });
    return dtfCache[zone];
}
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fadOrBc = parsed[4], fHour = parsed[5], fMinute = parsed[6], fSecond = parsed[7];
    return [
        fYear,
        fMonth,
        fDay,
        fadOrBc,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for(var i = 0; i < formatted.length; i++){
        var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value;
        var pos = typeToPos[type];
        if (type === "era") filled[pos] = value;
        else if (!isUndefined(pos)) filled[pos] = parseInt(value, 10);
    }
    return filled;
}
var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */ var IANAZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(IANAZone, _Zone);
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ IANAZone.create = function create(name) {
        if (!ianaZoneCache[name]) ianaZoneCache[name] = new IANAZone(name);
        return ianaZoneCache[name];
    } /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ ;
    IANAZone.resetCache = function resetCache() {
        ianaZoneCache = {};
        dtfCache = {};
    } /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */ ;
    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
        return this.isValidZone(s);
    } /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ ;
    IANAZone.isValidZone = function isValidZone(zone) {
        if (!zone) return false;
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    };
    function IANAZone(name) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.zoneName = name;
        /** @private **/ _this.valid = IANAZone.isValidZone(name);
        return _this;
    }
    /** @override **/ var _proto = IANAZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale, this.name);
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    } /** @override **/ ;
    _proto.offset = function offset(ts) {
        var date = new Date(ts);
        if (isNaN(date)) return NaN;
        var dtf = makeDTF(this.name);
        var _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], adOrBc = _ref2[3], hour = _ref2[4], minute = _ref2[5], second = _ref2[6];
        if (adOrBc === "BC") year = -Math.abs(year) + 1;
        // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        var adjustedHour = hour === 24 ? 0 : hour;
        var asUTC = objToLocalTS({
            year: year,
            month: month,
            day: day,
            hour: adjustedHour,
            minute: minute,
            second: second,
            millisecond: 0
        });
        var asTS = +date;
        var over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / 60000;
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    } /** @override **/ ;
    _createClass(IANAZone, [
        {
            key: "type",
            get: function get() {
                return "iana";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.valid;
            }
        }
    ]);
    return IANAZone;
}(Zone);
var _excluded = [
    "base"
], _excluded2 = [
    "padTo",
    "floor"
];
// todo - remap caching
var intlLFCache = {};
function getCachedLF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = intlLFCache[key];
    if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
    }
    return dtf;
}
var intlDTCache = {};
function getCachedDTF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
    }
    return dtf;
}
var intlNumCache = {};
function getCachedINF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var inf = intlNumCache[key];
    if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
    }
    return inf;
}
var intlRelCache = {};
function getCachedRTF(locString, opts) {
    if (opts === void 0) opts = {};
    var _opts = opts;
    _opts.base;
    var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options
    var key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    var inf = intlRelCache[key];
    if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
    }
    return inf;
}
var sysLocaleCache = null;
function systemLocale() {
    if (sysLocaleCache) return sysLocaleCache;
    else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
    }
}
var weekInfoCache = {};
function getCachedWeekInfo(locString) {
    var data = weekInfoCache[locString];
    if (!data) {
        var locale = new Intl.Locale(locString);
        // browsers currently implement this as a property, but spec says it should be a getter function
        data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
        weekInfoCache[locString] = data;
    }
    return data;
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    // private subtags and unicode subtags have ordering requirements,
    // and we're not properly parsing this, so just strip out the
    // private ones if they exist.
    var xIndex = localeStr.indexOf("-x-");
    if (xIndex !== -1) localeStr = localeStr.substring(0, xIndex);
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        var options;
        var selectedStr;
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
            selectedStr = localeStr;
        } catch (e) {
            var smaller = localeStr.substring(0, uIndex);
            options = getCachedDTF(smaller).resolvedOptions();
            selectedStr = smaller;
        }
        var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
        return [
            selectedStr,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) localeStr += "-u";
        if (outputCalendar) localeStr += "-ca-" + outputCalendar;
        if (numberingSystem) localeStr += "-nu-" + numberingSystem;
        return localeStr;
    } else return localeStr;
}
function mapMonths(f) {
    var ms = [];
    for(var i = 1; i <= 12; i++){
        var dt = DateTime.utc(2009, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function mapWeekdays(f) {
    var ms = [];
    for(var i = 1; i <= 7; i++){
        var dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function listStuff(loc, length, englishFn, intlFn) {
    var mode = loc.listingMode();
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ var PolyNumberFormatter = /*#__PURE__*/ function() {
    function PolyNumberFormatter(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        opts.padTo;
        opts.floor;
        var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
            var intlOpts = _extends({
                useGrouping: false
            }, opts);
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
        }
    }
    var _proto = PolyNumberFormatter.prototype;
    _proto.format = function format(i) {
        if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
        }
    };
    return PolyNumberFormatter;
}();
/**
 * @private
 */ var PolyDateFormatter = /*#__PURE__*/ function() {
    function PolyDateFormatter(dt, intl, opts) {
        this.opts = opts;
        this.originalZone = undefined;
        var z = undefined;
        if (this.opts.timeZone) // Don't apply any workarounds if a timeZone is explicitly provided in opts
        this.dt = dt;
        else if (dt.zone.type === "fixed") {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
                // we manually apply the offset and substitute the zone as needed.
                z = "UTC";
                this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({
                    minutes: dt.offset
                });
                this.originalZone = dt.zone;
            }
        } else if (dt.zone.type === "system") this.dt = dt;
        else if (dt.zone.type === "iana") {
            this.dt = dt;
            z = dt.zone.name;
        } else {
            // Custom zones can have any offset / offsetName so we just manually
            // apply the offset and substitute the zone as needed.
            z = "UTC";
            this.dt = dt.setZone("UTC").plus({
                minutes: dt.offset
            });
            this.originalZone = dt.zone;
        }
        var intlOpts = _extends({}, this.opts);
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = getCachedDTF(intl, intlOpts);
    }
    var _proto2 = PolyDateFormatter.prototype;
    _proto2.format = function format() {
        if (this.originalZone) // If we have to substitute in the actual zone name, we have to use
        // formatToParts so that the timezone can be replaced.
        return this.formatToParts().map(function(_ref) {
            var value = _ref.value;
            return value;
        }).join("");
        return this.dtf.format(this.dt.toJSDate());
    };
    _proto2.formatToParts = function formatToParts() {
        var _this = this;
        var parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) return parts.map(function(part) {
            if (part.type === "timeZoneName") {
                var offsetName = _this.originalZone.offsetName(_this.dt.ts, {
                    locale: _this.dt.locale,
                    format: _this.opts.timeZoneName
                });
                return _extends({}, part, {
                    value: offsetName
                });
            } else return part;
        });
        return parts;
    };
    _proto2.resolvedOptions = function resolvedOptions() {
        return this.dtf.resolvedOptions();
    };
    return PolyDateFormatter;
}();
/**
 * @private
 */ var PolyRelFormatter = /*#__PURE__*/ function() {
    function PolyRelFormatter(intl, isEnglish, opts) {
        this.opts = _extends({
            style: "long"
        }, opts);
        if (!isEnglish && hasRelative()) this.rtf = getCachedRTF(intl, opts);
    }
    var _proto3 = PolyRelFormatter.prototype;
    _proto3.format = function format(count, unit) {
        if (this.rtf) return this.rtf.format(count, unit);
        else return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    };
    _proto3.formatToParts = function formatToParts(count, unit) {
        if (this.rtf) return this.rtf.formatToParts(count, unit);
        else return [];
    };
    return PolyRelFormatter;
}();
var fallbackWeekSettings = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [
        6,
        7
    ]
};
/**
 * @private
 */ var Locale = /*#__PURE__*/ function() {
    Locale.fromOpts = function fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.weekSettings, opts.defaultToEN);
    };
    Locale.create = function create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN) {
        if (defaultToEN === void 0) defaultToEN = false;
        var specifiedLocale = locale || Settings.defaultLocale;
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
        var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        var weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
        return new Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
    };
    Locale.resetCache = function resetCache() {
        sysLocaleCache = null;
        intlDTCache = {};
        intlNumCache = {};
        intlRelCache = {};
    };
    Locale.fromObject = function fromObject(_temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, locale = _ref2.locale, numberingSystem = _ref2.numberingSystem, outputCalendar = _ref2.outputCalendar, weekSettings = _ref2.weekSettings;
        return Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
    };
    function Locale(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
        var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.weekSettings = weekSettings;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {},
            standalone: {}
        };
        this.monthsCache = {
            format: {},
            standalone: {}
        };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    var _proto4 = Locale.prototype;
    _proto4.listingMode = function listingMode() {
        var isActuallyEn = this.isEnglish();
        var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    };
    _proto4.clone = function clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, validateWeekSettings(alts.weekSettings) || this.weekSettings, alts.defaultToEN || false);
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
        if (alts === void 0) alts = {};
        return this.clone(_extends({}, alts, {
            defaultToEN: true
        }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
        if (alts === void 0) alts = {};
        return this.clone(_extends({}, alts, {
            defaultToEN: false
        }));
    };
    _proto4.months = function months$1(length, format) {
        var _this2 = this;
        if (format === void 0) format = false;
        return listStuff(this, length, months, function() {
            var intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.monthsCache[formatStr][length]) _this2.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this2.extract(dt, intl, "month");
            });
            return _this2.monthsCache[formatStr][length];
        });
    };
    _proto4.weekdays = function weekdays$1(length, format) {
        var _this3 = this;
        if (format === void 0) format = false;
        return listStuff(this, length, weekdays, function() {
            var intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this3.weekdaysCache[formatStr][length]) _this3.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this3.extract(dt, intl, "weekday");
            });
            return _this3.weekdaysCache[formatStr][length];
        });
    };
    _proto4.meridiems = function meridiems$1() {
        var _this4 = this;
        return listStuff(this, undefined, function() {
            return meridiems;
        }, function() {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!_this4.meridiemCache) {
                var intl = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                _this4.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map(function(dt) {
                    return _this4.extract(dt, intl, "dayperiod");
                });
            }
            return _this4.meridiemCache;
        });
    };
    _proto4.eras = function eras$1(length) {
        var _this5 = this;
        return listStuff(this, length, eras, function() {
            var intl = {
                era: length
            };
            // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!_this5.eraCache[length]) _this5.eraCache[length] = [
                DateTime.utc(-40, 1, 1),
                DateTime.utc(2017, 1, 1)
            ].map(function(dt) {
                return _this5.extract(dt, intl, "era");
            });
            return _this5.eraCache[length];
        });
    };
    _proto4.extract = function extract(dt, intlOpts, field) {
        var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
        });
        return matching ? matching.value : null;
    };
    _proto4.numberFormatter = function numberFormatter(opts) {
        if (opts === void 0) opts = {};
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };
    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
        if (intlOpts === void 0) intlOpts = {};
        return new PolyDateFormatter(dt, this.intl, intlOpts);
    };
    _proto4.relFormatter = function relFormatter(opts) {
        if (opts === void 0) opts = {};
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };
    _proto4.listFormatter = function listFormatter(opts) {
        if (opts === void 0) opts = {};
        return getCachedLF(this.intl, opts);
    };
    _proto4.isEnglish = function isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    _proto4.getWeekSettings = function getWeekSettings() {
        if (this.weekSettings) return this.weekSettings;
        else if (!hasLocaleWeekInfo()) return fallbackWeekSettings;
        else return getCachedWeekInfo(this.locale);
    };
    _proto4.getStartOfWeek = function getStartOfWeek() {
        return this.getWeekSettings().firstDay;
    };
    _proto4.getMinDaysInFirstWeek = function getMinDaysInFirstWeek() {
        return this.getWeekSettings().minimalDays;
    };
    _proto4.getWeekendDays = function getWeekendDays() {
        return this.getWeekSettings().weekend;
    };
    _proto4.equals = function equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };
    _createClass(Locale, [
        {
            key: "fastNumbers",
            get: function get() {
                if (this.fastNumbersCached == null) this.fastNumbersCached = supportsFastNumbers(this);
                return this.fastNumbersCached;
            }
        }
    ]);
    return Locale;
}();
var singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */ var FixedOffsetZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(FixedOffsetZone, _Zone);
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ FixedOffsetZone.instance = function instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    } /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */ ;
    FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
        if (s) {
            var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
        return null;
    };
    function FixedOffsetZone(offset) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.fixed = offset;
        return _this;
    }
    /** @override **/ var _proto = FixedOffsetZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return this.name;
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.fixed, format);
    } /** @override **/ ;
    /** @override **/ _proto.offset = function offset() {
        return this.fixed;
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    } /** @override **/ ;
    _createClass(FixedOffsetZone, [
        {
            key: "type",
            get: function get() {
                return "fixed";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
            }
        },
        {
            key: "ianaName",
            get: function get() {
                if (this.fixed === 0) return "Etc/UTC";
                else return "Etc/GMT" + formatOffset(-this.fixed, "narrow");
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return true;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "utcInstance",
            get: /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */ function get() {
                if (singleton === null) singleton = new FixedOffsetZone(0);
                return singleton;
            }
        }
    ]);
    return FixedOffsetZone;
}(Zone);
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */ var InvalidZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(InvalidZone, _Zone);
    function InvalidZone(zoneName) {
        var _this;
        _this = _Zone.call(this) || this;
        /**  @private */ _this.zoneName = zoneName;
        return _this;
    }
    /** @override **/ var _proto = InvalidZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return null;
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset() {
        return "";
    } /** @override **/ ;
    _proto.offset = function offset() {
        return NaN;
    } /** @override **/ ;
    _proto.equals = function equals() {
        return false;
    } /** @override **/ ;
    _createClass(InvalidZone, [
        {
            key: "type",
            get: function get() {
                return "invalid";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return false;
            }
        }
    ]);
    return InvalidZone;
}(Zone);
/**
 * @private
 */ function normalizeZone(input, defaultZone) {
    if (isUndefined(input) || input === null) return defaultZone;
    else if (input instanceof Zone) return input;
    else if (isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === "default") return defaultZone;
        else if (lowered === "local" || lowered === "system") return SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) return FixedOffsetZone.instance(input);
    else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new InvalidZone(input);
}
var now = function now() {
    return Date.now();
}, defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, twoDigitCutoffYear = 60, throwOnInvalid, defaultWeekSettings = null;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */ var Settings = /*#__PURE__*/ function() {
    function Settings() {}
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ Settings.resetCaches = function resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
    };
    _createClass(Settings, null, [
        {
            key: "now",
            get: /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */ function get() {
                return now;
            },
            set: function set(n) {
                now = n;
            }
        },
        {
            key: "defaultZone",
            get: /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */ function get() {
                return normalizeZone(defaultZone, SystemZone.instance);
            },
            set: function set(zone) {
                defaultZone = zone;
            }
        },
        {
            key: "defaultLocale",
            get: function get() {
                return defaultLocale;
            },
            set: function set(locale) {
                defaultLocale = locale;
            }
        },
        {
            key: "defaultNumberingSystem",
            get: function get() {
                return defaultNumberingSystem;
            },
            set: function set(numberingSystem) {
                defaultNumberingSystem = numberingSystem;
            }
        },
        {
            key: "defaultOutputCalendar",
            get: function get() {
                return defaultOutputCalendar;
            },
            set: function set(outputCalendar) {
                defaultOutputCalendar = outputCalendar;
            }
        },
        {
            key: "defaultWeekSettings",
            get: function get() {
                return defaultWeekSettings;
            },
            set: function set(weekSettings) {
                defaultWeekSettings = validateWeekSettings(weekSettings);
            }
        },
        {
            key: "twoDigitCutoffYear",
            get: function get() {
                return twoDigitCutoffYear;
            },
            set: function set(cutoffYear) {
                twoDigitCutoffYear = cutoffYear % 100;
            }
        },
        {
            key: "throwOnInvalid",
            get: function get() {
                return throwOnInvalid;
            },
            set: function set(t) {
                throwOnInvalid = t;
            }
        }
    ]);
    return Settings;
}();
var Invalid = /*#__PURE__*/ function() {
    function Invalid(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
    }
    var _proto = Invalid.prototype;
    _proto.toMessage = function toMessage() {
        if (this.explanation) return this.reason + ": " + this.explanation;
        else return this.reason;
    };
    return Invalid;
}();
var nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}
function dayOfWeek(year, month, day) {
    var d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) d.setUTCFullYear(d.getUTCFullYear() - 1900);
    var js = d.getUTCDay();
    return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
    var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
        return i < ordinal;
    }), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day: day
    };
}
function isoWeekdayToLocal(isoWeekday, startOfWeek) {
    return (isoWeekday - startOfWeek + 7) % 7 + 1;
}
/**
 * @private
 */ function gregorianToWeek(gregObj, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);
    var weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
    } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return _extends({
        weekYear: weekYear,
        weekNumber: weekNumber,
        weekday: weekday
    }, timeObject(gregObj));
}
function weekToGregorian(weekData, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
    } else year = weekYear;
    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return _extends({
        year: year,
        month: month,
        day: day
    }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day;
    var ordinal = computeOrdinal(year, month, day);
    return _extends({
        year: year,
        ordinal: ordinal
    }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal;
    var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return _extends({
        year: year,
        month: month,
        day: day
    }, timeObject(ordinalData));
}
/**
 * Check if local week units like localWeekday are used in obj.
 * If so, validates that they are not mixed with ISO week units and then copies them to the normal week unit properties.
 * Modifies obj in-place!
 * @param obj the object values
 */ function usesLocalWeekValues(obj, loc) {
    var hasLocaleWeekData = !isUndefined(obj.localWeekday) || !isUndefined(obj.localWeekNumber) || !isUndefined(obj.localWeekYear);
    if (hasLocaleWeekData) {
        var hasIsoWeekData = !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);
        if (hasIsoWeekData) throw new ConflictingSpecificationError("Cannot mix locale-based week fields with ISO-based week fields");
        if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
        if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
        if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
        delete obj.localWeekday;
        delete obj.localWeekNumber;
        delete obj.localWeekYear;
        return {
            minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
            startOfWeek: loc.getStartOfWeek()
        };
    } else return {
        minDaysInFirstWeek: 4,
        startOfWeek: 1
    };
}
function hasInvalidWeekData(obj, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) return unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return unitOutOfRange("week", obj.weekNumber);
    else if (!validWeekday) return unitOutOfRange("weekday", obj.weekday);
    else return false;
}
function hasInvalidOrdinalData(obj) {
    var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validOrdinal) return unitOutOfRange("ordinal", obj.ordinal);
    else return false;
}
function hasInvalidGregorianData(obj) {
    var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validMonth) return unitOutOfRange("month", obj.month);
    else if (!validDay) return unitOutOfRange("day", obj.day);
    else return false;
}
function hasInvalidTimeData(obj) {
    var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
    var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) return unitOutOfRange("hour", hour);
    else if (!validMinute) return unitOutOfRange("minute", minute);
    else if (!validSecond) return unitOutOfRange("second", second);
    else if (!validMillisecond) return unitOutOfRange("millisecond", millisecond);
    else return false;
}
/**
 * @private
 */ // TYPES
function isUndefined(o) {
    return typeof o === "undefined";
}
function isNumber(o) {
    return typeof o === "number";
}
function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
    return typeof o === "string";
}
function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
}
// CAPABILITIES
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
}
function hasLocaleWeekInfo() {
    try {
        return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e) {
        return false;
    }
}
// OBJECTS AND ARRAYS
function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function bestBy(arr, by, compare) {
    if (arr.length === 0) return undefined;
    return arr.reduce(function(best, next) {
        var pair = [
            by(next),
            next
        ];
        if (!best) return pair;
        else if (compare(best[0], pair[0]) === best[0]) return best;
        else return pair;
    }, null)[1];
}
function pick(obj, keys) {
    return keys.reduce(function(a, k) {
        a[k] = obj[k];
        return a;
    }, {});
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function validateWeekSettings(settings) {
    if (settings == null) return null;
    else if (typeof settings !== "object") throw new InvalidArgumentError("Week settings must be an object");
    else {
        if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some(function(v) {
            return !integerBetween(v, 1, 7);
        })) throw new InvalidArgumentError("Invalid week settings");
        return {
            firstDay: settings.firstDay,
            minimalDays: settings.minimalDays,
            weekend: Array.from(settings.weekend)
        };
    }
}
// NUMBERS AND STRINGS
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
}
// x % n but takes the sign of n instead of x
function floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function padStart(input, n) {
    if (n === void 0) n = 2;
    var isNeg = input < 0;
    var padded;
    if (isNeg) padded = "-" + ("" + -input).padStart(n, "0");
    else padded = ("" + input).padStart(n, "0");
    return padded;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
}
function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseFloat(string);
}
function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") return undefined;
    else {
        var f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function roundTo(number, digits, towardZero) {
    if (towardZero === void 0) towardZero = false;
    var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
}
// DATE BASICS
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
    var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) return isLeapYear(modYear) ? 29 : 28;
    else return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][modMonth - 1];
}
// convert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
    // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
        // so if obj.year is in 99, but obj.day makes it roll over into year 100,
        // the calculations done by Date.UTC are using year 2000 - which is incorrect
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d;
}
// adapted from moment.js: https://github.com/moment/moment/blob/000ac1800e620f770f4eb31b5ae908f6167b0ab2/src/lib/units/week-calendar-utils.js
function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
    var fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
    return -fwdlw + minDaysInFirstWeek - 1;
}
function weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek) {
    if (minDaysInFirstWeek === void 0) minDaysInFirstWeek = 4;
    if (startOfWeek === void 0) startOfWeek = 1;
    var weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
    var weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
    return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
}
function untruncateYear(year) {
    if (year > 99) return year;
    else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
}
// PARSING
function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) timeZone = null;
    var date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    var modified = _extends({
        timeZoneName: offsetFormat
    }, intlOpts);
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
        return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
}
// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10);
    // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
}
// COERCION
function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
}
function normalizeObject(obj, normalizer) {
    var normalized = {};
    for(var u in obj)if (hasOwnProperty(obj, u)) {
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
    }
    return normalized;
}
function formatOffset(offset, format) {
    var hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
        case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
        case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
        default:
            throw new RangeError("Value format " + format + " is out of range for property format");
    }
}
function timeObject(obj) {
    return pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
/**
 * @private
 */ var monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
var monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function months(length) {
    switch(length){
        case "narrow":
            return [].concat(monthsNarrow);
        case "short":
            return [].concat(monthsShort);
        case "long":
            return [].concat(monthsLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
var weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
var weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
var weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function weekdays(length) {
    switch(length){
        case "narrow":
            return [].concat(weekdaysNarrow);
        case "short":
            return [].concat(weekdaysShort);
        case "long":
            return [].concat(weekdaysLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
var meridiems = [
    "AM",
    "PM"
];
var erasLong = [
    "Before Christ",
    "Anno Domini"
];
var erasShort = [
    "BC",
    "AD"
];
var erasNarrow = [
    "B",
    "A"
];
function eras(length) {
    switch(length){
        case "narrow":
            return [].concat(erasNarrow);
        case "short":
            return [].concat(erasShort);
        case "long":
            return [].concat(erasLong);
        default:
            return null;
    }
}
function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) numeric = "always";
    if (narrow === void 0) narrow = false;
    var units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    var lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        var isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
                return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
                return isDay ? "today" : "this " + units[unit][0];
        }
    }
    var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function stringifyTokens(splits, tokenToString) {
    var s = "";
    for(var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;){
        var token = _step.value;
        if (token.literal) s += token.val;
        else s += tokenToString(token.val);
    }
    return s;
}
var _macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */ var Formatter = /*#__PURE__*/ function() {
    Formatter.create = function create(locale, opts) {
        if (opts === void 0) opts = {};
        return new Formatter(locale, opts);
    };
    Formatter.parseFormat = function parseFormat(fmt) {
        // white-space is always considered a literal in user-provided formats
        // the " " token has a special meaning (see unitForToken)
        var current = null, currentFull = "", bracketed = false;
        var splits = [];
        for(var i = 0; i < fmt.length; i++){
            var c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed || /^\s+$/.test(currentFull),
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: /^\s+$/.test(currentFull),
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed || /^\s+$/.test(currentFull),
            val: currentFull
        });
        return splits;
    };
    Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
        return _macroTokenToFormatOpts[token];
    };
    function Formatter(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    var _proto = Formatter.prototype;
    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) this.systemLoc = this.loc.redefaultToSystem();
        var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
        return df.format();
    };
    _proto.dtFormatter = function dtFormatter(dt, opts) {
        if (opts === void 0) opts = {};
        return this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
    };
    _proto.formatInterval = function formatInterval(interval, opts) {
        var df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
    };
    _proto.num = function num(n, p) {
        if (p === void 0) p = 0;
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return padStart(n, p);
        var opts = _extends({}, this.opts);
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
        var _this = this;
        var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
        }, formatOffset = function formatOffset(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = function meridiem() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod");
        }, month = function month(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month");
        }, weekday = function weekday(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday");
        }, maybeMacro = function maybeMacro(token) {
            var formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) return _this.formatWithSystemDefault(dt, formatOpts);
            else return token;
        }, era = function era(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
                era: length
            }, "era");
        }, tokenToString = function tokenToString(token) {
            // Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
            switch(token){
                // ms
                case "S":
                    return _this.num(dt.millisecond);
                case "u":
                // falls through
                case "SSS":
                    return _this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return _this.num(dt.second);
                case "ss":
                    return _this.num(dt.second, 2);
                // fractional seconds
                case "uu":
                    return _this.num(Math.floor(dt.millisecond / 10), 2);
                case "uuu":
                    return _this.num(Math.floor(dt.millisecond / 100));
                // minutes
                case "m":
                    return _this.num(dt.minute);
                case "mm":
                    return _this.num(dt.minute, 2);
                // hours
                case "h":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return _this.num(dt.hour);
                case "HH":
                    return _this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset({
                        format: "narrow",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset({
                        format: "short",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset({
                        format: "techie",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: _this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: _this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : _this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : _this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return _this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return _this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : _this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : _this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : _this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : _this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : _this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return _this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return _this.num(dt.weekYear, 4);
                case "W":
                    return _this.num(dt.weekNumber);
                case "WW":
                    return _this.num(dt.weekNumber, 2);
                case "n":
                    return _this.num(dt.localWeekNumber);
                case "nn":
                    return _this.num(dt.localWeekNumber, 2);
                case "ii":
                    return _this.num(dt.localWeekYear.toString().slice(-2), 2);
                case "iiii":
                    return _this.num(dt.localWeekYear, 4);
                case "o":
                    return _this.num(dt.ordinal);
                case "ooo":
                    return _this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return _this.num(dt.quarter);
                case "qq":
                    // like 01
                    return _this.num(dt.quarter, 2);
                case "X":
                    return _this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return _this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    };
    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
        var _this2 = this;
        var tokenToField = function tokenToField(token) {
            switch(token[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "w":
                    return "week";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        }, tokenToString = function tokenToString(lildur) {
            return function(token) {
                var mapped = tokenToField(token);
                if (mapped) return _this2.num(lildur.get(mapped), token.length);
                else return token;
            };
        }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
        }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
        }));
        return stringifyTokens(tokens, tokenToString(collapsed));
    };
    return Formatter;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes() {
    for(var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++)regexes[_key] = arguments[_key];
    var full = regexes.reduce(function(f, r) {
        return f + r.source;
    }, "");
    return RegExp("^" + full + "$");
}
function combineExtractors() {
    for(var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)extractors[_key2] = arguments[_key2];
    return function(m) {
        return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [
                _extends({}, mergedVals, val),
                zone || mergedZone,
                next
            ];
        }, [
            {},
            null,
            1
        ]).slice(0, 2);
    };
}
function parse(s) {
    if (s == null) return [
        null,
        null
    ];
    for(var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)patterns[_key3 - 1] = arguments[_key3];
    for(var _i = 0, _patterns = patterns; _i < _patterns.length; _i++){
        var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
        var m = regex.exec(s);
        if (m) return extractor(m);
    }
    return [
        null,
        null
    ];
}
function simpleParse() {
    for(var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)keys[_key4] = arguments[_key4];
    return function(match, cursor) {
        var ret = {};
        var i;
        for(i = 0; i < keys.length; i++)ret[keys[i]] = parseInteger(match[cursor + i]);
        return [
            ret,
            null,
            cursor + i
        ];
    };
}
// ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = "(?:" + offsetRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?";
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + isoExtendedZone);
var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
function int(match, pos, fallback) {
    var m = match[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match, cursor) {
    var item = {
        year: int(match, cursor),
        month: int(match, cursor + 1, 1),
        day: int(match, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function extractISOTime(match, cursor) {
    var item = {
        hours: int(match, cursor, 0),
        minutes: int(match, cursor + 1, 0),
        seconds: int(match, cursor + 2, 0),
        milliseconds: parseMillis(match[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function extractISOOffset(match, cursor) {
    var local = !match[cursor] && !match[cursor + 1], fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [
        {},
        zone,
        cursor + 3
    ];
}
function extractIANAZone(match, cursor) {
    var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
    return [
        {},
        zone,
        cursor + 1
    ];
}
// ISO time parsing
var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
// ISO duration parsing
var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match) {
    var s = match[0], yearStr = match[1], monthStr = match[2], weekStr = match[3], dayStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], millisecondsStr = match[8];
    var hasNegativePrefix = s[0] === "-";
    var negativeSeconds = secondStr && secondStr[0] === "-";
    var maybeNegate = function maybeNegate(num, force) {
        if (force === void 0) force = false;
        return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    };
    return [
        {
            years: maybeNegate(parseFloating(yearStr)),
            months: maybeNegate(parseFloating(monthStr)),
            weeks: maybeNegate(parseFloating(weekStr)),
            days: maybeNegate(parseFloating(dayStr)),
            hours: maybeNegate(parseFloating(hourStr)),
            minutes: maybeNegate(parseFloating(minuteStr)),
            seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
}
// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    return result;
}
// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], obsOffset = match[8], milOffset = match[9], offHourStr = match[10], offMinuteStr = match[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset;
    if (obsOffset) offset = obsOffsets[obsOffset];
    else if (milOffset) offset = 0;
    else offset = signedOffset(offHourStr, offMinuteStr);
    return [
        result,
        new FixedOffsetZone(offset)
    ];
}
function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
// http date
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
function extractASCII(match) {
    var weekdayStr = match[1], monthStr = match[2], dayStr = match[3], hourStr = match[4], minuteStr = match[5], secondStr = match[6], yearStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
/*
 * @private
 */ function parseISODate(s) {
    return parse(s, [
        isoYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        isoWeekWithTimeExtensionRegex,
        extractISOWeekTimeAndOffset
    ], [
        isoOrdinalWithTimeExtensionRegex,
        extractISOOrdinalDateAndTime
    ], [
        isoTimeCombinedRegex,
        extractISOTimeAndOffset
    ]);
}
function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [
        rfc2822,
        extractRFC2822
    ]);
}
function parseHTTPDate(s) {
    return parse(s, [
        rfc1123,
        extractRFC1123Or850
    ], [
        rfc850,
        extractRFC1123Or850
    ], [
        ascii,
        extractASCII
    ]);
}
function parseISODuration(s) {
    return parse(s, [
        isoDuration,
        extractISODuration
    ]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
    return parse(s, [
        isoTimeOnly,
        extractISOTimeOnly
    ]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
    return parse(s, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}
var INVALID$2 = "Invalid Duration";
// unit conversion constants
var lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
}, casualMatrix = _extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    }
}, lowOrderMatrix), daysInYearAccurate = 365.2425, daysInMonthAccurate = 30.436875, accurateMatrix = _extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 1440,
        seconds: daysInYearAccurate * 86400,
        milliseconds: daysInYearAccurate * 86400000
    },
    quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 1440 / 4,
        seconds: daysInYearAccurate * 86400 / 4,
        milliseconds: daysInYearAccurate * 86400000 / 4
    },
    months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 1440,
        seconds: daysInMonthAccurate * 86400,
        milliseconds: daysInMonthAccurate * 86400000
    }
}, lowOrderMatrix);
// units ordered by size
var orderedUnits$1 = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
var reverseUnits = orderedUnits$1.slice(0).reverse();
// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear) {
    if (clear === void 0) clear = false;
    // deep merge for vals
    var conf = {
        values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
    };
    return new Duration(conf);
}
function durationToMillis(matrix, vals) {
    var _vals$milliseconds;
    var sum = (_vals$milliseconds = vals.milliseconds) != null ? _vals$milliseconds : 0;
    for(var _iterator = _createForOfIteratorHelperLoose(reverseUnits.slice(1)), _step; !(_step = _iterator()).done;){
        var unit = _step.value;
        if (vals[unit]) sum += vals[unit] * matrix[unit]["milliseconds"];
    }
    return sum;
}
// NB: mutates parameters
function normalizeValues(matrix, vals) {
    // the logic below assumes the overall value of the duration is positive
    // if this is not the case, factor is used to make it so
    var factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
    orderedUnits$1.reduceRight(function(previous, current) {
        if (!isUndefined(vals[current])) {
            if (previous) {
                var previousVal = vals[previous] * factor;
                var conv = matrix[current][previous];
                // if (previousVal < 0):
                // lower order unit is negative (e.g. { years: 2, days: -2 })
                // normalize this by reducing the higher order unit by the appropriate amount
                // and increasing the lower order unit
                // this can never make the higher order unit negative, because this function only operates
                // on positive durations, so the amount of time represented by the lower order unit cannot
                // be larger than the higher order unit
                // else:
                // lower order unit is positive (e.g. { years: 2, days: 450 } or { years: -2, days: 450 })
                // in this case we attempt to convert as much as possible from the lower order unit into
                // the higher order one
                //
                // Math.floor takes care of both of these cases, rounding away from 0
                // if previousVal < 0 it makes the absolute value larger
                // if previousVal >= it makes the absolute value smaller
                var rollUp = Math.floor(previousVal / conv);
                vals[current] += rollUp * factor;
                vals[previous] -= rollUp * conv * factor;
            }
            return current;
        } else return previous;
    }, null);
    // try to convert any decimals into smaller units if possible
    // for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
    orderedUnits$1.reduce(function(previous, current) {
        if (!isUndefined(vals[current])) {
            if (previous) {
                var fraction = vals[previous] % 1;
                vals[previous] -= fraction;
                vals[current] += fraction * matrix[previous][current];
            }
            return current;
        } else return previous;
    }, null);
}
// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
    var newVals = {};
    for(var _i = 0, _Object$entries = Object.entries(vals); _i < _Object$entries.length; _i++){
        var _Object$entries$_i = _Object$entries[_i], key = _Object$entries$_i[0], value = _Object$entries$_i[1];
        if (value !== 0) newVals[key] = value;
    }
    return newVals;
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ var Duration = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @private
   */ function Duration(config) {
        var accurate = config.conversionAccuracy === "longterm" || false;
        var matrix = accurate ? accurateMatrix : casualMatrix;
        if (config.matrix) matrix = config.matrix;
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = matrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ Duration.fromMillis = function fromMillis(count, opts) {
        return Duration.fromObject({
            milliseconds: count
        }, opts);
    } /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */ ;
    Duration.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        if (obj == null || typeof obj !== "object") throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
        return new Duration({
            values: normalizeObject(obj, Duration.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy,
            matrix: opts.matrix
        });
    } /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */ ;
    Duration.fromDurationLike = function fromDurationLike(durationLike) {
        if (isNumber(durationLike)) return Duration.fromMillis(durationLike);
        else if (Duration.isDuration(durationLike)) return durationLike;
        else if (typeof durationLike === "object") return Duration.fromObject(durationLike);
        else throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
    } /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ ;
    Duration.fromISO = function fromISO(text, opts) {
        var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */ ;
    Duration.fromISOTime = function fromISOTime(text, opts) {
        var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */ ;
    Duration.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDurationError(invalid);
        else return new Duration({
            invalid: invalid
        });
    } /**
   * @private
   */ ;
    Duration.normalizeUnit = function normalizeUnit(unit) {
        var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new InvalidUnitError(unit);
        return normalized;
    } /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Duration.isDuration = function isDuration(o) {
        return o && o.isLuxonDuration || false;
    } /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */ ;
    var _proto = Duration.prototype;
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */ _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        var fmtOpts = _extends({}, opts, {
            floor: opts.round !== false && opts.floor !== false
        });
        return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
    } /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */ ;
    _proto.toHuman = function toHuman(opts) {
        var _this = this;
        if (opts === void 0) opts = {};
        if (!this.isValid) return INVALID$2;
        var l = orderedUnits$1.map(function(unit) {
            var val = _this.values[unit];
            if (isUndefined(val)) return null;
            return _this.loc.numberFormatter(_extends({
                style: "unit",
                unitDisplay: "long"
            }, opts, {
                unit: unit.slice(0, -1)
            })).format(val);
        }).filter(function(n) {
            return n;
        });
        return this.loc.listFormatter(_extends({
            type: "conjunction",
            style: opts.listStyle || "narrow"
        }, opts)).format(l);
    } /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject() {
        if (!this.isValid) return {};
        return _extends({}, this.values);
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */ ;
    _proto.toISO = function toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        var s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        var millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = _extends({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
        }, opts, {
            includeOffset: false
        });
        var dateTime = DateTime.fromMillis(millis, {
            zone: "UTC"
        });
        return dateTime.toISOTime(opts);
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.toISO();
    } /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "Duration { values: " + JSON.stringify(this.values) + " }";
        else return "Duration { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        if (!this.isValid) return NaN;
        return durationToMillis(this.matrix, this.values);
    } /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration), result = {};
        for(var _i2 = 0, _orderedUnits = orderedUnits$1; _i2 < _orderedUnits.length; _i2++){
            var k = _orderedUnits[_i2];
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        }
        return clone$1(this, {
            values: result
        }, true);
    } /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
    } /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ ;
    _proto.mapUnits = function mapUnits(fn) {
        if (!this.isValid) return this;
        var result = {};
        for(var _i3 = 0, _Object$keys = Object.keys(this.values); _i3 < _Object$keys.length; _i3++){
            var k = _Object$keys[_i3];
            result[k] = asNumber(fn(this.values[k], k));
        }
        return clone$1(this, {
            values: result
        }, true);
    } /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */ ;
    _proto.get = function get(unit) {
        return this[Duration.normalizeUnit(unit)];
    } /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));
        return clone$1(this, {
            values: mixed
        });
    } /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ ;
    _proto.reconfigure = function reconfigure(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy, matrix = _ref.matrix;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem
        });
        var opts = {
            loc: loc,
            matrix: matrix,
            conversionAccuracy: conversionAccuracy
        };
        return clone$1(this, opts);
    } /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */ ;
    _proto.as = function as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    } /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */ ;
    _proto.normalize = function normalize() {
        if (!this.isValid) return this;
        var vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone$1(this, {
            values: vals
        }, true);
    } /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */ ;
    _proto.rescale = function rescale() {
        if (!this.isValid) return this;
        var vals = removeZeroes(this.normalize().shiftToAll().toObject());
        return clone$1(this, {
            values: vals
        }, true);
    } /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */ ;
    _proto.shiftTo = function shiftTo() {
        for(var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++)units[_key] = arguments[_key];
        if (!this.isValid) return this;
        if (units.length === 0) return this;
        units = units.map(function(u) {
            return Duration.normalizeUnit(u);
        });
        var built = {}, accumulated = {}, vals = this.toObject();
        var lastUnit;
        for(var _i4 = 0, _orderedUnits2 = orderedUnits$1; _i4 < _orderedUnits2.length; _i4++){
            var k = _orderedUnits2[_i4];
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                var own = 0;
                // anything we haven't boiled down yet should get boiled to this unit
                for(var ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                }
                // plus anything that's already in this unit
                if (isNumber(vals[k])) own += vals[k];
                // only keep the integer part for now in the hopes of putting any decimal part
                // into a smaller unit later
                var i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = (own * 1000 - i * 1000) / 1000;
            // otherwise, keep it in the wings to boil it later
            } else if (isNumber(vals[k])) accumulated[k] = vals[k];
        }
        // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(var key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        normalizeValues(this.matrix, built);
        return clone$1(this, {
            values: built
        }, true);
    } /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */ ;
    _proto.shiftToAll = function shiftToAll() {
        if (!this.isValid) return this;
        return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
    } /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ ;
    _proto.negate = function negate() {
        if (!this.isValid) return this;
        var negated = {};
        for(var _i5 = 0, _Object$keys2 = Object.keys(this.values); _i5 < _Object$keys2.length; _i5++){
            var k = _Object$keys2[_i5];
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, {
            values: negated
        }, true);
    } /**
   * Get the years.
   * @type {number}
   */ ;
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        if (!this.loc.equals(other.loc)) return false;
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for(var _i6 = 0, _orderedUnits3 = orderedUnits$1; _i6 < _orderedUnits3.length; _i6++){
            var u = _orderedUnits3[_i6];
            if (!eq(this.values[u], other.values[u])) return false;
        }
        return true;
    };
    _createClass(Duration, [
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "years",
            get: function get() {
                return this.isValid ? this.values.years || 0 : NaN;
            }
        },
        {
            key: "quarters",
            get: function get() {
                return this.isValid ? this.values.quarters || 0 : NaN;
            }
        },
        {
            key: "months",
            get: function get() {
                return this.isValid ? this.values.months || 0 : NaN;
            }
        },
        {
            key: "weeks",
            get: function get() {
                return this.isValid ? this.values.weeks || 0 : NaN;
            }
        },
        {
            key: "days",
            get: function get() {
                return this.isValid ? this.values.days || 0 : NaN;
            }
        },
        {
            key: "hours",
            get: function get() {
                return this.isValid ? this.values.hours || 0 : NaN;
            }
        },
        {
            key: "minutes",
            get: function get() {
                return this.isValid ? this.values.minutes || 0 : NaN;
            }
        },
        {
            key: "seconds",
            get: function get() {
                return this.isValid ? this.values.seconds || 0 : NaN;
            }
        },
        {
            key: "milliseconds",
            get: function get() {
                return this.isValid ? this.values.milliseconds || 0 : NaN;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Duration;
}(Symbol.for("nodejs.util.inspect.custom"));
var INVALID$1 = "Invalid Interval";
// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
    if (!start || !start.isValid) return Interval.invalid("missing or invalid start");
    else if (!end || !end.isValid) return Interval.invalid("missing or invalid end");
    else if (end < start) return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    else return null;
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */ var Interval = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @private
   */ function Interval(config) {
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ Interval.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidIntervalError(invalid);
        else return new Interval({
            invalid: invalid
        });
    } /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */ ;
    Interval.fromDateTimes = function fromDateTimes(start, end) {
        var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
        var validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) return new Interval({
            start: builtStart,
            end: builtEnd
        });
        else return validateError;
    } /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.after = function after(start, duration) {
        var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    } /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.before = function before(end, duration) {
        var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    } /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */ ;
    Interval.fromISO = function fromISO(text, opts) {
        var _split = (text || "").split("/", 2), s = _split[0], e = _split[1];
        if (s && e) {
            var start, startIsValid;
            try {
                start = DateTime.fromISO(s, opts);
                startIsValid = start.isValid;
            } catch (e) {
                startIsValid = false;
            }
            var end, endIsValid;
            try {
                end = DateTime.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) return Interval.fromDateTimes(start, end);
            if (startIsValid) {
                var dur = Duration.fromISO(e, opts);
                if (dur.isValid) return Interval.after(start, dur);
            } else if (endIsValid) {
                var _dur = Duration.fromISO(s, opts);
                if (_dur.isValid) return Interval.before(end, _dur);
            }
        }
        return Interval.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Interval.isInterval = function isInterval(o) {
        return o && o.isLuxonInterval || false;
    } /**
   * Returns the start of the Interval
   * @type {DateTime}
   */ ;
    var _proto = Interval.prototype;
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ _proto.length = function length(unit) {
        if (unit === void 0) unit = "milliseconds";
        return this.isValid ? this.toDuration.apply(this, [
            unit
        ]).get(unit) : NaN;
    } /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */ ;
    _proto.count = function count(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (!this.isValid) return NaN;
        var start = this.start.startOf(unit, opts);
        var end;
        if (opts != null && opts.useLocaleWeeks) end = this.end.reconfigure({
            locale: start.locale
        });
        else end = this.end;
        end = end.startOf(unit, opts);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
    } /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    } /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */ ;
    _proto.isEmpty = function isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    } /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isAfter = function isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    } /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isBefore = function isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    } /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.contains = function contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    } /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */ ;
    _proto.set = function set(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
    } /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */ ;
    _proto.splitAt = function splitAt() {
        var _this = this;
        if (!this.isValid) return [];
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
        }).sort(function(a, b) {
            return a.toMillis() - b.toMillis();
        }), results = [];
        var s = this.s, i = 0;
        while(s < this.e){
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            i += 1;
        }
        return results;
    } /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */ ;
    _proto.splitBy = function splitBy(duration) {
        var dur = Duration.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) return [];
        var s = this.s, idx = 1, next;
        var results = [];
        while(s < this.e){
            var added = this.start.plus(dur.mapUnits(function(x) {
                return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            idx += 1;
        }
        return results;
    } /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */ ;
    _proto.divideEqually = function divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    } /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.overlaps = function overlaps(other) {
        return this.e > other.s && this.s < other.e;
    } /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsStart = function abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    } /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsEnd = function abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    } /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.engulfs = function engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    } /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        return this.s.equals(other.s) && this.e.equals(other.e);
    } /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.intersection = function intersection(other) {
        if (!this.isValid) return this;
        var s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s >= e) return null;
        else return Interval.fromDateTimes(s, e);
    } /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.union = function union(other) {
        if (!this.isValid) return this;
        var s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
    } /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.merge = function merge(intervals) {
        var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
        }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) return [
                sofar,
                item
            ];
            else if (current.overlaps(item) || current.abutsStart(item)) return [
                sofar,
                current.union(item)
            ];
            else return [
                sofar.concat([
                    current
                ]),
                item
            ];
        }, [
            [],
            null
        ]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
        if (final) found.push(final);
        return found;
    } /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.xor = function xor(intervals) {
        var _Array$prototype;
        var start = null, currentCount = 0;
        var results = [], ends = intervals.map(function(i) {
            return [
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }
            ];
        }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
        });
        for(var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;){
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) start = i.time;
            else {
                if (start && +start !== +i.time) results.push(Interval.fromDateTimes(start, i.time));
                start = null;
            }
        }
        return Interval.merge(results);
    } /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */ ;
    _proto.difference = function difference() {
        var _this2 = this;
        for(var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)intervals[_key2] = arguments[_key2];
        return Interval.xor([
            this
        ].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
        }).filter(function(i) {
            return i && !i.isEmpty();
        });
    } /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        if (!this.isValid) return INVALID$1;
        return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
    } /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "Interval { start: " + this.s.toISO() + ", end: " + this.e.toISO() + " }";
        else return "Interval { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
        if (formatOpts === void 0) formatOpts = DATE_SHORT;
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
    } /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISO = function toISO(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    } /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate() {
        if (!this.isValid) return INVALID$1;
        return this.s.toISODate() + "/" + this.e.toISODate();
    } /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    } /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
        if (!this.isValid) return INVALID$1;
        return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    } /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */ ;
    _proto.toDuration = function toDuration(unit, opts) {
        if (!this.isValid) return Duration.invalid(this.invalidReason);
        return this.e.diff(this.s, unit, opts);
    } /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */ ;
    _proto.mapEndpoints = function mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };
    _createClass(Interval, [
        {
            key: "start",
            get: function get() {
                return this.isValid ? this.s : null;
            }
        },
        {
            key: "end",
            get: function get() {
                return this.isValid ? this.e : null;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalidReason === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Interval;
}(Symbol.for("nodejs.util.inspect.custom"));
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */ var Info = /*#__PURE__*/ function() {
    function Info() {}
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ Info.hasDST = function hasDST(zone) {
        if (zone === void 0) zone = Settings.defaultZone;
        var proto = DateTime.now().setZone(zone).set({
            month: 12
        });
        return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
        }).offset;
    } /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ ;
    Info.isValidIANAZone = function isValidIANAZone(zone) {
        return IANAZone.isValidZone(zone);
    } /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ ;
    Info.normalizeZone = function normalizeZone$1(input) {
        return normalizeZone(input, Settings.defaultZone);
    } /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */ ;
    Info.getStartOfWeek = function getStartOfWeek(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj;
        return (locObj || Locale.create(locale)).getStartOfWeek();
    } /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */ ;
    Info.getMinimumDaysInFirstWeek = function getMinimumDaysInFirstWeek(_temp2) {
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj;
        return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
    } /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */ ;
    Info.getWeekendWeekdays = function getWeekendWeekdays(_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
        // copy the array, because we cache it internally
        return (locObj || Locale.create(locale)).getWeekendDays().slice();
    } /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */ ;
    Info.months = function months(length, _temp4) {
        if (length === void 0) length = "long";
        var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj, _ref4$outputCalendar = _ref4.outputCalendar, outputCalendar = _ref4$outputCalendar === void 0 ? "gregory" : _ref4$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    } /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */ ;
    Info.monthsFormat = function monthsFormat(length, _temp5) {
        if (length === void 0) length = "long";
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale, _ref5$numberingSystem = _ref5.numberingSystem, numberingSystem = _ref5$numberingSystem === void 0 ? null : _ref5$numberingSystem, _ref5$locObj = _ref5.locObj, locObj = _ref5$locObj === void 0 ? null : _ref5$locObj, _ref5$outputCalendar = _ref5.outputCalendar, outputCalendar = _ref5$outputCalendar === void 0 ? "gregory" : _ref5$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    } /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */ ;
    Info.weekdays = function weekdays(length, _temp6) {
        if (length === void 0) length = "long";
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale, _ref6$numberingSystem = _ref6.numberingSystem, numberingSystem = _ref6$numberingSystem === void 0 ? null : _ref6$numberingSystem, _ref6$locObj = _ref6.locObj, locObj = _ref6$locObj === void 0 ? null : _ref6$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    } /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */ ;
    Info.weekdaysFormat = function weekdaysFormat(length, _temp7) {
        if (length === void 0) length = "long";
        var _ref7 = _temp7 === void 0 ? {} : _temp7, _ref7$locale = _ref7.locale, locale = _ref7$locale === void 0 ? null : _ref7$locale, _ref7$numberingSystem = _ref7.numberingSystem, numberingSystem = _ref7$numberingSystem === void 0 ? null : _ref7$numberingSystem, _ref7$locObj = _ref7.locObj, locObj = _ref7$locObj === void 0 ? null : _ref7$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    } /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */ ;
    Info.meridiems = function meridiems(_temp8) {
        var _ref8 = _temp8 === void 0 ? {} : _temp8, _ref8$locale = _ref8.locale, locale = _ref8$locale === void 0 ? null : _ref8$locale;
        return Locale.create(locale).meridiems();
    } /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */ ;
    Info.eras = function eras(length, _temp9) {
        if (length === void 0) length = "short";
        var _ref9 = _temp9 === void 0 ? {} : _temp9, _ref9$locale = _ref9.locale, locale = _ref9$locale === void 0 ? null : _ref9$locale;
        return Locale.create(locale, null, "gregory").eras(length);
    } /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */ ;
    Info.features = function features() {
        return {
            relative: hasRelative(),
            localeWeek: hasLocaleWeekInfo()
        };
    };
    return Info;
}();
function dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
        return dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf();
    }, ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
    var differs = [
        [
            "years",
            function(a, b) {
                return b.year - a.year;
            }
        ],
        [
            "quarters",
            function(a, b) {
                return b.quarter - a.quarter + (b.year - a.year) * 4;
            }
        ],
        [
            "months",
            function(a, b) {
                return b.month - a.month + (b.year - a.year) * 12;
            }
        ],
        [
            "weeks",
            function(a, b) {
                var days = dayDiff(a, b);
                return (days - days % 7) / 7;
            }
        ],
        [
            "days",
            dayDiff
        ]
    ];
    var results = {};
    var earlier = cursor;
    var lowestOrder, highWater;
    /* This loop tries to diff using larger units first.
     If we overshoot, we backtrack and try the next smaller unit.
     "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
     as we use smaller and smaller units.
     highWater keeps track of where we would be if we added one more of the smallest unit,
     this is used later to potentially convert any difference smaller than the smallest higher order unit
     into a fraction of that smallest higher order unit
  */ for(var _i = 0, _differs = differs; _i < _differs.length; _i++){
        var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
        if (units.indexOf(unit) >= 0) {
            lowestOrder = unit;
            results[unit] = differ(cursor, later);
            highWater = earlier.plus(results);
            if (highWater > later) {
                // we overshot the end point, backtrack cursor by 1
                results[unit]--;
                cursor = earlier.plus(results);
                // if we are still overshooting now, we need to backtrack again
                // this happens in certain situations when diffing times in different zones,
                // because this calculation ignores time zones
                if (cursor > later) {
                    // keep the "overshot by 1" around as highWater
                    highWater = cursor;
                    // backtrack cursor by 1
                    results[unit]--;
                    cursor = earlier.plus(results);
                }
            } else cursor = highWater;
        }
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
function _diff(earlier, later, units, opts) {
    var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter(function(u) {
        return [
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0;
    });
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
            var _cursor$plus;
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[lowestOrder] = 1, _cursor$plus));
        }
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    var duration = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
        var _Duration$fromMillis;
        return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else return duration;
}
var numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
};
var numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
    var value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(var i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) value += hanidecChars.indexOf(str[i]);
            else for(var key in numberingSystemsUTF16){
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) value += code - min;
            }
        }
        return parseInt(value, 10);
    } else return value;
}
function digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;
    if (append === void 0) append = "";
    return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post) {
    if (post === void 0) post = function post(i) {
        return i;
    };
    return {
        regex: regex,
        deser: function deser(_ref) {
            var s = _ref[0];
            return post(parseDigits(s));
        }
    };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "[ " + NBSP + "]";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function oneOf(strings, startIndex) {
    if (strings === null) return null;
    else return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: function deser(_ref2) {
            var s = _ref2[0];
            return strings.findIndex(function(i) {
                return stripInsensitivities(s) === stripInsensitivities(i);
            }) + startIndex;
        }
    };
}
function offset(regex, groups) {
    return {
        regex: regex,
        deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
        },
        groups: groups
    };
}
function simple(regex) {
    return {
        regex: regex,
        deser: function deser(_ref4) {
            var s = _ref4[0];
            return s;
        }
    };
}
function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
/**
 * @param token
 * @param {Locale} loc
 */ function unitForToken(token, loc) {
    var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal(t) {
        return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
                var s = _ref5[0];
                return s;
            },
            literal: true
        };
    }, unitate = function unitate(t) {
        if (token.literal) return literal(t);
        switch(t.val){
            // era
            case "G":
                return oneOf(loc.eras("short"), 0);
            case "GG":
                return oneOf(loc.eras("long"), 0);
            // years
            case "y":
                return intUnit(oneToSix);
            case "yy":
                return intUnit(twoToFour, untruncateYear);
            case "yyyy":
                return intUnit(four);
            case "yyyyy":
                return intUnit(fourToSix);
            case "yyyyyy":
                return intUnit(six);
            // months
            case "M":
                return intUnit(oneOrTwo);
            case "MM":
                return intUnit(two);
            case "MMM":
                return oneOf(loc.months("short", true), 1);
            case "MMMM":
                return oneOf(loc.months("long", true), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false), 1);
            // dates
            case "d":
                return intUnit(oneOrTwo);
            case "dd":
                return intUnit(two);
            // ordinals
            case "o":
                return intUnit(oneToThree);
            case "ooo":
                return intUnit(three);
            // time
            case "HH":
                return intUnit(two);
            case "H":
                return intUnit(oneOrTwo);
            case "hh":
                return intUnit(two);
            case "h":
                return intUnit(oneOrTwo);
            case "mm":
                return intUnit(two);
            case "m":
                return intUnit(oneOrTwo);
            case "q":
                return intUnit(oneOrTwo);
            case "qq":
                return intUnit(two);
            case "s":
                return intUnit(oneOrTwo);
            case "ss":
                return intUnit(two);
            case "S":
                return intUnit(oneToThree);
            case "SSS":
                return intUnit(three);
            case "u":
                return simple(oneToNine);
            case "uu":
                return simple(oneOrTwo);
            case "uuu":
                return intUnit(one);
            // meridiem
            case "a":
                return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return intUnit(four);
            case "kk":
                return intUnit(twoToFour, untruncateYear);
            // weekNumber (W)
            case "W":
                return intUnit(oneOrTwo);
            case "WW":
                return intUnit(two);
            // weekdays
            case "E":
            case "c":
                return intUnit(one);
            case "EEE":
                return oneOf(loc.weekdays("short", false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return simple(/[a-z_+-/]{1,256}?/i);
            // this special-case "token" represents a place where a macro-token expanded into a white-space literal
            // in this case we accept any non-newline white-space
            case " ":
                return simple(/[^\S\n\r]/);
            default:
                return literal(t);
        }
    };
    var unit = unitate(token) || {
        invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
}
var partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
        numeric: "h",
        "2-digit": "hh"
    },
    hour24: {
        numeric: "H",
        "2-digit": "HH"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};
function tokenForPart(part, formatOpts, resolvedOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") {
        var isSpace = /^\s+$/.test(value);
        return {
            literal: !isSpace,
            val: isSpace ? " " : value
        };
    }
    var style = formatOpts[type];
    // The user might have explicitly specified hour12 or hourCycle
    // if so, respect their decision
    // if not, refer back to the resolvedOpts, which are based on the locale
    var actualType = type;
    if (type === "hour") {
        if (formatOpts.hour12 != null) actualType = formatOpts.hour12 ? "hour12" : "hour24";
        else if (formatOpts.hourCycle != null) {
            if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") actualType = "hour12";
            else actualType = "hour24";
        } else // tokens only differentiate between 24 hours or not,
        // so we do not need to check hourCycle here, which is less supported anyways
        actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
    }
    var val = partTypeStyleToTokenVal[actualType];
    if (typeof val === "object") val = val[style];
    if (val) return {
        literal: false,
        val: val
    };
    return undefined;
}
function buildRegex(units) {
    var re = units.map(function(u) {
        return u.regex;
    }).reduce(function(f, r) {
        return f + "(" + r.source + ")";
    }, "");
    return [
        "^" + re + "$",
        units
    ];
}
function match(input, regex, handlers) {
    var matches = input.match(regex);
    if (matches) {
        var all = {};
        var matchIndex = 1;
        for(var i in handlers)if (hasOwnProperty(handlers, i)) {
            var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            matchIndex += groups;
        }
        return [
            matches,
            all
        ];
    } else return [
        matches,
        {}
    ];
}
function dateTimeFromMatches(matches) {
    var toField = function toField(token) {
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    var zone = null;
    var specificOffset;
    if (!isUndefined(matches.z)) zone = IANAZone.create(matches.z);
    if (!isUndefined(matches.Z)) {
        if (!zone) zone = new FixedOffsetZone(matches.Z);
        specificOffset = matches.Z;
    }
    if (!isUndefined(matches.q)) matches.M = (matches.q - 1) * 3 + 1;
    if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) matches.h += 12;
        else if (matches.h === 12 && matches.a === 0) matches.h = 0;
    }
    if (matches.G === 0 && matches.y) matches.y = -matches.y;
    if (!isUndefined(matches.u)) matches.S = parseMillis(matches.u);
    var vals = Object.keys(matches).reduce(function(r, k) {
        var f = toField(k);
        if (f) r[f] = matches[k];
        return r;
    }, {});
    return [
        vals,
        zone,
        specificOffset
    ];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
    if (!dummyDateTimeCache) dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
    if (token.literal) return token;
    var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    var tokens = formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(undefined)) return token;
    return tokens;
}
function expandMacroTokens(tokens, locale) {
    var _Array$prototype;
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
        return maybeExpandMacroToken(t, locale);
    }));
}
/**
 * @private
 */ function explainFromTokens(locale, input, format) {
    var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
        return unitForToken(t, locale);
    }), disqualifyingUnit = units.find(function(t) {
        return t.invalidReason;
    });
    if (disqualifyingUnit) return {
        input: input,
        tokens: tokens,
        invalidReason: disqualifyingUnit.invalidReason
    };
    else {
        var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [
            null,
            null,
            undefined
        ], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
        return {
            input: input,
            tokens: tokens,
            regex: regex,
            rawMatches: rawMatches,
            matches: matches,
            result: result,
            zone: zone,
            specificOffset: specificOffset
        };
    }
}
function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
    return [
        result,
        zone,
        specificOffset,
        invalidReason
    ];
}
function formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) return null;
    var formatter = Formatter.create(locale, formatOpts);
    var df = formatter.dtFormatter(getDummyDateTime());
    var parts = df.formatToParts();
    var resolvedOpts = df.resolvedOptions();
    return parts.map(function(p) {
        return tokenForPart(p, formatOpts, resolvedOpts);
    });
}
var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
    return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
}
// we cache week data on the DT object and this intermediates the cache
/**
 * @param {DateTime} dt
 */ function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = gregorianToWeek(dt.c);
    return dt.weekData;
}
/**
 * @param {DateTime} dt
 */ function possiblyCachedLocalWeekData(dt) {
    if (dt.localWeekData === null) dt.localWeekData = gregorianToWeek(dt.c, dt.loc.getMinDaysInFirstWeek(), dt.loc.getStartOfWeek());
    return dt.localWeekData;
}
// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
    var current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime(_extends({}, current, alts, {
        old: current
    }));
}
// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60000;
    // Test whether the zone matches the offset for this ts
    var o2 = tz.offset(utcGuess);
    // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000;
    // If that gives us the local time we want, we're done
    var o3 = tz.offset(utcGuess);
    if (o2 === o3) return [
        utcGuess,
        o2
    ];
    // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60000,
        Math.max(o2, o3)
    ];
}
// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
    ts += offset * 60000;
    var d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
}
// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
}
// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = _extends({}, inst.c, {
        year: year,
        month: month,
        day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
    if (millisToAdd !== 0) {
        ts += millisToAdd;
        // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts: ts,
        o: o
    };
}
// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
        var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, _extends({}, opts, {
            zone: interpretationZone,
            specificOffset: specificOffset
        }));
        return setZone ? inst : inst.setZone(zone);
    } else return DateTime.invalid(new Invalid("unparsable", 'the input "' + text + "\" can't be parsed as " + format));
}
// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) allowZ = true;
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
}
function _toISODate(o, extended) {
    var longFormat = o.c.year > 9999 || o.c.year < 0;
    var c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
        c += "-";
        c += padStart(o.c.month);
        c += "-";
        c += padStart(o.c.day);
    } else {
        c += padStart(o.c.month);
        c += padStart(o.c.day);
    }
    return c;
}
function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    var c = padStart(o.c.hour);
    if (extended) {
        c += ":";
        c += padStart(o.c.minute);
        if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) c += ":";
    } else c += padStart(o.c.minute);
    if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += padStart(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += padStart(o.c.millisecond, 3);
        }
    }
    if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) c += "Z";
        else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
        } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
        }
    }
    if (extendedZone) c += "[" + o.zone.ianaName + "]";
    return c;
}
// defaults for unspecified units in the supported calendars
var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
// Units in the supported calendars, sorted by bigness
var orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
];
// standardize case and plurality in units
function normalizeUnit(unit) {
    var normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
}
function normalizeUnitWithLocalWeeks(unit) {
    switch(unit.toLowerCase()){
        case "localweekday":
        case "localweekdays":
            return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
            return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
            return "localWeekYear";
        default:
            return normalizeUnit(unit);
    }
}
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
    var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
    var ts, o;
    // assume we have the higher-order units
    if (!isUndefined(obj.year)) {
        for(var _i = 0, _orderedUnits = orderedUnits; _i < _orderedUnits.length; _i++){
            var u = _orderedUnits[_i];
            if (isUndefined(obj[u])) obj[u] = defaultUnitValues[u];
        }
        var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) return DateTime.invalid(invalid);
        var offsetProvis = zone.offset(tsNow);
        var _objToTS = objToTS(obj, offsetProvis, zone);
        ts = _objToTS[0];
        o = _objToTS[1];
    } else ts = tsNow;
    return new DateTime({
        ts: ts,
        zone: zone,
        loc: loc,
        o: o
    });
}
function diffRelative(start, end, opts) {
    var round = isUndefined(opts.round) ? true : opts.round, format = function format(c, unit) {
        c = roundTo(c, round || opts.calendary ? 0 : 2, true);
        var formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = function differ(unit) {
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            else return 0;
        } else return end.diff(start, unit).get(unit);
    };
    if (opts.unit) return format(differ(opts.unit), opts.unit);
    for(var _iterator = _createForOfIteratorHelperLoose(opts.units), _step; !(_step = _iterator()).done;){
        var unit = _step.value;
        var count = differ(unit);
        if (Math.abs(count) >= 1) return format(count, unit);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
    var opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
    } else args = Array.from(argList);
    return [
        opts,
        args
    ];
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ var DateTime = /*#__PURE__*/ function(_Symbol$for) {
    /**
   * @access private
   */ function DateTime(config) {
        var zone = config.zone || Settings.defaultZone;
        var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
        var c = null, o = null;
        if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
                var _ref = [
                    config.old.c,
                    config.old.o
                ];
                c = _ref[0];
                o = _ref[1];
            } else {
                var ot = zone.offset(this.ts);
                c = tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.localWeekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ DateTime.now = function now() {
        return new DateTime({});
    } /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ ;
    DateTime.local = function local() {
        var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */ ;
    DateTime.utc = function utc() {
        var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        opts.zone = FixedOffsetZone.utcInstance;
        return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */ ;
    DateTime.fromJSDate = function fromJSDate(date, options) {
        if (options === void 0) options = {};
        var ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) return DateTime.invalid("invalid input");
        var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        return new DateTime({
            ts: ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromMillis = function fromMillis(milliseconds, options) {
        if (options === void 0) options = {};
        if (!isNumber(milliseconds)) throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
        else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
        else return new DateTime({
            ts: milliseconds,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromSeconds = function fromSeconds(seconds, options) {
        if (options === void 0) options = {};
        if (!isNumber(seconds)) throw new InvalidArgumentError("fromSeconds requires a numerical input");
        else return new DateTime({
            ts: seconds * 1000,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */ ;
    DateTime.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        obj = obj || {};
        var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        var loc = Locale.fromObject(opts);
        var normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
        var _usesLocalWeekValues = usesLocalWeekValues(normalized, loc), minDaysInFirstWeek = _usesLocalWeekValues.minDaysInFirstWeek, startOfWeek = _usesLocalWeekValues.startOfWeek;
        var tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        // configure ourselves to deal with gregorian dates or week stuff
        var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
        }
        // set default values for missing stuff
        var foundFirst = false;
        for(var _iterator2 = _createForOfIteratorHelperLoose(units), _step2; !(_step2 = _iterator2()).done;){
            var u = _step2.value;
            var v = normalized[u];
            if (!isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        }
        // make sure the values we have are in range
        var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) return DateTime.invalid(invalid);
        // compute the actual time
        var gregorian = useWeekData ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc: loc
        });
        // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
        return inst;
    } /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */ ;
    DateTime.fromISO = function fromISO(text, opts) {
        if (opts === void 0) opts = {};
        var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    } /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */ ;
    DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
        if (opts === void 0) opts = {};
        var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    } /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */ ;
    DateTime.fromHTTP = function fromHTTP(text, opts) {
        if (opts === void 0) opts = {};
        var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    } /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromFormat = function fromFormat(text, fmt, opts) {
        if (opts === void 0) opts = {};
        if (isUndefined(text) || isUndefined(fmt)) throw new InvalidArgumentError("fromFormat requires an input string and a format");
        var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
        if (invalid) return DateTime.invalid(invalid);
        else return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
    } /**
   * @deprecated use fromFormat instead
   */ ;
    DateTime.fromString = function fromString(text, fmt, opts) {
        if (opts === void 0) opts = {};
        return DateTime.fromFormat(text, fmt, opts);
    } /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */ ;
    DateTime.fromSQL = function fromSQL(text, opts) {
        if (opts === void 0) opts = {};
        var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    } /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */ ;
    DateTime.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDateTimeError(invalid);
        else return new DateTime({
            invalid: invalid
        });
    } /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    DateTime.isDateTime = function isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    } /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.parseFormatForOpts = function parseFormatForOpts(formatOpts, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map(function(t) {
            return t ? t.val : null;
        }).join("");
    } /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.expandFormat = function expandFormat(fmt, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
        return expanded.map(function(t) {
            return t.val;
        }).join("");
    } /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */ ;
    var _proto = DateTime.prototype;
    _proto.get = function get(unit) {
        return this[unit];
    } /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */ ;
    /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */ _proto.getPossibleOffsets = function getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) return [
            this
        ];
        var dayMs = 86400000;
        var minuteMs = 60000;
        var localTS = objToLocalTS(this.c);
        var oEarlier = this.zone.offset(localTS - dayMs);
        var oLater = this.zone.offset(localTS + dayMs);
        var o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        var o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) return [
            this
        ];
        var ts1 = localTS - o1 * minuteMs;
        var ts2 = localTS - o2 * minuteMs;
        var c1 = tsToObj(ts1, o1);
        var c2 = tsToObj(ts2, o2);
        if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) return [
            clone(this, {
                ts: ts1
            }),
            clone(this, {
                ts: ts2
            })
        ];
        return [
            this
        ];
    } /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */ ;
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
        if (opts === void 0) opts = {};
        var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
        return {
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: calendar
        };
    } /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */ ;
    _proto.toUTC = function toUTC(offset, opts) {
        if (offset === void 0) offset = 0;
        if (opts === void 0) opts = {};
        return this.setZone(FixedOffsetZone.instance(offset), opts);
    } /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */ ;
    _proto.toLocal = function toLocal() {
        return this.setZone(Settings.defaultZone);
    } /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ ;
    _proto.setZone = function setZone(zone, _temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) return this;
        else if (!zone.isValid) return DateTime.invalid(unsupportedZone(zone));
        else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                var offsetGuess = zone.offset(this.ts);
                var asObj = this.toObject();
                var _objToTS3 = objToTS(asObj, offsetGuess, zone);
                newTS = _objToTS3[0];
            }
            return clone(this, {
                ts: newTS,
                zone: zone
            });
        }
    } /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */ ;
    _proto.reconfigure = function reconfigure(_temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: outputCalendar
        });
        return clone(this, {
            loc: loc
        });
    } /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */ ;
    _proto.setLocale = function setLocale(locale) {
        return this.reconfigure({
            locale: locale
        });
    } /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
        var _usesLocalWeekValues2 = usesLocalWeekValues(normalized, this.loc), minDaysInFirstWeek = _usesLocalWeekValues2.minDaysInFirstWeek, startOfWeek = _usesLocalWeekValues2.startOfWeek;
        var settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var mixed;
        if (settingWeekStuff) mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek), normalized), minDaysInFirstWeek, startOfWeek);
        else if (!isUndefined(normalized.ordinal)) mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
        else {
            mixed = _extends({}, this.toObject(), normalized);
            // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (isUndefined(normalized.day)) mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
        return clone(this, {
            ts: ts,
            o: o
        });
    } /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
    } /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
    } /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ ;
    _proto.startOf = function startOf(unit, _temp3) {
        var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$useLocaleWeeks = _ref4.useLocaleWeeks, useLocaleWeeks = _ref4$useLocaleWeeks === void 0 ? false : _ref4$useLocaleWeeks;
        if (!this.isValid) return this;
        var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
        }
        if (normalizedUnit === "weeks") {
            if (useLocaleWeeks) {
                var startOfWeek = this.loc.getStartOfWeek();
                var weekday = this.weekday;
                if (weekday < startOfWeek) o.weekNumber = this.weekNumber - 1;
                o.weekday = startOfWeek;
            } else o.weekday = 1;
        }
        if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    } /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ ;
    _proto.endOf = function endOf(unit, opts) {
        var _this$plus;
        return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit, opts).minus(1) : this;
    } /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    } /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
        if (formatOpts === void 0) formatOpts = DATE_SHORT;
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    } /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */ ;
    _proto.toLocaleParts = function toLocaleParts(opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */ ;
    _proto.toISO = function toISO(_temp4) {
        var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format, _ref5$suppressSeconds = _ref5.suppressSeconds, suppressSeconds = _ref5$suppressSeconds === void 0 ? false : _ref5$suppressSeconds, _ref5$suppressMillise = _ref5.suppressMilliseconds, suppressMilliseconds = _ref5$suppressMillise === void 0 ? false : _ref5$suppressMillise, _ref5$includeOffset = _ref5.includeOffset, includeOffset = _ref5$includeOffset === void 0 ? true : _ref5$includeOffset, _ref5$extendedZone = _ref5.extendedZone, extendedZone = _ref5$extendedZone === void 0 ? false : _ref5$extendedZone;
        if (!this.isValid) return null;
        var ext = format === "extended";
        var c = _toISODate(this, ext);
        c += "T";
        c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate(_temp5) {
        var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
        if (!this.isValid) return null;
        return _toISODate(this, format === "extended");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */ ;
    _proto.toISOWeekDate = function toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(_temp6) {
        var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$suppressMillise = _ref7.suppressMilliseconds, suppressMilliseconds = _ref7$suppressMillise === void 0 ? false : _ref7$suppressMillise, _ref7$suppressSeconds = _ref7.suppressSeconds, suppressSeconds = _ref7$suppressSeconds === void 0 ? false : _ref7$suppressSeconds, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includePrefix = _ref7.includePrefix, includePrefix = _ref7$includePrefix === void 0 ? false : _ref7$includePrefix, _ref7$extendedZone = _ref7.extendedZone, extendedZone = _ref7$extendedZone === void 0 ? false : _ref7$extendedZone, _ref7$format = _ref7.format, format = _ref7$format === void 0 ? "extended" : _ref7$format;
        if (!this.isValid) return null;
        var c = includePrefix ? "T" : "";
        return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    } /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ ;
    _proto.toRFC2822 = function toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    } /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */ ;
    _proto.toHTTP = function toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */ ;
    _proto.toSQLDate = function toSQLDate() {
        if (!this.isValid) return null;
        return _toISODate(this, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQLTime = function toSQLTime(_temp7) {
        var _ref8 = _temp7 === void 0 ? {} : _temp7, _ref8$includeOffset = _ref8.includeOffset, includeOffset = _ref8$includeOffset === void 0 ? true : _ref8$includeOffset, _ref8$includeZone = _ref8.includeZone, includeZone = _ref8$includeZone === void 0 ? false : _ref8$includeZone, _ref8$includeOffsetSp = _ref8.includeOffsetSpace, includeOffsetSpace = _ref8$includeOffsetSp === void 0 ? true : _ref8$includeOffsetSp;
        var fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            if (includeOffsetSpace) fmt += " ";
            if (includeZone) fmt += "z";
            else if (includeOffset) fmt += "ZZ";
        }
        return toTechFormat(this, fmt, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQL = function toSQL(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        return this.toSQLDate() + " " + this.toSQLTime(opts);
    } /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.isValid ? this.toISO() : INVALID;
    } /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */ ;
    _proto[_Symbol$for] = function() {
        if (this.isValid) return "DateTime { ts: " + this.toISO() + ", zone: " + this.zone.name + ", locale: " + this.locale + " }";
        else return "DateTime { Invalid, reason: " + this.invalidReason + " }";
    } /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        return this.isValid ? this.ts : NaN;
    } /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toSeconds = function toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    } /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */ ;
    _proto.toUnixInteger = function toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1000) : NaN;
    } /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toBSON = function toBSON() {
        return this.toJSDate();
    } /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return {};
        var base = _extends({}, this.c);
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    } /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toJSDate = function toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    } /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */ ;
    _proto.diff = function diff(otherDateTime, unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        if (!this.isValid || !otherDateTime.isValid) return Duration.invalid("created by diffing an invalid DateTime");
        var durOpts = _extends({
            locale: this.locale,
            numberingSystem: this.numberingSystem
        }, opts);
        var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    } /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ ;
    _proto.diffNow = function diffNow(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        return this.diff(DateTime.now(), unit, opts);
    } /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */ ;
    _proto.until = function until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    } /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(otherDateTime, unit, opts) {
        if (!this.isValid) return false;
        var inputMs = otherDateTime.valueOf();
        var adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
    } /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    } /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */ ;
    _proto.toRelative = function toRelative(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        var base = options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        var units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        var unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return diffRelative(base, this.plus(padding), _extends({}, options, {
            numeric: "always",
            units: units,
            unit: unit
        }));
    } /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */ ;
    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        return diffRelative(options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), this, _extends({}, options, {
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        }));
    } /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */ ;
    DateTime.min = function min() {
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        if (!dateTimes.every(DateTime.isDateTime)) throw new InvalidArgumentError("min requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.min);
    } /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */ ;
    DateTime.max = function max() {
        for(var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)dateTimes[_key2] = arguments[_key2];
        if (!dateTimes.every(DateTime.isDateTime)) throw new InvalidArgumentError("max requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.max);
    } /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */ ;
    DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
        if (options === void 0) options = {};
        var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        return explainFromTokens(localeToUse, text, fmt);
    } /**
   * @deprecated use fromFormatExplain instead
   */ ;
    DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
        if (options === void 0) options = {};
        return DateTime.fromFormatExplain(text, fmt, options);
    } /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */ ;
    _createClass(DateTime, [
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        },
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "outputCalendar",
            get: function get() {
                return this.isValid ? this.loc.outputCalendar : null;
            }
        },
        {
            key: "zone",
            get: function get() {
                return this._zone;
            }
        },
        {
            key: "zoneName",
            get: function get() {
                return this.isValid ? this.zone.name : null;
            }
        },
        {
            key: "year",
            get: function get() {
                return this.isValid ? this.c.year : NaN;
            }
        },
        {
            key: "quarter",
            get: function get() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            }
        },
        {
            key: "month",
            get: function get() {
                return this.isValid ? this.c.month : NaN;
            }
        },
        {
            key: "day",
            get: function get() {
                return this.isValid ? this.c.day : NaN;
            }
        },
        {
            key: "hour",
            get: function get() {
                return this.isValid ? this.c.hour : NaN;
            }
        },
        {
            key: "minute",
            get: function get() {
                return this.isValid ? this.c.minute : NaN;
            }
        },
        {
            key: "second",
            get: function get() {
                return this.isValid ? this.c.second : NaN;
            }
        },
        {
            key: "millisecond",
            get: function get() {
                return this.isValid ? this.c.millisecond : NaN;
            }
        },
        {
            key: "weekYear",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "weekNumber",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "weekday",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
            }
        },
        {
            key: "isWeekend",
            get: function get() {
                return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
            }
        },
        {
            key: "localWeekday",
            get: function get() {
                return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
            }
        },
        {
            key: "localWeekNumber",
            get: function get() {
                return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "localWeekYear",
            get: function get() {
                return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "ordinal",
            get: function get() {
                return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
            }
        },
        {
            key: "monthShort",
            get: function get() {
                return this.isValid ? Info.months("short", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "monthLong",
            get: function get() {
                return this.isValid ? Info.months("long", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "weekdayShort",
            get: function get() {
                return this.isValid ? Info.weekdays("short", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "weekdayLong",
            get: function get() {
                return this.isValid ? Info.weekdays("long", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "offset",
            get: function get() {
                return this.isValid ? +this.o : NaN;
            }
        },
        {
            key: "offsetNameShort",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "short",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "offsetNameLong",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "long",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "isOffsetFixed",
            get: function get() {
                return this.isValid ? this.zone.isUniversal : null;
            }
        },
        {
            key: "isInDST",
            get: function get() {
                if (this.isOffsetFixed) return false;
                else return this.offset > this.set({
                    month: 1,
                    day: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset;
            }
        },
        {
            key: "isInLeapYear",
            get: function get() {
                return isLeapYear(this.year);
            }
        },
        {
            key: "daysInMonth",
            get: function get() {
                return daysInMonth(this.year, this.month);
            }
        },
        {
            key: "daysInYear",
            get: function get() {
                return this.isValid ? daysInYear(this.year) : NaN;
            }
        },
        {
            key: "weeksInWeekYear",
            get: function get() {
                return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
            }
        },
        {
            key: "weeksInLocalWeekYear",
            get: function get() {
                return this.isValid ? weeksInWeekYear(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
            }
        }
    ], [
        {
            key: "DATE_SHORT",
            get: function get() {
                return DATE_SHORT;
            }
        },
        {
            key: "DATE_MED",
            get: function get() {
                return DATE_MED;
            }
        },
        {
            key: "DATE_MED_WITH_WEEKDAY",
            get: function get() {
                return DATE_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATE_FULL",
            get: function get() {
                return DATE_FULL;
            }
        },
        {
            key: "DATE_HUGE",
            get: function get() {
                return DATE_HUGE;
            }
        },
        {
            key: "TIME_SIMPLE",
            get: function get() {
                return TIME_SIMPLE;
            }
        },
        {
            key: "TIME_WITH_SECONDS",
            get: function get() {
                return TIME_WITH_SECONDS;
            }
        },
        {
            key: "TIME_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_WITH_LONG_OFFSET;
            }
        },
        {
            key: "TIME_24_SIMPLE",
            get: function get() {
                return TIME_24_SIMPLE;
            }
        },
        {
            key: "TIME_24_WITH_SECONDS",
            get: function get() {
                return TIME_24_WITH_SECONDS;
            }
        },
        {
            key: "TIME_24_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_24_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_24_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_24_WITH_LONG_OFFSET;
            }
        },
        {
            key: "DATETIME_SHORT",
            get: function get() {
                return DATETIME_SHORT;
            }
        },
        {
            key: "DATETIME_SHORT_WITH_SECONDS",
            get: function get() {
                return DATETIME_SHORT_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED",
            get: function get() {
                return DATETIME_MED;
            }
        },
        {
            key: "DATETIME_MED_WITH_SECONDS",
            get: function get() {
                return DATETIME_MED_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED_WITH_WEEKDAY",
            get: function get() {
                return DATETIME_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATETIME_FULL",
            get: function get() {
                return DATETIME_FULL;
            }
        },
        {
            key: "DATETIME_FULL_WITH_SECONDS",
            get: function get() {
                return DATETIME_FULL_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_HUGE",
            get: function get() {
                return DATETIME_HUGE;
            }
        },
        {
            key: "DATETIME_HUGE_WITH_SECONDS",
            get: function get() {
                return DATETIME_HUGE_WITH_SECONDS;
            }
        }
    ]);
    return DateTime;
}(Symbol.for("nodejs.util.inspect.custom"));
function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) return DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return DateTime.fromObject(dateTimeish);
    else throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
}
var VERSION = "3.4.4";
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.Settings = Settings;
exports.SystemZone = SystemZone;
exports.VERSION = VERSION;
exports.Zone = Zone;

},{}],"kDgau":[function(require,module,exports) {
"use strict";
var compactField = require("de96d8425226f4aa");
function stringifyField(arr, min, max) {
    var ranges = compactField(arr);
    if (ranges.length === 1) {
        var singleRange = ranges[0];
        var step = singleRange.step;
        if (step === 1 && singleRange.start === min && singleRange.end === max) return "*";
        if (step !== 1 && singleRange.start === min && singleRange.end === max - step + 1) return "*/" + step;
    }
    var result = [];
    for(var i = 0, l = ranges.length; i < l; ++i){
        var range = ranges[i];
        if (range.count === 1) {
            result.push(range.start);
            continue;
        }
        var step = range.step;
        if (range.step === 1) {
            result.push(range.start + "-" + range.end);
            continue;
        }
        var multiplier = range.start == 0 ? range.count - 1 : range.count;
        if (range.step * multiplier > range.end) result = result.concat(Array.from({
            length: range.end - range.start + 1
        }).map(function(_, index) {
            var value = range.start + index;
            if ((value - range.start) % range.step === 0) return value;
            return null;
        }).filter(function(value) {
            return value != null;
        }));
        else if (range.end === max - range.step + 1) result.push(range.start + "/" + range.step);
        else result.push(range.start + "-" + range.end + "/" + range.step);
    }
    return result.join(",");
}
module.exports = stringifyField;

},{"de96d8425226f4aa":"ixXDd"}],"ixXDd":[function(require,module,exports) {
"use strict";
function buildRange(item) {
    return {
        start: item,
        count: 1
    };
}
function completeRangeWithItem(range, item) {
    range.end = item;
    range.step = item - range.start;
    range.count = 2;
}
function finalizeCurrentRange(results, currentRange, currentItemRange) {
    if (currentRange) {
        // Two elements do not form a range so split them into 2 single elements
        if (currentRange.count === 2) {
            results.push(buildRange(currentRange.start));
            results.push(buildRange(currentRange.end));
        } else results.push(currentRange);
    }
    if (currentItemRange) results.push(currentItemRange);
}
function compactField(arr) {
    var results = [];
    var currentRange = undefined;
    for(var i = 0; i < arr.length; i++){
        var currentItem = arr[i];
        if (typeof currentItem !== "number") {
            // String elements can't form a range
            finalizeCurrentRange(results, currentRange, buildRange(currentItem));
            currentRange = undefined;
        } else if (!currentRange) // Start a new range
        currentRange = buildRange(currentItem);
        else if (currentRange.count === 1) // Guess that the current item starts a range
        completeRangeWithItem(currentRange, currentItem);
        else {
            if (currentRange.step === currentItem - currentRange.end) {
                // We found another item that matches the current range
                currentRange.count++;
                currentRange.end = currentItem;
            } else if (currentRange.count === 2) {
                // Break the first item of the current range into a single element, and try to start a new range with the second item
                results.push(buildRange(currentRange.start));
                currentRange = buildRange(currentRange.end);
                completeRangeWithItem(currentRange, currentItem);
            } else {
                // Persist the current range and start a new one with current item
                finalizeCurrentRange(results, currentRange);
                currentRange = buildRange(currentItem);
            }
        }
    }
    finalizeCurrentRange(results, currentRange);
    return results;
}
module.exports = compactField;

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"kW4GH":[function(require,module,exports) {
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
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
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
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
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
    var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) return adjustedPrefix + "[]";
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
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
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if ("indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = defaults.arrayFormat;
    if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
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
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
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
var $TypeError = require("1d3f7a3f029b095e");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('.').listGetNode} */ var listGetNode = function(list, key) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    for(; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        // eslint-disable-next-line no-extra-parens
        curr.next = /** @type {NonNullable<typeof list.next>} */ list.next;
        list.next = curr; // eslint-disable-line no-param-reassign
        return curr;
    }
};
/** @type {import('.').listGet} */ var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('.').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = /** @type {import('.').ListNode<typeof value>} */ {
        key: key,
        next: objects.next,
        value: value
    };
};
/** @type {import('.').listHas} */ var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @type {WeakMap<object, unknown>} */ var $wm;
    /** @type {Map<object, unknown>} */ var $m;
    /** @type {import('.').RootNode<unknown>} */ var $o;
    /** @type {import('.').Channel} */ var channel = {
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
                if (!$o) // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

},{"7911ec51a2dc9f3e":"dZb05","125062ab9035288f":"5yYiF","9f4f5a92d8c6543":"kS3SE","1d3f7a3f029b095e":"6oWLR"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined1;
var $Error = require("ff34c740859aa28e");
var $EvalError = require("349515b7ea9b6cef");
var $RangeError = require("9da01653b2dd9abf");
var $ReferenceError = require("68586abd6b0136da");
var $SyntaxError = require("662263fdbc077fc8");
var $TypeError = require("abdfc34e5f6bb86");
var $URIError = require("daca1f932429e03e");
var $Function = Function;
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
    __proto__: null,
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
    "%Error%": $Error,
    "%eval%": eval,
    "%EvalError%": $EvalError,
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
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
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
    "%URIError%": $URIError,
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
    __proto__: null,
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
var hasOwn = require("af36d49b4b8c6c7c");
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

},{"ff34c740859aa28e":"eDsor","349515b7ea9b6cef":"hIiFU","9da01653b2dd9abf":"11MNe","68586abd6b0136da":"2YV8d","662263fdbc077fc8":"8jeeH","abdfc34e5f6bb86":"6oWLR","daca1f932429e03e":"a04Um","1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","af36d49b4b8c6c7c":"9Wb6f"}],"eDsor":[function(require,module,exports) {
"use strict";
/** @type {import('.')} */ module.exports = Error;

},{}],"hIiFU":[function(require,module,exports) {
"use strict";
/** @type {import('./eval')} */ module.exports = EvalError;

},{}],"11MNe":[function(require,module,exports) {
"use strict";
/** @type {import('./range')} */ module.exports = RangeError;

},{}],"2YV8d":[function(require,module,exports) {
"use strict";
/** @type {import('./ref')} */ module.exports = ReferenceError;

},{}],"8jeeH":[function(require,module,exports) {
"use strict";
/** @type {import('./syntax')} */ module.exports = SyntaxError;

},{}],"6oWLR":[function(require,module,exports) {
"use strict";
/** @type {import('./type')} */ module.exports = TypeError;

},{}],"a04Um":[function(require,module,exports) {
"use strict";
/** @type {import('./uri')} */ module.exports = URIError;

},{}],"3dK91":[function(require,module,exports) {
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
    __proto__: null,
    foo: {}
};
var $Object = Object;
/** @type {import('.')} */ module.exports = function hasProto() {
    // @ts-expect-error: TS errors on an inherited property for some reason
    return ({
        __proto__: test
    }).foo === test.foo && !(test instanceof $Object);
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

},{}],"9Wb6f":[function(require,module,exports) {
"use strict";
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"6J4ob"}],"5yYiF":[function(require,module,exports) {
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
var setFunctionLength = require("f4b53071c102d4e");
var $TypeError = require("761613670c43be80");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $defineProperty = require("3426ee59b177cf96");
var $max = GetIntrinsic("%Math.max%");
module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") throw new $TypeError("a function is required");
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05","f4b53071c102d4e":"9IKoX","761613670c43be80":"6oWLR","3426ee59b177cf96":"5SmXK"}],"9IKoX":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b1c9107ef1524f2");
var define = require("37dd1486f0f556ef");
var hasDescriptors = require("6a9d2b46085df706")();
var gOPD = require("2d412b0f532d1834");
var $TypeError = require("4352c534d27fe477");
var $floor = GetIntrinsic("%Math.floor%");
/** @type {import('.')} */ module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") throw new $TypeError("`fn` is not a function");
    if (typeof length !== "number" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) throw new $TypeError("`length` must be a positive 32-bit integer");
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) functionLengthIsConfigurable = false;
        if (desc && !desc.writable) functionLengthIsWritable = false;
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) define(/** @type {Parameters<define>[0]} */ fn, "length", length, true, true);
        else define(/** @type {Parameters<define>[0]} */ fn, "length", length);
    }
    return fn;
};

},{"8b1c9107ef1524f2":"dZb05","37dd1486f0f556ef":"6cEff","6a9d2b46085df706":"esBLZ","2d412b0f532d1834":"eOTQB","4352c534d27fe477":"6oWLR"}],"6cEff":[function(require,module,exports) {
"use strict";
var $defineProperty = require("f17fd23367965521");
var $SyntaxError = require("50f12088ee0f6bb");
var $TypeError = require("45c79de2b2f9c949");
var gopd = require("3f9bd39335781ec7");
/** @type {import('.')} */ module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") throw new $TypeError("`obj` must be an object or a function`");
    if (typeof property !== "string" && typeof property !== "symbol") throw new $TypeError("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") throw new $TypeError("`loose`, if provided, must be a boolean");
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value: value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
    else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
    obj[property] = value; // eslint-disable-line no-param-reassign
    else throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
};

},{"f17fd23367965521":"5SmXK","50f12088ee0f6bb":"8jeeH","45c79de2b2f9c949":"6oWLR","3f9bd39335781ec7":"eOTQB"}],"5SmXK":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8e0b8e4026aaf38a");
/** @type {import('.')} */ var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
module.exports = $defineProperty;

},{"8e0b8e4026aaf38a":"dZb05"}],"eOTQB":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("693e651525841e04");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"693e651525841e04":"dZb05"}],"esBLZ":[function(require,module,exports) {
"use strict";
var $defineProperty = require("1c3b0ce871129f60");
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$defineProperty) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"1c3b0ce871129f60":"5SmXK"}],"kS3SE":[function(require,module,exports) {
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
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
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

},{"faefcb1694f2ad90":"jhUEF"}],"chmkc":[function(require,module,exports) {
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
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
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
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 // 0-9
             || c >= 0x41 && c <= 0x5A // a-z
             || c >= 0x61 && c <= 0x7A // A-Z
             || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join("");
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
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
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
    cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
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
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") obj[key] = utils.combine(obj[key], val);
        else if (!existing || options.duplicates === "last") obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = options.allowEmptyArrays && leaf === "" ? [] : [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== "__proto__") obj[decodedRoot] = leaf;
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
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
    if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
    var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
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

},{"e76649c95dd0e736":"chmkc"}],"8QYUj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExitAnalyticError = void 0;
class ExitAnalyticError extends Error {
    constructor(message){
        super(message);
        this.name = "ExitAlgorithmError";
    }
}
exports.ExitAnalyticError = ExitAnalyticError;

},{}],"b1pPQ":[function(require,module,exports) {
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
    script._scopeId = "data-v-f50035";
    script.__cssModules = require("c9d76c18c5788e98").default;
    require("4764d454bdec37fa").default(script);
    script.__scopeId = "data-v-f50035";
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
    script._scopeId = "data-v-1da401";
    script.__cssModules = require("18d6b8a71ffa0673").default;
    require("765c69e92bfcf808").default(script);
    script.__scopeId = "data-v-1da401";
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
    script._scopeId = "data-v-99ff4b";
    script.__cssModules = require("b5151400238568ba").default;
    require("dc4f3bfb5f2f9a3e").default(script);
    script.__scopeId = "data-v-99ff4b";
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
    script._scopeId = "data-v-216d9a";
    script.__cssModules = require("f4102860c351f73e").default;
    require("e6f886d3ba47a944").default(script);
    script.__scopeId = "data-v-216d9a";
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
    script._scopeId = "data-v-2ec450";
    script.__cssModules = require("cc43dd29276c16a3").default;
    require("8a421bcfa6ff918c").default(script);
    script.__scopeId = "data-v-2ec450";
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
            analyticShouldCatchUpPastExecutions: false,
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
            shouldCreateEndpointIfNotExist: false,
            endpointCreationUnit: "",
            endpointCreationMaxDays: null,
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
                if (this.resultType == (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ENDPOINT && this.shouldCreateEndpointIfNotExist) {
                    const endpointCreationAttributes = this.getEndpointCreationAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS] = endpointCreationAttributes;
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
                    timeseriesIntervalTime: 0,
                    timeseriesValueAtStart: false
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
                ].includes(this.inputs[inputKey].trackingMethod)) {
                    trackingMethodAttributes[inputKey].push({
                        name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES)}`,
                        type: "number",
                        value: this.inputs[inputKey].timeseriesIntervalTime
                    });
                    trackingMethodAttributes[inputKey].push({
                        name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES_VALUE_AT_START)}`,
                        type: "boolean",
                        value: this.inputs[inputKey].timeseriesValueAtStart
                    });
                }
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
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS)}`,
                type: "boolean",
                value: this.analyticShouldCatchUpPastExecutions
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_LAST_EXECUTION_TIME)}`,
                type: "string",
                value: Date.now()
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
            if (this.resultType === (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ENDPOINT) resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST)}`,
                type: "boolean",
                value: this.shouldCreateEndpointIfNotExist
            });
            return resultAttributes;
        },
        getAlgorithmParametersAttributes () {
            const algorithmParametersAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms)){
                let algoName = this.algorithms[algorithmIndexName].name;
                const doc = (0, _spinalModelAnalysis.ALGORITHMS)[algoName].requiredParams;
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
        getEndpointCreationAttributes () {
            const endpointCreationAttributes = [];
            endpointCreationAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_UNIT)}`,
                type: "string",
                value: this.endpointCreationUnit
            });
            endpointCreationAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS)}`,
                type: "number",
                value: this.endpointCreationMaxDays
            });
            return endpointCreationAttributes;
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
    script._scopeId = "data-v-cc0acf";
    require("2e65fd3ada512a11").default(script);
    script.__scopeId = "data-v-cc0acf";
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
        "analyticShouldCatchUpPastExecutions",
        "analyticStatus",
        "editable"
    ],
    data () {
        return {
            localAnalyticName: this.analyticName,
            localAnalyticDescription: this.analyticDescription,
            localAnalyticShouldTriggerAtStart: this.analyticShouldTriggerAtStart,
            localAnalyticShouldCatchUpPastExecutions: this.analyticShouldCatchUpPastExecutions,
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
        analyticShouldCatchUpPastExecutions () {
            this.localAnalyticShouldCatchUpPastExecutions = this.analyticShouldCatchUpPastExecutions;
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
                        return _vm.update("analyticShouldCatchUpPastExecutions", _vm.localAnalyticShouldCatchUpPastExecutions);
                    }
                },
                model: {
                    value: _vm.localAnalyticShouldCatchUpPastExecutions,
                    callback: function($$v) {
                        _vm.localAnalyticShouldCatchUpPastExecutions = $$v;
                    },
                    expression: "localAnalyticShouldCatchUpPastExecutions"
                }
            }, [
                _vm._v("Should catch up missed executions (only works for timeseries based calculations and cron or interval time triggers ) : "),
                _c("b", [
                    _vm._v(_vm._s(_vm.localAnalyticShouldCatchUpPastExecutions ? "Yes" : "No") + " ")
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
    script._scopeId = "data-v-8cd933";
    require("a9d15aa6691f2297").default(script);
    script.__scopeId = "data-v-8cd933";
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
    script._scopeId = "data-v-8a87fc";
    script.__cssModules = require("aec4895752613f80").default;
    require("ebf5fd019ba261a1").default(script);
    script.__scopeId = "data-v-8a87fc";
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
    script._scopeId = "data-v-99f33a";
    script.__cssModules = require("935875a4c72e9f38").default;
    require("30fc33d99f7ca241").default(script);
    script.__scopeId = "data-v-99f33a";
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
    script._scopeId = "data-v-f24325";
    script.__cssModules = require("2c27762d2d96d6b4").default;
    require("79d30b5f3442688a").default(script);
    script.__scopeId = "data-v-f24325";
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
    script._scopeId = "data-v-142b1a";
    script.__cssModules = require("6adae82734d05a29").default;
    require("328ff90a8667f2ff").default(script);
    script.__scopeId = "data-v-142b1a";
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
    script._scopeId = "data-v-e40a92";
    script.__cssModules = require("f37bf822f7eef2d8").default;
    require("d131062c24ad9ae5").default(script);
    script.__scopeId = "data-v-e40a92";
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
        closePreviewDialog () {
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
        },
        showLastTimeseriesSwitch (tracking) {
            return tracking.timeseriesIntervalTime > 0;
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
    script._scopeId = "data-v-ef1b06";
    script.__cssModules = require("1288094a95e27ca4").default;
    require("7368bf4ac5988e14").default(script);
    script.__scopeId = "data-v-ef1b06";
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
                    _vm.showLastTimeseriesSwitch(value) ? _c("md-switch", {
                        model: {
                            value: value.timeseriesValueAtStart,
                            callback: function($$v) {
                                _vm.$set(value, "timeseriesValueAtStart", $$v);
                            },
                            expression: "value.timeseriesValueAtStart"
                        }
                    }, [
                        _vm._v(" Should inject last timeseries value at start of interval time : "),
                        _c("b", [
                            _vm._v(_vm._s(value.timeseriesValueAtStart ? "Yes" : "No") + " ")
                        ])
                    ]) : _vm._e(),
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
    script._scopeId = "data-v-554f4d";
    script.__cssModules = require("b39680976e629309").default;
    require("c3be97543a3ed817").default(script);
    script.__scopeId = "data-v-554f4d";
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
    script._scopeId = "data-v-1aee9f";
    script.__cssModules = require("1bb6326be9835e1").default;
    require("634f54cafa2b3756").default(script);
    script.__scopeId = "data-v-1aee9f";
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
    script._scopeId = "data-v-605333";
    script.__cssModules = require("ee766329a47d2e89").default;
    require("615b599c90b8c4dd").default(script);
    script.__scopeId = "data-v-605333";
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
        this.ALGORITHMS = (0, _spinalModelAnalysis.ALGORITHMS);
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
            return Object.values((0, _spinalModelAnalysis.ALGORITHMS));
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
                            _vm._v("\n        " + _vm._s(_vm.ALGORITHMS[_vm.algorithms[algorithmIndexName].name].description))
                        ])
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.algorithms[algorithmIndexName].name != "" ? _c("div", _vm._l(_vm.ALGORITHMS[_vm.algorithms[algorithmIndexName].name].requiredParams, function(item, index) {
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
    script._scopeId = "data-v-0e819e";
    require("a00646bce0539e1e").default(script);
    script.__scopeId = "data-v-0e819e";
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
        "shouldCreateEndpointIfNotExist",
        "endpointCreationUnit",
        "endpointCreationMaxDays",
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
            localShouldCreateEndpointIfNotExist: this.shouldCreateEndpointIfNotExist,
            localEndpointCreationUnit: this.endpointCreationUnit,
            localEndpointCreationMaxDays: this.endpointCreationMaxDays,
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
        },
        requireEndpointCreationInformation () {
            return this.localResultType == this.CONST_ANALYTIC_RESULT_TYPE.ENDPOINT;
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
        },
        shouldCreateEndpointIfNotExist () {
            this.localShouldCreateEndpointIfNotExist = this.shouldCreateEndpointIfNotExist;
        },
        endpointCreationUnit () {
            this.localEndpointCreationUnit = this.endpointCreationUnit;
        },
        endpointCreationMaxDays () {
            this.localEndpointCreationMaxDays = this.endpointCreationMaxDays;
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
                _vm._v("\n      The result is the output of the analytic. It can be something that will\n      be created, like a ticket, an alarm, or something that must be modified,\n      like a control endpoint.\n    ")
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
                _vm._v("\n      For ticket/alarm, result name will be used as part of the ticket/alarm\n      name. For control endpoints, result name will be used to find the\n      control endpoint to update. In some cases result name is not used at\n      all.\n    ")
            ]),
            _vm._v(" "),
            _vm.requireEndpointCreationInformation ? _c("div", [
                _c("md-switch", {
                    on: {
                        "change": function($event) {
                            return _vm.update("shouldCreateEndpointIfNotExist", _vm.localShouldCreateEndpointIfNotExist);
                        }
                    },
                    model: {
                        value: _vm.localShouldCreateEndpointIfNotExist,
                        callback: function($$v) {
                            _vm.localShouldCreateEndpointIfNotExist = $$v;
                        },
                        expression: "localShouldCreateEndpointIfNotExist"
                    }
                }, [
                    _vm._v("Should create endpoint if not exist : "),
                    _c("b", [
                        _vm._v(_vm._s(_vm.localShouldCreateEndpointIfNotExist ? "Yes" : "No") + " ")
                    ])
                ]),
                _vm._v(" "),
                _vm.shouldCreateEndpointIfNotExist == true ? _c("div", [
                    _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Endpoint unit")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            on: {
                                "change": function($event) {
                                    return _vm.update("endpointCreationUnit", _vm.localEndpointCreationUnit);
                                }
                            },
                            model: {
                                value: _vm.localEndpointCreationUnit,
                                callback: function($$v) {
                                    _vm.localEndpointCreationUnit = $$v;
                                },
                                expression: "localEndpointCreationUnit"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("md-field", {
                        staticClass: "fixed-size-field"
                    }, [
                        _c("label", [
                            _vm._v("Timeseries storage max days")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            attrs: {
                                "type": "number"
                            },
                            on: {
                                "change": function($event) {
                                    return _vm.update("endpointCreationMaxDays", _vm.localEndpointCreationMaxDays);
                                }
                            },
                            model: {
                                value: _vm.localEndpointCreationMaxDays,
                                callback: function($$v) {
                                    _vm.localEndpointCreationMaxDays = $$v;
                                },
                                expression: "localEndpointCreationMaxDays"
                            }
                        })
                    ], 1)
                ], 1) : _vm._e()
            ], 1) : _vm._e(),
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
    script._scopeId = "data-v-bbdec2";
    script.__cssModules = require("a117151e03e8bca0").default;
    require("52ee573fb9bbe7f9").default(script);
    script.__scopeId = "data-v-bbdec2";
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
        saveSelectedDependencies (selectedItems) {
            console.log("saving selected dependencies : ", selectedItems);
            console.log(" to ", this.selectedAlgorithm);
            let indexNames = selectedItems.map((item)=>item.indexName);
            this.ioDependencies[this.selectedAlgorithm] = indexNames;
            console.log("ioDependencies : ", this.ioDependencies);
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
    script._scopeId = "data-v-ceecef";
    script.__cssModules = require("cc903ab60d3a7548").default;
    require("c950a0cfb7a97d39").default(script);
    script.__scopeId = "data-v-ceecef";
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
    script._scopeId = "data-v-ba85a8";
    require("7bdb5b575d989e53").default(script);
    script.__scopeId = "data-v-ba85a8";
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
            return Object.values((0, _spinalModelAnalysis.ALGORITHMS));
        },
        ALGORITHMS () {
            return 0, _spinalModelAnalysis.ALGORITHMS;
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
                    _vm._v("\n        " + _vm._s(_vm.ALGORITHMS[_vm.algorithm].description))
                ])
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.algorithm != "" ? _c("div", [
                _vm.ALGORITHMS[_vm.algorithm].requiredParams == "boolean" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
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
                }), 0) : _vm.ALGORITHMS[_vm.algorithm].requiredParams == "number" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
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
                }), 1) : _vm.ALGORITHMS[_vm.algorithm].requiredParams == "string" ? _c("div", _vm._l(_vm.inputs, function(item, index) {
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
                }), 1) : _c("div", _vm._l(_vm.ALGORITHMS[_vm.algorithm].requiredParams, function(item, index) {
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
    script._scopeId = "data-v-dbe495";
    script.__cssModules = require("f78316d3492726cb").default;
    require("c88d640afaf2a223").default(script);
    script.__scopeId = "data-v-dbe495";
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
                        "analyticShouldCatchUpPastExecutions": _vm.analyticShouldCatchUpPastExecutions,
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
                        "update:analyticShouldCatchUpPastExecutions": function($event) {
                            _vm.analyticShouldCatchUpPastExecutions = $event;
                        },
                        "update:analytic-should-catch-up-past-executions": function($event) {
                            _vm.analyticShouldCatchUpPastExecutions = $event;
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
                        "shouldCreateEndpointIfNotExist": _vm.shouldCreateEndpointIfNotExist,
                        "endpointCreationUnit": _vm.endpointCreationUnit,
                        "endpointCreationMaxDays": _vm.endpointCreationMaxDays,
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
                        "update:shouldCreateEndpointIfNotExist": function($event) {
                            _vm.shouldCreateEndpointIfNotExist = $event;
                        },
                        "update:should-create-endpoint-if-not-exist": function($event) {
                            _vm.shouldCreateEndpointIfNotExist = $event;
                        },
                        "update:endpointCreationUnit": function($event) {
                            _vm.endpointCreationUnit = $event;
                        },
                        "update:endpoint-creation-unit": function($event) {
                            _vm.endpointCreationUnit = $event;
                        },
                        "update:endpointCreationMaxDays": function($event) {
                            _vm.endpointCreationMaxDays = $event;
                        },
                        "update:endpoint-creation-max-days": function($event) {
                            _vm.endpointCreationMaxDays = $event;
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
    script._scopeId = "data-v-19c5d7";
    script.__cssModules = require("f93af72822295694").default;
    require("217d35c413f75cf6").default(script);
    script.__scopeId = "data-v-19c5d7";
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
            analyticShouldCatchUpPastExecutions: undefined,
            analyticStatus: undefined,
            analyticLastExecutionTime: undefined,
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
            shouldCreateEndpointIfNotExist: false,
            endpointCreationUnit: "",
            endpointCreationMaxDays: null,
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
                timeseriesIntervalTime: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES],
                timeseriesValueAtStart: parseInputs[inputKey][0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES_VALUE_AT_START]
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
            this.analyticShouldCatchUpPastExecutions = analyticAttributes[0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS];
            this.analyticLastExecutionTime = analyticAttributes[0, _spinalModelAnalysis.ATTRIBUTE_LAST_EXECUTION_TIME];
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
                const doc = (0, _spinalModelAnalysis.ALGORITHMS)[algoName].requiredParams;
                for(let i = 0; i < doc.length; i++)this.algorithms[algorithmIndexName].params.push(algorithmParametersAttributes[`${algorithmIndexName}${0, _spinalModelAnalysis.ATTRIBUTE_SEPARATOR}${doc[i].name}`]);
            }
            this.algorithms = {
                ...this.algorithms
            };
            const resultAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_RESULT_PARAMETERS));
            this.resultType = resultAttributes[0, _spinalModelAnalysis.ATTRIBUTE_RESULT_TYPE];
            this.resultName = resultAttributes[0, _spinalModelAnalysis.ATTRIBUTE_RESULT_NAME];
            this.shouldCreateEndpointIfNotExist = resultAttributes[0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST];
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
            if (this.resultType === (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ENDPOINT) {
                const endpointCreationAttributes = await (0, _spinalModelAnalysis.spinalAnalyticService).getAttributesFromNode(configNode.id.get(), (0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS));
                this.endpointCreationUnit = endpointCreationAttributes[0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_UNIT];
                this.endpointCreationMaxDays = endpointCreationAttributes[0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS];
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
                if (this.resultType == (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ENDPOINT && this.shouldCreateEndpointIfNotExist) {
                    const endpointCreationAttributes = this.getEndpointCreationAttributes();
                    configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_ENDPOINT_PARAMETERS] = endpointCreationAttributes;
                }
                const ioAttributes = this.getIOAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_IO_DEPENDENCIES] = ioAttributes;
                const triggerAttributes = this.getTriggerAttributes();
                configAttributes[0, _spinalModelAnalysis.CATEGORY_ATTRIBUTE_TRIGGER_PARAMETERS] = triggerAttributes;
                await (0, _spinalModelAnalysis.spinalAnalyticService).deleteConfigNode(this.selectedNode.id.get());
                const configInfo = await (0, _spinalModelAnalysis.spinalAnalyticService).addConfig(configAttributes, this.selectedNode.id.get(), contextId);
            /*const configNodeRef = await spinalAnalyticService.getConfig(
          this.selectedNode.id.get()
        );
        const configNode = SpinalGraphService.getRealNode(
          configNodeRef.id.get()
        );
        await spinalAnalyticService.addAttributesToNode(
          configNode,
          configAttributes
        );*/ }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                analyticName: this.analyticName
            });
        },
        deleteAnalytic () {
            (0, _spinalModelAnalysis.spinalAnalyticService).deleteAnalytic(this.selectedNode.id.get());
            this.closeDialog(false);
        },
        updateLastExecutionTime () {
            this.analyticLastExecutionTime = (0, _spinalModelAnalysis.spinalAnalyticService).updateLastExecutionTime(this.selectedNode.id.get());
            this.closeDialog(false);
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
                    timeseriesIntervalTime: 0,
                    timeseriesValueAtStart: false
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
                ].includes(this.inputs[inputKey].trackingMethod)) {
                    trackingMethodAttributes[inputKey].push({
                        name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES)}`,
                        type: "number",
                        value: this.inputs[inputKey].timeseriesIntervalTime
                    });
                    trackingMethodAttributes[inputKey].push({
                        name: `${(0, _spinalModelAnalysis.ATTRIBUTE_TIMESERIES_VALUE_AT_START)}`,
                        type: "boolean",
                        value: this.inputs[inputKey].timeseriesValueAtStart
                    });
                }
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
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_ANALYTIC_PAST_EXECUTIONS)}`,
                type: "boolean",
                value: this.analyticShouldCatchUpPastExecutions
            });
            analyticAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_LAST_EXECUTION_TIME)}`,
                type: "number",
                value: this.analyticLastExecutionTime
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
            if (this.resultType === (0, _spinalModelAnalysis.ANALYTIC_RESULT_TYPE).ENDPOINT) resultAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_IF_NOT_EXIST)}`,
                type: "boolean",
                value: this.shouldCreateEndpointIfNotExist
            });
            return resultAttributes;
        },
        getAlgorithmParametersAttributes () {
            const algorithmParametersAttributes = [];
            for (const algorithmIndexName of Object.keys(this.algorithms)){
                let algoName = this.algorithms[algorithmIndexName].name;
                const doc = (0, _spinalModelAnalysis.ALGORITHMS)[algoName].requiredParams;
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
        getEndpointCreationAttributes () {
            const endpointCreationAttributes = [];
            endpointCreationAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_UNIT)}`,
                type: "string",
                value: this.endpointCreationUnit
            });
            endpointCreationAttributes.push({
                name: `${(0, _spinalModelAnalysis.ATTRIBUTE_CREATE_ENDPOINT_MAX_DAYS)}`,
                type: "number",
                value: this.endpointCreationMaxDays
            });
            return endpointCreationAttributes;
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
                        "analyticShouldCatchUpPastExecutions": _vm.analyticShouldCatchUpPastExecutions,
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
                        "update:analyticShouldCatchUpPastExecutions": function($event) {
                            _vm.analyticShouldCatchUpPastExecutions = $event;
                        },
                        "update:analytic-should-catch-up-past-executions": function($event) {
                            _vm.analyticShouldCatchUpPastExecutions = $event;
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
                        "shouldCreateEndpointIfNotExist": _vm.shouldCreateEndpointIfNotExist,
                        "endpointCreationUnit": _vm.endpointCreationUnit,
                        "endpointCreationMaxDays": _vm.endpointCreationMaxDays,
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
                        "update:shouldCreateEndpointIfNotExist": function($event) {
                            _vm.shouldCreateEndpointIfNotExist = $event;
                        },
                        "update:should-create-endpoint-if-not-exist": function($event) {
                            _vm.shouldCreateEndpointIfNotExist = $event;
                        },
                        "update:endpointCreationUnit": function($event) {
                            _vm.endpointCreationUnit = $event;
                        },
                        "update:endpoint-creation-unit": function($event) {
                            _vm.endpointCreationUnit = $event;
                        },
                        "update:endpointCreationMaxDays": function($event) {
                            _vm.endpointCreationMaxDays = $event;
                        },
                        "update:endpoint-creation-max-days": function($event) {
                            _vm.endpointCreationMaxDays = $event;
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
                staticClass: "md-accent",
                on: {
                    "click": _vm.deleteAnalytic
                }
            }, [
                _vm._v("Delete Analytic")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.updateLastExecutionTime
                }
            }, [
                _vm._v(" Force update last execution time ")
            ]),
            _vm._v(" "),
            _c("div", [
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
    script._scopeId = "data-v-c61071";
    script.__cssModules = require("bba408841fa11549").default;
    require("cc7493a291e7dd7").default(script);
    script.__scopeId = "data-v-c61071";
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
