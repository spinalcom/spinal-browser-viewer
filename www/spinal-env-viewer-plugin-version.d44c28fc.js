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
})({"1vOxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TOP_BAR_HOOK_NAME", ()=>TOP_BAR_HOOK_NAME);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _openVersionButton = require("./src/OpenVersionButton");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vuetify = require("vuetify");
var _vuetifyDefault = parcelHelpers.interopDefault(_vuetify);
var _compareVersionVue = require("./src/vue/CompareVersion.vue");
var _compareVersionVueDefault = parcelHelpers.interopDefault(_compareVersionVue);
const TOP_BAR_HOOK_NAME = "GraphManagerTopBar";
(0, _vueDefault.default).use((0, _vuetifyDefault.default));
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(TOP_BAR_HOOK_NAME, new (0, _openVersionButton.OpenVersionButton)(), [
    7
]);
const compareVersion = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention({
    name: "CompareVersion",
    vueMountComponent: (0, _vueDefault.default).extend((0, _compareVersionVueDefault.default)),
    panel: {
        title: "Compare BIM Version",
        classname: "spinal-pannel",
        closeBehaviour: "hide"
    },
    style: {
        left: "805px",
        width: "430px",
        height: "80vh",
        display: "flex"
    }
});
(0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention("CompareVersion", compareVersion);

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./src/OpenVersionButton":"dR7GQ","vue":"gt5MM","vuetify":"WtHLj","./src/vue/CompareVersion.vue":"daYUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"dR7GQ":[function(require,module,exports) {
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
parcelHelpers.export(exports, "OpenVersionButton", ()=>OpenVersionButton);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _utils = require("./utils");
const { spinalPanelManagerService } = require("d45c3532c0035cc7");
class OpenVersionButton extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Open Model Manager", "Open Model Manager", {
            icon: "sort",
            icon_type: "in",
            backgroundColor: "#000000",
            fontColor: "#ffffff"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        return Promise.resolve(true);
    }
    openPanel() {
        const context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext("BimFileContext");
        const promises = [];
        (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(context.info.id.get(), context.info.id.get()).then((children)=>{
            spinalPanelManagerService.openPanel("CompareVersion", {
                bimFiles: children
            });
        });
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","./utils":"7kVwE","d45c3532c0035cc7":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kVwE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadModelPtr", ()=>loadModelPtr);
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
const mapModelDictionary = new Map();
function loadModelPtr(model) {
    if (model instanceof (0, _spinalCoreConnectorjsType.File)) return loadModelPtr(model._ptr);
    if (!(model instanceof (0, _spinalCoreConnectorjsType.Ptr))) throw new Error("loadModelPtr must take Ptr as parameter");
    if (!model.data.value && model.data.model) return Promise.resolve(model.data.model);
    else if (!model.data.value) throw new Error("Trying to load a Ptr to 0");
    if (mapModelDictionary.has(model.data.value)) return mapModelDictionary.get(model.data.value);
    if (typeof (0, _spinalCoreConnectorjsType.FileSystem)._objects[model.data.value] !== "undefined") {
        const promise = Promise.resolve((0, _spinalCoreConnectorjsType.FileSystem)._objects[model.data.value]);
        mapModelDictionary.set(model.data.value, promise);
        return promise;
    }
    const promise = new Promise((resolve, reject)=>{
        model.load((m)=>{
            if (!m) {
                mapModelDictionary.delete(model.data.value);
                reject(new Error("Error in load Ptr"));
            } else resolve(m);
        });
    });
    mapModelDictionary.set(model.data.value, promise);
    return promise;
}
exports.default = loadModelPtr;

},{"spinal-core-connectorjs_type":"fRH70","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"daYUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("dbef8575389cff8a");
    if (script.__esModule) script = script.default;
    script.render = require("a5ccfac00491f9b2").render;
    script.staticRenderFns = require("a5ccfac00491f9b2").staticRenderFns;
    script._scopeId = "data-v-dc168b";
    script.__cssModules = require("39f1efa6a6607cb7").default;
    require("b48db937e412e408").default(script);
    script.__scopeId = "data-v-dc168b";
    script.__file = "CompareVersion.vue";
};
initialize();
exports.default = script;

},{"dbef8575389cff8a":"4yn3J","a5ccfac00491f9b2":"86BZL","39f1efa6a6607cb7":"8uV1q","b48db937e412e408":"6RwfP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yn3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _dbIdsSelectorVue = require("./DbIdsSelector.vue");
var _dbIdsSelectorVueDefault = parcelHelpers.interopDefault(_dbIdsSelectorVue);
var scriptExports = {
    name: "CompareVersion",
    components: {
        DbIdsSelector: (0, _dbIdsSelectorVueDefault.default)
    },
    data: function() {
        return {
            viewer: null,
            dialog: false,
            items: [],
            bimFiles: [],
            selectedModel: "",
            displayVersion: false,
            versionList: [],
            nbVersion: 0,
            versionNum: [],
            versionExcludeNum: [],
            primaryVersion: 0,
            secondaryVersion: 0,
            comparisonDone: false,
            primaryDbids: [],
            secondaryDbids: [],
            primaryExternalIds: [],
            secondaryExternalIds: [],
            firstModel: null,
            secondModel: null,
            removedExternalId: [],
            sameExternalIds: [],
            newExternalIds: [],
            removedId: [],
            sameId: [],
            newId: [],
            externalIdMapping: {}
        };
    },
    computed: {
        availableVersionNum: function() {
            this.versionNum.filter();
        }
    },
    methods: {
        init: function(option) {
            this.dialog = true;
            this.items = [];
            this.bimFiles = option.bimFiles;
            this.selectedModel = "";
            this.displayVersion = false;
            this.versionList = [];
            this.nbVersion = 0;
            this.versionNum = [];
            this.comparisonDone = false;
            this.primaryDbids = [];
            this.secondaryDbids = [];
            this.primaryExternalIds = [];
            this.secondaryExternalIds = [];
            this.firstModel = null;
            this.externalIdMapping = {};
        },
        opened: function(option) {
            this.init(option);
            for(let i = 0; i < this.bimFiles.length; i++)this.items.push({
                text: this.bimFiles[i].name.get(),
                value: i
            });
            this.viewer = window.spinal.ForgeViewer.viewer;
        },
        onBIMFileSelected: function(e) {
            this.selectedModel = e;
        },
        getVersionList: function(bimFile) {
            (0, _utils.loadModelPtr)(bimFile.element.ptr).then((elt)=>{
                this.versionList = elt.versionLst;
                this.nbVersion = elt.versionLst.length;
                for(let i = 0; i < elt.versionLst.length; i++)this.versionNum.push(i + 1);
            });
        },
        onPrimaryVersionSelected: function(e) {
            this.primaryVersion = e;
        },
        onSecondaryVersionSelected: function(e) {
            this.secondaryVersion = e;
        },
        compareVersion: async function() {
            const primaryPath = this.getSVF(this.versionList[this.primaryVersion - 1], this.primaryVersion);
            const secondaryPath = this.getSVF(this.versionList[this.secondaryVersion - 1], this.secondaryVersion);
            this.firstModel = await this.loadModel(primaryPath);
            this.secondModel = await this.loadModel(secondaryPath);
            this.primaryDbids = await this.getDBIDs(this.firstModel);
            this.secondaryDbids = await this.getDBIDs(this.secondModel);
            let primaryProms = this.primaryDbids.map((dbId)=>{
                return this.getExternalId(dbId, this.firstModel);
            });
            let secondaryProm = this.secondaryDbids.map((dbId)=>{
                return this.getExternalId(dbId, this.secondModel);
            });
            this.primaryExternalIds = await this.promAll(primaryProms);
            this.secondaryExternalIds = await this.promAll(secondaryProm);
            this.removedExternalId = this.secondaryExternalIds.filter((id)=>this.primaryExternalIds.indexOf(id) === -1);
            this.sameExternalIds = this.primaryExternalIds.filter((id)=>this.secondaryExternalIds.indexOf(id) !== -1);
            this.newExternalIds = this.primaryExternalIds.filter((id)=>this.secondaryExternalIds.indexOf(id) === -1);
            this.mapExternalId().then(()=>{
                console.log("mapping done");
                this.viewer = window.spinal.ForgeViewer.viewer;
                console.log("mapping ici ", this);
                /*  this.viewer.hide( this.sameId, this.firstModel );
               this.viewer.hide( this.sameId, this.secondModel );
               */ this.colorModel(this.newIds, this.firstModel, new THREE.Vector4(0, 255, 0, 0.7));
                this.colorModel(this.removedId, this.secondModel, new THREE.Vector4(255, 0, 0, 0.7));
                window.newId = this.newIds;
                window.removedId = this.removedId;
                this.viewer.impl.invalidate();
                this.comparisonDone = true;
            });
        },
        colorModel (ids, model, color) {
            for(let i = 0; i < ids.length; i++){
                const id = ids[i];
                if (id !== 1) this.viewer.setThemingColor(id, color, model, false);
            }
        },
        mapExternalId: function() {
            return new Promise(async (resolve, reject)=>{
                try {
                    this.removedId = await this.getAllDbIdFromExternalId(this.removedExternalId, this.secondModel);
                    this.newIds = await this.getAllDbIdFromExternalId(this.newExternalIds, this.firstModel);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        },
        async promAll (proms) {
            const res = [];
            for(let i = 0; i < proms.length; i++)try {
                res.push(await proms[i]);
            } catch (e) {
                console.error(e);
            }
            return res;
        },
        getExternalId: function(dbId, model) {
            return new Promise((resolve, reject)=>{
                model.getProperties(dbId, (props)=>{
                    resolve(props.externalId);
                }, reject);
            });
        },
        getAllDbIdFromExternalId: function(externalIds, model) {
            const proms = [];
            for(let i = 0; i < externalIds.length; i++)proms.push(this.getDbIdFromExternalId(externalIds[i], model));
            return Promise.all(proms);
        },
        getDbIdFromExternalId: function(externalId, model) {
            return new Promise((resolve, reject)=>{
                if (typeof this.externalIdMapping[model.id] === "undefined") model.getExternalIdMapping((function external(res) {
                    this.externalIdMapping[model.id] = res;
                    resolve(res[externalId]);
                }).bind(this), reject);
                else resolve(this.externalIdMapping[model.id][externalId]);
            });
        },
        getAllDbIdsRec (model, callback) {
            let cbCount = 0; // count pending callbacks
            const components = []; // store the results
            let tree; // the instance tree
            function getLeafComponentsRec(parent) {
                cbCount++;
                if (tree.getChildCount(parent) !== 0) tree.enumNodeChildren(parent, function(children) {
                    getLeafComponentsRec(children);
                }, false);
                else components.push(parent);
                if (--cbCount === 0) callback(components);
            }
            model.getObjectTree(function(objectTree) {
                tree = objectTree;
                var allLeafComponents = getLeafComponentsRec(tree.getRootId());
            });
        },
        getDBIDs (model) {
            return new Promise((resolve)=>{
                this.getAllDbIdsRec(model, resolve);
            });
        },
        loadModel (path) {
            return new Promise((resolve, reject)=>{
                const eventListener = (e)=>{
                    this.viewer.removeEventListener(eventListener);
                    resolve(e.model);
                };
                this.viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, eventListener.bind(this));
                this.viewer.loadModel(path, {}, ()=>{}, (e)=>{
                    this.viewer.removeEventListener(eventListener);
                    reject(e);
                });
            });
        },
        getSVF: function(version) {
            const items = version.items;
            for(let i = 0; i < items.length; i++){
                const item = items[i];
                if (item.path.get().indexOf("svf") !== -1) //TODO change with env
                return "http://" + window.location.host + item.path.get();
            }
        },
        isolate: function(event) {
            let ids;
            switch(event.typeIds){
                case "new":
                    ids = this.newIds;
                    break;
                case "removed":
                    ids = this.removedId;
                    break;
                default:
                    ids = this.sameExternalIds;
            }
            if (event.model.id === 2) this.hideModel(this.secondModel);
            else this.hideModel(this.firstModel);
            console.log("isolate", event, this.removedId, this.newIds);
            this.viewer.isolate(ids, event.model);
        },
        select: function(event) {
            let ids;
            switch(event.typeIds){
                case "new":
                    ids = this.newIds;
                    break;
                case "removed":
                    ids = this.removedId;
                    break;
                default:
                    ids = this.sameExternalIds;
            }
            if (event.model.id === 2) this.hideModel(this.secondModel);
            else this.hideModel(this.firstModel);
            this.viewer.select(ids, event.model, Autodesk.Viewing.SelectionMode.MIXED);
        },
        hideModel (model) {
            this.viewer.hideModel(model.id);
            if (model.id === 2) this.viewer.showModel(3);
            else this.viewer.showModel(2);
        }
    },
    watch: {
        selectedModel: {
            handler: function(value) {
                this.displayVersion = value !== "";
                if (value !== "") {
                    const index = parseInt(value);
                    if (!isNaN(index)) this.getVersionList(this.bimFiles[index]);
                }
            },
            immediate: true
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../utils":"7kVwE","./DbIdsSelector.vue":"bLhhk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLhhk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6d82900e83530dba");
    if (script.__esModule) script = script.default;
    script.render = require("d24d158d12707fdc").render;
    script.staticRenderFns = require("d24d158d12707fdc").staticRenderFns;
    script._scopeId = "data-v-5e6e84";
    script.__cssModules = require("5bcd0c568d57a77f").default;
    require("8448ac052d6cc8").default(script);
    script.__scopeId = "data-v-5e6e84";
    script.__file = "DbIdsSelector.vue";
};
initialize();
exports.default = script;

},{"6d82900e83530dba":"jMGjE","d24d158d12707fdc":"bWJzu","5bcd0c568d57a77f":"b6Up7","8448ac052d6cc8":"en2sK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMGjE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var scriptExports = {
    name: "DbIdsSelector",
    props: {
        title: {
            type: String,
            required: true
        },
        ids: {
            type: Array,
            required: true
        },
        model: {
            type: Object,
            required: true
        },
        typeIds: {
            type: String,
            required: true
        }
    },
    methods: {
        isolate: function() {
            this.$emit("isolate", {
                ids: this.ids,
                model: this.model,
                typeIds: this.typeIds
            });
        },
        select: function() {
            this.$emit("select", {
                ids: this.ids,
                model: this.model,
                typeIds: this.typeIds
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWJzu":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
        _vm._v("\n    " + _vm._s(_vm.title) + " :\n    " + _vm._s(_vm.ids.length) + "\n    "),
        _c("v-btn", {
            attrs: {
                "flat": "",
                "icon": "",
                "color": "white"
            },
            on: {
                "click": _vm.select
            }
        }, [
            _c("v-icon", [
                _vm._v("select_all")
            ])
        ], 1),
        _vm._v(" "),
        _c("v-btn", {
            attrs: {
                "flat": "",
                "icon": "",
                "color": "white"
            },
            on: {
                "click": _vm.isolate
            }
        }, [
            _c("v-icon", [
                _vm._v("settings_overscan")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"b6Up7":[function() {},{}],"en2sK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86BZL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "compare-bim-panel"
    }, [
        _c("v-container", {
            attrs: {
                "grid-list-md": "",
                "text-xs-center": ""
            }
        }, [
            _c("v-layout", {
                attrs: {
                    "wrap": "",
                    "align-center": ""
                }
            }, [
                _c("v-flex", {
                    attrs: {
                        "xs12": "",
                        "sm6": "",
                        "d-flex": ""
                    }
                }, [
                    _c("v-select", {
                        attrs: {
                            "items": _vm.items,
                            "dark": true,
                            "label": "Model",
                            "attach": true
                        },
                        on: {
                            "input": _vm.onBIMFileSelected
                        }
                    })
                ], 1),
                _vm._v(" "),
                _vm.displayVersion ? _c("v-flex", {
                    attrs: {
                        "d-flex": "",
                        "xs12": ""
                    }
                }, [
                    _c("v-flex", {
                        attrs: {
                            "d-flex": "",
                            "xs4": ""
                        }
                    }, [
                        _c("v-select", {
                            attrs: {
                                "items": _vm.versionNum,
                                "dark": true,
                                "label": "Nouvelle version",
                                "attach": true
                            },
                            on: {
                                "input": _vm.onPrimaryVersionSelected
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-flex", {
                        attrs: {
                            "d-flex": "",
                            "xs4": ""
                        }
                    }, [
                        _c("v-icon", {
                            staticClass: "compare-icon",
                            attrs: {
                                "large": ""
                            }
                        }, [
                            _vm._v("\n                            compare_arrows\n                        ")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-flex", {
                        attrs: {
                            "d-flex": "",
                            "xs4": ""
                        }
                    }, [
                        _c("v-select", {
                            attrs: {
                                "items": _vm.versionNum,
                                "dark": true,
                                "label": "Anciene version",
                                "attach": true
                            },
                            on: {
                                "input": _vm.onSecondaryVersionSelected
                            }
                        })
                    ], 1)
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.primaryVersion !== 0 && _vm.secondaryVersion !== 0 && !_vm.comparisonDone ? _c("v-flex", [
                    _c("v-btn", {
                        attrs: {
                            "color": "blue"
                        },
                        on: {
                            "click": _vm.compareVersion
                        }
                    }, [
                        _vm._v(" Comparer\n                    ")
                    ])
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.comparisonDone ? _c("v-flex", {
                    attrs: {
                        "d-flex": "",
                        "xs12": ""
                    }
                }, [
                    _c("v-flex", {
                        attrs: {
                            "d-flex": ""
                        }
                    }, [
                        _vm._v("\n                        Nombre object de la premiere version :\n                        " + _vm._s(_vm.primaryExternalIds.length) + "\n                    ")
                    ]),
                    _vm._v(" "),
                    _c("v-flex", {
                        attrs: {
                            "d-flex": ""
                        }
                    }, [
                        _c("div", {
                            staticClass: "empty-space"
                        }, [
                            _vm._v("\n                            test version comment\n                        ")
                        ])
                    ]),
                    _vm._v(" "),
                    _c("v-flex", {
                        attrs: {
                            "d-flex": ""
                        }
                    }, [
                        _vm._v("\n                        Nombre object de la seconde version :\n                        " + _vm._s(_vm.secondaryExternalIds.length) + "\n                    ")
                    ])
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.comparisonDone ? _c("v-flex", {
                    staticClass: "comparison-summary",
                    attrs: {
                        "xs12": ""
                    }
                }, [
                    _vm._v("\n                    Resum\xe9 de comparaison\n                    "),
                    _c("div", [
                        _c("db-ids-selector", {
                            attrs: {
                                "ids": _vm.removedExternalId,
                                "title": "Nombre object supprim\xe9",
                                "model": _vm.secondModel,
                                "typeIds": "removed"
                            },
                            on: {
                                "select": _vm.select,
                                "isolate": _vm.isolate
                            }
                        }),
                        _vm._v(" "),
                        _c("db-ids-selector", {
                            attrs: {
                                "ids": _vm.newExternalIds,
                                "title": "Nombre de nouveaux object",
                                "model": _vm.firstModel,
                                "typeIds": "new"
                            },
                            on: {
                                "select": _vm.select,
                                "isolate": _vm.isolate
                            }
                        })
                    ], 1)
                ]) : _vm._e()
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8uV1q":[function() {},{}],"6RwfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-version.d44c28fc.js.map
