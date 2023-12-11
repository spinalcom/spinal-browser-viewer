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
})({"au7wA":[function(require,module,exports) {
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
var _vue = require("vue");
var _vueDefault = parcelHelpers.interopDefault(_vue);
var _vuetify = require("vuetify");
var _vuetifyDefault = parcelHelpers.interopDefault(_vuetify);
var _spinalEnvViewerPluginForge = require("spinal-env-viewer-plugin-forge");
var _spinalEnvViewerPanelManagerService = require("spinal-env-viewer-panel-manager-service");
var _spinalEnvViewerPanelManagerServiceSpinalforgeextention = require("spinal-env-viewer-panel-manager-service_spinalforgeextention");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
// vue files
var _addDevicesVue = require("./vue/addDevices.vue");
var _addDevicesVueDefault = parcelHelpers.interopDefault(_addDevicesVue);
var _addDeviceProfilesVue = require("./vue/addDeviceProfiles.vue");
var _addDeviceProfilesVueDefault = parcelHelpers.interopDefault(_addDeviceProfilesVue);
var _itemListVue = require("./vue/itemList.vue");
var _itemListVueDefault = parcelHelpers.interopDefault(_itemListVue);
var _itemDetailVue = require("./vue/ItemDetail.vue");
var _itemDetailVueDefault = parcelHelpers.interopDefault(_itemDetailVue);
// import DialogMonitoring from "./vue/monitoring.vue"
var _monitoringDetailsVue = require("./vue/monitoringDetails.vue");
var _monitoringDetailsVueDefault = parcelHelpers.interopDefault(_monitoringDetailsVue);
var _itemSupervisionVue = require("./vue/itemSupervision.vue");
var _itemSupervisionVueDefault = parcelHelpers.interopDefault(_itemSupervisionVue);
var _globalSupervisionVue = require("./vue/globalSupervision.vue");
var _globalSupervisionVueDefault = parcelHelpers.interopDefault(_globalSupervisionVue);
var _showBacnetValueVue = require("./vue/ShowBacnetValue.vue");
var _showBacnetValueVueDefault = parcelHelpers.interopDefault(_showBacnetValueVue);
// button files
var _buttonAddDeviceProfileContext = require("./buttons/ButtonAddDeviceProfileContext");
var _buttonAddDeviceProfiles = require("./buttons/ButtonAddDeviceProfiles");
var _buttonAddDevices = require("./buttons/ButtonAddDevices");
var _buttonDisplayXMLFile = require("./buttons/ButtonDisplayXMLFile");
var _buttonGenerateDeviceGraph = require("./buttons/ButtonGenerateDeviceGraph");
var _buttonItemList = require("./buttons/ButtonItemList");
var _buttonItemDetail = require("./buttons/ButtonItemDetail");
var _buttonSaveProfileAsJson = require("./buttons/ButtonSaveProfileAsJson");
var _buttonMonitoringConfiguration = require("./buttons/ButtonMonitoringConfiguration");
var _buttonItemSupervision = require("./buttons/ButtonItemSupervision");
var _buttonGlobalSupervision = require("./buttons/ButtonGlobalSupervision");
var _buttonGenerateDeviceGraphFromDiscovery = require("./buttons/ButtonGenerateDeviceGraphFromDiscovery");
(0, _vueDefault.default).use((0, _vuetifyDefault.default));
/* ******* */ /* BUTTONS */ /* ******* */ (0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerTopBar", new (0, _buttonAddDeviceProfileContext.ButtonAddDeviceProfileContext)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonAddDeviceProfiles.ButtonAddDeviceProfiles)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonAddDevices.ButtonAddDevices)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonDisplayXMLFile.ButtonDisplayXMLFile)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonGenerateDeviceGraph.ButtonGenerateDeviceGraph)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonItemList.ButtonItemList)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonItemDetail.ButtonItemDetail)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonSaveProfileAsJson.ButtonSaveProfileAsJson)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonMonitoringConfiguration.ButtonMonitoringConfiguration)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonItemSupervision.ButtonItemSupervision)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonGlobalSupervision.ButtonGlobalSupervision)(), [
    7
]);
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonGenerateDeviceGraphFromDiscovery.ButtonGenerateDeviceGraphFromDiscovery)(), [
    7
]);
/* ********** */ /* EXTENSIONS */ /* ********** */ (0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogAddDeviceProfiles",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _addDeviceProfilesVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogAddDevices",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _addDevicesVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogItemList",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _itemListVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogItemDetail",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _itemDetailVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
// SpinalMountExtention.mount( {
//   // name registered.
//   name: "DialogMonitoring",
//   // Vue.extend to create a Compoment constructor
//   vueMountComponent: Vue.extend( DialogMonitoring ),
//   // where to  append the Compoment
//   parentContainer: document.body
// } );
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogMonitoringDetails",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _monitoringDetailsVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogItemSupervision",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _itemSupervisionVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogGlobalSupervision",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _globalSupervisionVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogGetFromDiscovery",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _showBacnetValueVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});

},{"vue":"gt5MM","vuetify":"WtHLj","spinal-env-viewer-plugin-forge":"8YZk7","spinal-env-viewer-panel-manager-service":"7Uw4d","spinal-env-viewer-panel-manager-service_spinalforgeextention":"1mGHd","spinal-env-viewer-context-menu-service":"kHlxv","./vue/addDevices.vue":"1jIZA","./vue/addDeviceProfiles.vue":"bLrB0","./vue/itemList.vue":"4Cc9z","./vue/ItemDetail.vue":"aWpgj","./vue/monitoringDetails.vue":"kPFwh","./vue/itemSupervision.vue":"jagd6","./vue/globalSupervision.vue":"3ON8N","./vue/ShowBacnetValue.vue":"e2tMb","./buttons/ButtonAddDeviceProfileContext":"4phzZ","./buttons/ButtonAddDeviceProfiles":"bARBN","./buttons/ButtonAddDevices":"aUHJe","./buttons/ButtonDisplayXMLFile":"lnYO4","./buttons/ButtonGenerateDeviceGraph":"f9Wfx","./buttons/ButtonItemList":"FxmFn","./buttons/ButtonItemDetail":"9D71e","./buttons/ButtonSaveProfileAsJson":"gCjSD","./buttons/ButtonMonitoringConfiguration":"7cKsg","./buttons/ButtonItemSupervision":"lnyzO","./buttons/ButtonGlobalSupervision":"4ahOK","./buttons/ButtonGenerateDeviceGraphFromDiscovery":"jYorH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uw4d":[function(require,module,exports) {
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

},{}],"kHlxv":[function(require,module,exports) {
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

},{}],"1jIZA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6fc2116cd1028f29");
    if (script.__esModule) script = script.default;
    script.render = require("88fd1f67f96321cd").render;
    script.staticRenderFns = require("88fd1f67f96321cd").staticRenderFns;
    script._scopeId = "data-v-8e8477";
    script.__cssModules = require("bb60b98095020f65").default;
    require("e01e91ef773d855").default(script);
    script.__scopeId = "data-v-8e8477";
    script.__file = "addDevices.vue";
};
initialize();
exports.default = script;

},{"6fc2116cd1028f29":"2rrvF","88fd1f67f96321cd":"c4jUL","bb60b98095020f65":"faXG8","e01e91ef773d855":"8CFGK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rrvF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
const xml2js = require("bfa6e76c77c3189b");
const fs = require("71648ea7bcc10d87");
var scriptExports = {
    name: "DialogAddDevices",
    data: function() {
        return {
            name: "",
            deviceProfile: null,
            parentId: null,
            dialog: false,
            multiple: null
        };
    },
    methods: {
        initialize: function(option) {
            // this.deviceProfile = option.deviceProfile;
            this.parentId = option.selectedNode.id;
        },
        onNameChange: function(value) {
            this.name = value;
        },
        onSave: function() {
            this.addDevices(this.name).then((result)=>{
            // var dossier = FileExplorer.createDirectory(result);
            //  FileExplorer.addFileUpload(dossier, this.multiple);
            });
            this.dialog = false;
        },
        addDevices: function(name) {
            return new Promise(async (resolve)=>{
                var nodeCreated = await (0, _deviceHelper.DeviceHelper).createDevice(this.parentId, name);
                if (this.multiple !== null) {
                    var dossier = await (0, _fileExplorer.FileExplorer).createDirectory(nodeCreated);
                    await (0, _fileExplorer.FileExplorer).addFileUpload(dossier, this.multiple);
                }
            });
        },
        onCancel: function() {
            this.dialog = false;
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        getFile (event) {
            this.multiple = event.target.files;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","bfa6e76c77c3189b":"7fkbn","71648ea7bcc10d87":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biglE":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeviceHelper", ()=>DeviceHelper);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginDocumentationServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginDocumentationService);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
var _spinalEnvViewerPluginEventEmitter = require("spinal-env-viewer-plugin-event-emitter");
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
// const bacnet = require('bacstack');
const { FileSystem } = require("32c014467e0b6cde");
class DeviceHelper {
    static initialize() {
        if (DeviceHelper.initialized !== null) return DeviceHelper.initialized;
        DeviceHelper.initialized = new Promise((resolve, reject)=>{
            DeviceHelper.context = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContext(DeviceHelper.contextName);
            if (typeof DeviceHelper.context === "undefined") (0, _spinalEnvViewerGraphService.SpinalGraphService).addContext(DeviceHelper.contextName, DeviceHelper.type).then((context)=>{
                DeviceHelper.context = context;
                DeviceHelper.contextId = context.info.id.get();
                console.log(DeviceHelper);
                console.log(DeviceHelper.contextId);
                resolve(true);
            }).catch(reject);
            else {
                DeviceHelper.contextId = DeviceHelper.context.info.id.get();
                resolve(true);
            }
        });
        return DeviceHelper.initialized;
    }
    static createDeviceProfile(name) {
        return DeviceHelper.initialize().then(()=>{
            const deviceProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name,
                type: (0, _constants.DEVICE_PROFILES_TYPE)
            }, undefined);
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(DeviceHelper.contextId, deviceProfileId, DeviceHelper.contextId, (0, _constants.DEVICE_RELATION_NAME), (0, _constants.DEVICE_RELATION_TYPE));
        });
    }
    static createDevice(parentId, name) {
        return DeviceHelper.initialize().then(()=>{
            const deviceId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name,
                type: (0, _constants.DEVICE_TYPE)
            }, undefined);
            var deviceContext = (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, deviceId, DeviceHelper.contextId, (0, _constants.PART_RELATION_NAME), (0, _constants.PART_RELATION_TYPE));
            return deviceContext;
        });
    }
    static async create_Attributes(parentNode, tab, categoryName) {
        let categoryAttributes = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addCategoryAttribute(parentNode, categoryName);
        for(let elt2 in tab)if (typeof tab[elt2] != "object") (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategory(parentNode, categoryAttributes, elt2, tab[elt2]);
        else await DeviceHelper.create_Attributes(parentNode, tab[elt2], elt2);
    }
    static async getAttributeByLabelAndCategory(parentId, categoryName, label) {
        let parentNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(parentNode);
        let tab = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).getAttributesByCategory(parentNode, categoryName);
        for(let elt in tab){
            if (tab[elt].label.get() == label) return tab[elt].value.get();
        }
        console.log("no label for this category & node");
        return -1;
    }
    static async setAttributeByCategoryAndLabel(parentNode, value, categoryName, label) {
        let tab = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).getAttributesByCategory(parentNode, categoryName);
    }
    static async generateProfile(parentId, nodeName, /*nodeRealName,*/ nodeType, nodeIdx, relationName, relationType) {
        return DeviceHelper.initialize().then(async (result)=>{
            const generatedProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: nodeName,
                // real_name: nodeRealName,
                type: nodeType,
                IDX: nodeIdx
            }, undefined);
            var generatedProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedProfileId, DeviceHelper.contextId, relationName, relationType);
            return generatedProfileNode;
        });
    }
    static async generateNetworkValue(parentId, json) {
        return DeviceHelper.initialize().then(async (result)=>{
            const generatedProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Network Values",
                type: "networkValues"
            }, undefined);
            var generatedProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedProfileId, DeviceHelper.contextId, "hasNetworkValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in json){
                // opérateur ternaire utilisé dans generateprofile
                var networkValueNode = await DeviceHelper.generateProfile(generatedProfileId, json[elt].NAME == undefined ? "Unnamed" : json[elt].NAME, "networkValue", json[elt].IDX, "hasNetworkValue", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                DeviceHelper.create_Attributes(networkValueNode, json[elt], "default");
            }
        }).catch((err)=>console.log(err));
    }
    static async generateBinaryValue(parentId, json) {
        return DeviceHelper.initialize().then(async (result)=>{
            const generatedProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Binary Values",
                type: "binaryValues"
            }, undefined);
            var generatedProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedProfileId, DeviceHelper.contextId, "hasBinaryValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in json){
                var binaryValueNode = await DeviceHelper.generateProfile(generatedProfileId, json[elt].NAME == undefined ? "Unnamed" : json[elt].NAME, "binaryValue", json[elt].IDX, "hasBinaryValue", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                DeviceHelper.create_Attributes(binaryValueNode, json[elt], "default");
            }
        }).catch((err)=>console.log(err));
    }
    static async generateAnalogValue(parentId, json) {
        return DeviceHelper.initialize().then(async (result)=>{
            const generatedProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Analog Values",
                type: "analogValues"
            }, undefined);
            var generatedProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedProfileId, DeviceHelper.contextId, "hasAnalogValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in json){
                var analogValueNode = await DeviceHelper.generateProfile(generatedProfileId, json[elt].NAME == undefined ? "Unnamed" : json[elt].NAME, "analogValue", json[elt].IDX, "hasAnalogValue", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                DeviceHelper.create_Attributes(analogValueNode, json[elt], "default");
            }
        }).catch((err)=>console.log(err));
    }
    static async generateMSValue(parentId, json) {
        return DeviceHelper.initialize().then(async (result)=>{
            const generatedProfileId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Multi-State Value",
                type: "multiStateValues"
            }, undefined);
            var generatedProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedProfileId, DeviceHelper.contextId, "hasMultiStateValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in json){
                var MSValueNode = await DeviceHelper.generateProfile(generatedProfileId, json[elt].NAME == undefined ? "Unnamed" : json[elt].NAME, "multiStateValue", json[elt].IDX, "hasMultiStateValue", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                DeviceHelper.create_Attributes(MSValueNode, json[elt], "default");
            }
        }).catch((err)=>console.log(err));
    }
    static async generateABMSInputOutputs(parentId, json) {
        // Obligation d'utiliser plusieurs variables car le fichier xml de distech n'est pas rangé en "Analog/Binary/MS input/output mais par entrée/sorties logiques"
        let hardwareInput = json.Root.BacnetIPHardwareInputResource;
        let hardwareOutput = json.Root.BacnetIPHardwareOutputResource;
        let lightOutput = json.Root.BacnetIPLightOutputResource;
        let sunblindOutput = json.Root.BacnetIPSunblindOutputObjectResource;
        let smartSenseObject = json.Root.SmartSenseObjectResource;
        let lightAndSunblindInput = json.Root.BacnetIPLightAndSunblindModuleInputResource;
        let number = 0;
        return this.initialize().then(async (result)=>{
            const generatedAnalogInputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Analog Input",
                type: "analogInputs"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedAnalogInputsId, this.contextId, "hasAnalogInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const generatedBinaryInputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Binary Input",
                type: "binaryInputs"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedBinaryInputsId, this.contextId, "hasBinaryInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const generatedAnalogOutputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Analog Output",
                type: "analogOutputs"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedAnalogOutputsId, this.contextId, "hasAnalogOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const generatedMultiStateInputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Multi State Input",
                type: "multiStateInputs"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedMultiStateInputsId, this.contextId, "hasMultiStateInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // Parcours de la list des Hardware Inputs
            for(let hi in hardwareInput){
                // check sur le Maximum pour savoir si analog ou binary Input
                let type = hardwareInput[hi].Maximum == "1" ? "binaryInput" : "analogInput";
                let nameOfBacnet = hardwareInput[hi].NAME == undefined ? "undefined Name" : hardwareInput[hi].NAME;
                const generatedHardwareInputId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: nameOfBacnet,
                    type: type
                }, undefined);
                if (type == "analogInput") {
                    let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedAnalogInputsId, generatedHardwareInputId, this.contextId, "hasAnalogInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    await this.create_Attributes(node, hardwareInput[hi], "default");
                } else if (type == "binaryInput") {
                    let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedBinaryInputsId, generatedHardwareInputId, this.contextId, "hasBinaryInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    await this.create_Attributes(node, hardwareInput[hi], "default");
                } else console.log("undefined type of BacnetValue");
            }
            // Parcours de la liste des Hardware Outputs
            for(let ho in hardwareOutput)if (hardwareOutput[ho].NAME != undefined) {
                const generatedHardwareOutputId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: hardwareOutput[ho].NAME,
                    type: "analogOutput"
                }, undefined);
                let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedAnalogOutputsId, generatedHardwareOutputId, this.contextId, "hasAnalogOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                await this.create_Attributes(node, hardwareOutput[ho], "default");
            }
            // Parcours de la iste des LightOutputs
            for(let li in lightOutput)if (lightOutput[li].NAME != undefined) {
                const generatedLightOutputId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: lightOutput[li].NAME,
                    type: "analogOutput"
                }, undefined);
                let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedAnalogOutputsId, generatedLightOutputId, this.contextId, "hasAnalogOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                await this.create_Attributes(node, lightOutput[li], "default");
            }
            // Parcours de la liste des Sunblind Outputs
            for(let so in sunblindOutput)if (sunblindOutput[so].NAME != undefined) {
                const generatedSunblindOutputId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: sunblindOutput[so].NAME,
                    type: "analogOutput"
                }, undefined);
                let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedAnalogOutputsId, generatedSunblindOutputId, this.contextId, "hasAnalogOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                await this.create_Attributes(node, sunblindOutput[so], "default");
            }
            // Parcours de la liste des smartSenseObject
            for(let sso in smartSenseObject){
                // on se base sur la valeur de InputType pour déterminer le type de BacnetValue
                let type = smartSenseObject[sso].InputType == "3" ? "binaryInput" : "analogInput";
                if (smartSenseObject[sso].NAME != undefined) {
                    let nameOfBacnet = smartSenseObject[sso].NAME;
                    const generatedSmartSenseObjectId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: nameOfBacnet,
                        type: type
                    }, undefined);
                    if (type == "analogInput") {
                        let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedAnalogInputsId, generatedSmartSenseObjectId, this.contextId, "hasAnalogInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                        await this.create_Attributes(node, smartSenseObject[sso], "default");
                    } else if (type == "binaryInput") {
                        let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedBinaryInputsId, generatedSmartSenseObjectId, this.contextId, "hasBinaryInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                        await this.create_Attributes(node, smartSenseObject[sso], "default");
                    } else console.log("undefined type of BacnetValue");
                    console.log(smartSenseObject[sso].NAME);
                    console.log(type);
                }
            }
            // parcours de la liste des Light And Sunblinds Inputs
            for(let sbi in lightAndSunblindInput){
                if (lightAndSunblindInput[sbi].NAME != undefined) {
                    const generatedLightAndSunblindInputId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: lightAndSunblindInput[sbi].NAME,
                        type: "multiStateinput"
                    }, undefined);
                    let node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedMultiStateInputsId, generatedLightAndSunblindInputId, this.contextId, "hasMultiStateInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    await this.create_Attributes(node, lightAndSunblindInput[sbi], "default");
                }
                console.log(lightAndSunblindInput[sbi].NAME, "multiStateInput");
            }
        }).catch((err)=>console.log(err));
    }
    static async generateBacNetValues(parentId, json) {
        const parentNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        const children = await parentNode.getChildren("hasBacnetValues");
        console.log(children);
        if (children.length == 0) {
            const object_BacnetIPNetworkValueResource = json.Root.BacnetIPNetworkValueResource;
            const object_BacnetIPBinaryValueResource = json.Root.BacnetIPBinaryValueResource;
            const object_BacnetIPAnalogValueResource = json.Root.BacnetIPAnalogValueResource;
            const object_BacnetIPMultiStateValueResource = json.Root.BacnetIPMultiStateValueResource;
            return DeviceHelper.initialize().then(async (result)=>{
                const generatedBacnetValuesId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                    name: "BacnetValues",
                    type: "bacnetValues"
                }, undefined);
                var generatedBacnetValuesnode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedBacnetValuesId, DeviceHelper.contextId, "hasBacnetValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                const bacnetId = generatedBacnetValuesnode.info.id;
                await DeviceHelper.generateNetworkValue(bacnetId, object_BacnetIPNetworkValueResource);
                await DeviceHelper.generateBinaryValue(bacnetId, object_BacnetIPBinaryValueResource);
                await DeviceHelper.generateAnalogValue(bacnetId, object_BacnetIPAnalogValueResource);
                await DeviceHelper.generateMSValue(bacnetId, object_BacnetIPMultiStateValueResource);
                await this.generateABMSInputOutputs(bacnetId, json);
            }).catch((err)=>console.log(err));
        } else console.log("Cr\xe9ation des BacnetValues d\xe9j\xe0 effectu\xe9e");
    }
    static async generateBacNetValuesFromDiscovery(parentNodeId, parentContextId, deviceSelectedId, networkSelectedId, contextSelectedId) {
        // Get node 1 
        const selectedDeviceNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(deviceSelectedId);
        // Get context 1
        const context1 = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(contextSelectedId);
        // Get context 2
        const context2 = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentContextId);
        // Get the parent node
        const parentNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentNodeId);
        // generate bacnet values if there isn't
        const children = await parentNode.getChildren("hasBacnetValues");
        if (children.length == 0) return DeviceHelper.initialize().then(async (result)=>{
            const generatedBacnetValuesId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "BacnetValues",
                type: "bacnetValues"
            }, undefined);
            // Get node 2
            const generatedBacnetValuesnode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentNodeId, generatedBacnetValuesId, parentContextId, "hasBacnetValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await DeviceHelper.getBacnetValues(context1, context2, selectedDeviceNode, generatedBacnetValuesnode);
        }).catch((err)=>console.log(err));
        else console.log("Cr\xe9ation des BacnetValues d\xe9j\xe0 effectu\xe9e");
    }
    static async getBacnetValues(context1, context2, node1, node2) {
        const childrenToAdd = await node1.getChildrenInContext(context1);
        const prom = [];
        for (const child of childrenToAdd){
            const childNodeConfig = DeviceHelper.setChildNodeConfiguration(child.info.typeNetwork.get(), child.info.type.get());
            const n = new (0, _spinalEnvViewerGraphService.SpinalNode)(childNodeConfig[2], childNodeConfig[1]);
            prom.push(node2.addChildInContext(n, childNodeConfig[0], "PtrLst", context2));
            prom.push(DeviceHelper.linkChildren(n, child, context1, context2, childNodeConfig[3]));
        }
        return Promise.all(prom);
    }
    static async linkChildren(n, child, context1, context2, rel2) {
        const prom = [];
        const childrenToAdd = await child.getChildrenInContext(context1);
        for (const grandChild of childrenToAdd){
            const grandChildType = grandChild.info.typeNetwork.get().replace(/(_\w)/g, function(m) {
                return m[1].toUpperCase();
            });
            const grandChildNode = new (0, _spinalEnvViewerGraphService.SpinalNode)(grandChild.info.name.get(), grandChildType);
            prom.push(n.addChildInContext(grandChildNode, rel2, "PtrLst", context2));
            //prom.push(DeviceHelper.getAttributeFromNode(grandChild));
            //console.log(DeviceHelper.getAttributeByLabelAndCategory(grandChild));
            let attributeObj = {
                IDX: grandChild.info.idNetwork.get() - 1,
                NAME: grandChild.info.name.get(),
                type: grandChildType,
                typeId: grandChild.info.typeId.get()
            };
            const keys = Object.keys(attributeObj);
            prom.push((0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addCategoryAttribute(grandChildNode, "default"));
            keys.forEach((key)=>{
                prom.push((0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategoryName(grandChildNode, "default", key, attributeObj[key]));
            });
        }
        return prom;
    }
    static setChildNodeConfiguration(bacnetType, nodeType) {
        let combine = bacnetType + "-" + nodeType;
        let relationName = "";
        let typeName = "";
        let name = "";
        let grandChildRelation = "";
        let resTab = [];
        switch(combine){
            case "analog_value-BmsEndpointGroup":
                relationName = "hasAnalogValues";
                typeName = "analogValues";
                name = "Analog Values";
                grandChildRelation = "hasAnalogValue";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "analog_input-BmsEndpointGroup":
                relationName = "hasAnalogInputs";
                typeName = "analogInputs";
                name = "Analog Input";
                grandChildRelation = "hasAnalogInput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "analog_output-BmsEndpointGroup":
                relationName = "hasAnalogOutputs";
                typeName = "analogOutputs";
                name = "Analog Output";
                grandChildRelation = "hasAnalogOutput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_output-BmsEndpointGroup":
                relationName = "hasMultiStateOutputs";
                typeName = "multiStateOutputs";
                name = "Multi State Output";
                grandChildRelation = "hasMultiStateOutput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_input-BmsEndpointGroup":
                relationName = "hasMultiStateInputs";
                typeName = "multiStateInputs";
                name = "Multi State Input";
                grandChildRelation = "hasMultiStateInput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_value-BmsEndpointGroup":
                relationName = "hasMultiStateValues";
                typeName = "multiStateValues";
                name = "Multi-State Value";
                grandChildRelation = "hasMultiStateValue";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_value-BmsEndpointGroup":
                relationName = "hasBinaryValues";
                typeName = "binaryValues";
                name = "Binary Values";
                grandChildRelation = "hasBinaryValue";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_output-BmsEndpointGroup":
                relationName = "hasBinaryOutputs";
                typeName = "binaryOutputs";
                name = "Binary Output";
                grandChildRelation = "hasBinaryOutput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_input-BmsEndpointGroup":
                relationName = "hasBinaryInputs";
                typeName = "binaryInputs";
                name = "Binary Input";
                grandChildRelation = "hasBinaryInput";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "network_value-BmsEndpointGroup":
                relationName = "hasNetworkValues";
                typeName = "networkValues";
                name = "Network Values";
                grandChildRelation = "hasNetworkValue";
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            default:
                relationName = bacnetType;
                typeName = nodeType;
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
        }
        return resTab;
    }
    // static async getAttributeFromNode(node){
    //   let attributeObj = {
    //     IDX : node.info.idNetwork.get() - 1,
    //     name : node.info.name.get(),
    //     type : node.info.typeNetwork.get().replace(/(_\w)/g, function(m){return m[1].toUpperCase()}),
    //     typeId : node.info.typeId.get()
    //   };
    //   const keys = Object.keys(attributeObj);
    //   let prom = [];
    //   prom.push(AttributeService.addCategoryAttribute(node, "default"));
    //   keys.forEach ( key =>{
    //     prom.push(AttributeService.addAttributeByCategoryName(node, "default", key, attributeObj[key]));
    //   });
    //   return prom;
    // }
    //////////////////////////////////////////////////
    ///////////      ITEM LIST FONCTIONS /////////////
    //////////////////////////////////////////////////
    static async saveProfileAsJson(nodeId) {
        var item_list = [];
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const itemsId = node.getChildrenIds();
        for(var it in itemsId){
            const item = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(itemsId[it]);
            const maitre = await this.getAttributeByLabelAndCategory(itemsId[it], "default", "maitre");
            const namingConvention = await this.getAttributeByLabelAndCategory(itemsId[it], "default", "namingConvention");
            // console.log(item);
            item_list.push({
                name: item.name._data,
                type: item.itemType._data,
                maitre: maitre,
                namingConvention: namingConvention,
                inputs: [],
                outputs: []
            });
            const inputsNodeId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item.id, "hasInputs"))[0].childrenIds;
            for(var ids in inputsNodeId){
                const input = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(inputsNodeId[ids]);
                const IDX = await this.getAttributeByLabelAndCategory(inputsNodeId[ids], "default", "IDX");
                item_list[it].inputs.push({
                    name: input.name._data,
                    IDX: IDX,
                    type: input.type._data
                });
            }
            const outputsNodeId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item.id, "hasOutputs"))[0].childrenIds;
            for(var idss in outputsNodeId){
                const output = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(outputsNodeId[idss]);
                const IDX = await this.getAttributeByLabelAndCategory(outputsNodeId[idss], "default", "IDX");
                item_list[it].outputs.push({
                    name: output.name._data,
                    IDX: IDX,
                    type: output.type._data
                });
            }
        }
        console.log("objet javascript");
        console.log(item_list);
        console.log("conversion au format JSON");
        console.log(JSON.stringify(item_list));
        const blobDataToExport = new Blob([
            JSON.stringify(item_list)
        ], {
            type: ".json"
        });
        console.log("blob");
        console.log(blobDataToExport);
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blobDataToExport);
        link.download = "item_list.json";
        link.click();
        link.remove();
    }
    static async exportJSONItemList(nodeId) {
        var item_list = [];
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(nodeId);
        const itemsId = node.getChildrenIds();
        for(var it in itemsId){
            const item = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(itemsId[it]);
            const namingConvention = await this.getAttributeByLabelAndCategory(itemsId[it], "default", "namingConvention");
            const maitre = await this.getAttributeByLabelAndCategory(itemsId[it], "default", "maitre");
            item_list.push({
                name: item.name._data,
                type: item.itemType._data,
                maitre: maitre,
                namingConvention: namingConvention,
                inputs: [],
                outputs: []
            });
            const inputsNodeId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item.id, "hasInputs"))[0].childrenIds;
            for(var ids in inputsNodeId){
                const input = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(inputsNodeId[ids]);
                const IDX = await this.getAttributeByLabelAndCategory(inputsNodeId[ids], "default", "IDX");
                item_list[it].inputs.push({
                    name: input.name._data,
                    IDX: IDX,
                    type: input.type._data
                });
            }
            const outputsNodeId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item.id, "hasOutputs"))[0].childrenIds;
            for(var idss in outputsNodeId){
                const output = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(outputsNodeId[idss]);
                const IDX = await this.getAttributeByLabelAndCategory(outputsNodeId[idss], "default", "IDX");
                item_list[it].outputs.push({
                    name: output.name._data,
                    IDX: IDX,
                    type: output.type._data
                });
            }
        }
        const blobDataToExport = new Blob([
            JSON.stringify(item_list)
        ], {
            type: ".json"
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blobDataToExport);
        link.download = "item_list.json";
        link.click();
        link.remove();
    }
    static async generateItem_list(parentId) {
        const parentNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        const children = await parentNode.getChildren("hasItemList");
        if (children.length == 0) return DeviceHelper.initialize().then(async (result)=>{
            // Génération du noeud Item_list
            const item_listID = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Item_list",
                type: "itemList"
            }, undefined);
            var item_listNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, item_listID, DeviceHelper.contextId, "hasItemList", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            return item_listNode;
        }).catch((err)=>console.log(err));
        else console.log("Cr\xe9ation d'Item_list d\xe9j\xe0 effectu\xe9e");
    }
    static async listItemInTab(node) {
        var tab2 = [];
        // console.log(node);
        var children = await node.childrenIds;
        for(var elt in children){
            var childNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(children[elt]);
            if (childNode.type._data == "item") {
                let maitreInfos = await DeviceHelper.getAttributeByLabelAndCategory(children[elt], "default", "maitre");
                let namingConventionInfos = await DeviceHelper.getAttributeByLabelAndCategory(children[elt], "default", "namingConvention");
                tab2.push({
                    name: childNode.name._data,
                    maitre: maitreInfos,
                    itemType: childNode.itemType._data,
                    namingConvention: namingConventionInfos,
                    nodeId: children[elt]
                });
            }
        }
        return tab2;
    }
    static async generateItem(parentId, nodeName, isMaitre, itemType, namingConvention, relationName) {
        return DeviceHelper.initialize().then(async (result)=>{
            // add item node
            const generatedItemId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: nodeName,
                maitre: isMaitre,
                itemType: itemType,
                namingConvention: namingConvention,
                type: "item"
            }, undefined);
            let itemNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedItemId, DeviceHelper.contextId, relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add inputs node
            var inputNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Inputs",
                type: "input"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedItemId, inputNodeId, DeviceHelper.contextId, "hasInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add outputs node
            var outputNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Outputs",
                type: "output"
            }, undefined);
            let outputsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedItemId, outputNodeId, DeviceHelper.contextId, "hasOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add Supervision Node
            const supervisionId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Supervision",
                type: "itemSupervision"
            }, undefined);
            let supervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(generatedItemId, supervisionId, DeviceHelper.contextId, "hasSupervisionNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add measures / Alarm / Command children nodes to supervision Node
            const measuresId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Measures",
                type: "measures"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, measuresId, DeviceHelper.contextId, "hasMeasures", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const alarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Alarms",
                type: "alarms"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, alarmsId, DeviceHelper.contextId, "hasAlarms", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const commandsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Commands",
                type: "commands"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, commandsId, DeviceHelper.contextId, "hasCommands", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add item attributes
            DeviceHelper.create_Attributes(itemNode, {
                maitre: isMaitre,
                namingConvention: namingConvention
            }, "default");
            // create returned object
            var returnedObject = {
                name: nodeName,
                maitre: isMaitre,
                itemType: itemType,
                namingConvention: namingConvention,
                nodeId: generatedItemId
            };
            return returnedObject;
        });
    }
    static async itemDetailInput(selectedNode) {
        var inputTab1 = [];
        var parent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(selectedNode.id, "hasItem");
        var nodeParent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent1[0].id._data);
        var parent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(nodeParent1.id, "hasItemList");
        var nodeParent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent2[0].id._data);
        var child = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeParent2.id, "hasBacnetValues");
        var childrenNetworkValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasNetworkValues");
        var childrenNetworkValuesIds = childrenNetworkValues[0].childrenIds;
        // networks values
        for(var elt in childrenNetworkValuesIds){
            var networkValueNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenNetworkValuesIds[elt]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenNetworkValuesIds[elt], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = networkValueNode.name._data;
            var title = "NV_" + (idx + 1);
            inputTab1.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        //Analog Input
        var childrenAnalogInputs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasAnalogInputs");
        var childrenAnalogInputsIds = childrenAnalogInputs[0].childrenIds;
        for(let ai in childrenAnalogInputsIds){
            var analogInputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenAnalogInputsIds[ai]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenAnalogInputsIds[ai], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = analogInputNode.name._data;
            var title = "AI_" + (idx + 1);
            inputTab1.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        // Binary Input
        var childrenBinaryInputs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasBinaryInputs");
        var childrenBinaryInputsIds = childrenBinaryInputs[0].childrenIds;
        for(let bi in childrenBinaryInputsIds){
            var binaryInputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenBinaryInputsIds[bi]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenBinaryInputsIds[bi], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = binaryInputNode.name._data;
            var title = "BI_" + (idx + 1);
            inputTab1.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        // Multi State Input
        var childrenMultiStateInputs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasMultiStateInputs");
        var childrenMultiStateInputsIds = childrenMultiStateInputs[0].childrenIds;
        for(let msi in childrenMultiStateInputsIds){
            var multiStateInputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenMultiStateInputsIds[msi]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenMultiStateInputsIds[msi], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = multiStateInputNode.name._data;
            var title = "MSI_" + (idx + 1);
            inputTab1.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        return inputTab1;
    }
    static async itemDetailOutput(selectedNode) {
        var outputTab = [];
        var parent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(selectedNode.id, "hasItem");
        var nodeParent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent1[0].id._data);
        var parent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(nodeParent1.id, "hasItemList");
        var nodeParent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent2[0].id._data);
        var child = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeParent2.id, "hasBacnetValues");
        // Analog Values
        var childrenAnalogValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasAnalogValues");
        var childrenAnalogValuesIds = childrenAnalogValues[0].childrenIds;
        for(var elt in childrenAnalogValuesIds){
            var analogValueNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenAnalogValuesIds[elt]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenAnalogValuesIds[elt], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = analogValueNode.name._data;
            var title = "AV_" + (idx + 1);
            outputTab.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        // Binary Value
        var childrenBinaryValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasBinaryValues");
        var childrenBinaryValuesIds = childrenBinaryValues[0].childrenIds;
        for(var elt in childrenBinaryValuesIds){
            var binaryValueNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenBinaryValuesIds[elt]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenBinaryValuesIds[elt], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = binaryValueNode.name._data;
            var title = "BV_" + (idx + 1);
            outputTab.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        // Multi-State Value
        var childrenMSValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasMultiStateValues");
        var childrenMSValuesIds = childrenMSValues[0].childrenIds;
        for(var elt in childrenMSValuesIds){
            var MSValueNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenMSValuesIds[elt]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenMSValuesIds[elt], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = MSValueNode.name._data;
            var title = "MSV_" + (idx + 1);
            outputTab.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        // Analog Output
        var childrenAnalogOutputs = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(child[0].id, "hasAnalogOutputs");
        var childrenAnalogOutputsIds = childrenAnalogOutputs[0].childrenIds;
        for(let ao in childrenAnalogOutputsIds){
            var analogOutputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childrenAnalogOutputsIds[ao]);
            const strIDX = await this.getAttributeByLabelAndCategory(childrenAnalogOutputsIds[ao], "default", "IDX");
            var idx = parseInt(strIDX);
            var name = analogOutputNode.name._data;
            var title = "BI_" + (idx + 1);
            inputTab.push({
                title: title,
                name: name,
                idx: idx
            });
        }
        return outputTab;
    }
    static async itemDetailInfos(selectedNode) {
        let maitreInfos = await DeviceHelper.getAttributeByLabelAndCategory(selectedNode.id._data, "default", "maitre");
        let namingConventionInfos = await DeviceHelper.getAttributeByLabelAndCategory(selectedNode.id._data, "default", "namingConvention");
        return {
            namingConvention: namingConventionInfos,
            maitre: maitreInfos
        };
    }
    static async itemDetailInputOutput(selectedNode) {
        var tab = new Object();
        var idx = "";
        tab.NetworkValue = [];
        tab.AnalogValue = [];
        tab.BinaryValue = [];
        tab.MultiStateValue = [];
        tab.AnalogInput = [];
        tab.BinaryInput = [];
        tab.MultiStateInput = [];
        tab.AnalogOutput = [];
        tab.others = [];
        var tempTab = tab;
        var parent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(selectedNode.id, "hasItem");
        var nodeParent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent1[0].id._data);
        var parent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(nodeParent1.id, "hasItemList");
        var nodeParent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(parent2[0].id._data);
        var child = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(nodeParent2.id, "hasBacnetValues");
        var childIds = child[0].childrenIds;
        console.log(childIds);
        for(var elt in childIds){
            var valueNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(childIds[elt]);
            console.log(valueNode);
            var title = "undefined";
            switch(valueNode.type._data){
                case "networkValues":
                    tempTab = tab.NetworkValue;
                    title = "NV_";
                    break;
                case "analogValues":
                    tempTab = tab.AnalogValue;
                    title = "AV_";
                    break;
                case "binaryValues":
                    tempTab = tab.BinaryValue;
                    title = "BV_";
                    break;
                case "multiStateValues":
                    tempTab = tab.MultiStateValue;
                    title = "MSV_";
                    break;
                case "analogInputs":
                    tempTab = tab.AnalogInput;
                    title = "AI_";
                    break;
                case "analogOutputs":
                    tempTab = tab.AnalogOutput;
                    title = "AO_";
                    break;
                case "binaryInputs":
                    tempTab = tab.BinaryInput;
                    title = "BI_";
                    break;
                case "multiStateInputs":
                    tempTab = tab.MultiStateInput;
                    title = "MSI_";
                    break;
                default:
                    console.log("default");
                    console.log(valueNode.type._data);
                    tempTab = tab.others;
                    title = "undefined_";
                    break;
            }
            var valueNodeIds = valueNode.childrenIds;
            for(var elt2 in valueNodeIds){
                var finalNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(valueNodeIds[elt2]);
                if (finalNode.name != undefined) {
                    const strIDX = await this.getAttributeByLabelAndCategory(valueNodeIds[elt2], "default", "IDX");
                    idx = parseInt(strIDX);
                    tempTab.push({
                        title: title + (idx + 1),
                        name: finalNode.name._data,
                        idx: idx,
                        nodeId: valueNodeIds[elt2]
                    });
                }
            }
        }
        console.log(tab);
        return tab;
    }
    //A changer pour prendre en compte les attributs
    static async modifyConventionAndMasterInfos(parentId, namingConvention, master) {
        var node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        node.info.namingConvention.set(namingConvention);
        node.info.maitre.set(master);
    }
    static async addSelectedInputOutput(parentId, selectedInputTab, selectedOutputTab) {
        return DeviceHelper.initialize().then(async (result)=>{
            var inputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasInputs");
            const inputNodeId = inputNode[0].id._data;
            await DeviceHelper.clearLinks(inputNodeId, "hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in selectedInputTab)await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(inputNodeId, selectedInputTab[elt].nodeId, DeviceHelper.contextId, "hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            var outputNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasOutputs");
            const outputNodeId = outputNode[0].id._data;
            await DeviceHelper.clearLinks(outputNodeId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            for(var elt in selectedOutputTab)await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputNodeId, selectedOutputTab[elt].nodeId, DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        }).catch((err)=>console.log(err));
    }
    static async clearLinks(parentId, relationName, relationType) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
        if (realNode.hasRelation(relationName, relationType)) {
            const children = await realNode.getChildren(relationName);
            for(var elt in children){
                let realChildNode = children[elt];
                await realNode.removeChild(realChildNode, relationName, relationType);
            }
            await realNode.removeRelation(relationName, relationType);
        }
    }
    static async clearLinksOneByOne(parentId, childId, relationName, relationType) {
        let realParentNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        let realChildNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(childId);
        if (realParentNode.hasRelation(relationName, relationType)) {
            const children = await realParentNode.getChildren(relationName);
            for(let elt in children){
                console.log(children[elt]);
                if (children[elt].info.id.get() == childId) await realParentNode.removeChild(realChildNode, relationName, relationType);
            }
        }
    }
    static async generateTempTab(parentId, tab) {
        return DeviceHelper.initialize().then(async (result)=>{
            // add item node
            const generatedNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                tab: tab,
                type: "tempTab"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, generatedNodeId, DeviceHelper.contextId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        });
    }
    static async generateItemFromBOG(parentId, tab) {
        return DeviceHelper.initialize().then(async (result)=>{
            let returnedTab = [];
            // get bacnetValues node
            let item_listNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(parentId, "hasItemList"))[0];
            let bacnetValuesNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(item_listNode.id._data, "hasBacnetValues"))[0];
            let networkValuesNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(bacnetValuesNode.id._data, "hasNetworkValues"))[0];
            let analogValuesNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(bacnetValuesNode.id._data, "hasAnalogValues"))[0];
            let binaryValuesNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(bacnetValuesNode.id._data, "hasBinaryValues"))[0];
            let multiStateValuesNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(bacnetValuesNode.id._data, "hasMultiStateValues"))[0];
            let lengthOfTab = tab.length;
            let parentNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
            for(let elt = 0; elt < lengthOfTab; elt++){
                let linksLength = tab[elt].links.length;
                let tabLinks = tab[elt].links;
                let item_name = tab[elt].name._data;
                let item_type;
                let prefix = item_name.split("_")[0];
                if (prefix == "FC") item_type = "Fan Coil";
                else if (prefix == "L") item_type = "Lamp";
                else if (prefix == "B") item_type = "Blind";
                else if (prefix == "WC") item_type = "Windows Contact";
                else if (prefix == "Device") item_type = "Device";
                else if (prefix == "RC") item_type = "Remote Controller";
                else if (prefix == "L") item_type = "Lamp";
                else item_type = "inconnu";
                // choix du type d'item
                // tant que l'on ne sait pas ce qu'est CG => exception à la génération
                if (prefix != "CG" && item_type != "inconnu") {
                    // add item node
                    const itemId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: item_name,
                        maitre: false,
                        itemType: item_type,
                        namingConvention: item_name,
                        type: "item"
                    }, undefined);
                    const nodeCreated = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, itemId, DeviceHelper.contextId, "hasItem", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    // add item attributes
                    DeviceHelper.create_Attributes(nodeCreated, {
                        maitre: false,
                        namingConvention: item_name
                    }, "default");
                    returnedTab.push({
                        name: item_name,
                        maitre: false,
                        itemType: item_type,
                        namingConvention: item_name,
                        nodeId: itemId
                    });
                    // add inputs node
                    const inputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Inputs",
                        type: "input"
                    }, undefined);
                    let inputsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(itemId, inputsId, DeviceHelper.contextId, "hasInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    // add outputs node
                    const outputsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Outputs",
                        type: "output"
                    }, undefined);
                    let outputsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(itemId, outputsId, DeviceHelper.contextId, "hasOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    // add Supervision Node
                    const supervisionId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Supervision",
                        type: "itemSupervision"
                    }, undefined);
                    let supervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(itemId, supervisionId, DeviceHelper.contextId, "hasSupervisionNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    // add measures / Alarm / Command children nodes to supervision Node
                    const measuresId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Measures",
                        type: "measures"
                    }, undefined);
                    await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, measuresId, DeviceHelper.contextId, "hasMeasures", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    const alarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Alarms",
                        type: "alarms"
                    }, undefined);
                    await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, alarmsId, DeviceHelper.contextId, "hasAlarms", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    const commandsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                        name: "Commands",
                        type: "commands"
                    }, undefined);
                    await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionId, commandsId, DeviceHelper.contextId, "hasCommands", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    // generate links
                    for(let linkElt = 0; linkElt < linksLength; linkElt++){
                        //input nv link
                        if (tabLinks[linkElt].type._data == "nv") {
                            let idsToLink = networkValuesNode.childrenIds;
                            let suiteAdded = parseInt(tabLinks[linkElt].suite._data);
                            for(let id in idsToLink){
                                let nodeToCheck = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(idsToLink[id]);
                                if (suiteAdded == 0) {
                                    if (parseInt(nodeToCheck.IDX._data) + 1 == tabLinks[linkElt].idx._data) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(inputsId, idsToLink[id], DeviceHelper.contextId, "hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                                } else if (parseInt(nodeToCheck.IDX._data) + 1 >= tabLinks[linkElt].idx._data && parseInt(nodeToCheck.IDX._data) + 1 < parseInt(tabLinks[linkElt].idx._data) + suiteAdded) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(inputsId, idsToLink[id], DeviceHelper.contextId, "hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                            }
                        } else if (tab[elt].links[linkElt].type == "av") {
                            let idsToLink = analogValuesNode.childrenIds;
                            let suiteAdded = parseInt(tabLinks[linkElt].suite._data);
                            for(let id in idsToLink){
                                let nodeToCheck = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(idsToLink[id]);
                                if (suiteAdded == 0) {
                                    if (parseInt(nodeToCheck.IDX._data) + 1 == tabLinks[linkElt].idx._data) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                                } else if (parseInt(nodeToCheck.IDX._data) + 1 >= tabLinks[linkElt].idx._data && parseInt(nodeToCheck.IDX._data) + 1 < parseInt(tabLinks[linkElt].idx._data) + suiteAdded) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                            }
                        } else if (tab[elt].links[linkElt].type == "bv") {
                            let idsToLink = binaryValuesNode.childrenIds;
                            let suiteAdded = parseInt(tabLinks[linkElt].suite._data);
                            for(let id in idsToLink){
                                let nodeToCheck = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(idsToLink[id]);
                                if (suiteAdded == 0) {
                                    if (parseInt(nodeToCheck.IDX._data) + 1 == tabLinks[linkElt].idx._data) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                                } else if (parseInt(nodeToCheck.IDX._data) + 1 >= tabLinks[linkElt].idx._data && parseInt(nodeToCheck.IDX._data) + 1 < parseInt(tabLinks[linkElt].idx._data) + suiteAdded) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                            }
                        } else if (tab[elt].links[linkElt].type == "mv") {
                            let idsToLink = multiStateValuesNode.childrenIds;
                            let suiteAdded = parseInt(tabLinks[linkElt].suite._data);
                            for(let id in idsToLink){
                                let nodeToCheck = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(idsToLink[id]);
                                if (suiteAdded == 0) {
                                    if (parseInt(nodeToCheck.IDX._data) + 1 == tabLinks[linkElt].idx._data) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                                } else if (parseInt(nodeToCheck.IDX._data) + 1 >= tabLinks[linkElt].idx._data && parseInt(nodeToCheck.IDX._data) + 1 < parseInt(tabLinks[linkElt].idx._data) + suiteAdded) await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(outputsId, idsToLink[id], DeviceHelper.contextId, "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                            }
                        } else console.log("error link");
                    }
                }
            }
            return returnedTab;
        });
    }
    static async clearItems(parentId) {
        let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(realNode);
        if (realNode.hasRelation("hasItem", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
            let itemNodes = await realNode.getChildren("hasItem");
            // console.log(itemNodes);
            for(let item in itemNodes){
                // console.log(itemNodes[item]);
                if (itemNodes[item].hasRelation("hasInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
                    let inputsNode = (await itemNodes[item].getChildren("hasInputs"))[0];
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(inputsNode);
                    if (inputsNode.hasRelation("hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
                        await DeviceHelper.clearLinks(inputsNode.info.id.get(), "hasInput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                        await DeviceHelper.clearLinks(itemNodes[item].info.id.get(), "hasInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    } else await DeviceHelper.clearLinks(itemNodes[item].info.id.get(), "hasInputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                }
                if (itemNodes[item].hasRelation("hasOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
                    let outputsNode = (await itemNodes[item].getChildren("hasOutputs"))[0];
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(outputsNode);
                    if (outputsNode.hasRelation("hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
                        await DeviceHelper.clearLinks(outputsNode.info.id.get(), "hasOutput", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                        await DeviceHelper.clearLinks(itemNodes[item].info.id.get(), "hasOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    } else await DeviceHelper.clearLinks(itemNodes[item].info.id.get(), "hasOutputs", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                }
            }
            await DeviceHelper.clearLinks(realNode.info.id.get(), "hasItem", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// ITEM SUPERVISION FUNCTIONS ///////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    static getTitle(title) {
        let titleReturned = "";
        title = title[0].toUpperCase() + title.slice(1);
        for(let i = 0; i < title.length; i++)if (title[i] === title[i].toUpperCase() && title[i] !== title[i].toLowerCase()) titleReturned += title[i];
        titleReturned += "_";
        return titleReturned;
    }
    static async itemSupervisionInputOutput(parentId) {
        return DeviceHelper.initialize().then(async (result)=>{
            let tab = [];
            let parent1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(parentId, "hasItem");
            let parent2 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(parent1[0].id.get(), "hasItemList");
            let child = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parent2[0].id.get(), "hasBacnetValues"))[0];
            let childNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(child.id.get());
            let bacnetTypesNode = await childNode.getChildrenInContext(this.context);
            for (let bacnetType of bacnetTypesNode){
                if (bacnetType.info.type != "networkValues") {
                    let bacnetValues = await bacnetType.getChildrenInContext(this.context);
                    if (bacnetValues.length != 0) {
                        let title = DeviceHelper.getTitle(bacnetType.info.type.get());
                        for (let endPoint of bacnetValues){
                            (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(endPoint);
                            let nodeId = endPoint.info.id.get();
                            let idx = await this.getAttributeByLabelAndCategory(nodeId, "default", "IDX");
                            let name = await this.getAttributeByLabelAndCategory(nodeId, "default", "NAME");
                            tab.push({
                                title: title + (parseInt(idx) + 1),
                                name: name,
                                nodeId: nodeId
                            });
                        }
                    }
                }
                tab.push();
            }
            return tab;
        });
    }
    static async generateSupervisionLinks(parentId, childId, relationName, globalNodeId, relationToGlobalNodeId) {
        console.log(parentId, childId, relationName, globalNodeId, relationToGlobalNodeId);
        await this.initialize();
        await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, childId, this.contextId, relationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalNodeId, childId, this.contextId, relationToGlobalNodeId, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
    }
    static async getItemSupervisionLinks(parentId, relationName) {
        let tab = [];
        let bacnetsLinked = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, relationName);
        if (bacnetsLinked.length != 0) for (let bac of bacnetsLinked){
            let title = "undefined";
            let nodeId = bac.id.get();
            let idx = await this.getAttributeByLabelAndCategory(nodeId, "default", "IDX");
            let name = await this.getAttributeByLabelAndCategory(nodeId, "default", "NAME");
            // let nb = parseInt(bac.IDX.get()) + 1;
            switch(bac.type.get()){
                case "networkValue":
                    title = "NV_";
                    break;
                case "analogValue":
                    title = "AV_";
                    break;
                case "analogInput":
                    title = "AI_";
                    break;
                case "analogOutput":
                    title = "AO_";
                    break;
                case "binaryValue":
                    title = "BV_";
                    break;
                case "binaryInput":
                    title = "BI_";
                    break;
                case "multiStateValue":
                    title = "MSV_";
                    break;
                case "multiStateinput":
                    title = "MSI_";
                    break;
                default:
                    break;
            }
            tab.push({
                title: title + (parseInt(idx) + 1),
                name: name,
                nodeId: nodeId
            });
            console.log(bac);
        }
        console.log(tab);
        return tab;
    }
    /////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// MONITORING CONFIGURATION /////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    static async generateSupervisionGraph(parentId) {
        const parentNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(parentId);
        const children = await parentNode.getChildren("hasGlobalSupervision");
        if (children.length == 0) return DeviceHelper.initialize().then(async (result)=>{
            // add Monitoring node : child of device
            const supervisionNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Supervision",
                type: "globalDeviceSupervision"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, supervisionNodeId, DeviceHelper.contextId, "hasGlobalSupervision", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add global Measure / Alarms / Commands node
            const globalMeasureId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Measures",
                type: "deviceGlobalMeasures"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionNodeId, globalMeasureId, DeviceHelper.contextId, "hasGlobalMeasures", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const globalAlarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Alarms",
                type: "deviceGlobalAlarms"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionNodeId, globalAlarmsId, DeviceHelper.contextId, "hasGlobalAlarms", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            const globalCommandId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Commands",
                type: "deviceGlobalCommands"
            }, undefined);
            await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(supervisionNodeId, globalCommandId, DeviceHelper.contextId, "hasGlobalCommands", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            // add basic interval Time
            // basic Intervals for Measures : Not monitored, 5000 ms and COV
            const intervalTimeNotMonitoredMeasureId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Not Monitored",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTimeNotMonitoredMeasureNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalMeasureId, intervalTimeNotMonitoredMeasureId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTimeNotMonitoredMeasureNode, {
                Monitoring: false,
                IntervalTime: 0
            }, "Supervision");
            const intervalTimeCOVMeasureId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "COV",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTimeCOVMeasureNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalMeasureId, intervalTimeCOVMeasureId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTimeCOVMeasureNode, {
                Monitoring: true,
                IntervalTime: "COV"
            }, "Supervision");
            const intervalTime5sMeasureId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "5000",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTime5sMeasureNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalMeasureId, intervalTime5sMeasureId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTime5sMeasureNode, {
                Monitoring: true,
                IntervalTime: 5000
            }, "Supervision");
            // basic intervals for alarms : not monitored, 5000 ms and COV
            const intervalTimeNotMonitoredAlarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "Not Monitored",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTimeNotMonitoredAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalAlarmsId, intervalTimeNotMonitoredAlarmsId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTimeNotMonitoredAlarmsNode, {
                Monitoring: false,
                IntervalTime: 0
            }, "Supervision");
            const intervalTimeCOVAlarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "COV",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTimeCOVAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalAlarmsId, intervalTimeCOVAlarmsId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTimeCOVAlarmsNode, {
                Monitoring: true,
                IntervalTime: "COV"
            }, "Supervision");
            const intervalTime5sAlarmsId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "5000",
                type: "supervisionIntervalTime"
            }, undefined);
            let intervalTime5sAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(globalAlarmsId, intervalTime5sAlarmsId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await this.create_Attributes(intervalTime5sAlarmsNode, {
                Monitoring: true,
                IntervalTime: 5000
            }, "Supervision");
        ///////// add basic Interval Times
        // // add COV IntervalTime
        // const intervalTimeCOVNodeId = SpinalGraphService.createNode({
        //   name: "COV",
        //   type: "deviceMonitoringIntervalTime"
        // }, undefined);
        // let intervalTimeCOVNode = await SpinalGraphService.addChildInContext(monitoringNodeId, intervalTimeCOVNodeId, DeviceHelper.contextId, "hasIntervalTimeNode", SPINAL_RELATION_PTR_LST_TYPE);
        // await DeviceHelper.create_Attributes(intervalTimeCOVNode, { Monitoring: true, IntervalTime: "COV" }, "Monitoring");
        // // add 5s IntervalTime
        // const intervalTime5000NodeId = SpinalGraphService.createNode({
        //   name: "5s",
        //   type: "deviceMonitoringIntervalTime"
        // }, undefined);
        // let intervalTime5000Node = await SpinalGraphService.addChildInContext(monitoringNodeId, intervalTime5000NodeId, DeviceHelper.contextId, "hasIntervalTimeNode", SPINAL_RELATION_PTR_LST_TYPE);
        // await DeviceHelper.create_Attributes(intervalTime5000Node, { Monitoring: true, IntervalTime: 5000 }, "Monitoring");
        }).catch((err)=>console.log(err));
        else console.log("Cr\xe9ation de supervision d\xe9j\xe0 effectu\xe9e");
    }
    static async getLinkedOutputBacnetValues_FromMonitoringNodeId(parentId) {
        let itemsIdTab = await this.getItemsId_FromMonitoringNodeId(parentId);
        let AVBVMSV_Idstab = await this.getListOutputByItem(itemsIdTab);
        let serializedTab = await this.getSerializedTabByItem(AVBVMSV_Idstab);
        return serializedTab;
    }
    static async getLinkedOutputBacnetValues_FromItemId(parentId) {
        let tab = [];
        tab[0] = parentId;
        let AVBVMSV_Idstab = await this.getListOutputByItem(tab);
        let serializedTab = await this.getSerializedTabByItem(AVBVMSV_Idstab);
        return serializedTab;
    }
    static async getItemsId_FromMonitoringNodeId(parentId) {
        let tab = [];
        let deviceProfileNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(parentId, "hasMonitoringNode"))[0];
        let itemListNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceProfileNode.id.get(), "hasItemList"))[0];
        let itemsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(itemListNode.id.get(), "hasItem");
        for(let elt in itemsNode)tab.push(itemsNode[elt].id.get());
        return tab;
    }
    static async getListOutputByItem(tab) {
        let AVBVMSV_Idstab = [];
        for(let elt in tab){
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(tab[elt]);
            let outputsNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(tab[elt], "hasOutputs"))[0];
            let outputBacnetValuesNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(outputsNode.id.get(), "hasOutput");
            if (outputBacnetValuesNode.length != 0) {
                let outputTab = [];
                for(let value in outputBacnetValuesNode)outputTab.push(outputBacnetValuesNode[value].id.get());
                AVBVMSV_Idstab.push({
                    item_name: realNode.info.name.get(),
                    outputs: outputTab
                });
            }
        }
        return AVBVMSV_Idstab;
    }
    static async getSerializedTabByItem(tab) {
        return DeviceHelper.initialize().then(async (result)=>{
            let serializedTab = [];
            for(let elt in tab){
                let outputsId = tab[elt].outputs;
                for(let id in outputsId){
                    let intervalTime = "null";
                    let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(outputsId[id]);
                    let intervalTimeNodes = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(outputsId[id], "hasIntervalTime");
                    if (intervalTimeNodes.length != 0) {
                        let intervalTimeNode = intervalTimeNodes[0];
                        console.log(intervalTimeNode);
                        intervalTime = await this.getAttributeByLabelAndCategory(intervalTimeNode.id.get(), "Monitoring", "IntervalTime");
                    }
                    let name = await this.getAttributeByLabelAndCategory(outputsId[id], "default", "NAME");
                    let idx = await this.getAttributeByLabelAndCategory(outputsId[id], "default", "IDX");
                    let type = realNode.info.type.get();
                    let title = "undefined_";
                    switch(type){
                        case "analogValue":
                            title = "AV_";
                            break;
                        case "binaryValue":
                            title = "BV_";
                            break;
                        case "multiStateValue":
                            title = "MSV_";
                            break;
                    }
                    let generic_name = title + (parseInt(idx) + 1);
                    serializedTab.push({
                        generic_name: generic_name,
                        name: name,
                        item_name: tab[elt].item_name,
                        nodeId: realNode.info.id.get(),
                        intervalTime: intervalTime
                    });
                }
            }
            return serializedTab;
        }).catch((err)=>console.log(err));
    }
    // static async getIntervalTimeList(parentId) {
    //   let returnTab = [];
    //   let intervalTimeNodeTab = await SpinalGraphService.getChildren(parentId, "hasIntervalTimeNode");
    //   for (let elt in intervalTimeNodeTab) {
    //     let intervalTime = await this.getAttributeByLabelAndCategory(intervalTimeNodeTab[elt].id.get(), "Monitoring", "IntervalTime");
    //     console.log(intervalTime);
    //     returnTab.push({ value: intervalTime, nodeId: intervalTimeNodeTab[elt].id.get() });
    //   }
    //   return returnTab;
    // }
    // static async addIntervalTimeNode(monitoringNodeId, newIntervalTime) {
    //   return DeviceHelper.initialize()
    //     .then(async result => {
    //       const newIntervalTimeNodeId = SpinalGraphService.createNode({
    //         name: newIntervalTime,
    //         type: "deviceMonitoringIntervalTime"
    //       }, undefined);
    //       let newIntervalTimeNode = await SpinalGraphService.addChildInContext(monitoringNodeId, newIntervalTimeNodeId, DeviceHelper.contextId, "hasIntervalTimeNode", SPINAL_RELATION_PTR_LST_TYPE);
    //       await DeviceHelper.create_Attributes(newIntervalTimeNode, { Monitoring: true, IntervalTime: parseInt(newIntervalTime) }, "Monitoring");
    //       let returnTab = { value: parseInt(newIntervalTime), nodeId: newIntervalTimeNodeId }
    //       return returnTab;
    //     })
    //     .catch(err => console.log(err));
    // }
    static async clearMonitoringLinks(intervalTimeList) {
        for(let elt in intervalTimeList)await DeviceHelper.clearLinks(intervalTimeList[elt].nodeId, "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
    }
    // static async generateMonitoringLinks(tab, intervalTimeList, savedTab) {
    //   return DeviceHelper.initialize().then(async result => {
    //     for (let elt in tab) {
    //       if(tab[elt].intervalTime != savedTab[elt].intervalTime){
    //         if(tab[elt].intervalTime == null || tab[elt].intervalTime == "null"){
    //           //clear
    //           let parent = await SpinalGraphService.getParents(tab[elt].nodeId, "hasIntervalTime");  
    //           if(parent.length !=0){
    //             await this.clearLinksOneByOne(parent[0].id.get(), tab[elt].nodeId, "hasIntervalTime", SPINAL_RELATION_PTR_LST_TYPE);
    //             spinalEventEmitter.emit("deviceProfileContext-ChangeMonitoring", {
    //               parentId: null,
    //               childId: tab[elt].nodeId,
    //               relationName: null,
    //               tag: "CLEARED"
    //             });
    //           }
    //         }
    //         else{
    //           for (let elt2 in intervalTimeList) {
    //             if (tab[elt].intervalTime == intervalTimeList[elt2].value) {
    //               let parent = await SpinalGraphService.getParents(tab[elt].nodeId, "hasIntervalTime");
    //               console.log(parent);
    //               if(parent.length !=0){
    //                 await this.clearLinksOneByOne(parent[0].id.get(), tab[elt].nodeId, "hasIntervalTime", SPINAL_RELATION_PTR_LST_TYPE);
    //               }
    //               await SpinalGraphService.addChildInContext(intervalTimeList[elt2].nodeId, tab[elt].nodeId, DeviceHelper.contextId, "hasIntervalTime", SPINAL_RELATION_PTR_LST_TYPE);
    //               spinalEventEmitter.emit("deviceProfileContext-ChangeMonitoring", {
    //                 parentId: intervalTimeList[elt2].nodeId,
    //                 childId: tab[elt].nodeId,
    //                 relationName: "hasIntervalTime",
    //                 tag: "MODIFIED"
    //               });
    //             }
    //           }
    //         }
    //       }
    //     }
    //   })
    //     .catch(err => console.log(err));
    // }
    static async clearEndpointsMonitoringConfiguration(tab) {
        for(let elt in tab)if (tab[elt].intervalTime != "") {
            tab[elt].intervalTime = "";
            let parent = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(tab[elt].nodeId, "hasIntervalTime");
            if (parent.length != 0) await this.clearLinks(parent[0].id.get(), "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
        }
        return tab;
    }
    ////////////////////////////////////////////////////////////////
    /////////////////////// GLOBAL SUPERVISION ////////////////////
    ////////////////////////////////////////////////////////////////
    static defineTitle(type) {
        let title = "undefined_";
        switch(type){
            case "networkValue":
                title = "NV_";
                break;
            case "analogValue":
                title = "AV_";
                break;
            case "analogInput":
                title = "AI_";
                break;
            case "analogOutput":
                title = "AO_";
                break;
            case "binaryValue":
                title = "BV_";
                break;
            case "binaryInput":
                title = "BI_";
                break;
            case "multiStateValue":
                title = "MSV_";
                break;
            case "multiStateinput":
                title = "MSI_";
                break;
            default:
                title = "undefined_type_";
                break;
        }
        return title;
    }
    static async getGlobalSupervisionConfiguration(parentId) {
        let returnTab = {
            measures: [],
            alarms: [],
            commands: []
        };
        let globalMeasuresNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasGlobalMeasures");
        let globalAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasGlobalAlarms");
        let globalCommandsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasGlobalCommands");
        let tempTab = [
            globalMeasuresNode[0].id.get(),
            globalAlarmsNode[0].id.get(),
            globalCommandsNode[0].id.get()
        ];
        for (let glob of tempTab)if (glob == globalCommandsNode[0].id.get()) {
            let bacnetValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(glob, "hasGlobalCommand");
            for (let bac of bacnetValues){
                let name = await this.getAttributeByLabelAndCategory(bac.id.get(), "default", "NAME");
                let title = this.defineTitle(bac.type.get());
                let idx = await this.getAttributeByLabelAndCategory(bac.id.get(), "default", "IDX");
                let idxx = parseInt(idx) + 1;
                let commandsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(bac.id.get(), "hasCommand");
                let supervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(commandsNode[0].id.get(), "hasCommands");
                let itemNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(supervisionNode[0].id.get(), "hasSupervisionNode");
                returnTab.commands.push({
                    name: name,
                    generic_name: title + idxx,
                    item_name: itemNode[0].name.get(),
                    nodeId: bac.id.get()
                });
            }
        } else {
            let intervalTimeNodes = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(glob, "hasIntervalTimeNode");
            for (let iT of intervalTimeNodes){
                let intervalTime = await this.getAttributeByLabelAndCategory(iT.id.get(), "Supervision", "IntervalTime");
                let bacnetValues = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(iT.id.get(), "hasIntervalTime");
                for (let bac of bacnetValues){
                    let name = await this.getAttributeByLabelAndCategory(bac.id.get(), "default", "NAME");
                    let title = this.defineTitle(bac.type.get());
                    let idx = await this.getAttributeByLabelAndCategory(bac.id.get(), "default", "IDX");
                    let idxx = parseInt(idx) + 1;
                    if (glob == globalMeasuresNode[0].id.get()) {
                        let measuresNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(bac.id.get(), "hasMeasure");
                        let supervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(measuresNode[0].id.get(), "hasMeasures");
                        let itemNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(supervisionNode[0].id.get(), "hasSupervisionNode");
                        returnTab.measures.push({
                            name: name,
                            generic_name: title + idxx,
                            item_name: itemNode[0].name.get(),
                            intervalTime: intervalTime,
                            nodeId: bac.id.get()
                        });
                    } else if (glob == globalAlarmsNode[0].id.get()) {
                        let alarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(bac.id.get(), "hasAlarm");
                        let supervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(alarmsNode[0].id.get(), "hasAlarms");
                        let itemNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(supervisionNode[0].id.get(), "hasSupervisionNode");
                        returnTab.alarms.push({
                            name: name,
                            generic_name: title + idxx,
                            item_name: itemNode[0].name.get(),
                            intervalTime: intervalTime,
                            nodeId: bac.id.get()
                        });
                    }
                }
            }
        }
        console.log(returnTab);
        return returnTab;
    }
    static async getIntervalTimeList(parentId) {
        let returnTab = {
            alarms: [],
            measures: []
        };
        let globalMeasuresNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasGlobalMeasures");
        let globalAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(parentId, "hasGlobalAlarms");
        let globTab = [
            globalMeasuresNode[0].id.get(),
            globalAlarmsNode[0].id.get()
        ];
        for (let glob of globTab){
            let intervalTimeNodeList = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(glob, "hasIntervalTimeNode");
            for (let iT of intervalTimeNodeList){
                let intervalTime = await this.getAttributeByLabelAndCategory(iT.id.get(), "Supervision", "IntervalTime");
                if (glob == globalMeasuresNode[0].id.get()) returnTab.measures.push({
                    value: intervalTime,
                    nodeId: iT.id.get()
                });
                else if (glob == globalAlarmsNode[0].id.get()) returnTab.alarms.push({
                    value: intervalTime,
                    nodeId: iT.id.get()
                });
            }
        }
        console.log(returnTab);
        return returnTab;
    // let intervalTimeNodeTab = await SpinalGraphService.getChildren(parentId, "hasIntervalTimeNode");
    // for (let elt in intervalTimeNodeTab) {
    //   let intervalTime = await this.getAttributeByLabelAndCategory(intervalTimeNodeTab[elt].id.get(), "Monitoring", "IntervalTime");
    //   console.log(intervalTime);
    //   returnTab.push({ value: intervalTime, nodeId: intervalTimeNodeTab[elt].id.get() });
    // }
    // return returnTab;
    }
    static async addIntervalTimeNode(/*intervalTimeList,*/ newIntervalTime, idOfGlobal) {
        return DeviceHelper.initialize().then(async (result)=>{
            const newIntervalTimeNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: newIntervalTime,
                type: "supervisionIntervalTime"
            }, undefined);
            let newIntervalTimeNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(idOfGlobal, newIntervalTimeNodeId, DeviceHelper.contextId, "hasIntervalTimeNode", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await DeviceHelper.create_Attributes(newIntervalTimeNode, {
                Monitoring: true,
                IntervalTime: parseInt(newIntervalTime)
            }, "Supervision");
            let returnTab = {
                value: parseInt(newIntervalTime),
                nodeId: newIntervalTimeNodeId
            };
            return returnTab;
        }).catch((err)=>console.log(err));
    }
    static async generateGlobalSupervisionLinks(tab, intervalTimeList, savedTab) {
        return DeviceHelper.initialize().then(async (result)=>{
            for(let elt in tab)if (tab[elt].intervalTime != savedTab[elt].intervalTime) {
                for(let elt2 in intervalTimeList)if (tab[elt].intervalTime == intervalTimeList[elt2].value) {
                    let parent = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(tab[elt].nodeId, "hasIntervalTime");
                    console.log(parent);
                    if (parent.length != 0) await this.clearLinksOneByOne(parent[0].id.get(), tab[elt].nodeId, "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(intervalTimeList[elt2].nodeId, tab[elt].nodeId, DeviceHelper.contextId, "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    (0, _spinalEnvViewerPluginEventEmitter.spinalEventEmitter).emit("deviceProfileContext-ChangeSupervision", {
                        parentId: intervalTimeList[elt2].nodeId,
                        childId: tab[elt].nodeId,
                        relationName: "hasIntervalTime",
                        tag: "MODIFIED"
                    });
                }
            }
        }).catch((err)=>console.log(err));
    }
}
_defineProperty(DeviceHelper, "initialized", null);
_defineProperty(DeviceHelper, "context", void 0);
_defineProperty(DeviceHelper, "contextName", void 0);
_defineProperty(DeviceHelper, "type", void 0);
_defineProperty(DeviceHelper, "contextId", void 0);
DeviceHelper.initialized = null;
DeviceHelper.contextName = "deviceProfileContext";
DeviceHelper.type = "deviceProfileContext";

},{"32c014467e0b6cde":"fRH70","axios":"jo6P5","spinal-env-viewer-plugin-documentation-service":"5rYVR","spinal-env-viewer-graph-service":"9n7zp","../constants":"g3608","spinal-env-viewer-plugin-event-emitter":"8hvTd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3608":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEVICE_RELATION_NAME", ()=>DEVICE_RELATION_NAME);
parcelHelpers.export(exports, "DEVICE_RELATION_TYPE", ()=>DEVICE_RELATION_TYPE);
parcelHelpers.export(exports, "DEVICE_PROFILES_TYPE", ()=>DEVICE_PROFILES_TYPE);
parcelHelpers.export(exports, "DEVICE_TYPE", ()=>DEVICE_TYPE);
parcelHelpers.export(exports, "PART_RELATION_NAME", ()=>PART_RELATION_NAME);
parcelHelpers.export(exports, "PART_RELATION_TYPE", ()=>PART_RELATION_TYPE);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const DEVICE_RELATION_NAME = "hasDevice";
const DEVICE_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
const DEVICE_PROFILES_TYPE = "deviceProfile";
const DEVICE_TYPE = "device";
const PART_RELATION_NAME = "hasParts";
const PART_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);

},{"spinal-env-viewer-graph-service":"9n7zp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mhXAV":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileExplorer", ()=>FileExplorer) /*
const deviceId = SpinalGraphService.createNode( {
          name,
          type: DEVICE_TYPE
        }, undefined );

        var deviceContext =  SpinalGraphService
          .addChildInContext( parentId, deviceId, DeviceHelper.contextId,
          PART_RELATION_NAME, PART_RELATION_TYPE );

*/ ;
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalModelsDocumentation = require("spinal-models-documentation");
var _spinalCoreConnectorjsType = require("spinal-core-connectorjs_type");
var _deviceHelper = require("./build/DeviceHelper");
var _spinalModelGraph = require("spinal-model-graph");
var _fs = require("fs");
const xml2js = require("72a4c164429e014b");
const axios = require("10e04e0f3d4fda36");
class FileExplorer {
    static async getDirectory(selectedNode) {
        if (selectedNode != undefined) {
            const fileNode = await selectedNode.getChildren("hasFiles");
            if (fileNode.length == 0) return undefined;
            else {
                let directory = await fileNode[0].getElement();
                return directory;
            }
        }
    }
    static async getNbChildren(selectedNode) {
        const fileNode = await selectedNode.getChildren("hasFiles");
        return fileNode.length;
    }
    static async createDirectory(selectedNode) {
        let nbNode = await this.getNbChildren(selectedNode);
        if (nbNode == 0) {
            let myDirectory = new (0, _spinalCoreConnectorjsType.Directory)();
            let node = await selectedNode.addChild(myDirectory, "hasFiles", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            node.info.name.set("[Files]");
            node.info.type.set("SpinalFiles");
            return myDirectory;
        } else return this.getDirectory(selectedNode);
    }
    static _getFileType(file) {
        const imagesExtension = [
            "JPG",
            "PNG",
            "GIF",
            "WEBP",
            "TIFF",
            "PSD",
            "RAW",
            "BMP",
            "HEIF",
            "INDD",
            "JPEG 2000",
            "SVG",
            "XML",
            "JSON"
        ];
        const extension = /[^.]+$/.exec(file.name)[0];
        return imagesExtension.indexOf(extension.toUpperCase()) !== -1 ? (0, _spinalModelsDocumentation.MESSAGE_TYPES).image : (0, _spinalModelsDocumentation.MESSAGE_TYPES).file;
    }
    static addFileUpload(directory, uploadFileList) {
        const files = [];
        for(let i = 0; i < uploadFileList.length; i++){
            const element = uploadFileList[i];
            let filePath = new (0, _spinalCoreConnectorjsType.Path)(element);
            let myFile = new (0, _spinalCoreConnectorjsType.File)(element.name, filePath, undefined);
            directory.push(myFile);
            files.push(myFile);
        }
        return files;
    }
    static async downloadFile(file, index) {
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
    }
    static async getXmlContent(xmlFile, nodeId) {
        return new Promise(async (resolve, reject)=>{
            xmlFile._ptr.load((path)=>{
                const server_id = path._server_id;
                axios.get(`/sceen/_?u=${server_id}`, {
                    responseEncoding: "utf8"
                }).then((data)=>{
                    xml2js.parseStringPromise(data.data, {
                        mergeAttrs: true,
                        explicitArray: false,
                        preserveWhitespace: true
                    }).then((result)=>{
                        new Promise(async (resolve)=>{
                            await (0, _deviceHelper.DeviceHelper).generateBacNetValues(nodeId, result);
                            await (0, _deviceHelper.DeviceHelper).generateItem_list(nodeId);
                            await (0, _deviceHelper.DeviceHelper).generateSupervisionGraph(nodeId);
                        //  await DeviceHelper.generateLampProfile(nodeId, result);
                        }).catch((err)=>console.log(err));
                    });
                }).catch((err)=>console.log(err));
            });
        });
    }
    static readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        };
        rawFile.send(null);
    }
    // analyse du fichier BOG
    static async parseBOGFile(xmlFile) {
        return new Promise((resolve, reject)=>{
            xml2js.parseStringPromise(xmlFile, {
                mergeAttrs: true,
                explicitArray: false
            }).then((result)=>{
                var returnJson = [];
                var returnJson2 = [];
                var name = "";
                var ioName = "";
                var ioType = "";
                var ioIdx = "";
                var ioSuite = "";
                var indexCheckName = -1;
                var ioTemp = "";
                for(var elt in result.bajaObjectGraph.p.p.p[0].p){
                    name = result.bajaObjectGraph.p.p.p[0].p[elt].n;
                    var links = [];
                    if (result.bajaObjectGraph.p.p.p[0].p[elt].p.length != undefined) {
                        for(var elt2 in result.bajaObjectGraph.p.p.p[0].p[elt].p)if (result.bajaObjectGraph.p.p.p[0].p[elt].p[elt2].n == "values") {
                            var strLinks = result.bajaObjectGraph.p.p.p[0].p[elt].p[elt2].v;
                            var strSplit = strLinks.split(";");
                            for(var i in strSplit)if (strSplit[i] != "baja:String" && strSplit[i] != "iconName" && strSplit[i].includes("$") == false) {
                                // récupération du nom de la variable d'entrée / sortie
                                ioName = strSplit[i];
                                // récupération du type et de l'id de la variable d'entrée sortie
                                var ioValueStr = strSplit[parseInt(i) + 1];
                                var ioValueSplitted = ioValueStr.split("$3a");
                                if (ioValueSplitted[0] == "nv" || ioValueSplitted[0] == "bv" || ioValueSplitted[0] == "av" || ioValueSplitted[0] == "mv") {
                                    ioType = ioValueSplitted[0];
                                    var ioFull = ioValueSplitted;
                                    if (ioValueSplitted[1] == parseInt(ioValueSplitted[1])) ioIdx = ioValueSplitted[1];
                                    else if (ioValueSplitted[1].includes("$3be")) ioIdx = ioValueSplitted[1].split("$3be")[0];
                                    links.push({
                                        name: ioName,
                                        type: ioType,
                                        idx: ioIdx,
                                        suite: ioSuite
                                    });
                                }
                            }
                        }
                    } else {
                        var usedString = result.bajaObjectGraph.p.p.p[0].p[elt].p.v;
                        var usedStringSplitted = usedString.split(";");
                        for(var elementinSplitted in usedStringSplitted){
                            if (elementinSplitted != usedStringSplitted.length - 1) {
                                if (usedStringSplitted[parseInt(elementinSplitted) + 1].includes("$3a") == true) {
                                    ioName = usedStringSplitted[elementinSplitted];
                                    ioTemp = usedStringSplitted[parseInt(elementinSplitted) + 1].split("$3a");
                                    if (ioTemp[0] == "nv" || ioTemp[0] == "bv" || ioTemp[0] == "av" || ioTemp[0] == "mv") {
                                        ioType = ioTemp[0];
                                        ioIdx = ioTemp[1].split("$3be")[0];
                                        if (ioTemp.length == 3) ioSuite = ioTemp[2];
                                        else ioSuite = 0;
                                        links.push({
                                            name: ioName,
                                            type: ioType,
                                            idx: ioIdx,
                                            suite: ioSuite
                                        });
                                    }
                                }
                            }
                        }
                    }
                    if (links.length != 0) returnJson.push({
                        name: name,
                        links: links
                    });
                }
                // analyse de returnJson pour enelver les _Data et fusionner les données
                for(var jsonElement in returnJson){
                    var realName = returnJson[jsonElement].name.split("_Data")[0];
                    returnJson[jsonElement].name = realName;
                    for(var json2Element in returnJson2)if (returnJson2[json2Element].name == realName) indexCheckName = parseInt(json2Element);
                    if (indexCheckName == -1) returnJson2.push(returnJson[jsonElement]);
                    else {
                        if (returnJson2[indexCheckName] == undefined) console.log(indexCheckName);
                        else for(var linksElement in returnJson[jsonElement].links)returnJson2[indexCheckName].links.push(returnJson[jsonElement].links[linksElement]);
                    }
                    indexCheckName = -1;
                }
                // console.log(returnJson2);
                return resolve(returnJson2);
            }).catch((err)=>console.log(err));
        });
    }
}

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-models-documentation":"dcbQz","spinal-core-connectorjs_type":"fRH70","./build/DeviceHelper":"biglE","spinal-model-graph":"fkEXw","fs":"jhUEF","72a4c164429e014b":"7fkbn","10e04e0f3d4fda36":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"7fkbn":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, parser, processors, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    defaults = require("7ea326df427f014c");
    builder = require("115692d66e5bd90b");
    parser = require("259cca7c8022cb30");
    processors = require("4d88504c3e73ae8e");
    exports.defaults = defaults.defaults;
    exports.processors = processors;
    exports.ValidationError = function(superClass) {
        extend(ValidationError, superClass);
        function ValidationError(message) {
            this.message = message;
        }
        return ValidationError;
    }(Error);
    exports.Builder = builder.Builder;
    exports.Parser = parser.Parser;
    exports.parseString = parser.parseString;
    exports.parseStringPromise = parser.parseStringPromise;
}).call(this);

},{"7ea326df427f014c":"lc6iE","115692d66e5bd90b":"fsQXE","259cca7c8022cb30":"9b9bV","4d88504c3e73ae8e":"ifmcs"}],"lc6iE":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    exports.defaults = {
        "0.1": {
            explicitCharkey: false,
            trim: true,
            normalize: true,
            normalizeTags: false,
            attrkey: "@",
            charkey: "#",
            explicitArray: false,
            ignoreAttrs: false,
            mergeAttrs: false,
            explicitRoot: false,
            validator: null,
            xmlns: false,
            explicitChildren: false,
            childkey: "@@",
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            emptyTag: ""
        },
        "0.2": {
            explicitCharkey: false,
            trim: false,
            normalize: false,
            normalizeTags: false,
            attrkey: "$",
            charkey: "_",
            explicitArray: true,
            ignoreAttrs: false,
            mergeAttrs: false,
            explicitRoot: true,
            validator: null,
            xmlns: false,
            explicitChildren: false,
            preserveChildrenOrder: false,
            childkey: "$$",
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            rootName: "root",
            xmldec: {
                "version": "1.0",
                "encoding": "UTF-8",
                "standalone": true
            },
            doctype: null,
            renderOpts: {
                "pretty": true,
                "indent": "  ",
                "newline": "\n"
            },
            headless: false,
            chunkSize: 10000,
            emptyTag: "",
            cdata: false
        }
    };
}).call(this);

},{}],"fsQXE":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
    builder = require("ad623f14adf9b5ff");
    defaults = require("1257d11f8d203f5b").defaults;
    requiresCDATA = function(entry) {
        return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
    };
    wrapCDATA = function(entry) {
        return "<![CDATA[" + escapeCDATA(entry) + "]]>";
    };
    escapeCDATA = function(entry) {
        return entry.replace("]]>", "]]]]><![CDATA[>");
    };
    exports.Builder = function() {
        function Builder(opts) {
            var key, ref, value;
            this.options = {};
            ref = defaults["0.2"];
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this.options[key] = value;
            }
            for(key in opts){
                if (!hasProp.call(opts, key)) continue;
                value = opts[key];
                this.options[key] = value;
            }
        }
        Builder.prototype.buildObject = function(rootObj) {
            var attrkey, charkey, render, rootElement, rootName;
            attrkey = this.options.attrkey;
            charkey = this.options.charkey;
            if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
                rootName = Object.keys(rootObj)[0];
                rootObj = rootObj[rootName];
            } else rootName = this.options.rootName;
            render = function(_this) {
                return function(element, obj) {
                    var attr, child, entry, index, key, value;
                    if (typeof obj !== "object") {
                        if (_this.options.cdata && requiresCDATA(obj)) element.raw(wrapCDATA(obj));
                        else element.txt(obj);
                    } else if (Array.isArray(obj)) for(index in obj){
                        if (!hasProp.call(obj, index)) continue;
                        child = obj[index];
                        for(key in child){
                            entry = child[key];
                            element = render(element.ele(key), entry).up();
                        }
                    }
                    else for(key in obj){
                        if (!hasProp.call(obj, key)) continue;
                        child = obj[key];
                        if (key === attrkey) {
                            if (typeof child === "object") for(attr in child){
                                value = child[attr];
                                element = element.att(attr, value);
                            }
                        } else if (key === charkey) {
                            if (_this.options.cdata && requiresCDATA(child)) element = element.raw(wrapCDATA(child));
                            else element = element.txt(child);
                        } else if (Array.isArray(child)) for(index in child){
                            if (!hasProp.call(child, index)) continue;
                            entry = child[index];
                            if (typeof entry === "string") {
                                if (_this.options.cdata && requiresCDATA(entry)) element = element.ele(key).raw(wrapCDATA(entry)).up();
                                else element = element.ele(key, entry).up();
                            } else element = render(element.ele(key), entry).up();
                        }
                        else if (typeof child === "object") element = render(element.ele(key), child).up();
                        else if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) element = element.ele(key).raw(wrapCDATA(child)).up();
                        else {
                            if (child == null) child = "";
                            element = element.ele(key, child.toString()).up();
                        }
                    }
                    return element;
                };
            }(this);
            rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
                headless: this.options.headless,
                allowSurrogateChars: this.options.allowSurrogateChars
            });
            return render(rootElement, rootObj).end(this.options.renderOpts);
        };
        return Builder;
    }();
}).call(this);

},{"ad623f14adf9b5ff":"78LsS","1257d11f8d203f5b":"lc6iE"}],"78LsS":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
    ref = require("2647794ec6919cf8"), assign = ref.assign, isFunction = ref.isFunction;
    XMLDOMImplementation = require("204f3257bd042cb8");
    XMLDocument = require("1984b650bfe70c70");
    XMLDocumentCB = require("9dbd1ebdb6a95fc3");
    XMLStringWriter = require("69100afb0dfc47f2");
    XMLStreamWriter = require("fd0f26d6534ce99d");
    NodeType = require("fcf823ff2587a9f2");
    WriterState = require("bba57db33f4cadd6");
    module.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) throw new Error("Root element needs a name.");
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
            doc.declaration(options);
            if (options.pubID != null || options.sysID != null) doc.dtd(options);
        }
        return root;
    };
    module.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
            ref1 = [
                options,
                onData
            ], onData = ref1[0], onEnd = ref1[1];
            options = {};
        }
        if (onData) return new XMLDocumentCB(options, onData, onEnd);
        else return new XMLDocument(options);
    };
    module.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
    };
    module.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
    };
    module.exports.implementation = new XMLDOMImplementation();
    module.exports.nodeType = NodeType;
    module.exports.writerState = WriterState;
}).call(this);

},{"2647794ec6919cf8":"ftYTw","204f3257bd042cb8":"bGKIh","1984b650bfe70c70":"kMBGe","9dbd1ebdb6a95fc3":"bE5zE","69100afb0dfc47f2":"4Wk49","fd0f26d6534ce99d":"jE03a","fcf823ff2587a9f2":"iNzZB","bba57db33f4cadd6":"8DB9D"}],"ftYTw":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) Object.assign.apply(null, arguments);
        else for(i = 0, len = sources.length; i < len; i++){
            source = sources[i];
            if (source != null) for(key in source){
                if (!hasProp.call(source, key)) continue;
                target[key] = source[key];
            }
        }
        return target;
    };
    isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
    };
    isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
    };
    isArray = function(val) {
        if (isFunction(Array.isArray)) return Array.isArray(val);
        else return Object.prototype.toString.call(val) === "[object Array]";
    };
    isEmpty = function(val) {
        var key;
        if (isArray(val)) return !val.length;
        else {
            for(key in val){
                if (!hasProp.call(val, key)) continue;
                return false;
            }
            return true;
        }
    };
    isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
        if (isFunction(obj.valueOf)) return obj.valueOf();
        else return obj;
    };
    module.exports.assign = assign;
    module.exports.isFunction = isFunction;
    module.exports.isObject = isObject;
    module.exports.isArray = isArray;
    module.exports.isEmpty = isEmpty;
    module.exports.isPlainObject = isPlainObject;
    module.exports.getValue = getValue;
}).call(this);

},{}],"bGKIh":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMImplementation;
    module.exports = XMLDOMImplementation = function() {
        function XMLDOMImplementation() {}
        XMLDOMImplementation.prototype.hasFeature = function(feature, version) {
            return true;
        };
        XMLDOMImplementation.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.createHTMLDocument = function(title) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation.prototype.getFeature = function(feature, version) {
            throw new Error("This DOM method is not implemented.");
        };
        return XMLDOMImplementation;
    }();
}).call(this);

},{}],"kMBGe":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = require("13a5a3baabce41d8").isPlainObject;
    XMLDOMImplementation = require("b6961c96ff36d753");
    XMLDOMConfiguration = require("1f23d28cae8a60a5");
    XMLNode = require("cd39268a029bdce2");
    NodeType = require("ee7140c760116731");
    XMLStringifier = require("f050dc0a62284d96");
    XMLStringWriter = require("1c368e88d7130ef6");
    module.exports = XMLDocument = function(superClass) {
        extend(XMLDocument, superClass);
        function XMLDocument(options) {
            XMLDocument.__super__.constructor.call(this, null);
            this.name = "#document";
            this.type = NodeType.Document;
            this.documentURI = null;
            this.domConfig = new XMLDOMConfiguration();
            options || (options = {});
            if (!options.writer) options.writer = new XMLStringWriter();
            this.options = options;
            this.stringify = new XMLStringifier(options);
        }
        Object.defineProperty(XMLDocument.prototype, "implementation", {
            value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument.prototype, "doctype", {
            get: function() {
                var child, i, len, ref;
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.DocType) return child;
                }
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "documentElement", {
            get: function() {
                return this.rootObject || null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "inputEncoding", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "strictErrorChecking", {
            get: function() {
                return false;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "xmlEncoding", {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].encoding;
                else return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "xmlStandalone", {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].standalone === "yes";
                else return false;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "xmlVersion", {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].version;
                else return "1.0";
            }
        });
        Object.defineProperty(XMLDocument.prototype, "URL", {
            get: function() {
                return this.documentURI;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "origin", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "compatMode", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "characterSet", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, "contentType", {
            get: function() {
                return null;
            }
        });
        XMLDocument.prototype.end = function(writer) {
            var writerOptions;
            writerOptions = {};
            if (!writer) writer = this.options.writer;
            else if (isPlainObject(writer)) {
                writerOptions = writer;
                writer = this.options.writer;
            }
            return writer.document(this, writer.filterOptions(writerOptions));
        };
        XMLDocument.prototype.toString = function(options) {
            return this.options.writer.document(this, this.options.writer.filterOptions(options));
        };
        XMLDocument.prototype.createElement = function(tagName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createDocumentFragment = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createTextNode = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createComment = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createCDATASection = function(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createProcessingInstruction = function(target, data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createAttribute = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createEntityReference = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByTagName = function(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.importNode = function(importedNode, deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createElementNS = function(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementById = function(elementId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.adoptNode = function(source) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.normalizeDocument = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.getElementsByClassName = function(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createEvent = function(eventInterface) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createRange = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createNodeIterator = function(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument.prototype.createTreeWalker = function(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLDocument;
    }(XMLNode);
}).call(this);

},{"13a5a3baabce41d8":"ftYTw","b6961c96ff36d753":"bGKIh","1f23d28cae8a60a5":"dnVHJ","cd39268a029bdce2":"kfik1","ee7140c760116731":"iNzZB","f050dc0a62284d96":"acXVD","1c368e88d7130ef6":"4Wk49"}],"dnVHJ":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
    XMLDOMErrorHandler = require("c72a8151611a34e9");
    XMLDOMStringList = require("6710741fe0d16dae");
    module.exports = XMLDOMConfiguration = function() {
        function XMLDOMConfiguration() {
            var clonedSelf;
            this.defaultParams = {
                "canonical-form": false,
                "cdata-sections": false,
                "comments": false,
                "datatype-normalization": false,
                "element-content-whitespace": true,
                "entities": true,
                "error-handler": new XMLDOMErrorHandler(),
                "infoset": true,
                "validate-if-schema": false,
                "namespaces": true,
                "namespace-declarations": true,
                "normalize-characters": false,
                "schema-location": "",
                "schema-type": "",
                "split-cdata-sections": true,
                "validate": false,
                "well-formed": true
            };
            this.params = clonedSelf = Object.create(this.defaultParams);
        }
        Object.defineProperty(XMLDOMConfiguration.prototype, "parameterNames", {
            get: function() {
                return new XMLDOMStringList(Object.keys(this.defaultParams));
            }
        });
        XMLDOMConfiguration.prototype.getParameter = function(name) {
            if (this.params.hasOwnProperty(name)) return this.params[name];
            else return null;
        };
        XMLDOMConfiguration.prototype.canSetParameter = function(name, value) {
            return true;
        };
        XMLDOMConfiguration.prototype.setParameter = function(name, value) {
            if (value != null) return this.params[name] = value;
            else return delete this.params[name];
        };
        return XMLDOMConfiguration;
    }();
}).call(this);

},{"c72a8151611a34e9":"jNEDm","6710741fe0d16dae":"03onb"}],"jNEDm":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMErrorHandler;
    module.exports = XMLDOMErrorHandler = function() {
        function XMLDOMErrorHandler() {}
        XMLDOMErrorHandler.prototype.handleError = function(error) {
            throw new Error(error);
        };
        return XMLDOMErrorHandler;
    }();
}).call(this);

},{}],"03onb":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMStringList;
    module.exports = XMLDOMStringList = function() {
        function XMLDOMStringList(arr) {
            this.arr = arr || [];
        }
        Object.defineProperty(XMLDOMStringList.prototype, "length", {
            get: function() {
                return this.arr.length;
            }
        });
        XMLDOMStringList.prototype.item = function(index) {
            return this.arr[index] || null;
        };
        XMLDOMStringList.prototype.contains = function(str) {
            return this.arr.indexOf(str) !== -1;
        };
        return XMLDOMStringList;
    }();
}).call(this);

},{}],"kfik1":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
    ref1 = require("704f24b4c9ed0254"), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
    XMLElement = null;
    XMLCData = null;
    XMLComment = null;
    XMLDeclaration = null;
    XMLDocType = null;
    XMLRaw = null;
    XMLText = null;
    XMLProcessingInstruction = null;
    XMLDummy = null;
    NodeType = null;
    XMLNodeList = null;
    XMLNamedNodeMap = null;
    DocumentPosition = null;
    module.exports = XMLNode = function() {
        function XMLNode(parent1) {
            this.parent = parent1;
            if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
            }
            this.value = null;
            this.children = [];
            this.baseURI = null;
            if (!XMLElement) {
                XMLElement = require("bb9f43b93220ad7a");
                XMLCData = require("4c7d896cb6b56d63");
                XMLComment = require("91ed1f62eb89b645");
                XMLDeclaration = require("f449ccd8348c817c");
                XMLDocType = require("8ee4082395714d35");
                XMLRaw = require("f9c5b1d6679a33d5");
                XMLText = require("65d90f77c6196668");
                XMLProcessingInstruction = require("8e2e2e7d9c99b0f1");
                XMLDummy = require("f80ef020b5f168cc");
                NodeType = require("7c33a03644563158");
                XMLNodeList = require("ff2b0673a3f10f56");
                XMLNamedNodeMap = require("dbaafd3117e37a72");
                DocumentPosition = require("6214827e72f53399");
            }
        }
        Object.defineProperty(XMLNode.prototype, "nodeName", {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLNode.prototype, "nodeType", {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLNode.prototype, "nodeValue", {
            get: function() {
                return this.value;
            }
        });
        Object.defineProperty(XMLNode.prototype, "parentNode", {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLNode.prototype, "childNodes", {
            get: function() {
                if (!this.childNodeList || !this.childNodeList.nodes) this.childNodeList = new XMLNodeList(this.children);
                return this.childNodeList;
            }
        });
        Object.defineProperty(XMLNode.prototype, "firstChild", {
            get: function() {
                return this.children[0] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, "lastChild", {
            get: function() {
                return this.children[this.children.length - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, "previousSibling", {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, "nextSibling", {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i + 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, "ownerDocument", {
            get: function() {
                return this.document() || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, "textContent", {
            get: function() {
                var child, j, len, ref2, str;
                if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
                    str = "";
                    ref2 = this.children;
                    for(j = 0, len = ref2.length; j < len; j++){
                        child = ref2[j];
                        if (child.textContent) str += child.textContent;
                    }
                    return str;
                } else return null;
            },
            set: function(value) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        XMLNode.prototype.setParent = function(parent) {
            var child, j, len, ref2, results;
            this.parent = parent;
            if (parent) {
                this.options = parent.options;
                this.stringify = parent.stringify;
            }
            ref2 = this.children;
            results = [];
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                results.push(child.setParent(this));
            }
            return results;
        };
        XMLNode.prototype.element = function(name, attributes, text) {
            var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
            lastChild = null;
            if (attributes === null && text == null) ref2 = [
                {},
                null
            ], attributes = ref2[0], text = ref2[1];
            if (attributes == null) attributes = {};
            attributes = getValue(attributes);
            if (!isObject(attributes)) ref3 = [
                attributes,
                text
            ], text = ref3[0], attributes = ref3[1];
            if (name != null) name = getValue(name);
            if (Array.isArray(name)) for(j = 0, len = name.length; j < len; j++){
                item = name[j];
                lastChild = this.element(item);
            }
            else if (isFunction(name)) lastChild = this.element(name.apply());
            else if (isObject(name)) for(key in name){
                if (!hasProp.call(name, key)) continue;
                val = name[key];
                if (isFunction(val)) val = val.apply();
                if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) lastChild = this.dummy();
                else if (isObject(val) && isEmpty(val)) lastChild = this.element(key);
                else if (!this.options.keepNullNodes && val == null) lastChild = this.dummy();
                else if (!this.options.separateArrayItems && Array.isArray(val)) for(k = 0, len1 = val.length; k < len1; k++){
                    item = val[k];
                    childNode = {};
                    childNode[key] = item;
                    lastChild = this.element(childNode);
                }
                else if (isObject(val)) {
                    if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) lastChild = this.element(val);
                    else {
                        lastChild = this.element(key);
                        lastChild.element(val);
                    }
                } else lastChild = this.element(key, val);
            }
            else if (!this.options.keepNullNodes && text === null) lastChild = this.dummy();
            else {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) lastChild = this.text(text);
                else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) lastChild = this.cdata(text);
                else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) lastChild = this.comment(text);
                else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) lastChild = this.raw(text);
                else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
                else lastChild = this.node(name, attributes, text);
            }
            if (lastChild == null) throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
            return lastChild;
        };
        XMLNode.prototype.insertBefore = function(name, attributes, text) {
            var child, i, newChild, refChild, removed;
            if (name != null ? name.type : void 0) {
                newChild = name;
                refChild = attributes;
                newChild.setParent(this);
                if (refChild) {
                    i = children.indexOf(refChild);
                    removed = children.splice(i);
                    children.push(newChild);
                    Array.prototype.push.apply(children, removed);
                } else children.push(newChild);
                return newChild;
            } else {
                if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
                i = this.parent.children.indexOf(this);
                removed = this.parent.children.splice(i);
                child = this.parent.element(name, attributes, text);
                Array.prototype.push.apply(this.parent.children, removed);
                return child;
            }
        };
        XMLNode.prototype.insertAfter = function(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
        };
        XMLNode.prototype.remove = function() {
            var i, ref2;
            if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
            i = this.parent.children.indexOf(this);
            [].splice.apply(this.parent.children, [
                i,
                i - i + 1
            ].concat(ref2 = [])), ref2;
            return this.parent;
        };
        XMLNode.prototype.node = function(name, attributes, text) {
            var child, ref2;
            if (name != null) name = getValue(name);
            attributes || (attributes = {});
            attributes = getValue(attributes);
            if (!isObject(attributes)) ref2 = [
                attributes,
                text
            ], text = ref2[0], attributes = ref2[1];
            child = new XMLElement(this, name, attributes);
            if (text != null) child.text(text);
            this.children.push(child);
            return child;
        };
        XMLNode.prototype.text = function(value) {
            var child;
            if (isObject(value)) this.element(value);
            child = new XMLText(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.cdata = function(value) {
            var child;
            child = new XMLCData(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.comment = function(value) {
            var child;
            child = new XMLComment(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.commentBefore = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.commentAfter = function(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.raw = function(value) {
            var child;
            child = new XMLRaw(this, value);
            this.children.push(child);
            return this;
        };
        XMLNode.prototype.dummy = function() {
            var child;
            child = new XMLDummy(this);
            return child;
        };
        XMLNode.prototype.instruction = function(target, value) {
            var insTarget, insValue, instruction, j, len;
            if (target != null) target = getValue(target);
            if (value != null) value = getValue(value);
            if (Array.isArray(target)) for(j = 0, len = target.length; j < len; j++){
                insTarget = target[j];
                this.instruction(insTarget);
            }
            else if (isObject(target)) for(insTarget in target){
                if (!hasProp.call(target, insTarget)) continue;
                insValue = target[insTarget];
                this.instruction(insTarget, insValue);
            }
            else {
                if (isFunction(value)) value = value.apply();
                instruction = new XMLProcessingInstruction(this, target, value);
                this.children.push(instruction);
            }
            return this;
        };
        XMLNode.prototype.instructionBefore = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.instructionAfter = function(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
        };
        XMLNode.prototype.declaration = function(version, encoding, standalone) {
            var doc, xmldec;
            doc = this.document();
            xmldec = new XMLDeclaration(doc, version, encoding, standalone);
            if (doc.children.length === 0) doc.children.unshift(xmldec);
            else if (doc.children[0].type === NodeType.Declaration) doc.children[0] = xmldec;
            else doc.children.unshift(xmldec);
            return doc.root() || doc;
        };
        XMLNode.prototype.dtd = function(pubID, sysID) {
            var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
            doc = this.document();
            doctype = new XMLDocType(doc, pubID, sysID);
            ref2 = doc.children;
            for(i = j = 0, len = ref2.length; j < len; i = ++j){
                child = ref2[i];
                if (child.type === NodeType.DocType) {
                    doc.children[i] = doctype;
                    return doctype;
                }
            }
            ref3 = doc.children;
            for(i = k = 0, len1 = ref3.length; k < len1; i = ++k){
                child = ref3[i];
                if (child.isRoot) {
                    doc.children.splice(i, 0, doctype);
                    return doctype;
                }
            }
            doc.children.push(doctype);
            return doctype;
        };
        XMLNode.prototype.up = function() {
            if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
            return this.parent;
        };
        XMLNode.prototype.root = function() {
            var node;
            node = this;
            while(node){
                if (node.type === NodeType.Document) return node.rootObject;
                else if (node.isRoot) return node;
                else node = node.parent;
            }
        };
        XMLNode.prototype.document = function() {
            var node;
            node = this;
            while(node){
                if (node.type === NodeType.Document) return node;
                else node = node.parent;
            }
        };
        XMLNode.prototype.end = function(options) {
            return this.document().end(options);
        };
        XMLNode.prototype.prev = function() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i < 1) throw new Error("Already at the first node. " + this.debugInfo());
            return this.parent.children[i - 1];
        };
        XMLNode.prototype.next = function() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i === -1 || i === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
            return this.parent.children[i + 1];
        };
        XMLNode.prototype.importDocument = function(doc) {
            var clonedRoot;
            clonedRoot = doc.root().clone();
            clonedRoot.parent = this;
            clonedRoot.isRoot = false;
            this.children.push(clonedRoot);
            return this;
        };
        XMLNode.prototype.debugInfo = function(name) {
            var ref2, ref3;
            name = name || this.name;
            if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) return "";
            else if (name == null) return "parent: <" + this.parent.name + ">";
            else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) return "node: <" + name + ">";
            else return "node: <" + name + ">, parent: <" + this.parent.name + ">";
        };
        XMLNode.prototype.ele = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.doc = function() {
            return this.document();
        };
        XMLNode.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLNode.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLNode.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLNode.prototype.t = function(value) {
            return this.text(value);
        };
        XMLNode.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLNode.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLNode.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLNode.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLNode.prototype.u = function() {
            return this.up();
        };
        XMLNode.prototype.importXMLBuilder = function(doc) {
            return this.importDocument(doc);
        };
        XMLNode.prototype.replaceChild = function(newChild, oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.removeChild = function(oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.appendChild = function(newChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.hasChildNodes = function() {
            return this.children.length !== 0;
        };
        XMLNode.prototype.cloneNode = function(deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.normalize = function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isSupported = function(feature, version) {
            return true;
        };
        XMLNode.prototype.hasAttributes = function() {
            return this.attribs.length !== 0;
        };
        XMLNode.prototype.compareDocumentPosition = function(other) {
            var ref, res;
            ref = this;
            if (ref === other) return 0;
            else if (this.document() !== other.document()) {
                res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
                if (Math.random() < 0.5) res |= DocumentPosition.Preceding;
                else res |= DocumentPosition.Following;
                return res;
            } else if (ref.isAncestor(other)) return DocumentPosition.Contains | DocumentPosition.Preceding;
            else if (ref.isDescendant(other)) return DocumentPosition.Contains | DocumentPosition.Following;
            else if (ref.isPreceding(other)) return DocumentPosition.Preceding;
            else return DocumentPosition.Following;
        };
        XMLNode.prototype.isSameNode = function(other) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.lookupPrefix = function(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isDefaultNamespace = function(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.lookupNamespaceURI = function(prefix) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.isEqualNode = function(node) {
            var i, j, ref2;
            if (node.nodeType !== this.nodeType) return false;
            if (node.children.length !== this.children.length) return false;
            for(i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j){
                if (!this.children[i].isEqualNode(node.children[i])) return false;
            }
            return true;
        };
        XMLNode.prototype.getFeature = function(feature, version) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.setUserData = function(key, data, handler) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.getUserData = function(key) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode.prototype.contains = function(other) {
            if (!other) return false;
            return other === this || this.isDescendant(other);
        };
        XMLNode.prototype.isDescendant = function(node) {
            var child, isDescendantChild, j, len, ref2;
            ref2 = this.children;
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                if (node === child) return true;
                isDescendantChild = child.isDescendant(node);
                if (isDescendantChild) return true;
            }
            return false;
        };
        XMLNode.prototype.isAncestor = function(node) {
            return node.isDescendant(this);
        };
        XMLNode.prototype.isPreceding = function(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) return false;
            else return nodePos < thisPos;
        };
        XMLNode.prototype.isFollowing = function(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) return false;
            else return nodePos > thisPos;
        };
        XMLNode.prototype.treePosition = function(node) {
            var found, pos;
            pos = 0;
            found = false;
            this.foreachTreeNode(this.document(), function(childNode) {
                pos++;
                if (!found && childNode === node) return found = true;
            });
            if (found) return pos;
            else return -1;
        };
        XMLNode.prototype.foreachTreeNode = function(node, func) {
            var child, j, len, ref2, res;
            node || (node = this.document());
            ref2 = node.children;
            for(j = 0, len = ref2.length; j < len; j++){
                child = ref2[j];
                if (res = func(child)) return res;
                else {
                    res = this.foreachTreeNode(child, func);
                    if (res) return res;
                }
            }
        };
        return XMLNode;
    }();
}).call(this);

},{"704f24b4c9ed0254":"ftYTw","bb9f43b93220ad7a":"c5gEs","4c7d896cb6b56d63":"iw4Bz","91ed1f62eb89b645":"d9Olx","f449ccd8348c817c":"7KOl1","8ee4082395714d35":"aPjL5","f9c5b1d6679a33d5":"Dh6Jk","65d90f77c6196668":"cFPm0","8e2e2e7d9c99b0f1":"47tYo","f80ef020b5f168cc":"5b4ux","7c33a03644563158":"iNzZB","ff2b0673a3f10f56":"8bc8r","dbaafd3117e37a72":"5PONq","6214827e72f53399":"2bb5a"}],"c5gEs":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    ref = require("760e1e681b3efb5e"), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
    XMLNode = require("b30d72617b2d0e");
    NodeType = require("b548af19154e188f");
    XMLAttribute = require("91ce844474972b76");
    XMLNamedNodeMap = require("1a2db5acef6e9ab2");
    module.exports = XMLElement = function(superClass) {
        extend(XMLElement, superClass);
        function XMLElement(parent, name, attributes) {
            var child, j, len, ref1;
            XMLElement.__super__.constructor.call(this, parent);
            if (name == null) throw new Error("Missing element name. " + this.debugInfo());
            this.name = this.stringify.name(name);
            this.type = NodeType.Element;
            this.attribs = {};
            this.schemaTypeInfo = null;
            if (attributes != null) this.attribute(attributes);
            if (parent.type === NodeType.Document) {
                this.isRoot = true;
                this.documentObject = parent;
                parent.rootObject = this;
                if (parent.children) {
                    ref1 = parent.children;
                    for(j = 0, len = ref1.length; j < len; j++){
                        child = ref1[j];
                        if (child.type === NodeType.DocType) {
                            child.name = this.name;
                            break;
                        }
                    }
                }
            }
        }
        Object.defineProperty(XMLElement.prototype, "tagName", {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, "namespaceURI", {
            get: function() {
                return "";
            }
        });
        Object.defineProperty(XMLElement.prototype, "prefix", {
            get: function() {
                return "";
            }
        });
        Object.defineProperty(XMLElement.prototype, "localName", {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, "id", {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, "className", {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, "classList", {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, "attributes", {
            get: function() {
                if (!this.attributeMap || !this.attributeMap.nodes) this.attributeMap = new XMLNamedNodeMap(this.attribs);
                return this.attributeMap;
            }
        });
        XMLElement.prototype.clone = function() {
            var att, attName, clonedSelf, ref1;
            clonedSelf = Object.create(this);
            if (clonedSelf.isRoot) clonedSelf.documentObject = null;
            clonedSelf.attribs = {};
            ref1 = this.attribs;
            for(attName in ref1){
                if (!hasProp.call(ref1, attName)) continue;
                att = ref1[attName];
                clonedSelf.attribs[attName] = att.clone();
            }
            clonedSelf.children = [];
            this.children.forEach(function(child) {
                var clonedChild;
                clonedChild = child.clone();
                clonedChild.parent = clonedSelf;
                return clonedSelf.children.push(clonedChild);
            });
            return clonedSelf;
        };
        XMLElement.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (name != null) name = getValue(name);
            if (isObject(name)) for(attName in name){
                if (!hasProp.call(name, attName)) continue;
                attValue = name[attName];
                this.attribute(attName, attValue);
            }
            else {
                if (isFunction(value)) value = value.apply();
                if (this.options.keepNullAttributes && value == null) this.attribs[name] = new XMLAttribute(this, name, "");
                else if (value != null) this.attribs[name] = new XMLAttribute(this, name, value);
            }
            return this;
        };
        XMLElement.prototype.removeAttribute = function(name) {
            var attName, j, len;
            if (name == null) throw new Error("Missing attribute name. " + this.debugInfo());
            name = getValue(name);
            if (Array.isArray(name)) for(j = 0, len = name.length; j < len; j++){
                attName = name[j];
                delete this.attribs[attName];
            }
            else delete this.attribs[name];
            return this;
        };
        XMLElement.prototype.toString = function(options) {
            return this.options.writer.element(this, this.options.writer.filterOptions(options));
        };
        XMLElement.prototype.att = function(name, value) {
            return this.attribute(name, value);
        };
        XMLElement.prototype.a = function(name, value) {
            return this.attribute(name, value);
        };
        XMLElement.prototype.getAttribute = function(name) {
            if (this.attribs.hasOwnProperty(name)) return this.attribs[name].value;
            else return null;
        };
        XMLElement.prototype.setAttribute = function(name, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNode = function(name) {
            if (this.attribs.hasOwnProperty(name)) return this.attribs[name];
            else return null;
        };
        XMLElement.prototype.setAttributeNode = function(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.removeAttributeNode = function(oldAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagName = function(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.removeAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setAttributeNodeNS = function(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.hasAttribute = function(name) {
            return this.attribs.hasOwnProperty(name);
        };
        XMLElement.prototype.hasAttributeNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setIdAttribute = function(name, isId) {
            if (this.attribs.hasOwnProperty(name)) return this.attribs[name].isId;
            else return isId;
        };
        XMLElement.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.setIdAttributeNode = function(idAttr, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagName = function(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.getElementsByClassName = function(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement.prototype.isEqualNode = function(node) {
            var i, j, ref1;
            if (!XMLElement.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
            if (node.namespaceURI !== this.namespaceURI) return false;
            if (node.prefix !== this.prefix) return false;
            if (node.localName !== this.localName) return false;
            if (node.attribs.length !== this.attribs.length) return false;
            for(i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j){
                if (!this.attribs[i].isEqualNode(node.attribs[i])) return false;
            }
            return true;
        };
        return XMLElement;
    }(XMLNode);
}).call(this);

},{"760e1e681b3efb5e":"ftYTw","b30d72617b2d0e":"kfik1","b548af19154e188f":"iNzZB","91ce844474972b76":"cvUns","1a2db5acef6e9ab2":"5PONq"}],"iNzZB":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
    };
}).call(this);

},{}],"cvUns":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLAttribute, XMLNode;
    NodeType = require("2ac94b791509906a");
    XMLNode = require("4460ed8c305de0cc");
    module.exports = XMLAttribute = function() {
        function XMLAttribute(parent, name, value) {
            this.parent = parent;
            if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
            }
            if (name == null) throw new Error("Missing attribute name. " + this.debugInfo(name));
            this.name = this.stringify.name(name);
            this.value = this.stringify.attValue(value);
            this.type = NodeType.Attribute;
            this.isId = false;
            this.schemaTypeInfo = null;
        }
        Object.defineProperty(XMLAttribute.prototype, "nodeType", {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "ownerElement", {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "textContent", {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || "";
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "namespaceURI", {
            get: function() {
                return "";
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "prefix", {
            get: function() {
                return "";
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "localName", {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, "specified", {
            get: function() {
                return true;
            }
        });
        XMLAttribute.prototype.clone = function() {
            return Object.create(this);
        };
        XMLAttribute.prototype.toString = function(options) {
            return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        };
        XMLAttribute.prototype.debugInfo = function(name) {
            name = name || this.name;
            if (name == null) return "parent: <" + this.parent.name + ">";
            else return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
        };
        XMLAttribute.prototype.isEqualNode = function(node) {
            if (node.namespaceURI !== this.namespaceURI) return false;
            if (node.prefix !== this.prefix) return false;
            if (node.localName !== this.localName) return false;
            if (node.value !== this.value) return false;
            return true;
        };
        return XMLAttribute;
    }();
}).call(this);

},{"2ac94b791509906a":"iNzZB","4460ed8c305de0cc":"kfik1"}],"5PONq":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNamedNodeMap;
    module.exports = XMLNamedNodeMap = function() {
        function XMLNamedNodeMap(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNamedNodeMap.prototype, "length", {
            get: function() {
                return Object.keys(this.nodes).length || 0;
            }
        });
        XMLNamedNodeMap.prototype.clone = function() {
            return this.nodes = null;
        };
        XMLNamedNodeMap.prototype.getNamedItem = function(name) {
            return this.nodes[name];
        };
        XMLNamedNodeMap.prototype.setNamedItem = function(node) {
            var oldNode;
            oldNode = this.nodes[node.nodeName];
            this.nodes[node.nodeName] = node;
            return oldNode || null;
        };
        XMLNamedNodeMap.prototype.removeNamedItem = function(name) {
            var oldNode;
            oldNode = this.nodes[name];
            delete this.nodes[name];
            return oldNode || null;
        };
        XMLNamedNodeMap.prototype.item = function(index) {
            return this.nodes[Object.keys(this.nodes)[index]] || null;
        };
        XMLNamedNodeMap.prototype.getNamedItemNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap.prototype.setNamedItemNS = function(node) {
            throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
        };
        return XMLNamedNodeMap;
    }();
}).call(this);

},{}],"iw4Bz":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCData, XMLCharacterData, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("1d10efe8d12710ca");
    XMLCharacterData = require("da41985d18d84bf2");
    module.exports = XMLCData = function(superClass) {
        extend(XMLCData, superClass);
        function XMLCData(parent, text) {
            XMLCData.__super__.constructor.call(this, parent);
            if (text == null) throw new Error("Missing CDATA text. " + this.debugInfo());
            this.name = "#cdata-section";
            this.type = NodeType.CData;
            this.value = this.stringify.cdata(text);
        }
        XMLCData.prototype.clone = function() {
            return Object.create(this);
        };
        XMLCData.prototype.toString = function(options) {
            return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        };
        return XMLCData;
    }(XMLCharacterData);
}).call(this);

},{"1d10efe8d12710ca":"iNzZB","da41985d18d84bf2":"an1GL"}],"an1GL":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLCharacterData, XMLNode, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require("d99443ca7fe2d67d");
    module.exports = XMLCharacterData = function(superClass) {
        extend(XMLCharacterData, superClass);
        function XMLCharacterData(parent) {
            XMLCharacterData.__super__.constructor.call(this, parent);
            this.value = "";
        }
        Object.defineProperty(XMLCharacterData.prototype, "data", {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || "";
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, "length", {
            get: function() {
                return this.value.length;
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, "textContent", {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || "";
            }
        });
        XMLCharacterData.prototype.clone = function() {
            return Object.create(this);
        };
        XMLCharacterData.prototype.substringData = function(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.appendData = function(arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.insertData = function(offset, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.deleteData = function(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.replaceData = function(offset, count, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData.prototype.isEqualNode = function(node) {
            if (!XMLCharacterData.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
            if (node.data !== this.data) return false;
            return true;
        };
        return XMLCharacterData;
    }(XMLNode);
}).call(this);

},{"d99443ca7fe2d67d":"kfik1"}],"d9Olx":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLComment, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("b0dbe926c1622528");
    XMLCharacterData = require("d18aaaf3ab58e603");
    module.exports = XMLComment = function(superClass) {
        extend(XMLComment, superClass);
        function XMLComment(parent, text) {
            XMLComment.__super__.constructor.call(this, parent);
            if (text == null) throw new Error("Missing comment text. " + this.debugInfo());
            this.name = "#comment";
            this.type = NodeType.Comment;
            this.value = this.stringify.comment(text);
        }
        XMLComment.prototype.clone = function() {
            return Object.create(this);
        };
        XMLComment.prototype.toString = function(options) {
            return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        };
        return XMLComment;
    }(XMLCharacterData);
}).call(this);

},{"b0dbe926c1622528":"iNzZB","d18aaaf3ab58e603":"an1GL"}],"7KOl1":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require("cf2a3ddbe00c2bec").isObject;
    XMLNode = require("b70b0f72196be228");
    NodeType = require("7910f9e4e0ec2b8c");
    module.exports = XMLDeclaration = function(superClass) {
        extend(XMLDeclaration, superClass);
        function XMLDeclaration(parent, version, encoding, standalone) {
            var ref;
            XMLDeclaration.__super__.constructor.call(this, parent);
            if (isObject(version)) ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
            if (!version) version = "1.0";
            this.type = NodeType.Declaration;
            this.version = this.stringify.xmlVersion(version);
            if (encoding != null) this.encoding = this.stringify.xmlEncoding(encoding);
            if (standalone != null) this.standalone = this.stringify.xmlStandalone(standalone);
        }
        XMLDeclaration.prototype.toString = function(options) {
            return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        };
        return XMLDeclaration;
    }(XMLNode);
}).call(this);

},{"cf2a3ddbe00c2bec":"ftYTw","b70b0f72196be228":"kfik1","7910f9e4e0ec2b8c":"iNzZB"}],"aPjL5":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require("2d96570e9ce5a61a").isObject;
    XMLNode = require("10eff02d526f1f13");
    NodeType = require("9167240c545a1251");
    XMLDTDAttList = require("364c364aa3224d14");
    XMLDTDEntity = require("f24de147ed1d6fb5");
    XMLDTDElement = require("a588b70eba73aefb");
    XMLDTDNotation = require("6f9e9e9353c73e81");
    XMLNamedNodeMap = require("dbb2e06d6fd270ad");
    module.exports = XMLDocType = function(superClass) {
        extend(XMLDocType, superClass);
        function XMLDocType(parent, pubID, sysID) {
            var child, i, len, ref, ref1, ref2;
            XMLDocType.__super__.constructor.call(this, parent);
            this.type = NodeType.DocType;
            if (parent.children) {
                ref = parent.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.Element) {
                        this.name = child.name;
                        break;
                    }
                }
            }
            this.documentObject = parent;
            if (isObject(pubID)) ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
            if (sysID == null) ref2 = [
                pubID,
                sysID
            ], sysID = ref2[0], pubID = ref2[1];
            if (pubID != null) this.pubID = this.stringify.dtdPubID(pubID);
            if (sysID != null) this.sysID = this.stringify.dtdSysID(sysID);
        }
        Object.defineProperty(XMLDocType.prototype, "entities", {
            get: function() {
                var child, i, len, nodes, ref;
                nodes = {};
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.EntityDeclaration && !child.pe) nodes[child.name] = child;
                }
                return new XMLNamedNodeMap(nodes);
            }
        });
        Object.defineProperty(XMLDocType.prototype, "notations", {
            get: function() {
                var child, i, len, nodes, ref;
                nodes = {};
                ref = this.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    if (child.type === NodeType.NotationDeclaration) nodes[child.name] = child;
                }
                return new XMLNamedNodeMap(nodes);
            }
        });
        Object.defineProperty(XMLDocType.prototype, "publicId", {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, "systemId", {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, "internalSubset", {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        XMLDocType.prototype.element = function(name, value) {
            var child;
            child = new XMLDTDElement(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var child;
            child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.entity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, false, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.pEntity = function(name, value) {
            var child;
            child = new XMLDTDEntity(this, true, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.notation = function(name, value) {
            var child;
            child = new XMLDTDNotation(this, name, value);
            this.children.push(child);
            return this;
        };
        XMLDocType.prototype.toString = function(options) {
            return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        };
        XMLDocType.prototype.ele = function(name, value) {
            return this.element(name, value);
        };
        XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocType.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocType.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        XMLDocType.prototype.up = function() {
            return this.root() || this.documentObject;
        };
        XMLDocType.prototype.isEqualNode = function(node) {
            if (!XMLDocType.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
            if (node.name !== this.name) return false;
            if (node.publicId !== this.publicId) return false;
            if (node.systemId !== this.systemId) return false;
            return true;
        };
        return XMLDocType;
    }(XMLNode);
}).call(this);

},{"2d96570e9ce5a61a":"ftYTw","10eff02d526f1f13":"kfik1","9167240c545a1251":"iNzZB","364c364aa3224d14":"eBGGV","f24de147ed1d6fb5":"iAklG","a588b70eba73aefb":"1ix9Z","6f9e9e9353c73e81":"3I1Jt","dbb2e06d6fd270ad":"5PONq"}],"eBGGV":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require("e63acd90dbde9d27");
    NodeType = require("e38e2d5ce2a0a55");
    module.exports = XMLDTDAttList = function(superClass) {
        extend(XMLDTDAttList, superClass);
        function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            XMLDTDAttList.__super__.constructor.call(this, parent);
            if (elementName == null) throw new Error("Missing DTD element name. " + this.debugInfo());
            if (attributeName == null) throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
            if (!attributeType) throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
            if (!defaultValueType) throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
            if (defaultValueType.indexOf("#") !== 0) defaultValueType = "#" + defaultValueType;
            if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            this.elementName = this.stringify.name(elementName);
            this.type = NodeType.AttributeDeclaration;
            this.attributeName = this.stringify.name(attributeName);
            this.attributeType = this.stringify.dtdAttType(attributeType);
            if (defaultValue) this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
            this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList.prototype.toString = function(options) {
            return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDAttList;
    }(XMLNode);
}).call(this);

},{"e63acd90dbde9d27":"kfik1","e38e2d5ce2a0a55":"iNzZB"}],"iAklG":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require("6b00c2638d6cff6e").isObject;
    XMLNode = require("5619e8138a9444ca");
    NodeType = require("2e642c53b1846a5e");
    module.exports = XMLDTDEntity = function(superClass) {
        extend(XMLDTDEntity, superClass);
        function XMLDTDEntity(parent, pe, name, value) {
            XMLDTDEntity.__super__.constructor.call(this, parent);
            if (name == null) throw new Error("Missing DTD entity name. " + this.debugInfo(name));
            if (value == null) throw new Error("Missing DTD entity value. " + this.debugInfo(name));
            this.pe = !!pe;
            this.name = this.stringify.name(name);
            this.type = NodeType.EntityDeclaration;
            if (!isObject(value)) {
                this.value = this.stringify.dtdEntityValue(value);
                this.internal = true;
            } else {
                if (!value.pubID && !value.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
                if (value.pubID && !value.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
                this.internal = false;
                if (value.pubID != null) this.pubID = this.stringify.dtdPubID(value.pubID);
                if (value.sysID != null) this.sysID = this.stringify.dtdSysID(value.sysID);
                if (value.nData != null) this.nData = this.stringify.dtdNData(value.nData);
                if (this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
            }
        }
        Object.defineProperty(XMLDTDEntity.prototype, "publicId", {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, "systemId", {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, "notationName", {
            get: function() {
                return this.nData || null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, "inputEncoding", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, "xmlEncoding", {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, "xmlVersion", {
            get: function() {
                return null;
            }
        });
        XMLDTDEntity.prototype.toString = function(options) {
            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDEntity;
    }(XMLNode);
}).call(this);

},{"6b00c2638d6cff6e":"ftYTw","5619e8138a9444ca":"kfik1","2e642c53b1846a5e":"iNzZB"}],"1ix9Z":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDElement, XMLNode, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require("58f833e8788221ff");
    NodeType = require("bd936b22ecaf9e3e");
    module.exports = XMLDTDElement = function(superClass) {
        extend(XMLDTDElement, superClass);
        function XMLDTDElement(parent, name, value) {
            XMLDTDElement.__super__.constructor.call(this, parent);
            if (name == null) throw new Error("Missing DTD element name. " + this.debugInfo());
            if (!value) value = "(#PCDATA)";
            if (Array.isArray(value)) value = "(" + value.join(",") + ")";
            this.name = this.stringify.name(name);
            this.type = NodeType.ElementDeclaration;
            this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement.prototype.toString = function(options) {
            return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDElement;
    }(XMLNode);
}).call(this);

},{"58f833e8788221ff":"kfik1","bd936b22ecaf9e3e":"iNzZB"}],"3I1Jt":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require("30e258c5f358ba86");
    NodeType = require("3458890a6746c52e");
    module.exports = XMLDTDNotation = function(superClass) {
        extend(XMLDTDNotation, superClass);
        function XMLDTDNotation(parent, name, value) {
            XMLDTDNotation.__super__.constructor.call(this, parent);
            if (name == null) throw new Error("Missing DTD notation name. " + this.debugInfo(name));
            if (!value.pubID && !value.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
            this.name = this.stringify.name(name);
            this.type = NodeType.NotationDeclaration;
            if (value.pubID != null) this.pubID = this.stringify.dtdPubID(value.pubID);
            if (value.sysID != null) this.sysID = this.stringify.dtdSysID(value.sysID);
        }
        Object.defineProperty(XMLDTDNotation.prototype, "publicId", {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDNotation.prototype, "systemId", {
            get: function() {
                return this.sysID;
            }
        });
        XMLDTDNotation.prototype.toString = function(options) {
            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDNotation;
    }(XMLNode);
}).call(this);

},{"30e258c5f358ba86":"kfik1","3458890a6746c52e":"iNzZB"}],"Dh6Jk":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLNode, XMLRaw, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("dcd9ea319a520167");
    XMLNode = require("47e90ce7f40a2f89");
    module.exports = XMLRaw = function(superClass) {
        extend(XMLRaw, superClass);
        function XMLRaw(parent, text) {
            XMLRaw.__super__.constructor.call(this, parent);
            if (text == null) throw new Error("Missing raw text. " + this.debugInfo());
            this.type = NodeType.Raw;
            this.value = this.stringify.raw(text);
        }
        XMLRaw.prototype.clone = function() {
            return Object.create(this);
        };
        XMLRaw.prototype.toString = function(options) {
            return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        };
        return XMLRaw;
    }(XMLNode);
}).call(this);

},{"dcd9ea319a520167":"iNzZB","47e90ce7f40a2f89":"kfik1"}],"cFPm0":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLText, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("e16b55d7b9ae6110");
    XMLCharacterData = require("6951a1495b9b2aef");
    module.exports = XMLText = function(superClass) {
        extend(XMLText, superClass);
        function XMLText(parent, text) {
            XMLText.__super__.constructor.call(this, parent);
            if (text == null) throw new Error("Missing element text. " + this.debugInfo());
            this.name = "#text";
            this.type = NodeType.Text;
            this.value = this.stringify.text(text);
        }
        Object.defineProperty(XMLText.prototype, "isElementContentWhitespace", {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLText.prototype, "wholeText", {
            get: function() {
                var next, prev, str;
                str = "";
                prev = this.previousSibling;
                while(prev){
                    str = prev.data + str;
                    prev = prev.previousSibling;
                }
                str += this.data;
                next = this.nextSibling;
                while(next){
                    str = str + next.data;
                    next = next.nextSibling;
                }
                return str;
            }
        });
        XMLText.prototype.clone = function() {
            return Object.create(this);
        };
        XMLText.prototype.toString = function(options) {
            return this.options.writer.text(this, this.options.writer.filterOptions(options));
        };
        XMLText.prototype.splitText = function(offset) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLText.prototype.replaceWholeText = function(content) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLText;
    }(XMLCharacterData);
}).call(this);

},{"e16b55d7b9ae6110":"iNzZB","6951a1495b9b2aef":"an1GL"}],"47tYo":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLCharacterData, XMLProcessingInstruction, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("dc0d646c907512fa");
    XMLCharacterData = require("3417ec217a826ec8");
    module.exports = XMLProcessingInstruction = function(superClass) {
        extend(XMLProcessingInstruction, superClass);
        function XMLProcessingInstruction(parent, target, value) {
            XMLProcessingInstruction.__super__.constructor.call(this, parent);
            if (target == null) throw new Error("Missing instruction target. " + this.debugInfo());
            this.type = NodeType.ProcessingInstruction;
            this.target = this.stringify.insTarget(target);
            this.name = this.target;
            if (value) this.value = this.stringify.insValue(value);
        }
        XMLProcessingInstruction.prototype.clone = function() {
            return Object.create(this);
        };
        XMLProcessingInstruction.prototype.toString = function(options) {
            return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        };
        XMLProcessingInstruction.prototype.isEqualNode = function(node) {
            if (!XMLProcessingInstruction.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
            if (node.target !== this.target) return false;
            return true;
        };
        return XMLProcessingInstruction;
    }(XMLCharacterData);
}).call(this);

},{"dc0d646c907512fa":"iNzZB","3417ec217a826ec8":"an1GL"}],"5b4ux":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, XMLDummy, XMLNode, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require("a213921cd91c2245");
    NodeType = require("47cd197d16eee265");
    module.exports = XMLDummy = function(superClass) {
        extend(XMLDummy, superClass);
        function XMLDummy(parent) {
            XMLDummy.__super__.constructor.call(this, parent);
            this.type = NodeType.Dummy;
        }
        XMLDummy.prototype.clone = function() {
            return Object.create(this);
        };
        XMLDummy.prototype.toString = function(options) {
            return "";
        };
        return XMLDummy;
    }(XMLNode);
}).call(this);

},{"a213921cd91c2245":"kfik1","47cd197d16eee265":"iNzZB"}],"8bc8r":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNodeList;
    module.exports = XMLNodeList = function() {
        function XMLNodeList(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNodeList.prototype, "length", {
            get: function() {
                return this.nodes.length || 0;
            }
        });
        XMLNodeList.prototype.clone = function() {
            return this.nodes = null;
        };
        XMLNodeList.prototype.item = function(index) {
            return this.nodes[index] || null;
        };
        return XMLNodeList;
    }();
}).call(this);

},{}],"2bb5a":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
    };
}).call(this);

},{}],"acXVD":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLStringifier, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, hasProp = {}.hasOwnProperty;
    module.exports = XMLStringifier = function() {
        function XMLStringifier(options) {
            this.assertLegalName = bind(this.assertLegalName, this);
            this.assertLegalChar = bind(this.assertLegalChar, this);
            var key, ref, value;
            options || (options = {});
            this.options = options;
            if (!this.options.version) this.options.version = "1.0";
            ref = options.stringify || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
            }
        }
        XMLStringifier.prototype.name = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalName("" + val || "");
        };
        XMLStringifier.prototype.text = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar(this.textEscape("" + val || ""));
        };
        XMLStringifier.prototype.cdata = function(val) {
            if (this.options.noValidation) return val;
            val = "" + val || "";
            val = val.replace("]]>", "]]]]><![CDATA[>");
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.comment = function(val) {
            if (this.options.noValidation) return val;
            val = "" + val || "";
            if (val.match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + val);
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.raw = function(val) {
            if (this.options.noValidation) return val;
            return "" + val || "";
        };
        XMLStringifier.prototype.attValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar(this.attEscape(val = "" + val || ""));
        };
        XMLStringifier.prototype.insTarget = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.insValue = function(val) {
            if (this.options.noValidation) return val;
            val = "" + val || "";
            if (val.match(/\?>/)) throw new Error("Invalid processing instruction value: " + val);
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.xmlVersion = function(val) {
            if (this.options.noValidation) return val;
            val = "" + val || "";
            if (!val.match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + val);
            return val;
        };
        XMLStringifier.prototype.xmlEncoding = function(val) {
            if (this.options.noValidation) return val;
            val = "" + val || "";
            if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + val);
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.xmlStandalone = function(val) {
            if (this.options.noValidation) return val;
            if (val) return "yes";
            else return "no";
        };
        XMLStringifier.prototype.dtdPubID = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdSysID = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdElementValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdAttType = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdAttDefault = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdEntityValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.dtdNData = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar("" + val || "");
        };
        XMLStringifier.prototype.convertAttKey = "@";
        XMLStringifier.prototype.convertPIKey = "?";
        XMLStringifier.prototype.convertTextKey = "#text";
        XMLStringifier.prototype.convertCDataKey = "#cdata";
        XMLStringifier.prototype.convertCommentKey = "#comment";
        XMLStringifier.prototype.convertRawKey = "#raw";
        XMLStringifier.prototype.assertLegalChar = function(str) {
            var regex, res;
            if (this.options.noValidation) return str;
            regex = "";
            if (this.options.version === "1.0") {
                regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                if (res = str.match(regex)) throw new Error("Invalid character in string: " + str + " at index " + res.index);
            } else if (this.options.version === "1.1") {
                regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                if (res = str.match(regex)) throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
            return str;
        };
        XMLStringifier.prototype.assertLegalName = function(str) {
            var regex;
            if (this.options.noValidation) return str;
            this.assertLegalChar(str);
            regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
            if (!str.match(regex)) throw new Error("Invalid character in name");
            return str;
        };
        XMLStringifier.prototype.textEscape = function(str) {
            var ampregex;
            if (this.options.noValidation) return str;
            ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        };
        XMLStringifier.prototype.attEscape = function(str) {
            var ampregex;
            if (this.options.noValidation) return str;
            ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        };
        return XMLStringifier;
    }();
}).call(this);

},{}],"4Wk49":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLStringWriter, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    XMLWriterBase = require("9d52dc0ac6724da0");
    module.exports = XMLStringWriter = function(superClass) {
        extend(XMLStringWriter, superClass);
        function XMLStringWriter(options) {
            XMLStringWriter.__super__.constructor.call(this, options);
        }
        XMLStringWriter.prototype.document = function(doc, options) {
            var child, i, len, r, ref;
            options = this.filterOptions(options);
            r = "";
            ref = doc.children;
            for(i = 0, len = ref.length; i < len; i++){
                child = ref[i];
                r += this.writeChildNode(child, options, 0);
            }
            if (options.pretty && r.slice(-options.newline.length) === options.newline) r = r.slice(0, -options.newline.length);
            return r;
        };
        return XMLStringWriter;
    }(XMLWriterBase);
}).call(this);

},{"9d52dc0ac6724da0":"jI9f2"}],"jI9f2":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
    assign = require("75817c14e3dd56ca").assign;
    NodeType = require("d6d53251a09a6ee1");
    XMLDeclaration = require("9730194a8c0c4783");
    XMLDocType = require("ede7c141272b1dd5");
    XMLCData = require("a57838031903ea3f");
    XMLComment = require("f7ead1ad3653d490");
    XMLElement = require("dcc173f9e43bfc0a");
    XMLRaw = require("349c9f4a67644a6d");
    XMLText = require("6db0cc37b41855c3");
    XMLProcessingInstruction = require("167c0e9fd7f100e6");
    XMLDummy = require("15cae005a9a3ed5a");
    XMLDTDAttList = require("ce8d6b343d31d749");
    XMLDTDElement = require("2cddea69d2f73295");
    XMLDTDEntity = require("5bcc55fbd5532354");
    XMLDTDNotation = require("8beeee48423bc83");
    WriterState = require("dd94c2394fe6b644");
    module.exports = XMLWriterBase = function() {
        function XMLWriterBase(options) {
            var key, ref, value;
            options || (options = {});
            this.options = options;
            ref = options.writer || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this["_" + key] = this[key];
                this[key] = value;
            }
        }
        XMLWriterBase.prototype.filterOptions = function(options) {
            var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
            options || (options = {});
            options = assign({}, this.options, options);
            filteredOptions = {
                writer: this
            };
            filteredOptions.pretty = options.pretty || false;
            filteredOptions.allowEmpty = options.allowEmpty || false;
            filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
            filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
            filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
            filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
            filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
            if (filteredOptions.spaceBeforeSlash === true) filteredOptions.spaceBeforeSlash = " ";
            filteredOptions.suppressPrettyCount = 0;
            filteredOptions.user = {};
            filteredOptions.state = WriterState.None;
            return filteredOptions;
        };
        XMLWriterBase.prototype.indent = function(node, options, level) {
            var indentLevel;
            if (!options.pretty || options.suppressPrettyCount) return "";
            else if (options.pretty) {
                indentLevel = (level || 0) + options.offset + 1;
                if (indentLevel > 0) return new Array(indentLevel).join(options.indent);
            }
            return "";
        };
        XMLWriterBase.prototype.endline = function(node, options, level) {
            if (!options.pretty || options.suppressPrettyCount) return "";
            else return options.newline;
        };
        XMLWriterBase.prototype.attribute = function(att, options, level) {
            var r;
            this.openAttribute(att, options, level);
            r = " " + att.name + '="' + att.value + '"';
            this.closeAttribute(att, options, level);
            return r;
        };
        XMLWriterBase.prototype.cdata = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<![CDATA[";
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += "]]>" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.comment = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!-- ";
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += " -->" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.declaration = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<?xml";
            options.state = WriterState.InsideTag;
            r += ' version="' + node.version + '"';
            if (node.encoding != null) r += ' encoding="' + node.encoding + '"';
            if (node.standalone != null) r += ' standalone="' + node.standalone + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "?>";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.docType = function(node, options, level) {
            var child, i, len, r, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            r += "<!DOCTYPE " + node.root().name;
            if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
            if (node.children.length > 0) {
                r += " [";
                r += this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += "]";
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
            level || (level = 0);
            prettySuppressed = false;
            r = "";
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r += this.indent(node, options, level) + "<" + node.name;
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                r += this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
            })) {
                if (options.allowEmpty) {
                    r += ">";
                    options.state = WriterState.CloseTag;
                    r += "</" + node.name + ">" + this.endline(node, options, level);
                } else {
                    options.state = WriterState.CloseTag;
                    r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                r += ">";
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                r += this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
                if (options.dontPrettyTextNodes) {
                    ref1 = node.children;
                    for(i = 0, len = ref1.length; i < len; i++){
                        child = ref1[i];
                        if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                            options.suppressPrettyCount++;
                            prettySuppressed = true;
                            break;
                        }
                    }
                }
                r += ">" + this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref2 = node.children;
                for(j = 0, len1 = ref2.length; j < len1; j++){
                    child = ref2[j];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += this.indent(node, options, level) + "</" + node.name + ">";
                if (prettySuppressed) options.suppressPrettyCount--;
                r += this.endline(node, options, level);
                options.state = WriterState.None;
            }
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.writeChildNode = function(node, options, level) {
            switch(node.type){
                case NodeType.CData:
                    return this.cdata(node, options, level);
                case NodeType.Comment:
                    return this.comment(node, options, level);
                case NodeType.Element:
                    return this.element(node, options, level);
                case NodeType.Raw:
                    return this.raw(node, options, level);
                case NodeType.Text:
                    return this.text(node, options, level);
                case NodeType.ProcessingInstruction:
                    return this.processingInstruction(node, options, level);
                case NodeType.Dummy:
                    return "";
                case NodeType.Declaration:
                    return this.declaration(node, options, level);
                case NodeType.DocType:
                    return this.docType(node, options, level);
                case NodeType.AttributeDeclaration:
                    return this.dtdAttList(node, options, level);
                case NodeType.ElementDeclaration:
                    return this.dtdElement(node, options, level);
                case NodeType.EntityDeclaration:
                    return this.dtdEntity(node, options, level);
                case NodeType.NotationDeclaration:
                    return this.dtdNotation(node, options, level);
                default:
                    throw new Error("Unknown XML node type: " + node.constructor.name);
            }
        };
        XMLWriterBase.prototype.processingInstruction = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<?";
            options.state = WriterState.InsideTag;
            r += node.target;
            if (node.value) r += " " + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "?>";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.raw = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.text = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdAttList = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ATTLIST";
            options.state = WriterState.InsideTag;
            r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
            if (node.defaultValueType !== "#DEFAULT") r += " " + node.defaultValueType;
            if (node.defaultValue) r += ' "' + node.defaultValue + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdElement = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ELEMENT";
            options.state = WriterState.InsideTag;
            r += " " + node.name + " " + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdEntity = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ENTITY";
            options.state = WriterState.InsideTag;
            if (node.pe) r += " %";
            r += " " + node.name;
            if (node.value) r += ' "' + node.value + '"';
            else {
                if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
                if (node.nData) r += " NDATA " + node.nData;
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdNotation = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!NOTATION";
            options.state = WriterState.InsideTag;
            r += " " + node.name;
            if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            else if (node.pubID) r += ' PUBLIC "' + node.pubID + '"';
            else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.openNode = function(node, options, level) {};
        XMLWriterBase.prototype.closeNode = function(node, options, level) {};
        XMLWriterBase.prototype.openAttribute = function(att, options, level) {};
        XMLWriterBase.prototype.closeAttribute = function(att, options, level) {};
        return XMLWriterBase;
    }();
}).call(this);

},{"75817c14e3dd56ca":"ftYTw","d6d53251a09a6ee1":"iNzZB","9730194a8c0c4783":"7KOl1","ede7c141272b1dd5":"aPjL5","a57838031903ea3f":"iw4Bz","f7ead1ad3653d490":"d9Olx","dcc173f9e43bfc0a":"c5gEs","349c9f4a67644a6d":"Dh6Jk","6db0cc37b41855c3":"cFPm0","167c0e9fd7f100e6":"47tYo","15cae005a9a3ed5a":"5b4ux","ce8d6b343d31d749":"eBGGV","2cddea69d2f73295":"1ix9Z","5bcc55fbd5532354":"iAklG","8beeee48423bc83":"3I1Jt","dd94c2394fe6b644":"8DB9D"}],"8DB9D":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
    };
}).call(this);

},{}],"bE5zE":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = require("4a0b6b137d547786"), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
    NodeType = require("97c418eb43415d1");
    XMLDocument = require("bbdde255e9b44c2a");
    XMLElement = require("7caa93eaeb2c96a7");
    XMLCData = require("e6175a20b2232a77");
    XMLComment = require("b035b3e1bd26442f");
    XMLRaw = require("526deec19abea5fe");
    XMLText = require("55ab1233b224d930");
    XMLProcessingInstruction = require("d22472ac05d87f1c");
    XMLDeclaration = require("39cdad257f5d6100");
    XMLDocType = require("9cbc536e76baf6e7");
    XMLDTDAttList = require("f30e4e8b2fd7fcd0");
    XMLDTDEntity = require("191528b53de83946");
    XMLDTDElement = require("1817e86507e2f1b4");
    XMLDTDNotation = require("26d62c2b781ea9d6");
    XMLAttribute = require("8e92d10ad0cfdf87");
    XMLStringifier = require("d654416cbe0a799d");
    XMLStringWriter = require("bb156ac07b50c66a");
    WriterState = require("ba39b9e659007a91");
    module.exports = XMLDocumentCB = function() {
        function XMLDocumentCB(options, onData, onEnd) {
            var writerOptions;
            this.name = "?xml";
            this.type = NodeType.Document;
            options || (options = {});
            writerOptions = {};
            if (!options.writer) options.writer = new XMLStringWriter();
            else if (isPlainObject(options.writer)) {
                writerOptions = options.writer;
                options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.writer = options.writer;
            this.writerOptions = this.writer.filterOptions(writerOptions);
            this.stringify = new XMLStringifier(options);
            this.onDataCallback = onData || function() {};
            this.onEndCallback = onEnd || function() {};
            this.currentNode = null;
            this.currentLevel = -1;
            this.openTags = {};
            this.documentStarted = false;
            this.documentCompleted = false;
            this.root = null;
        }
        XMLDocumentCB.prototype.createChildNode = function(node) {
            var att, attName, attributes, child, i, len, ref1, ref2;
            switch(node.type){
                case NodeType.CData:
                    this.cdata(node.value);
                    break;
                case NodeType.Comment:
                    this.comment(node.value);
                    break;
                case NodeType.Element:
                    attributes = {};
                    ref1 = node.attribs;
                    for(attName in ref1){
                        if (!hasProp.call(ref1, attName)) continue;
                        att = ref1[attName];
                        attributes[attName] = att.value;
                    }
                    this.node(node.name, attributes);
                    break;
                case NodeType.Dummy:
                    this.dummy();
                    break;
                case NodeType.Raw:
                    this.raw(node.value);
                    break;
                case NodeType.Text:
                    this.text(node.value);
                    break;
                case NodeType.ProcessingInstruction:
                    this.instruction(node.target, node.value);
                    break;
                default:
                    throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
            }
            ref2 = node.children;
            for(i = 0, len = ref2.length; i < len; i++){
                child = ref2[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) this.up();
            }
            return this;
        };
        XMLDocumentCB.prototype.dummy = function() {
            return this;
        };
        XMLDocumentCB.prototype.node = function(name, attributes, text) {
            var ref1;
            if (name == null) throw new Error("Missing node name.");
            if (this.root && this.currentLevel === -1) throw new Error("Document can only have one root node. " + this.debugInfo(name));
            this.openCurrent();
            name = getValue(name);
            if (attributes == null) attributes = {};
            attributes = getValue(attributes);
            if (!isObject(attributes)) ref1 = [
                attributes,
                text
            ], text = ref1[0], attributes = ref1[1];
            this.currentNode = new XMLElement(this, name, attributes);
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            if (text != null) this.text(text);
            return this;
        };
        XMLDocumentCB.prototype.element = function(name, attributes, text) {
            var child, i, len, oldValidationFlag, ref1, root;
            if (this.currentNode && this.currentNode.type === NodeType.DocType) this.dtdElement.apply(this, arguments);
            else if (Array.isArray(name) || isObject(name) || isFunction(name)) {
                oldValidationFlag = this.options.noValidation;
                this.options.noValidation = true;
                root = new XMLDocument(this.options).element("TEMP_ROOT");
                root.element(name);
                this.options.noValidation = oldValidationFlag;
                ref1 = root.children;
                for(i = 0, len = ref1.length; i < len; i++){
                    child = ref1[i];
                    this.createChildNode(child);
                    if (child.type === NodeType.Element) this.up();
                }
            } else this.node(name, attributes, text);
            return this;
        };
        XMLDocumentCB.prototype.attribute = function(name, value) {
            var attName, attValue;
            if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
            if (name != null) name = getValue(name);
            if (isObject(name)) for(attName in name){
                if (!hasProp.call(name, attName)) continue;
                attValue = name[attName];
                this.attribute(attName, attValue);
            }
            else {
                if (isFunction(value)) value = value.apply();
                if (this.options.keepNullAttributes && value == null) this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
                else if (value != null) this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
            }
            return this;
        };
        XMLDocumentCB.prototype.text = function(value) {
            var node;
            this.openCurrent();
            node = new XMLText(this, value);
            this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.cdata = function(value) {
            var node;
            this.openCurrent();
            node = new XMLCData(this, value);
            this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.comment = function(value) {
            var node;
            this.openCurrent();
            node = new XMLComment(this, value);
            this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.raw = function(value) {
            var node;
            this.openCurrent();
            node = new XMLRaw(this, value);
            this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.instruction = function(target, value) {
            var i, insTarget, insValue, len, node;
            this.openCurrent();
            if (target != null) target = getValue(target);
            if (value != null) value = getValue(value);
            if (Array.isArray(target)) for(i = 0, len = target.length; i < len; i++){
                insTarget = target[i];
                this.instruction(insTarget);
            }
            else if (isObject(target)) for(insTarget in target){
                if (!hasProp.call(target, insTarget)) continue;
                insValue = target[insTarget];
                this.instruction(insTarget, insValue);
            }
            else {
                if (isFunction(value)) value = value.apply();
                node = new XMLProcessingInstruction(this, target, value);
                this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            }
            return this;
        };
        XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
            var node;
            this.openCurrent();
            if (this.documentStarted) throw new Error("declaration() must be the first node.");
            node = new XMLDeclaration(this, version, encoding, standalone);
            this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
            this.openCurrent();
            if (root == null) throw new Error("Missing root node name.");
            if (this.root) throw new Error("dtd() must come before the root node.");
            this.currentNode = new XMLDocType(this, pubID, sysID);
            this.currentNode.rootNodeName = root;
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            return this;
        };
        XMLDocumentCB.prototype.dtdElement = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDElement(this, name, value);
            this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var node;
            this.openCurrent();
            node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.entity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, false, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.pEntity = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, true, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.notation = function(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDNotation(this, name, value);
            this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
        };
        XMLDocumentCB.prototype.up = function() {
            if (this.currentLevel < 0) throw new Error("The document node has no parent.");
            if (this.currentNode) {
                if (this.currentNode.children) this.closeNode(this.currentNode);
                else this.openNode(this.currentNode);
                this.currentNode = null;
            } else this.closeNode(this.openTags[this.currentLevel]);
            delete this.openTags[this.currentLevel];
            this.currentLevel--;
            return this;
        };
        XMLDocumentCB.prototype.end = function() {
            while(this.currentLevel >= 0)this.up();
            return this.onEnd();
        };
        XMLDocumentCB.prototype.openCurrent = function() {
            if (this.currentNode) {
                this.currentNode.children = true;
                return this.openNode(this.currentNode);
            }
        };
        XMLDocumentCB.prototype.openNode = function(node) {
            var att, chunk, name, ref1;
            if (!node.isOpen) {
                if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) this.root = node;
                chunk = "";
                if (node.type === NodeType.Element) {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
                    ref1 = node.attribs;
                    for(name in ref1){
                        if (!hasProp.call(ref1, name)) continue;
                        att = ref1[name];
                        chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
                    }
                    chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
                    this.writerOptions.state = WriterState.InsideTag;
                } else {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
                    if (node.pubID && node.sysID) chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                    else if (node.sysID) chunk += ' SYSTEM "' + node.sysID + '"';
                    if (node.children) {
                        chunk += " [";
                        this.writerOptions.state = WriterState.InsideTag;
                    } else {
                        this.writerOptions.state = WriterState.CloseTag;
                        chunk += ">";
                    }
                    chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
                }
                this.onData(chunk, this.currentLevel);
                return node.isOpen = true;
            }
        };
        XMLDocumentCB.prototype.closeNode = function(node) {
            var chunk;
            if (!node.isClosed) {
                chunk = "";
                this.writerOptions.state = WriterState.CloseTag;
                if (node.type === NodeType.Element) chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
                else chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
                this.writerOptions.state = WriterState.None;
                this.onData(chunk, this.currentLevel);
                return node.isClosed = true;
            }
        };
        XMLDocumentCB.prototype.onData = function(chunk, level) {
            this.documentStarted = true;
            return this.onDataCallback(chunk, level + 1);
        };
        XMLDocumentCB.prototype.onEnd = function() {
            this.documentCompleted = true;
            return this.onEndCallback();
        };
        XMLDocumentCB.prototype.debugInfo = function(name) {
            if (name == null) return "";
            else return "node: <" + name + ">";
        };
        XMLDocumentCB.prototype.ele = function() {
            return this.element.apply(this, arguments);
        };
        XMLDocumentCB.prototype.nod = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.txt = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.dat = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.com = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.ins = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
            return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB.prototype.e = function(name, attributes, text) {
            return this.element(name, attributes, text);
        };
        XMLDocumentCB.prototype.n = function(name, attributes, text) {
            return this.node(name, attributes, text);
        };
        XMLDocumentCB.prototype.t = function(value) {
            return this.text(value);
        };
        XMLDocumentCB.prototype.d = function(value) {
            return this.cdata(value);
        };
        XMLDocumentCB.prototype.c = function(value) {
            return this.comment(value);
        };
        XMLDocumentCB.prototype.r = function(value) {
            return this.raw(value);
        };
        XMLDocumentCB.prototype.i = function(target, value) {
            return this.instruction(target, value);
        };
        XMLDocumentCB.prototype.att = function() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) return this.attList.apply(this, arguments);
            else return this.attribute.apply(this, arguments);
        };
        XMLDocumentCB.prototype.a = function() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) return this.attList.apply(this, arguments);
            else return this.attribute.apply(this, arguments);
        };
        XMLDocumentCB.prototype.ent = function(name, value) {
            return this.entity(name, value);
        };
        XMLDocumentCB.prototype.pent = function(name, value) {
            return this.pEntity(name, value);
        };
        XMLDocumentCB.prototype.not = function(name, value) {
            return this.notation(name, value);
        };
        return XMLDocumentCB;
    }();
}).call(this);

},{"4a0b6b137d547786":"ftYTw","97c418eb43415d1":"iNzZB","bbdde255e9b44c2a":"kMBGe","7caa93eaeb2c96a7":"c5gEs","e6175a20b2232a77":"iw4Bz","b035b3e1bd26442f":"d9Olx","526deec19abea5fe":"Dh6Jk","55ab1233b224d930":"cFPm0","d22472ac05d87f1c":"47tYo","39cdad257f5d6100":"7KOl1","9cbc536e76baf6e7":"aPjL5","f30e4e8b2fd7fcd0":"eBGGV","191528b53de83946":"iAklG","1817e86507e2f1b4":"1ix9Z","26d62c2b781ea9d6":"3I1Jt","8e92d10ad0cfdf87":"cvUns","d654416cbe0a799d":"acXVD","bb156ac07b50c66a":"4Wk49","ba39b9e659007a91":"8DB9D"}],"jE03a":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require("2724c4fa3231a13e");
    XMLWriterBase = require("b06c90945fd90755");
    WriterState = require("f344b6746962647f");
    module.exports = XMLStreamWriter = function(superClass) {
        extend(XMLStreamWriter, superClass);
        function XMLStreamWriter(stream, options) {
            this.stream = stream;
            XMLStreamWriter.__super__.constructor.call(this, options);
        }
        XMLStreamWriter.prototype.endline = function(node, options, level) {
            if (node.isLastRootNode && options.state === WriterState.CloseTag) return "";
            else return XMLStreamWriter.__super__.endline.call(this, node, options, level);
        };
        XMLStreamWriter.prototype.document = function(doc, options) {
            var child, i, j, k, len, len1, ref, ref1, results;
            ref = doc.children;
            for(i = j = 0, len = ref.length; j < len; i = ++j){
                child = ref[i];
                child.isLastRootNode = i === doc.children.length - 1;
            }
            options = this.filterOptions(options);
            ref1 = doc.children;
            results = [];
            for(k = 0, len1 = ref1.length; k < len1; k++){
                child = ref1[k];
                results.push(this.writeChildNode(child, options, 0));
            }
            return results;
        };
        XMLStreamWriter.prototype.attribute = function(att, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.attribute.call(this, att, options, level));
        };
        XMLStreamWriter.prototype.cdata = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.cdata.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.comment = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.comment.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.declaration = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.declaration.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.docType = function(node, options, level) {
            var child, j, len, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level));
            this.stream.write("<!DOCTYPE " + node.root().name);
            if (node.pubID && node.sysID) this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            else if (node.sysID) this.stream.write(' SYSTEM "' + node.sysID + '"');
            if (node.children.length > 0) {
                this.stream.write(" [");
                this.stream.write(this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(j = 0, len = ref.length; j < len; j++){
                    child = ref[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write("]");
            }
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + ">");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
        };
        XMLStreamWriter.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level) + "<" + node.name);
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
            })) {
                if (options.allowEmpty) {
                    this.stream.write(">");
                    options.state = WriterState.CloseTag;
                    this.stream.write("</" + node.name + ">");
                } else {
                    options.state = WriterState.CloseTag;
                    this.stream.write(options.spaceBeforeSlash + "/>");
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                this.stream.write(">");
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                this.stream.write("</" + node.name + ">");
            } else {
                this.stream.write(">" + this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref1 = node.children;
                for(j = 0, len = ref1.length; j < len; j++){
                    child = ref1[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
            }
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
        };
        XMLStreamWriter.prototype.processingInstruction = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.processingInstruction.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.raw = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.raw.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.text = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.text.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdAttList = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdAttList.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdElement = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdElement.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdEntity = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdEntity.call(this, node, options, level));
        };
        XMLStreamWriter.prototype.dtdNotation = function(node, options, level) {
            return this.stream.write(XMLStreamWriter.__super__.dtdNotation.call(this, node, options, level));
        };
        return XMLStreamWriter;
    }(XMLWriterBase);
}).call(this);

},{"2724c4fa3231a13e":"iNzZB","b06c90945fd90755":"jI9f2","f344b6746962647f":"8DB9D"}],"9b9bV":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    }, extend = function(child, parent) {
        for(var key in parent)if (hasProp.call(parent, key)) child[key] = parent[key];
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    }, hasProp = {}.hasOwnProperty;
    sax = require("13410777db2f54ad");
    events = require("d9a5d36551474a58");
    bom = require("8551b3c8f0063f8b");
    processors = require("7ac38f981f246dd7");
    setImmediate = require("524970f650843682").setImmediate;
    defaults = require("657f91eda6e269d2").defaults;
    isEmpty = function(thing) {
        return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
    };
    processItem = function(processors, item, key) {
        var i, len, process;
        for(i = 0, len = processors.length; i < len; i++){
            process = processors[i];
            item = process(item, key);
        }
        return item;
    };
    exports.Parser = function(superClass) {
        extend(Parser, superClass);
        function Parser(opts) {
            this.parseStringPromise = bind(this.parseStringPromise, this);
            this.parseString = bind(this.parseString, this);
            this.reset = bind(this.reset, this);
            this.assignOrPush = bind(this.assignOrPush, this);
            this.processAsync = bind(this.processAsync, this);
            var key, ref, value;
            if (!(this instanceof exports.Parser)) return new exports.Parser(opts);
            this.options = {};
            ref = defaults["0.2"];
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this.options[key] = value;
            }
            for(key in opts){
                if (!hasProp.call(opts, key)) continue;
                value = opts[key];
                this.options[key] = value;
            }
            if (this.options.xmlns) this.options.xmlnskey = this.options.attrkey + "ns";
            if (this.options.normalizeTags) {
                if (!this.options.tagNameProcessors) this.options.tagNameProcessors = [];
                this.options.tagNameProcessors.unshift(processors.normalize);
            }
            this.reset();
        }
        Parser.prototype.processAsync = function() {
            var chunk, err;
            try {
                if (this.remaining.length <= this.options.chunkSize) {
                    chunk = this.remaining;
                    this.remaining = "";
                    this.saxParser = this.saxParser.write(chunk);
                    return this.saxParser.close();
                } else {
                    chunk = this.remaining.substr(0, this.options.chunkSize);
                    this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
                    this.saxParser = this.saxParser.write(chunk);
                    return setImmediate(this.processAsync);
                }
            } catch (error1) {
                err = error1;
                if (!this.saxParser.errThrown) {
                    this.saxParser.errThrown = true;
                    return this.emit(err);
                }
            }
        };
        Parser.prototype.assignOrPush = function(obj, key, newValue) {
            if (!(key in obj)) {
                if (!this.options.explicitArray) return obj[key] = newValue;
                else return obj[key] = [
                    newValue
                ];
            } else {
                if (!(obj[key] instanceof Array)) obj[key] = [
                    obj[key]
                ];
                return obj[key].push(newValue);
            }
        };
        Parser.prototype.reset = function() {
            var attrkey, charkey, ontext, stack;
            this.removeAllListeners();
            this.saxParser = sax.parser(this.options.strict, {
                trim: false,
                normalize: false,
                xmlns: this.options.xmlns
            });
            this.saxParser.errThrown = false;
            this.saxParser.onerror = function(_this) {
                return function(error) {
                    _this.saxParser.resume();
                    if (!_this.saxParser.errThrown) {
                        _this.saxParser.errThrown = true;
                        return _this.emit("error", error);
                    }
                };
            }(this);
            this.saxParser.onend = function(_this) {
                return function() {
                    if (!_this.saxParser.ended) {
                        _this.saxParser.ended = true;
                        return _this.emit("end", _this.resultObject);
                    }
                };
            }(this);
            this.saxParser.ended = false;
            this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
            this.resultObject = null;
            stack = [];
            attrkey = this.options.attrkey;
            charkey = this.options.charkey;
            this.saxParser.onopentag = function(_this) {
                return function(node) {
                    var key, newValue, obj, processedKey, ref;
                    obj = {};
                    obj[charkey] = "";
                    if (!_this.options.ignoreAttrs) {
                        ref = node.attributes;
                        for(key in ref){
                            if (!hasProp.call(ref, key)) continue;
                            if (!(attrkey in obj) && !_this.options.mergeAttrs) obj[attrkey] = {};
                            newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                            processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                            if (_this.options.mergeAttrs) _this.assignOrPush(obj, processedKey, newValue);
                            else obj[attrkey][processedKey] = newValue;
                        }
                    }
                    obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
                    if (_this.options.xmlns) obj[_this.options.xmlnskey] = {
                        uri: node.uri,
                        local: node.local
                    };
                    return stack.push(obj);
                };
            }(this);
            this.saxParser.onclosetag = function(_this) {
                return function() {
                    var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
                    obj = stack.pop();
                    nodeName = obj["#name"];
                    if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) delete obj["#name"];
                    if (obj.cdata === true) {
                        cdata = obj.cdata;
                        delete obj.cdata;
                    }
                    s = stack[stack.length - 1];
                    if (obj[charkey].match(/^\s*$/) && !cdata) {
                        emptyStr = obj[charkey];
                        delete obj[charkey];
                    } else {
                        if (_this.options.trim) obj[charkey] = obj[charkey].trim();
                        if (_this.options.normalize) obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
                        obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
                        if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) obj = obj[charkey];
                    }
                    if (isEmpty(obj)) obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
                    if (_this.options.validator != null) {
                        xpath = "/" + (function() {
                            var i, len, results;
                            results = [];
                            for(i = 0, len = stack.length; i < len; i++){
                                node = stack[i];
                                results.push(node["#name"]);
                            }
                            return results;
                        })().concat(nodeName).join("/");
                        (function() {
                            var err;
                            try {
                                return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                            } catch (error1) {
                                err = error1;
                                return _this.emit("error", err);
                            }
                        })();
                    }
                    if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === "object") {
                        if (!_this.options.preserveChildrenOrder) {
                            node = {};
                            if (_this.options.attrkey in obj) {
                                node[_this.options.attrkey] = obj[_this.options.attrkey];
                                delete obj[_this.options.attrkey];
                            }
                            if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                                node[_this.options.charkey] = obj[_this.options.charkey];
                                delete obj[_this.options.charkey];
                            }
                            if (Object.getOwnPropertyNames(obj).length > 0) node[_this.options.childkey] = obj;
                            obj = node;
                        } else if (s) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            objClone = {};
                            for(key in obj){
                                if (!hasProp.call(obj, key)) continue;
                                objClone[key] = obj[key];
                            }
                            s[_this.options.childkey].push(objClone);
                            delete obj["#name"];
                            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) obj = obj[charkey];
                        }
                    }
                    if (stack.length > 0) return _this.assignOrPush(s, nodeName, obj);
                    else {
                        if (_this.options.explicitRoot) {
                            old = obj;
                            obj = {};
                            obj[nodeName] = old;
                        }
                        _this.resultObject = obj;
                        _this.saxParser.ended = true;
                        return _this.emit("end", _this.resultObject);
                    }
                };
            }(this);
            ontext = function(_this) {
                return function(text) {
                    var charChild, s;
                    s = stack[stack.length - 1];
                    if (s) {
                        s[charkey] += text;
                        if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            charChild = {
                                "#name": "__text__"
                            };
                            charChild[charkey] = text;
                            if (_this.options.normalize) charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                            s[_this.options.childkey].push(charChild);
                        }
                        return s;
                    }
                };
            }(this);
            this.saxParser.ontext = ontext;
            return this.saxParser.oncdata = function(_this) {
                return function(text) {
                    var s;
                    s = ontext(text);
                    if (s) return s.cdata = true;
                };
            }(this);
        };
        Parser.prototype.parseString = function(str, cb) {
            var err;
            if (cb != null && typeof cb === "function") {
                this.on("end", function(result) {
                    this.reset();
                    return cb(null, result);
                });
                this.on("error", function(err) {
                    this.reset();
                    return cb(err);
                });
            }
            try {
                str = str.toString();
                if (str.trim() === "") {
                    this.emit("end", null);
                    return true;
                }
                str = bom.stripBOM(str);
                if (this.options.async) {
                    this.remaining = str;
                    setImmediate(this.processAsync);
                    return this.saxParser;
                }
                return this.saxParser.write(str).close();
            } catch (error1) {
                err = error1;
                if (!(this.saxParser.errThrown || this.saxParser.ended)) {
                    this.emit("error", err);
                    return this.saxParser.errThrown = true;
                } else if (this.saxParser.ended) throw err;
            }
        };
        Parser.prototype.parseStringPromise = function(str) {
            return new Promise(function(_this) {
                return function(resolve, reject) {
                    return _this.parseString(str, function(err, value) {
                        if (err) return reject(err);
                        else return resolve(value);
                    });
                };
            }(this));
        };
        return Parser;
    }(events);
    exports.parseString = function(str, a, b) {
        var cb, options, parser;
        if (b != null) {
            if (typeof b === "function") cb = b;
            if (typeof a === "object") options = a;
        } else {
            if (typeof a === "function") cb = a;
            options = {};
        }
        parser = new exports.Parser(options);
        return parser.parseString(str, cb);
    };
    exports.parseStringPromise = function(str, a) {
        var options, parser;
        if (typeof a === "object") options = a;
        parser = new exports.Parser(options);
        return parser.parseStringPromise(str);
    };
}).call(this);

},{"13410777db2f54ad":"bY4if","d9a5d36551474a58":"1VQLm","8551b3c8f0063f8b":"9OO6G","7ac38f981f246dd7":"ifmcs","524970f650843682":"l8XYx","657f91eda6e269d2":"lc6iE"}],"bY4if":[function(require,module,exports) {
var Buffer = require("e8399c94bace2e95").Buffer;
(function(sax) {
    sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
    };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;
    // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
    // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
    // since that's the earliest that a buffer overrun could occur.  This way, checks are
    // as rare as required, but as often as necessary to ensure never crossing this bound.
    // Furthermore, buffers are only tested at most once per write(), so passing a very
    // large string into write() might have undesirable effects, but this is manageable by
    // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
    // edge case, result in creating at most one complete copy of the string passed in.
    // Set to Infinity to have unlimited buffers.
    sax.MAX_BUFFER_LENGTH = 65536;
    var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
    ];
    sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
    ];
    function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) return new SAXParser(strict, opt);
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];
        // namespaces form a prototype chain.
        // it always points at the current tag,
        // which protos to its parent tag.
        if (parser.opt.xmlns) parser.ns = Object.create(rootNS);
        // mostly just for error reporting
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) parser.position = parser.line = parser.column = 0;
        emit(parser, "onready");
    }
    if (!Object.create) Object.create = function(o) {
        function F() {}
        F.prototype = o;
        var newf = new F();
        return newf;
    };
    if (!Object.keys) Object.keys = function(o) {
        var a = [];
        for(var i in o)if (o.hasOwnProperty(i)) a.push(i);
        return a;
    };
    function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for(var i = 0, l = buffers.length; i < l; i++){
            var len = parser[buffers[i]].length;
            if (len > maxAllowed) // Text/cdata nodes can get big, and since they're buffered,
            // we can get here under normal conditions.
            // Avoid issues by emitting the text node now,
            // so at least it won't get any bigger.
            switch(buffers[i]){
                case "textNode":
                    closeText(parser);
                    break;
                case "cdata":
                    emitNode(parser, "oncdata", parser.cdata);
                    parser.cdata = "";
                    break;
                case "script":
                    emitNode(parser, "onscript", parser.script);
                    parser.script = "";
                    break;
                default:
                    error(parser, "Max buffer length exceeded: " + buffers[i]);
            }
            maxActual = Math.max(maxActual, len);
        }
        // schedule the next check for the earliest possible buffer overrun.
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
        for(var i = 0, l = buffers.length; i < l; i++)parser[buffers[i]] = "";
    }
    function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
            emitNode(parser, "oncdata", parser.cdata);
            parser.cdata = "";
        }
        if (parser.script !== "") {
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
        }
    }
    SAXParser.prototype = {
        end: function() {
            end(this);
        },
        write: write,
        resume: function() {
            this.error = null;
            return this;
        },
        close: function() {
            return this.write(null);
        },
        flush: function() {
            flushBuffers(this);
        }
    };
    var Stream;
    try {
        Stream = require("55cad32d9fc3850b").Stream;
    } catch (ex) {
        Stream = function() {};
    }
    if (!Stream) Stream = function() {};
    var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
    });
    function createStream(strict, opt) {
        return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) return new SAXStream(strict, opt);
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
            me.emit("end");
        };
        this._parser.onerror = function(er) {
            me.emit("error", er);
            // if didn't throw, then means error was handled.
            // go ahead and clear error, so we can write again.
            me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
            Object.defineProperty(me, "on" + ev, {
                get: function() {
                    return me._parser["on" + ev];
                },
                set: function(h) {
                    if (!h) {
                        me.removeAllListeners(ev);
                        me._parser["on" + ev] = h;
                        return h;
                    }
                    me.on(ev, h);
                },
                enumerable: true,
                configurable: false
            });
        });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
            value: SAXStream
        }
    });
    SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
            if (!this._decoder) {
                var SD = require("f36f08810ace8da5").StringDecoder;
                this._decoder = new SD("utf8");
            }
            data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
    };
    SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) this.write(chunk);
        this._parser.end();
        return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [
                arguments[0]
            ] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
        };
        return Stream.prototype.on.call(me, ev, handler);
    };
    // this really needs to be replaced with character classes.
    // XML allows all manner of ridiculous numbers and digits.
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = {
        xml: XML_NAMESPACE,
        xmlns: XMLNS_NAMESPACE
    };
    // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
    // This implementation works on strings, a single character at a time
    // as such, it cannot ever support astral-plane characters (10000-EFFFF)
    // without a significant breaking change to either this  parser, or the
    // JavaScript language.  Implementation of an emoji-capable xml parser
    // is left as an exercise for the reader.
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "	";
    }
    function isQuote(c) {
        return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
    }
    function isMatch(regex, c) {
        return regex.test(c);
    }
    function notMatch(regex, c) {
        return !isMatch(regex, c);
    }
    var S = 0;
    sax.STATE = {
        BEGIN: S++,
        BEGIN_WHITESPACE: S++,
        TEXT: S++,
        TEXT_ENTITY: S++,
        OPEN_WAKA: S++,
        SGML_DECL: S++,
        SGML_DECL_QUOTED: S++,
        DOCTYPE: S++,
        DOCTYPE_QUOTED: S++,
        DOCTYPE_DTD: S++,
        DOCTYPE_DTD_QUOTED: S++,
        COMMENT_STARTING: S++,
        COMMENT: S++,
        COMMENT_ENDING: S++,
        COMMENT_ENDED: S++,
        CDATA: S++,
        CDATA_ENDING: S++,
        CDATA_ENDING_2: S++,
        PROC_INST: S++,
        PROC_INST_BODY: S++,
        PROC_INST_ENDING: S++,
        OPEN_TAG: S++,
        OPEN_TAG_SLASH: S++,
        ATTRIB: S++,
        ATTRIB_NAME: S++,
        ATTRIB_NAME_SAW_WHITE: S++,
        ATTRIB_VALUE: S++,
        ATTRIB_VALUE_QUOTED: S++,
        ATTRIB_VALUE_CLOSED: S++,
        ATTRIB_VALUE_UNQUOTED: S++,
        ATTRIB_VALUE_ENTITY_Q: S++,
        ATTRIB_VALUE_ENTITY_U: S++,
        CLOSE_TAG: S++,
        CLOSE_TAG_SAW_WHITE: S++,
        SCRIPT: S++,
        SCRIPT_ENDING: S++ // <script> ... <
    };
    sax.XML_ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'"
    };
    sax.ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'",
        "AElig": 198,
        "Aacute": 193,
        "Acirc": 194,
        "Agrave": 192,
        "Aring": 197,
        "Atilde": 195,
        "Auml": 196,
        "Ccedil": 199,
        "ETH": 208,
        "Eacute": 201,
        "Ecirc": 202,
        "Egrave": 200,
        "Euml": 203,
        "Iacute": 205,
        "Icirc": 206,
        "Igrave": 204,
        "Iuml": 207,
        "Ntilde": 209,
        "Oacute": 211,
        "Ocirc": 212,
        "Ograve": 210,
        "Oslash": 216,
        "Otilde": 213,
        "Ouml": 214,
        "THORN": 222,
        "Uacute": 218,
        "Ucirc": 219,
        "Ugrave": 217,
        "Uuml": 220,
        "Yacute": 221,
        "aacute": 225,
        "acirc": 226,
        "aelig": 230,
        "agrave": 224,
        "aring": 229,
        "atilde": 227,
        "auml": 228,
        "ccedil": 231,
        "eacute": 233,
        "ecirc": 234,
        "egrave": 232,
        "eth": 240,
        "euml": 235,
        "iacute": 237,
        "icirc": 238,
        "igrave": 236,
        "iuml": 239,
        "ntilde": 241,
        "oacute": 243,
        "ocirc": 244,
        "ograve": 242,
        "oslash": 248,
        "otilde": 245,
        "ouml": 246,
        "szlig": 223,
        "thorn": 254,
        "uacute": 250,
        "ucirc": 251,
        "ugrave": 249,
        "uuml": 252,
        "yacute": 253,
        "yuml": 255,
        "copy": 169,
        "reg": 174,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup1": 185,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "times": 215,
        "divide": 247,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
    };
    Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s = typeof e === "number" ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s;
    });
    for(var s in sax.STATE)sax.STATE[sax.STATE[s]] = s;
    // shorthand
    S = sax.STATE;
    function emit(parser, event, data) {
        parser[event] && parser[event](data);
    }
    function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
    }
    function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
    }
    function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
    }
    function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
    }
    function end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) error(parser, "Unexpected end");
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
    }
    function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) throw new Error("bad call to strictFail");
        if (parser.strict) error(parser, message);
    }
    function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = {
            name: parser.tagName,
            attributes: {}
        };
        // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
        if (parser.opt.xmlns) tag.ns = parent.ns;
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
    }
    function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? [
            "",
            name
        ] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        // <x "xmlns"="http://foo">
        if (attribute && name === "xmlns") {
            prefix = "xmlns";
            local = "";
        }
        return {
            prefix: prefix,
            local: local
        };
    }
    function attrib(parser) {
        if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]();
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
            parser.attribName = parser.attribValue = "";
            return;
        }
        if (parser.opt.xmlns) {
            var qn = qname(parser.attribName, true);
            var prefix = qn.prefix;
            var local = qn.local;
            if (prefix === "xmlns") {
                // namespace binding attribute. push the binding into scope
                if (local === "xml" && parser.attribValue !== XML_NAMESPACE) strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
                else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
                else {
                    var tag = parser.tag;
                    var parent = parser.tags[parser.tags.length - 1] || parser;
                    if (tag.ns === parent.ns) tag.ns = Object.create(parent.ns);
                    tag.ns[local] = parser.attribValue;
                }
            }
            // defer onattribute events until all attributes have been seen
            // so any new bindings can take effect. preserve attribute order
            // so deferred events can be emitted in document order
            parser.attribList.push([
                parser.attribName,
                parser.attribValue
            ]);
        } else {
            // in non-xmlns mode, we can emit the event right away
            parser.tag.attributes[parser.attribName] = parser.attribValue;
            emitNode(parser, "onattribute", {
                name: parser.attribName,
                value: parser.attribValue
            });
        }
        parser.attribName = parser.attribValue = "";
    }
    function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
            // emit namespace binding events
            var tag = parser.tag;
            // add namespace info to tag
            var qn = qname(parser.tagName);
            tag.prefix = qn.prefix;
            tag.local = qn.local;
            tag.uri = tag.ns[qn.prefix] || "";
            if (tag.prefix && !tag.uri) {
                strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
                tag.uri = qn.prefix;
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns && parent.ns !== tag.ns) Object.keys(tag.ns).forEach(function(p) {
                emitNode(parser, "onopennamespace", {
                    prefix: p,
                    uri: tag.ns[p]
                });
            });
            // handle deferred onattribute events
            // Note: do not apply default ns to attributes:
            //   http://www.w3.org/TR/REC-xml-names/#defaulting
            for(var i = 0, l = parser.attribList.length; i < l; i++){
                var nv = parser.attribList[i];
                var name = nv[0];
                var value = nv[1];
                var qualName = qname(name, true);
                var prefix = qualName.prefix;
                var local = qualName.local;
                var uri = prefix === "" ? "" : tag.ns[prefix] || "";
                var a = {
                    name: name,
                    value: value,
                    prefix: prefix,
                    local: local,
                    uri: uri
                };
                // if there's any attributes with an undefined namespace,
                // then fail on them now.
                if (prefix && prefix !== "xmlns" && !uri) {
                    strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
                    a.uri = prefix;
                }
                parser.tag.attributes[name] = a;
                emitNode(parser, "onattribute", a);
            }
            parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        // process the tag
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
            // special case for <script> in non-strict mode.
            if (!parser.noscript && parser.tagName.toLowerCase() === "script") parser.state = S.SCRIPT;
            else parser.state = S.TEXT;
            parser.tag = null;
            parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
    }
    function closeTag(parser) {
        if (!parser.tagName) {
            strictFail(parser, "Weird empty close tag.");
            parser.textNode += "</>";
            parser.state = S.TEXT;
            return;
        }
        if (parser.script) {
            if (parser.tagName !== "script") {
                parser.script += "</" + parser.tagName + ">";
                parser.tagName = "";
                parser.state = S.SCRIPT;
                return;
            }
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
        }
        // first make sure that the closing tag actually exists.
        // <a><b></c></b></a> will close everything, otherwise.
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) tagName = tagName[parser.looseCase]();
        var closeTo = tagName;
        while(t--){
            var close = parser.tags[t];
            if (close.name !== closeTo) // fail the first time in strict mode
            strictFail(parser, "Unexpected close tag");
            else break;
        }
        // didn't find it.  we already failed for strict, so just abort.
        if (t < 0) {
            strictFail(parser, "Unmatched closing tag: " + parser.tagName);
            parser.textNode += "</" + parser.tagName + ">";
            parser.state = S.TEXT;
            return;
        }
        parser.tagName = tagName;
        var s = parser.tags.length;
        while(s-- > t){
            var tag = parser.tag = parser.tags.pop();
            parser.tagName = parser.tag.name;
            emitNode(parser, "onclosetag", parser.tagName);
            var x = {};
            for(var i in tag.ns)x[i] = tag.ns[i];
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (parser.opt.xmlns && tag.ns !== parent.ns) // remove namespace bindings introduced by tag
            Object.keys(tag.ns).forEach(function(p) {
                var n = tag.ns[p];
                emitNode(parser, "onclosenamespace", {
                    prefix: p,
                    uri: n
                });
            });
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
    }
    function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) return parser.ENTITIES[entity];
        if (parser.ENTITIES[entityLC]) return parser.ENTITIES[entityLC];
        entity = entityLC;
        if (entity.charAt(0) === "#") {
            if (entity.charAt(1) === "x") {
                entity = entity.slice(2);
                num = parseInt(entity, 16);
                numStr = num.toString(16);
            } else {
                entity = entity.slice(1);
                num = parseInt(entity, 10);
                numStr = num.toString(10);
            }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
            strictFail(parser, "Invalid character entity");
            return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
        if (c === "<") {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, "Non-whitespace before first tag.");
            parser.textNode = c;
            parser.state = S.TEXT;
        }
    }
    function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) result = chunk.charAt(i);
        return result;
    }
    function write(chunk) {
        var parser = this;
        if (this.error) throw this.error;
        if (parser.closed) return error(parser, "Cannot write after close. Assign an onready handler.");
        if (chunk === null) return end(parser);
        if (typeof chunk === "object") chunk = chunk.toString();
        var i = 0;
        var c = "";
        while(true){
            c = charAt(chunk, i++);
            parser.c = c;
            if (!c) break;
            if (parser.trackPosition) {
                parser.position++;
                if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                } else parser.column++;
            }
            switch(parser.state){
                case S.BEGIN:
                    parser.state = S.BEGIN_WHITESPACE;
                    if (c === "\uFEFF") continue;
                    beginWhiteSpace(parser, c);
                    continue;
                case S.BEGIN_WHITESPACE:
                    beginWhiteSpace(parser, c);
                    continue;
                case S.TEXT:
                    if (parser.sawRoot && !parser.closedRoot) {
                        var starti = i - 1;
                        while(c && c !== "<" && c !== "&"){
                            c = charAt(chunk, i++);
                            if (c && parser.trackPosition) {
                                parser.position++;
                                if (c === "\n") {
                                    parser.line++;
                                    parser.column = 0;
                                } else parser.column++;
                            }
                        }
                        parser.textNode += chunk.substring(starti, i - 1);
                    }
                    if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    } else {
                        if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) strictFail(parser, "Text data outside of root node.");
                        if (c === "&") parser.state = S.TEXT_ENTITY;
                        else parser.textNode += c;
                    }
                    continue;
                case S.SCRIPT:
                    // only non-strict
                    if (c === "<") parser.state = S.SCRIPT_ENDING;
                    else parser.script += c;
                    continue;
                case S.SCRIPT_ENDING:
                    if (c === "/") parser.state = S.CLOSE_TAG;
                    else {
                        parser.script += "<" + c;
                        parser.state = S.SCRIPT;
                    }
                    continue;
                case S.OPEN_WAKA:
                    // either a /, ?, !, or text is coming next.
                    if (c === "!") {
                        parser.state = S.SGML_DECL;
                        parser.sgmlDecl = "";
                    } else if (isWhitespace(c)) ;
                    else if (isMatch(nameStart, c)) {
                        parser.state = S.OPEN_TAG;
                        parser.tagName = c;
                    } else if (c === "/") {
                        parser.state = S.CLOSE_TAG;
                        parser.tagName = "";
                    } else if (c === "?") {
                        parser.state = S.PROC_INST;
                        parser.procInstName = parser.procInstBody = "";
                    } else {
                        strictFail(parser, "Unencoded <");
                        // if there was some whitespace, then add that in.
                        if (parser.startTagPosition + 1 < parser.position) {
                            var pad = parser.position - parser.startTagPosition;
                            c = new Array(pad).join(" ") + c;
                        }
                        parser.textNode += "<" + c;
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.SGML_DECL:
                    if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                        emitNode(parser, "onopencdata");
                        parser.state = S.CDATA;
                        parser.sgmlDecl = "";
                        parser.cdata = "";
                    } else if (parser.sgmlDecl + c === "--") {
                        parser.state = S.COMMENT;
                        parser.comment = "";
                        parser.sgmlDecl = "";
                    } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                        parser.state = S.DOCTYPE;
                        if (parser.doctype || parser.sawRoot) strictFail(parser, "Inappropriately located doctype declaration");
                        parser.doctype = "";
                        parser.sgmlDecl = "";
                    } else if (c === ">") {
                        emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                        parser.sgmlDecl = "";
                        parser.state = S.TEXT;
                    } else if (isQuote(c)) {
                        parser.state = S.SGML_DECL_QUOTED;
                        parser.sgmlDecl += c;
                    } else parser.sgmlDecl += c;
                    continue;
                case S.SGML_DECL_QUOTED:
                    if (c === parser.q) {
                        parser.state = S.SGML_DECL;
                        parser.q = "";
                    }
                    parser.sgmlDecl += c;
                    continue;
                case S.DOCTYPE:
                    if (c === ">") {
                        parser.state = S.TEXT;
                        emitNode(parser, "ondoctype", parser.doctype);
                        parser.doctype = true // just remember that we saw it.
                        ;
                    } else {
                        parser.doctype += c;
                        if (c === "[") parser.state = S.DOCTYPE_DTD;
                        else if (isQuote(c)) {
                            parser.state = S.DOCTYPE_QUOTED;
                            parser.q = c;
                        }
                    }
                    continue;
                case S.DOCTYPE_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.q = "";
                        parser.state = S.DOCTYPE;
                    }
                    continue;
                case S.DOCTYPE_DTD:
                    parser.doctype += c;
                    if (c === "]") parser.state = S.DOCTYPE;
                    else if (isQuote(c)) {
                        parser.state = S.DOCTYPE_DTD_QUOTED;
                        parser.q = c;
                    }
                    continue;
                case S.DOCTYPE_DTD_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.q = "";
                    }
                    continue;
                case S.COMMENT:
                    if (c === "-") parser.state = S.COMMENT_ENDING;
                    else parser.comment += c;
                    continue;
                case S.COMMENT_ENDING:
                    if (c === "-") {
                        parser.state = S.COMMENT_ENDED;
                        parser.comment = textopts(parser.opt, parser.comment);
                        if (parser.comment) emitNode(parser, "oncomment", parser.comment);
                        parser.comment = "";
                    } else {
                        parser.comment += "-" + c;
                        parser.state = S.COMMENT;
                    }
                    continue;
                case S.COMMENT_ENDED:
                    if (c !== ">") {
                        strictFail(parser, "Malformed comment");
                        // allow <!-- blah -- bloo --> in non-strict mode,
                        // which is a comment of " blah -- bloo "
                        parser.comment += "--" + c;
                        parser.state = S.COMMENT;
                    } else parser.state = S.TEXT;
                    continue;
                case S.CDATA:
                    if (c === "]") parser.state = S.CDATA_ENDING;
                    else parser.cdata += c;
                    continue;
                case S.CDATA_ENDING:
                    if (c === "]") parser.state = S.CDATA_ENDING_2;
                    else {
                        parser.cdata += "]" + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.CDATA_ENDING_2:
                    if (c === ">") {
                        if (parser.cdata) emitNode(parser, "oncdata", parser.cdata);
                        emitNode(parser, "onclosecdata");
                        parser.cdata = "";
                        parser.state = S.TEXT;
                    } else if (c === "]") parser.cdata += "]";
                    else {
                        parser.cdata += "]]" + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.PROC_INST:
                    if (c === "?") parser.state = S.PROC_INST_ENDING;
                    else if (isWhitespace(c)) parser.state = S.PROC_INST_BODY;
                    else parser.procInstName += c;
                    continue;
                case S.PROC_INST_BODY:
                    if (!parser.procInstBody && isWhitespace(c)) continue;
                    else if (c === "?") parser.state = S.PROC_INST_ENDING;
                    else parser.procInstBody += c;
                    continue;
                case S.PROC_INST_ENDING:
                    if (c === ">") {
                        emitNode(parser, "onprocessinginstruction", {
                            name: parser.procInstName,
                            body: parser.procInstBody
                        });
                        parser.procInstName = parser.procInstBody = "";
                        parser.state = S.TEXT;
                    } else {
                        parser.procInstBody += "?" + c;
                        parser.state = S.PROC_INST_BODY;
                    }
                    continue;
                case S.OPEN_TAG:
                    if (isMatch(nameBody, c)) parser.tagName += c;
                    else {
                        newTag(parser);
                        if (c === ">") openTag(parser);
                        else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
                        else {
                            if (!isWhitespace(c)) strictFail(parser, "Invalid character in tag name");
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.OPEN_TAG_SLASH:
                    if (c === ">") {
                        openTag(parser, true);
                        closeTag(parser);
                    } else {
                        strictFail(parser, "Forward-slash in opening tag not followed by >");
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.ATTRIB:
                    // haven't read the attribute name yet.
                    if (isWhitespace(c)) continue;
                    else if (c === ">") openTag(parser);
                    else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
                    else if (isMatch(nameStart, c)) {
                        parser.attribName = c;
                        parser.attribValue = "";
                        parser.state = S.ATTRIB_NAME;
                    } else strictFail(parser, "Invalid attribute name");
                    continue;
                case S.ATTRIB_NAME:
                    if (c === "=") parser.state = S.ATTRIB_VALUE;
                    else if (c === ">") {
                        strictFail(parser, "Attribute without value");
                        parser.attribValue = parser.attribName;
                        attrib(parser);
                        openTag(parser);
                    } else if (isWhitespace(c)) parser.state = S.ATTRIB_NAME_SAW_WHITE;
                    else if (isMatch(nameBody, c)) parser.attribName += c;
                    else strictFail(parser, "Invalid attribute name");
                    continue;
                case S.ATTRIB_NAME_SAW_WHITE:
                    if (c === "=") parser.state = S.ATTRIB_VALUE;
                    else if (isWhitespace(c)) continue;
                    else {
                        strictFail(parser, "Attribute without value");
                        parser.tag.attributes[parser.attribName] = "";
                        parser.attribValue = "";
                        emitNode(parser, "onattribute", {
                            name: parser.attribName,
                            value: ""
                        });
                        parser.attribName = "";
                        if (c === ">") openTag(parser);
                        else if (isMatch(nameStart, c)) {
                            parser.attribName = c;
                            parser.state = S.ATTRIB_NAME;
                        } else {
                            strictFail(parser, "Invalid attribute name");
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.ATTRIB_VALUE:
                    if (isWhitespace(c)) continue;
                    else if (isQuote(c)) {
                        parser.q = c;
                        parser.state = S.ATTRIB_VALUE_QUOTED;
                    } else {
                        strictFail(parser, "Unquoted attribute value");
                        parser.state = S.ATTRIB_VALUE_UNQUOTED;
                        parser.attribValue = c;
                    }
                    continue;
                case S.ATTRIB_VALUE_QUOTED:
                    if (c !== parser.q) {
                        if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                        else parser.attribValue += c;
                        continue;
                    }
                    attrib(parser);
                    parser.q = "";
                    parser.state = S.ATTRIB_VALUE_CLOSED;
                    continue;
                case S.ATTRIB_VALUE_CLOSED:
                    if (isWhitespace(c)) parser.state = S.ATTRIB;
                    else if (c === ">") openTag(parser);
                    else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
                    else if (isMatch(nameStart, c)) {
                        strictFail(parser, "No whitespace between attributes");
                        parser.attribName = c;
                        parser.attribValue = "";
                        parser.state = S.ATTRIB_NAME;
                    } else strictFail(parser, "Invalid attribute name");
                    continue;
                case S.ATTRIB_VALUE_UNQUOTED:
                    if (!isAttribEnd(c)) {
                        if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U;
                        else parser.attribValue += c;
                        continue;
                    }
                    attrib(parser);
                    if (c === ">") openTag(parser);
                    else parser.state = S.ATTRIB;
                    continue;
                case S.CLOSE_TAG:
                    if (!parser.tagName) {
                        if (isWhitespace(c)) continue;
                        else if (notMatch(nameStart, c)) {
                            if (parser.script) {
                                parser.script += "</" + c;
                                parser.state = S.SCRIPT;
                            } else strictFail(parser, "Invalid tagname in closing tag.");
                        } else parser.tagName = c;
                    } else if (c === ">") closeTag(parser);
                    else if (isMatch(nameBody, c)) parser.tagName += c;
                    else if (parser.script) {
                        parser.script += "</" + parser.tagName;
                        parser.tagName = "";
                        parser.state = S.SCRIPT;
                    } else {
                        if (!isWhitespace(c)) strictFail(parser, "Invalid tagname in closing tag");
                        parser.state = S.CLOSE_TAG_SAW_WHITE;
                    }
                    continue;
                case S.CLOSE_TAG_SAW_WHITE:
                    if (isWhitespace(c)) continue;
                    if (c === ">") closeTag(parser);
                    else strictFail(parser, "Invalid characters in closing tag");
                    continue;
                case S.TEXT_ENTITY:
                case S.ATTRIB_VALUE_ENTITY_Q:
                case S.ATTRIB_VALUE_ENTITY_U:
                    var returnState;
                    var buffer;
                    switch(parser.state){
                        case S.TEXT_ENTITY:
                            returnState = S.TEXT;
                            buffer = "textNode";
                            break;
                        case S.ATTRIB_VALUE_ENTITY_Q:
                            returnState = S.ATTRIB_VALUE_QUOTED;
                            buffer = "attribValue";
                            break;
                        case S.ATTRIB_VALUE_ENTITY_U:
                            returnState = S.ATTRIB_VALUE_UNQUOTED;
                            buffer = "attribValue";
                            break;
                    }
                    if (c === ";") {
                        if (parser.opt.unparsedEntities) {
                            var parsedEntity = parseEntity(parser);
                            parser.entity = "";
                            parser.state = returnState;
                            parser.write(parsedEntity);
                        } else {
                            parser[buffer] += parseEntity(parser);
                            parser.entity = "";
                            parser.state = returnState;
                        }
                    } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) parser.entity += c;
                    else {
                        strictFail(parser, "Invalid character in entity name");
                        parser[buffer] += "&" + parser.entity + c;
                        parser.entity = "";
                        parser.state = returnState;
                    }
                    continue;
                default:
                    throw new Error(parser, "Unknown state: " + parser.state);
            }
        } // while
        if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser);
        return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ /* istanbul ignore next */ if (!String.fromCodePoint) (function() {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function() {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) return "";
            var result = "";
            while(++index < length){
                var codePoint = Number(arguments[index]);
                if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                codePoint < 0 || // not a valid Unicode code point
                codePoint > 0x10FFFF || // not a valid Unicode code point
                floor(codePoint) !== codePoint // not an integer
                ) throw RangeError("Invalid code point: " + codePoint);
                if (codePoint <= 0xFFFF) codeUnits.push(codePoint);
                else {
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    codePoint -= 0x10000;
                    highSurrogate = (codePoint >> 10) + 0xD800;
                    lowSurrogate = codePoint % 0x400 + 0xDC00;
                    codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                    result += stringFromCharCode.apply(null, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        /* istanbul ignore next */ if (Object.defineProperty) Object.defineProperty(String, "fromCodePoint", {
            value: fromCodePoint,
            configurable: true,
            writable: true
        });
        else String.fromCodePoint = fromCodePoint;
    })();
})(exports);

},{"e8399c94bace2e95":"fCgem","55cad32d9fc3850b":"j77ns","f36f08810ace8da5":"3vmkr"}],"j77ns":[function(require,module,exports) {
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
module.exports = Stream;
var EE = require("96b62835346f84f0").EventEmitter;
var inherits = require("4a6ee9586f51c38d");
inherits(Stream, EE);
Stream.Readable = require("e6206e1f4d20abc7");
Stream.Writable = require("a3f1405f37e1dfb1");
Stream.Duplex = require("6691a72c5fc222fd");
Stream.Transform = require("43a905ce7ec6ac9e");
Stream.PassThrough = require("dd715550d7783885");
Stream.finished = require("d90a3520974ec96e");
Stream.pipeline = require("eb2779cfd287c5c9");
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;
// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function Stream() {
    EE.call(this);
}
Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
        if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) source.pause();
        }
    }
    source.on("data", ondata);
    function ondrain() {
        if (source.readable && source.resume) source.resume();
    }
    dest.on("drain", ondrain);
    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend);
        source.on("close", onclose);
    }
    var didOnEnd = false;
    function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
        dest.end();
    }
    function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
        if (typeof dest.destroy === "function") dest.destroy();
    }
    // don't leave dangling pipes when there are errors.
    function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, "error") === 0) throw er; // Unhandled stream error in pipe.
    }
    source.on("error", onerror);
    dest.on("error", onerror);
    // remove all the event listeners that were added.
    function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);
    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
};

},{"96b62835346f84f0":"1VQLm","4a6ee9586f51c38d":"bRL3M","e6206e1f4d20abc7":"6NdbQ","a3f1405f37e1dfb1":"gTkcq","6691a72c5fc222fd":"kKNA3","43a905ce7ec6ac9e":"ba8Mr","dd715550d7783885":"2xP98","d90a3520974ec96e":"aOMy2","eb2779cfd287c5c9":"fyp4t"}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"6NdbQ":[function(require,module,exports) {
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
var global = arguments[3];
var process = require("896ff8d56553f7a");
"use strict";
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require("16782d660ac22e0c").EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("9a34f23fa53f83f7");
/*</replacement>*/ var Buffer = require("fb95ecaa88342eae").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require("a4a723b7297c7152");
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
else debug = function debug() {};
/*</replacement>*/ var BufferList = require("7a14cc1689b8c63e");
var destroyImpl = require("efa8155386cc4283");
var _require = require("994c984d08c7bbf2"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("8de60461b822641b").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require("19affa8ce41f090d")(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require("f1c95f846e94e4eb");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require("6392acd10886f115").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require("f1c95f846e94e4eb");
    if (!(this instanceof Readable)) return new Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require("6392acd10886f115").StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = "";
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount("readable") > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self1) {
    var state = self1._readableState;
    state.readableListening = self1.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;
    else if (self1.listenerCount("data") > 0) self1.resume();
}
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === "function") Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require("830c56f840811f05");
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === "function") Readable.from = function(iterable, opts) {
    if (from === undefined) from = require("7451b8c4bf72370");
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"896ff8d56553f7a":"d5jf4","16782d660ac22e0c":"1VQLm","9a34f23fa53f83f7":"60BLS","fb95ecaa88342eae":"fCgem","a4a723b7297c7152":"jhUEF","7a14cc1689b8c63e":"hf3P2","efa8155386cc4283":"YI8DF","994c984d08c7bbf2":"61BRN","8de60461b822641b":"aJlwj","19affa8ce41f090d":"bRL3M","f1c95f846e94e4eb":"kKNA3","6392acd10886f115":"3vmkr","830c56f840811f05":"k019Y","7451b8c4bf72370":"ak0YH"}],"60BLS":[function(require,module,exports) {
module.exports = require("ed88fc9aa73f911").EventEmitter;

},{"ed88fc9aa73f911":"1VQLm"}],"hf3P2":[function(require,module,exports) {
"use strict";
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
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
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
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
var _require = require("59f5d0111b7fa075"), Buffer = _require.Buffer;
var _require2 = require("eef6a677577349b8"), inspect = _require2.inspect;
var custom = inspect && inspect.custom || "inspect";
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return "";
                var p = this.head;
                var ret = "" + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            }
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            }
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();

},{"59f5d0111b7fa075":"fCgem","eef6a677577349b8":"jhUEF"}],"YI8DF":[function(require,module,exports) {
var process = require("4284522496af5dfb");
"use strict";
// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit("close");
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"4284522496af5dfb":"d5jf4"}],"61BRN":[function(require,module,exports) {
"use strict";
var ERR_INVALID_OPT_VALUE = require("4e508d569e2117ef").codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"4e508d569e2117ef":"aJlwj"}],"aJlwj":[function(require,module,exports) {
"use strict";
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.codes = codes;

},{}],"kKNA3":[function(require,module,exports) {
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
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var process = require("2ab1115635c50a9f");
"use strict";
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require("68a7582259cd5865");
var Writable = require("93d042f8bb80078e");
require("aa7b11ba5bf4defc")(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys = objectKeys(Writable.prototype);
for(var v = 0; v < keys.length; v++){
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"2ab1115635c50a9f":"d5jf4","68a7582259cd5865":"6NdbQ","93d042f8bb80078e":"gTkcq","aa7b11ba5bf4defc":"bRL3M"}],"gTkcq":[function(require,module,exports) {
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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var global = arguments[3];
var process = require("f05a2a5a09d4d8b0");
"use strict";
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require("dc51171b07b54af1")
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("44a3cc22ec64fcd3");
/*</replacement>*/ var Buffer = require("de8f7fb7ccda8086").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require("acf48fb5d9dc6204");
var _require = require("9d146cd974da0f53"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("3c574b8881abcf86").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require("10dad555ffe77dde")(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require("c5e7171d6f58d3c0");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require("c5e7171d6f58d3c0");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== "string" && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer"
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"f05a2a5a09d4d8b0":"d5jf4","dc51171b07b54af1":"j92NQ","44a3cc22ec64fcd3":"60BLS","de8f7fb7ccda8086":"fCgem","acf48fb5d9dc6204":"YI8DF","9d146cd974da0f53":"61BRN","3c574b8881abcf86":"aJlwj","10dad555ffe77dde":"bRL3M","c5e7171d6f58d3c0":"kKNA3"}],"j92NQ":[function(require,module,exports) {
/**
 * Module exports.
 */ var global = arguments[3];
module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config("noDeprecation")) return fn;
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config("throwDeprecation")) throw new Error(msg);
            else if (config("traceDeprecation")) console.trace(msg);
            else console.warn(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!global.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === "true";
}

},{}],"k019Y":[function(require,module,exports) {
var process = require("96b869862a96261a");
"use strict";
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
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
var finished = require("745a3cd8f6469ed5");
var kLastResolve = Symbol("lastResolve");
var kLastReject = Symbol("lastReject");
var kError = Symbol("error");
var kEnded = Symbol("ended");
var kLastPromise = Symbol("lastPromise");
var kHandlePromise = Symbol("handlePromise");
var kStream = Symbol("stream");
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"96b869862a96261a":"d5jf4","745a3cd8f6469ed5":"aOMy2"}],"aOMy2":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var ERR_STREAM_PREMATURE_CLOSE = require("d35458f585bdd360").codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function eos(stream, opts, callback) {
    if (typeof opts === "function") return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
module.exports = eos;

},{"d35458f585bdd360":"aJlwj"}],"ak0YH":[function(require,module,exports) {
module.exports = function() {
    throw new Error("Readable.from is not available in the browser");
};

},{}],"ba8Mr":[function(require,module,exports) {
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
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
"use strict";
module.exports = Transform;
var _require$codes = require("baab47252aa06434").codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require("db11ebf938e536ed");
require("82049677fa603d40")(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);
    // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"baab47252aa06434":"aJlwj","db11ebf938e536ed":"kKNA3","82049677fa603d40":"bRL3M"}],"2xP98":[function(require,module,exports) {
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
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
"use strict";
module.exports = PassThrough;
var Transform = require("7ab21291895ec3d2");
require("f24ec1883eef5e9b")(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"7ab21291895ec3d2":"ba8Mr","f24ec1883eef5e9b":"bRL3M"}],"fyp4t":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require("6ba21bd580ac7d57").codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on("close", function() {
        closed = true;
    });
    if (eos === undefined) eos = require("dd7fd89dd81b8674");
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== "function") return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"6ba21bd580ac7d57":"aJlwj","dd7fd89dd81b8674":"aOMy2"}],"9OO6G":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    exports.stripBOM = function(str) {
        if (str[0] === "\uFEFF") return str.substring(1);
        else return str;
    };
}).call(this);

},{}],"ifmcs":[function(require,module,exports) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var prefixMatch;
    prefixMatch = new RegExp(/(?!xmlns)^.*:/);
    exports.normalize = function(str) {
        return str.toLowerCase();
    };
    exports.firstCharLowerCase = function(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    exports.stripPrefix = function(str) {
        return str.replace(prefixMatch, "");
    };
    exports.parseNumbers = function(str) {
        if (!isNaN(str)) str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
        return str;
    };
    exports.parseBooleans = function(str) {
        if (/^(?:true|false)$/i.test(str)) str = str.toLowerCase() === "true";
        return str;
    };
}).call(this);

},{}],"l8XYx":[function(require,module,exports) {
var global = arguments[3];
var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;
// DOM APIs, for completeness
exports.setTimeout = function() {
    return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
    return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function(timeout) {
    if (timeout) timeout.close();
};
function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
    this._clearFn.call(scope, this._id);
};
// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
};
exports.unenroll = function(item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
};
exports._unrefActive = exports.active = function(item) {
    clearTimeout(item._idleTimeoutId);
    var msecs = item._idleTimeout;
    if (msecs >= 0) item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout) item._onTimeout();
    }, msecs);
};
// setimmediate attaches itself to the global object
require("55080a345f0b7464");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;

},{"55080a345f0b7464":"g4k8b"}],"g4k8b":[function(require,module,exports) {
var process = require("96b87729426a727d");
var global = arguments[3];
(function(global, undefined) {
    "use strict";
    if (global.setImmediate) return;
    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;
    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") callback = new Function("" + callback);
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i + 1];
        // Store and register the task
        var task = {
            callback: callback,
            args: args
        };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }
    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }
    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch(args.length){
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }
    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // "too much recursion" error.
        setTimeout(runIfPresent, 0, handle);
        else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally{
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }
    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function() {
                runIfPresent(handle);
            });
        };
    }
    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }
    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) runIfPresent(+event.data.slice(messagePrefix.length));
        };
        if (global.addEventListener) global.addEventListener("message", onGlobalMessage, false);
        else global.attachEvent("onmessage", onGlobalMessage);
        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }
    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };
        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }
    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function() {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }
    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }
    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    // Don't get fooled by e.g. browserify environments.
    if (({}).toString.call(global.process) === "[object process]") // For Node.js before 0.9
    installNextTickImplementation();
    else if (canUsePostMessage()) // For non-IE10 modern browsers
    installPostMessageImplementation();
    else if (global.MessageChannel) // For web workers, where supported
    installMessageChannelImplementation();
    else if (doc && "onreadystatechange" in doc.createElement("script")) // For IE 6–8
    installReadyStateChangeImplementation();
    else // For older browsers
    installSetTimeoutImplementation();
    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

},{"96b87729426a727d":"d5jf4"}],"c4jUL":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("v-card-title", {
                        staticClass: "headline"
                    }, [
                        _vm._v("Add Device ")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                        _c("v-text-field", {
                            attrs: {
                                "placeholder": "Device Name"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        }),
                        _vm._v(" "),
                        _c("md-field", [
                            _c("label", [
                                _vm._v("Import Main.xml in GFX folder")
                            ]),
                            _vm._v(" "),
                            _c("md-file", {
                                attrs: {
                                    "multiple": ""
                                },
                                on: {
                                    "change": _vm.getFile
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"faXG8":[function() {},{}],"8CFGK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLrB0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2dd9e1a0f786e21e");
    if (script.__esModule) script = script.default;
    script.render = require("4c8fb8d05c9c9f57").render;
    script.staticRenderFns = require("4c8fb8d05c9c9f57").staticRenderFns;
    script._scopeId = "data-v-e2d137";
    script.__cssModules = require("234bec5758f896dd").default;
    require("2011a440eee41cc7").default(script);
    script.__scopeId = "data-v-e2d137";
    script.__file = "addDeviceProfiles.vue";
};
initialize();
exports.default = script;

},{"2dd9e1a0f786e21e":"1lLph","4c8fb8d05c9c9f57":"eQJ85","234bec5758f896dd":"hcl9p","2011a440eee41cc7":"1SYaF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1lLph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var scriptExports = {
    name: "DialogAddDeviceProfiles",
    data: function() {
        return {
            name: "",
            description: "",
            dialog: false
        };
    },
    methods: {
        initialize: function(option) {},
        onNameChange: function(value) {
            this.name = value;
        },
        onSave: function() {
            this.addDeviceProfiles(this.name).then(()=>{
                this.dialog = false;
            });
        },
        addDeviceProfiles: function(name) {
            return new Promise((resolve)=>{
                (0, _deviceHelper.DeviceHelper).createDeviceProfile(name).then(resolve);
            });
        //  const graph = SpinalGraphService.getGraph();
        //  const context = SpinalGraphService.getContextWithType("deviceProfileContext")[0];
        //  const node = new SpinalNode(name, "deviceProfileNode");
        //  await graph.addChildInContext(context.info.id.get(), node, context.info.id.get(), SPINAL_RELATION_LST_PTR_TYPE);
        },
        onCancel: function() {
            this.dialog = false;
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog (closeResult) {}
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQJ85":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "290"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("v-card-title", {
                        staticClass: "headline"
                    }, [
                        _vm._v("Add Device Profile\n                ")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                        _c("v-text-field", {
                            attrs: {
                                "placeholder": "Name"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler\n                    ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider\n                    ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hcl9p":[function() {},{}],"1SYaF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cc9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5b4b078fcac16043");
    if (script.__esModule) script = script.default;
    script.render = require("9bf3bc0da4475b32").render;
    script.staticRenderFns = require("9bf3bc0da4475b32").staticRenderFns;
    script._scopeId = "data-v-787e84";
    script.__cssModules = require("f268865a932ec739").default;
    require("1bc64a3f4626a812").default(script);
    script.__scopeId = "data-v-787e84";
    script.__file = "itemList.vue";
};
initialize();
exports.default = script;

},{"5b4b078fcac16043":"73oPv","9bf3bc0da4475b32":"hlodq","f268865a932ec739":"eyJzv","1bc64a3f4626a812":"aS6vr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73oPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
var _dns = require("dns");
const { spinalPanelManagerService } = require("c634301d3a218b3b");
const xml2js = require("8f80c5bb1c24c1e5");
const fs = require("c41c6681cd16eff1");
var scriptExports = {
    name: "DialogItemList",
    data: ()=>({
            users: [],
            parentId: null,
            parentNode: null,
            selected: {},
            dialog: null,
            dialog2: false,
            other: null,
            dialog3: false,
            dialogMonitoring: false,
            dialogImportBogFile: false,
            monitoringItem: [],
            value: [],
            invalidFieldName: true,
            invalidFieldType: true,
            item_added: {
                name: null,
                maitre: false,
                type: null,
                monitoring: false,
                namingConvention: ""
            },
            outputsMonitoring: [],
            single: null,
            tempBlob: null,
            parsedBOGTab: null
        }),
    computed: {
        requiredClass1 () {
            return {
                "md-invalid": !this.invalidFieldName
            };
        },
        requiredClass2 () {
            return {
                "md-invalid": !this.invalidFieldType
            };
        }
    },
    methods: {
        initialize: async function(option) {
            this.parentId = await option.selectedNode.id;
            console.log(option.selectedNode.id);
            this.parentNode = await option.selectedNode;
            //changement ici
            this.users = await (0, _deviceHelper.DeviceHelper).listItemInTab(this.parentNode);
        },
        onMouse: function(item) {
            if (item != null) this.selected = item;
        },
        onSelect: function(item) {
            if (item != null) this.selected = item;
        },
        onAdd: async function() {
            this.dialog = false;
            this.dialog2 = true;
            this.item_added.name = null;
            this.item_added.type = null;
            this.item_added.maitre = false;
            this.item_added.namingConvention = "";
        },
        onDetails: async function(item) {
            this.onSelect(item);
            // console.log("clicked", item);
            var paramSent = new Object();
            const graphOfSelectedNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getGraph(this.selected.nodeId);
            var tempNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.selected.nodeId);
            tempNode.id = tempNode.info.id;
            paramSent.graph = graphOfSelectedNode;
            paramSent.selectedNode = tempNode;
            console.log(paramSent);
            spinalPanelManagerService.openPanel("DialogItemDetail", paramSent);
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        onCancel: function() {
            this.dialog = false;
        },
        onCheckField: async function() {
            if (this.item_added.name == null || this.item_added.name == "" || this.item_added.name == undefined) this.invalidFieldName = false;
            else this.invalidFieldName = true;
            if (this.item_added.type == null || this.item_added.type == "" || this.item_added.type == undefined) this.invalidFieldType = false;
            else this.invalidFieldType = true;
            return this.invalidFieldName && this.invalidFieldType;
        },
        onCheckUsers: async function() {
            for(var elt in this.users){
                if (this.item_added.name == this.users[elt].name && this.item_added.type == this.users[elt].itemType && this.item_added.maitre == this.users[elt].maitre) return true;
            }
            return false;
        },
        clearItemList: async function() {
            await (0, _deviceHelper.DeviceHelper).clearItems(this.parentId);
            await (0, _deviceHelper.DeviceHelper).clearLinks(this.parentId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            this.users = [];
        },
        importBOGFile: async function() {
            console.log("import BOG file function");
            await (0, _deviceHelper.DeviceHelper).clearLinks(this.parentId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            this.single = null;
            this.dialog = false;
            this.dialogImportBogFile = true;
        },
        onCancelDialog: function() {
            this.dialog2 = false;
            this.dialog = true;
        },
        onSaveDialog: async function() {
            if (await this.onCheckField()) {
                if (await this.onCheckUsers()) this.dialog3 = true;
                else {
                    this.users.push(await (0, _deviceHelper.DeviceHelper).generateItem(this.parentId, this.item_added.name, this.item_added.maitre, this.item_added.type, this.item_added.namingConvention, "hasItem"));
                    this.dialog2 = false;
                    this.dialog = true;
                }
            } else console.log("fill the required fields please");
        },
        onSaveDialogImport: async function() {
            var realParentNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(this.parentId);
            let bogTab;
            if (realParentNode.hasRelation("hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE))) {
                const childOfTab = await realParentNode.getChildren("hasTempTab");
                bogTab = childOfTab[0].info.tab;
                await (0, _deviceHelper.DeviceHelper).clearItems(this.parentId);
                //changement ici
                this.users = await (0, _deviceHelper.DeviceHelper).generateItemFromBOG(this.parentId, bogTab);
                await (0, _deviceHelper.DeviceHelper).clearLinks(this.parentId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                this.dialogImportBogFile = false;
                this.dialog = true;
            } else {
                this.dialogImportBogFile = false;
                this.dialog = true;
            }
        },
        onCancelDialogImport: async function() {
            await (0, _deviceHelper.DeviceHelper).clearLinks(this.parentId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            this.dialogImportBogFile = false;
            this.dialog = true;
        },
        getFile: async function(event) {
            return new Promise((resolve, reject)=>{
                this.single = event.target.files;
                const reader = new FileReader();
                var testId = this.parentId;
                reader.onload = async function(e) {
                    this.parsedBOGTab = await (0, _fileExplorer.FileExplorer).parseBOGFile(e.target.result);
                    (0, _deviceHelper.DeviceHelper).initialize().then(async (result)=>{
                        const generatedNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                            tab: this.parsedBOGTab,
                            name: "tempTab",
                            type: "tempTab"
                        }, undefined);
                        var generatedNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(testId, generatedNodeId, (0, _deviceHelper.DeviceHelper).contextId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                    });
                };
                reader.readAsText(event.target.files[0]);
            });
        },
        exportJSON: async function() {
            await (0, _deviceHelper.DeviceHelper).clearLinks(this.parentId, "hasTempTab", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            await (0, _deviceHelper.DeviceHelper).exportJSONItemList(this.parentId);
        },
        onSave: async function() {
            let deviceNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(this.parentId, "hasItemList"))[0];
            let monitoringNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceNode.id.get(), "hasMonitoringNode"))[0];
            let intervalTimeNode1 = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(monitoringNode.id.get(), "hasIntervalTimeNode"))[0];
            let tabToSend = [];
            for(let elt in this.users)if (this.users[elt].monitoring == true) tabToSend.push(this.users[elt].nodeId);
            let tabIds = await (0, _deviceHelper.DeviceHelper).getListOutputByItem(tabToSend);
            for(let elt2 in tabIds){
                let outputsId = tabIds[elt2].outputs;
                await (0, _deviceHelper.DeviceHelper).generateMonitoringLinks(intervalTimeNode1.id.get(), outputsId);
            }
            this.dialog = false;
        },
        onSelect: function(item) {
            if (item != null) this.selected = item;
        },
        onMonitoring: async function(item) {
            this.onSelect(item);
            console.log(item);
            let paramSent = new Object();
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(item.nodeId);
            paramSent.selectedNode = realNode;
            paramSent.selectedNode.id = realNode.info.id;
            paramSent.ACCESS_FROM = "Item_List_Panel";
            spinalPanelManagerService.openPanel("DialogMonitoringDetails", paramSent);
        },
        onCancelDialogMonitoring: function() {
            this.dialog = true;
            this.dialogMonitoring = false;
        },
        onSaveDialogMonitoring: function() {
            this.dialog = true;
            this.dialogMonitoring = false;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","../constants":"g3608","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","dns":"jhUEF","c634301d3a218b3b":"7Uw4d","8f80c5bb1c24c1e5":"7fkbn","c41c6681cd16eff1":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlodq":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "1200"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("div", [
                        _c("md-table", {
                            attrs: {
                                "md-sort": "name",
                                "md-sort-order": "asc",
                                "md-card": "",
                                "md-fixed-header": ""
                            },
                            on: {
                                "md-selected": _vm.onSelect
                            },
                            scopedSlots: _vm._u([
                                {
                                    key: "md-table-row",
                                    fn: function(ref) {
                                        var item = ref.item;
                                        return _c("md-table-row", {
                                            attrs: {
                                                "md-selectable": "single"
                                            }
                                        }, [
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Item name",
                                                    "md-sort-by": "Item name"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.name))
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Maitre",
                                                    "md-sort-by": "Maitre"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.maitre))
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Item Type",
                                                    "md-sort-by": "Item Type"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.itemType))
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Monitoring"
                                                }
                                            }, [
                                                _c("md-button", {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onMonitoring(item);
                                                        }
                                                    }
                                                }, [
                                                    _c("md-icon", [
                                                        _vm._v("menu")
                                                    ])
                                                ], 1)
                                            ], 1),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "BIM Naming Convention",
                                                    "md-edit": "true",
                                                    "md-sort-by": "BIM Naming Convention"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.namingConvention))
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Details"
                                                }
                                            }, [
                                                _c("md-button", {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onDetails(item);
                                                        }
                                                    }
                                                }, [
                                                    _c("md-icon", [
                                                        _vm._v("arrow_right_alt")
                                                    ])
                                                ], 1)
                                            ], 1)
                                        ], 1);
                                    }
                                }
                            ]),
                            model: {
                                value: _vm.users,
                                callback: function($$v) {
                                    _vm.users = $$v;
                                },
                                expression: "users"
                            }
                        }, [
                            _c("md-table-toolbar", {
                                attrs: {
                                    "max-width": "1200"
                                }
                            }, [
                                _c("h1", {
                                    staticClass: "md-title"
                                }, [
                                    _vm._v("Item List")
                                ]),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "buttonExport",
                                    on: {
                                        "click": _vm.exportJSON
                                    }
                                }, [
                                    _vm._v("Export JSON")
                                ]),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "buttonImportBOG",
                                    on: {
                                        "click": _vm.importBOGFile
                                    }
                                }, [
                                    _vm._v("Import BOG file")
                                ]),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "md-icon-button md-raised md-accent",
                                    on: {
                                        "click": _vm.clearItemList
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("delete_forever")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler")
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("md-button", {
                            staticClass: "md-icon-button md-dense md-raised md-primary",
                            attrs: {
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onAdd
                            }
                        }, [
                            _c("md-icon", [
                                _vm._v("add")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Save")
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("md-dialog", {
                        staticClass: "test",
                        attrs: {
                            "md-active": _vm.dialog2
                        },
                        on: {
                            "update:mdActive": function($event) {
                                _vm.dialog2 = $event;
                            },
                            "update:md-active": function($event) {
                                _vm.dialog2 = $event;
                            }
                        }
                    }, [
                        _c("md-dialog-title", [
                            _vm._v("Add Item")
                        ]),
                        _vm._v(" "),
                        _c("md-content", [
                            _vm._v(" Fill in this form to add an Item")
                        ]),
                        _vm._v(" "),
                        _c("md-field", {
                            class: _vm.requiredClass1
                        }, [
                            _c("label", [
                                _vm._v("Item Name...")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                attrs: {
                                    "required": ""
                                },
                                model: {
                                    value: _vm.item_added.name,
                                    callback: function($$v) {
                                        _vm.$set(_vm.item_added, "name", $$v);
                                    },
                                    expression: "item_added.name"
                                }
                            }),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: L_1")
                            ]),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-error"
                            }, [
                                _vm._v(" Required ")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("md-field", {
                            class: _vm.requiredClass2
                        }, [
                            _c("label", [
                                _vm._v("Item Type...")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                attrs: {
                                    "required": ""
                                },
                                model: {
                                    value: _vm.item_added.type,
                                    callback: function($$v) {
                                        _vm.$set(_vm.item_added, "type", $$v);
                                    },
                                    expression: "item_added.type"
                                }
                            }),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: Lamp")
                            ]),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-error"
                            }, [
                                _vm._v(" Required ")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("md-checkbox", {
                            model: {
                                value: _vm.item_added.maitre,
                                callback: function($$v) {
                                    _vm.$set(_vm.item_added, "maitre", $$v);
                                },
                                expression: "item_added.maitre"
                            }
                        }, [
                            _vm._v("Maitre")
                        ]),
                        _vm._v(" "),
                        _c("md-field", [
                            _c("label", [
                                _vm._v("BIM Naming Convention...")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.item_added.namingConvention,
                                    callback: function($$v) {
                                        _vm.$set(_vm.item_added, "namingConvention", $$v);
                                    },
                                    expression: "item_added.namingConvention"
                                }
                            }),
                            _vm._v(" "),
                            _c("span", {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: L_1")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c("v-card-actions", [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("v-btn", {
                                attrs: {
                                    "color": "red darken-1",
                                    "flat": ""
                                },
                                on: {
                                    "click": _vm.onCancelDialog
                                }
                            }, [
                                _vm._v("Annuler ")
                            ]),
                            _vm._v(" "),
                            _c("v-btn", {
                                attrs: {
                                    "color": "green darken-1",
                                    "flat": ""
                                },
                                on: {
                                    "click": _vm.onSaveDialog
                                }
                            }, [
                                _vm._v("Valider ")
                            ])
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-dialog-alert", {
                        attrs: {
                            "md-active": _vm.dialog3,
                            "md-title": "Error : invalid item !",
                            "md-content": "This item already exists in this profile."
                        },
                        on: {
                            "update:mdActive": function($event) {
                                _vm.dialog3 = $event;
                            },
                            "update:md-active": function($event) {
                                _vm.dialog3 = $event;
                            }
                        }
                    }),
                    _vm._v(" "),
                    _c("md-dialog", {
                        staticClass: "dialogImportBogFile",
                        attrs: {
                            "md-active": _vm.dialogImportBogFile
                        },
                        on: {
                            "update:mdActive": function($event) {
                                _vm.dialogImportBogFile = $event;
                            },
                            "update:md-active": function($event) {
                                _vm.dialogImportBogFile = $event;
                            }
                        }
                    }, [
                        _c("md-dialog-title", [
                            _vm._v("Import BOG File")
                        ]),
                        _vm._v(" "),
                        _c("md-content", [
                            _vm._v(" Import xml file from BOG")
                        ]),
                        _vm._v(" "),
                        _c("md-field", [
                            _c("label", [
                                _vm._v("xml file")
                            ]),
                            _vm._v(" "),
                            _c("md-file", {
                                on: {
                                    "change": _vm.getFile
                                },
                                model: {
                                    value: _vm.single,
                                    callback: function($$v) {
                                        _vm.single = $$v;
                                    },
                                    expression: "single"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("v-card-actions", [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("v-btn", {
                                attrs: {
                                    "color": "red darken-1",
                                    "flat": ""
                                },
                                on: {
                                    "click": _vm.onCancelDialogImport
                                }
                            }, [
                                _vm._v("Annuler ")
                            ]),
                            _vm._v(" "),
                            _c("v-btn", {
                                attrs: {
                                    "color": "green darken-1",
                                    "flat": ""
                                },
                                on: {
                                    "click": _vm.onSaveDialogImport
                                }
                            }, [
                                _vm._v("Valider ")
                            ])
                        ], 1)
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"eyJzv":[function() {},{}],"aS6vr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWpgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("364c8a92adea29b5");
    if (script.__esModule) script = script.default;
    script.render = require("ee7747d7af65f7a8").render;
    script.staticRenderFns = require("ee7747d7af65f7a8").staticRenderFns;
    script._scopeId = "data-v-92b614";
    script.__cssModules = require("f74438b2ff4a5f66").default;
    require("40ceb47cf7f1dd75").default(script);
    script.__scopeId = "data-v-92b614";
    script.__file = "ItemDetail.vue";
};
initialize();
exports.default = script;

},{"364c8a92adea29b5":"1yDjB","ee7747d7af65f7a8":"dd64L","f74438b2ff4a5f66":"kvJFZ","40ceb47cf7f1dd75":"hXgf6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yDjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var scriptExports = {
    name: "DialogItemDetail",
    data: ()=>({
            users: [],
            namingConvention: null,
            maitre: false,
            selected: null,
            parentId: null,
            parentNode: null,
            dialog: null,
            dialog2: false,
            value: [],
            ioTab: [],
            inputTab: [],
            selectedInputs: [
                {}
            ],
            selectedSelectedInputs: [],
            selectedSelectedOutputs: [],
            outputTab: [],
            selectedOutputs: [
                {}
            ],
            inputSearch: "",
            outputSearch: "",
            searched: [],
            saveInputTab: [],
            saveOutputTab: [],
            inputsId: null,
            outputsId: null,
            backupInput: [],
            backupOutput: []
        }),
    methods: {
        initialize: async function(option) {
            this.initializeData();
            this.parentId = await option.selectedNode.id;
            this.selected = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getNodeAsync(this.parentId)).name._data;
            // this.parentNode = await SpinalGraphService.getRealNode(option.selectedNode.id);
            if (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasInputs") != undefined) this.inputsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasInputs"))[0].id._data;
            if (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasOutputs") != undefined) this.outputsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasOutputs"))[0].id._data;
            this.ioTab = await (0, _deviceHelper.DeviceHelper).itemDetailInputOutput(option.selectedNode);
            await this.arrangeTabs();
            this.namingConvention = (await (0, _deviceHelper.DeviceHelper).itemDetailInfos(option.selectedNode)).namingConvention;
            this.maitre = (await (0, _deviceHelper.DeviceHelper).itemDetailInfos(option.selectedNode)).maitre;
        // console.log("input, output, selected Inputs, selected Outputs");
        // console.log(this.inputTab);
        // console.log(this.outputTab);
        // console.log(this.selectedInputs);
        // console.log(this.selectedOutputs);
        // console.log("end logs");
        },
        arrangeTabs: async function() {
            // inputs
            for(var elt in this.ioTab.NetworkValue)this.chooseBetweenTables(this.ioTab.NetworkValue[elt], this.inputsId, this.inputTab, this.selectedInputs, this.backupInput);
            for(var elt in this.ioTab.AnalogInput)this.chooseBetweenTables(this.ioTab.AnalogInput[elt], this.inputsId, this.inputTab, this.selectedInputs, this.backupInput);
            for(var elt in this.ioTab.BinaryInput)this.chooseBetweenTables(this.ioTab.BinaryInput[elt], this.inputsId, this.inputTab, this.selectedInputs, this.backupInput);
            for(var elt in this.ioTab.MultiStateInput)this.chooseBetweenTables(this.ioTab.MultiStateInput[elt], this.inputsId, this.inputTab, this.selectedInputs, this.backupInput);
            // outputs
            for(var elt in this.ioTab.BinaryValue)this.chooseBetweenTables(this.ioTab.BinaryValue[elt], this.outputsId, this.outputTab, this.selectedOutputs, this.backupOutput);
            for(var elt in this.ioTab.AnalogValue)this.chooseBetweenTables(this.ioTab.AnalogValue[elt], this.outputsId, this.outputTab, this.selectedOutputs, this.backupOutput);
            for(var elt in this.ioTab.MultiStateValue)this.chooseBetweenTables(this.ioTab.MultiStateValue[elt], this.outputsId, this.outputTab, this.selectedOutputs, this.backupOutput);
            for(var elt in this.ioTab.AnalogOutput)this.chooseBetweenTables(this.ioTab.AnalogOutput[elt], this.outputsId, this.outputTab, this.selectedOutputs, this.backupOutput);
            this.saveInputTab = this.inputTab;
            this.saveOutputTab = this.outputTab;
        // this.backupInput = this.inputTab;
        // this.backupOutput = this.outputTab;
        },
        chooseBetweenTables: function(elementToAdd, nodeId, entryTab, selectedTab, backup = 0) {
            var selectedIds = [];
            selectedIds = (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenIds(nodeId);
            backup.push(elementToAdd);
            if (selectedIds.filter((elt)=>elt == elementToAdd.nodeId).length == 0) entryTab.push(elementToAdd);
            else selectedTab.push(elementToAdd);
        },
        initializeData: function() {
            this.users = [];
            this.namingConvention = null;
            this.maitre = false;
            this.selected = null;
            this.parentId = null;
            this.parentNode = null;
            this.value = [];
            this.ioTab = [];
            this.inputTab = [];
            this.selectedInputs = [];
            this.selectedOutputs = [];
            this.selectedSelectedInputs = [];
            this.selectedSelectedOutputs = [];
            this.inputSearch = "";
            this.outputSearch = "";
            this.searched = [];
            this.saveInputTab = [];
            this.saveOutputTab = [];
            this.inputsId = null;
            this.outputsId = null;
            this.backupInput = [];
            this.backupOutput = [];
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        onCancel: function() {
            this.dialog = false;
        },
        onSave: async function() {
            await (0, _deviceHelper.DeviceHelper).modifyConventionAndMasterInfos(this.parentId, this.namingConvention, this.maitre);
            await (0, _deviceHelper.DeviceHelper).addSelectedInputOutput(this.parentId, this.selectedInputs, this.selectedOutputs);
            this.dialog = false;
        },
        onSelectInput: async function(items) {
            //this.inputSearch = [];
            this.passElementBetweenTables(items, this.inputTab, this.selectedInputs, this.saveInputTab, 0);
            this.inputSearchOnTable();
        },
        onSelectOutput: async function(items) {
            this.passElementBetweenTables(items, this.outputTab, this.selectedOutputs, this.saveOutputTab, 0);
        },
        onSelectinPutSelection (items) {
            this.selectedSelectedInputs = items;
        },
        onSelectOutputSelection (items) {
            this.selectedSelectedOutputs = items;
        },
        onClickInputUnlink: async function() {
            //const temp = this.selectedSelectedInputs;
            //await this.constructSaveTab(this.saveInputTab);
            const temp = this.selectedSelectedInputs;
            for(var elt in temp)this.passElementBetweenTables(temp[elt], this.selectedInputs, this.inputTab, this.saveInputTab, 1);
        },
        onClickOutputUnlink: async function() {
            const temp = this.selectedSelectedOutputs;
            for(var elt in temp)this.passElementBetweenTables(temp[elt], this.selectedOutputs, this.outputTab, this.saveOutputTab, 1);
        },
        passElementBetweenTables: function(element, tabIn, tabOut, savedTab, sens) {
            // sens = 0 : Available -> Linked (savedTab reduces)
            // sens = 1 : Linked -> Available (savedTab grows)
            // tabIn = await Array.from(new Set(tabIn));
            var index = tabIn.findIndex((elt)=>elt == element || elt.nodeId == element.nodeId);
            if (index > -1) {
                var iIndex = tabOut.findIndex((elt)=>elt == element || elt.nodeId == element.nodeId);
                if (iIndex > -1) tabIn.splice(index, 1);
                else {
                    tabOut.push(tabIn[index]);
                    tabIn.splice(index, 1);
                }
            }
            index = -1;
        // await this.constructSaveTab(this.backupInput, this.saveInputTab, this.selectedInputs);
        },
        constructSaveTab: function(backup, savedTab, tabSelected) {
            savedTab = backup;
            for(var elt in tabSelected){
                var index = savedTab.findIndex((obj)=>obj == tabSelected[elt]);
                if (index > -1) savedTab.splice(index, 1);
            }
        },
        inputSearchOnTable: function() {
            var lowerSearch = this.inputSearch.toString().toLowerCase();
            var tempTab = [];
            for(let elt in this.backupInput)if (this.backupInput[elt].title.toString().toLowerCase().includes(lowerSearch) || this.backupInput[elt].name.toString().toLowerCase().includes(lowerSearch) || this.backupInput[elt].idx.toString().toLowerCase().includes(lowerSearch)) tempTab.push(this.backupInput[elt]);
            for(let elt2 in this.selectedInputs){
                var index = tempTab.findIndex((obj)=>obj == this.selectedInputs[elt2]);
                if (index > -1) tempTab.splice(index, 1);
            }
            this.inputTab = tempTab;
        },
        onClear: async function() {
        // this.inputTab = this.saveInputTab;
        },
        outputSearchOnTable: async function() {
            var lowerSearch = this.outputSearch.toString().toLowerCase();
            var tempTab = [];
            for(let elt in this.backupOutput)if (this.backupOutput[elt].title.toString().toLowerCase().includes(lowerSearch) || this.backupOutput[elt].name.toString().toLowerCase().includes(lowerSearch) || this.backupOutput[elt].idx.toString().toLowerCase().includes(lowerSearch)) tempTab.push(this.backupOutput[elt]);
            for(let elt2 in this.selectedOutputs){
                var index = tempTab.findIndex((obj)=>obj == this.selectedOutputs[elt2]);
                if (index > -1) await tempTab.splice(index, 1);
            }
            this.outputTab = tempTab;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dd64L":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "1200"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("v-card-title", {
                        staticClass: "headline"
                    }, [
                        _vm._v(_vm._s(_vm.selected) + " Item Details")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                        staticClass: "infos"
                    }, [
                        _c("md-field", {
                            staticClass: "infos-details"
                        }, [
                            _c("label", [
                                _vm._v("BIM Naming Convention")
                            ]),
                            _vm._v(" "),
                            _c("md-input", {
                                model: {
                                    value: _vm.namingConvention,
                                    callback: function($$v) {
                                        _vm.namingConvention = $$v;
                                    },
                                    expression: "namingConvention"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("div", {
                            staticClass: "infos-details2"
                        }, [
                            _c("md-content", [
                                _vm._v(" Master  ")
                            ]),
                            _vm._v(" "),
                            _c("md-checkbox", {
                                staticClass: "checkbox",
                                model: {
                                    value: _vm.maitre,
                                    callback: function($$v) {
                                        _vm.maitre = $$v;
                                    },
                                    expression: "maitre"
                                }
                            })
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("md-tabs", [
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-input",
                                "md-label": "Input"
                            }
                        }, [
                            _c("div", {
                                staticClass: "tableaux"
                            }, [
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked BacnetValues (Input)\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickInputUnlink
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectinPutSelection
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.selectedInputs,
                                            callback: function($$v) {
                                                _vm.selectedInputs = $$v;
                                            },
                                            expression: "selectedInputs"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-field", {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            },
                                            on: {
                                                "md-clear": _vm.onClear
                                            }
                                        }, [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c("md-input", {
                                                staticClass: "search",
                                                attrs: {
                                                    "placeholder": "Search..."
                                                },
                                                on: {
                                                    "input": _vm.inputSearchOnTable
                                                },
                                                model: {
                                                    value: _vm.inputSearch,
                                                    callback: function($$v) {
                                                        _vm.inputSearch = $$v;
                                                    },
                                                    expression: "inputSearch"
                                                }
                                            })
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectInput
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.inputTab,
                                            callback: function($$v) {
                                                _vm.inputTab = $$v;
                                            },
                                            expression: "inputTab"
                                        }
                                    })
                                ], 1)
                            ])
                        ]),
                        _vm._v(" "),
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-output",
                                "md-label": "Output"
                            }
                        }, [
                            _c("div", {
                                staticClass: "tableaux"
                            }, [
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked BacnetValues (Output)\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickOutputUnlink
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectOutputSelection
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.selectedOutputs,
                                            callback: function($$v) {
                                                _vm.selectedOutputs = $$v;
                                            },
                                            expression: "selectedOutputs"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-field", {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c("md-input", {
                                                staticClass: "search",
                                                attrs: {
                                                    "placeholder": "Search..."
                                                },
                                                on: {
                                                    "input": _vm.outputSearchOnTable
                                                },
                                                model: {
                                                    value: _vm.outputSearch,
                                                    callback: function($$v) {
                                                        _vm.outputSearch = $$v;
                                                    },
                                                    expression: "outputSearch"
                                                }
                                            })
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectOutput
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.outputTab,
                                            callback: function($$v) {
                                                _vm.outputTab = $$v;
                                            },
                                            expression: "outputTab"
                                        }
                                    })
                                ], 1)
                            ])
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler\n            ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider\n            ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"kvJFZ":[function() {},{}],"hXgf6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPFwh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4f813ad6049eb260");
    if (script.__esModule) script = script.default;
    script.render = require("37df58208c28b650").render;
    script.staticRenderFns = require("37df58208c28b650").staticRenderFns;
    script._scopeId = "data-v-0ab1f4";
    script.__cssModules = require("9cd3138b72d16212").default;
    require("da62ef87d9c627cf").default(script);
    script.__scopeId = "data-v-0ab1f4";
    script.__file = "monitoringDetails.vue";
};
initialize();
exports.default = script;

},{"4f813ad6049eb260":"3Szcr","37df58208c28b650":"jbM5C","9cd3138b72d16212":"1FsT2","da62ef87d9c627cf":"y9EkJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Szcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
var _dns = require("dns");
const { spinalPanelManagerService } = require("d2df551a275423bd");
const xml2js = require("6e779d4c57305c04");
const fs = require("c52b3cd527806b36");
var scriptExports = {
    name: "DialogMonitoringDetails",
    data: ()=>({
            users: [
                {}
            ],
            savedUsers: [],
            intervalTimeList: [],
            parentId: null,
            parentNode: null,
            newIntervalTime: null,
            dialog: null,
            monitoringNodeId: null,
            selected: {},
            other: null,
            single: null
        }),
    computed: {},
    methods: {
        initialize: async function(option) {
            // 1 : access from ItemList Panel =>
            if (option.ACCESS_FROM == "Item_List_Panel") {
                console.log(option);
                this.parentId = await option.selectedNode.id;
                this.parentNode = await option.selectedNode;
                this.users = await (0, _deviceHelper.DeviceHelper).getLinkedOutputBacnetValues_FromItemId(option.selectedNode.id);
                this.savedUsers = await (0, _deviceHelper.DeviceHelper).getLinkedOutputBacnetValues_FromItemId(option.selectedNode.id);
                console.log("savedusers", this.savedUsers);
                let itemListNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(this.parentId, "hasItem"))[0];
                console.log(itemListNode);
                let deviceNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(itemListNode.id.get(), "hasItemList"))[0];
                let monitoringNode = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceNode.id.get(), "hasMonitoringNode"))[0];
                this.monitoringNodeId = monitoringNode.id.get();
                this.intervalTimeList = await (0, _deviceHelper.DeviceHelper).getIntervalTimeList(monitoringNode.id.get());
            } else if (option.ACCESS_FROM == "Button_Monitoring_Configuration") {
                console.log("ok");
                this.parentId = option.selectedNode.id;
                this.parentNode = option.selectedNode;
                this.users = await (0, _deviceHelper.DeviceHelper).getLinkedOutputBacnetValues_FromMonitoringNodeId(option.selectedNode.id);
                this.savedUsers = await (0, _deviceHelper.DeviceHelper).getLinkedOutputBacnetValues_FromMonitoringNodeId(option.selectedNode.id);
                console.log("savedusers", this.savedUsers);
                this.monitoringNodeId = option.selectedNode.id;
                this.intervalTimeList = await (0, _deviceHelper.DeviceHelper).getIntervalTimeList(option.selectedNode.id);
            }
        // this.users = await DeviceHelper.listItemInTab(this.parentNode);
        },
        opened: function(option) {
            this.users = [];
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        onCancel: function() {
            this.dialog = false;
        },
        onSave: async function() {
            console.log(this.users);
            await (0, _deviceHelper.DeviceHelper).generateMonitoringLinks(this.users, this.intervalTimeList, this.savedUsers);
            this.dialog = false;
        },
        onSelect: function(item) {
            if (item != null) this.selected = item;
        },
        onAddIntervalTime: async function() {
            for(let elt in this.intervalTimeList)if (this.intervalTimeList[elt].value == this.newIntervalTime) {
                this.newIntervalTime = null;
                return 0;
            }
            let tempTab = await (0, _deviceHelper.DeviceHelper).addIntervalTimeNode(this.monitoringNodeId, this.newIntervalTime);
            this.intervalTimeList.push(tempTab);
            this.newIntervalTime = null;
        },
        clearMonitoringConfiguration: async function() {
            console.log(this.users);
            for(let elt in this.users)// let parent = await SpinalGraphService.getParents(this.users[elt].nodeId, "hasIntervalTime");
            // if(parent.length !=0){
            //   await DeviceHelper.clearLinksOneByOne(parent[0].id.get(), this.users[elt].nodeId, "hasIntervalTime", SPINAL_RELATION_PTR_LST_TYPE);
            // }
            this.users[elt].intervalTime = null;
        },
        onDisableMonitoring: async function(item) {
            this.onSelect(item);
            item.intervalTime = null;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","../constants":"g3608","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","dns":"jhUEF","d2df551a275423bd":"7Uw4d","6e779d4c57305c04":"7fkbn","c52b3cd527806b36":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbM5C":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "1200"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("div", [
                        _c("md-table", {
                            attrs: {
                                "md-sort": "name",
                                "md-sort-order": "asc",
                                "md-card": "",
                                "md-fixed-header": ""
                            },
                            on: {
                                "md-selected": _vm.onSelect
                            },
                            scopedSlots: _vm._u([
                                {
                                    key: "md-table-row",
                                    fn: function(ref) {
                                        var item = ref.item;
                                        return _c("md-table-row", {
                                            attrs: {
                                                "md-selectable": "single"
                                            }
                                        }, [
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Generic Name",
                                                    "md-sort-by": "Generic Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.generic_name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Name",
                                                    "md-sort-by": "Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Item Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.item_name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Interval Time"
                                                }
                                            }, [
                                                _c("md-field", [
                                                    _c("md-select", {
                                                        model: {
                                                            value: item.intervalTime,
                                                            callback: function($$v) {
                                                                _vm.$set(item, "intervalTime", $$v);
                                                            },
                                                            expression: "item.intervalTime"
                                                        }
                                                    }, [
                                                        _vm._l(_vm.intervalTimeList, function(item) {
                                                            return _c("li", {
                                                                key: item.value
                                                            }, [
                                                                _c("md-option", {
                                                                    attrs: {
                                                                        "value": item.value
                                                                    }
                                                                }, [
                                                                    _vm._v(_vm._s(item.value))
                                                                ])
                                                            ], 1);
                                                        }),
                                                        _vm._v(" "),
                                                        _c("div", {
                                                            staticClass: "div-add-interval-time"
                                                        }, [
                                                            _c("md-field", [
                                                                _c("md-input", {
                                                                    attrs: {
                                                                        "placeholder": "Add Interval Time in ms"
                                                                    },
                                                                    model: {
                                                                        value: _vm.newIntervalTime,
                                                                        callback: function($$v) {
                                                                            _vm.newIntervalTime = $$v;
                                                                        },
                                                                        expression: "newIntervalTime"
                                                                    }
                                                                })
                                                            ], 1),
                                                            _vm._v(" "),
                                                            _c("md-button", {
                                                                staticClass: "md-icon-button md-dense md-raised md-primary",
                                                                attrs: {
                                                                    "flat": ""
                                                                },
                                                                on: {
                                                                    "click": _vm.onAddIntervalTime
                                                                }
                                                            }, [
                                                                _c("md-icon", [
                                                                    _vm._v("add")
                                                                ])
                                                            ], 1)
                                                        ], 1)
                                                    ], 2)
                                                ], 1)
                                            ], 1),
                                            _vm._v(" "),
                                            _c("md-table-cell", {
                                                attrs: {
                                                    "md-label": "Disable Monitoring"
                                                }
                                            }, [
                                                _c("md-button", {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onDisableMonitoring(item);
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
                                value: _vm.users,
                                callback: function($$v) {
                                    _vm.users = $$v;
                                },
                                expression: "users"
                            }
                        }, [
                            _c("md-table-toolbar", {
                                attrs: {
                                    "max-width": "1200"
                                }
                            }, [
                                _c("h1", {
                                    staticClass: "md-title"
                                }, [
                                    _vm._v("Endpoints Monitoring Configuration")
                                ]),
                                _vm._v(" "),
                                _c("md-button", {
                                    staticClass: "md-icon-button md-raised md-accent",
                                    on: {
                                        "click": _vm.clearMonitoringConfiguration
                                    }
                                }, [
                                    _c("md-icon", [
                                        _vm._v("delete_forever")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"1FsT2":[function() {},{}],"y9EkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jagd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2e15e1988329631f");
    if (script.__esModule) script = script.default;
    script.render = require("1ea9d8efdc1ba6da").render;
    script.staticRenderFns = require("1ea9d8efdc1ba6da").staticRenderFns;
    script._scopeId = "data-v-b2d8ff";
    script.__cssModules = require("7b8c4eeb3551659b").default;
    require("ffc63e92c991ad68").default(script);
    script.__scopeId = "data-v-b2d8ff";
    script.__file = "itemSupervision.vue";
};
initialize();
exports.default = script;

},{"2e15e1988329631f":"4MSkT","1ea9d8efdc1ba6da":"1GuXY","7b8c4eeb3551659b":"8YnP9","ffc63e92c991ad68":"6Sdjx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MSkT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var scriptExports = {
    name: "DialogItemSupervision",
    data: ()=>({
            users: [],
            selected: null,
            parentId: null,
            parentNode: null,
            dialog: null,
            dialog2: false,
            value: [],
            ioTab: [],
            inputTab: [],
            selectedInputs: [
                {}
            ],
            selectedSelectedInputs: [],
            selectedSelectedOutputs: [],
            outputTab: [],
            selectedOutputs: [
                {}
            ],
            inputSearch: "",
            outputSearch: "",
            saveInputTab: [],
            saveOutputTab: [],
            inputsId: null,
            outputsId: null,
            backupInput: [],
            backupOutput: [],
            supervisionId: null,
            MeasuresId: null,
            commandsId: null,
            alarmsId: null,
            savedEntries: [],
            MeasuresTab: [],
            commandsTab: [],
            alarmsTab: [],
            searched: [],
            backupTab: [],
            selectedLinkedMeasures: [],
            constMeasure: [],
            constAlarms: [],
            constCommands: []
        }),
    methods: {
        initialize: async function(option) {
            console.log(option);
            this.initializeData();
            console.log(option.selectedNode.id.get());
            console.log("test");
            let realNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.id.get());
            console.log("realnode");
            console.log(realNode);
            this.parentId = option.selectedNode.id._data;
            this.selected = option.selectedNode.name.get();
            let superv = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasSupervisionNode");
            // console.log("supervision node : ");
            console.log(superv);
            console.log(this.parentId);
            // let supervisionId = (await SpinalGraphService.getChildren(this.parentId, "hasSupervisionNode"))[0].id.get();
            let supervisionId = superv[0].id.get();
            // console.log("supervisionId " +supervisionId);
            this.supervisionId = supervisionId;
            // this.supervisionId = (await SpinalGraphService.getChildren(this.parentId, "hasSupervisionNode"))[0].id.get();
            // console.log(this.supervisionId);
            // let Measures = await SpinalGraphService.getChildren(this.supervisionId, "hasMeasures");
            // console.log(Measures);
            // récupération de la liste des inputs / outputs
            this.savedEntries = await (0, _deviceHelper.DeviceHelper).itemSupervisionInputOutput(option.selectedNode.id.get());
            // this.savedEntries = await DeviceHelper.itemSupervisionInputOutput(
            //   this.parentId
            // );
            this.users = this.savedEntries;
            // enlèvement des noeuds Measures déjà liés à cet item
            this.MeasuresId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(supervisionId, "hasMeasures"))[0].id.get();
            // enlèvement des noeuds alarms déjà liés à cet item
            this.alarmsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(supervisionId, "hasAlarms"))[0].id.get();
            // console.log(this.alarmsId);
            // enlèvement des noeuds commands déjà liés à cet item
            this.commandsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(supervisionId, "hasCommands"))[0].id.get();
            // console.log(this.commandsId);
            this.constMeasure = await (0, _deviceHelper.DeviceHelper).getItemSupervisionLinks(this.MeasuresId, "hasMeasure");
            for (let eltMes of this.constMeasure)this.passElementBetweenTables(eltMes, this.users, this.MeasuresTab, 0);
            this.constAlarms = await (0, _deviceHelper.DeviceHelper).getItemSupervisionLinks(this.alarmsId, "hasAlarm");
            for (let eltAl of this.constAlarms)this.passElementBetweenTables(eltAl, this.users, this.alarmsTab, 0);
            this.constCommands = await (0, _deviceHelper.DeviceHelper).getItemSupervisionLinks(this.commandsId, "hasCommand");
            for (let eltCom of this.constCommands)this.passElementBetweenTables(eltCom, this.users, this.commandsTab, 0);
            console.log(this.users);
            // await this.arrangeTabs();
            this.backupTab = this.users;
        },
        //a changer
        initializeData: function() {
            this.users = [];
            this.selected = null;
            this.parentId = null;
            this.parentNode = null;
            this.value = [];
            this.ioTab = [];
            this.inputTab = [];
            this.selectedInputs = [];
            this.selectedOutputs = [];
            this.selectedSelectedInputs = [];
            this.selectedSelectedOutputs = [];
            this.inputSearch = "";
            this.outputSearch = "";
            this.searched = [];
            this.saveInputTab = [];
            this.saveOutputTab = [];
            this.inputsId = null;
            this.outputsId = null;
            this.backupInput = [];
            this.backupOutput = [];
            this.supervisionId = null;
            this.MeasuresId = null;
            this.commandsId = null;
            this.alarmsId = null;
            this.savedEntries = [];
            this.MeasuresTab = [];
            this.commandsTab = [];
            this.alarmsTab = [];
            this.searched = [];
            this.backupTab = [];
            this.selectedLinkedMeasures = [];
            this.constMeasure = [];
            this.constAlarms = [];
            this.constCommands = [];
        // this.globalNotMonitoredMeasuresId = null;
        // this.globalNotMonitoredAlarmsIdId = null;
        },
        opened: function(option) {
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        onCancel: function() {
            this.dialog = false;
        },
        compareTabs: function(tabToCompare, tabReference) {
            // cette fonction compare deux tableaux pour la sauvegarde : elle ressort un objet json 
            // contenant une liste de liens à effacer et une liste de liens à ajouter. Les autres resteront inchangés
            let returnTab = {
                elementsToAdd: [],
                elementsToDelete: []
            };
            for (let ref of tabReference){
                let indexRef = tabToCompare.findIndex((elt)=>elt.nodeId == ref.nodeId);
                if (indexRef == -1) returnTab.elementsToDelete.push(ref.nodeId);
            }
            for (let comp of tabToCompare){
                let indexComp = tabReference.findIndex((elt)=>elt.nodeId == comp.nodeId);
                if (indexComp == -1) returnTab.elementsToAdd.push(comp.nodeId);
            }
            return returnTab;
        },
        // a changer
        onSave: async function() {
            // récupération global Measure & alarms non monitorés pour ajouter liaison
            let itemListNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(this.parentId, "hasItem");
            let deviceProfileNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(itemListNode[0].id.get(), "hasItemList");
            let globalSupervisionNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(deviceProfileNode[0].id.get(), "hasGlobalSupervision");
            let globalMeasuresNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(globalSupervisionNode[0].id.get(), "hasGlobalMeasures");
            let globalAlarmsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(globalSupervisionNode[0].id.get(), "hasGlobalAlarms");
            let globalCommandsNode = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(globalSupervisionNode[0].id.get(), "hasGlobalCommands");
            let globalMeasuresIntervalTime = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(globalMeasuresNode[0].id.get(), "hasIntervalTimeNode");
            let globalAlarmsIntervalTime = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(globalAlarmsNode[0].id.get(), "hasIntervalTimeNode");
            let indexOfNotMonitoredMesure = globalMeasuresIntervalTime.findIndex((elt)=>elt.name.get() == "Not Monitored");
            let indexOfNotMonitoredAlarm = globalAlarmsIntervalTime.findIndex((elt)=>elt.name.get() == "Not Monitored");
            let measures = this.compareTabs(this.MeasuresTab, this.constMeasure);
            let alarms = this.compareTabs(this.alarmsTab, this.constAlarms);
            console.log("this.alarmsTab");
            console.log(this.alarmsTab);
            console.log("const alarm");
            console.log(this.constAlarms);
            console.log("alarms");
            console.log(alarms);
            console.log("this.alarmsId");
            console.log(this.alarmsId);
            let commands = this.compareTabs(this.commandsTab, this.constCommands);
            // elements to Add
            for (let addMes of measures.elementsToAdd)await (0, _deviceHelper.DeviceHelper).generateSupervisionLinks(this.MeasuresId, addMes, "hasMeasure", globalMeasuresIntervalTime[indexOfNotMonitoredMesure].id.get(), "hasIntervalTime");
            console.log("sortie boucle Measures");
            for (let addAl of alarms.elementsToAdd){
                console.log("entr\xe9e boucle for alarms to add");
                console.log(addAl);
                // await DeviceHelper.generateSupervisionLinks(this.alarmsId, addAl, "hasAlarm");
                await (0, _deviceHelper.DeviceHelper).generateSupervisionLinks(this.alarmsId, addAl, "hasAlarm", globalAlarmsIntervalTime[indexOfNotMonitoredAlarm].id.get(), "hasIntervalTime");
            }
            for (let addCom of commands.elementsToAdd){
                console.log("entr\xe9e boucle for commands to add");
                console.log(addCom);
                await (0, _deviceHelper.DeviceHelper).generateSupervisionLinks(this.commandsId, addCom, "hasCommand", globalCommandsNode[0].id.get(), "hasGlobalCommand");
            // await DeviceHelper.generateSupervisionLinks(this.commandsId, addCom, "hasCommand");
            }
            console.log("sortie boucle commands to add");
            // elements to Delete
            for (let delMes of measures.elementsToDelete){
                let parentIntervalTime = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delMes, "hasIntervalTime");
                let parentSupervisionMeasures = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delMes, "hasMeasure");
                if (parentIntervalTime.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentIntervalTime[0].id.get(), delMes, "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                if (parentSupervisionMeasures.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentSupervisionMeasures[0].id.get(), delMes, "hasMeasure", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            for (let delAl of alarms.elementsToDelete){
                let parentIntervalTime = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delAl, "hasIntervalTime");
                let parentSupervisionAlarms1 = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delAl, "hasAlarm");
                if (parentIntervalTime.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentIntervalTime[0].id.get(), delAl, "hasIntervalTime", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                if (parentSupervisionAlarms1.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentSupervisionAlarms1[0].id.get(), delAl, "hasAlarm", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            for (let delCom of commands.elementsToDelete){
                let parentGlobalCommands = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delCom, "hasGlobalCommand");
                if (parentGlobalCommands.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentGlobalCommands[0].id.get(), delCom, "hasGlobalCommand", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
                let parentCommands = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getParents(delCom, "hasCommand");
                if (parentCommands.length != 0) await (0, _deviceHelper.DeviceHelper).clearLinksOneByOne(parentSupervisionAlarms[0].id.get(), delCom, "hasCommand", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
            }
            this.dialog = false;
        },
        onSelectAvailableMeasure: async function(items) {
            this.passElementBetweenTables(items, this.users, this.MeasuresTab, 0);
        },
        onSelectCommand: async function(items) {
            this.passElementBetweenTables(items, this.users, this.commandsTab, 0);
        },
        onSelectAlarm: async function(items) {
            this.passElementBetweenTables(items, this.users, this.alarmsTab, 0);
        },
        passElementBetweenTables: function(element, tabIn, tabOut, sens) {
            // sens = 0 : Available -> Linked (savedTab reduces)
            // sens = 1 : Linked -> Available (savedTab grows)
            if (element != undefined) {
                const tempElt = element;
                var index = tabIn.findIndex((elt)=>elt == tempElt || elt.nodeId == tempElt.nodeId);
                if (index > -1) {
                    var iIndex = tabOut.findIndex((elt)=>elt == tempElt || elt.nodeId == tempElt.nodeId);
                    if (iIndex > -1) tabIn.splice(index, 1);
                    else {
                        tabOut.push(tabIn[index]);
                        tabIn.splice(index, 1);
                    }
                }
                let backupIndex = this.backupTab.findIndex((elt)=>elt == tempElt || elt.nodeId == tempElt.nodeId);
                if (backupIndex > -1 && sens == 0) this.backupTab.splice(backupIndex, 1);
                else if (backupIndex <= -1 && sens == 1) this.backupTab.push(tempElt);
                index = -1;
                backupIndex = -1;
            }
        },
        onSearch: async function() {
            var lowerSearch = this.searched.toString().toLowerCase();
            this.users = this.backupTab.filter((elt)=>elt.title.toString().toLowerCase().includes(lowerSearch) || elt.name.toString().toLowerCase().includes(lowerSearch));
        },
        onSelectLinkedMeasure: function(items) {
            // this.selectedLinkedMeasures.push(items);
            this.selectedLinkedMeasures = items;
            console.log(this.selectedLinkedMeasures);
        },
        onSelectLinkedAlarm: function(items) {
            // this.selectedLinkedMeasures.push(items);
            this.selectedLinkedAlarms = items;
            console.log(this.selectedLinkedAlarms);
        },
        onSelectLinkedCommand: function(items) {
            // this.selectedLinkedMeasures.push(items);
            this.selectedLinkedCommands = items;
            console.log(this.selectedLinkedCommands);
        },
        onClickMeasuresUnlink: function(items) {
            console.log("je suis dans la fonction");
            const temp = this.selectedLinkedMeasures;
            for(let elt in temp)this.passElementBetweenTables(temp[elt], this.MeasuresTab, this.users, 1);
            this.selectedLinkedMeasures = [];
        },
        onClickAlarmsUnlink: function(items) {
            console.log("je suis dans la fonction");
            const temp = this.selectedLinkedAlarms;
            for(let elt in temp)this.passElementBetweenTables(temp[elt], this.alarmsTab, this.users, 1);
            this.selectedLinkedAlarms = [];
        },
        onClickCommandsUnlink: function(items) {
            console.log("je suis dans la fonction");
            const temp = this.selectedLinkedCommands;
            for(let elt in temp)this.passElementBetweenTables(temp[elt], this.commandsTab, this.users, 1);
            this.selectedLinkedCommands = [];
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GuXY":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "1200"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("v-card-title", {
                        staticClass: "headline"
                    }, [
                        _vm._v(_vm._s(_vm.selected) + " Item Supervision")
                    ]),
                    _vm._v(" "),
                    _c("md-tabs", [
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-input",
                                "md-label": "Measure"
                            }
                        }, [
                            _c("div", {
                                staticClass: "tableaux"
                            }, [
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Measures\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickMeasuresUnlink
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectLinkedMeasure
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.MeasuresTab,
                                            callback: function($$v) {
                                                _vm.MeasuresTab = $$v;
                                            },
                                            expression: "MeasuresTab"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-field", {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c("md-input", {
                                                staticClass: "search",
                                                attrs: {
                                                    "placeholder": "Search..."
                                                },
                                                on: {
                                                    "input": _vm.onSearch
                                                },
                                                model: {
                                                    value: _vm.searched,
                                                    callback: function($$v) {
                                                        _vm.searched = $$v;
                                                    },
                                                    expression: "searched"
                                                }
                                            })
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectAvailableMeasure
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.users,
                                            callback: function($$v) {
                                                _vm.users = $$v;
                                            },
                                            expression: "users"
                                        }
                                    })
                                ], 1)
                            ])
                        ]),
                        _vm._v(" "),
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-output",
                                "md-label": "Alarms"
                            }
                        }, [
                            _c("div", {
                                staticClass: "tableaux"
                            }, [
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Alarms\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickAlarmsUnlink
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectLinkedAlarm
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.alarmsTab,
                                            callback: function($$v) {
                                                _vm.alarmsTab = $$v;
                                            },
                                            expression: "alarmsTab"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-field", {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c("md-input", {
                                                staticClass: "search",
                                                attrs: {
                                                    "placeholder": "Search..."
                                                },
                                                on: {
                                                    "input": _vm.onSearch
                                                },
                                                model: {
                                                    value: _vm.searched,
                                                    callback: function($$v) {
                                                        _vm.searched = $$v;
                                                    },
                                                    expression: "searched"
                                                }
                                            })
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectAlarm
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.users,
                                            callback: function($$v) {
                                                _vm.users = $$v;
                                            },
                                            expression: "users"
                                        }
                                    })
                                ], 1)
                            ])
                        ]),
                        _vm._v(" "),
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-commands",
                                "md-label": "Commands"
                            }
                        }, [
                            _c("div", {
                                staticClass: "tableaux"
                            }, [
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Commands\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-button", {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickCommandsUnlink
                                            }
                                        }, [
                                            _c("md-icon", [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectLinkedCommand
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.commandsTab,
                                            callback: function($$v) {
                                                _vm.commandsTab = $$v;
                                            },
                                            expression: "commandsTab"
                                        }
                                    })
                                ], 1),
                                _vm._v(" "),
                                _c("div", {
                                    staticClass: "bloc-table"
                                }, [
                                    _c("md-toolbar", {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c("span", {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("md-field", {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c("md-input", {
                                                staticClass: "search",
                                                attrs: {
                                                    "placeholder": "Search..."
                                                },
                                                on: {
                                                    "input": _vm.onSearch
                                                },
                                                model: {
                                                    value: _vm.searched,
                                                    callback: function($$v) {
                                                        _vm.searched = $$v;
                                                    },
                                                    expression: "searched"
                                                }
                                            })
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c("md-table", {
                                        attrs: {
                                            "md-sort": "title",
                                            "md-sort-order": "asc",
                                            "md-card": "",
                                            "md-fixed-header": ""
                                        },
                                        on: {
                                            "md-selected": _vm.onSelectCommand
                                        },
                                        scopedSlots: _vm._u([
                                            {
                                                key: "md-table-row",
                                                fn: function(ref) {
                                                    var item = ref.item;
                                                    return _c("md-table-row", {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("md-table-cell", {
                                                            attrs: {
                                                                "md-label": "IDX",
                                                                "md-sort-by": "idx"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.idx) + "\n                      ")
                                                        ])
                                                    ], 1);
                                                }
                                            }
                                        ]),
                                        model: {
                                            value: _vm.users,
                                            callback: function($$v) {
                                                _vm.users = $$v;
                                            },
                                            expression: "users"
                                        }
                                    })
                                ], 1)
                            ])
                        ])
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler\n            ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider\n            ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"8YnP9":[function() {},{}],"6Sdjx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ON8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("85c5dd683474f147");
    if (script.__esModule) script = script.default;
    script.render = require("1ca31e4d192d6554").render;
    script.staticRenderFns = require("1ca31e4d192d6554").staticRenderFns;
    script._scopeId = "data-v-782e4d";
    script.__cssModules = require("db1f7abccf9fd12d").default;
    require("8207fadf98624cb2").default(script);
    script.__scopeId = "data-v-782e4d";
    script.__file = "globalSupervision.vue";
};
initialize();
exports.default = script;

},{"85c5dd683474f147":"c9CH0","1ca31e4d192d6554":"4yk7M","db1f7abccf9fd12d":"68I1h","8207fadf98624cb2":"3S3EW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9CH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _constants = require("../constants");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
var _dns = require("dns");
const { spinalPanelManagerService } = require("a1f2d8f4eb40b224");
const xml2js = require("d69d382e9b4ec67b");
const fs = require("35e0cb197a28ef16");
var scriptExports = {
    name: "DialogGlobalSupervision",
    data: ()=>({
            // users: [{}],
            // usersMeasures: [{}],
            // usersAlarms: [{}],
            users: {
                measures: [
                    {}
                ],
                alarms: [
                    {}
                ],
                commands: [
                    {}
                ]
            },
            savedUsers: {
                measures: [
                    {}
                ],
                alarms: [
                    {}
                ]
            },
            // intervalTimeList: [],
            intervalTimeList: {
                measures: [],
                alarms: []
            },
            parentId: null,
            parentNode: null,
            newIntervalTime: null,
            dialog: null,
            monitoringNodeId: null,
            selected: {},
            other: null,
            single: null,
            globalAlarmsId: null,
            globalMeasuresId: null
        }),
    computed: {},
    methods: {
        initialize: async function(option) {
            this.parentId = option.selectedNode.id.get();
            this.parentNode = option.selectedNode;
            this.intervalTimeList = await (0, _deviceHelper.DeviceHelper).getIntervalTimeList(this.parentId);
            this.users = await (0, _deviceHelper.DeviceHelper).getGlobalSupervisionConfiguration(this.parentId);
            // this.savedUsers = await DeviceHelper.getGlobalSupervisionConfiguration(this.parentId);
            this.globalMeasuresId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasGlobalMeasures"))[0].id.get();
            this.globalAlarmsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasGlobalAlarms"))[0].id.get();
            this.globalCommandsId = (await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(this.parentId, "hasGlobalCommands"))[0].id.get();
        // this.users = this.savedUsers;
        // this.globalAlarmsId = await
        // this.globalMeasuresId = 
        // 1 : access from ItemList Panel =>
        // if (option.ACCESS_FROM == "Item_List_Panel") {
        //   console.log(option);
        //   this.parentId = await option.selectedNode.id;
        //   this.parentNode = await option.selectedNode;
        //   this.users = await DeviceHelper.getLinkedOutputBacnetValues_FromItemId(
        //     option.selectedNode.id
        //   );
        //   this.savedUsers = await DeviceHelper.getLinkedOutputBacnetValues_FromItemId(
        //     option.selectedNode.id
        //   );
        //   console.log("savedusers", this.savedUsers);
        //   let itemListNode = (
        //     await SpinalGraphService.getParents(this.parentId, "hasItem")
        //   )[0];
        //   console.log(itemListNode);
        //   let deviceNode = (
        //     await SpinalGraphService.getParents(
        //       itemListNode.id.get(),
        //       "hasItemList"
        //     )
        //   )[0];
        //   let monitoringNode = (
        //     await SpinalGraphService.getChildren(
        //       deviceNode.id.get(),
        //       "hasMonitoringNode"
        //     )
        //   )[0];
        //   this.monitoringNodeId = monitoringNode.id.get();
        //   this.intervalTimeList = await DeviceHelper.getIntervalTimeList(
        //     monitoringNode.id.get()
        //   );
        // } else if (option.ACCESS_FROM == "Button_Monitoring_Configuration") {
        //   console.log("ok");
        //   this.parentId = option.selectedNode.id;
        //   this.parentNode = option.selectedNode;
        //   this.users = await DeviceHelper.getLinkedOutputBacnetValues_FromMonitoringNodeId(
        //     option.selectedNode.id
        //   );
        //   this.savedUsers = await DeviceHelper.getLinkedOutputBacnetValues_FromMonitoringNodeId(
        //     option.selectedNode.id
        //   );
        //   console.log("savedusers", this.savedUsers);
        //   this.monitoringNodeId = option.selectedNode.id;
        // this.intervalTimeList = await DeviceHelper.getIntervalTimeList(
        //   option.selectedNode.id
        // );
        // }
        // this.users = await DeviceHelper.listItemInTab(this.parentNode);
        },
        opened: function(option) {
            // this.users = [];
            this.initialize(option);
            this.dialog = true;
        },
        removed: function() {},
        closeDialog () {
            this.dialog = false;
        },
        onCancel: function() {
            this.dialog = false;
        },
        test: function() {
            console.log("clicked");
        },
        onSave: async function() {
            const savedUsers = await (0, _deviceHelper.DeviceHelper).getGlobalSupervisionConfiguration(this.parentId);
            console.log(this.savedUsers);
            await (0, _deviceHelper.DeviceHelper).generateGlobalSupervisionLinks(this.users.measures, this.intervalTimeList.measures, savedUsers.measures);
        //   this.users,
        //   this.intervalTimeList,
        //   this.savedUsers
        // );
        // this.dialog = false;
        },
        onSelect: function(item) {
            if (item != null) this.selected = item;
        },
        // onAddIntervalTime: async function () {
        //   for (let elt in this.intervalTimeList) {
        //     if (this.intervalTimeList[elt].value == this.newIntervalTime) {
        //       this.newIntervalTime = null;
        //       return 0;
        //     }
        //   }
        //   let tempTab = await DeviceHelper.addIntervalTimeNode(
        //     this.monitoringNodeId,
        //     this.newIntervalTime
        //   );
        //   this.intervalTimeList.push(tempTab);
        //   this.newIntervalTime = null;
        // },
        onAddIntervalTime: async function(intervalTimeList, idOfGlobal) {
            for(let elt in intervalTimeList)if (intervalTimeList[elt].value == this.newIntervalTime) {
                this.newIntervalTime = null;
                return 0;
            }
            let tempTab = await (0, _deviceHelper.DeviceHelper).addIntervalTimeNode(/*intervalTimeList,*/ this.newIntervalTime, idOfGlobal);
            intervalTimeList.push(tempTab);
            this.newIntervalTime = null;
        },
        onAddIntervalTimeMeasures: async function() {
            await this.onAddIntervalTime(this.intervalTimeList.measures, this.globalMeasuresId);
        },
        onAddIntervalTimeAlarms: async function() {
            await this.onAddIntervalTime(this.intervalTimeList.alarms, this.globalAlarmsId);
        },
        clearMeasuresSupervisionConfiguration: function() {
            for (let elt of this.users.measures)elt.intervalTime = 0;
        },
        // clearAlarmsSupervisionConfiguration: function(){
        //   for (let elt of this.users.alarms){
        //     elt.intervalTime = 0;
        //   }
        // },
        clearCommandsSupervisionConfiguration: function() {
            console.log("clearCommandsSupervisionConfiguration to implement");
        },
        clearMonitoringConfiguration: async function() {
            console.log(this.users);
            for(let elt in this.users)// let parent = await SpinalGraphService.getParents(this.users[elt].nodeId, "hasIntervalTime");
            // if(parent.length !=0){
            //   await DeviceHelper.clearLinksOneByOne(parent[0].id.get(), this.users[elt].nodeId, "hasIntervalTime", SPINAL_RELATION_PTR_LST_TYPE);
            // }
            this.users[elt].intervalTime = 0;
        },
        onDisableMonitoring: async function(item) {
            this.onSelect(item);
            item.intervalTime = 0;
        }
    }
};
var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","../constants":"g3608","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","dns":"jhUEF","a1f2d8f4eb40b224":"7Uw4d","d69d382e9b4ec67b":"7fkbn","35e0cb197a28ef16":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yk7M":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", [
        _c("v-layout", {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c("v-dialog", {
                attrs: {
                    "max-width": "1200"
                },
                model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                        _vm.dialog = $$v;
                    },
                    expression: "dialog"
                }
            }, [
                _c("v-card", {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c("md-tabs", [
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-measures",
                                "md-label": "Measures",
                                "flat": ""
                            },
                            on: {
                                "click": function($event) {
                                    return _vm.test();
                                }
                            }
                        }, [
                            _c("md-table", {
                                attrs: {
                                    "md-sort": "name",
                                    "md-sort-order": "asc",
                                    "md-card": "",
                                    "md-fixed-header": ""
                                },
                                on: {
                                    "md-selected": _vm.onSelect
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "md-table-row",
                                        fn: function(ref) {
                                            var item = ref.item;
                                            return _c("md-table-row", {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Item Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.item_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Interval Time"
                                                    }
                                                }, [
                                                    _c("md-field", [
                                                        _c("md-select", {
                                                            model: {
                                                                value: item.intervalTime,
                                                                callback: function($$v) {
                                                                    _vm.$set(item, "intervalTime", $$v);
                                                                },
                                                                expression: "item.intervalTime"
                                                            }
                                                        }, [
                                                            _vm._l(_vm.intervalTimeList.measures, function(item) {
                                                                return _c("li", {
                                                                    key: item.value
                                                                }, [
                                                                    _c("md-option", {
                                                                        attrs: {
                                                                            "value": item.value
                                                                        }
                                                                    }, [
                                                                        _vm._v(_vm._s(item.value))
                                                                    ])
                                                                ], 1);
                                                            }),
                                                            _vm._v(" "),
                                                            _c("div", {
                                                                staticClass: "div-add-interval-time"
                                                            }, [
                                                                _c("md-field", [
                                                                    _c("md-input", {
                                                                        attrs: {
                                                                            "placeholder": "Add Interval Time in ms"
                                                                        },
                                                                        model: {
                                                                            value: _vm.newIntervalTime,
                                                                            callback: function($$v) {
                                                                                _vm.newIntervalTime = $$v;
                                                                            },
                                                                            expression: "newIntervalTime"
                                                                        }
                                                                    })
                                                                ], 1),
                                                                _vm._v(" "),
                                                                _c("md-button", {
                                                                    staticClass: "md-icon-button md-dense md-raised md-primary",
                                                                    attrs: {
                                                                        "flat": ""
                                                                    },
                                                                    on: {
                                                                        "click": function($event) {
                                                                            return _vm.onAddIntervalTimeMeasures();
                                                                        }
                                                                    }
                                                                }, [
                                                                    _c("md-icon", [
                                                                        _vm._v("add")
                                                                    ])
                                                                ], 1)
                                                            ], 1)
                                                        ], 2)
                                                    ], 1)
                                                ], 1),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Disable Monitoring"
                                                    }
                                                }, [
                                                    _c("md-button", {
                                                        staticClass: "md-icon-button",
                                                        on: {
                                                            "click": function($event) {
                                                                return _vm.onDisableMonitoring(item);
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
                                    value: _vm.users.measures,
                                    callback: function($$v) {
                                        _vm.$set(_vm.users, "measures", $$v);
                                    },
                                    expression: "users.measures"
                                }
                            }, [
                                _c("md-table-toolbar", {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c("h1", {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Measures Supervision Configuration")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-button", {
                                        staticClass: "md-icon-button md-raised md-accent",
                                        on: {
                                            "click": function($event) {
                                                return _vm.clearMeasuresSupervisionConfiguration();
                                            }
                                        }
                                    }, [
                                        _c("md-icon", [
                                            _vm._v("delete_forever")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-alarms",
                                "md-label": "Alarms"
                            }
                        }, [
                            _c("md-table", {
                                attrs: {
                                    "md-sort": "name",
                                    "md-sort-order": "asc",
                                    "md-card": "",
                                    "md-fixed-header": ""
                                },
                                on: {
                                    "md-selected": _vm.onSelect
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "md-table-row",
                                        fn: function(ref) {
                                            var item = ref.item;
                                            return _c("md-table-row", {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Item Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.item_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Interval Time"
                                                    }
                                                }, [
                                                    _c("md-field", [
                                                        _c("md-select", {
                                                            model: {
                                                                value: item.intervalTime,
                                                                callback: function($$v) {
                                                                    _vm.$set(item, "intervalTime", $$v);
                                                                },
                                                                expression: "item.intervalTime"
                                                            }
                                                        }, [
                                                            _vm._l(_vm.intervalTimeList.alarms, function(item) {
                                                                return _c("li", {
                                                                    key: item.value
                                                                }, [
                                                                    _c("md-option", {
                                                                        attrs: {
                                                                            "value": item.value
                                                                        }
                                                                    }, [
                                                                        _vm._v(_vm._s(item.value))
                                                                    ])
                                                                ], 1);
                                                            }),
                                                            _vm._v(" "),
                                                            _c("div", {
                                                                staticClass: "div-add-interval-time"
                                                            }, [
                                                                _c("md-field", [
                                                                    _c("md-input", {
                                                                        attrs: {
                                                                            "placeholder": "Add Interval Time in ms"
                                                                        },
                                                                        model: {
                                                                            value: _vm.newIntervalTime,
                                                                            callback: function($$v) {
                                                                                _vm.newIntervalTime = $$v;
                                                                            },
                                                                            expression: "newIntervalTime"
                                                                        }
                                                                    })
                                                                ], 1),
                                                                _vm._v(" "),
                                                                _c("md-button", {
                                                                    staticClass: "md-icon-button md-dense md-raised md-primary",
                                                                    attrs: {
                                                                        "flat": ""
                                                                    },
                                                                    on: {
                                                                        "click": function($event) {
                                                                            return _vm.onAddIntervalTimeAlarms();
                                                                        }
                                                                    }
                                                                }, [
                                                                    _c("md-icon", [
                                                                        _vm._v("add")
                                                                    ])
                                                                ], 1)
                                                            ], 1)
                                                        ], 2)
                                                    ], 1)
                                                ], 1),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Disable Monitoring"
                                                    }
                                                }, [
                                                    _c("md-button", {
                                                        staticClass: "md-icon-button",
                                                        on: {
                                                            "click": function($event) {
                                                                return _vm.onDisableMonitoring(item);
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
                                    value: _vm.users.alarms,
                                    callback: function($$v) {
                                        _vm.$set(_vm.users, "alarms", $$v);
                                    },
                                    expression: "users.alarms"
                                }
                            }, [
                                _c("md-table-toolbar", {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c("h1", {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Alarms Supervision Configuration")
                                    ]),
                                    _vm._v(" "),
                                    _c("md-button", {
                                        staticClass: "md-icon-button md-raised md-accent",
                                        on: {
                                            "click": function($event) {
                                                return _vm.clearAlarmsSupervisionConfiguration();
                                            }
                                        }
                                    }, [
                                        _c("md-icon", [
                                            _vm._v("delete_forever")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("md-tab", {
                            attrs: {
                                "id": "tab-commands",
                                "md-label": "Commands"
                            }
                        }, [
                            _c("md-table", {
                                attrs: {
                                    "md-sort": "name",
                                    "md-sort-order": "asc",
                                    "md-card": "",
                                    "md-fixed-header": ""
                                },
                                on: {
                                    "md-selected": _vm.onSelect
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "md-table-row",
                                        fn: function(ref) {
                                            var item = ref.item;
                                            return _c("md-table-row", {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c("md-table-cell", {
                                                    attrs: {
                                                        "md-label": "Item Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.item_name) + "\n                ")
                                                ])
                                            ], 1);
                                        }
                                    }
                                ]),
                                model: {
                                    value: _vm.users.commands,
                                    callback: function($$v) {
                                        _vm.$set(_vm.users, "commands", $$v);
                                    },
                                    expression: "users.commands"
                                }
                            }, [
                                _c("md-table-toolbar", {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c("h1", {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Commands Supervision Panel")
                                    ])
                                ])
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("div")
                    ], 1),
                    _vm._v(" "),
                    _c("v-card-actions", [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "red darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onCancel
                            }
                        }, [
                            _vm._v("Annuler ")
                        ]),
                        _vm._v(" "),
                        _c("v-btn", {
                            attrs: {
                                "color": "green darken-1",
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onSave
                            }
                        }, [
                            _vm._v("Valider ")
                        ])
                    ], 1)
                ], 1)
            ], 1)
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"68I1h":[function() {},{}],"3S3EW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2tMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1df3fade6761ce9c");
    if (script.__esModule) script = script.default;
    script.render = require("9a97313b3d3843b").render;
    script.staticRenderFns = require("9a97313b3d3843b").staticRenderFns;
    script._scopeId = "data-v-11009b";
    script.__cssModules = require("1c71f49a4fc7bfc4").default;
    require("bc75e9340295c677").default(script);
    script.__scopeId = "data-v-11009b";
    script.__file = "ShowBacnetValue.vue";
};
initialize();
exports.default = script;

},{"1df3fade6761ce9c":"zjn3a","9a97313b3d3843b":"knCAB","1c71f49a4fc7bfc4":"hrzwJ","bc75e9340295c677":"26vww","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"zjn3a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerBimManagerService = require("spinal-env-viewer-bim-manager-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
// import linkAutomateToBmsDeviceUtilities from "../../../js/link_utilities/linkAutomateToBmsDevice";
var _spinalEnvViewerPluginNetworkTreeService = require("spinal-env-viewer-plugin-network-tree-service");
var _networkService = require("spinal-env-viewer-plugin-network-tree/src/js/network/networkService");
var _networkServiceDefault = parcelHelpers.interopDefault(_networkService);
var _linkComponentVue = require("./links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
//import ConfirmLinkToGTB from "./confirmLinkToGTB.vue";
var _configurationVue = require("../../spinal-env-viewer-plugin-network-tree/src/vue/components/links/configuration.vue");
var _configurationVueDefault = parcelHelpers.interopDefault(_configurationVue);
var _replaceByJs = require("../../spinal-env-viewer-plugin-network-tree/src/js/personalized_functions/replace_by.js");
var _replaceByJsDefault = parcelHelpers.interopDefault(_replaceByJs);
var _replaceByJs1 = require("../../spinal-env-viewer-plugin-network-tree/src/js/personalized_functions/replace-by.js");
var _replaceByJsDefault1 = parcelHelpers.interopDefault(_replaceByJs1);
// import { SpinalForgeViewer } from "spinal-env-viewer-plugin-forge";
var _deviceHelper = require("../build/DeviceHelper");
const lodash = require("367a192de1de63e3");
var scriptExports = {
    name: "Test",
    components: {
        "link-component": (0, _linkComponentVueDefault.default)
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
        this.contextId;
        this.nodeId;
        return {
            DialogGetFromDiscovery: true,
            data: [],
            networks: [],
            devices: [],
            contextSelected: undefined,
            networkSelected: undefined,
            deviceSelected: undefined,
            pageSelected: this.PAGES.selection
        };
    },
    methods: {
        onSave: function() {},
        onCancel: function() {
            this.DialogGetFromDiscovery = false;
        },
        removed: function(save) {
            if (save) //DeviceHelper.generateBacNetValuesFromDiscovery(this.deviceSelected, this.nodeId, this.contextId );
            new Promise(async (resolve)=>{
                //await DeviceHelper.generateBacNetValues(nodeId, result);
                await (0, _deviceHelper.DeviceHelper).generateBacNetValuesFromDiscovery(this.nodeId, this.contextId, this.deviceSelected, this.networkSelected, this.contextSelected);
                await (0, _deviceHelper.DeviceHelper).generateItem_list(this.nodeId);
                await (0, _deviceHelper.DeviceHelper).generateSupervisionGraph(this.nodeId);
            }).catch((err)=>console.log(err));
            //console.log("save : ", save);
            this.DialogGetFromDiscovery = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        opened (option) {
            //this.DialogGetFromDiscovery = true;
            this.pageSelected = this.PAGES.loading, this.contextId = option.contextId;
            this.nodeId = option.nodeId;
            this.isAutomate = option.isAutomate;
            this.getAllData();
        },
        getAllData () {
            return (0, _networkServiceDefault.default).getDeviceContextTreeStructure().then((result)=>{
                this.data = result;
                this.updateNetworks();
                this.pageSelected = this.PAGES.selection;
            });
        },
        _getBmsDevices () {
            if (typeof this.deviceSelected !== "undefined") return this.devices.filter((el)=>el.id === this.deviceSelected);
            else if (typeof this.networkSelected !== "undefined") {
                const found = this.networks.find((el)=>el.id === this.networkSelected);
                return found && found.devices ? found.devices : [];
            } else if (typeof this.contextSelected !== "undefined") {
                const devices = [];
                const found = this.data.find((el)=>el.id === this.contextSelected);
                if (found && found.networks) {
                    for (const network of found.networks)if (network.devices) devices.push(...network.devices);
                }
                return devices;
            }
        },
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

},{"spinal-env-viewer-bim-manager-service":"9Nkbe","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-plugin-network-tree-service":"7oQhf","spinal-env-viewer-plugin-network-tree/src/js/network/networkService":"hs5g2","./links/LinkComponent.vue":"66cmd","../../spinal-env-viewer-plugin-network-tree/src/vue/components/links/configuration.vue":"dyEHh","../../spinal-env-viewer-plugin-network-tree/src/js/personalized_functions/replace_by.js":"dWyo6","../../spinal-env-viewer-plugin-network-tree/src/js/personalized_functions/replace-by.js":"k55R4","../build/DeviceHelper":"biglE","367a192de1de63e3":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Nkbe":[function(require,module,exports) {
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

},{}],"hs5g2":[function(require,module,exports) {
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

},{"spinal-env-viewer-graph-service":"9n7zp","spinal-model-bmsnetwork":"gzkbg","spinal-model-bacnet":"fxyeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66cmd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bf697103ea9ab7f5");
    if (script.__esModule) script = script.default;
    script.render = require("82e784f8b4a3d93a").render;
    script.staticRenderFns = require("82e784f8b4a3d93a").staticRenderFns;
    script._scopeId = "data-v-abb49f";
    script.__cssModules = require("f8f23141d193d9e5").default;
    require("e6a757ef2435c199").default(script);
    script.__scopeId = "data-v-abb49f";
    script.__file = "LinkComponent.vue";
};
initialize();
exports.default = script;

},{"bf697103ea9ab7f5":"4USDo","82e784f8b4a3d93a":"1A54j","f8f23141d193d9e5":"bK940","e6a757ef2435c199":"kQ6wY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4USDo":[function(require,module,exports) {
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

},{"./linkToGroupTemplate.vue":"9zQq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zQq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d4966a7bbc193142");
    if (script.__esModule) script = script.default;
    script.render = require("a2a8744b69190f7d").render;
    script.staticRenderFns = require("a2a8744b69190f7d").staticRenderFns;
    script._scopeId = "data-v-583248";
    script.__cssModules = require("7022ba685a82b2a1").default;
    require("c940503956cc622d").default(script);
    script.__scopeId = "data-v-583248";
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"d4966a7bbc193142":"7erKf","a2a8744b69190f7d":"dVQ1V","7022ba685a82b2a1":"dsFOl","c940503956cc622d":"2lxkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7erKf":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVQ1V":[function(require,module,exports) {
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
                        selected: item.id === _vm.itemSelected
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

},{}],"dsFOl":[function() {},{}],"2lxkB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1A54j":[function(require,module,exports) {
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

},{}],"bK940":[function() {},{}],"kQ6wY":[function(require,module,exports) {
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

},{"spinal-model-bmsnetwork":"gzkbg","../../components/code-mirror/SpinalCodeMirror.vue":"9RF72","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9RF72":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ByRa":[function(require,module,exports) {
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

},{"dedent":"aaz23","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knCAB":[function(require,module,exports) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("md-dialog", {
        staticClass: "mdDialogContainer",
        attrs: {
            "md-active": _vm.DialogGetFromDiscovery
        },
        on: {
            "update:mdActive": function($event) {
                _vm.DialogGetFromDiscovery = $event;
            },
            "update:md-active": function($event) {
                _vm.DialogGetFromDiscovery = $event;
            },
            "md-closed": function($event) {
                return _vm.closeDialog(false);
            }
        }
    }, [
        _c("md-dialog-title", {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Get bacnetValues from discovery")
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
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v("Discover")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hrzwJ":[function() {},{}],"26vww":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4phzZ":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
* 
* Le code ci-dessous crée un bouton dans la GraphManagerTopBar qui, lorsqu'on clique dessus, crée un nouveau contexte.
*
*
*/ parcelHelpers.export(exports, "ButtonAddDeviceProfileContext", ()=>ButtonAddDeviceProfileContext);
var _spinalModelGraph = require("spinal-model-graph");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _deviceHelper = require("../build/DeviceHelper");
class ButtonAddDeviceProfileContext extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        // 2
        super("Create a device profile context", "test description", {
            icon: "format_shapes",
            icon_type: "in",
            backgroundColor: "000000",
            fontColor: "FFFFFF"
        });
    }
    //3
    isShown(option) {
        if (option.testsFail === true) return Promise.resolve(-1);
        return Promise.resolve(true);
    }
    //4
    async action() {
        // await DeviceHelper.scanNetwork();
        (0, _deviceHelper.DeviceHelper).initialize();
    }
}

},{"spinal-model-graph":"fkEXw","spinal-env-viewer-graph-service":"9n7zp","spinal-env-viewer-context-menu-service":"kHlxv","../build/DeviceHelper":"biglE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bARBN":[function(require,module,exports) {
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
 */ // const {
//   spinalContextMenuService,
//   SpinalContextApp
// } = require("spinal-env-viewer-context-menu-service");
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonAddDeviceProfiles", ()=>ButtonAddDeviceProfiles);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const { spinalPanelManagerService } = require("92d0e3f02107f1fa");
class ButtonAddDeviceProfiles extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("AddDeviceProfiles", "AddDeviceProfiles test description", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "deviceProfileContext") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel() {
        spinalPanelManagerService.openPanel("DialogAddDeviceProfiles");
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","92d0e3f02107f1fa":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aUHJe":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonAddDevices", ()=>ButtonAddDevices);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("240032a2c4b91b36");
class ButtonAddDevices extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("AddDevices", "AddDevices test description", {
            icon: "add",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "deviceProfile") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogAddDevices", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","240032a2c4b91b36":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnYO4":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonDisplayXMLFile", ()=>ButtonDisplayXMLFile);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _fileExplorer = require("../FileExplorer");
const { spinalPanelManagerService } = require("e10657674a1def4d");
class ButtonDisplayXMLFile extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Download XML File", "Display XML File test description", {
            icon: "arrow_downward",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        let relationName = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRelationNames(option.selectedNode.id.get());
        if (option.selectedNode.type.get() === "device" && relationName[0] === "hasFiles") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.get().id);
        const directory = await (0, _fileExplorer.FileExplorer).getDirectory(node);
        await (0, _fileExplorer.FileExplorer).downloadFile(directory[0]);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../FileExplorer":"mhXAV","e10657674a1def4d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9Wfx":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonGenerateDeviceGraph", ()=>ButtonGenerateDeviceGraph);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
const { spinalPanelManagerService } = require("e8a3f5da5b83bf04");
const xml2js = require("bf642c48f12047f2");
const fs = require("7f167fac481a2a2a");
class ButtonGenerateDeviceGraph extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate Device Graph", "Generate Device Graph test description", {
            icon: "fast_forward",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        let relationName = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRelationNames(option.selectedNode.id.get());
        if (option.selectedNode.type.get() === "device" && relationName[0] === "hasFiles") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        const node = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.get().id);
        const directory = await (0, _fileExplorer.FileExplorer).getDirectory(node);
        const file = directory[0];
        const xmlFile = FileSystem._objects[file._server_id];
        await (0, _fileExplorer.FileExplorer).getXmlContent(xmlFile, option.selectedNode.get().id);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","e8a3f5da5b83bf04":"7Uw4d","bf642c48f12047f2":"7fkbn","7f167fac481a2a2a":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FxmFn":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonItemList", ()=>ButtonItemList);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("ec1a8d717a2123e4");
class ButtonItemList extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Item list", "Item list test description", {
            icon: "table_chart",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "itemList") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogItemList", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","ec1a8d717a2123e4":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9D71e":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonItemDetail", ()=>ButtonItemDetail);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
const { spinalPanelManagerService } = require("e97230c01d47694b");
class ButtonItemDetail extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Item Detail", "Edit Item test description", {
            icon: "edit",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "item") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogItemDetail", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","e97230c01d47694b":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCjSD":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonSaveProfileAsJson", ()=>ButtonSaveProfileAsJson);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
const { spinalPanelManagerService } = require("f9b8fe12ee1c5b9d");
class ButtonSaveProfileAsJson extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Save as JSON", "Save as JSON test description", {
            icon: "arrow_downward",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "itemList") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        await (0, _deviceHelper.DeviceHelper).saveProfileAsJson(option.selectedNode.get().id);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","f9b8fe12ee1c5b9d":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7cKsg":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonMonitoringConfiguration", ()=>ButtonMonitoringConfiguration);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
const { spinalPanelManagerService } = require("9bbbc775d98cd902");
const xml2js = require("a99de6e7aad88a57");
const fs = require("822a51155b8501ec");
class ButtonMonitoringConfiguration extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Monitoring Configuration", "Monitoring Configuration test description", {
            icon: "ballot",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "deviceMonitoring") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        // spinalPanelManagerService.openPanel( "DialogMonitoring", option);
        option.ACCESS_FROM = "Button_Monitoring_Configuration";
        spinalPanelManagerService.openPanel("DialogMonitoringDetails", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","9bbbc775d98cd902":"7Uw4d","a99de6e7aad88a57":"7fkbn","822a51155b8501ec":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnyzO":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonItemSupervision", ()=>ButtonItemSupervision);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _deviceHelper = require("../build/DeviceHelper");
const { spinalPanelManagerService } = require("e219b2de0c0dc9bf");
class ButtonItemSupervision extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Item Supervision", "Item Supervision", {
            icon: "padding",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "item") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        console.log(option);
        // await DeviceHelper.itemSupervisionInputOutput(option.selectedNode);
        spinalPanelManagerService.openPanel("DialogItemSupervision", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","../build/DeviceHelper":"biglE","e219b2de0c0dc9bf":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ahOK":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonGlobalSupervision", ()=>ButtonGlobalSupervision);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _deviceHelper = require("../build/DeviceHelper");
const { spinalPanelManagerService } = require("42cf0b7021a2754e");
class ButtonGlobalSupervision extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Global Supervision", "Global Supervision", {
            icon: "padding",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
        this.action = this.openPanel.bind(this);
    }
    isShown(option) {
        if (option.selectedNode.type.get() === "globalDeviceSupervision") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        console.log(option);
        // await DeviceHelper.itemSupervisionInputOutput(option.selectedNode);
        console.log("ok");
        spinalPanelManagerService.openPanel("DialogGlobalSupervision", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","../build/DeviceHelper":"biglE","42cf0b7021a2754e":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYorH":[function(require,module,exports) {
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//const xml2js = require('xml2js');
//const fs = require('fs');
parcelHelpers.export(exports, "ButtonGenerateDeviceGraphFromDiscovery", ()=>ButtonGenerateDeviceGraphFromDiscovery);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _deviceHelper = require("../build/DeviceHelper");
var _fileExplorer = require("../FileExplorer");
const { spinalPanelManagerService } = require("ff4a495c16a8129b");
class ButtonGenerateDeviceGraphFromDiscovery extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Generate Device Graph From Discovery", "Generate Device Graph From Discovery test description", {
            icon: "cached",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    //this.action = this.findBmsDevices.bind( this );
    }
    isShown(option) {
        let relationName = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRelationNames(option.selectedNode.id.get());
        if (option.selectedNode.type.get() === "device" && relationName[0] !== "hasFiles") return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        spinalPanelManagerService.openPanel("DialogGetFromDiscovery", {
            contextId,
            nodeId
        });
    }
    //console.log(option.selectedNode.type.get());
    //console.log(SpinalGraphService.getRealNode(option.selectedNode.id.get()));
    //console.log(SpinalGraphService.getRelationNames(option.selectedNode.id.get()));
    //console.log(SpinalGraphService.getContextWithType('Network'));
    async findBmsDevices() {
        let ctx = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType("Network");
        let startID = ctx[0].info.id.get();
        let child = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startID, ctx[0].info.id.get(), (elt)=>elt.info.type.get() == "BmsDevice");
        console.log(child.name._data);
    }
}

},{"spinal-env-viewer-context-menu-service":"kHlxv","spinal-env-viewer-graph-service":"9n7zp","../build/DeviceHelper":"biglE","../FileExplorer":"mhXAV","ff4a495c16a8129b":"7Uw4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},[], null, "parcelRequire02e5")

//# sourceMappingURL=spinal-env-viewer-plugin-device_profile.831cefc7.js.map
