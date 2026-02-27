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
})({"frKwp":[function(require,module,exports,__globalThis) {
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
var _updateDeviceProfileVue = require("./vue/updateDeviceProfile.vue");
var _updateDeviceProfileVueDefault = parcelHelpers.interopDefault(_updateDeviceProfileVue);
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
var _buttonUpdateProfileGenerated = require("./buttons/ButtonUpdateProfileGenerated");
console.log("SpinalForgePluginBacnet loaded");
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
(0, _spinalEnvViewerContextMenuService.spinalContextMenuService).registerApp("GraphManagerSideBar", new (0, _buttonUpdateProfileGenerated.ButtonUpdateProfileGenerated)(), [
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
(0, _spinalEnvViewerPanelManagerService.SpinalMountExtention).mount({
    // name registered.
    name: "DialogUpdateDeviceProfile",
    // Vue.extend to create a Compoment constructor
    vueMountComponent: (0, _vueDefault.default).extend((0, _updateDeviceProfileVueDefault.default)),
    // where to  append the Compoment
    parentContainer: document.body
});

},{"vue":"hO3OD","vuetify":"7Gvgu","spinal-env-viewer-plugin-forge":"lCxRJ","spinal-env-viewer-panel-manager-service":"egTXY","spinal-env-viewer-panel-manager-service_spinalforgeextention":"fYcpE","spinal-env-viewer-context-menu-service":"3h19D","./vue/addDevices.vue":"kkQEY","./vue/addDeviceProfiles.vue":"eihl9","./vue/itemList.vue":"FlcsI","./vue/ItemDetail.vue":"iC136","./vue/monitoringDetails.vue":"jH2lY","./vue/itemSupervision.vue":"8HX5y","./vue/globalSupervision.vue":"gmKW9","./vue/ShowBacnetValue.vue":"7RsNI","./vue/updateDeviceProfile.vue":"heSqR","./buttons/ButtonAddDeviceProfileContext":"aPv6v","./buttons/ButtonAddDeviceProfiles":"lx2xO","./buttons/ButtonAddDevices":"icY8G","./buttons/ButtonDisplayXMLFile":"9R4rJ","./buttons/ButtonGenerateDeviceGraph":"g3Uaa","./buttons/ButtonItemList":"1K5EZ","./buttons/ButtonItemDetail":"S5MUm","./buttons/ButtonSaveProfileAsJson":"jXBxP","./buttons/ButtonMonitoringConfiguration":"8mTbk","./buttons/ButtonItemSupervision":"OzkMI","./buttons/ButtonGlobalSupervision":"9oppn","./buttons/ButtonGenerateDeviceGraphFromDiscovery":"lDRsF","./buttons/ButtonUpdateProfileGenerated":"5TMbj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"egTXY":[function(require,module,exports,__globalThis) {
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

},{}],"fYcpE":[function(require,module,exports,__globalThis) {
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

},{}],"kkQEY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("6fc2116cd1028f29");
    if (script.__esModule) script = script.default;
    script.render = require("88fd1f67f96321cd").render;
    script.staticRenderFns = require("88fd1f67f96321cd").staticRenderFns;
    script._scopeId = "data-v-559772";
    script.__cssModules = require("bb60b98095020f65").default;
    require("e01e91ef773d855").default(script);
    script.__scopeId = 'data-v-559772';
    script.__file = "addDevices.vue";
};
initialize();
exports.default = script;

},{"6fc2116cd1028f29":"g6ZXs","88fd1f67f96321cd":"fnawR","bb60b98095020f65":"kjAeP","e01e91ef773d855":"5pBeb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g6ZXs":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","bfa6e76c77c3189b":"dXUyc","71648ea7bcc10d87":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hLZpu":[function(require,module,exports,__globalThis) {
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
            prom.push(node2.addChildInContext(n, childNodeConfig[0], 'PtrLst', context2));
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
            prom.push(n.addChildInContext(grandChildNode, rel2, 'PtrLst', context2));
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
        let relationName = '';
        let typeName = '';
        let name = '';
        let grandChildRelation = '';
        let resTab = [];
        switch(combine){
            case "analog_value-BmsEndpointGroup":
                relationName = "hasAnalogValues";
                typeName = 'analogValues';
                name = 'Analog Values';
                grandChildRelation = 'hasAnalogValue';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "analog_input-BmsEndpointGroup":
                relationName = 'hasAnalogInputs';
                typeName = 'analogInputs';
                name = 'Analog Input';
                grandChildRelation = 'hasAnalogInput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "analog_output-BmsEndpointGroup":
                relationName = "hasAnalogOutputs";
                typeName = 'analogOutputs';
                name = 'Analog Output';
                grandChildRelation = 'hasAnalogOutput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_output-BmsEndpointGroup":
                relationName = "hasMultiStateOutputs";
                typeName = 'multiStateOutputs';
                name = 'Multi State Output';
                grandChildRelation = 'hasMultiStateOutput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_input-BmsEndpointGroup":
                relationName = "hasMultiStateInputs";
                typeName = 'multiStateInputs';
                name = 'Multi State Input';
                grandChildRelation = 'hasMultiStateInput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "multi_state_value-BmsEndpointGroup":
                relationName = "hasMultiStateValues";
                typeName = 'multiStateValues';
                name = 'Multi-State Value';
                grandChildRelation = 'hasMultiStateValue';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_value-BmsEndpointGroup":
                relationName = "hasBinaryValues";
                typeName = 'binaryValues';
                name = 'Binary Values';
                grandChildRelation = 'hasBinaryValue';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_output-BmsEndpointGroup":
                relationName = "hasBinaryOutputs";
                typeName = 'binaryOutputs';
                name = 'Binary Output';
                grandChildRelation = 'hasBinaryOutput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "binary_input-BmsEndpointGroup":
                relationName = "hasBinaryInputs";
                typeName = 'binaryInputs';
                name = 'Binary Input';
                grandChildRelation = 'hasBinaryInput';
                resTab.push(relationName, typeName, name, grandChildRelation);
                break;
            case "network_value-BmsEndpointGroup":
                relationName = "hasNetworkValues";
                typeName = 'networkValues';
                name = 'Network Values';
                grandChildRelation = 'hasNetworkValue';
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
        var link = document.createElement('a');
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
        var link = document.createElement('a');
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
                case 'networkValues':
                    tempTab = tab.NetworkValue;
                    title = "NV_";
                    break;
                case 'analogValues':
                    tempTab = tab.AnalogValue;
                    title = "AV_";
                    break;
                case 'binaryValues':
                    tempTab = tab.BinaryValue;
                    title = "BV_";
                    break;
                case 'multiStateValues':
                    tempTab = tab.MultiStateValue;
                    title = "MSV_";
                    break;
                case 'analogInputs':
                    tempTab = tab.AnalogInput;
                    title = "AI_";
                    break;
                case 'analogOutputs':
                    tempTab = tab.AnalogOutput;
                    title = "AO_";
                    break;
                case 'binaryInputs':
                    tempTab = tab.BinaryInput;
                    title = "BI_";
                    break;
                case 'multiStateInputs':
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
                let prefix = item_name.split('_')[0];
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
        let titleReturned = '';
        title = title[0].toUpperCase() + title.slice(1);
        for(let i = 0; i < title.length; i++)if (title[i] === title[i].toUpperCase() && title[i] !== title[i].toLowerCase()) titleReturned += title[i];
        titleReturned += '_';
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
                if (bacnetType.info.type != 'networkValues') {
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

},{"32c014467e0b6cde":"1A32E","axios":"kooH4","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-env-viewer-graph-service":"9LAk7","../constants":"QRW6U","spinal-env-viewer-plugin-event-emitter":"8ZmYI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"QRW6U":[function(require,module,exports,__globalThis) {
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
parcelHelpers.export(exports, "endpointTypes", ()=>endpointTypes);
parcelHelpers.export(exports, "bacnetGroupInfo", ()=>bacnetGroupInfo);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const DEVICE_RELATION_NAME = 'hasDevice';
const DEVICE_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
const DEVICE_PROFILES_TYPE = "deviceProfile";
const DEVICE_TYPE = "device";
const PART_RELATION_NAME = 'hasParts';
const PART_RELATION_TYPE = (0, _spinalEnvViewerGraphService.SPINAL_RELATION_LST_PTR_TYPE);
const endpointTypes = Object.freeze({
    0: "Analog Input",
    1: "Analog Output",
    2: "Analog Values",
    3: "Binary Input",
    4: "Binary Output",
    5: "Binary Values",
    13: "Multi State Input",
    14: "Multi State Output",
    19: "Multi-State Value",
    55: "Binary Lighting output"
});
const bacnetGroupInfo = Object.freeze({
    "Analog Input": {
        id: 0,
        nodeType: "analogInputs",
        childType: "analogInput",
        parentRelationName: "hasAnalogInputs",
        childRelationName: "hasAnalogInput"
    },
    "Analog Output": {
        id: 1,
        nodeType: "analogOutputs",
        childType: "analogOutput",
        parentRelationName: "hasAnalogOutputs",
        childRelationName: "hasAnalogOutput"
    },
    "Analog Values": {
        id: 2,
        nodeType: "analogValues",
        childType: "analogValue",
        parentRelationName: "hasAnalogValues",
        childRelationName: "hasAnalogValue"
    },
    "Binary Input": {
        id: 3,
        nodeType: "binaryInputs",
        childType: "binaryInput",
        parentRelationName: "hasBinaryInputs",
        childRelationName: "hasBinaryInput"
    },
    "Binary Output": {
        id: 4,
        nodeType: "binaryOutputs",
        childType: "binaryOutput",
        parentRelationName: "hasBinaryOutputs",
        childRelationName: "hasBinaryOutput"
    },
    "Binary Values": {
        id: 5,
        nodeType: "binaryValues",
        childType: "binaryValue",
        parentRelationName: "hasBinaryValues",
        childRelationName: "hasBinaryValue"
    },
    "Multi State Input": {
        id: 13,
        nodeType: "multiStateInputs",
        childType: "multiStateInput",
        parentRelationName: "hasMultiStateInputs",
        childRelationName: "hasMultiStateInput"
    },
    "Multi State Output": {
        id: 14,
        nodeType: "multiStateOutputs",
        childType: "multiStateOutput",
        parentRelationName: "hasMultiStateOutputs",
        childRelationName: "hasMultiStateOutput"
    },
    "Multi-State Value": {
        id: 19,
        nodeType: "multiStateValues",
        childType: "multiStateValue",
        parentRelationName: "hasMultiStateValues",
        childRelationName: "hasMultiStateValue"
    },
    "Binary Lighting output": {
        id: 55,
        nodeType: "binaryLightingOutputs",
        childType: "binaryLightingOutput",
        parentRelationName: "hasBinaryLightingOutputs",
        childRelationName: "hasBinaryLightingOutput"
    }
}); // export const spinalNodeTypes = Object.freeze({
 //     "Analog Input": "analogInput",
 //     "Analog Output": "analogOutput",
 //     "Analog Values": "analogValues",
 //     "Binary Input": "binaryInput",
 //     "Binary Output": "binaryOutput",
 //     "Binary Values": "binaryValues",
 //     "Multi State Input": "multiStateInput",
 //     "Multi State Output": "multiStateOutput",
 //     "Multi-State Value": "multiStateValue",
 //     "Binary Lighting Output": "binaryLightingOutput",
 // })
 // export const relationNames = Object.freeze({
 //     "Analog Input": "hasAnalogInput",
 //     "Analog Output": "hasAnalogOutput",
 //     "Analog Values": "hasAnalogValues",
 //     "Binary Input": "hasBinaryInput",
 //     "Binary Output": "hasBinaryOutput",
 //     "Binary Values": "hasBinaryValues",
 //     "Multi State Input": "hasMultiStateInput",
 //     "Multi State Output": "hasMultiStateOutput",
 //     "Multi-State Value": "hasMultiStateValue",
 //     "Binary Lighting Output": "hasBinaryLightingOutput",
 // })
 // export const groupNamesToIds = Object.freeze({
 //     "Analog Input": 0,
 //     "Analog Output": 1,
 //     "Analog Values": 2,
 //     "Binary Input": 3,
 //     "Binary Output": 4,
 //     "Binary Values": 5,
 //     "Multi State Input": 13,
 //     "Multi State Output": 14,
 //     "Multi-State Value": 19,
 //     "Binary Lighting Output": 55
 // });

},{"spinal-env-viewer-graph-service":"9LAk7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5b6J":[function(require,module,exports,__globalThis) {
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
            let node = await selectedNode.addChild(myDirectory, 'hasFiles', (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE));
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
                    responseEncoding: 'utf8'
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
                            for(var i in strSplit)if (strSplit[i] != "baja:String" && strSplit[i] != 'iconName' && strSplit[i].includes("$") == false) {
                                // récupération du nom de la variable d'entrée / sortie
                                ioName = strSplit[i];
                                // récupération du type et de l'id de la variable d'entrée sortie
                                var ioValueStr = strSplit[parseInt(i) + 1];
                                var ioValueSplitted = ioValueStr.split('$3a');
                                if (ioValueSplitted[0] == 'nv' || ioValueSplitted[0] == 'bv' || ioValueSplitted[0] == 'av' || ioValueSplitted[0] == 'mv') {
                                    ioType = ioValueSplitted[0];
                                    var ioFull = ioValueSplitted;
                                    if (ioValueSplitted[1] == parseInt(ioValueSplitted[1])) ioIdx = ioValueSplitted[1];
                                    else if (ioValueSplitted[1].includes('$3be')) ioIdx = ioValueSplitted[1].split('$3be')[0];
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
                        var usedStringSplitted = usedString.split(';');
                        for(var elementinSplitted in usedStringSplitted){
                            if (elementinSplitted != usedStringSplitted.length - 1) {
                                if (usedStringSplitted[parseInt(elementinSplitted) + 1].includes("$3a") == true) {
                                    ioName = usedStringSplitted[elementinSplitted];
                                    ioTemp = usedStringSplitted[parseInt(elementinSplitted) + 1].split("$3a");
                                    if (ioTemp[0] == "nv" || ioTemp[0] == "bv" || ioTemp[0] == "av" || ioTemp[0] == "mv") {
                                        ioType = ioTemp[0];
                                        ioIdx = ioTemp[1].split('$3be')[0];
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-models-documentation":"fpBvO","spinal-core-connectorjs_type":"1A32E","./build/DeviceHelper":"hLZpu","spinal-model-graph":"b87gp","fs":"eoH60","72a4c164429e014b":"dXUyc","10e04e0f3d4fda36":"kooH4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"dXUyc":[function(require,module,exports,__globalThis) {
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

},{"7ea326df427f014c":"hFR3Z","115692d66e5bd90b":"11l2Y","259cca7c8022cb30":"dKATf","4d88504c3e73ae8e":"bXwqK"}],"hFR3Z":[function(require,module,exports,__globalThis) {
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
            childkey: '@@',
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            emptyTag: ''
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
            childkey: '$$',
            charsAsChildren: false,
            includeWhiteChars: false,
            async: false,
            strict: true,
            attrNameProcessors: null,
            attrValueProcessors: null,
            tagNameProcessors: null,
            valueProcessors: null,
            rootName: 'root',
            xmldec: {
                'version': '1.0',
                'encoding': 'UTF-8',
                'standalone': true
            },
            doctype: null,
            renderOpts: {
                'pretty': true,
                'indent': '  ',
                'newline': '\n'
            },
            headless: false,
            chunkSize: 10000,
            emptyTag: '',
            cdata: false
        }
    };
}).call(this);

},{}],"11l2Y":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
    builder = require("ad623f14adf9b5ff");
    defaults = require("1257d11f8d203f5b").defaults;
    requiresCDATA = function(entry) {
        return typeof entry === "string" && (entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0);
    };
    wrapCDATA = function(entry) {
        return "<![CDATA[" + escapeCDATA(entry) + "]]>";
    };
    escapeCDATA = function(entry) {
        return entry.replace(']]>', ']]]]><![CDATA[>');
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
            if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults['0.2'].rootName) {
                rootName = Object.keys(rootObj)[0];
                rootObj = rootObj[rootName];
            } else rootName = this.options.rootName;
            render = function(_this) {
                return function(element, obj) {
                    var attr, child, entry, index, key, value;
                    if (typeof obj !== 'object') {
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
                            if (typeof entry === 'string') {
                                if (_this.options.cdata && requiresCDATA(entry)) element = element.ele(key).raw(wrapCDATA(entry)).up();
                                else element = element.ele(key, entry).up();
                            } else element = render(element.ele(key), entry).up();
                        }
                        else if (typeof child === "object") element = render(element.ele(key), child).up();
                        else if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) element = element.ele(key).raw(wrapCDATA(child)).up();
                        else {
                            if (child == null) child = '';
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

},{"ad623f14adf9b5ff":"aEllt","1257d11f8d203f5b":"hFR3Z"}],"aEllt":[function(require,module,exports,__globalThis) {
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

},{"2647794ec6919cf8":"oPE1y","204f3257bd042cb8":"10F4q","1984b650bfe70c70":"2vEyf","9dbd1ebdb6a95fc3":"iUsqk","69100afb0dfc47f2":"dtUps","fd0f26d6534ce99d":"j1h1W","fcf823ff2587a9f2":"lofe7","bba57db33f4cadd6":"dKHRJ"}],"oPE1y":[function(require,module,exports,__globalThis) {
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
        return !!val && Object.prototype.toString.call(val) === '[object Function]';
    };
    isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === 'function' || ref === 'object');
    };
    isArray = function(val) {
        if (isFunction(Array.isArray)) return Array.isArray(val);
        else return Object.prototype.toString.call(val) === '[object Array]';
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
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === 'function' && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
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

},{}],"10F4q":[function(require,module,exports,__globalThis) {
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

},{}],"2vEyf":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLDocument.prototype, 'implementation', {
            value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument.prototype, 'doctype', {
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
        Object.defineProperty(XMLDocument.prototype, 'documentElement', {
            get: function() {
                return this.rootObject || null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'inputEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'strictErrorChecking', {
            get: function() {
                return false;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlEncoding', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].encoding;
                else return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlStandalone', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].standalone === 'yes';
                else return false;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'xmlVersion', {
            get: function() {
                if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].version;
                else return "1.0";
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'URL', {
            get: function() {
                return this.documentURI;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'origin', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'compatMode', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'characterSet', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDocument.prototype, 'contentType', {
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

},{"13a5a3baabce41d8":"oPE1y","b6961c96ff36d753":"10F4q","1f23d28cae8a60a5":"lEUy6","cd39268a029bdce2":"9sGlG","ee7140c760116731":"lofe7","f050dc0a62284d96":"3TdvJ","1c368e88d7130ef6":"dtUps"}],"lEUy6":[function(require,module,exports,__globalThis) {
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
                "schema-location": '',
                "schema-type": '',
                "split-cdata-sections": true,
                "validate": false,
                "well-formed": true
            };
            this.params = clonedSelf = Object.create(this.defaultParams);
        }
        Object.defineProperty(XMLDOMConfiguration.prototype, 'parameterNames', {
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

},{"c72a8151611a34e9":"hfTyF","6710741fe0d16dae":"1tl8t"}],"hfTyF":[function(require,module,exports,__globalThis) {
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

},{}],"1tl8t":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLDOMStringList;
    module.exports = XMLDOMStringList = function() {
        function XMLDOMStringList(arr) {
            this.arr = arr || [];
        }
        Object.defineProperty(XMLDOMStringList.prototype, 'length', {
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

},{}],"9sGlG":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLNode.prototype, 'nodeName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nodeType', {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nodeValue', {
            get: function() {
                return this.value;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'parentNode', {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'childNodes', {
            get: function() {
                if (!this.childNodeList || !this.childNodeList.nodes) this.childNodeList = new XMLNodeList(this.children);
                return this.childNodeList;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'firstChild', {
            get: function() {
                return this.children[0] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'lastChild', {
            get: function() {
                return this.children[this.children.length - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'previousSibling', {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i - 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'nextSibling', {
            get: function() {
                var i;
                i = this.parent.children.indexOf(this);
                return this.parent.children[i + 1] || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'ownerDocument', {
            get: function() {
                return this.document() || null;
            }
        });
        Object.defineProperty(XMLNode.prototype, 'textContent', {
            get: function() {
                var child, j, len, ref2, str;
                if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
                    str = '';
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

},{"704f24b4c9ed0254":"oPE1y","bb9f43b93220ad7a":"4gGIg","4c7d896cb6b56d63":"bUkAi","91ed1f62eb89b645":"cl88O","f449ccd8348c817c":"1fUcu","8ee4082395714d35":"h5fcb","f9c5b1d6679a33d5":"5KZvJ","65d90f77c6196668":"8ljvD","8e2e2e7d9c99b0f1":"iF9SP","f80ef020b5f168cc":"3dlJw","7c33a03644563158":"lofe7","ff2b0673a3f10f56":"fpyV9","dbaafd3117e37a72":"biYOi","6214827e72f53399":"8UW5O"}],"4gGIg":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLElement.prototype, 'tagName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, 'namespaceURI', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLElement.prototype, 'prefix', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLElement.prototype, 'localName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLElement.prototype, 'id', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'className', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'classList', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLElement.prototype, 'attributes', {
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

},{"760e1e681b3efb5e":"oPE1y","b30d72617b2d0e":"9sGlG","b548af19154e188f":"lofe7","91ce844474972b76":"dIJ0m","1a2db5acef6e9ab2":"biYOi"}],"lofe7":[function(require,module,exports,__globalThis) {
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

},{}],"dIJ0m":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLAttribute.prototype, 'nodeType', {
            get: function() {
                return this.type;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'ownerElement', {
            get: function() {
                return this.parent;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'textContent', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'namespaceURI', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'prefix', {
            get: function() {
                return '';
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'localName', {
            get: function() {
                return this.name;
            }
        });
        Object.defineProperty(XMLAttribute.prototype, 'specified', {
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

},{"2ac94b791509906a":"lofe7","4460ed8c305de0cc":"9sGlG"}],"biYOi":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNamedNodeMap;
    module.exports = XMLNamedNodeMap = function() {
        function XMLNamedNodeMap(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNamedNodeMap.prototype, 'length', {
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

},{}],"bUkAi":[function(require,module,exports,__globalThis) {
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

},{"1d10efe8d12710ca":"lofe7","da41985d18d84bf2":"6zZOM"}],"6zZOM":[function(require,module,exports,__globalThis) {
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
            this.value = '';
        }
        Object.defineProperty(XMLCharacterData.prototype, 'data', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, 'length', {
            get: function() {
                return this.value.length;
            }
        });
        Object.defineProperty(XMLCharacterData.prototype, 'textContent', {
            get: function() {
                return this.value;
            },
            set: function(value) {
                return this.value = value || '';
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

},{"d99443ca7fe2d67d":"9sGlG"}],"cl88O":[function(require,module,exports,__globalThis) {
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

},{"b0dbe926c1622528":"lofe7","d18aaaf3ab58e603":"6zZOM"}],"1fUcu":[function(require,module,exports,__globalThis) {
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
            if (!version) version = '1.0';
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

},{"cf2a3ddbe00c2bec":"oPE1y","b70b0f72196be228":"9sGlG","7910f9e4e0ec2b8c":"lofe7"}],"h5fcb":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLDocType.prototype, 'entities', {
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
        Object.defineProperty(XMLDocType.prototype, 'notations', {
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
        Object.defineProperty(XMLDocType.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'systemId', {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDocType.prototype, 'internalSubset', {
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

},{"2d96570e9ce5a61a":"oPE1y","10eff02d526f1f13":"9sGlG","9167240c545a1251":"lofe7","364c364aa3224d14":"4QYTv","f24de147ed1d6fb5":"3C23Q","a588b70eba73aefb":"bRBQc","6f9e9e9353c73e81":"3iAyL","dbb2e06d6fd270ad":"biYOi"}],"4QYTv":[function(require,module,exports,__globalThis) {
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
            if (defaultValueType.indexOf('#') !== 0) defaultValueType = '#' + defaultValueType;
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

},{"e63acd90dbde9d27":"9sGlG","e38e2d5ce2a0a55":"lofe7"}],"3C23Q":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLDTDEntity.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'systemId', {
            get: function() {
                return this.sysID;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'notationName', {
            get: function() {
                return this.nData || null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'inputEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'xmlEncoding', {
            get: function() {
                return null;
            }
        });
        Object.defineProperty(XMLDTDEntity.prototype, 'xmlVersion', {
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

},{"6b00c2638d6cff6e":"oPE1y","5619e8138a9444ca":"9sGlG","2e642c53b1846a5e":"lofe7"}],"bRBQc":[function(require,module,exports,__globalThis) {
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
            if (!value) value = '(#PCDATA)';
            if (Array.isArray(value)) value = '(' + value.join(',') + ')';
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

},{"58f833e8788221ff":"9sGlG","bd936b22ecaf9e3e":"lofe7"}],"3iAyL":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLDTDNotation.prototype, 'publicId', {
            get: function() {
                return this.pubID;
            }
        });
        Object.defineProperty(XMLDTDNotation.prototype, 'systemId', {
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

},{"30e258c5f358ba86":"9sGlG","3458890a6746c52e":"lofe7"}],"5KZvJ":[function(require,module,exports,__globalThis) {
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

},{"dcd9ea319a520167":"lofe7","47e90ce7f40a2f89":"9sGlG"}],"8ljvD":[function(require,module,exports,__globalThis) {
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
        Object.defineProperty(XMLText.prototype, 'isElementContentWhitespace', {
            get: function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
        });
        Object.defineProperty(XMLText.prototype, 'wholeText', {
            get: function() {
                var next, prev, str;
                str = '';
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

},{"e16b55d7b9ae6110":"lofe7","6951a1495b9b2aef":"6zZOM"}],"iF9SP":[function(require,module,exports,__globalThis) {
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

},{"dc0d646c907512fa":"lofe7","3417ec217a826ec8":"6zZOM"}],"3dlJw":[function(require,module,exports,__globalThis) {
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
            return '';
        };
        return XMLDummy;
    }(XMLNode);
}).call(this);

},{"a213921cd91c2245":"9sGlG","47cd197d16eee265":"lofe7"}],"fpyV9":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    var XMLNodeList;
    module.exports = XMLNodeList = function() {
        function XMLNodeList(nodes) {
            this.nodes = nodes;
        }
        Object.defineProperty(XMLNodeList.prototype, 'length', {
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

},{}],"8UW5O":[function(require,module,exports,__globalThis) {
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

},{}],"3TdvJ":[function(require,module,exports,__globalThis) {
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
            if (!this.options.version) this.options.version = '1.0';
            ref = options.stringify || {};
            for(key in ref){
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
            }
        }
        XMLStringifier.prototype.name = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalName('' + val || '');
        };
        XMLStringifier.prototype.text = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar(this.textEscape('' + val || ''));
        };
        XMLStringifier.prototype.cdata = function(val) {
            if (this.options.noValidation) return val;
            val = '' + val || '';
            val = val.replace(']]>', ']]]]><![CDATA[>');
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.comment = function(val) {
            if (this.options.noValidation) return val;
            val = '' + val || '';
            if (val.match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + val);
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.raw = function(val) {
            if (this.options.noValidation) return val;
            return '' + val || '';
        };
        XMLStringifier.prototype.attValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar(this.attEscape(val = '' + val || ''));
        };
        XMLStringifier.prototype.insTarget = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.insValue = function(val) {
            if (this.options.noValidation) return val;
            val = '' + val || '';
            if (val.match(/\?>/)) throw new Error("Invalid processing instruction value: " + val);
            return this.assertLegalChar(val);
        };
        XMLStringifier.prototype.xmlVersion = function(val) {
            if (this.options.noValidation) return val;
            val = '' + val || '';
            if (!val.match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + val);
            return val;
        };
        XMLStringifier.prototype.xmlEncoding = function(val) {
            if (this.options.noValidation) return val;
            val = '' + val || '';
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
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdSysID = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdElementValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdAttType = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdAttDefault = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdEntityValue = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.dtdNData = function(val) {
            if (this.options.noValidation) return val;
            return this.assertLegalChar('' + val || '');
        };
        XMLStringifier.prototype.convertAttKey = '@';
        XMLStringifier.prototype.convertPIKey = '?';
        XMLStringifier.prototype.convertTextKey = '#text';
        XMLStringifier.prototype.convertCDataKey = '#cdata';
        XMLStringifier.prototype.convertCommentKey = '#comment';
        XMLStringifier.prototype.convertRawKey = '#raw';
        XMLStringifier.prototype.assertLegalChar = function(str) {
            var regex, res;
            if (this.options.noValidation) return str;
            regex = '';
            if (this.options.version === '1.0') {
                regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
                if (res = str.match(regex)) throw new Error("Invalid character in string: " + str + " at index " + res.index);
            } else if (this.options.version === '1.1') {
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
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
        };
        XMLStringifier.prototype.attEscape = function(str) {
            var ampregex;
            if (this.options.noValidation) return str;
            ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
            return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
        };
        return XMLStringifier;
    }();
}).call(this);

},{}],"dtUps":[function(require,module,exports,__globalThis) {
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
            r = '';
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

},{"9d52dc0ac6724da0":"eBSN4"}],"eBSN4":[function(require,module,exports,__globalThis) {
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
            filteredOptions.indent = (ref = options.indent) != null ? ref : '  ';
            filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : '\n';
            filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
            filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
            filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : '';
            if (filteredOptions.spaceBeforeSlash === true) filteredOptions.spaceBeforeSlash = ' ';
            filteredOptions.suppressPrettyCount = 0;
            filteredOptions.user = {};
            filteredOptions.state = WriterState.None;
            return filteredOptions;
        };
        XMLWriterBase.prototype.indent = function(node, options, level) {
            var indentLevel;
            if (!options.pretty || options.suppressPrettyCount) return '';
            else if (options.pretty) {
                indentLevel = (level || 0) + options.offset + 1;
                if (indentLevel > 0) return new Array(indentLevel).join(options.indent);
            }
            return '';
        };
        XMLWriterBase.prototype.endline = function(node, options, level) {
            if (!options.pretty || options.suppressPrettyCount) return '';
            else return options.newline;
        };
        XMLWriterBase.prototype.attribute = function(att, options, level) {
            var r;
            this.openAttribute(att, options, level);
            r = ' ' + att.name + '="' + att.value + '"';
            this.closeAttribute(att, options, level);
            return r;
        };
        XMLWriterBase.prototype.cdata = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<![CDATA[';
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += ']]>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.comment = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!-- ';
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += ' -->' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.declaration = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<?xml';
            options.state = WriterState.InsideTag;
            r += ' version="' + node.version + '"';
            if (node.encoding != null) r += ' encoding="' + node.encoding + '"';
            if (node.standalone != null) r += ' standalone="' + node.standalone + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '?>';
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
            r += '<!DOCTYPE ' + node.root().name;
            if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
            if (node.children.length > 0) {
                r += ' [';
                r += this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(i = 0, len = ref.length; i < len; i++){
                    child = ref[i];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += ']';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>';
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
            level || (level = 0);
            prettySuppressed = false;
            r = '';
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r += this.indent(node, options, level) + '<' + node.name;
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                r += this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
            })) {
                if (options.allowEmpty) {
                    r += '>';
                    options.state = WriterState.CloseTag;
                    r += '</' + node.name + '>' + this.endline(node, options, level);
                } else {
                    options.state = WriterState.CloseTag;
                    r += options.spaceBeforeSlash + '/>' + this.endline(node, options, level);
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                r += '>';
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                r += this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                r += '</' + node.name + '>' + this.endline(node, options, level);
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
                r += '>' + this.endline(node, options, level);
                options.state = WriterState.InsideTag;
                ref2 = node.children;
                for(j = 0, len1 = ref2.length; j < len1; j++){
                    child = ref2[j];
                    r += this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                r += this.indent(node, options, level) + '</' + node.name + '>';
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
                    return '';
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
            r = this.indent(node, options, level) + '<?';
            options.state = WriterState.InsideTag;
            r += node.target;
            if (node.value) r += ' ' + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '?>';
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
            r = this.indent(node, options, level) + '<!ATTLIST';
            options.state = WriterState.InsideTag;
            r += ' ' + node.elementName + ' ' + node.attributeName + ' ' + node.attributeType;
            if (node.defaultValueType !== '#DEFAULT') r += ' ' + node.defaultValueType;
            if (node.defaultValue) r += ' "' + node.defaultValue + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdElement = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!ELEMENT';
            options.state = WriterState.InsideTag;
            r += ' ' + node.name + ' ' + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdEntity = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!ENTITY';
            options.state = WriterState.InsideTag;
            if (node.pe) r += ' %';
            r += ' ' + node.name;
            if (node.value) r += ' "' + node.value + '"';
            else {
                if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
                if (node.nData) r += ' NDATA ' + node.nData;
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
        };
        XMLWriterBase.prototype.dtdNotation = function(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + '<!NOTATION';
            options.state = WriterState.InsideTag;
            r += ' ' + node.name;
            if (node.pubID && node.sysID) r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            else if (node.pubID) r += ' PUBLIC "' + node.pubID + '"';
            else if (node.sysID) r += ' SYSTEM "' + node.sysID + '"';
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + '>' + this.endline(node, options, level);
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

},{"75817c14e3dd56ca":"oPE1y","d6d53251a09a6ee1":"lofe7","9730194a8c0c4783":"1fUcu","ede7c141272b1dd5":"h5fcb","a57838031903ea3f":"bUkAi","f7ead1ad3653d490":"cl88O","dcc173f9e43bfc0a":"4gGIg","349c9f4a67644a6d":"5KZvJ","6db0cc37b41855c3":"8ljvD","167c0e9fd7f100e6":"iF9SP","15cae005a9a3ed5a":"3dlJw","ce8d6b343d31d749":"4QYTv","2cddea69d2f73295":"bRBQc","5bcc55fbd5532354":"3C23Q","8beeee48423bc83":"3iAyL","dd94c2394fe6b644":"dKHRJ"}],"dKHRJ":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    module.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
    };
}).call(this);

},{}],"iUsqk":[function(require,module,exports,__globalThis) {
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
                root = new XMLDocument(this.options).element('TEMP_ROOT');
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
                chunk = '';
                if (node.type === NodeType.Element) {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<' + node.name;
                    ref1 = node.attribs;
                    for(name in ref1){
                        if (!hasProp.call(ref1, name)) continue;
                        att = ref1[name];
                        chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
                    }
                    chunk += (node.children ? '>' : '/>') + this.writer.endline(node, this.writerOptions, this.currentLevel);
                    this.writerOptions.state = WriterState.InsideTag;
                } else {
                    this.writerOptions.state = WriterState.OpenTag;
                    chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '<!DOCTYPE ' + node.rootNodeName;
                    if (node.pubID && node.sysID) chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                    else if (node.sysID) chunk += ' SYSTEM "' + node.sysID + '"';
                    if (node.children) {
                        chunk += ' [';
                        this.writerOptions.state = WriterState.InsideTag;
                    } else {
                        this.writerOptions.state = WriterState.CloseTag;
                        chunk += '>';
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
                chunk = '';
                this.writerOptions.state = WriterState.CloseTag;
                if (node.type === NodeType.Element) chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + '</' + node.name + '>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
                else chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + ']>' + this.writer.endline(node, this.writerOptions, this.currentLevel);
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

},{"4a0b6b137d547786":"oPE1y","97c418eb43415d1":"lofe7","bbdde255e9b44c2a":"2vEyf","7caa93eaeb2c96a7":"4gGIg","e6175a20b2232a77":"bUkAi","b035b3e1bd26442f":"cl88O","526deec19abea5fe":"5KZvJ","55ab1233b224d930":"8ljvD","d22472ac05d87f1c":"iF9SP","39cdad257f5d6100":"1fUcu","9cbc536e76baf6e7":"h5fcb","f30e4e8b2fd7fcd0":"4QYTv","191528b53de83946":"3C23Q","1817e86507e2f1b4":"bRBQc","26d62c2b781ea9d6":"3iAyL","8e92d10ad0cfdf87":"dIJ0m","d654416cbe0a799d":"3TdvJ","bb156ac07b50c66a":"dtUps","ba39b9e659007a91":"dKHRJ"}],"j1h1W":[function(require,module,exports,__globalThis) {
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
            if (node.isLastRootNode && options.state === WriterState.CloseTag) return '';
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
            this.stream.write('<!DOCTYPE ' + node.root().name);
            if (node.pubID && node.sysID) this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            else if (node.sysID) this.stream.write(' SYSTEM "' + node.sysID + '"');
            if (node.children.length > 0) {
                this.stream.write(' [');
                this.stream.write(this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref = node.children;
                for(j = 0, len = ref.length; j < len; j++){
                    child = ref[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write(']');
            }
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + '>');
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
        };
        XMLStreamWriter.prototype.element = function(node, options, level) {
            var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level) + '<' + node.name);
            ref = node.attribs;
            for(name in ref){
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                this.attribute(att, options, level);
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
                return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === '';
            })) {
                if (options.allowEmpty) {
                    this.stream.write('>');
                    options.state = WriterState.CloseTag;
                    this.stream.write('</' + node.name + '>');
                } else {
                    options.state = WriterState.CloseTag;
                    this.stream.write(options.spaceBeforeSlash + '/>');
                }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
                this.stream.write('>');
                options.state = WriterState.InsideTag;
                options.suppressPrettyCount++;
                prettySuppressed = true;
                this.writeChildNode(firstChildNode, options, level + 1);
                options.suppressPrettyCount--;
                prettySuppressed = false;
                options.state = WriterState.CloseTag;
                this.stream.write('</' + node.name + '>');
            } else {
                this.stream.write('>' + this.endline(node, options, level));
                options.state = WriterState.InsideTag;
                ref1 = node.children;
                for(j = 0, len = ref1.length; j < len; j++){
                    child = ref1[j];
                    this.writeChildNode(child, options, level + 1);
                }
                options.state = WriterState.CloseTag;
                this.stream.write(this.indent(node, options, level) + '</' + node.name + '>');
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

},{"2724c4fa3231a13e":"lofe7","b06c90945fd90755":"eBSN4","f344b6746962647f":"dKHRJ"}],"dKATf":[function(require,module,exports,__globalThis) {
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
                    this.remaining = '';
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
                    if (isEmpty(obj)) obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
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
                    if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === 'object') {
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
                        if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            charChild = {
                                '#name': '__text__'
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
                if (str.trim() === '') {
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
                    this.emit('error', err);
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
            if (typeof b === 'function') cb = b;
            if (typeof a === 'object') options = a;
        } else {
            if (typeof a === 'function') cb = a;
            options = {};
        }
        parser = new exports.Parser(options);
        return parser.parseString(str, cb);
    };
    exports.parseStringPromise = function(str, a) {
        var options, parser;
        if (typeof a === 'object') options = a;
        parser = new exports.Parser(options);
        return parser.parseStringPromise(str);
    };
}).call(this);

},{"13410777db2f54ad":"28mj7","d9a5d36551474a58":"1Gpx3","8551b3c8f0063f8b":"7pzB6","7ac38f981f246dd7":"bXwqK","524970f650843682":"4WXpF","657f91eda6e269d2":"hFR3Z"}],"28mj7":[function(require,module,exports,__globalThis) {
var Buffer = require("e8399c94bace2e95").Buffer;
(function(sax) {
    // wrapper for non-node envs
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
        'comment',
        'sgmlDecl',
        'textNode',
        'tagName',
        'doctype',
        'procInstName',
        'procInstBody',
        'entity',
        'attribName',
        'attribValue',
        'cdata',
        'script'
    ];
    sax.EVENTS = [
        'text',
        'processinginstruction',
        'sgmldeclaration',
        'doctype',
        'comment',
        'opentagstart',
        'attribute',
        'opentag',
        'closetag',
        'opencdata',
        'cdata',
        'closecdata',
        'error',
        'end',
        'ready',
        'script',
        'opennamespace',
        'closenamespace'
    ];
    function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) return new SAXParser(strict, opt);
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = '';
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
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
        // disallow unquoted attribute values if not otherwise configured
        // and strict mode is true
        if (parser.opt.unquotedAttributeValues === undefined) parser.opt.unquotedAttributeValues = !strict;
        // mostly just for error reporting
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) parser.position = parser.line = parser.column = 0;
        emit(parser, 'onready');
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
                case 'textNode':
                    closeText(parser);
                    break;
                case 'cdata':
                    emitNode(parser, 'oncdata', parser.cdata);
                    parser.cdata = '';
                    break;
                case 'script':
                    emitNode(parser, 'onscript', parser.script);
                    parser.script = '';
                    break;
                default:
                    error(parser, 'Max buffer length exceeded: ' + buffers[i]);
            }
            maxActual = Math.max(maxActual, len);
        }
        // schedule the next check for the earliest possible buffer overrun.
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
        for(var i = 0, l = buffers.length; i < l; i++)parser[buffers[i]] = '';
    }
    function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== '') {
            emitNode(parser, 'oncdata', parser.cdata);
            parser.cdata = '';
        }
        if (parser.script !== '') {
            emitNode(parser, 'onscript', parser.script);
            parser.script = '';
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
        return ev !== 'error' && ev !== 'end';
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
            me.emit('end');
        };
        this._parser.onerror = function(er) {
            me.emit('error', er);
            // if didn't throw, then means error was handled.
            // go ahead and clear error, so we can write again.
            me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
            Object.defineProperty(me, 'on' + ev, {
                get: function() {
                    return me._parser['on' + ev];
                },
                set: function(h) {
                    if (!h) {
                        me.removeAllListeners(ev);
                        me._parser['on' + ev] = h;
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
        if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {
            if (!this._decoder) this._decoder = new TextDecoder('utf8');
            data = this._decoder.decode(data, {
                stream: true
            });
        }
        this._parser.write(data.toString());
        this.emit('data', data);
        return true;
    };
    SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) this.write(chunk);
        // Flush any remaining decoded data from the TextDecoder
        if (this._decoder) {
            var remaining = this._decoder.decode();
            if (remaining) {
                this._parser.write(remaining);
                this.emit('data', remaining);
            }
        }
        this._parser.end();
        return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) me._parser['on' + ev] = function() {
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
    var CDATA = '[CDATA[';
    var DOCTYPE = 'DOCTYPE';
    var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
    var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
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
        return c === ' ' || c === '\n' || c === '\r' || c === '\t';
    }
    function isQuote(c) {
        return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
        return c === '>' || isWhitespace(c);
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
        SCRIPT_ENDING: S++
    };
    sax.XML_ENTITIES = {
        amp: '&',
        gt: '>',
        lt: '<',
        quot: '"',
        apos: "'"
    };
    sax.ENTITIES = {
        amp: '&',
        gt: '>',
        lt: '<',
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
    };
    Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s = typeof e === 'number' ? String.fromCharCode(e) : e;
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
        if (parser.textNode) emit(parser, 'ontext', parser.textNode);
        parser.textNode = '';
    }
    function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, ' ');
        return text;
    }
    function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) er += '\nLine: ' + parser.line + '\nColumn: ' + parser.column + '\nChar: ' + parser.c;
        er = new Error(er);
        parser.error = er;
        emit(parser, 'onerror', er);
        return parser;
    }
    function end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) error(parser, 'Unexpected end');
        closeText(parser);
        parser.c = '';
        parser.closed = true;
        emit(parser, 'onend');
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
    }
    function strictFail(parser, message) {
        if (typeof parser !== 'object' || !(parser instanceof SAXParser)) throw new Error('bad call to strictFail');
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
        emitNode(parser, 'onopentagstart', tag);
    }
    function qname(name, attribute) {
        var i = name.indexOf(':');
        var qualName = i < 0 ? [
            '',
            name
        ] : name.split(':');
        var prefix = qualName[0];
        var local = qualName[1];
        // <x "xmlns"="http://foo">
        if (attribute && name === 'xmlns') {
            prefix = 'xmlns';
            local = '';
        }
        return {
            prefix: prefix,
            local: local
        };
    }
    function attrib(parser) {
        if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]();
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
            parser.attribName = parser.attribValue = '';
            return;
        }
        if (parser.opt.xmlns) {
            var qn = qname(parser.attribName, true);
            var prefix = qn.prefix;
            var local = qn.local;
            if (prefix === 'xmlns') {
                // namespace binding attribute. push the binding into scope
                if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
                else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
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
            emitNode(parser, 'onattribute', {
                name: parser.attribName,
                value: parser.attribValue
            });
        }
        parser.attribName = parser.attribValue = '';
    }
    function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
            // emit namespace binding events
            var tag = parser.tag;
            // add namespace info to tag
            var qn = qname(parser.tagName);
            tag.prefix = qn.prefix;
            tag.local = qn.local;
            tag.uri = tag.ns[qn.prefix] || '';
            if (tag.prefix && !tag.uri) {
                strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));
                tag.uri = qn.prefix;
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns && parent.ns !== tag.ns) Object.keys(tag.ns).forEach(function(p) {
                emitNode(parser, 'onopennamespace', {
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
                var uri = prefix === '' ? '' : tag.ns[prefix] || '';
                var a = {
                    name: name,
                    value: value,
                    prefix: prefix,
                    local: local,
                    uri: uri
                };
                // if there's any attributes with an undefined namespace,
                // then fail on them now.
                if (prefix && prefix !== 'xmlns' && !uri) {
                    strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));
                    a.uri = prefix;
                }
                parser.tag.attributes[name] = a;
                emitNode(parser, 'onattribute', a);
            }
            parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        // process the tag
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, 'onopentag', parser.tag);
        if (!selfClosing) {
            // special case for <script> in non-strict mode.
            if (!parser.noscript && parser.tagName.toLowerCase() === 'script') parser.state = S.SCRIPT;
            else parser.state = S.TEXT;
            parser.tag = null;
            parser.tagName = '';
        }
        parser.attribName = parser.attribValue = '';
        parser.attribList.length = 0;
    }
    function closeTag(parser) {
        if (!parser.tagName) {
            strictFail(parser, 'Weird empty close tag.');
            parser.textNode += '</>';
            parser.state = S.TEXT;
            return;
        }
        if (parser.script) {
            if (parser.tagName !== 'script') {
                parser.script += '</' + parser.tagName + '>';
                parser.tagName = '';
                parser.state = S.SCRIPT;
                return;
            }
            emitNode(parser, 'onscript', parser.script);
            parser.script = '';
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
            strictFail(parser, 'Unexpected close tag');
            else break;
        }
        // didn't find it.  we already failed for strict, so just abort.
        if (t < 0) {
            strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
            parser.textNode += '</' + parser.tagName + '>';
            parser.state = S.TEXT;
            return;
        }
        parser.tagName = tagName;
        var s = parser.tags.length;
        while(s-- > t){
            var tag = parser.tag = parser.tags.pop();
            parser.tagName = parser.tag.name;
            emitNode(parser, 'onclosetag', parser.tagName);
            var x = {};
            for(var i in tag.ns)x[i] = tag.ns[i];
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (parser.opt.xmlns && tag.ns !== parent.ns) // remove namespace bindings introduced by tag
            Object.keys(tag.ns).forEach(function(p) {
                var n = tag.ns[p];
                emitNode(parser, 'onclosenamespace', {
                    prefix: p,
                    uri: n
                });
            });
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = '';
        parser.attribList.length = 0;
        parser.state = S.TEXT;
    }
    function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = '';
        if (parser.ENTITIES[entity]) return parser.ENTITIES[entity];
        if (parser.ENTITIES[entityLC]) return parser.ENTITIES[entityLC];
        entity = entityLC;
        if (entity.charAt(0) === '#') {
            if (entity.charAt(1) === 'x') {
                entity = entity.slice(2);
                num = parseInt(entity, 16);
                numStr = num.toString(16);
            } else {
                entity = entity.slice(1);
                num = parseInt(entity, 10);
                numStr = num.toString(10);
            }
        }
        entity = entity.replace(/^0+/, '');
        if (isNaN(num) || numStr.toLowerCase() !== entity || num < 0 || num > 0x10ffff) {
            strictFail(parser, 'Invalid character entity');
            return '&' + parser.entity + ';';
        }
        return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
        if (c === '<') {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, 'Non-whitespace before first tag.');
            parser.textNode = c;
            parser.state = S.TEXT;
        }
    }
    function charAt(chunk, i) {
        var result = '';
        if (i < chunk.length) result = chunk.charAt(i);
        return result;
    }
    function write(chunk) {
        var parser = this;
        if (this.error) throw this.error;
        if (parser.closed) return error(parser, 'Cannot write after close. Assign an onready handler.');
        if (chunk === null) return end(parser);
        if (typeof chunk === 'object') chunk = chunk.toString();
        var i = 0;
        var c = '';
        while(true){
            c = charAt(chunk, i++);
            parser.c = c;
            if (!c) break;
            if (parser.trackPosition) {
                parser.position++;
                if (c === '\n') {
                    parser.line++;
                    parser.column = 0;
                } else parser.column++;
            }
            switch(parser.state){
                case S.BEGIN:
                    parser.state = S.BEGIN_WHITESPACE;
                    if (c === '\uFEFF') continue;
                    beginWhiteSpace(parser, c);
                    continue;
                case S.BEGIN_WHITESPACE:
                    beginWhiteSpace(parser, c);
                    continue;
                case S.TEXT:
                    if (parser.sawRoot && !parser.closedRoot) {
                        var starti = i - 1;
                        while(c && c !== '<' && c !== '&'){
                            c = charAt(chunk, i++);
                            if (c && parser.trackPosition) {
                                parser.position++;
                                if (c === '\n') {
                                    parser.line++;
                                    parser.column = 0;
                                } else parser.column++;
                            }
                        }
                        parser.textNode += chunk.substring(starti, i - 1);
                    }
                    if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    } else {
                        if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) strictFail(parser, 'Text data outside of root node.');
                        if (c === '&') parser.state = S.TEXT_ENTITY;
                        else parser.textNode += c;
                    }
                    continue;
                case S.SCRIPT:
                    // only non-strict
                    if (c === '<') parser.state = S.SCRIPT_ENDING;
                    else parser.script += c;
                    continue;
                case S.SCRIPT_ENDING:
                    if (c === '/') parser.state = S.CLOSE_TAG;
                    else {
                        parser.script += '<' + c;
                        parser.state = S.SCRIPT;
                    }
                    continue;
                case S.OPEN_WAKA:
                    // either a /, ?, !, or text is coming next.
                    if (c === '!') {
                        parser.state = S.SGML_DECL;
                        parser.sgmlDecl = '';
                    } else if (isWhitespace(c)) ;
                    else if (isMatch(nameStart, c)) {
                        parser.state = S.OPEN_TAG;
                        parser.tagName = c;
                    } else if (c === '/') {
                        parser.state = S.CLOSE_TAG;
                        parser.tagName = '';
                    } else if (c === '?') {
                        parser.state = S.PROC_INST;
                        parser.procInstName = parser.procInstBody = '';
                    } else {
                        strictFail(parser, 'Unencoded <');
                        // if there was some whitespace, then add that in.
                        if (parser.startTagPosition + 1 < parser.position) {
                            var pad = parser.position - parser.startTagPosition;
                            c = new Array(pad).join(' ') + c;
                        }
                        parser.textNode += '<' + c;
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.SGML_DECL:
                    if (parser.sgmlDecl + c === '--') {
                        parser.state = S.COMMENT;
                        parser.comment = '';
                        parser.sgmlDecl = '';
                        continue;
                    }
                    if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.doctype += '<!' + parser.sgmlDecl + c;
                        parser.sgmlDecl = '';
                    } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                        emitNode(parser, 'onopencdata');
                        parser.state = S.CDATA;
                        parser.sgmlDecl = '';
                        parser.cdata = '';
                    } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                        parser.state = S.DOCTYPE;
                        if (parser.doctype || parser.sawRoot) strictFail(parser, 'Inappropriately located doctype declaration');
                        parser.doctype = '';
                        parser.sgmlDecl = '';
                    } else if (c === '>') {
                        emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
                        parser.sgmlDecl = '';
                        parser.state = S.TEXT;
                    } else if (isQuote(c)) {
                        parser.state = S.SGML_DECL_QUOTED;
                        parser.sgmlDecl += c;
                    } else parser.sgmlDecl += c;
                    continue;
                case S.SGML_DECL_QUOTED:
                    if (c === parser.q) {
                        parser.state = S.SGML_DECL;
                        parser.q = '';
                    }
                    parser.sgmlDecl += c;
                    continue;
                case S.DOCTYPE:
                    if (c === '>') {
                        parser.state = S.TEXT;
                        emitNode(parser, 'ondoctype', parser.doctype);
                        parser.doctype = true // just remember that we saw it.
                        ;
                    } else {
                        parser.doctype += c;
                        if (c === '[') parser.state = S.DOCTYPE_DTD;
                        else if (isQuote(c)) {
                            parser.state = S.DOCTYPE_QUOTED;
                            parser.q = c;
                        }
                    }
                    continue;
                case S.DOCTYPE_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.q = '';
                        parser.state = S.DOCTYPE;
                    }
                    continue;
                case S.DOCTYPE_DTD:
                    if (c === ']') {
                        parser.doctype += c;
                        parser.state = S.DOCTYPE;
                    } else if (c === '<') {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    } else if (isQuote(c)) {
                        parser.doctype += c;
                        parser.state = S.DOCTYPE_DTD_QUOTED;
                        parser.q = c;
                    } else parser.doctype += c;
                    continue;
                case S.DOCTYPE_DTD_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.q = '';
                    }
                    continue;
                case S.COMMENT:
                    if (c === '-') parser.state = S.COMMENT_ENDING;
                    else parser.comment += c;
                    continue;
                case S.COMMENT_ENDING:
                    if (c === '-') {
                        parser.state = S.COMMENT_ENDED;
                        parser.comment = textopts(parser.opt, parser.comment);
                        if (parser.comment) emitNode(parser, 'oncomment', parser.comment);
                        parser.comment = '';
                    } else {
                        parser.comment += '-' + c;
                        parser.state = S.COMMENT;
                    }
                    continue;
                case S.COMMENT_ENDED:
                    if (c !== '>') {
                        strictFail(parser, 'Malformed comment');
                        // allow <!-- blah -- bloo --> in non-strict mode,
                        // which is a comment of " blah -- bloo "
                        parser.comment += '--' + c;
                        parser.state = S.COMMENT;
                    } else if (parser.doctype && parser.doctype !== true) parser.state = S.DOCTYPE_DTD;
                    else parser.state = S.TEXT;
                    continue;
                case S.CDATA:
                    var starti = i - 1;
                    while(c && c !== ']'){
                        c = charAt(chunk, i++);
                        if (c && parser.trackPosition) {
                            parser.position++;
                            if (c === '\n') {
                                parser.line++;
                                parser.column = 0;
                            } else parser.column++;
                        }
                    }
                    parser.cdata += chunk.substring(starti, i - 1);
                    if (c === ']') parser.state = S.CDATA_ENDING;
                    continue;
                case S.CDATA_ENDING:
                    if (c === ']') parser.state = S.CDATA_ENDING_2;
                    else {
                        parser.cdata += ']' + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.CDATA_ENDING_2:
                    if (c === '>') {
                        if (parser.cdata) emitNode(parser, 'oncdata', parser.cdata);
                        emitNode(parser, 'onclosecdata');
                        parser.cdata = '';
                        parser.state = S.TEXT;
                    } else if (c === ']') parser.cdata += ']';
                    else {
                        parser.cdata += ']]' + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.PROC_INST:
                    if (c === '?') parser.state = S.PROC_INST_ENDING;
                    else if (isWhitespace(c)) parser.state = S.PROC_INST_BODY;
                    else parser.procInstName += c;
                    continue;
                case S.PROC_INST_BODY:
                    if (!parser.procInstBody && isWhitespace(c)) continue;
                    else if (c === '?') parser.state = S.PROC_INST_ENDING;
                    else parser.procInstBody += c;
                    continue;
                case S.PROC_INST_ENDING:
                    if (c === '>') {
                        emitNode(parser, 'onprocessinginstruction', {
                            name: parser.procInstName,
                            body: parser.procInstBody
                        });
                        parser.procInstName = parser.procInstBody = '';
                        parser.state = S.TEXT;
                    } else {
                        parser.procInstBody += '?' + c;
                        parser.state = S.PROC_INST_BODY;
                    }
                    continue;
                case S.OPEN_TAG:
                    if (isMatch(nameBody, c)) parser.tagName += c;
                    else {
                        newTag(parser);
                        if (c === '>') openTag(parser);
                        else if (c === '/') parser.state = S.OPEN_TAG_SLASH;
                        else {
                            if (!isWhitespace(c)) strictFail(parser, 'Invalid character in tag name');
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.OPEN_TAG_SLASH:
                    if (c === '>') {
                        openTag(parser, true);
                        closeTag(parser);
                    } else {
                        strictFail(parser, 'Forward-slash in opening tag not followed by >');
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.ATTRIB:
                    // haven't read the attribute name yet.
                    if (isWhitespace(c)) continue;
                    else if (c === '>') openTag(parser);
                    else if (c === '/') parser.state = S.OPEN_TAG_SLASH;
                    else if (isMatch(nameStart, c)) {
                        parser.attribName = c;
                        parser.attribValue = '';
                        parser.state = S.ATTRIB_NAME;
                    } else strictFail(parser, 'Invalid attribute name');
                    continue;
                case S.ATTRIB_NAME:
                    if (c === '=') parser.state = S.ATTRIB_VALUE;
                    else if (c === '>') {
                        strictFail(parser, 'Attribute without value');
                        parser.attribValue = parser.attribName;
                        attrib(parser);
                        openTag(parser);
                    } else if (isWhitespace(c)) parser.state = S.ATTRIB_NAME_SAW_WHITE;
                    else if (isMatch(nameBody, c)) parser.attribName += c;
                    else strictFail(parser, 'Invalid attribute name');
                    continue;
                case S.ATTRIB_NAME_SAW_WHITE:
                    if (c === '=') parser.state = S.ATTRIB_VALUE;
                    else if (isWhitespace(c)) continue;
                    else {
                        strictFail(parser, 'Attribute without value');
                        parser.tag.attributes[parser.attribName] = '';
                        parser.attribValue = '';
                        emitNode(parser, 'onattribute', {
                            name: parser.attribName,
                            value: ''
                        });
                        parser.attribName = '';
                        if (c === '>') openTag(parser);
                        else if (isMatch(nameStart, c)) {
                            parser.attribName = c;
                            parser.state = S.ATTRIB_NAME;
                        } else {
                            strictFail(parser, 'Invalid attribute name');
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
                        if (!parser.opt.unquotedAttributeValues) error(parser, 'Unquoted attribute value');
                        parser.state = S.ATTRIB_VALUE_UNQUOTED;
                        parser.attribValue = c;
                    }
                    continue;
                case S.ATTRIB_VALUE_QUOTED:
                    if (c !== parser.q) {
                        if (c === '&') parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                        else parser.attribValue += c;
                        continue;
                    }
                    attrib(parser);
                    parser.q = '';
                    parser.state = S.ATTRIB_VALUE_CLOSED;
                    continue;
                case S.ATTRIB_VALUE_CLOSED:
                    if (isWhitespace(c)) parser.state = S.ATTRIB;
                    else if (c === '>') openTag(parser);
                    else if (c === '/') parser.state = S.OPEN_TAG_SLASH;
                    else if (isMatch(nameStart, c)) {
                        strictFail(parser, 'No whitespace between attributes');
                        parser.attribName = c;
                        parser.attribValue = '';
                        parser.state = S.ATTRIB_NAME;
                    } else strictFail(parser, 'Invalid attribute name');
                    continue;
                case S.ATTRIB_VALUE_UNQUOTED:
                    if (!isAttribEnd(c)) {
                        if (c === '&') parser.state = S.ATTRIB_VALUE_ENTITY_U;
                        else parser.attribValue += c;
                        continue;
                    }
                    attrib(parser);
                    if (c === '>') openTag(parser);
                    else parser.state = S.ATTRIB;
                    continue;
                case S.CLOSE_TAG:
                    if (!parser.tagName) {
                        if (isWhitespace(c)) continue;
                        else if (notMatch(nameStart, c)) {
                            if (parser.script) {
                                parser.script += '</' + c;
                                parser.state = S.SCRIPT;
                            } else strictFail(parser, 'Invalid tagname in closing tag.');
                        } else parser.tagName = c;
                    } else if (c === '>') closeTag(parser);
                    else if (isMatch(nameBody, c)) parser.tagName += c;
                    else if (parser.script) {
                        parser.script += '</' + parser.tagName + c;
                        parser.tagName = '';
                        parser.state = S.SCRIPT;
                    } else {
                        if (!isWhitespace(c)) strictFail(parser, 'Invalid tagname in closing tag');
                        parser.state = S.CLOSE_TAG_SAW_WHITE;
                    }
                    continue;
                case S.CLOSE_TAG_SAW_WHITE:
                    if (isWhitespace(c)) continue;
                    if (c === '>') closeTag(parser);
                    else strictFail(parser, 'Invalid characters in closing tag');
                    continue;
                case S.TEXT_ENTITY:
                case S.ATTRIB_VALUE_ENTITY_Q:
                case S.ATTRIB_VALUE_ENTITY_U:
                    var returnState;
                    var buffer;
                    switch(parser.state){
                        case S.TEXT_ENTITY:
                            returnState = S.TEXT;
                            buffer = 'textNode';
                            break;
                        case S.ATTRIB_VALUE_ENTITY_Q:
                            returnState = S.ATTRIB_VALUE_QUOTED;
                            buffer = 'attribValue';
                            break;
                        case S.ATTRIB_VALUE_ENTITY_U:
                            returnState = S.ATTRIB_VALUE_UNQUOTED;
                            buffer = 'attribValue';
                            break;
                    }
                    if (c === ';') {
                        var parsedEntity = parseEntity(parser);
                        if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                            parser.entity = '';
                            parser.state = returnState;
                            parser.write(parsedEntity);
                        } else {
                            parser[buffer] += parsedEntity;
                            parser.entity = '';
                            parser.state = returnState;
                        }
                    } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) parser.entity += c;
                    else {
                        strictFail(parser, 'Invalid character in entity name');
                        parser[buffer] += '&' + parser.entity + c;
                        parser.entity = '';
                        parser.state = returnState;
                    }
                    continue;
                default:
                    throw new Error(parser, 'Unknown state: ' + parser.state);
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
            if (!length) return '';
            var result = '';
            while(++index < length){
                var codePoint = Number(arguments[index]);
                if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                codePoint < 0 || // not a valid Unicode code point
                codePoint > 0x10ffff || // not a valid Unicode code point
                floor(codePoint) !== codePoint // not an integer
                ) throw RangeError('Invalid code point: ' + codePoint);
                if (codePoint <= 0xffff) // BMP code point
                codeUnits.push(codePoint);
                else {
                    // Astral code point; split in surrogate halves
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    codePoint -= 0x10000;
                    highSurrogate = (codePoint >> 10) + 0xd800;
                    lowSurrogate = codePoint % 0x400 + 0xdc00;
                    codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                    result += stringFromCharCode.apply(null, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        /* istanbul ignore next */ if (Object.defineProperty) Object.defineProperty(String, 'fromCodePoint', {
            value: fromCodePoint,
            configurable: true,
            writable: true
        });
        else String.fromCodePoint = fromCodePoint;
    })();
})(exports);

},{"e8399c94bace2e95":"bCaf4","55cad32d9fc3850b":"aJQJv"}],"7pzB6":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.7
(function() {
    "use strict";
    exports.stripBOM = function(str) {
        if (str[0] === '\uFEFF') return str.substring(1);
        else return str;
    };
}).call(this);

},{}],"bXwqK":[function(require,module,exports,__globalThis) {
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
        return str.replace(prefixMatch, '');
    };
    exports.parseNumbers = function(str) {
        if (!isNaN(str)) str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
        return str;
    };
    exports.parseBooleans = function(str) {
        if (/^(?:true|false)$/i.test(str)) str = str.toLowerCase() === 'true';
        return str;
    };
}).call(this);

},{}],"4WXpF":[function(require,module,exports,__globalThis) {
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

},{"55080a345f0b7464":"fHzFu"}],"fHzFu":[function(require,module,exports,__globalThis) {
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

},{"96b87729426a727d":"euskh"}],"fnawR":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('v-card-title', {
                        staticClass: "headline"
                    }, [
                        _vm._v("Add Device ")
                    ]),
                    _vm._v(" "),
                    _c('v-card-text', [
                        _c('v-text-field', {
                            attrs: {
                                "placeholder": "Device Name"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        }),
                        _vm._v(" "),
                        _c('md-field', [
                            _c('label', [
                                _vm._v("Import Main.xml in GFX folder")
                            ]),
                            _vm._v(" "),
                            _c('md-file', {
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
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"kjAeP":[function() {},{}],"5pBeb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eihl9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2dd9e1a0f786e21e");
    if (script.__esModule) script = script.default;
    script.render = require("4c8fb8d05c9c9f57").render;
    script.staticRenderFns = require("4c8fb8d05c9c9f57").staticRenderFns;
    script._scopeId = "data-v-003efd";
    script.__cssModules = require("234bec5758f896dd").default;
    require("2011a440eee41cc7").default(script);
    script.__scopeId = 'data-v-003efd';
    script.__file = "addDeviceProfiles.vue";
};
initialize();
exports.default = script;

},{"2dd9e1a0f786e21e":"e8qWD","4c8fb8d05c9c9f57":"56Lzl","234bec5758f896dd":"6dluC","2011a440eee41cc7":"g3V1n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e8qWD":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"56Lzl":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('v-card-title', {
                        staticClass: "headline"
                    }, [
                        _vm._v("Add Device Profile\n                ")
                    ]),
                    _vm._v(" "),
                    _c('v-card-text', [
                        _c('v-text-field', {
                            attrs: {
                                "placeholder": "Name"
                            },
                            on: {
                                "change": _vm.onNameChange
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"6dluC":[function() {},{}],"g3V1n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"FlcsI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5b4b078fcac16043");
    if (script.__esModule) script = script.default;
    script.render = require("9bf3bc0da4475b32").render;
    script.staticRenderFns = require("9bf3bc0da4475b32").staticRenderFns;
    script._scopeId = "data-v-e338ff";
    script.__cssModules = require("f268865a932ec739").default;
    require("1bc64a3f4626a812").default(script);
    script.__scopeId = 'data-v-e338ff';
    script.__file = "itemList.vue";
};
initialize();
exports.default = script;

},{"5b4b078fcac16043":"25mlx","9bf3bc0da4475b32":"KrZzc","f268865a932ec739":"dv6pi","1bc64a3f4626a812":"c1PUO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"25mlx":[function(require,module,exports,__globalThis) {
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
                'md-invalid': !this.invalidFieldName
            };
        },
        requiredClass2 () {
            return {
                'md-invalid': !this.invalidFieldType
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
                            name: 'tempTab',
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","../constants":"QRW6U","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","dns":"eoH60","c634301d3a218b3b":"egTXY","8f80c5bb1c24c1e5":"dXUyc","c41c6681cd16eff1":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"KrZzc":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('div', [
                        _c('md-table', {
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
                                        return _c('md-table-row', {
                                            attrs: {
                                                "md-selectable": "single"
                                            }
                                        }, [
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Item name",
                                                    "md-sort-by": "Item name"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.name))
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Maitre",
                                                    "md-sort-by": "Maitre"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.maitre))
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Item Type",
                                                    "md-sort-by": "Item Type"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.itemType))
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Monitoring"
                                                }
                                            }, [
                                                _c('md-button', {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onMonitoring(item);
                                                        }
                                                    }
                                                }, [
                                                    _c('md-icon', [
                                                        _vm._v("menu")
                                                    ])
                                                ], 1)
                                            ], 1),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "BIM Naming Convention",
                                                    "md-edit": "true",
                                                    "md-sort-by": "BIM Naming Convention"
                                                }
                                            }, [
                                                _vm._v(_vm._s(item.namingConvention))
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Details"
                                                }
                                            }, [
                                                _c('md-button', {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onDetails(item);
                                                        }
                                                    }
                                                }, [
                                                    _c('md-icon', [
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
                            _c('md-table-toolbar', {
                                attrs: {
                                    "max-width": "1200"
                                }
                            }, [
                                _c('h1', {
                                    staticClass: "md-title"
                                }, [
                                    _vm._v("Item List")
                                ]),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "buttonExport",
                                    on: {
                                        "click": _vm.exportJSON
                                    }
                                }, [
                                    _vm._v("Export JSON")
                                ]),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "buttonImportBOG",
                                    on: {
                                        "click": _vm.importBOGFile
                                    }
                                }, [
                                    _vm._v("Import BOG file")
                                ]),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "md-icon-button md-raised md-accent",
                                    on: {
                                        "click": _vm.clearItemList
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("delete_forever")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c('v-card-actions', [
                        _c('v-btn', {
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
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('md-button', {
                            staticClass: "md-icon-button md-dense md-raised md-primary",
                            attrs: {
                                "flat": ""
                            },
                            on: {
                                "click": _vm.onAdd
                            }
                        }, [
                            _c('md-icon', [
                                _vm._v("add")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('v-btn', {
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
                    _c('md-dialog', {
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
                        _c('md-dialog-title', [
                            _vm._v("Add Item")
                        ]),
                        _vm._v(" "),
                        _c('md-content', [
                            _vm._v(" Fill in this form to add an Item")
                        ]),
                        _vm._v(" "),
                        _c('md-field', {
                            class: _vm.requiredClass1
                        }, [
                            _c('label', [
                                _vm._v("Item Name...")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
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
                            _c('span', {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: L_1")
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-error"
                            }, [
                                _vm._v(" Required ")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('md-field', {
                            class: _vm.requiredClass2
                        }, [
                            _c('label', [
                                _vm._v("Item Type...")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
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
                            _c('span', {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: Lamp")
                            ]),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-error"
                            }, [
                                _vm._v(" Required ")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('md-checkbox', {
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
                        _c('md-field', [
                            _c('label', [
                                _vm._v("BIM Naming Convention...")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
                                model: {
                                    value: _vm.item_added.namingConvention,
                                    callback: function($$v) {
                                        _vm.$set(_vm.item_added, "namingConvention", $$v);
                                    },
                                    expression: "item_added.namingConvention"
                                }
                            }),
                            _vm._v(" "),
                            _c('span', {
                                staticClass: "md-helper-text"
                            }, [
                                _vm._v("Ex: L_1")
                            ])
                        ], 1),
                        _vm._v(" "),
                        _c('v-card-actions', [
                            _c('v-spacer'),
                            _vm._v(" "),
                            _c('v-btn', {
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
                            _c('v-btn', {
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
                    _c('md-dialog-alert', {
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
                    _c('md-dialog', {
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
                        _c('md-dialog-title', [
                            _vm._v("Import BOG File")
                        ]),
                        _vm._v(" "),
                        _c('md-content', [
                            _vm._v(" Import xml file from BOG")
                        ]),
                        _vm._v(" "),
                        _c('md-field', [
                            _c('label', [
                                _vm._v("xml file")
                            ]),
                            _vm._v(" "),
                            _c('md-file', {
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
                        _c('v-card-actions', [
                            _c('v-spacer'),
                            _vm._v(" "),
                            _c('v-btn', {
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
                            _c('v-btn', {
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

},{}],"dv6pi":[function() {},{}],"c1PUO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iC136":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("364c8a92adea29b5");
    if (script.__esModule) script = script.default;
    script.render = require("ee7747d7af65f7a8").render;
    script.staticRenderFns = require("ee7747d7af65f7a8").staticRenderFns;
    script._scopeId = "data-v-7257ce";
    script.__cssModules = require("f74438b2ff4a5f66").default;
    require("40ceb47cf7f1dd75").default(script);
    script.__scopeId = 'data-v-7257ce';
    script.__file = "ItemDetail.vue";
};
initialize();
exports.default = script;

},{"364c8a92adea29b5":"e5ifh","ee7747d7af65f7a8":"5Zmfy","f74438b2ff4a5f66":"8D9Jn","40ceb47cf7f1dd75":"d7Mkl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e5ifh":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Zmfy":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('v-card-title', {
                        staticClass: "headline"
                    }, [
                        _vm._v(_vm._s(_vm.selected) + " Item Details")
                    ]),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "infos"
                    }, [
                        _c('md-field', {
                            staticClass: "infos-details"
                        }, [
                            _c('label', [
                                _vm._v("BIM Naming Convention")
                            ]),
                            _vm._v(" "),
                            _c('md-input', {
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
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('div', {
                            staticClass: "infos-details2"
                        }, [
                            _c('md-content', [
                                _vm._v(" Master  ")
                            ]),
                            _vm._v(" "),
                            _c('md-checkbox', {
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
                    _c('md-tabs', [
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-input",
                                "md-label": "Input"
                            }
                        }, [
                            _c('div', {
                                staticClass: "tableaux"
                            }, [
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked BacnetValues (Input)\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickInputUnlink
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-field', {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            },
                                            on: {
                                                "md-clear": _vm.onClear
                                            }
                                        }, [
                                            _c('v-spacer'),
                                            _vm._v(" "),
                                            _c('md-input', {
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
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-output",
                                "md-label": "Output"
                            }
                        }, [
                            _c('div', {
                                staticClass: "tableaux"
                            }, [
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked BacnetValues (Output)\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickOutputUnlink
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-field', {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c('md-input', {
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
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"8D9Jn":[function() {},{}],"d7Mkl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jH2lY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4f813ad6049eb260");
    if (script.__esModule) script = script.default;
    script.render = require("37df58208c28b650").render;
    script.staticRenderFns = require("37df58208c28b650").staticRenderFns;
    script._scopeId = "data-v-c63626";
    script.__cssModules = require("9cd3138b72d16212").default;
    require("da62ef87d9c627cf").default(script);
    script.__scopeId = 'data-v-c63626';
    script.__file = "monitoringDetails.vue";
};
initialize();
exports.default = script;

},{"4f813ad6049eb260":"fUxNo","37df58208c28b650":"gek3i","9cd3138b72d16212":"5njI7","da62ef87d9c627cf":"jZ2xh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fUxNo":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","../constants":"QRW6U","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","dns":"eoH60","d2df551a275423bd":"egTXY","6e779d4c57305c04":"dXUyc","c52b3cd527806b36":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gek3i":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('div', [
                        _c('md-table', {
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
                                        return _c('md-table-row', {
                                            attrs: {
                                                "md-selectable": "single"
                                            }
                                        }, [
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Generic Name",
                                                    "md-sort-by": "Generic Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.generic_name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Name",
                                                    "md-sort-by": "Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Item Name"
                                                }
                                            }, [
                                                _vm._v("\n                " + _vm._s(item.item_name) + "\n              ")
                                            ]),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Interval Time"
                                                }
                                            }, [
                                                _c('md-field', [
                                                    _c('md-select', {
                                                        model: {
                                                            value: item.intervalTime,
                                                            callback: function($$v) {
                                                                _vm.$set(item, "intervalTime", $$v);
                                                            },
                                                            expression: "item.intervalTime"
                                                        }
                                                    }, [
                                                        _vm._l(_vm.intervalTimeList, function(item) {
                                                            return _c('li', {
                                                                key: item.value
                                                            }, [
                                                                _c('md-option', {
                                                                    attrs: {
                                                                        "value": item.value
                                                                    }
                                                                }, [
                                                                    _vm._v(_vm._s(item.value))
                                                                ])
                                                            ], 1);
                                                        }),
                                                        _vm._v(" "),
                                                        _c('div', {
                                                            staticClass: "div-add-interval-time"
                                                        }, [
                                                            _c('md-field', [
                                                                _c('md-input', {
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
                                                            _c('md-button', {
                                                                staticClass: "md-icon-button md-dense md-raised md-primary",
                                                                attrs: {
                                                                    "flat": ""
                                                                },
                                                                on: {
                                                                    "click": _vm.onAddIntervalTime
                                                                }
                                                            }, [
                                                                _c('md-icon', [
                                                                    _vm._v("add")
                                                                ])
                                                            ], 1)
                                                        ], 1)
                                                    ], 2)
                                                ], 1)
                                            ], 1),
                                            _vm._v(" "),
                                            _c('md-table-cell', {
                                                attrs: {
                                                    "md-label": "Disable Monitoring"
                                                }
                                            }, [
                                                _c('md-button', {
                                                    staticClass: "md-icon-button",
                                                    on: {
                                                        "click": function($event) {
                                                            return _vm.onDisableMonitoring(item);
                                                        }
                                                    }
                                                }, [
                                                    _c('md-icon', [
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
                            _c('md-table-toolbar', {
                                attrs: {
                                    "max-width": "1200"
                                }
                            }, [
                                _c('h1', {
                                    staticClass: "md-title"
                                }, [
                                    _vm._v("Endpoints Monitoring Configuration")
                                ]),
                                _vm._v(" "),
                                _c('md-button', {
                                    staticClass: "md-icon-button md-raised md-accent",
                                    on: {
                                        "click": _vm.clearMonitoringConfiguration
                                    }
                                }, [
                                    _c('md-icon', [
                                        _vm._v("delete_forever")
                                    ])
                                ], 1)
                            ], 1)
                        ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"5njI7":[function() {},{}],"jZ2xh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8HX5y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("2e15e1988329631f");
    if (script.__esModule) script = script.default;
    script.render = require("1ea9d8efdc1ba6da").render;
    script.staticRenderFns = require("1ea9d8efdc1ba6da").staticRenderFns;
    script._scopeId = "data-v-a58993";
    script.__cssModules = require("7b8c4eeb3551659b").default;
    require("ffc63e92c991ad68").default(script);
    script.__scopeId = 'data-v-a58993';
    script.__file = "itemSupervision.vue";
};
initialize();
exports.default = script;

},{"2e15e1988329631f":"bXkZW","1ea9d8efdc1ba6da":"6TGVm","7b8c4eeb3551659b":"88yoF","ffc63e92c991ad68":"4Yfb8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bXkZW":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6TGVm":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('v-card-title', {
                        staticClass: "headline"
                    }, [
                        _vm._v(_vm._s(_vm.selected) + " Item Supervision")
                    ]),
                    _vm._v(" "),
                    _c('md-tabs', [
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-input",
                                "md-label": "Measure"
                            }
                        }, [
                            _c('div', {
                                staticClass: "tableaux"
                            }, [
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Measures\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickMeasuresUnlink
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-field', {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c('v-spacer'),
                                            _vm._v(" "),
                                            _c('md-input', {
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
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-output",
                                "md-label": "Alarms"
                            }
                        }, [
                            _c('div', {
                                staticClass: "tableaux"
                            }, [
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Alarms\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickAlarmsUnlink
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-field', {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c('md-input', {
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
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-commands",
                                "md-label": "Commands"
                            }
                        }, [
                            _c('div', {
                                staticClass: "tableaux"
                            }, [
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("\n                      Linked Commands\n                    ")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-button', {
                                            staticClass: "md-icon-button md-raised md-accent",
                                            attrs: {
                                                "flat": ""
                                            },
                                            on: {
                                                "click": _vm.onClickCommandsUnlink
                                            }
                                        }, [
                                            _c('md-icon', [
                                                _vm._v("link_off")
                                            ])
                                        ], 1)
                                    ], 1),
                                    _vm._v(" "),
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "multiple",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                                _c('div', {
                                    staticClass: "bloc-table"
                                }, [
                                    _c('md-toolbar', {
                                        attrs: {
                                            "md-elevation": 1
                                        }
                                    }, [
                                        _c('span', {
                                            staticClass: "md-title"
                                        }, [
                                            _vm._v("Available BacnetValues")
                                        ]),
                                        _vm._v(" "),
                                        _c('v-spacer'),
                                        _vm._v(" "),
                                        _c('md-field', {
                                            staticClass: "md-toolbar-section-end",
                                            attrs: {
                                                "md-clearable": ""
                                            }
                                        }, [
                                            _c('v-spacer'),
                                            _vm._v(" "),
                                            _c('md-input', {
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
                                    _c('md-table', {
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
                                                    return _c('md-table-row', {
                                                        attrs: {
                                                            "md-selectable": "single",
                                                            "md-auto-select": ""
                                                        }
                                                    }, [
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Network Values",
                                                                "md-sort-by": "title"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.title) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
                                                            attrs: {
                                                                "md-label": "Name",
                                                                "md-sort-by": "name"
                                                            }
                                                        }, [
                                                            _vm._v(_vm._s(item.name) + "\n                      ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c('md-table-cell', {
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
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"88yoF":[function() {},{}],"4Yfb8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gmKW9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("85c5dd683474f147");
    if (script.__esModule) script = script.default;
    script.render = require("1ca31e4d192d6554").render;
    script.staticRenderFns = require("1ca31e4d192d6554").staticRenderFns;
    script._scopeId = "data-v-1ffe44";
    script.__cssModules = require("db1f7abccf9fd12d").default;
    require("8207fadf98624cb2").default(script);
    script.__scopeId = 'data-v-1ffe44';
    script.__file = "globalSupervision.vue";
};
initialize();
exports.default = script;

},{"85c5dd683474f147":"apHXQ","1ca31e4d192d6554":"lMEwi","db1f7abccf9fd12d":"2B6fl","8207fadf98624cb2":"lbOwn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"apHXQ":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","../constants":"QRW6U","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","dns":"eoH60","a1f2d8f4eb40b224":"egTXY","d69d382e9b4ec67b":"dXUyc","35e0cb197a28ef16":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lMEwi":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-app', [
        _c('v-layout', {
            attrs: {
                "row": "",
                "justify-center": ""
            }
        }, [
            _c('v-dialog', {
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
                _c('v-card', {
                    attrs: {
                        "dark": true
                    }
                }, [
                    _c('md-tabs', [
                        _c('md-tab', {
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
                            _c('md-table', {
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
                                            return _c('md-table-row', {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Item Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.item_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Interval Time"
                                                    }
                                                }, [
                                                    _c('md-field', [
                                                        _c('md-select', {
                                                            model: {
                                                                value: item.intervalTime,
                                                                callback: function($$v) {
                                                                    _vm.$set(item, "intervalTime", $$v);
                                                                },
                                                                expression: "item.intervalTime"
                                                            }
                                                        }, [
                                                            _vm._l(_vm.intervalTimeList.measures, function(item) {
                                                                return _c('li', {
                                                                    key: item.value
                                                                }, [
                                                                    _c('md-option', {
                                                                        attrs: {
                                                                            "value": item.value
                                                                        }
                                                                    }, [
                                                                        _vm._v(_vm._s(item.value))
                                                                    ])
                                                                ], 1);
                                                            }),
                                                            _vm._v(" "),
                                                            _c('div', {
                                                                staticClass: "div-add-interval-time"
                                                            }, [
                                                                _c('md-field', [
                                                                    _c('md-input', {
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
                                                                _c('md-button', {
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
                                                                    _c('md-icon', [
                                                                        _vm._v("add")
                                                                    ])
                                                                ], 1)
                                                            ], 1)
                                                        ], 2)
                                                    ], 1)
                                                ], 1),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Disable Monitoring"
                                                    }
                                                }, [
                                                    _c('md-button', {
                                                        staticClass: "md-icon-button",
                                                        on: {
                                                            "click": function($event) {
                                                                return _vm.onDisableMonitoring(item);
                                                            }
                                                        }
                                                    }, [
                                                        _c('md-icon', [
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
                                _c('md-table-toolbar', {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c('h1', {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Measures Supervision Configuration")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-button', {
                                        staticClass: "md-icon-button md-raised md-accent",
                                        on: {
                                            "click": function($event) {
                                                return _vm.clearMeasuresSupervisionConfiguration();
                                            }
                                        }
                                    }, [
                                        _c('md-icon', [
                                            _vm._v("delete_forever")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-alarms",
                                "md-label": "Alarms"
                            }
                        }, [
                            _c('md-table', {
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
                                            return _c('md-table-row', {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Item Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.item_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Interval Time"
                                                    }
                                                }, [
                                                    _c('md-field', [
                                                        _c('md-select', {
                                                            model: {
                                                                value: item.intervalTime,
                                                                callback: function($$v) {
                                                                    _vm.$set(item, "intervalTime", $$v);
                                                                },
                                                                expression: "item.intervalTime"
                                                            }
                                                        }, [
                                                            _vm._l(_vm.intervalTimeList.alarms, function(item) {
                                                                return _c('li', {
                                                                    key: item.value
                                                                }, [
                                                                    _c('md-option', {
                                                                        attrs: {
                                                                            "value": item.value
                                                                        }
                                                                    }, [
                                                                        _vm._v(_vm._s(item.value))
                                                                    ])
                                                                ], 1);
                                                            }),
                                                            _vm._v(" "),
                                                            _c('div', {
                                                                staticClass: "div-add-interval-time"
                                                            }, [
                                                                _c('md-field', [
                                                                    _c('md-input', {
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
                                                                _c('md-button', {
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
                                                                    _c('md-icon', [
                                                                        _vm._v("add")
                                                                    ])
                                                                ], 1)
                                                            ], 1)
                                                        ], 2)
                                                    ], 1)
                                                ], 1),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Disable Monitoring"
                                                    }
                                                }, [
                                                    _c('md-button', {
                                                        staticClass: "md-icon-button",
                                                        on: {
                                                            "click": function($event) {
                                                                return _vm.onDisableMonitoring(item);
                                                            }
                                                        }
                                                    }, [
                                                        _c('md-icon', [
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
                                _c('md-table-toolbar', {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c('h1', {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Alarms Supervision Configuration")
                                    ]),
                                    _vm._v(" "),
                                    _c('md-button', {
                                        staticClass: "md-icon-button md-raised md-accent",
                                        on: {
                                            "click": function($event) {
                                                return _vm.clearAlarmsSupervisionConfiguration();
                                            }
                                        }
                                    }, [
                                        _c('md-icon', [
                                            _vm._v("delete_forever")
                                        ])
                                    ], 1)
                                ], 1)
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c('md-tab', {
                            attrs: {
                                "id": "tab-commands",
                                "md-label": "Commands"
                            }
                        }, [
                            _c('md-table', {
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
                                            return _c('md-table-row', {
                                                attrs: {
                                                    "md-selectable": "single"
                                                }
                                            }, [
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Generic Name",
                                                        "md-sort-by": "Generic Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.generic_name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
                                                    attrs: {
                                                        "md-label": "Name",
                                                        "md-sort-by": "Name"
                                                    }
                                                }, [
                                                    _vm._v("\n                  " + _vm._s(item.name) + "\n                ")
                                                ]),
                                                _vm._v(" "),
                                                _c('md-table-cell', {
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
                                _c('md-table-toolbar', {
                                    attrs: {
                                        "max-width": "1200"
                                    }
                                }, [
                                    _c('h1', {
                                        staticClass: "md-title"
                                    }, [
                                        _vm._v("Commands Supervision Panel")
                                    ])
                                ])
                            ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c('div')
                    ], 1),
                    _vm._v(" "),
                    _c('v-card-actions', [
                        _c('v-spacer'),
                        _vm._v(" "),
                        _c('v-btn', {
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
                        _c('v-btn', {
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

},{}],"2B6fl":[function() {},{}],"lbOwn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7RsNI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1df3fade6761ce9c");
    if (script.__esModule) script = script.default;
    script.render = require("9a97313b3d3843b").render;
    script.staticRenderFns = require("9a97313b3d3843b").staticRenderFns;
    script._scopeId = "data-v-e9dcc9";
    script.__cssModules = require("1c71f49a4fc7bfc4").default;
    require("bc75e9340295c677").default(script);
    script.__scopeId = 'data-v-e9dcc9';
    script.__file = "ShowBacnetValue.vue";
};
initialize();
exports.default = script;

},{"1df3fade6761ce9c":"akRin","9a97313b3d3843b":"iAkj3","1c71f49a4fc7bfc4":"LVNyB","bc75e9340295c677":"bcRhN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"akRin":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _networkService = require("spinal-env-viewer-plugin-network-tree/src/js/network/networkService");
var _networkServiceDefault = parcelHelpers.interopDefault(_networkService);
var _linkComponentVue = require("./links/LinkComponent.vue");
var _linkComponentVueDefault = parcelHelpers.interopDefault(_linkComponentVue);
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
        this.callback = this.generateProfilesFromDiscovery.bind(this);
        return {
            DialogGetFromDiscovery: true,
            data: [],
            networks: [],
            devices: [],
            contextSelected: undefined,
            networkSelected: undefined,
            deviceSelected: undefined,
            pageSelected: this.PAGES.selection,
            isupdatePage: false
        };
    },
    methods: {
        onSave: function() {},
        onCancel: function() {
            this.DialogGetFromDiscovery = false;
        },
        generateProfilesFromDiscovery: async function(nodeId, contextId, deviceSelected, networkSelected, contextSelected) {
            try {
                //await DeviceHelper.generateBacNetValues(nodeId, result);
                await (0, _deviceHelper.DeviceHelper).generateBacNetValuesFromDiscovery(nodeId, contextId, deviceSelected, networkSelected, contextSelected);
                await (0, _deviceHelper.DeviceHelper).generateItem_list(nodeId);
                await (0, _deviceHelper.DeviceHelper).generateSupervisionGraph(nodeId);
            } catch (error) {
                console.error("Error generating profiles from discovery:", error);
            }
        },
        removed: async function(save) {
            if (save) //DeviceHelper.generateBacNetValuesFromDiscovery(this.deviceSelected, this.nodeId, this.contextId );
            // this.generateProfilesFromDiscovery();
            {
                if (this.callback) await this.callback(this.nodeId, this.contextId, this.deviceSelected, this.networkSelected, this.contextSelected);
            }
            //console.log("save : ", save);
            this.DialogGetFromDiscovery = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        opened (option) {
            //this.DialogGetFromDiscovery = true;
            this.pageSelected = this.PAGES.loading;
            this.contextId = option.contextId;
            this.nodeId = option.nodeId;
            this.isAutomate = option.isAutomate;
            if (option.callback) {
                this.callback = option.callback;
                this.isupdatePage = true;
            }
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-plugin-network-tree/src/js/network/networkService":"hL1nh","./links/LinkComponent.vue":"gafeZ","../build/DeviceHelper":"hLZpu","367a192de1de63e3":"LUhzz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hL1nh":[function(require,module,exports,__globalThis) {
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

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-model-bmsnetwork":"haihS","spinal-model-bacnet":"aS2yR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gafeZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("bf697103ea9ab7f5");
    if (script.__esModule) script = script.default;
    script.render = require("82e784f8b4a3d93a").render;
    script.staticRenderFns = require("82e784f8b4a3d93a").staticRenderFns;
    script._scopeId = "data-v-e7b848";
    script.__cssModules = require("f8f23141d193d9e5").default;
    require("e6a757ef2435c199").default(script);
    script.__scopeId = 'data-v-e7b848';
    script.__file = "LinkComponent.vue";
};
initialize();
exports.default = script;

},{"bf697103ea9ab7f5":"4R2AW","82e784f8b4a3d93a":"9tsjF","f8f23141d193d9e5":"fIBWl","e6a757ef2435c199":"innL1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4R2AW":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"./linkToGroupTemplate.vue":"jcnar","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jcnar":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d4966a7bbc193142");
    if (script.__esModule) script = script.default;
    script.render = require("a2a8744b69190f7d").render;
    script.staticRenderFns = require("a2a8744b69190f7d").staticRenderFns;
    script._scopeId = "data-v-fa2645";
    script.__cssModules = require("7022ba685a82b2a1").default;
    require("c940503956cc622d").default(script);
    script.__scopeId = 'data-v-fa2645';
    script.__file = "linkToGroupTemplate.vue";
};
initialize();
exports.default = script;

},{"d4966a7bbc193142":"jGBkg","a2a8744b69190f7d":"7RLTK","7022ba685a82b2a1":"9TAnE","c940503956cc622d":"h7nYC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jGBkg":[function(require,module,exports,__globalThis) {
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
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7RLTK":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "subContent"
    }, [
        _c('div', {
            staticClass: "title"
        }, [
            _c('div', [
                _vm._v(_vm._s(_vm.title))
            ])
        ]),
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
                        selected: item.id === _vm.itemSelected
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

},{}],"9TAnE":[function() {},{}],"h7nYC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tsjF":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "selection_container"
    }, [
        _c('div', {
            class: _vm.isAutomate ? 'section' : 'middle'
        }, [
            _c('link-template', {
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
        _c('div', {
            class: _vm.isAutomate ? 'section' : 'middle'
        }, [
            _c('link-template', {
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
        _vm.isAutomate ? _c('div', {
            staticClass: "section"
        }, [
            _c('link-template', {
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

},{}],"fIBWl":[function() {},{}],"innL1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iAkj3":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Get bacnetValues from discovery")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "content"
        }, [
            _vm.pageSelected === _vm.PAGES.selection ? _c('link-component', {
                attrs: {
                    "context_title": 'Contexts',
                    "category_title": 'Subnetworks',
                    "group_title": 'Bms devices',
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
            }) : _vm.pageSelected === _vm.PAGES.loading ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-progress-spinner', {
                    attrs: {
                        "md-mode": "indeterminate"
                    }
                })
            ], 1) : _vm.pageSelected === _vm.PAGES.error ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("error_outline")
                ])
            ], 1) : _vm.pageSelected === _vm.PAGES.success ? _c('div', {
                staticClass: "state"
            }, [
                _c('md-icon', {
                    staticClass: "md-size-5x"
                }, [
                    _vm._v("done")
                ])
            ], 1) : _vm._e()
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
                on: {
                    "click": function($event) {
                        return _vm.closeDialog(true);
                    }
                }
            }, [
                _vm._v(_vm._s(_vm.isupdatePage ? 'Update' : 'Discover'))
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"LVNyB":[function() {},{}],"bcRhN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"heSqR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("5907cb16917523a7");
    if (script.__esModule) script = script.default;
    script.render = require("9676fccf61ee5e64").render;
    script.staticRenderFns = require("9676fccf61ee5e64").staticRenderFns;
    script._scopeId = "data-v-528881";
    script.__cssModules = require("fe1bba2623e362fa").default;
    require("f4b0df95f01c4ce5").default(script);
    script.__scopeId = 'data-v-528881';
    script.__file = "updateDeviceProfile.vue";
};
initialize();
exports.default = script;

},{"5907cb16917523a7":"2sxXR","9676fccf61ee5e64":"iXaBX","fe1bba2623e362fa":"hfI9S","f4b0df95f01c4ce5":"2K2TS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2sxXR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
var _spinalEnvViewerPluginDocumentationService = require("spinal-env-viewer-plugin-documentation-service");
var _spinalEnvViewerPluginDocumentationServiceDefault = parcelHelpers.interopDefault(_spinalEnvViewerPluginDocumentationService);
var _spinalModelBmsnetwork = require("spinal-model-bmsnetwork");
// import { endpointTypes } from '../constants';
var _selectItemsComponentVue = require("./selectItemsComponent.vue");
var _selectItemsComponentVueDefault = parcelHelpers.interopDefault(_selectItemsComponentVue);
var _lodash = require("lodash");
var _constants = require("../constants");
var scriptExports = {
    name: "UpdateDeviceProfile",
    props: [
        "onFinised"
    ],
    components: {
        selectItemsComponent: (0, _selectItemsComponentVueDefault.default)
    },
    data () {
        this.STATES = {
            selection: "selection",
            loading: "loading",
            error: "error",
            success: "success"
        };
        return {
            showDialog: true,
            nodeId: null,
            contextId: null,
            deviceSelected: null,
            networkSelected: null,
            contextSelected: null,
            state: this.STATES.selection,
            endpointsToCreate: [],
            endpointsToRemove: [],
            count: {
                toCreate: 0,
                toRemove: 0
            },
            bacnetValueNode: null,
            nodeTypesNodes: []
        };
    },
    methods: {
        async opened (option) {
            this.state = this.STATES.loading;
            this.nodeId = option.nodeId;
            this.contextId = option.contextId;
            this.deviceSelected = option.deviceSelected;
            this.networkSelected = option.networkSelected;
            this.contextSelected = option.contextSelected;
            const actualEndpoints = await this._getAllEndpointInBmsDevice(this.deviceSelected, this.contextSelected);
            const actualsProfileItems = await this._getAllItemsInDeviceProfile(this.nodeId, this.contextId);
            const { endpointsToCreate, endpointsToRemove } = await this._getDifferences(actualEndpoints, actualsProfileItems);
            this.endpointsToCreate = endpointsToCreate;
            this.endpointsToRemove = endpointsToRemove;
            this.state = this.STATES.selection;
        },
        removed: async function(save) {
            save;
            this.showDialog = false;
        },
        closeDialog (closeResult) {
            if (typeof this.onFinised === "function") this.onFinised(closeResult);
        },
        UpdateProfile: function() {
            this.state = this.STATES.loading;
            const toCreate = this.endpointsToCreate.filter((endpoint)=>endpoint.checked);
            const toRemove = this.endpointsToRemove.filter((endpoint)=>endpoint.checked);
            this.count.toCreate = toCreate.length || 0;
            this.count.toRemove = toRemove.length || 0;
            const promises = [
                this.createItemsInProfile(this.nodeId, this.contextId, toCreate),
                this.removeItemsFromProfile(this.nodeId, this.contextId, toRemove)
            ];
            return Promise.all(promises).then((result)=>{
                this.state = this.STATES.success;
            }).catch((err)=>{
                console.error(err);
                this.state = this.STATES.error;
            });
        },
        // getEndpointType: function (typeId) {
        //     const type = endpointTypes[typeId];
        //     return type || "Unknown";
        // },
        createItemsInProfile: async function(nodeId, contextId, toCreate) {
            if (!this.bacnetValueNode) this.bacnetValueNode = await this._createBacnetValuesNode(nodeId, contextId);
            const obj = _lodash.groupBy(toCreate, "typeId");
            const promises = [];
            for(const key in obj){
                const typeName = (0, _constants.endpointTypes)[key];
                promises.push(this._createItemInProfileTypeNode(typeName, obj[key], contextId));
            }
            return Promise.all(promises);
        },
        selectAllToCreate: function() {
            this.endpointsToCreate.forEach((endpoint)=>this.$set(endpoint, "checked", true));
        },
        deselectAllToCreate: function() {
            this.endpointsToCreate.forEach((endpoint)=>this.$set(endpoint, "checked", false));
        },
        selectAllToRemove: function() {
            this.endpointsToRemove.forEach((endpoint)=>this.$set(endpoint, "checked", true));
        },
        deselectAllToRemove: function() {
            this.endpointsToRemove.forEach((endpoint)=>this.$set(endpoint, "checked", false));
        },
        removeItemsFromProfile: function(nodeId, contextId, toRemove) {
            if (!this.bacnetValueNode) return Promise.resolve([]);
            const obj = _lodash.groupBy(toRemove, "typeId");
            const promises = [];
            for(const key in obj){
                const typeName = (0, _constants.endpointTypes)[key];
                const typeNode = this.nodeTypesNodes.find((node)=>node.name.get() === typeName);
                if (typeNode) promises.push(this._removeItemsFromTypeNode(typeNode, obj[key]));
            }
            return Promise.all(promises);
        },
        _createItemInProfileTypeNode: async function(typeName, endpoints, contextId) {
            let typeNode = this.nodeTypesNodes.find((node)=>node.name.get() === typeName);
            if (!typeNode) typeNode = await this._createTypeNodeInBacnetValuesNode(typeName, contextId);
            const promises = endpoints.map((endpoint)=>this._createEndpointItem(endpoint, typeNode, contextId));
            return Promise.all(promises);
        },
        _createEndpointItem: function(endpoint, typeNode, contextId) {
            const groupInfo = (0, _constants.bacnetGroupInfo)[typeNode.name.get()];
            const endpointId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: endpoint.name,
                type: groupInfo.childType
            });
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(typeNode.id.get(), endpointId, contextId, groupInfo.childRelationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)).then((result)=>{
                return this._addAttributesToNode(endpointId, endpoint, groupInfo.childType);
            });
        },
        _removeItemsFromTypeNode: function(typeNode, items) {
            const promises = items.map((item)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).removeFromGraph(item.id));
            return Promise.all(promises);
        },
        _createTypeNodeInBacnetValuesNode: async function(typeName, contextId) {
            if (!this.bacnetValueNode) this.bacnetValueNode = await this._createBacnetValuesNode(this.nodeId, contextId);
            const groupInfo = (0, _constants.bacnetGroupInfo)[typeName];
            if (!groupInfo) throw new Error(`Cannot create type node for type name : ${typeName}`);
            const typeNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: typeName,
                type: groupInfo.nodeType
            });
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(this.bacnetValueNode.id.get(), typeNodeId, contextId, groupInfo.parentRelationName, (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)).then(()=>{
                const typeNode = (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(typeNodeId);
                this.nodeTypesNodes.push(typeNode);
                return typeNode;
            });
        },
        _createBacnetValuesNode: function(parentId, contextId) {
            const bacnetNodeId = (0, _spinalEnvViewerGraphService.SpinalGraphService).createNode({
                name: "BacnetValues",
                type: "bacnetValues"
            });
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).addChildInContext(parentId, bacnetNodeId, contextId, "hasBacnetValues", (0, _spinalEnvViewerGraphService.SPINAL_RELATION_PTR_LST_TYPE)).then(()=>{
                return (0, _spinalEnvViewerGraphService.SpinalGraphService).getInfo(bacnetNodeId);
            });
        },
        _getDifferences: async function(actualEndpoints, actualsProfileItems) {
            const endpointsToCreate = {};
            const endpointsToRemove = Object.assign({}, actualsProfileItems);
            for(const key in actualEndpoints)if (!actualsProfileItems[key]) endpointsToCreate[key] = actualEndpoints[key];
            else delete endpointsToRemove[key];
            return {
                endpointsToCreate: Object.values(endpointsToCreate),
                endpointsToRemove: Object.values(endpointsToRemove)
            };
        },
        _getAllItemsInDeviceProfile: async function(profileId, contextId) {
            const profileItems = await this._getProfileItems(profileId, contextId);
            return this._convertProfileItemsToObj(profileItems);
        },
        _getAllEndpointInBmsDevice: async function(deviceId, contextId) {
            const endpoints = {};
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(deviceId, contextId, (node)=>{
                if (node.getType().get() === (0, _spinalModelBmsnetwork.SpinalBmsEndpoint).nodeTypeName) {
                    (0, _spinalEnvViewerGraphService.SpinalGraphService)._addNode(node);
                    const typeId = node.info.typeId.get();
                    const networkId = node.info.idNetwork.get();
                    const key = `${typeId}_${networkId}`;
                    endpoints[key] = node.info.get();
                    return true;
                }
                return false;
            }).then(()=>{
                return endpoints;
            });
        },
        _getBacnetValuesNode: async function(profileId) {
            const bacnetValuesNodes = await (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildren(profileId, [
                "hasBacnetValues"
            ]);
            return bacnetValuesNodes[0];
        },
        _getBacnetValuesTypesNode: function(bacnetValuesNodeId, contextId) {
            return (0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(bacnetValuesNodeId, contextId);
        },
        _getProfileItems: async function(profileId, contextId) {
            let bacnetValueNode = await this._getBacnetValuesNode(profileId);
            if (!bacnetValueNode) return [];
            this.bacnetValueNode = bacnetValueNode; // store bacnet value node for later use
            const typesNodes = await this._getBacnetValuesTypesNode(bacnetValueNode.id.get(), contextId);
            this.nodeTypesNodes = typesNodes; // store bacnet value type nodes for later use
            const promises = typesNodes.map((typeNode)=>(0, _spinalEnvViewerGraphService.SpinalGraphService).getChildrenInContext(typeNode.id.get(), contextId));
            return Promise.allSettled(promises).then((result)=>{
                const items = [];
                for (const res of result)if (res.status === "fulfilled") items.push(...res.value.map((node)=>node.get()));
                return items;
            });
        },
        _convertProfileItemsToObj: async function(profileItems) {
            const profileItemsObj = {};
            const promises = profileItems.map((item)=>this._getItemAttributes(item));
            return Promise.allSettled(promises).then((results)=>{
                for(let i = 0; i < results.length; i++){
                    const res = results[i];
                    const profileItem = profileItems[i];
                    if (res.status === "fulfilled") {
                        const typeId = res.value["typeId"];
                        const idNetwork = parseInt(res.value["IDX"]) + 1; // IDX is 0 based in profile do we need +1
                        const key = `${typeId}_${idNetwork}`;
                        profileItemsObj[key] = {
                            ...profileItem,
                            typeId,
                            idNetwork
                        };
                    }
                }
                return profileItemsObj;
            });
        },
        _getItemAttributes: async function(item) {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(item.id);
            const attributes = await (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).getAttributesByCategory(node, "default");
            return attributes.reduce((obj, attr)=>{
                obj[attr.label.get()] = attr.value.get();
                return obj;
            }, {});
        },
        _addAttributesToNode: function(endpointId, endpoint, childtype) {
            const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(endpointId);
            // create name attribute first, to do not duplicate category
            return (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategoryName(node, "default", "NAME", endpoint.name).then((result)=>{
                const attributes = [
                    {
                        label: "type",
                        value: childtype
                    },
                    {
                        label: "typeId",
                        value: endpoint.typeId
                    },
                    {
                        label: "IDX",
                        value: endpoint.idNetwork - 1
                    },
                    {
                        label: "unit",
                        value: endpoint.unit || ""
                    }
                ];
                const promises = attributes.map((attr)=>{
                    return (0, _spinalEnvViewerPluginDocumentationServiceDefault.default).addAttributeByCategoryName(node, "default", attr.label, attr.value);
                });
                return Promise.all(promises);
            });
        },
        getSuccessDescription () {
            return `${this.count.toCreate} endpoint(s) created, ${this.count.toRemove} endpoint(s) removed.`;
        }
    },
    computed: {
        disableUpdateBtn () {
            if (this.state !== this.STATES.selection) return true;
            const toCreateChecked = this.endpointsToCreate.some((endpoint)=>endpoint.checked);
            const toRemoveChecked = this.endpointsToRemove.some((endpoint)=>endpoint.checked);
            return !(toCreateChecked || toRemoveChecked);
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-plugin-documentation-service":"cP9kK","spinal-model-bmsnetwork":"haihS","./selectItemsComponent.vue":"c6Nkz","lodash":"LUhzz","../constants":"QRW6U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c6Nkz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("625c29d5fe0ec95");
    if (script.__esModule) script = script.default;
    script.render = require("64fb54adf010bf85").render;
    script.staticRenderFns = require("64fb54adf010bf85").staticRenderFns;
    script._scopeId = "data-v-a74a11";
    script.__cssModules = require("a8018f52f799be35").default;
    require("5693cad0be57e6fa").default(script);
    script.__scopeId = 'data-v-a74a11';
    script.__file = "selectItemsComponent.vue";
};
initialize();
exports.default = script;

},{"625c29d5fe0ec95":"iAOSv","64fb54adf010bf85":"Vurxq","a8018f52f799be35":"j9ytf","5693cad0be57e6fa":"eAdx2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iAOSv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../constants");
var scriptExports = {
    name: "selectItemsComponent",
    props: {
        title: {
            type: String,
            required: true
        },
        endpoints: {
            type: Array,
            required: true
        }
    },
    methods: {
        getEndpointType: function(typeId) {
            const type = (0, _constants.endpointTypes)[typeId];
            return type || "Unknown";
        },
        selectAll: function() {
            this.$emit('selectAll');
        },
        deselectAll: function() {
            this.$emit('deselectAll');
        }
    }
};
var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;
exports.default = options; // parcel transformer vue2 compiler hack

},{"../constants":"QRW6U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Vurxq":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', {
        staticClass: "section"
    }, [
        _c('div', {
            staticClass: "header",
            attrs: {
                "title": "Endpoint to create in profile"
            }
        }, [
            _c('div', {
                staticClass: "title"
            }, [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        ")
            ]),
            _vm._v(" "),
            _c('div', {
                staticClass: "actions"
            }, [
                _c('md-button', {
                    staticClass: "md-icon-button md-primary",
                    attrs: {
                        "title": "select all"
                    },
                    on: {
                        "click": _vm.selectAll
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("toggle_on")
                    ])
                ], 1),
                _vm._v(" "),
                _c('md-button', {
                    staticClass: "md-icon-button",
                    attrs: {
                        "title": "deselect all"
                    },
                    on: {
                        "click": _vm.deselectAll
                    }
                }, [
                    _c('md-icon', [
                        _vm._v("toggle_off")
                    ])
                ], 1)
            ], 1)
        ]),
        _vm._v(" "),
        _c('div', {
            staticClass: "listContent"
        }, [
            _c('md-list', {
                staticClass: "md-double-line"
            }, _vm._l(_vm.endpoints, function(endpoint, index) {
                return _c('md-list-item', {
                    key: index
                }, [
                    _c('md-checkbox', {
                        staticClass: "md-primary",
                        model: {
                            value: endpoint.checked,
                            callback: function($$v) {
                                _vm.$set(endpoint, "checked", $$v);
                            },
                            expression: "endpoint.checked"
                        }
                    }),
                    _vm._v(" "),
                    _c('div', {
                        staticClass: "md-list-item-text"
                    }, [
                        _c('span', [
                            _vm._v(_vm._s(endpoint.name))
                        ]),
                        _vm._v(" "),
                        _c('span', [
                            _vm._v("\n                        type : " + _vm._s(_vm.getEndpointType(endpoint.typeId)) + " - id : " + _vm._s(endpoint.idNetwork) + "\n                    ")
                        ])
                    ])
                ], 1);
            }), 1)
        ], 1)
    ]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"j9ytf":[function() {},{}],"eAdx2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iXaBX":[function(require,module,exports,__globalThis) {
var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('md-dialog', {
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
        _c('md-dialog-title', {
            staticClass: "dialogTitle"
        }, [
            _vm._v("Update bacnetValues from discovery")
        ]),
        _vm._v(" "),
        _c('md-dialog-content', {
            staticClass: "mdDialogContent"
        }, [
            _vm.state === _vm.STATES.selection ? _c('div', {
                staticClass: "content"
            }, [
                _c('selectItemsComponent', {
                    attrs: {
                        "title": "select endpoint to create in profile",
                        "endpoints": _vm.endpointsToCreate
                    },
                    on: {
                        "selectAll": _vm.selectAllToCreate,
                        "deselectAll": _vm.deselectAllToCreate
                    }
                }),
                _vm._v(" "),
                _c('selectItemsComponent', {
                    attrs: {
                        "title": "select endpoint to remove from profile",
                        "endpoints": _vm.endpointsToRemove
                    },
                    on: {
                        "selectAll": _vm.selectAllToRemove,
                        "deselectAll": _vm.deselectAllToRemove
                    }
                })
            ], 1) : _vm.state === _vm.STATES.loading ? _c('md-progress-spinner', {
                attrs: {
                    "md-mode": "indeterminate"
                }
            }) : _vm.state === _vm.STATES.success ? _c('md-empty-state', {
                staticClass: "md-success",
                attrs: {
                    "md-icon": "done",
                    "md-label": "All done!",
                    "md-description": _vm.getSuccessDescription()
                }
            }) : _vm.state === _vm.STATES.error ? _c('md-empty-state', {
                staticClass: "md-accent",
                attrs: {
                    "md-rounded": "",
                    "md-icon": "error_outline",
                    "md-label": "Nothing in Reminders",
                    "md-description": "Something went wrong!"
                }
            }, [
                _c('md-button', {
                    staticClass: "md-primary md-raised",
                    on: {
                        "click": _vm.UpdateProfile
                    }
                }, [
                    _vm._v("Try again")
                ])
            ], 1) : _vm._e()
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
                    "disabled": _vm.disableUpdateBtn
                },
                on: {
                    "click": _vm.UpdateProfile
                }
            }, [
                _vm._v("\n            Update profile\n        ")
            ])
        ], 1)
    ], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

},{}],"hfI9S":[function() {},{}],"2K2TS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPv6v":[function(require,module,exports,__globalThis) {
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

},{"spinal-model-graph":"b87gp","spinal-env-viewer-graph-service":"9LAk7","spinal-env-viewer-context-menu-service":"3h19D","../build/DeviceHelper":"hLZpu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lx2xO":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'deviceProfileContext') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel() {
        spinalPanelManagerService.openPanel("DialogAddDeviceProfiles");
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","92d0e3f02107f1fa":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"icY8G":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'deviceProfile') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogAddDevices", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","240032a2c4b91b36":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9R4rJ":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'device' && relationName[0] === 'hasFiles') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        const node = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRealNode(option.selectedNode.get().id);
        const directory = await (0, _fileExplorer.FileExplorer).getDirectory(node);
        await (0, _fileExplorer.FileExplorer).downloadFile(directory[0]);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","../FileExplorer":"f5b6J","e10657674a1def4d":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g3Uaa":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'device' && relationName[0] === 'hasFiles') return Promise.resolve(true);
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

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","e8a3f5da5b83bf04":"egTXY","bf642c48f12047f2":"dXUyc","7f167fac481a2a2a":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1K5EZ":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'itemList') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogItemList", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","ec1a8d717a2123e4":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"S5MUm":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'item') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    openPanel(option) {
        spinalPanelManagerService.openPanel("DialogItemDetail", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","e97230c01d47694b":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jXBxP":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'itemList') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        await (0, _deviceHelper.DeviceHelper).saveProfileAsJson(option.selectedNode.get().id);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","f9b8fe12ee1c5b9d":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8mTbk":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'deviceMonitoring') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        // spinalPanelManagerService.openPanel( "DialogMonitoring", option);
        option.ACCESS_FROM = "Button_Monitoring_Configuration";
        spinalPanelManagerService.openPanel("DialogMonitoringDetails", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","9bbbc775d98cd902":"egTXY","a99de6e7aad88a57":"dXUyc","822a51155b8501ec":"eoH60","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"OzkMI":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'item') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        console.log(option);
        // await DeviceHelper.itemSupervisionInputOutput(option.selectedNode);
        spinalPanelManagerService.openPanel("DialogItemSupervision", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","../build/DeviceHelper":"hLZpu","e219b2de0c0dc9bf":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9oppn":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'globalDeviceSupervision') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    async openPanel(option) {
        console.log(option);
        // await DeviceHelper.itemSupervisionInputOutput(option.selectedNode);
        console.log("ok");
        spinalPanelManagerService.openPanel("DialogGlobalSupervision", option);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","../build/DeviceHelper":"hLZpu","42cf0b7021a2754e":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lDRsF":[function(require,module,exports,__globalThis) {
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
        if (option.selectedNode.type.get() === 'device' && relationName[0] !== 'hasFiles') return Promise.resolve(true);
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
        let ctx = (0, _spinalEnvViewerGraphService.SpinalGraphService).getContextWithType('Network');
        let startID = ctx[0].info.id.get();
        let child = await (0, _spinalEnvViewerGraphService.SpinalGraphService).findInContext(startID, ctx[0].info.id.get(), (elt)=>elt.info.type.get() == 'BmsDevice');
        console.log(child.name._data);
    }
}

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","../build/DeviceHelper":"hLZpu","../FileExplorer":"f5b6J","ff4a495c16a8129b":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5TMbj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonUpdateProfileGenerated", ()=>ButtonUpdateProfileGenerated);
var _spinalEnvViewerContextMenuService = require("spinal-env-viewer-context-menu-service");
var _spinalEnvViewerGraphService = require("spinal-env-viewer-graph-service");
const { spinalPanelManagerService } = require("eb3ea823b2cc1242");
class ButtonUpdateProfileGenerated extends (0, _spinalEnvViewerContextMenuService.SpinalContextApp) {
    constructor(){
        super("Update Profile Generated", "Update Profile Generated description", {
            icon: "update",
            icon_type: "in",
            backgroundColor: "#0000FF",
            fontColor: "#FFFFFF"
        });
    }
    isShown(option) {
        let relationName = (0, _spinalEnvViewerGraphService.SpinalGraphService).getRelationNames(option.selectedNode.id.get());
        if (option.selectedNode.type.get() === 'device' && relationName[0] !== 'hasFiles') return Promise.resolve(true);
        else return Promise.resolve(-1);
    }
    action(option) {
        let contextId = option.context.id.get();
        let nodeId = option.selectedNode.id.get();
        spinalPanelManagerService.openPanel("DialogGetFromDiscovery", {
            contextId,
            nodeId,
            callback: (nodeId, contextId, deviceSelected, networkSelected, contextSelected)=>{
                spinalPanelManagerService.openPanel("DialogUpdateDeviceProfile", {
                    contextId,
                    nodeId,
                    deviceSelected,
                    networkSelected,
                    contextSelected
                });
            }
        });
    }
}
console.log("load ButtonUpdateProfileGenerated");

},{"spinal-env-viewer-context-menu-service":"3h19D","spinal-env-viewer-graph-service":"9LAk7","eb3ea823b2cc1242":"egTXY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hebpI":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=spinal-env-viewer-plugin-device_profile.dc0e7750.js.map
