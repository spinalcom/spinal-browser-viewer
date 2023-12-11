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
})({"6T9JG":[function(require,module,exports) {
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vues/dialogs");
var _panels = require("./src/vues/panels");

},{"./src/buttons":"lQuuX","./src/vues/dialogs":"2ugAE","./src/vues/panels":"8CRb0"}],"lQuuX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnalytic", ()=>(0, _createAnalyticDefault.default));
parcelHelpers.export(exports, "linkGroupToAnalytic", ()=>(0, _linkGroupToAnalyticDefault.default));
var _createAnalytic = require("./createAnalytic");
var _createAnalyticDefault = parcelHelpers.interopDefault(_createAnalytic);
var _linkGroupToAnalytic = require("./linkGroupToAnalytic");
var _linkGroupToAnalyticDefault = parcelHelpers.interopDefault(_linkGroupToAnalytic);

},{"./createAnalytic":"jImzS","./linkGroupToAnalytic":"2vjuD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jImzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPluginAnalyticsService = require("spinal-env-viewer-plugin-analytics-service");
const { spinalPanelManagerService } = require("6890588345b654a9");
const SIDEBAR = "GraphManagerSideBar";
class CreateAnalytics extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Analytics", "Create Analytics", {
            icon: "equalizer",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const id = option.selectedNode.id.get();
        const isAnalyticGroup = (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).isAnalyticGroup(id);
        return Promise.resolve(isAnalyticGroup ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("createAnalyticDialog", option);
    }
}
const createAnalytics = new CreateAnalytics();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createAnalytics, [
    3
]);
exports.default = createAnalytics;

},{"spinal-env-viewer-context-menu-service":"kHlxv","6890588345b654a9":"7Uw4d","spinal-env-viewer-plugin-analytics-service":"74iWe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"2vjuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPluginAnalyticsService = require("spinal-env-viewer-plugin-analytics-service");
const { spinalPanelManagerService } = require("5abf2e72a50603a5");
const SIDEBAR = "GraphManagerSideBar";
class LinkGroupToAnalytic extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Link Group to Analytics", "Link Group to Analytics", {
            icon: "equalizer",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const isAnalytic = type === (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).nodeType;
        return Promise.resolve(isAnalytic ? true : -1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("linkGroupToAnalyticsPanel", {
            analyticId: option.selectedNode.id.get(),
            contextId: option.context.id.get(),
            childrenType: option.selectedNode.childrenType.get()
        });
    }
}
const linkGroupToAnalytic = new LinkGroupToAnalytic();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkGroupToAnalytic, [
    3
]);
exports.default = linkGroupToAnalytic;

},{"spinal-env-viewer-context-menu-service":"kHlxv","5abf2e72a50603a5":"7Uw4d","spinal-env-viewer-plugin-analytics-service":"74iWe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ugAE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createAnalyticVue = require("./createAnalytic.vue");
var _createAnalyticVueDefault = parcelHelpers.interopDefault(_createAnalyticVue);
const { SpinalMountExtention } = require("3092fdf9a70b6be");
const dialogs = [
    {
        name: "createAnalyticDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createAnalyticVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","3092fdf9a70b6be":"7Uw4d","./createAnalytic.vue":"d8ian","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8ian":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("be3363e37c91cf4f");
    if (script.__esModule) script = script.default;
    script.render = require("b9c052406251d0e6").render;
    script.staticRenderFns = require("b9c052406251d0e6").staticRenderFns;
    script._scopeId = "data-v-7d1815";
    script.__cssModules = require("79ecbcb171d6977a").default;
    require("c4f7bb6ec84ec4ee").default(script);
    script.__scopeId = "data-v-7d1815";
    script.__file = "createAnalytic.vue";
};
initialize();
exports.default = script;

},{"be3363e37c91cf4f":"6lB3g","b9c052406251d0e6":"k3Ldb","79ecbcb171d6977a":"avspP","c4f7bb6ec84ec4ee":"kB05w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lB3g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginAnalyticsService = require("spinal-env-viewer-plugin-analytics-service");
var _types = require("../../js/types");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        this.types = (0, _types.TYPES);
        this.contextId;
        this.groupId;
        return {
            showDialog: true,
            analytic: {
                name: "",
                description: "",
                childrenType: undefined
            }
        };
    },
    methods: {
        opened (option) {
            this.contextId = option.context.id.get();
            this.groupId = option.selectedNode.id.get();
        },
        removed (option) {
            if (option) (0, _spinalEnvViewerPluginAnalyticsService.spinalAnalyticService).createAndLinkAnalytic(this.contextId, this.groupId, this.analytic);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disabled () {
            return this.analytic.name.length === 0 || typeof this.analytic.childrenType === "undefined";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-analytics-service":"74iWe","../../js/types":"bEpHy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEpHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TYPES", ()=>TYPES);
var _constants = require("spinal-env-viewer-context-geographic-service/build/constants");
const TYPES = Object.freeze([
    {
        title: "Site Group's Analytic",
        type: (0, _constants.SITE_TYPE)
    },
    {
        title: "Building Group's Analytic",
        type: (0, _constants.BUILDING_TYPE)
    },
    {
        title: "Floor Group's Analytic",
        type: (0, _constants.FLOOR_TYPE)
    },
    {
        title: "Zone Group's Analytic",
        type: (0, _constants.ZONE_TYPE)
    },
    {
        title: "Room Group's Analytic",
        type: (0, _constants.ROOM_TYPE)
    },
    {
        title: "Equipement Group's Analytic",
        type: (0, _constants.EQUIPMENT_TYPE)
    }
]);

},{"spinal-env-viewer-context-geographic-service/build/constants":"eV0id","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eV0id":[function(require,module,exports) {
"use strict";
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
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REFERENCE_ROOM_RELATION = exports.ROOM_REFERENCE_CONTEXT = exports.ZONE_REFERENCE_CONTEXT = exports.FLOOR_REFERENCE_CONTEXT = exports.BUILDING_REFERENCE_CONTEXT = exports.SITE_REFERENCE_CONTEXT = exports.REFERENCE_RELATION = exports.REFERENCE_TYPE = exports.MAP_RELATION_TYPE = exports.MAP_TYPE_RELATION = exports.GEOGRAPHIC_RELATIONS_ORDER = exports.EQUIPMENT_RELATION = exports.GEOGRAPHIC_RELATIONS = exports.ROOM_RELATION = exports.ZONE_RELATION = exports.FLOOR_RELATION = exports.BUILDING_RELATION = exports.SITE_RELATION = exports.GEOGRAPHIC_TYPES_ORDER = exports.EQUIPMENT_TYPE = exports.GEOGRAPHIC_TYPES = exports.ROOM_TYPE = exports.ZONE_TYPE = exports.FLOOR_TYPE = exports.BUILDING_TYPE = exports.SITE_TYPE = exports.CONTEXT_TYPE = void 0;
const CONTEXT_TYPE = "geographicContext";
exports.CONTEXT_TYPE = CONTEXT_TYPE;
const SITE_TYPE = "geographicSite";
exports.SITE_TYPE = SITE_TYPE;
const BUILDING_TYPE = "geographicBuilding";
exports.BUILDING_TYPE = BUILDING_TYPE;
const FLOOR_TYPE = "geographicFloor";
exports.FLOOR_TYPE = FLOOR_TYPE;
const ZONE_TYPE = "geographicZone";
exports.ZONE_TYPE = ZONE_TYPE;
const ROOM_TYPE = "geographicRoom";
exports.ROOM_TYPE = ROOM_TYPE;
const EQUIPMENT_TYPE = "BIMObject";
exports.EQUIPMENT_TYPE = EQUIPMENT_TYPE;
const REFERENCE_TYPE = "geographicReference";
exports.REFERENCE_TYPE = REFERENCE_TYPE;
const SITE_RELATION = "hasGeographicSite";
exports.SITE_RELATION = SITE_RELATION;
const BUILDING_RELATION = "hasGeographicBuilding";
exports.BUILDING_RELATION = BUILDING_RELATION;
const FLOOR_RELATION = "hasGeographicFloor";
exports.FLOOR_RELATION = FLOOR_RELATION;
const ZONE_RELATION = "hasGeographicZone";
exports.ZONE_RELATION = ZONE_RELATION;
const ROOM_RELATION = "hasGeographicRoom";
exports.ROOM_RELATION = ROOM_RELATION;
const EQUIPMENT_RELATION = "hasBimObject";
exports.EQUIPMENT_RELATION = EQUIPMENT_RELATION;
const REFERENCE_RELATION = "hasReferenceObject";
exports.REFERENCE_RELATION = REFERENCE_RELATION;
const REFERENCE_ROOM_RELATION = "hasReferenceObject.ROOM";
exports.REFERENCE_ROOM_RELATION = REFERENCE_ROOM_RELATION;
const SITE_REFERENCE_CONTEXT = ".SiteContext";
exports.SITE_REFERENCE_CONTEXT = SITE_REFERENCE_CONTEXT;
const BUILDING_REFERENCE_CONTEXT = ".BuildingContext";
exports.BUILDING_REFERENCE_CONTEXT = BUILDING_REFERENCE_CONTEXT;
const FLOOR_REFERENCE_CONTEXT = ".FloorContext";
exports.FLOOR_REFERENCE_CONTEXT = FLOOR_REFERENCE_CONTEXT;
const ZONE_REFERENCE_CONTEXT = ".ZoneContext";
exports.ZONE_REFERENCE_CONTEXT = ZONE_REFERENCE_CONTEXT;
const ROOM_REFERENCE_CONTEXT = ".RoomContext";
exports.ROOM_REFERENCE_CONTEXT = ROOM_REFERENCE_CONTEXT;
const GEOGRAPHIC_TYPES = Object.freeze([
    SITE_TYPE,
    BUILDING_TYPE,
    FLOOR_TYPE,
    ZONE_TYPE,
    ROOM_TYPE
]);
exports.GEOGRAPHIC_TYPES = GEOGRAPHIC_TYPES;
const GEOGRAPHIC_TYPES_ORDER = Object.freeze([
    CONTEXT_TYPE,
    SITE_TYPE,
    BUILDING_TYPE,
    FLOOR_TYPE,
    ZONE_TYPE,
    ROOM_TYPE,
    EQUIPMENT_TYPE
]);
exports.GEOGRAPHIC_TYPES_ORDER = GEOGRAPHIC_TYPES_ORDER;
const GEOGRAPHIC_RELATIONS = Object.freeze([
    SITE_RELATION,
    BUILDING_RELATION,
    FLOOR_RELATION,
    ZONE_RELATION,
    ROOM_RELATION,
    EQUIPMENT_RELATION
]);
exports.GEOGRAPHIC_RELATIONS = GEOGRAPHIC_RELATIONS;
const GEOGRAPHIC_RELATIONS_ORDER = Object.freeze([
    SITE_RELATION,
    BUILDING_RELATION,
    FLOOR_RELATION,
    ZONE_RELATION,
    ROOM_RELATION,
    EQUIPMENT_RELATION
]);
exports.GEOGRAPHIC_RELATIONS_ORDER = GEOGRAPHIC_RELATIONS_ORDER;
const MAP_TYPE_RELATION = Object.freeze(new Map([
    [
        SITE_TYPE,
        SITE_RELATION
    ],
    [
        BUILDING_TYPE,
        BUILDING_RELATION
    ],
    [
        FLOOR_TYPE,
        FLOOR_RELATION
    ],
    [
        ZONE_TYPE,
        ZONE_RELATION
    ],
    [
        ROOM_TYPE,
        ROOM_RELATION
    ],
    [
        EQUIPMENT_TYPE,
        EQUIPMENT_RELATION
    ]
]));
exports.MAP_TYPE_RELATION = MAP_TYPE_RELATION;
const MAP_RELATION_TYPE = Object.freeze(new Map([
    [
        SITE_RELATION,
        SITE_TYPE
    ],
    [
        BUILDING_RELATION,
        BUILDING_TYPE
    ],
    [
        FLOOR_RELATION,
        FLOOR_TYPE
    ],
    [
        ZONE_RELATION,
        ZONE_TYPE
    ],
    [
        ROOM_RELATION,
        ROOM_TYPE
    ],
    [
        EQUIPMENT_RELATION,
        EQUIPMENT_TYPE
    ]
]));
exports.MAP_RELATION_TYPE = MAP_RELATION_TYPE;

},{}],"k3Ldb":[function(require,module,exports) {
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
            _vm._v("Create Analytics ")
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
                        value: _vm.analytic.name,
                        callback: function($$v) {
                            _vm.$set(_vm.analytic, "name", $$v);
                        },
                        expression: "analytic.name"
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-field", [
                _c("label", {
                    attrs: {
                        "for": "childrenType"
                    }
                }, [
                    _vm._v("Children Type")
                ]),
                _vm._v(" "),
                _c("md-select", {
                    attrs: {
                        "name": "childrenType",
                        "id": "childrenType"
                    },
                    model: {
                        value: _vm.analytic.childrenType,
                        callback: function($$v) {
                            _vm.$set(_vm.analytic, "childrenType", $$v);
                        },
                        expression: "analytic.childrenType"
                    }
                }, _vm._l(_vm.types, function(data) {
                    return _c("md-option", {
                        key: data.type,
                        attrs: {
                            "value": data.type
                        }
                    }, [
                        _vm._v(_vm._s(data.title))
                    ]);
                }), 1)
            ], 1),
            _vm._v(" "),
            _c("md-field", [
                _c("label", [
                    _vm._v("Description")
                ]),
                _vm._v(" "),
                _c("md-textarea", {
                    model: {
                        value: _vm.analytic.description,
                        callback: function($$v) {
                            _vm.$set(_vm.analytic, "description", $$v);
                        },
                        expression: "analytic.description"
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

},{}],"avspP":[function() {},{}],"kB05w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CRb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _linkGroupToAnalyticsVue = require("./linkGroupToAnalytics.vue");
var _linkGroupToAnalyticsVueDefault = parcelHelpers.interopDefault(_linkGroupToAnalyticsVue);
const { SpinalForgeExtention } = require("3967e30b184eea14");
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

},{"vue":"gt5MM","3967e30b184eea14":"1mGHd","./linkGroupToAnalytics.vue":"a6P4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"a6P4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f001e4a2eca009c7");
    if (script.__esModule) script = script.default;
    script.render = require("1abf653b075f98f0").render;
    script.staticRenderFns = require("1abf653b075f98f0").staticRenderFns;
    script._scopeId = "data-v-cf66ce";
    script.__cssModules = require("aab7dc7ef1072a7a").default;
    require("5d443671dbeac756").default(script);
    script.__scopeId = "data-v-cf66ce";
    script.__file = "linkGroupToAnalytics.vue";
};
initialize();
exports.default = script;

},{"f001e4a2eca009c7":"1zTsU","1abf653b075f98f0":"2fZOj","aab7dc7ef1072a7a":"aAZrw","5d443671dbeac756":"3RgdR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zTsU":[function(require,module,exports) {
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

},{"vue":"gt5MM","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-plugin-analytics-service":"74iWe","vue-virtual-scroller":"kl5Fe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fZOj":[function(require,module,exports) {
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

},{}],"aAZrw":[function() {},{}],"3RgdR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-analytics.1ea2287b.js.map
