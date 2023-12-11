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
})({"1jv1j":[function(require,module,exports) {
// import "./src/js/registerPanel";
// import {
//   spinalContextMenuService
// } from "spinal-env-viewer-context-menu-service";
// // import CalendarBtn from "./src/buttons/calendarBtn.js";
// import TaskConfigurationBtn from "./src/buttons/configurationBtn.js";
// import TaskManagerBtn from "./src/buttons/manageTaskBtn.js";
// const SIDEBAR = "GraphManagerSideBar";
// const HEADERBAR = "GraphManagerTopBar";
// spinalContextMenuService.registerApp(SIDEBAR, new TaskManagerBtn(), [3]);
// spinalContextMenuService.registerApp(HEADERBAR, new TaskConfigurationBtn(), [
//   3
// ]);
var _buttons = require("./src/buttons");
var _dialogs = require("./src/vue/dialogs");
var _panels = require("./src/vue/panels");

},{"./src/buttons":"lLeOD","./src/vue/dialogs":"71SVR","./src/vue/panels":"9BbSS"}],"lLeOD":[function(require,module,exports) {
var _createContext = require("./createContext");
var _createTask = require("./createTask");
var _eventDetail = require("./event_detail");
var _color = require("./standard_buttons/color");
var _isolate = require("./standard_buttons/isolate");
var _select = require("./standard_buttons/select");
var _zoom = require("./standard_buttons/zoom");

},{"./createContext":"iq9Rl","./createTask":"jsG4e","./event_detail":"cT6rS","./standard_buttons/color":"71SWh","./standard_buttons/isolate":"2dscn","./standard_buttons/select":"1EoGn","./standard_buttons/zoom":"glQK8"}],"iq9Rl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
const HEADERBAR = "GraphManagerTopBar";
class CreateTaskContextButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Task Context", "This button allows you to create task context", {
            icon: "calendar_today",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTaskContextDialog", {});
    }
}
exports.default = CreateTaskContextButton;
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADERBAR, new CreateTaskContextButton(), [
    3
]);

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

},{}],"jsG4e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
// import {
//   groupManagerService
// } from "spinal-env-viewer-plugin-group-manager-service";
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
const SIDEBAR = "GraphManagerSideBar";
const CIRCULAR_MENU_HOOK = "circularMenu";
class CreateTaskButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Task", "This button allows you to create task", {
            icon: "calendar_today",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.selectedNode && option.selectedNode.type.get() === (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE) return Promise.resolve(-1);
        return Promise.resolve(true);
    // if (typeof option === "undefined") return Promise.resolve(true);
    // const isContextGroup = option.context.type.get() === CONTEXT_TYPE;
    // const isGroup = groupManagerService.isGroup(type);
    // return Promise.resolve(isContextGroup && isGroup ? true : -1)
    }
    action(option) {
        const params = Object.assign({}, option);
        params.isEventContext = option.context ? option.context.type.get() === (0, _spinalEnvViewerTaskService.CONTEXT_TYPE) : false;
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("taskPanel", params);
    }
}
exports.default = CreateTaskButton;
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, new CreateTaskButton(), [
    3
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(CIRCULAR_MENU_HOOK, new CreateTaskButton(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-task-service":"4IrFb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cT6rS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
const SIDEBAR = "GraphManagerSideBar";
class SeeDetailBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("see event detail Task", "This button allows you to see event detail", {
            icon: "info",
            icon_type: "in",
            backgroundColor: "#356BAB",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        if (option.selectedNode.type.get() === (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        const params = option.selectedNode.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("seeEventDetail", params);
    }
}
exports.default = SeeDetailBtn;
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, new SeeDetailBtn(), [
    3
]);

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-task-service":"4IrFb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71SWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorElementButton", ()=>ColorElementButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerPluginNoteStandardButtonsService = require("spinal-env-viewer-plugin-note-standard-buttons-service");
const SIDEBAR = "GraphManagerSideBar";
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
        if (contextType !== (0, _spinalEnvViewerTaskService.CONTEXT_TYPE) || nodeType === (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE) return Promise.resolve(-1);
        return (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).getIcon(option.selectedNode.get(), option.context.get(), `${(0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE}Group`).then((isColored)=>{
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
            (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).restoreItem(selected, context, (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE, `${(0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE}Group`);
        } else {
            this.icon = "visibility_off";
            this.isColored = true;
            (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).colorItem(selected, context, (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE, `${(0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE}Group`);
        }
        window.NOP_VIEWER.impl.invalidate(0, 1, 0);
    }
}
const colorElementButton = new ColorElementButton();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, colorElementButton, [
    3
]);
exports.default = colorElementButton;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-task-service":"4IrFb","spinal-env-viewer-plugin-note-standard-buttons-service":"9JoRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JoRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Standard_buttons_service", ()=>Standard_buttons_service);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _utilities = require("spinal-env-viewer-plugin-standard_button/js/utilities");
//   import {
//     SPINAL_TICKET_SERVICE_TICKET_TYPE,
//     SPINAL_TICKET_SERVICE_TICKET_RELATION_NAME,
//     SPINAL_TICKET_SERVICE_STEP_TYPE,
//   } from "spinal-service-ticket/dist/Constants";
let ItemColoredMap = new Map();
let BimElementsColor = new Map();
class Standard_buttons_service {
    static getIcon(nodeInfo, contextInfo, groupType) {
        return this._isColored(nodeInfo, contextInfo, groupType).then((isColored)=>{
            return isColored;
        });
    }
    static restoreItem(nodeInfo, contextInfo, childrenType, groupType) {
        this.getGroups(nodeInfo, contextInfo, groupType).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                this._restoreGroup(contextInfo.id, id, childrenType);
            });
        });
    }
    static colorItem(nodeInfo, contextInfo, childrenType, groupType) {
        this.getGroups(nodeInfo, contextInfo, groupType).then((res)=>{
            res.forEach((el)=>{
                let id = el.id;
                let color = el.color ? el.color : undefined;
                this._colorGroup(contextInfo.id, id, color, childrenType);
            });
        });
    }
    static getGroups(selectedNode, contextInfo, groupType) {
        const type = selectedNode.type;
        const nodeId = selectedNode.id;
        const contextId = contextInfo.id;
        if (type === groupType) return Promise.resolve([
            selectedNode
        ]);
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === groupType;
        //   return groupManagerService.isGroup(argType);
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    static async getBimObjects(contextId, groupId, nodeType) {
        const nodes = await this._findItemByNodeType(groupId, contextId, nodeType);
        const parents = await this._getParents(nodes);
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
    static _isColored(selectedNode, contextInfo, groupType) {
        return this.getGroups(selectedNode, contextInfo, groupType).then((res)=>{
            if (res.length === 0) return false;
            for(let index = 0; index < res.length; index++){
                const id = res[index].id;
                if (typeof ItemColoredMap.get(id) === "undefined") return false;
            }
            return true;
        });
    }
    static _colorGroup(contextId, groupId, argColor, nodeType) {
        return this.getBimObjects(contextId, groupId, nodeType).then((res)=>{
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
    static _restoreGroup(contextId, groupId, nodeType) {
        ItemColoredMap.delete(groupId);
        return this.getBimObjects(contextId, groupId, nodeType).then((res)=>{
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
    static _findItemByNodeType(startNodeId, contextId, nodeType) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startNodeId, contextId, (node)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
            let argType = node.getType().get();
            return argType === nodeType;
        }).then((res)=>{
            return res.map((el)=>{
                return el.get();
            });
        });
    }
    static _convertHexColorToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static _getParents(nodes) {
        const promises = nodes.map(async (el)=>{
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(el.id);
            const parents = await realNode.getParents();
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
    static _getItemsBim(nodeInfo) {
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
    static async getGeographicElement(ticketId) {
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(ticketId);
        const parents = await realNode.getParents();
        return parents.filter((el)=>{
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
            return (0, _utilities.isShownParam).indexOf(el.getType().get()) !== -1;
        }).map((el)=>el.info);
    }
    static async getNodesParents(startNodeId, contextId, nodeType) {
        const nodes = await this._findItemByNodeType(startNodeId, contextId, nodeType);
        const promises = nodes.map((el)=>this.getGeographicElement(el.id));
        return Promise.all(promises).then(async (nodesParentNode)=>{
            const el = nodesParentNode.flat();
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
exports.default = Standard_buttons_service;

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-standard_button/js/utilities":"ktewa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ktewa":[function(require,module,exports) {
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

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","spinal-env-viewer-context-geographic-service/build/constants":"eV0id","spinal-model-bmsnetwork":"gzkbg","spinal-env-viewer-plugin-network-tree-service":"7oQhf"}],"2dscn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerPluginNoteStandardButtonsService = require("spinal-env-viewer-plugin-note-standard-buttons-service");
const SIDEBAR = "GraphManagerSideBar";
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
        // const nodeType = option.selectedNode.type.get();
        if (contextType === (0, _spinalEnvViewerTaskService.CONTEXT_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).getNodesParents(nodeId, contextId, (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            window.spinal.ForgeViewer.viewer.impl.visibilityManager.isolate(el.ids, el.model);
        });
    }
}
const isolateElementOnMaquette = new IsolateElementOnMaquette();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, isolateElementOnMaquette, [
    3
]);
exports.default = isolateElementOnMaquette;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-task-service":"4IrFb","spinal-env-viewer-plugin-note-standard-buttons-service":"9JoRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1EoGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPluginNoteStandardButtonsService = require("spinal-env-viewer-plugin-note-standard-buttons-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
const SIDEBAR = "GraphManagerSideBar";
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
        if (contextType === (0, _spinalEnvViewerTaskService.CONTEXT_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).getNodesParents(nodeId, contextId, (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        parents.forEach((el)=>{
            el.model.selector.setSelection(el.ids, el.model, "selectOnly");
        });
    }
}
const selectElementOnMaquette = new SelectElementOnMaquette();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, selectElementOnMaquette, [
    3
]);
exports.default = selectElementOnMaquette;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-plugin-note-standard-buttons-service":"9JoRD","spinal-env-viewer-task-service":"4IrFb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glQK8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZoomElementOnMaquette", ()=>ZoomElementOnMaquette);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPluginNoteStandardButtonsService = require("spinal-env-viewer-plugin-note-standard-buttons-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
const SIDEBAR = "GraphManagerSideBar";
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
        if (contextType === (0, _spinalEnvViewerTaskService.CONTEXT_TYPE)) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action(option) {
        const nodeId = option.selectedNode.id.get();
        const contextId = option.context.id.get();
        const parents = await (0, _spinalEnvViewerPluginNoteStandardButtonsService.Standard_buttons_service).getNodesParents(nodeId, contextId, (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE);
        if (!parents || parents && parents.length === 0) {
            window.alert("No parent on bimMaquette");
            return;
        }
        const dbIds = parents.map((el)=>el.ids);
        window.spinal.ForgeViewer.viewer.fitToView(dbIds.flat());
    }
}
const zoomElementOnMaquette = new ZoomElementOnMaquette();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, zoomElementOnMaquette, [
    3
]);
exports.default = zoomElementOnMaquette;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-plugin-note-standard-buttons-service":"9JoRD","spinal-env-viewer-task-service":"4IrFb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71SVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _createContextVue = require("./createContext.vue");
var _createContextVueDefault = parcelHelpers.interopDefault(_createContextVue);
var _createTaskVue = require("./createTask.vue");
var _createTaskVueDefault = parcelHelpers.interopDefault(_createTaskVue);
var _editTaskVue = require("./editTask.vue");
var _editTaskVueDefault = parcelHelpers.interopDefault(_editTaskVue);
var _confirmDialogVue = require("./confirm-dialog.vue");
var _confirmDialogVueDefault = parcelHelpers.interopDefault(_confirmDialogVue);
var _deleteAllVue = require("./delete-all.vue");
var _deleteAllVueDefault = parcelHelpers.interopDefault(_deleteAllVue);
const dialogs = [
    {
        name: "createTaskContextDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createContextVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "createTaskDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _createTaskVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "editTaskDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _editTaskVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "confirmDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _confirmDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "deleteAllDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _deleteAllVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount(dialogs[index]);

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","vue":"gt5MM","./createContext.vue":"jtTvw","./createTask.vue":"cDaBN","./editTask.vue":"irCJb","./confirm-dialog.vue":"hNLxP","./delete-all.vue":"jVpnz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtTvw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ca5b71e57bf6db16");
    if (script.__esModule) script = script.default;
    script.render = require("afaf2aca2b688c41").render;
    script.staticRenderFns = require("afaf2aca2b688c41").staticRenderFns;
    script._scopeId = "data-v-0f46e5";
    script.__cssModules = require("eddd5913f351f4d9").default;
    require("bcd742a27c4e10ed").default(script);
    script.__scopeId = "data-v-0f46e5";
    script.__file = "createContext.vue";
};
initialize();
exports.default = script;

},{"ca5b71e57bf6db16":"5zgC5","afaf2aca2b688c41":"gB5eY","eddd5913f351f4d9":"5rOop","bcd742a27c4e10ed":"3chTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5zgC5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var scriptExports = {
    name: "createTaskContextDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            name: "",
            showDialog: true,
            callback: undefined
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            if (option.callback) this.callback = option.callback;
        },
        async removed (option) {
            if (option) (0, _spinalEnvViewerTaskService.SpinalEventService).createEventContext(this.name.trim(), []).then((el)=>{
                if (this.callback && typeof this.callback === "function") this.callback(el.get());
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disabled () {
            return !(this.name && this.name.trim().length > 0);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gB5eY":[function(require,module,exports) {
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Create Event Context")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Context name")
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
                _vm._v("Cancel")
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
                _vm._v("OK")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5rOop":[function() {},{}],"3chTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDaBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("96390a4e342be4a1");
    if (script.__esModule) script = script.default;
    script.render = require("eab3ad9ba127c69c").render;
    script.staticRenderFns = require("eab3ad9ba127c69c").staticRenderFns;
    script._scopeId = "data-v-c561d8";
    script.__cssModules = require("d9daa9149bef7af8").default;
    require("121d70f81f8324ea").default(script);
    script.__scopeId = "data-v-c561d8";
    script.__file = "createTask.vue";
};
initialize();
exports.default = script;

},{"96390a4e342be4a1":"hph9p","eab3ad9ba127c69c":"e4MdJ","d9daa9149bef7af8":"1tZBA","121d70f81f8324ea":"8uduj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hph9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _vueDatetime = require("vue-datetime");
var _selectTaskGroupVue = require("../components/selectTaskGroup.vue");
var _selectTaskGroupVueDefault = parcelHelpers.interopDefault(_selectTaskGroupVue);
var _taskFormVue = require("../components/taskForm.vue");
var _taskFormVueDefault = parcelHelpers.interopDefault(_taskFormVue);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
// import { SpinalForgeViewer } from "spinal-env-viewer-plugin-forge";
// import "vue-datetime/dist/vue-datetime.css";
var scriptExports = {
    name: "createTaskDialog",
    components: {
        "select-task-group": (0, _selectTaskGroupVueDefault.default),
        datetime: (0, _vueDatetime.Datetime),
        "task-form": (0, _taskFormVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.PERIODS = Object.freeze((0, _spinalEnvViewerTaskService.Period));
        this.PAGES = {
            selection: 0,
            creation: 1
        };
        this.beginInputStyle = {
            "border-bottom": "1px solid white",
            width: "100%"
        };
        return {
            pageSelected: this.PAGES.selection,
            // periodicity: { count: 1, period: 86400000 },
            nodeInfo: undefined,
            // repeatOnce: true,
            startDateMin: (0, _momentDefault.default)().toISOString(),
            endDateMin: (0, _momentDefault.default)().add(1, "h").toISOString(),
            endDateMax: (0, _momentDefault.default)(new Date().setHours(23, 59, 59, 999)).toISOString(),
            repeatEndMin: null,
            repeatEndMax: null,
            event: {
                contextId: "",
                groupId: "",
                categoryId: "",
                assignedTo: "",
                startDate: (0, _momentDefault.default)().toISOString(),
                endDate: (0, _momentDefault.default)().add(1, "h").toISOString(),
                repeatEnd: null,
                periodicity: {
                    count: 1,
                    period: 86400000
                },
                name: "",
                description: "",
                repeat: false
            },
            showDialog: true
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            this.nodeInfo = option;
        },
        async removed (option) {
            if (option) {
                const event = Object.assign({}, this.event);
                if (typeof this.nodeInfo.selectedNode === "undefined") this.nodeInfo.selectedNode = await this.createBIMObject(this.nodeInfo.dbid, this.nodeInfo.model3d);
                const userInfo = window.spinal.spinalSystem.getUser();
                let nodeId = this.nodeInfo.selectedNode.id.get();
                event.nodeId = nodeId;
                event.startDate = (0, _momentDefault.default)(event.startDate).valueOf();
                event.endDate = (0, _momentDefault.default)(event.endDate).valueOf();
                // event.periodicity = !this.repeatOnce
                //   ? this.periodicity.count * this.periodicity.period
                //   : undefined;
                // if (this.repeatOnce) {
                await (0, _spinalEnvViewerTaskService.SpinalEventService).createEvent(event.contextId, event.groupId, nodeId, event, userInfo);
                (0, _eventDefault.default).$emit((0, _event.EVENT_TYPES).CREATED);
            // } else {
            //   const periodicity =
            //     event.periodicity.count * event.periodicity.period;
            //   await SpinalEventService.createTaskBetween(
            //     event.startDate,
            //     event.endDate,
            //     periodicity,
            //     event.contextId,
            //     event.groupId,
            //     nodeId,
            //     event,
            //     userInfo
            //   );
            // }
            }
            this.showDialog = false;
        },
        createBIMObject (dbId, model) {
            return new Promise((resolve, reject)=>{
                model.getBulkProperties([
                    dbId
                ], {
                    propFilter: [
                        "name"
                    ]
                }, async (el)=>{
                    const name = el[0].name;
                    // const node = await SpinalForgeViewer.bimObjectService.createBIMObject(
                    const node = await window.spinal.BimObjectService.createBIMObject(dbId, name, model);
                    resolve(node);
                });
            });
        },
        selectContext (id) {
            this.event.contextId = id;
            this.event.groupId = undefined;
            this.event.categoryId = undefined;
        },
        selectCategory (id) {
            this.event.groupId = undefined;
            this.event.categoryId = id;
        },
        selectGroup (id) {
            this.event.groupId = id;
        },
        goToNext () {
            this.pageSelected = this.PAGES.creation;
        },
        async goToBack () {
            let reference;
            this.pageSelected = this.PAGES.selection;
        // while (typeof reference === "undefined") {
        //   reference = this.$refs["select-task-group"];
        //   console.log("reference", reference);
        // }
        // await reference.selectContext(this.contextId);
        // await reference.selectCategory(this.categoryId);
        // await reference.selectGroup(this.groupId);
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disableNextBtn () {
            return !(this.event.contextId && this.event.contextId.trim().length > 0 && this.event.groupId && this.event.groupId.trim().length > 0 && this.event.categoryId && this.event.categoryId.trim().length > 0);
        },
        disableOkBtn () {
            const condition = this.event.startDate && this.event.startDate.toString().trim().length > 0 && this.event.endDate && this.event.endDate.toString().trim().length > 0 && this.event.periodicity && this.event.periodicity.toString().trim().length > 0 && this.event.name && this.event.name.toString().trim().length > 0;
            if (!this.event.repeat) return !condition;
            return !(condition && this.event.periodicity.count >= 1);
        // return !(
        //   this.event.startDate &&
        //   this.event.startDate.toString().trim().length > 0 &&
        //   this.event.endDate &&
        //   this.event.endDate.toString().trim().length > 0 &&
        //   this.event.periodicity &&
        //   this.event.periodicity.toString().trim().length > 0 &&
        //   this.event.name &&
        //   this.event.name.toString().trim().length > 0 &&
        //   this.event.periodicity.count >= 1
        // );
        }
    },
    watch: {
        "event.startDate": function() {
            this.endDateMin = this.event.startDate;
            this.endDateMax = (0, _momentDefault.default)(new Date(this.event.startDate).setHours(23, 59, 59, 999)).toISOString();
            this.event.endDate = (0, _momentDefault.default)(this.event.startDate).add(1, "h").toISOString();
        },
        "event.repeat": function() {
            if (this.event.repeat) this.event.repeatEnd = (0, _momentDefault.default)(this.event.endDate).add(31, "d").toISOString();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","vue-datetime":"1I8ef","../components/selectTaskGroup.vue":"TjfyS","../components/taskForm.vue":"doRPm","moment":"jwcsj","../../js/event":"kMoPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I8ef":[function(require,module,exports) {
/*!
 * vue-datetime v1.0.0-beta.14
 * (c) 2020 Mario Juárez
 * Released under the MIT License.
 */ (function(global, factory) {
    factory(exports, require("ae54e1f81463f742"));
})(this, function(exports1, luxon) {
    "use strict";
    var FlowManager = function FlowManager(flow, endStatus) {
        if (flow === void 0) flow = [];
        if (endStatus === void 0) endStatus = null;
        this.flow = flow;
        this.endStatus = endStatus;
        this.diversionNext = null;
    };
    FlowManager.prototype.step = function step(index) {
        return this.flow.length > index ? this.flow[index] : this.endStatus;
    };
    FlowManager.prototype.first = function first() {
        return this.step(0);
    };
    FlowManager.prototype.next = function next(current) {
        if (this.diversionNext) {
            var next = this.diversionNext;
            this.diversionNext = null;
            return next;
        }
        return this.step(this.flow.indexOf(current) + 1);
    };
    FlowManager.prototype.diversion = function diversion(next) {
        this.diversionNext = next;
    };
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function datetimeFromISO(string) {
        var datetime = luxon.DateTime.fromISO(string).toUTC();
        return datetime.isValid ? datetime : null;
    }
    function monthDays(year, month, weekStart) {
        var monthDate = luxon.DateTime.local(year, month, 1);
        var firstDay = monthDate.weekday - weekStart;
        if (firstDay < 0) firstDay += 7;
        var lastDay = (weekStart - monthDate.weekday - monthDate.daysInMonth) % 7;
        if (lastDay < 0) lastDay += 7;
        return Array.apply(null, Array(monthDate.daysInMonth + firstDay + lastDay)).map(function(value, index) {
            return index + 1 <= firstDay || index >= firstDay + monthDate.daysInMonth ? null : index + 1 - firstDay;
        });
    }
    function monthDayIsDisabled(minDate, maxDate, year, month, day) {
        var date = luxon.DateTime.fromObject({
            year: year,
            month: month,
            day: day,
            zone: "UTC"
        });
        minDate = minDate ? startOfDay(minDate.setZone("UTC", {
            keepLocalTime: true
        })) : null;
        maxDate = maxDate ? startOfDay(maxDate.setZone("UTC", {
            keepLocalTime: true
        })) : null;
        return minDate && date < minDate || maxDate && date > maxDate;
    }
    function monthIsDisabled(minDate, maxDate, year, month) {
        return minDate && minDate > luxon.DateTime.utc(year, month, luxon.DateTime.utc(year, month).daysInMonth) || maxDate && maxDate < luxon.DateTime.utc(year, month, 1);
    }
    function yearIsDisabled(minDate, maxDate, year) {
        var minYear = minDate ? minDate.year : null;
        var maxYear = maxDate ? maxDate.year : null;
        return minYear && year < minYear || maxYear && year > maxYear;
    }
    function timeComponentIsDisabled(min, max, component) {
        return min !== null && component < min || max !== null && component > max;
    }
    function weekdays(weekStart) {
        if (--weekStart < 0) weekStart = 6;
        var weekDays = luxon.Info.weekdays("short").map(function(weekday) {
            return capitalize(weekday);
        });
        weekDays = weekDays.concat(weekDays.splice(0, weekStart));
        return weekDays;
    }
    function months() {
        return luxon.Info.months().map(function(month) {
            return capitalize(month);
        });
    }
    function hours(step) {
        return Array.apply(null, Array(Math.ceil(24 / step))).map(function(item, index) {
            return index * step;
        });
    }
    function minutes(step) {
        return Array.apply(null, Array(Math.ceil(60 / step))).map(function(item, index) {
            return index * step;
        });
    }
    function years(current) {
        return Array.apply(null, Array(201)).map(function(item, index) {
            return current - 100 + index;
        });
    }
    function pad(number) {
        return number < 10 ? "0" + number : number;
    }
    function startOfDay(datetime) {
        return datetime.startOf("day");
    }
    function createFlowManager(flow) {
        return new FlowManager(flow, "end");
    }
    function createFlowManagerFromType(type) {
        var flow = [];
        switch(type){
            case "datetime":
                flow = [
                    "date",
                    "time"
                ];
                break;
            case "time":
                flow = [
                    "time"
                ];
                break;
            default:
                flow = [
                    "date"
                ];
        }
        return new FlowManager(flow, "end");
    }
    function weekStart() {
        var weekstart;
        try {
            weekstart = require("a49acbbfa3fae061").version ? require("3a81313891da69d5") : null;
        } catch (e) {
            weekstart = window.weekstart;
        }
        var firstDay = weekstart ? weekstart.getWeekStartByLocale(luxon.Settings.defaultLocale) : 1;
        return firstDay === 0 ? 7 : firstDay;
    }
    var DatetimeCalendar = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "vdatetime-calendar"
            }, [
                _c("div", {
                    staticClass: "vdatetime-calendar__navigation"
                }, [
                    _c("div", {
                        staticClass: "vdatetime-calendar__navigation--previous",
                        on: {
                            "click": _vm.previousMonth
                        }
                    }, [
                        _c("svg", {
                            attrs: {
                                "xmlns": "http://www.w3.org/2000/svg",
                                "viewBox": "0 0 61.3 102.8"
                            }
                        }, [
                            _c("path", {
                                attrs: {
                                    "fill": "none",
                                    "stroke": "#444",
                                    "stroke-width": "14",
                                    "stroke-miterlimit": "10",
                                    "d": "M56.3 97.8L9.9 51.4 56.3 5"
                                }
                            })
                        ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "vdatetime-calendar__current--month"
                    }, [
                        _vm._v(_vm._s(_vm.monthName) + " " + _vm._s(_vm.newYear))
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "vdatetime-calendar__navigation--next",
                        on: {
                            "click": _vm.nextMonth
                        }
                    }, [
                        _c("svg", {
                            attrs: {
                                "xmlns": "http://www.w3.org/2000/svg",
                                "viewBox": "0 0 61.3 102.8"
                            }
                        }, [
                            _c("path", {
                                attrs: {
                                    "fill": "none",
                                    "stroke": "#444",
                                    "stroke-width": "14",
                                    "stroke-miterlimit": "10",
                                    "d": "M56.3 97.8L9.9 51.4 56.3 5"
                                }
                            })
                        ])
                    ])
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "vdatetime-calendar__month"
                }, [
                    _vm._l(_vm.weekdays, function(weekday) {
                        return _c("div", {
                            staticClass: "vdatetime-calendar__month__weekday"
                        }, [
                            _vm._v(_vm._s(weekday))
                        ]);
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.days, function(day) {
                        return _c("div", {
                            staticClass: "vdatetime-calendar__month__day",
                            class: {
                                "vdatetime-calendar__month__day--selected": day.selected,
                                "vdatetime-calendar__month__day--disabled": day.disabled
                            },
                            on: {
                                "click": function($event) {
                                    _vm.selectDay(day);
                                }
                            }
                        }, [
                            _c("span", [
                                _c("span", [
                                    _vm._v(_vm._s(day.number))
                                ])
                            ])
                        ]);
                    })
                ], 2)
            ]);
        },
        staticRenderFns: [],
        props: {
            year: {
                type: Number,
                required: true
            },
            month: {
                type: Number,
                required: true
            },
            day: {
                type: Number,
                default: null
            },
            disabled: {
                type: Array
            },
            minDate: {
                type: luxon.DateTime,
                default: null
            },
            maxDate: {
                type: luxon.DateTime,
                default: null
            },
            weekStart: {
                type: Number,
                default: 1
            }
        },
        data: function data() {
            return {
                newDate: luxon.DateTime.fromObject({
                    year: this.year,
                    month: this.month,
                    zone: "UTC"
                }),
                weekdays: weekdays(this.weekStart),
                months: months()
            };
        },
        computed: {
            newYear: function newYear() {
                return this.newDate.year;
            },
            newMonth: function newMonth() {
                return this.newDate.month;
            },
            monthName: function monthName() {
                return this.months[this.newMonth - 1];
            },
            days: function days() {
                var this$1 = this;
                return monthDays(this.newYear, this.newMonth, this.weekStart).map(function(day) {
                    return {
                        number: day,
                        selected: day && this$1.year === this$1.newYear && this$1.month === this$1.newMonth && this$1.day === day,
                        disabled: !day || monthDayIsDisabled(this$1.minDate, this$1.maxDate, this$1.newYear, this$1.newMonth, day)
                    };
                });
            }
        },
        methods: {
            selectDay: function selectDay(day) {
                if (day.disabled) return;
                this.$emit("change", this.newYear, this.newMonth, day.number);
            },
            previousMonth: function previousMonth() {
                this.newDate = this.newDate.minus({
                    months: 1
                });
            },
            nextMonth: function nextMonth() {
                this.newDate = this.newDate.plus({
                    months: 1
                });
            }
        }
    };
    var DatetimeTimePicker = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                class: {
                    "vdatetime-time-picker": true,
                    "vdatetime-time-picker__with-suffix": _vm.use12Hour
                }
            }, [
                _c("div", {
                    ref: "hourList",
                    staticClass: "vdatetime-time-picker__list vdatetime-time-picker__list--hours"
                }, _vm._l(_vm.hours, function(hour) {
                    return _c("div", {
                        staticClass: "vdatetime-time-picker__item",
                        class: {
                            "vdatetime-time-picker__item--selected": hour.selected,
                            "vdatetime-time-picker__item--disabled": hour.disabled
                        },
                        on: {
                            "click": function($event) {
                                _vm.selectHour(hour);
                            }
                        }
                    }, [
                        _vm._v(_vm._s(_vm.formatHour(hour.number)))
                    ]);
                })),
                _vm._v(" "),
                _c("div", {
                    ref: "minuteList",
                    staticClass: "vdatetime-time-picker__list vdatetime-time-picker__list--minutes"
                }, _vm._l(_vm.minutes, function(minute) {
                    return _c("div", {
                        staticClass: "vdatetime-time-picker__item",
                        class: {
                            "vdatetime-time-picker__item--selected": minute.selected,
                            "vdatetime-time-picker__item--disabled": minute.disabled
                        },
                        on: {
                            "click": function($event) {
                                _vm.selectMinute(minute);
                            }
                        }
                    }, [
                        _vm._v(_vm._s(minute.number))
                    ]);
                })),
                _vm._v(" "),
                _vm.use12Hour ? _c("div", {
                    ref: "suffixList",
                    staticClass: "vdatetime-time-picker__list vdatetime-time-picker__list--suffix"
                }, [
                    _c("div", {
                        staticClass: "vdatetime-time-picker__item",
                        class: {
                            "vdatetime-time-picker__item--selected": _vm.hour < 12
                        },
                        on: {
                            "click": function($event) {
                                _vm.selectSuffix("am");
                            }
                        }
                    }, [
                        _vm._v("am")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "vdatetime-time-picker__item",
                        class: {
                            "vdatetime-time-picker__item--selected": _vm.hour >= 12
                        },
                        on: {
                            "click": function($event) {
                                _vm.selectSuffix("pm");
                            }
                        }
                    }, [
                        _vm._v("pm")
                    ])
                ]) : _vm._e()
            ]);
        },
        staticRenderFns: [],
        props: {
            hour: {
                type: Number,
                required: true
            },
            minute: {
                type: Number,
                required: true
            },
            use12Hour: {
                type: Boolean,
                default: false
            },
            hourStep: {
                type: Number,
                default: 1
            },
            minuteStep: {
                type: Number,
                default: 1
            },
            minTime: {
                type: String,
                default: null
            },
            maxTime: {
                type: String,
                default: null
            }
        },
        computed: {
            hours: function hours$1() {
                var this$1 = this;
                return hours(this.hourStep).filter(function(hour) {
                    if (!this$1.use12Hour) return true;
                    else {
                        if (this$1.hour < 12) return hour < 12;
                        else return hour >= 12;
                    }
                }).map(function(hour) {
                    return {
                        number: pad(hour),
                        selected: hour === this$1.hour,
                        disabled: timeComponentIsDisabled(this$1.minHour, this$1.maxHour, hour)
                    };
                });
            },
            minutes: function minutes$1() {
                var this$1 = this;
                return minutes(this.minuteStep).map(function(minute) {
                    return {
                        number: pad(minute),
                        selected: minute === this$1.minute,
                        disabled: timeComponentIsDisabled(this$1.minMinute, this$1.maxMinute, minute)
                    };
                });
            },
            minHour: function minHour() {
                return this.minTime ? parseInt(this.minTime.split(":")[0]) : null;
            },
            minMinute: function minMinute() {
                return this.minTime && this.minHour === this.hour ? parseInt(this.minTime.split(":")[1]) : null;
            },
            maxHour: function maxHour() {
                return this.maxTime ? parseInt(this.maxTime.split(":")[0]) : null;
            },
            maxMinute: function maxMinute() {
                return this.maxTime && this.maxHour === this.hour ? parseInt(this.maxTime.split(":")[1]) : null;
            }
        },
        methods: {
            selectHour: function selectHour(hour) {
                if (hour.disabled) return;
                this.$emit("change", {
                    hour: parseInt(hour.number)
                });
            },
            selectMinute: function selectMinute(minute) {
                if (minute.disabled) return;
                this.$emit("change", {
                    minute: parseInt(minute.number)
                });
            },
            selectSuffix: function selectSuffix(suffix) {
                if (suffix === "am") {
                    if (this.hour >= 12) this.$emit("change", {
                        hour: parseInt(this.hour - 12),
                        suffixTouched: true
                    });
                }
                if (suffix === "pm") {
                    if (this.hour < 12) this.$emit("change", {
                        hour: parseInt(this.hour + 12),
                        suffixTouched: true
                    });
                }
            },
            formatHour: function formatHour(hour) {
                var numHour = Number(hour);
                if (this.use12Hour) {
                    if (numHour === 0) return 12;
                    if (numHour > 12) return numHour - 12;
                    return numHour;
                }
                return hour;
            }
        },
        mounted: function mounted() {
            var selectedHour = this.$refs.hourList.querySelector(".vdatetime-time-picker__item--selected");
            var selectedMinute = this.$refs.minuteList.querySelector(".vdatetime-time-picker__item--selected");
            this.$refs.hourList.scrollTop = selectedHour ? selectedHour.offsetTop - 250 : 0;
            this.$refs.minuteList.scrollTop = selectedMinute ? selectedMinute.offsetTop - 250 : 0;
        }
    };
    var DatetimeYearPicker = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "vdatetime-year-picker"
            }, [
                _c("div", {
                    ref: "yearList",
                    staticClass: "vdatetime-year-picker__list vdatetime-year-picker__list"
                }, _vm._l(_vm.years, function(year) {
                    return _c("div", {
                        staticClass: "vdatetime-year-picker__item",
                        class: {
                            "vdatetime-year-picker__item--selected": year.selected,
                            "vdatetime-year-picker__item--disabled": year.disabled
                        },
                        on: {
                            "click": function($event) {
                                _vm.select(year);
                            }
                        }
                    }, [
                        _vm._v(_vm._s(year.number) + " ")
                    ]);
                }))
            ]);
        },
        staticRenderFns: [],
        props: {
            year: {
                type: Number,
                required: true
            },
            minDate: {
                type: luxon.DateTime,
                default: null
            },
            maxDate: {
                type: luxon.DateTime,
                default: null
            }
        },
        computed: {
            years: function years$1() {
                var this$1 = this;
                return years(this.year).map(function(year) {
                    return {
                        number: year,
                        selected: year === this$1.year,
                        disabled: !year || yearIsDisabled(this$1.minDate, this$1.maxDate, year)
                    };
                });
            }
        },
        methods: {
            select: function select(year) {
                if (year.disabled) return;
                this.$emit("change", parseInt(year.number));
            },
            scrollToCurrent: function scrollToCurrent() {
                if (this.$refs.yearList) {
                    var selectedYear = this.$refs.yearList.querySelector(".vdatetime-year-picker__item--selected");
                    this.$refs.yearList.scrollTop = selectedYear ? selectedYear.offsetTop - 250 : 0;
                }
            }
        },
        mounted: function mounted() {
            this.scrollToCurrent();
        },
        updated: function updated() {
            this.scrollToCurrent();
        }
    };
    var DatetimeMonthPicker = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "vdatetime-month-picker"
            }, [
                _c("div", {
                    ref: "monthList",
                    staticClass: "vdatetime-month-picker__list vdatetime-month-picker__list"
                }, _vm._l(_vm.months, function(month) {
                    return _c("div", {
                        staticClass: "vdatetime-month-picker__item",
                        class: {
                            "vdatetime-month-picker__item--selected": month.selected,
                            "vdatetime-month-picker__item--disabled": month.disabled
                        },
                        on: {
                            "click": function($event) {
                                _vm.select(month);
                            }
                        }
                    }, [
                        _vm._v(_vm._s(month.label) + " ")
                    ]);
                }))
            ]);
        },
        staticRenderFns: [],
        props: {
            year: {
                type: Number,
                required: true
            },
            month: {
                type: Number,
                required: true
            },
            minDate: {
                type: luxon.DateTime,
                default: null
            },
            maxDate: {
                type: luxon.DateTime,
                default: null
            }
        },
        computed: {
            months: function months$1() {
                var this$1 = this;
                return months(this.month).map(function(month, index) {
                    return {
                        number: ++index,
                        label: month,
                        selected: index === this$1.month,
                        disabled: !index || monthIsDisabled(this$1.minDate, this$1.maxDate, this$1.year, index)
                    };
                });
            }
        },
        methods: {
            select: function select(month) {
                if (month.disabled) return;
                this.$emit("change", parseInt(month.number));
            },
            scrollToCurrent: function scrollToCurrent() {
                var selectedMonth = this.$refs.monthList.querySelector(".vdatetime-month-picker__item--selected");
                this.$refs.monthList.scrollTop = selectedMonth ? selectedMonth.offsetTop - 250 : 0;
            }
        },
        mounted: function mounted() {
            this.scrollToCurrent();
        },
        updated: function updated() {
            this.scrollToCurrent();
        }
    };
    var KEY_TAB = 9;
    var KEY_ENTER = 13;
    var KEY_ESC = 27;
    var DatetimePopup = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "vdatetime-popup"
            }, [
                _c("div", {
                    staticClass: "vdatetime-popup__header"
                }, [
                    _vm.title ? _c("div", {
                        staticClass: "vdatetime-popup__title"
                    }, [
                        _vm._v(_vm._s(_vm.title))
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.type !== "time" ? _c("div", {
                        staticClass: "vdatetime-popup__year",
                        on: {
                            "click": _vm.showYear
                        }
                    }, [
                        _vm._v(_vm._s(_vm.year))
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _vm.type !== "time" ? _c("div", {
                        staticClass: "vdatetime-popup__date",
                        on: {
                            "click": _vm.showMonth
                        }
                    }, [
                        _vm._v(_vm._s(_vm.dateFormatted))
                    ]) : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "vdatetime-popup__body"
                }, [
                    _vm.step === "year" ? _c("datetime-year-picker", {
                        attrs: {
                            "min-date": _vm.minDatetime,
                            "max-date": _vm.maxDatetime,
                            "year": _vm.year
                        },
                        on: {
                            "change": _vm.onChangeYear
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _vm.step === "month" ? _c("datetime-month-picker", {
                        attrs: {
                            "min-date": _vm.minDatetime,
                            "max-date": _vm.maxDatetime,
                            "year": _vm.year,
                            "month": _vm.month
                        },
                        on: {
                            "change": _vm.onChangeMonth
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _vm.step === "date" ? _c("datetime-calendar", {
                        attrs: {
                            "year": _vm.year,
                            "month": _vm.month,
                            "day": _vm.day,
                            "min-date": _vm.minDatetime,
                            "max-date": _vm.maxDatetime,
                            "week-start": _vm.weekStart
                        },
                        on: {
                            "change": _vm.onChangeDate
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _vm.step === "time" ? _c("datetime-time-picker", {
                        attrs: {
                            "hour": _vm.hour,
                            "minute": _vm.minute,
                            "use12-hour": _vm.use12Hour,
                            "hour-step": _vm.hourStep,
                            "minute-step": _vm.minuteStep,
                            "min-time": _vm.minTime,
                            "max-time": _vm.maxTime
                        },
                        on: {
                            "change": _vm.onChangeTime
                        }
                    }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "vdatetime-popup__actions"
                }, [
                    _c("div", {
                        staticClass: "vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel",
                        on: {
                            "click": _vm.cancel
                        }
                    }, [
                        _vm._t("button-cancel__internal", [
                            _vm._v(_vm._s(_vm.phrases.cancel))
                        ], {
                            step: _vm.step
                        })
                    ], 2),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm",
                        on: {
                            "click": _vm.confirm
                        }
                    }, [
                        _vm._t("button-confirm__internal", [
                            _vm._v(_vm._s(_vm.phrases.ok))
                        ], {
                            step: _vm.step
                        })
                    ], 2)
                ])
            ]);
        },
        staticRenderFns: [],
        components: {
            DatetimeCalendar: DatetimeCalendar,
            DatetimeTimePicker: DatetimeTimePicker,
            DatetimeYearPicker: DatetimeYearPicker,
            DatetimeMonthPicker: DatetimeMonthPicker
        },
        props: {
            datetime: {
                type: luxon.DateTime,
                required: true
            },
            phrases: {
                type: Object,
                default: function default$1() {
                    return {
                        cancel: "Cancel",
                        ok: "Ok"
                    };
                }
            },
            type: {
                type: String,
                default: "date"
            },
            use12Hour: {
                type: Boolean,
                default: false
            },
            hourStep: {
                type: Number,
                default: 1
            },
            minuteStep: {
                type: Number,
                default: 1
            },
            minDatetime: {
                type: luxon.DateTime,
                default: null
            },
            maxDatetime: {
                type: luxon.DateTime,
                default: null
            },
            auto: {
                type: Boolean,
                default: false
            },
            weekStart: {
                type: Number,
                default: 1
            },
            flow: {
                type: Array
            },
            title: {
                type: String
            }
        },
        data: function data() {
            var flowManager = this.flow ? createFlowManager(this.flow) : createFlowManagerFromType(this.type);
            return {
                newDatetime: this.datetime,
                flowManager: flowManager,
                step: flowManager.first(),
                timePartsTouched: []
            };
        },
        created: function created() {
            document.addEventListener("keydown", this.onKeyDown);
        },
        beforeDestroy: function beforeDestroy() {
            document.removeEventListener("keydown", this.onKeyDown);
        },
        computed: {
            year: function year() {
                return this.newDatetime.year;
            },
            month: function month() {
                return this.newDatetime.month;
            },
            day: function day() {
                return this.newDatetime.day;
            },
            hour: function hour() {
                return this.newDatetime.hour;
            },
            minute: function minute() {
                return this.newDatetime.minute;
            },
            dateFormatted: function dateFormatted() {
                return this.newDatetime.toLocaleString({
                    month: "long",
                    day: "numeric"
                });
            },
            minTime: function minTime() {
                return this.minDatetime && this.minDatetime.year === this.year && this.minDatetime.month === this.month && this.minDatetime.day === this.day ? this.minDatetime.toFormat("HH:mm") : null;
            },
            maxTime: function maxTime() {
                return this.maxDatetime && this.maxDatetime.year === this.year && this.maxDatetime.month === this.month && this.maxDatetime.day === this.day ? this.maxDatetime.toFormat("HH:mm") : null;
            }
        },
        methods: {
            nextStep: function nextStep() {
                this.step = this.flowManager.next(this.step);
                this.timePartsTouched = [];
                if (this.step === "end") this.$emit("confirm", this.newDatetime);
            },
            showYear: function showYear() {
                this.step = "year";
                this.flowManager.diversion("date");
            },
            showMonth: function showMonth() {
                this.step = "month";
                this.flowManager.diversion("date");
            },
            confirm: function confirm() {
                this.nextStep();
            },
            cancel: function cancel() {
                this.$emit("cancel");
            },
            onChangeYear: function onChangeYear(year) {
                this.newDatetime = this.newDatetime.set({
                    year: year
                });
                if (this.auto) this.nextStep();
            },
            onChangeMonth: function onChangeMonth(month) {
                this.newDatetime = this.newDatetime.set({
                    month: month
                });
                if (this.auto) this.nextStep();
            },
            onChangeDate: function onChangeDate(year, month, day) {
                this.newDatetime = this.newDatetime.set({
                    year: year,
                    month: month,
                    day: day
                });
                if (this.auto) this.nextStep();
            },
            onChangeTime: function onChangeTime(ref) {
                var hour = ref.hour;
                var minute = ref.minute;
                var suffixTouched = ref.suffixTouched;
                if (suffixTouched) this.timePartsTouched["suffix"] = true;
                if (Number.isInteger(hour)) {
                    this.newDatetime = this.newDatetime.set({
                        hour: hour
                    });
                    this.timePartsTouched["hour"] = true;
                }
                if (Number.isInteger(minute)) {
                    this.newDatetime = this.newDatetime.set({
                        minute: minute
                    });
                    this.timePartsTouched["minute"] = true;
                }
                var goNext = this.auto && this.timePartsTouched["hour"] && this.timePartsTouched["minute"] && (this.timePartsTouched["suffix"] || !this.use12Hour);
                if (goNext) this.nextStep();
            },
            onKeyDown: function onKeyDown(event) {
                switch(event.keyCode){
                    case KEY_ESC:
                    case KEY_TAB:
                        this.cancel();
                        break;
                    case KEY_ENTER:
                        this.nextStep();
                        break;
                }
            }
        }
    };
    var Datetime = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "vdatetime"
            }, [
                _vm._t("before"),
                _vm._v(" "),
                _c("input", _vm._g(_vm._b({
                    staticClass: "vdatetime-input",
                    class: _vm.inputClass,
                    style: _vm.inputStyle,
                    attrs: {
                        "id": _vm.inputId,
                        "type": "text"
                    },
                    domProps: {
                        "value": _vm.inputValue
                    },
                    on: {
                        "click": _vm.open,
                        "focus": _vm.open
                    }
                }, "input", _vm.$attrs, false), _vm.$listeners)),
                _vm._v(" "),
                _vm.hiddenName ? _c("input", {
                    attrs: {
                        "type": "hidden",
                        "name": _vm.hiddenName
                    },
                    domProps: {
                        "value": _vm.value
                    },
                    on: {
                        "input": _vm.setValue
                    }
                }) : _vm._e(),
                _vm._v(" "),
                _vm._t("after"),
                _vm._v(" "),
                _c("transition-group", {
                    attrs: {
                        "name": "vdatetime-fade",
                        "tag": "div"
                    }
                }, [
                    _vm.isOpen && !_vm.hideBackdrop ? _c("div", {
                        key: "overlay",
                        staticClass: "vdatetime-overlay",
                        on: {
                            "click": function($event) {
                                if ($event.target !== $event.currentTarget) return null;
                                _vm.clickOutside($event);
                            }
                        }
                    }) : _vm._e(),
                    _vm._v(" "),
                    _vm.isOpen ? _c("datetime-popup", {
                        key: "popup",
                        attrs: {
                            "type": _vm.type,
                            "datetime": _vm.popupDate,
                            "phrases": _vm.phrases,
                            "use12-hour": _vm.use12Hour,
                            "hour-step": _vm.hourStep,
                            "minute-step": _vm.minuteStep,
                            "min-datetime": _vm.popupMinDatetime,
                            "max-datetime": _vm.popupMaxDatetime,
                            "auto": _vm.auto,
                            "week-start": _vm.weekStart,
                            "flow": _vm.flow,
                            "title": _vm.title
                        },
                        on: {
                            "confirm": _vm.confirm,
                            "cancel": _vm.cancel
                        },
                        scopedSlots: _vm._u([
                            {
                                key: "button-cancel__internal",
                                fn: function(scope) {
                                    return [
                                        _vm._t("button-cancel", [
                                            _vm._v(_vm._s(_vm.phrases.cancel))
                                        ], {
                                            step: scope.step
                                        })
                                    ];
                                }
                            },
                            {
                                key: "button-confirm__internal",
                                fn: function(scope) {
                                    return [
                                        _vm._t("button-confirm", [
                                            _vm._v(_vm._s(_vm.phrases.ok))
                                        ], {
                                            step: scope.step
                                        })
                                    ];
                                }
                            }
                        ])
                    }) : _vm._e()
                ], 1)
            ], 2);
        },
        staticRenderFns: [],
        components: {
            DatetimePopup: DatetimePopup
        },
        inheritAttrs: false,
        props: {
            value: {
                type: String
            },
            valueZone: {
                type: String,
                default: "UTC"
            },
            inputId: {
                type: String,
                default: null
            },
            inputClass: {
                type: [
                    Object,
                    Array,
                    String
                ],
                default: ""
            },
            inputStyle: {
                type: [
                    Object,
                    Array,
                    String
                ],
                default: ""
            },
            hiddenName: {
                type: String
            },
            zone: {
                type: String,
                default: "local"
            },
            format: {
                type: [
                    Object,
                    String
                ],
                default: null
            },
            type: {
                type: String,
                default: "date"
            },
            phrases: {
                type: Object,
                default: function default$1() {
                    return {
                        cancel: "Cancel",
                        ok: "Ok"
                    };
                }
            },
            use12Hour: {
                type: Boolean,
                default: false
            },
            hourStep: {
                type: Number,
                default: 1
            },
            minuteStep: {
                type: Number,
                default: 1
            },
            minDatetime: {
                type: String,
                default: null
            },
            maxDatetime: {
                type: String,
                default: null
            },
            auto: {
                type: Boolean,
                default: false
            },
            weekStart: {
                type: Number,
                default: function default$2() {
                    return weekStart();
                }
            },
            flow: {
                type: Array
            },
            title: {
                type: String
            },
            hideBackdrop: {
                type: Boolean,
                default: false
            },
            backdropClick: {
                type: Boolean,
                default: true
            }
        },
        data: function data() {
            return {
                isOpen: false,
                datetime: datetimeFromISO(this.value)
            };
        },
        watch: {
            value: function value(newValue) {
                this.datetime = datetimeFromISO(newValue);
            }
        },
        created: function created() {
            this.emitInput();
        },
        computed: {
            inputValue: function inputValue() {
                var format = this.format;
                if (!format) switch(this.type){
                    case "date":
                        format = luxon.DateTime.DATE_MED;
                        break;
                    case "time":
                        format = luxon.DateTime.TIME_24_SIMPLE;
                        break;
                    case "datetime":
                    case "default":
                        format = luxon.DateTime.DATETIME_MED;
                        break;
                }
                if (typeof format === "string") return this.datetime ? luxon.DateTime.fromISO(this.datetime).setZone(this.zone).toFormat(format) : "";
                else return this.datetime ? this.datetime.setZone(this.zone).toLocaleString(format) : "";
            },
            popupDate: function popupDate() {
                return this.datetime ? this.datetime.setZone(this.zone) : this.newPopupDatetime();
            },
            popupMinDatetime: function popupMinDatetime() {
                return this.minDatetime ? luxon.DateTime.fromISO(this.minDatetime).setZone(this.zone) : null;
            },
            popupMaxDatetime: function popupMaxDatetime() {
                return this.maxDatetime ? luxon.DateTime.fromISO(this.maxDatetime).setZone(this.zone) : null;
            }
        },
        methods: {
            emitInput: function emitInput() {
                var datetime = this.datetime ? this.datetime.setZone(this.valueZone) : null;
                if (datetime && this.type === "date") datetime = startOfDay(datetime);
                this.$emit("input", datetime ? datetime.toISO() : "");
            },
            open: function open(event) {
                event.target.blur();
                this.isOpen = true;
            },
            close: function close() {
                this.isOpen = false;
                this.$emit("close");
            },
            confirm: function confirm(datetime) {
                this.datetime = datetime.toUTC();
                this.emitInput();
                this.close();
            },
            cancel: function cancel() {
                this.close();
            },
            clickOutside: function clickOutside() {
                if (this.backdropClick === true) this.cancel();
            },
            newPopupDatetime: function newPopupDatetime() {
                var datetime = luxon.DateTime.utc().setZone(this.zone).set({
                    seconds: 0,
                    milliseconds: 0
                });
                if (this.popupMinDatetime && datetime < this.popupMinDatetime) datetime = this.popupMinDatetime.set({
                    seconds: 0,
                    milliseconds: 0
                });
                if (this.popupMaxDatetime && datetime > this.popupMaxDatetime) datetime = this.popupMaxDatetime.set({
                    seconds: 0,
                    milliseconds: 0
                });
                if (this.minuteStep === 1) return datetime;
                var roundedMinute = Math.round(datetime.minute / this.minuteStep) * this.minuteStep;
                if (roundedMinute === 60) return datetime.plus({
                    hours: 1
                }).set({
                    minute: 0
                });
                return datetime.set({
                    minute: roundedMinute
                });
            },
            setValue: function setValue(event) {
                this.datetime = datetimeFromISO(event.target.value);
                this.emitInput();
            }
        }
    };
    function plugin(Vue) {
        Vue.component("datetime", Datetime);
        Vue.component("datetime-popup", DatetimePopup);
    }
    // Install by default if using the script tag
    if (typeof window !== "undefined" && window.Vue) window.Vue.use(plugin);
    var version = "1.0.0-beta.14";
    exports1["default"] = plugin;
    exports1.Datetime = Datetime;
    exports1.DatetimePopup = DatetimePopup;
    exports1.version = version;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{"ae54e1f81463f742":"dpK6X","a49acbbfa3fae061":"eCo7f","3a81313891da69d5":"17COp"}],"dpK6X":[function(require,module,exports) {
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
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
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
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o) {
    var i = 0;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    i = o[Symbol.iterator]();
    return i.next.bind(i);
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
    hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */ var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */ var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */ var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */ var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */ var DATETIME_SHORT_WITH_SECONDS = {
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
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/ /**
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
} // CAPABILITIES
function hasIntl() {
    try {
        return typeof Intl !== "undefined" && Intl.DateTimeFormat;
    } catch (e) {
        return false;
    }
}
function hasFormatToParts() {
    return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
} // OBJECTS AND ARRAYS
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
} // NUMBERS AND STRINGS
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x
function floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function padStart(input, n) {
    if (n === void 0) n = 2;
    var minus = input < 0 ? "-" : "";
    var target = minus ? input * -1 : input;
    var result;
    if (target.toString().length < n) result = ("0".repeat(n) + target).slice(-n);
    else result = target.toString();
    return "" + minus + result;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
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
} // DATE BASICS
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
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    return +d;
}
function weeksInWeekYear(weekYear) {
    var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
    if (year > 99) return year;
    else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING
function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) timeZone = null;
    var date = new Date(ts), intlOpts = {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    var modified = Object.assign({
        timeZoneName: offsetFormat
    }, intlOpts), intl = hasIntl();
    if (intl && hasFormatToParts()) {
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
            return m.type.toLowerCase() === "timezonename";
        });
        return parsed ? parsed.value : null;
    } else if (intl) {
        // this probably doesn't work for all locales
        var without = new Intl.DateTimeFormat(locale, intlOpts).format(date), included = new Intl.DateTimeFormat(locale, modified).format(date), diffed = included.substring(without.length), trimmed = diffed.replace(/^[, \u200e]+/, "");
        return trimmed;
    } else return null;
} // signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
} // COERCION
function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
    var normalized = {};
    for(var u in obj)if (hasOwnProperty(obj, u)) {
        if (nonUnitKeys.indexOf(u) >= 0) continue;
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
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function stringify(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
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
function formatString(knownFormat) {
    // these all have the offsets removed because we don't have access to them
    // without all the intl stuff this is backfilling
    var filtered = pick(knownFormat, [
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hour12"
    ]), key = stringify(filtered), dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
    switch(key){
        case stringify(DATE_SHORT):
            return "M/d/yyyy";
        case stringify(DATE_MED):
            return "LLL d, yyyy";
        case stringify(DATE_MED_WITH_WEEKDAY):
            return "EEE, LLL d, yyyy";
        case stringify(DATE_FULL):
            return "LLLL d, yyyy";
        case stringify(DATE_HUGE):
            return "EEEE, LLLL d, yyyy";
        case stringify(TIME_SIMPLE):
            return "h:mm a";
        case stringify(TIME_WITH_SECONDS):
            return "h:mm:ss a";
        case stringify(TIME_WITH_SHORT_OFFSET):
            return "h:mm a";
        case stringify(TIME_WITH_LONG_OFFSET):
            return "h:mm a";
        case stringify(TIME_24_SIMPLE):
            return "HH:mm";
        case stringify(TIME_24_WITH_SECONDS):
            return "HH:mm:ss";
        case stringify(TIME_24_WITH_SHORT_OFFSET):
            return "HH:mm";
        case stringify(TIME_24_WITH_LONG_OFFSET):
            return "HH:mm";
        case stringify(DATETIME_SHORT):
            return "M/d/yyyy, h:mm a";
        case stringify(DATETIME_MED):
            return "LLL d, yyyy, h:mm a";
        case stringify(DATETIME_FULL):
            return "LLLL d, yyyy, h:mm a";
        case stringify(DATETIME_HUGE):
            return dateTimeHuge;
        case stringify(DATETIME_SHORT_WITH_SECONDS):
            return "M/d/yyyy, h:mm:ss a";
        case stringify(DATETIME_MED_WITH_SECONDS):
            return "LLL d, yyyy, h:mm:ss a";
        case stringify(DATETIME_MED_WITH_WEEKDAY):
            return "EEE, d LLL yyyy, h:mm a";
        case stringify(DATETIME_FULL_WITH_SECONDS):
            return "LLLL d, yyyy, h:mm:ss a";
        case stringify(DATETIME_HUGE_WITH_SECONDS):
            return "EEEE, LLLL d, yyyy, h:mm:ss a";
        default:
            return dateTimeHuge;
    }
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
        var current = null, currentFull = "", bracketed = false;
        var splits = [];
        for(var i = 0; i < fmt.length; i++){
            var c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed,
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: false,
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed,
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
        var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
        return df.formatToParts();
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
        return df.resolvedOptions();
    };
    _proto.num = function num(n, p) {
        if (p === void 0) p = 0;
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return padStart(n, p);
        var opts = Object.assign({}, this.opts);
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
        var _this = this;
        var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(), string = function string(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
        }, formatOffset = function formatOffset(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = function meridiem() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
                hour: "numeric",
                hour12: true
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
            // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
            switch(token){
                // ms
                case "S":
                    return _this.num(dt.millisecond);
                case "u":
                case "SSS":
                    return _this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return _this.num(dt.second);
                case "ss":
                    return _this.num(dt.second, 2);
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
            /**
     * The type of zone
     * @abstract
     * @type {string}
     */ get: function get() {
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
            key: "universal",
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
var singleton = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ var LocalZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(LocalZone, _Zone);
    function LocalZone() {
        return _Zone.apply(this, arguments) || this;
    }
    var _proto = LocalZone.prototype;
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
        return otherZone.type === "local";
    } /** @override **/ ;
    _createClass(LocalZone, [
        {
            key: "type",
            /** @override **/ get: function get() {
                return "local";
            }
        },
        {
            key: "name",
            get: function get() {
                if (hasIntl()) return new Intl.DateTimeFormat().resolvedOptions().timeZone;
                else return "local";
            }
        },
        {
            key: "universal",
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
            /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */ get: function get() {
                if (singleton === null) singleton = new LocalZone();
                return singleton;
            }
        }
    ]);
    return LocalZone;
}(Zone);
var matchingRegex = RegExp("^" + ianaRegex.source + "$");
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
        second: "2-digit"
    });
    return dtfCache[zone];
}
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
    return [
        fYear,
        fMonth,
        fDay,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date), filled = [];
    for(var i = 0; i < formatted.length; i++){
        var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value, pos = typeToPos[type];
        if (!isUndefined(pos)) filled[pos] = parseInt(value, 10);
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
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */ ;
    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
        return !!(s && s.match(matchingRegex));
    } /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ ;
    IANAZone.isValidZone = function isValidZone(zone) {
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    } // Etc/GMT+8 -> -480
     /** @ignore */ ;
    IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
        if (specifier) {
            var match = specifier.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
            if (match) return -60 * parseInt(match[1]);
        }
        return null;
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
        var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5], adjustedHour = hour === 24 ? 0 : hour;
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
            key: "universal",
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
var singleton$1 = null;
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
    _createClass(FixedOffsetZone, null, [
        {
            key: "utcInstance",
            /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */ get: function get() {
                if (singleton$1 === null) singleton$1 = new FixedOffsetZone(0);
                return singleton$1;
            }
        }
    ]);
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
            key: "universal",
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
            key: "universal",
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
    var offset;
    if (isUndefined(input) || input === null) return defaultZone;
    else if (input instanceof Zone) return input;
    else if (isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === "local") return defaultZone;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else if ((offset = IANAZone.parseGMTOffset(input)) != null) // handle Etc/GMT-4, which V8 chokes on
        return FixedOffsetZone.instance(offset);
        else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);
        else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
    } else if (isNumber(input)) return FixedOffsetZone.instance(input);
    else if (typeof input === "object" && input.offset && typeof input.offset === "number") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new InvalidZone(input);
}
var now = function now() {
    return Date.now();
}, defaultZone = null, // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid = false;
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
            /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */ get: function get() {
                return now;
            },
            set: function set(n) {
                now = n;
            }
        },
        {
            key: "defaultZoneName",
            get: function get() {
                return Settings.defaultZone.name;
            },
            set: function set(z) {
                if (!z) defaultZone = null;
                else defaultZone = normalizeZone(z);
            }
        },
        {
            key: "defaultZone",
            get: function get() {
                return defaultZone || LocalZone.instance;
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
    var _opts = opts, base = _opts.base, cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, [
        "base"
    ]); // exclude `base` from the options
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
    else if (hasIntl()) {
        var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb
        sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
        return sysLocaleCache;
    } else {
        sysLocaleCache = "en-US";
        return sysLocaleCache;
    }
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        var options;
        var smaller = localeStr.substring(0, uIndex);
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
        } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
        }
        var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it
        return [
            smaller,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (hasIntl()) {
        if (outputCalendar || numberingSystem) {
            localeStr += "-u";
            if (outputCalendar) localeStr += "-ca-" + outputCalendar;
            if (numberingSystem) localeStr += "-nu-" + numberingSystem;
            return localeStr;
        } else return localeStr;
    } else return [];
}
function mapMonths(f) {
    var ms = [];
    for(var i = 1; i <= 12; i++){
        var dt = DateTime.utc(2016, i, 1);
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
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    var mode = loc.listingMode(defaultOK);
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ var PolyNumberFormatter = /*#__PURE__*/ function() {
    function PolyNumberFormatter(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        if (!forceSimple && hasIntl()) {
            var intlOpts = {
                useGrouping: false
            };
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
        this.hasIntl = hasIntl();
        var z;
        if (dt.zone.universal && this.hasIntl) {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            var isOffsetZoneSupported = IANAZone.isValidZone(offsetZ);
            if (dt.offset !== 0 && isOffsetZoneSupported) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
                // So we have to make do. Two cases:
                // 1. The format options tell us to show the zone. We can't do that, so the best
                // we can do is format the date in UTC.
                // 2. The format options don't tell us to show the zone. Then we can adjust them
                // the time and tell the formatter to show it to us in UTC, so that the time is right
                // and the bad zone doesn't show up.
                z = "UTC";
                if (opts.timeZoneName) this.dt = dt;
                else this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60000);
            }
        } else if (dt.zone.type === "local") this.dt = dt;
        else {
            this.dt = dt;
            z = dt.zone.name;
        }
        if (this.hasIntl) {
            var intlOpts = Object.assign({}, this.opts);
            if (z) intlOpts.timeZone = z;
            this.dtf = getCachedDTF(intl, intlOpts);
        }
    }
    var _proto2 = PolyDateFormatter.prototype;
    _proto2.format = function format() {
        if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
        else {
            var tokenFormat = formatString(this.opts), loc = Locale.create("en-US");
            return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
        }
    };
    _proto2.formatToParts = function formatToParts() {
        if (this.hasIntl && hasFormatToParts()) return this.dtf.formatToParts(this.dt.toJSDate());
        else // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
    };
    _proto2.resolvedOptions = function resolvedOptions() {
        if (this.hasIntl) return this.dtf.resolvedOptions();
        else return {
            locale: "en-US",
            numberingSystem: "latn",
            outputCalendar: "gregory"
        };
    };
    return PolyDateFormatter;
}();
/**
 * @private
 */ var PolyRelFormatter = /*#__PURE__*/ function() {
    function PolyRelFormatter(intl, isEnglish, opts) {
        this.opts = Object.assign({
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
/**
 * @private
 */ var Locale = /*#__PURE__*/ function() {
    Locale.fromOpts = function fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    };
    Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
        if (defaultToEN === void 0) defaultToEN = false;
        var specifiedLocale = locale || Settings.defaultLocale, // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()), numberingSystemR = numberingSystem || Settings.defaultNumberingSystem, outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    };
    Locale.resetCache = function resetCache() {
        sysLocaleCache = null;
        intlDTCache = {};
        intlNumCache = {};
        intlRelCache = {};
    };
    Locale.fromObject = function fromObject(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
        return Locale.create(locale, numberingSystem, outputCalendar);
    };
    function Locale(locale, numbering, outputCalendar, specifiedLocale) {
        var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
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
    _proto4.listingMode = function listingMode(defaultOK) {
        if (defaultOK === void 0) defaultOK = true;
        var intl = hasIntl(), hasFTP = intl && hasFormatToParts(), isActuallyEn = this.isEnglish(), hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) return "error";
        else if (!hasFTP || isActuallyEn && hasNoWeirdness) return "en";
        else return "intl";
    };
    _proto4.clone = function clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
        if (alts === void 0) alts = {};
        return this.clone(Object.assign({}, alts, {
            defaultToEN: true
        }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
        if (alts === void 0) alts = {};
        return this.clone(Object.assign({}, alts, {
            defaultToEN: false
        }));
    };
    _proto4.months = function months$1(length, format, defaultOK) {
        var _this = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
            });
            return _this.monthsCache[formatStr][length];
        });
    };
    _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
        var _this2 = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
            });
            return _this2.weekdaysCache[formatStr][length];
        });
    };
    _proto4.meridiems = function meridiems$1(defaultOK) {
        var _this3 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, undefined, defaultOK, function() {
            return meridiems;
        }, function() {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!_this3.meridiemCache) {
                var intl = {
                    hour: "numeric",
                    hour12: true
                };
                _this3.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map(function(dt) {
                    return _this3.extract(dt, intl, "dayperiod");
                });
            }
            return _this3.meridiemCache;
        });
    };
    _proto4.eras = function eras$1(length, defaultOK) {
        var _this4 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
                era: length
            }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!_this4.eraCache[length]) _this4.eraCache[length] = [
                DateTime.utc(-40, 1, 1),
                DateTime.utc(2017, 1, 1)
            ].map(function(dt) {
                return _this4.extract(dt, intl, "era");
            });
            return _this4.eraCache[length];
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
    _proto4.isEnglish = function isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
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
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ function combineRegexes() {
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
                Object.assign(mergedVals, val),
                mergedZone || zone,
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
} // ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"), isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"), sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
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
} // ISO time parsing
var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing
var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
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
            years: maybeNegate(parseInteger(yearStr)),
            months: maybeNegate(parseInteger(monthStr)),
            weeks: maybeNegate(parseInteger(weekStr)),
            days: maybeNegate(parseInteger(dayStr)),
            hours: maybeNegate(parseInteger(hourStr)),
            minutes: maybeNegate(parseInteger(minuteStr)),
            seconds: maybeNegate(parseInteger(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
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
} // RFC 2822/5322
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
} // http date
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
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
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
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
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
    return parse(s, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeOffsetAndIANAZone
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}
var INVALID = "Invalid Duration"; // unit conversion constants
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
}, casualMatrix = Object.assign({
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
}, lowOrderMatrix), daysInYearAccurate = 365.2425, daysInMonthAccurate = 30.436875, accurateMatrix = Object.assign({
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
}, lowOrderMatrix); // units ordered by size
var orderedUnits = [
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
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear) {
    if (clear === void 0) clear = false;
    // deep merge for vals
    var conf = {
        values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
    };
    return new Duration(conf);
}
function antiTrunc(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters
function normalizeValues(matrix, vals) {
    reverseUnits.reduce(function(previous, current) {
        if (!isUndefined(vals[current])) {
            if (previous) convert(matrix, vals, previous, vals, current);
            return current;
        } else return previous;
    }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ var Duration = /*#__PURE__*/ function() {
    /**
   * @private
   */ function Duration(config) {
        var accurate = config.conversionAccuracy === "longterm" || false;
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
     */ this.matrix = accurate ? accurateMatrix : casualMatrix;
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
        return Duration.fromObject(Object.assign({
            milliseconds: count
        }, opts));
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
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ ;
    Duration.fromObject = function fromObject(obj) {
        if (obj == null || typeof obj !== "object") throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
        return new Duration({
            values: normalizeObject(obj, Duration.normalizeUnit, [
                "locale",
                "numberingSystem",
                "conversionAccuracy",
                "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
            ]),
            loc: Locale.fromObject(obj),
            conversionAccuracy: obj.conversionAccuracy
        });
    } /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ ;
    Duration.fromISO = function fromISO(text, opts) {
        var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
        if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration.fromObject(obj);
        } else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
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
        if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration.fromObject(obj);
        } else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
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
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
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
        var fmtOpts = Object.assign({}, opts, {
            floor: opts.round !== false && opts.floor !== false
        });
        return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    } /**
   * Returns a JavaScript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return {};
        var base = Object.assign({}, this.values);
        if (opts.includeConfig) {
            base.conversionAccuracy = this.conversionAccuracy;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
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
        if (this.seconds !== 0 || this.milliseconds !== 0) // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
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
        opts = Object.assign({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
        }, opts);
        var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
        var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
        if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) fmt += ".SSS";
        }
        var str = value.toFormat(fmt);
        if (opts.includePrefix) str = "T" + str;
        return str;
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
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        return this.as("milliseconds");
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
        var dur = friendlyDuration(duration), result = {};
        for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;){
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        }
        return clone(this, {
            values: result
        }, true);
    } /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration);
        return this.plus(dur.negate());
    } /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ ;
    _proto.mapUnits = function mapUnits(fn) {
        if (!this.isValid) return this;
        var result = {};
        for(var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++){
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
        }
        return clone(this, {
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
        var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
        return clone(this, {
            values: mixed
        });
    } /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ ;
    _proto.reconfigure = function reconfigure(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem
        }), opts = {
            loc: loc
        };
        if (conversionAccuracy) opts.conversionAccuracy = conversionAccuracy;
        return clone(this, opts);
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
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */ ;
    _proto.normalize = function normalize() {
        if (!this.isValid) return this;
        var vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone(this, {
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
        for(var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;){
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                var own = 0; // anything we haven't boiled down yet should get boiled to this unit
                for(var ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                } // plus anything that's already in this unit
                if (isNumber(vals[k])) own += vals[k];
                var i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
                // plus anything further down the chain that should be rolled up in to this
                for(var down in vals)if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) convert(this.matrix, vals, down, built, k);
                 // otherwise, keep it in the wings to boil it later
            } else if (isNumber(vals[k])) accumulated[k] = vals[k];
        } // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(var key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        return clone(this, {
            values: built
        }, true).normalize();
    } /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ ;
    _proto.negate = function negate() {
        if (!this.isValid) return this;
        var negated = {};
        for(var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++){
            var k = _Object$keys2[_i2];
            negated[k] = -this.values[k];
        }
        return clone(this, {
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
        for(var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
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
}();
function friendlyDuration(durationish) {
    if (isNumber(durationish)) return Duration.fromMillis(durationish);
    else if (Duration.isDuration(durationish)) return durationish;
    else if (typeof durationish === "object") return Duration.fromObject(durationish);
    else throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
}
var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end
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
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */ var Interval = /*#__PURE__*/ function() {
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
        var dur = friendlyDuration(duration), dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    } /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.before = function before(end, duration) {
        var dur = friendlyDuration(duration), dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    } /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
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
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */ ;
    _proto.count = function count(unit) {
        if (unit === void 0) unit = "milliseconds";
        if (!this.isValid) return NaN;
        var start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + 1;
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
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */ ;
    _proto.splitAt = function splitAt() {
        var _this = this;
        if (!this.isValid) return [];
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
        }).sort(), results = [];
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
   * @return {[Interval]}
   */ ;
    _proto.splitBy = function splitBy(duration) {
        var dur = friendlyDuration(duration);
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
   * @return {[Interval]}
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
   * @param {[Interval]} intervals
   * @return {[Interval]}
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
   * @param {[Interval]} intervals
   * @return {[Interval]}
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
   * @return {[Interval]}
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
        return "[" + this.s.toISO() + " – " + this.e.toISO() + ")";
    } /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
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
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    } /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " – " : _ref3$separator;
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
}();
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
        return !zone.universal && proto.offset !== proto.set({
            month: 6
        }).offset;
    } /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ ;
    Info.isValidIANAZone = function isValidIANAZone(zone) {
        return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
    } /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ ;
    Info.normalizeZone = function normalizeZone$1(input) {
        return normalizeZone(input, Settings.defaultZone);
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
   * @return {[string]}
   */ ;
    Info.months = function months(length, _temp) {
        if (length === void 0) length = "long";
        var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    } /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */ ;
    Info.monthsFormat = function monthsFormat(length, _temp2) {
        if (length === void 0) length = "long";
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
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
   * @return {[string]}
   */ ;
    Info.weekdays = function weekdays(length, _temp3) {
        if (length === void 0) length = "long";
        var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    } /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {[string]}
   */ ;
    Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
        if (length === void 0) length = "long";
        var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    } /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */ ;
    Info.meridiems = function meridiems(_temp5) {
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
        return Locale.create(locale).meridiems();
    } /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */ ;
    Info.eras = function eras(length, _temp6) {
        if (length === void 0) length = "short";
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
        return Locale.create(locale, null, "gregory").eras(length);
    } /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */ ;
    Info.features = function features() {
        var intl = false, intlTokens = false, zones = false, relative = false;
        if (hasIntl()) {
            intl = true;
            intlTokens = hasFormatToParts();
            relative = hasRelative();
            try {
                zones = new Intl.DateTimeFormat("en", {
                    timeZone: "America/New_York"
                }).resolvedOptions().timeZone === "America/New_York";
            } catch (e) {
                zones = false;
            }
        }
        return {
            intl: intl,
            intlTokens: intlTokens,
            zones: zones,
            relative: relative
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
                return b.quarter - a.quarter;
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
    var lowestOrder, highWater;
    for(var _i = 0, _differs = differs; _i < _differs.length; _i++){
        var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
        if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
                var _cursor$plus2;
                cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
                delta -= 1;
            } else cursor = highWater;
            results[unit] = delta;
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
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
        }
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    var duration = Duration.fromObject(Object.assign(results, opts));
    if (lowerOrderUnits.length > 0) {
        var _Duration$fromMillis;
        return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else return duration;
}
var numberingSystems = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
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
}; // eslint-disable-next-line
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
var spaceOrNBSP = "( |" + NBSP + ")";
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
    // eslint-disable-next-line no-useless-escape
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
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
                return oneOf(loc.eras("short", false), 0);
            case "GG":
                return oneOf(loc.eras("long", false), 0);
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
                return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
                return oneOf(loc.months("long", true, false), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false, false), 1);
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
                return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true, false), 1);
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
    hour: {
        numeric: "h",
        "2-digit": "hh"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    }
};
function tokenForPart(part, locale, formatOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") return {
        literal: true,
        val: value
    };
    var style = formatOpts[type];
    var val = partTypeStyleToTokenVal[type];
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
    var zone;
    if (!isUndefined(matches.Z)) zone = new FixedOffsetZone(matches.Z);
    else if (!isUndefined(matches.z)) zone = IANAZone.create(matches.z);
    else zone = null;
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
        zone
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
    if (!formatOpts) return token;
    var formatter = Formatter.create(locale, formatOpts);
    var parts = formatter.formatDateTimeParts(getDummyDateTime());
    var tokens = parts.map(function(p) {
        return tokenForPart(p, locale, formatOpts);
    });
    if (tokens.includes(undefined)) return token;
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
            null
        ], result = _ref6[0], zone = _ref6[1];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
        return {
            input: input,
            tokens: tokens,
            regex: regex,
            rawMatches: rawMatches,
            matches: matches,
            result: result,
            zone: zone
        };
    }
}
function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, invalidReason = _explainFromTokens.invalidReason;
    return [
        result,
        zone,
        invalidReason
    ];
}
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
    var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
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
/**
 * @private
 */ function gregorianToWeek(gregObj) {
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
    var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear);
    } else if (weekNumber > weeksInWeekYear(year)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return Object.assign({
        weekYear: weekYear,
        weekNumber: weekNumber,
        weekday: weekday
    }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
    } else year = weekYear;
    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return Object.assign({
        year: year,
        month: month,
        day: day
    }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day, ordinal = computeOrdinal(year, month, day);
    return Object.assign({
        year: year,
        ordinal: ordinal
    }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal, _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return Object.assign({
        year: year,
        month: month,
        day: day
    }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
    var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) return unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return unitOutOfRange("week", obj.week);
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
var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
    return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
} // we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = gregorianToWeek(dt.c);
    return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone$1(inst, alts) {
    var current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime(Object.assign({}, current, alts, {
        old: current
    }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60000; // Test whether the zone matches the offset for this ts
    var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
     // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000; // If that gives us the local time we want, we're done
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
} // convert an epoch timestamp into a calendar object with the given offset
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
} // convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = Object.assign({}, inst.c, {
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
        ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts: ts,
        o: o
    };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0) {
        var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(Object.assign(parsed, opts, {
            zone: interpretationZone,
            // setZone is a valid option in the calling methods, but not in fromObject
            setZone: undefined
        }));
        return setZone ? inst : inst.setZone(zone);
    } else return DateTime.invalid(new Invalid("unparsable", 'the input "' + text + "\" can't be parsed as " + format));
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) allowZ = true;
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling
function toTechTimeFormat(dt, _ref) {
    var _ref$suppressSeconds = _ref.suppressSeconds, suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds, _ref$suppressMillisec = _ref.suppressMilliseconds, suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec, includeOffset = _ref.includeOffset, _ref$includePrefix = _ref.includePrefix, includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix, _ref$includeZone = _ref.includeZone, includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone, _ref$spaceZone = _ref.spaceZone, spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone, _ref$format = _ref.format, format = _ref$format === void 0 ? "extended" : _ref$format;
    var fmt = format === "basic" ? "HHmm" : "HH:mm";
    if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
        fmt += format === "basic" ? "ss" : ":ss";
        if (!suppressMilliseconds || dt.millisecond !== 0) fmt += ".SSS";
    }
    if ((includeZone || includeOffset) && spaceZone) fmt += " ";
    if (includeZone) fmt += "z";
    else if (includeOffset) fmt += format === "basic" ? "ZZZ" : "ZZ";
    var str = toTechFormat(dt, fmt);
    if (includePrefix) str = "T" + str;
    return str;
} // defaults for unspecified units in the supported calendars
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
}; // Units in the supported calendars, sorted by bigness
var orderedUnits$1 = [
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
]; // standardize case and plurality in units
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
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, zone) {
    // assume we have the higher-order units
    for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;){
        var u = _step.value;
        if (isUndefined(obj[u])) obj[u] = defaultUnitValues[u];
    }
    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) return DateTime.invalid(invalid);
    var tsNow = Settings.now(), offsetProvis = zone.offset(tsNow), _objToTS = objToTS(obj, offsetProvis, zone), ts = _objToTS[0], o = _objToTS[1];
    return new DateTime({
        ts: ts,
        zone: zone,
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
    for(var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;){
        var unit = _step2.value;
        var count = differ(unit);
        if (Math.abs(count) >= 1) return format(count, unit);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
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
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ var DateTime = /*#__PURE__*/ function() {
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
                var _ref2 = [
                    config.old.c,
                    config.old.o
                ];
                c = _ref2[0];
                o = _ref2[1];
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
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    } // CONSTRUCT
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
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ ;
    DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
        if (isUndefined(year)) return DateTime.now();
        else return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, Settings.defaultZone);
    } /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */ ;
    DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
        if (isUndefined(year)) return new DateTime({
            ts: Settings.now(),
            zone: FixedOffsetZone.utcInstance
        });
        else return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, FixedOffsetZone.utcInstance);
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
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */ ;
    DateTime.fromObject = function fromObject(obj) {
        var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        var tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit, [
            "zone",
            "locale",
            "outputCalendar",
            "numberingSystem"
        ]), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(obj); // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff
        var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits$1;
            defaultValues = defaultUnitValues;
        } // set default values for missing stuff
        var foundFirst = false;
        for(var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        } // make sure the values we have are in range
        var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) return DateTime.invalid(invalid);
         // compute the actual time
        var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc: loc
        }); // gregorian data + weekday serves only to validate
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
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
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
        }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], invalid = _parseFromTokens[2];
        if (invalid) return DateTime.invalid(invalid);
        else return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
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
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
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
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    DateTime.isDateTime = function isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    } // INFO
     /**
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
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
        if (opts === void 0) opts = {};
        var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
        return {
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: calendar
        };
    } // TRANSFORM
     /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
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
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ ;
    _proto.setZone = function setZone(zone, _temp) {
        var _ref3 = _temp === void 0 ? {} : _temp, _ref3$keepLocalTime = _ref3.keepLocalTime, keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime, _ref3$keepCalendarTim = _ref3.keepCalendarTime, keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;
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
            return clone$1(this, {
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
        var _ref4 = _temp2 === void 0 ? {} : _temp2, locale = _ref4.locale, numberingSystem = _ref4.numberingSystem, outputCalendar = _ref4.outputCalendar;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: outputCalendar
        });
        return clone$1(this, {
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
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var normalized = normalizeObject(values, normalizeUnit, []), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var mixed;
        if (settingWeekStuff) mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
        else if (!isUndefined(normalized.ordinal)) mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
        else {
            mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (isUndefined(normalized.day)) mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
        return clone$1(this, {
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
        var dur = friendlyDuration(duration);
        return clone$1(this, adjustTime(this, dur));
    } /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration).negate();
        return clone$1(this, adjustTime(this, dur));
    } /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ ;
    _proto.startOf = function startOf(unit) {
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
        if (normalizedUnit === "weeks") o.weekday = 1;
        if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    } /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ ;
    _proto.endOf = function endOf(unit) {
        var _this$plus;
        return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
    } // OUTPUT
     /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
    } /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(opts) {
        if (opts === void 0) opts = DATE_SHORT;
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
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
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */ ;
    _proto.toISO = function toISO(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        return this.toISODate(opts) + "T" + this.toISOTime(opts);
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate(_temp3) {
        var _ref5 = _temp3 === void 0 ? {} : _temp3, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
        var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
        if (this.year > 9999) fmt = "+" + fmt;
        return toTechFormat(this, fmt);
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
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(_temp4) {
        var _ref6 = _temp4 === void 0 ? {} : _temp4, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
        return toTechTimeFormat(this, {
            suppressSeconds: suppressSeconds,
            suppressMilliseconds: suppressMilliseconds,
            includeOffset: includeOffset,
            includePrefix: includePrefix,
            format: format
        });
    } /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ ;
    _proto.toRFC2822 = function toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    } /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
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
        return toTechFormat(this, "yyyy-MM-dd");
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQLTime = function toSQLTime(_temp5) {
        var _ref7 = _temp5 === void 0 ? {} : _temp5, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;
        return toTechTimeFormat(this, {
            includeOffset: includeOffset,
            includeZone: includeZone,
            spaceZone: true
        });
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
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
        return this.isValid ? this.toISO() : INVALID$2;
    } /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
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
        var base = Object.assign({}, this.c);
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
    } // COMPARE
     /**
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
        if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
        var durOpts = Object.assign({
            locale: this.locale,
            numberingSystem: this.numberingSystem
        }, opts);
        var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    } /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
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
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(otherDateTime, unit) {
        if (!this.isValid) return false;
        var inputMs = otherDateTime.valueOf();
        var otherZoneDateTime = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
    } /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
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
        var base = options.base || DateTime.fromObject({
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
        return diffRelative(base, this.plus(padding), Object.assign(options, {
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
        return diffRelative(options.base || DateTime.fromObject({
            zone: this.zone
        }), this, Object.assign(options, {
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
    } // MISC
     /**
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
    } // FORMAT PRESETS
     /**
   * {@link toLocaleString} format like 10/14/1983
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
                return this.isValid ? this.zone.universal : null;
            }
        },
        {
            key: "isInDST",
            get: function get() {
                if (this.isOffsetFixed) return false;
                else return this.offset > this.set({
                    month: 1
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
}();
function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) return DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return DateTime.fromObject(dateTimeish);
    else throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
}
var VERSION = "1.28.1";
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.Zone = Zone;

},{}],"eCo7f":[function(require,module,exports) {
module.exports = JSON.parse('{"_from":"weekstart@^1.0.1","_id":"weekstart@1.1.0","_inBundle":false,"_integrity":"sha512-ZO3I7c7J9nwGN1PZKZeBYAsuwWEsCOZi5T68cQoVNYrzrpp5Br0Bgi0OF4l8kH/Ez7nKfxa5mSsXjsgris3+qg==","_location":"/weekstart","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"weekstart@^1.0.1","name":"weekstart","escapedName":"weekstart","rawSpec":"^1.0.1","saveSpec":null,"fetchSpec":"^1.0.1"},"_requiredBy":["/spinal-env-viewer-plugin-task"],"_resolved":"https://registry.npmjs.org/weekstart/-/weekstart-1.1.0.tgz","_shasum":"af642eb10dc24b1af9d4dcc0415056edc087b897","_spec":"weekstart@^1.0.1","_where":"/tmp/spinal-utils/62ebb28e-5832-4f89-8d33-a858b3671582/repositories","author":{"name":"Denis Sikuler"},"bugs":{"url":"https://github.com/gamtiq/weekstart/issues"},"bundleDependencies":false,"deprecated":false,"description":"Library to get first day of week.","devDependencies":{"@babel/preset-env":"^7.13.10","eslint":"^7.22.0","eslint-config-guard":"^2.0.1","ink-docstrap":"1.3.2","jest":"^26.6.3","jsdoc":"^3.6.6","jsdoc-file":"^1.0.1","microbundle":"0.4.4","version-bump-prompt":"^6.1.0"},"files":["dist","full.js","full.d.ts","index.d.ts","src","History.md"],"homepage":"https://github.com/gamtiq/weekstart","keywords":["week","start","first","day","locale","country","region"],"license":"MIT","main":"dist/commonjs/main.js","module":"dist/es-module/main.js","name":"weekstart","repository":{"type":"git","url":"git://github.com/gamtiq/weekstart.git"},"scripts":{"all":"npm run check-all && npm run doc && npm run build","build":"npm run build-umd && npm run build-commonjs && npm run build-esm && npm run build-umd-min","build-commonjs":"microbundle build \\"src/!(*.test).js\\" --output dist/commonjs --format cjs --strict --no-compress","build-esm":"microbundle build \\"src/!(*.test).js\\" --output dist/es-module --format es --no-compress","build-umd":"microbundle build src/main.js src/full.js --output dist --format umd --strict --no-compress","build-umd-min":"microbundle build src/main.js src/full.js --output dist/min --format umd --strict","check":"npm run lint && npm test","check-all":"npm run lint-all && npm test","doc":"jsdoc -c jsdoc-conf.js","lint":"eslint --cache --max-warnings 0 \\"**/*.js\\"","lint-all":"eslint --max-warnings 0 \\"**/*.js\\"","lint-all-error":"eslint \\"**/*.js\\"","lint-error":"eslint --cache \\"**/*.js\\"","release":"bump patch --commit --tag --all --push package.json package-lock.json bower.json component.json","release-major":"bump major --commit --tag --all --push package.json package-lock.json bower.json component.json","release-minor":"bump minor --commit --tag --all --push package.json package-lock.json bower.json component.json","test":"jest"},"types":"./index.d.ts","umd:main":"dist/main.js","version":"1.1.0"}');

},{}],"17COp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWeekStartByRegion", ()=>getWeekStartByRegion$1);
parcelHelpers.export(exports, "getWeekStartByLocale", ()=>getWeekStartByLocale$1);
var _apiJs = require("./api.js");
var _langRegionMapJs = require("./langRegionMap.js");
var _langRegionMapJsDefault = parcelHelpers.interopDefault(_langRegionMapJs);
var _regionDayMapJs = require("./regionDayMap.js");
var _regionDayMapJsDefault = parcelHelpers.interopDefault(_regionDayMapJs);
function getWeekStartByRegion$1(regionCode) {
    return (0, _apiJs.getWeekStartByRegion)(regionCode, (0, _regionDayMapJsDefault.default));
}
function getWeekStartByLocale$1(locale) {
    return (0, _apiJs.getWeekStartByLocale)(locale, (0, _langRegionMapJsDefault.default), (0, _regionDayMapJsDefault.default));
}

},{"./api.js":"3XpX3","./langRegionMap.js":"3q2vM","./regionDayMap.js":"5YuOH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XpX3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWeekStartByRegion", ()=>getWeekStartByRegion);
parcelHelpers.export(exports, "getWeekStartByLocale", ()=>getWeekStartByLocale);
function getWeekStartByRegion(regionCode, regionDayMap) {
    var code = regionDayMap[typeof regionCode === "string" ? regionCode.toUpperCase() : regionCode];
    return typeof code === "number" ? code : 1;
}
function getWeekStartByLocale(locale, langRegionMap, regionDayMap) {
    if (locale) {
        var data = locale.toLowerCase().split(/[-_]/);
        var language = data[0];
        var country;
        if (data[1] && data[1].length === 4) {
            language += "_" + data[1];
            country = data[2];
        } else country = data[1];
        if (!country) country = langRegionMap[language];
        if (country) return getWeekStartByRegion(country.match(/^\d+$/) ? Number(country) : country, regionDayMap);
    }
    return 1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3q2vM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var langRegionMap = {
    en: "US",
    zh: "CN",
    zh_hans: "CN",
    hans: "CN",
    wuu: "CN",
    hsn: "CN",
    hak: "CN",
    nan: "CN",
    gan: "CN",
    hi: "IN",
    te: "IN",
    mr: "IN",
    ta: "IN",
    gu: "IN",
    kn: "IN",
    or: "IN",
    ml: "IN",
    pa_guru: "IN",
    bho: "IN",
    awa: "IN",
    as: "IN",
    mwr: "IN",
    mai: "IN",
    mag: "IN",
    bgc: "IN",
    hne: "IN",
    dcc: "IN",
    dz: "BT",
    tn: "BW",
    am: "ET",
    om: "ET",
    quc: "GT",
    id: "ID",
    jv: "ID",
    su: "ID",
    mad: "ID",
    ms_arab: "ID",
    ga: "IE",
    he: "IL",
    jam: "JM",
    ja: "JP",
    km: "KH",
    ko: "KR",
    lo: "LA",
    mh: "MH",
    my: "MM",
    mt: "MT",
    ne: "NP",
    fil: "PH",
    ceb: "PH",
    ilo: "PH",
    ur: "PK",
    pa: "PK",
    pa_arab: "PK",
    arab: "PK",
    lah: "PK",
    ps: "PK",
    sd: "PK",
    sd_arab: "PK",
    skr: "PK",
    gn: "PY",
    th: "TH",
    tts: "TH",
    aeb: "TN",
    zh_hant: "TW",
    hant: "TW",
    sm: "WS",
    zu: "ZA",
    sn: "ZW",
    arq: "DZ",
    ar: "EG",
    arz: "EG",
    fa: "IR",
    az_arab: "IR",
    ary: "MA",
    bn: "BD",
    rkt: "BD",
    dv: "MV"
};
exports.default = langRegionMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YuOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var regionDayMap = {
    AG: 0,
    ATG: 0,
    28: 0,
    AR: 0,
    ARG: 0,
    32: 0,
    AS: 0,
    ASM: 0,
    16: 0,
    AU: 0,
    AUS: 0,
    36: 0,
    BR: 0,
    BRA: 0,
    76: 0,
    BS: 0,
    BHS: 0,
    44: 0,
    BT: 0,
    BTN: 0,
    64: 0,
    BW: 0,
    BWA: 0,
    72: 0,
    BZ: 0,
    BLZ: 0,
    84: 0,
    CA: 0,
    CAN: 0,
    124: 0,
    CN: 0,
    CHN: 0,
    156: 0,
    CO: 0,
    COL: 0,
    170: 0,
    DM: 0,
    DMA: 0,
    212: 0,
    DO: 0,
    DOM: 0,
    214: 0,
    ET: 0,
    ETH: 0,
    231: 0,
    GT: 0,
    GTM: 0,
    320: 0,
    GU: 0,
    GUM: 0,
    316: 0,
    HK: 0,
    HKG: 0,
    344: 0,
    HN: 0,
    HND: 0,
    340: 0,
    ID: 0,
    IDN: 0,
    360: 0,
    IE: 0,
    IRL: 0,
    372: 0,
    IL: 0,
    ISR: 0,
    376: 0,
    IN: 0,
    IND: 0,
    356: 0,
    JM: 0,
    JAM: 0,
    388: 0,
    JP: 0,
    JPN: 0,
    392: 0,
    KE: 0,
    KEN: 0,
    404: 0,
    KH: 0,
    KHM: 0,
    116: 0,
    KR: 0,
    KOR: 0,
    410: 0,
    LA: 0,
    LA0: 0,
    418: 0,
    MH: 0,
    MHL: 0,
    584: 0,
    MM: 0,
    MMR: 0,
    104: 0,
    MO: 0,
    MAC: 0,
    446: 0,
    MT: 0,
    MLT: 0,
    470: 0,
    MX: 0,
    MEX: 0,
    484: 0,
    MZ: 0,
    MOZ: 0,
    508: 0,
    NI: 0,
    NIC: 0,
    558: 0,
    NP: 0,
    NPL: 0,
    524: 0,
    NZ: 0,
    NZL: 0,
    554: 0,
    PA: 0,
    PAN: 0,
    591: 0,
    PE: 0,
    PER: 0,
    604: 0,
    PH: 0,
    PHL: 0,
    608: 0,
    PK: 0,
    PAK: 0,
    586: 0,
    PR: 0,
    PRI: 0,
    630: 0,
    PY: 0,
    PRY: 0,
    600: 0,
    SA: 0,
    SAU: 0,
    682: 0,
    SG: 0,
    SGP: 0,
    702: 0,
    SV: 0,
    SLV: 0,
    222: 0,
    TH: 0,
    THA: 0,
    764: 0,
    TN: 0,
    TUN: 0,
    788: 0,
    TT: 0,
    TTO: 0,
    780: 0,
    TW: 0,
    TWN: 0,
    158: 0,
    UM: 0,
    UMI: 0,
    581: 0,
    US: 0,
    USA: 0,
    840: 0,
    VE: 0,
    VEN: 0,
    862: 0,
    VI: 0,
    VIR: 0,
    850: 0,
    WS: 0,
    WSM: 0,
    882: 0,
    YE: 0,
    YEM: 0,
    887: 0,
    ZA: 0,
    ZAF: 0,
    710: 0,
    ZW: 0,
    ZWE: 0,
    716: 0,
    AE: 6,
    ARE: 6,
    784: 6,
    AF: 6,
    AFG: 6,
    4: 6,
    BH: 6,
    BHR: 6,
    48: 6,
    DJ: 6,
    DJI: 6,
    262: 6,
    DZ: 6,
    DZA: 6,
    12: 6,
    EG: 6,
    EGY: 6,
    818: 6,
    IQ: 6,
    IRQ: 6,
    368: 6,
    IR: 6,
    IRN: 6,
    364: 6,
    JO: 6,
    JOR: 6,
    400: 6,
    KW: 6,
    KWT: 6,
    414: 6,
    LY: 6,
    LBY: 6,
    434: 6,
    MA: 6,
    MAR: 6,
    504: 6,
    OM: 6,
    OMN: 6,
    512: 6,
    QA: 6,
    QAT: 6,
    634: 6,
    SD: 6,
    SDN: 6,
    729: 6,
    SY: 6,
    SYR: 6,
    760: 6,
    BD: 5,
    BGD: 5,
    50: 5,
    MV: 5,
    MDV: 5,
    462: 5
};
exports.default = regionDayMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TjfyS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc5defb3a6280ac7");
    if (script.__esModule) script = script.default;
    script.render = require("4c9610db9930cda0").render;
    script.staticRenderFns = require("4c9610db9930cda0").staticRenderFns;
    script._scopeId = "data-v-1e9849";
    script.__cssModules = require("a490e9667cd5bd7b").default;
    require("1b7c393ee2db24ae").default(script);
    script.__scopeId = "data-v-1e9849";
    script.__file = "selectTaskGroup.vue";
};
initialize();
exports.default = script;

},{"cc5defb3a6280ac7":"epCYy","4c9610db9930cda0":"jRRHn","a490e9667cd5bd7b":"43Y2x","1b7c393ee2db24ae":"2cmvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epCYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _linkerTemplateVue = require("./linkerTemplate.vue");
var _linkerTemplateVueDefault = parcelHelpers.interopDefault(_linkerTemplateVue);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var scriptExports = {
    name: "selectCategory",
    props: {
        contextIdSelected: {},
        categoryIdSelected: {},
        groupIdSelected: {}
    },
    data () {
        return {
            data: [],
            contextId: "",
            categories: [],
            categoryId: "",
            groups: [],
            groupId: ""
        };
    },
    components: {
        "link-template": (0, _linkerTemplateVueDefault.default)
    },
    async mounted () {
        this.data = await this.getAllData();
    // if (this.contextIdSelected && this.contextIdSelected.trim().length > 0) {
    //   this.selectContext(this.contextIdSelected);
    // }
    // if (this.categoryIdSelected && this.categoryIdSelected.trim().length > 0) {
    //   this.selectCategory(this.categoryIdSelected);
    // }
    // if (this.groupIdSelected && this.groupIdSelected.trim().length > 0) {
    //   this.selectGroup(this.groupIdSelected);
    // }
    },
    methods: {
        showCreatBtn () {
            return this.contextId && this.contextId.length > 0 && this.categoryId && this.categoryId.length > 0;
        },
        selectContext (id) {
            this.contextId = id;
            this.$emit("selectContext", id);
        },
        selectCategory (id) {
            this.categoryId = id;
            this.$emit("selectCategory", id);
        },
        selectGroup (id) {
            this.groupId = id;
            this.$emit("selectGroup", id);
        },
        createContext () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTaskContextDialog", {
                callback: (info)=>{
                    console.log("info", info);
                    info.categories = [];
                    this.data = [
                        ...this.data,
                        info
                    ];
                    this.selectContext(info.id);
                }
            });
        // this.$emit("createContext");
        },
        createCategory () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createCategoryDialog", {
                title: "add Category",
                contextId: this.contextId,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.contextId),
                callback: (id)=>{
                    const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id).get();
                    info.groups = [];
                    const contextFound = this.data.find((el)=>el.id == this.contextId);
                    if (contextFound) {
                        contextFound.categories.push(info);
                        this.categories = contextFound.categories;
                        this.selectCategory(id);
                    }
                }
            });
        // this.$emit("createCategory");
        },
        createGroup () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createGroupDialog", {
                title: "add Group",
                contextId: this.contextId,
                selectedNode: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.categoryId),
                callback: (id)=>{
                    const info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(id).get();
                    const contextFound = this.data.find((el)=>el.id == this.contextId);
                    if (contextFound) {
                        const categoryFound = contextFound.categories.find((el)=>el.id == this.categoryId);
                        if (categoryFound) {
                            categoryFound.groups.push(info);
                            this.groups = categoryFound.groups;
                            this.selectGroup(id);
                        }
                    // contextFound.categories.push(info);
                    // this.categories = contextFound.categories;
                    // this.selectCategory(id);
                    }
                }
            });
        // this.$emit("createGroup");
        },
        async getAllData () {
            let contexts = await (0, _spinalEnvViewerTaskService.SpinalEventService).getEventContexts();
            let promises = contexts.map(async (el)=>{
                const context = el.get();
                context.categories = await this.getCategories(context.id);
                return context;
            });
            return Promise.all(promises);
        },
        async getCategories (contextId) {
            const categories = await (0, _spinalEnvViewerTaskService.SpinalEventService).getEventsCategories(contextId);
            const groupsPromises = categories.map(async (el)=>{
                const category = el.get();
                category.groups = await this.getGroups(category.id);
                return category;
            });
            return Promise.all(groupsPromises);
        },
        getGroups (nodeId) {
            return (0, _spinalEnvViewerTaskService.SpinalEventService).getEventsGroups(nodeId).then((groups)=>{
                return groups.map((el)=>el.get());
            });
        },
        updateCategories () {
            // this.categorySelected = undefined;
            this.categories = [];
            if (this.contextId) {
                let val = this.data.find((el)=>el.id === this.contextId);
                if (val) this.categories = val.categories;
            }
        },
        updateGroups () {
            this.groups = [];
            if (this.contextId && this.categoryId) {
                let context = this.data.find((el)=>el.id === this.contextId);
                if (context) {
                    let category = context.categories.find((el)=>el.id == this.categoryId);
                    if (category) this.groups = category.groups;
                }
            }
        }
    },
    watch: {
        contextId () {
            this.categoryId = undefined;
            this.groupId = undefined;
            this.updateCategories();
        // this.updateProcesses();
        },
        categoryId () {
            this.groupId = undefined;
            this.updateGroups();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","./linkerTemplate.vue":"4CM8J","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CM8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("abf5d0d10603585b");
    if (script.__esModule) script = script.default;
    script.render = require("45c800af33994312").render;
    script.staticRenderFns = require("45c800af33994312").staticRenderFns;
    script._scopeId = "data-v-c2c714";
    script.__cssModules = require("e9a23165bbfba54b").default;
    require("b3b0f83539f0b032").default(script);
    script.__scopeId = "data-v-c2c714";
    script.__file = "linkerTemplate.vue";
};
initialize();
exports.default = script;

},{"abf5d0d10603585b":"4Uq6H","45c800af33994312":"hlccH","e9a23165bbfba54b":"fP7yq","b3b0f83539f0b032":"gtftj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Uq6H":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlccH":[function(require,module,exports) {
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
                _c("md-button", {
                    staticClass: "md-icon-button",
                    attrs: {
                        "disabled": !_vm.showBtn
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
        ], 1),
        _vm._v(" "),
        _c("md-content", {
            staticClass: "container md-scrollbar"
        }, [
            _c("md-list", _vm._l(_vm.data, function(item, index) {
                return _c("md-list-item", {
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
                    _c("md-list-item-text", {
                        staticClass: "text"
                    }, [
                        _vm._v(_vm._s(item.name))
                    ])
                ], 1);
            }), 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"fP7yq":[function() {},{}],"gtftj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRRHn":[function(require,module,exports) {
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
                        "title": "Contexts",
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
                        "title": "Categories",
                        "data": _vm.categories,
                        "itemSelected": _vm.categoryId,
                        "showBtn": _vm.contextId && _vm.contextId.length > 0
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
                        "itemSelected": _vm.groupId,
                        "showBtn": _vm.showCreatBtn()
                    },
                    on: {
                        "select": _vm.selectGroup,
                        "create": _vm.createGroup
                    }
                })
            ], 1)
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"43Y2x":[function() {},{}],"2cmvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"doRPm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a1ae8767a841b679");
    if (script.__esModule) script = script.default;
    script.render = require("a563f5172073b9f4").render;
    script.staticRenderFns = require("a563f5172073b9f4").staticRenderFns;
    script._scopeId = "data-v-2d2621";
    script.__cssModules = require("9517306d6cc6f344").default;
    require("a9d689fe9e3b139f").default(script);
    script.__scopeId = "data-v-2d2621";
    script.__file = "taskForm.vue";
};
initialize();
exports.default = script;

},{"a1ae8767a841b679":"kBAUB","a563f5172073b9f4":"8HQMM","9517306d6cc6f344":"jv9sl","a9d689fe9e3b139f":"b2UYH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBAUB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "taskForm",
    data () {
        return {};
    },
    methods: {
        goBack () {
            this.$emit("back");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8HQMM":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "taskForm"
    }, [
        _c("md-toolbar", {
            staticClass: "toolbarHeader",
            attrs: {
                "md-elevation": "0"
            }
        }, [
            _c("md-button", {
                staticClass: "md-dense md-primary",
                on: {
                    "click": _vm.goBack
                }
            }, [
                _c("md-icon", [
                    _vm._v("keyboard_backspace")
                ]),
                _vm._v("\n      BACK\n    ")
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "container"
        }, [
            _c("md-field", [
                _c("label", [
                    _vm._v("Name")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    on: {
                        "blur": _vm.setName
                    }
                })
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jv9sl":[function() {},{}],"b2UYH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMoPM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EVENT_TYPES", ()=>EVENT_TYPES);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
const EventBus = new (0, _vueDefault.default)();
const EVENT_TYPES = {
    CREATED: "eventCreated",
    UPDATED: "eventUpdated",
    DELETED: "eventDeleted"
};
exports.default = EventBus;

},{"vue":"gt5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4MdJ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "eventMdDialog",
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Add Event")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "_dialogContainer",
            class: {
                "created": _vm.pageSelected === _vm.PAGES.creation
            }
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("select-task-group", {
                ref: "select-task-group",
                on: {
                    "selectContext": _vm.selectContext,
                    "selectCategory": _vm.selectCategory,
                    "selectGroup": _vm.selectGroup
                }
            }) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "taskForm"
            }, [
                _c("md-toolbar", {
                    staticClass: "toolbarHeader",
                    attrs: {
                        "md-elevation": "0"
                    }
                }, [
                    _c("md-button", {
                        staticClass: "md-dense md-primary",
                        on: {
                            "click": _vm.goToBack
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("keyboard_backspace")
                        ]),
                        _vm._v("\n               BACK\n            ")
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("md-content", {
                    staticClass: "container md-scrollbar"
                }, [
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.event.name,
                                callback: function($$v) {
                                    _vm.$set(_vm.event, "name", $$v);
                                },
                                expression: "event.name"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "dates"
                    }, [
                        _c("div", {
                            staticClass: "begin"
                        }, [
                            _c("datetime", {
                                attrs: {
                                    "format": "dd/MM/yyyy HH:mm",
                                    "min-datetime": _vm.startDateMin,
                                    "title": "Start date",
                                    "type": "datetime",
                                    "input-id": "startDate",
                                    "input-style": _vm.beginInputStyle,
                                    "use12-hour": false
                                },
                                model: {
                                    value: _vm.event.startDate,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "startDate", $$v);
                                    },
                                    expression: "event.startDate"
                                }
                            }, [
                                _c("label", {
                                    attrs: {
                                        "slot": "before",
                                        "for": "startDate"
                                    },
                                    slot: "before"
                                }, [
                                    _vm._v("Start date")
                                ])
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "end"
                        }, [
                            _c("datetime", {
                                attrs: {
                                    "format": "dd/MM/yyyy HH:mm",
                                    "min-datetime": _vm.endDateMin,
                                    "max-datetime": _vm.endDateMax,
                                    "title": "End date",
                                    "type": "datetime",
                                    "input-id": "endDate",
                                    "input-style": _vm.beginInputStyle
                                },
                                model: {
                                    value: _vm.event.endDate,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "endDate", $$v);
                                    },
                                    expression: "event.endDate"
                                }
                            }, [
                                _c("label", {
                                    attrs: {
                                        "slot": "before",
                                        "for": "endDate"
                                    },
                                    slot: "before"
                                }, [
                                    _vm._v("End date")
                                ])
                            ])
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "md-layout md-gutter periodicity"
                    }, [
                        _c("div", {
                            staticClass: "md-layout-item md-size-1000 radios"
                        }, [
                            _c("md-radio", {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": false
                                },
                                model: {
                                    value: _vm.event.repeat,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "repeat", $$v);
                                    },
                                    expression: "event.repeat"
                                }
                            }, [
                                _vm._v("Repeat Once")
                            ]),
                            _vm._v(" "),
                            _c("md-radio", {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": true
                                },
                                model: {
                                    value: _vm.event.repeat,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "repeat", $$v);
                                    },
                                    expression: "event.repeat"
                                }
                            }, [
                                _vm._v("Repeat every")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _vm.event.repeat ? _c("div", {
                            staticClass: "md-layout-item md-size-50 number"
                        }, [
                            _c("md-field", [
                                _c("md-input", {
                                    attrs: {
                                        "type": "number",
                                        "placeholder": "A nice placeholder"
                                    },
                                    model: {
                                        value: _vm.event.periodicity.count,
                                        callback: function($$v) {
                                            _vm.$set(_vm.event.periodicity, "count", $$v);
                                        },
                                        expression: "event.periodicity.count"
                                    }
                                })
                            ], 1)
                        ], 1) : _vm._e(),
                        _vm._v(" "),
                        _vm.event.repeat ? _c("div", {
                            staticClass: "md-layout-item md-size-50 period"
                        }, [
                            _c("md-field", [
                                _c("label", {
                                    attrs: {
                                        "for": "Period"
                                    }
                                }, [
                                    _vm._v("Period")
                                ]),
                                _vm._v(" "),
                                _c("md-select", {
                                    attrs: {
                                        "name": "Period",
                                        "id": "Period"
                                    },
                                    model: {
                                        value: _vm.event.periodicity.period,
                                        callback: function($$v) {
                                            _vm.$set(_vm.event.periodicity, "period", $$v);
                                        },
                                        expression: "event.periodicity.period"
                                    }
                                }, _vm._l(Object.keys(_vm.PERIODS), function(period, index) {
                                    return _c("md-option", {
                                        key: index,
                                        attrs: {
                                            "value": _vm.PERIODS[period],
                                            "selected": ""
                                        }
                                    }, [
                                        _vm._v(_vm._s(period))
                                    ]);
                                }), 1)
                            ], 1)
                        ], 1) : _vm._e(),
                        _vm._v(" "),
                        _vm.event.repeat ? _c("div", {
                            staticClass: "repeatEnd md-layout-item md-size-100"
                        }, [
                            _c("datetime", {
                                attrs: {
                                    "format": "dd/MM/yyyy",
                                    "min-datetime": _vm.repeatEndMin,
                                    "title": "repeat until",
                                    "type": "date",
                                    "input-id": "endDate",
                                    "input-style": _vm.beginInputStyle
                                },
                                model: {
                                    value: _vm.event.repeatEnd,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "repeatEnd", $$v);
                                    },
                                    expression: "event.repeatEnd"
                                }
                            }, [
                                _c("label", {
                                    attrs: {
                                        "slot": "before",
                                        "for": "endDate"
                                    },
                                    slot: "before"
                                }, [
                                    _vm._v("repeat until")
                                ])
                            ])
                        ], 1) : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "description"
                    }, [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("Description")
                            ]),
                            _vm._v(" "),
                            _c("md-textarea", {
                                model: {
                                    value: _vm.event.description,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "description", $$v);
                                    },
                                    expression: "event.description"
                                }
                            })
                        ], 1)
                    ], 1)
                ], 1)
            ], 1) : _vm._e()
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
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _vm.pageSelected === _vm.PAGES.selection ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableNextBtn()
                },
                on: {
                    "click": _vm.goToNext
                }
            }, [
                _vm._v("NEXT")
            ]) : _vm.pageSelected === _vm.PAGES.creation ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableOkBtn()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("OK")
            ]) : _vm._e()
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1tZBA":[function() {},{}],"8uduj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irCJb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f1f4d4f760d90b6b");
    if (script.__esModule) script = script.default;
    script.render = require("514cfec9e1b06c8a").render;
    script.staticRenderFns = require("514cfec9e1b06c8a").staticRenderFns;
    script._scopeId = "data-v-bb8279";
    script.__cssModules = require("5c00754cbd2fbc0b").default;
    require("7f6c472c046f6889").default(script);
    script.__scopeId = "data-v-bb8279";
    script.__file = "editTask.vue";
};
initialize();
exports.default = script;

},{"f1f4d4f760d90b6b":"fu7jh","514cfec9e1b06c8a":"adsBa","5c00754cbd2fbc0b":"i7YUS","7f6c472c046f6889":"hN7r9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fu7jh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _vueDatetime = require("vue-datetime");
var _selectTaskGroupVue = require("../components/selectTaskGroup.vue");
var _selectTaskGroupVueDefault = parcelHelpers.interopDefault(_selectTaskGroupVue);
var _taskFormVue = require("../components/taskForm.vue");
var _taskFormVueDefault = parcelHelpers.interopDefault(_taskFormVue);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _spinalEnvViewerPluginForge = require("spinal-env-viewer-plugin-forge");
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "editTaskDialog",
    components: {
        datetime: (0, _vueDatetime.Datetime)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.PERIODS = Object.freeze((0, _spinalEnvViewerTaskService.Period));
        // this.PAGES = {
        //   selection: 0,
        //   creation: 1,
        // };
        this.beginInputStyle = {
            "border-bottom": "1px solid white",
            width: "100%"
        };
        return {
            //   periodicity: { count: 1, period: 86400000 },
            // event.repeat: true,
            endDateMin: null,
            endDateMax: null,
            startDateMin: null,
            event: {
                contextId: "",
                groupId: "",
                categoryId: "",
                assignedTo: "",
                startDate: "",
                endDate: "",
                // periodicity: { count: 1, period: 86400000 },
                name: ""
            },
            showDialog: true
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            this.startDateMin = (0, _momentDefault.default)().toISOString();
            option.startDate = (0, _momentDefault.default)(option.startDate).toISOString();
            option.endDate = (0, _momentDefault.default)(option.endDate).toISOString();
            this.event = option;
        // delete this.event.repeat;
        },
        async removed (option) {
            if (option) (0, _spinalEnvViewerTaskService.SpinalEventService).updateEvent(this.event.id, this.event).then((result)=>{
                (0, _eventDefault.default).$emit((0, _event.EVENT_TYPES).UPDATED, this.event);
            });
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        disableOkBtn () {
            const condition = this.event.startDate && this.event.startDate.toString().trim().length > 0 && this.event.endDate && this.event.endDate.toString().trim().length > 0 && // this.event.periodicity &&
            // this.event.periodicity.toString().trim().length > 0 &&
            this.event.name && this.event.name.toString().trim().length > 0;
            return !condition;
        // if (!this.event.repeat) return !condition;
        // return !(condition && this.event.periodicity.count >= 1);
        }
    },
    watch: {
        "event.startDate": function() {
            this.endDateMin = this.event.startDate;
            this.endDateMax = (0, _momentDefault.default)(new Date(this.event.startDate).setHours(23, 59, 59, 999)).toISOString();
            this.event.endDate = (0, _momentDefault.default)(this.event.startDate).add(1, "h").toISOString();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","vue-datetime":"1I8ef","../components/selectTaskGroup.vue":"TjfyS","../components/taskForm.vue":"doRPm","moment":"jwcsj","spinal-env-viewer-plugin-forge":"8YZk7","../../js/event":"kMoPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adsBa":[function(require,module,exports) {
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Edit Event")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "_dialogContainer"
        }, [
            _c("div", {
                staticClass: "taskForm"
            }, [
                _c("div", {
                    staticClass: "container"
                }, [
                    _c("md-field", [
                        _c("label", [
                            _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("md-input", {
                            model: {
                                value: _vm.event.name,
                                callback: function($$v) {
                                    _vm.$set(_vm.event, "name", $$v);
                                },
                                expression: "event.name"
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "dates"
                    }, [
                        _c("div", {
                            staticClass: "begin"
                        }, [
                            _c("datetime", {
                                attrs: {
                                    "format": "dd/MM/yyyy HH:mm",
                                    "min-datetime": _vm.startDateMin,
                                    "title": "Start date",
                                    "type": "datetime",
                                    "input-id": "startDate",
                                    "input-style": _vm.beginInputStyle
                                },
                                model: {
                                    value: _vm.event.startDate,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "startDate", $$v);
                                    },
                                    expression: "event.startDate"
                                }
                            }, [
                                _c("label", {
                                    attrs: {
                                        "slot": "before",
                                        "for": "startDate"
                                    },
                                    slot: "before"
                                }, [
                                    _vm._v("Start date")
                                ])
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "end"
                        }, [
                            _c("datetime", {
                                attrs: {
                                    "format": "dd/MM/yyyy HH:mm",
                                    "min-datetime": _vm.endDateMin,
                                    "max-datetime": _vm.endDateMax,
                                    "title": "End date",
                                    "type": "datetime",
                                    "input-id": "endDate",
                                    "input-style": _vm.beginInputStyle
                                },
                                model: {
                                    value: _vm.event.endDate,
                                    callback: function($$v) {
                                        _vm.$set(_vm.event, "endDate", $$v);
                                    },
                                    expression: "event.endDate"
                                }
                            }, [
                                _c("label", {
                                    attrs: {
                                        "slot": "before",
                                        "for": "endDate"
                                    },
                                    slot: "before"
                                }, [
                                    _vm._v("End date")
                                ])
                            ])
                        ], 1)
                    ])
                ], 1)
            ])
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
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disableOkBtn()
                },
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("OK")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"i7YUS":[function() {},{}],"hN7r9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNLxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("efa5e879f56961c4");
    if (script.__esModule) script = script.default;
    script.render = require("16801a9635acd63a").render;
    script.staticRenderFns = require("16801a9635acd63a").staticRenderFns;
    script._scopeId = "data-v-60ed49";
    script.__cssModules = require("c5c5dbd9cc614553").default;
    require("77091d72c75ddf65").default(script);
    script.__scopeId = "data-v-60ed49";
    script.__file = "confirm-dialog.vue";
};
initialize();
exports.default = script;

},{"efa5e879f56961c4":"iwE83","16801a9635acd63a":"10kLU","c5c5dbd9cc614553":"lPFfu","77091d72c75ddf65":"bIFPQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwE83":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "confirmDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.choices = [
            {
                message: "Remove only this event",
                value: 1
            },
            {
                message: "Remove this event and all previous events of the same type",
                value: 2
            },
            {
                message: "Remove this event and all next events of the same type",
                value: 3
            },
            {
                message: "Remove this event and all events of the same type",
                value: 4
            }
        ];
        this.events = [];
        return {
            // title: "",
            // message: "",
            event: undefined,
            userChoice: 1,
            callback: undefined,
            showDialog: true
        };
    },
    mounted () {},
    methods: {
        async opened (option) {
            this.event = option.event;
            this.callback = option.callback;
            // this.message = option.message;
            // this.title = option.title;
            if (this.event.reference) this.events = await this.getEvents(this.event.nodeId, this.event.reference);
            else this.events = [
                this.event
            ];
        },
        async removed (option) {
            if (option) {
                const eventTodelete = this.getEventToDelete(this.events, this.event);
                const promises = eventTodelete.map(async (el)=>{
                    const id = el.id;
                    await (0, _spinalEnvViewerTaskService.SpinalEventService).removeEvent(id);
                    (0, _eventDefault.default).$emit((0, _event.EVENT_TYPES).DELETED, id);
                });
                await Promise.all(promises);
            }
            typeof this.callback === "function" && this.callback(option);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getEvents (nodeId, reference) {
            if (!nodeId) return [];
            return (0, _spinalEnvViewerTaskService.SpinalEventService).getEvents(nodeId).then((result)=>{
                const events = result.filter((el)=>{
                    return el.reference && el.reference.get() == reference;
                });
                return events.map((el)=>el.get());
            });
        },
        getEventToDelete (events, event) {
            switch(this.userChoice){
                case 1:
                    //only event
                    return events.filter((el)=>el.id === event.id);
                case 2:
                    //event && previous
                    return events.filter((el)=>el.startDate <= event.startDate);
                case 3:
                    //event && next
                    return events.filter((el)=>el.startDate >= event.startDate);
                case 4:
                    //all events
                    return events;
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","../../js/event":"kMoPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10kLU":[function(require,module,exports) {
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Delete event(s)")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _vm.event && _vm.event.reference ? _c("div", _vm._l(_vm.choices, function(choice) {
                return _c("div", {
                    key: choice.value
                }, [
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": choice.value
                        },
                        model: {
                            value: _vm.userChoice,
                            callback: function($$v) {
                                _vm.userChoice = $$v;
                            },
                            expression: "userChoice"
                        }
                    }, [
                        _vm._v(_vm._s(choice.message))
                    ])
                ], 1);
            }), 0) : _c("div", [
                _vm._v("\n         Do you want to remove this event ?\n      ")
            ])
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
                _vm._v("Cancel")
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

},{}],"lPFfu":[function() {},{}],"bIFPQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVpnz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c3613ebe53242342");
    if (script.__esModule) script = script.default;
    script.render = require("e620721d38dc7ea0").render;
    script.staticRenderFns = require("e620721d38dc7ea0").staticRenderFns;
    script._scopeId = "data-v-75135d";
    script.__cssModules = require("79c263eab6af1ba8").default;
    require("694610824cca8b76").default(script);
    script.__scopeId = "data-v-75135d";
    script.__file = "delete-all.vue";
};
initialize();
exports.default = script;

},{"c3613ebe53242342":"1K8Z2","e620721d38dc7ea0":"hSLOl","79c263eab6af1ba8":"jHJIL","694610824cca8b76":"4htIl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K8Z2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "deleteAllDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            callback: undefined,
            events: [],
            showDialog: true
        };
    },
    mounted () {},
    methods: {
        opened (option) {
            this.callback = option.callback;
            this.events = option.events;
        // this.events = option.events.map((el) => {
        //   return el;
        // });
        },
        async removed (option) {
            if (option) {
                const promises = this.events.map(async (el)=>{
                    await (0, _spinalEnvViewerTaskService.SpinalEventService).removeEvent(el.id);
                    (0, _eventDefault.default).$emit((0, _event.EVENT_TYPES).DELETED, el.id);
                    return;
                });
                await Promise.all(promises);
            // typeof this.callback === "function" && this.callback(option);
            }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-task-service":"4IrFb","../../js/event":"kMoPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSLOl":[function(require,module,exports) {
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
            staticClass: "_dialogTitle"
        }, [
            _vm._v("Delete")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _vm._v("\n    Do you want delete all events ?\n  ")
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
                _vm._v("Cancel")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-accent",
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("DELETE")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jHJIL":[function() {},{}],"4htIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BbSS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _taskPanelVue = require("./taskPanel.vue");
var _taskPanelVueDefault = parcelHelpers.interopDefault(_taskPanelVue);
var _seeEventDetailVue = require("./seeEventDetail.vue");
var _seeEventDetailVueDefault = parcelHelpers.interopDefault(_seeEventDetailVue);
const panels = [
    {
        name: "taskPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _taskPanelVueDefault.default)),
        panel: {
            title: "Events Panel",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "seeEventDetail",
        vueMountComponent: (0, _vueDefault.default).extend((0, _seeEventDetailVueDefault.default)),
        panel: {
            title: "Event Detail Panel",
            closeBehaviour: "hide"
        },
        style: {
            minWidth: "660px",
            height: "475px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./taskPanel.vue":"kxD8T","./seeEventDetail.vue":"3DYxy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"kxD8T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2ce2bd86d31a156b");
    if (script.__esModule) script = script.default;
    script.render = require("a194596b385a160c").render;
    script.staticRenderFns = require("a194596b385a160c").staticRenderFns;
    script._scopeId = "data-v-5cbbd9";
    script.__cssModules = require("9a02250486fd93ad").default;
    require("a75fa4f2f30d6f54").default(script);
    script.__scopeId = "data-v-5cbbd9";
    script.__file = "taskPanel.vue";
};
initialize();
exports.default = script;

},{"2ce2bd86d31a156b":"9nPQ5","a194596b385a160c":"3g7Se","9a02250486fd93ad":"im95M","a75fa4f2f30d6f54":"g4ZZF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nPQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginGroupManagerService = require("spinal-env-viewer-plugin-group-manager-service");
var _select = require("../../buttons/standard_buttons/select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _vueCal = require("vue-cal");
var _vueCalDefault = parcelHelpers.interopDefault(_vueCal);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var _spinalEnvViewerPluginNoteStandardButtonsService = require("spinal-env-viewer-plugin-note-standard-buttons-service");
var _spinalEnvViewerPluginNoteStandardButtonsServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginNoteStandardButtonsService);
var scriptExports = {
    name: "taskPanelContainer",
    components: {
        // "task-calendar": TasksCalendar,
        "vue-cal": (0, _vueCalDefault.default)
    },
    data () {
        this.standard_buttons = [
            {
                icon: "visibility",
                label: "select on 3D model",
                action: (view)=>{}
            },
            {
                icon: "settings_overscan",
                label: "isolate on 3D model",
                action: (view)=>{}
            }
        ];
        this.eventShared = [];
        this.node_events = [];
        return {
            isEventContext: false,
            nodeInfo: undefined,
            events: [],
            colormaps: new Map(),
            config: {},
            styleTag: document.createElement("style"),
            displayEventsShared: true,
            displayonlyEventsShared: false
        };
    },
    mounted () {
        (0, _eventDefault.default).$on((0, _event.EVENT_TYPES).CREATED, async ()=>{
            const contextId = this.nodeInfo.context && this.nodeInfo.context.id.get();
            const nodeId = this.nodeInfo.selectedNode && this.nodeInfo.selectedNode.id.get();
            await this.reloadData(contextId, nodeId);
            this.events = await this.setEvents();
        });
        (0, _eventDefault.default).$on((0, _event.EVENT_TYPES).UPDATED, async ()=>{
            const contextId = this.nodeInfo.context && this.nodeInfo.context.id.get();
            const nodeId = this.nodeInfo.selectedNode && this.nodeInfo.selectedNode.id.get();
            await this.reloadData(contextId, nodeId);
            this.events = await this.setEvents();
        });
        (0, _eventDefault.default).$on((0, _event.EVENT_TYPES).DELETED, (id)=>{
            this.events = this.events.filter((el)=>el.id !== id);
        });
    },
    methods: {
        async opened (option) {
            this.nodeInfo = option;
            const nodeId = option.selectedNode && option.selectedNode.id.get();
            const contextId = option.context && option.context.id.get();
            const name = await this.getName();
            this.isEventContext = option.isEventContext;
            await this.reloadData(contextId, nodeId);
            this.events = await this.setEvents();
            document.head.appendChild(this.styleTag);
            this.setTitle(name);
        },
        reloadData (contextId, nodeId) {
            return Promise.all([
                this.getNodeEvents(contextId, nodeId),
                this.getEventShared(nodeId)
            ]).then((result)=>{
                this.node_events = result[0];
                this.eventShared = result[1];
            });
        },
        closed () {},
        setEvents () {
            if (this.displayonlyEventsShared) return this.eventShared;
            else if (!this.displayEventsShared) return this.node_events;
            else return [
                ...this.eventShared,
                ...this.node_events
            ];
        },
        getNodeEvents (contextId, nodeId) {
            if (this.isEventContext) return this.getEventsInEventContext(contextId, nodeId);
            else if (!this.isEventContext && nodeId) return this._getAndFormatEvents(nodeId);
            else return [];
        },
        addEvent () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("createTaskDialog", this.nodeInfo);
        },
        async getEventsInEventContext (contextId, nodeId) {
            if (!contextId || !nodeId) return [];
            const events = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return node.getType().get() === (0, _spinalEnvViewerTaskService.SpinalEvent).EVENT_TYPE;
            });
            const promises = events.map((el)=>this._formatEvent(el.get()));
            return Promise.all(promises);
        },
        onEventClick (event) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("seeEventDetail", event);
        },
        async _getAndFormatEvents (nodeId, isSharedEvent = false) {
            const events = await (0, _spinalEnvViewerTaskService.SpinalEventService).getEvents(nodeId);
            const promises = events.map((el)=>this._formatEvent(el.get(), isSharedEvent));
            return Promise.all(promises);
        },
        async _formatEvent (event, isSharedEvent) {
            const group = await this._getEventColor(event.groupId, event.contextId);
            event.title = event.name;
            event.start = this._formatDate(event.startDate);
            event.end = this._formatDate(event.endDate);
            event.class = event.groupId;
            event.backgroundColor = group && group.color;
            if (isSharedEvent) event.content = '<i class="v-icon material-icons">link</i>';
            // event.deletable = true;
            // event.titleEditable = false;
            // event.textColor = "#ffffff";
            this.addStyle(event.groupId, group && group.color);
            delete event.startDate;
            delete event.endDate;
            return event;
        },
        _getEventColor (groupId, contextId) {
            let info = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(groupId);
            if (info) // this.styles[`.${info.id.get()}`] = {
            //   backgroundColor: info.color.get(),
            // };
            return Promise.resolve(info.get());
            return (0, _spinalEnvViewerPluginGroupManagerService.groupManagerService).getGroups(contextId).then((result)=>{
                const found = result.find((el)=>el.id.get() === groupId);
                if (found) // this.styles[`.${found.id.get()}`] = {
                //   backgroundColor: found.color.get(),
                // };
                return found.get();
            });
        },
        _formatDate (argDate) {
            let date = new Date(argDate);
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        },
        setTitle (title) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).panels.taskPanel.panel.setTitle(`Events Panel : ${title}`);
        },
        getName () {
            if (this.nodeInfo.selectedNode) return this.nodeInfo.selectedNode.name.get();
            return new Promise((resolve, reject)=>{
                this.nodeInfo.model3d.getBulkProperties([
                    this.nodeInfo.dbid
                ], {
                    propFilter: [
                        "name"
                    ]
                }, async (el)=>{
                    const name = el[0].name;
                    resolve(name);
                });
            });
        },
        addStyle (className, color) {
            const css = `.${className} {
          background-color : ${color}
        }`;
            this.styleTag.appendChild(document.createTextNode(css));
        },
        timeConvertor (time) {
            var PM = time.match("PM") ? true : false;
            time = time.split(":");
            var min = time[1];
            if (PM) {
                var hour = 12 + parseInt(time[0], 10);
                var sec = time[2].replace("PM", "");
            } else {
                var hour = time[0];
                var sec = time[2].replace("AM", "");
            }
            return `${hour}:${min}`;
        },
        // next() {
        //   this.$refs.calendar.fireMethod("next");
        // },
        // changeView(view) {
        //   this.$refs.calendar.fireMethod("changeView", view);
        // },
        deleteEvent (event) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("confirmDialog", {
                event: event,
                // title: "Delete",
                // message: "Do you want to remove this event ?",
                callback: (res)=>{
                    if (!res) this.events = [
                        ...this.events
                    ];
                }
            });
        },
        cellDblClick (date) {
            const events = this.events.filter((el)=>{
                const isSameYear = (0, _momentDefault.default)(el.start).isSame(date, "year");
                if (!isSameYear) return false;
                const isSameMonth = (0, _momentDefault.default)(el.start).isSame(date, "month");
                if (!isSameMonth) return false;
                const isSameDay = (0, _momentDefault.default)(el.start).isSame(date, "day");
                if (!isSameDay) return false;
                return true;
            });
            this.selectEventsOnMaquete(events);
        },
        getBimObjects (events) {
            const proms = events.map((el)=>{
                return (0, _spinalEnvViewerPluginNoteStandardButtonsServiceDefault.default).getGeographicElement(el.id);
            });
            return Promise.all(proms).then(async (el)=>{
                const res = el.flat();
                const promises = res.map((v)=>(0, _spinalEnvViewerPluginNoteStandardButtonsServiceDefault.default)._getItemsBim(v));
                let bims = await Promise.all(promises);
                bims = bims.flat();
                const bimMap = new Map();
                for (const bimObject of bims){
                    const bimFileId = bimObject.bimFileId;
                    const dbid = bimObject.dbid;
                    if (typeof bimMap.get(bimFileId) === "undefined") bimMap.set(bimFileId, new Set());
                    bimMap.get(bimFileId).add(dbid);
                }
                const formated = [];
                for (const [key, value] of bimMap.entries())formated.push({
                    model: window.spinal.BimObjectService.getModelByBimfile(key),
                    ids: Array.from(value)
                });
                return formated;
            });
        },
        async selectEventsOnMaquete (events) {
            // events.forEach((element) => {
            //   const params = {
            //     selectedNode: new Model(element),
            //     context: SpinalGraphService.getInfo(element.contextId),
            //   };
            //   selectElementOnMaquette.action(params);
            // });
            if (events.length === 0) return;
            const bims = await this.getBimObjects(events);
            bims.forEach((el)=>{
                el.model.selector.setSelection(el.ids, el.model, "selectOnly");
            });
        },
        removeAllEvents () {
            const events = this.$refs.vuecal.view.events;
            if (events.length === 0) return;
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("deleteAllDialog", {
                events: events.filter((event)=>{
                    const found = this.eventShared.find((el)=>el.id === event.id);
                    return found ? false : true;
                })
            });
        },
        seeEvents () {
            const events = this.$refs.vuecal.view.events;
            this.selectEventsOnMaquete(events);
        },
        async getEventShared (nodeId) {
            if (this.isEventContext || !nodeId) return [];
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
            const parents = await realNode.getParents();
            const promises = parents.map((el)=>{
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(el);
                return this._getAndFormatEvents(el.getId().get(), true);
            });
            return Promise.all(promises).then((result)=>{
                let res = [];
                for (const eventList of result)res.push(...eventList);
                return res;
            });
        }
    },
    watch: {
        displayEventsShared () {
            if (this.displayEventsShared === false) this.displayonlyEventsShared = false;
            this.events = this.setEvents();
        },
        displayonlyEventsShared () {
            if (this.displayonlyEventsShared) this.displayEventsShared = true;
            this.events = this.setEvents();
        }
    },
    destroyed () {
        this.styleTag.remove();
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-task-service":"4IrFb","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-group-manager-service":"tSLpq","../../buttons/standard_buttons/select":"1EoGn","vue-cal":"6ZWlS","moment":"jwcsj","../../js/event":"kMoPM","spinal-env-viewer-plugin-note-standard-buttons-service":"9JoRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZWlS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>K);
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var F = Object.defineProperty;
var B = (e, t, i)=>t in e ? F(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[t] = i;
var f = (e, t, i)=>(B(e, typeof t != "symbol" ? t + "" : t, i), i);
/**
  * vue-cal v3.11.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */ let T, V, A, y, S = {}, M = {};
