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
})({"Y9jK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _findMessageParentJs = require("./buttonClass/standard_buttons/findMessageParent.js");
var _findMessageParentJsDefault = parcelHelpers.interopDefault(_findMessageParentJs);
var _isolateMessageParentJs = require("./buttonClass/standard_buttons/isolateMessageParent.js");
var _isolateMessageParentJsDefault = parcelHelpers.interopDefault(_isolateMessageParentJs);
var _zoomMessageParentJs = require("./buttonClass/standard_buttons/zoomMessageParent.js");
var _zoomMessageParentJsDefault = parcelHelpers.interopDefault(_zoomMessageParentJs);
var _messageDetailJs = require("./buttonClass/messageDetail.js");
var _messageDetailJsDefault = parcelHelpers.interopDefault(_messageDetailJs);
var _seeMessageJs = require("./buttonClass/seeMessage.js");
var _seeMessageJsDefault = parcelHelpers.interopDefault(_seeMessageJs);
var _notesPanelJs = require("./buttonClass/notesPanel.js");
var _registerDialogsJs = require("./view/notes/dialogs/registerDialogs.js");
var _registerDialogsJsDefault = parcelHelpers.interopDefault(_registerDialogsJs);
var _documentationPanelJs = require("./buttonClass/documentationPanel.js");
// import {
//   DocumentationGroupButton
// } from "./buttonClass/documentationGroup";
var _attributesRightClickVue = require("./view/rightClick/attributesRightClick.vue");
var _attributesRightClickVueDefault = parcelHelpers.interopDefault(_attributesRightClickVue);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const circularMenuHookName = "circularMenu";
const SideBarHookName = "GraphManagerSideBar";
const namePanel = "panel-documentation";
const documentationGroupPanel = "panel-documentationgroup";
const nameAttributesRightClickPanel = "attributes-right-click";
const { spinalContextMenuService } = require("a77090b7237ca305");
const { SpinalForgeExtention } = require("d994e4c01dc61fdd");
// deleteAutoUrlRightClick
//////////////////////////////////////////////////////////////////////////////////////
//                               Documentation
//////////////////////////////////////////////////////////////////////////////////////
SpinalForgeExtention.registerExtention(namePanel, (0, _documentationPanelJs.DocumentationExtension));
spinalContextMenuService.registerApp(circularMenuHookName, new (0, _documentationPanelJs.DocumentationButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _documentationPanelJs.DocumentationButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _findMessageParentJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _isolateMessageParentJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _zoomMessageParentJsDefault.default)(), [
    7
]);
//////////////////////////////////////////////////////////////////////////////////////
//                                Documentation group
//////////////////////////////////////////////////////////////////////////////////////
// SpinalForgeExtention.registerExtention(documentationGroupPanel,
//   DocumentationExtension);
// spinalContextMenuService.registerApp(
//   SideBarHookName,
//   new DocumentationGroupButton(), [7]
// );
//////////////////////////////////////////////////////////////////////////////////////
//                                Notes
//////////////////////////////////////////////////////////////////////////////////////
spinalContextMenuService.registerApp(circularMenuHookName, new (0, _notesPanelJs.NotesButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _notesPanelJs.NotesButton)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _messageDetailJsDefault.default)(), [
    7
]);
spinalContextMenuService.registerApp(SideBarHookName, new (0, _seeMessageJsDefault.default)(), [
    7
]);
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount((0, _registerDialogsJsDefault.default));
//////////////////////////////////////////////////////////////////////////////////////
//                                Export to drive button
//////////////////////////////////////////////////////////////////////////////////////
// spinalContextMenuService.registerApp(
//   SideBarHookName,
//   new ExportToDriveButton(), [7]
// );
//////////////////////////////////////////////////////////////////////////////////////
//                                Right click register
//////////////////////////////////////////////////////////////////////////////////////
SpinalForgeExtention.registerExtention("attributes-right-click", (0, _documentationPanelJs.addAutoAttributesRightClick));
SpinalForgeExtention.registerExtention("url-right-click", (0, _documentationPanelJs.addAutoUrlRightClick));
SpinalForgeExtention.registerExtention("delete-right-click", (0, _documentationPanelJs.deleteAutoUrlRightClick));
(0, _documentationPanelJs.registerRightClickButton)();

},{"a77090b7237ca305":"kHlxv","d994e4c01dc61fdd":"1mGHd","./buttonClass/standard_buttons/findMessageParent.js":"duwj3","./buttonClass/standard_buttons/isolateMessageParent.js":"hvUe8","./buttonClass/standard_buttons/zoomMessageParent.js":"leCTz","./buttonClass/messageDetail.js":"d566z","./buttonClass/seeMessage.js":"39MDB","./buttonClass/notesPanel.js":"1ZH5z","./view/notes/dialogs/registerDialogs.js":"iJGDm","./buttonClass/documentationPanel.js":"4J7A8","./view/rightClick/attributesRightClick.vue":"5TsHZ","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"1mGHd":[function(require,module,exports) {
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

},{}],"duwj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _constants1 = require("spinal-env-viewer-context-geographic-service/build/constants");
var _selectBIMObjectButton = require("spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton");
var _fitToViewerButton = require("spinal-env-viewer-plugin-standard_button/js/fitToViewerButton");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utilities1 = require("../../service/utilities");
const { SpinalContextApp } = require("5e810d5049662e69");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Find Message Parent", "Find message Parent", {
            icon: "find_in_page",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        return contextType === `${0, _constants.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities1.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            el.model.selector.setSelection(el.ids, el.model, "selectOnly");
        });
    }
}
exports.default = FindMessageParent;

},{"5e810d5049662e69":"kHlxv","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-env-viewer-plugin-standard_button/js/selectBIMObjectButton":"byLzT","spinal-env-viewer-plugin-standard_button/js/fitToViewerButton":"jAXW3","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","spinal-env-viewer-graph-service":"9n7zp","../../service/utilities":"5Qpl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byLzT":[function(require,module,exports) {
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

},{"spinal-env-viewer-graph-service":"9n7zp","5b562009692cf730":"kHlxv","./utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Qpl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utilities", ()=>utilities);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
var _constants1 = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
class DocumentationUtilities {
    constructor(){}
    async addLink(option, BIMObjectName, label, URL) {
        if (label != undefined && URL != undefined && URL != "" && label != "") {
            if (option.info != undefined) {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(option.info, label, URL);
                return option;
            } else if (option.dbid != undefined) {
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, BIMObjectName, option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
                    option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(option.info, label, URL);
                return option;
            }
        } else return option;
    }
    async addAttributes(option, BIMObjectName, label, value) {
        if (label != undefined && value != undefined && value != "" && label != "") {
            if (option.info != undefined) {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttribute(option.info, label, value);
                return option;
            } else if (option.dbid != undefined) {
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, BIMObjectName, option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
                    option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttribute(option.info, label, value);
                return option;
            }
        } else return option;
    }
    ///////////////////////////////////////////////////////////
    //                      NOTES                            //
    ///////////////////////////////////////////////////////////
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
        if ((0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(type)) return Promise.resolve([
            selectedNode
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    async getBimObjects(contextId, groupId) {
        const notes = await this._getNotes(groupId, contextId);
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
    _getNotes(nodeId, contextId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === (0, _constants1.NOTE_TYPE);
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
        const promises = notes.map((el)=>{
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id);
            return realNode.getParents((0, _constants1.NOTE_RELATION));
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
    async getGeographicElement(noteId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(noteId);
        const parents = await realNode.getParents((0, _constants1.NOTE_RELATION));
        return parents.filter((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
        }).map((el)=>el.info);
    }
    async getNoteParentsBim(nodeId, contextId) {
        const notes = await this._getNotes(nodeId, contextId);
        const promises = notes.map((el)=>this.getGeographicElement(el.id));
        return Promise.all(promises).then(async (noteParents)=>{
            const el = noteParents.flat();
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
const utilities = new DocumentationUtilities();

},{"spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvUe8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _utilities = require("../../service/utilities");
const { SpinalContextApp } = require("1cd542c76efd12ce");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Isolate Object on Maquette", "Isolate Object on Maquette", {
            icon: "settings_overscan",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        return contextType === `${0, _constants.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            window.spinal.ForgeViewer.viewer.impl.visibilityManager.isolate(el.ids, el.model);
        });
    }
}
exports.default = FindMessageParent;

},{"1cd542c76efd12ce":"kHlxv","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","../../service/utilities":"5Qpl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leCTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _utilities = require("../../service/utilities");
const { SpinalContextApp } = require("b21404b2866488d7");
class FindMessageParent extends SpinalContextApp {
    constructor(){
        super("Zoom", "Find message Parent", {
            icon: "zoom_in",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        console.log(contextType, type);
        return contextType === `${0, _constants.NOTE_TYPE}GroupContext` ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _utilities.utilities).getNoteParentsBim(nodeId, contextId);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        const dbIds = parents.map((el)=>el.ids);
        window.spinal.ForgeViewer.viewer.fitToView(dbIds.flat());
    }
}
exports.default = FindMessageParent;

},{"b21404b2866488d7":"kHlxv","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","../../service/utilities":"5Qpl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d566z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const { SpinalContextApp } = require("4e55680af22ef812");
class MessageDetail extends SpinalContextApp {
    constructor(){
        super("See message detail", "see Message date", {
            icon: "announcement",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isNote = type === (0, _constants.NOTE_TYPE);
        const isNoteGroupContext = contextType == `${0, _constants.NOTE_TYPE}GroupContext`;
        return isNote || isNoteGroupContext ? Promise.resolve(true) : Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("messageDetailDialog", {
            nodeId: nodeId,
            contextId: contextId
        });
    }
}
exports.default = MessageDetail;

},{"4e55680af22ef812":"kHlxv","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39MDB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _utilities = require("../service/utilities");
const { SpinalContextApp } = require("d8518363c79ae351");
class ColorMessageParent extends SpinalContextApp {
    constructor(){
        super("See message detail", "see Message date", {
            icon: "",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        const isNote = type === (0, _constants.NOTE_TYPE);
        const isNoteGroupContext = contextType == `${0, _constants.NOTE_TYPE}GroupContext`;
        if (!isNoteGroupContext || isNote) return Promise.resolve(-1);
        return (0, _utilities.utilities).getIcon(option.selectedNode.get(), option.context.get()).then((isColored)=>{
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
            (0, _utilities.utilities).restoreItem(selected, context);
        } else {
            this.icon = "visibility_off";
            this.isColored = true;
            (0, _utilities.utilities).colorItem(selected, context);
        }
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
exports.default = ColorMessageParent;

},{"d8518363c79ae351":"kHlxv","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","../service/utilities":"5Qpl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZH5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotesButton", ()=>NotesButton);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _notesComponentVue = require("../view/notes/components/notesComponent.vue");
var _notesComponentVueDefault = parcelHelpers.interopDefault(_notesComponentVue);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const { SpinalContextApp } = require("9d0f0a6420acade2");
const { spinalPanelManagerService } = require("a997c98668f3d421");
const { SpinalForgeExtention } = require("4839fc6c73a1c287");
const noteExtension = SpinalForgeExtention.createExtention({
    name: "panel-notes",
    vueMountComponent: (0, _vueDefault.default).extend((0, _notesComponentVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "Notes",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        width: "400px",
        height: "475px",
        minWidth: "510px"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
SpinalForgeExtention.registerExtention(name, noteExtension);
class NotesButton extends SpinalContextApp {
    constructor(){
        super("Spinal Notes", "Spinal CDE description", {
            icon: "insert_comment",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        /*
    if ((option.selectedNode && option.selectedNode.type === 'BIMObject') ||
      option.dbid)
      return Promise.resolve(true);
    // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
    // console.log(option)
    return Promise.resolve(-1);
    */ return Promise.resolve(true);
    }
    async action(option) {
        let obj = {
            selectedNode: getSelectedNode(option.selectedNode),
            dbid: option.dbid ? option.dbid : getDbId(option.selectedNode),
            exist: option.exist,
            model: option.model3d
        };
        spinalPanelManagerService.openPanel("panel-notes", obj);
    }
}
const getSelectedNode = (selectedNode)=>{
    if (typeof selectedNode === "undefined") return;
    if (selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return selectedNode;
    return (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(selectedNode.id.get());
};
const getDbId = (selectedNode)=>{
    if (selectedNode && selectedNode.info && selectedNode.info.dbid) return selectedNode.info.dbid.get();
    else if (selectedNode && selectedNode.dbid) return selectedNode.dbid.get();
};
const createBimObjectNode = ()=>{
    const viewer = spinal.ForgeViewer.viewer;
    const aggregateSelection = viewer.getAggregateSelection()[0];
    if (aggregateSelection) {
        const dbid = aggregateSelection.selection[0];
        const model = aggregateSelection.model;
        return new Promise((resolve)=>{
            viewer.model.getProperties(dbid, async (res)=>{
                const info = await window.spinal.BimObjectService.createBIMObject(dbid, res.name, model);
                if (info instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return resolve(info);
                resolve((0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(info.id.get()));
            });
        });
    }
};

},{"9d0f0a6420acade2":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","a997c98668f3d421":"7Uw4d","4839fc6c73a1c287":"1mGHd","../view/notes/components/notesComponent.vue":"6PtUQ","vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PtUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3072cdcac49f327c");
    if (script.__esModule) script = script.default;
    script.render = require("7d22db4c4fcb5ffd").render;
    script.staticRenderFns = require("7d22db4c4fcb5ffd").staticRenderFns;
    script._scopeId = "data-v-48bef6";
    script.__cssModules = require("92af2a3272474041").default;
    require("bd573c5b91ef6548").default(script);
    script.__scopeId = "data-v-48bef6";
    script.__file = "notesComponent.vue";
};
initialize();
exports.default = script;

},{"3072cdcac49f327c":"47jUJ","7d22db4c4fcb5ffd":"bYcfV","92af2a3272474041":"d1Okf","bd573c5b91ef6548":"7xvn5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47jUJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
// import { FileExplorer } from "../../../service/fileSystemExplorer.js";
// import { MESSAGE_TYPES } from "spinal-models-documentation";
// import {
//   SpinalNode,
//   SpinalGraphService,
// } from "spinal-env-viewer-graph-service";
var _messageComponentVue = require("./messageComponent.vue");
var _messageComponentVueDefault = parcelHelpers.interopDefault(_messageComponentVue);
// import moment from "moment";
// import messageVue from "./message.vue";
// import attachmentVue from "./attachment.vue";
const { spinalPanelManagerService } = require("d639ea77ae50a1be");
var scriptExports = {
    name: "noteComponent",
    data () {
        return {
            // userConnected: {
            //   username: window.spinal.spinalSystem.getUser().username,
            //   userId: FileSystem._user_id,
            // },
            // messages: {
            //   messageUser: "",
            //   pj: [],
            // },
            // // messageUser: "",
            // messageUserEdit: "",
            // notesDisplayList: [],
            // editNodePopup: false,
            // selectedNote: undefined,
            // scrollToEnd: false,
            nodeInfo: undefined,
            noteContextSelected: undefined,
            noteCategorySelected: undefined,
            noteGroupSelected: undefined
        };
    },
    components: {
        "message-component": (0, _messageComponentVueDefault.default)
    },
    methods: {
        opened (option) {
            this.nodeInfo = option;
        // this.resetBind();
        // this.updatedd();
        },
        removed (option, viewer) {},
        closed (option, viewer) {},
        OpenLinkDialog () {
            spinalPanelManagerService.openPanel("linkToGroupDialog", {
                type: (0, _constants.NOTE_TYPE),
                itemSelected: [],
                callback: (context, category, group)=>{
                    this.noteContextSelected = context;
                    this.noteCategorySelected = category;
                    this.noteGroupSelected = group;
                }
            });
        }
    },
    async mounted () {
        const context = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultContext();
        const category = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultCategory();
        const group = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).createDefaultGroup();
        this.noteContextSelected = context.info.get();
        this.noteCategorySelected = category.info.get();
        this.noteGroupSelected = group.info.get();
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","d639ea77ae50a1be":"7Uw4d","./messageComponent.vue":"PVL1R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYcfV":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "notesBox"
    }, [
        _c("md-toolbar", {
            staticClass: "mdToolbar md-dense",
            attrs: {
                "md-elevation": "0"
            }
        }, [
            _c("div", {
                staticClass: "md-toolbar-section-start breadCrumb"
            }, [
                _vm.noteContextSelected && _vm.noteCategorySelected && _vm.noteGroupSelected ? _c("div", [
                    _c("div", [
                        _c("span", {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteContextSelected.name))
                        ]),
                        _vm._v(" "),
                        _c("span", {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v("/")
                        ]),
                        _vm._v(" "),
                        _c("span", {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteCategorySelected.name))
                        ]),
                        _vm._v(" "),
                        _c("span", {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v("/")
                        ]),
                        _vm._v(" "),
                        _c("span", {
                            staticClass: "md-primary md-caption"
                        }, [
                            _vm._v(_vm._s(_vm.noteGroupSelected.name))
                        ])
                    ])
                ]) : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "md-toolbar-section-end"
            }, [
                _c("md-button", {
                    staticClass: "md-icon-button md-primary",
                    on: {
                        "click": _vm.OpenLinkDialog
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("settings_applications")
                    ])
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "notes_div"
        }, [
            _c("message-component", {
                attrs: {
                    "nodeInfo": _vm.nodeInfo,
                    "noteContextSelected": _vm.noteContextSelected,
                    "noteCategorySelected": _vm.noteCategorySelected,
                    "noteGroupSelected": _vm.noteGroupSelected
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"d1Okf":[function() {},{}],"7xvn5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJGDm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _messageDetailDialogVue = require("./messageDetailDialog.vue");
var _messageDetailDialogVueDefault = parcelHelpers.interopDefault(_messageDetailDialogVue);
exports.default = {
    name: "messageDetailDialog",
    vueMountComponent: (0, _vueDefault.default).extend((0, _messageDetailDialogVueDefault.default)),
    parentContainer: document.body
};

},{"vue":"gt5MM","./messageDetailDialog.vue":"dxtTd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxtTd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("96eb55116e0ce9b");
    if (script.__esModule) script = script.default;
    script.render = require("eff8d8f7d42daf8c").render;
    script.staticRenderFns = require("eff8d8f7d42daf8c").staticRenderFns;
    script._scopeId = "data-v-ef1ae3";
    require("8f140d579b6a263c").default(script);
    script.__scopeId = "data-v-ef1ae3";
    script.__file = "messageDetailDialog.vue";
};
initialize();
exports.default = script;

},{"96eb55116e0ce9b":"llvLx","eff8d8f7d42daf8c":"lReMX","8f140d579b6a263c":"4ZS2r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llvLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-documentation-service/dist/Models/constants");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _messageVue = require("../components/message.vue");
var _messageVueDefault = parcelHelpers.interopDefault(_messageVue);
var scriptExports = {
    name: "messageDetailDialog",
    props: [
        "onFinised"
    ],
    components: {
        "message-component": (0, _messageVueDefault.default)
    },
    data () {
        return {
            showDialog: true,
            messages: []
        };
    },
    methods: {
        async opened (params) {
            this.messages = await this.getAllNotes(params.nodeId, params.contextId);
        },
        async getAllNotes (nodeId, contextId) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            const type = realNode && realNode.getType().get();
            if (!type) return [];
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return node.getType().get() === (0, _constants.NOTE_TYPE);
            }).then((values)=>{
                const promises = values.map(async (el)=>{
                    const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id.get());
                    const element = await node.getElement();
                    return element;
                });
                return Promise.all(promises);
            });
        },
        removed (closed) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-documentation-service/dist/Models/constants":"igGim","spinal-env-viewer-graph-service":"9n7zp","../components/message.vue":"awVk4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lReMX":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer paramsDialogContainer",
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
            staticStyle: {
                "text-align": "center"
            }
        }),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "md-scrollbar"
        }, [
            _c("ul", _vm._l(_vm.messages, function(note, index) {
                return _c("message-component", {
                    key: index,
                    attrs: {
                        "date": note.date.get(),
                        "username": note.username.get(),
                        "message": note.message.get(),
                        "type": note.type.get(),
                        "file": note.file
                    }
                });
            }), 1)
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
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4ZS2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4J7A8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentationExtension", ()=>DocumentationExtension);
parcelHelpers.export(exports, "DocumentationButton", ()=>DocumentationButton);
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Export to drive button                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////
parcelHelpers.export(exports, "ExportToDriveButton", ()=>ExportToDriveButton);
parcelHelpers.export(exports, "addAutoUrlRightClick", ()=>addAutoUrlRightClick);
parcelHelpers.export(exports, "addAutoAttributesRightClick", ()=>addAutoAttributesRightClick);
parcelHelpers.export(exports, "deleteAutoUrlRightClick", ()=>deleteAutoUrlRightClick);
parcelHelpers.export(exports, "registerRightClickButton", ()=>registerRightClickButton);
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Right click Panel url                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////
parcelHelpers.export(exports, "registerRightClickurl", ()=>registerRightClickurl);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _documentationComponentVue = require("../documentationComponent.vue");
var _documentationComponentVueDefault = parcelHelpers.interopDefault(_documentationComponentVue);
var _attributesRightClickVue = require("../view/rightClick/attributesRightClick.vue");
var _attributesRightClickVueDefault = parcelHelpers.interopDefault(_attributesRightClickVue);
var _deleteUrlRightClickVue = require("../view/rightClick/deleteUrlRightClick.vue");
var _deleteUrlRightClickVueDefault = parcelHelpers.interopDefault(_deleteUrlRightClickVue);
var _urlRightClickVue = require("../view/rightClick/urlRightClick.vue");
var _urlRightClickVueDefault = parcelHelpers.interopDefault(_urlRightClickVue);
var _spinalModelGraph = require("spinal-model-graph");
var _forgeTreeJs = require("../service/forgeTree.js");
var _forgeTreeJsDefault = parcelHelpers.interopDefault(_forgeTreeJs);
const { SpinalContextApp } = require("584f667426db6e6d");
const { spinalPanelManagerService } = require("d29fc61ab794ee19");
const { SpinalForgeExtention } = require("c2cd75b768d1f5e5");
const DocumentationExtension = SpinalForgeExtention.createExtention({
    name: "panel-documentation",
    vueMountComponent: (0, _vueDefault.default).extend((0, _documentationComponentVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "Documentation",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        width: "30vh",
        height: "40vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
class DocumentationButton extends SpinalContextApp {
    constructor(){
        super("Documentation", "Spinal Documentation description", {
            icon: "folder",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
        if (option.selectedNode) {
            const type = option.selectedNode.type.get();
            if (type === "SpinalService" || type === "SpinalContext" || type === "dashboardContext" || type === "BimFile" || type === "scene") return Promise.resolve(-1);
        }
        return Promise.resolve(true);
    }
    action(option) {
        // option.paramSent = "hello from DocumentationCircularMenuButton";
        spinalPanelManagerService.openPanel("panel-documentation", option);
    }
}
class ExportToDriveButton extends SpinalContextApp {
    constructor(){
        super("Export File To Drive", "Spinal Documentation description", {
            icon: "folder",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
        const type = option.selectedNode.type.get();
        if (type === "SpinalService" || type === "SpinalContext" || type === "dashboardContext" || type === "BimFile") return Promise.resolve(-1);
        let selectedNode = option.info;
        // let dbid = option.dbid
        // let boolBIMObject = option.exist
        if (option.selectedNode !== undefined) // get real node
        selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        if (selectedNode instanceof (0, _spinalModelGraph.SpinalContext)) return Promise.resolve(true);
        else return Promise.resolve(-1);
    // if (selectedNode.info.type.get() == "geographicContext")
    //   return Promise.resolve(true);
    // else {
    //   return Promise.resolve(-1);
    // }
    }
    action(option) {
        let selectedNode = option.info;
        let dbid = option.dbid;
        let boolBIMObject = option.exist;
        if (option.selectedNode !== undefined) // get real node
        selectedNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
        let obj = {
            selectedNode,
            dbid,
            boolBIMObject
        };
        (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).exportToDrive(obj.selectedNode);
    // spinalPanelManagerService.openPanel('panel-notes', obj);
    }
}
const addAutoUrlRightClick = SpinalForgeExtention.createExtention({
    name: "url-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _urlRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "url-right-click",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
const addAutoAttributesRightClick = SpinalForgeExtention.createExtention({
    name: "attributes-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _attributesRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "attributes-right-click",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
const deleteAutoUrlRightClick = SpinalForgeExtention.createExtention({
    name: "delete-right-click",
    vueMountComponent: (0, _vueDefault.default).extend((0, _deleteUrlRightClickVueDefault.default)),
    // toolbar is optional
    panel: {
        title: "delete attributes",
        classname: "spinal-pannel",
        closeBehaviour: "remove"
    },
    style: {
        left: "405px",
        height: "50vh"
    },
    onload: ()=>{},
    onUnLoad: ()=>{}
});
function registerRightClickButton() {
    var checkExist = setInterval(function() {
        const viewer = window.spinal.ForgeViewer.viewer;
        if (viewer !== undefined) {
            viewer.registerContextMenuCallback("MyChangingColorMenuItems", (menu, status)=>{
                if (status.hasSelected) {
                    menu.push({
                        title: "Add Spinal Attributes",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            (0, _forgeTreeJsDefault.default).getAllCategoryByDbidArray(allChildDbid).then((mycat)=>{
                                const propsData = {
                                    dbid: allChildDbid,
                                    category: mycat
                                };
                                spinalPanelManagerService.openPanel("attributes-right-click", propsData);
                            });
                        }
                    });
                    menu.push({
                        title: "Add Spinal url",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            const propsData = {
                                dbid: allChildDbid
                            };
                            spinalPanelManagerService.openPanel("url-right-click", propsData);
                        }
                    });
                    menu.push({
                        title: "Delete Spinal url",
                        target: ()=>{
                            const selSet = viewer.getSelection();
                            let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                            const propsData = {
                                dbid: allChildDbid
                            };
                            spinalPanelManagerService.openPanel("delete-right-click", propsData);
                        }
                    });
                }
            });
            clearInterval(checkExist);
        }
    }, 100);
}
function registerRightClickurl() {
    var checkExist = setInterval(function() {
        const viewer = window.spinal.ForgeViewer.viewer;
        if (viewer !== undefined) {
            viewer.registerContextMenuCallback("MyChangingColorMenuItems", (menu, status)=>{
                if (status.hasSelected) menu.push({
                    title: "Add Spinal url",
                    target: ()=>{
                        const selSet = viewer.getSelection();
                        let allChildDbid = (0, _forgeTreeJsDefault.default).getAllLeafDbIds(selSet);
                        const propsData = {
                            dbid: allChildDbid
                        };
                        spinalPanelManagerService.openPanel("url-right-click", propsData);
                    }
                });
            });
            clearInterval(checkExist);
        }
    }, 100);
}

},{"vue":"gt5MM","584f667426db6e6d":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","d29fc61ab794ee19":"7Uw4d","c2cd75b768d1f5e5":"1mGHd","../documentationComponent.vue":"a5h7e","../view/rightClick/attributesRightClick.vue":"5TsHZ","../view/rightClick/deleteUrlRightClick.vue":"apfso","../view/rightClick/urlRightClick.vue":"9Q5qT","spinal-model-graph":"fkEXw","../service/forgeTree.js":"cTlUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5h7e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("31a4e0185ab8c405");
    if (script.__esModule) script = script.default;
    script.render = require("a2e91578ac897b37").render;
    script.staticRenderFns = require("a2e91578ac897b37").staticRenderFns;
    script._scopeId = "data-v-e55b75";
    script.__cssModules = require("7ce88174b5134f7").default;
    require("51cf3e4d8fe9bf4d").default(script);
    script.__scopeId = "data-v-e55b75";
    script.__file = "documentationComponent.vue";
};
initialize();
exports.default = script;

},{"31a4e0185ab8c405":"iVMrL","a2e91578ac897b37":"7OxcQ","7ce88174b5134f7":"3nWSi","51cf3e4d8fe9bf4d":"dkQPZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVMrL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlpanelVue = require("./view/documentation/URLPanel.vue");
var _urlpanelVueDefault = parcelHelpers.interopDefault(_urlpanelVue);
var _filePanelVue = require("./view/documentation/FilePanel.vue");
var _filePanelVueDefault = parcelHelpers.interopDefault(_filePanelVue);
var _attributesPanelVue = require("./view/documentation/AttributesPanel.vue");
var _attributesPanelVueDefault = parcelHelpers.interopDefault(_attributesPanelVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            activeTab: 0,
            selectedNode: undefined,
            dbid: undefined,
            option: undefined,
            buttonList: [],
            parentGroup: undefined
        };
    },
    components: {
        urlpanel: (0, _urlpanelVueDefault.default),
        filepanel: (0, _filePanelVueDefault.default),
        attributespanel: (0, _attributesPanelVueDefault.default)
    },
    methods: {
        activeTabColor: function(value) {
            if (this.activeTab == value) return {
                background: "#356BaB",
                border: "1px solid white"
            };
            else return {
                background: "unset",
                border: "1px solid white"
            };
        },
        updateSelectedBIMObject (option) {
            this.option = {};
            Object.assign(this.option, option);
            this.selectedNode = this.option.info;
        },
        opened (option) {
            this.option = option;
            let _this = this;
            if (option.selectedNode !== undefined) {
                if (option.selectedNode instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) option.info = option.selectedNode;
                else option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
                this.selectedNode = option.info;
                option.exist = true;
            } else if (option.info !== undefined) {
                this.selectedNode = option.info;
                this.dbid = option.dbid;
            } else {
                this.selectedNode = undefined;
                this.dbid = option.dbid;
            }
            // set attributes for building
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).setBuildingInformationAttributes(this.selectedNode);
            // .then(info => {});
            // // get shared attributes
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getParentGroup(this.selectedNode).then((allParentGroup)=>{
                _this.parentGroup = typeof allParentGroup !== "undefined" ? allParentGroup : [];
            });
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./view/documentation/URLPanel.vue":"1y1zL","./view/documentation/FilePanel.vue":"hbbvb","./view/documentation/AttributesPanel.vue":"lpVJx","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y1zL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ecd114f9d39da0bd");
    if (script.__esModule) script = script.default;
    script.render = require("423b46146b18e6d3").render;
    script.staticRenderFns = require("423b46146b18e6d3").staticRenderFns;
    script._scopeId = "data-v-1d7a8b";
    script.__cssModules = require("b85aaa988e0b9e56").default;
    require("469f96b46380ad7b").default(script);
    script.__scopeId = "data-v-1d7a8b";
    script.__file = "URLPanel.vue";
};
initialize();
exports.default = script;

},{"ecd114f9d39da0bd":"NbKpe","423b46146b18e6d3":"8hivH","b85aaa988e0b9e56":"dBqAN","469f96b46380ad7b":"8q0xr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NbKpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _utilitiesJs = require("../../service/utilities.js");
var _menuURLVue = require("./component/menuURL.vue");
var _menuURLVueDefault = parcelHelpers.interopDefault(_menuURLVue);
var _path = require("path");
var viewer;
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            addURLDialogueStatus: false,
            label: undefined,
            URL: undefined,
            URLDisplayList: [],
            myBind: undefined,
            groupURLDisplayList: [],
            myBindParent: undefined,
            parentListToBind: undefined
        };
    },
    components: {
        menuURL: (0, _menuURLVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        editURLNode (urlNode, urlChange) {
            urlNode.element.name.set(urlChange.label);
            urlNode.element.URL.set(urlChange.URL);
        },
        removeURLNode (urlNode) {
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).removeNode(urlNode);
        },
        async updateURLList () {
            if (this.option.info != undefined) this.URLDisplayList = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getURL(this.option.info);
            else this.URLDisplayList = [];
        },
        async updateURLParent () {
            this.groupURLDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    json = {
                        groupName: node.info.name.get(),
                        url: await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getURL(node)
                    };
                    this.groupURLDisplayList.push(json);
                }
            }
        },
        addLink () {
            let _this = this;
            let label = this.label;
            let URL = this.URL;
            viewer.model.getProperties(this.option.dbid, function(res) {
                let option = (0, _utilitiesJs.utilities).addLink(_this.option, res.name, label, URL);
                option.then((option)=>{
                    if (_this.option.exist == false) {
                        _this.option.exist = true;
                        _this.$emit("updateMyBIMObject", option);
                    }
                });
            });
            this.label = undefined;
            this.URL = undefined;
            this.addURLDialogueStatus = false;
        },
        resetBind () {
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    if (this.myBind != undefined) {
                        this.option.info.unbind(this.myBind);
                        this.myBind = undefined;
                    }
                    if (this.myBind == undefined) this.myBind = this.option.info.bind(this.updateURLList.bind(this));
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            if (!this.parentListToBind) this.parentListToBind = new Lst();
            if (this.parentListToBind.length !== this.parentGroup.length) {
                this.parentListToBind.splice(0, this.parentListToBind.length);
                for(let i = 0; i < this.parentGroup.length; i++){
                    const element = this.parentGroup[i];
                    this.parentListToBind.push(element);
                }
            }
            if (this.myBindParent == undefined) this.parentListToBind.bind(this.updateURLParent.bind(this));
        }
    },
    mounted () {
        viewer = window.spinal.ForgeViewer.viewer;
        this.resetBind();
        this.resetBindParent();
    },
    watch: {
        option: function() {
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"gt5MM","spinal-env-viewer-plugin-documentation-service":"5rYVR","../../service/utilities.js":"5Qpl3","./component/menuURL.vue":"j2O90","path":"loE3o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j2O90":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7a0ea19c1edb5bda");
    if (script.__esModule) script = script.default;
    script.render = require("2aa69f678934ec1f").render;
    script.staticRenderFns = require("2aa69f678934ec1f").staticRenderFns;
    script._scopeId = "data-v-8c11c4";
    script.__cssModules = require("6a9df5f988a34a62").default;
    require("fe224bfcc971bdf0").default(script);
    script.__scopeId = "data-v-8c11c4";
    script.__file = "menuURL.vue";
};
initialize();
exports.default = script;

},{"7a0ea19c1edb5bda":"hLvZ2","2aa69f678934ec1f":"cDGRk","6a9df5f988a34a62":"iC6vN","fe224bfcc971bdf0":"5DGJO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLvZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "url"
    ],
    data () {
        return {
            activeEditURLNode: false,
            urlChange: {
                label: "",
                URL: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editURLNode", this.url, this.urlChange);
            this.activeEditURLNode = false;
        },
        remove () {
            this.$emit("removeURLNode", this.url.node);
        }
    },
    mounted () {
        this.urlChange.label = this.url.element.name.get();
        this.urlChange.URL = this.url.element.URL.get();
    },
    watch: {
        activeEditURLNode () {
            if (this.activeEditURLNode) {
                this.urlChange.label = this.url.element.name.get();
                this.urlChange.URL = this.url.element.URL.get();
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDGRk":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-menu", {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
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
            _c("md-menu-content", [
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            _vm.activeEditURLNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            attrs: {
                "md-active": _vm.activeEditURLNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditURLNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditURLNode = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Edit Link")
            ]),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.urlChange.label,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "label", $$v);
                        },
                        expression: "urlChange.label"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("Link")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.urlChange.URL,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "URL", $$v);
                        },
                        expression: "urlChange.URL"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-dialog-actions", [
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditURLNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iC6vN":[function() {},{}],"5DGJO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
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
var process = require("c0743715070b1b8a");
"use strict";
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"c0743715070b1b8a":"d5jf4"}],"8hivH":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "container-link urlBox"
    }, [
        _c("div", [
            _c("div", {
                staticClass: "filesPaddingPath"
            }, [
                _c("div", {
                    staticClass: "sizeOfPathTab"
                }),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-icon-button addURLButtonPanel",
                    on: {
                        "click": function($event) {
                            _vm.addURLDialogueStatus = true;
                        }
                    }
                }, [
                    _c("i", {
                        staticClass: "material-icons iconPlusDocumentation"
                    }, [
                        _vm._v("add_circle_outline")
                    ])
                ])
            ], 1),
            _vm._v(" "),
            _c("md-content", [
                _c("md-list", [
                    _c("md-subheader", {
                        staticClass: "hr-sect"
                    }, [
                        _vm._v("Local URL")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.URLDisplayList, function(url, index) {
                        return _c("md-list-item", {
                            key: index,
                            staticClass: "myRowStyle colorForCategory"
                        }, [
                            _c("span", {
                                staticClass: "span-opacity"
                            }, [
                                _vm._v(_vm._s(url.element.name.get()))
                            ]),
                            _vm._v(" "),
                            _c("a", {
                                directives: [
                                    {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: url.element.URL.get(),
                                        expression: "url.element.URL.get()"
                                    }
                                ],
                                staticClass: "back-line",
                                attrs: {
                                    "href": url.element.URL.get(),
                                    "target": "_blank"
                                }
                            }, [
                                _vm._v("\n                  " + _vm._s(url.element.URL.get()))
                            ]),
                            _vm._v(" "),
                            _c("menuURL", {
                                attrs: {
                                    "url": url
                                },
                                on: {
                                    "editURLNode": _vm.editURLNode,
                                    "removeURLNode": _vm.removeURLNode
                                }
                            })
                        ], 1);
                    })
                ], 2),
                _vm._v(" "),
                _vm.groupURLDisplayList.length > 0 ? _c("div", [
                    _c("md-subheader", {
                        staticClass: "hr-sect"
                    }, [
                        _vm._v("Shared URL")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.groupURLDisplayList, function(cat) {
                        return _c("div", {
                            key: cat.groupName,
                            staticClass: "colorForCategory myRowStyle"
                        }, [
                            _c("md-subheader", {
                                staticClass: "sharedCategoryCss"
                            }, [
                                _vm._v(_vm._s(cat.groupName) + "\n               ")
                            ]),
                            _vm._v(" "),
                            _c("md-list", {
                                staticClass: "unsetPadding"
                            }, _vm._l(cat.url, function(url, index) {
                                return _c("md-list-item", {
                                    key: index,
                                    staticClass: "colorForCategory"
                                }, [
                                    _c("span", {
                                        staticClass: "span-opacity"
                                    }, [
                                        _vm._v(_vm._s(url.element.name.get()))
                                    ]),
                                    _vm._v(" "),
                                    _c("a", {
                                        directives: [
                                            {
                                                name: "tooltip",
                                                rawName: "v-tooltip",
                                                value: url.element.URL.get(),
                                                expression: "url.element.URL.get()"
                                            }
                                        ],
                                        staticClass: "back-line",
                                        attrs: {
                                            "href": url.element.URL.get(),
                                            "target": "_blank"
                                        }
                                    }, [
                                        _vm._v("\n                        " + _vm._s(url.element.URL.get()))
                                    ])
                                ]);
                            }), 1)
                        ], 1);
                    })
                ], 2) : _vm._e()
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            attrs: {
                "md-active": _vm.addURLDialogueStatus
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.addURLDialogueStatus = $event;
                },
                "update:md-active": function($event) {
                    _vm.addURLDialogueStatus = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Add Link")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", {
                staticClass: "urlDialogContainer"
            }, [
                _c("md-field", {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c("label", [
                        _vm._v("Label")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        model: {
                            value: _vm.label,
                            callback: function($$v) {
                                _vm.label = $$v;
                            },
                            expression: "label"
                        }
                    })
                ], 1),
                _vm._v(" "),
                _c("md-field", {
                    attrs: {
                        "md-inline": ""
                    }
                }, [
                    _c("label", [
                        _vm._v("Link")
                    ]),
                    _vm._v(" "),
                    _c("md-input", {
                        model: {
                            value: _vm.URL,
                            callback: function($$v) {
                                _vm.URL = $$v;
                            },
                            expression: "URL"
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
                            _vm.addURLDialogueStatus = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addLink
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dBqAN":[function() {},{}],"8q0xr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbbvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8c48d89c9490a7b4");
    if (script.__esModule) script = script.default;
    script.render = require("1809fc8e6f44fe2a").render;
    script.staticRenderFns = require("1809fc8e6f44fe2a").staticRenderFns;
    script._scopeId = "data-v-e43dd7";
    script.__cssModules = require("24ebbdf875886b7b").default;
    require("c6ac8098ef839022").default(script);
    script.__scopeId = "data-v-e43dd7";
    script.__file = "FilePanel.vue";
};
initialize();
exports.default = script;

},{"8c48d89c9490a7b4":"e6XE7","1809fc8e6f44fe2a":"kp5Sm","24ebbdf875886b7b":"5PIaX","c6ac8098ef839022":"29GfD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6XE7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fileSystemExplorerJs = require("../../service/fileSystemExplorer.js");
var _driveVue = require("./component/drive.vue");
var _driveVueDefault = parcelHelpers.interopDefault(_driveVue);
var _menuFileVue = require("./component/menuFile.vue");
var _menuFileVueDefault = parcelHelpers.interopDefault(_menuFileVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            activeAddDirectory: false,
            importedFiles: undefined,
            importedDriveFiles: undefined,
            selectedDirectory: undefined,
            oldDirectory: undefined,
            displayList: [],
            multipleFile: undefined,
            myBind: undefined,
            pathTab: [],
            parentListToBind: new Lst(),
            groupAttrDisplayList: [],
            boolInShared: false,
            boolInDirectory: false
        };
    },
    components: {
        drive: (0, _driveVueDefault.default),
        menuFile: (0, _menuFileVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        downloadFile (file, index) {
            if (file._info.model_type.get() != "Directory") file._ptr.load((path)=>{
                if (file._info.model_type.get() == "HttpPath") {
                    const element = document.createElement("a");
                    const _path = path.host.get() + "/file/" + encodeURIComponent(path.httpRootPath.get()) + "/" + encodeURIComponent(path.httpPath.get());
                    element.setAttribute("href", _path);
                    element.setAttribute("download", file.name.get());
                    element.style.display = "none";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                } else {
                    var element = document.createElement("a");
                    element.setAttribute("href", "/sceen/_?u=" + path._server_id);
                    element.setAttribute("download", file.name);
                    element.click();
                }
            });
        },
        removeFile (file, index) {
            this.selectedDirectory.splice(index, 1);
        },
        getFileImported (files) {
            // ici il y a un bug sur les fichier importé, quand j'import un fichier toto.txt, que je change vers le drive tabs,
            // je retourne sur le upload tabs, je ne peux pas ajouter le meme fichier, levent md-change ne triger pas
            this.importedFiles = files;
        },
        getFileImportedFromDrive (files) {
            this.importedDriveFiles = files;
        },
        resetImportedFiles () {
            this.importedFiles = undefined;
            this.importedDriveFiles = undefined;
            this.multipleFile = undefined;
        },
        getIconFile (file) {
            return (0, _fileSystemExplorerJs.FileExplorer).getIconFile(file);
        },
        loadRoute (index) {
            if (index == this.pathTab.length - 1) ;
            else {
                this.selectedDirectory = this.pathTab[index].directory;
                let length = this.pathTab.length - 1;
                this.pathTab.splice(index + 1, length - index);
                this.resetBind();
                if (this.pathTab.length == 1) {
                    this.boolInShared = true;
                    this.boolInDirectory = false;
                }
            }
        },
        enterInDirectory (file) {
            if (file._info.model_type.get() == "Directory") {
                file._ptr.load((directory)=>{
                    let pathObj = {
                        name: file.name.get() + " /",
                        directory: directory
                    };
                    this.pathTab.push(pathObj);
                    this.selectedDirectory = directory;
                    this.resetBind();
                });
                this.boolInDirectory = true;
            }
        },
        enterInDirectoryParent (group) {
            let pathObj = {
                name: group.groupName + " /",
                directory: group.groupAttr
            };
            this.pathTab.push(pathObj);
            this.selectedDirectory = group.groupAttr;
            this.boolInShared = false;
            this.boolSharedDirectory = false;
            this.updateDisplayList();
            this.resetBind;
        },
        updateDisplayList () {
            this.displayList = [];
            if (this.selectedDirectory != undefined) for(let i = 0; i < this.selectedDirectory.length; i++){
                const file = this.selectedDirectory[i];
                this.displayList.push(file);
            }
        },
        getFileInDir (directory) {
            let displayList = [];
            if (directory != undefined) for(let i = 0; i < directory.length; i++){
                const file = directory[i];
                displayList.push(file);
            }
            return displayList;
        },
        async updateDisplayListParent () {
            this.groupAttrDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    const dir = await (0, _fileSystemExplorerJs.FileExplorer).getDirectory(node);
                    json = {
                        groupName: node.info.name.get(),
                        groupAttr: dir,
                        files: this.getFileInDir(dir)
                    };
                    this.groupAttrDisplayList.push(json);
                }
            }
        },
        sendAddFile () {
            // check if imported file come from drive or upload
            if (this.importedFiles != undefined) (0, _fileSystemExplorerJs.FileExplorer).addFileUpload(this.selectedDirectory, this.importedFiles);
            else if (this.importedDriveFiles != undefined) (0, _fileSystemExplorerJs.FileExplorer).addFileDrive(this.selectedDirectory, this.importedDriveFiles, this.pathTab);
        },
        async saveFile () {
            // check if the node exist
            // check if node has a directory
            // if node doesn't exist, i create it
            // if node haven't a directory, add it
            let _this = this;
            if (this.selectedDirectory != undefined) this.sendAddFile();
            else if (this.option.exist == false) {
                let option = this.option;
                window.spinal.ForgeViewer.viewer.model.getProperties(this.option.dbid, async function(res) {
                    let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(option.dbid, res.name, option.model3d);
                    if (boolIsCreated) {
                        let bimObject = await window.spinal.BimObjectService.getBIMObject(option.dbid, option.model3d);
                        option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                    }
                    if (option.exist == false) {
                        option.exist = true;
                        _this.$emit("updateMyBIMObject", option);
                    }
                    _this.selectedDirectory = await (0, _fileSystemExplorerJs.FileExplorer).createDirectory(option.info);
                    _this.sendAddFile();
                    _this.resetBind();
                    _this.resetImportedFiles();
                });
            } else {
                this.selectedDirectory = await (0, _fileSystemExplorerJs.FileExplorer).createDirectory(this.option.info);
                this.sendAddFile();
                this.resetBind();
                this.resetImportedFiles();
            }
            this.activeAddDirectory = false;
        },
        deleteBind () {
            if (this.myBind != undefined) {
                if (this.oldDirectory != undefined) {
                    this.oldDirectory.unbind(this.myBind);
                    this.myBind = undefined;
                }
            }
        },
        resetBind () {
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    this.deleteBind();
                    if (this.myBind == undefined) {
                        if (this.selectedDirectory != undefined) {
                            this.myBind = this.selectedDirectory.bind(this.updateDisplayList.bind(this));
                            this.oldDirectory = this.selectedDirectory;
                        } else this.updateDisplayList();
                    }
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            this.parentListToBind.splice(0, this.parentListToBind.length);
            for(let i = 0; i < this.parentGroup.length; i++){
                const element = this.parentGroup[i];
                this.parentListToBind.push(element);
            }
            if (this.myBindParent == undefined) this.myBindParent = this.parentListToBind.bind(this.updateDisplayListParent.bind(this));
        }
    },
    watch: {
        option: async function() {
            let namePath = "";
            this.selectedDirectory = await (0, _fileSystemExplorerJs.FileExplorer).getDirectory(this.option.info);
            if (this.option.info != undefined) namePath = this.option.info.info.name.get() + " /";
            else namePath = "Home /";
            let pathObj = {
                name: namePath,
                directory: this.selectedDirectory
            };
            this.pathTab = [];
            this.pathTab.push(pathObj);
            this.boolInShared = true;
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    async mounted () {
        if (this.option != undefined) {
            if (this.option.info != undefined) {
                this.selectedDirectory = await (0, _fileSystemExplorerJs.FileExplorer).getDirectory(this.option.info);
                let namePath = this.option.info.info.name.get() + " /";
                let pathObj = {
                    name: namePath,
                    directory: this.selectedDirectory
                };
                this.boolInShared = true;
                this.pathTab.push(pathObj);
                this.resetBind();
                this.resetBindParent();
            }
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../service/fileSystemExplorer.js":"jNZiM","./component/drive.vue":"cB23Q","./component/menuFile.vue":"ab5EF","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNZiM":[function(require,module,exports) {
// import ServiceCDE from "spinal-env-viewer-plugin-documentation-service";
// import bimObjectService from 'spinal-env-viewer-plugin-bimobjectservice';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileExplorer", ()=>FileExplorer);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
class FileSystemExplorer {
    constructor(){
        this.spinalSystem = window.spinal.spinalSystem;
        this.pathForgeFile = this.spinalSystem.getPath();
    }
    getDrivePathRoot() {
        var user = this.spinalSystem.getUser();
        var home = "/__users__/" + user.username;
        this.currentPath = home;
        var route = {};
        route.name = "home";
        route.path = home;
        return route;
    }
    createDriveRoute(path, file) {
        var name = "/ " + file.name;
        var mypath = path + "/" + file.name;
        var route = {};
        route.name = name;
        route.path = mypath;
        return route;
    }
    loadDrivePath(currentPath) {
        let tabDisplay = [];
        return this.spinalSystem.load(currentPath).then((directory)=>{
            for(let i = 0; i < directory.length; i++){
                const element = directory[i];
                let obj = {
                    name: element.name.get(),
                    type: element._info.model_type.get(),
                    serverid: element._server_id,
                    path: currentPath + "/" + element.name.get()
                };
                tabDisplay.push(obj);
            }
            return tabDisplay;
        });
    }
    async getDirectory(selectedNode) {
        if (selectedNode != undefined) {
            const fileNode = await selectedNode.getChildren("hasFiles");
            if (fileNode.length == 0) return undefined;
            else {
                let directory = await fileNode[0].getElement();
                return directory;
            }
        }
    }
    async getNbChildren(selectedNode) {
        const fileNode = await selectedNode.getChildren("hasFiles");
        return fileNode.length;
    }
    async createDirectory(selectedNode) {
        let nbNode = await this.getNbChildren(selectedNode);
        if (nbNode == 0) {
            let myDirectory = new Directory();
            let node = await selectedNode.addChild(myDirectory, "hasFiles", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            node.info.name.set("[Files]");
            node.info.type.set("SpinalFiles");
            return myDirectory;
        } else return this.getDirectory(selectedNode);
    }
    addFileUpload(directory, uploadFileList) {
        const files = [];
        for(let i = 0; i < uploadFileList.length; i++){
            const element = uploadFileList[i];
            let filePath = new Path(element);
            let myFile = new File(element.name, filePath);
            directory.push(myFile);
            files.push(myFile);
        }
        return files;
    }
    addFileDrive(directory, driveFileList, pathTab) {
        for(let i = 0; i < driveFileList.length; i++){
            const driveFile = driveFileList[i];
            let test = this.checkInfinitInclusion(FileSystem._objects[driveFile.serverid], pathTab);
            test.then((res)=>{
                if (res == false) ;
                else directory.push(FileSystem._objects[driveFile.serverid]);
            });
        }
    }
    getDigitalTwithePath() {
        return this.spinalSystem.getPath();
    }
    pathParse(path) {
        let arrayOfPath = path.split("/");
        let nameFile = arrayOfPath[arrayOfPath.length - 1];
        return nameFile;
    }
    callback(file) {
        return new Promise((resolve)=>{
            file._ptr.load(resolve);
        });
    }
    checkInfinitInclusion(file, pathTab) {
        let DigitalTwinPath = this.spinalSystem.getPath();
        let nameFile = this.pathParse(DigitalTwinPath);
        let _this = this;
        let tab = [];
        for(let j = 0; j < pathTab.length; j++){
            const name = pathTab[j].name.substring(0, pathTab[j].name.length - 2);
            if (name == file.name.get()) return Promise.resolve(false);
        }
        if (file.name.get() == nameFile) return Promise.resolve(false);
        else if (file._info.model_type.get() === "Directory" || file._info.model_type.get() === "Synchronized Directory") return this.callback(file).then((resdir)=>{
            if (resdir.length > 0) {
                for(let i = 0; i < resdir.length; i++){
                    const file = resdir[i];
                    tab.push(_this.checkInfinitInclusion(file, pathTab));
                }
                return Promise.all(tab).then((array)=>{
                    return !array.includes(false);
                });
            } else return true;
        });
        else return Promise.resolve(true);
    }
    addDirectory(selectedNode) {
        console.log(selectedNode);
    }
    getIconFile(file) {
        let fileType;
        if (file.type != undefined) fileType = file.type;
        else fileType = file._info.model_type.get();
        if (fileType === "Directory") return "folder";
        else if (fileType === "Digital twin") return "location_city";
        else if (fileType === "Path") return "insert_drive_file";
        else if (fileType === "Synchronized Directory") return "folder_shared";
        else if (fileType === "HttpPath") return "file_copy";
        else return "not_listed_location";
    }
}
const FileExplorer = new FileSystemExplorer();

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cB23Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1b45cf5cc1abab8e");
    if (script.__esModule) script = script.default;
    script.render = require("99ddf3075a91abde").render;
    script.staticRenderFns = require("99ddf3075a91abde").staticRenderFns;
    script._scopeId = "data-v-09f387";
    script.__cssModules = require("852f2be99d1b5bdf").default;
    require("438ef9817b5d7e02").default(script);
    script.__scopeId = "data-v-09f387";
    script.__file = "drive.vue";
};
initialize();
exports.default = script;

},{"1b45cf5cc1abab8e":"5dBNx","99ddf3075a91abde":"d9KAp","852f2be99d1b5bdf":"cEPRp","438ef9817b5d7e02":"6fCsd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dBNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fileSystemExplorerJs = require("../../../service/fileSystemExplorer.js");
// var viewer;
var scriptExports = {
    name: "addGroup",
    data () {
        return {
            pathTab: [],
            currentPath: undefined,
            tabDisplay: [],
            selected: []
        };
    },
    components: {},
    props: [],
    methods: {
        onSelectDriveFile: function(items) {
            this.selected = items;
            this.$emit("getFileImportedFromDrive", items);
        },
        getIconFile (file) {
            return (0, _fileSystemExplorerJs.FileExplorer).getIconFile(file);
        },
        clickPath: function(driveFiles) {
            this.selected = [];
            let type = driveFiles.type;
            if (type == "Directory" || type == "Synchronized Directory") {
                let route = (0, _fileSystemExplorerJs.FileExplorer).createDriveRoute(this.currentPath, driveFiles);
                this.pathTab.push(route);
                this.currentPath = route.path;
                this.getPath();
            }
        },
        getPath: function() {
            (0, _fileSystemExplorerJs.FileExplorer).loadDrivePath(this.currentPath).then((directory)=>{
                this.tabDisplay = directory;
            });
        },
        loadRoute: function(indexPath) {
            this.selected = [];
            this.currentPath = this.pathTab[indexPath].path;
            this.pathTab.splice(indexPath + 1, this.pathTab.length - (indexPath + 1));
            this.getPath();
        }
    },
    mounted () {
        let route = (0, _fileSystemExplorerJs.FileExplorer).getDrivePathRoot();
        this.currentPath = route.path;
        this.pathTab.push(route);
        this.getPath();
        this.$emit("resetImportedFiles");
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../service/fileSystemExplorer.js":"jNZiM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9KAp":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "tableDiv"
    }, [
        _c("div", {
            staticClass: "path"
        }, _vm._l(_vm.pathTab, function(path, index) {
            return _c("span", {
                key: index,
                on: {
                    "click": function($event) {
                        return _vm.loadRoute(index);
                    }
                }
            }, [
                _vm._v(_vm._s(path.name) + " ")
            ]);
        }), 0),
        _vm._v(" "),
        _c("div", {
            staticClass: "table"
        }, [
            _c("md-table", {
                attrs: {
                    "md-fixed-header": ""
                },
                on: {
                    "md-selected": _vm.onSelectDriveFile
                },
                scopedSlots: _vm._u([
                    {
                        key: "md-table-row",
                        fn: function(ref) {
                            var driveFiles = ref.item;
                            return _c("md-table-row", {
                                attrs: {
                                    "md-auto-select": "",
                                    "md-selectable": "multiple"
                                },
                                nativeOn: {
                                    "dblclick": function($event) {
                                        return _vm.clickPath(driveFiles);
                                    }
                                }
                            }, [
                                _c("md-table-cell", {
                                    attrs: {
                                        "md-label": "Name"
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v(_vm._s(_vm.getIconFile(driveFiles)))
                                    ]),
                                    _vm._v("\n                \n               " + _vm._s(driveFiles.name) + "\n            ")
                                ], 1),
                                _vm._v(" "),
                                _c("md-table-cell", {
                                    attrs: {
                                        "md-label": "Type"
                                    }
                                }, [
                                    _vm._v(_vm._s(driveFiles.type))
                                ])
                            ], 1);
                        }
                    }
                ]),
                model: {
                    value: _vm.tabDisplay,
                    callback: function($$v) {
                        _vm.tabDisplay = $$v;
                    },
                    expression: "tabDisplay"
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"cEPRp":[function() {},{}],"6fCsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ab5EF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("25cbf89c8b221a8b");
    if (script.__esModule) script = script.default;
    script.render = require("31bb3753619f6af5").render;
    script.staticRenderFns = require("31bb3753619f6af5").staticRenderFns;
    script._scopeId = "data-v-e6db37";
    script.__cssModules = require("1df0eb6b1e888354").default;
    require("24c4e604f25fd292").default(script);
    script.__scopeId = "data-v-e6db37";
    script.__file = "menuFile.vue";
};
initialize();
exports.default = script;

},{"25cbf89c8b221a8b":"dIikB","31bb3753619f6af5":"3BHat","1df0eb6b1e888354":"8K259","24c4e604f25fd292":"fGeAW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIikB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "file",
        "index",
        "boolInShared"
    ],
    data () {
        return {};
    },
    methods: {
        download () {
            this.$emit("downloadFile", this.file, this.index);
        },
        remove () {
            this.$emit("removeFile", this.file, this.index);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BHat":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-menu", {
        attrs: {
            "md-direction": "top-end",
            "md-align-trigger": ""
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
        _c("md-menu-content", [
            _vm.file._info.model_type.get() != "Directory" ? _c("md-menu-item", {
                on: {
                    "click": _vm.download
                }
            }, [
                _vm._v("Download")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.boolInShared == true ? _c("md-menu-item", {
                on: {
                    "click": _vm.remove
                }
            }, [
                _vm._v("Remove")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8K259":[function() {},{}],"fGeAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kp5Sm":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "md-scrollbar urlBox"
    }, [
        _c("div", {
            staticClass: "filesPaddingPath"
        }, [
            _c("div", {
                staticClass: "sizeOfPathTab"
            }, _vm._l(_vm.pathTab, function(path, index) {
                return _c("span", {
                    key: index,
                    on: {
                        "click": function($event) {
                            return _vm.loadRoute(index);
                        }
                    }
                }, [
                    _vm._v("\n            " + _vm._s(path.name) + "\n         ")
                ]);
            }), 0),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-icon-button addURLButtonPanel",
                attrs: {
                    "disabled": !_vm.boolInShared
                },
                on: {
                    "click": function($event) {
                        _vm.activeAddDirectory = true;
                    }
                }
            }, [
                _c("i", {
                    staticClass: "material-icons iconPlusDocumentation"
                }, [
                    _vm._v("add_circle_outline")
                ])
            ])
        ], 1),
        _vm._v(" "),
        _vm.boolInShared == true ? _c("md-subheader", {
            staticClass: "hr-sect"
        }, [
            _vm._v("Local Files")
        ]) : _c("md-subheader", {
            staticClass: "hr-sect"
        }, [
            _vm._v("Shared Files")
        ]),
        _vm._v(" "),
        _vm.displayList.length != 0 ? _c("md-table", _vm._l(_vm.displayList, function(files, index) {
            return _c("md-table-row", {
                key: index,
                nativeOn: {
                    "dblclick": function($event) {
                        return _vm.enterInDirectory(files);
                    }
                }
            }, [
                _c("md-table-cell", [
                    _c("div", {
                        staticClass: "filesPaddingIcon"
                    }, [
                        _c("md-icon", [
                            _vm._v(_vm._s(_vm.getIconFile(files)))
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "sizeOfPathTab"
                        }, [
                            _vm._v(_vm._s(files.name.get()))
                        ])
                    ], 1)
                ]),
                _vm._v(" "),
                _c("md-table-cell", [
                    _c("menuFile", {
                        attrs: {
                            "file": files,
                            "boolInShared": _vm.boolInShared,
                            "index": index
                        },
                        on: {
                            "downloadFile": _vm.downloadFile,
                            "removeFile": _vm.removeFile
                        }
                    })
                ], 1)
            ], 1);
        }), 1) : _vm._e(),
        _vm._v(" "),
        _vm.boolInShared == true && !_vm.boolInDirectory && _vm.groupAttrDisplayList.length > 0 ? _c("div", [
            _c("md-subheader", {
                staticClass: "hr-sect"
            }, [
                _vm._v("Shared Files")
            ]),
            _vm._v(" "),
            _c("md-table", _vm._l(_vm.groupAttrDisplayList, function(group, index) {
                return _c("md-table-row", {
                    key: index,
                    nativeOn: {
                        "dblclick": function($event) {
                            return _vm.enterInDirectoryParent(group);
                        }
                    }
                }, [
                    _c("md-table-cell", [
                        _c("div", {
                            staticClass: "filesPaddingIcon"
                        }, [
                            _c("md-icon", [
                                _vm._v("folder")
                            ]),
                            _vm._v(" "),
                            _c("div", {
                                staticClass: "sizeOfPathTab"
                            }, [
                                _vm._v(_vm._s(group.groupName))
                            ])
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _c("md-table-cell")
                ], 1);
            }), 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("md-dialog", {
            staticClass: "fileUploadDialog",
            attrs: {
                "md-active": _vm.activeAddDirectory
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeAddDirectory = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeAddDirectory = $event;
                }
            }
        }, [
            _c("md-dialog-content", {
                staticClass: "dialogContent"
            }, [
                _c("md-tabs", {
                    staticClass: "dialogTabs",
                    attrs: {
                        "md-alignment": "fixed"
                    },
                    on: {
                        "md-changed": _vm.resetImportedFiles
                    }
                }, [
                    _c("md-tab", {
                        attrs: {
                            "md-label": "Upload"
                        }
                    }, [
                        _c("md-field", [
                            _c("md-file", {
                                attrs: {
                                    "multiple": ""
                                },
                                on: {
                                    "md-change": _vm.getFileImported
                                },
                                model: {
                                    value: _vm.multipleFile,
                                    callback: function($$v) {
                                        _vm.multipleFile = $$v;
                                    },
                                    expression: "multipleFile"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-tab", {
                        attrs: {
                            "md-label": "Drive"
                        }
                    }, [
                        _c("drive", {
                            on: {
                                "getFileImportedFromDrive": _vm.getFileImportedFromDrive
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
                            _vm.activeAddDirectory = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.saveFile
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5PIaX":[function() {},{}],"29GfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpVJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1999f1751102871f");
    if (script.__esModule) script = script.default;
    script.render = require("c44633fbc28487d0").render;
    script.staticRenderFns = require("c44633fbc28487d0").staticRenderFns;
    script._scopeId = "data-v-68ff72";
    script.__cssModules = require("9e76ff70e04276d").default;
    require("588edb7b2e629556").default(script);
    script.__scopeId = "data-v-68ff72";
    script.__file = "AttributesPanel.vue";
};
initialize();
exports.default = script;

},{"1999f1751102871f":"4ldND","c44633fbc28487d0":"iGzgQ","9e76ff70e04276d":"7DQpi","588edb7b2e629556":"9kUu8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ldND":[function(require,module,exports) {
//import Toasted from "vue-toasted";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _menuAttributesVue = require("./component/menuAttributes.vue");
var _menuAttributesVueDefault = parcelHelpers.interopDefault(_menuAttributesVue);
var _menuCategoryAttributesVue = require("./component/menuCategoryAttributes.vue");
var _menuCategoryAttributesVueDefault = parcelHelpers.interopDefault(_menuCategoryAttributesVue);
var _attributesImportVue = require("./component/attributesImport.vue");
var _attributesImportVueDefault = parcelHelpers.interopDefault(_attributesImportVue);
var _utilitiesJs = require("../../service/utilities.js");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
//Vue.use(Toasted);
let viewer;
var scriptExports = {
    name: "linkPanel",
    data () {
        return {
            activeDialogStatus: false,
            activeDialogCategory: false,
            label: undefined,
            value: undefined,
            categorySelected: undefined,
            categoryCreate: "none",
            category: undefined,
            categoryDisplayList: [],
            URLDisplayList: [],
            myBind: undefined,
            groupAttrDisplayList: [],
            myBindParent: undefined,
            parentListToBind: undefined
        };
    },
    components: {
        menuAttributes: (0, _menuAttributesVueDefault.default),
        menuCategoryAttributes: (0, _menuCategoryAttributesVueDefault.default),
        attributesImport: (0, _attributesImportVueDefault.default)
    },
    props: [
        "option",
        "parentGroup"
    ],
    methods: {
        // async selectAttributes(attr) {
        //   console.log("___________________________");
        //   serviceDocumentation
        //     .getCategoryByName(this.option.info, attr.nameCat)
        //     .then(async category => {
        //       console.log(category);
        //     });
        //   let category = await serviceDocumentation.addCategoryAttribute(
        //     this.option.info,
        //     "categoryName"
        //   );
        //   console.log(category);
        //   console.log("___________________________");
        // },
        editURLNode (attributes, urlChange) {
            attributes.label.set(urlChange.label);
            attributes.value.set(urlChange.value);
            this.resetBind();
        },
        removeURLNode (attributes, category) {
            for(let i = 0; i < category.element.length; i++){
                const element = category.element[i];
                if (element.label.get() == attributes.label.get()) category.element.splice(i, 1);
            }
        },
        editCategoryNode (category, change) {
            category.node.info.name.set(change.name);
        },
        removeCategoryNode (category) {
            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).removeNode(category.node);
        },
        getAttributesFromForge (attributes) {
            this.selectedAttributesForge = attributes;
        // get la list d'attributs depuis les attributes de forge
        },
        updatecategorySelected (categorySelected) {
            this.categorySelected = categorySelected;
        },
        async updateURLList () {
            if (this.option.info != undefined) this.categoryDisplayList = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(this.option.info);
        },
        async updateAttrParent () {
            this.groupAttrDisplayList = [];
            let json = {};
            for(let i = 0; i < this.parentGroup.length; i++){
                const node = this.parentGroup[i];
                if (node) {
                    json = {
                        groupName: node.info.name.get(),
                        groupAttr: await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(node)
                    };
                    this.groupAttrDisplayList.push(json);
                }
            }
        },
        getLstOfAttributes (cat) {
            let tab = [];
            if (cat.element != undefined) for(let i = 0; i < cat.element.length; i++){
                const element = cat.element[i];
                tab.push(element);
            }
            return tab;
        },
        async testAttributes () {
            if (this.categorySelected != undefined || this.categorySelected != "") {
                if (this.label == undefined || this.value == undefined) {
                    let cat = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(this.option.info, this.categorySelected);
                    for(let i = 0; i < this.selectedAttributesForge.length; i++){
                        const element = this.selectedAttributesForge[i];
                        (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(this.option.info, cat, element.displayName, element.displayValue);
                    }
                } else {
                    let label = this.label;
                    let value = this.value;
                    let cat = await (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategoryByName(this.option.info, this.categorySelected);
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategory(this.option.info, cat, this.label, this.value);
                }
            } else console.log("error");
        },
        async addAttributes () {
            if (this.option.exist == false) window.spinal.ForgeViewer.viewer.model.getProperties(this.option.dbid, async (res)=>{
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(this.option.dbid, res.name, this.option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(this.option.dbid, this.option.model3d);
                    this.option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                await this.testAttributes();
                this.resetAttributes();
                this.resetBind();
            });
            else {
                await this.testAttributes();
                this.resetAttributes();
            }
            // on check si les attributs viennent de forge ou on créer un attributs
            // viewer.model.getProperties(this.option.dbid, function(res) {
            //   let option = utilities.addAttributes(
            //     _this.option,
            //     res.name,
            //     label,
            //     value
            //   );
            //   option.then(option => {
            //     if (_this.option.exist == false) {
            //       _this.option.exist = true;
            //       _this.$emit("updateMyBIMObject", option);
            //     }
            //   });
            // });
            // this.label = undefined;
            // this.value = undefined;
            // this.categorySelected = undefined;
            this.activeDialogStatus = false;
        },
        checkCategory () {
            if (this.category != undefined && this.category != "") {
                (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addCategoryAttribute(this.option.info, this.category);
                this.category = "";
            }
        },
        addCategory () {
            let _this = this;
            if (this.option.exist) this.checkCategory();
            else // create bim object before add note
            if (this.option.dbid != undefined) window.spinal.ForgeViewer.viewer.model.getProperties(this.option.dbid, async (res)=>{
                let boolIsCreated = await window.spinal.BimObjectService.createBIMObject(_this.option.dbid, res.name, _this.option.model3d);
                if (boolIsCreated) {
                    let bimObject = await window.spinal.BimObjectService.getBIMObject(_this.option.dbid, _this.option.model3d);
                    _this.option.info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(bimObject.id);
                }
                _this.option.exist = true;
                _this.$emit("updateMyBIMObject", this.option);
                _this.checkCategory();
                _this.resetBind();
            });
            // this.category = "";
            this.activeDialogCategory = false;
        },
        resetAttributes () {
            this.label = undefined;
            this.value = undefined;
            this.categorySelected = undefined;
            this.selectedAttributesForge = undefined;
        },
        resetBind () {
            if (this.option.info != undefined) {
                if (this.option != undefined) {
                    if (this.myBind != undefined) {
                        this.option.info.unbind(this.myBind);
                        this.myBind = undefined;
                    }
                    if (this.myBind == undefined) this.myBind = this.option.info.bind(this.updateURLList.bind(this));
                }
            }
        },
        resetBindParent () {
            // j'ai la liste de tous les node parent
            if (this.parentListToBind == undefined) this.parentListToBind = new Lst();
            if (!this.parentListToBind.length == this.parentGroup.length) {
                this.parentListToBind.splice(0, this.parentListToBind.length);
                for(let i = 0; i < this.parentGroup.length; i++){
                    const element = this.parentGroup[i];
                    this.parentListToBind.push(element);
                }
            }
            if (this.myBindParent == undefined) this.parentListToBind.bind(this.updateAttrParent.bind(this));
        }
    },
    mounted () {
        viewer = window.spinal.ForgeViewer.viewer;
        this.resetBind();
        this.resetBindParent();
    },
    watch: {
        option: function() {
            this.resetBind();
        },
        parentGroup: function() {
            this.resetBindParent();
        }
    },
    beforeDestroy () {
        if (this.option.info != undefined && this.myBind != undefined) this.option.info.unbind(this.myBind);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue":"gt5MM","spinal-env-viewer-plugin-documentation-service":"5rYVR","./component/menuAttributes.vue":"lS9le","./component/menuCategoryAttributes.vue":"kTkE2","./component/attributesImport.vue":"b7uCc","../../service/utilities.js":"5Qpl3","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS9le":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("46af9df0cea8e59c");
    if (script.__esModule) script = script.default;
    script.render = require("2d056e37131aa9b0").render;
    script.staticRenderFns = require("2d056e37131aa9b0").staticRenderFns;
    script._scopeId = "data-v-2b2120";
    script.__cssModules = require("e18dfeb72c197351").default;
    require("3f69a66644ba376f").default(script);
    script.__scopeId = "data-v-2b2120";
    script.__file = "menuAttributes.vue";
};
initialize();
exports.default = script;

},{"46af9df0cea8e59c":"9sYjA","2d056e37131aa9b0":"9hEpV","e18dfeb72c197351":"1QvwG","3f69a66644ba376f":"7c2xO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sYjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "url",
        "category"
    ],
    data () {
        return {
            activeEditAttributesNode: false,
            urlChange: {
                label: "",
                URL: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editURLNode", this.url, this.urlChange);
            this.activeEditAttributesNode = false;
        },
        remove () {
            this.$emit("removeURLNode", this.url, this.category);
        }
    },
    mounted () {
        if (this.url !== undefined) {
            this.urlChange.label = this.url.label.get();
            this.urlChange.value = this.url.value.get();
        }
    },
    watch: {
        activeEditAttributesNode () {
            if (this.activeEditAttributesNode) {
                if (this.url !== undefined) {
                    this.urlChange.label = this.url.label.get();
                    this.urlChange.value = this.url.value.get();
                }
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hEpV":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-menu", {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
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
            _c("md-menu-content", [
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit\n      ")
                ]),
                _vm._v(" "),
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            attrs: {
                "md-active": _vm.activeEditAttributesNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditAttributesNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditAttributesNode = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Edit Attribute")
            ]),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.urlChange.label,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "label", $$v);
                        },
                        expression: "urlChange.label"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("Link")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.urlChange.value,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "value", $$v);
                        },
                        expression: "urlChange.value"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-dialog-actions", [
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1QvwG":[function() {},{}],"7c2xO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTkE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cac4cc166fc37998");
    if (script.__esModule) script = script.default;
    script.render = require("d5dd34f5d136e608").render;
    script.staticRenderFns = require("d5dd34f5d136e608").staticRenderFns;
    script._scopeId = "data-v-a367d9";
    script.__cssModules = require("f79be5066499e615").default;
    require("66da6889ba18ce42").default(script);
    script.__scopeId = "data-v-a367d9";
    script.__file = "menuCategoryAttributes.vue";
};
initialize();
exports.default = script;

},{"cac4cc166fc37998":"aJmAZ","d5dd34f5d136e608":"26kqw","f79be5066499e615":"hueKG","66da6889ba18ce42":"hOoVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJmAZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "my_compo",
    props: [
        "category"
    ],
    data () {
        return {
            activeEditAttributesNode: false,
            urlChange: {
                name: ""
            }
        };
    },
    methods: {
        edit () {
            this.$emit("editCategoryNode", this.category, this.urlChange);
            this.activeEditAttributesNode = false;
        },
        remove () {
            this.$emit("removeCategoryNode", this.category);
        }
    },
    mounted () {
        if (this.category !== undefined) this.urlChange.name = this.category.node.info.name.get();
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26kqw":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-menu", {
            attrs: {
                "md-direction": "top-end",
                "md-align-trigger": ""
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
            _c("md-menu-content", [
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = true;
                        }
                    }
                }, [
                    _vm._v("Edit")
                ]),
                _vm._v(" "),
                _c("md-menu-item", {
                    on: {
                        "click": function($event) {
                            return _vm.remove();
                        }
                    }
                }, [
                    _vm._v("Remove")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            attrs: {
                "md-active": _vm.activeEditAttributesNode
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeEditAttributesNode = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeEditAttributesNode = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Edit Category")
            ]),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("Label")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.urlChange.name,
                        callback: function($$v) {
                            _vm.$set(_vm.urlChange, "name", $$v);
                        },
                        expression: "urlChange.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-dialog-actions", [
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeEditAttributesNode = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.edit
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hueKG":[function() {},{}],"hOoVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7uCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("af9148c8766b9d92");
    if (script.__esModule) script = script.default;
    script.render = require("3ee21312686b29dd").render;
    script.staticRenderFns = require("3ee21312686b29dd").staticRenderFns;
    script._scopeId = "data-v-6b17a3";
    require("33e377b78afec183").default(script);
    script.__scopeId = "data-v-6b17a3";
    script.__file = "attributesImport.vue";
};
initialize();
exports.default = script;

},{"af9148c8766b9d92":"c0lsP","3ee21312686b29dd":"eq6cD","33e377b78afec183":"1E0l2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0lsP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "addGroup",
    data () {
        return {
            categorySelected: undefined,
            selectedAttributesTab: [],
            propertiesTab: [],
            displayAttributesList: []
        };
    },
    components: {},
    props: [
        "option",
        "categoryDisplayList"
    ],
    methods: {
        async benef () {
            // console.log(this.option);
            this.selectedNode = this.option.info;
            if (this.option.dbid) this.dbid = this.option.dbid;
            else if (this.option.info.info.type.get() == "BIMObject") this.dbid = this.option.info.info.dbid.get();
            this.exist = this.option.exist;
            this.propertiesTab = await this.promiseGetPorperties(this.dbid);
            // console.log(propertiesTab);
            this.updateDisplayAttributesList();
        },
        updateDisplayAttributesList () {
            this.displayAttributesList = [];
            for(let i = 0; i < this.propertiesTab.properties.length; i++){
                const forgeAttributes = this.propertiesTab.properties[i];
                this.displayAttributesList.push(forgeAttributes);
            }
        },
        updatecategorySelected () {
            this.$emit("updatecategorySelected", this.categorySelected);
        },
        onSelectAttribute (items) {
            this.$emit("getAttributesFromForge", items);
        },
        promiseGetPorperties (dbId) {
            return new Promise((resolve)=>{
                window.spinal.ForgeViewer.viewer.model.getProperties(dbId, resolve);
            });
        }
    },
    mounted () {
        this.categorySelected = undefined;
        this.benef();
    },
    watch: {
        categorySelected: function() {
            this.updatecategorySelected();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eq6cD":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "md-scrollbar",
        staticStyle: {
            "box-sizing": "border-box",
            "overflow-y": "auto",
            "height": "40vh"
        }
    }, [
        _c("div", {
            staticClass: "md-layout-item"
        }, [
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }
            }, [
                _c("md-select", {
                    attrs: {
                        "md-selected": _vm.updatecategorySelected,
                        "name": "category",
                        "id": "category",
                        "placeholder": "category"
                    },
                    model: {
                        value: _vm.categorySelected,
                        callback: function($$v) {
                            _vm.categorySelected = $$v;
                        },
                        expression: "categorySelected"
                    }
                }, _vm._l(_vm.categoryDisplayList, function(category, index) {
                    return _c("md-option", {
                        key: index,
                        attrs: {
                            "value": category.node.info.name.get()
                        }
                    }, [
                        _vm._v(_vm._s(category.node.info.name.get()))
                    ]);
                }), 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", [
            _c("md-table", {
                attrs: {
                    "md-card": ""
                },
                on: {
                    "md-selected": _vm.onSelectAttribute
                },
                scopedSlots: _vm._u([
                    {
                        key: "md-table-row",
                        fn: function(ref) {
                            var forgeAttributes = ref.item;
                            return _c("md-table-row", {
                                staticClass: "myRowStyle",
                                attrs: {
                                    "md-auto-select": "",
                                    "md-selectable": "multiple"
                                }
                            }, [
                                _c("md-table-cell", [
                                    _c("span", {
                                        staticClass: "md-list-item-text"
                                    }, [
                                        _vm._v(_vm._s(forgeAttributes.attributeName))
                                    ])
                                ]),
                                _vm._v(" "),
                                _c("md-table-cell", [
                                    _c("span", {
                                        staticClass: "md-list-item-text"
                                    }, [
                                        _vm._v(_vm._s(forgeAttributes.displayValue))
                                    ])
                                ])
                            ], 1);
                        }
                    }
                ]),
                model: {
                    value: _vm.displayAttributesList,
                    callback: function($$v) {
                        _vm.displayAttributesList = $$v;
                    },
                    expression: "displayAttributesList"
                }
            })
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1E0l2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGzgQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "container-link urlBox"
    }, [
        _c("div", [
            _c("md-button", {
                staticClass: "attributesButtonPanel",
                on: {
                    "click": function($event) {
                        _vm.activeDialogCategory = true;
                    }
                }
            }, [
                _vm._v("\n         ADD CATEGORY\n      ")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "attributesButtonPanel",
                on: {
                    "click": function($event) {
                        _vm.activeDialogStatus = true;
                    }
                }
            }, [
                _vm._v("\n         ADD ATTRIBUTES\n      ")
            ]),
            _vm._v(" "),
            _c("md-subheader", {
                staticClass: "hr-sect"
            }, [
                _vm._v("Local Attributes")
            ]),
            _vm._v(" "),
            _c("md-list", {
                staticClass: "widthOfList"
            }, _vm._l(_vm.categoryDisplayList, function(cat) {
                return _c("md-list-item", {
                    key: cat.nameCat,
                    staticClass: "colorForCategory",
                    attrs: {
                        "md-expand": ""
                    }
                }, [
                    _c("span", {
                        staticClass: "nameOfCategory md-list-item-text"
                    }, [
                        _vm._v(_vm._s(cat.nameCat))
                    ]),
                    _vm._v(" "),
                    _c("menuCategoryAttributes", {
                        staticClass: "buttonRight",
                        attrs: {
                            "category": cat
                        },
                        on: {
                            "editCategoryNode": _vm.editCategoryNode,
                            "removeCategoryNode": _vm.removeCategoryNode
                        }
                    }),
                    _vm._v(" "),
                    _c("md-list", {
                        staticClass: "unsetPadding",
                        attrs: {
                            "slot": "md-expand"
                        },
                        slot: "md-expand"
                    }, _vm._l(_vm.getLstOfAttributes(cat), function(attributess, index) {
                        return _c("md-list-item", {
                            key: index,
                            staticClass: "md-inset"
                        }, [
                            _c("span", {
                                staticStyle: {
                                    "width": "40%"
                                }
                            }, [
                                _vm._v(_vm._s(attributess.label.get()))
                            ]),
                            _vm._v(" "),
                            _c("span", {
                                staticStyle: {
                                    "width": "40%"
                                }
                            }, [
                                _vm._v(_vm._s(attributess.value.get()))
                            ]),
                            _vm._v(" "),
                            _c("menu-attributes", {
                                attrs: {
                                    "url": attributess,
                                    "category": cat
                                },
                                on: {
                                    "editURLNode": _vm.editURLNode,
                                    "removeURLNode": _vm.removeURLNode
                                }
                            })
                        ], 1);
                    }), 1)
                ], 1);
            }), 1),
            _vm._v(" "),
            _vm.groupAttrDisplayList.length > 0 ? _c("div", [
                _c("md-subheader", {
                    staticClass: "hr-sect"
                }, [
                    _vm._v("Shared Attributes")
                ]),
                _vm._v(" "),
                _vm._l(_vm.groupAttrDisplayList, function(group) {
                    return _c("md-list", {
                        key: group.groupName,
                        staticClass: "widthOfList"
                    }, [
                        _c("md-subheader", {
                            staticClass: "sharedCategoryCss"
                        }, [
                            _vm._v(_vm._s(group.groupName) + "\n            ")
                        ]),
                        _vm._v(" "),
                        _vm._l(group.groupAttr, function(cat) {
                            return _c("md-list-item", {
                                key: cat.nameCat,
                                staticClass: "colorForCategory",
                                attrs: {
                                    "md-expand": ""
                                }
                            }, [
                                _c("span", {
                                    staticClass: "nameOfCategory md-list-item-text"
                                }, [
                                    _vm._v(_vm._s(cat.nameCat))
                                ]),
                                _vm._v(" "),
                                _c("md-list", {
                                    staticClass: "unsetPadding",
                                    attrs: {
                                        "slot": "md-expand"
                                    },
                                    slot: "md-expand"
                                }, _vm._l(_vm.getLstOfAttributes(cat), function(attributess, index) {
                                    return _c("md-list-item", {
                                        key: index,
                                        staticClass: "md-inset"
                                    }, [
                                        _c("span", {
                                            staticStyle: {
                                                "width": "40%"
                                            }
                                        }, [
                                            _vm._v(_vm._s(attributess.label.get()))
                                        ]),
                                        _vm._v(" "),
                                        _c("span", {
                                            staticStyle: {
                                                "width": "40%"
                                            }
                                        }, [
                                            _vm._v(_vm._s(attributess.value.get()))
                                        ])
                                    ]);
                                }), 1)
                            ], 1);
                        })
                    ], 2);
                })
            ], 2) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            staticClass: "spinal-dialog-add-attr",
            attrs: {
                "md-active": _vm.activeDialogStatus
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeDialogStatus = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeDialogStatus = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Add Attributes")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", {
                staticClass: "attributeDialogContent"
            }, [
                _c("md-tabs", {
                    staticClass: "dialogTabs",
                    attrs: {
                        "md-alignment": "fixed"
                    },
                    on: {
                        "md-changed": _vm.resetAttributes
                    }
                }, [
                    _c("md-tab", {
                        attrs: {
                            "md-label": "Create"
                        }
                    }, [
                        _c("md-field", [
                            _c("md-select", {
                                attrs: {
                                    "name": "category",
                                    "id": "category",
                                    "placeholder": "category"
                                },
                                model: {
                                    value: _vm.categorySelected,
                                    callback: function($$v) {
                                        _vm.categorySelected = $$v;
                                    },
                                    expression: "categorySelected"
                                }
                            }, _vm._l(_vm.categoryDisplayList, function(category, index) {
                                return _c("md-option", {
                                    key: index,
                                    attrs: {
                                        "value": category.node.info.name.get()
                                    }
                                }, [
                                    _vm._v("\n                        " + _vm._s(category.node.info.name.get()))
                                ]);
                            }), 1)
                        ], 1),
                        _vm._v(" "),
                        _c("md-field", {
                            attrs: {
                                "md-inline": ""
                            }
                        }, [
                            _c("label", [
                                _vm._v("Label")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.label,
                                    callback: function($$v) {
                                        _vm.label = $$v;
                                    },
                                    expression: "label"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("md-field", {
                            attrs: {
                                "md-inline": ""
                            }
                        }, [
                            _c("label", [
                                _vm._v("Value")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.value,
                                    callback: function($$v) {
                                        _vm.value = $$v;
                                    },
                                    expression: "value"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-tab", {
                        attrs: {
                            "md-label": "Import"
                        }
                    }, [
                        _c("attributesImport", {
                            attrs: {
                                "option": _vm.option,
                                "categoryDisplayList": _vm.categoryDisplayList
                            },
                            on: {
                                "getAttributesFromForge": _vm.getAttributesFromForge,
                                "updatecategorySelected": _vm.updatecategorySelected
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
                            _vm.activeDialogStatus = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addAttributes
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-dialog", {
            attrs: {
                "md-active": _vm.activeDialogCategory
            },
            on: {
                "update:mdActive": function($event) {
                    _vm.activeDialogCategory = $event;
                },
                "update:md-active": function($event) {
                    _vm.activeDialogCategory = $event;
                }
            }
        }, [
            _c("md-dialog-title", [
                _vm._v("Add Category")
            ]),
            _vm._v(" "),
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("category")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.category,
                        callback: function($$v) {
                            _vm.category = $$v;
                        },
                        expression: "category"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-dialog-actions", [
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": function($event) {
                            _vm.activeDialogCategory = false;
                        }
                    }
                }, [
                    _vm._v("Close")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-primary",
                    on: {
                        "click": _vm.addCategory
                    }
                }, [
                    _vm._v("Save")
                ])
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7DQpi":[function() {},{}],"9kUu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OxcQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "containerCDE"
    }, [
        _c("md-toolbar", {
            staticClass: "md-layout md-gutter headerCDE",
            attrs: {
                "layout-align": "center center"
            }
        }, [
            _vm.selectedNode !== undefined ? _c("div", {
                staticClass: "centerSelectedNodeName"
            }, [
                _vm._v(_vm._s(_vm.selectedNode.info.name.get()))
            ]) : _c("div", {
                staticClass: "centerSelectedNodeName"
            }, [
                _vm._v("BIM Object not created")
            ])
        ]),
        _vm._v(" "),
        _c("md-toolbar", {
            staticClass: "md-layout md-gutter headerCDE",
            attrs: {
                "layout": "row",
                "layout-align": "center center"
            }
        }, [
            _c("md-button", {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(0),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 0;
                    }
                }
            }, [
                _vm._v("Files")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(1),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 1;
                    }
                }
            }, [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-layout-item toolbarButton",
                style: _vm.activeTabColor(2),
                on: {
                    "click": function($event) {
                        _vm.activeTab = 2;
                    }
                }
            }, [
                _vm._v("Attributes")
            ])
        ], 1),
        _vm._v(" "),
        _c("transition", {
            attrs: {
                "name": "changeTabDocumentation"
            }
        }, [
            _vm.activeTab == 0 ? _c("filepanel", {
                attrs: {
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "selectedNode": _vm.selectedNode,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            }) : _vm.activeTab == 1 ? _c("urlpanel", {
                attrs: {
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "selectedNode": _vm.selectedNode,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            }) : _c("attributespanel", {
                attrs: {
                    "selectedNode": _vm.selectedNode,
                    "option": _vm.option,
                    "parentGroup": _vm.parentGroup,
                    "dbid": _vm.dbid
                },
                on: {
                    "updateMyBIMObject": _vm.updateSelectedBIMObject
                }
            })
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3nWSi":[function() {},{}],"dkQPZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TsHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b610eca7904d4b64");
    if (script.__esModule) script = script.default;
    script.render = require("f4bea1f5ab292e0d").render;
    script.staticRenderFns = require("f4bea1f5ab292e0d").staticRenderFns;
    script._scopeId = "data-v-49f689";
    script.__cssModules = require("5bdc32c9703fb274").default;
    require("4d12c400f372a566").default(script);
    script.__scopeId = "data-v-49f689";
    script.__file = "attributesRightClick.vue";
};
initialize();
exports.default = script;

},{"b610eca7904d4b64":"gXmab","f4bea1f5ab292e0d":"hKCHb","5bdc32c9703fb274":"dMSzs","4d12c400f372a566":"laMge","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXmab":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            allCategory: [],
            categorySelected: "none",
            label: undefined,
            value: undefined,
            categoryCreate: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        addAttributes () {
            let myCategoerySelected = this.categorySelected;
            if (myCategoerySelected === "none") myCategoerySelected = this.categoryCreate;
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategoryName(myBIMObject, myCategoerySelected, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    // console.log("bim object exist");
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addAttributeByCategoryName(node, myCategoerySelected, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
            this.allCategory = objet.category;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"ji3fq","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji3fq":[function(require,module,exports) {
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

},{"e30868c801f59ada":"2uyD7"}],"hKCHb":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "unsetBackgroundContent"
    }, [
        _c("md-button", {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "md-layout-item"
        }, [
            _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }
            }, [
                _c("md-select", {
                    attrs: {
                        "name": "category",
                        "id": "category",
                        "placeholder": "category"
                    },
                    model: {
                        value: _vm.categorySelected,
                        callback: function($$v) {
                            _vm.categorySelected = $$v;
                        },
                        expression: "categorySelected"
                    }
                }, [
                    _c("md-option", {
                        attrs: {
                            "value": "none"
                        }
                    }, [
                        _vm._v("Create Category")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.allCategory, function(category, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": category.node.info.name.get()
                            }
                        }, [
                            _vm._v(_vm._s(category.node.info.name.get()))
                        ]);
                    })
                ], 2)
            ], 1),
            _vm._v(" "),
            _vm.categorySelected === "none" ? _c("md-field", {
                staticStyle: {
                    "width": "80%",
                    "margin-left": "auto",
                    "margin-right": "auto"
                },
                attrs: {
                    "md-inline": ""
                }
            }, [
                _c("label", [
                    _vm._v("category")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.categoryCreate,
                        callback: function($$v) {
                            _vm.categoryCreate = $$v;
                        },
                        expression: "categoryCreate"
                    }
                })
            ], 1) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("Value")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-primary",
            on: {
                "click": _vm.addAttributes
            }
        }, [
            _vm._v("Save")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dMSzs":[function() {},{}],"laMge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apfso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5704270707721d4d");
    if (script.__esModule) script = script.default;
    script.render = require("1045a97a6aaa5ec2").render;
    script.staticRenderFns = require("1045a97a6aaa5ec2").staticRenderFns;
    script._scopeId = "data-v-728be4";
    script.__cssModules = require("8c96895a826e33cd").default;
    require("2ab6c443c5f18049").default(script);
    script.__scopeId = "data-v-728be4";
    script.__file = "deleteUrlRightClick.vue";
};
initialize();
exports.default = script;

},{"5704270707721d4d":"65VrK","1045a97a6aaa5ec2":"17oIv","8c96895a826e33cd":"hWGfp","2ab6c443c5f18049":"eXGaX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65VrK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            label: undefined,
            value: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        deleteURL () {
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) ;
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).deleteURL(node, this.label);
                });
            });
        },
        editURL () {},
        addURL () {
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(myBIMObject, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(node, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"ji3fq","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17oIv":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "unsetBackgroundContent"
    }, [
        _c("md-button", {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-primary",
            on: {
                "click": _vm.editURL
            }
        }, [
            _vm._v("Edit")
        ]),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-primary",
            on: {
                "click": _vm.deleteURL
            }
        }, [
            _vm._v("Delete")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hWGfp":[function() {},{}],"eXGaX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Q5qT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d8d3207de02eb5a0");
    if (script.__esModule) script = script.default;
    script.render = require("728767cea8b96fd8").render;
    script.staticRenderFns = require("728767cea8b96fd8").staticRenderFns;
    script._scopeId = "data-v-a73044";
    script.__cssModules = require("544ed10279a9db05").default;
    require("443bb050b55fd38f").default(script);
    script.__scopeId = "data-v-a73044";
    script.__file = "urlRightClick.vue";
};
initialize();
exports.default = script;

},{"d8d3207de02eb5a0":"8yoFz","728767cea8b96fd8":"cV79Z","544ed10279a9db05":"biaZV","443bb050b55fd38f":"dcl2R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yoFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var scriptExports = {
    name: "my_compo",
    data () {
        return {
            selectedDbidArray: [],
            label: undefined,
            value: undefined,
            categoryCreate: undefined
        };
    },
    components: {},
    methods: {
        forgeSelection () {
            this.viewer.select(this.selectedDbidArray);
        },
        addURL () {
            let myCategoerySelected = this.categorySelected;
            this.selectedDbidArray.forEach((dbid)=>{
                (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(dbid).then((node)=>{
                    if (node === undefined) // bimobject is not create, we create it
                    // console.log("create bim object");
                    window.spinal.ForgeViewer.viewer.model.getProperties(dbid, (res)=>{
                        (0, _spinalEnvViewerPluginBimobjectserviceDefault.default).createBIMObject(dbid, res.name).then((myBIMObject)=>{
                            (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(myBIMObject, this.label, this.value);
                        });
                    });
                    else // bim object is created, node is our bim object
                    (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).addURL(node, this.label, this.value);
                });
            });
        },
        opened (objet, viewer) {
            this.viewer = viewer;
            this.selectedDbidArray = objet.dbid;
        },
        removed (option, viewer) {},
        closed (option, viewer) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-bimobjectservice":"ji3fq","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cV79Z":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "unsetBackgroundContent"
    }, [
        _c("md-button", {
            on: {
                "click": _vm.forgeSelection
            }
        }, [
            _vm._v("\n    " + _vm._s(_vm.selectedDbidArray.length) + " Selected Object\n  ")
        ]),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("Label")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.label,
                    callback: function($$v) {
                        _vm.label = $$v;
                    },
                    expression: "label"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-field", {
            staticStyle: {
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto"
            },
            attrs: {
                "md-inline": ""
            }
        }, [
            _c("label", [
                _vm._v("URL")
            ]),
            _vm._v(" "),
            _c("md-input", {
                model: {
                    value: _vm.value,
                    callback: function($$v) {
                        _vm.value = $$v;
                    },
                    expression: "value"
                }
            })
        ], 1),
        _vm._v(" "),
        _c("md-button", {
            staticClass: "md-primary",
            on: {
                "click": _vm.addURL
            }
        }, [
            _vm._v("Save")
        ])
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"biaZV":[function() {},{}],"dcl2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTlUn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginBimobjectservice = require("spinal-env-viewer-plugin-bimobjectservice");
var _spinalEnvViewerPluginBimobjectserviceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginBimobjectservice);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
exports.default = {
    getAllLeafDbIds (rootDbid) {
        const tree = this.getInstanceTree();
        const rootId = tree.getRootId();
        let dbidList = [];
        let tmp = [];
        for(let i = 0; i < rootDbid.length; i++){
            const element = rootDbid[i];
            tmp = this.getLeafDbIds(element);
            dbidList = dbidList.concat(tmp);
        // console.log(tmp);
        // console.log(dbidList);
        }
        return dbidList;
    },
    getInstanceTree () {
        const model = window.spinal.ForgeViewer.viewer.model;
        const tree = model.getData().instanceTree;
        return tree;
    },
    getLeafDbIds (rootId) {
        const tree = this.getInstanceTree();
        const queue = [
            rootId
        ];
        const dbIds = [];
        let hasChildren;
        while(queue.length){
            let id = queue.shift();
            hasChildren = false;
            tree.enumNodeChildren(id, (childId)=>{
                hasChildren = true;
                queue.push(childId);
            });
            if (!hasChildren) dbIds.push(id);
        }
        return dbIds;
    },
    getAllCategoryByDbidArray (allChildDbid) {
        let promiseCategory = [];
        let allCategory = [];
        for(let i = 0; i < allChildDbid.length; i++){
            const element = allChildDbid[i];
            promiseCategory.push((0, _spinalEnvViewerPluginBimobjectserviceDefault.default).getBIMObject(element).then((node)=>{
                // console.log(node);
                if (node instanceof (0, _spinalEnvViewerGraphService.SpinalNode)) return (0, _spinalEnvViewerPluginDocumentationService.serviceDocumentation).getCategory(node);
                return undefined;
            }));
        }
        return Promise.all(promiseCategory).then((res)=>{
            let check = true;
            const result = res.filter((node)=>node !== undefined);
            result.forEach((dbid)=>{
                dbid.forEach((cat)=>{
                    allCategory.forEach((alreadyAdded)=>{
                        if (alreadyAdded.node.info.name.get() === cat.node.info.name.get()) check = false;
                    });
                    if (check) allCategory.push(cat);
                    check = true;
                });
            });
            return allCategory;
        });
    }
};

},{"spinal-env-viewer-plugin-bimobjectservice":"ji3fq","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-documentation-service":"5rYVR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-documentation.b77f57cc.js.map
