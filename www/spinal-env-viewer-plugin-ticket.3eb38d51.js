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
})({"ac64A":[function(require,module,exports,__globalThis) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vue/dialogs");
var _panels = require("./src/vue/panels");
var _forgeExtension = require("./src/extensions/forgeExtension");

},{"./src/buttons":"arA5L","./src/vue/dialogs":"9RtAJ","./src/vue/panels":"pMmPm","./src/extensions/forgeExtension":"6JUzV"}],"arA5L":[function(require,module,exports,__globalThis) {
var _createContext = require("./createContext");
var _createProcess = require("./createProcess");
var _createStep = require("./createStep");
var _createTicket = require("./createTicket");
var _manageTicket = require("./manageTicket");
var _createCommonIncident = require("./createCommonIncident");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _seeTicketDetail = require("./seeTicketDetail");
var _passToNextStep = require("./passToNextStep");
var _backToPreviousStep = require("./backToPreviousStep");
var _selectElement = require("./standard_buttons/selectElement");
var _isolate = require("./standard_buttons/isolate");
var _zoom = require("./standard_buttons/zoom");
var _colorElement = require("./colorElement");
/* Constants */ const HEADER_HOOK_NAME = "GraphManagerTopBar";
const SIDEBAR_HOOK_NAME = "GraphManagerSideBar";
const CIRCULAR_MENU_HOOK = "circularMenu";
/* Headerbar Buttons*/ (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADER_HOOK_NAME, new (0, _createContext.CreateContextButton)(), [
    3
]);
/* Sidebar Buttons*/ (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _manageTicket.ManageTicketButton)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _createCommonIncident.CreateCommonIncident)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _createProcess.CreateProcess)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _createStep.CreateStep)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _createTicket.CreateTicket)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _passToNextStep.PassToNextStepButton)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _backToPreviousStep.BackToPreviousStepButton)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _seeTicketDetail.SeeTicketDetailButton)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _selectElement.SelectElementOnMaquette)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _isolate.IsolateElementOnMaquette)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _zoom.ZoomElementOnMaquette)(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR_HOOK_NAME, new (0, _colorElement.ColorElementButton)(), [
    3
]);
/* CircularMenu Buttons*/ (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULAR_MENU_HOOK, new (0, _createTicket.CreateTicket)(), [
    3
]);

},{"./createContext":"nNRt2","./createProcess":"7Hbx9","./createStep":"leki0","./createTicket":"5a5AK","./manageTicket":"4IkWS","./createCommonIncident":"4asj2","spinal-env-viewer-context-menu-service":"3h19D","./seeTicketDetail":"n51dr","./passToNextStep":"kSljC","./backToPreviousStep":"lt3IZ","./standard_buttons/selectElement":"b49Xn","./standard_buttons/isolate":"hGHKg","./standard_buttons/zoom":"lg8UM","./colorElement":"hPoNB"}],"nNRt2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateContextButton", ()=>CreateContextButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
class CreateContextButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('Create Ticket context', 'This button allows you to create ticket context', {
            icon: "receipt",
            icon_type: 'in',
            backgroundColor: "#356BAB",
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        return Promise.resolve(true);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTicketContextDialog");
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"7Hbx9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateProcess", ()=>CreateProcess);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class CreateProcess extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('Create ticket Process', 'This button allows you to create ticket processes', {
            icon: "category",
            icon_type: 'in',
            backgroundColor: "#356BAB",
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        return Promise.resolve(type === (0, _constants.SERVICE_TYPE) ? true : -1);
    }
    action(option) {
        const contextId = option.context.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createProcessDialog", {
            contextId
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j9ikR":[function(require,module,exports,__globalThis) {
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
exports.ARCHIVE_TICKET_RELATIONS = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = exports.ARCHIVE_TICKET_RELATION_TYPE = exports.ARCHIVE_TICKET_PART_TICKET_RELATION = exports.ARCHIVE_TICKET_PART_TYPE = exports.ARCHIVE_TICKET_PART_RELATION = exports.SPATIAL_ARCHIVE_TICKET_TYPE = exports.SPATIAL_ARCHIVE_TICKET_RELATION = exports.PROCESS_ARCHIVE_TICKET_TYPE = exports.PROCESS_ARCHIVE_TICKET_RELATION = exports._TICKET_PRIORITIES = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports._DEFAULT_INCIDENTS_NAME = exports.INCIDENT_TYPE = exports.INCIDENT_RELATION_NAME = exports.INCIDENT_RELATION_TYPE = exports.INCIDENT_SECTION_RELATION_NAME = exports.INCIDENT_SECTION_TYPE = exports.INCIDENT_SECTION_RELATION_TYPE = exports._DEFAULT_STEPS = exports._ARCHIVED_STEP = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.STEP_TYPE = exports.STEP_RELATION_NAME = exports.STEP_RELATION_TYPE = exports._PROCESS_TYPE = exports.PROCESS_RELATION_NAME = exports.PROCESS_RELATION_TYPE = exports.TICKET_ATTRIBUTE_CATEGORY_NAME = exports.ALARM_RELATION_NAME = exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = exports.TIKET_TYPE = exports.TICKET_RELATION_NAME = exports.TICKET_RELATION_TYPE = exports.TICKET_CONTEXT_SUBTYPE_LIST = exports.TICKET_CONTEXT_TYPE = exports.GEO_TYPES = void 0;
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
    'Ticket',
    'Alarm'
];
/////////////////////////////////////////
/////////////// TICKET ///////////////////
exports.TICKET_RELATION_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE; // STEP_TO_TICKET_RELATION_TYPE
exports.TICKET_RELATION_NAME = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME; // STEP_TO_TICKET_RELATION_NAME
exports.TIKET_TYPE = OLD_CONSTANTS.SPINAL_TICKET_SERVICE_TICKET_TYPE;
exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = 'Occurrence number';
exports.ALARM_RELATION_NAME = 'hasAlarm';
exports.TICKET_ATTRIBUTE_CATEGORY_NAME = 'default';
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
exports.PROCESS_ARCHIVE_TICKET_RELATION = 'ProcessHasArchiveTicket';
exports.PROCESS_ARCHIVE_TICKET_TYPE = 'ProcessArchiveTicket';
exports.SPATIAL_ARCHIVE_TICKET_RELATION = 'SpatialHasArchiveTicket';
exports.SPATIAL_ARCHIVE_TICKET_TYPE = 'SpatialArchiveTicket';
exports.ARCHIVE_TICKET_PART_RELATION = 'ArchiveTicketHasPart';
exports.ARCHIVE_TICKET_PART_TYPE = 'ArchiveTicketPart';
exports.ARCHIVE_TICKET_PART_TICKET_RELATION = 'ArchiveTicketPartHasTicket';
exports.ARCHIVE_TICKET_RELATION_TYPE = spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_PROCESS = 'ProcessArchiveTimestamp';
exports.ARCHIVE_TICKET_TIMESTAMP_ATTR_SPATIAL = 'SpatialArchiveTimestamp';
exports.ARCHIVE_TICKET_RELATIONS = [
    exports.SPATIAL_ARCHIVE_TICKET_RELATION,
    exports.ARCHIVE_TICKET_PART_RELATION
];

},{"5f2287b5524fd3a7":"dIMZD","2f0e2599fe3a3648":"b87gp","c6294f08f8af564d":"RdCQo"}],"dIMZD":[function(require,module,exports,__globalThis) {
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
exports.SERVICE_NAME = 'Ticket Service';
exports.SERVICE_TYPE = 'SpinalSystemServiceTicket';
/////////////////////////////////////////
/////////////// TICKET ///////////////////
// export const SPINAL_TICKET_SERVICE_TICKET_SECTION_RELATION_TYPE: string = SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME = 'SpinalSystemServiceTicketHasTicket';
exports.SPINAL_TICKET_SERVICE_TICKET_TYPE = 'SpinalSystemServiceTicketTypeTicket';
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
exports.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME = 'SpinalSystemServiceTicketHasProcess';
exports.PROCESS_TYPE = 'SpinalServiceTicketProcess';
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
exports.SPINAL_TICKET_SERVICE_STEP_TYPE = 'SpinalSystemServiceTicketTypeStep';
exports.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME = 'SpinalSystemServiceTicketHasStep';
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
    name: 'Archived',
    order: -1,
    color: '#FF0000'
};
exports.DEFAULT_STEPS = [
    {
        name: "D\xe9clar\xe9",
        color: '#ff0019',
        order: 0
    },
    {
        name: 'Ouvert',
        color: '#fff112',
        order: 1
    },
    {
        name: "R\xe9solu",
        color: '#10ff1d',
        order: 2
    },
    exports.ARCHIVED_STEP
];
/////////////////////////////////////////
/////////////// CATEGORY ////////////////
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE = spinal_env_viewer_graph_service_1.SPINAL_RELATION_PTR_LST_TYPE;
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE = 'DEFAULT_INCIDENT_TYPE';
exports.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME = 'Spinal_Service_Ticket_Process_has_category';
exports.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME = 'Spinal_Service_Ticket_Process_has_categories_section';
exports.SPINAL_TICKET_SERVICE_INCIDENT_TYPE = 'INCIDENT_TYPE';
exports.DEFAULT_INCIDENTS_NAME = 'Incidents commun';
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
exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME = 'SpinalSystemServiceTicketHasLog';
exports.SERVICE_LOG_TYPE = 'SpinalSystemServiceTicketLog';
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
    [LOGS_EVENTS.creation]: 'creation',
    [LOGS_EVENTS.moveToNext]: 'moveToNext',
    [LOGS_EVENTS.moveToPrevious]: 'moveToPrevious',
    [LOGS_EVENTS.archived]: 'archived',
    [LOGS_EVENTS.unarchive]: 'unarchive',
    [LOGS_EVENTS.move]: 'move'
});
exports.LOG_RELATION_TYPE = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE;
exports.LOG_RELATION_NAME = exports.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME;
exports.LOG_TYPE = exports.SERVICE_LOG_TYPE;
exports.LOGS_EVENTS_STEPS = LOGS_EVENTS;
exports.LOGS_EVENTS_STRING = [
    'none',
    'creation',
    'moveToNext',
    'moveToPrevious',
    'archived',
    'unarchive',
    'move'
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

},{"5f14db0a1cfd319d":"9LAk7"}],"leki0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateStep", ()=>CreateStep);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class CreateStep extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create ticket step", "this button allows to create ticket step", {
            icon: "post_add",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const processType = option.selectedNode.type.get();
        const res = contextType === (0, _constants.SERVICE_TYPE) && processType === (0, _constants.PROCESS_TYPE) ? true : -1;
        return Promise.resolve(res);
    }
    action(option) {
        const contextId = option.context.id.get();
        const processId = option.selectedNode.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createStepDialog", {
            contextId,
            processId
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5a5AK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateTicket", ()=>CreateTicket);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class CreateTicket extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("create ticket", "this button allows to create ticket", {
            icon: "receipt",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        if (!option.selectedNode || !option.context) return Promise.resolve(true);
        const contextType = option.context.type.get();
        const stepType = option.selectedNode.type.get();
        const res = contextType !== (0, _constants.SERVICE_TYPE) && stepType !== (0, _constants.SPINAL_TICKET_SERVICE_STEP_TYPE) ? true : -1;
        return Promise.resolve(res);
    }
    async action(option) {
        let info = option.selectedNode;
        if (typeof info === "undefined") info = await createBimObjectNode(option);
        const realNode = getSelectedNode(info);
        // manageTicketPanel
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("manageTicketPanel", {
            selectedNode: realNode
        });
    }
}
const getSelectedNode = (selectedNode)=>{
    if (typeof selectedNode === "undefined") return;
    if (selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return selectedNode;
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(selectedNode.id.get());
};
const createBimObjectNode = (params)=>{
    const viewer = spinal.ForgeViewer.viewer;
    // const aggregateSelection = viewer.getAggregateSelection()[0];
    if (typeof params.dbid !== "undefined" && params.model3d) {
        const dbid = params.dbid;
        const model = params.model3d;
        return new Promise((resolve)=>{
            viewer.model.getProperties(dbid, async (res)=>{
                const node = await window.spinal.BimObjectService.createBIMObject(dbid, res.name, model);
                resolve(node);
            });
        });
    }
};

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4IkWS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ManageTicketButton", ()=>ManageTicketButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class ManageTicketButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('Manage Ticket', 'Manage ticket', {
            icon: "assignment",
            icon_type: 'in',
            backgroundColor: "#356BAB",
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType !== (0, _constants.SERVICE_TYPE)) return Promise.resolve(-1);
        // const displayIt = nodeType === SPINAL_TICKET_SERVICE_TICKET_TYPE ||
        //   nodeType === SPINAL_TICKET_SERVICE_STEP_TYPE;
        const displayIt = nodeType !== (0, _constants.SPINAL_TICKET_SERVICE_TICKET_TYPE);
        return Promise.resolve(displayIt ? true : -1);
    }
    action(option) {
        const params = {
            selectedNode: option.selectedNode.get(),
            context: option.context.get()
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("ticketManagerPanel", params);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4asj2":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "CreateCommonIncident", ()=>CreateCommonIncident);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class CreateCommonIncident extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('Add common incident', 'Add common incident', {
            icon: 'font_download',
            icon_type: 'in',
            backgroundColor: '#000000',
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _constants.PROCESS_TYPE) || option.selectedNode.type.get() === (0, _constants.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE)) return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    action(option) {
        const nodeInfo = option.selectedNode.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCommonIncidentDialog", nodeInfo);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"n51dr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SeeTicketDetailButton", ()=>SeeTicketDetailButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class SeeTicketDetailButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('See Ticket\' detail', 'See ticket\'s detail', {
            icon: "assignment_late",
            icon_type: 'in',
            backgroundColor: "#356BAB",
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE) && nodeType === (0, _constants.SPINAL_TICKET_SERVICE_TICKET_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        const params = {
            selectedNode: option.selectedNode.get(),
            context: option.context.get()
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("ticketDetailDialog", params);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kSljC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PassToNextStepButton", ()=>PassToNextStepButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalIO = require("../extensions/spinalIO");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalServiceTicket = require("spinal-service-ticket");
var _event = require("../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _ticketsEvents = require("../extensions/ticketsEvents");
class PassToNextStepButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Pass to next step", "Pass the ticket to next step", {
            icon: "skip_next",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE) && nodeType === (0, _constants.SPINAL_TICKET_SERVICE_TICKET_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const user = await (0, _spinalIO.spinalIO).getUserConnected();
        const contextId = option.context.id.get();
        const ticketId = option.selectedNode.id.get();
        const processId = await getProcessId(ticketId);
        // console.log(contextId, ticketId, processId)
        if (contextId && ticketId && processId) (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("confirmationDialog", {
            message: "do you want to pass this ticket to the next step ?",
            callback: ()=>{
                (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToNextStep(contextId, processId, ticketId, user).then((step)=>{
                    const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                    (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                        ticket: info,
                        step: step
                    });
                });
            }
        });
    }
}
const getProcessId = async (ticketId)=>{
    const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(ticketId, [
        (0, _constants.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME)
    ]);
    const found = parents.find((el)=>el.type.get() === (0, _constants.SPINAL_TICKET_SERVICE_STEP_TYPE));
    if (found) return found.processId.get();
};

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","../extensions/spinalIO":"1Oi5o","spinal-env-viewer-graph-service":"9LAk7","spinal-service-ticket":"gdJwR","../extensions/Event":"2zI7K","../extensions/ticketsEvents":"2Aq1L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Oi5o":[function(require,module,exports,__globalThis) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinalIO", ()=>spinalIO);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _crypt = require("./crypt");
let $ = require("59538974fe512547");
const SpinalUserManager = window.SpinalUserManager;
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
class SpinalIO {
    constructor(){
        this.loadPromise = {};
        this.connectPromise = null;
        this.user = null;
        this.conn = null;
    }
    decriJson(encryptedHex) {
        try {
            const k = [
                10,
                95,
                124,
                68,
                55,
                24,
                90,
                57,
                34,
                65,
                81,
                22,
                75,
                7,
                110,
                1
            ];
            const str = (0, _crypt.decriAes)(k, encryptedHex);
            return JSON.parse(str);
        } catch (e) {
            const str = (0, _crypt.decriB64)(encryptedHex);
            try {
                return JSON.parse(str);
            } catch (e) {
                return '';
            }
        }
    }
    getauth() {
        if (this.user !== null) return this.user;
        const encryptedHex = window.localStorage.getItem('spinalhome_cfg');
        this.user = this.decriJson(encryptedHex);
        return this.user;
    }
    connect() {
        // if (this.connectPromise !== null) {
        //   return this.connectPromise;
        // }
        // this.connectPromise = new Promise((resolve, reject) => {
        //   $(document).ready(() => {
        //     FileSystem.CONNECTOR_TYPE = "Browser"
        //     const user = this.getauth();
        //     if (this.user.username) {
        //       SpinalUserManager.get_user_id(
        //         'http://' + window.location.host, user.username, user
        //         .password,
        //         response => {
        //           this.spinalUserId = parseInt(response);
        //           this.conn =
        //             window.spinalCore.connect(`http://${this.spinalUserId}:${
        //               user.password}@${window.location.host}/`);
        //           resolve(this.conn);
        //         },
        //         () => {
        //           window.location = '/html/drive/';
        //           reject('Authentication Connection Error');
        //         });
        //     } else {
        //       window.location = '/html/drive/';
        //       reject('Authentication Connection Error');
        //     }
        //   });
        // })
        // return this.connectPromise;
        this.conn = (0, _spinalCoreConnectorjsType.FileSystem).get_inst();
        return Promise.resolve(this.conn);
    }
    getModelPath() {
        const cryptedPath = getParameterByName('path');
        if (!cryptedPath) throw new Error('No "path" attribute found in the url');
        const k = [
            10,
            95,
            124,
            68,
            55,
            24,
            90,
            57,
            34,
            65,
            81,
            22,
            75,
            7,
            110,
            1
        ];
        try {
            const decripted = (0, _crypt.decriAes)(k, cryptedPath);
            if (decripted[0] !== '/') throw "not a path";
            return decripted;
        } catch (e) {
            const decripted = (0, _crypt.decriB64)(cryptedPath);
            return decripted;
        }
    }
    getPathModel() {
        try {
            const path = this.getModelPath();
            return this.load(path);
        } catch (e) {
            return this.load('/__users__/public/digital_twin/default');
        }
    }
    load(path) {
        if (typeof this.loadPromise[path] !== 'undefined') return this.loadPromise[path];
        const promisefunc = async (resolve, reject)=>{
            try {
                await this.connect();
                (0, _spinalCoreConnectorjsType.spinalCore).load(this.conn, path, (model)=>{
                    resolve(model);
                }, ()=>{
                    throw new Error(`Load Error path: '${path}'`);
                });
            } catch (e) {
                reject(e);
            }
        };
        this.loadPromise[path] = new Promise(promisefunc);
        return this.loadPromise[path];
    }
    loadPtr(ptr) {
        if (ptr instanceof (0, _spinalCoreConnectorjsType.File)) return this.loadPtr(ptr._ptr);
        const server_id = ptr.data.value;
        if (typeof this.loadPtr[server_id] !== 'undefined') return this.loadPtr[server_id];
        const promFunc = async (resolve, reject)=>{
            try {
                await this.connect();
                this.conn.load_ptr(server_id, (model)=>{
                    resolve(model);
                }, ()=>{
                    throw new Error(`LoadPtr Error server_id: '${server_id}'`);
                });
            } catch (e) {
                reject(e);
            }
        };
        this.loadPtr[server_id] = new Promise(promFunc);
        return this.loadPtr[server_id];
    }
    async getUserProfile(user, withAdminCheck = false) {
        const userDir = await this.load('/etc/UserProfileDir');
        for(let index = 0; index < userDir.length; index++){
            const userFile = userDir[index];
            if (userFile.name.get() === user) {
                if (withAdminCheck === true) return this.loadPtr(userFile).then(async (res)=>{
                    await this.checkUserAdmin(user, res);
                    return res;
                }, ()=>{
                    throw new Error('Undefined User');
                });
                else return this.loadPtr(userFile);
            }
        }
        throw new Error('Undefined User');
    }
    getAlluser() {
        let path = "/etc/users";
        return this.load(path).then((model)=>{
            return model.get();
        });
    }
    async getUserConnected() {
        const auth = this.getauth();
        const allUsers = await this.getAlluser();
        return allUsers.find((el)=>el.name === auth.username);
    }
}
const spinalIO = new SpinalIO();

},{"spinal-core-connectorjs_type":"1A32E","./crypt":"bX4tf","59538974fe512547":"dlwdd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bX4tf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decriAes", ()=>decriAes);
parcelHelpers.export(exports, "decriB64", ()=>decriB64);
var aesjs = require("7371ade664cbc10a");
function decriAes(k, encryptedHex) {
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    const aesCtr = new aesjs.ModeOfOperation.ctr(k, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
function decriB64(encryptedHex) {
    return atob(encryptedHex);
}

},{"7371ade664cbc10a":"evEuu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2zI7K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const EventBus = new (0, _vueDefault.default)();
exports.default = EventBus;

},{"vue":"hO3OD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Aq1L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TICKET_EVENTS", ()=>TICKET_EVENTS);
const TICKET_EVENTS = Object.freeze({
    created: "created",
    changeStep: "changeStep"
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lt3IZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackToPreviousStepButton", ()=>BackToPreviousStepButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalIO = require("../extensions/spinalIO");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalServiceTicket = require("spinal-service-ticket");
var _event = require("../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _ticketsEvents = require("../extensions/ticketsEvents");
class BackToPreviousStepButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super('Back to previous step', 'backward the ticket to previous step', {
            icon: "skip_previous",
            icon_type: 'in',
            backgroundColor: "#356BAB",
            fontColor: '#ffffff'
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE) && nodeType === (0, _constants.SPINAL_TICKET_SERVICE_TICKET_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const user = await (0, _spinalIO.spinalIO).getUserConnected();
        const contextId = option.context.id.get();
        const ticketId = option.selectedNode.id.get();
        const processId = await getProcessId(ticketId);
        // console.log(contextId, ticketId, processId)
        if (contextId && ticketId && processId) (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("confirmationDialog", {
            message: "do you want to backward this ticket to the next step ?",
            callback: ()=>{
                (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToPreviousStep(contextId, processId, ticketId, user).then((step)=>{
                    const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                    (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                        ticket: info,
                        step: step
                    });
                });
            }
        });
    }
}
const getProcessId = async (ticketId)=>{
    const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(ticketId, [
        (0, _constants.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME)
    ]);
    const found = parents.find((el)=>el.type.get() === (0, _constants.SPINAL_TICKET_SERVICE_STEP_TYPE));
    if (found) return found.processId.get();
};

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","../extensions/spinalIO":"1Oi5o","spinal-env-viewer-graph-service":"9LAk7","spinal-service-ticket":"gdJwR","../extensions/Event":"2zI7K","../extensions/ticketsEvents":"2Aq1L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b49Xn":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
parcelHelpers.export(exports, "SelectElementOnMaquette", ()=>SelectElementOnMaquette);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _colorElementExtension = require("../../extensions/colorElementExtension");
var _colorElementExtensionDefault = parcelHelpers.interopDefault(_colorElementExtension);
class SelectElementOnMaquette extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Select Object on Maquette", "select object on maquette", {
            icon: "find_in_page",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _colorElementExtensionDefault.default).getTicketParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(parents);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-service-ticket/dist/Constants":"j9ikR","../../extensions/colorElementExtension":"jTd7T","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jTd7T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _constants1 = require("spinal-service-ticket/dist/Constants");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
class ColorElementExtension {
    constructor(){}
    getIcon(nodeInfo, contextInfo) {
        return this._isColored(nodeInfo, contextInfo).then((isColored)=>{
            return isColored;
        });
    }
    restoreItem(nodeInfo, contextInfo) {
        this.getGroups(nodeInfo, contextInfo).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                this._restoreGroup(contextInfo.id, id);
            });
        });
    }
    colorItem(nodeInfo, contextInfo) {
        this.getGroups(nodeInfo, contextInfo).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                let color = el.color ? el.color : undefined;
                this._colorGroup(contextInfo.id, id, color);
            });
        });
    }
    getGroups(selectedNode, contextInfo) {
        const type = selectedNode.type;
        const nodeId = selectedNode.id;
        const contextId = contextInfo.id;
        if (type === (0, _constants1.SPINAL_TICKET_SERVICE_STEP_TYPE)) return Promise.resolve([
            selectedNode
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === (0, _constants1.SPINAL_TICKET_SERVICE_STEP_TYPE);
        //   return groupManagerService.isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    async getBimObjects(contextId, groupId) {
        const notes = await this._getTickets(groupId, contextId);
        const parents = await this._getParents(notes);
        const promises = parents.map((el)=>this._getItemsBim(el));
        return Promise.all(promises).then((result)=>{
            const res = [];
            result.forEach((el)=>res.push(...el));
            return res;
        });
    }
    ////////////////////////////////////////////////////////////
    //                    PRIVATE                             //
    ////////////////////////////////////////////////////////////
    _isColored(selectedNode, contextInfo) {
        return this.getGroups(selectedNode, contextInfo).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id = res[index].id;
                if (typeof ItemColoredMap.get(id) === "undefined") return false;
            }
            return true;
        });
    }
    _colorGroup(contextId, groupId, argColor) {
        return this.getBimObjects(contextId, groupId).then((res)=>{
            let color = typeof argColor !== "undefined" ? this._convertHexColorToRGB(argColor) : this._convertHexColorToRGB("#000000");
            ItemColoredMap.set(groupId, groupId);
            res.forEach((child)=>{
                let BimColors = BimElementsColor.get(child.dbid) ? BimElementsColor.get(child.dbid) : [];
                BimColors.push({
                    id: groupId,
                    color: color
                });
                BimElementsColor.set(child.dbid, BimColors);
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId);
                model.setThemingColor(child.dbid, new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7, true));
            });
        });
    }
    _restoreGroup(contextId, groupId) {
        ItemColoredMap.delete(groupId);
        return this.getBimObjects(contextId, groupId).then((res)=>{
            res.forEach((child)=>{
                let model = window.spinal.BimObjectService.getModelByBimfile(child.bimFileId);
                model.setThemingColor(child.dbid, // eslint-disable-next-line no-undef
                new THREE.Vector4(0, 0, 0, 0), true);
                let allColors = BimElementsColor.get(child.dbid);
                if (allColors) {
                    //   allColors = allColors.filter(el => el.id !== node.id.get());
                    allColors = allColors.filter((el)=>el.id !== groupId);
                    BimElementsColor.set(child.dbid, allColors);
                    if (allColors.length > 0) {
                        let color = allColors[0].color;
                        model.setThemingColor(child.dbid, // eslint-disable-next-line no-undef
                        new THREE.Vector4(color.r / 255, color.g / 255, color.b / 255, 0.7), true);
                    }
                }
            });
        });
    }
    _getTickets(nodeId, contextId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === (0, _constants1.SPINAL_TICKET_SERVICE_TICKET_TYPE);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    _convertHexColorToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    _getParents(notes) {
        const promises = notes.map(async (el)=>{
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id);
            const parents = await realNode.getParents((0, _constants1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME));
            return parents.filter((el)=>{
                return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
            });
        });
        return Promise.all(promises).then((result)=>{
            const res = [];
            result.forEach((element)=>{
                const infos = element.map((el)=>{
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                    return el.info.get();
                });
                res.push(...infos);
            });
            return res;
        });
    }
    _getItemsBim(nodeInfo) {
        const type = nodeInfo.type;
        const nodeId = nodeInfo.id;
        if (type === (0, _constants.BIM_OBJECT_TYPE)) return Promise.resolve([
            nodeInfo
        ]);
        else if (type === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.ROOM_TYPE) return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.REFERENCE_RELATION,
            (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_RELATION
        ]);
        else // let relations = [
        //   ...geographicService.constants.GEOGRAPHIC_RELATIONS,
        //   geographicService.constants.REFERENCE_RELATION
        // ];
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findNodes(nodeId, (0, _utilities.SELECTrelationList), (node)=>{
            return node.getType().get() === (0, _constants.BIM_OBJECT_TYPE);
        }).then((res)=>{
            return res.map((el)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                return el.info.get();
            });
        });
    }
    ////////////////////////////////////////////////////////////////////
    //                    Standard Buttons functions                  //
    ////////////////////////////////////////////////////////////////////
    async getGeographicElement(ticketId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(ticketId);
        const parents = await realNode.getParents((0, _constants1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME));
        return parents.filter((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
        }).map((el)=>el.info);
    }
    async getTicketParentsBim(nodeId, contextId) {
        const tickets = await this._getTickets(nodeId, contextId);
        const promises = tickets.map((el)=>this.getGeographicElement(el.id));
        return Promise.all(promises).then(async (ticketsParentNode)=>{
            const el = ticketsParentNode.flat();
            const promises = el.map((v)=>this._getItemsBim(v));
            let bims = await Promise.all(promises);
            bims = bims.flat();
            const bimMap = new Map();
            for (const bimObject of bims){
                const bimFileId = bimObject.bimFileId;
                const dbid = bimObject.dbid;
                if (typeof bimMap.get(bimFileId) === "undefined") bimMap.set(bimFileId, new Set());
                bimMap.get(bimFileId).add(dbid);
            }
            const res = [];
            for (const [key, value] of bimMap.entries())res.push({
                model: window.spinal.BimObjectService.getModelByBimfile(key),
                ids: Array.from(value)
            });
            return res;
        });
    }
}
exports.default = new ColorElementExtension();

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-geographic-service":"RdCQo","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-plugin-forge/dist/Constants":"2MD19","spinal-env-viewer-plugin-standard_button/js/utilities":"7fsh6","spinal-service-ticket/dist/Constants":"j9ikR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7fsh6":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-group-manager-service":"gmxoN","spinal-env-viewer-context-geographic-service/build/constants":"cZr3d","spinal-model-bmsnetwork":"haihS","spinal-env-viewer-plugin-network-tree-service":"aaFv2"}],"hGHKg":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
parcelHelpers.export(exports, "IsolateElementOnMaquette", ()=>IsolateElementOnMaquette);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _colorElementExtension = require("../../extensions/colorElementExtension");
var _colorElementExtensionDefault = parcelHelpers.interopDefault(_colorElementExtension);
class IsolateElementOnMaquette extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Isolate Object on Maquette", "Isolate object on maquette", {
            icon: "settings_overscan",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _colorElementExtensionDefault.default).getTicketParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        spinal.ForgeViewer.viewer.impl.visibilityManager.aggregateIsolate(parents);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-service-ticket/dist/Constants":"j9ikR","../../extensions/colorElementExtension":"jTd7T","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lg8UM":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2024 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Software license Agreement ("Agreement")
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
parcelHelpers.export(exports, "ZoomElementOnMaquette", ()=>ZoomElementOnMaquette);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _colorElementExtension = require("../../extensions/colorElementExtension");
var _colorElementExtensionDefault = parcelHelpers.interopDefault(_colorElementExtension);
class ZoomElementOnMaquette extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Zoom", "Isolate object on maquette", {
            icon: "zoom_in",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _constants.SERVICE_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _colorElementExtensionDefault.default).getTicketParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        const items = parents.map((el)=>{
            return {
                model: el.model,
                selection: el.ids
            };
        });
        window.spinal.ForgeViewer.viewer.fitToView(items);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-service-ticket/dist/Constants":"j9ikR","../../extensions/colorElementExtension":"jTd7T","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hPoNB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorElementButton", ()=>ColorElementButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _colorElementExtension = require("../extensions/colorElementExtension");