class N {
    constructor(t){
        f(this, "_vuecal", null);
        f(this, "selectCell", (t = !1, i, n)=>{
            this._vuecal.$emit("cell-click", n ? {
                date: i,
                split: n
            } : i), this._vuecal.clickToNavigate || t ? this._vuecal.switchToNarrowerView() : this._vuecal.dblclickToNavigate && "ontouchstart" in window && (this._vuecal.domEvents.dblTapACell.taps++, setTimeout(()=>this._vuecal.domEvents.dblTapACell.taps = 0, this._vuecal.domEvents.dblTapACell.timeout), this._vuecal.domEvents.dblTapACell.taps >= 2 && (this._vuecal.domEvents.dblTapACell.taps = 0, this._vuecal.switchToNarrowerView(), this._vuecal.$emit("cell-dblclick", n ? {
                date: i,
                split: n
            } : i)));
        });
        f(this, "keyPressEnterCell", (t, i)=>{
            this._vuecal.$emit("cell-keypress-enter", i ? {
                date: t,
                split: i
            } : t), this._vuecal.switchToNarrowerView();
        });
        f(this, "getPosition", (t)=>{
            const { left: i, top: n } = this._vuecal.$refs.cells.getBoundingClientRect(), { clientX: s, clientY: a } = "ontouchstart" in window && t.touches ? t.touches[0] : t;
            return {
                x: s - i,
                y: a - n
            };
        });
        f(this, "minutesAtCursor", (t)=>{
            let i = 0, n = {
                x: 0,
                y: 0
            };
            const { timeStep: s, timeCellHeight: a, timeFrom: r } = this._vuecal.$props;
            return typeof t == "number" ? i = t : typeof t == "object" && (n = this.getPosition(t), i = Math.round(n.y * s / parseInt(a) + r)), {
                minutes: Math.max(Math.min(i, 1440), 0),
                cursorCoords: n
            };
        });
        this._vuecal = t;
    }
}
let h, v, x;
class I {
    constructor(t, i){
        f(this, "_vuecal", null);
        f(this, "eventDefaults", {
            _eid: null,
            start: "",
            startTimeMinutes: 0,
            end: "",
            endTimeMinutes: 0,
            title: "",
            content: "",
            background: !1,
            allDay: !1,
            segments: null,
            repeat: null,
            daysCount: 1,
            deletable: !0,
            deleting: !1,
            titleEditable: !0,
            resizable: !0,
            resizing: !1,
            draggable: !0,
            dragging: !1,
            draggingStatic: !1,
            focused: !1,
            class: ""
        });
        this._vuecal = t, h = i;
    }
    createAnEvent(t, i, n) {
        if (typeof t == "string" && (t = h.stringToDate(t)), !(t instanceof Date)) return !1;
        const s = h.dateToMinutes(t), a = s + (i = 1 * i || 120), r = h.addMinutes(new Date(t), i);
        n.end && (typeof n.end == "string" && (n.end = h.stringToDate(n.end)), n.endTimeMinutes = h.dateToMinutes(n.end));
        const l = {
            ...this.eventDefaults,
            _eid: `${this._vuecal._uid}_${this._vuecal.eventIdIncrement++}`,
            start: t,
            startTimeMinutes: s,
            end: r,
            endTimeMinutes: a,
            segments: null,
            ...n
        };
        return typeof this._vuecal.onEventCreate != "function" || this._vuecal.onEventCreate(l, ()=>this.deleteAnEvent(l)) ? (l.startDateF !== l.endDateF && (l.daysCount = h.countDays(l.start, l.end)), this._vuecal.mutableEvents.push(l), this._vuecal.addEventsToView([
            l
        ]), this._vuecal.emitWithEvent("event-create", l), this._vuecal.$emit("event-change", {
            event: this._vuecal.cleanupEvent(l),
            originalEvent: null
        }), l) : void 0;
    }
    addEventSegment(t) {
        t.segments || ((0, _vueDefault.default).set(t, "segments", {}), (0, _vueDefault.default).set(t.segments, h.formatDateLite(t.start), {
            start: t.start,
            startTimeMinutes: t.startTimeMinutes,
            endTimeMinutes: 1440,
            isFirstDay: !0,
            isLastDay: !1
        }));
        const i = t.segments[h.formatDateLite(t.end)];
        i && (i.isLastDay = !1, i.endTimeMinutes = 1440);
        const n = h.addDays(t.end, 1), s = h.formatDateLite(n);
        return n.setHours(0, 0, 0, 0), (0, _vueDefault.default).set(t.segments, s, {
            start: n,
            startTimeMinutes: 0,
            endTimeMinutes: t.endTimeMinutes,
            isFirstDay: !1,
            isLastDay: !0
        }), t.end = h.addMinutes(n, t.endTimeMinutes), t.daysCount = Object.keys(t.segments).length, s;
    }
    removeEventSegment(t) {
        let i = Object.keys(t.segments).length;
        if (i <= 1) return h.formatDateLite(t.end);
        (0, _vueDefault.default).delete(t.segments, h.formatDateLite(t.end)), i--;
        const n = h.subtractDays(t.end, 1), s = h.formatDateLite(n), a = t.segments[s];
        return i ? a && (a.isLastDay = !0, a.endTimeMinutes = t.endTimeMinutes) : t.segments = null, t.daysCount = i || 1, t.end = n, s;
    }
    createEventSegments(t, i, n) {
        const s = i.getTime(), a = n.getTime();
        let r, l, o, d = t.start.getTime(), u = t.end.getTime(), c = !1;
        for(t.end.getHours() || t.end.getMinutes() || (u -= 1e3), (0, _vueDefault.default).set(t, "segments", {}), t.repeat ? (r = s, l = Math.min(a, t.repeat.until ? h.stringToDate(t.repeat.until).getTime() : a)) : (r = Math.max(s, d), l = Math.min(a, u)); r <= l;){
            let m = !1;
            const D = h.addDays(new Date(r), 1).setHours(0, 0, 0, 0);
            let p, g, _, w;
            if (t.repeat) {
                const k = new Date(r), C = h.formatDateLite(k);
                (c || t.occurrences && t.occurrences[C]) && (c || (d = t.occurrences[C].start, o = new Date(d).setHours(0, 0, 0, 0), u = t.occurrences[C].end), c = !0, m = !0), p = r === o, g = C === h.formatDateLite(new Date(u)), _ = new Date(p ? d : r), w = h.formatDateLite(_), g && (c = !1);
            } else m = !0, p = r === d, g = l === u && D > l, _ = p ? t.start : new Date(r), w = h.formatDateLite(p ? t.start : _);
            m && (0, _vueDefault.default).set(t.segments, w, {
                start: _,
                startTimeMinutes: p ? t.startTimeMinutes : 0,
                endTimeMinutes: g ? t.endTimeMinutes : 1440,
                isFirstDay: p,
                isLastDay: g
            }), r = D;
        }
        return t;
    }
    deleteAnEvent(t) {
        this._vuecal.emitWithEvent("event-delete", t), this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter((i)=>i._eid !== t._eid), this._vuecal.view.events = this._vuecal.view.events.filter((i)=>i._eid !== t._eid);
    }
    checkCellOverlappingEvents(t, i) {
        x = t.slice(0), v = {}, t.forEach((s)=>{
            x.shift(), v[s._eid] || (0, _vueDefault.default).set(v, s._eid, {
                overlaps: [],
                start: s.start,
                position: 0
            }), v[s._eid].position = 0, x.forEach((a)=>{
                v[a._eid] || (0, _vueDefault.default).set(v, a._eid, {
                    overlaps: [],
                    start: a.start,
                    position: 0
                });
                const r = this.eventInRange(a, s.start, s.end), l = i.overlapsPerTimeStep ? h.datesInSameTimeStep(s.start, a.start, i.timeStep) : 1;
                if (s.background || s.allDay || a.background || a.allDay || !r || !l) {
                    let o, d;
                    (o = (v[s._eid] || {
                        overlaps: []
                    }).overlaps.indexOf(a._eid)) > -1 && v[s._eid].overlaps.splice(o, 1), (d = (v[a._eid] || {
                        overlaps: []
                    }).overlaps.indexOf(s._eid)) > -1 && v[a._eid].overlaps.splice(d, 1), v[a._eid].position--;
                } else v[s._eid].overlaps.push(a._eid), v[s._eid].overlaps = [
                    ...new Set(v[s._eid].overlaps)
                ], v[a._eid].overlaps.push(s._eid), v[a._eid].overlaps = [
                    ...new Set(v[a._eid].overlaps)
                ], v[a._eid].position++;
            });
        });
        let n = 0;
        for(const s in v){
            const a = v[s], r = a.overlaps.map((l)=>({
                    id: l,
                    start: v[l].start
                }));
            r.push({
                id: s,
                start: a.start
            }), r.sort((l, o)=>l.start < o.start ? -1 : l.start > o.start ? 1 : l.id > o.id ? -1 : 1), a.position = r.findIndex((l)=>l.id === s), n = Math.max(this.getOverlapsStreak(a, v), n);
        }
        return [
            v,
            n
        ];
    }
    getOverlapsStreak(t, i = {}) {
        let n = t.overlaps.length + 1, s = [];
        return t.overlaps.forEach((a)=>{
            s.includes(a) || t.overlaps.filter((r)=>r !== a).forEach((r)=>{
                i[r].overlaps.includes(a) || s.push(r);
            });
        }), s = [
            ...new Set(s)
        ], n -= s.length, n;
    }
    eventInRange(t, i, n) {
        if (t.allDay || !this._vuecal.time) {
            const r = new Date(t.start).setHours(0, 0, 0, 0);
            return new Date(t.end).setHours(23, 59, 0, 0) >= new Date(i).setHours(0, 0, 0, 0) && r <= new Date(n).setHours(0, 0, 0, 0);
        }
        const s = t.start.getTime(), a = t.end.getTime();
        return s < n.getTime() && a > i.getTime();
    }
}
function E(e, t, i, n, s, a, r, l) {
    var o, d = typeof e == "function" ? e.options : e;
    if (t && (d.render = t, d.staticRenderFns = i, d._compiled = !0), n && (d.functional = !0), a && (d._scopeId = "data-v-" + a), r ? (o = function(m) {
        (m = m || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (m = __VUE_SSR_CONTEXT__), s && s.call(this, m), m && m._registeredComponents && m._registeredComponents.add(r);
    }, d._ssrRegister = o) : s && (o = l ? function() {
        s.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot);
    } : s), o) {
        if (d.functional) {
            d._injectStyles = o;
            var u = d.render;
            d.render = function(m, D) {
                return o.call(D), u(m, D);
            };
        } else {
            var c = d.beforeCreate;
            d.beforeCreate = c ? [].concat(c, o) : [
                o
            ];
        }
    }
    return {
        exports: e,
        options: d
    };
}
const j = E({
    inject: [
        "vuecal",
        "utils",
        "view"
    ],
    props: {
        transitionDirection: {
            type: String,
            default: "right"
        },
        weekDays: {
            type: Array,
            default: ()=>[]
        },
        switchToNarrowerView: {
            type: Function,
            default: ()=>{}
        }
    },
    methods: {
        selectCell (e, t) {
            e.getTime() !== this.view.selectedDate.getTime() && (this.view.selectedDate = e), this.utils.cell.selectCell(!1, e, t);
        },
        cleanupHeading: (e)=>({
                label: e.full,
                date: e.date,
                ...e.today ? {
                    today: e.today
                } : {}
            })
    },
    computed: {
        headings () {
            if (![
                "month",
                "week"
            ].includes(this.view.id)) return [];
            let e = !1;
            return this.weekDays.map((t, i)=>{
                const n = this.utils.date.addDays(this.view.startDate, this.vuecal.startWeekOnSunday ? i - 1 : i);
                return {
                    hide: t.hide,
                    full: t.label,
                    small: t.short || t.label.substr(0, 3),
                    xsmall: t.short || t.label.substr(0, 1),
                    ...this.view.id === "week" ? {
                        dayOfMonth: n.getDate(),
                        date: n,
                        today: !e && this.utils.date.isToday(n) && !e++
                    } : {}
                };
            });
        },
        cellWidth () {
            return 100 / (7 - this.weekDays.reduce((e, t)=>e + t.hide, 0));
        },
        weekdayCellStyles () {
            return {
                ...this.vuecal.hideWeekdays.length ? {
                    width: `${this.cellWidth}%`
                } : {}
            };
        },
        cellHeadingsClickable () {
            return this.view.id === "week" && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
        }
    }
}, function() {
    var e = this, t = e._self._c;
    return t("div", {
        staticClass: "vuecal__flex vuecal__weekdays-headings"
    }, [
        e._l(e.headings, function(i, n) {
            return [
                i.hide ? e._e() : t("div", {
                    key: n,
                    staticClass: "vuecal__flex vuecal__heading",
                    class: {
                        today: i.today,
                        clickable: e.cellHeadingsClickable
                    },
                    style: e.weekdayCellStyles,
                    on: {
                        click: function(s) {
                            e.view.id === "week" && e.selectCell(i.date, s);
                        },
                        dblclick: function(s) {
                            e.view.id === "week" && e.vuecal.dblclickToNavigate && e.switchToNarrowerView();
                        }
                    }
                }, [
                    t("transition", {
                        attrs: {
                            name: `slide-fade--${e.transitionDirection}`,
                            appear: e.vuecal.transitions
                        }
                    }, [
                        t("div", {
                            key: !!e.vuecal.transitions && `${n}-${i.dayOfMonth}`,
                            staticClass: "vuecal__flex",
                            attrs: {
                                column: ""
                            }
                        }, [
                            t("div", {
                                staticClass: "vuecal__flex weekday-label",
                                attrs: {
                                    grow: ""
                                }
                            }, [
                                e._t("weekday-heading", function() {
                                    return [
                                        t("span", {
                                            staticClass: "full"
                                        }, [
                                            e._v(e._s(i.full))
                                        ]),
                                        t("span", {
                                            staticClass: "small"
                                        }, [
                                            e._v(e._s(i.small))
                                        ]),
                                        t("span", {
                                            staticClass: "xsmall"
                                        }, [
                                            e._v(e._s(i.xsmall))
                                        ]),
                                        i.dayOfMonth ? t("span", [
                                            e._v("\xa0" + e._s(i.dayOfMonth))
                                        ]) : e._e()
                                    ];
                                }, {
                                    heading: e.cleanupHeading(i),
                                    view: e.view
                                })
                            ], 2),
                            e.vuecal.hasSplits && e.vuecal.stickySplitLabels ? t("div", {
                                staticClass: "vuecal__flex vuecal__split-days-headers",
                                attrs: {
                                    grow: ""
                                }
                            }, e._l(e.vuecal.daySplits, function(s, a) {
                                return t("div", {
                                    key: a,
                                    staticClass: "day-split-header",
                                    class: s.class || !1
                                }, [
                                    e._t("split-label", function() {
                                        return [
                                            e._v(e._s(s.label))
                                        ];
                                    }, {
                                        split: s,
                                        view: e.view
                                    })
                                ], 2);
                            }), 0) : e._e()
                        ])
                    ])
                ], 1)
            ];
        })
    ], 2);
}, [], !1, null, null, null, null).exports, P = E({
    inject: [
        "vuecal",
        "previous",
        "next",
        "switchView",
        "updateSelectedDate",
        "modules",
        "view"
    ],
    components: {
        WeekdaysHeadings: j
    },
    props: {
        options: {
            type: Object,
            default: ()=>({})
        },
        editEvents: {
            type: Object,
            required: !0
        },
        hasSplits: {
            type: [
                Boolean,
                Number
            ],
            default: !1
        },
        daySplits: {
            type: Array,
            default: ()=>[]
        },
        viewProps: {
            type: Object,
            default: ()=>({})
        },
        weekDays: {
            type: Array,
            default: ()=>[]
        },
        switchToNarrowerView: {
            type: Function,
            default: ()=>{}
        }
    },
    data: ()=>({
            highlightedControl: null
        }),
    methods: {
        goToToday () {
            this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)));
        },
        switchToBroaderView () {
            this.transitionDirection = "left", this.broaderView && this.switchView(this.broaderView);
        }
    },
    computed: {
        transitionDirection: {
            get () {
                return this.vuecal.transitionDirection;
            },
            set (e) {
                this.vuecal.transitionDirection = e;
            }
        },
        broaderView () {
            const { enabledViews: e } = this.vuecal;
            return e[e.indexOf(this.view.id) - 1];
        },
        showDaySplits () {
            return this.view.id === "day" && this.hasSplits && this.options.stickySplitLabels && !this.options.minSplitWidth;
        },
        dnd () {
            return this.modules.dnd;
        }
    }
}, function() {
    var e = this, t = e._self._c;
    return t("div", {
        staticClass: "vuecal__header"
    }, [
        e.options.hideViewSelector ? e._e() : t("div", {
            staticClass: "vuecal__flex vuecal__menu",
            attrs: {
                role: "tablist",
                "aria-label": "Calendar views navigation"
            }
        }, [
            e._l(e.viewProps.views, function(i, n) {
                return [
                    i.enabled ? t("button", {
                        key: n,
                        staticClass: "vuecal__view-btn",
                        class: {
                            "vuecal__view-btn--active": e.view.id === n,
                            "vuecal__view-btn--highlighted": e.highlightedControl === n
                        },
                        attrs: {
                            type: "button",
                            "aria-label": `${i.label} view`
                        },
                        on: {
                            dragenter: function(s) {
                                e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragEnter(s, n, e.$data);
                            },
                            dragleave: function(s) {
                                e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragLeave(s, n, e.$data);
                            },
                            click: function(s) {
                                return e.switchView(n, null, !0);
                            }
                        }
                    }, [
                        e._v(e._s(i.label))
                    ]) : e._e()
                ];
            })
        ], 2),
        e.options.hideTitleBar ? e._e() : t("div", {
            staticClass: "vuecal__title-bar"
        }, [
            t("button", {
                staticClass: "vuecal__arrow vuecal__arrow--prev",
                class: {
                    "vuecal__arrow--highlighted": e.highlightedControl === "previous"
                },
                attrs: {
                    type: "button",
                    "aria-label": `Previous ${e.view.id}`
                },
                on: {
                    click: e.previous,
                    dragenter: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragEnter(i, "previous", e.$data);
                    },
                    dragleave: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragLeave(i, "previous", e.$data);
                    }
                }
            }, [
                e._t("arrow-prev")
            ], 2),
            t("div", {
                staticClass: "vuecal__flex vuecal__title",
                attrs: {
                    grow: ""
                }
            }, [
                t("transition", {
                    attrs: {
                        name: e.options.transitions ? `slide-fade--${e.transitionDirection}` : ""
                    }
                }, [
                    t(e.broaderView ? "button" : "span", {
                        key: `${e.view.id}${e.view.startDate.toString()}`,
                        tag: "component",
                        attrs: {
                            type: !!e.broaderView && "button",
                            "aria-label": !!e.broaderView && `Go to ${e.broaderView} view`
                        },
                        on: {
                            click: function(i) {
                                e.broaderView && e.switchToBroaderView();
                            }
                        }
                    }, [
                        e._t("title")
                    ], 2)
                ], 1)
            ], 1),
            e.options.todayButton ? t("button", {
                staticClass: "vuecal__today-btn",
                class: {
                    "vuecal__today-btn--highlighted": e.highlightedControl === "today"
                },
                attrs: {
                    type: "button",
                    "aria-label": "Today"
                },
                on: {
                    click: e.goToToday,
                    dragenter: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragEnter(i, "today", e.$data);
                    },
                    dragleave: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragLeave(i, "today", e.$data);
                    }
                }
            }, [
                e._t("today-button")
            ], 2) : e._e(),
            t("button", {
                staticClass: "vuecal__arrow vuecal__arrow--next",
                class: {
                    "vuecal__arrow--highlighted": e.highlightedControl === "next"
                },
                attrs: {
                    type: "button",
                    "aria-label": `Next ${e.view.id}`
                },
                on: {
                    click: e.next,
                    dragenter: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragEnter(i, "next", e.$data);
                    },
                    dragleave: function(i) {
                        e.editEvents.drag && e.dnd && e.dnd.viewSelectorDragLeave(i, "next", e.$data);
                    }
                }
            }, [
                e._t("arrow-next")
            ], 2)
        ]),
        e.viewProps.weekDaysInHeader ? t("weekdays-headings", {
            attrs: {
                "week-days": e.weekDays,
                "transition-direction": e.transitionDirection,
                "switch-to-narrower-view": e.switchToNarrowerView
            },
            scopedSlots: e._u([
                e.$scopedSlots["weekday-heading"] ? {
                    key: "weekday-heading",
                    fn: function({ heading: i, view: n }) {
                        return [
                            e._t("weekday-heading", null, {
                                heading: i,
                                view: n
                            })
                        ];
                    }
                } : null,
                e.$scopedSlots["split-label"] ? {
                    key: "split-label",
                    fn: function({ split: i }) {
                        return [
                            e._t("split-label", null, {
                                split: i,
                                view: e.view
                            })
                        ];
                    }
                } : null
            ], null, !0)
        }) : e._e(),
        t("transition", {
            attrs: {
                name: `slide-fade--${e.transitionDirection}`
            }
        }, [
            e.showDaySplits ? t("div", {
                staticClass: "vuecal__flex vuecal__split-days-headers"
            }, e._l(e.daySplits, function(i, n) {
                return t("div", {
                    key: n,
                    staticClass: "day-split-header",
                    class: i.class || !1
                }, [
                    e._t("split-label", function() {
                        return [
                            e._v(e._s(i.label))
                        ];
                    }, {
                        split: i,
                        view: e.view.id
                    })
                ], 2);
            }), 0) : e._e()
        ])
    ], 1);
}, [], !1, null, null, null, null).exports, Y = E({
    inject: [
        "vuecal",
        "utils",
        "modules",
        "view",
        "domEvents"
    ],
    components: {
        Event: E({
            inject: [
                "vuecal",
                "utils",
                "modules",
                "view",
                "domEvents",
                "editEvents"
            ],
            props: {
                cellFormattedDate: {
                    type: String,
                    default: ""
                },
                event: {
                    type: Object,
                    default: ()=>({})
                },
                cellEvents: {
                    type: Array,
                    default: ()=>[]
                },
                overlaps: {
                    type: Array,
                    default: ()=>[]
                },
                eventPosition: {
                    type: Number,
                    default: 0
                },
                overlapsStreak: {
                    type: Number,
                    default: 0
                },
                allDay: {
                    type: Boolean,
                    default: !1
                }
            },
            data: ()=>({
                    touch: {
                        dragThreshold: 30,
                        startX: 0,
                        startY: 0,
                        dragged: !1
                    }
                }),
            methods: {
                onMouseDown (e, t = !1) {
                    if ("ontouchstart" in window && !t) return !1;
                    const { clickHoldAnEvent: i, focusAnEvent: n, resizeAnEvent: s, dragAnEvent: a } = this.domEvents;
                    if (n._eid === this.event._eid && i._eid === this.event._eid) return !0;
                    this.focusEvent(), i._eid = null, this.vuecal.editEvents.delete && this.event.deletable && (i.timeoutId = setTimeout(()=>{
                        s._eid || a._eid || (i._eid = this.event._eid, this.event.deleting = !0);
                    }, i.timeout));
                },
                onMouseUp (e) {
                    this.domEvents.focusAnEvent._eid !== this.event._eid || this.touch.dragged || (this.domEvents.focusAnEvent.mousedUp = !0), this.touch.dragged = !1;
                },
                onMouseEnter (e) {
                    e.preventDefault(), this.vuecal.emitWithEvent("event-mouse-enter", this.event);
                },
                onMouseLeave (e) {
                    e.preventDefault(), this.vuecal.emitWithEvent("event-mouse-leave", this.event);
                },
                onTouchMove (e) {
                    if (typeof this.vuecal.onEventClick != "function") return;
                    const { clientX: t, clientY: i } = e.touches[0], { startX: n, startY: s, dragThreshold: a } = this.touch;
                    (Math.abs(t - n) > a || Math.abs(i - s) > a) && (this.touch.dragged = !0);
                },
                onTouchStart (e) {
                    this.touch.startX = e.touches[0].clientX, this.touch.startY = e.touches[0].clientY, this.onMouseDown(e, !0);
                },
                onEnterKeypress (e) {
                    if (typeof this.vuecal.onEventClick == "function") return this.vuecal.onEventClick(this.event, e);
                },
                onDblClick (e) {
                    if (typeof this.vuecal.onEventDblclick == "function") return this.vuecal.onEventDblclick(this.event, e);
                },
                onDragStart (e) {
                    this.dnd && this.dnd.eventDragStart(e, this.event);
                },
                onDragEnd () {
                    this.dnd && this.dnd.eventDragEnd(this.event);
                },
                onResizeHandleMouseDown () {
                    this.focusEvent(), this.domEvents.dragAnEvent._eid = null, this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
                        _eid: this.event._eid,
                        start: (this.segment || this.event).start,
                        split: this.event.split || null,
                        segment: !!this.segment && this.utils.date.formatDateLite(this.segment.start),
                        originalEnd: new Date((this.segment || this.event).end),
                        originalEndTimeMinutes: this.event.endTimeMinutes
                    }), this.event.resizing = !0;
                },
                deleteEvent (e = !1) {
                    if ("ontouchstart" in window && !e) return !1;
                    this.utils.event.deleteAnEvent(this.event);
                },
                touchDeleteEvent (e) {
                    this.deleteEvent(!0);
                },
                cancelDeleteEvent () {
                    this.event.deleting = !1;
                },
                focusEvent () {
                    const { focusAnEvent: e } = this.domEvents, t = e._eid;
                    if (t !== this.event._eid) {
                        if (t) {
                            const i = this.view.events.find((n)=>n._eid === t);
                            i && (i.focused = !1);
                        }
                        this.vuecal.cancelDelete(), this.vuecal.emitWithEvent("event-focus", this.event), e._eid = this.event._eid, this.event.focused = !0;
                    }
                }
            },
            computed: {
                eventDimensions () {
                    const { startTimeMinutes: e, endTimeMinutes: t } = this.segment || this.event;
                    let i = e - this.vuecal.timeFrom;
                    const n = Math.max(Math.round(i * this.vuecal.timeCellHeight / this.vuecal.timeStep), 0);
                    i = Math.min(t, this.vuecal.timeTo) - this.vuecal.timeFrom;
                    const s = Math.round(i * this.vuecal.timeCellHeight / this.vuecal.timeStep);
                    return {
                        top: n,
                        height: Math.max(s - n, 5)
                    };
                },
                eventStyles () {
                    if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || this.view.id === "month" || this.allDay) return {};
                    let e = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak), t = 100 / (this.overlaps.length + 1) * this.eventPosition;
                    this.vuecal.minEventWidth && e < this.vuecal.minEventWidth && (e = this.vuecal.minEventWidth, t = (100 - this.vuecal.minEventWidth) / this.overlaps.length * this.eventPosition);
                    const { top: i, height: n } = this.eventDimensions;
                    return {
                        top: `${i}px`,
                        height: `${n}px`,
                        width: `${e}%`,
                        left: this.event.left && `${this.event.left}px` || `${t}%`
                    };
                },
                eventClasses () {
                    const { isFirstDay: e, isLastDay: t } = this.segment || {};
                    return {
                        [this.event.class]: !!this.event.class,
                        "vuecal__event--focus": this.event.focused,
                        "vuecal__event--resizing": this.event.resizing,
                        "vuecal__event--background": this.event.background,
                        "vuecal__event--deletable": this.event.deleting,
                        "vuecal__event--all-day": this.event.allDay,
                        "vuecal__event--dragging": !this.event.draggingStatic && this.event.dragging,
                        "vuecal__event--static": this.event.dragging && this.event.draggingStatic,
                        "vuecal__event--multiple-days": !!this.segment,
                        "event-start": this.segment && e && !t,
                        "event-middle": this.segment && !e && !t,
                        "event-end": this.segment && t && !e
                    };
                },
                segment () {
                    return this.event.segments && this.event.segments[this.cellFormattedDate] || null;
                },
                draggable () {
                    const { draggable: e, background: t, daysCount: i } = this.event;
                    return this.vuecal.editEvents.drag && e && !t && i === 1;
                },
                resizable () {
                    const { editEvents: e, time: t } = this.vuecal;
                    return e.resize && this.event.resizable && t && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.view.id !== "month";
                },
                dnd () {
                    return this.modules.dnd;
                }
            }
        }, function() {
            var e = this, t = e._self._c;
            return t("div", {
                staticClass: "vuecal__event",
                class: e.eventClasses,
                style: e.eventStyles,
                attrs: {
                    tabindex: "0",
                    draggable: e.draggable
                },
                on: {
                    focus: e.focusEvent,
                    keypress: function(i) {
                        return !i.type.indexOf("key") && e._k(i.keyCode, "enter", 13, i.key, "Enter") ? null : (i.stopPropagation(), e.onEnterKeypress.apply(null, arguments));
                    },
                    mouseenter: e.onMouseEnter,
                    mouseleave: e.onMouseLeave,
                    touchstart: function(i) {
                        return i.stopPropagation(), e.onTouchStart.apply(null, arguments);
                    },
                    mousedown: function(i) {
                        e.onMouseDown(i);
                    },
                    mouseup: e.onMouseUp,
                    touchend: e.onMouseUp,
                    touchmove: e.onTouchMove,
                    dblclick: e.onDblClick,
                    dragstart: function(i) {
                        e.draggable && e.onDragStart(i);
                    },
                    dragend: function(i) {
                        e.draggable && e.onDragEnd();
                    }
                }
            }, [
                e.vuecal.editEvents.delete && e.event.deletable ? t("div", {
                    staticClass: "vuecal__event-delete",
                    on: {
                        click: function(i) {
                            return i.stopPropagation(), e.deleteEvent.apply(null, arguments);
                        },
                        touchstart: function(i) {
                            return i.stopPropagation(), e.touchDeleteEvent.apply(null, arguments);
                        }
                    }
                }, [
                    e._v(e._s(e.vuecal.texts.deleteEvent))
                ]) : e._e(),
                e._t("event", null, {
                    event: e.event,
                    view: e.view.id
                }),
                e.resizable ? t("div", {
                    staticClass: "vuecal__event-resize-handle",
                    attrs: {
                        contenteditable: "false"
                    },
                    on: {
                        mousedown: function(i) {
                            return i.stopPropagation(), i.preventDefault(), e.onResizeHandleMouseDown.apply(null, arguments);
                        },
                        touchstart: function(i) {
                            return i.stopPropagation(), i.preventDefault(), e.onResizeHandleMouseDown.apply(null, arguments);
                        }
                    }
                }) : e._e()
            ], 2);
        }, [], !1, null, null, null, null).exports
    },
    props: {
        options: {
            type: Object,
            default: ()=>({})
        },
        editEvents: {
            type: Object,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        cellSplits: {
            type: Array,
            default: ()=>[]
        },
        minTimestamp: {
            type: [
                Number,
                null
            ],
            default: null
        },
        maxTimestamp: {
            type: [
                Number,
                null
            ],
            default: null
        },
        cellWidth: {
            type: [
                Number,
                Boolean
            ],
            default: !1
        },
        allDay: {
            type: Boolean,
            default: !1
        }
    },
    data: ()=>({
            cellOverlaps: {},
            cellOverlapsStreak: 1,
            timeAtCursor: null,
            highlighted: !1,
            highlightedSplit: null
        }),
    methods: {
        getSplitAtCursor ({ target: e }) {
            let t = e.classList.contains("vuecal__cell-split") ? e : this.vuecal.findAncestor(e, "vuecal__cell-split");
            return t && (t = t.attributes["data-split"].value, parseInt(t).toString() === t.toString() && (t = parseInt(t))), t || null;
        },
        splitClasses (e) {
            return {
                "vuecal__cell-split": !0,
                "vuecal__cell-split--highlighted": this.highlightedSplit === e.id,
                [e.class]: !!e.class
            };
        },
        checkCellOverlappingEvents () {
            this.options.time && this.eventsCount && !this.splitsCount && (this.eventsCount === 1 ? (this.cellOverlaps = [], this.cellOverlapsStreak = 1) : [this.cellOverlaps, this.cellOverlapsStreak] = this.utils.event.checkCellOverlappingEvents(this.events, this.options));
        },
        isDOMElementAnEvent (e) {
            return this.vuecal.isDOMElementAnEvent(e);
        },
        selectCell (e, t = !1) {
            const i = this.splitsCount ? this.getSplitAtCursor(e) : null;
            this.utils.cell.selectCell(t, this.timeAtCursor, i), this.timeAtCursor = null;
        },
        onCellkeyPressEnter (e) {
            this.isSelected || this.onCellFocus(e);
            const t = this.splitsCount ? this.getSplitAtCursor(e) : null;
            this.utils.cell.keyPressEnterCell(this.timeAtCursor, t), this.timeAtCursor = null;
        },
        onCellFocus (e) {
            if (!this.isSelected && !this.isDisabled) {
                this.isSelected = this.data.startDate;
                const t = this.splitsCount ? this.getSplitAtCursor(e) : null, i = this.timeAtCursor || this.data.startDate;
                this.vuecal.$emit("cell-focus", t ? {
                    date: i,
                    split: t
                } : i);
            }
        },
        onCellMouseDown (e, t = null, i = !1) {
            if ("ontouchstart" in window && !i) return !1;
            this.isSelected || this.onCellFocus(e);
            const { clickHoldACell: n, focusAnEvent: s } = this.domEvents;
            this.domEvents.cancelClickEventCreation = !1, n.eventCreated = !1, this.timeAtCursor = new Date(this.data.startDate);
            const { minutes: a, cursorCoords: { y: r } } = this.vuecal.minutesAtCursor(e);
            this.timeAtCursor.setMinutes(a);
            const l = this.isDOMElementAnEvent(e.target);
            !l && s._eid && ((this.view.events.find((o)=>o._eid === s._eid) || {}).focused = !1), this.editEvents.create && !l && this.setUpEventCreation(e, r);
        },
        setUpEventCreation (e, t) {
            if (this.options.dragToCreateEvent && [
                "week",
                "day"
            ].includes(this.view.id)) {
                const { dragCreateAnEvent: i } = this.domEvents;
                if (i.startCursorY = t, i.split = this.splitsCount ? this.getSplitAtCursor(e) : null, i.start = this.timeAtCursor, this.options.snapToTime) {
                    let n = 60 * this.timeAtCursor.getHours() + this.timeAtCursor.getMinutes();
                    const s = n + this.options.snapToTime / 2;
                    n = s - s % this.options.snapToTime, i.start.setHours(0, n, 0, 0);
                }
            } else this.options.cellClickHold && [
                "month",
                "week",
                "day"
            ].includes(this.view.id) && this.setUpCellHoldTimer(e);
        },
        setUpCellHoldTimer (e) {
            const { clickHoldACell: t } = this.domEvents;
            t.cellId = `${this.vuecal._uid}_${this.data.formattedDate}`, t.split = this.splitsCount ? this.getSplitAtCursor(e) : null, t.timeoutId = setTimeout(()=>{
                if (t.cellId && !this.domEvents.cancelClickEventCreation) {
                    const { _eid: i } = this.utils.event.createAnEvent(this.timeAtCursor, null, t.split ? {
                        split: t.split
                    } : {});
                    t.eventCreated = i;
                }
            }, t.timeout);
        },
        onCellTouchStart (e, t = null) {
            this.onCellMouseDown(e, t, !0);
        },
        onCellClick (e) {
            this.isDOMElementAnEvent(e.target) || this.selectCell(e);
        },
        onCellDblClick (e) {
            const t = new Date(this.data.startDate);
            t.setMinutes(this.vuecal.minutesAtCursor(e).minutes);
            const i = this.splitsCount ? this.getSplitAtCursor(e) : null;
            this.vuecal.$emit("cell-dblclick", i ? {
                date: t,
                split: i
            } : t), this.options.dblclickToNavigate && this.vuecal.switchToNarrowerView();
        },
        onCellContextMenu (e) {
            e.stopPropagation(), e.preventDefault();
            const t = new Date(this.data.startDate), { cursorCoords: i, minutes: n } = this.vuecal.minutesAtCursor(e);
            t.setMinutes(n);
            const s = this.splitsCount ? this.getSplitAtCursor(e) : null;
            this.vuecal.$emit("cell-contextmenu", {
                date: t,
                ...i,
                ...s || {},
                e
            });
        }
    },
    computed: {
        dnd () {
            return this.modules.dnd;
        },
        nowInMinutes () {
            return this.utils.date.dateToMinutes(this.vuecal.now);
        },
        isBeforeMinDate () {
            return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime();
        },
        isAfterMaxDate () {
            return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
        },
        isDisabled () {
            const { disableDays: e } = this.options, { isYearsOrYearView: t } = this.vuecal;
            return !(!e.length || !e.includes(this.data.formattedDate) || t) || this.isBeforeMinDate || this.isAfterMaxDate;
        },
        isSelected: {
            get () {
                let e = !1;
                const { selectedDate: t } = this.view;
                return e = this.view.id === "years" ? t.getFullYear() === this.data.startDate.getFullYear() : this.view.id === "year" ? t.getFullYear() === this.data.startDate.getFullYear() && t.getMonth() === this.data.startDate.getMonth() : t.getTime() === this.data.startDate.getTime(), e;
            },
            set (e) {
                this.view.selectedDate = e, this.vuecal.$emit("update:selected-date", this.view.selectedDate);
            }
        },
        isWeekOrDayView () {
            return [
                "week",
                "day"
            ].includes(this.view.id);
        },
        transitionDirection () {
            return this.vuecal.transitionDirection;
        },
        specialHours () {
            return this.data.specialHours.map((e)=>{
                let { from: t, to: i } = e;
                return t = Math.max(t, this.options.timeFrom), i = Math.min(i, this.options.timeTo), {
                    ...e,
                    height: (i - t) * this.timeScale,
                    top: (t - this.options.timeFrom) * this.timeScale
                };
            });
        },
        events () {
            const { startDate: e, endDate: t } = this.data;
            let i = [];
            if (![
                "years",
                "year"
            ].includes(this.view.id) || this.options.eventsCountOnYearView) {
                if (i = this.view.events.slice(0), this.view.id === "month" && i.push(...this.view.outOfScopeEvents), i = i.filter((n)=>this.utils.event.eventInRange(n, e, t)), this.options.showAllDayEvents && this.view.id !== "month" && (i = i.filter((n)=>!!n.allDay === this.allDay)), this.options.time && this.isWeekOrDayView && !this.allDay) {
                    const { timeFrom: n, timeTo: s } = this.options;
                    i = i.filter((a)=>{
                        const r = a.daysCount > 1 && a.segments[this.data.formattedDate] || {}, l = a.daysCount === 1 && a.startTimeMinutes < s && a.endTimeMinutes > n, o = a.daysCount > 1 && r.startTimeMinutes < s && r.endTimeMinutes > n;
                        return a.allDay || l || o || !1;
                    });
                }
                !this.options.time || !this.isWeekOrDayView || this.options.showAllDayEvents && this.allDay || i.sort((n, s)=>n.start < s.start ? -1 : 1), this.cellSplits.length || this.$nextTick(this.checkCellOverlappingEvents);
            }
            return i;
        },
        eventsCount () {
            return this.events.length;
        },
        splits () {
            return this.cellSplits.map((e, t)=>{
                const i = this.events.filter((a)=>a.split === e.id), [n, s] = this.utils.event.checkCellOverlappingEvents(i.filter((a)=>!a.background && !a.allDay), this.options);
                return {
                    ...e,
                    overlaps: n,
                    overlapsStreak: s,
                    events: i
                };
            });
        },
        splitsCount () {
            return this.splits.length;
        },
        cellClasses () {
            return {
                [this.data.class]: !!this.data.class,
                "vuecal__cell--current": this.data.current,
                "vuecal__cell--today": this.data.today,
                "vuecal__cell--out-of-scope": this.data.outOfScope,
                "vuecal__cell--before-min": this.isDisabled && this.isBeforeMinDate,
                "vuecal__cell--after-max": this.isDisabled && this.isAfterMaxDate,
                "vuecal__cell--disabled": this.isDisabled,
                "vuecal__cell--selected": this.isSelected,
                "vuecal__cell--highlighted": this.highlighted,
                "vuecal__cell--has-splits": this.splitsCount,
                "vuecal__cell--has-events": this.eventsCount
            };
        },
        cellStyles () {
            return {
                ...this.cellWidth ? {
                    width: `${this.cellWidth}%`
                } : {}
            };
        },
        timelineVisible () {
            const { time: e, timeTo: t } = this.options;
            return this.data.today && this.isWeekOrDayView && e && !this.allDay && this.nowInMinutes <= t;
        },
        todaysTimePosition () {
            if (!this.data.today || !this.options.time) return;
            const e = this.nowInMinutes - this.options.timeFrom;
            return Math.round(e * this.timeScale);
        },
        timeScale () {
            return this.options.timeCellHeight / this.options.timeStep;
        }
    }
}, function() {
    var e = this, t = e._self._c;
    return t("transition-group", {
        staticClass: "vuecal__cell",
        class: e.cellClasses,
        style: e.cellStyles,
        attrs: {
            name: `slide-fade--${e.transitionDirection}`,
            tag: "div",
            appear: e.options.transitions
        }
    }, [
        e._l(e.splitsCount ? e.splits : 1, function(i, n) {
            return t("div", {
                key: e.options.transitions ? `${e.view.id}-${e.data.content}-${n}` : n,
                staticClass: "vuecal__flex vuecal__cell-content",
                class: e.splitsCount && e.splitClasses(i),
                attrs: {
                    "data-split": !!e.splitsCount && i.id,
                    column: "",
                    tabindex: "0",
                    "aria-label": e.data.content
                },
                on: {
                    focus: function(s) {
                        return e.onCellFocus(s);
                    },
                    keypress: function(s) {
                        return !s.type.indexOf("key") && e._k(s.keyCode, "enter", 13, s.key, "Enter") ? null : e.onCellkeyPressEnter(s);
                    },
                    touchstart: function(s) {
                        !e.isDisabled && e.onCellTouchStart(s, e.splitsCount ? i.id : null);
                    },
                    mousedown: function(s) {
                        !e.isDisabled && e.onCellMouseDown(s, e.splitsCount ? i.id : null);
                    },
                    click: function(s) {
                        !e.isDisabled && e.onCellClick(s);
                    },
                    dblclick: function(s) {
                        !e.isDisabled && e.onCellDblClick(s);
                    },
                    contextmenu: function(s) {
                        !e.isDisabled && e.options.cellContextmenu && e.onCellContextMenu(s);
                    },
                    dragenter: function(s) {
                        !e.isDisabled && e.editEvents.drag && e.dnd && e.dnd.cellDragEnter(s, e.$data, e.data.startDate);
                    },
                    dragover: function(s) {
                        !e.isDisabled && e.editEvents.drag && e.dnd && e.dnd.cellDragOver(s, e.$data, e.data.startDate, e.splitsCount ? i.id : null);
                    },
                    dragleave: function(s) {
                        !e.isDisabled && e.editEvents.drag && e.dnd && e.dnd.cellDragLeave(s, e.$data, e.data.startDate);
                    },
                    drop: function(s) {
                        !e.isDisabled && e.editEvents.drag && e.dnd && e.dnd.cellDragDrop(s, e.$data, e.data.startDate, e.splitsCount ? i.id : null);
                    }
                }
            }, [
                e.options.showTimeInCells && e.options.time && e.isWeekOrDayView && !e.allDay ? t("div", {
                    staticClass: "cell-time-labels"
                }, e._l(e.vuecal.timeCells, function(s, a) {
                    return t("span", {
                        key: a,
                        staticClass: "cell-time-label"
                    }, [
                        e._v(e._s(s.label) + `
`)
                    ]);
                }), 0) : e._e(),
                e.isWeekOrDayView && !e.allDay && e.specialHours.length ? e._l(e.specialHours, function(s, a) {
                    return t("div", {
                        staticClass: "vuecal__special-hours",
                        class: `vuecal__special-hours--day${s.day} ${s.class}`,
                        style: `height: ${s.height}px;top: ${s.top}px`
                    }, [
                        s.label ? t("div", {
                            staticClass: "special-hours-label",
                            domProps: {
                                innerHTML: e._s(s.label)
                            }
                        }) : e._e()
                    ]);
                }) : e._e(),
                e._t("cell-content", null, {
                    events: e.events,
                    selectCell: (s)=>e.selectCell(s, !0),
                    split: !!e.splitsCount && i
                }),
                e.eventsCount && (e.isWeekOrDayView || e.view.id === "month" && e.options.eventsOnMonthView) ? t("div", {
                    staticClass: "vuecal__cell-events"
                }, e._l(e.splitsCount ? i.events : e.events, function(s, a) {
                    return t("event", {
                        key: a,
                        attrs: {
                            "cell-formatted-date": e.data.formattedDate,
                            event: s,
                            "all-day": e.allDay,
                            "cell-events": e.splitsCount ? i.events : e.events,
                            overlaps: ((e.splitsCount ? i.overlaps[s._eid] : e.cellOverlaps[s._eid]) || []).overlaps,
                            "event-position": ((e.splitsCount ? i.overlaps[s._eid] : e.cellOverlaps[s._eid]) || []).position,
                            "overlaps-streak": e.splitsCount ? i.overlapsStreak : e.cellOverlapsStreak
                        },
                        scopedSlots: e._u([
                            {
                                key: "event",
                                fn: function({ event: r, view: l }) {
                                    return [
                                        e._t("event", null, {
                                            view: l,
                                            event: r
                                        })
                                    ];
                                }
                            }
                        ], null, !0)
                    });
                }), 1) : e._e()
            ], 2);
        }),
        e.timelineVisible ? t("div", {
            key: e.options.transitions ? `${e.view.id}-now-line` : "now-line",
            staticClass: "vuecal__now-line",
            style: `top: ${e.todaysTimePosition}px`,
            attrs: {
                title: e.utils.date.formatTime(e.vuecal.now)
            }
        }) : e._e()
    ], 2);
}, [], !1, null, null, null, null).exports, z = E({
    inject: [
        "vuecal",
        "view",
        "editEvents"
    ],
    components: {
        "vuecal-cell": Y
    },
    props: {
        options: {
            type: Object,
            required: !0
        },
        cells: {
            type: Array,
            required: !0
        },
        label: {
            type: String,
            required: !0
        },
        daySplits: {
            type: Array,
            default: ()=>[]
        },
        shortEvents: {
            type: Boolean,
            default: !0
        },
        height: {
            type: String,
            default: ""
        },
        cellOrSplitMinWidth: {
            type: Number,
            default: null
        }
    },
    computed: {
        hasCellOrSplitWidth () {
            return !!(this.options.minCellWidth || this.daySplits.length && this.options.minSplitWidth);
        }
    }
}, function() {
    var e = this, t = e._self._c;
    return t("div", {
        staticClass: "vuecal__flex vuecal__all-day",
        style: e.cellOrSplitMinWidth && {
            height: e.height
        }
    }, [
        e.cellOrSplitMinWidth ? e._e() : t("div", {
            staticClass: "vuecal__all-day-text",
            staticStyle: {
                width: "3em"
            }
        }, [
            t("span", [
                e._v(e._s(e.label))
            ])
        ]),
        t("div", {
            staticClass: "vuecal__flex vuecal__cells",
            class: `${e.view.id}-view`,
            style: e.cellOrSplitMinWidth ? `min-width: ${e.cellOrSplitMinWidth}px` : "",
            attrs: {
                grow: ""
            }
        }, e._l(e.cells, function(i, n) {
            return t("vuecal-cell", {
                key: n,
                attrs: {
                    options: e.options,
                    "edit-events": e.editEvents,
                    data: i,
                    "all-day": !0,
                    "cell-width": e.options.hideWeekdays.length && (e.vuecal.isWeekView || e.vuecal.isMonthView) && e.vuecal.cellWidth,
                    "min-timestamp": e.options.minTimestamp,
                    "max-timestamp": e.options.maxTimestamp,
                    "cell-splits": e.daySplits
                },
                scopedSlots: e._u([
                    {
                        key: "event",
                        fn: function({ event: s, view: a }) {
                            return [
                                e._t("event", null, {
                                    view: a,
                                    event: s
                                })
                            ];
                        }
                    }
                ], null, !0)
            });
        }), 1)
    ]);
}, [], !1, null, null, null, null).exports;
var U = function() {
    var e = this, t = e._self._c;
    return t("div", {
        ref: "vuecal",
        staticClass: "vuecal__flex vuecal",
        class: e.cssClasses,
        attrs: {
            column: "",
            lang: e.locale
        }
    }, [
        t("vuecal-header", {
            attrs: {
                options: e.$props,
                "edit-events": e.editEvents,
                "view-props": {
                    views: e.views,
                    weekDaysInHeader: e.weekDaysInHeader
                },
                "week-days": e.weekDays,
                "has-splits": e.hasSplits,
                "day-splits": e.daySplits,
                "switch-to-narrower-view": e.switchToNarrowerView
            },
            scopedSlots: e._u([
                {
                    key: "arrow-prev",
                    fn: function() {
                        return [
                            e._t("arrow-prev", function() {
                                return [
                                    e._v("\xa0"),
                                    t("i", {
                                        staticClass: "angle"
                                    }),
                                    e._v("\xa0")
                                ];
                            })
                        ];
                    },
                    proxy: !0
                },
                {
                    key: "arrow-next",
                    fn: function() {
                        return [
                            e._t("arrow-next", function() {
                                return [
                                    e._v("\xa0"),
                                    t("i", {
                                        staticClass: "angle"
                                    }),
                                    e._v("\xa0")
                                ];
                            })
                        ];
                    },
                    proxy: !0
                },
                {
                    key: "today-button",
                    fn: function() {
                        return [
                            e._t("today-button", function() {
                                return [
                                    t("span", {
                                        staticClass: "default"
                                    }, [
                                        e._v(e._s(e.texts.today))
                                    ])
                                ];
                            })
                        ];
                    },
                    proxy: !0
                },
                {
                    key: "title",
                    fn: function() {
                        return [
                            e._t("title", function() {
                                return [
                                    e._v(e._s(e.viewTitle))
                                ];
                            }, {
                                title: e.viewTitle,
                                view: e.view
                            })
                        ];
                    },
                    proxy: !0
                },
                e.$scopedSlots["weekday-heading"] ? {
                    key: "weekday-heading",
                    fn: function({ heading: i, view: n }) {
                        return [
                            e._t("weekday-heading", null, {
                                heading: i,
                                view: n
                            })
                        ];
                    }
                } : null,
                e.$scopedSlots["split-label"] ? {
                    key: "split-label",
                    fn: function({ split: i }) {
                        return [
                            e._t("split-label", null, {
                                split: i,
                                view: e.view.id
                            })
                        ];
                    }
                } : null
            ], null, !0)
        }),
        e.hideBody ? e._e() : t("div", {
            staticClass: "vuecal__flex vuecal__body",
            attrs: {
                grow: ""
            }
        }, [
            t("transition", {
                attrs: {
                    name: `slide-fade--${e.transitionDirection}`,
                    appear: e.transitions
                }
            }, [
                t("div", {
                    key: !!e.transitions && e.view.id,
                    staticClass: "vuecal__flex",
                    staticStyle: {
                        "min-width": "100%"
                    },
                    attrs: {
                        column: ""
                    }
                }, [
                    e.showAllDayEvents && e.hasTimeColumn && (!e.cellOrSplitMinWidth || e.isDayView && !e.minSplitWidth) ? t("all-day-bar", e._b({
                        scopedSlots: e._u([
                            {
                                key: "event",
                                fn: function({ event: i, view: n }) {
                                    return [
                                        e._t("event", function() {
                                            return [
                                                e.editEvents.title && i.titleEditable ? t("div", {
                                                    staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                    attrs: {
                                                        contenteditable: ""
                                                    },
                                                    domProps: {
                                                        innerHTML: e._s(i.title)
                                                    },
                                                    on: {
                                                        blur: function(s) {
                                                            return e.onEventTitleBlur(s, i);
                                                        }
                                                    }
                                                }) : i.title ? t("div", {
                                                    staticClass: "vuecal__event-title",
                                                    domProps: {
                                                        innerHTML: e._s(i.title)
                                                    }
                                                }) : e._e(),
                                                !i.content || e.hasShortEvents || e.isShortMonthView ? e._e() : t("div", {
                                                    staticClass: "vuecal__event-content",
                                                    domProps: {
                                                        innerHTML: e._s(i.content)
                                                    }
                                                })
                                            ];
                                        }, {
                                            view: n,
                                            event: i
                                        })
                                    ];
                                }
                            }
                        ], null, !0)
                    }, "all-day-bar", e.allDayBar, !1)) : e._e(),
                    t("div", {
                        staticClass: "vuecal__bg",
                        class: {
                            vuecal__flex: !e.hasTimeColumn
                        },
                        attrs: {
                            column: ""
                        }
                    }, [
                        t("div", {
                            staticClass: "vuecal__flex",
                            attrs: {
                                row: "",
                                grow: ""
                            }
                        }, [
                            e.hasTimeColumn ? t("div", {
                                staticClass: "vuecal__time-column"
                            }, [
                                e.showAllDayEvents && e.cellOrSplitMinWidth && (!e.isDayView || e.minSplitWidth) ? t("div", {
                                    staticClass: "vuecal__all-day-text",
                                    style: {
                                        height: e.allDayBar.height
                                    }
                                }, [
                                    t("span", [
                                        e._v(e._s(e.texts.allDay))
                                    ])
                                ]) : e._e(),
                                e._l(e.timeCells, function(i, n) {
                                    return t("div", {
                                        key: n,
                                        staticClass: "vuecal__time-cell",
                                        style: `height: ${e.timeCellHeight}px`
                                    }, [
                                        e._t("time-cell", function() {
                                            return [
                                                t("span", {
                                                    staticClass: "vuecal__time-cell-line"
                                                }),
                                                t("span", {
                                                    staticClass: "vuecal__time-cell-label"
                                                }, [
                                                    e._v(e._s(i.label))
                                                ])
                                            ];
                                        }, {
                                            hours: i.hours,
                                            minutes: i.minutes
                                        })
                                    ], 2);
                                })
                            ], 2) : e._e(),
                            e.showWeekNumbers && e.isMonthView ? t("div", {
                                staticClass: "vuecal__flex vuecal__week-numbers",
                                attrs: {
                                    column: ""
                                }
                            }, e._l(6, function(i) {
                                return t("div", {
                                    key: i,
                                    staticClass: "vuecal__flex vuecal__week-number-cell",
                                    attrs: {
                                        grow: ""
                                    }
                                }, [
                                    e._t("week-number-cell", function() {
                                        return [
                                            e._v(e._s(e.getWeekNumber(i - 1)))
                                        ];
                                    }, {
                                        week: e.getWeekNumber(i - 1)
                                    })
                                ], 2);
                            }), 0) : e._e(),
                            t("div", {
                                staticClass: "vuecal__flex vuecal__cells",
                                class: `${e.view.id}-view`,
                                attrs: {
                                    grow: "",
                                    wrap: !e.cellOrSplitMinWidth || !e.isWeekView,
                                    column: !!e.cellOrSplitMinWidth
                                }
                            }, [
                                e.cellOrSplitMinWidth && e.isWeekView ? t("weekdays-headings", {
                                    style: e.cellOrSplitMinWidth ? `min-width: ${e.cellOrSplitMinWidth}px` : "",
                                    attrs: {
                                        "transition-direction": e.transitionDirection,
                                        "week-days": e.weekDays,
                                        "switch-to-narrower-view": e.switchToNarrowerView
                                    },
                                    scopedSlots: e._u([
                                        e.$scopedSlots["weekday-heading"] ? {
                                            key: "weekday-heading",
                                            fn: function({ heading: i, view: n }) {
                                                return [
                                                    e._t("weekday-heading", null, {
                                                        heading: i,
                                                        view: n
                                                    })
                                                ];
                                            }
                                        } : null,
                                        e.$scopedSlots["split-label"] ? {
                                            key: "split-label",
                                            fn: function({ split: i }) {
                                                return [
                                                    e._t("split-label", null, {
                                                        split: i,
                                                        view: e.view.id
                                                    })
                                                ];
                                            }
                                        } : null
                                    ], null, !0)
                                }) : e.hasSplits && e.stickySplitLabels && e.minSplitWidth ? t("div", {
                                    staticClass: "vuecal__flex vuecal__split-days-headers",
                                    style: e.cellOrSplitMinWidth ? `min-width: ${e.cellOrSplitMinWidth}px` : ""
                                }, e._l(e.daySplits, function(i, n) {
                                    return t("div", {
                                        key: n,
                                        staticClass: "day-split-header",
                                        class: i.class || !1
                                    }, [
                                        e._t("split-label", function() {
                                            return [
                                                e._v(e._s(i.label))
                                            ];
                                        }, {
                                            split: i,
                                            view: e.view.id
                                        })
                                    ], 2);
                                }), 0) : e._e(),
                                e.showAllDayEvents && e.hasTimeColumn && (e.isWeekView && e.cellOrSplitMinWidth || e.isDayView && e.hasSplits && e.minSplitWidth) ? t("all-day-bar", e._b({
                                    scopedSlots: e._u([
                                        {
                                            key: "event",
                                            fn: function({ event: i, view: n }) {
                                                return [
                                                    e._t("event", function() {
                                                        return [
                                                            e.editEvents.title && i.titleEditable ? t("div", {
                                                                staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                                attrs: {
                                                                    contenteditable: ""
                                                                },
                                                                domProps: {
                                                                    innerHTML: e._s(i.title)
                                                                },
                                                                on: {
                                                                    blur: function(s) {
                                                                        return e.onEventTitleBlur(s, i);
                                                                    }
                                                                }
                                                            }) : i.title ? t("div", {
                                                                staticClass: "vuecal__event-title",
                                                                domProps: {
                                                                    innerHTML: e._s(i.title)
                                                                }
                                                            }) : e._e(),
                                                            !i.content || e.hasShortEvents || e.isShortMonthView ? e._e() : t("div", {
                                                                staticClass: "vuecal__event-content",
                                                                domProps: {
                                                                    innerHTML: e._s(i.content)
                                                                }
                                                            })
                                                        ];
                                                    }, {
                                                        view: n,
                                                        event: i
                                                    })
                                                ];
                                            }
                                        }
                                    ], null, !0)
                                }, "all-day-bar", e.allDayBar, !1)) : e._e(),
                                t("div", {
                                    ref: "cells",
                                    staticClass: "vuecal__flex",
                                    style: e.cellOrSplitMinWidth ? `min-width: ${e.cellOrSplitMinWidth}px` : "",
                                    attrs: {
                                        grow: "",
                                        wrap: !e.cellOrSplitMinWidth || !e.isWeekView
                                    }
                                }, e._l(e.viewCells, function(i, n) {
                                    return t("vuecal-cell", {
                                        key: n,
                                        attrs: {
                                            options: e.$props,
                                            "edit-events": e.editEvents,
                                            data: i,
                                            "cell-width": e.hideWeekdays.length && (e.isWeekView || e.isMonthView) && e.cellWidth,
                                            "min-timestamp": e.minTimestamp,
                                            "max-timestamp": e.maxTimestamp,
                                            "cell-splits": e.hasSplits && e.daySplits || []
                                        },
                                        scopedSlots: e._u([
                                            {
                                                key: "cell-content",
                                                fn: function({ events: s, split: a, selectCell: r }) {
                                                    return [
                                                        e._t("cell-content", function() {
                                                            return [
                                                                a && !e.stickySplitLabels ? t("div", {
                                                                    staticClass: "split-label",
                                                                    domProps: {
                                                                        innerHTML: e._s(a.label)
                                                                    }
                                                                }) : e._e(),
                                                                i.content ? t("div", {
                                                                    staticClass: "vuecal__cell-date",
                                                                    domProps: {
                                                                        innerHTML: e._s(i.content)
                                                                    }
                                                                }) : e._e(),
                                                                (e.isMonthView && !e.eventsOnMonthView || e.isYearsOrYearView && e.eventsCountOnYearView) && s.length ? t("div", {
                                                                    staticClass: "vuecal__cell-events-count"
                                                                }, [
                                                                    e._t("events-count", function() {
                                                                        return [
                                                                            e._v(e._s(s.length))
                                                                        ];
                                                                    }, {
                                                                        view: e.view,
                                                                        events: s
                                                                    })
                                                                ], 2) : e._e(),
                                                                !e.cellOrSplitHasEvents(s, a) && e.isWeekOrDayView ? t("div", {
                                                                    staticClass: "vuecal__no-event"
                                                                }, [
                                                                    e._t("no-event", function() {
                                                                        return [
                                                                            e._v(e._s(e.texts.noEvent))
                                                                        ];
                                                                    })
                                                                ], 2) : e._e()
                                                            ];
                                                        }, {
                                                            cell: i,
                                                            view: e.view,
                                                            goNarrower: r,
                                                            events: s
                                                        })
                                                    ];
                                                }
                                            },
                                            {
                                                key: "event",
                                                fn: function({ event: s, view: a }) {
                                                    return [
                                                        e._t("event", function() {
                                                            return [
                                                                e.editEvents.title && s.titleEditable ? t("div", {
                                                                    staticClass: "vuecal__event-title vuecal__event-title--edit",
                                                                    attrs: {
                                                                        contenteditable: ""
                                                                    },
                                                                    domProps: {
                                                                        innerHTML: e._s(s.title)
                                                                    },
                                                                    on: {
                                                                        blur: function(r) {
                                                                            return e.onEventTitleBlur(r, s);
                                                                        }
                                                                    }
                                                                }) : s.title ? t("div", {
                                                                    staticClass: "vuecal__event-title",
                                                                    domProps: {
                                                                        innerHTML: e._s(s.title)
                                                                    }
                                                                }) : e._e(),
                                                                !e.time || s.allDay || e.isMonthView && (s.allDay || e.showAllDayEvents === "short") || e.isShortMonthView ? e._e() : t("div", {
                                                                    staticClass: "vuecal__event-time"
                                                                }, [
                                                                    e._v(e._s(e.utils.date.formatTime(s.start, e.TimeFormat))),
                                                                    s.endTimeMinutes ? t("span", [
                                                                        e._v("\xa0- " + e._s(e.utils.date.formatTime(s.end, e.TimeFormat, null, !0)))
                                                                    ]) : e._e(),
                                                                    s.daysCount > 1 && (s.segments[i.formattedDate] || {}).isFirstDay ? t("small", {
                                                                        staticClass: "days-to-end"
                                                                    }, [
                                                                        e._v("\xa0+" + e._s(s.daysCount - 1) + e._s((e.texts.day[0] || "").toLowerCase()))
                                                                    ]) : e._e()
                                                                ]),
                                                                !s.content || e.isMonthView && s.allDay && e.showAllDayEvents === "short" || e.isShortMonthView ? e._e() : t("div", {
                                                                    staticClass: "vuecal__event-content",
                                                                    domProps: {
                                                                        innerHTML: e._s(s.content)
                                                                    }
                                                                })
                                                            ];
                                                        }, {
                                                            view: a,
                                                            event: s
                                                        })
                                                    ];
                                                }
                                            },
                                            {
                                                key: "no-event",
                                                fn: function() {
                                                    return [
                                                        e._t("no-event", function() {
                                                            return [
                                                                e._v(e._s(e.texts.noEvent))
                                                            ];
                                                        })
                                                    ];
                                                },
                                                proxy: !0
                                            }
                                        ], null, !0)
                                    });
                                }), 1)
                            ], 1)
                        ])
                    ])
                ], 1)
            ]),
            e.ready ? e._e() : t("div", {
                staticClass: "vuecal__scrollbar-check"
            }, [
                t("div")
            ])
        ], 1)
    ], 1);
}, R = [];
const O = {
    weekDays: Array(7).fill(""),
    weekDaysShort: [],
    months: Array(12).fill(""),
    years: "",
    year: "",
    month: "",
    week: "",
    day: "",
    today: "",
    noEvent: "",
    allDay: "",
    deleteEvent: "",
    createEvent: "",
    dateFormat: "dddd MMMM D, YYYY",
    am: "am",
    pm: "pm"
}, $ = [
    "years",
    "year",
    "month",
    "week",
    "day"
], H = new class {
    constructor(e, t = !1){
        f(this, "texts", {});
        f(this, "dateToMinutes", (e)=>60 * e.getHours() + e.getMinutes());
        y = this, this._texts = e, t || !Date || Date.prototype.addDays || this._initDatePrototypes();
    }
    _initDatePrototypes() {
        Date.prototype.addDays = function(e) {
            return y.addDays(this, e);
        }, Date.prototype.subtractDays = function(e) {
            return y.subtractDays(this, e);
        }, Date.prototype.addHours = function(e) {
            return y.addHours(this, e);
        }, Date.prototype.subtractHours = function(e) {
            return y.subtractHours(this, e);
        }, Date.prototype.addMinutes = function(e) {
            return y.addMinutes(this, e);
        }, Date.prototype.subtractMinutes = function(e) {
            return y.subtractMinutes(this, e);
        }, Date.prototype.getWeek = function() {
            return y.getWeek(this);
        }, Date.prototype.isToday = function() {
            return y.isToday(this);
        }, Date.prototype.isLeapYear = function() {
            return y.isLeapYear(this);
        }, Date.prototype.format = function(e = "YYYY-MM-DD") {
            return y.formatDate(this, e);
        }, Date.prototype.formatTime = function(e = "HH:mm") {
            return y.formatTime(this, e);
        };
    }
    removePrototypes() {
        delete Date.prototype.addDays, delete Date.prototype.subtractDays, delete Date.prototype.addHours, delete Date.prototype.subtractHours, delete Date.prototype.addMinutes, delete Date.prototype.subtractMinutes, delete Date.prototype.getWeek, delete Date.prototype.isToday, delete Date.prototype.isLeapYear, delete Date.prototype.format, delete Date.prototype.formatTime;
    }
    updateTexts(e) {
        this._texts = e;
    }
    _todayFormatted() {
        return V !== new Date().getDate() && (T = new Date(), V = T.getDate(), A = `${T.getFullYear()}-${T.getMonth()}-${T.getDate()}`), A;
    }
    addDays(e, t) {
        const i = new Date(e.valueOf());
        return i.setDate(i.getDate() + t), i;
    }
    subtractDays(e, t) {
        const i = new Date(e.valueOf());
        return i.setDate(i.getDate() - t), i;
    }
    addHours(e, t) {
        const i = new Date(e.valueOf());
        return i.setHours(i.getHours() + t), i;
    }
    subtractHours(e, t) {
        const i = new Date(e.valueOf());
        return i.setHours(i.getHours() - t), i;
    }
    addMinutes(e, t) {
        const i = new Date(e.valueOf());
        return i.setMinutes(i.getMinutes() + t), i;
    }
    subtractMinutes(e, t) {
        const i = new Date(e.valueOf());
        return i.setMinutes(i.getMinutes() - t), i;
    }
    getWeek(e) {
        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), i = t.getUTCDay() || 7;
        t.setUTCDate(t.getUTCDate() + 4 - i);
        const n = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
        return Math.ceil(((t - n) / 864e5 + 1) / 7);
    }
    isToday(e) {
        return `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}` === this._todayFormatted();
    }
    isLeapYear(e) {
        const t = e.getFullYear();
        return !(t % 400) || t % 100 && !(t % 4);
    }
    getPreviousFirstDayOfWeek(e = null, t) {
        const i = e && new Date(e.valueOf()) || new Date(), n = t ? 7 : 6;
        return i.setDate(i.getDate() - (i.getDay() + n) % 7), i;
    }
    stringToDate(e) {
        return e instanceof Date ? e : (e.length === 10 && (e += " 00:00"), new Date(e.replace(/-/g, "/")));
    }
    countDays(e, t) {
        typeof e == "string" && (e = e.replace(/-/g, "/")), typeof t == "string" && (t = t.replace(/-/g, "/")), e = new Date(e).setHours(0, 0, 0, 0), t = new Date(t).setHours(0, 0, 1, 0);
        const i = 60 * (new Date(t).getTimezoneOffset() - new Date(e).getTimezoneOffset()) * 1e3;
        return Math.ceil((t - e - i) / 864e5);
    }
    datesInSameTimeStep(e, t, i) {
        return Math.abs(e.getTime() - t.getTime()) <= 60 * i * 1e3;
    }
    formatDate(e, t = "YYYY-MM-DD", i = null) {
        if (i || (i = this._texts), t || (t = "YYYY-MM-DD"), t === "YYYY-MM-DD") return this.formatDateLite(e);
        S = {}, M = {};
        const n = {
            YYYY: ()=>this._hydrateDateObject(e, i).YYYY,
            YY: ()=>this._hydrateDateObject(e, i).YY(),
            M: ()=>this._hydrateDateObject(e, i).M,
            MM: ()=>this._hydrateDateObject(e, i).MM(),
            MMM: ()=>this._hydrateDateObject(e, i).MMM(),
            MMMM: ()=>this._hydrateDateObject(e, i).MMMM(),
            MMMMG: ()=>this._hydrateDateObject(e, i).MMMMG(),
            D: ()=>this._hydrateDateObject(e, i).D,
            DD: ()=>this._hydrateDateObject(e, i).DD(),
            S: ()=>this._hydrateDateObject(e, i).S(),
            d: ()=>this._hydrateDateObject(e, i).d,
            dd: ()=>this._hydrateDateObject(e, i).dd(),
            ddd: ()=>this._hydrateDateObject(e, i).ddd(),
            dddd: ()=>this._hydrateDateObject(e, i).dddd(),
            HH: ()=>this._hydrateTimeObject(e, i).HH,
            H: ()=>this._hydrateTimeObject(e, i).H,
            hh: ()=>this._hydrateTimeObject(e, i).hh,
            h: ()=>this._hydrateTimeObject(e, i).h,
            am: ()=>this._hydrateTimeObject(e, i).am,
            AM: ()=>this._hydrateTimeObject(e, i).AM,
            mm: ()=>this._hydrateTimeObject(e, i).mm,
            m: ()=>this._hydrateTimeObject(e, i).m
        };
        return t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (s, a)=>{
            const r = n[a.replace(/\{|\}/g, "")];
            return r !== void 0 ? r() : a;
        });
    }
    formatDateLite(e) {
        const t = e.getMonth() + 1, i = e.getDate();
        return `${e.getFullYear()}-${t < 10 ? "0" : ""}${t}-${i < 10 ? "0" : ""}${i}`;
    }
    formatTime(e, t = "HH:mm", i = null, n = !1) {
        let s = !1;
        if (n) {
            const [l, o, d] = [
                e.getHours(),
                e.getMinutes(),
                e.getSeconds()
            ];
            l + o + d === 141 && (s = !0);
        }
        if (e instanceof Date && t === "HH:mm") return s ? "24:00" : this.formatTimeLite(e);
        M = {}, i || (i = this._texts);
        const a = this._hydrateTimeObject(e, i), r = t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, (l, o)=>{
            const d = a[o.replace(/\{|\}/g, "")];
            return d !== void 0 ? d : o;
        });
        return s ? r.replace("23:59", "24:00") : r;
    }
    formatTimeLite(e) {
        const t = e.getHours(), i = e.getMinutes();
        return `${(t < 10 ? "0" : "") + t}:${(i < 10 ? "0" : "") + i}`;
    }
    _nth(e) {
        if (e > 3 && e < 21) return "th";
        switch(e % 10){
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
    _hydrateDateObject(e, t) {
        if (S.D) return S;
        const i = e.getFullYear(), n = e.getMonth() + 1, s = e.getDate(), a = (e.getDay() - 1 + 7) % 7;
        return S = {
            YYYY: i,
            YY: ()=>i.toString().substring(2),
            M: n,
            MM: ()=>(n < 10 ? "0" : "") + n,
            MMM: ()=>t.months[n - 1].substring(0, 3),
            MMMM: ()=>t.months[n - 1],
            MMMMG: ()=>(t.monthsGenitive || t.months)[n - 1],
            D: s,
            DD: ()=>(s < 10 ? "0" : "") + s,
            S: ()=>this._nth(s),
            d: a + 1,
            dd: ()=>t.weekDays[a][0],
            ddd: ()=>t.weekDays[a].substr(0, 3),
            dddd: ()=>t.weekDays[a]
        }, S;
    }
    _hydrateTimeObject(e, t) {
        if (M.am) return M;
        let i, n;
        e instanceof Date ? (i = e.getHours(), n = e.getMinutes()) : (i = Math.floor(e / 60), n = Math.floor(e % 60));
        const s = i % 12 ? i % 12 : 12, a = (t || {
            am: "am",
            pm: "pm"
        })[i === 24 || i < 12 ? "am" : "pm"];
        return M = {
            H: i,
            h: s,
            HH: (i < 10 ? "0" : "") + i,
            hh: (s < 10 ? "0" : "") + s,
            am: a,
            AM: a.toUpperCase(),
            m: n,
            mm: (n < 10 ? "0" : "") + n
        }, M;
    }
}(O), X = {
    name: "vue-cal",
    components: {
        "vuecal-cell": Y,
        "vuecal-header": P,
        WeekdaysHeadings: j,
        AllDayBar: z
    },
    provide () {
        return {
            vuecal: this,
            utils: this.utils,
            modules: this.modules,
            previous: this.previous,
            next: this.next,
            switchView: this.switchView,
            updateSelectedDate: this.updateSelectedDate,
            editEvents: this.editEvents,
            view: this.view,
            domEvents: this.domEvents
        };
    },
    props: {
        activeView: {
            type: String,
            default: "week"
        },
        allDayBarHeight: {
            type: [
                String,
                Number
            ],
            default: "25px"
        },
        cellClickHold: {
            type: Boolean,
            default: !0
        },
        cellContextmenu: {
            type: Boolean,
            default: !1
        },
        clickToNavigate: {
            type: Boolean,
            default: !1
        },
        dblclickToNavigate: {
            type: Boolean,
            default: !0
        },
        disableDatePrototypes: {
            type: Boolean,
            default: !1
        },
        disableDays: {
            type: Array,
            default: ()=>[]
        },
        disableViews: {
            type: Array,
            default: ()=>[]
        },
        dragToCreateEvent: {
            type: Boolean,
            default: !0
        },
        dragToCreateThreshold: {
            type: Number,
            default: 15
        },
        editableEvents: {
            type: [
                Boolean,
                Object
            ],
            default: !1
        },
        events: {
            type: Array,
            default: ()=>[]
        },
        eventsCountOnYearView: {
            type: Boolean,
            default: !1
        },
        eventsOnMonthView: {
            type: [
                Boolean,
                String
            ],
            default: !1
        },
        hideBody: {
            type: Boolean,
            default: !1
        },
        hideTitleBar: {
            type: Boolean,
            default: !1
        },
        hideViewSelector: {
            type: Boolean,
            default: !1
        },
        hideWeekdays: {
            type: Array,
            default: ()=>[]
        },
        hideWeekends: {
            type: Boolean,
            default: !1
        },
        locale: {
            type: [
                String,
                Object
            ],
            default: "en"
        },
        maxDate: {
            type: [
                String,
                Date
            ],
            default: ""
        },
        minCellWidth: {
            type: Number,
            default: 0
        },
        minDate: {
            type: [
                String,
                Date
            ],
            default: ""
        },
        minEventWidth: {
            type: Number,
            default: 0
        },
        minSplitWidth: {
            type: Number,
            default: 0
        },
        onEventClick: {
            type: [
                Function,
                null
            ],
            default: null
        },
        onEventCreate: {
            type: [
                Function,
                null
            ],
            default: null
        },
        onEventDblclick: {
            type: [
                Function,
                null
            ],
            default: null
        },
        overlapsPerTimeStep: {
            type: Boolean,
            default: !1
        },
        resizeX: {
            type: Boolean,
            default: !1
        },
        selectedDate: {
            type: [
                String,
                Date
            ],
            default: ""
        },
        showAllDayEvents: {
            type: [
                Boolean,
                String
            ],
            default: !1
        },
        showTimeInCells: {
            type: Boolean,
            default: !1
        },
        showWeekNumbers: {
            type: [
                Boolean,
                String
            ],
            default: !1
        },
        snapToTime: {
            type: Number,
            default: 0
        },
        small: {
            type: Boolean,
            default: !1
        },
        specialHours: {
            type: Object,
            default: ()=>({})
        },
        splitDays: {
            type: Array,
            default: ()=>[]
        },
        startWeekOnSunday: {
            type: Boolean,
            default: !1
        },
        stickySplitLabels: {
            type: Boolean,
            default: !1
        },
        time: {
            type: Boolean,
            default: !0
        },
        timeCellHeight: {
            type: Number,
            default: 40
        },
        timeFormat: {
            type: String,
            default: ""
        },
        timeFrom: {
            type: Number,
            default: 0
        },
        timeStep: {
            type: Number,
            default: 60
        },
        timeTo: {
            type: Number,
            default: 1440
        },
        todayButton: {
            type: Boolean,
            default: !1
        },
        transitions: {
            type: Boolean,
            default: !0
        },
        twelveHour: {
            type: Boolean,
            default: !1
        },
        watchRealTime: {
            type: Boolean,
            default: !1
        },
        xsmall: {
            type: Boolean,
            default: !1
        }
    },
    data () {
        return {
            ready: !1,
            texts: {
                ...O
            },
            utils: {
                date: !!this.disableDatePrototypes && H.removePrototypes() || H,
                cell: null,
                event: null
            },
            modules: {
                dnd: null
            },
            view: {
                id: "",
                title: "",
                startDate: null,
                endDate: null,
                firstCellDate: null,
                lastCellDate: null,
                selectedDate: null,
                events: []
            },
            eventIdIncrement: 1,
            now: new Date(),
            timeTickerIds: [
                null,
                null
            ],
            domEvents: {
                resizeAnEvent: {
                    _eid: null,
                    start: null,
                    split: null,
                    segment: null,
                    originalEndTimeMinutes: 0,
                    originalEnd: null,
                    end: null,
                    startCell: null,
                    endCell: null
                },
                dragAnEvent: {
                    _eid: null
                },
                dragCreateAnEvent: {
                    startCursorY: null,
                    start: null,
                    split: null,
                    event: null
                },
                focusAnEvent: {
                    _eid: null,
                    mousedUp: !1
                },
                clickHoldAnEvent: {
                    _eid: null,
                    timeout: 1200,
                    timeoutId: null
                },
                dblTapACell: {
                    taps: 0,
                    timeout: 500
                },
                clickHoldACell: {
                    cellId: null,
                    split: null,
                    timeout: 1200,
                    timeoutId: null,
                    eventCreated: !1
                },
                cancelClickEventCreation: !1
            },
            mutableEvents: [],
            transitionDirection: "right"
        };
    },
    methods: {
        async loadLocale (e) {
            if (typeof this.locale == "object") return this.texts = Object.assign({}, O, e), void this.utils.date.updateTexts(this.texts);
            if (this.locale === "en") {
                const t = await require("f0fa925e02af64a");
                this.texts = Object.assign({}, O, t);
            } else ((t, i)=>{
                const n = t[i];
                return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((s, a)=>{
                    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + i)));
                });
            })(Object.assign({
                "./i18n/ar.json": ()=>require("bf8cdfcf886e559c"),
                "./i18n/bg.json": ()=>require("a33cff303c8d931a"),
                "./i18n/bn.json": ()=>require("55be709f1e1bab2a"),
                "./i18n/bs.json": ()=>require("d4454ff899a9f20f"),
                "./i18n/ca.json": ()=>require("a786fe15d782842b"),
                "./i18n/cs.json": ()=>require("f13243010cba6d9"),
                "./i18n/da.json": ()=>require("b1ee7440a9150f76"),
                "./i18n/de.json": ()=>require("4c6bf7e984ebb2c"),
                "./i18n/el.json": ()=>require("6a3b69c669f3a8c5"),
                "./i18n/en.json": ()=>require("f0fa925e02af64a"),
                "./i18n/es.json": ()=>require("7f08411c43891e12"),
                "./i18n/fa.json": ()=>require("9010ea87755bfd44"),
                "./i18n/fr.json": ()=>require("9eb04d2896fe2c2e"),
                "./i18n/he.json": ()=>require("ad63c315d8137be6"),
                "./i18n/hr.json": ()=>require("edb242a38777152c"),
                "./i18n/hu.json": ()=>require("df4aaf80e88b18c0"),
                "./i18n/id.json": ()=>require("907e1b6ed7028d7d"),
                "./i18n/is.json": ()=>require("f9d4189e276d1cee"),
                "./i18n/it.json": ()=>require("c5555a96bfa6dc88"),
                "./i18n/ja.json": ()=>require("e05b3e5461f759e3"),
                "./i18n/ka.json": ()=>require("c3fc984dc903065b"),
                "./i18n/ko.json": ()=>require("51222cf030fc22d2"),
                "./i18n/lt.json": ()=>require("c4f873be1fe6156b"),
                "./i18n/mn.json": ()=>require("1d69b805feb6f37d"),
                "./i18n/nl.json": ()=>require("e1300d0446362d5a"),
                "./i18n/no.json": ()=>require("7f757e6bfa754288"),
                "./i18n/pl.json": ()=>require("f3f8b86a613a6b50"),
                "./i18n/pt-br.json": ()=>require("7fc3197901523eae"),
                "./i18n/ro.json": ()=>require("80e765a84adb4b6f"),
                "./i18n/ru.json": ()=>require("471b3ef52b0a2635"),
                "./i18n/sk.json": ()=>require("338cd8afc38eefc4"),
                "./i18n/sl.json": ()=>require("b1b9aa9943fa62cf"),
                "./i18n/sq.json": ()=>require("a4b65c06faa8a745"),
                "./i18n/sr.json": ()=>require("80fb8ebee13e32fe"),
                "./i18n/sv.json": ()=>require("e7d1cec05379fb9f"),
                "./i18n/tr.json": ()=>require("fa892a154f367669"),
                "./i18n/uk.json": ()=>require("9ff3f4b89912a46a"),
                "./i18n/vi.json": ()=>require("2dd779d9af62e6bc"),
                "./i18n/zh-cn.json": ()=>require("d33328fee483a8e5"),
                "./i18n/zh-hk.json": ()=>require("9c01d75de1bf848e")
            }), `./i18n/${e}.json`).then((t)=>{
                this.texts = Object.assign({}, O, t.default), this.utils.date.updateTexts(this.texts);
            });
        },
        loadDragAndDrop () {
            require("78eff6abf90f484a").then((e)=>{
                const { DragAndDrop: t } = e;
                this.modules.dnd = new t(this);
            }).catch(()=>console.warn("Vue Cal: Missing drag & drop module."));
        },
        validateView (e) {
            return $.includes(e) || (console.error(`Vue Cal: invalid active-view parameter provided: "${e}".
A valid view must be one of: ${$.join(", ")}.`), e = "week"), this.enabledViews.includes(e) || (console.warn(`Vue Cal: the provided active-view "${e}" is disabled. Using the "${this.enabledViews[0]}" view instead.`), e = this.enabledViews[0]), e;
        },
        switchToNarrowerView (e = null) {
            this.transitionDirection = "right";
            const t = this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1];
            t && this.switchView(t, e);
        },
        switchView (e, t = null, i = !1) {
            e = this.validateView(e);
            const n = this.utils.date, s = this.view.startDate && this.view.startDate.getTime();
            if (this.transitions && i) {
                if (this.view.id === e) return;
                const l = this.enabledViews;
                this.transitionDirection = l.indexOf(this.view.id) > l.indexOf(e) ? "left" : "right";
            }
            const a = this.view.id;
            switch(this.view.events = [], this.view.id = e, this.view.firstCellDate = null, this.view.lastCellDate = null, t || (t = this.view.selectedDate || this.view.startDate), e){
                case "years":
                    this.view.startDate = new Date(25 * Math.floor(t.getFullYear() / 25) || 2e3, 0, 1), this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1), this.view.endDate.setSeconds(-1);
                    break;
                case "year":
                    this.view.startDate = new Date(t.getFullYear(), 0, 1), this.view.endDate = new Date(t.getFullYear() + 1, 0, 1), this.view.endDate.setSeconds(-1);
                    break;
                case "month":
                    {
                        this.view.startDate = new Date(t.getFullYear(), t.getMonth(), 1), this.view.endDate = new Date(t.getFullYear(), t.getMonth() + 1, 1), this.view.endDate.setSeconds(-1);
                        let l = new Date(this.view.startDate);
                        if (l.getDay() !== (this.startWeekOnSunday ? 0 : 1) && (l = n.getPreviousFirstDayOfWeek(l, this.startWeekOnSunday)), this.view.firstCellDate = l, this.view.lastCellDate = n.addDays(l, 41), this.view.lastCellDate.setHours(23, 59, 59, 0), this.hideWeekends) {
                            if ([
                                0,
                                6
                            ].includes(this.view.firstCellDate.getDay())) {
                                const o = this.view.firstCellDate.getDay() !== 6 || this.startWeekOnSunday ? 1 : 2;
                                this.view.firstCellDate = n.addDays(this.view.firstCellDate, o);
                            }
                            if ([
                                0,
                                6
                            ].includes(this.view.startDate.getDay())) {
                                const o = this.view.startDate.getDay() === 6 ? 2 : 1;
                                this.view.startDate = n.addDays(this.view.startDate, o);
                            }
                            if ([
                                0,
                                6
                            ].includes(this.view.lastCellDate.getDay())) {
                                const o = this.view.lastCellDate.getDay() !== 0 || this.startWeekOnSunday ? 1 : 2;
                                this.view.lastCellDate = n.subtractDays(this.view.lastCellDate, o);
                            }
                            if ([
                                0,
                                6
                            ].includes(this.view.endDate.getDay())) {
                                const o = this.view.endDate.getDay() === 0 ? 2 : 1;
                                this.view.endDate = n.subtractDays(this.view.endDate, o);
                            }
                        }
                        break;
                    }
                case "week":
                    {
                        t = n.getPreviousFirstDayOfWeek(t, this.startWeekOnSunday);
                        const l = this.hideWeekends ? 5 : 7;
                        this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? n.addDays(t, 1) : t, this.view.startDate.setHours(0, 0, 0, 0), this.view.endDate = n.addDays(t, l), this.view.endDate.setSeconds(-1);
                        break;
                    }
                case "day":
                    this.view.startDate = t, this.view.startDate.setHours(0, 0, 0, 0), this.view.endDate = new Date(t), this.view.endDate.setHours(23, 59, 59, 0);
            }
            this.addEventsToView();
            const r = this.view.startDate && this.view.startDate.getTime();
            if ((a !== e || r !== s) && (this.$emit("update:activeView", e), this.ready)) {
                const l = this.view.startDate, o = {
                    view: e,
                    startDate: l,
                    endDate: this.view.endDate,
                    ...this.isMonthView ? {
                        firstCellDate: this.view.firstCellDate,
                        lastCellDate: this.view.lastCellDate,
                        outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
                    } : {},
                    events: this.view.events.map(this.cleanupEvent),
                    ...this.isWeekView ? {
                        week: n.getWeek(this.startWeekOnSunday ? n.addDays(l, 1) : l)
                    } : {}
                };
                this.$emit("view-change", o);
            }
        },
        previous () {
            this.previousNext(!1);
        },
        next () {
            this.previousNext();
        },
        previousNext (e = !0) {
            const t = this.utils.date;
            this.transitionDirection = e ? "right" : "left";
            const i = e ? 1 : -1;
            let n = null;
            const { startDate: s, id: a } = this.view;
            switch(a){
                case "years":
                    n = new Date(s.getFullYear() + 25 * i, 0, 1);
                    break;
                case "year":
                    n = new Date(s.getFullYear() + 1 * i, 1, 1);
                    break;
                case "month":
                    n = new Date(s.getFullYear(), s.getMonth() + 1 * i, 1);
                    break;
                case "week":
                    n = t[e ? "addDays" : "subtractDays"](t.getPreviousFirstDayOfWeek(s, this.startWeekOnSunday), 7);
                    break;
                case "day":
                    n = t[e ? "addDays" : "subtractDays"](s, 1);
                    const r = n.getDay(), l = this.startWeekOnSunday ? r : (r || 7) - 1;
                    if (this.weekDays[l].hide) {
                        const o = this.weekDays.map((u, c)=>({
                                ...u,
                                i: c
                            }));
                        let d = 0;
                        e ? ([
                            ...o.slice(l),
                            ...o
                        ].find((u)=>(d++, !u.hide)).i, d--) : [
                            ...o,
                            ...o.slice(0, l)
                        ].reverse().find((u)=>(d++, !u.hide)).i, n = t[e ? "addDays" : "subtractDays"](n, d);
                    }
            }
            n && this.switchView(a, n);
        },
        addEventsToView (e = []) {
            const t = this.utils.event, { startDate: i, endDate: n, firstCellDate: s, lastCellDate: a } = this.view;
            if (e.length || (this.view.events = []), !(e = e.length ? e : [
                ...this.mutableEvents
            ]) || this.isYearsOrYearView && !this.eventsCountOnYearView) return;
            let r = e.filter((l)=>t.eventInRange(l, i, n));
            this.isYearsOrYearView || this.isMonthView && !this.eventsOnMonthView || (r = r.map((l)=>l.daysCount > 1 ? t.createEventSegments(l, s || i, a || n) : l)), this.view.events.push(...r), this.isMonthView && (this.view.outOfScopeEvents = [], e.forEach((l)=>{
                (t.eventInRange(l, s, i) || t.eventInRange(l, n, a)) && (this.view.events.some((o)=>o._eid === l._eid) || this.view.outOfScopeEvents.push(l));
            }));
        },
        findAncestor (e, t) {
            for(; (e = e.parentElement) && !e.classList.contains(t););
            return e;
        },
        isDOMElementAnEvent (e) {
            return e.classList.contains("vuecal__event") || this.findAncestor(e, "vuecal__event");
        },
        onMouseMove (e) {
            const { resizeAnEvent: t, dragAnEvent: i, dragCreateAnEvent: n } = this.domEvents;
            (t._eid !== null || i._eid !== null || n.start) && (e.preventDefault(), t._eid ? this.eventResizing(e) : this.dragToCreateEvent && n.start && this.eventDragCreation(e));
        },
        onMouseUp (e) {
            const { focusAnEvent: t, resizeAnEvent: i, clickHoldAnEvent: n, clickHoldACell: s, dragCreateAnEvent: a } = this.domEvents, { _eid: r } = n, { _eid: l } = i;
            let o = !1;
            const { event: d, start: u } = a, c = this.isDOMElementAnEvent(e.target), m = t.mousedUp;
            if (t.mousedUp = !1, c && (this.domEvents.cancelClickEventCreation = !0), s.eventCreated) return;
            if (l) {
                const { originalEnd: p, originalEndTimeMinutes: g, endTimeMinutes: _ } = i, w = this.view.events.find((k)=>k._eid === i._eid);
                if (o = _ && _ !== g, w && w.end.getTime() !== p.getTime()) {
                    const k = this.mutableEvents.find((L)=>L._eid === i._eid);
                    k.endTimeMinutes = w.endTimeMinutes, k.end = w.end;
                    const C = this.cleanupEvent(w), W = {
                        ...this.cleanupEvent(w),
                        end: p,
                        endTimeMinutes: w.originalEndTimeMinutes
                    };
                    this.$emit("event-duration-change", {
                        event: C,
                        oldDate: i.originalEnd,
                        originalEvent: W
                    }), this.$emit("event-change", {
                        event: C,
                        originalEvent: W
                    });
                }
                w && (w.resizing = !1), i._eid = null, i.start = null, i.split = null, i.segment = null, i.originalEndTimeMinutes = null, i.originalEnd = null, i.endTimeMinutes = null, i.startCell = null, i.endCell = null;
            } else u && (d && (this.emitWithEvent("event-drag-create", d), a.event.resizing = !1), a.start = null, a.split = null, a.event = null);
            c || l || this.unfocusEvent(), n.timeoutId && !r && (clearTimeout(n.timeoutId), n.timeoutId = null), s.timeoutId && (clearTimeout(s.timeoutId), s.timeoutId = null);
            const D = typeof this.onEventClick == "function";
            if (m && !o && !r && !d && D) {
                let p = this.view.events.find((g)=>g._eid === t._eid);
                return !p && this.isMonthView && (p = this.view.outOfScopeEvents.find((g)=>g._eid === t._eid)), p && this.onEventClick(p, e);
            }
        },
        onKeyUp (e) {
            e.keyCode === 27 && this.cancelDelete();
        },
        eventResizing (e) {
            const { resizeAnEvent: t } = this.domEvents, i = this.view.events.find((d)=>d._eid === t._eid) || {
                segments: {}
            }, { minutes: n, cursorCoords: s } = this.minutesAtCursor(e), a = i.segments && i.segments[t.segment], { date: r, event: l } = this.utils, o = Math.max(n, this.timeFrom + 1, (a || i).startTimeMinutes + 1);
            if (i.endTimeMinutes = t.endTimeMinutes = o, this.snapToTime) {
                const d = i.endTimeMinutes + this.snapToTime / 2;
                i.endTimeMinutes = d - d % this.snapToTime;
            }
            if (a && (a.endTimeMinutes = i.endTimeMinutes), i.end.setHours(0, i.endTimeMinutes, i.endTimeMinutes === 1440 ? -1 : 0, 0), this.resizeX && this.isWeekView) {
                i.daysCount = r.countDays(i.start, i.end);
                const d = this.$refs.cells, u = d.offsetWidth / d.childElementCount, c = Math.floor(s.x / u);
                if (t.startCell === null && (t.startCell = c - (i.daysCount - 1)), t.endCell !== c) {
                    t.endCell = c;
                    const m = r.addDays(i.start, c - t.startCell), D = Math.max(r.countDays(i.start, m), 1);
                    if (D !== i.daysCount) {
                        let p = null;
                        p = D > i.daysCount ? l.addEventSegment(i) : l.removeEventSegment(i), t.segment = p, i.endTimeMinutes += 1e-3;
                    }
                }
            }
            this.$emit("event-resizing", {
                _eid: i._eid,
                end: i.end,
                endTimeMinutes: i.endTimeMinutes
            });
        },
        eventDragCreation (e) {
            const { dragCreateAnEvent: t } = this.domEvents, { start: i, startCursorY: n, split: s } = t, a = new Date(i), { minutes: r, cursorCoords: { y: l } } = this.minutesAtCursor(e);
            if (t.event || !(Math.abs(n - l) < this.dragToCreateThreshold)) {
                if (t.event) {
                    if (a.setHours(0, r, r === 1440 ? -1 : 0, 0), this.snapToTime) {
                        let u = 60 * a.getHours() + a.getMinutes();
                        const c = u + this.snapToTime / 2;
                        u = c - c % this.snapToTime, a.setHours(0, u, 0, 0);
                    }
                    const o = i < a, { event: d } = t;
                    d.start = o ? i : a, d.end = o ? a : i, d.startTimeMinutes = 60 * d.start.getHours() + d.start.getMinutes(), d.endTimeMinutes = 60 * d.end.getHours() + d.end.getMinutes();
                } else {
                    if (t.event = this.utils.event.createAnEvent(i, 1, {
                        split: s
                    }), !t.event) return t.start = null, t.split = null, void (t.event = null);
                    t.event.resizing = !0;
                }
            }
        },
        unfocusEvent () {
            const { focusAnEvent: e, clickHoldAnEvent: t } = this.domEvents, i = this.view.events.find((n)=>n._eid === (e._eid || t._eid));
            e._eid = null, t._eid = null, i && (i.focused = !1, i.deleting = !1);
        },
        cancelDelete () {
            const { clickHoldAnEvent: e } = this.domEvents;
            if (e._eid) {
                const t = this.view.events.find((i)=>i._eid === e._eid);
                t && (t.deleting = !1), e._eid = null, e.timeoutId = null;
            }
        },
        onEventTitleBlur (e, t) {
            if (t.title === e.target.innerHTML) return;
            const i = t.title;
            t.title = e.target.innerHTML;
            const n = this.cleanupEvent(t);
            this.$emit("event-title-change", {
                event: n,
                oldTitle: i
            }), this.$emit("event-change", {
                event: n,
                originalEvent: {
                    ...n,
                    title: i
                }
            });
        },
        updateMutableEvents () {
            const e = this.utils.date;
            this.mutableEvents = [], this.events.forEach((t)=>{
                const i = typeof t.start == "string" ? e.stringToDate(t.start) : t.start, n = e.formatDateLite(i), s = e.dateToMinutes(i);
                let a = null;
                typeof t.end == "string" && t.end.includes("24:00") ? (a = new Date(t.end.replace(" 24:00", "")), a.setHours(23, 59, 59, 0)) : a = typeof t.end == "string" ? e.stringToDate(t.end) : t.end;
                let r = e.formatDateLite(a), l = e.dateToMinutes(a);
                l && l !== 1440 || (!this.time || typeof t.end == "string" && t.end.length === 10 ? a.setHours(23, 59, 59, 0) : a.setSeconds(a.getSeconds() - 1), r = e.formatDateLite(a), l = 1440);
                const o = n !== r;
                t = Object.assign({
                    ...this.utils.event.eventDefaults
                }, t, {
                    _eid: `${this.uid}_${this.eventIdIncrement++}`,
                    segments: o ? {} : null,
                    start: i,
                    startTimeMinutes: s,
                    end: a,
                    endTimeMinutes: l,
                    daysCount: o ? e.countDays(i, a) : 1,
                    class: t.class
                }), this.mutableEvents.push(t);
            });
        },
        minutesAtCursor (e) {
            return this.utils.cell.minutesAtCursor(e);
        },
        createEvent (e, t, i = {}) {
            return this.utils.event.createAnEvent(e, t, i);
        },
        cleanupEvent (e) {
            return e = {
                ...e
            }, [
                "segments",
                "deletable",
                "deleting",
                "titleEditable",
                "resizable",
                "resizing",
                "draggable",
                "dragging",
                "draggingStatic",
                "focused"
            ].forEach((t)=>{
                t in e && delete e[t];
            }), e.repeat || delete e.repeat, e;
        },
        emitWithEvent (e, t) {
            this.$emit(e, this.cleanupEvent(t));
        },
        updateSelectedDate (e) {
            if ((e = e && typeof e == "string" ? this.utils.date.stringToDate(e) : new Date(e)) && e instanceof Date) {
                const { selectedDate: t } = this.view;
                t && (this.transitionDirection = t.getTime() > e.getTime() ? "left" : "right"), e.setHours(0, 0, 0, 0), t && t.getTime() === e.getTime() || (this.view.selectedDate = e), this.switchView(this.view.id);
            }
            this.$emit("update:selected-date", this.view.selectedDate);
        },
        getWeekNumber (e) {
            const t = this.utils.date, i = this.firstCellDateWeekNumber + e, n = this.startWeekOnSunday ? 1 : 0;
            return i > 52 ? t.getWeek(t.addDays(this.view.firstCellDate, 7 * e + n)) : i;
        },
        timeTick () {
            this.now = new Date(), this.timeTickerIds[1] = setTimeout(this.timeTick, 6e4);
        },
        updateDateTexts () {
            this.utils.date.updateTexts(this.texts);
        },
        alignWithScrollbar () {
            if (document.getElementById("vuecal-align-with-scrollbar")) return;
            const e = this.$refs.vuecal.getElementsByClassName("vuecal__scrollbar-check")[0], t = e.offsetWidth - e.children[0].offsetWidth;
            if (t) {
                const i = document.createElement("style");
                i.id = "vuecal-align-with-scrollbar", i.type = "text/css", i.innerHTML = `.vuecal--view-with-time .vuecal__weekdays-headings,.vuecal--view-with-time .vuecal__all-day {padding-right: ${t}px}`, document.head.appendChild(i);
            }
        },
        cellOrSplitHasEvents: (e, t = null)=>e.length && (!t && e.length || t && e.some((i)=>i.split === t.id))
    },
    created () {
        this.utils.cell = new N(this), this.utils.event = new I(this, this.utils.date), this.loadLocale(this.locale), this.editEvents.drag && this.loadDragAndDrop(), this.updateMutableEvents(this.events), this.view.id = this.currentView, this.selectedDate ? this.updateSelectedDate(this.selectedDate) : (this.view.selectedDate = new Date(), this.switchView(this.currentView)), this.time && this.watchRealTime && (this.timeTickerIds[0] = setTimeout(this.timeTick, 1e3 * (60 - this.now.getSeconds())));
    },
    mounted () {
        const e = this.utils.date, t = "ontouchstart" in window, { resize: i, drag: n, create: s, delete: a, title: r } = this.editEvents, l = this.onEventClick && typeof this.onEventClick == "function";
        (i || n || s || a || r || l) && window.addEventListener(t ? "touchend" : "mouseup", this.onMouseUp), (i || n || s && this.dragToCreateEvent) && window.addEventListener(t ? "touchmove" : "mousemove", this.onMouseMove, {
            passive: !1
        }), r && window.addEventListener("keyup", this.onKeyUp), t && (this.$refs.vuecal.oncontextmenu = function(u) {
            u.preventDefault(), u.stopPropagation();
        }), this.hideBody || this.alignWithScrollbar();
        const o = this.view.startDate, d = {
            view: this.view.id,
            startDate: o,
            endDate: this.view.endDate,
            ...this.isMonthView ? {
                firstCellDate: this.view.firstCellDate,
                lastCellDate: this.view.lastCellDate
            } : {},
            events: this.view.events.map(this.cleanupEvent),
            ...this.isWeekView ? {
                week: e.getWeek(this.startWeekOnSunday ? e.addDays(o, 1) : o)
            } : {}
        };
        this.$emit("ready", d), this.ready = !0;
    },
    beforeDestroy () {
        const e = "ontouchstart" in window;
        window.removeEventListener(e ? "touchmove" : "mousemove", this.onMouseMove, {
            passive: !1
        }), window.removeEventListener(e ? "touchend" : "mouseup", this.onMouseUp), window.removeEventListener("keyup", this.onKeyUp), this.timeTickerIds[0] && clearTimeout(this.timeTickerIds[0]), this.timeTickerIds[1] && clearTimeout(this.timeTickerIds[1]), this.timeTickerIds = [
            null,
            null
        ];
    },
    computed: {
        editEvents () {
            return this.editableEvents && typeof this.editableEvents == "object" ? {
                title: !!this.editableEvents.title,
                drag: !!this.editableEvents.drag,
                resize: !!this.editableEvents.resize,
                create: !!this.editableEvents.create,
                delete: !!this.editableEvents.delete
            } : {
                title: !!this.editableEvents,
                drag: !!this.editableEvents,
                resize: !!this.editableEvents,
                create: !!this.editableEvents,
                delete: !!this.editableEvents
            };
        },
        views () {
            return {
                years: {
                    label: this.texts.years,
                    enabled: !this.disableViews.includes("years")
                },
                year: {
                    label: this.texts.year,
                    enabled: !this.disableViews.includes("year")
                },
                month: {
                    label: this.texts.month,
                    enabled: !this.disableViews.includes("month")
                },
                week: {
                    label: this.texts.week,
                    enabled: !this.disableViews.includes("week")
                },
                day: {
                    label: this.texts.day,
                    enabled: !this.disableViews.includes("day")
                }
            };
        },
        currentView () {
            return this.validateView(this.activeView);
        },
        enabledViews () {
            return Object.keys(this.views).filter((e)=>this.views[e].enabled);
        },
        hasTimeColumn () {
            return this.time && this.isWeekOrDayView;
        },
        isShortMonthView () {
            return this.isMonthView && this.eventsOnMonthView === "short";
        },
        firstCellDateWeekNumber () {
            const e = this.utils.date, t = this.view.firstCellDate;
            return e.getWeek(this.startWeekOnSunday ? e.addDays(t, 1) : t);
        },
        timeCells () {
            const e = [];
            for(let t = this.timeFrom, i = this.timeTo; t < i; t += this.timeStep)e.push({
                hours: Math.floor(t / 60),
                minutes: t % 60,
                label: this.utils.date.formatTime(t, this.TimeFormat),
                value: t
            });
            return e;
        },
        TimeFormat () {
            return this.timeFormat || (this.twelveHour ? "h:mm{am}" : "HH:mm");
        },
        daySplits () {
            return (this.splitDays.filter((e)=>!e.hide) || []).map((e, t)=>({
                    ...e,
                    id: e.id || t + 1
                }));
        },
        hasSplits () {
            return this.daySplits.length && this.isWeekOrDayView;
        },
        hasShortEvents () {
            return this.showAllDayEvents === "short";
        },
        cellOrSplitMinWidth () {
            let e = null;
            return this.hasSplits && this.minSplitWidth ? e = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length : this.minCellWidth && this.isWeekView && (e = this.visibleDaysCount * this.minCellWidth), e;
        },
        allDayBar () {
            let e = this.allDayBarHeight || null;
            return e && !isNaN(e) && (e += "px"), {
                cells: this.viewCells,
                options: this.$props,
                label: this.texts.allDay,
                shortEvents: this.hasShortEvents,
                daySplits: this.hasSplits && this.daySplits || [],
                cellOrSplitMinWidth: this.cellOrSplitMinWidth,
                height: e
            };
        },
        minTimestamp () {
            let e = null;
            return this.minDate && typeof this.minDate == "string" ? e = this.utils.date.stringToDate(this.minDate) : this.minDate && this.minDate instanceof Date && (e = this.minDate), e ? e.getTime() : null;
        },
        maxTimestamp () {
            let e = null;
            return this.maxDate && typeof this.maxDate == "string" ? e = this.utils.date.stringToDate(this.maxDate) : this.maxDate && this.minDate instanceof Date && (e = this.maxDate), e ? e.getTime() : null;
        },
        weekDays () {
            let { weekDays: e, weekDaysShort: t = [] } = this.texts;
            return e = e.slice(0).map((i, n)=>({
                    label: i,
                    ...t.length ? {
                        short: t[n]
                    } : {},
                    hide: this.hideWeekends && n >= 5 || this.hideWeekdays.length && this.hideWeekdays.includes(n + 1)
                })), this.startWeekOnSunday && e.unshift(e.pop()), e;
        },
        weekDaysInHeader () {
            return this.isMonthView || this.isWeekView && !this.minCellWidth && !(this.hasSplits && this.minSplitWidth);
        },
        months () {
            return this.texts.months.map((e)=>({
                    label: e
                }));
        },
        specialDayHours () {
            return this.specialHours && Object.keys(this.specialHours).length ? Array(7).fill("").map((e, t)=>{
                let i = this.specialHours[t + 1] || [];
                return Array.isArray(i) || (i = [
                    i
                ]), e = [], i.forEach(({ from: n, to: s, class: a, label: r }, l)=>{
                    e[l] = {
                        day: t + 1,
                        from: [
                            null,
                            void 0
                        ].includes(n) ? null : 1 * n,
                        to: [
                            null,
                            void 0
                        ].includes(s) ? null : 1 * s,
                        class: a || "",
                        label: r || ""
                    };
                }), e;
            }) : {};
        },
        viewTitle () {
            const e = this.utils.date;
            let t = "";
            const i = this.view.startDate, n = i.getFullYear(), s = i.getMonth();
            switch(this.view.id){
                case "years":
                    t = this.texts.years;
                    break;
                case "year":
                    t = n;
                    break;
                case "month":
                    t = `${this.months[s].label} ${n}`;
                    break;
                case "week":
                    {
                        const a = this.view.endDate, r = i.getFullYear();
                        let l = this.texts.months[i.getMonth()];
                        this.xsmall && (l = l.substring(0, 3));
                        let o = `${l} ${r}`;
                        if (a.getMonth() !== i.getMonth()) {
                            const d = a.getFullYear();
                            let u = this.texts.months[a.getMonth()];
                            this.xsmall && (u = u.substring(0, 3)), o = r === d ? `${l} - ${u} ${r}` : this.small ? `${l.substring(0, 3)} ${r} - ${u.substring(0, 3)} ${d}` : `${l} ${r} - ${u} ${d}`;
                        }
                        t = `${this.texts.week} ${e.getWeek(this.startWeekOnSunday ? e.addDays(i, 1) : i)} (${o})`;
                        break;
                    }
                case "day":
                    t = this.utils.date.formatDate(i, this.texts.dateFormat, this.texts);
            }
            return t;
        },
        viewCells () {
            const e = this.utils.date;
            let t = [], i = null, n = !1;
            this.watchRealTime || (this.now = new Date());
            const s = this.now;
            switch(this.view.id){
                case "years":
                    i = this.view.startDate.getFullYear(), t = Array.apply(null, Array(25)).map((a, r)=>{
                        const l = new Date(i + r, 0, 1), o = new Date(i + r + 1, 0, 1);
                        return o.setSeconds(-1), {
                            startDate: l,
                            formattedDate: e.formatDateLite(l),
                            endDate: o,
                            content: i + r,
                            current: i + r === s.getFullYear()
                        };
                    });
                    break;
                case "year":
                    i = this.view.startDate.getFullYear(), t = Array.apply(null, Array(12)).map((a, r)=>{
                        const l = new Date(i, r, 1), o = new Date(i, r + 1, 1);
                        return o.setSeconds(-1), {
                            startDate: l,
                            formattedDate: e.formatDateLite(l),
                            endDate: o,
                            content: this.xsmall ? this.months[r].label.substr(0, 3) : this.months[r].label,
                            current: r === s.getMonth() && i === s.getFullYear()
                        };
                    });
                    break;
                case "month":
                    {
                        const a = this.view.startDate.getMonth(), r = new Date(this.view.firstCellDate);
                        n = !1, t = Array.apply(null, Array(42)).map((l, o)=>{
                            const d = e.addDays(r, o), u = new Date(d);
                            u.setHours(23, 59, 59, 0);
                            const c = !n && e.isToday(d) && !n++;
                            return {
                                startDate: d,
                                formattedDate: e.formatDateLite(d),
                                endDate: u,
                                content: d.getDate(),
                                today: c,
                                outOfScope: d.getMonth() !== a,
                                class: `vuecal__cell--day${d.getDay() || 7}`
                            };
                        }), (this.hideWeekends || this.hideWeekdays.length) && (t = t.filter((l)=>{
                            const o = l.startDate.getDay() || 7;
                            return !(this.hideWeekends && o >= 6 || this.hideWeekdays.length && this.hideWeekdays.includes(o));
                        }));
                        break;
                    }
                case "week":
                    {
                        n = !1;
                        const a = this.view.startDate, r = this.weekDays;
                        t = r.map((l, o)=>{
                            const d = e.addDays(a, this.startWeekOnSunday ? o - 1 : o), u = new Date(d);
                            u.setHours(23, 59, 59, 0);
                            const c = (d.getDay() || 7) - 1;
                            return {
                                startDate: d,
                                formattedDate: e.formatDateLite(d),
                                endDate: u,
                                today: !n && e.isToday(d) && !n++,
                                specialHours: this.specialDayHours[c] || []
                            };
                        }).filter((l, o)=>!r[o].hide);
                        break;
                    }
                case "day":
                    {
                        const a = this.view.startDate, r = new Date(this.view.startDate);
                        r.setHours(23, 59, 59, 0);
                        const l = (a.getDay() || 7) - 1;
                        t = [
                            {
                                startDate: a,
                                formattedDate: e.formatDateLite(a),
                                endDate: r,
                                today: e.isToday(a),
                                specialHours: this.specialDayHours[l] || []
                            }
                        ];
                        break;
                    }
            }
            return t;
        },
        visibleDaysCount () {
            return this.isDayView ? 1 : 7 - this.weekDays.reduce((e, t)=>e + t.hide, 0);
        },
        cellWidth () {
            return 100 / this.visibleDaysCount;
        },
        cssClasses () {
            const { resizeAnEvent: e, dragAnEvent: t, dragCreateAnEvent: i } = this.domEvents;
            return {
                [`vuecal--${this.view.id}-view`]: !0,
                [`vuecal--${this.locale}`]: this.locale,
                "vuecal--no-time": !this.time,
                "vuecal--view-with-time": this.hasTimeColumn,
                "vuecal--week-numbers": this.showWeekNumbers && this.isMonthView,
                "vuecal--twelve-hour": this.twelveHour,
                "vuecal--click-to-navigate": this.clickToNavigate,
                "vuecal--hide-weekends": this.hideWeekends,
                "vuecal--split-days": this.hasSplits,
                "vuecal--sticky-split-labels": this.hasSplits && this.stickySplitLabels,
                "vuecal--overflow-x": this.minCellWidth && this.isWeekView || this.hasSplits && this.minSplitWidth,
                "vuecal--small": this.small,
                "vuecal--xsmall": this.xsmall,
                "vuecal--resizing-event": e._eid,
                "vuecal--drag-creating-event": i.event,
                "vuecal--dragging-event": t._eid,
                "vuecal--events-on-month-view": this.eventsOnMonthView,
                "vuecal--short-events": this.isMonthView && this.eventsOnMonthView === "short",
                "vuecal--has-touch": typeof window < "u" && "ontouchstart" in window
            };
        },
        isYearsOrYearView () {
            return [
                "years",
                "year"
            ].includes(this.view.id);
        },
        isYearsView () {
            return this.view.id === "years";
        },
        isYearView () {
            return this.view.id === "year";
        },
        isMonthView () {
            return this.view.id === "month";
        },
        isWeekOrDayView () {
            return [
                "week",
                "day"
            ].includes(this.view.id);
        },
        isWeekView () {
            return this.view.id === "week";
        },
        isDayView () {
            return this.view.id === "day";
        }
    },
    watch: {
        events: {
            handler (e, t) {
                this.updateMutableEvents(e), this.addEventsToView();
            },
            deep: !0
        },
        locale (e) {
            this.loadLocale(e);
        },
        selectedDate (e) {
            this.updateSelectedDate(e);
        },
        activeView (e) {
            this.switchView(e);
        }
    }
}, K = E(X, U, R, !1, null, null, null, null).exports;

},{"vue":"gt5MM","f0fa925e02af64a":"i2awL","bf8cdfcf886e559c":"7k1Rl","a33cff303c8d931a":"cdvIr","55be709f1e1bab2a":"fmECo","d4454ff899a9f20f":"5a2rv","a786fe15d782842b":"aLvoh","f13243010cba6d9":"kgwhh","b1ee7440a9150f76":"ebDr5","4c6bf7e984ebb2c":"3C4ds","6a3b69c669f3a8c5":"29Zlt","7f08411c43891e12":"6pGCR","9010ea87755bfd44":"kn7w5","9eb04d2896fe2c2e":"kkkhT","ad63c315d8137be6":"aJuDv","edb242a38777152c":"5YM3X","df4aaf80e88b18c0":"hIv7Z","907e1b6ed7028d7d":"khDoM","f9d4189e276d1cee":"chTIk","c5555a96bfa6dc88":"chRqS","e05b3e5461f759e3":"gU9Hn","c3fc984dc903065b":"ylknw","51222cf030fc22d2":"1cr45","c4f873be1fe6156b":"fImfv","1d69b805feb6f37d":"VybyS","e1300d0446362d5a":"9dBkx","7f757e6bfa754288":"afNBE","f3f8b86a613a6b50":"4K0wT","7fc3197901523eae":"7NNMH","80e765a84adb4b6f":"fLaHK","471b3ef52b0a2635":"dwof4","338cd8afc38eefc4":"iHwxB","b1b9aa9943fa62cf":"arL67","a4b65c06faa8a745":"21Cem","80fb8ebee13e32fe":"3uVEy","e7d1cec05379fb9f":"e1RDO","fa892a154f367669":"aUAql","9ff3f4b89912a46a":"b7BPN","2dd779d9af62e6bc":"eoRPL","d33328fee483a8e5":"hjwDx","9c01d75de1bf848e":"4Uqwb","78eff6abf90f484a":"3lzwG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2awL":[function(require,module,exports) {
module.exports = require("841457d310598302")(require("b7db9908bdd962b8").getBundleURL("cGCKR") + require("d2190a8b01ac2ff").resolve("6BWFL")).then(()=>module.bundle.root("9cvJa"));

},{"841457d310598302":"61B45","b7db9908bdd962b8":"lgJ39","d2190a8b01ac2ff":"gS3k4"}],"7k1Rl":[function(require,module,exports) {
module.exports = require("3c555e70b03cb2f1")(require("7ea2e96d6675785f").getBundleURL("cGCKR") + require("ba467788692e0c87").resolve("aRBsc")).then(()=>module.bundle.root("1oFYA"));

},{"3c555e70b03cb2f1":"61B45","7ea2e96d6675785f":"lgJ39","ba467788692e0c87":"gS3k4"}],"cdvIr":[function(require,module,exports) {
module.exports = require("418c1a31c317442d")(require("d5ac068c820585b0").getBundleURL("cGCKR") + require("c9993a2a8f0278cb").resolve("4OxpP")).then(()=>module.bundle.root("gTAv8"));

},{"418c1a31c317442d":"61B45","d5ac068c820585b0":"lgJ39","c9993a2a8f0278cb":"gS3k4"}],"fmECo":[function(require,module,exports) {
module.exports = require("2f5b7c785d10a64a")(require("27f8bc0cdb0c045e").getBundleURL("cGCKR") + require("7899917ba400cb95").resolve("04W38")).then(()=>module.bundle.root("kp2Uz"));

},{"2f5b7c785d10a64a":"61B45","27f8bc0cdb0c045e":"lgJ39","7899917ba400cb95":"gS3k4"}],"5a2rv":[function(require,module,exports) {
module.exports = require("25f1e8dc703c952e")(require("495f16ade635ca8a").getBundleURL("cGCKR") + require("f3f250c70f00760a").resolve("4lFjx")).then(()=>module.bundle.root("kRXZz"));

},{"25f1e8dc703c952e":"61B45","495f16ade635ca8a":"lgJ39","f3f250c70f00760a":"gS3k4"}],"aLvoh":[function(require,module,exports) {
module.exports = require("f00627fc49abe584")(require("d9be4e232b6d5654").getBundleURL("cGCKR") + require("1a92bd841abf8e25").resolve("9ZjgO")).then(()=>module.bundle.root("etoix"));

},{"f00627fc49abe584":"61B45","d9be4e232b6d5654":"lgJ39","1a92bd841abf8e25":"gS3k4"}],"kgwhh":[function(require,module,exports) {
module.exports = require("8992a20ec41f0722")(require("469e793407f7278b").getBundleURL("cGCKR") + require("e1a788f31153ba44").resolve("aEDym")).then(()=>module.bundle.root("gFlod"));

},{"8992a20ec41f0722":"61B45","469e793407f7278b":"lgJ39","e1a788f31153ba44":"gS3k4"}],"ebDr5":[function(require,module,exports) {
module.exports = require("d4d7ae7cc6026600")(require("2efaf562607e0077").getBundleURL("cGCKR") + require("de1b13e0fb62308d").resolve("eLpfs")).then(()=>module.bundle.root("e86OD"));

},{"d4d7ae7cc6026600":"61B45","2efaf562607e0077":"lgJ39","de1b13e0fb62308d":"gS3k4"}],"3C4ds":[function(require,module,exports) {
module.exports = require("a79bb968d77954df")(require("b96d5d357d896d8e").getBundleURL("cGCKR") + require("437ac393fe97c080").resolve("kT0El")).then(()=>module.bundle.root("jfOw4"));

},{"a79bb968d77954df":"61B45","b96d5d357d896d8e":"lgJ39","437ac393fe97c080":"gS3k4"}],"29Zlt":[function(require,module,exports) {
module.exports = require("c46e7fd5a9c5a437")(require("4d47e8bc3fe81a3c").getBundleURL("cGCKR") + require("29fd49e77c1ecfa3").resolve("5BN10")).then(()=>module.bundle.root("dsPir"));

},{"c46e7fd5a9c5a437":"61B45","4d47e8bc3fe81a3c":"lgJ39","29fd49e77c1ecfa3":"gS3k4"}],"6pGCR":[function(require,module,exports) {
module.exports = require("1295ca587e02b0d4")(require("feb3878fff6f189").getBundleURL("cGCKR") + require("658c8b9c094fcf8d").resolve("grPG9")).then(()=>module.bundle.root("1FDkN"));

},{"1295ca587e02b0d4":"61B45","feb3878fff6f189":"lgJ39","658c8b9c094fcf8d":"gS3k4"}],"kn7w5":[function(require,module,exports) {
module.exports = require("9a2515370d0f67cc")(require("aaaad3080f14fd75").getBundleURL("cGCKR") + require("9948196237ec07bd").resolve("Kk1gA")).then(()=>module.bundle.root("5J4Vj"));

},{"9a2515370d0f67cc":"61B45","aaaad3080f14fd75":"lgJ39","9948196237ec07bd":"gS3k4"}],"kkkhT":[function(require,module,exports) {
module.exports = require("209e67d781c1d9d3")(require("acc18abf4ef98877").getBundleURL("cGCKR") + require("fe0b476e3764058c").resolve("fcNpg")).then(()=>module.bundle.root("2gMt4"));

},{"209e67d781c1d9d3":"61B45","acc18abf4ef98877":"lgJ39","fe0b476e3764058c":"gS3k4"}],"aJuDv":[function(require,module,exports) {
module.exports = require("37e1741555b3aa54")(require("d005f138e8022449").getBundleURL("cGCKR") + require("27bf46fc351b70d7").resolve("hDRR3")).then(()=>module.bundle.root("bkElG"));

},{"37e1741555b3aa54":"61B45","d005f138e8022449":"lgJ39","27bf46fc351b70d7":"gS3k4"}],"5YM3X":[function(require,module,exports) {
module.exports = require("208fddfde6baafc7")(require("bdc174a76bc19e9e").getBundleURL("cGCKR") + require("b075904d71d97617").resolve("1eD2g")).then(()=>module.bundle.root("Y5QLU"));

},{"208fddfde6baafc7":"61B45","bdc174a76bc19e9e":"lgJ39","b075904d71d97617":"gS3k4"}],"hIv7Z":[function(require,module,exports) {
module.exports = require("5aa039c70aa65e54")(require("f1e382989d730c17").getBundleURL("cGCKR") + require("4217cf029ab50d22").resolve("7CAEU")).then(()=>module.bundle.root("ehZFI"));

},{"5aa039c70aa65e54":"61B45","f1e382989d730c17":"lgJ39","4217cf029ab50d22":"gS3k4"}],"khDoM":[function(require,module,exports) {
module.exports = require("309429e0c2f2f827")(require("bd3aea62863e92f4").getBundleURL("cGCKR") + require("2ec558804490ca76").resolve("8aWF0")).then(()=>module.bundle.root("2G15t"));

},{"309429e0c2f2f827":"61B45","bd3aea62863e92f4":"lgJ39","2ec558804490ca76":"gS3k4"}],"chTIk":[function(require,module,exports) {
module.exports = require("38200e7163ff4f8c")(require("e8375fb8e851575f").getBundleURL("cGCKR") + require("70c445c79620b1d").resolve("hJdUj")).then(()=>module.bundle.root("9pmVJ"));

},{"38200e7163ff4f8c":"61B45","e8375fb8e851575f":"lgJ39","70c445c79620b1d":"gS3k4"}],"chRqS":[function(require,module,exports) {
module.exports = require("2026efa2a1919c94")(require("d2f35d9498cdf35d").getBundleURL("cGCKR") + require("dffe27f74c946f1d").resolve("1chdk")).then(()=>module.bundle.root("1O8SZ"));

},{"2026efa2a1919c94":"61B45","d2f35d9498cdf35d":"lgJ39","dffe27f74c946f1d":"gS3k4"}],"gU9Hn":[function(require,module,exports) {
module.exports = require("46e47d97977e524")(require("7c3819a4083ae2bd").getBundleURL("cGCKR") + require("c7c9937953e7db0c").resolve("g1Ncl")).then(()=>module.bundle.root("8arDn"));

},{"46e47d97977e524":"61B45","7c3819a4083ae2bd":"lgJ39","c7c9937953e7db0c":"gS3k4"}],"ylknw":[function(require,module,exports) {
module.exports = require("51319d1dea22365c")(require("d14e0cc6a1d57b37").getBundleURL("cGCKR") + require("30e8648bc5fcea5").resolve("3RGrr")).then(()=>module.bundle.root("9GTo8"));

},{"51319d1dea22365c":"61B45","d14e0cc6a1d57b37":"lgJ39","30e8648bc5fcea5":"gS3k4"}],"1cr45":[function(require,module,exports) {
module.exports = require("9582df68c5bc984f")(require("137feb0525553390").getBundleURL("cGCKR") + require("be4f81da9bc8b903").resolve("8VUYv")).then(()=>module.bundle.root("e2LgB"));

},{"9582df68c5bc984f":"61B45","137feb0525553390":"lgJ39","be4f81da9bc8b903":"gS3k4"}],"fImfv":[function(require,module,exports) {
module.exports = require("f50252f310f21c01")(require("e913f7dafc4a4624").getBundleURL("cGCKR") + require("e377b8a81cad8cfe").resolve("52U5g")).then(()=>module.bundle.root("13ZEh"));

},{"f50252f310f21c01":"61B45","e913f7dafc4a4624":"lgJ39","e377b8a81cad8cfe":"gS3k4"}],"VybyS":[function(require,module,exports) {
module.exports = require("303db00572cf2e51")(require("4643861a32ce019a").getBundleURL("cGCKR") + require("d1ec5121715e5e32").resolve("55LUS")).then(()=>module.bundle.root("gHdtU"));

},{"303db00572cf2e51":"61B45","4643861a32ce019a":"lgJ39","d1ec5121715e5e32":"gS3k4"}],"9dBkx":[function(require,module,exports) {
module.exports = require("fe91d977a7454698")(require("69769564ade814e0").getBundleURL("cGCKR") + require("bb127b43583aeb24").resolve("aqTm9")).then(()=>module.bundle.root("iVXVM"));

},{"fe91d977a7454698":"61B45","69769564ade814e0":"lgJ39","bb127b43583aeb24":"gS3k4"}],"afNBE":[function(require,module,exports) {
module.exports = require("a97b731840cd90c1")(require("f2a39b5b694c1386").getBundleURL("cGCKR") + require("8ff6532e8927c070").resolve("aoOeE")).then(()=>module.bundle.root("5lHxx"));

},{"a97b731840cd90c1":"61B45","f2a39b5b694c1386":"lgJ39","8ff6532e8927c070":"gS3k4"}],"4K0wT":[function(require,module,exports) {
module.exports = require("a5f4192512b462e2")(require("31c804a26247a1c4").getBundleURL("cGCKR") + require("9cb7ab36004fb38").resolve("6Sflq")).then(()=>module.bundle.root("6ggGr"));

},{"a5f4192512b462e2":"61B45","31c804a26247a1c4":"lgJ39","9cb7ab36004fb38":"gS3k4"}],"7NNMH":[function(require,module,exports) {
module.exports = require("5235d93f4d3d5af8")(require("16e16d118e878d9e").getBundleURL("cGCKR") + require("9a729df1744e0c71").resolve("7ggR2")).then(()=>module.bundle.root("8t45J"));

},{"5235d93f4d3d5af8":"61B45","16e16d118e878d9e":"lgJ39","9a729df1744e0c71":"gS3k4"}],"fLaHK":[function(require,module,exports) {
module.exports = require("172ffa21e5f15e03")(require("e82bdca99b997aac").getBundleURL("cGCKR") + require("aa8b1dda44611ebc").resolve("5O3Zi")).then(()=>module.bundle.root("eS1a6"));

},{"172ffa21e5f15e03":"61B45","e82bdca99b997aac":"lgJ39","aa8b1dda44611ebc":"gS3k4"}],"dwof4":[function(require,module,exports) {
module.exports = require("f23a133e8930aecf")(require("877493337f69ffca").getBundleURL("cGCKR") + require("59e9b9acb091b479").resolve("5dyzZ")).then(()=>module.bundle.root("lNELF"));

},{"f23a133e8930aecf":"61B45","877493337f69ffca":"lgJ39","59e9b9acb091b479":"gS3k4"}],"iHwxB":[function(require,module,exports) {
module.exports = require("1c1a959c85e6e96c")(require("52b394fdba7d3704").getBundleURL("cGCKR") + require("e3278546695ce1c7").resolve("9W8C8")).then(()=>module.bundle.root("gYjiD"));

},{"1c1a959c85e6e96c":"61B45","52b394fdba7d3704":"lgJ39","e3278546695ce1c7":"gS3k4"}],"arL67":[function(require,module,exports) {
module.exports = require("6e54aee13225f53d")(require("75b7e44fa7ced5bf").getBundleURL("cGCKR") + require("2ad0cd7131dc37c0").resolve("9T9u0")).then(()=>module.bundle.root("7Ccob"));

},{"6e54aee13225f53d":"61B45","75b7e44fa7ced5bf":"lgJ39","2ad0cd7131dc37c0":"gS3k4"}],"21Cem":[function(require,module,exports) {
module.exports = require("5134d2d8584c08d0")(require("b87d940415550897").getBundleURL("cGCKR") + require("d2291849e1e164c2").resolve("bzj8N")).then(()=>module.bundle.root("7qHeH"));

},{"5134d2d8584c08d0":"61B45","b87d940415550897":"lgJ39","d2291849e1e164c2":"gS3k4"}],"3uVEy":[function(require,module,exports) {
module.exports = require("71bb955eaed2c6d7")(require("fe41821b3b621576").getBundleURL("cGCKR") + require("bad0d9f4ee61c5e3").resolve("fqKtT")).then(()=>module.bundle.root("fjGVc"));

},{"71bb955eaed2c6d7":"61B45","fe41821b3b621576":"lgJ39","bad0d9f4ee61c5e3":"gS3k4"}],"e1RDO":[function(require,module,exports) {
module.exports = require("50c46d2606744153")(require("41d430b01e78cbfd").getBundleURL("cGCKR") + require("83547ffbece53c54").resolve("8y07x")).then(()=>module.bundle.root("hx0Bk"));

},{"50c46d2606744153":"61B45","41d430b01e78cbfd":"lgJ39","83547ffbece53c54":"gS3k4"}],"aUAql":[function(require,module,exports) {
module.exports = require("59a77dde866c94a5")(require("b24703a869a8f78d").getBundleURL("cGCKR") + require("ac7760b2b4bd38bc").resolve("aVDJh")).then(()=>module.bundle.root("jbTyZ"));

},{"59a77dde866c94a5":"61B45","b24703a869a8f78d":"lgJ39","ac7760b2b4bd38bc":"gS3k4"}],"b7BPN":[function(require,module,exports) {
module.exports = require("2ecc5551a44847a4")(require("879f9999a595f7b9").getBundleURL("cGCKR") + require("ca0edd59b1ab98c").resolve("feeHb")).then(()=>module.bundle.root("5GWm6"));

},{"2ecc5551a44847a4":"61B45","879f9999a595f7b9":"lgJ39","ca0edd59b1ab98c":"gS3k4"}],"eoRPL":[function(require,module,exports) {
module.exports = require("d7794573ee776f2")(require("3432ef8bef41cfc5").getBundleURL("cGCKR") + require("1040adf78d7642de").resolve("5kSTG")).then(()=>module.bundle.root("5QGzG"));

},{"d7794573ee776f2":"61B45","3432ef8bef41cfc5":"lgJ39","1040adf78d7642de":"gS3k4"}],"hjwDx":[function(require,module,exports) {
module.exports = require("905c9459aa406221")(require("fecbe4128018a4bc").getBundleURL("cGCKR") + require("c599b96fa90047ef").resolve("fiofN")).then(()=>module.bundle.root("7VJZj"));

},{"905c9459aa406221":"61B45","fecbe4128018a4bc":"lgJ39","c599b96fa90047ef":"gS3k4"}],"4Uqwb":[function(require,module,exports) {
module.exports = require("ecb6de594d720901")(require("42faf5e8aa704fd0").getBundleURL("cGCKR") + require("4946c0ff91bf521e").resolve("3UlqZ")).then(()=>module.bundle.root("3G7TP"));

},{"ecb6de594d720901":"61B45","42faf5e8aa704fd0":"lgJ39","4946c0ff91bf521e":"gS3k4"}],"3lzwG":[function(require,module,exports) {
module.exports = require("d4ee3f2127abf604")(require("f4c3b66f64d27f97").getBundleURL("cGCKR") + require("b4988375ab441ef5").resolve("hAcVI")).then(()=>module.bundle.root("eusbt"));

},{"d4ee3f2127abf604":"61B45","f4c3b66f64d27f97":"lgJ39","b4988375ab441ef5":"gS3k4"}],"3g7Se":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "event_container"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("div", {
                staticClass: "display"
            }, [
                _c("md-checkbox", {
                    staticClass: "md-primary",
                    model: {
                        value: _vm.displayEventsShared,
                        callback: function($$v) {
                            _vm.displayEventsShared = $$v;
                        },
                        expression: "displayEventsShared"
                    }
                }),
                _vm._v(" "),
                _c("span", {
                    staticClass: "md-list-item-text"
                }, [
                    _vm._v("Display Events Shared")
                ])
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "display"
            }, [
                _c("md-checkbox", {
                    staticClass: "md-primary",
                    model: {
                        value: _vm.displayonlyEventsShared,
                        callback: function($$v) {
                            _vm.displayonlyEventsShared = $$v;
                        },
                        expression: "displayonlyEventsShared"
                    }
                }),
                _vm._v(" "),
                _c("span", {
                    staticClass: "md-list-item-text"
                }, [
                    _vm._v("Display only Events Shared")
                ])
            ], 1)
        ]),
        _vm._v(" "),
        _c("vue-cal", {
            ref: "vuecal",
            staticClass: "calendar_container vuecal--full-height-delete",
            attrs: {
                "time": true,
                "dblclick-to-navigate": false,
                "events-count-on-year-view": "",
                "events-on-month-view": "short",
                "default-view": "month",
                "active-view": "month",
                "disable-views": [
                    "years"
                ],
                "events": _vm.events,
                "on-event-dblclick": _vm.onEventClick,
                "editable-events": {
                    title: false,
                    drag: false,
                    resize: false,
                    delete: true,
                    create: false
                }
            },
            on: {
                "event-delete": _vm.deleteEvent,
                "cell-dblclick": _vm.cellDblClick
            }
        }),
        _vm._v(" "),
        _c("md-speed-dial", {
            staticClass: "md-bottom-right",
            attrs: {
                "md-direction": "top"
            }
        }, [
            _c("md-speed-dial-target", {
                staticClass: "md-primary md-fab md-mini"
            }, [
                _c("md-icon", {
                    staticClass: "md-morph-initial"
                }, [
                    _vm._v("menu")
                ]),
                _vm._v(" "),
                _c("md-icon", {
                    staticClass: "md-morph-final"
                }, [
                    _vm._v("close")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-speed-dial-content", [
                _c("md-button", {
                    staticClass: "addIconFab md-fab md-mini md-accent",
                    attrs: {
                        "title": "remove all event"
                    },
                    on: {
                        "click": _vm.removeAllEvents
                    }
                }, [
                    _c("md-icon", {
                        staticClass: "md-primary"
                    }, [
                        _vm._v("delete")
                    ])
                ], 1),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "addIconFab md-fab md-mini md-primary",
                    attrs: {
                        "title": "select all event"
                    },
                    on: {
                        "click": _vm.seeEvents
                    }
                }, [
                    _c("md-icon", {
                        staticClass: "md-primary"
                    }, [
                        _vm._v("visibility")
                    ])
                ], 1),
                _vm._v(" "),
                !_vm.isEventContext ? _c("md-button", {
                    staticClass: "addIconFab md-fab md-mini md-primary",
                    attrs: {
                        "title": "add event"
                    },
                    on: {
                        "click": _vm.addEvent
                    }
                }, [
                    _c("md-icon", {
                        staticClass: "md-primary"
                    }, [
                        _vm._v("add")
                    ])
                ], 1) : _vm._e()
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"im95M":[function() {},{}],"g4ZZF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DYxy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("96cbc88b5e7d3f44");
    if (script.__esModule) script = script.default;
    script.render = require("7d5d115ed5c99cc4").render;
    script.staticRenderFns = require("7d5d115ed5c99cc4").staticRenderFns;
    script._scopeId = "data-v-96476d";
    script.__cssModules = require("fb85bef0ae0e808d").default;
    require("531be01f15003f72").default(script);
    script.__scopeId = "data-v-96476d";
    script.__file = "seeEventDetail.vue";
};
initialize();
exports.default = script;

},{"96cbc88b5e7d3f44":"hgtNn","7d5d115ed5c99cc4":"5uqAO","fb85bef0ae0e808d":"jEtIw","531be01f15003f72":"2Muii","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgtNn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerTaskService = require("spinal-env-viewer-task-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _tasksCalendarVue = require("../components/tasksCalendar.vue");
var _tasksCalendarVueDefault = parcelHelpers.interopDefault(_tasksCalendarVue);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
var _messageComponentVue = require("spinal-env-viewer-plugin-documentation/view/notes/components/messageComponent.vue");
var _messageComponentVueDefault = parcelHelpers.interopDefault(_messageComponentVue);
var _isolate = require("../../buttons/standard_buttons/isolate");
var _isolateDefault = parcelHelpers.interopDefault(_isolate);
var _select = require("../../buttons/standard_buttons/select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _zoom = require("../../buttons/standard_buttons/zoom");
var _zoomDefault = parcelHelpers.interopDefault(_zoom);
var _event = require("../../js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
var scriptExports = {
    name: "seeEventDetail",
    components: {
        "message-component": (0, _messageComponentVueDefault.default)
    },
    data () {
        this.DETAILS = [
            "name"
        ];
        return {
            event: {},
            nodeInfo: {}
        };
    },
    mounted () {
        (0, _eventDefault.default).$on((0, _event.EVENT_TYPES).UPDATED, (event)=>{
            if (this.event && this.event.id === event.id) this.event = event;
        });
        (0, _eventDefault.default).$on((0, _event.EVENT_TYPES).DELETED, (id)=>{
            if (this.event && this.event.id === id) this.event = undefined;
        });
    },
    methods: {
        async opened (event) {
            const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(event.id);
            this.event = realNode.info.get();
            this.nodeInfo = {
                selectedNode: realNode
            };
            const name = event.name;
            this.setTitle(name);
        },
        closed () {},
        editEvent () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("editTaskDialog", Object.assign({}, this.event));
        },
        setTitle (title) {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).panels.seeEventDetail.panel.setTitle(`Event Detail Panel : ${title}`);
        },
        selectOnMaquette () {
            const params = {
                selectedNode: this.nodeInfo.selectedNode.info,
                context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.event.contextId)
            };
            (0, _selectDefault.default).action(params);
        },
        isolateOnMaquette () {
            const params = {
                selectedNode: this.nodeInfo.selectedNode.info,
                context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.event.contextId)
            };
            (0, _isolateDefault.default).action(params);
        },
        zoomOnMaquette () {
            const params = {
                selectedNode: this.nodeInfo.selectedNode.info,
                context: (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(this.event.contextId)
            };
            (0, _zoomDefault.default).action(params);
        },
        cancelEvent () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("confirmDialog", {
                event: this.event
            });
        }
    },
    filters: {
        formatDate: (date)=>{
            return (0, _momentDefault.default)(date, "x").format("MMMM Do YYYY, HH:mm");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-task-service":"4IrFb","spinal-env-viewer-graph-service":"9n7zp","../components/tasksCalendar.vue":"9gvD3","moment":"jwcsj","spinal-env-viewer-plugin-documentation/view/notes/components/messageComponent.vue":"PVL1R","../../buttons/standard_buttons/isolate":"2dscn","../../buttons/standard_buttons/select":"1EoGn","../../buttons/standard_buttons/zoom":"glQK8","../../js/event":"kMoPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9gvD3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c125dff9acebfff7");
    if (script.__esModule) script = script.default;
    script.render = require("8f19034ced63ec75").render;
    script.staticRenderFns = require("8f19034ced63ec75").staticRenderFns;
    script._scopeId = "data-v-28fbfd";
    script.__cssModules = require("6d93f73c355fb1c8").default;
    require("7d6af082d6d7a8a3").default(script);
    script.__scopeId = "data-v-28fbfd";
    script.__file = "tasksCalendar.vue";
};
initialize();
exports.default = script;

},{"c125dff9acebfff7":"eFcf5","8f19034ced63ec75":"3CYKJ","6d93f73c355fb1c8":"7W2iT","7d6af082d6d7a8a3":"dbVRs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eFcf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueCal = require("vue-cal");
var _vueCalDefault = parcelHelpers.interopDefault(_vueCal);
var scriptExports = {
    name: "event-calendar",
    props: Object.assign({}, (0, _vueCalDefault.default).props),
    components: {
        "vue-cal": (0, _vueCalDefault.default)
    },
    data () {
        return {
            allProps: {}
        };
    },
    mounted () {
        // this.allProps = this.$options.propsData;
        // console.log("props", this);
        this.allProps = this.$props;
    },
    watch: {
        events () {
        // this.allProps = this.$props;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-cal":"6ZWlS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3CYKJ":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "calendar_container"
    }, [
        _c("vue-cal", _vm._b({
            ref: "calendarVue",
            scopedSlots: _vm._u([
                {
                    key: "event",
                    fn: function(ref) {
                        var event = ref.event;
                        var view = ref.view;
                        return [
                            _c("v-icon", [
                                _vm._v(_vm._s(event.icon))
                            ]),
                            _vm._v(" "),
                            _c("div", {
                                staticClass: "vuecal__event-title",
                                domProps: {
                                    "innerHTML": _vm._s(event.title)
                                }
                            }),
                            _vm._v(" "),
                            _c("div", {
                                staticClass: "vuecal__event-title vuecal__event-title--edit",
                                attrs: {
                                    "contenteditable": ""
                                },
                                domProps: {
                                    "innerHTML": _vm._s(event.title)
                                },
                                on: {
                                    "blur": function($event) {
                                        event.title = $event.target.innerHTML;
                                    }
                                }
                            }),
                            _vm._v(" "),
                            _c("small", {
                                staticClass: "vuecal__event-time"
                            }, [
                                _c("strong", [
                                    _vm._v("Event start:")
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                    _vm._v(_vm._s(event.start.formatTime("h O'clock")))
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("strong", [
                                    _vm._v("Event end:")
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                    _vm._v(_vm._s(event.end.formatTime("h O'clock")))
                                ])
                            ])
                        ];
                    }
                }
            ])
        }, "vue-cal", _vm.allProps, false))
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"7W2iT":[function() {},{}],"dbVRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5uqAO":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.event ? _c("md-content", {
        staticClass: "event_container"
    }, [
        _c("div", {
            staticClass: "details_container"
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
                        _vm._v(_vm._s(_vm.event.name))
                    ])
                ]),
                _vm._v(" "),
                _vm.event.user ? _c("div", {
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
                        _vm._v(_vm._s(_vm.event.user.username))
                    ])
                ]) : _vm._e(),
                _vm._v(" "),
                _c("div", {
                    staticClass: "detail"
                }, [
                    _c("div", {
                        staticClass: "label"
                    }, [
                        _vm._v("Sart Date")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "value"
                    }, [
                        _vm._v(_vm._s(_vm._f("formatDate")(_vm.event.startDate)))
                    ])
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "detail"
                }, [
                    _c("div", {
                        staticClass: "label"
                    }, [
                        _vm._v("End Date")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "value"
                    }, [
                        _vm._v(_vm._s(_vm._f("formatDate")(_vm.event.endDate)))
                    ])
                ])
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "actions"
            }, [
                _c("div", {
                    staticClass: "standard_buttons action"
                }, [
                    _c("md-button", {
                        staticClass: "md-icon-button md-primary",
                        attrs: {
                            "title": "select on 3D model"
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
                            "title": "isolate on 3D model"
                        },
                        on: {
                            "click": _vm.isolateOnMaquette
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("settings_overscan")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "md-icon-button md-primary",
                        attrs: {
                            "title": "zoom on 3D model"
                        },
                        on: {
                            "click": _vm.zoomOnMaquette
                        }
                    }, [
                        _c("md-icon", [
                            _vm._v("zoom_in")
                        ])
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-dense md-primary action",
                    on: {
                        "click": _vm.editEvent
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("edit")
                    ]),
                    _vm._v("\n            Edit Event\n         ")
                ], 1),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-dense md-accent cancel-action",
                    on: {
                        "click": _vm.cancelEvent
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("event_busy")
                    ]),
                    _vm._v("\n            Cancel Event\n         ")
                ], 1)
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "notes_logs"
        }, [
            _c("md-content", {
                staticClass: "notes md-scrollbar"
            }, [
                _c("message-component", {
                    attrs: {
                        "nodeInfo": _vm.nodeInfo
                    }
                })
            ], 1)
        ], 1)
    ]) : _c("md-content", {
        staticClass: "event_container"
    }, [
        _vm._v("\n   Event not found\n")
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jEtIw":[function() {},{}],"2Muii":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-task.7dc5cf63.js.map
