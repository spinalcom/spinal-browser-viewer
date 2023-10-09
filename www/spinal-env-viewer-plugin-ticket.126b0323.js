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
})({"bDQsW":[function(require,module,exports) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vue/dialogs");
var _panels = require("./src/vue/panels");
var _forgeExtension = require("./src/extensions/forgeExtension");

},{"./src/buttons":"cigmO","./src/vue/dialogs":"ib3fZ","./src/vue/panels":"diNal","./src/extensions/forgeExtension":"3rJUb"}],"cigmO":[function(require,module,exports) {
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

},{"./createContext":"3LVbc","./createProcess":"bceXW","./createStep":"lUZmD","./createTicket":"3gaSb","./manageTicket":"fortR","./createCommonIncident":"jwHKJ","spinal-env-viewer-context-menu-service":"kHlxv","./seeTicketDetail":"gsSRV","./passToNextStep":"iF5mH","./backToPreviousStep":"3LIKg","./standard_buttons/selectElement":"fpE2i","./standard_buttons/isolate":"6nVeM","./standard_buttons/zoom":"eC66R","./colorElement":"7AUVh"}],"3LVbc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateContextButton", ()=>CreateContextButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
class CreateContextButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Ticket context", "This button allows you to create ticket context", {
            icon: "receipt",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
        });
    }
    isShown(option) {
        return Promise.resolve(true);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTicketContextDialog");
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"7Uw4d":[function(require,module,exports) {
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

},{}],"bceXW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateProcess", ()=>CreateProcess);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class CreateProcess extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create ticket Process", "This button allows you to create ticket processes", {
            icon: "category",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0rBD":[function(require,module,exports) {
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
exports._TICKET_PRIORITIES = exports.LOGS_EVENTS_STEPS = exports.LOG_TYPE = exports.LOG_RELATION_NAME = exports.LOG_RELATION_TYPE = exports._DEFAULT_INCIDENTS_NAME = exports.INCIDENT_TYPE = exports.INCIDENT_RELATION_NAME = exports.INCIDENT_RELATION_TYPE = exports.INCIDENT_SECTION_RELATION_NAME = exports.INCIDENT_SECTION_TYPE = exports.INCIDENT_SECTION_RELATION_TYPE = exports._DEFAULT_STEPS = exports._ARCHIVED_STEP = exports.DEFAULT_STEPS = exports.ARCHIVED_STEP = exports.STEP_TYPE = exports.STEP_RELATION_NAME = exports.STEP_RELATION_TYPE = exports._PROCESS_TYPE = exports.PROCESS_RELATION_NAME = exports.PROCESS_RELATION_TYPE = exports.ALARM_RELATION_NAME = exports.TICKET_ATTRIBUTE_OCCURENCE_NAME = exports.TIKET_TYPE = exports.TICKET_RELATION_NAME = exports.TICKET_RELATION_TYPE = exports.TICKET_CONTEXT_SUBTYPE_LIST = exports.TICKET_CONTEXT_TYPE = void 0;
const OLD_CONSTANTS = require("5f2287b5524fd3a7");
__exportStar(require("5f2287b5524fd3a7"), exports);
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
exports._PROCESS_TYPE = "SpinalServiceTicketProcess";
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

},{"5f2287b5524fd3a7":"79Wiu"}],"79Wiu":[function(require,module,exports) {
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

},{"5f14db0a1cfd319d":"9n7zp"}],"lUZmD":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gaSb":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fortR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ManageTicketButton", ()=>ManageTicketButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class ManageTicketButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Manage Ticket", "Manage ticket", {
            icon: "assignment",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#ffffff"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwHKJ":[function(require,module,exports) {
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
        super("Add common incident", "Add common incident", {
            icon: "font_download",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsSRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SeeTicketDetailButton", ()=>SeeTicketDetailButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-service-ticket/dist/Constants");
class SeeTicketDetailButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("See Ticket' detail", "See ticket's detail", {
            icon: "assignment_late",
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
    action(option) {
        const params = {
            selectedNode: option.selectedNode.get(),
            context: option.context.get()
        };
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("ticketDetailDialog", params);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iF5mH":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","../extensions/spinalIO":"jPxZQ","spinal-env-viewer-graph-service":"9n7zp","spinal-service-ticket":"gi7V0","../extensions/Event":"4ovSF","../extensions/ticketsEvents":"iO9Cs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPxZQ":[function(require,module,exports) {
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
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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
                return "";
            }
        }
    }
    getauth() {
        if (this.user !== null) return this.user;
        const encryptedHex = window.localStorage.getItem("spinalhome_cfg");
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
        const cryptedPath = getParameterByName("path");
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
            if (decripted[0] !== "/") throw "not a path";
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
            return this.load("/__users__/public/digital_twin/default");
        }
    }
    load(path) {
        if (typeof this.loadPromise[path] !== "undefined") return this.loadPromise[path];
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
        if (typeof this.loadPtr[server_id] !== "undefined") return this.loadPtr[server_id];
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
        const userDir = await this.load("/etc/UserProfileDir");
        for(let index = 0; index < userDir.length; index++){
            const userFile = userDir[index];
            if (userFile.name.get() === user) {
                if (withAdminCheck === true) return this.loadPtr(userFile).then(async (res)=>{
                    await this.checkUserAdmin(user, res);
                    return res;
                }, ()=>{
                    throw new Error("Undefined User");
                });
                else return this.loadPtr(userFile);
            }
        }
        throw new Error("Undefined User");
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

},{"spinal-core-connectorjs_type":"fRH70","./crypt":"h6su2","59538974fe512547":"hgMhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6su2":[function(require,module,exports) {
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

},{"7371ade664cbc10a":"6m1U5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gi7V0":[function(require,module,exports) {
var global = arguments[3];
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
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
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
exports.spinalServiceTicket = exports.serviceTicketPersonalized = void 0;
// import { ServiceTicket } from './ServiceTicket';
const ServiceTicket_1 = require("e88dd105af6ef26d");
const serviceTicketPersonalized = new ServiceTicket_1.ServiceTicket();
exports.serviceTicketPersonalized = serviceTicketPersonalized;
const gRoot = typeof window === "undefined" ? global : window;
if (typeof gRoot.spinal === "undefined") gRoot.spinal = {};
if (typeof gRoot.spinal.SpinalServiceTicket === "undefined") {
    gRoot.spinal.spinalServiceTicket = serviceTicketPersonalized;
    gRoot.spinal.serviceTicketPersonalized = serviceTicketPersonalized;
}
// tslint:disable-next-line:variable-name
const spinalServiceTicket = serviceTicketPersonalized;
exports.spinalServiceTicket = spinalServiceTicket;
__exportStar(require("d2cb0826984d670"), exports);

},{"e88dd105af6ef26d":"6XZ7C","d2cb0826984d670":"i0rBD"}],"6XZ7C":[function(require,module,exports) {
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
exports.ServiceTicket = void 0;
const Constants_1 = require("eada8b92ac65cdb");
const Errors_1 = require("92a36f049738893d");
const spinal_env_viewer_graph_service_1 = require("a7a446fc22c950a1");
const SpinalLogTicket_1 = require("6db78b4b5f498d1");
const SpinalTicket_1 = require("b3e576311065f5e9");
const spinal_core_connectorjs_type_1 = require("d9c46edbdd9f4307");
const spinal_env_viewer_plugin_documentation_service_1 = require("391da2fc601416ca");
const moment = require("db108f09e02cf75d");
class ServiceTicket {
    constructor(){}
    //////////////////////////////////////////////////////////
    //                      CONTEXTS                        //
    //////////////////////////////////////////////////////////
    createContext(contextName, steps = new Array(), contextSubType = "Ticket") {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addContext(contextName, Constants_1.SERVICE_TYPE, undefined).then((context)=>{
            // this.context = context;
            // this.initVar();
            const stepsModel = new spinal_core_connectorjs_type_1.Lst(steps);
            context.info.add_attr("steps", new spinal_core_connectorjs_type_1.Ptr(stepsModel));
            if (Constants_1.TICKET_CONTEXT_SUBTYPE_LIST.includes(contextSubType)) context.info.add_attr("subType", contextSubType);
            return context;
        }).catch((e)=>{
            return Promise.reject(Error(Errors_1.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR));
        });
    }
    getContexts(name) {
        const contexts = spinal_env_viewer_graph_service_1.SpinalGraphService.getContextWithType(Constants_1.SERVICE_TYPE);
        if (name && name.trim().length > 0) {
            const found = contexts.find((el)=>el.getName().get() === name);
            return found ? found.info.get() : undefined;
        }
        return contexts.map((el)=>el.info.get());
    }
    updateContexts(contextId, newInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            if (newInfo.name && newInfo.name.trim().length === 0) throw new Error("Context name must have at less 1 character");
            const contextNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
            if (contextNode) {
                if (newInfo.name && newInfo.name.trim().length > 0) contextNode.info.name.set(newInfo.name);
                if (!newInfo.steps || newInfo.steps.length > 0) return;
                const oldSteps = yield this.getContextSteps(contextId);
                const stepsSorted = this.sortStepByOrder(newInfo.steps);
            }
        });
    }
    //////////////////////////////////////////////////////////
    //                      PROCESS                         //
    //////////////////////////////////////////////////////////
    createProcess(process, contextId) {
        if (typeof process === "string") process = {
            name: process
        };
        process.type = Constants_1.PROCESS_TYPE;
        const processId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(process, undefined);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(contextId, processId, contextId, Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_PROCESS_RELATION_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                const steps = yield this.getContextSteps(contextId);
                const promises = steps.map((step)=>this.createStepNode(step.name, step.color, step.order, processId, contextId));
                yield Promise.all([
                    ...promises,
                    this.createArchivedStep(processId, contextId)
                ]);
                return processId;
            })).catch((e)=>{
            console.error(e);
            return Promise.reject(Error(Errors_1.CANNOT_CREATE_PROCESS_INTERNAL_ERROR));
        });
    }
    getAllProcess(contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(contextId, contextId);
    }
    //////////////////////////////////////////////////////////
    //                      STEPS                           //
    //////////////////////////////////////////////////////////
    addStep(processId, contextId, name, color, order) {
        return __awaiter(this, void 0, void 0, function*() {
            if (order < 0) return Promise.reject(Error(Errors_1.STEP_ORDER_NOT_VALID));
            return this.getStepsFromProcess(processId, contextId).then((steps)=>{
                const max = Math.max(...steps.map((el)=>el.order.get()));
                if (order != 0 && !order) order = max + 1;
                if (order > max && max - order > 1) return Promise.reject(Error(Errors_1.STEP_ORDER_NOT_VALID));
                if (order >= 0 && order <= max) return this.insertStep(contextId, processId, {
                    name,
                    color,
                    order
                });
                else return this.createStepNode(name, color, order, processId, contextId);
            });
        });
    }
    removeStep(processId, contextId, stepId) {
        return __awaiter(this, void 0, void 0, function*() {
            const stepInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(stepId).get();
            return this.getSuperiorsSteps(contextId, processId, stepInfo.order, true).then((steps)=>__awaiter(this, void 0, void 0, function*() {
                    spinal_env_viewer_graph_service_1.SpinalGraphService.removeFromGraph(stepId);
                    for (const step of steps){
                        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(step.id);
                        realNode.info.order.set(step.order - 1);
                    }
                    return stepId;
                }));
        });
    }
    addStepById(stepId, processId, contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(processId, stepId, contextId, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE).then(()=>{
            return this.modifyStepProcessId(stepId, processId);
        }).catch((e)=>{
            return Promise.reject(Error(Errors_1.CANNOT_ADD_STEP_TO_PROCESS + e));
        });
    }
    getStepsFromProcess(processId, contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(processId, contextId, (node)=>{
            spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
            return node.getType().get() === Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE;
        });
    // .then(nodes => {
    //     return SpinalGraphService.getChildren(node.id.get(),
    //         [SPINAL_TICKET_SERVICE_STEP_RELATION_NAME]);
    // });
    }
    getFirstStep(processId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const steps = yield this.getStepsFromProcess(processId, contextId);
            let first = steps.find((el)=>el.order.get() == 0);
            if (first) return first.id.get();
            let stepId = yield this.createStep("declared", "#ff0000", 0);
            yield this.addStepById(stepId, processId, contextId);
            return stepId;
        });
    }
    getNextStep(processId, stepId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const steps = yield this.getStepsFromProcess(processId, contextId);
            if (steps) {
                const step = steps.find((el)=>el.id.get() === stepId);
                if (step && step.order.get() !== -1) {
                    const nextOrder = parseInt(step.order.get()) + 1;
                    return steps.find((el)=>el.order.get() == nextOrder);
                }
            }
        });
    }
    getPreviousStep(processId, stepId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const steps = yield this.getStepsFromProcess(processId, contextId);
            if (steps) {
                const step = steps.find((el)=>el.id.get() === stepId);
                if (step && step.order.get() > 0) {
                    const nextOrder = parseInt(step.order.get()) - 1;
                    return steps.find((el)=>el.order.get() == nextOrder);
                }
            }
        });
    }
    getSuperiorsSteps(contextId, processId, stepOrder, equals = false) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.getStepsFromProcess(processId, contextId).then((steps)=>{
                return steps.filter((step)=>{
                    const order = step.order.get();
                    if (equals && order === stepOrder) return true;
                    return order > stepOrder;
                }).map((el)=>el.get());
            });
        });
    }
    getInferiorsSteps(contextId, processId, stepOrder, equals = false) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.getStepsFromProcess(processId, contextId).then((steps)=>{
                return steps.filter((step)=>{
                    const order = step.order.get();
                    if (equals && order === stepOrder) return true;
                    return order < stepOrder;
                }).map((el)=>el.get());
            });
        });
    }
    insertStep(contextId, processId, stepInfo) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.getSuperiorsSteps(contextId, processId, stepInfo.order, true).then((steps)=>__awaiter(this, void 0, void 0, function*() {
                    const stepId = yield this.createStepNode(stepInfo.name, stepInfo.color, stepInfo.order, processId, contextId);
                    for (const step of steps){
                        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(step.id);
                        realNode.info.order.set(step.order + 1);
                    }
                    return stepId;
                }));
        });
    }
    //////////////////////////////////////////////////////////
    //                      TICKETS                         //
    //////////////////////////////////////////////////////////
    addTicket(ticketInfo, processId, contextId, nodeId, ticketType = "Ticket") {
        return __awaiter(this, void 0, void 0, function*() {
            const stepId = yield this.getFirstStep(processId, contextId);
            ticketInfo.processId = processId;
            ticketInfo.stepId = stepId;
            ticketInfo.contextId = contextId;
            const ticketId = yield this.createTicket(ticketInfo);
            if (ticketType == "Alarm") return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(stepId, ticketId, contextId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                    yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(nodeId, ticketId, Constants_1.ALARM_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
                    yield this.modifyTicketStepId(ticketId, stepId);
                    const userInfo = ticketInfo.user ? ticketInfo.user : {};
                    yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.creation, userInfo, stepId);
                    return ticketId;
                }));
            else return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(stepId, ticketId, contextId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                    yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(nodeId, ticketId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
                    yield this.modifyTicketStepId(ticketId, stepId);
                    const userInfo = ticketInfo.user ? ticketInfo.user : {};
                    yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.creation, userInfo, stepId);
                    return ticketId;
                }));
            return Promise.resolve(Error("CANNOT_ADD_TO_USER"));
        });
    }
    getTicketsFromNode(nodeId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
        ]).then((children)=>children.map((el)=>el.get()));
    }
    getAlarmsFromNode(nodeId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(nodeId, [
            Constants_1.ALARM_RELATION_NAME
        ]).then((children)=>children.map((el)=>el.get()));
    }
    getTicketsFromStep(stepId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNode(stepId).then((node)=>{
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(node.id.get(), [
                Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME
            ]);
        });
    }
    moveTicket(ticketId, stepFromId, stepToId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            if (typeof ticketId === "undefined" || typeof stepFromId === "undefined" || typeof stepToId === "undefined") return;
            const step = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(stepToId);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(ticketId, {
                stepId: stepToId
            });
            return spinal_env_viewer_graph_service_1.SpinalGraphService.moveChildInContext(stepFromId, stepToId, ticketId, contextId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
        });
    }
    moveTicketToNextStep(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const ticketInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(ticketId);
            if (ticketInfo) {
                const stepId = ticketInfo.stepId.get();
                const nextStep = yield this.getNextStep(processId, stepId, contextId);
                if (nextStep) return this.moveTicket(ticketId, stepId, nextStep.id.get(), contextId).then(()=>__awaiter(this, void 0, void 0, function*() {
                        yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.moveToNext, userInfo, stepId, nextStep.id.get());
                        return nextStep.get();
                    }));
            }
        });
    }
    moveTicketToPreviousStep(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const ticketInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(ticketId);
            if (ticketInfo) {
                const stepId = ticketInfo.stepId.get();
                const previousStep = yield this.getPreviousStep(processId, stepId, contextId);
                if (previousStep) return this.moveTicket(ticketId, stepId, previousStep.id.get(), contextId).then(()=>__awaiter(this, void 0, void 0, function*() {
                        yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.moveToPrevious, userInfo, stepId, previousStep.id.get());
                        return previousStep.get();
                    }));
            }
        });
    }
    ArchiveTickets(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const archiveId = yield this.createArchivedStep(processId, contextId);
            const ticketInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(ticketId);
            if (ticketInfo && archiveId) {
                const fromId = ticketInfo.stepId.get();
                yield this.moveTicket(ticketId, fromId, archiveId, contextId);
                yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.archived, userInfo, fromId, archiveId);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(archiveId).get();
            }
        });
    }
    unarchiveTicket(contextId, processId, ticketId, userInfo = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            const ticketInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(ticketId);
            const firstStep = yield this.getFirstStep(processId, contextId);
            if (ticketInfo && firstStep) {
                const fromId = ticketInfo.stepId.get();
                yield this.moveTicket(ticketId, fromId, firstStep, contextId);
                yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.unarchive, userInfo, fromId, firstStep);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(firstStep).get();
            }
        });
    }
    unlinkTicketToProcess(ticketId) {}
    getTicketContextId(ticketId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(ticketId);
        if (realNode) return realNode.contextIds._attribute_names.find((id)=>{
            const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
            if (!node) return false;
            return node.getType().get() === Constants_1.SERVICE_TYPE;
        });
    }
    changeTicketProcess(ticketId, newProcessId, newContextId) {
        return __awaiter(this, void 0, void 0, function*() {
            let ticketInfo = spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(ticketId);
            let oldContextId = this.getTicketContextId(ticketId);
            const contextId = newContextId || oldContextId;
            const stepId = yield this.getFirstStep(newProcessId, contextId);
            const oldStepId = yield this.getOldStepId(ticketInfo.get(), oldContextId);
            if (contextId === oldContextId) yield spinal_env_viewer_graph_service_1.SpinalGraphService.moveChildInContext(oldStepId, stepId, ticketId, contextId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
            else {
                yield this.removeFromContextId(ticketId, oldStepId, oldContextId);
                yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(stepId, ticketId, contextId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
            }
            yield this.modifyTicketStepId(ticketId, stepId);
            const userInfo = ticketInfo && ticketInfo.user ? ticketInfo.user.get() : {};
            yield this.addLogToTicket(ticketId, Constants_1.LOGS_EVENTS.creation, userInfo, stepId);
            return ticketId;
        });
    }
    changeTicketElementNode(ticketId, newElementId) {
        return __awaiter(this, void 0, void 0, function*() {
            const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(ticketId);
            const parents = yield realNode.getParents(Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME);
            const promises = parents.map((parent)=>{
                spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(parent);
                const id = parent.getId().get();
                return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(id, ticketId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
            });
            yield Promise.all(promises);
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(newElementId, ticketId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE);
            return ticketId;
        });
    }
    //////////////////////////////////////////////////////////
    //                      LOGS                            //
    //////////////////////////////////////////////////////////
    addLogToTicket(ticketId, event, userInfo = {}, fromId, toId) {
        let info = {
            ticketId: ticketId,
            event: event,
            action: Constants_1.EVENTS_TO_LOG[event],
            user: userInfo,
            steps: []
        };
        if (fromId) info.steps.push(fromId);
        if (toId) info.steps.push(toId);
        const logId = this.createLog(info);
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(ticketId, logId, Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_TYPE);
    }
    createLog(info) {
        const logId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name: "log",
            type: Constants_1.SERVICE_LOG_TYPE
        }, new SpinalLogTicket_1.SpinalLogTicket(info));
        return logId;
    }
    getLogs(ticketId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(ticketId, [
            Constants_1.SPINAL_TICKET_SERVICE_LOG_RELATION_NAME
        ]).then((logs)=>{
            const promises = logs.map((el)=>el.element.load());
            return Promise.all(promises).then((elements)=>{
                return elements.map((el)=>{
                    const res = el.get();
                    if (typeof res.action == "undefined") res.action = Constants_1.EVENTS_TO_LOG[res.event];
                    return res;
                });
            });
        });
    }
    //////////////////////////////////////////////////////////
    //                      COMMON INCIDENT                 //
    //////////////////////////////////////////////////////////
    addCommonIncident(processId, sentence) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(processId, [
            Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME
        ]).then((children)=>{
            if (children.length > 0) {
                const sectionId = children[0].id.get();
                const sentenceId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                    name: sentence,
                    type: Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_TYPE
                }, undefined);
                return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(sectionId, sentenceId, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_TYPE).then(()=>{
                    return sentenceId;
                });
            }
            return this.addSentenceSection(processId).then((bool)=>{
                if (bool) return this.addCommonIncident(processId, sentence);
            });
        });
    }
    getCommonIncident(processId) {
        return __awaiter(this, void 0, void 0, function*() {
            const children = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(processId, [
                Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME
            ]);
            if (children && children.length > 0) {
                const sectionId = children[0].id.get();
                const sentences = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(sectionId, [
                    Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_RELATION_NAME
                ]);
                return sentences.map((el)=>el.get());
            }
            return [];
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //                                              PRIVATE                                         //
    //////////////////////////////////////////////////////////////////////////////////////////////////
    modifyStepProcessId(stepId, processId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(stepId, {
            processId
        });
    }
    modifyTicketStepId(ticketId, stepId) {
        return __awaiter(this, void 0, void 0, function*() {
            const step = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getNodeAsync(stepId);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(ticketId, {
                stepId
            });
        });
    }
    createTicket(elementInfo, infoNode) {
        let infoNodeRef = infoNode;
        if (!infoNodeRef) infoNodeRef = elementInfo;
        infoNodeRef.type = Constants_1.SPINAL_TICKET_SERVICE_TICKET_TYPE;
        if (!infoNodeRef.declarer_id) infoNodeRef.declarer_id = "unknow";
        const ticket = new SpinalTicket_1.SpinalTicket(elementInfo);
        const ticketId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(infoNodeRef, ticket);
        return this.createAttribute(ticketId, elementInfo).then(()=>ticketId);
    }
    createAttribute(ticketId, elementInfo) {
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(ticketId);
        const categoryName = "default";
        return spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addCategoryAttribute(node, categoryName).then((attributeCategory)=>{
            const promises = [];
            if (node) {
                const attributes = Object.keys(elementInfo);
                for (const element of attributes)promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(node, attributeCategory, element, this.getObjData(element, node.info[element])));
                promises.push(spinal_env_viewer_plugin_documentation_service_1.serviceDocumentation.addAttributeByCategory(node, attributeCategory, Constants_1.TICKET_ATTRIBUTE_OCCURENCE_NAME, "0", "number"));
                return Promise.all(promises);
            }
        });
    }
    createStep(name, color, order, processId) {
        // this.stepOrderIsValid(processId, order);
        const stepId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
            name,
            color,
            order,
            type: Constants_1.SPINAL_TICKET_SERVICE_STEP_TYPE
        }, undefined);
        // this.steps.add(stepId);
        return stepId;
    }
    getContextSteps(contextId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(contextId);
        if (realNode && realNode.info.steps) return new Promise((resolve, reject)=>{
            realNode.info.steps.load((stepsLst)=>{
                const steps = stepsLst.get();
                resolve(steps);
            });
        });
        return Promise.resolve([]);
    }
    addSentenceSection(processId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(processId, [
            Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME
        ]).then((children)=>{
            if (children.length > 0) return Promise.reject(Errors_1.DEFAULT_SENTENCE_SECTION_ALREADY_EXIST);
            const sentenceId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode({
                processId,
                name: Constants_1.DEFAULT_INCIDENTS_NAME,
                type: Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_TYPE
            }, undefined);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChild(processId, sentenceId, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_INCIDENT_SECTION_RELATION_TYPE).then((e)=>{
                return Promise.resolve(true);
            }).catch((e)=>{
                return Promise.reject(e);
            });
        });
    }
    getObjData(key, valueModel) {
        switch(key){
            case "name":
                return valueModel;
            case "priority":
                const found = Object.keys(Constants_1.TICKET_PRIORITIES).find((el)=>Constants_1.TICKET_PRIORITIES[el] == valueModel.get());
                return found ? found : "-";
            case "user":
                return valueModel && valueModel.name ? valueModel.name.get() : valueModel.username ? valueModel.username.get() : "unknown";
            case "creationDate":
                return moment(valueModel.get()).format("MMMM Do YYYY, h:mm:ss a");
            default:
                return valueModel ? valueModel.get() : "";
        }
    }
    createArchivedStep(processId, contextId) {
        return this.getStepsFromProcess(processId, contextId).then((result)=>{
            const found = result.find((el)=>el.name.get() === Constants_1.ARCHIVED_STEP.name && el.order.get() === Constants_1.ARCHIVED_STEP.order);
            if (found) return found.id.get();
            return this.createStepNode(Constants_1.ARCHIVED_STEP.name, Constants_1.ARCHIVED_STEP.color, Constants_1.ARCHIVED_STEP.order, processId, contextId);
        });
    }
    createStepNode(name, color, order, processId, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const stepId = yield this.createStep(name, color, order, processId);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(processId, stepId, contextId, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_STEP_RELATION_TYPE).then(()=>__awaiter(this, void 0, void 0, function*() {
                    yield this.modifyStepProcessId(stepId, processId);
                    return stepId;
                })).catch((e)=>{
                return Promise.reject(Error(Errors_1.CANNOT_ADD_STEP_TO_PROCESS + e));
            });
        });
    }
    sortStepByOrder(steps) {
        const stepsSorted = [
            ...steps
        ].sort((a, b)=>a.order - b.order);
        for(let index = 0; index < stepsSorted.length; index++)stepsSorted[index].order = index;
        return stepsSorted;
    }
    removeFromContextId(ticketId, oldStepId, oldContextId) {
        return __awaiter(this, void 0, void 0, function*() {
            return spinal_env_viewer_graph_service_1.SpinalGraphService.removeChild(oldStepId, ticketId, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME, Constants_1.SPINAL_TICKET_SERVICE_TICKET_RELATION_TYPE).then((result)=>{
                const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(ticketId);
                try {
                    realNode.contextIds.delete(oldContextId);
                    return true;
                } catch (error) {
                    return false;
                }
            });
        });
    }
    getOldStepId(ticketInfo, contextId) {
        return __awaiter(this, void 0, void 0, function*() {
            const stepId = ticketInfo.stepId;
            if (spinal_env_viewer_graph_service_1.SpinalGraphService.getInfo(stepId)) return stepId;
            let id2;
            yield spinal_env_viewer_graph_service_1.SpinalGraphService.findInContext(contextId, contextId, (node)=>{
                if (node.getId().get() === stepId) {
                    spinal_env_viewer_graph_service_1.SpinalGraphService._addNode(node);
                    id2 = node.getId().get();
                    return true;
                }
                return false;
            });
            return id2;
        });
    }
}
exports.ServiceTicket = ServiceTicket;

},{"eada8b92ac65cdb":"i0rBD","92a36f049738893d":"2TWu9","a7a446fc22c950a1":"9n7zp","6db78b4b5f498d1":"6zdQ1","b3e576311065f5e9":"bBjK0","d9c46edbdd9f4307":"fRH70","391da2fc601416ca":"5rYVR","db108f09e02cf75d":"jwcsj"}],"2TWu9":[function(require,module,exports) {
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
exports.STEP_ORDER_NOT_VALID = exports.TICKET_SECTION_ALREADY_EXIST = exports.DEFAULT_SENTENCE_SECTION_ALREADY_EXIST = exports.TICKET_ID_DOES_NOT_EXIST = exports.STEP_ID_DOES_NOT_EXIST = exports.PROCESS_ID_DOES_NOT_EXIST = exports.CANNOT_ADD_STEP_TO_PROCESS = exports.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR = exports.CANNOT_CREATE_PROCESS_INTERNAL_ERROR = exports.PROCESS_NAME_ALREADY_USED = void 0;
const ERROR_PREFIX = "Spinal Service Ticket Error: ";
exports.PROCESS_NAME_ALREADY_USED = ERROR_PREFIX + "Process name already used";
exports.CANNOT_CREATE_PROCESS_INTERNAL_ERROR = ERROR_PREFIX + "Internal error: cannot create process";
exports.CANNOT_CREATE_CONTEXT_INTERNAL_ERROR = ERROR_PREFIX + "Internal error: cannot create context";
exports.CANNOT_ADD_STEP_TO_PROCESS = ERROR_PREFIX + "Internal error: cannot create context";
exports.PROCESS_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Process id doesn't exist";
exports.STEP_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Step id doesn't exist";
exports.TICKET_ID_DOES_NOT_EXIST = ERROR_PREFIX + "Ticket id doesn't exist";
exports.DEFAULT_SENTENCE_SECTION_ALREADY_EXIST = ERROR_PREFIX + "Default sentence section already exits";
exports.TICKET_SECTION_ALREADY_EXIST = ERROR_PREFIX + "Ticket" + " already exits";
exports.STEP_ORDER_NOT_VALID = ERROR_PREFIX + " step order not valid";

},{}],"6zdQ1":[function(require,module,exports) {
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
const spinal_core_connectorjs_type_1 = require("46bd56849e66f76c");
const spinalCore = require("ab4acafee3a1701");
class SpinalLogTicket extends spinal_core_connectorjs_type_1.Model {
    constructor(log){
        super();
        if (!!log) {
            log["creationDate"] = Date.now();
            this.add_attr(log);
        }
    }
}
exports.SpinalLogTicket = SpinalLogTicket;
spinalCore.register_models(SpinalLogTicket);

},{"46bd56849e66f76c":"fRH70","ab4acafee3a1701":"2uyD7"}],"bBjK0":[function(require,module,exports) {
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
const spinal_core_connectorjs_type_1 = require("b1c28214dcb89796");
const spinalCore = require("a7e731aef75ec11a");
class SpinalTicket extends spinal_core_connectorjs_type_1.Model {
    constructor(ticket){
        super();
        if (!!ticket) {
            ticket["creationDate"] = Date.now();
            this.add_attr(ticket);
        }
    }
}
exports.SpinalTicket = SpinalTicket;
spinalCore.register_models(SpinalTicket);

},{"b1c28214dcb89796":"fRH70","a7e731aef75ec11a":"2uyD7"}],"4ovSF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const EventBus = new (0, _vueDefault.default)();
exports.default = EventBus;

},{"vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iO9Cs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TICKET_EVENTS", ()=>TICKET_EVENTS);
const TICKET_EVENTS = Object.freeze({
    created: "created",
    changeStep: "changeStep"
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LIKg":[function(require,module,exports) {
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
        super("Back to previous step", "backward the ticket to previous step", {
            icon: "skip_previous",
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","../extensions/spinalIO":"jPxZQ","spinal-env-viewer-graph-service":"9n7zp","spinal-service-ticket":"gi7V0","../extensions/Event":"4ovSF","../extensions/ticketsEvents":"iO9Cs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpE2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectElementOnMaquette", ()=>SelectElementOnMaquette);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _constants = require("spinal-service-ticket/dist/Constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _selectBIMObjectButton = require("spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton");
var _fitToViewerButton = require("spinal-env-viewer-plugin-standard_button/js/fitToViewerButton");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
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
        parents.forEach((el)=>{
            el.model.selector.setSelection(el.ids, el.model, "selectOnly");
        });
    // const selectButton = new SpinalContextSelectBIMObject();
    // // const zoomButton = new SpinalContextFitToViewer();
    // parents.forEach((element) => {
    //   const params = {
    //     selectedNode: element,
    //   };
    //   selectButton.action(params);
    //   // zoomButton.action(params);
    // });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-service-ticket/dist/Constants":"i0rBD","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton":"byLzT","spinal-env-viewer-plugin-standard_button/js/fitToViewerButton":"jAXW3","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","../../extensions/colorElementExtension":"9wZn2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byLzT":[function(require,module,exports) {
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
parcelHelpers.export(exports, "SpinalContextSelectBIMObject", ()=>SpinalContextSelectBIMObject);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("6a1561c7c4b8903b");
class SpinalContextSelectBIMObject extends SpinalContextApp {
    constructor(){
        super("select BIMObject button", "select BIMObject button", {
            icon: "devices",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        realNode.find((0, _utilities.SELECTrelationList), function(node) {
            if (node.info.type.get() === "BIMObject") return true;
        }).then((lst)=>{
            self.viewer.clearSelection();
            (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                for(let i = 0; i < lstByModel.length; i++){
                    const element = lstByModel[i];
                    for(let j = 0; j < element.model.modelScene.length; j++){
                        const scene = element.model.modelScene[j];
                        // console.log("hello select", element.dbid, scene.model);
                        scene.model.selector.setSelection(element.dbid, scene.model, "selectOnly");
                    }
                }
            });
        });
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","6a1561c7c4b8903b":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktewa":[function(require,module,exports) {
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

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf"}],"jAXW3":[function(require,module,exports) {
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
parcelHelpers.export(exports, "SpinalContextFitToViewer", ()=>SpinalContextFitToViewer);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities = require("./utilities");
const { SpinalContextApp } = require("5b562009692cf730");
class SpinalContextFitToViewer extends SpinalContextApp {
    constructor(){
        super("fit button", "fit to viewer button", {
            icon: "zoom_in",
            icon_type: "in"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        if ((0, _utilities.isShownParam).indexOf(type) > -1) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        this.viewer = window.spinal.ForgeViewer.viewer;
        let self = this;
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        this.viewer = window.spinal.ForgeViewer.viewer;
        realNode.find((0, _utilities.SELECTrelationList), function(node) {
            if (node.info.type.get() === "BIMObject") return true;
        }).then((lst)=>{
            (0, _utilities.utilities).sortBIMObjectByModel(lst).then((lstByModel)=>{
                let arrayToFit = [];
                for(let i = 0; i < lstByModel.length; i++){
                    const element = lstByModel[i];
                    let obj = {
                        model: element.model.modelScene[0].model,
                        selection: element.dbid
                    };
                    arrayToFit.push(obj);
                    obj.model.selector.setSelection(element.dbid, obj.model, "selectOnly");
                }
                self.viewer.fitToView(arrayToFit);
            });
        });
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","5b562009692cf730":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wZn2":[function(require,module,exports) {
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

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","spinal-service-ticket/dist/Constants":"i0rBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nVeM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
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
        parents.forEach((el)=>{
            window.spinal.ForgeViewer.viewer.impl.visibilityManager.isolate(el.ids, el.model);
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-service-ticket/dist/Constants":"i0rBD","../../extensions/colorElementExtension":"9wZn2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eC66R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
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
        const dbIds = parents.map((el)=>el.ids);
        window.spinal.ForgeViewer.viewer.fitToView(dbIds.flat());
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-service-ticket/dist/Constants":"i0rBD","../../extensions/colorElementExtension":"9wZn2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7AUVh":[function(require,module,exports) {
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

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-service-ticket/dist/Constants":"i0rBD","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","../extensions/colorElementExtension":"9wZn2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib3fZ":[function(require,module,exports) {
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

},{"vue":"gt5MM","./createContextDialog.vue":"fes2h","./createProcessDialog.vue":"jdHKc","./createStepDialog.vue":"bHi9a","./createTicket.vue":"asIYg","./selectProcessDialog.vue":"grIhp","./createCommonIncidentDialog.vue":"fDJRq","./confirmDialog.vue":"eokGr","c6957659ef176505":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fes2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("83600d3a18abb52");
    if (script.__esModule) script = script.default;
    script.render = require("d836a3dc34c0d030").render;
    script.staticRenderFns = require("d836a3dc34c0d030").staticRenderFns;
    script._scopeId = "data-v-0a2567";
    script.__cssModules = require("37f8e31a14bafb62").default;
    require("63aa0a5dea5ddb00").default(script);
    script.__scopeId = "data-v-0a2567";
    script.__file = "createContextDialog.vue";
};
initialize();
exports.default = script;

},{"83600d3a18abb52":"lEoAS","d836a3dc34c0d030":"58OQ7","37f8e31a14bafb62":"89N5g","63aa0a5dea5ddb00":"1OEb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEoAS":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","./components/sortable-list.vue":"eDuGq","../../extensions/Event":"4ovSF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDuGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc1d8c710202bcc7");
    if (script.__esModule) script = script.default;
    script.render = require("fbf48d88ca670da1").render;
    script.staticRenderFns = require("fbf48d88ca670da1").staticRenderFns;
    script._scopeId = "data-v-ce74c0";
    script.__cssModules = require("13fe14883e1fef94").default;
    require("9a7b7b51be1f170f").default(script);
    script.__scopeId = "data-v-ce74c0";
    script.__file = "sortable-list.vue";
};
initialize();
exports.default = script;

},{"cc1d8c710202bcc7":"iXdJp","fbf48d88ca670da1":"9br1C","13fe14883e1fef94":"bqYi2","9a7b7b51be1f170f":"f0GKm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXdJp":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vuedraggable":"1J17x","./popover.vue":"h4WgP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1J17x":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(require("f2b29fe3c2c19cbd"));
})(typeof self !== "undefined" ? self : this, function(__WEBPACK_EXTERNAL_MODULE_a352__) {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "fb15");
    /******/ }({
        /***/ "01f9": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var LIBRARY = __webpack_require__("2d00");
            var $export = __webpack_require__("5ca1");
            var redefine = __webpack_require__("2aba");
            var hide = __webpack_require__("32e9");
            var Iterators = __webpack_require__("84f2");
            var $iterCreate = __webpack_require__("41a0");
            var setToStringTag = __webpack_require__("7f20");
            var getPrototypeOf = __webpack_require__("38fd");
            var ITERATOR = __webpack_require__("2b4c")("iterator");
            var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = "@@iterator";
            var KEYS = "keys";
            var VALUES = "values";
            var returnThis = function() {
                return this;
            };
            module1.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch(kind){
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + " Iterator";
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined;
                var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) hide(proto, ITERATOR, $default);
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED) {
                        for(key in methods)if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "02f4": /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__("4588");
            var defined = __webpack_require__("be13");
            // true  -> String#at
            // false -> String#codePointAt
            module1.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };
        /***/ },
        /***/ "0390": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var at = __webpack_require__("02f4")(true);
            // `AdvanceStringIndex` abstract operation
            // https://tc39.github.io/ecma262/#sec-advancestringindex
            module1.exports = function(S, index, unicode) {
                return index + (unicode ? at(S, index).length : 1);
            };
        /***/ },
        /***/ "0bfb": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.2.5.3 get RegExp.prototype.flags
            var anObject = __webpack_require__("cb7c");
            module1.exports = function() {
                var that = anObject(this);
                var result = "";
                if (that.global) result += "g";
                if (that.ignoreCase) result += "i";
                if (that.multiline) result += "m";
                if (that.unicode) result += "u";
                if (that.sticky) result += "y";
                return result;
            };
        /***/ },
        /***/ "0d58": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__("ce10");
            var enumBugKeys = __webpack_require__("e11e");
            module1.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };
        /***/ },
        /***/ "1495": /***/ function(module1, exports, __webpack_require__) {
            var dP = __webpack_require__("86cc");
            var anObject = __webpack_require__("cb7c");
            var getKeys = __webpack_require__("0d58");
            module1.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while(length > i)dP.f(O, P = keys[i++], Properties[P]);
                return O;
            };
        /***/ },
        /***/ "214f": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            __webpack_require__("b0c5");
            var redefine = __webpack_require__("2aba");
            var hide = __webpack_require__("32e9");
            var fails = __webpack_require__("79e5");
            var defined = __webpack_require__("be13");
            var wks = __webpack_require__("2b4c");
            var regexpExec = __webpack_require__("520a");
            var SPECIES = wks("species");
            var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                // #replace needs built-in support for named groups.
                // #match works fine because it just return the exec results, even if it has
                // a "grops" property.
                var re = /./;
                re.exec = function() {
                    var result = [];
                    result.groups = {
                        a: "7"
                    };
                    return result;
                };
                return "".replace(re, "$<a>") !== "7";
            });
            var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
                // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                var re = /(?:)/;
                var originalExec = re.exec;
                re.exec = function() {
                    return originalExec.apply(this, arguments);
                };
                var result = "ab".split(re);
                return result.length === 2 && result[0] === "a" && result[1] === "b";
            }();
            module1.exports = function(KEY, length, exec) {
                var SYMBOL = wks(KEY);
                var DELEGATES_TO_SYMBOL = !fails(function() {
                    // String methods call symbol-named RegEp methods
                    var O = {};
                    O[SYMBOL] = function() {
                        return 7;
                    };
                    return ""[KEY](O) != 7;
                });
                var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                    // Symbol-named RegExp methods call .exec
                    var execCalled = false;
                    var re = /a/;
                    re.exec = function() {
                        execCalled = true;
                        return null;
                    };
                    if (KEY === "split") {
                        // RegExp[@@split] doesn't call the regex's exec method, but first creates
                        // a new one. We need to return the patched regex when creating the new one.
                        re.constructor = {};
                        re.constructor[SPECIES] = function() {
                            return re;
                        };
                    }
                    re[SYMBOL]("");
                    return !execCalled;
                }) : undefined;
                if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                    var nativeRegExpMethod = /./[SYMBOL];
                    var fns = exec(defined, SYMBOL, ""[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        if (regexp.exec === regexpExec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                            // polyfilled function), leasing to infinite recursion.
                            // We avoid it by directly calling the native @@method method.
                            return {
                                done: true,
                                value: nativeRegExpMethod.call(regexp, str, arg2)
                            };
                            return {
                                done: true,
                                value: nativeMethod.call(str, regexp, arg2)
                            };
                        }
                        return {
                            done: false
                        };
                    });
                    var strfn = fns[0];
                    var rxfn = fns[1];
                    redefine(String.prototype, KEY, strfn);
                    hide(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
                        return rxfn.call(string, this, arg);
                    } : function(string) {
                        return rxfn.call(string, this);
                    });
                }
            };
        /***/ },
        /***/ "230e": /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__("d3f4");
            var document1 = __webpack_require__("7726").document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document1) && isObject(document1.createElement);
            module1.exports = function(it) {
                return is ? document1.createElement(it) : {};
            };
        /***/ },
        /***/ "23c6": /***/ function(module1, exports, __webpack_require__) {
            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__("2d95");
            var TAG = __webpack_require__("2b4c")("toStringTag");
            // ES3 wrong here
            var ARG = cof(function() {
                return arguments;
            }()) == "Arguments";
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (e) {}
            };
            module1.exports = function(it) {
                var O, T, B;
                return it === undefined ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
            };
        /***/ },
        /***/ "2621": /***/ function(module1, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "2aba": /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__("7726");
            var hide = __webpack_require__("32e9");
            var has = __webpack_require__("69a8");
            var SRC = __webpack_require__("ca5a")("src");
            var $toString = __webpack_require__("fa5b");
            var TO_STRING = "toString";
            var TPL = ("" + $toString).split(TO_STRING);
            __webpack_require__("8378").inspectSource = function(it) {
                return $toString.call(it);
            };
            (module1.exports = function(O, key, val, safe) {
                var isFunction = typeof val == "function";
                if (isFunction) has(val, "name") || hide(val, "name", key);
                if (O[key] === val) return;
                if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
                if (O === global) O[key] = val;
                else if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else if (O[key]) O[key] = val;
                else hide(O, key, val);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return typeof this == "function" && this[SRC] || $toString.call(this);
            });
        /***/ },
        /***/ "2aeb": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__("cb7c");
            var dPs = __webpack_require__("1495");
            var enumBugKeys = __webpack_require__("e11e");
            var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
            var Empty = function() {};
            var PROTOTYPE = "prototype";
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__("230e")("iframe");
                var i = enumBugKeys.length;
                var lt = "<";
                var gt = ">";
                var iframeDocument;
                iframe.style.display = "none";
                __webpack_require__("fab2").appendChild(iframe);
                iframe.src = "javascript:"; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };
            module1.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };
        /***/ },
        /***/ "2b4c": /***/ function(module1, exports, __webpack_require__) {
            var store = __webpack_require__("5537")("wks");
            var uid = __webpack_require__("ca5a");
            var Symbol1 = __webpack_require__("7726").Symbol;
            var USE_SYMBOL = typeof Symbol1 == "function";
            var $exports = module1.exports = function(name) {
                return store[name] || (store[name] = USE_SYMBOL && Symbol1[name] || (USE_SYMBOL ? Symbol1 : uid)("Symbol." + name));
            };
            $exports.store = store;
        /***/ },
        /***/ "2d00": /***/ function(module1, exports) {
            module1.exports = false;
        /***/ },
        /***/ "2d95": /***/ function(module1, exports) {
            var toString = {}.toString;
            module1.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "2fdb": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.1.3.7 String.prototype.includes(searchString, position = 0)
            var $export = __webpack_require__("5ca1");
            var context = __webpack_require__("d2c8");
            var INCLUDES = "includes";
            $export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), "String", {
                includes: function includes(searchString /* , position = 0 */ ) {
                    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
        /***/ },
        /***/ "32e9": /***/ function(module1, exports, __webpack_require__) {
            var dP = __webpack_require__("86cc");
            var createDesc = __webpack_require__("4630");
            module1.exports = __webpack_require__("9e1e") ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "38fd": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__("69a8");
            var toObject = __webpack_require__("4bf8");
            var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
            var ObjectProto = Object.prototype;
            module1.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectProto : null;
            };
        /***/ },
        /***/ "41a0": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var create = __webpack_require__("2aeb");
            var descriptor = __webpack_require__("4630");
            var setToStringTag = __webpack_require__("7f20");
            var IteratorPrototype = {};
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")("iterator"), function() {
                return this;
            });
            module1.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, {
                    next: descriptor(1, next)
                });
                setToStringTag(Constructor, NAME + " Iterator");
            };
        /***/ },
        /***/ "456d": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__("4bf8");
            var $keys = __webpack_require__("0d58");
            __webpack_require__("5eda")("keys", function() {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /***/ "4588": /***/ function(module1, exports) {
            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module1.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
        /***/ },
        /***/ "4630": /***/ function(module1, exports) {
            module1.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "4bf8": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__("be13");
            module1.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /***/ "5147": /***/ function(module1, exports, __webpack_require__) {
            var MATCH = __webpack_require__("2b4c")("match");
            module1.exports = function(KEY) {
                var re = /./;
                try {
                    "/./"[KEY](re);
                } catch (e) {
                    try {
                        re[MATCH] = false;
                        return !"/./"[KEY](re);
                    } catch (f) {}
                }
                return true;
            };
        /***/ },
        /***/ "520a": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var regexpFlags = __webpack_require__("0bfb");
            var nativeExec = RegExp.prototype.exec;
            // This always refers to the native implementation, because the
            // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
            // which loads this file before patching the method.
            var nativeReplace = String.prototype.replace;
            var patchedExec = nativeExec;
            var LAST_INDEX = "lastIndex";
            var UPDATES_LAST_INDEX_WRONG = function() {
                var re1 = /a/, re2 = /b*/g;
                nativeExec.call(re1, "a");
                nativeExec.call(re2, "a");
                return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
            }();
            // nonparticipating capturing group, copied from es5-shim's String#split patch.
            var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
            var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
            if (PATCH) patchedExec = function exec(str) {
                var re = this;
                var lastIndex, reCopy, match, i;
                if (NPCG_INCLUDED) reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
                match = nativeExec.call(re, str);
                if (UPDATES_LAST_INDEX_WRONG && match) re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                // eslint-disable-next-line no-loop-func
                nativeReplace.call(match[0], reCopy, function() {
                    for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
                });
                return match;
            };
            module1.exports = patchedExec;
        /***/ },
        /***/ "52a7": /***/ function(module1, exports) {
            exports.f = ({}).propertyIsEnumerable;
        /***/ },
        /***/ "5537": /***/ function(module1, exports, __webpack_require__) {
            var core = __webpack_require__("8378");
            var global = __webpack_require__("7726");
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || (global[SHARED] = {});
            (module1.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })("versions", []).push({
                version: core.version,
                mode: __webpack_require__("2d00") ? "pure" : "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        /***/ },
        /***/ "5ca1": /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__("7726");
            var core = __webpack_require__("8378");
            var hide = __webpack_require__("32e9");
            var redefine = __webpack_require__("2aba");
            var ctx = __webpack_require__("9b43");
            var PROTOTYPE = "prototype";
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = (own ? target : source)[key];
                    // bind timers to global for call from export context
                    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                    // extend global
                    if (target) redefine(target, key, out, type & $export.U);
                    // export
                    if (exports[key] != out) hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module1.exports = $export;
        /***/ },
        /***/ "5eda": /***/ function(module1, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__("5ca1");
            var core = __webpack_require__("8378");
            var fails = __webpack_require__("79e5");
            module1.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY];
                var exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), "Object", exp);
            };
        /***/ },
        /***/ "5f1b": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var classof = __webpack_require__("23c6");
            var builtinExec = RegExp.prototype.exec;
            // `RegExpExec` abstract operation
            // https://tc39.github.io/ecma262/#sec-regexpexec
            module1.exports = function(R, S) {
                var exec = R.exec;
                if (typeof exec === "function") {
                    var result = exec.call(R, S);
                    if (typeof result !== "object") throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return result;
                }
                if (classof(R) !== "RegExp") throw new TypeError("RegExp#exec called on incompatible receiver");
                return builtinExec.call(R, S);
            };
        /***/ },
        /***/ "613b": /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__("5537")("keys");
            var uid = __webpack_require__("ca5a");
            module1.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
            };
        /***/ },
        /***/ "626a": /***/ function(module1, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__("2d95");
            // eslint-disable-next-line no-prototype-builtins
            module1.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == "String" ? it.split("") : Object(it);
            };
        /***/ },
        /***/ "6762": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // https://github.com/tc39/Array.prototype.includes
            var $export = __webpack_require__("5ca1");
            var $includes = __webpack_require__("c366")(true);
            $export($export.P, "Array", {
                includes: function includes(el /* , fromIndex = 0 */ ) {
                    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__("9c6c")("includes");
        /***/ },
        /***/ "6821": /***/ function(module1, exports, __webpack_require__) {
            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__("626a");
            var defined = __webpack_require__("be13");
            module1.exports = function(it) {
                return IObject(defined(it));
            };
        /***/ },
        /***/ "69a8": /***/ function(module1, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module1.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "6a99": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__("d3f4");
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module1.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "7333": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 19.1.2.1 Object.assign(target, source, ...)
            var getKeys = __webpack_require__("0d58");
            var gOPS = __webpack_require__("2621");
            var pIE = __webpack_require__("52a7");
            var toObject = __webpack_require__("4bf8");
            var IObject = __webpack_require__("626a");
            var $assign = Object.assign;
            // should work with symbols and should have deterministic property order (V8 bug)
            module1.exports = !$assign || __webpack_require__("79e5")(function() {
                var A = {};
                var B = {};
                // eslint-disable-next-line no-undef
                var S = Symbol();
                var K = "abcdefghijklmnopqrst";
                A[S] = 7;
                K.split("").forEach(function(k) {
                    B[k] = k;
                });
                return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
            }) ? function assign(target, source) {
                var T = toObject(target);
                var aLen = arguments.length;
                var index = 1;
                var getSymbols = gOPS.f;
                var isEnum = pIE.f;
                while(aLen > index){
                    var S = IObject(arguments[index++]);
                    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while(length > j)if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
                }
                return T;
            } : $assign;
        /***/ },
        /***/ "7726": /***/ function(module1, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
            if (typeof __g == "number") __g = global; // eslint-disable-line no-undef
        /***/ },
        /***/ "77f1": /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__("4588");
            var max = Math.max;
            var min = Math.min;
            module1.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };
        /***/ },
        /***/ "79e5": /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /***/ "7f20": /***/ function(module1, exports, __webpack_require__) {
            var def = __webpack_require__("86cc").f;
            var has = __webpack_require__("69a8");
            var TAG = __webpack_require__("2b4c")("toStringTag");
            module1.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                    configurable: true,
                    value: tag
                });
            };
        /***/ },
        /***/ "8378": /***/ function(module1, exports) {
            var core = module1.exports = {
                version: "2.6.5"
            };
            if (typeof __e == "number") __e = core; // eslint-disable-line no-undef
        /***/ },
        /***/ "84f2": /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "86cc": /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__("cb7c");
            var IE8_DOM_DEFINE = __webpack_require__("c69a");
            var toPrimitive = __webpack_require__("6a99");
            var dP = Object.defineProperty;
            exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "9b43": /***/ function(module1, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__("d8e8");
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "9c6c": /***/ function(module1, exports, __webpack_require__) {
            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__("2b4c")("unscopables");
            var ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
            module1.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };
        /***/ },
        /***/ "9def": /***/ function(module1, exports, __webpack_require__) {
            // 7.1.15 ToLength
            var toInteger = __webpack_require__("4588");
            var min = Math.min;
            module1.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };
        /***/ },
        /***/ "9e1e": /***/ function(module1, exports, __webpack_require__) {
            // Thank's IE8 for his funny defineProperty
            module1.exports = !__webpack_require__("79e5")(function() {
                return Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "a352": /***/ function(module1, exports) {
            module1.exports = __WEBPACK_EXTERNAL_MODULE_a352__;
        /***/ },
        /***/ "a481": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var anObject = __webpack_require__("cb7c");
            var toObject = __webpack_require__("4bf8");
            var toLength = __webpack_require__("9def");
            var toInteger = __webpack_require__("4588");
            var advanceStringIndex = __webpack_require__("0390");
            var regExpExec = __webpack_require__("5f1b");
            var max = Math.max;
            var min = Math.min;
            var floor = Math.floor;
            var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
            var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
            var maybeToString = function(it) {
                return it === undefined ? it : String(it);
            };
            // @@replace logic
            __webpack_require__("214f")("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
                return [
                    // `String.prototype.replace` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                    function replace(searchValue, replaceValue) {
                        var O = defined(this);
                        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                    function(regexp, replaceValue) {
                        var res = maybeCallNative($replace, regexp, this, replaceValue);
                        if (res.done) return res.value;
                        var rx = anObject(regexp);
                        var S = String(this);
                        var functionalReplace = typeof replaceValue === "function";
                        if (!functionalReplace) replaceValue = String(replaceValue);
                        var global = rx.global;
                        if (global) {
                            var fullUnicode = rx.unicode;
                            rx.lastIndex = 0;
                        }
                        var results = [];
                        while(true){
                            var result = regExpExec(rx, S);
                            if (result === null) break;
                            results.push(result);
                            if (!global) break;
                            var matchStr = String(result[0]);
                            if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        }
                        var accumulatedResult = "";
                        var nextSourcePosition = 0;
                        for(var i = 0; i < results.length; i++){
                            result = results[i];
                            var matched = String(result[0]);
                            var position = max(min(toInteger(result.index), S.length), 0);
                            var captures = [];
                            // NOTE: This is equivalent to
                            //   captures = result.slice(1).map(maybeToString)
                            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                            for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                            var namedCaptures = result.groups;
                            if (functionalReplace) {
                                var replacerArgs = [
                                    matched
                                ].concat(captures, position, S);
                                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                var replacement = String(replaceValue.apply(undefined, replacerArgs));
                            } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                            if (position >= nextSourcePosition) {
                                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                nextSourcePosition = position + matched.length;
                            }
                        }
                        return accumulatedResult + S.slice(nextSourcePosition);
                    }
                ];
                // https://tc39.github.io/ecma262/#sec-getsubstitution
                function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                    var tailPos = position + matched.length;
                    var m = captures.length;
                    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                    if (namedCaptures !== undefined) {
                        namedCaptures = toObject(namedCaptures);
                        symbols = SUBSTITUTION_SYMBOLS;
                    }
                    return $replace.call(replacement, symbols, function(match, ch) {
                        var capture;
                        switch(ch.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return matched;
                            case "`":
                                return str.slice(0, position);
                            case "'":
                                return str.slice(tailPos);
                            case "<":
                                capture = namedCaptures[ch.slice(1, -1)];
                                break;
                            default:
                                var n = +ch;
                                if (n === 0) return match;
                                if (n > m) {
                                    var f = floor(n / 10);
                                    if (f === 0) return match;
                                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                    return match;
                                }
                                capture = captures[n - 1];
                        }
                        return capture === undefined ? "" : capture;
                    });
                }
            });
        /***/ },
        /***/ "aae3": /***/ function(module1, exports, __webpack_require__) {
            // 7.2.8 IsRegExp(argument)
            var isObject = __webpack_require__("d3f4");
            var cof = __webpack_require__("2d95");
            var MATCH = __webpack_require__("2b4c")("match");
            module1.exports = function(it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == "RegExp");
            };
        /***/ },
        /***/ "ac6a": /***/ function(module1, exports, __webpack_require__) {
            var $iterators = __webpack_require__("cadf");
            var getKeys = __webpack_require__("0d58");
            var redefine = __webpack_require__("2aba");
            var global = __webpack_require__("7726");
            var hide = __webpack_require__("32e9");
            var Iterators = __webpack_require__("84f2");
            var wks = __webpack_require__("2b4c");
            var ITERATOR = wks("iterator");
            var TO_STRING_TAG = wks("toStringTag");
            var ArrayValues = Iterators.Array;
            var DOMIterables = {
                CSSRuleList: true,
                CSSStyleDeclaration: false,
                CSSValueList: false,
                ClientRectList: false,
                DOMRectList: false,
                DOMStringList: false,
                DOMTokenList: true,
                DataTransferItemList: false,
                FileList: false,
                HTMLAllCollection: false,
                HTMLCollection: false,
                HTMLFormElement: false,
                HTMLSelectElement: false,
                MediaList: true,
                MimeTypeArray: false,
                NamedNodeMap: false,
                NodeList: true,
                PaintRequestList: false,
                Plugin: false,
                PluginArray: false,
                SVGLengthList: false,
                SVGNumberList: false,
                SVGPathSegList: false,
                SVGPointList: false,
                SVGStringList: false,
                SVGTransformList: false,
                SourceBufferList: false,
                StyleSheetList: true,
                TextTrackCueList: false,
                TextTrackList: false,
                TouchList: false
            };
            for(var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++){
                var NAME = collections[i];
                var explicit = DOMIterables[NAME];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                var key;
                if (proto) {
                    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                    Iterators[NAME] = ArrayValues;
                    if (explicit) {
                        for(key in $iterators)if (!proto[key]) redefine(proto, key, $iterators[key], true);
                    }
                }
            }
        /***/ },
        /***/ "b0c5": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var regexpExec = __webpack_require__("520a");
            __webpack_require__("5ca1")({
                target: "RegExp",
                proto: true,
                forced: regexpExec !== /./.exec
            }, {
                exec: regexpExec
            });
        /***/ },
        /***/ "be13": /***/ function(module1, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /***/ "c366": /***/ function(module1, exports, __webpack_require__) {
            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__("6821");
            var toLength = __webpack_require__("9def");
            var toAbsoluteIndex = __webpack_require__("77f1");
            module1.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "c649": /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */ (function(global) {
                __webpack_require__.d(__webpack_exports__, "c", function() {
                    return insertNodeAt;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() {
                    return camelize;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() {
                    return console;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() {
                    return removeNode;
                });
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
                /* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
                function getConsole() {
                    if (typeof window !== "undefined") return window.console;
                    return global.console;
                }
                var console = getConsole();
                function cached(fn) {
                    var cache = Object.create(null);
                    return function cachedFn(str) {
                        var hit = cache[str];
                        return hit || (cache[str] = fn(str));
                    };
                }
                var regex = /-(\w)/g;
                var camelize = cached(function(str) {
                    return str.replace(regex, function(_, c) {
                        return c ? c.toUpperCase() : "";
                    });
                });
                function removeNode(node) {
                    if (node.parentElement !== null) node.parentElement.removeChild(node);
                }
                function insertNodeAt(fatherNode, node, position) {
                    var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
                    fatherNode.insertBefore(node, refNode);
                }
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__("c8ba"));
        /***/ },
        /***/ "c69a": /***/ function(module1, exports, __webpack_require__) {
            module1.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function() {
                return Object.defineProperty(__webpack_require__("230e")("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "c8ba": /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /***/ "ca5a": /***/ function(module1, exports) {
            var id = 0;
            var px = Math.random();
            module1.exports = function(key) {
                return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
            };
        /***/ },
        /***/ "cadf": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var addToUnscopables = __webpack_require__("9c6c");
            var step = __webpack_require__("d53b");
            var Iterators = __webpack_require__("84f2");
            var toIObject = __webpack_require__("6821");
            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module1.exports = __webpack_require__("01f9")(Array, "Array", function(iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function() {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == "keys") return step(0, index);
                if (kind == "values") return step(0, O[index]);
                return step(0, [
                    index,
                    O[index]
                ]);
            }, "values");
            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries");
        /***/ },
        /***/ "cb7c": /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__("d3f4");
            module1.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + " is not an object!");
                return it;
            };
        /***/ },
        /***/ "ce10": /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__("69a8");
            var toIObject = __webpack_require__("6821");
            var arrayIndexOf = __webpack_require__("c366")(false);
            var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
            module1.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "d2c8": /***/ function(module1, exports, __webpack_require__) {
            // helper for String#{startsWith, endsWith, includes}
            var isRegExp = __webpack_require__("aae3");
            var defined = __webpack_require__("be13");
            module1.exports = function(that, searchString, NAME) {
                if (isRegExp(searchString)) throw TypeError("String#" + NAME + " doesn't accept regex!");
                return String(defined(that));
            };
        /***/ },
        /***/ "d3f4": /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /***/ "d53b": /***/ function(module1, exports) {
            module1.exports = function(done, value) {
                return {
                    value: value,
                    done: !!done
                };
            };
        /***/ },
        /***/ "d8e8": /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(it + " is not a function!");
                return it;
            };
        /***/ },
        /***/ "e11e": /***/ function(module1, exports) {
            // IE 8- don't enum bug keys
            module1.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        /***/ },
        /***/ "f559": /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
            var $export = __webpack_require__("5ca1");
            var toLength = __webpack_require__("9def");
            var context = __webpack_require__("d2c8");
            var STARTS_WITH = "startsWith";
            var $startsWith = ""[STARTS_WITH];
            $export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), "String", {
                startsWith: function startsWith(searchString /* , position = 0 */ ) {
                    var that = context(this, searchString, STARTS_WITH);
                    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
                    var search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
                }
            });
        /***/ },
        /***/ "f6fd": /***/ function(module1, exports) {
            // document.currentScript polyfill by Adam Miller
            // MIT license
            (function(document1) {
                var currentScript = "currentScript", scripts = document1.getElementsByTagName("script"); // Live NodeList collection
                // If browser needs currentScript polyfill, add get currentScript() to the document object
                if (!(currentScript in document1)) Object.defineProperty(document1, currentScript, {
                    get: function() {
                        // IE 6-10 supports script readyState
                        // IE 10+ support stack trace
                        try {
                            throw new Error();
                        } catch (err) {
                            // Find the second match for the "at" string to get file src url from stack.
                            // Specifically works with the format of stack traces in IE.
                            var i, res = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(err.stack) || [
                                false
                            ])[1];
                            // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                            for(i in scripts){
                                if (scripts[i].src == res || scripts[i].readyState == "interactive") return scripts[i];
                            }
                            // If no match, return null
                            return null;
                        }
                    }
                });
            })(document);
        /***/ },
        /***/ "f751": /***/ function(module1, exports, __webpack_require__) {
            // 19.1.3.1 Object.assign(target, source)
            var $export = __webpack_require__("5ca1");
            $export($export.S + $export.F, "Object", {
                assign: __webpack_require__("7333")
            });
        /***/ },
        /***/ "fa5b": /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__("5537")("native-function-to-string", Function.toString);
        /***/ },
        /***/ "fab2": /***/ function(module1, exports, __webpack_require__) {
            var document1 = __webpack_require__("7726").document;
            module1.exports = document1 && document1.documentElement;
        /***/ },
        /***/ "fb15": /***/ function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
            // This file is imported into lib/wc client bundles.
            if (typeof window !== "undefined") {
                __webpack_require__("f6fd");
                var setPublicPath_i;
                if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
                ;
            }
            // Indicate to webpack that this file can be concatenated
            /* harmony default export */ var setPublicPath = null;
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
            var es6_object_assign = __webpack_require__("f751");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
            var es6_string_starts_with = __webpack_require__("f559");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
            var web_dom_iterable = __webpack_require__("ac6a");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
            var es6_array_iterator = __webpack_require__("cadf");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
            var es6_object_keys = __webpack_require__("456d");
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
            function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally{
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
            var es7_array_includes = __webpack_require__("6762");
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
            var es6_string_includes = __webpack_require__("2fdb");
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return _arrayLikeToArray(arr);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
            function _iterableToArray(iter) {
                if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
            function _toConsumableArray(arr) {
                return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }
            // EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
            var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
            var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/ __webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);
            // EXTERNAL MODULE: ./src/util/helper.js
            var helper = __webpack_require__("c649");
            // CONCATENATED MODULE: ./src/vuedraggable.js
            function buildAttribute(object, propName, value) {
                if (value === undefined) return object;
                object = object || {};
                object[propName] = value;
                return object;
            }
            function computeVmIndex(vnodes, element) {
                return vnodes.map(function(elt) {
                    return elt.elm;
                }).indexOf(element);
            }
            function _computeIndexes(slots, children, isTransition, footerOffset) {
                if (!slots) return [];
                var elmFromNodes = slots.map(function(elt) {
                    return elt.elm;
                });
                var footerIndex = children.length - footerOffset;
                var rawIndexes = _toConsumableArray(children).map(function(elt, idx) {
                    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
                });
                return isTransition ? rawIndexes.filter(function(ind) {
                    return ind !== -1;
                }) : rawIndexes;
            }
            function emit(evtName, evtData) {
                var _this = this;
                this.$nextTick(function() {
                    return _this.$emit(evtName.toLowerCase(), evtData);
                });
            }
            function delegateAndEmit(evtName) {
                var _this2 = this;
                return function(evtData) {
                    if (_this2.realList !== null) _this2["onDrag" + evtName](evtData);
                    emit.call(_this2, evtName, evtData);
                };
            }
            function isTransitionName(name) {
                return [
                    "transition-group",
                    "TransitionGroup"
                ].includes(name);
            }
            function vuedraggable_isTransition(slots) {
                if (!slots || slots.length !== 1) return false;
                var _slots = _slicedToArray(slots, 1), componentOptions = _slots[0].componentOptions;
                if (!componentOptions) return false;
                return isTransitionName(componentOptions.tag);
            }
            function getSlot(slot, scopedSlot, key) {
                return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
            }
            function computeChildrenAndOffsets(children, slot, scopedSlot) {
                var headerOffset = 0;
                var footerOffset = 0;
                var header = getSlot(slot, scopedSlot, "header");
                if (header) {
                    headerOffset = header.length;
                    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
                }
                var footer = getSlot(slot, scopedSlot, "footer");
                if (footer) {
                    footerOffset = footer.length;
                    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
                }
                return {
                    children: children,
                    headerOffset: headerOffset,
                    footerOffset: footerOffset
                };
            }
            function getComponentAttributes($attrs, componentData) {
                var attributes = null;
                var update = function update(name, value) {
                    attributes = buildAttribute(attributes, name, value);
                };
                var attrs = Object.keys($attrs).filter(function(key) {
                    return key === "id" || key.startsWith("data-");
                }).reduce(function(res, key) {
                    res[key] = $attrs[key];
                    return res;
                }, {});
                update("attrs", attrs);
                if (!componentData) return attributes;
                var on = componentData.on, props = componentData.props, componentDataAttrs = componentData.attrs;
                update("on", on);
                update("props", props);
                Object.assign(attributes.attrs, componentDataAttrs);
                return attributes;
            }
            var eventsListened = [
                "Start",
                "Add",
                "Remove",
                "Update",
                "End"
            ];
            var eventsToEmit = [
                "Choose",
                "Unchoose",
                "Sort",
                "Filter",
                "Clone"
            ];
            var readonlyProperties = [
                "Move"
            ].concat(eventsListened, eventsToEmit).map(function(evt) {
                return "on" + evt;
            });
            var draggingElement = null;
            var props = {
                options: Object,
                list: {
                    type: Array,
                    required: false,
                    default: null
                },
                value: {
                    type: Array,
                    required: false,
                    default: null
                },
                noTransitionOnDrag: {
                    type: Boolean,
                    default: false
                },
                clone: {
                    type: Function,
                    default: function _default(original) {
                        return original;
                    }
                },
                element: {
                    type: String,
                    default: "div"
                },
                tag: {
                    type: String,
                    default: null
                },
                move: {
                    type: Function,
                    default: null
                },
                componentData: {
                    type: Object,
                    required: false,
                    default: null
                }
            };
            var draggableComponent = {
                name: "draggable",
                inheritAttrs: false,
                props: props,
                data: function data() {
                    return {
                        transitionMode: false,
                        noneFunctionalComponentMode: false
                    };
                },
                render: function render(h) {
                    var slots = this.$slots.default;
                    this.transitionMode = vuedraggable_isTransition(slots);
                    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots), children = _computeChildrenAndOf.children, headerOffset = _computeChildrenAndOf.headerOffset, footerOffset = _computeChildrenAndOf.footerOffset;
                    this.headerOffset = headerOffset;
                    this.footerOffset = footerOffset;
                    var attributes = getComponentAttributes(this.$attrs, this.componentData);
                    return h(this.getTag(), attributes, children);
                },
                created: function created() {
                    if (this.list !== null && this.value !== null) helper["b" /* console */ ].error("Value and list props are mutually exclusive! Please set one or another.");
                    if (this.element !== "div") helper["b" /* console */ ].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
                    if (this.options !== undefined) helper["b" /* console */ ].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
                },
                mounted: function mounted() {
                    var _this3 = this;
                    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();
                    if (this.noneFunctionalComponentMode && this.transitionMode) throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
                    var optionsAdded = {};
                    eventsListened.forEach(function(elt) {
                        optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
                    });
                    eventsToEmit.forEach(function(elt) {
                        optionsAdded["on" + elt] = emit.bind(_this3, elt);
                    });
                    var attributes = Object.keys(this.$attrs).reduce(function(res, key) {
                        res[Object(helper["a" /* camelize */ ])(key)] = _this3.$attrs[key];
                        return res;
                    }, {});
                    var options = Object.assign({}, this.options, attributes, optionsAdded, {
                        onMove: function onMove(evt, originalEvent) {
                            return _this3.onDragMove(evt, originalEvent);
                        }
                    });
                    !("draggable" in options) && (options.draggable = ">*");
                    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
                    this.computeIndexes();
                },
                beforeDestroy: function beforeDestroy() {
                    if (this._sortable !== undefined) this._sortable.destroy();
                },
                computed: {
                    rootContainer: function rootContainer() {
                        return this.transitionMode ? this.$el.children[0] : this.$el;
                    },
                    realList: function realList() {
                        return this.list ? this.list : this.value;
                    }
                },
                watch: {
                    options: {
                        handler: function handler(newOptionValue) {
                            this.updateOptions(newOptionValue);
                        },
                        deep: true
                    },
                    $attrs: {
                        handler: function handler(newOptionValue) {
                            this.updateOptions(newOptionValue);
                        },
                        deep: true
                    },
                    realList: function realList() {
                        this.computeIndexes();
                    }
                },
                methods: {
                    getIsFunctional: function getIsFunctional() {
                        var fnOptions = this._vnode.fnOptions;
                        return fnOptions && fnOptions.functional;
                    },
                    getTag: function getTag() {
                        return this.tag || this.element;
                    },
                    updateOptions: function updateOptions(newOptionValue) {
                        for(var property in newOptionValue){
                            var value = Object(helper["a" /* camelize */ ])(property);
                            if (readonlyProperties.indexOf(value) === -1) this._sortable.option(value, newOptionValue[property]);
                        }
                    },
                    getChildrenNodes: function getChildrenNodes() {
                        if (this.noneFunctionalComponentMode) return this.$children[0].$slots.default;
                        var rawNodes = this.$slots.default;
                        return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
                    },
                    computeIndexes: function computeIndexes() {
                        var _this4 = this;
                        this.$nextTick(function() {
                            _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
                        });
                    },
                    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
                        var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
                        if (index === -1) //Edge case during move callback: related element might be
                        //an element different from collection
                        return null;
                        var element = this.realList[index];
                        return {
                            index: index,
                            element: element
                        };
                    },
                    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
                        var vue = _ref.__vue__;
                        if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
                            if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
                            return vue;
                        }
                        return vue.$parent;
                    },
                    emitChanges: function emitChanges(evt) {
                        var _this5 = this;
                        this.$nextTick(function() {
                            _this5.$emit("change", evt);
                        });
                    },
                    alterList: function alterList(onList) {
                        if (this.list) {
                            onList(this.list);
                            return;
                        }
                        var newList = _toConsumableArray(this.value);
                        onList(newList);
                        this.$emit("input", newList);
                    },
                    spliceList: function spliceList() {
                        var _arguments = arguments;
                        var spliceList = function spliceList(list) {
                            return list.splice.apply(list, _toConsumableArray(_arguments));
                        };
                        this.alterList(spliceList);
                    },
                    updatePosition: function updatePosition(oldIndex, newIndex) {
                        var updatePosition = function updatePosition(list) {
                            return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
                        };
                        this.alterList(updatePosition);
                    },
                    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
                        var to = _ref2.to, related = _ref2.related;
                        var component = this.getUnderlyingPotencialDraggableComponent(to);
                        if (!component) return {
                            component: component
                        };
                        var list = component.realList;
                        var context = {
                            list: list,
                            component: component
                        };
                        if (to !== related && list && component.getUnderlyingVm) {
                            var destination = component.getUnderlyingVm(related);
                            if (destination) return Object.assign(destination, context);
                        }
                        return context;
                    },
                    getVmIndex: function getVmIndex(domIndex) {
                        var indexes = this.visibleIndexes;
                        var numberIndexes = indexes.length;
                        return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
                    },
                    getComponent: function getComponent() {
                        return this.$slots.default[0].componentInstance;
                    },
                    resetTransitionData: function resetTransitionData(index) {
                        if (!this.noTransitionOnDrag || !this.transitionMode) return;
                        var nodes = this.getChildrenNodes();
                        nodes[index].data = null;
                        var transitionContainer = this.getComponent();
                        transitionContainer.children = [];
                        transitionContainer.kept = undefined;
                    },
                    onDragStart: function onDragStart(evt) {
                        this.context = this.getUnderlyingVm(evt.item);
                        evt.item._underlying_vm_ = this.clone(this.context.element);
                        draggingElement = evt.item;
                    },
                    onDragAdd: function onDragAdd(evt) {
                        var element = evt.item._underlying_vm_;
                        if (element === undefined) return;
                        Object(helper["d" /* removeNode */ ])(evt.item);
                        var newIndex = this.getVmIndex(evt.newIndex);
                        this.spliceList(newIndex, 0, element);
                        this.computeIndexes();
                        var added = {
                            element: element,
                            newIndex: newIndex
                        };
                        this.emitChanges({
                            added: added
                        });
                    },
                    onDragRemove: function onDragRemove(evt) {
                        Object(helper["c" /* insertNodeAt */ ])(this.rootContainer, evt.item, evt.oldIndex);
                        if (evt.pullMode === "clone") {
                            Object(helper["d" /* removeNode */ ])(evt.clone);
                            return;
                        }
                        var oldIndex = this.context.index;
                        this.spliceList(oldIndex, 1);
                        var removed = {
                            element: this.context.element,
                            oldIndex: oldIndex
                        };
                        this.resetTransitionData(oldIndex);
                        this.emitChanges({
                            removed: removed
                        });
                    },
                    onDragUpdate: function onDragUpdate(evt) {
                        Object(helper["d" /* removeNode */ ])(evt.item);
                        Object(helper["c" /* insertNodeAt */ ])(evt.from, evt.item, evt.oldIndex);
                        var oldIndex = this.context.index;
                        var newIndex = this.getVmIndex(evt.newIndex);
                        this.updatePosition(oldIndex, newIndex);
                        var moved = {
                            element: this.context.element,
                            oldIndex: oldIndex,
                            newIndex: newIndex
                        };
                        this.emitChanges({
                            moved: moved
                        });
                    },
                    updateProperty: function updateProperty(evt, propertyName) {
                        evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
                    },
                    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
                        if (!relatedContext.element) return 0;
                        var domChildren = _toConsumableArray(evt.to.children).filter(function(el) {
                            return el.style["display"] !== "none";
                        });
                        var currentDOMIndex = domChildren.indexOf(evt.related);
                        var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
                        var draggedInList = domChildren.indexOf(draggingElement) !== -1;
                        return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
                    },
                    onDragMove: function onDragMove(evt, originalEvent) {
                        var onMove = this.move;
                        if (!onMove || !this.realList) return true;
                        var relatedContext = this.getRelatedContextFromMoveEvent(evt);
                        var draggedContext = this.context;
                        var futureIndex = this.computeFutureIndex(relatedContext, evt);
                        Object.assign(draggedContext, {
                            futureIndex: futureIndex
                        });
                        var sendEvt = Object.assign({}, evt, {
                            relatedContext: relatedContext,
                            draggedContext: draggedContext
                        });
                        return onMove(sendEvt, originalEvent);
                    },
                    onDragEnd: function onDragEnd() {
                        this.computeIndexes();
                        draggingElement = null;
                    }
                }
            };
            if (typeof window !== "undefined" && "Vue" in window) window.Vue.component("draggable", draggableComponent);
            /* harmony default export */ var vuedraggable = draggableComponent;
            // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
            /* harmony default export */ var entry_lib = __webpack_exports__["default"] = vuedraggable;
        /***/ }
    })["default"];
});

},{"f2b29fe3c2c19cbd":"4mik1"}],"4mik1":[function(require,module,exports) {
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
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
var version = "1.10.2";
function userAgent(pattern) {
    if (typeof window !== "undefined" && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === ">" && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? "add" : "remove"](name);
        else {
            var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
            el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
            style[prop] = val + (typeof val === "string" ? "" : "px");
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = "";
    if (typeof el === "string") appliedTransforms = el;
    else do {
        var transform = css(el, "transform");
        if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, "border-top-width"));
                left -= containerRect.left + parseInt(css(container, "border-left-width"));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, "position", "absolute");
    css(el, "top", rect.top);
    css(el, "left", rect.left);
    css(el, "width", rect.width);
    css(el, "height", rect.height);
}
function unsetRect(el) {
    css(el, "position", "");
    css(el, "top", "");
    css(el, "left", "");
    css(el, "width", "");
    css(el, "height", "");
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, "display") === "none" || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === "function") callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === "function") callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === "function") callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, "transition", "");
                css(target, "transform", "");
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
                repaint(target); // repaint
                css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
                css(target, "transform", "translate3d(0,0,0)");
                typeof target.animated === "number" && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, "transition", "");
                    css(target, "transform", "");
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + "Global";
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            _extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== "undefined") sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== "function") return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, [
        "evt"
    ]);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
    if (!documentExists) return; // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement("x");
    el.style.cssText = "pointer-events:auto";
    return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
        var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
        return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
    }
    return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        if (lastChild(sortable)) return;
        var rect = getRect(sortable), threshold = sortable[expando].options.emptyInsertThreshold, insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (threshold && insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === "clone") return value;
            else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists) document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options); // Export instance
    el[expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData("Text", dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    _prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
    else {
        on(el, "mousedown", this._onTapStart);
        on(el, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, "dragover", this);
        on(el, "dragenter", this);
    }
    sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter
        if (typeof filter === "function") {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: "filter",
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent("filter", _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(",").some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: "filter",
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent("filter", _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style["will-change"] = "all";
            dragStartFn = function dragStartFn() {
                pluginEvent("delayEnded", _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: "choose",
                    originalEvent: evt
                }); // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(",").forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mouseup", _this._onDrop);
            on(ownerDocument, "touchend", _this._onDrop);
            on(ownerDocument, "touchcancel", _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent("delayStart", this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(ownerDocument, "touchend", _this._disableDelayedDrag);
                on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
                on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
                on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._disableDelayedDrag);
        off(ownerDocument, "touchend", this._disableDelayedDrag);
        off(ownerDocument, "touchcancel", this._disableDelayedDrag);
        off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == "touch" && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
            else if (touch) on(document, "touchmove", this._onTouchMove);
            else on(document, "mousemove", this._onTouchMove);
        } else {
            on(dragEl, "dragend", this);
            on(rootEl, "dragstart", this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent("dragStarted", this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost(); // Drag start event
            _dispatchEvent({
                sortable: this,
                name: "start",
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, "webkitTransform", cssMatrix);
                css(ghostEl, "mozTransform", cssMatrix);
                css(ghostEl, "msTransform", cssMatrix);
                css(ghostEl, "transform", cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", rect.top);
            css(ghostEl, "left", rect.left);
            css(ghostEl, "width", rect.width);
            css(ghostEl, "height", rect.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl); // Set transform-origin
            css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent("dragStart", this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent("setupClone", this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.draggable = false;
            cloneEl.style["will-change"] = "";
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent("clone", _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: "clone"
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, "mouseup", _this._onDrop);
            off(document, "touchend", _this._onDrop);
            off(document, "touchcancel", _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = "move";
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, "drop", _this); // #1276 fix:
            css(dragEl, "transform", "translateZ(0)");
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, "selectstart", _this);
        moved = true;
        if (Safari) css(document.body, "user-select", "none");
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? "vertical" : "horizontal",
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent("dragOverCompleted", {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent("dragOverAnimationComplete");
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: "change",
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = closest(target, options.draggable, el, true);
        dragOverEvent("dragOver");
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl) // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === "vertical";
            dragRect = getRect(dragEl);
            dragOverEvent("dragOverValid");
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent("revert");
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                 // assign target only if condition is true
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                lastTarget = target;
                lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild(dragEl);
                    else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, "mousemove", this._onTouchMove);
        off(document, "touchmove", this._onTouchMove);
        off(document, "pointermove", this._onTouchMove);
        off(document, "dragover", nearestEmptyInsertDetectEvent);
        off(document, "mousemove", nearestEmptyInsertDetectEvent);
        off(document, "touchmove", nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._onDrop);
        off(ownerDocument, "touchend", this._onDrop);
        off(ownerDocument, "pointerup", this._onDrop);
        off(ownerDocument, "touchcancel", this._onDrop);
        off(document, "selectstart", this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent("drop", this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            off(document, "drop", this);
            off(el, "dragstart", this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, "user-select", "");
        css(dragEl, "transform", "");
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, "dragend", this);
                _disableDraggable(dragEl);
                dragEl.style["will-change"] = ""; // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: "unchoose",
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "add",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        }); // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: "remove",
                            toEl: parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "sort",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: "sort",
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: "update",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: "sort",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: "end",
                        toEl: parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent("nulling", this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case "drop":
            case "dragend":
                this._onDrop(evt);
                break;
            case "dragenter":
            case "dragover":
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case "selectstart":
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
            else options[name] = value;
            if (name === "group") _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent("destroy", this);
        var el = this.el;
        el[expando] = null;
        off(el, "mousedown", this._onTapStart);
        off(el, "touchstart", this._onTapStart);
        off(el, "pointerdown", this._onTapStart);
        if (this.nativeDraggable) {
            off(el, "dragover", this);
            off(el, "dragenter", this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el) {
            el.removeAttribute("draggable");
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent("hideClone", this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== "clone") {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent("showClone", this);
            if (Sortable.eventCanceled) return; // show clone at dragEl or original position
            if (rootEl.contains(dragEl) && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, "display", "");
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent("move", true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName("input");
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if (documentExists) on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
}; // Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
                else on(document, "mousemove", this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
            else {
                off(document, "pointermove", this._handleFallbackAutoScroll);
                off(document, "touchmove", this._handleFallbackAutoScroll);
                off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: "scroll",
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === "function") {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent("spill");
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: "revertOnSpill"
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: "removeOnSpill"
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: "swap",
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag);
        else {
            on(document, "mouseup", this._deselectMultiDrag);
            on(document, "touchend", this._deselectMultiDrag);
        }
        on(document, "keydown", this._checkKeyDown);
        on(document, "keyup", this._checkKeyUp);
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            setData: function setData(dataTransfer, dragEl) {
                var data = "";
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? "" : ", ") + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData("Text", data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style["will-change"] = "";
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent("clone");
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "");
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone) {
                css(clone, "display", "none");
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            }); // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, "position", "absolute");
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: clonesFromRect
                            });
                            clone.fromRect = clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "select",
                        targetEl: dragEl$1,
                        originalEvt: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: "select",
                                    targetEl: children[i],
                                    originalEvt: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: "deselect",
                        targetEl: dragEl$1,
                        originalEvt: evt
                    });
                }
            } // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                // Do not "unfold" after around dragEl if reverted
                if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent("update");
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: "deselect",
                    targetEl: el,
                    originalEvt: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: "multiDrag",
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if (folding && multiDragElement !== dragEl$1) newIndex = -1;
                else if (folding) newIndex = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
                else newIndex = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === "ctrl") key = "Control";
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4WgP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9374535c400a91ac");
    if (script.__esModule) script = script.default;
    script.render = require("ee825984db4399a6").render;
    script.staticRenderFns = require("ee825984db4399a6").staticRenderFns;
    script._scopeId = "data-v-e8de4c";
    script.__cssModules = require("760e3e23d88ca595").default;
    require("b97cff2841900a4b").default(script);
    script.__scopeId = "data-v-e8de4c";
    script.__file = "popover.vue";
};
initialize();
exports.default = script;

},{"9374535c400a91ac":"4Qccr","ee825984db4399a6":"1RLXv","760e3e23d88ca595":"kgXWN","b97cff2841900a4b":"dgCVv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qccr":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-color":"bOuNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RLXv":[function(require,module,exports) {
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
                            _vm._v("Step name")
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
                    _c("div", [
                        _c("slider-picker", {
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

},{}],"kgXWN":[function() {},{}],"dgCVv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9br1C":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "myContainer md-scrollbar"
    }, [
        _vm.itemsSorted.length > 0 ? _c("draggable", {
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
            return _c("div", {
                key: element.order,
                staticClass: "listeItemDraggable"
            }, [
                _c("div", {
                    staticClass: "left"
                }, [
                    _c("div", {
                        staticClass: "color",
                        style: {
                            "background-color": element.color
                        }
                    }),
                    _vm._v(" "),
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
            _vm._v("\n    No step created\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "myFabs"
        }, [
            _c("popover", {
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

},{}],"bqYi2":[function() {},{}],"f0GKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58OQ7":[function(require,module,exports) {
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
            _vm._v("Create Ticket context\n  ")
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
                    _c("sortable-list", {
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
            _vm.stepper.active === this.STEPPERS_DATA.steps ? _c("md-button", {
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

},{}],"89N5g":[function() {},{}],"1OEb8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdHKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f7935aecc7bc156f");
    if (script.__esModule) script = script.default;
    script.render = require("7d4b323774cff46e").render;
    script.staticRenderFns = require("7d4b323774cff46e").staticRenderFns;
    script._scopeId = "data-v-adc56e";
    script.__cssModules = require("c687d9d6b7466d02").default;
    require("d0836959917586b9").default(script);
    script.__scopeId = "data-v-adc56e";
    script.__file = "createProcessDialog.vue";
};
initialize();
exports.default = script;

},{"f7935aecc7bc156f":"bzwU5","7d4b323774cff46e":"dBEEP","c687d9d6b7466d02":"j0v71","d0836959917586b9":"gxXWk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzwU5":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","../../extensions/Event":"4ovSF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBEEP":[function(require,module,exports) {
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
        _c("form", {
            staticClass: "dialogForm",
            on: {
                "submit": function($event) {
                    $event.preventDefault();
                    return _vm.closeDialog(true);
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Create Process Context")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _c("md-field", [
                    _c("label", [
                        _vm._v("Process name")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
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

},{}],"j0v71":[function() {},{}],"gxXWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHi9a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f193c236a6327045");
    if (script.__esModule) script = script.default;
    script.render = require("90e36e69e10b6f8a").render;
    script.staticRenderFns = require("90e36e69e10b6f8a").staticRenderFns;
    script._scopeId = "data-v-70743b";
    script.__cssModules = require("49708d7946b8d98").default;
    require("c7cd1b6a91790da7").default(script);
    script.__scopeId = "data-v-70743b";
    script.__file = "createStepDialog.vue";
};
initialize();
exports.default = script;

},{"f193c236a6327045":"bhPFt","90e36e69e10b6f8a":"6BCSI","49708d7946b8d98":"jvf9L","c7cd1b6a91790da7":"56e7S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhPFt":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","vue-color":"bOuNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BCSI":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("form", {
            staticClass: "dialogForm",
            on: {
                "submit": function($event) {
                    $event.preventDefault();
                    return _vm.closeDialog(true);
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Create Ticket Step")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _c("md-field", [
                    _c("label", [
                        _vm._v("Step name")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
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
                _c("div", {
                    staticClass: "order_div md-layout md-gutter"
                }, [
                    _c("span", {
                        staticClass: "md-layout-item md-size-20 md-caption insert_div"
                    }, [
                        _vm._v("Insert\n          it")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "md-layout-item md-size-30"
                    }, [
                        _c("md-field", [
                            _c("md-select", {
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
                                _c("md-option", {
                                    attrs: {
                                        "value": _vm.PLACEMENT.before
                                    }
                                }, [
                                    _vm._v("Before")
                                ]),
                                _vm._v(" "),
                                _c("md-option", {
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
                    _c("div", {
                        staticClass: "md-layout-item md-size-50"
                    }, [
                        _c("md-field", [
                            _c("md-select", {
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
                                return _c("md-option", {
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
                _c("chrome-picker", {
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

},{}],"jvf9L":[function() {},{}],"56e7S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asIYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c1629f445b900976");
    if (script.__esModule) script = script.default;
    script.render = require("2a9a142d6cb891fa").render;
    script.staticRenderFns = require("2a9a142d6cb891fa").staticRenderFns;
    script._scopeId = "data-v-92f705";
    script.__cssModules = require("7be61592bcdfe25d").default;
    require("5d93fc935e3f9787").default(script);
    script.__scopeId = "data-v-92f705";
    script.__file = "createTicket.vue";
};
initialize();
exports.default = script;

},{"c1629f445b900976":"aytqR","2a9a142d6cb891fa":"l0ecQ","7be61592bcdfe25d":"7Rto0","5d93fc935e3f9787":"kShri","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aytqR":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","spinal-service-ticket/dist/Constants":"i0rBD","./components/attachment.vue":"jwvof","spinal-env-viewer-graph-service":"9n7zp","../../extensions/spinalIO":"jPxZQ","../../extensions/ticketsEvents":"iO9Cs","../../extensions/Event":"4ovSF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwvof":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c01516fccae31114");
    if (script.__esModule) script = script.default;
    script.render = require("32af7a28fa65dbc").render;
    script.staticRenderFns = require("32af7a28fa65dbc").staticRenderFns;
    script._scopeId = "data-v-314e63";
    script.__cssModules = require("b804daa960246aa7").default;
    require("c8dd0f5c980dbade").default(script);
    script.__scopeId = "data-v-314e63";
    script.__file = "attachment.vue";
};
initialize();
exports.default = script;

},{"c01516fccae31114":"5L9iQ","32af7a28fa65dbc":"20WW3","b804daa960246aa7":"sLI29","c8dd0f5c980dbade":"b856i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5L9iQ":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20WW3":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "content"
    }, [
        _c("div", {
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
        _c("div", {
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

},{}],"sLI29":[function() {},{}],"b856i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0ecQ":[function(require,module,exports) {
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
            staticClass: "mdDialogTitle"
        }, [
            _vm._v("Create Ticket\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "mdDialogContent"
        }, [
            _vm.pageSelected === _vm.PAGES.normal ? _c("div", {
                staticClass: "normalContent"
            }, [
                _c("div", {
                    staticClass: "content details"
                }, [
                    _c("div", [
                        _c("hr", {
                            staticClass: "hr-text",
                            attrs: {
                                "data-content": "Details"
                            }
                        })
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "left"
                    }, [
                        _vm.commonTicketInfo ? _c("div", {
                            staticClass: "detail"
                        }, [
                            _c("div", {
                                staticClass: "label"
                            }, [
                                _vm._v("Title")
                            ]),
                            _vm._v(" "),
                            _c("div", {
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
                        ]) : !_vm.commonTicketInfo ? _c("div", {
                            staticClass: "detail"
                        }, [
                            _c("md-field", [
                                _c("label", [
                                    _vm._v("Ticket name")
                                ]),
                                _vm._v(" "),
                                _c("md-input", {
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
                        _vm.nodeInfo ? _c("div", {
                            staticClass: "detail"
                        }, [
                            _c("div", {
                                staticClass: "label"
                            }, [
                                _vm._v("Element")
                            ]),
                            _vm._v(" "),
                            _c("div", {
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
                _c("div", {
                    staticClass: "content priority"
                }, [
                    _c("div", [
                        _c("hr", {
                            staticClass: "hr-text",
                            attrs: {
                                "data-content": "Priority"
                            }
                        })
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "priorityRadio"
                    }, [
                        _c("md-radio", {
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
                        _c("md-radio", {
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
                        _c("md-radio", {
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
                _c("div", {
                    staticClass: "content notes"
                }, [
                    _c("hr", {
                        staticClass: "hr-text",
                        attrs: {
                            "data-content": "Notes"
                        }
                    }),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "pj"
                    }, [
                        _c("md-button", {
                            staticClass: "md-dense md-primary",
                            on: {
                                "click": _vm.addPJ
                            }
                        }, [
                            _c("md-icon", [
                                _vm._v("attach_file")
                            ]),
                            _vm._v("\n            ADD\n          ")
                        ], 1),
                        _vm._v(" "),
                        _vm.ticket.pj.length > 0 ? _c("md-content", {
                            staticClass: "pjDiv md-scrollbar"
                        }, _vm._l(_vm.ticket.pj, function(file, index) {
                            return _c("attachment-component", {
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
                        }), 1) : _c("md-content", {
                            staticClass: "pjDiv empty"
                        }, [
                            _vm._v("\n            No Attachment added\n          ")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Message")
                        ]),
                        _vm._v(" "),
                        _c("md-textarea", {
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
            ]) : _c("div", {
                staticClass: "responseContent"
            }, [
                _vm.pageSelected === _vm.PAGES.loading ? _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                }) : _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v(_vm._s(_vm.icon))
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

},{}],"7Rto0":[function() {},{}],"kShri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grIhp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("311241a781aaecb4");
    if (script.__esModule) script = script.default;
    script.render = require("fff3494e17408c36").render;
    script.staticRenderFns = require("fff3494e17408c36").staticRenderFns;
    script._scopeId = "data-v-270f7e";
    script.__cssModules = require("45d66c9f784c0393").default;
    require("58b0fd2d0d08ca1a").default(script);
    script.__scopeId = "data-v-270f7e";
    script.__file = "selectProcessDialog.vue";
};
initialize();
exports.default = script;

},{"311241a781aaecb4":"dBkus","fff3494e17408c36":"6Lk5W","45d66c9f784c0393":"1xPlW","58b0fd2d0d08ca1a":"ddB8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBkus":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","./components/selectProcess.vue":"duyv6","../../extensions/Event":"4ovSF","../panels/components/tickets.vue":"khjBr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"duyv6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("41d4c471bdf1a359");
    if (script.__esModule) script = script.default;
    script.render = require("2b08c376d05d1b63").render;
    script.staticRenderFns = require("2b08c376d05d1b63").staticRenderFns;
    script._scopeId = "data-v-c478b6";
    script.__cssModules = require("6102d4c68b0ec87e").default;
    require("980cbab45a6f82ae").default(script);
    script.__scopeId = "data-v-c478b6";
    script.__file = "selectProcess.vue";
};
initialize();
exports.default = script;

},{"41d4c471bdf1a359":"73lN9","2b08c376d05d1b63":"5z9Dy","6102d4c68b0ec87e":"izQMK","980cbab45a6f82ae":"f94tu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73lN9":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkerTemplate.vue":"hgKYl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgKYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("327a8e734e20e2c7");
    if (script.__esModule) script = script.default;
    script.render = require("3f373969f3c4e449").render;
    script.staticRenderFns = require("3f373969f3c4e449").staticRenderFns;
    script._scopeId = "data-v-a826f5";
    script.__cssModules = require("269f43c875d733f1").default;
    require("deed5c0e56ce1834").default(script);
    script.__scopeId = "data-v-a826f5";
    script.__file = "linkerTemplate.vue";
};
initialize();
exports.default = script;

},{"327a8e734e20e2c7":"6MUCC","3f373969f3c4e449":"5VGM4","269f43c875d733f1":"bAZA7","deed5c0e56ce1834":"h9CA6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MUCC":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VGM4":[function(require,module,exports) {
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

},{}],"bAZA7":[function() {},{}],"h9CA6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5z9Dy":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "select_container"
    }, [
        _c("div", {
            staticClass: "content"
        }, [
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Select Context",
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
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Select Process",
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
            _c("div", {
                staticClass: "section"
            }, [
                _c("link-template", {
                    attrs: {
                        "title": "Select Common Incident",
                        "subTitle": "(optional) it will be the ticket name",
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

},{}],"izQMK":[function() {},{}],"f94tu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khjBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25f7c779c0722591");
    if (script.__esModule) script = script.default;
    script.render = require("f135a6e79fc69328").render;
    script.staticRenderFns = require("f135a6e79fc69328").staticRenderFns;
    script._scopeId = "data-v-a8c81c";
    script.__cssModules = require("7afe6bbff0d12208").default;
    require("723f4a2f178fd8d").default(script);
    script.__scopeId = "data-v-a8c81c";
    script.__file = "tickets.vue";
};
initialize();
exports.default = script;

},{"25f7c779c0722591":"38xTT","f135a6e79fc69328":"5VfEL","7afe6bbff0d12208":"6MxjA","723f4a2f178fd8d":"1CDmn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38xTT":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"i0rBD","cb5dbdd688eb6f17":"7Uw4d","../../../extensions/spinalIO":"jPxZQ","moment":"jwcsj","spinal-env-viewer-graph-service":"9n7zp","spinal-service-ticket":"gi7V0","../../../extensions/ticketsEvents":"iO9Cs","../../../extensions/Event":"4ovSF","../../../buttons/standard_buttons/selectElement":"fpE2i","../../../buttons/standard_buttons/isolate":"6nVeM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VfEL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "table_container"
    }, [
        _c("md-table", {
            staticClass: "mdTable",
            attrs: {
                "md-sort": "name"
            },
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c("md-table-row", {
                            on: {
                                "dblclick": function($event) {
                                    return _vm.isolateOnMaquette(item);
                                },
                                "mouseleave": _vm.deselectOnMaquette
                            }
                        }, [
                            _c("md-table-cell", {
                                staticClass: "tableName",
                                attrs: {
                                    "md-label": "Name",
                                    "md-sort-by": "name"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(item.name) + "\n\n         ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                staticClass: "ticketName",
                                attrs: {
                                    "md-label": "State"
                                }
                            }, [
                                _c("div", {
                                    staticClass: "color",
                                    style: {
                                        "background-color": item.step.color
                                    }
                                }),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "name"
                                }, [
                                    _vm._v(_vm._s(item.step.name))
                                ])
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Creation Date",
                                    "md-sort-by": "creationDate"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("formatCreationDate")(item.creationDate)) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Priority",
                                    "md-sort-by": "priority"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("displayPriority")(item.priority)))
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": "Username"
                                }
                            }, [
                                _vm._v("\n            " + _vm._s(_vm._f("userName")(item.user)) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                attrs: {
                                    "md-label": ""
                                }
                            }, [
                                _c("md-menu", {
                                    staticClass: "ticket_menu",
                                    attrs: {
                                        "md-size": "small"
                                    }
                                }, [
                                    _c("md-button", {
                                        staticClass: "md-icon-button",
                                        attrs: {
                                            "md-menu-trigger": ""
                                        }
                                    }, [
                                        _c("md-icon", [
                                            _vm._v("more_vert")
                                        ])
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-menu-content", {
                                        staticClass: "ticket_menu_content"
                                    }, [
                                        item.step.order >= 0 ? _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.passToNextStep(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("skip_next")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                                _vm._v("Pass to next step")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        item.step.order > 0 ? _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.backToPreviousStep(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("skip_previous")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                                _vm._v("Back to previous step")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.sendMessage(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("comment")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                                _vm._v("Add comment")
                                            ])
                                        ], 1),
                                        _vm._v(" "),
                                        !_vm.isArchived(item) ? _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.archiveTicket(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("archive")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                                _vm._v("Archive")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _vm.isArchived(item) ? _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.unarchiveTicket(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("unarchive")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                                _vm._v("Unarchive")
                                            ])
                                        ], 1) : _vm._e(),
                                        _vm._v(" "),
                                        _c("md-menu-item", {
                                            on: {
                                                "click": function($event) {
                                                    return _vm.seeDetails(item);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("assignment_late")
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
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
            _c("md-table-toolbar", {
                staticClass: "myToolbar",
                attrs: {
                    "md-elevation": "0"
                }
            }, [
                _c("div", {
                    staticClass: "md-toolbar-section-start"
                }, [
                    _c("h1", {
                        staticClass: "md-title"
                    }, [
                        _vm._v("Tickets")
                    ])
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "filters md-toolbar-section-end"
                }, [
                    _c("div", {
                        staticClass: "_fields"
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
            _c("md-table-empty-state", {
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

},{}],"6MxjA":[function() {},{}],"1CDmn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Lk5W":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
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
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Select Ticket Process")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "selectProcessClass"
        }, [
            _vm.loading === _vm.PAGE_STATES.success ? _c("div", {
                staticClass: "my_content"
            }, [
                _c("select-process", {
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
            ], 1) : _vm.loading === _vm.PAGE_STATES.loading ? _c("div", {
                staticClass: "cont loading"
            }, [
                _vm._v("\n         loading...\n      ")
            ]) : _vm._e()
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

},{}],"1xPlW":[function() {},{}],"ddB8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDJRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f9ab2477d061dbab");
    if (script.__esModule) script = script.default;
    script.render = require("7c090ac03f1172ab").render;
    script.staticRenderFns = require("7c090ac03f1172ab").staticRenderFns;
    script._scopeId = "data-v-65e5e0";
    require("a04b81f91a386088").default(script);
    script.__scopeId = "data-v-65e5e0";
    script.__file = "createCommonIncidentDialog.vue";
};
initialize();
exports.default = script;

},{"f9ab2477d061dbab":"5UW0a","7c090ac03f1172ab":"cEXeK","a04b81f91a386088":"dmhMz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UW0a":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","./components/sortable-list.vue":"eDuGq","../../extensions/Event":"4ovSF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEXeK":[function(require,module,exports) {
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
            _vm._v("Create Ticket context\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Common incident name")
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

},{}],"dmhMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eokGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a0541e3d7c3a8d6a");
    if (script.__esModule) script = script.default;
    script.render = require("4bad814cd7478395").render;
    script.staticRenderFns = require("4bad814cd7478395").staticRenderFns;
    script._scopeId = "data-v-29fd08";
    require("2ff6b6e4780659e1").default(script);
    script.__scopeId = "data-v-29fd08";
    script.__file = "confirmDialog.vue";
};
initialize();
exports.default = script;

},{"a0541e3d7c3a8d6a":"crDoy","4bad814cd7478395":"d8Mi4","2ff6b6e4780659e1":"eQ3ny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crDoy":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8Mi4":[function(require,module,exports) {
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
            _vm._v("Create Ticket context\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _vm._v("\n    " + _vm._s(_vm.message) + "\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-actions", [
            _c("md-button", {
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
            _c("md-button", {
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

},{}],"eQ3ny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"diNal":[function(require,module,exports) {
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

},{"./ticketManager.vue":"2cR3g","./ticketDetailPanel.vue":"34KwO","./manageTicketPanel.vue":"l0QYm","vue":"gt5MM","f2ee768793e8304c":"1mGHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cR3g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("49ee200b7bacbc95");
    if (script.__esModule) script = script.default;
    script.render = require("33ca3de3f0b78fa6").render;
    script.staticRenderFns = require("33ca3de3f0b78fa6").staticRenderFns;
    script._scopeId = "data-v-ca358f";
    script.__cssModules = require("164364fc4e972210").default;
    require("8c153075a9921c7b").default(script);
    script.__scopeId = "data-v-ca358f";
    script.__file = "ticketManager.vue";
};
initialize();
exports.default = script;

},{"49ee200b7bacbc95":"8iiNX","33ca3de3f0b78fa6":"hvDYi","164364fc4e972210":"eAKWK","8c153075a9921c7b":"bZTbv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iiNX":[function(require,module,exports) {
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
    name: "ticketManagerPanel",
    components: {
        "list-item": (0, _listItemVueDefault.default),
        // "contexts-vue": contextsVue,
        // "processes-vue": processesVue,
        // "steps-vue": stepsVue,
        "tickets-vue": (0, _ticketsVueDefault.default)
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
                el["step"] = step;
                el["contextId"] = this.contextSelected;
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
            let nodeId = typeof params.selectedNode.processId === "undefined" ? params.selectedNode.id : params.selectedNode.processId;
            this.selectProcess(nodeId);
        },
        getStepId (params) {
            if (typeof params.selectedNode.processId !== "undefined") this.selectStep(params.selectedNode.id);
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./service/utilities":"6GTER","./components/listItem.vue":"iSkm5","./components/tickets.vue":"khjBr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GTER":[function(require,module,exports) {
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

},{"spinal-service-ticket":"gi7V0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSkm5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e0979f105eb77d18");
    if (script.__esModule) script = script.default;
    script.render = require("21fc7ed871838a40").render;
    script.staticRenderFns = require("21fc7ed871838a40").staticRenderFns;
    script._scopeId = "data-v-45826b";
    script.__cssModules = require("6b2391558e1fd5fe").default;
    require("8827f89ab071d040").default(script);
    script.__scopeId = "data-v-45826b";
    script.__file = "listItem.vue";
};
initialize();
exports.default = script;

},{"e0979f105eb77d18":"1Z00q","21fc7ed871838a40":"cpEkP","6b2391558e1fd5fe":"ha4eR","8827f89ab071d040":"juj2O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z00q":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpEkP":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "t_container md-srollbar"
    }, [
        _c("md-list", {
            staticClass: "myList"
        }, [
            _vm._t("default"),
            _vm._v(" "),
            _vm._l(_vm.data, function(item) {
                return _c("md-list-item", {
                    key: item.id,
                    on: {
                        "click": function($event) {
                            return _vm.select(item.id);
                        }
                    }
                }, [
                    item.color ? _c("div", {
                        staticClass: "color",
                        style: {
                            "background-color": item.color
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _c("span", {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c("md-icon", [
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

},{}],"ha4eR":[function() {},{}],"juj2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvDYi":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "ticket_container"
    }, [
        _vm.contextSelected ? _c("div", {
            staticClass: "breadcrumb"
        }, [
            _c("md-button", {
                on: {
                    "click": _vm.goBack
                }
            }, [
                _c("md-icon", [
                    _vm._v("arrow_back")
                ]),
                _vm._v("\n      Back\n    ")
            ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("div", {
            staticClass: "data-content"
        }, [
            _vm.pageDisplayed === _vm.PAGES.contexts ? _c("list-item", {
                attrs: {
                    "data": _vm.data
                },
                on: {
                    "select": _vm.selectContext
                }
            }) : _vm.pageDisplayed === _vm.PAGES.processes ? _c("list-item", {
                attrs: {
                    "data": _vm.processes
                },
                on: {
                    "select": _vm.selectProcess
                }
            }) : _vm.pageDisplayed === _vm.PAGES.steps ? _c("list-item", {
                attrs: {
                    "data": _vm.steps
                },
                on: {
                    "select": _vm.selectStep
                }
            }, [
                _c("md-list-item", {
                    on: {
                        "click": _vm.selectAllTickets
                    }
                }, [
                    _c("div", {
                        staticClass: "stepsColor"
                    }),
                    _vm._v(" "),
                    _c("span", {
                        staticClass: "md-list-item-text"
                    }, [
                        _vm._v("All")
                    ]),
                    _vm._v(" "),
                    _c("md-icon", [
                        _vm._v("keyboard_arrow_right")
                    ])
                ], 1)
            ], 1) : _vm.pageDisplayed === _vm.PAGES.tickets ? _c("tickets-vue", {
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

},{}],"eAKWK":[function() {},{}],"bZTbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34KwO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("56e2e7499f1a0238");
    if (script.__esModule) script = script.default;
    script.render = require("77f58d716a2be9ff").render;
    script.staticRenderFns = require("77f58d716a2be9ff").staticRenderFns;
    script._scopeId = "data-v-add9b8";
    script.__cssModules = require("66789ab74fc1e3be").default;
    require("d87bf35bc4a1bc05").default(script);
    script.__scopeId = "data-v-add9b8";
    script.__file = "ticketDetailPanel.vue";
};
initialize();
exports.default = script;

},{"56e2e7499f1a0238":"bR6Er","77f58d716a2be9ff":"4ANwq","66789ab74fc1e3be":"jvRZr","d87bf35bc4a1bc05":"1uotv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bR6Er":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"i0rBD","spinal-env-viewer-graph-service":"9n7zp","spinal-service-ticket":"gi7V0","../../extensions/spinalIO":"jPxZQ","spinal-env-viewer-plugin-documentation/view/notes/components/messageComponent.vue":"PVL1R","./components/logsTemplate.vue":"ccVpk","moment":"jwcsj","../../extensions/ticketsEvents":"iO9Cs","../../extensions/Event":"4ovSF","../../buttons/standard_buttons/isolate":"6nVeM","../../buttons/standard_buttons/selectElement":"fpE2i","../../buttons/standard_buttons/zoom":"eC66R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccVpk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("705cba4a10318e99");
    if (script.__esModule) script = script.default;
    script.render = require("69e34190bc6f882f").render;
    script.staticRenderFns = require("69e34190bc6f882f").staticRenderFns;
    script._scopeId = "data-v-dad557";
    script.__cssModules = require("a6f3498e43a5c761").default;
    require("2f5f283f7ca69a1c").default(script);
    script.__scopeId = "data-v-dad557";
    script.__file = "logsTemplate.vue";
};
initialize();
exports.default = script;

},{"705cba4a10318e99":"3hO3E","69e34190bc6f882f":"1hMQq","a6f3498e43a5c761":"gsoYB","2f5f283f7ca69a1c":"ayuRq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hO3E":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./log.vue":"45L32","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45L32":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4863df0be3dfc958");
    if (script.__esModule) script = script.default;
    script.render = require("9e83154f6a351c5e").render;
    script.staticRenderFns = require("9e83154f6a351c5e").staticRenderFns;
    script._scopeId = "data-v-532470";
    script.__cssModules = require("4ee95ee082b4da19").default;
    require("27cf93e5c6f22942").default(script);
    script.__scopeId = "data-v-532470";
    script.__file = "log.vue";
};
initialize();
exports.default = script;

},{"4863df0be3dfc958":"f5AhV","9e83154f6a351c5e":"3NW1w","4ee95ee082b4da19":"9wKWQ","27cf93e5c6f22942":"cTV2P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5AhV":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket/dist/Constants":"i0rBD","moment":"jwcsj","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3NW1w":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-table-row", [
        _c("md-table-cell", [
            _vm._v(_vm._s(_vm._f("formatDate")(_vm.log.creationDate)))
        ]),
        _vm._v(" "),
        _c("md-table-cell", [
            _vm._v(_vm._s(_vm.username.length > 0 ? _vm.username : "unknown") + "\n    ")
        ]),
        _vm._v(" "),
        _c("md-table-cell", [
            _vm._v(_vm._s(_vm.texte))
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9wKWQ":[function() {},{}],"cTV2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hMQq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "logs_container md-scrollbar"
    }, [
        _c("md-table", {
            staticClass: "logs_table md-scrollbar"
        }, [
            _c("md-table-row", [
                _c("md-table-head", [
                    _vm._v("Date")
                ]),
                _vm._v(" "),
                _c("md-table-head", [
                    _vm._v("User")
                ]),
                _vm._v(" "),
                _c("md-table-head", [
                    _vm._v("Action")
                ])
            ], 1),
            _vm._v(" "),
            _vm._l(_vm.logs, function(log, index) {
                return _c("log-vue", {
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

},{}],"gsoYB":[function() {},{}],"ayuRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ANwq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "mdDialogContainer"
    }, [
        _vm.ticket && !_vm.isLoading ? _c("div", {
            staticClass: "mdDialogContent"
        }, [
            _c("div", {
                staticClass: "ticketDetail"
            }, [
                _c("md-content", {
                    staticClass: "details md-scrollbar"
                }, [
                    _c("div", {
                        staticClass: "detail"
                    }, [
                        _c("div", {
                            staticClass: "label"
                        }, [
                            _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.ticket.name))
                        ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "detail"
                    }, [
                        _c("div", {
                            staticClass: "label"
                        }, [
                            _vm._v("Actual Step")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.formatStepId))
                        ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "detail"
                    }, [
                        _c("div", {
                            staticClass: "label"
                        }, [
                            _vm._v("Priority")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm._f("formatPriority")(_vm.ticket.priority)))
                        ])
                    ]),
                    _vm._v(" "),
                    _vm.ticket.user ? _c("div", {
                        staticClass: "detail"
                    }, [
                        _c("div", {
                            staticClass: "label"
                        }, [
                            _vm._v("Created By")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm.ticket.user.name))
                        ])
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "detail"
                    }, [
                        _c("div", {
                            staticClass: "label"
                        }, [
                            _vm._v("Date creation")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "value"
                        }, [
                            _vm._v(_vm._s(_vm._f("formatDate")(_vm.ticket.creationDate)))
                        ])
                    ])
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "ticketActions"
                }, [
                    _c("md-list", {
                        staticClass: "actionList"
                    }, [
                        _c("md-list-item", {
                            staticClass: "actions"
                        }, [
                            _c("div", {
                                staticClass: "maquette_icons"
                            }, [
                                _c("md-button", {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Select on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.selectOnMaquette
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("find_in_page")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Zoom on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.zoomOnMaquette
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("zoom_in")
                                    ])
                                ], 1),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "md-icon-button md-primary",
                                    attrs: {
                                        "title": "Isolate on 3D Model"
                                    },
                                    on: {
                                        "click": _vm.isolateOnMaquette
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("settings_overscan")
                                    ])
                                ], 1)
                            ], 1)
                        ]),
                        _vm._v(" "),
                        _c("md-list-item", {
                            staticClass: "actions",
                            on: {
                                "click": _vm.passToNext
                            }
                        }, [
                            _c("md-icon", [
                                _vm._v("skip_next")
                            ]),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v("Pass to next step")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("md-list-item", {
                            staticClass: "actions",
                            on: {
                                "click": _vm.backToPrevious
                            }
                        }, [
                            _c("md-icon", [
                                _vm._v("skip_previous")
                            ]),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v("Back to previous step")
                            ])
                        ], 1)
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "content"
            }, [
                _c("div", {
                    staticClass: "ticketsNotes"
                }, [
                    _c("div", {
                        staticClass: "title"
                    }, [
                        _vm._v("Comments")
                    ]),
                    _vm._v(" "),
                    _c("md-content", {
                        staticClass: "events md-scrollbar"
                    }, [
                        _c("message-component", {
                            attrs: {
                                "nodeInfo": _vm.nodeInfo
                            }
                        })
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "ticketsLogs"
                }, [
                    _c("div", {
                        staticClass: "title"
                    }, [
                        _vm._v("Events")
                    ]),
                    _vm._v(" "),
                    _c("md-content", {
                        staticClass: "events"
                    }, [
                        _c("logs-template", {
                            attrs: {
                                "logs": _vm.logs
                            }
                        })
                    ], 1)
                ], 1)
            ])
        ]) : _vm.isLoading ? _c("div", {
            staticClass: "loading"
        }, [
            _c("md-progress-spinner", {
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

},{}],"jvRZr":[function() {},{}],"1uotv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0QYm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("313d067a67bd6b8d");
    if (script.__esModule) script = script.default;
    script.render = require("7ef26c3c921fa345").render;
    script.staticRenderFns = require("7ef26c3c921fa345").staticRenderFns;
    script._scopeId = "data-v-34fc86";
    script.__cssModules = require("ff2e9f09d31e01b1").default;
    require("804fe3fdf9254fc").default(script);
    script.__scopeId = "data-v-34fc86";
    script.__file = "manageTicketPanel.vue";
};
initialize();
exports.default = script;

},{"313d067a67bd6b8d":"9DFZi","7ef26c3c921fa345":"lF69w","ff2e9f09d31e01b1":"4Ds45","804fe3fdf9254fc":"9Ny6S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DFZi":[function(require,module,exports) {
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
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-service-ticket":"gi7V0","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","../../extensions/Event":"4ovSF","./components/tickets.vue":"khjBr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF69w":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.isLoading ? _c("div", {
        staticClass: "my_content"
    }, [
        _c("md-button", {
            staticClass: "md-fab md-mini md-primary md-fab-bottom-right",
            attrs: {
                "title": "create ticket"
            },
            on: {
                "click": _vm.createTicket
            }
        }, [
            _c("md-icon", [
                _vm._v("add")
            ])
        ], 1),
        _vm._v(" "),
        _c("tickets-vue", {
            staticClass: "tickets_class",
            attrs: {
                "data": _vm.tickets
            },
            on: {
                "reload": _vm.reloadData
            }
        })
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

},{}],"4Ds45":[function() {},{}],"9Ny6S":[function(require,module,exports) {
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

},{}],"3rJUb":[function(require,module,exports) {
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

},{}],"9Nkbe":[function(require,module,exports) {
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

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-ticket.126b0323.js.map