var _colorElementExtensionDefault = parcelHelpers.interopDefault(_colorElementExtension);
class ColorElementButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Select Object on Maquette", "select object on maquette", {
            icon: "",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const nodeType = option.selectedNode.type.get();
        if (contextType !== (0, _constants.SERVICE_TYPE) || nodeType === (0, _constants.SPINAL_TICKET_SERVICE_TICKET_TYPE)) return Promise.resolve(-1);
        return (0, _colorElementExtensionDefault.default).getIcon(option.selectedNode.get(), option.context.get()).then((isColored)=>{
            this.buttonCfg["isColored"] = isColored;
            this.buttonCfg.icon = isColored ? "visibility_off" : "visibility";
            return true;
        });
    }
    async action(option) {
        const selected = option.selectedNode.get();
        const context = option.context.get();
        if (this.isColored) {
            this.icon = "visibility";
            this.isColored = false;
            (0, _colorElementExtensionDefault.default).restoreItem(selected, context);
        } else {
            this.icon = "visibility_off";
            this.isColored = true;
            (0, _colorElementExtensionDefault.default).colorItem(selected, context);
        }
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
const getGeographicElement = async (ticketId)=>{
    //   const parents = await SpinalGraphService.getParents(ticketId, [
    //     SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME,
    //   ]);
    const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(ticketId);
    const parents = await realNode.getParents((0, _constants.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME));
    return parents.filter((el)=>{
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
        return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
    }).map((el)=>el.info);
};

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-panel-manager-service":"egTXY","spinal-service-ticket/dist/Constants":"j9ikR","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-standard_button/js/utilities":"7fsh6","../extensions/colorElementExtension":"jTd7T","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9RtAJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextDialogVue = require("./createContextDialog.vue");
var _createContextDialogVueDefault = parcelHelpers.interopDefault(_createContextDialogVue);
var _createProcessDialogVue = require("./createProcessDialog.vue");
var _createProcessDialogVueDefault = parcelHelpers.interopDefault(_createProcessDialogVue);
var _createStepDialogVue = require("./createStepDialog.vue");
var _createStepDialogVueDefault = parcelHelpers.interopDefault(_createStepDialogVue);
var _createTicketVue = require("./createTicket.vue");
var _createTicketVueDefault = parcelHelpers.interopDefault(_createTicketVue);
var _selectProcessDialogVue = require("./selectProcessDialog.vue");
var _selectProcessDialogVueDefault = parcelHelpers.interopDefault(_selectProcessDialogVue);
var _createCommonIncidentDialogVue = require("./createCommonIncidentDialog.vue");
var _createCommonIncidentDialogVueDefault = parcelHelpers.interopDefault(_createCommonIncidentDialogVue);
// import TicketDetailDialog from "./ticketDetailDialog.vue";
var _confirmDialogVue = require("./confirmDialog.vue");
var _confirmDialogVueDefault = parcelHelpers.interopDefault(_confirmDialogVue);
const { SpinalMountExtention } = require("c6957659ef176505");
const dialogs = [
    {
        name: "createTicketContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createProcessDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createProcessDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createStepDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createStepDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createTicketDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createTicketVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "selectProcessDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _selectProcessDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createCommonIncidentDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createCommonIncidentDialogVueDefault.default)),
        parentContainer: document.body
    },
    // {
    //   name: "ticketDetailDialog",
    //   vueMountComponent: vue.extend(TicketDetailDialog),
    //   parentContainer: document.body
    // }, 
    {
        name: "confirmationDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _confirmDialogVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"hO3OD","./createContextDialog.vue":"9jE42","./createProcessDialog.vue":"1hWIf","./createStepDialog.vue":"2s39r","./createTicket.vue":"lBoay","./selectProcessDialog.vue":"71C36","./createCommonIncidentDialog.vue":"fAYOn","./confirmDialog.vue":"6nR2f","c6957659ef176505":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9jE42":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("83600d3a18abb52");
    if (script.__esModule) script = script.default;
    script.render = require("d836a3dc34c0d030").render;
    script.staticRenderFns = require("d836a3dc34c0d030").staticRenderFns;
    script._scopeId = "data-v-d9cdf7";
    script.__cssModules = require("37f8e31a14bafb62").default;
    require("63aa0a5dea5ddb00").default(script);
    script.__scopeId = 'data-v-d9cdf7';
    script.__file = "createContextDialog.vue";
};
initialize();
exports.default = script;

},{"83600d3a18abb52":"a89Ef","d836a3dc34c0d030":"3yQIn","37f8e31a14bafb62":"8DodZ","63aa0a5dea5ddb00":"9JSVR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a89Ef":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _sortableListVue = require("./components/sortable-list.vue");
var _sortableListVueDefault = parcelHelpers.interopDefault(_sortableListVue);
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "createTicketContextDialog",
    props: [
        "onFinised"
    ],
    components: {
        "sortable-list": (0, _sortableListVueDefault.default)
    },
    data () {
        this.STEPPERS_DATA = {
            context: "first",
            steps: "second"
        };
        return {
            showDialog: true,
            inputValue: "",
            steps: [],
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
            const value = res.inputValue.trim();
            if (res.closeResult && value.length > 0) {
                const context = await (0, _spinalServiceTicket.serviceTicketPersonalized).createContext(value, res.steps);
                (0, _eventDefault.default).$emit("ticketContextCreated", context.getId().get());
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") {
                const steps = this.getSteps();
                this.onFinised({
                    closeResult,
                    inputValue: this.inputValue,
                    steps
                });
            }
        },
        getSteps () {
            if (this.$refs.draggableComponent) {
                const steps = this.$refs.draggableComponent.itemsSorted;
                return steps.map((el, index)=>{
                    el.order = index;
                    return el;
                });
            }
        },
        disabledButton () {
            const contextCondition = this.inputValue.trim().length === 0;
            const stepsCondition = this.steps.length === 0;
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
            this.stepper.active = this.STEPPERS_DATA.steps;
        },
        addStep (res) {
            this.steps = [
                ...this.steps,
                res
            ];
        },
        deleteItem (order) {
            this.steps = this.steps.filter((el)=>el.order !== order);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","./components/sortable-list.vue":"csadJ","../../extensions/Event":"2zI7K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"csadJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc1d8c710202bcc7");
    if (script.__esModule) script = script.default;
    script.render = require("fbf48d88ca670da1").render;
    script.staticRenderFns = require("fbf48d88ca670da1").staticRenderFns;
    script._scopeId = "data-v-b6f6d2";
    script.__cssModules = require("13fe14883e1fef94").default;
    require("9a7b7b51be1f170f").default(script);
    script.__scopeId = 'data-v-b6f6d2';
    script.__file = "sortable-list.vue";
};
initialize();
exports.default = script;

},{"cc1d8c710202bcc7":"diq4L","fbf48d88ca670da1":"4r0rM","13fe14883e1fef94":"7jUvV","9a7b7b51be1f170f":"3eduy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"diq4L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vuedraggable = require("vuedraggable");
var _vuedraggableDefault = parcelHelpers.interopDefault(_vuedraggable);
var _popoverVue = require("./popover.vue");
var _popoverVueDefault = parcelHelpers.interopDefault(_popoverVue);
var scriptExports = {
    name: "Sortable-List",
    components: {
        popover: (0, _popoverVueDefault.default),
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
        addStep (res) {
            res["order"] = this.items.length;
            this.$emit("addStep", res);
        },
        deleteItem (order) {
            this.$emit("delete", order);
        }
    },
    watch: {
        items () {
            this.itemsSorted = this.items;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vuedraggable":"iquvk","./popover.vue":"gHErB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gHErB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9374535c400a91ac");
    if (script.__esModule) script = script.default;
    script.render = require("ee825984db4399a6").render;
    script.staticRenderFns = require("ee825984db4399a6").staticRenderFns;
    script._scopeId = "data-v-b4f635";
    script.__cssModules = require("760e3e23d88ca595").default;
    require("b97cff2841900a4b").default(script);
    script.__scopeId = 'data-v-b4f635';
    script.__file = "popover.vue";
};
initialize();
exports.default = script;

},{"9374535c400a91ac":"8BCVZ","ee825984db4399a6":"iku2w","760e3e23d88ca595":"8BtUo","b97cff2841900a4b":"eg3S8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8BCVZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueColor = require("vue-color");
var scriptExports = {
    name: "addItemsPopover",
    components: {
        "slider-picker": (0, _vueColor.Slider)
    },
    data () {
        return {
            name: "",
            color: "#000000",
            show: false
        };
    },
    methods: {
        OpenAttribute () {
            this.show = !this.show;
        },
        addStep () {
            const color = typeof this.color === "string" ? this.color : this.color.hex;
            this.$emit("addStep", {
                name: this.name,
                color
            });
            this.name = "";
            this.color = "#000000";
        },
        disabled () {
            return this.name.trim().length === 0 || !this.color;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"5tBvH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iku2w":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-popover', {
        attrs: {
            "offset": "16",
            "auto-hide": false,
            "open": _vm.show
        }
    }, [
        _c('md-button', {
            staticClass: "tooltip-target md-fab md-mini md-primary"
        }, [
            _c('md-icon', [
                _vm._v("add")
            ])
        ], 1),
        _vm._v(" "),
        _c('template', {
            slot: "popover"
        }, [
            _c('div', {
                staticClass: "popoverContainer"
            }, [
                _c('div', {
                    staticClass: "_popoverContent"
                }, [
                    _c('md-field', [
                        _c('label', [
                            _vm._v("Step name")
                        ]),
                        _vm._v(" "),
                        _c('md-input', {
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
                    _c('div', [
                        _c('slider-picker', {
                            staticClass: "colorPicker",
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
                _c('div', {
                    staticClass: "_popoverBtn"
                }, [
                    _c('md-button', {
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
                    _c('md-button', {
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
                            "click": _vm.addStep
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

},{}],"8BtUo":[function() {},{}],"eg3S8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4r0rM":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "myContainer md-scrollbar"
    }, [
        _vm.itemsSorted.length > 0 ? _c('draggable', {
            attrs: {
                "group": "steps"
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
            return _c('div', {
                key: element.order,
                staticClass: "listeItemDraggable"
            }, [
                _c('div', {
                    staticClass: "left"
                }, [
                    _c('div', {
                        staticClass: "color",
                        style: {
                            'background-color': element.color
                        }
                    }),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "name"
                    }, [
                        _vm._v("\n          " + _vm._s(element.name) + "\n        ")
                    ])
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "right"
                }, [
                    _c('md-button', {
                        staticClass: "md-icon-button md-dense md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.deleteItem(element.order);
                            }
                        }
                    }, [
                        _c('md-icon', [
                            _vm._v("delete_forever")
                        ])
                    ], 1)
                ], 1)
            ]);
        }), 0) : _c('div', {
            staticClass: "empty"
        }, [
            _vm._v("\n    No step created\n  ")
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "myFabs"
        }, [
            _c('popover', {
                on: {
                    "addStep": _vm.addStep
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7jUvV":[function() {},{}],"3eduy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3yQIn":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Ticket context\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "mdDialogContainer"
        }, [
            _c('md-steppers', {
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
                _c('md-step', {
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
                    _c('md-content', {
                        staticClass: "contents"
                    }, [
                        _c('md-field', [
                            _c('label', [
                                _vm._v("Context name")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
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
                _c('md-step', {
                    staticClass: "mdStep",
                    attrs: {
                        "id": _vm.STEPPERS_DATA.steps,
                        "md-label": "Steps",
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
                    _c('sortable-list', {
                        ref: "draggableComponent",
                        attrs: {
                            "items": _vm.steps
                        },
                        on: {
                            "addStep": _vm.addStep,
                            "delete": _vm.deleteItem
                        }
                    })
                ], 1)
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
            _vm.stepper.active === this.STEPPERS_DATA.context ? _c('md-button', {
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
            _vm.stepper.active === this.STEPPERS_DATA.steps ? _c('md-button', {
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

},{}],"8DodZ":[function() {},{}],"9JSVR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1hWIf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f7935aecc7bc156f");
    if (script.__esModule) script = script.default;
    script.render = require("7d4b323774cff46e").render;
    script.staticRenderFns = require("7d4b323774cff46e").staticRenderFns;
    script._scopeId = "data-v-432c2e";
    script.__cssModules = require("c687d9d6b7466d02").default;
    require("d0836959917586b9").default(script);
    script.__scopeId = 'data-v-432c2e';
    script.__file = "createProcessDialog.vue";
};
initialize();
exports.default = script;

},{"f7935aecc7bc156f":"i4teu","7d4b323774cff46e":"hfefi","c687d9d6b7466d02":"eRFMK","d0836959917586b9":"aCgO1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i4teu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "createProcessDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            contextId: undefined,
            process: {
                name: ""
            }
        };
    },
    methods: {
        opened (option) {
            this.autoFocusNameInput();
            this.contextId = option.contextId;
        },
        async removed (res) {
            if (res.closeResult && res.process.name.length > 0 && this.contextId) {
                const process = await (0, _spinalServiceTicket.serviceTicketPersonalized).createProcess(res.process, this.contextId);
                (0, _eventDefault.default).$emit("ticketProcessCreated", process);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                process: this.process
            });
        },
        autoFocusNameInput () {
            setTimeout(()=>{
                this.$refs["nameTextField"].$el.focus();
            }, 200);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","../../extensions/Event":"2zI7K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hfefi":[function(require,module,exports,__globalThis) {
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
        _c('form', {
            staticClass: "dialogForm",
            on: {
                "submit": function($event) {
                    $event.preventDefault();
                    return _vm.closeDialog(true);
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Create Process Context")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Process name")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        ref: "nameTextField",
                        model: {
                            value: _vm.process.name,
                            callback: function($$v) {
                                _vm.$set(_vm.process, "name", $$v);
                            },
                            expression: "process.name"
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
                        "type": "submit",
                        "disabled": !(_vm.process.name.trim().length > 0)
                    }
                }, [
                    _vm._v("Save\n      ")
                ])
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eRFMK":[function() {},{}],"aCgO1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2s39r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f193c236a6327045");
    if (script.__esModule) script = script.default;
    script.render = require("90e36e69e10b6f8a").render;
    script.staticRenderFns = require("90e36e69e10b6f8a").staticRenderFns;
    script._scopeId = "data-v-08b626";
    script.__cssModules = require("49708d7946b8d98").default;
    require("c7cd1b6a91790da7").default(script);
    script.__scopeId = 'data-v-08b626';
    script.__file = "createStepDialog.vue";
};
initialize();
exports.default = script;

},{"f193c236a6327045":"1IjR5","90e36e69e10b6f8a":"aQ5hG","49708d7946b8d98":"5R05w","c7cd1b6a91790da7":"3hV2e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1IjR5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _vueColor = require("vue-color");
var scriptExports = {
    name: "createStepDialog",
    props: [
        "onFinised"
    ],
    components: {
        "chrome-picker": (0, _vueColor.Chrome)
    },
    data () {
        this.PLACEMENT = {
            before: 0,
            after: 1
        };
        return {
            showDialog: true,
            processId: undefined,
            contextId: undefined,
            place: undefined,
            orderSelected: undefined,
            steps: [],
            step: {
                name: "",
                color: "#000000",
                order: 0
            }
        };
    },
    methods: {
        async opened (option) {
            this.autoFocusNameInput();
            this.processId = option.processId;
            this.contextId = option.contextId;
            this.steps = await this.getSteps(this.processId, this.contextId);
        },
        async removed (res) {
            if (res.closeResult && res.step.name.length > 0 && this.processId && this.contextId) (0, _spinalServiceTicket.serviceTicketPersonalized).insertStep(this.contextId, this.processId, res.step);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") {
                this.step.color = typeof this.step.color === "string" ? this.step.color : this.step.color.hex;
                this.step.order = this.orderSelected + this.place;
                this.onFinised({
                    closeResult,
                    step: this.step
                });
            }
        },
        autoFocusNameInput () {
            setTimeout(()=>{
                this.$refs["nameTextField"].$el.focus();
            }, 200);
        },
        disabled () {
            return !(this.step.name.trim().length > 0 && typeof this.place !== "undefined" && typeof this.orderSelected !== "undefined");
        },
        getSteps (processId, contextId) {
            return (0, _spinalServiceTicket.serviceTicketPersonalized).getStepsFromProcess(processId, contextId).then((result)=>{
                return result.map((el)=>el.get()).filter((el)=>el.order !== -1);
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","vue-color":"5tBvH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aQ5hG":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "stepDialogContainer",
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
        _c('form', {
            staticClass: "dialogForm",
            on: {
                "submit": function($event) {
                    $event.preventDefault();
                    return _vm.closeDialog(true);
                }
            }
        }, [
            _c('md-dialog-title', [
                _vm._v("Create Ticket Step")
            ]),
            _vm._v(" "),
            _c('md-dialog-content', [
                _c('md-field', [
                    _c('label', [
                        _vm._v("Step name")
                    ]),
                    _vm._v(" "),
                    _c('md-input', {
                        ref: "nameTextField",
                        model: {
                            value: _vm.step.name,
                            callback: function($$v) {
                                _vm.$set(_vm.step, "name", $$v);
                            },
                            expression: "step.name"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "order_div md-layout md-gutter"
                }, [
                    _c('span', {
                        staticClass: "md-layout-item md-size-20 md-caption insert_div"
                    }, [
                        _vm._v("Insert\n          it")
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "md-layout-item md-size-30"
                    }, [
                        _c('md-field', [
                            _c('md-select', {
                                attrs: {
                                    "name": "Place",
                                    "id": "Place",
                                    "placeholder": "Place"
                                },
                                model: {
                                    value: _vm.place,
                                    callback: function($$v) {
                                        _vm.place = $$v;
                                    },
                                    expression: "place"
                                }
                            }, [
                                _c('md-option', {
                                    attrs: {
                                        "value": _vm.PLACEMENT.before
                                    }
                                }, [
                                    _vm._v("Before")
                                ]),
                                _vm._v(" "),
                                _c('md-option', {
                                    attrs: {
                                        "value": _vm.PLACEMENT.after
                                    }
                                }, [
                                    _vm._v("After")
                                ])
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "md-layout-item md-size-50"
                    }, [
                        _c('md-field', [
                            _c('md-select', {
                                attrs: {
                                    "name": "step",
                                    "id": "step",
                                    "placeholder": "Steps"
                                },
                                model: {
                                    value: _vm.orderSelected,
                                    callback: function($$v) {
                                        _vm.orderSelected = $$v;
                                    },
                                    expression: "orderSelected"
                                }
                            }, _vm._l(_vm.steps, function(s) {
                                return _c('md-option', {
                                    key: s.order,
                                    attrs: {
                                        "value": s.order
                                    }
                                }, [
                                    _vm._v(_vm._s(s.name))
                                ]);
                            }), 1)
                        ], 1)
                    ], 1)
                ]),
                _vm._v(" "),
                _c('chrome-picker', {
                    staticClass: "stepChromePicker",
                    model: {
                        value: _vm.step.color,
                        callback: function($$v) {
                            _vm.$set(_vm.step, "color", $$v);
                        },
                        expression: "step.color"
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
                        "type": "submit",
                        "disabled": _vm.disabled()
                    }
                }, [
                    _vm._v("Save\n      ")
                ])
            ], 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5R05w":[function() {},{}],"3hV2e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lBoay":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c1629f445b900976");
    if (script.__esModule) script = script.default;
    script.render = require("2a9a142d6cb891fa").render;
    script.staticRenderFns = require("2a9a142d6cb891fa").staticRenderFns;
    script._scopeId = "data-v-813a26";
    script.__cssModules = require("7be61592bcdfe25d").default;
    require("5d93fc935e3f9787").default(script);
    script.__scopeId = 'data-v-813a26';
    script.__file = "createTicket.vue";
};
initialize();
exports.default = script;

},{"c1629f445b900976":"a3hg3","2a9a142d6cb891fa":"lHkzO","7be61592bcdfe25d":"iTTRu","5d93fc935e3f9787":"51Eew","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a3hg3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _constants = require("spinal-service-ticket/dist/Constants");
var _attachmentVue = require("./components/attachment.vue");
var _attachmentVueDefault = parcelHelpers.interopDefault(_attachmentVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalIO = require("../../extensions/spinalIO");
var _ticketsEvents = require("../../extensions/ticketsEvents");
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "createTicketDialog",
    props: [
        "onFinised"
    ],
    components: {
        "attachment-component": (0, _attachmentVueDefault.default)
    },
    data () {
        this.PRIORITY_DATA = (0, _constants.TICKET_PRIORITIES);
        this.PAGES = {
            normal: 0,
            loading: 1,
            success: 2,
            error: 3
        };
        return {
            pageSelected: this.PAGES.normal,
            showDialog: true,
            contextId: undefined,
            processId: undefined,
            commonTicket: undefined,
            nodeInfo: undefined,
            commonTicketInfo: undefined,
            ticket: {
                name: "",
                // elementSelected: null,
                description: "",
                pj: [],
                priority: this.PRIORITY_DATA.occasionally,
                user: {}
            },
            messages: {
                note: "",
                pj: []
            }
        };
    },
    methods: {
        async opened (option) {
            // this.autoFocusNameInput();
            this.contextId = option.contextId;
            this.processId = option.processId;
            this.nodeInfo = option.selectedNode.info.get();
            if (option.incidentId) this.commonTicketInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(option.incidentId).get();
            // this.ticket.elementSelected = new Ptr(option.selectedNode);
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            // console.log("user", user);
            this.ticket.user.username = user.name;
            this.ticket.userId = user.id;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        async removed (res) {
            res.closeResult;
            this.showDialog = false;
        },
        createTicket () {
            // console.log(this.ticket);
            this.pageSelected = this.PAGES.loading;
            (0, _spinalServiceTicket.serviceTicketPersonalized).addTicket(this.ticket, this.processId, this.contextId, this.nodeInfo.id).then((ticketId)=>{
                const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(ticketId);
                if (node) {
                    (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).created, node.info.get());
                    this.pageSelected = this.PAGES.success;
                //  this.addNote(node);
                }
            }).catch(()=>this.pageSelected = this.PAGES.error);
        },
        autoFocusNameInput () {
            setTimeout(()=>{
                this.$refs["nameTextField"].$el.focus();
            }, 200);
        },
        addPJ () {
            const maxSize = 25000000;
            const input = document.createElement("input");
            input.type = "file";
            input.multiple = true;
            input.click();
            input.addEventListener("change", (event)=>{
                const files = event.target.files;
                let filelist = [];
                for (const file of files)filelist.push(file);
                filelist.push(...this.ticket.pj);
                const sizes = filelist.map((el)=>el.size);
                const filesSize = sizes.reduce((a, b)=>a + b);
                if (filesSize > maxSize) {
                    alert("The selected file(s) is too large. The maximum size must not exceed 25 MB");
                    return;
                }
                this.ticket.pj = filelist;
            }, false);
        },
        removePJ (file) {
            this.ticket.pj = this.ticket.pj.filter((el)=>el.name !== file.name);
        }
    },
    computed: {
        icon () {
            switch(this.pageSelected){
                case this.PAGES.success:
                    return "check";
                case this.PAGES.error:
                    return "error_outline";
            }
        }
    },
    watch: {
        commonTicketInfo () {
            if (this.commonTicketInfo && this.commonTicketInfo.name) this.ticket.name = this.commonTicketInfo.name;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","spinal-service-ticket/dist/Constants":"j9ikR","./components/attachment.vue":"de8Vz","spinal-env-viewer-graph-service":"9LAk7","../../extensions/spinalIO":"1Oi5o","../../extensions/ticketsEvents":"2Aq1L","../../extensions/Event":"2zI7K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"de8Vz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c01516fccae31114");
    if (script.__esModule) script = script.default;
    script.render = require("32af7a28fa65dbc").render;
    script.staticRenderFns = require("32af7a28fa65dbc").staticRenderFns;
    script._scopeId = "data-v-854774";
    script.__cssModules = require("b804daa960246aa7").default;
    require("c8dd0f5c980dbade").default(script);
    script.__scopeId = 'data-v-854774';
    script.__file = "attachment.vue";
};
initialize();
exports.default = script;

},{"c01516fccae31114":"e1iw7","32af7a28fa65dbc":"9OSZW","b804daa960246aa7":"dUg7W","c8dd0f5c980dbade":"hgEfm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e1iw7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "attachment",
    props: [
        "file"
    ],
    data () {
        return {};
    },
    methods: {
        remove () {
            this.$emit("remove", this.file);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9OSZW":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "content"
    }, [
        _c('div', {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.file.name,
                    expression: "file.name"
                }
            ],
            staticClass: "md-caption name"
        }, [
            _vm._v(_vm._s(_vm.file.name))
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "md-caption delete",
            on: {
                "click": _vm.remove
            }
        }, [
            _vm._v("X")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dUg7W":[function() {},{}],"hgEfm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lHkzO":[function(require,module,exports,__globalThis) {
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
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Ticket\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "mdDialogContent"
        }, [
            _vm.pageSelected === _vm.PAGES.normal ? _c('div', {
                staticClass: "normalContent"
            }, [
                _c('div', {
                    staticClass: "content details"
                }, [
                    _c('div', [
                        _c('hr', {
                            staticClass: "hr-text",
                            attrs: {
                                "data-content": "Details"
                            }
                        })
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "left"
                    }, [
                        _vm.commonTicketInfo ? _c('div', {
                            staticClass: "detail"
                        }, [
                            _c('div', {
                                staticClass: "label"
                            }, [
                                _vm._v("Title")
                            ]),
                            _vm._v(" "),
                            _c('div', {
                                directives: [
                                    {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: _vm.commonTicketInfo.name,
                                        expression: "commonTicketInfo.name"
                                    }
                                ],
                                staticClass: "value"
                            }, [
                                _vm._v(_vm._s(_vm.commonTicketInfo.name) + "\n            ")
                            ])
                        ]) : !_vm.commonTicketInfo ? _c('div', {
                            staticClass: "detail"
                        }, [
                            _c('md-field', [
                                _c('label', [
                                    _vm._v("Ticket name")
                                ]),
                                _vm._v(" "),
                                _c('md-input', {
                                    model: {
                                        value: _vm.ticket.name,
                                        callback: function($$v) {
                                            _vm.$set(_vm.ticket, "name", $$v);
                                        },
                                        expression: "ticket.name"
                                    }
                                })
                            ], 1)
                        ], 1) : _vm._e(),
                        _vm._v(" "),
                        _vm.nodeInfo ? _c('div', {
                            staticClass: "detail"
                        }, [
                            _c('div', {
                                staticClass: "label"
                            }, [
                                _vm._v("Element")
                            ]),
                            _vm._v(" "),
                            _c('div', {
                                directives: [
                                    {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: _vm.nodeInfo.name,
                                        expression: "nodeInfo.name"
                                    }
                                ],
                                staticClass: "value"
                            }, [
                                _vm._v(_vm._s(_vm.nodeInfo.name))
                            ])
                        ]) : _vm._e()
                    ])
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "content priority"
                }, [
                    _c('div', [
                        _c('hr', {
                            staticClass: "hr-text",
                            attrs: {
                                "data-content": "Priority"
                            }
                        })
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "priorityRadio"
                    }, [
                        _c('md-radio', {
                            staticClass: "md-primary",
                            attrs: {
                                "value": _vm.PRIORITY_DATA.occasionally
                            },
                            model: {
                                value: _vm.ticket.priority,
                                callback: function($$v) {
                                    _vm.$set(_vm.ticket, "priority", $$v);
                                },
                                expression: "ticket.priority"
                            }
                        }, [
                            _vm._v("Occasionally")
                        ]),
                        _vm._v(" "),
                        _c('md-radio', {
                            staticClass: "md-primary",
                            attrs: {
                                "value": _vm.PRIORITY_DATA.normal
                            },
                            model: {
                                value: _vm.ticket.priority,
                                callback: function($$v) {
                                    _vm.$set(_vm.ticket, "priority", $$v);
                                },
                                expression: "ticket.priority"
                            }
                        }, [
                            _vm._v("Normal")
                        ]),
                        _vm._v(" "),
                        _c('md-radio', {
                            staticClass: "md-primary",
                            attrs: {
                                "value": _vm.PRIORITY_DATA.urgent
                            },
                            model: {
                                value: _vm.ticket.priority,
                                callback: function($$v) {
                                    _vm.$set(_vm.ticket, "priority", $$v);
                                },
                                expression: "ticket.priority"
                            }
                        }, [
                            _vm._v("Urgent")
                        ])
                    ], 1)
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "content notes"
                }, [
                    _c('hr', {
                        staticClass: "hr-text",
                        attrs: {
                            "data-content": "Notes"
                        }
                    }),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "pj"
                    }, [
                        _c('md-button', {
                            staticClass: "md-dense md-primary",
                            on: {
                                "click": _vm.addPJ
                            }
                        }, [
                            _c('md-icon', [
                                _vm._v("attach_file")
                            ]),
                            _vm._v("\n            ADD\n          ")
                        ], 1),
                        _vm._v(" "),
                        _vm.ticket.pj.length > 0 ? _c('md-content', {
                            staticClass: "pjDiv md-scrollbar"
                        }, _vm._l(_vm.ticket.pj, function(file, index) {
                            return _c('attachment-component', {
                                key: index,
                                attrs: {
                                    "file": file
                                },
                                on: {
                                    "remove": _vm.removePJ
                                }
                            }, [
                                _vm._v(_vm._s(file.name) + "\n            ")
                            ]);
                        }), 1) : _c('md-content', {
                            staticClass: "pjDiv empty"
                        }, [
                            _vm._v("\n            No Attachment added\n          ")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c('md-field', [
                        _c('label', [
                            _vm._v("Message")
                        ]),
                        _vm._v(" "),
                        _c('md-textarea', {
                            model: {
                                value: _vm.ticket.description,
                                callback: function($$v) {
                                    _vm.$set(_vm.ticket, "description", $$v);
                                },
                                expression: "ticket.description"
                            }
                        })
                    ], 1)
                ], 1)
            ]) : _c('div', {
                staticClass: "responseContent"
            }, [
                _vm.pageSelected === _vm.PAGES.loading ? _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                }) : _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v(_vm._s(_vm.icon))
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
                    "disabled": !(_vm.ticket.name.trim().length > 0)
                },
                on: {
                    "click": _vm.createTicket
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

},{}],"iTTRu":[function() {},{}],"51Eew":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"71C36":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("311241a781aaecb4");
    if (script.__esModule) script = script.default;
    script.render = require("fff3494e17408c36").render;
    script.staticRenderFns = require("fff3494e17408c36").staticRenderFns;
    script._scopeId = "data-v-e01c80";
    script.__cssModules = require("45d66c9f784c0393").default;
    require("58b0fd2d0d08ca1a").default(script);
    script.__scopeId = 'data-v-e01c80';
    script.__file = "selectProcessDialog.vue";
};
initialize();
exports.default = script;

},{"311241a781aaecb4":"1nXOF","fff3494e17408c36":"2hXvH","45d66c9f784c0393":"lLaUX","58b0fd2d0d08ca1a":"lu6st","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1nXOF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import linkerTemplateVue from "./components/linkerTemplate.vue";
var _selectProcessVue = require("./components/selectProcess.vue");
var _selectProcessVueDefault = parcelHelpers.interopDefault(_selectProcessVue);
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _ticketsVue = require("../panels/components/tickets.vue");
var _ticketsVueDefault = parcelHelpers.interopDefault(_ticketsVue);
var scriptExports = {
    name: "selectProcessDialog",
    props: [
        "onFinised"
    ],
    components: {
        // "link-template": linkerTemplateVue,
        "select-process": (0, _selectProcessVueDefault.default)
    },
    data () {
        this.PAGE_STATES = {
            success: 0,
            loading: 1
        };
        this.tabs = {
            create: "createNewTicketTab",
            linked: "linkedTicketTab"
        };
        return {
            showDialog: true,
            contextId: undefined,
            processId: undefined,
            incidentId: undefined,
            selectedNode: undefined,
            data: [],
            processes: [],
            incidents: [],
            // tickets: [],
            selectedTab: this.tabs.linked,
            loading: this.PAGE_STATES.loading
        };
    },
    mounted () {
        (0, _eventDefault.default).$on("commonIncidentCreated", async (id)=>{
            this.data = await this.getAllData();
            this.updateIncidents();
            this.incidentId = id;
        });
        (0, _eventDefault.default).$on("ticketContextCreated", async (context)=>{
            this.data = await this.getAllData();
            this.contextId = context;
        });
        (0, _eventDefault.default).$on("ticketProcessCreated", async (process)=>{
            this.data = await this.getAllData();
            this.updateProcesses();
            this.processId = process;
        });
    },
    methods: {
        async opened (option) {
            this.loading = this.PAGE_STATES.loading;
            this.selectedNode = option.selectedNode;
            const nodeId = option.selectedNode.getId().get();
            this.data = await this.getAllData();
            // this.tickets = await this.getNodeTickets(nodeId);
            this.loading = this.PAGE_STATES.success;
        },
        async removed (res) {
            if (res.closeResult && this.contextId && this.processId) (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTicketDialog", {
                contextId: this.contextId,
                processId: this.processId,
                incidentId: this.incidentId,
                selectedNode: this.selectedNode
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                process: this.process
            });
        },
        selectContext (id) {
            this.contextId = id;
        },
        selectProcess (id) {
            this.processId = id;
        },
        selectIncident (id) {
            this.incidentId = id;
        },
        getAllData () {
            const contexts = (0, _spinalServiceTicket.serviceTicketPersonalized).getContexts();
            let promises = contexts.map(async (context)=>{
                const processes = await (0, _spinalServiceTicket.serviceTicketPersonalized).getAllProcess(context.id);
                const promises = processes.map(async (argProcess)=>{
                    const process = argProcess.get();
                    process["commonIncident"] = await (0, _spinalServiceTicket.serviceTicketPersonalized).getCommonIncident(process.id);
                    return process;
                });
                context["processes"] = await Promise.all(promises);
                return context;
            });
            return Promise.all(promises);
        },
        // getIcidents() {
        //   this.incidentId = undefined;
        //   if (this.contextId && this.processId) {
        //     let context = this.data.find((el) => el.id === this.contextId);
        //     if (context) {
        //       let process = context.processes.find((el) => el.id == this.processId);
        //       if (category) return process.commonIncident;
        //     }
        //   }
        //   return [];
        // },
        updateProcesses () {
            // this.categorySelected = undefined;
            this.processes = [];
            if (this.contextId) {
                let val = this.data.find((el)=>el.id === this.contextId);
                if (val) this.processes = val.processes;
            }
        },
        updateIncidents () {
            this.incidents = [];
            if (this.contextId && this.processId) {
                let context = this.data.find((el)=>el.id === this.contextId);
                if (context) {
                    let process = context.processes.find((el)=>el.id == this.processId);
                    if (process) this.incidents = process.commonIncident;
                }
            }
        },
        createCommonIncident () {
            let params = this.processes.find((el)=>el.id == this.processId);
            // params["callback"] = (id) => (this.incidentId = id);
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCommonIncidentDialog", params);
        },
        createContext () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTicketContextDialog");
        },
        createProcess () {
            const params = {
                contextId: this.contextId
            };
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createProcessDialog", params);
        },
        // getNodeTickets(nodeId) {
        //   return serviceTicketPersonalized
        //     .getTicketsFromNode(nodeId)
        //     .then((tickets) => {
        //       const promises = tickets.map(async (ticket) => {
        //         ticket["step"] = await this.getStep(ticket.stepId);
        //         return ticket;
        //       });
        //       return Promise.all(promises);
        //     });
        // },
        // getStep(id) {
        //   const info = SpinalGraphService.getInfo(id);
        //   if (info) return Promise.resolve(info.get());
        //   return SpinalGraphService.getNodeAsync(id).then((result) => {
        //     return result.get();
        //   });
        // },
        async reloadData () {
            const id = this.selectedNode.getId().get();
            this.tickets = await this.getNodeTickets(id);
        },
        changeActiveTab (tabId) {
            this.selectedTab = tabId;
        }
    },
    watch: {
        contextId () {
            this.processId = undefined;
            this.incidentId = undefined;
            this.updateProcesses();
        // this.updateProcesses();
        },
        processId () {
            this.incidentId = undefined;
            this.updateIncidents();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","./components/selectProcess.vue":"eMCI7","../../extensions/Event":"2zI7K","../panels/components/tickets.vue":"cr5qe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eMCI7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("41d4c471bdf1a359");
    if (script.__esModule) script = script.default;
    script.render = require("2b08c376d05d1b63").render;
    script.staticRenderFns = require("2b08c376d05d1b63").staticRenderFns;
    script._scopeId = "data-v-da6350";
    script.__cssModules = require("6102d4c68b0ec87e").default;
    require("980cbab45a6f82ae").default(script);
    script.__scopeId = 'data-v-da6350';
    script.__file = "selectProcess.vue";
};
initialize();
exports.default = script;

},{"41d4c471bdf1a359":"cHfbY","2b08c376d05d1b63":"aJbPY","6102d4c68b0ec87e":"dZH9x","980cbab45a6f82ae":"eOHJJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cHfbY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkerTemplateVue = require("./linkerTemplate.vue");
var _linkerTemplateVueDefault = parcelHelpers.interopDefault(_linkerTemplateVue);
var scriptExports = {
    name: "selectProcess",
    props: {
        data: {},
        contextId: {},
        processes: {},
        processId: {},
        incidents: {},
        incidentId: {}
    },
    components: {
        "link-template": (0, _linkerTemplateVueDefault.default)
    },
    methods: {
        showCreatBtn () {
            return this.contextId && this.contextId.length > 0 && this.processId && this.processId.length > 0;
        },
        selectContext (id) {
            this.$emit("selectContext", id);
        },
        selectProcess (id) {
            this.$emit("selectProcess", id);
        },
        selectIncident (id) {
            this.$emit("selectIncident", id);
        },
        createCommonIncident () {
            this.$emit("createCommonIncident");
        },
        createContext () {
            this.$emit("createContext");
        },
        createProcess () {
            this.$emit("createProcess");
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkerTemplate.vue":"czgzg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"czgzg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("327a8e734e20e2c7");
    if (script.__esModule) script = script.default;
    script.render = require("3f373969f3c4e449").render;
    script.staticRenderFns = require("3f373969f3c4e449").staticRenderFns;
    script._scopeId = "data-v-86e94c";
    script.__cssModules = require("269f43c875d733f1").default;
    require("deed5c0e56ce1834").default(script);
    script.__scopeId = 'data-v-86e94c';
    script.__file = "linkerTemplate.vue";
};
initialize();
exports.default = script;

},{"327a8e734e20e2c7":"baY7e","3f373969f3c4e449":"lD3ZS","269f43c875d733f1":"jpNsm","deed5c0e56ce1834":"4qeej","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"baY7e":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lD3ZS":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "subContent"
    }, [
        _c('md-list', {
            staticClass: "title"
        }, [
            _c('md-list-item', [
                _c('span', {
                    staticClass: "md-list-item-text"
                }, [
                    _vm._v(_vm._s(_vm.title))
                ]),
                _vm._v(" "),
                _vm.showBtn ? _c('md-button', {
                    staticClass: "md-icon-button",
                    on: {
                        "click": _vm.createEvent
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("control_point")
                    ])
                ], 1) : _vm._e()
            ], 1)
        ], 1),
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

},{}],"jpNsm":[function() {},{}],"4qeej":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aJbPY":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "select_container"
    }, [
        _c('div', {
            staticClass: "content"
        }, [
            _c('div', {
                staticClass: "section"
            }, [
                _c('link-template', {
                    attrs: {
                        "title": 'Select Context',
                        "data": _vm.data,
                        "itemSelected": _vm.contextId,
                        "showBtn": true
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
                        "title": 'Select Process',
                        "data": _vm.processes,
                        "itemSelected": _vm.processId,
                        "showBtn": _vm.contextId && _vm.contextId.length > 0
                    },
                    on: {
                        "create": _vm.createProcess,
                        "select": _vm.selectProcess
                    }
                })
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "section"
            }, [
                _c('link-template', {
                    attrs: {
                        "title": 'Select Common Incident',
                        "subTitle": '(optional) it will be the ticket name',
                        "data": _vm.incidents,
                        "itemSelected": _vm.incidentId,
                        "showBtn": _vm.showCreatBtn()
                    },
                    on: {
                        "select": _vm.selectIncident,
                        "create": _vm.createCommonIncident
                    }
                })
            ], 1)
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dZH9x":[function() {},{}],"eOHJJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cr5qe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25f7c779c0722591");
    if (script.__esModule) script = script.default;
    script.render = require("f135a6e79fc69328").render;
    script.staticRenderFns = require("f135a6e79fc69328").staticRenderFns;
    script._scopeId = "data-v-a36221";
    script.__cssModules = require("7afe6bbff0d12208").default;
    require("723f4a2f178fd8d").default(script);
    script.__scopeId = 'data-v-a36221';
    script.__file = "tickets.vue";
};
initialize();
exports.default = script;

},{"25f7c779c0722591":"2IoNe","f135a6e79fc69328":"fayJe","7afe6bbff0d12208":"kzkQN","723f4a2f178fd8d":"8l49i","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2IoNe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalIO = require("../../../extensions/spinalIO");
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalServiceTicket = require("spinal-service-ticket");
var _ticketsEvents = require("../../../extensions/ticketsEvents");
var _event = require("../../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _selectElement = require("../../../buttons/standard_buttons/selectElement");
var _isolate = require("../../../buttons/standard_buttons/isolate");
const { spinalPanelManagerService } = require("cb5dbdd688eb6f17");
const selectBtn = new (0, _selectElement.SelectElementOnMaquette)();
const isolateBtn = new (0, _isolate.IsolateElementOnMaquette)();
var scriptExports = {
    name: "ticketsVue",
    props: {
        data: {}
    },
    data () {
        return {
            selected: [],
            // tickets: [],
            searched: [],
            searchByName: ""
        };
    },
    mounted () {
        (0, _eventDefault.default).$on((0, _ticketsEvents.TICKET_EVENTS).created, (data)=>this.$emit("reload", data));
        (0, _eventDefault.default).$on((0, _ticketsEvents.TICKET_EVENTS).changeStep, (data)=>this.$emit("reload", data));
        this.searched = this.data;
    },
    methods: {
        onSelect (items) {
            this.selected = items;
        },
        searchOnTable () {
            this.searched = this.data.filter((el)=>el.name.toLowerCase().includes(this.searchByName.toLowerCase()));
        // console.log("this.searchByName", this.searchByName);
        },
        async passToNextStep (item) {
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            const contextId = item.contextId ? item.contextId : this.getItemContext(item.id).id.get();
            const processId = item.step.processId;
            const ticketId = item.id;
            (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToNextStep(contextId, processId, ticketId, user).then((step)=>{
                const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: info,
                    step: step
                });
            });
        },
        async backToPreviousStep (item) {
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            const contextId = item.contextId ? item.contextId : this.getItemContext(item.id).id.get();
            const processId = item.step.processId;
            const ticketId = item.id;
            (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToPreviousStep(contextId, processId, ticketId, user).then((step)=>{
                const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: info,
                    step: step
                });
            });
        },
        sendMessage (item) {
            let obj = {
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(item.id)
            };
            spinalPanelManagerService.openPanel("panel-notes", obj);
        },
        seeDetails (item) {
            const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.contextId);
            const params = {
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id).get(),
                context: context ? context.get() : this.getItemContext(item.id).get()
            };
            spinalPanelManagerService.openPanel("ticketDetailDialog", params);
        },
        getItemContext (id) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
            const contextId = realNode.contextIds._attribute_names[0];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(contextId);
        },
        seeLogs (item) {},
        selectOnMaquette (item) {
            const params = {
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id),
                context: item.contextId ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.contextId) : this.getItemContext(item.id)
            };
            selectBtn.action(params);
        },
        isolateOnMaquette (item) {
            const params = {
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id),
                context: item.contextId ? (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.contextId) : this.getItemContext(item.id)
            };
            isolateBtn.action(params);
        },
        deselectOnMaquette () {
            window.spinal.ForgeViewer.viewer.select();
        },
        async archiveTicket (item) {
            const contextId = item.contextId ? item.contextId : this.getItemContext(item.id).id.get();
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            (0, _spinalServiceTicket.serviceTicketPersonalized).ArchiveTickets(contextId, item.step.processId, item.id, user).then((step)=>{
                const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id).get();
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: info,
                    step: step
                });
            });
        },
        async unarchiveTicket (item) {
            const contextId = item.contextId ? item.contextId : this.getItemContext(item.id).id.get();
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            (0, _spinalServiceTicket.serviceTicketPersonalized).unarchiveTicket(contextId, item.step.processId, item.id, user).then((step)=>{
                const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(item.id).get();
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: info,
                    step: step
                });
            });
        },
        isArchived (item) {
            return item.step.order === (0, _constants.ARCHIVED_STEP).order;
        }
    },
    filters: {
        formatCreationDate: function(date) {
            return (0, _momentDefault.default)(date).fromNow();
        },
        displayPriority: function(priority) {
            for(const key in 0, _constants.TICKET_PRIORITIES)if ((0, _constants.TICKET_PRIORITIES).hasOwnProperty(key)) {
                const value = (0, _constants.TICKET_PRIORITIES)[key];
                if (value === priority) return key;
            }
        },
        userName: function(user) {
            if (user && user.name) return user.name;
            else if (user && user.username) return user.username;
            return "unknow";
        }
    },
    watch: {
        data () {
            // console.log("update Data");
            if (this.data) this.searched = this.data;
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"j9ikR","cb5dbdd688eb6f17":"egTXY","../../../extensions/spinalIO":"1Oi5o","moment":"kty5A","spinal-env-viewer-graph-service":"9LAk7","spinal-service-ticket":"gdJwR","../../../extensions/ticketsEvents":"2Aq1L","../../../extensions/Event":"2zI7K","../../../buttons/standard_buttons/selectElement":"b49Xn","../../../buttons/standard_buttons/isolate":"hGHKg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fayJe":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "table_container"
    }, [
        _c('md-table', {
            staticClass: "mdTable",
            attrs: {
                "md-sort": "name"
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c('md-table-row', {
                            on: {
                                "dblclick": function($event) {
                                    return _vm.isolateOnMaquette(item);
                                },
                                "mouseleave": _vm.deselectOnMaquette
                            }
                        }, [
                            _c('md-table-cell', {
                                staticClass: "tableName",
                                attrs: {
                                    "md-label": "Name",
                                    "md-sort-by": "name"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(item.name) + "\n\n         ")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                staticClass: "ticketName",
                                attrs: {
                                    "md-label": "State"
                                }
                            }, [
                                _c('div', {
                                    staticClass: "color",
                                    style: {
                                        'background-color': item.step.color
                                    }
                                }),
                                _vm._v(" "),
                                _c('div', {
                                    staticClass: "name"
                                }, [
                                    _vm._v(_vm._s(item.step.name))
                                ])
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Creation Date",
                                    "md-sort-by": "creationDate"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("formatCreationDate")(item.creationDate)) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Priority",
                                    "md-sort-by": "priority"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("displayPriority")(item.priority)))
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": "Username"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("userName")(item.user)) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c('md-table-cell', {
                                attrs: {
                                    "md-label": ""
                                }
                            }, [
                                _c('md-menu', {
                                    staticClass: "ticket_menu",
                                    attrs: {
                                        "md-size": "small"
                                    }
                                }, [
                                    _c('md-button', {
                                        staticClass: "md-icon-button",
                                        attrs: {
                                            "md-menu-trigger": ""
                                        }
                                    }, [
                                        _c('md-icon', [
                                            _vm._v("more_vert")
                                        ])
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-menu-content', {
                                        staticClass: "ticket_menu_content"
                                    }, [
                                        item.step.order >= 0 ? _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.passToNextStep(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("skip_next")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("Pass to next step")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        item.step.order > 0 ? _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.backToPreviousStep(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("skip_previous")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("Back to previous step")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.sendMessage(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("comment")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("Add comment")
                                            ])
                                        ], 1),
                                        _vm._v(" "),
                                        !_vm.isArchived(item) ? _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.archiveTicket(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("archive")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("Archive")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _vm.isArchived(item) ? _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.unarchiveTicket(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("unarchive")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("Unarchive")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _c('md-menu-item', {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.seeDetails(item);
                                                }
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("assignment_late")
                                            ]),
                                            _vm._v(" "),
                                            _c('span', [
                                                _vm._v("See Details")
                                            ])
                                        ], 1)
                                    ], 1)
                                ], 1)
                            ], 1)
                        ], 1);
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
                staticClass: "myToolbar",
                attrs: {
                    "md-elevation": "0"
                }
            }, [
                _c('div', {
                    staticClass: "md-toolbar-section-start"
                }, [
                    _c('h1', {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Tickets")
                    ])
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "filters md-toolbar-section-end"
                }, [
                    _c('div', {
                        staticClass: "_fields"
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
                                    value: _vm.searchByName,
                                    callback: function($$v) {
                                        _vm.searchByName = $$v;
                                    },
                                    expression: "searchByName"
                                }
                            })
                        ], 1)
                    ], 1)
                ])
            ]),
            _vm._v(" "),
            _c('md-table-empty-state', {
                attrs: {
                    "md-label": "No Ticket found",
                    "md-description": "No ticket found for this query."
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kzkQN":[function() {},{}],"8l49i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2hXvH":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
        staticClass: "ticketMdDialogContainer",
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
            _vm._v("Select Ticket Process")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "selectProcessClass"
        }, [
            _vm.loading === _vm.PAGE_STATES.success ? _c('div', {
                staticClass: "my_content"
            }, [
                _c('select-process', {
                    attrs: {
                        "data": _vm.data,
                        "contextId": _vm.contextId,
                        "processes": _vm.processes,
                        "processId": _vm.processId,
                        "incidents": _vm.incidents,
                        "incidentId": _vm.incidentId
                    },
                    on: {
                        "selectContext": _vm.selectContext,
                        "selectProcess": _vm.selectProcess,
                        "selectIncident": _vm.selectIncident,
                        "createCommonIncident": _vm.createCommonIncident,
                        "createContext": _vm.createContext,
                        "createProcess": _vm.createProcess
                    }
                })
            ], 1) : _vm.loading === _vm.PAGE_STATES.loading ? _c('div', {
                staticClass: "cont loading"
            }, [
                _vm._v("\n         loading...\n      ")
            ]) : _vm._e()
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
                    "disabled": !(_vm.contextId && _vm.processId)
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

},{}],"lLaUX":[function() {},{}],"lu6st":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fAYOn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f9ab2477d061dbab");
    if (script.__esModule) script = script.default;
    script.render = require("7c090ac03f1172ab").render;
    script.staticRenderFns = require("7c090ac03f1172ab").staticRenderFns;
    script._scopeId = "data-v-52b266";
    require("a04b81f91a386088").default(script);
    script.__scopeId = 'data-v-52b266';
    script.__file = "createCommonIncidentDialog.vue";
};
initialize();
exports.default = script;

},{"f9ab2477d061dbab":"1Aehi","7c090ac03f1172ab":"iCaE1","a04b81f91a386088":"5axvo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Aehi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _sortableListVue = require("./components/sortable-list.vue");
var _sortableListVueDefault = parcelHelpers.interopDefault(_sortableListVue);
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "createCommonIncidentDialog",
    props: [
        "onFinised"
    ],
    components: {
        "sortable-list": (0, _sortableListVueDefault.default)
    },
    data () {
        return {
            showDialog: true,
            inputValue: "",
            processId: null,
            callback: undefined
        };
    },
    methods: {
        opened (option) {
            this.processId = option.id;
            this.callback = option.callback;
            this.autoFocusNameInput();
        },
        async removed (res) {
            const value = res.inputValue.trim();
            if (res.closeResult && value.length > 0) {
                const id = await (0, _spinalServiceTicket.serviceTicketPersonalized).addCommonIncident(this.processId, value);
                (0, _eventDefault.default).$emit("commonIncidentCreated", id);
            // if (this.callback) {
            //   this.callback(id);
            // }
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        },
        autoFocusNameInput () {
            setTimeout(()=>{
                this.$refs["nameTextField"].$el.focus();
            }, 200);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","./components/sortable-list.vue":"csadJ","../../extensions/Event":"2zI7K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iCaE1":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Ticket context\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _c('md-field', [
                _c('label', [
                    _vm._v("Common incident name")
                ]),
                _vm._v(" "),
                _c('md-input', {
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

},{}],"5axvo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6nR2f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a0541e3d7c3a8d6a");
    if (script.__esModule) script = script.default;
    script.render = require("4bad814cd7478395").render;
    script.staticRenderFns = require("4bad814cd7478395").staticRenderFns;
    script._scopeId = "data-v-d3d05a";
    require("2ff6b6e4780659e1").default(script);
    script.__scopeId = 'data-v-d3d05a';
    script.__file = "confirmDialog.vue";
};
initialize();
exports.default = script;

},{"a0541e3d7c3a8d6a":"6zE3e","4bad814cd7478395":"jjyAI","2ff6b6e4780659e1":"e4cSa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6zE3e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "confirmationDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            message: "",
            callback: undefined
        };
    },
    methods: {
        opened (option) {
            this.message = option.message;
            this.callback = option.callback;
        },
        async removed (res) {
            if (res.closeResult && this.callback) this.callback();
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jjyAI":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Ticket context\n  ")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', [
            _vm._v("\n    " + _vm._s(_vm.message) + "\n  ")
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
                _vm._v("NO")
            ]),
            _vm._v(" "),
            _c('md-button', {
                staticClass: "md-primary",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("YES")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"e4cSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"pMmPm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _ticketManagerVue = require("./ticketManager.vue");
var _ticketManagerVueDefault = parcelHelpers.interopDefault(_ticketManagerVue);
var _ticketDetailPanelVue = require("./ticketDetailPanel.vue");
var _ticketDetailPanelVueDefault = parcelHelpers.interopDefault(_ticketDetailPanelVue);
var _manageTicketPanelVue = require("./manageTicketPanel.vue");
var _manageTicketPanelVueDefault = parcelHelpers.interopDefault(_manageTicketPanelVue);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const { SpinalForgeExtention } = require("f2ee768793e8304c");
const panels = [
    {
        name: "ticketManagerPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _ticketManagerVueDefault.default)),
        panel: {
            title: "Ticket Manager",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "ticketDetailDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _ticketDetailPanelVueDefault.default)),
        panel: {
            title: "Ticket Detail",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "770px",
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "manageTicketPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _manageTicketPanelVueDefault.default)),
        panel: {
            title: "Manage Ticket",
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

},{"./ticketManager.vue":"48JkB","./ticketDetailPanel.vue":"4j2U1","./manageTicketPanel.vue":"auuJf","vue":"hO3OD","f2ee768793e8304c":"fYcpE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"48JkB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("49ee200b7bacbc95");
    if (script.__esModule) script = script.default;
    script.render = require("33ca3de3f0b78fa6").render;
    script.staticRenderFns = require("33ca3de3f0b78fa6").staticRenderFns;
    script._scopeId = "data-v-34e05a";
    script.__cssModules = require("164364fc4e972210").default;
    require("8c153075a9921c7b").default(script);
    script.__scopeId = 'data-v-34e05a';
    script.__file = "ticketManager.vue";
};
initialize();
exports.default = script;

},{"49ee200b7bacbc95":"lSMbr","33ca3de3f0b78fa6":"3amLM","164364fc4e972210":"fQrbD","8c153075a9921c7b":"b8rGy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lSMbr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilities = require("./service/utilities");
var _listItemVue = require("./components/listItem.vue");
var _listItemVueDefault = parcelHelpers.interopDefault(_listItemVue);
// import processesVue from "./components/processes.vue";
// import stepsVue from "./components/steps.vue";
var _ticketsVue = require("./components/tickets.vue");
var _ticketsVueDefault = parcelHelpers.interopDefault(_ticketsVue);
var scriptExports = {
    name: 'ticketManagerPanel',
    components: {
        'list-item': (0, _listItemVueDefault.default),
        // "contexts-vue": contextsVue,
        // "processes-vue": processesVue,
        // "steps-vue": stepsVue,
        'tickets-vue': (0, _ticketsVueDefault.default)
    },
    data () {
        this.PAGES = {
            contexts: 0,
            processes: 1,
            steps: 2,
            tickets: 3
        };
        return {
            data: [],
            pageDisplayed: this.PAGES.contexts,
            contextSelected: undefined,
            processSelected: undefined,
            stepSelected: undefined,
            processes: [],
            steps: [],
            tickets: []
        };
    },
    async mounted () {
        await this.updateData();
    },
    methods: {
        async opened (params) {
            await this.updateData();
            this.getContextId(params);
            this.getProcessId(params);
            this.getStepId(params);
        },
        selectContext (contextId) {
            this.contextSelected = contextId;
            this.pageDisplayed = this.PAGES.processes;
        },
        selectProcess (processId) {
            this.processSelected = processId;
            this.pageDisplayed = this.PAGES.steps;
        },
        selectStep (stepId) {
            this.stepSelected = stepId;
            this.pageDisplayed = this.PAGES.tickets;
        },
        selectAllTickets () {
            this.pageDisplayed = this.PAGES.tickets;
            this.formatAllTickets();
        },
        formatAllTickets () {
            const res = [];
            for (const step of this.steps)res.push(...this._formatTickets(step));
            this.tickets = res;
        },
        async updateData () {
            this.data = await (0, _utilities.utilities).getAllData();
        },
        updateProcesses () {
            const find = this.data.find((el)=>el.id === this.contextSelected);
            if (find) this.processes = find.processes;
        },
        updateSteps () {
            const find = this.processes.find((el)=>el.id === this.processSelected);
            if (find) this.steps = find.steps;
        },
        updateTickets () {
            if (this.stepSelected) {
                const find = this.steps.find((el)=>el.id === this.stepSelected);
                if (find) // this.breadcrumbs.push(find);
                this.tickets = this._formatTickets(find);
            } else this.formatAllTickets();
        },
        resetProcesses () {
            this.contextSelected = undefined;
            this.processes = [];
        },
        resetSteps () {
            this.processSelected = undefined;
            this.steps = [];
        },
        resetTickets () {
            this.tickets = [];
            this.stepSelected = undefined;
        },
        goBack () {
            switch(this.pageDisplayed){
                case this.PAGES.processes:
                    this.pageDisplayed = this.PAGES.contexts;
                    this.resetProcesses();
                    break;
                case this.PAGES.steps:
                    this.pageDisplayed = this.PAGES.processes;
                    this.resetSteps();
                    break;
                case this.PAGES.tickets:
                    this.pageDisplayed = this.PAGES.steps;
                    this.resetTickets();
                    break;
                default:
                    break;
            }
        },
        _formatTickets (step) {
            return step.tickets.map((el)=>{
                el['step'] = step;
                el['contextId'] = this.contextSelected;
                return el;
            });
        },
        async reloadData () {
            await this.updateData();
        },
        getContextId (params) {
            this.selectContext(params.context.id);
        },
        getProcessId (params) {
            if (params.context.id === params.selectedNode.id) return;
            let nodeId = typeof params.selectedNode.processId === 'undefined' ? params.selectedNode.id : params.selectedNode.processId;
            this.selectProcess(nodeId);
        },
        getStepId (params) {
            if (typeof params.selectedNode.processId !== 'undefined') this.selectStep(params.selectedNode.id);
        }
    },
    watch: {
        contextSelected () {
            if (this.contextSelected) this.updateProcesses();
        },
        processSelected () {
            if (this.processSelected) this.updateSteps();
        },
        stepSelected () {
            if (this.stepSelected) this.updateTickets();
        },
        data () {
            this.updateProcesses();
            this.updateSteps();
            this.updateTickets();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./service/utilities":"dkDYq","./components/listItem.vue":"5Y6zw","./components/tickets.vue":"cr5qe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dkDYq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utilities", ()=>utilities);
var _spinalServiceTicket = require("spinal-service-ticket");
class Utilities {
    constructor(){}
    getAllData() {
        let contexts = this.getContexts();
        const promises = contexts.map(async (context)=>{
            const processes = await this.getProcess(context.id);
            context["processes"] = await this._formatProcesses(context.id, processes);
            return context;
        });
        return Promise.all(promises);
    }
    getContexts() {
        return (0, _spinalServiceTicket.serviceTicketPersonalized).getContexts();
    }
    getProcess(contextId) {
        return (0, _spinalServiceTicket.serviceTicketPersonalized).getAllProcess(contextId);
    }
    getSteps(contextId, processId) {
        return (0, _spinalServiceTicket.serviceTicketPersonalized).getStepsFromProcess(processId, contextId);
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    //                                    Private                                          //
    /////////////////////////////////////////////////////////////////////////////////////////
    _formatProcesses(contextId, processes) {
        const promises = processes.map(async (argProcess)=>{
            let process = argProcess.get();
            const steps = await this.getSteps(contextId, process.id);
            process["steps"] = await this._formatSteps(contextId, process.id, steps);
            return process;
        });
        return Promise.all(promises);
    }
    _formatSteps(contextId, processId, steps) {
        const promises = steps.map(async (argStep)=>{
            let step = argStep.get();
            const tickets = await (0, _spinalServiceTicket.serviceTicketPersonalized).getTicketsFromStep(step.id);
            step["tickets"] = tickets.map((el)=>el.get());
            return step;
        });
        return Promise.all(promises);
    }
}
const utilities = new Utilities();

},{"spinal-service-ticket":"gdJwR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Y6zw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e0979f105eb77d18");
    if (script.__esModule) script = script.default;
    script.render = require("21fc7ed871838a40").render;
    script.staticRenderFns = require("21fc7ed871838a40").staticRenderFns;
    script._scopeId = "data-v-65dede";
    script.__cssModules = require("6b2391558e1fd5fe").default;
    require("8827f89ab071d040").default(script);
    script.__scopeId = 'data-v-65dede';
    script.__file = "listItem.vue";
};
initialize();
exports.default = script;

},{"e0979f105eb77d18":"bRR3T","21fc7ed871838a40":"9SxYz","6b2391558e1fd5fe":"aw0Dm","8827f89ab071d040":"hl0XR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bRR3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "contextsVue",
    props: {
        data: {}
    },
    data () {
        return {};
    },
    methods: {
        select (id) {
            this.$emit("select", id);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9SxYz":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "t_container md-srollbar"
    }, [
        _c('md-list', {
            staticClass: "myList"
        }, [
            _vm._t("default"),
            _vm._v(" "),
            _vm._l(_vm.data, function(item) {
                return _c('md-list-item', {
                    key: item.id,
                    on: {
                        "click": function($event) {
                            return _vm.select(item.id);
                        }
                    }
                }, [
                    item.color ? _c('div', {
                        staticClass: "color",
                        style: {
                            'background-color': item.color
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c('md-icon', [
                        _vm._v("keyboard_arrow_right")
                    ])
                ], 1);
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"aw0Dm":[function() {},{}],"hl0XR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3amLM":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "ticket_container"
    }, [
        _vm.contextSelected ? _c('div', {
            staticClass: "breadcrumb"
        }, [
            _c('md-button', {
                on: {
                    "click": _vm.goBack
                }
            }, [
                _c('md-icon', [
                    _vm._v("arrow_back")
                ]),
                _vm._v("\n      Back\n    ")
            ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c('div', {
            staticClass: "data-content"
        }, [
            _vm.pageDisplayed === _vm.PAGES.contexts ? _c('list-item', {
                attrs: {
                    "data": _vm.data
                },
                on: {
                    "select": _vm.selectContext
                }
            }) : _vm.pageDisplayed === _vm.PAGES.processes ? _c('list-item', {
                attrs: {
                    "data": _vm.processes
                },
                on: {
                    "select": _vm.selectProcess
                }
            }) : _vm.pageDisplayed === _vm.PAGES.steps ? _c('list-item', {
                attrs: {
                    "data": _vm.steps
                },
                on: {
                    "select": _vm.selectStep
                }
            }, [
                _c('md-list-item', {
                    on: {
                        "click": _vm.selectAllTickets
                    }
                }, [
                    _c('div', {
                        staticClass: "stepsColor"
                    }),
                    _vm._v(" "),
                    _c('span', {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v("All")
                    ]),
                    _vm._v(" "),
                    _c('md-icon', [
                        _vm._v("keyboard_arrow_right")
                    ])
                ], 1)
            ], 1) : _vm.pageDisplayed === _vm.PAGES.tickets ? _c('tickets-vue', {
                attrs: {
                    "data": _vm.tickets
                },
                on: {
                    "reload": _vm.reloadData
                }
            }) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fQrbD":[function() {},{}],"b8rGy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4j2U1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("56e2e7499f1a0238");
    if (script.__esModule) script = script.default;
    script.render = require("77f58d716a2be9ff").render;
    script.staticRenderFns = require("77f58d716a2be9ff").staticRenderFns;
    script._scopeId = "data-v-0a2c4c";
    script.__cssModules = require("66789ab74fc1e3be").default;
    require("d87bf35bc4a1bc05").default(script);
    script.__scopeId = 'data-v-0a2c4c';
    script.__file = "ticketDetailPanel.vue";
};
initialize();
exports.default = script;

},{"56e2e7499f1a0238":"2P56H","77f58d716a2be9ff":"1K8nM","66789ab74fc1e3be":"2C6kH","d87bf35bc4a1bc05":"ctdrj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2P56H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalServiceTicket = require("spinal-service-ticket");
var _spinalIO = require("../../extensions/spinalIO");
var _messageComponentVue = require("spinal-env-viewer-plugin-documentation/view/notes/components/messageComponent.vue");
var _messageComponentVueDefault = parcelHelpers.interopDefault(_messageComponentVue);
// import attachmentVue from "./components/attachment.vue";
var _logsTemplateVue = require("./components/logsTemplate.vue");
var _logsTemplateVueDefault = parcelHelpers.interopDefault(_logsTemplateVue);
// import messageVue from "spinal-env-viewer-plugin-documentation/view/notes/components/message.vue";
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _ticketsEvents = require("../../extensions/ticketsEvents");
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _isolate = require("../../buttons/standard_buttons/isolate");
var _selectElement = require("../../buttons/standard_buttons/selectElement");
var _zoom = require("../../buttons/standard_buttons/zoom");
var scriptExports = {
    name: "ticketDetailDialog",
    // props: ["onFinised"],
    components: {
        "logs-template": (0, _logsTemplateVueDefault.default),
        "message-component": (0, _messageComponentVueDefault.default)
    },
    data () {
        this.params = undefined;
        return {
            showDialog: true,
            nodeInfo: undefined,
            ticket: {},
            step: {},
            logs: [],
            isLoading: false,
            messages: [],
            formatStepId: "",
            note: {
                messageUser: "",
                pj: []
            }
        };
    },
    mounted () {
        (0, _eventDefault.default).$on((0, _ticketsEvents.TICKET_EVENTS).changeStep, async (data)=>{
            if (data.ticket.id === this.ticket.id && data.step) {
                this.step = data.step;
                this.logs = await this.getLogs(this.ticket.id);
            }
        });
    },
    methods: {
        async opened (option) {
            this.isLoading = true;
            this.ticket = option.selectedNode;
            this.nodeInfo = {
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id)
            };
            await Promise.all([
                this.getStep(option.selectedNode.stepId),
                this.getLogs(option.selectedNode.id)
            ]).then((values)=>{
                const contextId = this.ticket.contextId ? this.ticket.contextId : this.getItemContext(this.ticket.id).id;
                this.step = values[0];
                this.logs = values[1];
                this.params = {
                    selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.ticket.id),
                    context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(contextId)
                };
                this.isLoading = false;
            // this.messages = values[2];
            });
        },
        async removed (res) {
        // if (res.closeResult) {
        // }
        // this.showDialog = false;
        },
        closed () {},
        getStep (id) {
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id);
            if (info) return Promise.resolve(info.get());
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(id).then((result)=>{
                return result.get();
            });
        },
        getLogs (id) {
            return (0, _spinalServiceTicket.serviceTicketPersonalized).getLogs(id);
        },
        async passToNext () {
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            const contextId = this.ticket.contextId ? this.ticket.contextId : this.getItemContext(this.ticket.id).id;
            const processId = this.step.processId;
            const ticketId = this.ticket.id;
            (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToNextStep(contextId, processId, ticketId, user).then(async (nextStep)=>{
                this.ticket = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                // this.step = nextStep;
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: this.ticket,
                    step: nextStep
                });
            });
        },
        async backToPrevious () {
            const user = await (0, _spinalIO.spinalIO).getUserConnected();
            const contextId = this.ticket.contextId ? this.ticket.contextId : this.getItemContext(this.ticket.id).id;
            const processId = this.step.processId;
            const ticketId = this.ticket.id;
            (0, _spinalServiceTicket.serviceTicketPersonalized).moveTicketToPreviousStep(contextId, processId, ticketId, user).then((previousStep)=>{
                this.ticket = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(ticketId).get();
                // this.step = previousStep;
                (0, _eventDefault.default).$emit((0, _ticketsEvents.TICKET_EVENTS).changeStep, {
                    ticket: this.ticket,
                    step: previousStep
                });
            });
        },
        getItemContext (id) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
            const contextId = realNode.contextIds._attribute_names[0];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(contextId).get();
        },
        selectOnMaquette () {
            const button = new (0, _selectElement.SelectElementOnMaquette)();
            button.action(this.params);
        },
        zoomOnMaquette () {
            const button = new (0, _zoom.ZoomElementOnMaquette)();
            button.action(this.params);
        },
        isolateOnMaquette () {
            const button = new (0, _isolate.IsolateElementOnMaquette)();
            button.action(this.params);
        }
    },
    watch: {
        step () {
            this.formatStepId = this.step && this.step.name ? this.step.name : "";
        }
    },
    computed: {
    },
    filters: {
        formatDate (date) {
            return (0, _momentDefault.default)(parseInt(date)).format("LL");
        },
        formatPriority (priority) {
            for (const key of Object.keys((0, _constants.TICKET_PRIORITIES))){
                if ((0, _constants.TICKET_PRIORITIES)[key] == priority) return key;
            }
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"j9ikR","spinal-env-viewer-graph-service":"9LAk7","spinal-service-ticket":"gdJwR","../../extensions/spinalIO":"1Oi5o","spinal-env-viewer-plugin-documentation/view/notes/components/messageComponent.vue":"e969c","./components/logsTemplate.vue":"aPIUM","moment":"kty5A","../../extensions/ticketsEvents":"2Aq1L","../../extensions/Event":"2zI7K","../../buttons/standard_buttons/isolate":"hGHKg","../../buttons/standard_buttons/selectElement":"b49Xn","../../buttons/standard_buttons/zoom":"lg8UM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPIUM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("705cba4a10318e99");
    if (script.__esModule) script = script.default;
    script.render = require("69e34190bc6f882f").render;
    script.staticRenderFns = require("69e34190bc6f882f").staticRenderFns;
    script._scopeId = "data-v-6175a9";
    script.__cssModules = require("a6f3498e43a5c761").default;
    require("2f5f283f7ca69a1c").default(script);
    script.__scopeId = 'data-v-6175a9';
    script.__file = "logsTemplate.vue";
};
initialize();
exports.default = script;

},{"705cba4a10318e99":"bvx0G","69e34190bc6f882f":"19omJ","a6f3498e43a5c761":"9NbKc","2f5f283f7ca69a1c":"f7me4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bvx0G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logVue = require("./log.vue");
var _logVueDefault = parcelHelpers.interopDefault(_logVue);
var scriptExports = {
    name: "logsTemplate",
    props: {
        logs: {}
    },
    components: {
        "log-vue": (0, _logVueDefault.default)
    },
    data () {
        return {};
    },
    methods: {}
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./log.vue":"36GCV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"36GCV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4863df0be3dfc958");
    if (script.__esModule) script = script.default;
    script.render = require("9e83154f6a351c5e").render;
    script.staticRenderFns = require("9e83154f6a351c5e").staticRenderFns;
    script._scopeId = "data-v-c3cff5";
    script.__cssModules = require("4ee95ee082b4da19").default;
    require("27cf93e5c6f22942").default(script);
    script.__scopeId = 'data-v-c3cff5';
    script.__file = "log.vue";
};
initialize();
exports.default = script;

},{"4863df0be3dfc958":"bEn0m","9e83154f6a351c5e":"7rCPF","4ee95ee082b4da19":"keymZ","27cf93e5c6f22942":"4XoZX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bEn0m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-service-ticket/dist/Constants");
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "logVue",
    props: [
        "log"
    ],
    data () {
        return {
            texte: "",
            username: ""
        };
    },
    mounted () {
        this.formatEvent();
    },
    methods: {
        async formatEvent () {
            // this.username =
            //    this.log.user && this.log.user.name ? this.log.user.name : "";
            if (this.log.user && this.log.user.name) this.username = this.log.user.name;
            else if (this.log.user && this.log.user.username) this.username = this.log.user.username;
            else this.username = "";
            if (this.log.event == (0, _constants.LOGS_EVENTS).creation) this.texte = "created";
            else if (this.log.event == (0, _constants.LOGS_EVENTS).archived) this.texte = "archived";
            else if (this.log.event == (0, _constants.LOGS_EVENTS).unarchive) this.texte = "unarchived";
            else {
                const promises = this.log.steps.map((el)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(el));
                Promise.all(promises).then((result)=>{
                    const step1 = result[0].name.get();
                    const step2 = result[1].name.get();
                    // const pre = this.log.event == LOGS_EVENTS.moveToNext ? true : false;
                    // // this.log.event == LOGS_EVENTS.moveToNext
                    // //   ? "moving forward"
                    // //   : "move back";
                    // this.texte = pre
                    //   ? `Passed from ${step1} to ${step2}`
                    //   : `Backward from ${step1} to ${step2}`;
                    this.texte = `moved from ${step1} to ${step2}`;
                });
            }
        }
    },
    filters: {
        formatDate (data) {
            // return moment(parseInt(data)).format("MMM Do YYYY");
            return (0, _momentDefault.default)(data).fromNow();
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"j9ikR","moment":"kty5A","spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7rCPF":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-table-row', [
        _c('md-table-cell', [
            _vm._v(_vm._s(_vm._f("formatDate")(_vm.log.creationDate)))
        ]),
        _vm._v(" "),
        _c('md-table-cell', [
            _vm._v(_vm._s(_vm.username.length > 0 ? _vm.username : "unknown") + "\n    ")
        ]),
        _vm._v(" "),
        _c('md-table-cell', [
            _vm._v(_vm._s(_vm.texte))
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"keymZ":[function() {},{}],"4XoZX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"19omJ":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-content', {
        staticClass: "logs_container md-scrollbar"
    }, [
        _c('md-table', {
            staticClass: "logs_table md-scrollbar"
        }, [
            _c('md-table-row', [
                _c('md-table-head', [
                    _vm._v("Date")
                ]),
                _vm._v(" "),
                _c('md-table-head', [
                    _vm._v("User")
                ]),
                _vm._v(" "),
                _c('md-table-head', [
                    _vm._v("Action")
                ])
            ], 1),
            _vm._v(" "),
            _vm._l(_vm.logs, function(log, index) {
                return _c('log-vue', {
                    key: index,
                    attrs: {
                        "log": log
                    }
                });
            })
        ], 2)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9NbKc":[function() {},{}],"f7me4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1K8nM":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "mdDialogContainer"
    }, [
        _vm.ticket && !_vm.isLoading ? _c('div', {
            staticClass: "mdDialogContent"
        }, [
            _c('div', {
                staticClass: "ticketDetail"
            }, [
                _c('md-content', {
                    staticClass: "details md-scrollbar"
                }, [
                    _c('div', {
                        staticClass: "detail"
                    }, [
                        _c('div', {
                            staticClass: "label"
                        }, [
                            _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.ticket.name))
                        ])
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "detail"
                    }, [
                        _c('div', {
                            staticClass: "label"
                        }, [
                            _vm._v("Actual Step")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.formatStepId))
                        ])
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "detail"
                    }, [
                        _c('div', {
                            staticClass: "label"
                        }, [
                            _vm._v("Priority")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm._f("formatPriority")(_vm.ticket.priority)))
                        ])
                    ]),
                    _vm._v(" "),
                    _vm.ticket.user ? _c('div', {
                        staticClass: "detail"
                    }, [
                        _c('div', {
                            staticClass: "label"
                        }, [
                            _vm._v("Created By")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.ticket.user.name))
                        ])
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "detail"
                    }, [
                        _c('div', {
                            staticClass: "label"
                        }, [
                            _vm._v("Date creation")
                        ]),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm._f("formatDate")(_vm.ticket.creationDate)))
                        ])
                    ])
                ]),
                _vm._v(" "),
                _c('div', {
                    staticClass: "ticketActions"
                }, [
                    _c('md-list', {
                        staticClass: "actionList"
                    }, [
                        _c('md-list-item', {
                            staticClass: "actions"
                        }, [
                            _c('div', {
                                staticClass: "maquette_icons"
                            }, [
                                _c('md-button', {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Select on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.selectOnMaquette
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("find_in_page")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Zoom on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.zoomOnMaquette
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("zoom_in")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Isolate on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.isolateOnMaquette
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("settings_overscan")
                                    ])
                                ], 1)
                            ], 1)
                        ]),
                        _vm._v(" "),
                        _c('md-list-item', {
                            staticClass: "actions",
                            on: {
                                "click": _vm.passToNext
                            }
                        }, [
                            _c('md-icon', [
                                _vm._v("skip_next")
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v("Pass to next step")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('md-list-item', {
                            staticClass: "actions",
                            on: {
                                "click": _vm.backToPrevious
                            }
                        }, [
                            _c('md-icon', [
                                _vm._v("skip_previous")
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v("Back to previous step")
                            ])
                        ], 1)
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c('div', {
                staticClass: "content"
            }, [
                _c('div', {
                    staticClass: "ticketsNotes"
                }, [
                    _c('div', {
                        staticClass: "title"
                    }, [
                        _vm._v("Comments")
                    ]),
                    _vm._v(" "),
                    _c('md-content', {
                        staticClass: "events md-scrollbar"
                    }, [
                        _c('message-component', {
                            attrs: {
                                "nodeInfo": _vm.nodeInfo
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c('div', {
                    staticClass: "ticketsLogs"
                }, [
                    _c('div', {
                        staticClass: "title"
                    }, [
                        _vm._v("Events")
                    ]),
                    _vm._v(" "),
                    _c('md-content', {
                        staticClass: "events"
                    }, [
                        _c('logs-template', {
                            attrs: {
                                "logs": _vm.logs
                            }
                        })
                    ], 1)
                ], 1)
            ])
        ]) : _vm.isLoading ? _c('div', {
            staticClass: "loading"
        }, [
            _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"2C6kH":[function() {},{}],"ctdrj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"auuJf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("313d067a67bd6b8d");
    if (script.__esModule) script = script.default;
    script.render = require("7ef26c3c921fa345").render;
    script.staticRenderFns = require("7ef26c3c921fa345").staticRenderFns;
    script._scopeId = "data-v-86214a";
    script.__cssModules = require("ff2e9f09d31e01b1").default;
    require("804fe3fdf9254fc").default(script);
    script.__scopeId = 'data-v-86214a';
    script.__file = "manageTicketPanel.vue";
};
initialize();
exports.default = script;

},{"313d067a67bd6b8d":"9eqpt","7ef26c3c921fa345":"7kKap","ff2e9f09d31e01b1":"5ZfN2","804fe3fdf9254fc":"g5pd3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9eqpt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalServiceTicket = require("spinal-service-ticket");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _event = require("../../extensions/Event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _ticketsVue = require("./components/tickets.vue");
var _ticketsVueDefault = parcelHelpers.interopDefault(_ticketsVue);
var scriptExports = {
    name: "manageTicketPanel",
    components: {
        "tickets-vue": (0, _ticketsVueDefault.default)
    },
    data () {
        return {
            tickets: [],
            selectedNode: undefined,
            isLoading: false
        };
    },
    methods: {
        async opened (option) {
            // console.log("option", option);
            this.isLoading = true;
            this.selectedNode = option.selectedNode;
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(option.selectedNode);
            const nodeId = option.selectedNode.getId().get();
            this.tickets = await this.getNodeTickets(nodeId);
            this.isLoading = false;
        },
        closed () {},
        getNodeTickets (nodeId) {
            return (0, _spinalServiceTicket.serviceTicketPersonalized).getTicketsFromNode(nodeId).then((tickets)=>{
                // console.log(tickets);
                const promises = tickets.map(async (ticket)=>{
                    ticket.step = await this.getStep(ticket);
                    return ticket;
                });
                return Promise.all(promises).then((result)=>{
                    return result.filter((el)=>el.step);
                });
            });
        },
        async getStep (ticketInfo) {
            const stepId = ticketInfo.stepId;
            const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(stepId);
            if (info) return info.get();
            const parents = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(ticketInfo.id, []);
            // console.log(parents);
            const found = parents.find((el)=>el.id.get() === stepId);
            if (found) return found.get();
        // //  return SpinalGraphService.getNodeAsync(id).then((result) => {
        // //     return result.get();
        // //  });
        },
        async reloadData () {
            const id = this.selectedNode.getId().get();
            this.tickets = await this.getNodeTickets(id);
        },
        createTicket () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("selectProcessDialog", {
                selectedNode: this.selectedNode
            });
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gdJwR","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-graph-service":"9LAk7","../../extensions/Event":"2zI7K","./components/tickets.vue":"cr5qe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7kKap":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.isLoading ? _c('div', {
        staticClass: "my_content"
    }, [
        _c('md-button', {
            staticClass: "md-fab md-mini md-primary md-fab-bottom-right",
            attrs: {
                "title": "create ticket"
            },
            on: {
                "click": _vm.createTicket
            }
        }, [
            _c('md-icon', [
                _vm._v("add")
            ])
        ], 1),
        _vm._v(" "),
        _c('tickets-vue', {
            staticClass: "tickets_class",
            attrs: {
                "data": _vm.tickets
            },
            on: {
                "reload": _vm.reloadData
            }
        })
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

},{}],"5ZfN2":[function() {},{}],"g5pd3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"6JUzV":[function(require,module,exports,__globalThis) {
///////////////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.Color
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");
Autodesk.ADN.Viewing.Extension.Color = function(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options);
    // var overlayName = "temperary-colored-overlay";
    var _self = this;
    _self.viewer = viewer;
    _self.materials = {};
    var promise = null;
    function initialize() {
        if (promise == null) promise = new Promise((res)=>{
            _self.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, function onObjectTreeLoadEvent() {
                _self.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, onObjectTreeLoadEvent);
                res();
            });
        });
        return promise;
    }
    _self.load = function() {
        initialize();
        // console.log("Autodesk.ADN.Viewing.Extension.Color loaded");
        ///////////////////////////////////////////////////////////////////////////
        // Generate GUID
        //
        ///////////////////////////////////////////////////////////////////////////
        function newGuid() {
            var d = new Date().getTime();
            var guid = "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == "x" ? r : r & 0x7 | 0x8).toString(16);
            });
            return guid;
        }
        ///////////////////////////////////////////////////////////////////////////
        // add new material
        //
        ///////////////////////////////////////////////////////////////////////////
        function addMaterial(color, id) {
            _self.materials[id] = new THREE.MeshPhongMaterial({
                color: color
            });
            //viewer.impl.matman().addMaterial(newGuid(), material);
            _self.viewer.impl.createOverlayScene(id, _self.materials[id], _self.materials[id]);
            return _self.materials[id];
        }
        function cutHex(h) {
            return h.charAt(0) == "#" ? h.substring(1, 7) : h;
        }
        ///////////////////////////////////////////////////////////////////////////
        // Set color for nodes
        // objectIds should be an array of dbId
        //
        //
        ///////////////////////////////////////////////////////////////////////////
        Autodesk.Viewing.Viewer3D.prototype.setColorMaterial = function(objectIds, color) {
            initialize().then(()=>{
                for(var i = 0; i < objectIds.length; i++){
                    var dbid = objectIds[i];
                    if (_self.materials[dbid]) {
                        _self.materials[dbid].color.setHex(parseInt(cutHex(color), 16));
                        _self.viewer.impl.invalidate(false, false, true);
                    } else {
                        var material = addMaterial(color, dbid);
                        //from dbid to node, to fragid
                        let it = _self.viewer.model.getData().instanceTree;
                        it.enumNodeFragments(dbid, function(fragId) {
                            var renderProxy = _self.viewer.impl.getRenderProxy(_self.viewer.model, fragId);
                            renderProxy[dbid] = new THREE.Mesh(renderProxy.geometry, material);
                            renderProxy[dbid].matrix.copy(renderProxy.matrixWorld);
                            renderProxy[dbid].matrixWorldNeedsUpdate = true;
                            renderProxy[dbid].matrixAutoUpdate = false;
                            renderProxy[dbid].frustumCulled = false;
                            _self.viewer.impl.addOverlay(dbid, renderProxy[dbid]);
                            _self.viewer.impl.invalidate(true);
                        }, false);
                    }
                }
            }).catch((err)=>{
                console.error(err);
            });
        };
        Autodesk.Viewing.Viewer3D.prototype.restoreColorMaterial = function(objectIds) {
            for(var i = 0; i < objectIds.length; i++){
                var dbid = objectIds[i];
                //from dbid to node, to fragid
                var it = _self.viewer.model.getData().instanceTree;
                if (_self.materials[dbid]) delete _self.materials[dbid];
                it.enumNodeFragments(dbid, function(fragId) {
                    var renderProxy = _self.viewer.impl.getRenderProxy(_self.viewer.model, fragId);
                    if (renderProxy[dbid]) {
                        //remove all overlays with same name
                        _self.viewer.impl.clearOverlay(dbid);
                        //_self.viewer.impl.removeOverlay(id, renderProxy[id]);
                        delete renderProxy[dbid];
                        //refresh the sence
                        _self.viewer.impl.invalidate(true);
                    }
                }, true);
            }
        };
        Autodesk.Viewing.Viewer3D.prototype.colorAllMaterials = function(objects) {
            for(var i = 0; i < objects.length; i++)this.setColorMaterial(objects[i].ids, objects[i].color, objects[i].id);
        };
        Autodesk.Viewing.Viewer3D.prototype.restoreAllMaterialColor = function(objects) {
            for(var i = 0; i < objects.length; i++)this.restoreColorMaterial(objects[i].ids, objects[i].id);
        };
        _self.unload = function() {
            // console.log("Autodesk.ADN.Viewing.Extension.Color unloaded");
            return true;
        };
        return true;
    };
};
Autodesk.ADN.Viewing.Extension.Color.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
Autodesk.ADN.Viewing.Extension.Color.prototype.constructor = Autodesk.ADN.Viewing.Extension.Color;
Autodesk.Viewing.theExtensionManager.registerExtension("Autodesk.ADN.Viewing.Extension.Color", Autodesk.ADN.Viewing.Extension.Color);

},{}],"2m0Kp":[function(require,module,exports,__globalThis) {
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

},{}],"eoH60":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-ticket.3eb38d51.js.map
