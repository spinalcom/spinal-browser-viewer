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
})({"gFC3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _addDashBoard = require("./buttons/addDashBoard");
var _addDashBoardDefault = parcelHelpers.interopDefault(_addDashBoard);
var _linkWithDashBoard = require("./buttons/linkWithDashBoard");
var _linkWithDashBoardDefault = parcelHelpers.interopDefault(_linkWithDashBoard);
var _linkAutoWithDashboard = require("./buttons/linkAutoWithDashboard");
var _linkAutoWithDashboardDefault = parcelHelpers.interopDefault(_linkAutoWithDashboard);
var _createDashboardContext = require("./buttons/createDashboardContext");
var _createDashboardContextDefault = parcelHelpers.interopDefault(_createDashboardContext);
var _calculateBtn = require("./buttons/calculateBtn");
var _calculateBtnDefault = parcelHelpers.interopDefault(_calculateBtn);
var _globalCalculate = require("./buttons/globalCalculate");
var _globalCalculateDefault = parcelHelpers.interopDefault(_globalCalculate);
var _registerDialog = require("./js/registerDialog");
const sidebarName = "GraphManagerSideBar";
const HeaderBarName = "GraphManagerTopBar";
const { spinalContextMenuService } = require("ef41ea260a4b07cd");
spinalContextMenuService.registerApp(sidebarName, new (0, _addDashBoardDefault.default)(), [
    3
]);
spinalContextMenuService.registerApp(sidebarName, new (0, _linkWithDashBoardDefault.default)(), [
    3
]);
spinalContextMenuService.registerApp(sidebarName, new (0, _linkAutoWithDashboardDefault.default)(), [
    3
]);
spinalContextMenuService.registerApp(sidebarName, new (0, _calculateBtnDefault.default)(), [
    3
]);
spinalContextMenuService.registerApp(sidebarName, new (0, _globalCalculateDefault.default)(), [
    3
]);
spinalContextMenuService.registerApp(HeaderBarName, new (0, _createDashboardContextDefault.default)(), [
    3
]);

},{"ef41ea260a4b07cd":"kHlxv","./buttons/addDashBoard":"CDk90","./buttons/linkWithDashBoard":"83RUI","./buttons/linkAutoWithDashboard":"9Yg63","./buttons/createDashboardContext":"872vo","./buttons/calculateBtn":"1bJ5R","./buttons/globalCalculate":"liy8S","./js/registerDialog":"33fps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"CDk90":[function(require,module,exports) {
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
const { SpinalContextApp } = require("386d3e5acfce84c1");
const { spinalPanelManagerService } = require("df0d5253527b48a8");
class AddDashboard extends SpinalContextApp {
    constructor(){
        super("create dashboard", "create dashboard", {
            icon: "table_chart",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() == (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).DASHBOARD_CONTEXT_TYPE) {
            this.label = "create dashboard";
            this.description = "create dashboard";
            this.buttonCfg.icon = "table_chart";
            return Promise.resolve(true);
        } else if (option.context.type.get() == (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).DASHBOARD_CONTEXT_TYPE) {
            this.label = "setting dashboard";
            this.description = "setting dashboard";
            this.buttonCfg.icon = "settings";
            return Promise.resolve(true);
        }
        return Promise.resolve(-1);
    }
    action(option) {
        let params = {
            title: option.context.id.get() !== option.selectedNode.id.get() ? "Config DashBoard" : "Create DashBoard",
            context: option.context,
            selectedNode: option.context.id.get() !== option.selectedNode.id.get() ? option.selectedNode : undefined,
            toCreate: option.context.id.get() !== option.selectedNode.id.get() ? false : true
        };
        spinalPanelManagerService.openPanel("dashBoardConfigDialog", params);
    }
}
module.exports = AddDashboard;

},{"386d3e5acfce84c1":"kHlxv","df0d5253527b48a8":"7Uw4d","spinal-env-viewer-dashboard-standard-service":"ioaJh"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"ioaJh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dashboardVariables = exports.dashboardService = undefined;
var _globalVariables = require("2b08083d6dd47dc4");
var dashboardVariables = _interopRequireWildcard(_globalVariables);
var _spinalEnvViewerGraphService = require("60991b7cabcf0c72");
var _spinalModelBmsnetwork = require("ce91997d1074d2c");
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj.default = obj;
        return newObj;
    }
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
const { AbstractElement } = require("a1c89662925c9508");
let dashboardService = {
    createStandardDashBoardContext (contextName) {
        let context = _spinalEnvViewerGraphService.SpinalGraphService.getContext(contextName);
        if (typeof context !== "undefined") return false;
        return _spinalEnvViewerGraphService.SpinalGraphService.addContext(contextName, dashboardVariables.DASHBOARD_CONTEXT_TYPE, new AbstractElement(contextName));
    },
    createStandardDashBoard (contextId, dashboardName, dashboardType, attributes) {
        let abstract = new AbstractElement(dashboardName);
        abstract.add_attr({
            sensor: [],
            connected: []
        });
        attributes.forEach((attr)=>{
            delete attr.checked;
            abstract.sensor.push(attr);
        });
        let abstractNode = _spinalEnvViewerGraphService.SpinalGraphService.createNode({
            name: dashboardName,
            type: dashboardType
        }, abstract);
        _spinalEnvViewerGraphService.SpinalGraphService.addChildInContext(contextId, abstractNode, contextId, dashboardVariables.RELATION_NAME, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
    },
    getDashboardByType (contextId, dashboardType) {
        return _spinalEnvViewerGraphService.SpinalGraphService.getChildren(contextId, dashboardVariables.RELATION_NAME).then((children)=>{
            let res = [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.type.get() === dashboardType) res.push(child);
            }
            return res;
        });
    },
    hasDashBoard (nodeId) {
        return _spinalEnvViewerGraphService.SpinalGraphService.getChildren(nodeId, dashboardVariables.ENDPOINT_RELATION_NAME).then((children)=>{
            return children.length > 0;
        });
    },
    linkToDashboard (contextId, nodeId, dashboardId) {
        var _this = this;
        this.hasDashBoard(nodeId).then((()=>{
            var _ref = _asyncToGenerator(function*(d) {
                if (d) yield _this.unLinkToDashBoard(nodeId);
                let dashboardInfo = _spinalEnvViewerGraphService.SpinalGraphService.getInfo(dashboardId);
                dashboardInfo.element.load().then(function(element) {
                    _spinalEnvViewerGraphService.SpinalGraphService.addChildInContext(dashboardId, nodeId, contextId, dashboardVariables.DASHBOARD_TO_ELEMENT_RELATION, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
                    let sensor = element.sensor.get();
                    sensor.forEach(function(attr) {
                        let endpoint = new _spinalModelBmsnetwork.SpinalBmsEndpoint(attr.name, "SpinalEndpoint_Path", attr.value, attr.unit, attr.dataType, attr.type);
                        let child = _spinalEnvViewerGraphService.SpinalGraphService.createNode({
                            name: attr.name,
                            type: attr.type
                        }, endpoint);
                        _spinalEnvViewerGraphService.SpinalGraphService.addChild(nodeId, child, dashboardVariables.ENDPOINT_RELATION_NAME, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
                    });
                });
            });
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        })());
    },
    getAllDashboardContext () {
        let graph = _spinalEnvViewerGraphService.SpinalGraphService.getGraph();
        return graph.getChildren([
            "hasContext"
        ]).then((contexts)=>{
            let res = [];
            contexts.forEach((context)=>{
                if (context.info.type.get() == dashboardVariables.DASHBOARD_CONTEXT_TYPE) res.push(context.info);
            });
            return res;
        });
    },
    unLinkToDashBoard (nodeId, callback) {
        this._getParent(nodeId, dashboardVariables.DASHBOARD_TO_ELEMENT_RELATION).then((oldDash)=>{
            dashboardService.removeAllEndpoints(nodeId).then(()=>{
                _spinalEnvViewerGraphService.SpinalGraphService.removeChild(oldDash, nodeId, dashboardVariables.DASHBOARD_TO_ELEMENT_RELATION, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE).then((el)=>{
                    if (callback) callback(el);
                });
            });
        });
    },
    removeAllEndpoints (nodeId) {
        return _spinalEnvViewerGraphService.SpinalGraphService.getChildren(nodeId, [
            dashboardVariables.ENDPOINT_RELATION_NAME
        ]).then((endpoints)=>{
            for(let i = 0; i < endpoints.length; i++)_spinalEnvViewerGraphService.SpinalGraphService.removeChild(nodeId, endpoints[i].id.get(), dashboardVariables.ENDPOINT_RELATION_NAME, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
            return;
        });
    },
    addCalculationRule (nodeId, endpointType, rule, reference = null) {
        _spinalEnvViewerGraphService.SpinalGraphService.getChildren(nodeId, dashboardVariables.ENDPOINT_RELATION_NAME).then((endpoints)=>{
            let endpoint;
            for(let index = 0; index < endpoints.length; index++){
                const element = endpoints[index];
                if (element.id.get() === endpointType || element.type.get() === endpointType) endpoint = _spinalEnvViewerGraphService.SpinalGraphService.getRealNode(element.id.get());
            }
            if (endpoint) {
                if (endpoint.info.dash_cal_rule) endpoint.info.rem_attr("dash_cal_rule");
                endpoint.info.add_attr("dash_cal_rule", {
                    rule: rule,
                    ref: reference
                });
            }
        });
    },
    //a modifier
    editDashboard (dashboardId, newName, NewSensor) {
        let dashboardNode = _spinalEnvViewerGraphService.SpinalGraphService.getRealNode(dashboardId);
        dashboardNode.info.name.set(newName);
        dashboardNode.element.load().then((dashBoardElement)=>{
            dashBoardElement.name.set(newName);
            let sensor = dashBoardElement.sensor.get();
            let difference = this._getDifferenceBetweenTwoArray(NewSensor, sensor);
            console.log("difference", difference);
            difference.forEach((el)=>{
                if (!sensor.includes(el)) dashBoardElement.sensor.push(el);
                else if (!NewSensor.includes(el)) dashBoardElement.sensor.splice(sensor.indexOf(el), 1);
            });
        });
    },
    addReferenceToBimObject (bimObjectId, referenceId, endpointType) {
        // SpinalGraphService.createNode()
        // let node = SpinalGraphService.getInfo(referenceId);
        // node.element.load().then(element => {
        //   if (element.referenceOf) element.referenceOf.set(endpointType);
        //   else element.add_attr({
        //     referenceOf: endpointType
        //   })
        // })
        let node = _spinalEnvViewerGraphService.SpinalGraphService.getRealNode(bimObjectId);
        if (!node.info.reference) node.info.add_attr({
            reference: {}
        });
        if (!node.info.reference[endpointType]) {
            node.info.reference.add_attr(endpointType, referenceId);
            return;
        }
        node.info.reference[endpointType].set(referenceId);
        return;
    // return SpinalGraphService.addChild(bimObjectId, , )
    },
    _getParent (nodeId, relationName) {
        let node = _spinalEnvViewerGraphService.SpinalGraphService.getRealNode(nodeId);
        if (node.parents[relationName]) return node.parents[relationName][0].load().then((()=>{
            var _ref2 = _asyncToGenerator(function*(ref) {
                let parent = yield ref.parent.load();
                return parent.info.id.get();
            });
            return function(_x2) {
                return _ref2.apply(this, arguments);
            };
        })());
    },
    _getDifferenceBetweenTwoArray (array1, array2) {
        let full = array1.concat(array2);
        return full.filter((el)=>{
            return full.indexOf(el) === full.lastIndexOf(el);
        });
    }
};
exports.dashboardService = dashboardService;
exports.dashboardVariables = dashboardVariables; /*

unLinkToDashBoard(dashboardId, nodeId, callback) {
    SpinalGraphService.getChildren(nodeId, [
      dashboardVariables.ENDPOINT_RELATION_NAME
    ]).then(el => {
      if (el.length > 0) {
        let oldDash = el[0].id.get();
        dashboardService.removeAllEndpoints(nodeId).then(() => {
          // SpinalGraphService.moveChild(
          //   oldDash,
          //   dashboardId,
          //   nodeId,
          //   dashboardVariables.DASHBOARD_TO_ELEMENT_RELATION,
          //   SPINAL_RELATION_LST_PTR_TYPE
          // ).then(el => {
          //   if (el) {
          //     callback(true);
          //   }
          // });

          SpinalGraphService.removeChild(oldDash, nodeId,
            dashboardVariables.DASHBOARD_TO_ELEMENT_RELATION).then(
            el => {
              callback(el);
            });

        });
      } else {
        callback(false);
      }
    });
  }

*/ 

},{"2b08083d6dd47dc4":"67C5P","60991b7cabcf0c72":"9n7zp","ce91997d1074d2c":"gzkbg","a1c89662925c9508":"jsnTF"}],"67C5P":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CALCULATION_RULES = exports.DASHBOARD_TO_ELEMENT_RELATION = exports.ENDPOINT_RELATION_NAME = exports.GEOGRAPHIC_TYPES = exports.RELATION_NAME = exports.DASHBOARD_CONTEXT_TYPE = exports.DASHBOARD_CONTEXT = undefined;
var _spinalEnvViewerContextGeographicService = require("c57787d62cca9a23");
var _spinalEnvViewerContextGeographicService2 = _interopRequireDefault(_spinalEnvViewerContextGeographicService);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DASHBOARD_CONTEXT = "Dashboard Standard";
const DASHBOARD_CONTEXT_TYPE = "dashboardContext";
const RELATION_NAME = "hasDashBoard";
const ENDPOINT_RELATION_NAME = "hasDashEndpoint";
const DASHBOARD_TO_ELEMENT_RELATION = "hasConnected";
const CALCULATION_RULES = Object.freeze({
    sum: 0,
    average: 1,
    max: 2,
    min: 3,
    reference: 4
});
// Affiché par ordre (à ne pas Modifier, ou ajouter l'element à la fin)
const GEOGRAPHIC_TYPES = [
    {
        name: "Site",
        type: _spinalEnvViewerContextGeographicService2.default.constants.SITE_TYPE
    },
    {
        name: "Building",
        type: _spinalEnvViewerContextGeographicService2.default.constants.BUILDING_TYPE
    },
    {
        name: "Floor",
        type: _spinalEnvViewerContextGeographicService2.default.constants.FLOOR_TYPE
    },
    {
        name: "Zone",
        type: _spinalEnvViewerContextGeographicService2.default.constants.ZONE_TYPE
    },
    {
        name: "Room",
        type: _spinalEnvViewerContextGeographicService2.default.constants.ROOM_TYPE
    },
    {
        name: "Equipment",
        type: _spinalEnvViewerContextGeographicService2.default.constants.EQUIPMENT_TYPE
    }
];
exports.DASHBOARD_CONTEXT = DASHBOARD_CONTEXT;
exports.DASHBOARD_CONTEXT_TYPE = DASHBOARD_CONTEXT_TYPE;
exports.RELATION_NAME = RELATION_NAME;
exports.GEOGRAPHIC_TYPES = GEOGRAPHIC_TYPES;
exports.ENDPOINT_RELATION_NAME = ENDPOINT_RELATION_NAME;
exports.DASHBOARD_TO_ELEMENT_RELATION = DASHBOARD_TO_ELEMENT_RELATION;
exports.CALCULATION_RULES = CALCULATION_RULES;

},{"c57787d62cca9a23":"5QjJf"}],"jsnTF":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BIMElement = exports.AbstractElement = undefined;
var _AbstractElement = require("19df3b4b51028d49");
var _AbstractElement2 = _interopRequireDefault(_AbstractElement);
var _BIMElement = require("77b24a79bb80029a");
var _BIMElement2 = _interopRequireDefault(_BIMElement);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const spinalCore = require("294f8484813eef1b");
const globalType = typeof window === "undefined" ? global : window;
exports.AbstractElement = _AbstractElement2.default;
exports.BIMElement = _BIMElement2.default;

},{"19df3b4b51028d49":"d91KA","77b24a79bb80029a":"irx1v","294f8484813eef1b":"2uyD7"}],"d91KA":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Utilities = require("219bd63e96dc8d9");
const spinalCore = require("f4839373ca56abfb");
const globalType = typeof window === "undefined" ? global : window;
class AbstractElement extends globalType.Model {
    constructor(_name, _type, name = "AbstractElement"){
        super();
        if (FileSystem._sig_server) this.add_attr({
            name: _name,
            id: _Utilities.Utilities.guid(name),
            type: _type
        });
    }
    setName(_name) {
        this.name.set(_name);
    }
}
exports.default = AbstractElement;
spinalCore.register_models([
    AbstractElement
]);

},{"219bd63e96dc8d9":"8XE2J","f4839373ca56abfb":"2uyD7"}],"8XE2J":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
let Utilities = {};
const globalType = typeof window === "undefined" ? global : window;
Utilities.getViewer = function() {
    return new Promise((resolve, reject)=>{
        if (globalType.v === "undefined") {
            let interval = setInterval(()=>{
                if (globalType.v !== "undefined") {
                    resolve(globalType.v);
                    clearInterval(interval);
                }
            }, 500);
        } else resolve(globalType.v);
    });
};
Utilities.promiseGetProperties = function(_dbId) {
    return new Promise((resolve)=>{
        Utilities.getViewer().then((viewer)=>{
            viewer.getProperties(_dbId, resolve);
        });
    });
};
Utilities.promiseGetExternalIdMapping = function(_externalId) {
    return new Promise((resolve)=>{
        Utilities.getViewer().then((viewer)=>{
            viewer.model.getExternalIdMapping((res)=>{
                resolve(res[_externalId]);
            });
        });
    });
};
// Utilities.promiseLoad = function(_ptr) {
//   return new Promise(resolve => {
//     _ptr.load(resolve);
//   });
// }
Utilities.promiseLoad = function(_ptr) {
    if (_ptr instanceof globalType.Ptr && _ptr.data.value != 0 && typeof FileSystem._objects[_ptr.data.value] != "undefined") return Promise.resolve(FileSystem._objects[_ptr.data.value]);
    else return new Promise((resolve)=>{
        _ptr.load(resolve);
    });
};
Utilities.getExternalId = (()=>{
    var _ref = _asyncToGenerator(function*(_dbId) {
        let properties = yield Utilities.promiseGetProperties(_dbId);
        return properties.externalId;
    });
    return function(_x) {
        return _ref.apply(this, arguments);
    };
})();
Utilities.getDbIdByExternalId = (()=>{
    var _ref2 = _asyncToGenerator(function*(_externalId) {
        let dbid = yield Utilities.promiseGetExternalIdMapping(_externalId);
        return dbid;
    });
    return function(_x2) {
        return _ref2.apply(this, arguments);
    };
})();
Utilities.arraysEqual = function(arrayA, arrayB) {
    if (arrayA === arrayB) return true;
    if (arrayA == null || arrayB == null) return false;
    if (arrayA.length != arrayB.length) return false;
    arrayA.sort();
    arrayB.sort();
    for(var i = 0; i < arrayA.length; ++i){
        if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
};
Utilities.containsLstById = function(_list, _node) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.id.get() == _node.id.get()) return true;
    }
    return false;
};
Utilities.containsLstModel = function(_list, _model) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.get() == _model.get()) return true;
    }
    return false;
};
Utilities.containsLst = function(_list, _element) {
    for(let index = 0; index < _list.length; index++){
        const element = _list[index];
        if (element.get() == _element) return true;
    }
    return false;
};
Utilities.include = function(arr, obj) {
    return arr.indexOf(obj) != -1;
};
Utilities.getIndex = function(arr, obj) {
    return arr.indexOf(obj);
};
Utilities.getIds = function(array) {
    let res = [];
    for(let index = 0; index < array.length; index++)res.push(array[index].id.get());
    return res;
};
// Utilities.addNotExisting = function(arr, obj) {
//   return (arr.indexOf(obj));
// }
Utilities.concat = function(listA, listB) {
    let res = [];
    for(let index = 0; index < listA.length; index++)res.push(listA[index]);
    for(let index = 0; index < listB.length; index++)res.push(listB[index]);
    return res;
};
Utilities.allButMeById = function(_list, _node) {
    let res = [];
    for(let index = 0; index < _list.length; index++){
        const node = _list[index];
        if (node.id.get() != _node.id.get()) res.push(node);
        return res;
    }
};
Utilities.guid = function(_constructor) {
    return _constructor + "-" + this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4() + "-" + Date.now().toString(16);
};
Utilities.s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
Utilities.putOnTopLst = function(lst, elementB) {
    lst.remove_ref(elementB);
    lst.unshift(elementB);
// for (let index = 0; index < lst.length; index++) {
//   const element = lst[index];
//   if (element.id.get() === elementB.id.get()) {
//     lst.remove(index);
//   }
// }
};
exports.Utilities = Utilities;

},{}],"irx1v":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _spinalModelsBimobject = require("83eb36b83bc3848a");
var _spinalModelsBimobject2 = _interopRequireDefault(_spinalModelsBimobject);
var _Utilities = require("d1acada118764380");
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
const spinalCore = require("ee3a3f95aba74422");
const globalType = typeof window === "undefined" ? global : window;
class BIMElement extends _spinalModelsBimobject2.default {
    constructor(_id, _name, _type, name = "BIMElement"){
        super(_id, _name, 0);
        if (FileSystem._sig_server) this.add_attr({
            type: _type || "BimObject",
            externalId: ""
        });
    }
    initExternalId() {
        _Utilities.Utilities.getExternalId(this.id.get()).then((_externalId)=>{
            this.externalId.set(_externalId);
        });
    }
    initExternalIdAsync() {
        var _this = this;
        return _asyncToGenerator(function*() {
            let _externalId = yield _Utilities.Utilities.getExternalId(_this.id.get());
            _this.externalId.set(_externalId);
        })();
    }
    setName(_name) {
        this.name.set(_name);
    }
    toIfc() {
        return `${this.constructor.name}(${this.id.get()},${this.name.get()});`;
    }
}
exports.default = BIMElement;
spinalCore.register_models([
    BIMElement
]);

},{"83eb36b83bc3848a":"3Ibtq","d1acada118764380":"8XE2J","ee3a3f95aba74422":"2uyD7"}],"3Ibtq":[function(require,module,exports) {
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

},{"e30868c801f59ada":"2uyD7"}],"83RUI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
const { SpinalContextApp } = require("195921f94fe8359a");
const { spinalPanelManagerService } = require("abdafa69e0775fd4");
const CONTEXT_TYPE = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE;
let hasDash = false;
class LinkWithDashBoard extends SpinalContextApp {
    constructor(){
        super("Link to a Dashboard", "Link to a Dashboard", {
            icon: "link",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.context.type.get() === CONTEXT_TYPE && option.selectedNode.type.get() !== CONTEXT_TYPE) return (0, _spinalEnvViewerDashboardStandardService.dashboardService).hasDashBoard(option.selectedNode.id.get()).then((el)=>{
            console.log(hasDash, el);
            hasDash = el;
            if (el) {
                this.label = "unlink to dashboard";
                this.buttonCfg.icon = "link_off";
            } else {
                this.label = "Link to a Dashboard";
                this.buttonCfg.icon = "link";
            }
            return el;
        });
        else return Promise.resolve(-1);
    }
    action(option) {
        if (hasDash) (0, _spinalEnvViewerDashboardStandardService.dashboardService).unLinkToDashBoard(option.selectedNode.id.get());
        else {
            let dialogParams = {
                context: option.context,
                selectedNode: option.selectedNode
            };
            spinalPanelManagerService.openPanel("linkToDashBoardDialog", dialogParams);
        }
    }
}
module.exports = LinkWithDashBoard;

},{"195921f94fe8359a":"kHlxv","abdafa69e0775fd4":"7Uw4d","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-dashboard-standard-service":"ioaJh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Yg63":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { SpinalContextApp } = require("33c18624ae75325");
const { spinalPanelManagerService } = require("e0bbdc67efe3335a");
const CONTEXT_TYPE = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE;
class LinkAutoWithDashboard extends SpinalContextApp {
    constructor(){
        super("Automate dashboard linking", "automate dashboard binding", {
            icon: "transform",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.context.type.get() === CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("linkAutoWithDashboardDialog", option);
    }
}
module.exports = LinkAutoWithDashboard;

},{"33c18624ae75325":"kHlxv","e0bbdc67efe3335a":"7Uw4d","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"872vo":[function(require,module,exports) {
const { SpinalContextApp } = require("999cb994543c28b8");
const { spinalPanelManagerService } = require("7213d3fcd5c601c3");
class CreateDashboardContext extends SpinalContextApp {
    constructor(){
        super("create dashboard Context", "create dashboard Context", {
            icon: "pie_chart",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        spinalPanelManagerService.openPanel("dashboardContextCreation", {});
    }
}
module.exports = CreateDashboardContext;

},{"999cb994543c28b8":"kHlxv","7213d3fcd5c601c3":"7Uw4d"}],"1bJ5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { SpinalContextApp } = require("c57801e8231826d7");
const { spinalPanelManagerService } = require("da277f89cbcf423");
class CalculateBtn extends SpinalContextApp {
    constructor(){
        super("Config calculation method", "configure the calculation method", {
            icon: "functions",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE) return Promise.resolve(true);
        return (0, _spinalEnvViewerDashboardStandardService.dashboardService).hasDashBoard(option.selectedNode.id.get()).then((el)=>{
            if (el) return true;
            return -1;
        });
    }
    action(option) {
        if (option.selectedNode.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE) spinalPanelManagerService.openPanel("bimObjectReference", option.selectedNode);
        else spinalPanelManagerService.openPanel("dashBoardCalcul", option.selectedNode);
    }
}
module.exports = CalculateBtn;

},{"c57801e8231826d7":"kHlxv","da277f89cbcf423":"7Uw4d","spinal-env-viewer-dashboard-standard-service":"ioaJh","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"liy8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
const { SpinalContextApp } = require("cf30c896ea595923");
const { spinalPanelManagerService } = require("d04bb21daa8f319d");
class GlobalCalculateBtn extends SpinalContextApp {
    constructor(){
        super("configure calculation rules", "configure calculation rules", {
            icon: "functions",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FF0000"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        spinalPanelManagerService.openPanel("globalCalculDialog", option.selectedNode);
    }
}
module.exports = GlobalCalculateBtn;

},{"spinal-env-viewer-context-geographic-service":"5QjJf","cf30c896ea595923":"kHlxv","d04bb21daa8f319d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33fps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _dashBoardConfigDialogVue = require("../vue/dashBoardConfigDialog.vue");
var _dashBoardConfigDialogVueDefault = parcelHelpers.interopDefault(_dashBoardConfigDialogVue);
var _linkToDashBoardDialogVue = require("../vue/linkToDashBoardDialog.vue");
var _linkToDashBoardDialogVueDefault = parcelHelpers.interopDefault(_linkToDashBoardDialogVue);
var _linkAutoWithDashboardDialogVue = require("../vue/linkAutoWithDashboardDialog.vue");
var _linkAutoWithDashboardDialogVueDefault = parcelHelpers.interopDefault(_linkAutoWithDashboardDialogVue);
var _createDashboardContextVue = require("../vue/createDashboardContext.vue");
var _createDashboardContextVueDefault = parcelHelpers.interopDefault(_createDashboardContextVue);
var _calculParamsVue = require("../vue/CalculParams.vue");
var _calculParamsVueDefault = parcelHelpers.interopDefault(_calculParamsVue);
var _globalCalculVue = require("../vue/globalCalcul.vue");
var _globalCalculVueDefault = parcelHelpers.interopDefault(_globalCalculVue);
var _bimObjectCalculReferenceVue = require("../vue/bimObjectCalculReference.vue");
var _bimObjectCalculReferenceVueDefault = parcelHelpers.interopDefault(_bimObjectCalculReferenceVue);
const { SpinalMountExtention } = require("971aebcddf88aa39");
/***** Resgister Dialog */ var dialogs = [
    {
        name: "dashBoardConfigDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _dashBoardConfigDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkToDashBoardDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkToDashBoardDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkAutoWithDashboardDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkAutoWithDashboardDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "dashboardContextCreation",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createDashboardContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "dashBoardCalcul",
        vueMountComponent: (0, _vueDefault.default).extend((0, _calculParamsVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "globalCalculDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _globalCalculVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "bimObjectReference",
        vueMountComponent: (0, _vueDefault.default).extend((0, _bimObjectCalculReferenceVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","../vue/dashBoardConfigDialog.vue":"7fZ8Y","../vue/linkToDashBoardDialog.vue":"abGhn","../vue/linkAutoWithDashboardDialog.vue":"fOHLz","../vue/createDashboardContext.vue":"12ffR","../vue/CalculParams.vue":"ggVvm","../vue/globalCalcul.vue":"i0zNk","../vue/bimObjectCalculReference.vue":"3OkO5","971aebcddf88aa39":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fZ8Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e87615dca230e82a");
    if (script.__esModule) script = script.default;
    script.render = require("fe6a971173da2de7").render;
    script.staticRenderFns = require("fe6a971173da2de7").staticRenderFns;
    script._scopeId = "data-v-40011a";
    require("c411635d59ed1195").default(script);
    script.__scopeId = "data-v-40011a";
    script.__file = "dashBoardConfigDialog.vue";
};
initialize();
exports.default = script;

},{"e87615dca230e82a":"9rqYy","fe6a971173da2de7":"8nWDB","c411635d59ed1195":"4OVTi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rqYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _choice = require("../js/choice");
var _choiceDefault = parcelHelpers.interopDefault(_choice);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var scriptExports = {
    name: "dialogComponent",
    props: [
        "onFinised"
    ],
    data () {
        this.types = (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).GEOGRAPHIC_TYPES.filter((el)=>el.name !== "Equipment");
        return {
            title: "",
            inputValue: "",
            context: null,
            selectedNode: null,
            absType: (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).GEOGRAPHIC_TYPES[0].type,
            create: true,
            showDialog: true,
            choices: Object.assign([], (0, _choiceDefault.default))
        };
    },
    methods: {
        opened (option) {
            this.title = option.title;
            this.selectedNode = option.selectedNode;
            this.context = option.context;
            this.inputValue = option.selectedNode ? option.selectedNode.name.get() : "";
            this.create = option.toCreate;
            console.log("this.create", this.create);
            this.absType = option.selectedNode ? option.selectedNode.type.get() : this.absType;
            this.SelectCases(option.selectedNode);
        },
        removed (option) {
            if (option.closeResult && this.create && option.inputValue.trim().length > 0) (0, _spinalEnvViewerDashboardStandardService.dashboardService).createStandardDashBoard(this.context.id.get(), option.inputValue.trim(), option.type, this.choices.filter((el)=>el.checked));
            else option.closeResult && option.inputValue.trim().length > 0 && this.create;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue,
                type: this.absType
            });
        },
        SelectCases (selectedNode) {
            this.choices.forEach((element)=>{
                element.checked = true;
            });
            if (selectedNode) selectedNode.element.load().then((endpointElement)=>{
                let sensor = endpointElement.sensor.get();
                for(let i = 0; i < this.choices.length; i++){
                    const element = this.choices[i];
                    let checkbox = sensor.find((el)=>el.name == element.name);
                    if (typeof checkbox === "undefined") this.choices[i].checked = false;
                }
            });
        },
        formIsValid () {
            let elementChecked = this.choices.filter((el)=>el.checked).length > 0;
            let nameValid = this.inputValue && this.inputValue.trim().length > 0;
            return elementChecked && nameValid;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/choice":"6l62S","spinal-env-viewer-dashboard-standard-service":"ioaJh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6l62S":[function(require,module,exports) {
module.exports = [
    {
        checked: true,
        disabled: false,
        name: "Temperature",
        unit: "\xb0C",
        value: 0,
        dataType: "Double",
        type: "Temperature"
    },
    {
        checked: true,
        disabled: false,
        name: "Hygrometry",
        unit: "%",
        value: 0,
        dataType: "Double",
        type: "Hygrometry"
    },
    {
        checked: true,
        disabled: false,
        name: "Power",
        unit: "W",
        value: 0,
        dataType: "Double",
        type: "Power"
    },
    {
        checked: true,
        disabled: false,
        name: "Occupation",
        unit: "-",
        value: false,
        dataType: "Boolean",
        type: "Occupation"
    },
    {
        checked: true,
        disabled: false,
        name: "Light",
        unit: "%",
        value: 0,
        dataType: "Double",
        type: "Light"
    },
    {
        checked: true,
        disabled: false,
        name: "Alarm",
        unit: "-",
        value: false,
        dataType: "Boolean",
        type: "Alarm"
    }
];

},{}],"8nWDB":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
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
                        _vm._v("DashBoard Name")
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
                _c("br"),
                _vm._v(" "),
                _c("span", {
                    staticClass: "md-subheading"
                }, [
                    _vm._v("Choose the type ")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", _vm._l(_vm.types, function(geo, index) {
                    return _c("md-radio", {
                        key: index,
                        staticClass: "md-primary",
                        attrs: {
                            "value": geo.type,
                            "disabled": !_vm.create
                        },
                        model: {
                            value: _vm.absType,
                            callback: function($$v) {
                                _vm.absType = $$v;
                            },
                            expression: "absType"
                        }
                    }, [
                        _vm._v(_vm._s(geo.name))
                    ]);
                }), 1),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("span", {
                    staticClass: "md-subheading"
                }, [
                    _vm._v("check the types of endpoints to add ")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", {
                    staticClass: "md-layout"
                }, _vm._l(_vm.choices, function(choice, index) {
                    return _c("md-checkbox", {
                        key: index,
                        staticClass: "md-layout-item md-size-45 md-primary",
                        attrs: {
                            "disabled": choice.disabled
                        },
                        model: {
                            value: choice.checked,
                            callback: function($$v) {
                                _vm.$set(choice, "checked", $$v);
                            },
                            expression: "choice.checked"
                        }
                    }, [
                        _vm._v(_vm._s(choice.name))
                    ]);
                }), 1)
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
                        "disabled": !_vm.formIsValid()
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
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"4OVTi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abGhn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e2640aabecf430db");
    if (script.__esModule) script = script.default;
    script.render = require("2d73806550bbf6da").render;
    script.staticRenderFns = require("2d73806550bbf6da").staticRenderFns;
    script._scopeId = "data-v-e6f7a4";
    script.__cssModules = require("d4978e9f2c0396c1").default;
    require("a384c3a5e69b5dd5").default(script);
    script.__scopeId = "data-v-e6f7a4";
    script.__file = "linkToDashBoardDialog.vue";
};
initialize();
exports.default = script;

},{"e2640aabecf430db":"9vQrx","2d73806550bbf6da":"6FXAQ","d4978e9f2c0396c1":"dUCVK","a384c3a5e69b5dd5":"gyu5F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vQrx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var scriptExports = {
    name: "linkToDashBoardDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            selectedNode: null,
            context: null,
            showDialog: true,
            choices: [],
            radio: "",
            hasDash: false,
            dashboards: [],
            dashboardContextSelected: ""
        };
    },
    methods: {
        async opened (option) {
            this.selectedNode = option.selectedNode;
            this.hasDash = await (0, _spinalEnvViewerDashboardStandardService.dashboardService).hasDashBoard(option.selectedNode.id.get());
            this.dashboards = this.lstToJson(await (0, _spinalEnvViewerDashboardStandardService.dashboardService).getAllDashboardContext());
        },
        removed (option) {
            if (option.closeResult) (0, _spinalEnvViewerDashboardStandardService.dashboardService).linkToDashboard(this.dashboardContextSelected, this.selectedNode.id.get(), this.radio);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        },
        lstToJson (lst) {
            let json = [];
            for(let loop = 0; loop < lst.length; loop++)json.push(lst[loop].get());
            return json;
        }
    },
    watch: {
        dashboardContextSelected: async function(newValue, oldValue) {
            if (newValue !== oldValue) this.choices = await (0, _spinalEnvViewerDashboardStandardService.dashboardService).getDashboardByType(newValue, this.selectedNode.type.get());
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-dashboard-standard-service":"ioaJh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FXAQ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
            staticClass: "DashboardDialog",
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
                _vm._v("Select a dashboard To link")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", [
                _vm.hasDash ? _c("div", {
                    staticClass: "choicesEmpty"
                }, [
                    _vm._v("\n\n        This element already has a dashboard, the old one will be removed !\n      ")
                ]) : _vm._e(),
                _vm._v(" "),
                _c("div", {
                    staticClass: "md-layout-item"
                }, [
                    _c("md-field", [
                        _vm.dashboards.length ? _c("md-select", {
                            attrs: {
                                "placeholder": "Select context"
                            },
                            model: {
                                value: _vm.dashboardContextSelected,
                                callback: function($$v) {
                                    _vm.dashboardContextSelected = $$v;
                                },
                                expression: "dashboardContextSelected"
                            }
                        }, _vm._l(_vm.dashboards, function(d, index) {
                            return _c("md-option", {
                                key: index,
                                attrs: {
                                    "value": d.id
                                }
                            }, [
                                _vm._v(_vm._s(d.name))
                            ]);
                        }), 1) : _vm._e()
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "dashboardDiv"
                }, [
                    _c("span", {
                        staticClass: "md-caption"
                    }, [
                        _vm._v("Select a dashboard")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.choices, function(choice, index) {
                        return _c("md-radio", {
                            key: index,
                            staticClass: "md-layout-item md-size-30 md-primary",
                            attrs: {
                                "value": choice.id.get()
                            },
                            model: {
                                value: _vm.radio,
                                callback: function($$v) {
                                    _vm.radio = $$v;
                                },
                                expression: "radio"
                            }
                        }, [
                            _vm._v(_vm._s(choice.name.get()))
                        ]);
                    }),
                    _vm._v(" "),
                    _vm.choices.length == 0 && _vm.dashboardContextSelected.length !== 0 ? _c("div", {
                        staticClass: "choicesEmpty"
                    }, [
                        _vm._v("\n          There is no Dahboard created for this type\n        ")
                    ]) : _vm._e()
                ], 2)
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
                        "disabled": !(_vm.radio.length > 0)
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
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"dUCVK":[function() {},{}],"gyu5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOHLz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8a73acf7be5c3bf0");
    if (script.__esModule) script = script.default;
    script.render = require("9275df3ca2bd0d26").render;
    script.staticRenderFns = require("9275df3ca2bd0d26").staticRenderFns;
    script._scopeId = "data-v-42ea0e";
    script.__cssModules = require("9843e348d6e10e5b").default;
    require("174cfd1ad29c7599").default(script);
    script.__scopeId = "data-v-42ea0e";
    script.__file = "linkAutoWithDashboardDialog.vue";
};
initialize();
exports.default = script;

},{"8a73acf7be5c3bf0":"2Xmwu","9275df3ca2bd0d26":"20Y2V","9843e348d6e10e5b":"kllC7","174cfd1ad29c7599":"6CzBX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Xmwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var _find = require("../js/find");
const relations = [
    "hasContext"
].concat((0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS);
var scriptExports = {
    name: "linkAutoWithDashboardDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            selectedNode: null,
            context: null,
            showDialog: true,
            allData: [],
            dashboards: []
        };
    },
    methods: {
        async opened (option) {
            this.context = option.context;
            this.selectedNode = option.selectedNode;
            this.allData = this.getChildrenElement(this.selectedNode.type.get());
            this.dashboards = await (0, _spinalEnvViewerDashboardStandardService.dashboardService).getAllDashboardContext();
        },
        removed (option) {
            let items = this.getItemToLink();
            if (option.closeResult) items.forEach((el)=>{
                (0, _find.find)(this.selectedNode.id.get(), relations, (node)=>{
                    return node.info.type.get() === el.type;
                }).then((nodes)=>{
                    for(let i = 0; i < nodes.length; i++)(0, _spinalEnvViewerDashboardStandardService.dashboardService).linkToDashboard(el.contextSelected, nodes[i].info.id.get(), el.dasboardSelected);
                });
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult
            });
        },
        getChildrenElement (type) {
            let geographicTypesOrder = (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_TYPES_ORDER;
            let children = (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).GEOGRAPHIC_TYPES.slice(geographicTypesOrder.indexOf(type)).filter((el)=>el.type !== (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.EQUIPMENT_TYPE);
            children.forEach((el)=>{
                el["dasboardSelected"] = "none";
                el["contextSelected"] = "none";
                el["dashboards"] = [];
            });
            return children;
        },
        async getContextDashboard (data) {
            if (data.contextSelected !== "none") data.dashboards = await (0, _spinalEnvViewerDashboardStandardService.dashboardService).getDashboardByType(data.contextSelected, data.type);
        },
        getItemToLink () {
            return this.allData.filter((el)=>el.contextSelected !== "none" && el.dasboardSelected !== "none");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-dashboard-standard-service":"ioaJh","../js/find":"67MBH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67MBH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
let find = async function(id, relationNames, predicate) {
    if (typeof predicate !== "function") throw new Error("predicate must be a function");
    let argNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
    let seen = new Set([
        argNode
    ]);
    let promises = [];
    let nextGen = [
        argNode
    ];
    let currentGen = [];
    let found = [];
    while(nextGen.length){
        currentGen = nextGen;
        promises = [];
        nextGen = [];
        for (let node of currentGen){
            promises.push(node.getChildren(relationNames));
            let predicated = await predicate(node);
            if (predicated) found.push(node);
        }
        let childrenArrays = await Promise.all(promises);
        for (let children of childrenArrays){
            for (let child of children)if (!seen.has(child)) {
                nextGen.push(child);
                seen.add(child);
            }
        }
    }
    return found;
};

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20Y2V":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _c("md-dialog", {
            staticClass: "dialogContainer",
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
                _vm._v("Link Elements To Dashboard")
            ]),
            _vm._v(" "),
            _c("md-dialog-content", _vm._l(_vm.allData, function(data, index) {
                return _c("div", {
                    key: index,
                    staticClass: "md-layout md-gutter"
                }, [
                    _c("div", {
                        staticClass: "md-layout-item md-size-30 title"
                    }, [
                        _vm._v(_vm._s(data.name))
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "md-layout-item md-size-30"
                    }, [
                        _c("md-field", [
                            _c("md-select", {
                                attrs: {
                                    "name": data.type,
                                    "id": "context"
                                },
                                on: {
                                    "md-closed": function($event) {
                                        return _vm.getContextDashboard(data);
                                    }
                                },
                                model: {
                                    value: data.contextSelected,
                                    callback: function($$v) {
                                        _vm.$set(data, "contextSelected", $$v);
                                    },
                                    expression: "data.contextSelected"
                                }
                            }, [
                                _c("md-option", {
                                    attrs: {
                                        "value": "none"
                                    }
                                }, [
                                    _vm._v("None")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.dashboards, function(element, index) {
                                    return _c("md-option", {
                                        key: index,
                                        attrs: {
                                            "value": element.id.get()
                                        }
                                    }, [
                                        _vm._v(_vm._s(element.name.get()))
                                    ]);
                                })
                            ], 2)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "md-layout-item md-size-30"
                    }, [
                        data.contextSelected != "none" && data.dashboards.length > 0 ? _c("md-field", [
                            _c("md-select", {
                                attrs: {
                                    "name": _vm.dash,
                                    "id": "dash"
                                },
                                model: {
                                    value: data.dasboardSelected,
                                    callback: function($$v) {
                                        _vm.$set(data, "dasboardSelected", $$v);
                                    },
                                    expression: "data.dasboardSelected"
                                }
                            }, [
                                _c("md-option", {
                                    attrs: {
                                        "value": "none"
                                    }
                                }, [
                                    _vm._v("None")
                                ]),
                                _vm._v(" "),
                                _vm._l(data.dashboards, function(dash, index) {
                                    return _c("md-option", {
                                        key: index,
                                        attrs: {
                                            "value": dash.id.get()
                                        }
                                    }, [
                                        _vm._v(_vm._s(dash.name.get()))
                                    ]);
                                })
                            ], 2)
                        ], 1) : _vm._e(),
                        _vm._v(" "),
                        data.contextSelected != "none" && data.dashboards.length == 0 ? _c("md-field", [
                            _c("span", {
                                staticClass: "md-caption noDashboard"
                            }, [
                                _vm._v("No dashboard for this type")
                            ])
                        ]) : _vm._e()
                    ], 1)
                ]);
            }), 0),
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
                    on: {
                        "click": function($event) {
                            return _vm.closeDialog(true);
                        }
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

},{}],"kllC7":[function() {},{}],"6CzBX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12ffR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("7672b03871584f2e");
    if (script.__esModule) script = script.default;
    script.render = require("5067fd0934d83cf3").render;
    script.staticRenderFns = require("5067fd0934d83cf3").staticRenderFns;
    script._scopeId = "data-v-987c20";
    require("7199e9ae261ce6e9").default(script);
    script.__scopeId = "data-v-987c20";
    script.__file = "createDashboardContext.vue";
};
initialize();
exports.default = script;

},{"7672b03871584f2e":"idXKX","5067fd0934d83cf3":"2Pc6R","7199e9ae261ce6e9":"h4u8Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"idXKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
// import { toasted } from "../js/toats";
var scriptExports = {
    name: "createDashboardContextComponent",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: ""
        };
    },
    methods: {
        opened () {
            this.inputValue = "";
        },
        removed (option) {
            let contextName = this.inputValue.trim();
            if (option.closeResult && contextName.length > 0) {
                let success = (0, _spinalEnvViewerDashboardStandardService.dashboardService).createStandardDashBoardContext(contextName);
            // if (success) {
            // toasted.success("Context created");
            // } else {
            // toasted.error("error");
            // }
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised({
                closeResult,
                inputValue: this.inputValue
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-dashboard-standard-service":"ioaJh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Pc6R":[function(require,module,exports) {
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
            _vm._v("Create Dashboard Standard context")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Enter context Name")
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
                    "disabled": !(_vm.inputValue.trim().length > 0)
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

},{}],"h4u8Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggVvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6500c32538446cdd");
    if (script.__esModule) script = script.default;
    script.render = require("33ee3b7abd85410f").render;
    script.staticRenderFns = require("33ee3b7abd85410f").staticRenderFns;
    script._scopeId = "data-v-6ee456";
    script.__cssModules = require("db463dbccbc3df69").default;
    require("888ba2699536e601").default(script);
    script.__scopeId = "data-v-6ee456";
    script.__file = "CalculParams.vue";
};
initialize();
exports.default = script;

},{"6500c32538446cdd":"keqRo","33ee3b7abd85410f":"eYFAH","db463dbccbc3df69":"3WKhx","888ba2699536e601":"3SW15","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keqRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var scriptExports = {
    name: "parameterDashboardCalculation",
    props: [
        "onFinised"
    ],
    data () {
        this.id = null;
        return {
            children: [],
            endpointTypeSelected: null,
            ruleSelected: (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES.average,
            reference: "",
            showDialog: true,
            name: "",
            dashEndpoints: [],
            rules: Object.keys((0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES)
        };
    },
    methods: {
        opened (option) {
            this.name = option.name.get();
            this.id = option.id.get();
            (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(option.id.get(), [
                (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).ENDPOINT_RELATION_NAME
            ]).then((element)=>{
                element.forEach((el)=>{
                    this.dashEndpoints.push({
                        id: el.id.get(),
                        name: el.type.get()
                    });
                });
            });
        },
        removed (option) {
            if (option) {
                if (this.ruleSelected !== (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES.reference) this.reference = null;
                (0, _spinalEnvViewerDashboardStandardService.dashboardService).addCalculationRule(this.id, this.endpointTypeSelected, this.ruleSelected, this.reference);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        formNotValid () {
            return this.endpointTypeSelected === null || this.ruleSelected === (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES.reference && this.reference === null;
        },
        getAllChildren () {
            (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.id, (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS_ORDER).then((children)=>{
                this.children = children;
            });
        },
        referenceSelect () {
            return this.ruleSelected === (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES.reference;
        }
    },
    watch: {
        ruleSelected: function() {
            if (this.ruleSelected === (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES.reference) this.getAllChildren();
        },
        endpointTypeSelected: function(newValue) {
            let dashInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(newValue);
            if (dashInfo.dash_cal_rule) {
                this.ruleSelected = dashInfo.dash_cal_rule.rule.get();
                if (dashInfo.dash_cal_rule.ref) {
                    this.reference = dashInfo.dash_cal_rule.ref.get();
                    console.log("this.reference", this.reference);
                }
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-dashboard-standard-service":"ioaJh","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYFAH":[function(require,module,exports) {
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
        _c("md-dialog-title", {
            staticStyle: {
                "text-align": "center"
            }
        }, [
            _vm._v("Parameter " + _vm._s(_vm.name) + " calculation")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("div", [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "item"
                        }
                    }, [
                        _vm._v("Select an item")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "item",
                            "id": "item"
                        },
                        model: {
                            value: _vm.endpointTypeSelected,
                            callback: function($$v) {
                                _vm.endpointTypeSelected = $$v;
                            },
                            expression: "endpointTypeSelected"
                        }
                    }, _vm._l(_vm.dashEndpoints, function(dash, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": dash.id
                            }
                        }, [
                            _vm._v(_vm._s(dash.name))
                        ]);
                    }), 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _vm.endpointTypeSelected ? _c("div", [
                _c("span", {
                    staticClass: "dashName md-title"
                }, [
                    _vm._v("Choose :")
                ]),
                _vm._v(" "),
                _vm._l(_vm.rules, function(rule, index) {
                    return _c("md-radio", {
                        key: index,
                        staticClass: "md-primary",
                        attrs: {
                            "value": index
                        },
                        model: {
                            value: _vm.ruleSelected,
                            callback: function($$v) {
                                _vm.ruleSelected = $$v;
                            },
                            expression: "ruleSelected"
                        }
                    }, [
                        _vm._v(_vm._s(rule))
                    ]);
                })
            ], 2) : _vm._e(),
            _vm._v(" "),
            _vm.referenceSelect() ? _c("div", [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "reference"
                        }
                    }, [
                        _vm._v("Select a reference")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "reference",
                            "id": "reference"
                        },
                        model: {
                            value: _vm.reference,
                            callback: function($$v) {
                                _vm.reference = $$v;
                            },
                            expression: "reference"
                        }
                    }, _vm._l(_vm.children, function(ref, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": ref.id.get()
                            }
                        }, [
                            _vm._v(_vm._s(ref.name.get()))
                        ]);
                    }), 1)
                ], 1)
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
                    "disabled": _vm.formNotValid()
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

},{}],"3WKhx":[function() {},{}],"3SW15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0zNk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("84a64ca0792b6e4d");
    if (script.__esModule) script = script.default;
    script.render = require("be9d1f950eecdd14").render;
    script.staticRenderFns = require("be9d1f950eecdd14").staticRenderFns;
    script._scopeId = "data-v-1ebdc8";
    script.__cssModules = require("b60c7f7b149ae501").default;
    require("923ffc2d9e649c42").default(script);
    script.__scopeId = "data-v-1ebdc8";
    script.__file = "globalCalcul.vue";
};
initialize();
exports.default = script;

},{"84a64ca0792b6e4d":"kkAqX","be9d1f950eecdd14":"iUQlW","b60c7f7b149ae501":"dUITY","923ffc2d9e649c42":"jSCRu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkAqX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _choice = require("../js/choice");
var _choiceDefault = parcelHelpers.interopDefault(_choice);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var _find = require("../js/find");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "globalCalculDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.rules = Object.keys((0, _spinalEnvViewerDashboardStandardService.dashboardVariables).CALCULATION_RULES).filter((el)=>el !== "reference");
        this.endpointsTypes = Object.assign([], (0, _choiceDefault.default));
        return {
            node: null,
            elementsWithDashboard: [],
            showDialog: true,
            endpointTypeSelected: null,
            ruleSelected: null,
            elementsSelected: []
        };
    },
    methods: {
        opened (option) {
            this.node = option;
            this.getAllElementsWithDashboard().then((el)=>{
                this.elementsWithDashboard = [];
                el.forEach((element)=>{
                    this.elementsWithDashboard.push({
                        node: element,
                        checked: false
                    });
                });
            });
        },
        removed (valid) {
            if (valid) this.elementsSelected.forEach((el)=>{
                (0, _spinalEnvViewerDashboardStandardService.dashboardService).addCalculationRule(el.node.info.id.get(), el.endpoint, el.rule);
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            this.onFinised(closeResult);
        },
        getAllElementsWithDashboard () {
            return (0, _find.find)(this.node.id.get(), (0, _spinalEnvViewerContextGeographicServiceDefault.default).constants.GEOGRAPHIC_RELATIONS, async (node)=>{
                let c = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(node.info.id.get(), [
                    (0, _spinalEnvViewerDashboardStandardService.dashboardVariables).ENDPOINT_RELATION_NAME
                ]);
                return c.length > 0;
            });
        },
        addElementSelected () {
            this.elementsWithDashboard.forEach((el)=>{
                if (el.checked && this.endpointTypeSelected != null && this.ruleSelected != null && !this.elementExist(el)) {
                    this.elementsSelected.push({
                        name: el.node.info.name.get(),
                        node: el.node,
                        endpoint: this.endpointTypeSelected,
                        rule: this.ruleSelected
                    });
                    el.checked = false;
                }
            });
        },
        elementExist (el) {
            let res = this.elementsSelected.find((item)=>{
                return item.node.info.id.get() == el.node.info.id.get() && item.endpoint == this.endpointTypeSelected;
            });
            return res !== undefined;
        },
        removeFromList (el) {
            this.elementsSelected = this.elementsSelected.filter((element)=>{
                return el.info.id.get() != element.node.info.id.get();
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/choice":"6l62S","spinal-env-viewer-dashboard-standard-service":"ioaJh","../js/find":"67MBH","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUQlW":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "globalCalculDialog",
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
            _vm._v("Config Calulation rules")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "dialogContainer"
        }, [
            _c("md-content", {
                staticClass: "paramContainer md-layout"
            }, [
                _c("md-content", {
                    staticClass: "md-layout-item md-size-50 paramDiv"
                }, [
                    _c("md-subheader", [
                        _vm._v("Nodes")
                    ]),
                    _vm._v(" "),
                    _c("md-list", {
                        staticClass: "nodeDiv md-scrollbar"
                    }, _vm._l(_vm.elementsWithDashboard, function(element, index) {
                        return _c("md-list-item", {
                            key: index
                        }, [
                            _c("md-checkbox", {
                                staticClass: "md-primary",
                                model: {
                                    value: element.checked,
                                    callback: function($$v) {
                                        _vm.$set(element, "checked", $$v);
                                    },
                                    expression: "element.checked"
                                }
                            }),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-list-item-text"
                            }, [
                                _vm._v(_vm._s(element.node.info.name.get()))
                            ])
                        ], 1);
                    }), 1)
                ], 1),
                _vm._v(" "),
                _c("md-content", {
                    staticClass: "md-layout-item md-size-50 paramDiv"
                }, [
                    _c("md-subheader", [
                        _vm._v("Rules")
                    ]),
                    _vm._v(" "),
                    _c("md-field", [
                        _c("label", {
                            attrs: {
                                "for": "item"
                            }
                        }, [
                            _vm._v("Select a type")
                        ]),
                        _vm._v(" "),
                        _c("md-select", {
                            attrs: {
                                "name": "item",
                                "id": "item"
                            },
                            model: {
                                value: _vm.endpointTypeSelected,
                                callback: function($$v) {
                                    _vm.endpointTypeSelected = $$v;
                                },
                                expression: "endpointTypeSelected"
                            }
                        }, _vm._l(_vm.endpointsTypes, function(endpointType, index) {
                            return _c("md-option", {
                                key: index,
                                attrs: {
                                    "value": endpointType.type
                                }
                            }, [
                                _vm._v(_vm._s(endpointType.name))
                            ]);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-content", {
                        staticClass: "ruleDiv md-scrollbar"
                    }, [
                        _c("md-list", _vm._l(_vm.rules, function(rule, index) {
                            return _c("md-list-item", {
                                key: index
                            }, [
                                _c("md-radio", {
                                    staticClass: "md-primary",
                                    attrs: {
                                        "value": index
                                    },
                                    model: {
                                        value: _vm.ruleSelected,
                                        callback: function($$v) {
                                            _vm.ruleSelected = $$v;
                                        },
                                        expression: "ruleSelected"
                                    }
                                }, [
                                    _vm._v(_vm._s(rule))
                                ])
                            ], 1);
                        }), 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "add to list",
                                expression: "'add to list'"
                            }
                        ],
                        staticClass: "md-fab md-fixed md-mini md-primary",
                        staticStyle: {
                            "top": "calc(45%)",
                            "right": "20px"
                        },
                        on: {
                            "click": _vm.addElementSelected
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("add")
                        ])
                    ], 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("md-content", {
                staticClass: "tableContainer"
            }, [
                _c("md-table", {
                    attrs: {
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
                                            "md-label": "Name"
                                        }
                                    }, [
                                        _vm._v(_vm._s(item.name))
                                    ]),
                                    _vm._v(" "),
                                    _c("md-table-cell", {
                                        attrs: {
                                            "md-label": "Endpoint Name"
                                        }
                                    }, [
                                        _vm._v(_vm._s(item.endpoint))
                                    ]),
                                    _vm._v(" "),
                                    _c("md-table-cell", {
                                        attrs: {
                                            "md-label": "Calculation"
                                        }
                                    }, [
                                        _vm._v(_vm._s(item.rule))
                                    ]),
                                    _vm._v(" "),
                                    _c("md-table-cell", {
                                        attrs: {
                                            "md-label": ""
                                        }
                                    }, [
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-dense md-primary",
                                            on: {
                                                "click": function($event) {
                                                    return _vm.removeFromList(item.node);
                                                }
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("delete")
                                            ])
                                        ], 1)
                                    ], 1)
                                ], 1);
                            }
                        }
                    ]),
                    model: {
                        value: _vm.elementsSelected,
                        callback: function($$v) {
                            _vm.elementsSelected = $$v;
                        },
                        expression: "elementsSelected"
                    }
                }, [
                    _c("md-table-toolbar", [
                        _c("h1", {
                            staticClass: "md-title"
                        }, [
                            _vm._v("Elements")
                        ])
                    ])
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
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.elementsSelected.length == 0
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

},{}],"dUITY":[function() {},{}],"jSCRu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OkO5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("11ebd8d91bea8f32");
    if (script.__esModule) script = script.default;
    script.render = require("1c0a69250b74f659").render;
    script.staticRenderFns = require("1c0a69250b74f659").staticRenderFns;
    script._scopeId = "data-v-adb62a";
    require("46187fa3d2b65bb9").default(script);
    script.__scopeId = "data-v-adb62a";
    script.__file = "bimObjectCalculReference.vue";
};
initialize();
exports.default = script;

},{"11ebd8d91bea8f32":"bGXAy","1c0a69250b74f659":"pn0qT","46187fa3d2b65bb9":"dyymq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGXAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _choice = require("../js/choice");
var _choiceDefault = parcelHelpers.interopDefault(_choice);
var _utilities = require("../js/utilities");
var _utilitiesDefault = parcelHelpers.interopDefault(_utilities);
var _spinalEnvViewerDashboardStandardService = require("spinal-env-viewer-dashboard-standard-service");
var scriptExports = {
    name: "bimObjectReferenceDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.dashEndpoints = Object.assign([], (0, _choiceDefault.default));
        return {
            bimObjectId: null,
            showDialog: true,
            endpointTypeSelected: null,
            referenceId: null,
            allEndpoints: []
        };
    },
    methods: {
        opened (option) {
            this.bimObjectId = option.id.get();
            (0, _utilitiesDefault.default)._getAllEndpointOfBimObject(option.id.get()).then((el)=>{
                this.allEndpoints = el;
            });
        },
        removed (option) {
            if (option) (0, _spinalEnvViewerDashboardStandardService.dashboardService).addReferenceToBimObject(this.bimObjectId, this.referenceId, this.endpointTypeSelected);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        formNotValid () {
            return this.referenceId !== null && this.endpointTypeSelected !== null ? false : true;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../js/choice":"6l62S","../js/utilities":"1XBKe","spinal-env-viewer-dashboard-standard-service":"ioaJh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XBKe":[function(require,module,exports) {
var _find = require("./find");
const { SpinalBmsDevice, SpinalBmsEndpoint, SpinalBmsEndpointGroup } = require("95fd8827a5d03665");
module.exports = {
    _getAllEndpointOfBimObject (bimObjectId) {
        return (0, _find.find)(bimObjectId, [
            "hasEndPoint",
            SpinalBmsDevice.relationName,
            SpinalBmsEndpoint.relationName,
            SpinalBmsEndpointGroup.relationName
        ], (node)=>{
            return node.info.type.get() === SpinalBmsEndpoint.nodeTypeName;
        });
    }
};

},{"./find":"67MBH","95fd8827a5d03665":"gzkbg"}],"pn0qT":[function(require,module,exports) {
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
        _c("md-dialog-title", {
            staticStyle: {
                "text-align": "center"
            }
        }, [
            _vm._v("Select Reference")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("div", [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "item"
                        }
                    }, [
                        _vm._v("Select an item")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "item",
                            "id": "item"
                        },
                        model: {
                            value: _vm.endpointTypeSelected,
                            callback: function($$v) {
                                _vm.endpointTypeSelected = $$v;
                            },
                            expression: "endpointTypeSelected"
                        }
                    }, _vm._l(_vm.dashEndpoints, function(dash, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": dash.type
                            }
                        }, [
                            _vm._v(_vm._s(dash.name))
                        ]);
                    }), 1)
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", [
                _c("md-field", [
                    _c("label", {
                        attrs: {
                            "for": "item"
                        }
                    }, [
                        _vm._v("Select an item")
                    ]),
                    _vm._v(" "),
                    _c("md-select", {
                        attrs: {
                            "name": "item",
                            "id": "item"
                        },
                        model: {
                            value: _vm.referenceId,
                            callback: function($$v) {
                                _vm.referenceId = $$v;
                            },
                            expression: "referenceId"
                        }
                    }, _vm._l(_vm.allEndpoints, function(endpoint, index) {
                        return _c("md-option", {
                            key: index,
                            attrs: {
                                "value": endpoint.info.id.get()
                            }
                        }, [
                            _vm._v(_vm._s(endpoint.info.name.get()))
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
                    "disabled": _vm.formNotValid()
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

},{}],"dyymq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eV0id":[function(require,module,exports) {
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

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-dashboard-standard.159ee5de.js.map
