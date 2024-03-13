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
})({"dM5jw":[function(require,module,exports) {
var _buttons = require("./buttons");
var _dialogs = require("./vue/dialogs");
var _panels = require("./vue/panels"); // import spinalNetworkTreeService from "../src/services";
 // export {
 //   spinalNetworkTreeService
 // }
 // export default spinalNetworkTreeService;

},{"./buttons":"6aSFR","./vue/dialogs":"jYdNf","./vue/panels":"8KrWs"}],"6aSFR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBimObjectBtn", ()=>(0, _addElementDefault.default));
parcelHelpers.export(exports, "createNetworkBtn", ()=>(0, _createNetworkDefault.default));
parcelHelpers.export(exports, "createNetworkTreeContextBtn", ()=>(0, _createNetworkContextDefault.default));
parcelHelpers.export(exports, "generateNetworkTreeBtn", ()=>// viewDetailBtn,
    (0, _generateAutomateContextDefault.default));
parcelHelpers.export(exports, "linkProfilBtn", ()=>(0, _linkProfilDefault.default));
parcelHelpers.export(exports, "unlinkProfil", ()=>(0, _unlinkProfilDefault.default));
parcelHelpers.export(exports, "editLinkButton", ()=>(0, _editLinkButtonDefault.default));
parcelHelpers.export(exports, "seeSubItems", ()=>(0, _seeSubItemsDefault.default));
parcelHelpers.export(exports, "linkToGTBNetworkBtn", ()=>(0, _linkToGtbDefault.default));
parcelHelpers.export(exports, "clearAutomateContent", ()=>(0, _clearAutomateContentDefault.default));
var _createNetwork = require("./network_buttons/createNetwork");
var _createNetworkDefault = parcelHelpers.interopDefault(_createNetwork);
var _createNetworkContext = require("./network_buttons/createNetworkContext");
var _createNetworkContextDefault = parcelHelpers.interopDefault(_createNetworkContext);
var _addElement = require("./network_buttons/addElement");
var _addElementDefault = parcelHelpers.interopDefault(_addElement);
var _generateAutomateContext = require("./network_buttons/generateAutomateContext");
var _generateAutomateContextDefault = parcelHelpers.interopDefault(_generateAutomateContext);
var _seeSubItems = require("./network_buttons/seeSubItems");
var _seeSubItemsDefault = parcelHelpers.interopDefault(_seeSubItems);
var _clearAutomateContent = require("./network_buttons/clearAutomateContent");
var _clearAutomateContentDefault = parcelHelpers.interopDefault(_clearAutomateContent);
// import viewDetailBtn from "./network_buttons/tableDetail"
var _linkProfil = require("./link_to_virtual_profil/linkProfil");
var _linkProfilDefault = parcelHelpers.interopDefault(_linkProfil);
var _editLinkButton = require("./link_to_virtual_profil/editLinkButton");
var _editLinkButtonDefault = parcelHelpers.interopDefault(_editLinkButton);
var _unlinkProfil = require("./link_to_virtual_profil/unlinkProfil");
var _unlinkProfilDefault = parcelHelpers.interopDefault(_unlinkProfil);
var _linkToGtb = require("./link_to_gtb_network/linkToGtb");
var _linkToGtbDefault = parcelHelpers.interopDefault(_linkToGtb);

},{"./network_buttons/createNetwork":"jxpoi","./network_buttons/createNetworkContext":"9DNDT","./network_buttons/addElement":"9miSP","./network_buttons/generateAutomateContext":"94AvT","./network_buttons/seeSubItems":"3bTjY","./network_buttons/clearAutomateContent":"aGtdt","./link_to_virtual_profil/linkProfil":"fLrC1","./link_to_virtual_profil/editLinkButton":"YuQQ5","./link_to_virtual_profil/unlinkProfil":"3070x","./link_to_gtb_network/linkToGtb":"3CX9O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxpoi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
// import networkService from "../../services"
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const { spinalPanelManagerService } = require("d1c2ff6c40729dea");
const SIDEBAR = "GraphManagerSideBar";
class CreateNetWork extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Subnetwork", "Create Subnetwork", {
            icon: "device_hub",
            icon_type: "in",
            backgroundColor: "#FF00000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let contextType = option.context.type.get();
        // return Promise.resolve(contextType === networkService.constants.CONTEXT_TYPE ? true : -1);
        return Promise.resolve(contextType === (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE ? true : -1);
    }
    action(option) {
        let dialogParams = {
            title: "Create network",
            label: "Enter name",
            selectedNode: option.selectedNode,
            context: option.context,
            createContext: false
        };
        spinalPanelManagerService.openPanel("createNetworkDialog", dialogParams);
    }
}
const createNetworkBtn = new CreateNetWork();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, createNetworkBtn, [
    3
]);
exports.default = createNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"kHlxv","d1c2ff6c40729dea":"7Uw4d","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHlxv":[function(require,module,exports) {
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

},{}],"9DNDT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("46db2e077e2275aa");
const HEADERBAR = "GraphManagerTopBar";
class CreateNetWorkContext extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Create Network Tree Context", "Create Network Tree Context", {
            icon: "device_hub",
            icon_type: "in",
            backgroundColor: "#FF00000",
            fontColor: "#FFFFFF"
        });
    }
    isShown() {
        return Promise.resolve(true);
    }
    action() {
        let dialogParams = {
            title: "Create network context",
            label: "Enter context name",
            createContext: true
        };
        spinalPanelManagerService.openPanel("createNetworkDialog", dialogParams);
    }
}
const createNetworkContextBtn = new CreateNetWorkContext();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(HEADERBAR, createNetworkContextBtn, [
    3
]);
exports.default = createNetworkContextBtn;

},{"spinal-env-viewer-context-menu-service":"kHlxv","46db2e077e2275aa":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9miSP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
// import ContextGeographicService from "spinal-env-viewer-context-geographic-service";
// import networkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SIDEBAR = "GraphManagerSideBar";
class AddBimObjects extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("add BimObject", "This button adds all elements selected", {
            icon: "post_add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let typeSelected = option.context.type.get();
        // let display = networkTreeService.constants.CONTEXT_TYPE === typeSelected;
        let display = (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE === typeSelected;
        return Promise.resolve(display ? true : -1);
    }
    action(option) {
        const viewer = window.spinal.ForgeViewer.viewer;
        var bimSelected = viewer.getAggregateSelection();
        if (bimSelected.length === 0) {
            alert("select an object");
            return;
        }
        (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).addBimObject(option.context.id.get(), option.selectedNode.id.get(), bimSelected);
    }
}
const addBimObjectBtn = new AddBimObjects();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, addBimObjectBtn, [
    3
]);
exports.default = addBimObjectBtn;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94AvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
// import spinalNetworkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SIDEBAR = "GraphManagerSideBar";
class GenerateAutomateContext extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate automate tree structure", "Generate automate tree structure", {
            icon: "leak_add",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.context.type.get();
        // if (type === spinalNetworkTreeService.constants.CONTEXT_TYPE) return Promise.resolve(true);
        if (type === (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("generateAutomateContextPanel", {
            context: option.context.get(),
            selectedNode: option.selectedNode.get()
        });
    }
}
const generateAutomateContext = new GenerateAutomateContext();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, generateAutomateContext, [
    3
]);
exports.default = generateAutomateContext;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bTjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import spinalNetworkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _lodash = require("lodash");
const SIDEBAR = "GraphManagerSideBar";
const automateWatched = new Map();
class SeeSubItems extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("see sub-items", "See sub-items", {
            icon: "visibility",
            icon_type: "",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        // if (contextType !== spinalNetworkTreeService.constants.CONTEXT_TYPE) return Promise.resolve(-1);
        if (contextType !== (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(-1);
        const id = option.selectedNode.id.get();
        const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(id);
        // if (realNode.hasRelation(spinalNetworkTreeService.constants.NETWORK_BIMOJECT_RELATION, SPINAL_RELATION_PTR_LST_TYPE)) {
        if (realNode.hasRelation((0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) // this.buttonCfg.icon = typeof automateWatched.get(id) === "undefined" ? "visibility" : "visibility_off";
        return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    async action({ selectedNode, context }) {
        const node = selectedNode.get();
        const children = await (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).getBimObjectsLinked(node.id);
        const bims = [
            node,
            ...children.map((el)=>el.get())
        ];
        const ids = [];
        const grouped = _lodash.groupBy(bims, (item)=>item.bimFileId);
        _lodash.forEach(grouped, (value, key)=>{
            ids.push({
                bimFileId: key,
                dbIds: value.map((el)=>el.dbid)
            });
        });
        ids.forEach(({ bimFileId, dbIds })=>{
            const model = spinal.BimObjectService.getModelByBimfile(bimFileId);
            window.spinal.ForgeViewer.viewer.impl.visibilityManager.isolate(dbIds, model);
        });
    }
}
// const convertColorToRGB = (hexColor) => {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// };
// const convertRGBTOVector = (hexColor) => {
//   const rgbColor = convertColorToRGB(hexColor);
//   return rgbColor
//     ? // eslint-disable-next-line no-undef
//       new THREE.Vector4(
//         rgbColor.r / 255,
//         rgbColor.g / 255,
//         rgbColor.b / 255,
//         0.7
//       )
//     : // eslint-disable-next-line no-undef
//       new THREE.Vector4(1, 0, 0, 0);
// };
const seeSubItems = new SeeSubItems();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, seeSubItems, [
    3
]);
exports.default = seeSubItems;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-network-tree-service":"7oQhf","lodash":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGtdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
// import spinalNetworkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SIDEBAR = "GraphManagerSideBar";
class ClearAutomateContent extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Remove Items linked", "Remove Items linked", {
            icon: "leak_remove",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const type = option.selectedNode.type.get();
        // if (contextType === spinalNetworkTreeService.constants.CONTEXT_TYPE) return Promise.resolve(true);
        if (contextType === (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(true);
        return Promise.resolve(-1);
    }
    action(option) {
        // spinalPanelManagerService.openPanel("generateAutomateContextPanel", {
        //    context: option.context.get(),
        //    selectedNode: option.selectedNode.get()
        // });
        const contextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        removeRelation(contextId, nodeId);
    }
}
const removeRelation = async (contextId, nodeId)=>{
    const realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
    // if (realNode.hasRelation(spinalNetworkTreeService.constants.NETWORK_BIMOJECT_RELATION, SPINAL_RELATION_PTR_LST_TYPE)) {
    //    const children = await SpinalGraphService.getChildrenInContext(nodeId, contextId);
    //    await realNode.removeRelation(spinalNetworkTreeService.constants.NETWORK_BIMOJECT_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
    //    return children.map(el => {
    //       return removeRelation(contextId, el.id.get());
    //    })
    // }
    if (realNode.hasRelation((0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
        const children = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(nodeId, contextId);
        await realNode.removeRelation((0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        return children.map((el)=>{
            return removeRelation(contextId, el.id.get());
        });
    }
};
const clearAutomateContent = new ClearAutomateContent();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, clearAutomateContent, [
    3
]);
exports.default = clearAutomateContent;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fLrC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const SIDEBAR = "GraphManagerSideBar";
// import spinalNetworkTreeService from "../../services";
class LinkAutomateToProfil extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("link automate to profile", "link automate to profile", {
            icon: "add_link",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const contextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        if (contextType !== (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(-1);
        if (contextId === nodeId && contextType == (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(true);
        const automate = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const found = [
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_RELATION,
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION
        ].findIndex((el)=>automate.hasRelation(el, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)));
        return Promise.resolve(found);
    }
    async action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkAutomateToProfilDialog", {
            contextId,
            nodeId
        });
    }
}
const linkAutomateToProfil = new LinkAutomateToProfil();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkAutomateToProfil, [
    3
]);
exports.default = linkAutomateToProfil;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YuQQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import utilities from "../../js/utilities";
// import spinalNetworkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
const SIDEBAR = "GraphManagerSideBar";
const editLinkIcon = require("ba8cdd89170c2a8d");
class EditAutomateLink extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Edit link between automate and profile", "Edit link between automate and profile", {
            icon: editLinkIcon,
            icon_type: "src",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    async isShown(option) {
        const contextType = option.context.type.get();
        const serviceContextType = (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE;
        if (contextType !== serviceContextType) return -1;
        const nodeId = option.selectedNode.id.get();
        const profilLinked = await (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).getProfilLinked(nodeId);
        if (typeof profilLinked !== "undefined") return true;
        return -1;
    }
    async action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        // const data = await utilities.getDeviceAndProfilData(nodeId)
        // const data = await LinkNetworkTreeService.getDeviceAndProfilData(nodeId);
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("editAutomateLinkDialog", {
            contextId,
            nodeId
        });
    }
}
const editAutomateLink = new EditAutomateLink();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, editAutomateLink, [
    3
]);
exports.default = editAutomateLink;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","ba8cdd89170c2a8d":"a0MpE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0MpE":[function(require,module,exports) {
module.exports = require("46dae52312fba1a8").getBundleURL("f4stD") + "link-edit.da5cc525.svg";

},{"46dae52312fba1a8":"lgJ39"}],"3070x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
// import spinalNetworkTreeService from "../../services";
// import utilities from "../../js/utilities";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SIDEBAR = "GraphManagerSideBar";
class UnLinkAutomateToProfil extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("unlink automate(s) to profile", "unlink automate(s) to profile", {
            icon: "link_off",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const contextType = option.context.type.get();
        const contextId = option.context.id.get();
        const nodeId = option.selectedNode.id.get();
        if (contextType !== (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(-1);
        if (contextId === nodeId && contextType == (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(true);
        const automate = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        // const hasProfilLinked = automate.hasRelation(utilities.AUTOMATES_TO_PROFILE_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
        // const hasProfilItemLinked = automate.hasRelation(utilities.OBJECT_TO_BACNET_ITEM_RELATION, SPINAL_RELATION_PTR_LST_TYPE);
        // const hasProfilLinked = automate.hasRelation(
        //   CONSTANTS.AUTOMATES_TO_PROFILE_RELATION,
        //   SPINAL_RELATION_PTR_LST_TYPE
        // );
        // const hasProfilItemLinked = automate.hasRelation(
        //   CONSTANTS.OBJECT_TO_BACNET_ITEM_RELATION,
        //   SPINAL_RELATION_PTR_LST_TYPE
        // );
        const found = [
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_RELATION,
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION
        ].findIndex((el)=>automate.hasRelation(el, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)));
        return Promise.resolve(found);
    }
    async action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("confirmUnlikProfilDialog", {
            contextId,
            nodeId
        });
    }
}
const unLinkAutomateToProfil = new UnLinkAutomateToProfil();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, unLinkAutomateToProfil, [
    3
]);
exports.default = unLinkAutomateToProfil;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3CX9O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
// import spinalNetworkTreeService from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const SIDEBAR = "GraphManagerSideBar";
class LinkToGTBNetworkBtn extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("link automate to BMS Devices", "link to BMS network Devices", {
            icon: "settings_input_antenna",
            icon_type: "in",
            backgroundColor: "#FF0000",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        const type = option.selectedNode.type.get();
        const contextType = option.context.type.get();
        // const isAutomate = option.selectedNode.isAutomate && option.selectedNode.isAutomate.get()
        if (contextType !== (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).CONTEXT_TYPE) return Promise.resolve(-1);
        if (type === (0, _constants.BIM_OBJECT_TYPE) && !nodeIsAutomate(option.selectedNode)) return Promise.resolve(-1);
        return Promise.resolve(true);
    }
    async action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        // const isAutomate = option.selectedNode.isAutomate && option.selectedNode.isAutomate.get()
        //   if (option.selectedNode.type.get() === BIM_OBJECT_TYPE) {
        //     automates = [option.selectedNode];
        //   } else {
        //     automates = await SpinalGraphService.getChildren(nodeId, [spinalNetworkTreeService.constants.NETWORK_BIMOJECT_RELATION])
        //   }
        (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("linkToGtbDialog", {
            // automates
            nodeId,
            contextId
        });
    }
}
const nodeIsAutomate = (selectedNode)=>{
    const type = selectedNode.type.get();
    if (type === (0, _constants.BIM_OBJECT_TYPE)) return selectedNode.isAutomate && selectedNode.isAutomate.get();
    return false;
};
const linkToGTBNetworkBtn = new LinkToGTBNetworkBtn();
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp(SIDEBAR, linkToGTBNetworkBtn, [
    3
]);
exports.default = linkToGTBNetworkBtn;

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYdNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _dialogVue = require("./network_dialogs/dialog.vue");
var _dialogVueDefault = parcelHelpers.interopDefault(_dialogVue);
var _linkAutomateToProfilVue = require("./link_to_virtual_profil/linkAutomateToProfil.vue");
var _linkAutomateToProfilVueDefault = parcelHelpers.interopDefault(_linkAutomateToProfilVue);
// import linkDevicesDialog from "./linkDevices.vue";
var _confirmUnlikProfilVue = require("./link_to_virtual_profil/confirmUnlikProfil.vue");
var _confirmUnlikProfilVueDefault = parcelHelpers.interopDefault(_confirmUnlikProfilVue);
var _editLinksDialogVue = require("./link_to_virtual_profil/editLinksDialog.vue");
var _editLinksDialogVueDefault = parcelHelpers.interopDefault(_editLinksDialogVue);
var _personalizedAttributeDialogVue = require("./network_dialogs/personalizedAttributeDialog.vue");
var _personalizedAttributeDialogVueDefault = parcelHelpers.interopDefault(_personalizedAttributeDialogVue);
var _personalizeNamingConventionVue = require("./network_dialogs/personalizeNamingConvention.vue");
var _personalizeNamingConventionVueDefault = parcelHelpers.interopDefault(_personalizeNamingConventionVue);
var _linkToGtbDialogVue = require("./link_to_gtb/linkToGtbDialog.vue");
var _linkToGtbDialogVueDefault = parcelHelpers.interopDefault(_linkToGtbDialogVue);
var _confirmLinkToGTBVue = require("./link_to_gtb/confirmLinkToGTB.vue");
var _confirmLinkToGTBVueDefault = parcelHelpers.interopDefault(_confirmLinkToGTBVue);
const { SpinalMountExtention } = require("638bed06d949a1b3");
const dialogs = [
    {
        name: "createNetworkDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _dialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkAutomateToProfilDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkAutomateToProfilVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "confirmUnlikProfilDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _confirmUnlikProfilVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "editAutomateLinkDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _editLinksDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "personalizedAttributeDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _personalizedAttributeDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "personalizeNamingConvention",
        vueMountComponent: (0, _vueDefault.default).extend((0, _personalizeNamingConventionVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "linkToGtbDialog",
        vueMountComponent: (0, _vueDefault.default).extend((0, _linkToGtbDialogVueDefault.default)),
        parentContainer: document.body
    },
    {
        name: "editLinkToGTBDevice",
        vueMountComponent: (0, _vueDefault.default).extend((0, _confirmLinkToGTBVueDefault.default)),
        parentContainer: document.body
    }
];
for(let index = 0; index < dialogs.length; index++)SpinalMountExtention.mount(dialogs[index]);

},{"vue":"gt5MM","638bed06d949a1b3":"7Uw4d","./network_dialogs/dialog.vue":"9vtlN","./link_to_virtual_profil/linkAutomateToProfil.vue":"kBvGV","./link_to_virtual_profil/confirmUnlikProfil.vue":"8ZYmA","./link_to_virtual_profil/editLinksDialog.vue":"2wvvG","./network_dialogs/personalizedAttributeDialog.vue":"cv8I0","./network_dialogs/personalizeNamingConvention.vue":"1jfCb","./link_to_gtb/linkToGtbDialog.vue":"7NHqZ","./link_to_gtb/confirmLinkToGTB.vue":"UNdYC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vtlN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a2c4a64bf3633af3");
    if (script.__esModule) script = script.default;
    script.render = require("730a130575b76379").render;
    script.staticRenderFns = require("730a130575b76379").staticRenderFns;
    script._scopeId = "data-v-1d6e0b";
    require("eab508ee32b20141").default(script);
    script.__scopeId = "data-v-1d6e0b";
    script.__file = "dialog.vue";
};
initialize();
exports.default = script;

},{"a2c4a64bf3633af3":"2oE1S","730a130575b76379":"dsAjc","eab508ee32b20141":"krXIJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oE1S":[function(require,module,exports) {
// import networkTreeService from "../../../services";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var scriptExports = {
    name: "createNetworkDialog",
    props: [
        "onFinised"
    ],
    data () {
        return {
            showDialog: true,
            inputValue: "",
            title: "",
            label: "",
            createContext: "",
            selectedNode: null,
            context: null
        };
    },
    methods: {
        opened (option) {
            this.title = option.title;
            this.label = option.label;
            this.selectedNode = option.selectedNode;
            this.context = option.context;
            this.createContext = option.createContext;
        },
        removed (option) {
            if (option.closeResult && option.inputValue.trim().length > 0) {
                let name = this.inputValue.trim();
                if (this.createContext) // networkTreeService.createNetworkContext(name);
                (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).createNetworkContext(name);
                else // networkTreeService.addNetwork(
                //    name,
                //    this.selectedNode.id.get(),
                //    this.context.id.get()
                // );
                (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).addNetwork(name, this.selectedNode.id.get(), this.context.id.get());
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

},{"spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsAjc":[function(require,module,exports) {
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
                    _vm._v(_vm._s(_vm.label))
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

},{}],"krXIJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBvGV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("72a2168a0219b34b");
    if (script.__esModule) script = script.default;
    script.render = require("8297c01292c7cd77").render;
    script.staticRenderFns = require("8297c01292c7cd77").staticRenderFns;
    script._scopeId = "data-v-e284e2";
    script.__cssModules = require("4183691c538b8910").default;
    require("394bd612ede59e08").default(script);
    script.__scopeId = "data-v-e284e2";
    script.__file = "linkAutomateToProfil.vue";
};
initialize();
exports.default = script;

},{"72a2168a0219b34b":"cCCxu","8297c01292c7cd77":"3hbFq","4183691c538b8910":"eINFs","394bd612ede59e08":"3bQeM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCCxu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _event = require("spinal-env-viewer-room-manager/js/event");
var _eventDefault = parcelHelpers.interopDefault(_event);
// import deviceProfilService from "../../../js/devices_profil_services";
// import linkAutomateToProfilUtilities from "../../../js/link_utilities/linkAutomateToProfil";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _linkComponentVue = require("../../components/links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var _resultComponentVue = require("../../components/links/resultComponent.vue");
var _resultComponentVueDefault = parcelHelpers.interopDefault(_resultComponentVue);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var scriptExports = {
    name: "dialogComponent",
    components: {
        "link-component": (0, _linkComponentVueDefault.default),
        "result-component": (0, _resultComponentVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.physicalParams;
        this.PAGES = {
            selection: 0,
            result: 1,
            loading: 2,
            creation: 3,
            success: 4,
            error: 5
        };
        // this.validMaps = new Map();
        // this.invalidMaps = new Map();
        return {
            percent: 0,
            resultMaps: new Map(),
            showDialog: true,
            pageSelected: this.PAGES.selection,
            data: [],
            profils: [],
            devices: [],
            contextSelected: undefined,
            profilSelected: undefined,
            deviceSelected: undefined,
            callback: undefined,
            linkResult: []
        };
    },
    mounted () {
        (0, _eventDefault.default).$on("itemCreated", (id)=>{
            this.pageSelected = this.PAGES.loading;
            this.getAllData().then(()=>{
                this.pageSelected = this.PAGES.selection;
            });
        });
    },
    methods: {
        async opened (option) {
            // this.physicalContextId = option.contextId;
            // // this.physicalProfilId = option.nodeId;
            // this.automates = option.automates;
            this.pageSelected = this.PAGES.loading;
            this.callback = option.callback;
            Promise.all([
                this.getAllData(),
                this.getAutomates(option.contextId, option.nodeId)
            ]).then(([data, automates])=>{
                this.physicalParams = {
                    contextId: option.contextId,
                    automates: automates.map((el)=>el.get())
                };
                this.data = data;
                this.updateProfils();
                this.pageSelected = this.PAGES.selection;
            });
        },
        removed (option) {
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        getAutomates (contextId, nodeId) {
            const nodeInfo = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
            if (nodeInfo.type.get() === (0, _constants.BIM_OBJECT_TYPE) && nodeInfo.isAutomate && nodeInfo.isAutomate.get()) return Promise.resolve([
                nodeInfo
            ]);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
                if (node.getType().get() === (0, _constants.BIM_OBJECT_TYPE) && node.info.isAutomate && node.info.isAutomate.get()) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    return true;
                }
                return false;
            });
        },
        async createLinks () {
            this.pageSelected = this.PAGES.creation;
            let isError = false;
            const liste = Array.from(this.resultMaps.keys()).map((key)=>{
                return [
                    key,
                    this.resultMaps.get(key)
                ];
            });
            const listeLength = liste.length;
            while(!isError && liste.length > 0){
                const item = liste.shift();
                if (item) {
                    console.log(item);
                    const [key, value] = item;
                    try {
                        await (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).linkProfilToDevice(key, this.deviceSelected, value.valids);
                        this.percent = Math.floor(100 * (listeLength - liste.length) / listeLength);
                    } catch (err) {
                        console.error(err);
                        isError = true;
                    }
                }
            }
            if (isError) {
                this.pageSelected = this.PAGES.error;
                return;
            }
            this.pageSelected = this.PAGES.success;
        // this.linkNode(liste, this.deviceSelected, liste.length)
        //    .then(() => {
        //       this.pageSelected = this.PAGES.success;
        //    })
        //    .catch((err) => {
        //       console.error(err);
        //       this.pageSelected = this.PAGES.error;
        //    });
        },
        // linkNode(liste, deviceProfilId, listeLength) {
        //    return new Promise((resolve, reject) => {
        //       this.linkNodeRecur(liste, deviceProfilId, listeLength, resolve);
        //    });
        // },
        // linkNodeRecur(liste, deviceProfilId, listeLength, resolve) {
        //    const item = liste.shift();
        //    if (item) {
        //       const [key, value] = item;
        //       // linkAutomateToProfilUtilities
        //       LinkNetworkTreeService.linkProfilToDevice(
        //          key,
        //          deviceProfilId,
        //          value.valids
        //       )
        //          .then(() => {
        //             this.percent = Math.floor(
        //                (100 * (listeLength - liste.length)) / listeLength
        //             );
        //             this.linkNodeRecur(
        //                liste,
        //                deviceProfilId,
        //                listeLength,
        //                resolve
        //             );
        //          })
        //          .catch(() => {
        //             this.percent = Math.floor(
        //                (100 * (listeLength - liste.length)) / listeLength
        //             );
        //             this.linkNodeRecur(
        //                liste,
        //                deviceProfilId,
        //                listeLength,
        //                resolve
        //             );
        //          });
        //    } else {
        //       resolve(true);
        //    }
        // },
        getAllData () {
            // return deviceProfilService
            return (0, _spinalEnvViewerPluginNetworkTreeService.DeviceProfileUtilities).getDeviceContextTreeStructure();
        // .then(
        //    (result) => {
        //       this.data = result;
        //       this.updateProfils();
        //       return;
        //    }
        // );
        },
        disabled () {
            return !(this.contextSelected && this.deviceSelected);
        },
        /* Change Step */ goToPreviousStep () {
            this.pageSelected = this.PAGES.selection;
        },
        goToNext () {
            this.pageSelected = this.PAGES.loading;
            const virtualItems = this.getItemsList(this.deviceSelected);
            return this.createMaps(virtualItems).then(()=>{
                this.pageSelected = this.PAGES.result;
            }).catch((err)=>{
                this.pageSelected = this.PAGES.error;
            });
        },
        createMaps (virtualItems) {
            // return linkAutomateToProfilUtilities
            console.log(this.physicalParams.automates, virtualItems);
            return (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).createMaps(this.physicalParams.automates, virtualItems).then((resultMap)=>{
                this.resultMaps = resultMap;
                this.linkResult = Array.from(resultMap.values());
            });
        },
        /** */ editAutomateLinks (res) {
            const { automateId, value } = res;
            this.resultMaps.set(automateId, value);
            this.linkResult = Array.from(this.resultMaps.values());
        // // if (this.$refs[`result-${res.automateId}`]) {
        // //   const [ref] = this.$refs[`result-${res.automateId}`];
        // //   console.log(ref);
        // //   if (ref) ref.forceRerender();
        // // }
        // const keysIterator = this.resultMaps.keys();
        // let processing = true;
        // let next;
        // do {
        //    next = keysIterator.next().value;
        //    if (typeof next === "undefined") {
        //       processing = false;
        //    } else if (next === res.automateId) {
        //       // console.log(next, res.automateId);
        //       this.resultMaps.set(next, res.value);
        //       // console.log(this.resultMaps);
        //       this.$forceUpdate();
        //       // const reference = this.$refs[`result-${res.automateId}`][0];
        //       // reference.forceRerender();
        //       processing = false;
        //    }
        // } while (processing);
        },
        getItemsList (deviceId) {
            const found = this.devices.find((el)=>el.id === deviceId);
            if (found) return found.itemList;
        },
        /* Selection */ selectContext (id) {
            this.contextSelected = id;
        },
        selectProfil (id) {
            this.profilSelected = id;
        },
        selectDevice (id) {
            this.deviceSelected = id;
        },
        /* Update */ updateProfils () {
            this.categories = [];
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) this.profils = val.profils;
            }
        },
        updateDevices () {
            this.devices = [];
            if (this.profilSelected) {
                let val = this.profils.find((el)=>el.id === this.profilSelected);
                if (val) this.devices = val.devices;
            }
        }
    },
    //   computed: {
    //     linkResult() {
    //       return Array.from(this.resultMaps.values());
    //     },
    //   },
    watch: {
        async contextSelected () {
            await this.updateProfils();
            this.profilSelected = undefined;
        },
        async profilSelected () {
            this.updateDevices();
            this.deviceSelected = undefined;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-room-manager/js/event":"bnFtF","spinal-env-viewer-plugin-network-tree-service":"7oQhf","../../components/links/LinkComponent.vue":"kBSgO","../../components/links/resultComponent.vue":"aKLWk","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnFtF":[function(require,module,exports) {
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

},{}],"kBSgO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("3b6a49e53917825e");
    if (script.__esModule) script = script.default;
    script.render = require("e23aef5cfec5827d").render;
    script.staticRenderFns = require("e23aef5cfec5827d").staticRenderFns;
    script._scopeId = "data-v-be9878";
    script.__cssModules = require("eb83d506f7a51bb1").default;
    require("d7700fef2c73b7d").default(script);
    script.__scopeId = "data-v-be9878";
    script.__file = "LinkComponent.vue";
};
initialize();
exports.default = script;

},{"3b6a49e53917825e":"dtKoa","e23aef5cfec5827d":"16VFD","eb83d506f7a51bb1":"9mv6z","d7700fef2c73b7d":"hM4rq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtKoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkToGroupTemplateVue = require("./linkToGroupTemplate.vue");
var _linkToGroupTemplateVueDefault = parcelHelpers.interopDefault(_linkToGroupTemplateVue);
var scriptExports = {
    name: "selectionComponent",
    props: {
        context_title: {},
        category_title: {},
        group_title: {},
        data: {},
        profils: {},
        devices: {},
        contextSelected: {},
        profilSelected: {},
        deviceSelected: {},
        isAutomate: {
            type: Boolean,
            default: true
        }
    },
    components: {
        "link-template": (0, _linkToGroupTemplateVueDefault.default)
    },
    methods: {
        selectContext (res) {
            this.$emit("selectContext", res);
        },
        selectProfil (res) {
            this.$emit("selectProfil", res);
        },
        selectDevice (res) {
            this.$emit("selectDevice", res);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkToGroupTemplate.vue":"8VZKG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VZKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8d8036b0446a5cb6");
    if (script.__esModule) script = script.default;
    script.render = require("d2b20b9299ffa2b6").render;
    script.staticRenderFns = require("d2b20b9299ffa2b6").staticRenderFns;
    script._scopeId = "data-v-4913a4";
    script.__cssModules = require("19ba773085da12d1").default;
    require("85e321a035b77700").default(script);
    script.__scopeId = "data-v-4913a4";
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"8d8036b0446a5cb6":"aO8tN","d2b20b9299ffa2b6":"gRDPk","19ba773085da12d1":"1SULF","85e321a035b77700":"g3ohP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aO8tN":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRDPk":[function(require,module,exports) {
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
            ])
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

},{}],"1SULF":[function() {},{}],"g3ohP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16VFD":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "selection_container"
    }, [
        _c("div", {
            class: _vm.isAutomate ? "section" : "middle"
        }, [
            _c("link-template", {
                attrs: {
                    "title": _vm.context_title,
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
            class: _vm.isAutomate ? "section" : "middle"
        }, [
            _c("link-template", {
                attrs: {
                    "title": _vm.category_title,
                    "data": _vm.profils,
                    "itemSelected": _vm.profilSelected
                },
                on: {
                    "select": _vm.selectProfil
                }
            })
        ], 1),
        _vm._v(" "),
        _vm.isAutomate ? _c("div", {
            staticClass: "section"
        }, [
            _c("link-template", {
                attrs: {
                    "title": _vm.group_title,
                    "data": _vm.devices,
                    "itemSelected": _vm.deviceSelected
                },
                on: {
                    "select": _vm.selectDevice
                }
            })
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"9mv6z":[function() {},{}],"hM4rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aKLWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("de6241a4a3deaa63");
    if (script.__esModule) script = script.default;
    script.render = require("2f46b156e55c5b92").render;
    script.staticRenderFns = require("2f46b156e55c5b92").staticRenderFns;
    script._scopeId = "data-v-4e3681";
    script.__cssModules = require("fc49dcf1962cf8d8").default;
    require("5081cad7ebe99d6c").default(script);
    script.__scopeId = "data-v-4e3681";
    script.__file = "resultComponent.vue";
};
initialize();
exports.default = script;

},{"de6241a4a3deaa63":"2KEHa","2f46b156e55c5b92":"hWAhN","fc49dcf1962cf8d8":"8vYRF","5081cad7ebe99d6c":"aqdsG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KEHa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
// import Vue from "vue";
// Vue.forceUpdate();
var scriptExports = {
    name: "resultComponent",
    props: {
        // automate: {},
        results: {}
    },
    data () {
        return {
        };
    },
    methods: {
        editLink () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("editAutomateLinkDialog", {
                data: this.results,
                nodeId: this.results.automate.id,
                callback: (dataEdited)=>{
                    console.log("dataEdited", dataEdited);
                    this.$emit("edit", {
                        automateId: this.results.automate.id,
                        value: dataEdited
                    });
                }
            });
        },
        forceRerender () {
            this.$forceUpdate();
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWAhN":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "result_container"
    }, [
        _c("div", {
            directives: [
                {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.results.automate.name,
                    expression: "results.automate.name"
                }
            ],
            staticClass: "title"
        }, [
            _vm._v(_vm._s(_vm.results.automate.name))
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "content"
        }, [
            _c("div", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.results.valids.length + " Items linked",
                        expression: "`${results.valids.length} Items linked`"
                    }
                ],
                staticClass: "valids textDiv"
            }, [
                _c("div", {
                    staticClass: "value"
                }, [
                    _vm._v(_vm._s(_vm.results.valids.length))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "name"
                }, [
                    _vm._v("Items linked")
                ])
            ]),
            _vm._v(" "),
            _c("div", {
                directives: [
                    {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.results.invalidAutomateItems.length + " Items not linked",
                        expression: "`${results.invalidAutomateItems.length} Items not linked`"
                    }
                ],
                staticClass: "invalids textDiv"
            }, [
                _c("div", {
                    staticClass: "value"
                }, [
                    _vm._v(_vm._s(_vm.results.invalidAutomateItems.length))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "name"
                }, [
                    _vm._v("Items not linked")
                ])
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "button"
            }, [
                _c("md-button", {
                    staticClass: "md-raised md-primary",
                    on: {
                        "click": _vm.editLink
                    }
                }, [
                    _vm._v("Edit")
                ])
            ], 1)
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8vYRF":[function() {},{}],"aqdsG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3hbFq":[function(require,module,exports) {
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
            _vm._v("Link Automates to Profil\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("link-component", {
                attrs: {
                    "context_title": "Profils",
                    "category_title": "Categories",
                    "group_title": "Devices",
                    "data": _vm.data,
                    "profils": _vm.profils,
                    "devices": _vm.devices,
                    "contextSelected": _vm.contextSelected,
                    "profilSelected": _vm.profilSelected,
                    "deviceSelected": _vm.deviceSelected
                },
                on: {
                    "selectContext": _vm.selectContext,
                    "selectProfil": _vm.selectProfil,
                    "selectDevice": _vm.selectDevice
                }
            }) : _vm.pageSelected === _vm.PAGES.result ? _c("md-content", {
                staticClass: "results md-scrollbar"
            }, _vm._l(_vm.linkResult, function(item) {
                return _c("result-component", {
                    key: item.automate.id,
                    ref: "result-" + item.automate.id,
                    refInFor: true,
                    staticClass: "result-component",
                    attrs: {
                        "results": item
                    },
                    on: {
                        "edit": _vm.editAutomateLinks
                    }
                });
            }), 1) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "progress-bar"
            }, [
                _c("div", {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c("md-progress-bar", {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _vm.pageSelected === _vm.PAGES.selection ? _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabled()
                },
                on: {
                    "click": _vm.goToNext
                }
            }, [
                _vm._v("Next")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.pageSelected === _vm.PAGES.result ? _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.goToPreviousStep
                }
            }, [
                _vm._v("Previous")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.pageSelected === _vm.PAGES.result ? _c("md-button", {
                staticClass: "md-primary",
                on: {
                    "click": _vm.createLinks
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

},{}],"eINFs":[function() {},{}],"3bQeM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZYmA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e1083561abc860bb");
    if (script.__esModule) script = script.default;
    script.render = require("8fccbbab8a37de33").render;
    script.staticRenderFns = require("8fccbbab8a37de33").staticRenderFns;
    script._scopeId = "data-v-3b500b";
    script.__cssModules = require("6b29dfe7366b61ba").default;
    require("2ede9cda74297d80").default(script);
    script.__scopeId = "data-v-3b500b";
    script.__file = "confirmUnlikProfil.vue";
};
initialize();
exports.default = script;

},{"e1083561abc860bb":"lze6m","8fccbbab8a37de33":"9fzrK","6b29dfe7366b61ba":"ewLoQ","2ede9cda74297d80":"a9Q4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lze6m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _unLinkProfilController = require("../../../js/controllers/links/unLinkProfilController");
var _unLinkProfilControllerDefault = parcelHelpers.interopDefault(_unLinkProfilController);
var scriptExports = {
    name: "confirmUnlikProfilDialog",
    props: [
        "onFinised"
    ],
    data () {
        this.contextId;
        this.nodeId;
        this.STATES = {
            loading: 1,
            normal: 2,
            error: 3,
            success: 4
        };
        return {
            state: this.STATES.normal,
            showDialog: true,
            unLinkAlsoBmsDevice: true
        };
    },
    methods: {
        opened (option) {
            this.contextId = option.contextId;
            this.nodeId = option.nodeId;
        },
        async removeLink () {
            try {
                this.state = this.STATES.loading;
                await (0, _unLinkProfilControllerDefault.default).unLink(this.contextId, this.nodeId, this.unLinkAlsoBmsDevice);
                this.state = this.STATES.success;
            } catch (error) {
                console.error(error);
                this.state = this.STATES.error;
            }
        },
        removed (option) {
            // if (typeof this.callback === "function") {
            //   this.callback(option);
            // }
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/controllers/links/unLinkProfilController":"a6RXH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6RXH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("spinal-env-viewer-plugin-forge/dist/Constants");
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const lodash = require("4ecef499ab371917");
exports.default = {
    async getFloors (contextId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(contextId, [
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_RELATION,
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION
        ]);
    },
    async getContextAutomates (nodeId) {
        const floors = await this.getFloors(nodeId);
        const promises = floors.map((el)=>this.getAutomates(el.id.get()));
        return Promise.all(promises).then((result)=>{
            return lodash.flattenDeep(result);
        });
    },
    async getAutomates (nodeId) {
        const nodeRef = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
        return nodeRef.isAutomate && nodeRef.isAutomate.get() ? [
            nodeRef
        ] : await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
            (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_BIMOJECT_RELATION
        ]);
    },
    async unLink (contextId, nodeId, removeAlsoBmsDevice) {
        let automates = contextId === nodeId ? await this.getContextAutomates(contextId) : await this.getAutomates(nodeId);
        console.log("automates", automates);
        console.log(automates.map((el)=>el.name.get()));
        const promises = automates.map((el)=>{
            try {
                if (el.isAutomate && el.isAutomate.get()) return (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).unLinkDeviceToProfil(el.id.get(), undefined, removeAlsoBmsDevice);
                return (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).unLinkAutomateItemToProfilItem(el.id.get(), undefined, removeAlsoBmsDevice);
            } catch (error) {
                console.error(el.name.get(), error);
            }
        });
        return Promise.all(promises);
    // const automatesArray = automates.map((el) =>
    //   SpinalGraphService.getRealNode(el.id.get())
    // );
    // let counter = 0;
    // while (counter < automatesArray.length) {
    //   const automate = automatesArray[counter];
    //   const automateId = automate.getId().get();
    //   const isAutomate = automate.hasRelation(
    //     CONSTANTS.AUTOMATES_TO_PROFILE_RELATION,
    //     SPINAL_RELATION_PTR_LST_TYPE
    //   );
    //   if (isAutomate) {
    //     await LinkNetworkTreeService.unLinkDeviceToProfil(
    //       automateId,
    //       undefined,
    //       removeAlsoBmsDevice
    //     );
    //     counter++;
    //     continue;
    //   }
    //   const isAutomateItem = automate.hasRelation(
    //     utilities.OBJECT_TO_BACNET_ITEM_RELATION,
    //     SPINAL_RELATION_PTR_LST_TYPE
    //   );
    //   if (isAutomateItem) {
    //     await LinkNetworkTreeService.unLinkAutomateItemToProfilItem(
    //       automateId,
    //       undefined,
    //       removeAlsoBmsDevice
    //     );
    //   }
    // }
    // for (const automate of automatesArray) {
    //   const automateId = automate.getId().get();
    // if (
    //   automate.hasRelation(
    //     CONSTANTS.AUTOMATES_TO_PROFILE_RELATION,
    //     SPINAL_RELATION_PTR_LST_TYPE
    //   )
    // ) {
    //   LinkNetworkTreeService.unLinkDeviceToProfil(
    //     automateId,
    //     undefined,
    //     removeAlsoBmsDevice
    //   );
    // } else if (
    //   automate.hasRelation(
    //     utilities.OBJECT_TO_BACNET_ITEM_RELATION,
    //     SPINAL_RELATION_PTR_LST_TYPE
    //   )
    // ) {
    //   LinkNetworkTreeService.unLinkAutomateItemToProfilItem(
    //     automateId,
    //     undefined,
    //     removeAlsoBmsDevice
    //   );
    // }
    // }
    }
};

},{"spinal-env-viewer-plugin-forge/dist/Constants":"f3Ny6","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-graph-service":"9n7zp","4ecef499ab371917":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fzrK":[function(require,module,exports) {
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
            staticStyle: {
                "text-align": "center"
            }
        }, [
            _vm._v("Unlink Profil")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            _c("div", {
                staticClass: "content"
            }, [
                _vm.state == _vm.STATES.normal ? _c("div", {
                    staticClass: "normal"
                }, [
                    _c("div", [
                        _vm._v("\n          Do you want to delete the profil link ?\n        ")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                        _c("md-checkbox", {
                            staticClass: "md-primary",
                            model: {
                                value: _vm.unLinkAlsoBmsDevice,
                                callback: function($$v) {
                                    _vm.unLinkAlsoBmsDevice = $$v;
                                },
                                expression: "unLinkAlsoBmsDevice"
                            }
                        }, [
                            _vm._v("Remove Also bmsDevices")
                        ])
                    ], 1)
                ]) : _c("div", {
                    staticClass: "state"
                }, [
                    _vm.state == _vm.STATES.loading ? _c("md-progress-spinner", {
                        attrs: {
                            "md-mode": "indeterminate"
                        }
                    }) : _vm.state == _vm.STATES.success ? _c("md-icon", {
                        staticClass: "md-size-5x"
                    }, [
                        _vm._v("done")
                    ]) : _vm.state == _vm.STATES.error ? _c("md-icon", {
                        staticClass: "md-size-5x"
                    }, [
                        _vm._v("error")
                    ]) : _vm._e()
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
                _vm._v("No")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.state != _vm.STATES.normal
                },
                on: {
                    "click": _vm.removeLink
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

},{}],"ewLoQ":[function() {},{}],"a9Q4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wvvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("51ea8705bd1a172b");
    if (script.__esModule) script = script.default;
    script.render = require("6a76f32260b50b06").render;
    script.staticRenderFns = require("6a76f32260b50b06").staticRenderFns;
    script._scopeId = "data-v-4eecf3";
    script.__cssModules = require("63a5c1aa2c3acc54").default;
    require("396da377d6c5f9cd").default(script);
    script.__scopeId = "data-v-4eecf3";
    script.__file = "editLinksDialog.vue";
};
initialize();
exports.default = script;

},{"51ea8705bd1a172b":"dUYd1","6a76f32260b50b06":"9wkCq","63a5c1aa2c3acc54":"dW6Q9","396da377d6c5f9cd":"kGtos","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUYd1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _editLinksVue = require("../../components/links/editLinks.vue");
var _editLinksVueDefault = parcelHelpers.interopDefault(_editLinksVue);
var scriptExports = {
    name: "editLinksDialog",
    props: [
        "onFinised"
    ],
    components: {
        "edit-link": (0, _editLinksVueDefault.default)
    },
    data () {
        this.callback;
        return {
            success: false,
            showDialog: true,
            data: undefined
        };
    },
    methods: {
        async opened (option) {
            if (option.data) {
                console.log("inside data");
                this.data = JSON.parse(JSON.stringify(option.data));
                this.callback = option.callback;
                return;
            }
            // this.data = JSON.parse(JSON.stringify(option.data));
            this.data = await (0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).getDeviceAndProfilData(option.nodeId);
        // this.callback = option.callback;
        },
        async editLink () {
            if (typeof this.callback === "function") {
                console.log("this.callback is a function");
                return this.closeDialog(true);
            }
            const validPromises = this.data.valids.map(({ automateItem, profileItem })=>(0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).linkAutomateItemToProfilItem(automateItem.id, profileItem.id));
            await Promise.all(validPromises);
            const invaliPromises = this.data.invalidAutomateItems.map((el)=>(0, _spinalEnvViewerPluginNetworkTreeService.LinkNetworkTreeService).unLinkAutomateItemToProfilItem(el.id));
            await Promise.all(invaliPromises);
            this.success = true;
        },
        async removed (option) {
            if (option && typeof this.callback === "function") this.callback(this.data);
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-network-tree-service":"7oQhf","../../components/links/editLinks.vue":"jZZ6I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZZ6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a3cc805536391f0d");
    if (script.__esModule) script = script.default;
    script.render = require("2a61a6547201adc3").render;
    script.staticRenderFns = require("2a61a6547201adc3").staticRenderFns;
    script._scopeId = "data-v-ffbf85";
    script.__cssModules = require("68955a3498ac5c38").default;
    require("ec37eaeda824b53e").default(script);
    script.__scopeId = "data-v-ffbf85";
    script.__file = "editLinks.vue";
};
initialize();
exports.default = script;

},{"a3cc805536391f0d":"7vE7C","2a61a6547201adc3":"5G069","68955a3498ac5c38":"8dOBK","ec37eaeda824b53e":"kKzWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7vE7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _editLinksControllers = require("../../../js/controllers/links/editLinksControllers");
var _editLinksControllersDefault = parcelHelpers.interopDefault(_editLinksControllers);
var scriptExports = {
    name: "editLinkComponent",
    props: {
        leftTitle: {},
        rightTitle: {},
        data: {}
    },
    data () {
        return {
            automateItemSelected: undefined,
            profileItemSelected: undefined
        };
    },
    methods: {
        linkItems () {
            let automateItemList = this.data.invalidAutomateItems;
            let profileItemList = this.data.invalidProfileItems;
            const validList = this.data.valids;
            this.data.valids = (0, _editLinksControllersDefault.default).moveItemTovalidList(automateItemList, profileItemList, this.automateItemSelected, this.profileItemSelected, validList);
            this.automateItemSelected = undefined;
            this.profileItemSelected = undefined;
        },
        unLinkItems (automateItemId, profileItemId) {
            let automateItemList = this.data.invalidAutomateItems;
            let profileItemList = this.data.invalidProfileItems;
            const validList = this.data.valids;
            (0, _editLinksControllersDefault.default).removeItemFromValidList(validList, automateItemList, profileItemList, automateItemId, profileItemId).then(({ invalidAutomateItems, invalidProfileItems, validList })=>{
                this.data.invalidAutomateItems = invalidAutomateItems;
                this.data.invalidProfileItems = invalidProfileItems;
                this.data.valids = validList;
            });
        },
        disableLink () {
            return typeof this.automateItemSelected === "undefined" || typeof this.profileItemSelected === "undefined";
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/controllers/links/editLinksControllers":"bfQgq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfQgq":[function(require,module,exports) {
/**
 * ATTENTION
 * Toutes les fonctions du controlleur modifient les listes passées en paramètre
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    moveItemTovalidList (automateItemList, profileItemList, automateItemSelected, profilItemSelected, validList) {
        let automateIndice = automateItemList.findIndex((el)=>el.id === automateItemSelected);
        if (automateIndice == -1) return;
        let profileIndice = profileItemList.findIndex((el)=>el.id === profilItemSelected);
        if (profileIndice == -1) return;
        let automateItemFound = automateItemList[automateIndice];
        let profileItemFound = profileItemList[profileIndice];
        if (automateItemFound && profileItemFound) {
            validList = [
                {
                    automateItem: automateItemFound,
                    profileItem: profileItemFound
                },
                ...validList
            ];
            profileItemList.splice(automateIndice, 1);
            automateItemList.splice(profileIndice, 1);
            return validList;
        }
    },
    async removeItemFromValidList (validList, invalidAutomateItems, invalidProfileItems, automateItemId, profileItemId) {
        let indice = validList.findIndex((item)=>item.automateItem.id === automateItemId && item.profileItem.id === profileItemId);
        if (indice != -1) {
            const found = validList[indice];
            if (found) return {
                invalidAutomateItems: [
                    found.automateItem,
                    ...invalidAutomateItems
                ],
                invalidProfileItems: [
                    found.profileItem,
                    ...invalidProfileItems
                ],
                validList: validList.filter((item)=>item.automateItem.id != automateItemId && item.profileItem.id != profileItemId)
            };
        }
        return {
            invalidAutomateItems,
            invalidProfileItems,
            validList
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5G069":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.data ? _c("div", {
        staticClass: "link_container"
    }, [
        _c("div", {
            staticClass: "links md-scrollbar"
        }, [
            _c("div", {
                staticClass: "title"
            }, [
                _vm._v("Items Linked")
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "content"
            }, _vm._l(_vm.data.valids, function(item, index) {
                return _c("div", {
                    key: index,
                    staticClass: "linkedTemplate"
                }, [
                    _c("div", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: item.automateItem.name,
                                expression: "item.automateItem.name"
                            }
                        ],
                        staticClass: "itemsLinked"
                    }, [
                        _c("span", [
                            _vm._v(_vm._s(item.automateItem.name))
                        ])
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "unlinkButton"
                    }, [
                        _c("md-button", {
                            directives: [
                                {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: "unlink",
                                    expression: "'unlink'"
                                }
                            ],
                            staticClass: "md-icon-button md-raised unlink",
                            on: {
                                "click": function($event) {
                                    return _vm.unLinkItems(item.automateItem.id, item.profileItem.id);
                                }
                            }
                        }, [
                            _c("md-icon", [
                                _vm._v("link_off")
                            ])
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: item.profileItem.name,
                                expression: "item.profileItem.name"
                            }
                        ],
                        staticClass: "itemsLinked"
                    }, [
                        _c("span", [
                            _vm._v(_vm._s(item.profileItem.name))
                        ])
                    ])
                ]);
            }), 0)
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "items"
        }, [
            _c("div", {
                staticClass: "physical_automates"
            }, [
                _c("div", {
                    staticClass: "title"
                }, [
                    _vm._v(_vm._s(_vm.leftTitle))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "lists"
                }, [
                    _vm.data.invalidAutomateItems.length > 0 ? _c("div", {
                        staticClass: "list"
                    }, _vm._l(_vm.data.invalidAutomateItems, function(automateItem) {
                        return _c("div", {
                            directives: [
                                {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: automateItem.name,
                                    expression: "automateItem.name"
                                }
                            ],
                            key: automateItem.id,
                            staticClass: "listItem"
                        }, [
                            _c("md-radio", {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": automateItem.id
                                },
                                model: {
                                    value: _vm.automateItemSelected,
                                    callback: function($$v) {
                                        _vm.automateItemSelected = $$v;
                                    },
                                    expression: "automateItemSelected"
                                }
                            }, [
                                _vm._v("\n               " + _vm._s(automateItem.name) + "\n             ")
                            ])
                        ], 1);
                    }), 0) : _c("div", {
                        staticClass: "allItemsLinked"
                    }, [
                        _vm._v("\n           All items are linked\n         ")
                    ])
                ])
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "linkButton"
            }, [
                _c("md-button", {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: {
                        "disabled": _vm.disableLink()
                    },
                    on: {
                        "click": function($event) {
                            return _vm.linkItems();
                        }
                    }
                }, [
                    _c("md-icon", [
                        _vm._v("add_link")
                    ])
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", {
                staticClass: "virtual_automates"
            }, [
                _c("div", {
                    staticClass: "title"
                }, [
                    _vm._v(_vm._s(_vm.rightTitle))
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "lists"
                }, [
                    _vm.data.invalidProfileItems.length > 0 ? _c("div", {
                        staticClass: "list"
                    }, _vm._l(_vm.data.invalidProfileItems, function(profileItem) {
                        return _c("div", {
                            directives: [
                                {
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: profileItem.name,
                                    expression: "profileItem.name"
                                }
                            ],
                            key: profileItem.id,
                            staticClass: "listItem"
                        }, [
                            _c("md-radio", {
                                staticClass: "md-primary",
                                attrs: {
                                    "value": profileItem.id
                                },
                                model: {
                                    value: _vm.profileItemSelected,
                                    callback: function($$v) {
                                        _vm.profileItemSelected = $$v;
                                    },
                                    expression: "profileItemSelected"
                                }
                            }, [
                                _vm._v("\n               " + _vm._s(profileItem.name) + "\n             ")
                            ])
                        ], 1);
                    }), 0) : _c("div", {
                        staticClass: "allItemsLinked"
                    }, [
                        _vm._v("\n           All items are linked\n         ")
                    ])
                ])
            ])
        ])
    ]) : _c("div", {
        staticClass: "loading"
    }, [
        _vm._v("\n   loading...\n ")
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8dOBK":[function() {},{}],"kKzWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wkCq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "linkerDialogsContent",
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
            _vm._v("Edit Profil Link\n  ")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", [
            !_vm.success ? _c("edit-link", {
                attrs: {
                    "data": _vm.data,
                    "rightTitle": "Profil Items",
                    "leftTitle": "Automate Items"
                }
            }) : _c("div", {
                staticClass: "centered"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
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
                _vm._v("close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.success
                },
                on: {
                    "click": _vm.editLink
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

},{}],"dW6Q9":[function() {},{}],"kGtos":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cv8I0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("779aab3c0d38f4eb");
    if (script.__esModule) script = script.default;
    script.render = require("728ba785e63f9703").render;
    script.staticRenderFns = require("728ba785e63f9703").staticRenderFns;
    script._scopeId = "data-v-c4601c";
    script.__cssModules = require("732a8e6188d94707").default;
    require("f0677dc836896c62").default(script);
    script.__scopeId = "data-v-c4601c";
    script.__file = "personalizedAttributeDialog.vue";
};
initialize();
exports.default = script;

},{"779aab3c0d38f4eb":"jC6e8","728ba785e63f9703":"kzaDq","732a8e6188d94707":"6eZ6H","f0677dc836896c62":"2pugP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jC6e8":[function(require,module,exports) {
// import { PLC_ATTR, OBJECT_ATTR } from "../../../js/attributeConfig";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _flags = require("../../../js/flags");
var _flagsDefault = parcelHelpers.interopDefault(_flags);
var _spinalCodeMirrorVue = require("../../components/code-mirror/SpinalCodeMirror.vue");
var _spinalCodeMirrorVueDefault = parcelHelpers.interopDefault(_spinalCodeMirrorVue);
var _function = require("../../../js/personalized_functions/function");
var _functionDefault = parcelHelpers.interopDefault(_function);
const slashIcon = require("b778441359b5d525");
var scriptExports = {
    name: "personalizedAttributeDialog",
    props: [
        "onFinised"
    ],
    components: {
        "spinal-code-mirror": (0, _spinalCodeMirrorVueDefault.default)
    },
    data () {
        this.callback;
        this.flagsList = (0, _flagsDefault.default);
        this.PCL_ATTR = (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).PLC_ATTR;
        this.OBJECT_ATTR = (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR;
        this.slashIcon = slashIcon;
        return {
            useRegex: true,
            showDialog: true,
            regexValue: {
                select: this.OBJECT_ATTR,
                text: "",
                flags: []
            },
            functionValue: {
                code: (0, _functionDefault.default)
            }
        };
    },
    methods: {
        opened (option) {
            if (option.isPersonalized) {
                this.useRegex = option.attribute.isRegex;
                if (this.useRegex) {
                    this.regexValue.text = option.attribute.text;
                    this.regexValue.flags = option.attribute.flags;
                    this.regexValue.select = option.attribute.select;
                } else this.functionValue.code = option.attribute.callback;
            }
            this.callback = option.callback;
        },
        removed (option) {
            if (option.closeResult) {
                if (typeof this.callback === "function") {
                    if (this.useRegex) this.callback(this.useRegex, this.regexValue);
                    else this.callback(this.useRegex, this.functionValue);
                }
            }
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

},{"spinal-env-viewer-plugin-network-tree-service":"7oQhf","../../../js/flags":"inSQ5","../../components/code-mirror/SpinalCodeMirror.vue":"9RF72","../../../js/personalized_functions/function":"7hX8H","b778441359b5d525":"2ZkKJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inSQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        name: "global",
        value: "g",
        description: "Don't return after first match"
    },
    {
        name: "Multi line",
        value: "m",
        description: "^ and $ match start/end of line"
    },
    {
        name: "Insensitive",
        value: "i",
        description: "Case insensitive match"
    },
    {
        name: "unicode",
        value: "u",
        description: "Match with full unicode"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9RF72":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a01cb652e226c527");
    if (script.__esModule) script = script.default;
    script.render = require("6cf183a77759acb8").render;
    script.staticRenderFns = require("6cf183a77759acb8").staticRenderFns;
    script._scopeId = "data-v-787510";
    script.__cssModules = require("9fe5f60dbadd6d9f").default;
    require("ba29e279f3f9e303").default(script);
    script.__scopeId = "data-v-787510";
    script.__file = "SpinalCodeMirror.vue";
};
initialize();
exports.default = script;

},{"a01cb652e226c527":"gPLqM","6cf183a77759acb8":"jAov1","9fe5f60dbadd6d9f":"kjpb3","ba29e279f3f9e303":"jWDCp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPLqM":[function(require,module,exports) {
// import dedent from "dedent";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueCodemirror = require("vue-codemirror");
// language
var _javascript = require("codemirror/mode/javascript/javascript");
// theme css
// import "codemirror/theme/monokai.css";
// require active-line
var _activeLine = require("codemirror/addon/selection/active-line");
// styleSelectedText
var _markSelection = require("codemirror/addon/selection/mark-selection");
var _searchcursor = require("codemirror/addon/search/searchcursor");
// hint
var _showHint = require("codemirror/addon/hint/show-hint");
// import "codemirror/addon/hint/show-hint.css";
var _javascriptHint = require("codemirror/addon/hint/javascript-hint");
// highlightSelectionMatches
var _annotatescrollbar = require("codemirror/addon/scroll/annotatescrollbar");
var _matchesonscrollbar = require("codemirror/addon/search/matchesonscrollbar");
var _matchHighlighter = require("codemirror/addon/search/match-highlighter");
// keyMap
var _clike = require("codemirror/mode/clike/clike");
var _matchbrackets = require("codemirror/addon/edit/matchbrackets");
var _comment = require("codemirror/addon/comment/comment");
var _dialog = require("codemirror/addon/dialog/dialog");
var _search = require("codemirror/addon/search/search");
var _sublime = require("codemirror/keymap/sublime");
// foldGutter
// import "codemirror/addon/fold/foldgutter.css";
var _braceFold = require("codemirror/addon/fold/brace-fold");
var _commentFold = require("codemirror/addon/fold/comment-fold");
var _foldcode = require("codemirror/addon/fold/foldcode");
var _foldgutter = require("codemirror/addon/fold/foldgutter");
var _indentFold = require("codemirror/addon/fold/indent-fold");
var _markdownFold = require("codemirror/addon/fold/markdown-fold");
var _xmlFold = require("codemirror/addon/fold/xml-fold");
var scriptExports = {
    name: "SpinalCodeMirror",
    components: {
        codemirror: (0, _vueCodemirror.codemirror)
    },
    props: {
        codeObj: {}
    },
    data () {
        return {
            // code: this.codeObj.code,
            cmOption: {
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                // styleSelectedText: false,
                line: true,
                // foldGutter: true,
                lineWrapping: true,
                gutters: [
                    "CodeMirror-linenumbers",
                    "CodeMirror-foldgutter"
                ],
                // highlightSelectionMatches: {
                //    showToken: /\w/,
                //    annotateScrollbar: true,
                // },
                mode: "text/javascript",
                // hint.js options
                hintOptions: {
                    completeSingle: false
                },
                keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: "monokai",
                extraKeys: {
                    "Ctrl-Space": "autocomplete"
                }
            }
        };
    },
    mounted () {
    // setTimeout(() => {
    //    (this.styleSelectedText = true),
    //       (this.cmOption.styleActiveLine = true);
    // }, 1800);
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"vue-codemirror":"avd3d","codemirror/mode/javascript/javascript":"6YWC8","codemirror/addon/selection/active-line":"cUu2f","codemirror/addon/selection/mark-selection":"aTwo9","codemirror/addon/search/searchcursor":"5LZeT","codemirror/addon/hint/show-hint":"i59ce","codemirror/addon/hint/javascript-hint":"69sna","codemirror/addon/scroll/annotatescrollbar":"dqF5T","codemirror/addon/search/matchesonscrollbar":"6axA6","codemirror/addon/search/match-highlighter":"ep4wi","codemirror/mode/clike/clike":"2HhSs","codemirror/addon/edit/matchbrackets":"fNcgb","codemirror/addon/comment/comment":"6b2Hy","codemirror/addon/dialog/dialog":"k1Qcs","codemirror/addon/search/search":"a81NO","codemirror/keymap/sublime":"bjKP1","codemirror/addon/fold/brace-fold":"bBZ8N","codemirror/addon/fold/comment-fold":"4TN95","codemirror/addon/fold/foldcode":"X0E3X","codemirror/addon/fold/foldgutter":"2v6kd","codemirror/addon/fold/indent-fold":"cRLCr","codemirror/addon/fold/markdown-fold":"j14BT","codemirror/addon/fold/xml-fold":"gYEyJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAov1":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("codemirror", {
        attrs: {
            "options": _vm.cmOption
        },
        model: {
            value: _vm.codeObj.code,
            callback: function($$v) {
                _vm.$set(_vm.codeObj, "code", $$v);
            },
            expression: "codeObj.code"
        }
    });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kjpb3":[function() {},{}],"jWDCp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hX8H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
exports.default = (0, _dedentDefault.default)`
   /**
   *   1 - Don't change the function name and parameters
   *   2 - This function must return a boolean
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */

   function elementIsControlled(automateAttrValue, elementAttrValue) {
      const automateAttrValueSplited = automateAttrValue.split("-");
      const elementAttrValueSplited = elementAttrValue.split("-");
      const aut_substr = automateAttrValueSplited[0] + "-" + automateAttrValueSplited[1] + "-" + automateAttrValueSplited[automateAttrValueSplited.length - 1];
      const elm_substr = elementAttrValueSplited[0] + "-" + elementAttrValueSplited[1] + "-" + elementAttrValueSplited[elementAttrValueSplited.length - 1];


      const substr = aut_substr.toString().replace(/.$/,'');
      const regex = new RegExp(substr + '[1-9]$');

      return elm_substr.toString().match(regex) ? true : false
   }` /*
`
   function elementIsControlled(automateAttrValue, elementAttrValue) {

      const automateSubstr = automateAttrValue.substring(0, automateAttrValue.length);
      const elementSubstr = elementAttrValue.substring(0, elementAttrValue.length);

      if(automateSubstr === elementSubstr) {
         const autEnd = automateAttrValue[automateAttrValue.length];
         const elementEnd = elementAttrValue[elementAttrValue.length];

         return  elementEnd > autEnd
      }

      return false
   }
`

*/ ;

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZkKJ":[function(require,module,exports) {
module.exports = require("eb516bb0f3c27efe").getBundleURL("f4stD") + "slash.8ad850e2.svg";

},{"eb516bb0f3c27efe":"lgJ39"}],"kzaDq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "personalizedDialog",
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
            staticClass: "personalizedDialogTitle"
        }, [
            _vm._v("Personnalize attribute")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "personalizedDialogContent"
        }, [
            _c("div", {
                staticClass: "radios"
            }, [
                _c("div", {
                    staticClass: "radio"
                }, [
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": true
                        },
                        model: {
                            value: _vm.useRegex,
                            callback: function($$v) {
                                _vm.useRegex = $$v;
                            },
                            expression: "useRegex"
                        }
                    }, [
                        _vm._v("Use regex")
                    ])
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "radio"
                }, [
                    _c("div", {
                        staticClass: "radio"
                    }, [
                        _c("md-radio", {
                            staticClass: "md-primary",
                            attrs: {
                                "value": false
                            },
                            model: {
                                value: _vm.useRegex,
                                callback: function($$v) {
                                    _vm.useRegex = $$v;
                                },
                                expression: "useRegex"
                            }
                        }, [
                            _vm._v("Use Function")
                        ])
                    ], 1)
                ])
            ]),
            _vm._v(" "),
            _vm.useRegex ? _c("div", [
                _c("div", [
                    _c("div", [
                        _c("md-subheader", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("use " + _vm._s(" '" + _vm.PCL_ATTR + "' ") + " to represente PLC attribute value")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("div", [
                        _c("md-subheader", {
                            staticClass: "md-primary"
                        }, [
                            _vm._v("use " + _vm._s(" '" + _vm.OBJECT_ATTR + "' ") + " to represente Object controlled attribute value")
                        ])
                    ], 1)
                ]),
                _vm._v(" "),
                _c("md-list", {
                    staticClass: "regex _content"
                }, [
                    _c("md-list-item", [
                        _c("div", {
                            staticClass: "md-layout-item md-size-35"
                        }, [
                            _c("md-field", [
                                _c("label"),
                                _vm._v(" "),
                                _c("md-select", {
                                    attrs: {
                                        "id": "vertical"
                                    },
                                    model: {
                                        value: _vm.regexValue.select,
                                        callback: function($$v) {
                                            _vm.$set(_vm.regexValue, "select", $$v);
                                        },
                                        expression: "regexValue.select"
                                    }
                                }, [
                                    _c("md-option", {
                                        attrs: {
                                            "value": _vm.PCL_ATTR
                                        }
                                    }, [
                                        _vm._v("PCL Attribute Value")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-option", {
                                        attrs: {
                                            "value": _vm.OBJECT_ATTR
                                        }
                                    }, [
                                        _vm._v("Object controlled Attribute Value")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "md-layout-item md-size-20",
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [
                            _vm._v("\n                  must match with\n               ")
                        ]),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "md-layout-item md-size-35"
                        }, [
                            _c("md-field", [
                                _c("md-icon", {
                                    attrs: {
                                        "md-src": _vm.slashIcon
                                    }
                                }),
                                _vm._v(" "),
                                _c("label", [
                                    _vm._v("Your regex")
                                ]),
                                _vm._v(" "),
                                _c("md-input", {
                                    attrs: {
                                        "disabled": !_vm.useRegex
                                    },
                                    model: {
                                        value: _vm.regexValue.text,
                                        callback: function($$v) {
                                            _vm.$set(_vm.regexValue, "text", $$v);
                                        },
                                        expression: "regexValue.text"
                                    }
                                }),
                                _vm._v(" "),
                                _c("md-icon", {
                                    attrs: {
                                        "md-src": _vm.slashIcon
                                    }
                                })
                            ], 1)
                        ], 1)
                    ]),
                    _vm._v(" "),
                    _c("md-list-item", [
                        _c("md-field", {
                            staticClass: "_mdField"
                        }, [
                            _c("label", [
                                _vm._v("Flags")
                            ]),
                            _vm._v(" "),
                            _c("md-select", {
                                attrs: {
                                    "disabled": !_vm.useRegex,
                                    "name": "flags",
                                    "id": "flags",
                                    "md-dense": "",
                                    "multiple": ""
                                },
                                model: {
                                    value: _vm.regexValue.flags,
                                    callback: function($$v) {
                                        _vm.$set(_vm.regexValue, "flags", $$v);
                                    },
                                    expression: "regexValue.flags"
                                }
                            }, _vm._l(_vm.flagsList, function(flag, index) {
                                return _c("md-option", {
                                    key: index,
                                    attrs: {
                                        "value": flag.value
                                    }
                                }, [
                                    _vm._v(_vm._s(flag.name))
                                ]);
                            }), 1)
                        ], 1)
                    ], 1)
                ], 1)
            ], 1) : _c("div", {
                staticClass: "function _content"
            }, [
                _c("spinal-code-mirror", {
                    staticClass: "editorContainer",
                    attrs: {
                        "codeObj": _vm.functionValue
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

},{}],"6eZ6H":[function() {},{}],"2pugP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jfCb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc0e0d0f79207d13");
    if (script.__esModule) script = script.default;
    script.render = require("d8c4f1237e014116").render;
    script.staticRenderFns = require("d8c4f1237e014116").staticRenderFns;
    script._scopeId = "data-v-b4b423";
    script.__cssModules = require("54b9128f4b62bdbe").default;
    require("9d41ccc06d40f597").default(script);
    script.__scopeId = "data-v-b4b423";
    script.__file = "personalizeNamingConvention.vue";
};
initialize();
exports.default = script;

},{"cc0e0d0f79207d13":"dphKi","d8c4f1237e014116":"2TpVN","54b9128f4b62bdbe":"eoD4o","9d41ccc06d40f597":"jDQl7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dphKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalCodeMirrorVue = require("../../components/code-mirror/SpinalCodeMirror.vue");
var _spinalCodeMirrorVueDefault = parcelHelpers.interopDefault(_spinalCodeMirrorVue);
var _namingConventionFunction = require("../../../js/personalized_functions/naming_convention_function");
var _namingConventionFunctionDefault = parcelHelpers.interopDefault(_namingConventionFunction);
var scriptExports = {
    name: "PersonalizeNamingConvention",
    props: [
        "onFinised"
    ],
    components: {
        "spinal-code-mirror": (0, _spinalCodeMirrorVueDefault.default)
    },
    data () {
        this.callback;
        return {
            showDialog: true,
            functionValue: {
                code: (0, _namingConventionFunctionDefault.default)
            }
        };
    },
    methods: {
        opened (option) {
            if (!option.config.useAttrValue) this.functionValue.code = option.config.personalized.callback;
            this.callback = option.callback;
        },
        removed (option) {
            if (option.closeResult) {
                if (typeof this.callback === "function") this.callback(this.functionValue.code);
            }
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

},{"../../components/code-mirror/SpinalCodeMirror.vue":"9RF72","../../../js/personalized_functions/naming_convention_function":"66lbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66lbR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
exports.default = (0, _dedentDefault.default)`
   /**
   *   1 - Don't change the function name and parameters
   *   2 - This function must return a String (the naming convention)
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */

   function getNamingConvention(attributeValue) {
      const attributeSplitted = attributeValue.split('-');
      const before = attributeSplitted[attributeSplitted.length - 2];
      const last = attributeSplitted[attributeSplitted.length - 1];

      if(before && last) return before + "_" + last[last.length - 1];

      return attributeValue
   }

`;

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TpVN":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "personalizedDialog",
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
            staticClass: "personalizedDialogTitle"
        }, [
            _vm._v("Personnalize Naming convention")
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "personalizedDialogContent"
        }, [
            _c("div", {
                staticClass: "function _content"
            }, [
                _c("spinal-code-mirror", {
                    staticClass: "editorContainer",
                    attrs: {
                        "codeObj": _vm.functionValue
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

},{}],"eoD4o":[function() {},{}],"jDQl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NHqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fdfb3938b9337504");
    if (script.__esModule) script = script.default;
    script.render = require("5d1d6b1e34c98bbc").render;
    script.staticRenderFns = require("5d1d6b1e34c98bbc").staticRenderFns;
    script._scopeId = "data-v-60f96f";
    script.__cssModules = require("563e79239cd0905").default;
    require("5d4605d094161727").default(script);
    script.__scopeId = "data-v-60f96f";
    script.__file = "linkToGtbDialog.vue";
};
initialize();
exports.default = script;

},{"fdfb3938b9337504":"jFZxu","5d1d6b1e34c98bbc":"jXEsW","563e79239cd0905":"3w9WR","5d4605d094161727":"1UOpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFZxu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _linkBimToBmsControllers = require("../../../js/controllers/links/linkBimToBmsControllers");
var _linkBimToBmsControllersDefault = parcelHelpers.interopDefault(_linkBimToBmsControllers);
// import linkAutomateToBmsDeviceUtilities from "../../../js/link_utilities/linkAutomateToBmsDevice";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _networkService = require("../../../js/network/networkService");
var _networkServiceDefault = parcelHelpers.interopDefault(_networkService);
var _linkComponentVue = require("../../components/links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
var _confirmLinkToGTBVue = require("./confirmLinkToGTB.vue");
var _confirmLinkToGTBVueDefault = parcelHelpers.interopDefault(_confirmLinkToGTBVue);
var _configurationVue = require("../../components/links/configuration.vue");
var _configurationVueDefault = parcelHelpers.interopDefault(_configurationVue);
var _replaceBy = require("../../../js/personalized_functions/replace_by");
var _replaceByDefault = parcelHelpers.interopDefault(_replaceBy);
var _replaceBy1 = require("../../../js/personalized_functions/replace-by");
var _replaceByDefault1 = parcelHelpers.interopDefault(_replaceBy1);
// import { SpinalForgeViewer } from "spinal-env-viewer-plugin-forge";
const lodash = require("b4023b48d2f02f34");
var scriptExports = {
    name: "linkToGtbDialog",
    components: {
        "link-component": (0, _linkComponentVueDefault.default),
        "confirm-link": (0, _confirmLinkToGTBVueDefault.default),
        "configuration-template": (0, _configurationVueDefault.default)
    },
    props: [
        "onFinised"
    ],
    data () {
        this.PAGES = {
            selection: 0,
            configuration: 1,
            result: 2,
            creation: 3,
            loading: 4,
            success: 5,
            error: 6
        };
        this.bimDevices = [];
        this.contextId;
        this.nodeId;
        this.callback = undefined;
        return {
            configuration: {
                bimData: {
                    property: "CFA_Rep\xe8re d'\xe9quipement",
                    useFunction: false,
                    callback: {
                        code: (0, _replaceByDefault1.default)
                    }
                },
                bmsData: {
                    property: "name",
                    useFunction: false,
                    callback: {
                        code: (0, _replaceByDefault.default)
                    }
                },
                useTheseAttributes: false
            },
            percent: 0,
            title: "",
            result: undefined,
            showDialog: true,
            pageSelected: this.PAGES.selection,
            isAutomate: false,
            data: [],
            networks: [],
            devices: [],
            contextSelected: undefined,
            networkSelected: undefined,
            deviceSelected: undefined
        };
    },
    methods: {
        opened (option) {
            this.pageSelected = this.PAGES.loading;
            this.contextId = option.contextId;
            this.nodeId = option.nodeId;
            this.isAutomate = option.isAutomate;
            this.loadData().then((result)=>{
                this.updateNetworks();
                this.title = "Select context, subnetwork or the bms device";
                this.pageSelected = this.PAGES.selection;
            }).catch((err)=>{
                console.error(err);
                this.pageSelected = this.PAGES.error;
            });
        // this.getDeviceContextTreeStructure()
        //   .then(async () => {
        //     this.title = "Select context, subnetwork or the bms device";
        //     this.bimDevices = await this._getAutomates(
        //       this.nodeId,
        //       this.contextId,
        //       this.isAutomate
        //     );
        //     this.pageSelected = this.PAGES.selection;
        //   })
        //   .catch((err) => {
        //     this.pageSelected = this.PAGES.error;
        //   });
        },
        removed (save) {
            save;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        async createLink () {
            this.pageSelected = this.PAGES.creation;
            return (()=>{
                if (!this.configuration.useTheseAttributes) return this._useProfileToLink();
                return this._useAttributeToLink();
            })().then(()=>{
                this.pageSelected = this.PAGES.success;
            }).catch((err)=>{
                console.error(err);
                this.pageSelected = this.PAGES.error;
            });
        },
        _useProfileToLink () {
            return (0, _linkBimToBmsControllersDefault.default).createLinkBetweenBimAndBms(this.contextSelected, this.result.valids, this.percent);
        },
        _useAttributeToLink () {
            return (0, _linkBimToBmsControllersDefault.default).createLinkBetweenBimAndBmsUsingAttribute(this.contextSelected, this.result.valids, this.percent);
        },
        loadData () {
            const bmsTreeProm = (0, _linkBimToBmsControllersDefault.default).getBmsDevicesContextTreeStructure();
            const automateBimsProm = (0, _linkBimToBmsControllersDefault.default).getAutomateBims(this.nodeId, this.contextId);
            return Promise.all([
                bmsTreeProm,
                automateBimsProm
            ]).then(([data, automatesBims])=>{
                this.data = data;
                this.bimDevices = automatesBims;
            });
        },
        goToNext () {
            const currentPage = this.pageSelected;
            this.pageSelected = this.PAGES.loading;
            switch(currentPage){
                case this.PAGES.selection:
                    this._goToConfiguration();
                    break;
                case this.PAGES.configuration:
                    this._getResult().catch((error)=>{
                        console.error(error);
                        this.pageSelected = this.PAGES.error;
                    });
                    break;
                default:
                    break;
            }
        },
        goToPrevious () {
            const currentPage = this.pageSelected;
            this.pageSelected = this.PAGES.loading;
            switch(currentPage){
                case this.PAGES.result:
                    this.pageSelected = this.PAGES.configuration;
                    break;
                case this.PAGES.configuration:
                    this.pageSelected = this.PAGES.selection;
                    break;
                default:
                    break;
            }
        },
        _goToConfiguration () {
            this.title = "Configuration";
            this.pageSelected = this.PAGES.configuration;
        },
        async _getResult () {
            this.title = "Edit Link";
            // const bmsDevices = await this._getBmsDevicesProperties(
            //   this.configuration.bmsData.property
            // );
            // const bimDevices = await this.getElementProperties(
            //   this.bimDevices,
            //   this.configuration.bimData.property
            // );
            const bmsAttributeName = this.configuration.bmsData.property;
            const bimAttributeName = this.configuration.bimData.property;
            const listObj = {
                devices: this.devices,
                networks: this.networks,
                tree: this.data
            };
            (0, _linkBimToBmsControllersDefault.default).getLinkResultBetweenBimAndBms(bmsAttributeName, this.contextSelected, this.networkSelected, this.deviceSelected, listObj, this.bimDevices, bimAttributeName, this.configuration).then((res)=>{
                this.pageSelected = this.PAGES.result;
                this.result = res;
            }).catch((err)=>{
                console.error(err);
                this.pageSelected = this.PAGES.err;
            });
        },
        // _getBmsDevicesProperties(attributeName) {
        //   const devices = this._getBmsDevices();
        //   return linkBimToBmsControllers._getBmsDevicesProperties(
        //     attributeName,
        //     devices
        //   );
        // },
        // _getBmsDevices() {
        //   if (typeof this.deviceSelected !== "undefined") {
        //     return this.devices.filter((el) => el.id === this.deviceSelected);
        //   } else if (typeof this.networkSelected !== "undefined") {
        //     const found = this.networks.find(
        //       (el) => el.id === this.networkSelected
        //     );
        //     return found && found.devices ? found.devices : [];
        //   } else if (typeof this.contextSelected !== "undefined") {
        //     const devices = [];
        //     const found = this.data.find((el) => el.id === this.contextSelected);
        //     if (found && found.networks) {
        //       for (const network of found.networks) {
        //         if (network.devices) {
        //           devices.push(...network.devices);
        //         }
        //       }
        //     }
        //     return devices;
        //   }
        // },
        // _formatBimProperty(bim) {
        //   if (this.configuration.bimData.useFunction) {
        //     return this._formatValue(
        //       bim.property.displayValue,
        //       this.configuration.bimData.callback.code
        //     );
        //   }
        //   return bim.property.displayValue;
        // },
        // _formatBmsProperty(bms) {
        //   if (this.configuration.bmsData.useFunction) {
        //     return this._formatValue(
        //       bms.property.displayValue,
        //       this.configuration.bmsData.callback.code
        //     );
        //   }
        //   return bms.property.displayValue;
        // },
        // _formatValue(value, callback) {
        //   return eval(`(${callback})('${value}')`);
        // },
        // will be change
        // getElementProperties(argItems, attributeName) {
        //   const dbIdMap = new Map();
        //   const promises = argItems.map(async (el) => {
        //     const fileName = spinal.spinalGraphService
        //       .getInfo(el.bimFileId)
        //       .name.get();
        //     const model = window.spinal.BimObjectService.getModelByName(fileName);
        //     if (!model) throw "make sure your load all scene";
        //     el.property = await AttributesUtilities.findAttribute(
        //       model,
        //       el.dbid,
        //       attributeName
        //     );
        //     return el;
        //   });
        //   try {
        //     return Promise.all(promises).then((result) => {
        //       return {
        //         validItems: result.filter((el) => el.property),
        //         invalidItems: result.filter((el) => !el.property),
        //       };
        //     });
        //   } catch (error) {
        //     throw error;
        //   }
        // },
        // _getItemPropertiesFormatted(model, itemList, attributeName, nodeId) {
        //    const promises = itemList.map(async (el) => {
        //       el.model = model;
        //       el.property = this._getAttributeByName(
        //          el.properties,
        //          attributeName
        //       );
        //       return el;
        //    });
        //    return Promise.all(promises);
        // },
        // _getAttributeByName(properties, propertyName) {
        //    return properties.find((obj) => {
        //       return (
        //          (obj.displayName === propertyName ||
        //             obj.attributeName === propertyName) &&
        //          obj.displayValue &&
        //          (obj.displayValue + "").length > 0
        //       );
        //    });
        // },
        /* Selection */ selectContext (id) {
            this.contextSelected = id;
        },
        selectNetwork (id) {
            this.networkSelected = id;
        },
        selectDevice (id) {
            this.deviceSelected = id;
        },
        /* Update */ updateNetworks () {
            this.networks = [];
            if (this.contextSelected) {
                let val = this.data.find((el)=>el.id === this.contextSelected);
                if (val) this.networks = val.networks;
            }
        },
        updateDevices () {
            this.devices = [];
            if (this.networkSelected) {
                let val = this.networks.find((el)=>el.id === this.networkSelected);
                if (val) this.devices = val.devices;
            }
        },
        /* Disabled */ disabledPreviousButton () {
            return this.pageSelected === this.PAGES.loading || this.pageSelected === this.PAGES.selection || this.pageSelected === this.PAGES.success;
        },
        disabledNextButton () {
            /* !this.contextSelected || */ return this.isAutomate && !this.deviceSelected || // !this.networkSelected ||
            !this.contextSelected || this.pageSelected === this.PAGES.loading || this.pageSelected === this.PAGES.result || this.pageSelected === this.PAGES.success;
        },
        disabledLinkButton () {
            return this.pageSelected === this.PAGES.loading || this.pageSelected !== this.PAGES.result || this.pageSelected === this.PAGES.success || this.pageSelected === this.PAGES.error;
        }
    },
    watch: {
        async contextSelected () {
            await this.updateNetworks();
            this.networkSelected = undefined;
        },
        async networkSelected () {
            this.updateDevices();
            this.deviceSelected = undefined;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/controllers/links/linkBimToBmsControllers":"TvwTx","spinal-env-viewer-plugin-network-tree-service":"7oQhf","../../../js/network/networkService":"hs5g2","../../components/links/LinkComponent.vue":"kBSgO","./confirmLinkToGTB.vue":"UNdYC","../../components/links/configuration.vue":"dyEHh","../../../js/personalized_functions/replace_by":"dWyo6","../../../js/personalized_functions/replace-by":"k55R4","b4023b48d2f02f34":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TvwTx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _networkService = require("../../network/networkService");
var _networkServiceDefault = parcelHelpers.interopDefault(_networkService);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
exports.default = {
    getBmsDevicesContextTreeStructure () {
        return (0, _networkServiceDefault.default).getDeviceContextTreeStructure();
    },
    getAutomateBims (nodeId, contextId) {
        const nodeRef = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(nodeId);
        if (nodeRef.isAutomate && nodeRef.isAutomate.get()) return [
            nodeRef.get()
        ];
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(nodeId, contextId, (node)=>{
            if (node.info.isAutomate && node.info.isAutomate.get()) {
                (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                return true;
            }
            return false;
        }).then((result)=>{
            return result.map((el)=>el.get());
        });
    },
    async createLinkBetweenBimAndBms (bmsContextId, validResultList, percent) {
        console.log("use profile");
        const listeLength = validResultList.length;
        let isError = false;
        let counter = 0;
        while(!isError && listeLength > counter){
            const { profileItem, automateItem } = validResultList[counter];
            console.log(profileItem, automateItem);
            if (profileItem && automateItem) try {
                await (0, _spinalEnvViewerPluginNetworkTreeService.LinkBmsDeviceService).LinkBmsDeviceToBimDevices(bmsContextId, profileItem.id, automateItem.id);
                counter++;
                percent = Math.floor(100 * counter / listeLength);
            } catch (error) {
                console.error(error);
                counter++;
            // isError = true;
            }
        }
    },
    async createLinkBetweenBimAndBmsUsingAttribute (bmsContextId, validResultList, percent) {
        const listeLength = validResultList.length;
        let isError = false;
        let counter = 0;
        while(!isError && listeLength > counter){
            const { profileItem, automateItem } = validResultList[counter];
            if (profileItem && automateItem) try {
                const bmsConfig = {
                    contextId: bmsContextId,
                    deviceId: profileItem.id,
                    attribute: {
                        attributeName: profileItem.property.attributeName,
                        categoryName: profileItem.property.categoryName
                    }
                };
                const bimConfig = {
                    nodeId: automateItem.id,
                    model: window.spinal.BimObjectService.getModelByBimfile(automateItem.bimFileId),
                    attribute: {
                        attributeName: automateItem.property.attributeName,
                        categoryName: automateItem.property.categoryName
                    }
                };
                await (0, _spinalEnvViewerPluginNetworkTreeService.LinkBmsDeviceService).LinkBmsDeviceToBimDevicesUsingAttribute(bmsConfig, bimConfig);
                counter++;
                percent = Math.floor(100 * counter / listeLength);
            } catch (error) {
                console.error(error);
                counter++;
            // isError = true;
            }
        }
    },
    getLinkResultBetweenBimAndBms (bmsAttributeName, contextSelected, networkSelected, deviceSelected, listObj, bimAutomates, bimAttributeName, configuration) {
        return this.getProperties(bmsAttributeName, contextSelected, networkSelected, deviceSelected, listObj, bimAutomates, bimAttributeName).then(([bmsDevices, bimDevices])=>{
            const res = {
                valids: [],
                invalidAutomateItems: [
                    ...bimDevices.invalidItems
                ],
                invalidProfileItems: []
            };
            const { bimData, bmsData } = configuration;
            const bmsDeviceObj = this.transFormToObj(bmsDevices, bmsData.useFunction, bmsData.callback.code);
            for (const bim of bimDevices.validItems){
                const bimPropValue = this._formatProperty(bim.property.displayValue, bimData.useFunction, bimData.callback.code);
                let found = bmsDeviceObj[bimPropValue];
                if (found) {
                    delete bmsDeviceObj[bimPropValue];
                    res.valids.push({
                        automateItem: bim,
                        profileItem: found
                    });
                } else res.invalidAutomateItems.push(bim);
            }
            const keys = Object.keys(bmsDeviceObj);
            res.invalidProfileItems = keys.map((key)=>bmsDeviceObj[key]);
            return res;
        }).catch((err)=>{
            throw err;
        });
    },
    getProperties (bmsAttributeName, contextSelected, networkSelected, deviceSelected, listObj, bimAutomates, bimAttributeName) {
        const bmsPropsProm = this._getBmsDevicesProperties(bmsAttributeName, contextSelected, networkSelected, deviceSelected, listObj);
        const bimPropsProm = this._getAutomateBimProperties(bimAutomates, bimAttributeName);
        return Promise.all([
            bmsPropsProm,
            bimPropsProm
        ]);
    },
    _getBmsDevicesProperties (attributeName, contextSelected, networkSelected, deviceSelected, listObj) {
        const bmsDevices = this._findDevices(contextSelected, networkSelected, deviceSelected, listObj);
        const promises = bmsDevices.map(async (el)=>{
            el.property = await (0, _spinalEnvViewerPluginNetworkTreeService.AttributesUtilities).findSpinalAttributeById(el.id, attributeName);
            return el;
        });
        return Promise.all(promises);
    },
    _findDevices (contextSelected, networkSelected, deviceSelected, listObj) {
        const nodeId = deviceSelected || networkSelected || contextSelected;
        if (nodeId === deviceSelected) return listObj.devices.filter((el)=>el.id === nodeId);
        else if (nodeId === networkSelected) {
            const found = listObj.networks.find((el)=>el.id === nodeId);
            return found && found.devices ? found.devices : [];
        } else if (nodeId === contextSelected) {
            const devices = [];
            const found = listObj.tree.find((el)=>el.id === nodeId);
            if (found && found.networks) {
                for (const network of found.networks)if (network.devices) devices.push(...network.devices);
            }
            return devices;
        }
    },
    _getAutomateBimProperties (bimAutomates, attributeName) {
        const promises = bimAutomates.map(async (el)=>{
            //   const fileName = spinal.spinalGraphService
            //     .getInfo(el.bimFileId)
            //     .name.get();
            const { bimFileId, dbid, id } = el;
            const model = window.spinal.BimObjectService.getModelByBimfile(bimFileId);
            // if (!model) throw "make sure you load all scene";
            el.property = await (0, _spinalEnvViewerPluginNetworkTreeService.AttributesUtilities).findAttribute(model, dbid, attributeName, id);
            return el;
        });
        try {
            return Promise.all(promises).then((result)=>{
                return {
                    validItems: result.filter((el)=>el.property),
                    invalidItems: result.filter((el)=>!el.property)
                };
            });
        } catch (error) {
            throw error;
        }
    },
    _formatProperty (propertyValue, useFunction, callback) {
        if (useFunction) return this._formatValue(propertyValue, callback);
        return propertyValue;
    },
    _formatValue (value, callback) {
        return eval(`(${callback})('${value}')`);
    },
    transFormToObj (liste, useFunction, callback) {
        const obj = {};
        for (const item of liste){
            const prop = this._formatProperty(item.property.displayValue, useFunction, callback);
            obj[prop] = item;
        }
        return obj;
    // bmsDevices.find((el, i) => {
    //   if (el.property) {
    //     const bmsPropValue = console.log(bimPropValue, bmsPropValue);
    //     if (bmsPropValue == bimPropValue) {
    //       index = i;
    //       return true;
    //     }
    //   }
    //   return false;
    // });
    }
};

},{"spinal-env-viewer-graph-service":"9n7zp","../../network/networkService":"hs5g2","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-model-bmsnetwork":"gzkbg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hs5g2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalModelBacnet = require("spinal-model-bacnet");
const CONTEXT_TYPE = "Network";
exports.default = {
    getDeviceContextTreeStructure () {
        const contexts = this.getContexts().map((el)=>el.info.get());
        const promises = contexts.map(async (context)=>{
            const networks = await this.getNetwork(context.id);
            const promises2 = networks.map(async (network)=>{
                const devices = await this.getDevices(network.id);
                network.devices = devices;
                return network;
            });
            context.networks = await Promise.all(promises2);
            return context;
        });
        return Promise.all(promises);
    },
    getContexts () {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType(CONTEXT_TYPE);
    },
    async getNetwork (contextId) {
        // return SpinalGraphService.getChildren(contextId, SpinalBmsNetwork.relationName).then((result) => {
        //    return result.map(el => el.get())
        // })
        const networks = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(contextId, contextId);
        const promises = networks.map((el)=>{
            if (el.type.get() === (0, _spinalModelBacnet.SpinalOrganConfigModel).TYPE) return this.getNetworkFromOrgan(el.id.get());
            return Promise.resolve(el);
        });
        return Promise.all(promises).then((result)=>{
            return result.flat().map((el)=>el.get());
        });
    },
    getNetworkFromOrgan (organId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(organId, (0, _spinalModelBmsnetwork.SpinalBmsNetwork).relationName);
    //  const promises = organs.map((el) =>
    // SpinalGraphService.getChildren(el.id.get(), SpinalBmsNetwork.relationName)
    //  );
    //  return Promise.all(promises).then((result) => {
    //    return result.flat().map((el) => el.get());
    //  });
    },
    getDevices (networkId) {
        return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(networkId, (0, _spinalModelBmsnetwork.SpinalBmsDevice).relationName).then((result)=>{
            return result.map((el)=>el.get());
        });
    }
};

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-model-bacnet":"fxyeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"UNdYC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9024f698fc9732ab");
    if (script.__esModule) script = script.default;
    script.render = require("dd29c38949f2f735").render;
    script.staticRenderFns = require("dd29c38949f2f735").staticRenderFns;
    script._scopeId = "data-v-555609";
    script.__cssModules = require("3966c533931dbc3f").default;
    require("5532f6928b5262dc").default(script);
    script.__scopeId = "data-v-555609";
    script.__file = "confirmLinkToGTB.vue";
};
initialize();
exports.default = script;

},{"9024f698fc9732ab":"cfMDS","dd29c38949f2f735":"90Emf","3966c533931dbc3f":"lcZuH","5532f6928b5262dc":"2Jf0J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfMDS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _editLinksVue = require("../../components/links/editLinks.vue");
var _editLinksVueDefault = parcelHelpers.interopDefault(_editLinksVue);
var scriptExports = {
    name: "editLinkToGTBDevice",
    props: {
        data: {}
    },
    components: {
        "edit-link": (0, _editLinksVueDefault.default)
    },
    data () {
        return {};
    },
    mounted () {
    // console.log("mounted");
    // this.data = this._getResult(option.bmsDevices, option.bimDevices);
    },
    methods: {
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../components/links/editLinks.vue":"jZZ6I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"90Emf":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "linkerDialogsContent"
    }, [
        _c("edit-link", {
            attrs: {
                "data": _vm.data,
                "rightTitle": "BMS devices",
                "leftTitle": "BIM devices"
            }
        })
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"lcZuH":[function() {},{}],"2Jf0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyEHh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2185b1bd6c17c1ec");
    if (script.__esModule) script = script.default;
    script.render = require("298ed84a989a440a").render;
    script.staticRenderFns = require("298ed84a989a440a").staticRenderFns;
    script._scopeId = "data-v-079095";
    script.__cssModules = require("4fc3099cf12646ad").default;
    require("e60a990dc63c6143").default(script);
    script.__scopeId = "data-v-079095";
    script.__file = "configuration.vue";
};
initialize();
exports.default = script;

},{"2185b1bd6c17c1ec":"bizYF","298ed84a989a440a":"9ByRa","4fc3099cf12646ad":"iBCxS","e60a990dc63c6143":"jjMoM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bizYF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
var _spinalCodeMirrorVue = require("../../components/code-mirror/SpinalCodeMirror.vue");
var _spinalCodeMirrorVueDefault = parcelHelpers.interopDefault(_spinalCodeMirrorVue);
var scriptExports = {
    name: "configurationTemplate",
    props: {
        bimData: {},
        bmsData: {},
        properties: {}
    },
    components: {
        "spinal-code-mirror": (0, _spinalCodeMirrorVueDefault.default)
    },
    data () {
        return {
            bmsProperties: []
        };
    },
    mounted () {
        this.bmsProperties = this.getBmsProperties();
    },
    methods: {
        getBmsProperties () {
            // const device = new SpinalBmsDevice();
            // return device._attribute_names.map((element) => ({
            //    name: element,
            //    value: element,
            // }));
            return [
                {
                    name: "Device ID",
                    value: "id"
                },
                {
                    name: "Device Name",
                    value: "name"
                },
                {
                    name: "IP address",
                    value: "address"
                },
                {
                    name: "Mac address",
                    value: "hostId"
                }
            ];
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-bmsnetwork":"gzkbg","../../components/code-mirror/SpinalCodeMirror.vue":"9RF72","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ByRa":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "config_content"
    }, [
        _c("div", {
            staticClass: "useThese"
        }, [
            _c("md-checkbox", {
                staticClass: "md-primary",
                model: {
                    value: _vm.properties.useTheseAttributes,
                    callback: function($$v) {
                        _vm.$set(_vm.properties, "useTheseAttributes", $$v);
                    },
                    expression: "properties.useTheseAttributes"
                }
            }, [
                _vm._v("\n      Use also these configurations to link subItems")
            ])
        ], 1),
        _vm._v(" "),
        _c("div", {
            staticClass: "_container"
        }, [
            _c("div", {
                staticClass: "subcontent"
            }, [
                _c("div", {
                    staticClass: "title"
                }, [
                    _vm._v("BMS Attribute")
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "content"
                }, [
                    _c("div", {
                        staticClass: "div_select"
                    }, [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("BMS Property")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.bmsData.property,
                                    callback: function($$v) {
                                        _vm.$set(_vm.bmsData, "property", $$v);
                                    },
                                    expression: "bmsData.property"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "div_code"
                    }, [
                        _c("div", {
                            staticClass: "checkbox_div"
                        }, [
                            _c("md-checkbox", {
                                staticClass: "md-primary",
                                model: {
                                    value: _vm.bmsData.useFunction,
                                    callback: function($$v) {
                                        _vm.$set(_vm.bmsData, "useFunction", $$v);
                                    },
                                    expression: "bmsData.useFunction"
                                }
                            }, [
                                _vm._v("Use function to format\n              value")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _vm.bmsData.useFunction ? _c("div", {
                            staticClass: "text_editor"
                        }, [
                            _c("spinal-code-mirror", {
                                staticClass: "editorContainer",
                                attrs: {
                                    "codeObj": _vm.bmsData.callback
                                }
                            })
                        ], 1) : _vm._e()
                    ])
                ])
            ]),
            _vm._v(" "),
            _c("div", {
                staticClass: "subcontent"
            }, [
                _c("div", {
                    staticClass: "title"
                }, [
                    _vm._v("BIM Attribute")
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "content"
                }, [
                    _c("div", {
                        staticClass: "div_select"
                    }, [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("BIM Property")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.bimData.property,
                                    callback: function($$v) {
                                        _vm.$set(_vm.bimData, "property", $$v);
                                    },
                                    expression: "bimData.property"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "div_code"
                    }, [
                        _c("div", {
                            staticClass: "checkbox_div"
                        }, [
                            _c("md-checkbox", {
                                staticClass: "md-primary",
                                model: {
                                    value: _vm.bimData.useFunction,
                                    callback: function($$v) {
                                        _vm.$set(_vm.bimData, "useFunction", $$v);
                                    },
                                    expression: "bimData.useFunction"
                                }
                            }, [
                                _vm._v("Use function to format\n              value")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _vm.bimData.useFunction ? _c("div", {
                            staticClass: "text_editor"
                        }, [
                            _c("spinal-code-mirror", {
                                staticClass: "editorContainer",
                                attrs: {
                                    "codeObj": _vm.bimData.callback
                                }
                            })
                        ], 1) : _vm._e()
                    ])
                ])
            ])
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"iBCxS":[function() {},{}],"jjMoM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWyo6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
exports.default = (0, _dedentDefault.default)`
   /**
   *   1 - Don't change the function name and parameters
   *   2 - This function must return a String (the naming convention)
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */

   function formatAttributeValue(attributeValue) {
      return attributeValue.replaceAll('_', '-');
   }

`;

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k55R4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dedent = require("dedent");
var _dedentDefault = parcelHelpers.interopDefault(_dedent);
exports.default = (0, _dedentDefault.default)`
   /**
   *   1 - Don't change the function name and parameters
   *   2 - This function must return a String (the naming convention)
   *   3 - Change function content to match with your test
   *   4 - All your code must be inside the function
   */

   function formatAttributeValue(attributeValue) {
      return attributeValue.replaceAll('-', '_');
   }

`;

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXEsW":[function(require,module,exports) {
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
            _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c("md-dialog-content", {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c("link-component", {
                attrs: {
                    "context_title": "Contexts",
                    "category_title": "Subnetworks",
                    "group_title": "Bms devices",
                    "data": _vm.data,
                    "profils": _vm.networks,
                    "devices": _vm.devices,
                    "contextSelected": _vm.contextSelected,
                    "profilSelected": _vm.networkSelected,
                    "deviceSelected": _vm.deviceSelected,
                    "isAutomate": _vm.isAutomate
                },
                on: {
                    "selectContext": _vm.selectContext,
                    "selectProfil": _vm.selectNetwork,
                    "selectDevice": _vm.selectDevice
                }
            }) : _vm.pageSelected === _vm.PAGES.configuration ? _c("configuration-template", {
                attrs: {
                    "properties": _vm.configuration,
                    "bimData": _vm.configuration.bimData,
                    "bmsData": _vm.configuration.bmsData
                }
            }) : _vm.pageSelected === _vm.PAGES.result ? _c("confirm-link", {
                attrs: {
                    "data": _vm.result
                }
            }) : _vm.pageSelected === _vm.PAGES.loading ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-progress-spinner", {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c("div", {
                staticClass: "state"
            }, [
                _c("md-icon", {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.creation ? _c("div", {
                staticClass: "progress-bar"
            }, [
                _c("div", {
                    staticClass: "percent-number"
                }, [
                    _vm._v(_vm._s(_vm.percent) + " %")
                ]),
                _vm._v(" "),
                _c("md-progress-bar", {
                    staticClass: "percent-bar",
                    attrs: {
                        "md-mode": "buffer",
                        "md-value": _vm.percent
                    }
                })
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
                _vm._v("Close")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledPreviousButton()
                },
                on: {
                    "click": _vm.goToPrevious
                }
            }, [
                _vm._v("Previous")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledNextButton()
                },
                on: {
                    "click": _vm.goToNext
                }
            }, [
                _vm._v("Next")
            ]),
            _vm._v(" "),
            _c("md-button", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": _vm.disabledLinkButton()
                },
                on: {
                    "click": _vm.createLink
                }
            }, [
                _vm._v("Link")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3w9WR":[function() {},{}],"1UOpq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KrWs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _generateAutomateContextVue = require("./generateAutomateContext.vue");
var _generateAutomateContextVueDefault = parcelHelpers.interopDefault(_generateAutomateContextVue);
var _detailPanelVue = require("./detailPanel.vue");
var _detailPanelVueDefault = parcelHelpers.interopDefault(_detailPanelVue);
const panels = [
    {
        name: "generateAutomateContextPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _generateAutomateContextVueDefault.default)),
        panel: {
            title: "Generate Automate",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    },
    {
        name: "networkTreeDetailPanel",
        vueMountComponent: (0, _vueDefault.default).extend((0, _detailPanelVueDefault.default)),
        panel: {
            title: "Network tree detail panel",
            closeBehaviour: "hide"
        },
        style: {
            height: "475px",
            left: "400px"
        }
    }
];
for (const element of panels){
    const panelExtension = (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).createExtention(element);
    (0, _spinalEnvViewerPanelManagerServiceSpinalforgeextention.SpinalForgeExtention).registerExtention(element.name, panelExtension);
}

},{"vue":"gt5MM","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","./generateAutomateContext.vue":"lRrca","./detailPanel.vue":"7Bntk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mGHd":[function(require,module,exports) {
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

},{}],"lRrca":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("190a58d92390aa68");
    if (script.__esModule) script = script.default;
    script.render = require("84571788a217ffac").render;
    script.staticRenderFns = require("84571788a217ffac").staticRenderFns;
    script._scopeId = "data-v-44dddf";
    script.__cssModules = require("8c19a545434bfbe3").default;
    require("ac78cafaf4bc9de5").default(script);
    script.__scopeId = "data-v-44dddf";
    script.__file = "generateAutomateContext.vue";
};
initialize();
exports.default = script;

},{"190a58d92390aa68":"5to0f","84571788a217ffac":"pNumE","8c19a545434bfbe3":"6SwsO","ac78cafaf4bc9de5":"fjMB5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5to0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configurationStepVue = require("../components/steps/configurationStep.vue");
var _configurationStepVueDefault = parcelHelpers.interopDefault(_configurationStepVue);
var _launchStepVue = require("../components/steps/launchStep.vue");
var _launchStepVueDefault = parcelHelpers.interopDefault(_launchStepVue);
var _selectionStepVue = require("../components/steps/selectionStep.vue");
var _selectionStepVueDefault = parcelHelpers.interopDefault(_selectionStepVue);
var _namingConventionStepVue = require("../components/steps/namingConventionStep.vue");
var _namingConventionStepVueDefault = parcelHelpers.interopDefault(_namingConventionStepVue);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
// import { OBJECT_ATTR } from "../../js/attributeConfig";
var scriptExports = {
    name: "heatmapPanel",
    components: {
        "configuration-step": (0, _configurationStepVueDefault.default),
        "launch-generation-step": (0, _launchStepVueDefault.default),
        "selection-step": (0, _selectionStepVueDefault.default),
        "naming-convention-step": (0, _namingConventionStepVueDefault.default)
    },
    data () {
        return {
            changed: false,
            active: "first",
            first: false,
            second: false,
            third: false,
            firstStepError: false,
            errorInConfig: null,
            contextId: "",
            selectedNodeId: "",
            data: {
                objAutomate: {
                    attributeName: "CFA_Rep\xe8re d'\xe9quipement",
                    // attributeName: "CFA_Code équipement",
                    items: []
                },
                objEquipment: {
                    attributeName: "CFA_Rep\xe8re d'\xe9quipement",
                    // attributeName: "CFA_Code équipement",
                    items: []
                },
                attribute: {
                    isRegex: true,
                    text: "",
                    flags: [],
                    select: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR,
                    callback: ()=>{}
                },
                namingConvention: {
                    attributeName: "CFA_Rep\xe8re d'\xe9quipement",
                    useAttrValue: true,
                    personalized: {
                        callback: ()=>{}
                    }
                }
            },
            errors: {
                firstStep: {
                    error: false,
                    message: ""
                },
                secondStep: {
                    error: false,
                    message: ""
                },
                thirdStep: {
                    error: false,
                    message: ""
                }
            }
        };
    },
    methods: {
        async opened (option) {
            this.contextId = option.context.id;
            this.selectedNodeId = option.selectedNode.id;
        },
        closed () {},
        clearAutomates () {
            this.data.objAutomate.items = [];
            this.changed = true;
        },
        clearEquipments () {
            this.data.objEquipment.items = [];
            this.changed = true;
        },
        errorInFirstStep () {
            this.errorInConfig = "This is an error!";
        },
        changeStep (step) {}
    },
    computed: {
    },
    watch: {
        attribute_attributeName () {
            this.changed = true;
        },
        attribute_separator () {
            this.changed = true;
        },
        attribute_indice () {
            this.changed = true;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../components/steps/configurationStep.vue":"5Kx8o","../components/steps/launchStep.vue":"bNWNR","../components/steps/selectionStep.vue":"a33Vw","../components/steps/namingConventionStep.vue":"xRrKE","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Kx8o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ca9be650d0c3b6dc");
    if (script.__esModule) script = script.default;
    script.render = require("298ffae9827df5fb").render;
    script.staticRenderFns = require("298ffae9827df5fb").staticRenderFns;
    script._scopeId = "data-v-fb7293";
    script.__cssModules = require("63e6991408ee2d15").default;
    require("3626fe00e4bce521").default(script);
    script.__scopeId = "data-v-fb7293";
    script.__file = "configurationStep.vue";
};
initialize();
exports.default = script;

},{"ca9be650d0c3b6dc":"dR4Qf","298ffae9827df5fb":"j54EP","63e6991408ee2d15":"5Aleg","3626fe00e4bce521":"cg9Ev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dR4Qf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _attributeConfig = require("../../../js/attributeConfig");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var scriptExports = {
    name: "configuration",
    props: {
        // data: {},
        // automateObj: {},
        // equipmentObj: {},
        attribute: {}
    },
    data () {
        this.radios = (0, _attributeConfig.DEFAULT_VALUES);
        return {
            attributeConfigSelected: "",
            isLoaded: true
        };
    },
    methods: {
        refresh () {
            this.isLoaded = false;
            setTimeout(()=>{
                this.isLoaded = true;
            }, 300);
        },
        // goToNext() {
        //   this.$emit("next", { id: "first", index: "second" });
        // }
        personalized () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("personalizedAttributeDialog", {
                isPersonalized: this.attributeConfigSelected == -1,
                attribute: this.attribute,
                callback: (useRegex, res)=>{
                    this.attributeConfigSelected = -1;
                    this.attribute.isRegex = useRegex;
                    if (useRegex) {
                        this.attribute.text = res.text;
                        this.attribute.flags = res.flags;
                        this.attribute.select = res.select;
                    } else {
                        this.attribute.text = "";
                        this.attribute.flags = [];
                        this.attribute.select = "";
                        this.attribute.callback = res.code;
                    }
                }
            });
        }
    },
    watch: {
        attributeConfigSelected () {
            console.log("attributeConfigSelected", this.attributeConfigSelected);
            if (this.attributeConfigSelected > -1) {
                const found = this.radios.find((el)=>el.id == this.attributeConfigSelected);
                this.attribute.isRegex = true;
                this.attribute.text = found.value;
                this.attribute.flags = found.flags || [];
                this.attribute.select = found.select;
            }
            this.$emit("changed");
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../../../js/attributeConfig":"48fYz","spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48fYz":[function(require,module,exports) {
// export const PLC_ATTR = 'PLC';
// export const OBJECT_ATTR = 'OBJ';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_VALUES", ()=>DEFAULT_VALUES);
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
const DEFAULT_VALUES = Object.freeze([
    {
        id: 0,
        name: "Object controlled attribute value must contains PLC attribute value",
        isRegex: true,
        select: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR,
        value: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).PLC_ATTR,
        flags: [
            "i"
        ]
    },
    {
        id: 1,
        name: "Object controlled attribute value must starts with the PLC attribute value",
        isRegex: true,
        select: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR,
        value: `^${(0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).PLC_ATTR}`,
        flags: [
            "i"
        ]
    },
    {
        id: 2,
        name: "Object controlled attribute value must equal to the PLC attribute value",
        isRegex: true,
        select: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR,
        value: `^${(0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).PLC_ATTR}$`,
        flags: [
            "i"
        ]
    },
    {
        id: 3,
        name: "Object controlled attribute value must ends with the PLC attribute value",
        isRegex: true,
        select: (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).OBJECT_ATTR,
        value: `${(0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).PLC_ATTR}$`,
        flags: [
            "i"
        ]
    }
]);

},{"spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j54EP":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "_container"
    }, [
        _vm.isLoaded ? _c("div", {
            staticClass: "content"
        }, [
            _c("md-list", {
                staticClass: "radios"
            }, [
                _vm._l(_vm.radios, function(item, index) {
                    return _c("md-list-item", {
                        directives: [
                            {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: item.name,
                                expression: "item.name"
                            }
                        ],
                        key: index
                    }, [
                        _c("md-radio", {
                            staticClass: "md-primary",
                            attrs: {
                                "value": item.id
                            },
                            model: {
                                value: _vm.attributeConfigSelected,
                                callback: function($$v) {
                                    _vm.attributeConfigSelected = $$v;
                                },
                                expression: "attributeConfigSelected"
                            }
                        }, [
                            _vm._v(_vm._s(item.name))
                        ])
                    ], 1);
                }),
                _vm._v(" "),
                _c("md-list-item", [
                    _c("md-radio", {
                        staticClass: "md-primary",
                        attrs: {
                            "value": -1,
                            "disabled": true
                        },
                        model: {
                            value: _vm.attributeConfigSelected,
                            callback: function($$v) {
                                _vm.attributeConfigSelected = $$v;
                            },
                            expression: "attributeConfigSelected"
                        }
                    }, [
                        _c("a", {
                            on: {
                                "click": _vm.personalized
                            }
                        }, [
                            _vm._v("Personalized")
                        ])
                    ])
                ], 1)
            ], 2)
        ], 1) : _c("div", {
            staticClass: "loading"
        }, [
            _vm._v("loading...")
        ])
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"5Aleg":[function() {},{}],"cg9Ev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNWNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2a6ba8de5eac1de9");
    if (script.__esModule) script = script.default;
    script.render = require("509024ffde84d942").render;
    script.staticRenderFns = require("509024ffde84d942").staticRenderFns;
    script._scopeId = "data-v-b8d3b7";
    script.__cssModules = require("e1f1ebbd48ff2d2a").default;
    require("3bb7ddc847b19957").default(script);
    script.__scopeId = "data-v-b8d3b7";
    script.__file = "launchStep.vue";
};
initialize();
exports.default = script;

},{"2a6ba8de5eac1de9":"fWuA4","509024ffde84d942":"fPfVo","e1f1ebbd48ff2d2a":"8hYHY","3bb7ddc847b19957":"iC12f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWuA4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// // import { SpinalGraphService } from "spinal-env-viewer-graph-service";
// import generateAutomateService from "../../../js/generateAutomateService";
// import spinalNetworkTreeService from "../../../services/index";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var scriptExports = {
    name: "launchGeneration",
    props: {
        automatesObj: {},
        equipmentsObj: {},
        attribute: {},
        error: {},
        contextId: {},
        selectedNodeId: {},
        changed: {},
        namingConvention: {}
    },
    data () {
        this.STATES = {
            loading: 1,
            normal: 2,
            creation: 3,
            success: 4,
            error: 5
        };
        // this.automatesVerificationResult = {};
        // this.equipementsVerificationResult = {};
        this.tree = [];
        return {
            percent: 0,
            verified: false,
            valueGrouped: null,
            appState: this.STATES.normal,
            validItems: [],
            invalidItems: [],
            dontCreateEmptyAutomate: true,
            classify: {
                class: true,
                by: "Niveau"
            }
        };
    },
    methods: {
        async launchVerification () {
            this.appState = this.STATES.loading;
            this.formatData().then(({ automatesProperties, equipementsProperties })=>{
                return (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).createTree(automatesProperties, equipementsProperties, this.attribute).then(({ tree, invalids, valids })=>{
                    this.tree = tree;
                    this.validItems = valids;
                    this.invalidItems = invalids;
                    this.verified = true;
                    this.appState = this.STATES.normal;
                    this.$emit("verified");
                });
            // this.automatesVerificationResult = result.automatesProperties;
            // this.equipementsVerificationResult = result.equipementsProperties;
            //    this.verified = true;
            //    this.appState = this.STATES.normal;
            //    this.$emit("verified");
            });
        },
        async launchGeneration () {
            this.appState = this.STATES.creation;
            let tree = [
                ...this.tree
            ];
            if (this.dontCreateEmptyAutomate) tree = this.tree.filter((el)=>el.children.length > 0);
            const Listelength = tree.length;
            let isError = false;
            while(!isError && tree.length > 0){
                const item = tree.shift();
                try {
                    if (item) {
                        const parentId = await this.getOrCreateParentId(this.contextId, this.selectedNodeId, item);
                        console.log("parentId", item);
                        await (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService)._createNodes(this.contextId, item, parentId);
                        this.percent = Math.floor(100 * (Listelength - tree.length) / Listelength);
                    }
                } catch (error) {
                    console.error(error);
                    isError = true;
                }
            }
            if (isError) {
                this.appState = this.STATES.error;
                return;
            }
            this.appState = this.STATES.success;
        },
        // createNode(liste, contextId, nodeId, Listelength) {
        //    return new Promise((resolve, reject) => {
        //       this.createNodeRecur(
        //          liste,
        //          contextId,
        //          nodeId,
        //          Listelength,
        //          resolve
        //       );
        //    });
        // },
        // async createNodeRecur(liste, contextId, nodeId, Listelength, resolve) {
        //    const item = liste.shift();
        //    if (item) {
        //       const parentId = await this.getOrCreateParentId(
        //          contextId,
        //          nodeId,
        //          item
        //       );
        //       GenerateNetworkTreeService._createNodes(contextId, item, parentId)
        //          .then(() => {
        //             this.percent = Math.floor(
        //                (100 * (Listelength - liste.length)) / Listelength
        //             );
        //             this.createNodeRecur(
        //                liste,
        //                contextId,
        //                nodeId,
        //                Listelength,
        //                resolve
        //             );
        //          })
        //          .catch((err) => {
        //             console.error(err);
        //             this.percent = Math.floor(
        //                (100 * (Listelength - liste.length)) / Listelength
        //             );
        //             this.createNodeRecur(
        //                liste,
        //                contextId,
        //                nodeId,
        //                Listelength,
        //                resolve
        //             );
        //          });
        //    } else {
        //       resolve(true);
        //    }
        // },
        async getOrCreateParentId (contextId, nodeId, item) {
            if (!this.classify.class) return nodeId;
            const val = this.classify.by;
            // const found = item.properties.find(
            //    (el) => el.attributeName == val || el.displayName == val
            // );
            const found = await (0, _spinalEnvViewerPluginNetworkTreeService.AttributesUtilities).findAttribute(item.model, item.dbId, val);
            const parentName = found && found.displayValue ? found.displayValue : "Others";
            const children = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeId, [
                // spinalNetworkTreeService.constants.NETWORK_RELATION,
                (0, _spinalEnvViewerPluginNetworkTreeService.CONSTANTS).NETWORK_RELATION
            ]);
            const parentFound = children.find((el)=>el.name.get() == parentName);
            if (parentFound) return parentFound.id.get();
            // const parent = await spinalNetworkTreeService.addNetwork(
            //    parentName,
            //    nodeId,
            //    contextId
            // );
            const parent = await (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).addNetwork(parentName, nodeId, contextId);
            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(parent);
            return parent.getId().get();
        },
        _displayResult (result) {
            this.appState = result;
            setTimeout(()=>{
                this.appState = this.STATES.normal;
            }, 1000);
        },
        formatData () {
            const promises = [
                (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).getElementProperties(this.automatesObj.items, this.automatesObj.attributeName, this.namingConvention),
                (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).getElementProperties(this.equipmentsObj.items, this.equipmentsObj.attributeName, this.namingConvention)
            ];
            return Promise.all(promises).then((result)=>{
                return {
                    automatesProperties: result[0] && result[0].validItems,
                    equipementsProperties: result[1] && result[1].validItems
                };
            });
        },
        selectItems (argItems) {
            const items = (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).classifyDbIdsByModel(argItems);
            window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(items);
        }
    },
    computed: {
        disableVerificationButton () {
            return this.automatesObj.items.length === 0 && this.automatesObj.attributeName.trim().length === 0 || this.equipmentsObj.items.length === 0 && this.equipmentsObj.attributeName.trim().length === 0;
        }
    },
    watch: {
        changed () {
            if (this.changed) {
                this.appState = this.STATES.normal;
                this.verified = false;
            }
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPfVo":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "content"
    }, [
        _vm.appState === _vm.STATES.normal ? _c("div", {
            staticClass: "buttons"
        }, [
            !_vm.verified ? _c("md-button", {
                staticClass: "md-raised md-primary",
                attrs: {
                    "disabled": _vm.disableVerificationButton
                },
                on: {
                    "click": _vm.launchVerification
                }
            }, [
                _vm._v("\n				Verify\n			")
            ]) : _vm.verified ? _c("div", {
                staticClass: "content-items"
            }, [
                _c("div", {
                    staticClass: "content-item"
                }, [
                    _c("md-button", {
                        staticClass: "resultVerification md-dense md-primary",
                        on: {
                            "click": function($event) {
                                return _vm.selectItems(_vm.validItems);
                            }
                        }
                    }, [
                        _vm._v("\n						Valid item(s) :\n						" + _vm._s(_vm.validItems.length) + "\n					")
                    ]),
                    _vm._v(" "),
                    _c("md-button", {
                        staticClass: "resultVerification md-dense md-accent",
                        on: {
                            "click": function($event) {
                                return _vm.selectItems(_vm.invalidItems);
                            }
                        }
                    }, [
                        _vm._v("\n						invalid item(s) :\n						" + _vm._s(_vm.invalidItems.length) + "\n					")
                    ])
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "content-item classifyContent"
                }, [
                    _c("div", {
                        staticClass: "checkbox"
                    }, [
                        _c("md-checkbox", {
                            staticClass: "md-primary",
                            model: {
                                value: _vm.classify.class,
                                callback: function($$v) {
                                    _vm.$set(_vm.classify, "class", $$v);
                                },
                                expression: "classify.class"
                            }
                        }, [
                            _vm._v("Classify controllers By")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "input"
                    }, [
                        _c("md-field", [
                            _c("label", [
                                _vm._v("Attribute name")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                attrs: {
                                    "disabled": !_vm.classify.class
                                },
                                model: {
                                    value: _vm.classify.by,
                                    callback: function($$v) {
                                        _vm.$set(_vm.classify, "by", $$v);
                                    },
                                    expression: "classify.by"
                                }
                            })
                        ], 1)
                    ], 1)
                ]),
                _vm._v(" "),
                _c("div", {
                    staticClass: "content-item"
                }, [
                    _c("md-checkbox", {
                        staticClass: "md-primary",
                        model: {
                            value: _vm.dontCreateEmptyAutomate,
                            callback: function($$v) {
                                _vm.dontCreateEmptyAutomate = $$v;
                            },
                            expression: "dontCreateEmptyAutomate"
                        }
                    }, [
                        _vm._v("Don't create Controllers which do not control\n						equipment")
                    ])
                ], 1),
                _vm._v(" "),
                _c("div", {
                    staticClass: "content-item"
                }, [
                    _c("md-button", {
                        staticClass: "md-raised md-primary",
                        attrs: {
                            "disabled": _vm.error
                        },
                        on: {
                            "click": _vm.launchGeneration
                        }
                    }, [
                        _vm._v("Launch Generation")
                    ])
                ], 1)
            ]) : _vm._e()
        ], 1) : _vm.appState === _vm.STATES.loading ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-progress-spinner", {
                attrs: {
                    "md-mode": "indeterminate"
                }
            })
        ], 1) : _vm.appState === _vm.STATES.creation ? _c("div", {
            staticClass: "progress-bar"
        }, [
            _c("div", {
                staticClass: "percent-number"
            }, [
                _vm._v(_vm._s(_vm.percent) + " %")
            ]),
            _vm._v(" "),
            _c("md-progress-bar", {
                staticClass: "percent-bar",
                attrs: {
                    "md-mode": "buffer",
                    "md-value": _vm.percent
                }
            })
        ], 1) : _vm.appState === _vm.STATES.success ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-icon", {
                staticClass: "md-size-4x"
            }, [
                _vm._v("check")
            ])
        ], 1) : _vm.appState === _vm.STATES.error ? _c("div", {
            staticClass: "state"
        }, [
            _c("md-icon", {
                staticClass: "md-size-4x"
            }, [
                _vm._v("close")
            ])
        ], 1) : _vm._e()
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8hYHY":[function() {},{}],"iC12f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a33Vw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c2d646607ffcca4d");
    if (script.__esModule) script = script.default;
    script.render = require("d5265ceeb04784b6").render;
    script.staticRenderFns = require("d5265ceeb04784b6").staticRenderFns;
    script._scopeId = "data-v-f6c77a";
    script.__cssModules = require("128777ec4a20de93").default;
    require("c3f3ab1734951b35").default(script);
    script.__scopeId = "data-v-f6c77a";
    script.__file = "selectionStep.vue";
};
initialize();
exports.default = script;

},{"c2d646607ffcca4d":"jTnhl","d5265ceeb04784b6":"ihrGa","128777ec4a20de93":"jFTKc","c3f3ab1734951b35":"b50pe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTnhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerContextGeographicService = require("spinal-env-viewer-context-geographic-service");
var _spinalEnvViewerContextGeographicServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerContextGeographicService);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
// import generateAutomateService from "../../../js/generateAutomateService";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var scriptExports = {
    name: "selectionStep",
    props: {
        config: {}
    },
    data () {
        return {
            validItems: [],
            invalidItems: [],
            loadAttributeResult: false,
            displayResult: false,
            count: 0
        };
    },
    methods: {
        async addSelection () {
            await this.addItemSelected();
            this.changeItemCount();
            this.displayResult = false;
            this.$emit("changed");
        },
        clearReferential () {
            this.config.items = [];
            this.changeItemCount();
            this.displayResult = false;
            this.$emit("changed");
        // this.changeItemCount();
        //  this.$emit("clear");
        },
        async addItemSelected () {
            const aggregateSelection = window.spinal.ForgeViewer.viewer.getAggregateSelection();
            if (aggregateSelection.length === 0) {
                window.alert("no bim object selected");
                return;
            }
            const selection = await this.getLeafDbIds(aggregateSelection);
            for (const element of selection)this.addItemToList(element);
        // let promisesValues = await Promise.all(nodespromises);
        // for (const iterator of promisesValues) {
        //   const listeFiltered = this.filterList(iterator);
        //   this.config.items = [...this.config.items, ...listeFiltered];
        // }
        },
        getLeafDbIds (selections) {
            const dbIds = selections.map((el)=>{
                return (0, _spinalEnvViewerBimManagerService.bimObjectManagerService).getLeafDbIds(el.model, el.selection);
            });
            return Promise.all(dbIds);
        },
        addItemToList ({ model, selection }) {
            const elementFound = this.config.items.find((el)=>el.model.id === model.id);
            if (!elementFound) {
                this.config.items.push({
                    model,
                    selection
                });
                return;
            }
            for (const dbId of selection){
                const found = elementFound.selection.find((el)=>el === dbId);
                if (!found) elementFound.selection.push(dbId);
            }
        },
        changeItemCount () {
            this.count = 0;
            for (const item of this.config.items)this.count += item.selection.length;
        },
        showReferential () {
            // const items = this.config.items.map(({ model, selection }) => {
            //    return { model, ids: selection };
            // });
            // window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(
            //    items
            // );
            this.config.items.forEach(({ model, selection })=>{
                window.spinal.ForgeViewer.viewer.impl.selector.setSelection(selection, model);
            });
        },
        verifyResult () {
            this.loadAttributeResult = true;
            (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).getElementProperties(this.config.items, this.config.attributeName).then((result)=>{
                this.validItems = result.validItems;
                this.invalidItems = result.invalidItems;
                this.displayResult = true;
                this.loadAttributeResult = false;
            });
        },
        selectValidItemsOnModel () {
            const items = (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).classifyDbIdsByModel(this.validItems);
            window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(items);
        },
        selectInvalidItemsOnModel () {
            const items = (0, _spinalEnvViewerPluginNetworkTreeService.GenerateNetworkTreeService).classifyDbIdsByModel(this.invalidItems);
            window.spinal.ForgeViewer.viewer.impl.selector.setAggregateSelection(items);
        }
    },
    watch: {
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-context-geographic-service":"5QjJf","spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-plugin-network-tree-service":"7oQhf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"ihrGa":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "sub-content"
    }, [
        _c("div", {
            staticClass: "countdiv"
        }, [
            _vm._v("\n      " + _vm._s(_vm.count) + " item(s) selected\n   ")
        ]),
        _vm._v(" "),
        _c("div", {
            staticClass: "buttons"
        }, [
            _c("md-button", {
                on: {
                    "click": _vm.addSelection
                }
            }, [
                _c("md-icon", [
                    _vm._v("add")
                ]),
                _vm._v(" "),
                _c("md-tooltip", {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Add Bim objects selected")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                on: {
                    "click": _vm.clearReferential
                }
            }, [
                _c("md-icon", [
                    _vm._v("clear")
                ]),
                _vm._v(" "),
                _c("md-tooltip", {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Clear selected")
                ])
            ], 1),
            _vm._v(" "),
            _c("md-button", {
                on: {
                    "click": _vm.showReferential
                }
            }, [
                _c("md-icon", [
                    _vm._v("visibility")
                ]),
                _vm._v(" "),
                _c("md-tooltip", {
                    attrs: {
                        "md-delay": "300"
                    }
                }, [
                    _vm._v("Show referential")
                ])
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Attribute")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.config.attributeName,
                        callback: function($$v) {
                            _vm.$set(_vm.config, "attributeName", $$v);
                        },
                        expression: "config.attributeName"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", [
            _vm.displayResult ? _c("div", [
                _c("md-button", {
                    staticClass: "md-dense md-primary",
                    on: {
                        "click": _vm.selectValidItemsOnModel
                    }
                }, [
                    _vm._v("\n            " + _vm._s(_vm.validItems.length) + " item(s) is/are valid\n         ")
                ]),
                _vm._v(" "),
                _c("md-button", {
                    staticClass: "md-dense md-accent",
                    on: {
                        "click": _vm.selectInvalidItemsOnModel
                    }
                }, [
                    _vm._v("\n            " + _vm._s(_vm.invalidItems.length) + " item(s) is/are not valid\n         ")
                ])
            ], 1) : _vm._e(),
            _vm._v(" "),
            !_vm.loadAttributeResult ? _c("md-button", {
                staticClass: "md-raised md-primary",
                attrs: {
                    "disabled": _vm.displayResult
                },
                on: {
                    "click": _vm.verifyResult
                }
            }, [
                _vm._v("Verify")
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.loadAttributeResult ? _c("md-progress-spinner", {
                attrs: {
                    "md-diameter": 30,
                    "md-stroke": 3,
                    "md-mode": "indeterminate"
                }
            }) : _vm._e()
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"jFTKc":[function() {},{}],"b50pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xRrKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e617c283d21e7475");
    if (script.__esModule) script = script.default;
    script.render = require("9ada1ab7bb26b167").render;
    script.staticRenderFns = require("9ada1ab7bb26b167").staticRenderFns;
    script._scopeId = "data-v-4734bd";
    script.__cssModules = require("f01c2045c9b63151").default;
    require("73039832046f2ac6").default(script);
    script.__scopeId = "data-v-4734bd";
    script.__file = "namingConventionStep.vue";
};
initialize();
exports.default = script;

},{"e617c283d21e7475":"ayEVC","9ada1ab7bb26b167":"lErWH","f01c2045c9b63151":"3buUb","73039832046f2ac6":"aoIv7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayEVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var scriptExports = {
    name: "namingConventionStep",
    props: {
        config: {}
    },
    data () {
        return {};
    },
    methods: {
        personalized () {
            (0, _spinalEnvViewerPanelManagerService.spinalPanelManagerService).openPanel("personalizeNamingConvention", {
                config: this.config,
                callback: (argFunction)=>{
                    this.config.useAttrValue = false;
                    this.config.personalized.callback = argFunction;
                }
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-panel-manager-service":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lErWH":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-list", [
        _c("md-list-item", [
            _c("md-field", [
                _c("label", [
                    _vm._v("Attribute")
                ]),
                _vm._v(" "),
                _c("md-input", {
                    model: {
                        value: _vm.config.attributeName,
                        callback: function($$v) {
                            _vm.$set(_vm.config, "attributeName", $$v);
                        },
                        expression: "config.attributeName"
                    }
                })
            ], 1)
        ], 1),
        _vm._v(" "),
        _c("md-list-item", [
            _c("md-radio", {
                staticClass: "md-primary",
                attrs: {
                    "value": true
                },
                model: {
                    value: _vm.config.useAttrValue,
                    callback: function($$v) {
                        _vm.$set(_vm.config, "useAttrValue", $$v);
                    },
                    expression: "config.useAttrValue"
                }
            }, [
                _vm._v("Use attribute value")
            ])
        ], 1),
        _vm._v(" "),
        _c("md-list-item", [
            _c("md-radio", {
                staticClass: "md-primary",
                attrs: {
                    "disabled": "",
                    "value": false
                },
                model: {
                    value: _vm.config.useAttrValue,
                    callback: function($$v) {
                        _vm.$set(_vm.config, "useAttrValue", $$v);
                    },
                    expression: "config.useAttrValue"
                }
            }, [
                _c("a", {
                    on: {
                        "click": _vm.personalized
                    }
                }, [
                    _vm._v("Personalized")
                ])
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"3buUb":[function() {},{}],"aoIv7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pNumE":[function(require,module,exports) {
var render = function() {
    var this$1 = this;
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
        staticClass: "generation_container"
    }, [
        _c("md-steppers", {
            staticClass: "steppers",
            attrs: {
                "md-vertical": "",
                "md-dynamic-height": true
            },
            on: {
                "md-changed": _vm.changeStep
            }
        }, [
            _c("md-step", {
                attrs: {
                    "id": "first",
                    "md-label": "Controller selection",
                    "md-description": "Select all controllers"
                }
            }, [
                _c("div", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("selection-step", {
                        attrs: {
                            "config": _vm.data.objAutomate
                        },
                        on: {
                            "clear": _vm.clearAutomates,
                            "changed": function() {
                                return this$1.changed = true;
                            }
                        }
                    })
                ], 1)
            ]),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "second",
                    "md-label": "Selection of controlled objects",
                    "md-description": "Select all controlled objects"
                }
            }, [
                _c("md-content", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("selection-step", {
                        attrs: {
                            "config": _vm.data.objEquipment
                        },
                        on: {
                            "clear": _vm.clearEquipments,
                            "changed": function() {
                                return this$1.changed = true;
                            }
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "third",
                    "md-label": "Configuration Controllers and objects association",
                    "md-description": "Wich objects are controlled by which controller",
                    "md-error": _vm.errorInConfig
                }
            }, [
                _c("md-content", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("configuration-step", {
                        attrs: {
                            "automateObj": _vm.data.objAutomate,
                            "equipmentObj": _vm.data.objEquipment,
                            "attribute": _vm.data.attribute
                        },
                        on: {
                            "changed": function() {
                                return this$1.changed = true;
                            }
                        }
                    })
                ], 1)
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "fourth",
                    "md-label": "Configure naming Convention",
                    "md-description": "create the network tree structure"
                }
            }, [
                _c("naming-convention-step", {
                    attrs: {
                        "config": _vm.data.namingConvention
                    }
                })
            ], 1),
            _vm._v(" "),
            _c("md-step", {
                attrs: {
                    "id": "fifth",
                    "md-label": "Creation Step",
                    "md-description": "create the network tree structure"
                }
            }, [
                _c("div", {
                    staticClass: "step-container md-scrollbar"
                }, [
                    _c("launch-generation-step", {
                        attrs: {
                            "automatesObj": _vm.data.objAutomate,
                            "equipmentsObj": _vm.data.objEquipment,
                            "attribute": _vm.data.attribute,
                            "namingConvention": _vm.data.namingConvention,
                            "contextId": _vm.contextId,
                            "selectedNodeId": _vm.selectedNodeId,
                            "changed": _vm.changed
                        },
                        on: {
                            "verified": function() {
                                return this$1.changed = false;
                            }
                        }
                    })
                ], 1)
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"6SwsO":[function() {},{}],"fjMB5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Bntk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("ffc573809c185604");
    if (script.__esModule) script = script.default;
    script.render = require("cb8cca1d6aee716d").render;
    script.staticRenderFns = require("cb8cca1d6aee716d").staticRenderFns;
    script._scopeId = "data-v-2abcd3";
    script.__cssModules = require("21e70be1bfe1ac20").default;
    require("b2d7151347fe9d59").default(script);
    script.__scopeId = "data-v-2abcd3";
    script.__file = "detailPanel.vue";
};
initialize();
exports.default = script;

},{"ffc573809c185604":"3anTv","cb8cca1d6aee716d":"1TSbx","21e70be1bfe1ac20":"bZMat","b2d7151347fe9d59":"9RVaD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3anTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import spinalNetworktree from "../../services";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _spinalEnvViewerPluginExcelManagerService = require("spinal-env-viewer-plugin-excel-manager-service");
var _spinalEnvViewerPluginExcelManagerServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginExcelManagerService);
var _fileSaver = require("file-saver");
var _fileSaverDefault = parcelHelpers.interopDefault(_fileSaver);
const { spinalPanelManagerService } = require("19df97304b53e586");
var scriptExports = {
    name: "networkTreeDetailPanel",
    data () {
        return {
            itemSelected: null,
            data: []
        };
    },
    methods: {
        opened (params) {
            this.itemSelected = params;
        },
        closed () {},
        setTitle (title) {
            spinalPanelManagerService.panels.networkTreeDetailPanel.panel.setTitle(title);
        },
        getAllData (contextId) {
            // return spinalNetworktree
            return (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).getNetworkTreeBimObjects(contextId).then((bimObjects)=>{
                let promises = bimObjects.map(async (el)=>{
                    let info = el.info.get();
                    // info["groups"] = await spinalNetworktree.getNetworkGroups(info.id);
                    info["groups"] = await (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).getNetworkGroups(info.id);
                    // info["parents"] = await spinalNetworktree.getNetworkBimObjectParents(info.id);
                    info["parents"] = await (0, _spinalEnvViewerPluginNetworkTreeService.NetworkTreeService).getNetworkBimObjectParents(info.id);
                    return info;
                });
                return Promise.all(promises);
            });
        },
        formatParents (item) {
            let parentsDbIds = item.parents.map((el)=>el.externalId);
            return parentsDbIds.length > 0 ? parentsDbIds.join(", ") : "-";
        },
        formatGroups (item) {
            let groupsNames = item.groups.map((el)=>el.name);
            return groupsNames.length > 0 ? groupsNames.join(", ") : "-";
        },
        getHeader () {
            return [
                {
                    key: "bimFileId",
                    header: "BimFileId",
                    width: 20
                },
                {
                    key: "dbid",
                    header: "Dbid",
                    width: 20
                },
                {
                    key: "externalId",
                    header: "ExternalId",
                    width: 20
                },
                {
                    key: "name",
                    header: "Name",
                    width: 20
                },
                {
                    key: "type",
                    header: "Type",
                    width: 20
                },
                {
                    key: "parent",
                    header: "Parent(s)",
                    width: 20
                },
                {
                    key: "group",
                    header: "Group(s)",
                    width: 20
                }
            ];
        },
        getRows () {
            return this.data.map((el)=>{
                el["group"] = this.formatGroups(el);
                el["parent"] = this.formatParents(el);
                return el;
            });
        },
        exportFile () {
            let result = [
                {
                    name: `Network Tree ${this.itemSelected.name}`,
                    author: "spinalcom",
                    data: [
                        {
                            name: `Network Tree ${this.itemSelected.name}`,
                            header: this.getHeader(),
                            rows: this.getRows()
                        }
                    ]
                }
            ];
            (0, _spinalEnvViewerPluginExcelManagerServiceDefault.default).export(result).then((buffer)=>{
                (0, _fileSaverDefault.default).saveAs(new Blob(buffer), `spinalcom.xlsx`);
            });
        }
    },
    watch: {
        itemSelected () {
            this.getAllData(this.itemSelected.id).then((objects)=>{
                this.setTitle(`Network Tree : ${this.itemSelected.name}`);
                this.data = objects;
            });
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"19df97304b53e586":"7Uw4d","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-plugin-excel-manager-service":"d1IEa","file-saver":"3ILQE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ILQE":[function(require,module,exports) {
var global = arguments[3];
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else b();
})(this, function() {
    "use strict";
    function b(a, b) {
        return "undefined" == typeof b ? b = {
            autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([
            "\uFEFF",
            a
        ], {
            type: a.type
        }) : a;
    }
    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error("could not download file");
        }, d.send();
    }
    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send();
        } catch (a) {}
        return 200 <= b.status && 299 >= b.status;
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
            i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function() {
            e(j);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
        else if (d(f)) c(f, g, h);
        else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function() {
                e(i);
            });
        }
    } : function(b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader;
            k.onloadend = function() {
                var a = k.result;
                a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
        } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                l.revokeObjectURL(m);
            }, 4E4);
        }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
});

},{}],"1TSbx":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-content", {
        staticClass: "myContainer md-scrollbar"
    }, [
        _c("div", {
            staticClass: "header"
        }, [
            _c("md-button", {
                staticClass: "md-primary exportBtn",
                on: {
                    "click": _vm.exportFile
                }
            }, [
                _vm._v("Export")
            ])
        ], 1),
        _vm._v(" "),
        _vm.itemSelected ? _c("md-table", {
            staticClass: "myTable md-scrollbar",
            scopedSlots: _vm._u([
                {
                    key: "md-table-row",
                    fn: function(ref) {
                        var item = ref.item;
                        return _c("md-table-row", {}, [
                            _c("md-table-cell", {
                                staticClass: "tableColumn",
                                attrs: {
                                    "md-label": "Id",
                                    "md-numeric": "",
                                    "title": item.externalId
                                }
                            }, [
                                _vm._v(_vm._s(item.externalId) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                staticClass: "tableColumn",
                                attrs: {
                                    "md-label": "Name",
                                    "title": item.name
                                }
                            }, [
                                _vm._v(_vm._s(item.name))
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                staticClass: "tableColumn",
                                attrs: {
                                    "md-label": "Parent(s)",
                                    "title": _vm.formatParents(item)
                                }
                            }, [
                                _vm._v(_vm._s(_vm.formatParents(item)) + "\n         ")
                            ]),
                            _vm._v(" "),
                            _c("md-table-cell", {
                                staticClass: "tableColumn",
                                attrs: {
                                    "md-label": "Group(s)",
                                    "title": _vm.formatGroups(item)
                                }
                            }, [
                                _vm._v(_vm._s(_vm.formatGroups(item)) + "\n         ")
                            ])
                        ], 1);
                    }
                }
            ], null, false, 229375949),
            model: {
                value: _vm.data,
                callback: function($$v) {
                    _vm.data = $$v;
                },
                expression: "data"
            }
        }, [
            _c("md-table-empty-state", {
                attrs: {
                    "md-label": "No element found",
                    "md-description": "No bim object found in this context"
                }
            })
        ], 1) : _vm._e()
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"bZMat":[function() {},{}],"9RVaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-network-tree.b309b6aa.js.map
